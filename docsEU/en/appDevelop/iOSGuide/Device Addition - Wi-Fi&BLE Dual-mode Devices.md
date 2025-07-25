# Add Wi-Fi & BLE Dual-Mode Device

## Feature Description

For Wi-Fi & BLE dual-mode devices, the App SDK can configure the Wi-Fi SSID and password via Bluetooth, allowing the device to connect to the router and subsequently connect to the platform.

Devices can also be bound via Bluetooth for nearby use (near-field control) and then configured with router information later to enable remote control. This configuration process is called device activation.

```objc
//Device network provisioning related services.
QuecDevicePairingService

//Device activation related services.
QuecDeviceVerifyService

//Online device direct addition related services.
QuecDeviceService
```

## Device Network Provisioning

Device addition process:

1. Add a network provisioning listener.
2. Call *scanWithFilier()* and get the discovered devices through the network provisioning listener callback.
3. Select the discovered device and call *startPairingWithDevices()* to add the device.
4. Obtain the device addition status (successful/failed) through the network provisioning listener callback.
5. After completing the device addition, remove the network provisioning listener.

### Start Discovering Device

**API**

Discover Bluetooth devices. Before calling this interface, it is necessary to request the Bluetooth permission.

```objc
- (void)scanWithFilier:(QuecBleFilterModel * _Nullable)filter;
```

**Parameter**

| Parameter | Required | Description   |
|------|------|---------------|
| filter | N    | Filter condition. |

**QuecBleFilterModel Definition**

| Field           | Type          | Description                    |
|-----------------|---------------|--------------------------------|
| mac      | String        | BLE MAC address. |
| pattern     | String        | Name regular rule. |
| filterType     | QuecBleFilterType        | Filter type. |

**QuecBleFilterType Enumeration Definition**

```objc
typedef enum : NSUInteger {
    QuecBleFilterTypeMacMatch, //Match the MAC address.
    QuecBleFilterTypeNamePredicate, //Match the name regular rule.
} QuecBleFilterType;
```

**Example**

```objc
QuecBleFilterModel *filter = QuecBleFilterModel.new;
filter.pattern = @"Quec";
filter.filterType = QuecBleFilterTypeNamePredicate;
[QuecDevicePairingService.sharedInstance scanWithFilier:filter];
```

### Stop Discovering Device

**API**

Stop discovering devices. It is necessary to stop discovering devices after discovering or exiting the addition process, otherwise, it may affect the normal connection of devices in the list.

```objc
- (void)stopScan;
```

**Example**

```objc
[QuecDevicePairingService.sharedInstance stopScan];
```

### Add Network Provisioning Listener

**API**

Add a network provisioning listener to monitor the network provisioning process, including scanning devices, updating the addition progress, network provisioning results, etc.

```objc
- (void)addPairingListener:(id<QuecPairingDelegate>)listener;
```

**Parameter**

| Parameter | Required | Description                    |
| --------- | -------- | ------------------------------ |
| listener  | Y        | Network provisioning listener. |

**QuecPairingDelegate Definition**

```objc
@protocol QuecPairingDelegate <NSObject>
@optional
/// pairing progress. 0-1 
- (void)didUpdatePairingStatus:(QuecPairingPeripheral *)pairingPeripheral progress:(CGFloat)progress;
/// pairing result. only resp once
- (void)didUpdatePairingResult:(QuecPairingPeripheral *)pairingPeripheral result:(BOOL)result error:(NSError *)error;
@required
/// scan resp
- (void)centralDidDiscoverPairingPeripheral:(QuecPairingPeripheral *)pairingPeripheral;
@end
```

**Example**

```objc
[QuecDevicePairingService.sharedInstance addPairingListener:self];
```

**QuecPairingPeripheral Definition**

| Field           | Type          | Description                    |
|-----------------|---------------|--------------------------------|
| deviceName      | String        | Device name.               |
| productName     | String        | Product name.              |
| productLogo     | String        | Product logo.            |
| bindingMode     | Int           | Binding mode.<br />1 - Multi-binding<br />2 - Single binding<br />3 - Alternate binding |
| activeBluetooth | boolean       | Enable prioritizing activating device via bluetooth.<br />true: Enable<br />false: Disable |
| peripheralModel       | QuecPeripheralModel | Peripheral information.    |

**QuecPeripheralModel Definition**

