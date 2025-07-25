# Add Bluetooth-only Devices

## Feature Description

Bluetooth-only devices cannot directly connect to the platform and can only be bound to the app through searching devices nearby for nearby use. The Wi-Fi SSID and password are not required during the device addition process.

```objc
QuecDevicePairingService
```

Device addition process:

1. Add a network provisioning listener.
2. Call *scanWithFilier()* and get the discovered devices through the network provisioning listener callback.
3. Select the discovered device and call *startPairingWithDevices()* to add the device.
4. Obtain the device addition status (successful/failed) through the network provisioning listener callback.
5. After completing the device addition, remove the network provisioning listener.

## Feature List

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
| peripheral                | CBPeripheral | Peripheral.   |
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

Set the BLE network provisioning timeout time. Range: 30–60. Default value: 60. Unit: second.

```objc
- (BOOL)setBlePairingDuration:(int)duration;
```

**Parameter**

| Parameter | Required | Description             |
| --------- | -------- | ----------------------- |
| duration  | Y        | Time out. Unit: second. |

**Example**

```objc
[QuecDevicePairingService.sharedInstance setBlePairingDuration:30];
```

