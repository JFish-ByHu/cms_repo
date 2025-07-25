# Home Information

## Feature Description

This section introduces how to manage homes, including creating a home, editing home information, deleting a home, and getting a home list.

## General Information

### QuecSmartHomeService Class Initialization

```objc
+ (instancetype)sharedInstance;
```

**QuecSmartHomeService Class Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| enable       | BOOL             | Whether to enable home mode. |
| autoSwitch  | BOOL            | Whether to enable home auto-switch. |
| currentFamily | QuecFamilyItemModel | Home information of the current user. |
| familys | NSArray <QuecFamilyItemModel *> * | Data list of all homes of the current user. |
| familyInviteList | NSArray <QuecInviteItemModel *> * | List of homes to which the current user is invited. |

For example, if you want to get the current home information, run the following sample code.
```objc
QuecFamilyItemModel *currentFamily = QuecSmartHomeService.sharedInstance.currentFamily;
```

**QuecFamilyItemModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| fid       | NSString             | Home ID. |
| familyName  | NSString            | Home name. |
| familyLocation | NSString | Home location. |
| familyCoordinates | NSString | Latitude and longitude of the home. |
| addTime | NSString | The time to add the home. |
| addTimeTs | NSInteger | The timestamp to add the home. |
| memberRole       | NSInteger             | Member role.<br />1-Home creator<br />2-Administrator<br />3-Ordinary member |
| currentRoom  | QuecFamilyRoomItemModel            | Information of rooms selected by the current family. |
| rooms | NSArray<QuecFamilyRoomItemModel *> * | List of all rooms in the current home. |
| groupDeviceDeviceNum | NSInteger | The number of devices included in a group. |
| deviceList | NSArray<QuecGroupDeviceBean *> * | Device list. |

**QuecFamilyRoomItemModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| frid       | NSString             | Room ID. |
| roomName  | NSString            | Room name. |
| roomSort | NSString | Room order. |

**QuecInviteItemModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| fid       | NSString             | Home ID. |
| familyName  | NSString            | Home name. |
| familyLocation | NSString | Home location. |
| familyCoordinates | NSString | Latitude and longitude of the home. |
| addTime | NSString | The time to add the home. |
| addTimeTs | NSInteger | The timestamp to add the home. |
| invalidTime | NSString | The time when the user is invited to the home. |

Clear the current home cache data.

```objc
- (void)clearFamilyInfos;
```

## Home Mode

### Enable/Disable Home Mode

**API**

Enable or disable the home mode.

```objc
- (void)enabledFamilyMode:(BOOL)familyMode success:(QuecVoidBlock)success failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| familyMode |	Y|Enable or disable the home mode.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecSmartHomeService.sharedInstance enabledFamilyMode:YES success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Enable/Disable Home Auto-switch

**API**

Enable or disable the home auto-switch. This feature can only be set after the home mode is enabled. If home auto-switch is enabled, the connected home will be automatically switched when your location changes.

```objc
- (void)enabledAutoSwitch:(BOOL)autoSwitch success:(QuecVoidBlock)success failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| autoSwitch |	Y|Enable or disable the home auto-switch.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecSmartHomeService.sharedInstance enabledAutoSwitch:YES success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```


### Get Home Mode Configuration

**API**

Query the home mode configuration to check whether the home mode is enabled.

```objc
- (void)getFamilyModeConfigWithSuccess:(void(^)(QuecFamilyModeConfigModel *model))success failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecFamilyModeConfigModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| enabledAutoSwitch       | BOOL             | Whether the home auto-switch is enabled. |
| enabledFamilyMode  | BOOL            | Whether the home mode is enabled. |

**Example**

```objc
[QuecSmartHomeService.sharedInstance getFamilyModeConfigWithSuccess:^(QuecFamilyModeConfigModel *model) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

## Home Management

### Create Home

**API**

Create a home.

```objc
- (void)addFamilyWithFamilyParamModel:(QuecFamilyParamModel *)familyParamModel success:(QuecVoidBlock)success failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| familyParamModel |	Y|Home information.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecFamilyParamModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| fid       | NSString             | Home ID. This parameter is required when you edit home information or delete a home, while it can be omitted when you create a home. |
| familyName  | NSString            | Home name. This parameter is required when you create a home, while it is optional when you edit home information. |
| familyLocation  | NSString            | Home location. Optional parameter. |
| familyCoordinates  | NSString            | Latitude and longitude of the home. WGS84 coordinate system. Format: 40.759186,-73.928204. Optional parameter. |
| familyRoomList  | NSArray<NSString *> *       | Room list. Optional parameter. |


