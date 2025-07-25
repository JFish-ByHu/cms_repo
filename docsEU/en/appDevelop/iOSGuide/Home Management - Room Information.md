# Room Information

## Feature Description

This section introduces how to manage rooms in a home, including creating a room, editing a room name, deleting a room, moving a device to a room, setting room orders, and querying device lists in a room.

## Room Management

### Create Room

**API**

Create a room in a home.

```objc
- (void)addFamilyRoomWithFid:(NSString *)fid
                    roomName:(NSString *)roomName
                     success:(QuecVoidBlock)success
                     failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| fid |	Y|Home ID.|
| roomName |	Y|Room name.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecSmartHomeService.sharedInstance addFamilyRoomWithFid:@"your fid" roomName:@"room name" success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Edit Room Name

**API**

Edit a room name.

```objc
- (void)setFamilyRoomWithFrid:(NSString *)frid
                     roomName:(NSString *)roomName
                      success:(QuecVoidBlock)success
                      failure:(QuecErrorBlock)failure;
```

**ParameterDescription**

|Parameter| Required |Description|
| --- | --- | --- |
| frid |	Y|Room ID.|
| roomName |	Y|Room name.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecSmartHomeService.sharedInstance setFamilyRoomWithFrid:@"your frid" roomName:@"room name" success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Delete Room

**API**

Delete a room or multiple rooms in batches.

```objc
- (void)deleteFamilyRoomsWithIds:(NSArray<NSString *> *)fridList
                         success:(QuecVoidBlock)success
                         failure:(QuecErrorBlock)failure;
```

**ParameterDescription**

|Parameter| Required |Description|
| --- | --- | --- |
| fridList |	Y|Room ID list.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecSmartHomeService.sharedInstance deleteFamilyRoomsWithIds:@[@"room id1", @"room id2"] success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```


### Move Device to Room

**API**

Move a device or multiple devices in batches to a room.

```objc
- (void)addDeviceInFamilyRoomWithDeviceList:(NSArray<QuecAddDeviceEnterModel *> *)deviceList
                                    success:(void(^)(QuecFamilyAddDeviceModel *model))success
                                    failure:(QuecErrorBlock)failure;
```

**ParameterDescription**

|Parameter| Required |Description|
| --- | --- | --- |
| deviceList |	Y|Device list.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecAddDeviceEnterModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| pk       | NSString             | ProductKey. |
| dk       | NSString             | DeviceKey. |
| oldFrid       | NSString             | Original room ID. |
| nFrid       | NSString             | New room ID. |

**QuecFamilyAddDeviceModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| successList       | NSArray<QuecFamilyAddDeviceListModel *> *             | List of successful executions. |
| failureList       | NSArray<QuecFamilyAddDeviceListModel *> *             | List of failed executions. |

**QuecFamilyAddDeviceListModel Definition**

| Field    | Type               | Description |
|----------|--------------------|---------|
| oldFrid  | NSString             | Original room ID. |
| nFrid    | NSString             | New room ID. |
| pk       | NSString             | ProductKey. |
| dk       | NSString             | DeviceKey |
| code     | NSInteger             | Error code (Only valid for *failureList*) |
| NSString | NSString             | Error message (Only valid for *failureList*) |

**Example**

```objc
QuecAddDeviceEnterModel *addEnterModel = QuecAddDeviceEnterModel.new;
addEnterModel.pk = @"pk";
addEnterModel.dk = @"dk";
addEnterModel.oldFrid = @"old frid";
addEnterModel.nFrid = @"new frid";
[QuecSmartHomeService.sharedInstance addDeviceInFamilyRoomWithDeviceList:@[addEnterModel] success:^(QuecFamilyAddDeviceModel *model) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Set Room Order

**API**

Set the room order and display priority.

```objc
- (void)setFamilyRoomSortWithRoomRortList:(NSArray<QuecSortDeviceEnterModel *> *)roomSortList
                                  success:(QuecVoidBlock)success
                                  failure:(QuecErrorBlock)failure;
