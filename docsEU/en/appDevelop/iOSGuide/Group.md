
# Group Control

## Feature Description

Device group: organize multiple devices to form a group for easy management and control.

> Note
>
> **Only when home mode is enabled can the group feature be used.**
>
> For all SDK APIs requiring the *fid* parameter, you can obtain it by calling *QuecSmartHomeService.currentFamily()*.

## SDK Integration Method

> **Note**
>
> The group SDK depends on the core library QuecIotSdk to run. Please integrate the core library according to the *IoT SDK Integration Guide*.

```objc
pod 'QuecGroupKit', '~> 0.5.0'
```

**QuecGroupBean Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| name       | NSString             | Group name. |
| fid  | NSString            | Home ID. |
| frid | NSString | Room ID. |
| gdid | NSString | Group ID. |
| roomName | NSString | Room name. |
| onlineStatus | NSUInteger | Device status.<br />0-Offline<br />1-Online |
| productKey       | NSString             | ProductKey. |
| deviceKey  | NSString            | DeviceKey. |
| isCommonUsed | BOOL | Whether the device is commonly used.<br />0-Not commonly used<br />1-Commonly used |
| groupDeviceDeviceNum | NSInteger | The number of devices included in the group. |
| deviceList | NSArray<QuecGroupDeviceBean *> * | Device list. |

**QuecGroupDeviceBean Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| productKey       | NSString             | ProductKey. |
| deviceKey  | NSString            | DeviceKey. |
| deviceName | NSString | Device name. |
| logoImage | NSString | Device logo. |
| frid | NSString | Room ID. |
| roomName | NSString | Room name. |
| onlineStatus | NSInteger | Device status.<br />0-Offline<br />1-Online |
| msg | NSString | Message of API response. |
| code | NSInteger | API response code. |
| lowPowerProduct | BOOL | Whether it is a low-power product. |
| lowPowerStatus | BOOL | Whether the low-power mode is enabled. |
| lowPowerCache | NSInteger | Cache duration in low-power mode. Unit: second. |
| lowPowerAlive | NSInteger | Heartbeat interval in low-power mode. Unit: minute. |
| lastOfflineTimeTs | NSInteger | Timestamp of device offline. |
| capabilitiesBitmask | QuecIotChannelBitMask | Device channel capability mask. |

```objc
typedef NS_OPTIONS(NSUInteger, QuecIotChannelBitMask)
{
    QuecIotChannelBitMaskWan = 1 << 0,
    QuecIotChannelBitMaskLan = 1 << 1,
    QuecIotChannelBitMaskBle = 1 << 2,
    QuecIotChannelBitMaskMatter = 1 << 3
};
```

### Create Group

**API**

Create a group.

