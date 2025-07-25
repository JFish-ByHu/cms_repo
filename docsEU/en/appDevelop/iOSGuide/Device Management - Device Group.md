# Device Group

## Feature Description

Device grouping refers to grouping multiple devices into one group for easier management, such as batch control and batch query operations.

> See QuecDeviceModel Definition in [Device Management](Device%20Management.md)

```objc
#import <QuecDeviceKit/QuecDeviceKit.h>
/// Initialize
[QuecDeviceGroupService sharedInstance]
```

## Device Group

### Get Device Group List

**API**

Get a device group list. You can first call Add Device Group interface and then obtain the device group list.

```objc
- (void)getDeviceGroupListWithPageNumber:(NSInteger)pageNumber
                                  pageSize:(NSInteger)pageSize
                                     extra:(QuecDeviceGroupParamModel * _Nullable)infoModel
                                   success:(void(^)(NSArray<QuecDeviceGroupInfoModel *> *list, NSInteger total))success
                                   failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| pageNumber | Y | Page number. |
| pageSize | Y | Page size. |
| infoModel | N | Group expansion information. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecDeviceGroupParamModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| name  | NSString | Name, required when you create a group. |
| address  | NSString  | Address. |
| contactPhoneList  | NSString  | Contact person. |
| coordinate  | NSString  | Longitude and latitude. |
| coordinateSystem  | NSString  | Coordinate system. |
| descrip  | NSString  | Description. |
| manager  | NSString  | Administrator. |
| managerType  | NSString  | Administrator type. |
| parentId  | NSString  | Parent device group ID. |
| extend  | NSString  | Extended field. |

**QuecDeviceGroupInfoModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| name  | NSString | Name, required when you create a group. |
| address  | NSString  | Address. |
| contactPhoneList  | NSString  | Contact person. |
| coordinate  | NSString  | Longitude and latitude. |
| coordinateSystem  | NSString  | Coordinate system. |
| descrip  | NSString  | Description |
| manager  | NSString  | Administrator. |
| managerType  | NSString  | Administrator type. |
| parentId  | NSString  | Parent device group ID. |
| extend  | NSString  | Extended field. |
| dgid  | NSString  | Group ID. |
| owner  | NSString  | Owner. |
| addTime  | NSString  | The time to add the group. |
| addTimeTs  | NSString  | The timestamp to add the group. |

**Example**

```objc
[QuecDeviceGroupService.sharedInstance getDeviceGroupListWithPageNumber:1
                                                                   pageSize:10
                                                                      extra:nil
                                                                    success:^(NSArray<QuecDeviceGroupInfoModel *> *list, NSInteger total) {
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Add Device Group

**API**

Add a device group.

```objc
- (void)addDeviceGroupWithInfo:(QuecDeviceGroupParamModel *)groupInfoModel
                        success:(QuecVoidBlock)success
                        failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| groupInfoModel | Y | Group information. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

>See QuecDeviceGroupParamModel Definition above.

**Example**

```objc
QuecDeviceGroupParamModel *paramModel = [[QuecDeviceGroupParamModel alloc] init];
paramModel.name = @"group name";
[QuecDeviceGroupService.sharedInstance addDeviceGroupWithInfo:paramModel success:^{
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Edit Device Group

**API**

Edit a device group.

```objc
- (void)updateDeviceGroupInfoWithDeviceGroupId:(NSString *)deviceGroupId
                                       infoModel:(QuecDeviceGroupParamModel * _Nullable)infoModel
                                         success:(QuecVoidBlock)success
                                         failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| deviceGroupId | Y | Group ID. |
| infoModel | Y | Group information. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

>See QuecDeviceGroupParamModel Definition above.

**Example**

```objc
QuecDeviceGroupParamModel *paramModel = [[QuecDeviceGroupParamModel alloc] init];
paramModel.name = @"group name";
[QuecDeviceGroupService.sharedInstance updateDeviceGroupInfoWithDeviceGroupId:@"dgid" infoModel:paramModel success:^{
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Delete Device Group

**API**

Delete a device group according to group ID.

```objc
- (void)deleteDeviceGroupWithDeviceGroupId:(NSString *)deviceGroupId
                                     success:(QuecVoidBlock)success
                                     failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| deviceGroupId | Y | Group ID. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecDeviceGroupService.sharedInstance deleteDeviceGroupWithDeviceGroupId:@"dgid" success:^{
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Get Device Group Information

**API**

Get device group information.

```objc
- (void)getDeviceGroupInfoWithDeviceGroupId:(NSString *)deviceGroupId
                                      success:(void(^)(QuecDeviceGroupInfoModel *model))success
                                      failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| deviceGroupId | Y | Group ID. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

>See QuecDeviceGroupInfoModel Definition above.

**Example**

```objc
[QuecDeviceGroupService.sharedInstance getDeviceGroupInfoWithDeviceGroupId:@"gpid" success:^(QuecDeviceGroupInfoModel * _Nonnull model) {
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Get Device List

**API**

Get a device list. The list data is added through [Add Device to Group] interface. 

```objc
- (void)getDeviceListWithDeviceGroupId:(NSString *)deviceGroupId
                        deviceGroupName:(NSString * _Nullable)deviceGroupName
                          deviceKeyList:(NSString * _Nullable)deviceKeyList
                             productKey:(NSString * _Nullable)productKey
                             pageNumber:(NSInteger)pageNumber
                               pageSize:(NSInteger)pageSize
                                success:(void (^)(NSArray<QuecDeviceModel *> *list, NSInteger total))success
                                failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| deviceGroupId | Y | Group ID. |
| deviceGroupName | N | Device group name. |
| deviceKeyList | N | DeviceKey list, containing multiple Devicekeys separated by commas. |
| productKey | N | ProductKey. |
| pageNumber | Y | Current Page. Default value: 1. |
| pageSize | Y | Page size: Default value: 10. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecDeviceGroupService.sharedInstance getDeviceListWithDeviceGroupId:@"gpid"
                                                          deviceGroupName:nil
                                                            deviceKeyList:nil
                                                               productKey:nil
                                                               pageNumber:1
                                                                 pageSize:1000
                                                                  success:^(NSArray<QuecDeviceModel *> *list, NSInteger total) {
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Add Device to Group

**API**

Add a device to a group.

```objc
- (void)addDeviceToGroupWithDeviceGroupId:(NSString *)deviceGroupId
                                 deviceList:(NSArray *)deviceList
                                    success:(void(^)(QuecOperateDeviceToGroupModel *model))success
                                    failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| deviceGroupId | Y | Group ID. |
| deviceList | Y | Device list, example: @[{@"dk": @"value", @"pk": "value"}]. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecOperateDeviceToGroupModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| successList  | NSArray<QuecOperateDeviceToGroupRstModel *> * | List of successful executions. |
| failureList  | NSArray<QuecOperateDeviceToGroupRstModel *> *  | List of failed executions. |

**QuecOperateDeviceToGroupFailRstModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| data  | QuecOperateDeviceToGroupRstModel | Device information. |
| msg  | NSString | Prompt message. |

**QuecOperateDeviceToGroupRstModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| pk  | NSString | ProductKey. |
| dk  | NSString | DeviceKey. |

**Example**

```objc
[QuecDeviceGroupService.sharedInstance addDeviceToGroupWithDeviceGroupId:@"gpid"
                                                            deviceList:@[{@"dk": @"value", @"pk": "value"}]
                                                                success:^(QuecOperateDeviceToGroupModel * _Nonnull model) {
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Delete Device from Group

**API**

Delete a device from a group.

```objc
- (void)deleteDeviceFromGroupWithDeviceGroupId:(NSString *)deviceGroupId
                                      deviceList:(NSArray *)deviceList
                                         success:(void(^)(QuecOperateDeviceToGroupModel *model))success
                                         failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| deviceGroupId | Y | Group ID. |
| deviceList | Y | Device List, example: @[{@"dk": @"value", @"pk": "value"}]. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

>See QuecOperateDeviceToGroupModel Definition above.

**Example**

```objc
[QuecDeviceGroupService.sharedInstance deleteDeviceFromGroupWithDeviceGroupId:@"gpid"
deviceList:@[{@"dk": @"value", @"pk": "value"}] success:^(QuecOperateDeviceToGroupModel * _Nonnull model) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Get Sub-device List of Gateway

**API**

 Get a sub-device list of a gateway.

```objc
- (void)getGatewayDeviceChildListWithDeviceKey:(NSString *)deviceKey
                                      productKey:(NSString *)productKey
                                      pageNumber:(NSInteger)pageNumber
                                        pageSize:(NSInteger)pageSize
                                         success:(void(^)(NSArray<QuecDeviceModel *> *list, NSInteger total))success
                                         failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| deviceKey | Y | DeviceKey. |
| productKey | Y | ProductKey. |
| pageNumber | Y | Page number. |
| pageSize | Y | Page size. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecDeviceGroupService.sharedInstance getGatewayDeviceChildListWithDeviceKey:@"deviceKey" productKey:@"productKey" pageNumber:1 pageSize:10 success:^(NSArray<QuecDeviceModel *> * _Nonnull list, NSInteger total) {
         /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Get Device List Not in Device Group

**API**

Get a device list not in a device group for devices filtering and adding them to a device group.

```objc
- (void)getDeviceListByNotInDeviceGroupWithPageNumber:(NSInteger)pageNumber
                                                pageSize:(NSInteger)pageSize
                                                 groupId:(NSString *)groupId
                                                 success:(void(^)(NSArray<QuecDeviceModel *> *list, NSInteger total))success
                                                 failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| deviceKey | Y | DeviceKey. |
| productKey | Y | ProductKey. |
| groupId | Y | Device group ID. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecDeviceGroupService.sharedInstance getDeviceListByNotInDeviceGroupWithPageNumber:1
                                                                                pageSize:10
                                                                                 groupId:@"gpId"
                                                                                 success:^(NSArray<QuecDeviceModel *> *list, NSInteger total) {
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```
