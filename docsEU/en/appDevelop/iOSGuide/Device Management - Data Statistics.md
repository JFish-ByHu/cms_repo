# Device Data Statistics

## Feature Description

The device data statistics feature is mainly used to obtains device-related statistical information.

```objc
#import <QuecDeviceKit/QuecDeviceKit.h>
/// Initialize
[QuecDeviceStatisticsService sharedInstance]
```

## Data Statistics

### Query Device's Historical Trajectory

**API**

Query a device's historical trajectory.

```objc
- (void)getLocationHistoryWithProductKey:(NSString *)productKey
                                 deviceKey:(NSString *)deviceKey
                           startTimestamp:(NSInteger)startTimestamp
                             endTimestamp:(NSInteger)endTimestamp
                                gatewayDk:(NSString *)gatewayDk
                                gatewayPk:(NSString *)gatewayPk
                              locateTypes:(NSString *)locateTypes
                                  success:(void(^)(NSArray<QuecLocationHistoryModel *> *list))success
                                  failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| productKey | Y | ProductKey. |
| deviceKey | Y | DeviceKey. |
| startTimestamp | Y | Start time (timestamp in millisecond). |
| endTimestamp | Y | End time (timestamp in millisecond). |
| gatewayDk | N | Gateway DeviceKey. |
| gatewayPk | N | Gateway ProductKey. |
| locateTypes | N | Positioning type (query all types of positioning by default). Separate multiple positionings by commas. <br />GNSS-Global Navigation Satellite System<br />GPS-Global Positioning System<br />GL-Global Navigation Satellite System<br />GA-Galileo Positioning System<br />BD/PQ-BeiDou Navigation Satellite System<br />LBS-Location-Based Service |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecLocationHistoryModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| bdLat  | NSNumber | Device latitude (BD09). |
| bdLng  | NSNumber | Device longitude (BD09). |
| deviceKey  | NSString | DeviceKey. |
| gcjLat  | NSNumber | Device latitude (GCJ02). |
| gcjLng  | NSNumber | Device longitude (GCJ02). |
| hdop  | NSNumber | Horizontal dilution of precision (0.5 – 99.99). |
| locateId  | NSString | Trajectory ID. |
| locateType  | NSInteger | Location method.<br />0-GNSS<br />1-LBS<br />2-Manual fixed-point |
| locationTime  | NSString | Positioning time. |
| productKey  | NSString | ProductKey. |
| satellites  | NSInteger | Current number of satellites. |
| tsLocateTime  | NSInteger | The latest positioning time (timestamp). |
| wgsLat  | NSNumber | Device latitude (WGS84). |
| wgsLng  | NSNumber | Device longitude (WGS84). |

**Example**

```objc
[QuecDeviceStatisticsService.sharedInstance getLocationHistoryWithProductKey:@"productKey"
                                                                       deviceKey:@"deviceKey"
                                                                  startTimestamp:startTimestamp
                                                                    endTimestamp:endTimestamp
                                                                       gatewayDk:@"gatewayDk"
                                                                       gatewayPk:@"gatewayPk"
                                                                     locateTypes:locateTypes
                                                                         success:^(NSArray<QuecLocationHistoryModel *> * _Nonnull list) {
/// Next Action
} failure:^(NSError *error) {
NSLog(@"check error: %@", error);
}];
```

### Query List of Device Property Chart

**API**

Query a list of device property charts.

```objc
- (void)getPropertyChartListWithProductKey:(NSString *)productKey
                                   deviceKey:(NSString *)deviceKey
                             startTimestamp:(NSInteger)startTimestamp
                               endTimestamp:(NSInteger)endTimestamp
                              attributeCode:(NSString *)attributeCode
                                  gatewayDk:(NSString *)gatewayDk
                                  gatewayPk:(NSString *)gatewayPk
                                  countType:(NSInteger)countType
                            timeGranularity:(NSInteger)timeGranularity
                                    success:(void(^)(NSArray<QuecPropertyChartListModel *> *dataArray))success
                                    failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| productKey | Y | ProductKey. |
| deviceKey | Y | DeviceKey. |
| startTimestamp | Y | Start time (timestamp in millisecond). |
| endTimestamp | Y | End time (timestamp in millisecond). |
| attributeCode | N | TSL model property identifier. Separate multiple properties by commas. |
| gatewayDk | N | Gateway DeviceKey. |
| gatewayPk | N | Gateway ProductKey. |
| countType | N | Aggregation type (Default value: 3). <br />1-Maximum<br />2-Minimum<br />3-Average<br />4-Difference. |
| timeGranularity | N | Statistical time granularity (Default value: 3).<br />1-Month<br />2-Day<br />3-Hour<br />4-Minute<br />5-Second |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecPropertyChartListModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| propertyCode  | NSString | TSL code. |
| xaxisData  | NSArray<NSString  *> | Recording time. |
| xaxisDataTs  | NSArray<NSNumber *> | Timestamp. |
| yaxisData  | NSArray | Property content. |

