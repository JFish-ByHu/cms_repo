# Add Cellular Devices

## Feature Description

You can add a cellular device via its serial number, and it will go online directly after startup.

```objc
QuecDeviceService
```

## Directly Add Online Device

You can directly add a device whose network has been provisioned and is already online.

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

| Parameter    | Required | Description |
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

| Field           | Type    | Description |
|---------------------|-----------|------------------------|
| authKey                  | NSString    |  AuthenticationKey.  |
| pk          | String    | Device ProductKey. |
| dk           | String    | DeviceKey.      |
| moduleType           | String    | Device model. |