**Example**

```objc
QuecFamilyParamModel *paramModel = QuecFamilyParamModel.new;
paramModel.familyName = @"My Smart Family";
[QuecSmartHomeService.sharedInstance addFamilyWithFamilyParamModel:paramModel success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Edit Home Information

**API**

Edit home information.

```objc
- (void)setFamilyWithFamilyParamModel:(QuecFamilyParamModel *)familyParamModel success:(QuecVoidBlock)success failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| familyParamModel |	Y|Home information.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

> See QuecFamilyParamModel Definition above.

**Example**

```objc
QuecFamilyParamModel *paramModel = QuecFamilyParamModel.new;
paramModel.fid = @"my fid";
paramModel.familyName = @"My Smart Family";
[QuecSmartHomeService.sharedInstance setFamilyWithFamilyParamModel:paramModel success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Delete Home

**API**

Delete a home.

```objc
- (void)deleteFamilyWithFid:(NSString *)fid success:(QuecVoidBlock)success failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| fid |	Y|Home ID.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecSmartHomeService.sharedInstance deleteFamilyWithFid:@"your fid" success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Query Current Home

**API**

Query the current home.

```objc
- (void)getCurrentFamilyWithFid:(NSString *)fid
             currentCoordinates:(NSString *)currentCoordinates
                        success:(void(^)(QuecFamilyItemModel *))success
                        failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| fid |	Y|Home ID.|
| currentCoordinates |	N|Current GPS coordinates (WGS84 format): 40.759186, -73.928204. Optional parameter.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

>See QuecFamilyItemModel Definition above.

**Example**

```objc
[QuecSmartHomeService.sharedInstance getCurrentFamilyWithFid:@"your fid"
                                              currentCoordinates:@""
                                                         success:^(QuecFamilyItemModel *itemModel) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Query Home List

**API**

Query the home list.

```objc
- (void)getFamilyListWithRole:(NSString *)role
                   pageNumber:(NSInteger)pageNumber
                     pageSize:(NSInteger)pageSize
                      success:(void(^)(NSArray <QuecFamilyItemModel *> *list, NSInteger total))success
                      failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| role |	N|Member role. Separate multiple roles by commas.<br />1-Home creator<br />2-Administrator<br />3-Ordinary member|
| pageNumber |	Y|Page number. Default: 1.|
| pageSize |	Y|Page size. Default: 10.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

>See QuecFamilyItemModel Definition above.

**Example**

```objc
[QuecSmartHomeService.sharedInstance getFamilyListWithRole:@"1"
                                                    pageNumber:1
                                                      pageSize:10
                                                       success:^(NSArray<QuecFamilyItemModel *> *list, NSInteger total) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Query Device List in Home

**API**

Query device list in the specified home.

```objc
- (void)getFamilyDeviceListWithModel:(QuecFamilyDeviceListParamsModel *)params
                             success:(void(^)(NSArray <QuecDeviceModel *> *list, NSInteger total))success
                             failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| params |	Y|Parameters.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecFamilyDeviceListParamsModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| fid       | NSString             | Home ID. |
| isAddOwnerDevice  | BOOL            | Whether to add all your devices. Optional parameter. |
| deviceName  | NSString            | Device name. Optional parameter. |
| pageNumber  | NSInteger            | Page number. Default: 1. Optional parameter. |
| pageSize  | NSInteger            | Page size. Default: 10. Optional parameter. |
| isGroupDeviceShow  | BOOL            | Whether to display group devices. This parameter is omitted by default. |
| isAssociation  | BOOL            | Whether to query the unassociated devices. Default value: false. |
| secondItemCode  | NSString            | Second category. Default value: null. |
| pkList  | NSString            | List of ProductKeys to be added. Separate multiple ProductKeys by commas. |


**Example**

```objc
QuecFamilyDeviceListParamsModel *paramsModel = QuecFamilyDeviceListParamsModel.new;
paramsModel.fid = @"your fid";
paramsModel.isAddOwnerDevice = YES;
paramsModel.isGroupDeviceShow = YES;
paramsModel.pageSize = 10;
paramsModel.pageNumber = 1;
[QuecSmartHomeService.sharedInstance getFamilyDeviceListWithModel:paramsModel
                                                            success:^(NSArray<QuecDeviceModel *> *list, NSInteger total) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

## Common Devices

### Add Common Device

**API**

Add a common device or multiple common devices in batches.

```objc
- (void)addCommonUsedDeviceWithFid:(NSString *)fid
                        deviceList:(NSArray<QuecDeviceEnterModel *> *)deviceList
                           success:(void(^)(QuecOperateDeviceRespModel *respModel))success
                           failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| fid |	Y|Home ID.|
| deviceList |	Y|Device list.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecDeviceEnterModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| pk       | NSString             | ProductKey. |
| dk       | NSString             | DeviceKey. |
| type       | NSUInteger             | Common device types that are added or deleted. <br />1-Home devices <br />2-Shared device <br />3-Multi-bound device |

>QuecOperateDeviceRespModel is a generic batch operation response class. You can extract the required properties based on the actual returned parameters.

**QuecOperateDeviceRespModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| successList       | QuecOperateDeviceRespItem             | List of successful executions. |
| failureList       | QuecOperateDeviceRespItem             | List of failed executions. |

**QuecOperateDeviceRespItem Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| fid       | NSString             | Home ID. |
| oldFrid       | NSString             | Original room ID. |
| nFrid       | NSString             | New room ID. |
| pk       | NSString             | ProductKey. |
| dk       | NSString             | DeviceKey. |
| deviceName       | NSString             | Device name. |
| shareCode       | NSString             | Share code. |
| isCommonUsed       | BOOL             | Whether the device is commonly used.<br />true-Commonly used<br />false-Not commonly used |
| msg       | NSString             | Error message (Only valid for *failureList*). |

**Example**

```objc
QuecDeviceEnterModel *enterModel = QuecDeviceEnterModel.new;
enterModel.pk = @"pk";
enterModel.dk = @"dk";
enterModel.type = 3;
[QuecSmartHomeService.sharedInstance addCommonUsedDeviceWithFid:@"your fid" deviceList:@[enterModel] success:^(QuecOperateDeviceRespModel *respModel) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Delete Common Device

**API**

Delete a device or multiple devices in batches.

```objc
- (void)deleteCommonUsedDeviceWithFid:(NSString *)fid
                        deviceList:(NSArray<QuecDeviceEnterModel *> *)deviceList
                           success:(void(^)(QuecOperateDeviceRespModel *respModel))success
                           failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| fid |	Y|Home ID.|
| deviceList |	Y|Device list.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

>See QuecDeviceEnterModel and QuecOperateDeviceRespModel Definition above.

```objc
QuecDeviceEnterModel *enterModel = QuecDeviceEnterModel.new;
enterModel.pk = @"pk";
enterModel.dk = @"dk";
enterModel.type = 3;
[QuecSmartHomeService.sharedInstance deleteCommonUsedDeviceWithFid:@"your fid" deviceList:@[enterModel] success:^(QuecOperateDeviceRespModel *respModel) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Query Common Device List

**API**

Query the list of common devices.

```objc
- (void)getCommonUsedDeviceListWithFid:(NSString *)fid 
                            pageNumber:(NSInteger)pageNumber
                              pageSize:(NSInteger)pageSize
                     isGroupDeviceShow:(BOOL)isGroupDeviceShow
                               success:(void(^)(NSArray <QuecDeviceModel *> *list, NSInteger total))success
                               failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| fid |	Y|Home ID.|
| pageNumber |	N|Page number. Default: 1.|
| pageSize |	N|Page size. Default: 10.|
| isGroupDeviceShow |	N|Whether to display group devices. This parameter is omitted by default.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

>The QuecDeviceModel Definition is the same as the SDK description in the *Device Management* section.

**Example**

```objc
[QuecSmartHomeService.sharedInstance getCommonUsedDeviceListWithFid:@"your fid" pageNumber:1 pageSize:10 isGroupDeviceShow:YES success:^(NSArray<QuecDeviceModel *> *list, NSInteger total) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

## Device Group

### Query Home Device Group List

**API**

Query the home device group list.

```objc
- (void)getFamilyGroupListWithFid:(NSString *)fid
                       pageNumber:(NSInteger)pageNumber
                         pageSize:(NSInteger)pageSize
                          success:(void(^)(NSArray <QuecFamilyDeviceGroupInfoModel *> *list, NSInteger total))success
                          failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| fid |	Y|Home ID.|
| pageNumber |	N|Page number. Default: 1.|
| pageSize |	N|Page size. Default: 10.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecFamilyDeviceGroupInfoModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| name       | NSString             | Group name. |
| fid       | NSString             | Home ID. This parameter is required when you create a group. |
| address       | NSString             | Address. |
| contactPhoneList       | NSString             | Contact person. |
| coordinate       | NSString             | Longitude and latitude. |
| coordinateSystem       | NSString             | Coordinate system. |
| descrip       | NSString             | Description. |
| manager       | NSString             | Administrator. |
| managerType       | NSString             | Administrator type. |
| parentId       | NSString             | Parent device group ID. |
| extend       | NSString             | Extended field. |
| dgid       | NSString             | Group ID. |
| owner       | NSString             | Owner. |
| addTime       | NSString             | The time to add the group. |
| addTimeTs       | NSInteger             | The timestamp to add the group. |

**Example**

```objc
[QuecSmartHomeService.sharedInstance getFamilyGroupListWithFid:@"your fid"
                                                         pageNumber:1
                                                           pageSize:10
                                                            success:^(NSArray<QuecFamilyDeviceGroupInfoModel *> *list, NSInteger total) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Add Home Device Group

**API**

Add a home device group.

```objc
- (void)addFamilyDeviceGroupWithInfo:(QuecFamilyDeviceGroupModel *)groupInfoModel
                             success:(QuecVoidBlock)success
                             failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| groupInfoModel |	Y|Group information.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecFamilyDeviceGroupModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| name       | NSString             | Home name. |
| fid       | NSString             | Home ID. This parameter is required when you create a group. |
| address       | NSString             | Address. |
| contactPhoneList       | NSString             | Contact person. |
| coordinate       | NSString             | Longitude and latitude. |
| coordinateSystem       | NSString             | Coordinate system. |
| descrip       | NSString             | Description. |
| manager       | NSString             | Administrator. |
| managerType       | NSString             | Administrator type. |
| parentId       | NSString             | Parent device group ID. |
| extend       | NSString             | Extended field. |

**Example**

```objc
QuecFamilyDeviceGroupModel *groupModel = QuecFamilyDeviceGroupModel.new;
groupModel.name = @"group name";
groupModel.fid = @"your fid";
[QuecSmartHomeService.sharedInstance addFamilyDeviceGroupWithInfo:groupModel
                                                              success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Query List of Devices not in Home Device Group

**API**

Query the list of devices that are not in the home device group.

```objc
- (void)getDeviceListByNotInDeviceGroupWithFid:(NSString *)fid
                                    PageNumber:(NSInteger)pageNumber
                                      pageSize:(NSInteger)pageSize
                                       groupId:(NSString *)groupId
                                       success:(void(^)(NSArray <QuecDeviceModel *> *list, NSInteger total))success
                                       failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| fid |	N|Home ID.|
| pageNumber |	N|Page number. Default: 1.|
| pageSize |	N|Page size. Default: 10.|
| groupId |	Y|Device group ID.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

>The QuecDeviceModel Definition is the same as the SDK description in the *Device Management* section.

**Example**

```objc
[QuecSmartHomeService.sharedInstance getDeviceListByNotInDeviceGroupWithFid:@"your fid"
                                                                     PageNumber:1
                                                                       pageSize:10
                                                                        groupId:@"your groupid"
                                                                        success:^(NSArray<QuecDeviceModel *> *list, NSInteger total) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