```

**ParameterDescription**

|Parameter| Required |Description|
| --- | --- | --- |
| roomSortList |	Y|Room array to be sorted.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecSortDeviceEnterModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| frid       | NSString             | Room ID. |
| roomSort       | NSString             | Room order, starting from 0, with the lower numbers at the front of the list, non-consecutive values allowed but duplicate values prohibited. |

**Example**

```objc
QuecSortDeviceEnterModel *sort0 = QuecSortDeviceEnterModel.new;
sort0.roomSort = @"0";
sort0.frid = @"first frid";
QuecSortDeviceEnterModel *sort1 = QuecSortDeviceEnterModel.new;
sort1.roomSort = @"1";
sort1.frid = @"second frid";
[QuecSmartHomeService.sharedInstance setFamilyRoomSortWithRoomRortList:@[sort0, sort1]
                                                                success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Query Device List in Room

**API**

Query device list in a room.

```objc
- (void)getFamilyRoomDeviceListWithFrid:(NSString *)frid 
                             pageNumber:(NSInteger)pageNumber
                               pageSize:(NSInteger)pageSize
                      isGroupDeviceShow:(BOOL)isGroupDeviceShow
                                success:(void(^)(NSArray <QuecDeviceModel *> *list, NSInteger total))success 
                                failure:(QuecErrorBlock)failure;
```

**ParameterDescription**

|Parameter| Required |Description|
| --- | --- | --- |
| frid |	Y|Room ID.|
| pageNumber |	N|Page number. Default value: 1.|
| pageSize |	N|Page size. Default value: 10.|
| isGroupDeviceShow |	N|Whether to display group devices. Default: Not display|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

>The QuecDeviceModel Definition is the same as the SDK description in the *Device Management* section.

**Example**

```objc
[QuecSmartHomeService.sharedInstance getFamilyRoomDeviceListWithFrid:@"your frid"
                                                              pageNumber:1
                                                                pageSize:10
                                                       isGroupDeviceShow:YES
                                                                 success:^(NSArray<QuecDeviceModel *> *list, NSInteger total) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Query Room List in Home

**API**

Query the room list in a home.

```objc
- (void)getFamilyRoomListWithFid:(NSString *)fid
                      pageNumber:(NSInteger)pageNumber
                        pageSize:(NSInteger)pageSize
                         success:(void(^)(NSArray <QuecFamilyRoomItemModel *> *list, NSInteger total))success
                         failure:(QuecErrorBlock)failure;
```

**ParameterDescription**

|Parameter| Required |Description|
| --- | --- | --- |
| fid |	Y|Home ID.|
| pageNumber |	N|Page number. Default value: 1.|
| pageSize |	N|Page size. Default value: 10.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

>See QuecFamilyRoomItemModel Definition above.

**Example**

```objc
[QuecSmartHomeService.sharedInstance getFamilyRoomListWithFid:@"your fid"
                                                       pageNumber:1
                                                         pageSize:10
                                                          success:^(NSArray<QuecFamilyRoomItemModel *> *list, NSInteger total) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```


### Edit Device Information

**API**

Edit device information, such as setting the room information and whether the device is commonly used.

```objc
- (void)setDeviceInfoWithModelArray:(NSArray<QuecSetDeviceInfoModel *> *)modelArray
                            success:(void(^)(QuecOperateDeviceRespModel *model))success
                            failure:(QuecErrorBlock)failure;
```

**ParameterDescription**

|Parameter| Required |Description|
| --- | --- | --- |
| modelArray |	N|The list of devices to be configured with room information.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecSetDeviceInfoModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| fid       | NSString             | Home ID. |
| dk       | NSString             | DeviceKey. |
| pk       | NSString             | ProductKey. |
| deviceName       | NSString             | Device name. |
| isCommonUsed       | BOOL             | Whether the device is commonly used.<br />*true*-Commonly used.<br />*false*-Not commonly used. |
| type       | int             | Device type.<br />1-Home device<br />2-Shared device<br />3-Multi-bound device |
| oldFrid       | NSString             | Original room ID from which the device is moved out. |
| selectFrid       | NSString             | New room ID into which the device is moved. |
| shareCode       | NSString             | Share code. |

**Example**

```objc
QuecSetDeviceInfoModel *setInfoModel = QuecSetDeviceInfoModel.new;
setInfoModel.fid = @"your fid";
setInfoModel.dk = @"dk";
setInfoModel.pk = @"pk";
setInfoModel.deviceName = @"device name";
setInfoModel.isCommonUsed = YES;
setInfoModel.type = 3;
setInfoModel.oldFrid = @"old frid"; /// can be null
setInfoModel.selectFrid = @"select frid";
[QuecSmartHomeService.sharedInstance setDeviceInfoWithModelArray:@[setInfoModel]
                                                            success:^(QuecOperateDeviceRespModel *model) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```
