# Timer Management - Remote Timing

## Feature Description

Device timer management supports operations such as creating, editing, deleting, querying a list of timed tasks, and querying details of timed tasks.

```objc
#import <QuecDeviceKit/QuecDeviceKit.h>
/// Initialization.
[QuecDeviceService sharedInstance]
```

## Timer Management

### Create Timed Task

**API**

Create a timed task.

```objc
- (void)addCornJobWithCornJobModel:(QuecCornJobModel *)cornJobModel 
                            success:(void(^)(NSString *ruleId))success
                            failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| cornJobModel | Y | QuecCornJobModel class |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecCornJobModel Definition**

| Field    | Type              | Description |
|-----------|--------------------|---------|
| createTime  | NSInteger   | Creation time. |
| productKey  | NSString   | ProductKey. |
| deviceKey  | NSString   | DeviceKey. |
| ruleId  | NSString   | Rule ID, required when you modify rule instance information. |
| type  | NSString   | Timed task type.<br />once: execute once<br />day-repeat: repeat daily<br />custom-repeat: custom repeat<br />multi-section: multi-segment execution<br />random: execute randomly<br />delay: delayed execution - countdown |
| enabled  | BOOL   | Status of timed tasks.<br />false-Stopped (default)<br />true-Started |
| dayOfWeek  | NSString   | Execution day, required when *type* = custom-repeat. You can select multiple days and separate them by commas.<br />1-Monday <br />2-Tuesday<br />3-Wednesday<br />4-Thursday<br />5-Friday<br />6-Saturday<br />7-Sunday |
| timers  | NSArray<QuecCornTimersModel *> *   | Details of the timed task. |

**QuecCornTimersModel Definition**

| Field    | Type              | Description |
|-----------|--------------------|---------|
| action  | NSString   | Command to execute the timed task. Format: JSON string in TSL model. |
| delay  | NSInteger   | Delayed execution time, required when *type* = delay. Unit: second. |
| endTime  | NSString   | End time, required when *type* = random. Format: "HH:mm:ss", such as "12:00:00". |
| startTime  | NSString   | Start time, required when *type* = random. Format: "HH:mm:ss", such as "12:00:00". |
| time  | NSString   | Execution time, required when *type* = once. Format: "HH:mm:ss". |
| timerId  | NSString   | ID of the timed task. |

**Example**

```objc
QuecCornJobModel *jobModel = QuecCornJobModel.new;
jobModel.productKey = @"";
jobModel.type = .....;
[QuecDeviceService.sharedInstance addCornJobWithCornJobModel:jobModel success:^(NSString *ruleId) {
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```
### Edit Timed Task

**API**

Edit a timed task.

```objc
- (void)setCronJobWithCornJobModel:(QuecCornJobModel *)cornJobModel 
                           success:(void(^)(NSDictionary *data))success
                           failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| cornJobModel | Y | QuecCornJobModel class |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

>See QuecCornJobModel Definition above.

**Example**

```objc
QuecCornJobModel *jobModel = QuecCornJobModel.new;
jobModel.productKey = @"";
jobModel.type = .....;
[[QuecDeviceService sharedInstance] setCronJobWithCornJobModel:jobModel success:^(NSDictionary *data){
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```


### Query Timed Task List

**API**

Query the list of timed tasks under a device.

```objc
- (void)getCronJobListWithDeviceKey:(NSString *)deviceKey 
                          productKey:(NSString *)productKey
                                 type:(NSString *)type
                          pageNumber:(NSInteger)pageNumber
                            pageSize:(NSInteger)pageSize
                             success:(void(^)(NSArray<QuecCornJobModel *> *list, NSInteger total))success
                             failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| productKey | Y | ProductKey. |
| deviceKey | Y | DeviceKey. |
| type | Y | Timed task type.<br />once: execute once<br />day-repeat: repeat daily<br />custom-repeat: custom repeat<br />multi-section: multi-segment execution<br />random: execute randomly<br />delay: delayed execution - countdown |
| pageNumber | N | Page number. Default value: 1. |
| pageSize | N | Page size. Default value: 10. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

>See QuecCornJobModel Definition above.

**Example**

```objc
[[QuecDeviceService sharedInstance] getCronJobListWithDeviceKey:@"deviceKey" productKey:@"productKey type:@"type" pageNumber:page pageSize:pageSize success:^(NSArray<QuecCornJobModel *> *list, NSInteger total) {
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Query Timed Task Details

**API**

Query the details of a timed task.

```objc
- (void)getCronJobInfoWithRuleId:(NSString *)ruleId 
                          success:(void(^)(QuecCornJobModel *cornJobModel))success
                          failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| ruleId | Y | Timed task ID. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

>See QuecCornJobModel Definition above.

**Example**

```objc
[[QuecDeviceService sharedInstance] getCronJobInfoWithRuleId:@"ruleId" success:^(QuecCornJobModel *model) {
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Delete Timed Tasks in Batches

**API**

Delete timed tasks in batches.

```objc
- (void)batchDeleteCronJobWithParams:(NSDictionary *)params 
                               success:(void(^)(QuecCornJobDeleteListModel *model))success
                               failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| params | Y | ruleIdList:[Array of timed task IDs.] |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecCornJobDeleteListModel Definition**

| Field    | Type              | Description |
|-----------|--------------------|---------|
| successList  | NSArray<QuecCornJobDeleteModel *> *   | List of successful executions. |
| failureList  | NSArray<QuecCornJobDeleteModel *> *   | List of failed executions. |

**QuecCornJobDeleteModel Definition**

| Field    | Type              | Description |
|-----------|--------------------|---------|
| code  | NSString  | Code. |
| msg  | NSString  | Prompt message. |
| ruleId  | NSString   | Timed task ID. |

**Example**

```objc
[QuecDeviceService.sharedInstance batchDeleteCronJobWithParams:@{ruleIdList:@[@"1"， @"2"]} success:^(QuecCornJobDeleteListModel *model) {
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Query Maximum Number of Timed Tasks

**API**

Query the maximum number of timed tasks under a product.

```objc
- (void)getProductCornJobLimitWithProductKey:(NSString *)productKey 
                                       success:(void(^)(NSInteger limit))success
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
[[QuecDeviceService sharedInstance] getProductCornJobLimitWithProductKey:@"productKey" success:^(NSInteger limit) {
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```