| Field               | Type      | Description |
|---------------------|-----------|------------------------|
| deviceId                  | String    | Device ID, determined by ProductKey and DeviceKey. |
| pk          | String    | Device ProductKey. |
| dk           | String    | DeviceKey. |
| mac                 | String    | Device MAC address. |
| name                 | String    | Device name. |
| capabilitiesBitmask | int       | Device capability. <br/>bit0=1 indicates device supports WAN remote communication capability. <br/>bit1=1 indicates device supports Wi-Fi LAN near-field communication capability. <br/>bit2=1 indicates device supports BLE near-field communication capability. <br/>bit3=1 indicates device supports Matter near-field communication capability. |
| bindStatus                | int | Binding status. |
| endpoint                | int | Platform endpoint type. |
| peripheral                | CBPeripheral | Peripheral. |
| isConfig                | BOOL | Whether the network is provisioned. |
| isBind                | BOOL | Whether a Bluetooth-only device is bound. |
| isEnableBind                | BOOL | Whether the device can be bound. |
| protocolVer                | int | Protocol version. |
| customData                | NSData | Custom device data. |

### Remove Network Provisioning Listener

**API**

Remove the network provisioning listener. After finishing the addition, it is necessary to remove the listener to prevent memory leaks.

```objc
fun removePairingListener(listener: QuecPairingListener?)
```

**Parameter**

| Parameter | Required | Description                    |
| --------- | -------- | ------------------------------ |
| listener  | Y        | Network provisioning listener. |

**Example**

```objc
QuecDevicePairingService.removePairingListener(listener)
```

### Start Adding Device

**API**

Start adding devices. After discovering the device, you can pass the device information to start the addition.

```objc
- (void)startPairingWithDevices:(NSArray<QuecPairingPeripheral *> *)pairingDevices ssid:(NSString *)ssid pwd:(NSString *)pwd;
```

**Parameter**

| Parameter | Required | Description           |
|---------|------|-----------------------|
| pairingDevices | Y    | Discovered device information. Multiple devices can be passed for addition. |
| ssid    | N    | Wi-Fi SSID.  Pass null to add Bluetooth-only devices. |
| pwd      | N    | Wi-Fi password. Pass null to add Bluetooth-only devices. |

**Example**

```objc
//Discovered device information.
[QuecDevicePairingService.sharedInstance startPairingWithDevices:@[QuecPairingPeripheral.new] ssid:@"ssid" pwd:@"ssid pwd"];
```

### Stop Adding Device

**API**

Stop adding devices. For devices that have not been successfully added, you can call this interface to stop the addition.

```objc
- (void)cancelAllDevicePairing;
```

**Example**

```objc
[QuecDevicePairingService.sharedInstance cancelAllDevicePairing];
```

### Set BLE Network Provisioning Timeout

**API**

Set the BLE network provisioning timeout time. Range: 60–120. Default value: 90. Unit: second.

设置配网超时时间(60~120,默认90秒)

```objc
- (BOOL)setWiFiPairingDuration:(int)duration;
```

**Parameter**

| Parameter | Required | Description            |
| --------- | -------- | ---------------------- |
| duration  | Y        | Timeout. Unit: second. |

**Example**

```objc
[QuecDevicePairingService.sharedInstance setWiFiPairingDuration:60];
```

## Bind Bluetooth-only Device

### Bind Device Bluetooth

The process for device Bluetooth binding is similar to the device network provisioning process. The main difference lies in the value of activeBluetooth in the QuecPairingPeripheral class when discovering devices. When this value is set to *true*, during the device addition process, it will directly perform a Bluetooth-only binding.

By default, the value of activeBluetooth in the QuecPairingPeripheral class is *false*. There are two ways to change its value to *true*:

