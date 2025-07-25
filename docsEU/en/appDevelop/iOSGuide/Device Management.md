# Device Management

## Feature Description

Device management provides operations related to device lists, device information, and device configuration.

```objc
#import <QuecDeviceKit/QuecDeviceKit.h>
///Initialization.
[QuecDeviceService sharedInstance]
```

In the device management class, you will frequently use the QuecDeviceModel class. The properties are defined as follows:

**QuecDeviceModel Definition**

| Field                  | Type                 | Description                                                  |
| ---------------------- | -------------------- | ------------------------------------------------------------ |
| accessType             | String               | 0-Directly connected device<br />1-Gateway <br />2-Sub-device |
| activeTime             | String               | Activation time.                                             |
| activeTimeTs           | long                 | Activation timestamp.                                        |
| authKey                | String               | AuthorizationKey.                                            |
| deviceBindTime         | String               | Device binding time.                                         |
| deviceBindTimeTs       | long                 | Device binding timestamp.                                    |
| deviceCreateTime       | String               | Device creation time.                                        |
| deviceKey              | String               | DeviceKey.                                                   |
| deviceName             | String               | Device name.                                                 |
| deviceStatus           | String               | Device online status.<br />Offline<br />Online               |
| onlineStatus           | int                  | Device online status.<br />0-Offline <br />1-Online          |
| deviceType             | int                  | Device type.<br />1 Owned device<br />2 Shared device        |
| invaildTime            | String               | Expiration time.                                             |
| invaildTimeTs          | long                 | Expiration timestamp.                                        |
| lastConnTime           | String               | Last connection time.                                        |
| lastConnTimeTs         | String               | Last connection timestamp.                                   |
| locateType             | String               | Supported positioning types.                                 |
| ownerUid               | String               | User ID of the sharer.                                       |
| phone                  | String               | Bound phone number.                                          |
| productKey             | String               | ProductKey.                                                  |
| productName            | String               | Product name.                                                |
| protocol               | String               | Connection protocol.                                         |
| uid                    | String               | Bound user ID.                                               |
| userName               | String               | Bound user nickname.                                         |
| verified               | String               | Whether device binding is authenticated. <br />0 - Unauthenticated<br />1 - Authenticated |
| signalStrength         | String               | Signal strength.                                             |
| status                 | int                  | Binding status.<br />1 - Normal<br />2 - Invalid             |
| lastOfflineTime        | String               | Offline time.                                                |
| lastOfflineTimeTs      | long                 | Offline timestamp.                                           |
| btPwd                  | String               | Bluetooth password.                                          |
| bindType               | String               | Binding type.<br />1 - SN binding<br />2 - Wi-Fi binding<br />3 - PKDK binding<br />4 - Bluetooth binding |
| authCode               | String               | Authorization code.                                          |
| logoImage              | String               | Product logo.                                                |
| sn                     | String               | Serial number.                                               |
| productIcon            | String               | Product image.                                               |
| upgradeStatus          | int                  | OTA status.<br />0 - Not upgraded<br />1 - Upgrading<br />2 - Successful upgrade<br />3 - Upgrade failed |
| userConfirmStatus      | int                  | User confirmation status for an OTA upgrade.                 |
| planId                 | long                 | Plan ID.                                                     |
| capabilitiesBitmask    | int                  | Device channel capability mask.                              |
| bindMode               | int                  | Binding mode.<br />1 - Multi-binding<br />2 - Single binding<br />3 - Alternate binding |
| deviceId               | String               | Unique device identifier, determined by ProductKey and DeviceKey. |
| onlineChannelState     | int                  | Channel online/offline status, including near-field and Websocket connection. |
| connectingChannelState | int                  | Channel connecting status.                                   |
| isMatter               | int                  | Whether it is a Matter device.<br />0 - No<br />1 - Yes      |
| networkType            | String               | Network type.<br />1 - Wi-Fi<br />2 - Cellular<br />3 - NB-IoT<br />5 - Bluetooth |
| matterInfo             | QuecDeviceMatterMeta | Matter metadata.                                             |
| firstItemCode          | String               | Primary category code.                                       |
| firstItemName          | String               | Primary category name.                                       |
| secondItemCode         | String               | Secondary category code.                                     |
| secondItemName         | String               | Secondary category name.                                     |
| lowPowerProduct        | boolean              | Whether it is a low-power product.                           |
| lowPowerStatus         | boolean              | Whether the low-power mode is enabled.                       |
| lowPowerCache          | int                  | Cache duration in low-power mode. Unit: second.              |
| isCommonUsed           | boolean              | Whether the device is commonly used.                         |
| fid                    | String               | Home ID.                                                     |
| frid                   | String               | Room ID.                                                     |
| roomName               | String               | Room name.                                                   |
| shareCode              | String               | Share code.                                                  |
| isShared               | boolean              | Whether it is a shared device.                               |
| gdid                   | String               | Group ID.                                                    |
| isGroupDevice          | boolean              | Whether it is a group device.                                |
| groupDeviceDeviceNum   | int                  | Number of devices in the group.                              |
| dps                    | NSDictionary         | DPS data.                                                    |
| bindingCode            | String               | Binding code.                                                |
| btLastUseTime          | long                 | Last Bluetooth usage time (millisecond timestamp).           |
| lowPowerAlive          | int                  | Heartbeat interval in low-power mode. Unit: minute.          |
| aiCapabilityStatus     | boolean              | Whether it supports AI capabilities.                         |