```objc
- (void)createGroupWithBean:(QuecGroupCreateBean *)bean
                    success:(QuecCreateGroupSuccess)success
                    failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| bean |	Y|QuecGroupCreateBean class object.|
| success |	N|Callback function of successful executions.	|
| failure |	N|Callback function of failed executions.	|

**QuecGroupCreateBean Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| groupDeviceName       | NSString             | Group name. |
| fid  | NSString            | Home ID. |
| frid | NSString | Room ID. |
| isCommonUsed | BOOL | Whether the device is commonly used.<br />0-Not commonly used<br />1-Commonly used |
| deviceList | NSArray<QuecGroupCreateDeviceBean *> * | Device list. |

**QuecGroupCreateDeviceBean Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| productKey       | NSString             | ProductKey. |
| deviceKey  | NSString            | DeviceKey. |

**Example**

```objc
QuecGroupCreateBean *createBean = QuecGroupCreateBean.new;
createBean.groupDeviceName = @"group name";
createBean.fid = @"family id";
createBean.frid = @"family room id";
createBean.isCommonUsed = YES;
createBean.deviceList = @[QuecGroupCreateDeviceBean.new];
[QuecGroupService.sharedInstance createGroupWithBean:createBean success:^(QuecGroupCreateResultBean * _Nonnull result) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Query Group Details

**API**

Query group details.

```objc
- (void)getGroupInfoWithId:(NSString *)groupId
                   success:(QuecGroupBeanSuccess)success
                   failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| groupId |	Y|Group ID.|
| success |	N|Callback function of successful executions.	|
| failure |	N|Callback function of failed executions.	|

> The response type is QuecGroupBean, and the properties are defined as above.

**Example**

```objc
[QuecGroupService.sharedInstance getGroupInfoWithId:@"your gdid" success:^(QuecGroupBean * _Nonnull result) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Query Basic Group Information

**API**

Query the basic information of a group.

```objc
- (void)getGroupDeviceInfoWithId:(NSString *)groupId
                         success:(QuecGroupDeviceSuccess)success
                         failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| groupId |	Y|Group ID.|
| success |	N|Callback function of successful executions.	|
| failure |	N|Callback function of failed executions.	|

> The response type is QuecDeviceModel, and the properties are defined in SDK description in the *Device Management* section.

**Example**

```objc
[QuecGroupService.sharedInstance getGroupDeviceInfoWithId:@"your gdid" success:^(QuecDeviceModel * _Nonnull result) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Determine Whether Device Can Join Group

**API**

Determine whether devices can join the group in batches.

```objc
- (void)checkDeviceAddGroupWithList:(NSArray<QuecGroupCreateDeviceBean *> *)deviceList
                                fid:(NSString *)fid
                            success:(QuecGroupCheckDeviceSuccess)success
                            failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| deviceList |	Y|QuecGroupCreateDeviceBean class object.|
| fid |	Y|Home ID.|
| success |	N|Callback function of successful executions.	|
| failure |	N|Callback function of failed executions.	|

>See QuecGroupDeviceBean and QuecGroupCreateDeviceBean Definitions above.

**Example**

```objc
QuecGroupCreateDeviceBean *createDeviceBean = QuecGroupCreateDeviceBean.new;
createDeviceBean.productKey = @"your pk";
createDeviceBean.deviceKey = @"your dk";
[QuecGroupService.sharedInstance checkDeviceAddGroupWithList:@[createDeviceBean] fid:@"fid" success:^(NSArray<QuecGroupDeviceBean *> * _Nonnull result) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Get List of Devices to Be Added

**API**

Get the list of devices to be added.

```objc
- (void)getAddableListWithList:(NSArray<QuecGroupCreateDeviceBean *> *)addedList
                           fid:(NSString *)fid
                          gdid:(nullable NSString *)gdid
                      pageSize:(NSInteger)pageSize
                          page:(NSInteger)page
                       success:(QuecGroupAddableListSuccess)success
                       failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| addedList |	Y|QuecGroupCreateDeviceBean|
| fid |	Y|Home ID.|
| gdid |	N|Group ID.|
| pageSize |	N|Page size. Default value: 10.|
| page |	N|Page number. Default value: 1.|
| success |	N|Callback function of successful executions.	|
| failure |	N|Callback function of failed executions.	|

> See QuecGroupCreateDeviceBean Definition above.

**Example**

```objc
QuecGroupCreateDeviceBean *createDeviceBean = QuecGroupCreateDeviceBean.new;
createDeviceBean.productKey = @"your pk";
createDeviceBean.deviceKey = @"your dk";
[QuecGroupService.sharedInstance getAddableListWithList:@[createDeviceBean]
                                                        fid:@"your fid"
                                                       gdid:@"your gdid"
                                                   pageSize:10
                                                       page:1
                                                    success:^(NSArray<QuecGroupDeviceBean *> * _Nonnull result, NSUInteger total) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Control Group Device

**API**

Control group devices.

```objc
- (void)controlGroupByHttp:(NSArray<QuecIotDataPoint*> *)dps
                   groupId:(NSString *)groupId
                 extraData:(NSDictionary *)extraData
                   success:(QuecVoidBlock)success
                   failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| dps |	Y|dps data (The format encapsulation is the same as the device SDK).|
| groupId |	Y|Group ID.|
| extraData |	N|Extra data.|
| success |	N|Callback function of successful executions.	|
| failure |	N|Callback function of failed executions.	|

**extraData Parameter Specification (NSDictionary Format)**

```objc
{
 type Type 1: Transparent transmission 2: Property 3: Service
 dataFormat Data format 1: Hex 2: Text (If type is transparent transmission, dataFormat must be specified.)
 cacheTime Cache duration (seconds, range: 1-7776000). Required if isCache is enabled.
 isCache  Enable/disable caching 1: Enable 2: Disable (Default)
 isCover Overwrite previous commands: 1-Overwrite, 2-Do not overwrite (Default) This parameter is effective if isCache is enabled.
 }
```

> See QuecIotDataPoint Definition in SDK description in the *Device Management* section.

**Example**

```objc
QuecIotDataPoint *dp = QuecIotDataPoint.new;
dp.value = @(3);
dp.dataType = QuecIotDataPointDataTypeINT;
dp.Id = 2; /// tsl id
[QuecGroupService.sharedInstance controlGroupByHttp:@[dp] groupId:@"your gdid" extraData:@{} success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Query Group TSL Property

**API**

Query group TSL properties.

```objc
- (void)groupAttributesById:(NSString *)groupId
                   codeList:(NSString *)codeList
                    success:(void (^)(QuecProductTSLInfoModel *tslInfoModel))success
                    failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| groupId |	Y|Group ID.|
| codeList |	N|Properties to be queried. Separate multiple properties by commas.|
| success |	N|Callback function of successful executions.	|
| failure |	N|Callback function of failed executions.	|

> See QuecProductTSLInfoModel Definition in SDK description in the *Device Management* section.

**Example**

```objc
[QuecGroupService.sharedInstance groupAttributesById:@"gdid" codeList:@"code1,code2" success:^(QuecProductTSLInfoModel * _Nonnull tslInfoModel) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Query Group TSL Property, Including Property Value

**API**

Query group TSL properties, including property values.

```objc
- (void)groupAttributesWithTSLById:(NSString *)groupId
                        productKey:(NSString *)productKey
                          codeList:(NSString *)codeList
                           success:(void (^)(NSArray<QuecProductTSLPropertyModel *> *arrayData))success
                           failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| bean |	Y|QuecGroupCreateBean class object.|
| productKey |	Y|ProductKey.|
| codeList |	N|Properties to be queried. Separate multiple properties by commas.|
| success |	N|Callback function of successful executions.	|
| failure |	N|Callback function of failed executions.	|

> See QuecProductTSLPropertyModel Definition in SDK description in the *Device Management* section.

**Example**

```objc
[QuecGroupService.sharedInstance groupAttributesWithTSLById:@"your gdid" productKey:@"your pk" codeList:@"code1" success:^(NSArray<QuecProductTSLPropertyModel *> * _Nonnull arrayData) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Edit Basic Group Information

**API**

Edit the basic information of groups.

```objc
- (void)editGroupBasicInfoWithId:(NSString *)groupId
                 groupDeviceName:(NSString *)groupDeviceName
                             fid:(nullable NSString *)fid
                            frid:(nullable NSString *)frid
                    isCommonUsed:(BOOL)isCommonUsed
                         success:(QuecVoidBlock)success
                         failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| groupId |	Y|Group ID.|
| groupDeviceName |	Y| Group name. |
| fid |	N|Home ID.|
| frid |	N|Room ID.|
| isCommonUsed |	N|Whether the device is commonly used.<br />0-Not commonly used<br />1-Commonly used|
| success |	N|Callback function of successful executions.	|
| failure |	N|Callback function of failed executions.	|

**Example**

```objc
[QuecGroupService.sharedInstance editGroupBasicInfoWithId:@"your gdid" groupDeviceName:@"name" fid:@"fid" frid:@"frid" isCommonUsed:YES success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Edit Group Information

**API**

Edit group information.

```objc
- (void)editGroupInfoWithId:(NSString *)groupId
                       name:(NSString *)groupDeviceName
                        fid:(NSString *)fid
                       frid:(NSString *)frid
               isCommonUsed:(BOOL)isCommonUsed
                 deviceList:(NSArray<QuecGroupCreateDeviceBean *> *)deviceList
                    success:(QuecVoidBlock)success
                    failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| groupId |	Y|Group ID.|
| groupDeviceName |	Y| Group name. |
| fid |	N|Home ID.|
| frid |	N|Room ID.|
| deviceList |	Y|Device list.|
| isCommonUsed |	N|Whether the device is commonly used.<br />0-Not commonly used<br />1-Commonly used|
| success |	N|Callback function of successful executions.	|
| failure |	N|Callback function of failed executions.	|

**Example**

```objc
QuecGroupCreateDeviceBean *createDeviceBean = QuecGroupCreateDeviceBean.new;
createDeviceBean.productKey = @"your pk";
createDeviceBean.deviceKey = @"your dk";
[QuecGroupService.sharedInstance editGroupInfoWithId:@"your gdid"
                                                name:@"name"
                                                    fid:@"fid"
                                                frid:@"frid"
                                        isCommonUsed:YES
                                            deviceList:@[createDeviceBean] success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Remove/Add Groups to Common in Batches

**API**

Remove or add groups to the common in batches.

```objc
- (void)batchAddCommonWithIds:(NSArray<NSString *> *)groupIds
                          fid:(NSString *)fid
                 isCommonUsed:(BOOL)isCommonUsed
                      success:(QuecGroupBatchResultBlock)success
                      failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| groupIds |	Y|Group ID list.|
| fid |	N|Home ID.|
| isCommonUsed |	N|Whether the device is commonly used.<br />0-Not commonly used<br />1-Commonly used|
| success |	N|Callback function of successful executions.	|
| failure |	N|Callback function of failed executions.	|

**QuecGroupBatchResultBean Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| code       | NSString             | Code. |
| msg       | NSString             | Prompt message. |
| gdid       | NSString             | Group ID. |

**Example**

```objc
[QuecGroupService.sharedInstance batchAddCommonWithIds:@[@"group id1", @"group id2"] fid:@"fid" isCommonUsed:YES success:^(NSArray<QuecGroupBatchResultBean *> * _Nonnull successList, NSArray<QuecGroupBatchResultBean *> * _Nonnull failList) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Move Group to New Room

**API**

Move groups to a new room in batches. This API is effective only when the home mode is enabled.

```objc
- (void)batchMovingWithIds:(NSArray<NSString *> *)groupIds
                   newFrid:(NSString *)newFrid
                   success:(QuecGroupBatchResultBlock)success
                   failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| groupIds |	Y|Group ID list.|
| newFrid |	N|New room ID.|
| success |	N|Callback function of successful executions.	|
| failure |	N|Callback function of failed executions.	|

>See QuecGroupBatchResultBean Definition above.

**Example**

```objc
[QuecGroupService.sharedInstance batchMovingWithIds:@[@"group id1", @"group id2"] newFrid:@"new frid" success:^(NSArray<QuecGroupBatchResultBean *> * _Nonnull successList, NSArray<QuecGroupBatchResultBean *> * _Nonnull failList) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Delete Groups in Batches

**API**

Delete groups in batches.

```objc
- (void)deleteGroupWithIds:(NSArray<NSString *> *)groupIds
                   success:(QuecGroupBatchResultBlock)success
                   failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| groupIds |	Y|Group ID list.|
| success |	N|Callback function of successful executions.	|
| failure |	N|Callback function of failed executions.	|

>See QuecGroupBatchResultBean Definition above.

**Example**

```objc
[QuecGroupService.sharedInstance deleteGroupWithIds:@[@"group id1", @"group id2"] success:^(NSArray<QuecGroupBatchResultBean *> * _Nonnull successList, NSArray<QuecGroupBatchResultBean *> * _Nonnull failList) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Set Group Sharing Information

**API**

Set the sharing information of the group.

```objc
- (void)getShareCodeWithGroupId:(NSString *)groupId
              acceptingExpireAt:(long)acceptingExpireAt
           isSharingAlwaysValid:(BOOL)isSharingAlwaysValid
                sharingExpireAt:(long)sharingExpireAt
                      coverMark:(NSInteger)coverMark
                        success:(void(^)(NSString *shareCode))success
                        failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| groupId |	Y|Group ID.|
| acceptingExpireAt |	Y|Expiration time of the shared QR code, in milliseconds. This share will expire if it is not used before the expiration time.|
| isSharingAlwaysValid |	Y|Whether the device sharing is permanently valid.|
| sharingExpireAt |	Y|Expiration time of the device usage, in milliseconds. The shared group can be used by the recipient before the expiration time. <br/>If this parameter is omitted, the share will be valid permanently.|
| coverMark |	Y|Overwrite flag. Default value: 1.<br/>1 Directly overwrite the previous valid share (overwrite the existing sharing code)<br/>2 Add a new share directly, allowing multiple shares to coexist<br/>3 Overwrite the previous share only when the sharing time is extended.|
| success |	N|Callback function of successful executions.	|
| failure |	N|Callback function of failed executions.	|

**Example**

```objc
[QuecGroupService.sharedInstance getShareCodeWithGroupId:@"your groupId" acceptingExpireAt:1745214106879 isSharingAlwaysValid:YES sharingExpireAt:sharingExpireTS(MS) coverMark:1 success:^(NSString * _Nonnull shareCode) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Get Group Shared Recipient List

**API**

Get the recipient list to whom the group is shared.

```objc
- (void)getSharedListsWithGroupId:(NSString *)groupId
                          success:(void(^)(NSArray<QuecShareUserModel *> *list))success
                          failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| groupId |	Y|Group ID.|
| success |	N|Callback function of successful executions.	|
| failure |	N|Callback function of failed executions.	|

**QuecShareUserModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| shareInfo       | QuecShareUserShareInfoModel             | Sharing information. |
| userInfo       | QuecShareUserInfoModel             | User information. |

**QuecShareUserShareInfoModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| acceptTime       | NSString             | Time to accept the sharing. |
| acceptingExpireAt       | NSString             | Expiration time of accepting the sharing. |
| coverMark       | NSInteger             | Overwrite flag. |
| deviceName       | NSString             | Device name. |
| dk       | NSString             | DeviceKey. |
| ownerUid       | NSString             | Owner ID. |
| pk       | NSString             | ProductKey. |
| shareCode       | NSString             | Share code. |
| shareId       | NSString             | Sharing ID. |
| shareStatus       | NSInteger             | Sharing status. |
| shareTime       | NSString             | Time to create the sharing. |
| shareUid       | NSString             | User ID of the share recipient. |
| sharingExpireAt       | NSString             | Expiration time of the sharing after the sharing is accepted. |
| updateTime       | NSString             | Update time. |

**Example**

```objc
[QuecGroupService.sharedInstance getSharedListsWithGroupId:@"your groupId" success:^(NSArray<QuecShareUserModel *> * _Nonnull list) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Initiator Cancel Sharing

**API**

The share initiator cancels the sharing.

```objc
- (void)ownerUnShareWithShareCode:(NSString *)shareCode
                          success:(QuecVoidBlock)success
                          failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| shareCode |	Y|Share code.|
| success |	N|Callback function of successful executions.	|
| failure |	N|Callback function of failed executions.	|

**Example**

```objc
[QuecGroupService.sharedInstance ownerUnShareWithShareCode:@"share code" success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Recipient Cancel Sharing

**API**

The share recipient cancels the sharing.

```objc
- (void)unShareWithShareCode:(NSString *)shareCode
                     success:(QuecVoidBlock)success
                     failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| shareCode |	Y|Share code.|
| success |	N|Callback function of successful executions.	|
| failure |	N|Callback function of failed executions.	|

**Example**

```objc
[QuecGroupService.sharedInstance unShareWithShareCode:@"share code" success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Accept Sharing

**API**

The share recipient accepts the sharing.

```objc
- (void)acceptShareWithShareCode:(NSString *)shareCode
                         success:(QuecVoidBlock)success
                         failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| shareCode |	Y|Share code.|
| success |	N|Callback function of successful executions.	|
| failure |	N|Callback function of failed executions.	|

**Example**

```objc
[QuecGroupService.sharedInstance acceptShareWithShareCode:@"share code" success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Query Group-sharing Information

**API**

Query the group-sharing information.

```objc
- (void)getShareGroupInfoWithShareCode:(NSString *)shareCode
                            success:(void (^)(QuecGroupBasicInfoBean *infoBean))success
                            failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| shareCode |	Y|Share code.|
| success |	N|Callback function of successful executions.	|
| failure |	N|Callback function of failed executions.	|

**QuecGroupBasicInfoBean Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| gdid       | NSString             | Group ID. |
| productkey       | NSString             | ProductKey. |
| groupDeviceName       | NSString             | Group name. |
| onlinestatus       | NSUInteger             | Group online status.<br />0-Offline <br />1-Online |
| logoImage       | NSString             | Group logo. |
| fid       | NSString             | Home ID. |
| frid       | NSString             | Room ID. |

**Example**

```objc
[QuecGroupService.sharedInstance getShareGroupInfoWithShareCode:@"share code" success:^(QuecGroupBasicInfoBean * _Nonnull infoBean) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```
