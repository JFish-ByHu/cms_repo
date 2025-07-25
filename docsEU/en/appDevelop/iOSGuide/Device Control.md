# Device Control

## Feature Description

> The device control feature provides device control, connection, and disconnection of device channels. 
>
> It supports the following channel connections:
>
> 1. Cloud channel (WebSocket)
> 2. Wi-Fi LAN channel
> 3. BLE channel
>
> When a device connects to the platform, the WebSocket channel will be established by default.
>
> When connecting to a device in the default mode, the connection priority is: cloud > Wi-Fi > BLE.
>
> > See QuecDeviceModel Definition in [Device Management](Device%20Management.md).

## Device Control

### Initialize Device

Initialize the device control class according to the device ID.

**API**

>Only after you call the interface for obtaining the device list can the device initialization be successful. If the QuecDeviceClient object is required in the business layer, you also need to call the initialization interface.

```objc
/// Returns the QuecDevice instance. If the current user does not have this device, a value of nil is returned.
/// @param deviceId deviceModel.deviceId
+ (nullable instancetype)deviceWithId:(NSString *)deviceId;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| deviceId |	Y| Property in QuecDeviceModel. Custom format: pk@dk. Example, "p00001@AABBCCDD0001". |

**Example**

```objc
QuecDeviceClient *device = [QuecDeviceClient deviceWithId:deviceModel.deviceId];
device.delegate = self;
/// Default auto mode
[device connect];
```

### Listen to Device Status

>After QuecDeviceClientDelegate protocol is implemented, you need to handle updates such as refreshing the online/offline status of devices and updating UI elements.

**Example**

```objc
/// Device information updates, such as the name and online status.
/// @param device The device instance.
- (void)deviceInfoUpdate:(QuecDeviceClient *)device;

/// Device online status updates
/// @param device device instance.
/// @param onlineState  device channel online state （0: all offline, 1: websocket online, 2 : wifi online, 3: wifi + websocket online, 4: ble online, 5: websocket + ble online, 6: ble + wifi online , 7: wifi + ble + ws online)
- (void)device:(QuecDeviceClient *)device onlineUpdate:(NSUInteger)onlineState;

/// Device connecting state updates
/// @param device device instance.
/// @param connectingState  device channel online state （0: all offline, 1: websocket online, 2 : wifi online, 3: wifi + websocket online, 4: ble online, 5: websocket + ble online, 6: ble + wifi online , 7: wifi + ble + ws online)
- (void)device:(QuecDeviceClient *)device connectingStateUpdate:(NSUInteger)connectingState;

/// Indicates whether device is removed.
/// @param device device instance.
- (void)deviceRemoved:(QuecDeviceClient *)device;

