# Device Association

Device association can associate multiple devices. For example, the master device is a smart socket and the slave device is a smart switch. 

## Feature Description

> See QuecDeviceModel Definition in [Device Management](Device%20Management.md)

```objc
#import <QuecDeviceKit/QuecDeviceKit.h>
/// Initialize
[QuecDeviceAssociationService sharedInstance]
```

## Device Association Management

### Associate Device

**API**

Associate a device.

```objc
- (void)deviceAssociationWithList:(NSArray<QuecDeviceModel *> *)list
                           master:(QuecDeviceModel *)masterDevice
                          success:(QuecVoidBlock)success
                          failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| list | Y | List of slave devices to be associated (element array of QuecDeviceModel). |
| masterDevice | Y | Master device. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecDeviceAssociationService.sharedInstance deviceAssociationWithList:@[deviceModel] master:masterDevice success:^{
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Query Device Association Information

**API**

Query device association information.

```objc
- (void)getDeviceAssociationInfoWithMaster:(QuecDeviceModel *)masterDevice
                                      code:(NSString *)code
                                   success:(void(^)(QuecDeviceAssociationModel *model))success
                                   failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| masterDevice | Y | Master device (QuecDeviceModel type). |
| code | Y | Property identifier to be queried. Separate multiple properties by commas. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecDeviceAssociationModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| slaveDeviceList  | NSArray<QuecDeviceAssociationSlaveModel *> *  | Slave device data list. |
| masterDevice  | QuecDeviceAssociationMasterModel  | Master device data. |

**QuecDeviceAssociationSlaveModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| deviceAssociationMasterId  | NSInteger  | Master device ID. |
| deviceAssociationSlaveId  | NSInteger  | Slave device ID. |
| slaveDeviceKey  | NSString  | Slave DeviceKey. |
| slaveDeviceName  | NSString  | Slave device name. |
| slaveProductKey  | NSString  | Slave ProductKey. |
| tslDeviceDetail  | QuecProductTSLInfoModel  | TSL model. |

>See QuecProductTSLInfoModel Definition above.

**QuecDeviceAssociationMasterModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| deviceAssociationMasterId  | NSInteger  | Master device ID. |
| masterProductKey  | NSString  | Master ProductKey. |
| masterDeviceKey  | NSString  | Master DeviceKey. |
| masterDeviceName  | NSString  | Master device name. |
| siddhiName  | NSString  | Rule name. Must be unique, composed of uppercase/lowercase English letters and digits, and 32 characters in length. |

**Example**
```objc
[QuecDeviceAssociationService.sharedInstance getDeviceAssociationInfoWithMaster:masterDevice code:@"" success:^(QuecDeviceAssociationModel * _Nonnull model) {
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Disassociate Device

**API**

Disassociate a device.

```objc
- (void)deviceDisassociationWithDevice:(QuecDeviceModel *)model success:(QuecVoidBlock)success failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| model | Y | Device to be disassociated (QuecDeviceModel type). |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecDeviceAssociationService.sharedInstance deviceDisassociationWithDevice:device success:^{
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Configure Device Association

**API**

Configure device association.

```objc
- (void)deviceAssociationConfigWithProductKey:(NSString *)productKey success:(void(^)(QuecDeviceAssociationConfig *config))success failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| productKey | Y | ProductKey. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecDeviceAssociationConfig Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| productKey  | NSString  | Master ProductKey. |
| masterItemCode  | NSString  | Master category code. |
| slaveItemCode  | NSString  | Slave category code. |
| slaveDeviceLimit  | NSInteger  | The maximum number of slaves. |
| slaveProductKey  | NSArray<NSString *> *  | Slave ProductKey array. |

**Example**

```objc
[QuecDeviceAssociationService.sharedInstance deviceAssociationConfigWithProductKey:@"pk" success:^(QuecDeviceAssociationConfig * _Nonnull config) {
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```
