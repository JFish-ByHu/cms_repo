# Device Sharing

## Feature Description

You can share your devices to other users through the device sharing feature so that the sharing recipients can control your devices.

> See QuecDeviceModel Definition in [Device Management](Device%20Management.md).

```objc
#import <QuecDeviceKit/QuecDeviceKit.h>
/// Initialization.
[QuecDeviceShareService sharedInstance]
```

## Device Sharing

### Query Device Information by Share Code

**API**

Query the device information by a share code.

```objc
- (void)getDeviceInfoByShareCode:(NSString *)shareCode
                          success:(void(^)(QuecDeviceModel *deviceModel))success
                          failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| shareCode | Y | Share code. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecDeviceShareService.sharedInstance getDeviceInfoByShareCode:@"shareCode" success:^(QuecDeviceModel *deviceModel) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Change Shared Device Name

**API**

Change the name of the shared device.

```objc
- (void)updateDeviceNameByShareUserWithDeviceName:(NSString *)deviceName
                                          shareCode:(NSString *)shareCode
                                            success:(QuecVoidBlock)success
                                            failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| deviceName | Y | Device name. |
| shareCode | Y | Share code. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecDeviceShareService.sharedInstance updateDeviceNameByShareUserWithDeviceName:@"deviceName" shareCode:@"shareCode" success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Get Device Shared Recipient List

**API**

Get the recipient list to whom the group is shared.

```objc
- (void)getDeviceShareUserListWithDeviceKey:(NSString *)deviceKey
                                   productKey:(NSString *)productKey
                                      success:(void(^)(NSArray<QuecShareUserModel *> *list))success
                                      failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| deviceKey | Y | DeviceKey. |
| productKey | Y | ProductKey. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecShareUserModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| shareInfo  | QuecShareUserShareInfoModel | Sharing information. |
| userInfo  | QuecShareUserInfoModel | User information. |

**QuecShareUserShareInfoModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| acceptTime  | NSString | Time to accept the sharing. |
| acceptingExpireAt  | NSString | Expiration time of accepting the sharing. |
| coverMark  | NSInteger | Overwrite flag. |
| deviceName  | NSString | Device name. |
| dk  | NSString | DeviceKey. |
| ownerUid  | NSString | Owner ID. |
| pk  | NSString | ProductKey. |
| shareCode  | NSString | Share code. |
| shareId  | NSString | Sharing ID. |
| shareStatus  | NSInteger | Sharing status. |
| shareTime  | NSString | Time to create the sharing. |
| shareUid  | NSString | User ID of the share recipient. |
| sharingExpireAt  | NSString | Expiration time of the sharing after the sharing is accepted. |
| updateTime  | NSString | Update time. |

**QuecShareUserInfoModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| address  | NSString | Address. |
| email  | NSString | Email address. |
| headimg  | NSString | Profile. |
| lastLoginTime  | NSString | Last login time. |
| nikeName  | NSString | Nickname. |
| phone  | NSString | Phone number. |
| registerTime  | NSString | Registration time. |
| sex  | NSString | Gender. |
| uid  | NSString | User ID. |
| userDomain  | NSString | User domain. |
| userType  | NSInteger | User source. |
| wchartId  | NSString | Wechat ID. |
| wchartName  | NSString | WeChat name. |

**Example**

```objc
[QuecDeviceShareService.sharedInstance getDeviceShareUserListWithDeviceKey:@"deviceKey" productKey:@"productKey" success:^(NSArray<QuecShareUserModel *> * _Nonnull list) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Initiator Cancel Sharing

**API**

The share initiator cancels the sharing.

```objc
- (void)unShareDeviceByOwnerWithShareCode:(NSString *)shareCode
                                    success:(QuecVoidBlock)success
                                    failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| shareCode | Y | Share code. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecDeviceShareService.sharedInstance unShareDeviceByOwnerWithShareCode:@"shareCode" success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Recipient Cancel Sharing

**API**

The share recipient cancels the sharing.

```objc
- (void)unShareDeviceByShareUserWithShareCode:(NSString *)shareCode
                                        success:(QuecVoidBlock)success
                                        failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| shareCode | Y | Share code. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecDeviceShareService.sharedInstance unShareDeviceByShareUserWithShareCode:@"shareCode" success:^{
    /// Next Action
} failure::^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Accept Sharing

**API**

The share recipient accepts the sharing.

```objc
- (void)acceptShareByShareUserWithShareCode:(NSString *)shareCode
                                   deviceName:(NSString *)deviceName
                                      success:(QuecVoidBlock)success
                                      failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| shareCode | Y | Share code. |
| deviceName | Y | Device name. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecDeviceShareService.sharedInstance acceptShareByShareUserWithShareCode:@"shareCode" deviceName:@"deviceName" success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Set Device Sharing Information

**API**

Set the sharing information of the group.

```objc
- (void)setShareInfoByOwnerWithDeviceKey:(NSString *)deviceKey
                                productKey:(NSString *)productKey
                      acceptingExpireTime:(NSInteger)acceptingExpireTime
                                 coverMark:(NSInteger)coverMark
                     isSharingAlwaysValid:(BOOL)isSharingAlwaysValid
                        sharingExpireTime:(NSInteger)sharingExpireTime
                                   success:(void(^)(NSString *shareCode))success
                                   failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| deviceKey | Y | DeviceKey. |
| productKey | Y | ProductKey. |
| acceptingExpireTime | Y | Expiration time of the shared QR code, in milliseconds. This share will expire if it is not used before the expiration time. |
| coverMark | Y | Overwrite flag. Default value: 1.<br/>1 Directly overwrite the previous valid share (overwrite the existing sharing code)<br/>2 Add a new share directly, allowing multiple shares to coexist<br/>3 Overwrite the previous share only when the sharing time is extended. |
| isSharingAlwaysValid | N | Whether the device sharing is permanently valid. |
| sharingExpireTime | N | Expiration time of the device usage, in milliseconds. The shared device can be used by the recipient before the expiration time. This parameter is invalid when *isSharingAlwaysValid* = YES. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecDeviceShareService.sharedInstance setShareInfoByOwnerWithDeviceKey:@"deviceKey"
                                                                         productKey:@"productKey"
                                                                acceptingExpireTime:expireTimeTS
                                                                          coverMark:1
                                                               isSharingAlwaysValid:YES
                                                                  sharingExpireTime:0 success:^(NSString * _Nonnull shareCode) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```