**Example**

```objc
[QuecDeviceStatisticsService.sharedInstance getPropertyChartListWithProductKey:@"productKey"
                                                                         deviceKey:@"deviceKey"
                                                                    startTimestamp:startTimestamp
                                                                      endTimestamp:endTimestamp
                                                                     attributeCode:@"code1,code2,code3"
                                                                         gatewayDk:@"gatewayDk"
                                                                         gatewayPk:@"gatewayPk"
                                                                         countType:countType
                                                                   timeGranularity:timeGranularity
                                                                           success:^(NSArray<QuecPropertyChartListModel *> * _Nonnull dataArray) {
    /// Next Action
} failure:^(NSError *error) {
NSLog(@"check error: %@", error);
}];
```

### Query Device Property MoM Statistical Data

**API**

Query device property MoM statistical data.

```objc
- (void)getPropertyStatisticsPathWithProductKey:(NSString *)productKey
                                        deviceKey:(NSString *)deviceKey
                                 currentTimestamp:(NSInteger)currentTimestamp
                                    attributeCode:(NSString *)attributeCode
                                        gatewayDk:(NSString *)gatewayDk
                                        gatewayPk:(NSString *)gatewayPk
                                        countType:(NSInteger)countType
                                timeGranularities:(NSString *)timeGranularities
                                          success:(void(^)(NSArray<QuecPropertyStatisticsModel *> *dataArray))success
                                          failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| productKey | Y | ProductKey. |
| deviceKey | Y | DeviceKey. |
| currentTimestamp | Y | Current time (timestamp in millisecond). |
| attributeCode | N | TSL model property identifier. Separate multiple properties by commas. |
| gatewayDk | N | Gateway DeviceKey. |
| gatewayPk | N | Gateway ProductKey. |
| countType | N | Aggregation type (Default value: 3). <br />1-Maximum<br />2-Minimum<br />3-Average<br />4-Difference. |
| timeGranularities | N | Statistical time granularity (Default value: 1). Separate multiple granularities by commas. <br />1-Day <br />2-Week <br />3-Month <br />4-Year |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecPropertyStatisticsModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| statValue  | NSArray | Current MoM value. |
| timeGranularity  | NSInteger | Time units. <br />1-Day<br />2-Week<br />3-Month<br />4-Year |

**Example**

```objc
[QuecDeviceStatisticsService.sharedInstance getPropertyStatisticsPathWithProductKey:@"productKey"
                                                                              deviceKey:@"deviceKey"
                                                                       currentTimestamp:currentTimestamp
                                                                          attributeCode:@"code1,code2,code3"
                                                                              gatewayDk:@"gatewayDk"
                                                                              gatewayPk:@"gatewayPk"
                                                                              countType:countType
                                                                      timeGranularities:timeGranularities
                                                                                success:^(NSArray<QuecPropertyStatisticsModel *> * _Nonnull dataArray) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Query Property Data List

**API**

Query a property data list.

```objc
- (void)getPropertyDataListWithProductKey:(NSString *)productKey
                                  deviceKey:(NSString *)deviceKey
                             startTimestamp:(NSInteger)startTimestamp
                               endTimestamp:(NSInteger)endTimestamp
                              attributeCode:(NSString *)attributeCode
                                  gatewayDk:(NSString *)gatewayDk
                                  gatewayPk:(NSString *)gatewayPk
                                 pageNumber:(NSInteger)pageNumber
                                   pageSize:(NSInteger)pageSize
                                    success:(void(^)(NSArray<QuecPropertyDataListModel *> *list, NSInteger total))success
                                    failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| productKey | Y | ProductKey. |
| deviceKey | Y | DeviceKey. |
| startTimestamp | Y | Start time (timestamp in millisecond). |
| endTimestamp | Y | End time (timestamp in millisecond). |
| attributeCode | N | TSL property identifier. Separate multiple properties by commas. |
| gatewayDk | N | Gateway DeviceKey. |
| gatewayPk | N | Gateway ProductKey. |
| pageNumber | N | Current Page. Default value: 1. |
| pageSize | N | Page size: Default value: 10. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecDeviceStatisticsService.sharedInstance getPropertyDataListWithProductKey:@"productKey"
                                                                        deviceKey:@"deviceKey
                                                                   startTimestamp:startTimestamp 
                                                                     endTimestamp:endTimestamp
                                                                    attributeCode:@"code1,code2,code3"
                                                                        gatewayDk:@"gatewayDk"
                                                                        gatewayPk:@"gatewayPk"
                                                                       pageNumber:1
                                                                         pageSize:10 success:^(NSArray<QuecPropertyDataListModel *> * _Nonnull list, NSInteger total) {
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```