/// The DP updates.
/// @param device device instance.
/// @param dps  command dictionary.
- (void)device:(QuecDeviceClient *)device dpsUpdate:(QuecIotDataPointsModel *)dps;
```

**QuecIotDataPointsModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| decodeType       | QuecIotDataDecodeType             | Use QuecIotDataDecodeTypeDecodeDPSCode by default. |
| type  | QuecIotChannelType            | Channel type. |
| action | QuecIotDataPointAction | Action type. |
| pk | NSString | ProductKey. |
| dk | NSString | DeviceKey. |
| dps | NSArray<QuecIotDataPoint*> * | DPS data. |
| originData | id | Original channel data. |
| deviceId | NSString | Device ID. |
| transparentData | NSData | Transparent transmission data. |
| resetData | NSDictionary | Device reset data. |

**QuecIotDataDecodeType Enumeration Definition**

```objc
typedef NS_ENUM(NSUInteger, QuecIotDataDecodeType) {
    QuecIotDataDecodeTypeDecodeDPSCode,
    QuecIotDataDecodeTypeDecodeDPSId,
    QuecIotDataDecodeTypeDecodeNONE,
};
```

### Connect and Disconnect Device Channel

**API**

Connect or disconnect the device channel. You need to obtain the current QuecDeviceClient object first.

```objc
- (void)connect;
- (void)connectWithMode:(QuecIotChannelMode)mode;
- (void)disconnect;
- (void)disconnectWithType:(QuecIotChannelType)type;
```

**QuecIotChannelMode Enumeration Definition**

```objc
typedef NS_ENUM(NSUInteger, QuecIotChannelMode)
{
    QuecIotChannelModeAuto = 0 ,
    QuecIotChannelModeWS,
    QuecIotChannelModeWifi,
    QuecIotChannelModeBle,
};
```

**QuecIotChannelType Enumeration Definition**

```objc
typedef NS_ENUM(NSUInteger, QuecIotChannelType)
{
    QuecIotChannelTypeUnknown = 0,
    QuecIotChannelTypeWS = 1,
    QuecIotChannelTypeWifi,
    QuecIotChannelTypeBle,
};
```

### Delete Device and Reset Channel Status

**API**

>Before deleting the device and resetting channel status, you need to first obtain the current QuecDeviceClient object. The following reset interface includes both unbinding from the platform and resetting the device channel status. It is recommended to use the following method when deleting a device. The unbinding interface in QuecDeviceService only removes the binding relationship.
>

#### Delete Device

**API**

```objc
- (void)remove:(nullable QuecVoidBlock)success failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
QuecDeviceClient *device = [QuecDeviceClient deviceWithId:@"device id"];
[device remove:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```
#### Delete Bluetooth-only Device

**API**

```objc
- (void)removeBtWithIsInit:(BOOL)isInit
                     random:(nullable NSString *)random
          resetCredentials:(nullable NSString *)resetCredentials
                    success:(nullable QuecVoidBlock)success
                    failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| isInit |	N|Whether to reset the device. Default value: False.	|
| random |	N| Random flag returned by the device. Required when *isInit* = True.	|
| resetCredentials |N| Reset credentials returned by the device. Required when *isInit* = True.	|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
QuecDeviceClient *device = [QuecDeviceClient deviceWithId:@"device id"];
[device removeBtWithIsInit:NO random:@"" resetCredentials:@"" success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

#### Delete Devices in Batches

**API**

```objc
+ (void)batchRemoveWithFid:(nullable NSString *)fid
                     isInit:(BOOL)isInit
                 deviceList:(NSArray<QuecDeviceModel *> *)deviceList
                    success:(nullable QuecVoidBlock)success
                   failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| fid |	N| Home ID. Required when home mode is enabled.	|
| isInit |	N|Whether to reset the device. Default value: False.	|
| deviceList |Y| QuecDeviceModel array of the devices to be deleted.	|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
QuecDeviceModel *deviceModel1 = QuecDeviceModel.new;
QuecDeviceModel *deviceModel2 = QuecDeviceModel.new;
[QuecDeviceClient batchRemoveWithFid:@"" isInit:NO deviceList:@[deviceModel1, deviceModel2] success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Issue Device Data

**API**

>Send device data to the device by assembling DPS data through the following interface.

```objc
- (void)writeDps:(NSArray<QuecIotDataPoint*> *)dps
         success:(nullable QuecVoidBlock)success
         failure:(nullable QuecErrorBlock)failure;

- (void)writeDps:(NSArray<QuecIotDataPoint*> *)dps
            mode:(QuecIotChannelMode)mode
         success:(nullable QuecVoidBlock)success
         failure:(nullable QuecErrorBlock)failure;

- (void)writeDps:(NSArray<QuecIotDataPoint*> *)dps
       extraData:(nullable QuecIotChannelExtraData *)extraData
         success:(nullable QuecVoidBlock)success
         failure:(nullable QuecErrorBlock)failure;

- (void)writeDps:(NSArray<QuecIotDataPoint*> *)dps
       extraData:(nullable QuecIotChannelExtraData *)extraData
            mode:(QuecIotChannelMode)mode
         success:(nullable QuecVoidBlock)success
         failure:(nullable QuecErrorBlock)failure;
```

**Parameter**

**QuecIotDataPoint Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| Id       | int             | Feature ID. |
| dataType  | QuecIotDataPointDataType            | Data type. |
| code | NSString | Code. |
| value | id | Value corresponding to *dataType*. |
| stringValue | NSString | High-precision values for float & double types will be written to this field. |
| min | NSString | Minimum value (no need to handle on reception). |
| max | NSString | Maximum value (no need to handle on reception). |

**QuecIotChannelExtraData Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| cacheTime       | long             | Command cache time, valid for WebSocket channel. |
| msgId  | long long            | Message ID, valid for WebSocket channel. |
| isCover | BOOL | Whether to overwrite the data sent. |
| isCache | BOOL | Whether to cache data. Default: NO. This parameter is determined by *cacheTime*. |
| sendTTLV | BOOL | Send data in TTLV format. Default: true. (Only reading/writing properties is supported, and cacheTime can be used.) |
| productKey | NSString | Device ProductKey (used by the panel to send messages to sub-devices) |
| deviceKey | NSString | DeviceKey (used by the panel to send messages to sub-devices) |
| transparentData | NSData | Transparent transmission data. |

**Example**

```objc
QuecDeviceClient *device = [QuecDeviceClient deviceWithId:@"device id"];
QuecIotDataPoint *dp = QuecIotDataPoint.new;
dp.value = @(3);
dp.dataType = QuecIotDataPointDataTypeINT;
dp.Id = 2; /// tsl id
[device writeDps:@[dp] mode:QuecIotChannelModeAuto success:^{
    /// Next Action
} failure:^(NSError * _Nonnull error) {
    NSLog(@"check error: %@", error);
}];
```

### Read Device Data

**API**

>Read device data by assembling DPS data.

```objc
- (void)readDps:(NSArray<QuecIotDataPoint*> *)dps
        success:(nullable QuecVoidBlock)success
        failure:(nullable QuecErrorBlock)failure;

- (void)readDps:(NSArray<QuecIotDataPoint*> *)dps
           mode:(QuecIotChannelMode)mode
        success:(nullable QuecVoidBlock)success
        failure:(nullable QuecErrorBlock)failure;

- (void)readDps:(NSArray<QuecIotDataPoint*> *)dps
      extraData:(nullable QuecIotChannelExtraData *)extraData
        success:(nullable QuecVoidBlock)success
        failure:(nullable QuecErrorBlock)failure;

- (void)readDps:(NSArray<QuecIotDataPoint*> *)dps
      extraData:(nullable QuecIotChannelExtraData *)extraData
           mode:(QuecIotChannelMode)mode
        success:(nullable QuecVoidBlock)success
        failure:(nullable QuecErrorBlock)failure;
```

**Parameter**

> See QuecIotDataPoint, QuecIotChannelExtraData, and QuecIotChannelMode Definitions above.

Update the UI through the DPS method of the QuecDeviceClient protocol after reading the device data.

```objc
- (void)device:(QuecDeviceClient *)device dpsUpdate:(QuecIotDataPointsModel *)dps;
```

**Example**

```objc
QuecDeviceClient *device = [QuecDeviceClient deviceWithId:@"device id"];
QuecIotDataPoint *dp = QuecIotDataPoint.new;
dp.dataType = QuecIotDataPointDataTypeINT;
dp.Id = 2; /// tsl id
[device readDps:@[dp] mode:QuecIotChannelModeAuto success:^{
    /// Next Action
} failure:^(NSError * _Nonnull error) {
    NSLog(@"check error: %@", error);
}];
```


### Send Transparent Transmission Data

**API**

Send transparent transmission data. Note that transparent transmission data can only be sent via the Bluetooth channel.

```objc
- (void)writeTransparent:(NSData *)transparentData
                 success:(nullable QuecVoidBlock)success
                 failure:(nullable QuecErrorBlock)failure;
```

**Parameter**
|Parameter| Required |Description|
| --- | --- | --- |
| transparentData |	Y| Binary data. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

```objc
QuecDeviceClient *device = [QuecDeviceClient deviceWithId:@"device id"];
NSData *sendData = [[NSData alloc] initWithBase64EncodedString:@"1234567890" options:0];
[device writeTransparent:sendData success:^{
    /// Next Action
} failure:^(NSError * _Nonnull error) {
    NSLog(@"check error: %@", error);
}];
```

## Control Devices in Batches

### Control Devices in Batches on Platform

**API**

Control devices in batches on the platform.

```objc
- (void)sendDataToDevicesByHttpWithData:(NSString *)data
                              deviceList:(NSArray<QuecBatchControlDeviceModel *> *)deviceList
                                    type:(NSInteger)type
                              extraData:(nullable QuecBatchControlExtraModel *)extraData
                                 success:(void(^)(QuecBatchControlModel *model))success
                                 failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| data | Y | JSON string in TSL format. |
| deviceList | Y | Device list. |
| type | Y | Type.<br />1: Transparent transmission<br />2: Property<br />3: Service |
| extraData | N | dataFormat type. This parameter must be specified when *type* = 1. *dataFormat* is passed within *extraData*.<br />1: Hex<br />2: Text |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecBatchControlDeviceModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| productKey  | NSString  | ProductKey. |
| deviceKey  | NSString  | DeviceKey. |
| gatewayDeviceKey  | NSString  | Gateway DeviceKey. |
| gatewayProductKey  | NSString  | Gateway ProductKey. |

**QuecBatchControlExtraModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| cacheTime  | NSInteger  | Cache time in seconds, range: 1-7776000. This parameter must be set when *isCache* is enabled. Optional parameter. |
| dataFormat  | NSInteger  | Data type. This parameter must be specified when *type* = 1. Optional parameter.<br />1: Hex<br />2: Text |
| isCache  | NSInteger  | Whether to enable caching. Optional parameter.<br />1 - Enable<br />2 - Disable (default) |
| isCover  | NSInteger  | Whether to overwrite previously sent identical commands. This parameter must be set when *isCache* is enabled. Optional parameter.<br />1 - Overwrite<br />2 - Do not overwrite (default) |
| qos  | NSInteger  | QoS level. Range: 0 or 1. Default value: 1. Optional parameter. |

**QuecBatchControlModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| successList  | NSArray<QuecBatchControlResultModel *> *  | List of successful executions. |
| failureList  | NSArray<QuecBatchControlResultModel *> *  | List of failed executions. |

**QuecBatchControlResultModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| data  | QuecBatchControlDeviceModel | Control device information. |
| ticket  | NSString  | ticket (Only valid for *successList*). |
| msg  | NSString  | Error message (Only valid for *failureList*). |

**QuecBatchControlDeviceModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| productKey  | NSString | ProductKey. |
| deviceKey  | NSString  | DeviceKey. |
| gatewayDeviceKey  | NSString  | Gateway DeviceKey. |
| gatewayProductKey  | NSString  | Gateway ProductKey. |

**Example**

```objc
QuecBatchControlExtraModel *extraModel = QuecBatchControlExtraModel.new;
extraModel.dataFormat = 1;
[QuecDeviceControlService.sharedInstance sendDataToDevicesByHttpWithData:@"[{\"read_write_float\":\"4.4\"}]"
                                                           deviceList:deviceList
                                                                 type:2
                                                            extraData:extraModel
                                                              success:^(QuecBatchControlModel * _Nonnull model) {
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```