1. Manually set the *activeBluetooth* value to *true* when calling the SDK to search for devices.
1. On the "Configure Product" page of [Developer Center](https://iot.quectelcn.com/login), enable "Prioritize Activating Device via Bluetooth".

After successfully adding the device, you can obtain device information through the get device list interface and normally connect and control the device.

## Activate Device

For Bluetooth-only devices, you can use the device activation feature to obtain device information and normally connect and control them.

This type of device can be identified by the isOnlySupportBt() method in the QuecDeviceModel obtained from the device list. If this method returns *true*, it indicates that the device can be activated.

Device activation process:

1. Add an activation status listener.
2. Call the interface to start activation.
3. Obtain the device activation status (success/failed) through the activation listener callback.
4. After completing the device activation, remove the activation listener.

### Add Activation Status Listener

**API**

Add an activation status listener. This should be called before activation starts.

```objc
- (void)addVerifyListener:(id<QuecVerifyDelegate>)listener;
```

**Parameter**

| Parameter | Required | Description                 |
| --------- | -------- | --------------------------- |
| listener  | Y        | Activation status listener. |

**QuecVerifyDelegate Definition**

```objc
@protocol QuecVerifyDelegate <NSObject>
/*
    deviceModel: The current activating device.
*/
- (void)didStartVerifyingDevice:(QuecDeviceModel *)deviceModel;
/*
    deviceModel: The current activating device.
    result: Activation result.
    error: Error message.
*/
- (void)didUpdateVerifyResult:(QuecDeviceModel *)deviceModel result:(BOOL)result error:(NSError *)error;
@end
```

See QuecDeviceModel Definition in [Device Management](Device Management.md)

**QuecVerifyErrorCode Enumeration Definition**

```objc
typedef enum : NSInteger {
    QuecVerifyCommon = 0,        //Activation failed. General failure.
    QuecVerifyConnectFailure,    //Activation failed. Device connection failed.
    QuecVerifyAlreadyVerifyed,   //Device already activated.
    QuecVerifyNotFound,          //Activation failed. Device not found.
    QuecVerifyNotVerifyed,       //Activation failed. Device not authenticated (query timeout).
    QuecVerifyWiFiInfoError,     //Wi-Fi SSID not set.
} QuecVerifyErrorCode;
```

**Example**

```objc
[QuecDeviceVerifyService.sharedInstance addVerifyListener:self];
```

### Remove Activation Status Listener

**API**

Remove the activation status listener. After completing the activation, it is necessary to remove the listener to prevent memory leaks.

```objc
- (void)removeVerifyListener:(id<QuecVerifyDelegate>)listener;
```

**Parameter**

| Parameter | Required | Description                 |
| --------- | -------- | --------------------------- |
| listener  | Y        | Activation status listener. |

**Example**

```objc
[QuecDeviceVerifyService.sharedInstance removeVerifyListener:self];
```

### Start Activating Device

**API**

Start activating a device or devices in batches. Note that during the activation state, no other operations can be performed on the device.

```objc
- (void)startVerifyByDevices:(NSArray<QuecDeviceModel *> *)devices ssid:(NSString *)ssid pwd:(NSString *)pwd;
```

**Parameter**

| Parameter | Required | Description     |
| --------- | -------- | --------------- |
| devices   | Y        | Device list.    |
| ssid      | Y        | Wi-Fi SSID.     |
| pwd       | Y        | Wi-Fi password. |

**Example**

```objc
//device is the device information obtained from the device list.
QuecDeviceModel *device = QuecDeviceModel.new;
[QuecDeviceVerifyService.sharedInstance startVerifyByDevices:@[device] ssid:@"ssid" pwd:@"ssid pwd"];
```

### Stop Activating Device

**API**

Stop activating devices. During the activation process, you can call this interface to stop the activation. This API is only valid for devices that have not been activated yet.

```objc
- (void)cancelAllDeviceVerify;
```

**Example**

```objc
[QuecDeviceVerifyService.sharedInstance cancelAllDeviceVerify];
```

## Directly Add Online Devices

For devices that have already been network provisioned and are online, you can directly add them.

### Bind Device via SN

**API**

Add a device already online by binding the device via its serial number.

```objc
- (void)bindDeviceWithSerialNumber:(NSString *)serialNumber
                        productKey:(NSString *)productKey
                        deviceName:(NSString *)deviceName
                           success:(void(^)(QuecDeviceBindSNModel *model))success
                           failure:(QuecErrorBlock)failure;
```

**Parameter**

| Parameter    | Required | Description  |
|--------------|------|--------------|
| serialNumber | Y    | Device serial number. |
| productKey   | Y    | Device ProductKey. |
| deviceName   | N    | Device name. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecDeviceService.sharedInstance bindDeviceWithSerialNumber:@"sn"
                                                      productKey:@"pk"
                                                      deviceName:@"device name"
                                                         success:^(QuecDeviceBindSNModel *model) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

**QuecDeviceBindSNModel Definition**

| Field               | Type      | Description |
|---------------------|-----------|------------------------|
| authKey                  | NSString    |  AuthenticationKey.  |
| pk          | String    | Device ProductKey. |
| dk           | String    | DeviceKey.      |
| moduleType           | String    | Device model. |