## Device Management

### Get Device List

**API**

Get a list of devices. You need to call the binding interface to associate the device and user relationship first.

```objc
- (void)getDeviceListWithParams:(QuecDeviceListParamsModel *)params 
                         success:(void(^)(NSArray<QuecDeviceModel *> *list, NSInteger total))success
                         failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| params |	Y|QuecDeviceListParamsModel类 |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecDeviceListParamsModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| pageNumber       | NSInteger             | Page number. (Required) |
| pageSize  | NSInteger            | Page size. (Required) |
| isAssociation | BOOL | Device association management parameter. (Optional) |
| secondItemCode  | NSString            | Secondary category parameter. (Optional) |
| pkList  | NSString            | ProductKey list, separated by commas. (Optional) |
| deviceName  | NSString            | Device name \- used for searching devices. (Optional) |

>See QuecDeviceModel Definition above.

**Example**

```objc
QuecDeviceListParamsModel *paramsModel = QuecDeviceListParamsModel.new;
paramsModel.deviceName = @"searchKey";
paramsModel.pageNumber = 1;
paramsModel.pageSize = pageSize;
[QuecDeviceService.sharedInstance getDeviceListWithParams:paramsModel success:^(NSArray<QuecDeviceModel *> *list, NSInteger total) {
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Query Whether Device Can Be Bound

**API**

Query whether the user can bind the device.

```objc
- (void)getDeviceInfoBindingWithProductKey:(NSString *)productKey
                                   deviceKey:(NSString *)deviceKey
                           checkExistInCloud:(BOOL)checkExistInCloud
                                     success:(void(^)(QuecDeviceBindInfoModel *bindInfoModel))success
                                     failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| productKey | Y | ProductKey. |
| deviceKey | N | DeviceKey. |
| checkExistInCloud | N | Verify whether the device exists in the platform. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecDeviceBindInfoModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| activeBluetooth       | BOOL             | Whether prioritizing activating the device via Bluetooth is enabled.<br />true - Enabled<br />false - Disbled |
| productName  | NSString            | Product name. |
| productLogo  | NSString            | Product image. |
| bindingMode  | int            | Binding mode.<br />1 - Multi-binding<br />2 - Single binding<br />3 - Alternate binding |

**Example**

```objc
[QuecDeviceService.sharedInstance getDeviceInfoBindingWithProductKey:@"pk"
                                                            deviceKey:@""
                                                    checkExistInCloud:NO
                                                        success:^(QuecDeviceBindInfoModel  *bindInfoModel) {
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Bind Device via SN

**API**

Bind a device via the serial number.

```objc
- (void)bindDeviceWithSerialNumber:(NSString *)serialNumber
                        productKey:(NSString *)productKey
                        deviceName:(NSString *)deviceName
                           success:(void(^)(QuecDeviceBindSNModel *model))success
                           failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| serialNumber | Y | Device SN. |
| productKey | Y | ProductKey. |
| deviceName | N | Device name. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecDeviceBindSNModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| authKey       | NSString             | AuthenticationKey. |
| dk  | NSString            | DeviceKey. |
| pk  | NSString            | ProductKey. |
| moduleType  | NSString            | Device model. |

**Example**

```objc
[QuecDeviceService.sharedInstance bindDeviceWithSerialNumber:@"sn" productKey:@"pk" deviceName:@"name" success:^(QuecDeviceBindSNModel *model) {
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Bind Device via authCode

**API**

Bind a device via the Authentication Code (applicable to Wi-Fi/Wi-Fi + Bluetooth devices).

```objc
- (void)bindWifiDeviceWithAuthCode:(NSString *)authCode
                        productKey:(NSString *)productKey
                         deviceKey:(NSString *)deviceKey
                        deviceName:(NSString *)deviceName
               capabilitiesBitmask:(NSInteger)capabilitiesBitmask
                           success:(void(^)(QuecDeviceBindAuthCodeModel *model))success
                           failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| authCode | Y | Device Authentication Code. |
| productKey | Y | ProductKey. |
| deviceKey | Y | DeviceKey. |
| deviceName | N | Device name. |
| capabilitiesBitmask | N | Device network connection capability. Refer to QuecIotChannelBitMask. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecDeviceBindAuthCodeModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| authKey       | NSString             | AuthenticationKey. |
| productLogo  | NSString            | Product image. |
| productName  | NSString            | Product name. |
| bindingMode  | NSString            | Binding mode.<br />1 - Multi-binding<br />2 - Single binding<br />3 - Alternate binding |

**Example**

```objc
[QuecDeviceService.sharedInstance bindWifiDeviceWithAuthCode:@"authCode"
                                                        productKey:@"productKey"
                                                        deviceKey:@"deviceKey"
                                                        deviceName:@"deviceName"
                                                capabilitiesBitmask:0
                                                            success:^(QuecDeviceBindAuthCodeModel *model) {
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Bind Bluetooth-only Device

**API**

Bind a device via the Authentication Code + password (applicable to Bluetooth-only devices).

```objc
- (void)bindPureBtDeviceWithEncryptedBindingCode:(NSString *)encryptedBindingCode
                                      productKey:(NSString *)productKey
                                       deviceKey:(NSString *)deviceKey
                                        password:(NSString *)password
                                          random:(NSString *)random
                                      deviceName:(NSString *)deviceName
                                  isCommonDevice:(BOOL)isCommonDevice
                             capabilitiesBitmask:(NSInteger)capabilitiesBitmask
                       encryptedNewBindingSecret:(NSString *)encryptedNewBindingSecret
                       encryptedOldBindingSecret:(NSString *)encryptedOldBindingSecret
                                         success:(QuecVoidBlock)success
                                         failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| encryptedBindingCode | Y | Encrypted binding code. |
| productKey | Y | ProductKey. |
| deviceKey | Y | DeviceKey. |
| password | N | Device password. |
| random | Y | Random value returned by the device. |
| deviceName | N | Device name. |
| isCommonDevice | Y | Whether to add the device into the common list. |
| capabilitiesBitmask | N | Device network connection capability. Refer to QuecIotChannelBitMask. |
| encryptedNewBindingSecret | Y | New encrypted bindingSecret. |
| encryptedOldBindingSecret | N | Old encrypted bindingSecret. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[[QuecDeviceService sharedInstance] bindPureBtDeviceWithEncryptedBindingCode:@"encryptedBindingCode"
                                                     productKey:@"pk"
                                                      deviceKey:@"dk"
                                                       password:@""
                                                         random:@"random"
                                                     deviceName:@"deviceName"
                                                 isCommonDevice:YES
                                            capabilitiesBitmask:4
                                      encryptedNewBindingSecret:@"encryptedNewBindingsecret" 
                                      encryptedOldBindingSecret:@"encryptedOldBindingsecret" 
                                                         success:^{
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Edit Device Name

**API**

Edit a device name.

```objc
- (void)updateDeviceName:(NSString *)deviceName 
               productKey:(NSString *)productKey
                deviceKey:(NSString *)deviceKey
                  success:(QuecVoidBlock)success
                  failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| deviceName | Y | Device name. |
| productKey | Y | ProductKey. |
| deviceKey | Y | DeviceKey. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[[QuecDeviceService sharedInstance] updateDeviceName:@"deviceName" productKey:@"productKey" deviceKey:@"deviceKey" success:^{
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Get Device Details

**API**

Get device details.

```objc
- (void)getDeviceInfoByDeviceKey:(NSString *)deviceKey 
                       productKey:(NSString *)productKey
                          success:(void(^)(QuecDeviceModel *model))success
                          failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| productKey | Y | ProductKey. |
| deviceKey | Y | DeviceKey. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

>See QuecDeviceModel Definition above.

**Example**

```objc
[[QuecDeviceService sharedInstance] getDeviceInfoByDeviceKey:dk productKey:pk success:^(QuecDeviceModel *model) {
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);           
    }];
```
### Get Device TSL and Business Property

**API**

Get the device TSL model and business properties.

```objc
- (void)getProductTslAndDeviceBusinessAttributesWithProductKey:(NSString *)productKey
                                                        deviceKey:(NSString *)deviceKey
                                                        gatewayPk:(NSString *)gatewayPk
                                                        gatewayDk:(NSString *)gatewayDk
                                                         codeList:(NSString *)codeList
                                                             type:(NSString *)type
                                                       success:(void (^)(NSArray<QuecProductTSLPropertyModel *> *list))success
                                                          failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| productKey | Y | ProductKey. |
| deviceKey | Y | DeviceKey. |
| gatewayPk | N | ProductKey of the gateway. |
| gatewayDk | N | DeviceKey of the gateway. |
| codeList | N | Property ID list, used with *type*. Separate multiple properties by commas. |
| type | N | Query type, supporting single selection and multiple selection. Separate multiple types by commas. <br />1 Query basic device property<br />2 Query TSL property<br />3 Query location information |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecProductTSLPropertyModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| specs       | NSArray<QuecProductTSLSpecModel *>  *       | TSL data. |
| formatSpecs  | NSArray<QuecProductTSLSpecModel *>  *        | TSL data, the same as *specs*. |
| dataType  | NSString            | Data type. |
| attributeValue  | NSString            | Property value. |
| code  | NSString            | Code. |
| name  | NSString            | Name. |
| subType  | NSString            | Read/Write type. |
| itemId  | NSInteger            | ID. |
| sort  | NSString            | Order. |
| type  | NSString            | Type. |
| desc  | NSString            | Description. |

**QuecProductTSLSpecModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| specs       | NSArray<QuecProductTSLSpecModel *>  *       | Nested TSL data. |
| formatSpecs  | NSArray<QuecProductTSLSpecModel *>  *        | Nested TSL data, the same as *specs*. |
| dataType  | NSString            | Data type. |
| code  | NSString            | Code. |
| name  | NSString            | Name. |
| value  | NSString            | Value. |
| itemId  | NSInteger            | ID. |
| unit  | NSString            | Unit. |
| min  | NSString            | Minimum. |
| max  | NSString            | Maximum. |
| step  | NSString            | Step. |
| length  | NSString            | Text length. |
| size  | NSString            | Array size. |
| attributeValue  | id            | Property value. |

**Example**

```objc
[QuecDeviceService.sharedInstance getProductTslAndDeviceBusinessAttributesWithProductKey:@"pk"
                                                                                   deviceKey:@"dk"
                                                                                   gatewayPk:@"gatewayPk"
                                                                                   gatewayDk:@"gatewayDk"
                                                                                    codeList:@"codeList"
                                                                                        type:@"type"
                                                                                     success:^(NSArray<QuecProductTSLPropertyModel *> *list) {
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Get Device TSL Model

**API**

Get the device TSL model.

```objc
- (void)getProductTSLWithProductKey:(NSString *)productKey
                            success:(void (^)(QuecProductTSLModel *tslModel))success
                            failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| productKey | Y | ProductKey. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecProductTSLModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| profile       | QuecProductTSLProfileModel       | Profile information |
| properties  | NSArray<QuecProductTSLPropertyModel *> *       | Property. Item: QuecProductTSLPropertyModel. |
| services  | NSArray<QuecProductTSLServiceModel *> *   | Service. Item: QuecProductTSLServiceModel. |
| events  | NSArray<QuecProductTSLEventModel *> *            | Event. Item: QuecProductTSLEventModel. |

**QuecProductTSLProfileModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| productKey       | NSString       | ProductKey. |
| version  | NSString      | Version. |
| tslVersion  | NSString   | TSL model version. |

>See QuecProductTSLPropertyModel Definition above.

**QuecProductTSLServiceModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| inputData       | NSDictionary       | Service input parameter, used to describe service input data. |
| outputData  | NSDictionary      | Service output parameter, used to describe service output data. |

**QuecProductTSLEventModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| outputData  | NSDictionary      | Event output parameter, used to describe the specific output item. |

**Example**

```objc
[[QuecDeviceService sharedInstance] getProductTSLWithProductKey:@"productKey" success:^(QuecProductTSLModel *tslModel) {
        /// Next Action
    } failure:^(NSError *error) {
         NSLog(@"check error: %@", error);
    }];
```

### Get Device Business Property

**API**

Get device business properties.

```objc
- (void)getDeviceBusinessAttributesWithProductKey:(NSString *)productKey 
                                          deviceKey:(NSString *)deviceKey
                                          gatewayPk:(NSString *)gatewayPk
                                          gatewayDk:(NSString *)gatewayDk
                                           codeList:(NSString *)codeList
                                               type:(NSString *)type
                                            success:(void (^)(QuecProductTSLInfoModel *tslInfoModel))success
                                            failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| productKey | Y | ProductKey. |
| deviceKey | Y | DeviceKey. |
| gatewayPk | N | ProductKey of the gateway. |
| gatewayDk | N | DeviceKey of the gateway. |
| codeList | N | Property ID list, used with *type*. Separate multiple properties by commas. |
| type | N | Query type, supporting single selection and multiple selection. Separate multiple types by commas. <br />1 Query basic device property<br />2 Query TSL property<br />3 Query location information |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecProductTSLInfoModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| customizeTslInfo       | NSArray<QuecProductTSLCustomInfoModel *> *       | Custom TSL model data reporting list. |
| deviceLocateInfo  | QuecProductTSLLocateInfoModel      | Location information. |
| deviceData  | QuecProductTSLDataModel   | Device resource data. |
| tslResourcesInfo  | NSArray<QuecProductTSLResourceInfoModel *> *   | Resource TSL model data. |

**QuecProductTSLCustomInfoModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| abId       | NSInteger       | Feature ID. |
| dataType  | NSString      | Data type. |
| name  | NSString   | Feature name. |
| resourceCode  | NSString   | Feature code. |
| resourceValue  | NSString   | Feature value. |
| subType  | NSString   | Data operation type. |
| type  | NSString   | Feature type. |

**QuecProductTSLLocateInfoModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| createTime       | double       | Creation time. |
| deviceKey  | NSString   | DeviceKey. |
| hdop  | NSString      | Horizontal Dilution of Precision (GPS accuracy indicator). |
| lat  | NSString   | Latitude. |
| lng  | NSString   | Longitude. |
| productKey  | NSString   | ProductKey. |
| latType  | NSString   | Latitude hemisphere (N/S). |
| lngType  | NSString   | Longitude hemisphere (W/E). |
| locateRaw  | NSString   | Raw positioning data. |
| locateStatus  | NSString   | Differential/non-differential positioning status. |
| locateTime  | NSString   | Positioning time. |
| locateType  | NSString   | Positioning method type. |
| satellites  | NSString   | Number of connected satellites. |
| bdLat  | NSString   | Latitude in BD09 coordinate system. |
| bdLng  | NSString   | Longitude in BD09 coordinate system. |
| gcjLat  | NSString   | Latitude in GCJ coordinate system. |
| gcjLng  | NSString   | Longitude in GCJ coordinate system. |
| wgsLat  | NSString   | Raw GPS latitude (WGS84). |
| wgsLng  | NSString   | Raw GPS longitude (WGS84). |

**QuecProductTSLDataModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| battery       | double       | Battery level. |
| cellId  | NSInteger      | Cell ID. |
| comProtocolVer  | NSString   | Communication protocol version. |
| dataProtocolVer  | NSString   | Data protocol version. |
| deviceKey  | NSString   | DeviceKey. |
| iccid  | NSString   | ICCID. |
| lac  | NSInteger   | Location Area Code. |
| locator  | NSString   | Supported positioning method. |
| mcc  | NSString   | Mobile Country Code. |
| mcuVersion  | NSString   | MCU version. |
| memoryFree  | NSInteger   | Available storage space. |
| mnc  | NSInteger   | Mobile Network Code. |
| phoneNum  | NSString   | Mobile phone number. |
| productKey  | NSString   | ProductKey. |
| rsrp  | NSInteger   | Reference Signal Received Power. |
| rsrq  | NSInteger   | LTE Reference Signal Received Quality. |
| sdkVersion  | NSString   | SDK version. |
| sim  | NSString   | SIM card number. |
| snr  | NSInteger   | Signal-to-Noise Ratio. |
| type  | NSString   | Module model. |
| version  | NSString   | Module firmware version. |
| voltage  | double   | Voltage. |

**QuecProductTSLResourceInfoModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| deviceKey  | NSString   | DeviceKey. |
| createTime  | NSString   | Creation time. |
| deviceId  | NSString   | Device ID. |
| resourceCode  | NSString   | Resource code. |
| resourceValue  | NSString   | Resource value. |
| updateTime  | NSString   | Update time. |

**Example**

```objc
[QuecDeviceService.sharedInstance getDeviceBusinessAttributesWithProductKey:@"productKey" deviceKey:@"deviceKey" gatewayPk:@"" gatewayDk:@"" codeList:@"" type:@"1" success:^(QuecProductTSLInfoModel *tslInfoModel) {
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Enable/Disable Device Offline Notification

**API**

Enable or disable the device offline notification.

```objc
- (void)setOfflineReminderWithProductKey:(NSString *)productKey 
                                 deviceKey:(NSString *)deviceKey
                    enableOfflineReminder:(int)enableOfflineReminder
                                   success:(QuecVoidBlock)success
                                   failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| productKey | Y | ProductKey. |
| deviceKey | Y | DeviceKey. |
| enableOfflineReminder | Y | 0: Disable<br />1: Enable |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[[QuecDeviceService sharedInstance] setOfflineReminderWithProductKey:@"productKey" deviceKey:@"deviceKey" enableOfflineReminder:enable success:^{
       /// Next Action
   } failure:^(NSError *error) {
       NSLog(@"check error: %@", error);
   }];
```

### Get Enablement Status of Offline Notification

**API**

Get the enablement status of the device offline notification.

```objc
- (void)getOfflineReminderWithProductKey:(NSString *)productKey 
                                 deviceKey:(NSString *)deviceKey
                                   success:(void(^)(int enableOfflineReminder))success
                                   failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| productKey | Y | ProductKey. |
| deviceKey | Y | DeviceKey. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[[QuecDeviceService sharedInstance] getOfflineReminderWithProductKey:@"productKey" deviceKey:@"deviceKey" success:^(int enableOfflineReminder) {
       /// Next Action
   } failure:^(NSError *error) {
       NSLog(@"check error: %@", error);
   }];
```

### Set Device Timezone

**API**

Set the device timezone, used for synchronizing the device's time zone with the app's set time zone.

```objc
- (void)setDeviceTimeZoneWithProductKey:(NSString *)productKey 
                                deviceKey:(NSString *)deviceKey
                                 timeZone:(NSString *)timeZone
                                 timeZoneId:(NSString *)timeZoneId
                                  success:(QuecVoidBlock)success
                                  failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| productKey | Y | ProductKey. |
| deviceKey | Y | DeviceKey. |
| timeZone | Y | Timezone. Format: GMT+-HH:mm or GMT+-HH. |
| timeZoneId | Y | Timezone ID. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[[QuecDeviceService sharedInstance] setDeviceTimeZoneWithProductKey:@"productKey" deviceKey:@"deviceKey" timeZone:@"GMT+08:00" timeZoneId:[NSTimeZone localTimeZone].name success:^{
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Get Device Timezone

**API**

Get the current device time zone.

```objc
- (void)getDeviceTimeZoneWithProductKey:(NSString *)productKey 
                                deviceKey:(NSString *)deviceKey
                                  success:(void(^)(QuecDeviceTimeZoneModel *model))success
                                  failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| productKey | Y | ProductKey. |
| deviceKey | Y | DeviceKey. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecDeviceTimeZoneModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| timeZone  | NSString  | Device timezone. |
| timeZoneId  | NSString  | Timezone ID. |

**Example**

```objc
[QuecDeviceService.sharedInstance getDeviceTimeZoneWithProductKey:@"productKey" deviceKey:@"deviceKey" success:^(QuecDeviceTimeZoneModel *model) {
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Get Product Manual

**API**

Get a product manual.

```objc
- (void)getProductDescriptionWithProductKey:(NSString *)productKey 
                                      success:(void(^)(NSString *url))success
                                      failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| productKey | Y | ProductKey. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecDeviceService.sharedInstance getProductDescriptionWithProductKey:@"productKey" success:^(NSString *url) {
        if (url) {
            /// Next Action
        }
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Query Device Reset Credentials

**API**

Query the reset credential of a Bluetooth-only device, which can be used for device reset in the platform.

```objc
- (void)getPureBtResetCredentialsWithDeviceList:(NSArray<QuecPureBtResetEnterModel *> *)deviceList
                                            success:(void(^)(QuecPureBtResetModel *model))success
                                            failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| deviceList | Y | QuecPureBtResetEnterModel array of the devices to be queried. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecPureBtResetEnterModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| pk  | NSString  | ProductKey. |
| dk  | NSString  | DeviceKey. |

**QuecPureBtResetModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| successList  | NSArray<QuecPureBtResetCredentialsModel *> *  | List of successful executions. |
| failureList  | NSArray<QuecPureBtResetCredentialsModel *> *  | List of failed executions. |

**QuecPureBtResetCredentialsModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| pk  | NSString  | ProductKey. |
| dk  | NSString  | DeviceKey. |
| resetCredentials  | NSString  | Bluetooth-only device reset credentials (Only valid for *successList*). |
| msg  | NSString  | Error message (Only valid for *failureList*). |

**Example**

```objc
QuecPureBtResetEnterModel *resetModel = QuecPureBtResetEnterModel.new;
resetModel.pk = @"pk";
resetModel.dk = @"dk";
[QuecDeviceService.sharedInstance getPureBtResetCredentialsWithDeviceList:@[resetModel] success:^(QuecPureBtResetModel *model) {
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Unbind Device

**API**

Unbind a device.

```objc
- (void)unbindDeviceWithDeviceKey:(NSString *)deviceKey
                        productKey:(NSString *)productKey
                            isInit:(BOOL)isInit
                            random:(NSString *)random
                 resetCredentials:(NSString *)resetCredentials
                           success:(QuecVoidBlock)success
                           failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| deviceKey | Y | DeviceKey. |
| productKey | Y | ProductKey. |
| isInit | N | Whether initialization is required. Default value: false. (This parameter is required for Bluetooth-only devices) |
| random | N | (This parameter is required for Bluetooth-only devices) |
| resetCredentials | N | Bluetooth-only device reset credentials (This parameter is required for Bluetooth-only devices) |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecDeviceService.sharedInstance unbindDeviceWithDeviceKey:@"deviceKey"
                                                         productKey:@"productKey"
                                                             isInit:NO
                                                             random:@""
                                                   resetCredentials:@"" success:^{
            /// Next Action
        } failure:^(NSError *error) {
            NSLog(@"check error: %@", error);
        }];
```

### Unbind Device in Batches

**API**

Unbind devices in batches.

```objc
- (void)batchUnbindDeviceWithIsInit:(BOOL)isInit
                          deviceList:(NSArray<QuecDeviceModel *> *)deviceList
                             success:(void(^)(QuecBatchUnbindModel *model))success
                             failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| isInit | N | Whether initialization is required. Default value: false. |
| deviceList | Y | QuecDeviceModel array. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

> See QuecDeviceModel Definition above.

**QuecBatchUnbindModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| successList  | NSArray<QuecBatchUnbindDeviceModel *> *  | List of successful executions. |
| failList  | NSArray<QuecBatchUnbindDeviceModel *> *  | List of failed executions. |

**QuecBatchUnbindDeviceModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| pk  | NSString  | ProductKey. |
| dk  | NSString  | DeviceKey. |
| gdid  | NSString  | Group ID. |
| shareCode  | NSString  | Share code. |
| bindingSum  | NSInteger  | The number of bound users of the device in the platform after the unbinding operation, including pseudo-binding. |
| code  | NSInteger  | Error code (Only valid for *failureList*). |
| msg  | NSString  | Error message (Only valid for *failureList*). |

**Example**

```objc
[QuecDeviceService.sharedInstance batchUnbindDeviceWithIsInit:NO deviceList:@[deviceModel1, deviceModel2] success:^(QuecBatchUnbindModel *model) {
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Generate AuthKey in Platform

**API**

Generate an AuthKey in the platform, primarily used when establishing a communication channel for devices that have been activated and connected to the platform but lack an AuthKey.

```objc
- (void)regenerateAuthKeyWithDeviceKey:(NSString *)deviceKey
                            productKey:(NSString *)productKey
                               success:(QuecStringBlock)success
                               failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| deviceKey | Y | DeviceKey. |
| productKey | Y | ProductKey. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[[QuecDeviceService sharedInstance] regenerateAuthKeyWithDeviceKey:@"deviceKey" productKey:@"productKey" success:^(NSString *result) {
        /// Next Action
    } failure:} failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```
