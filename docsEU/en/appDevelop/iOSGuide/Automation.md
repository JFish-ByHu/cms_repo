# Automation SDK: QuecAutomateKit

## Feature Description

The SDK supports the user to configure certain rules to make the device perform the specified actions under the specified conditions.

```objc
#import <QuecAutomateKit/QuecAutomateKit.h>
/// Initialization.
[QuecAutomateService sharedInstance]
```

## SDK Integration Method

> **Note**
>
> The automation SDK depends on the core library QuecIotSdk to run. Please integrate the core library according to the *IoT SDK Integration Guide*.

```objc
pod 'QuecAutomateKit', '~> 0.3.0'
```

## Automation Management

### Obtain Automation List

**API**

Obtain the automation list by paging request.

```objc
- (void)getAutomationListWithPageNumber:(NSInteger)pageNumber
                               pageSize:(NSInteger)pageSize
                                success:(QuecAutomationModelsSuccessBlock)success
                                failure:(QuecErrorBlock)failure;
```

**Parameter**

| Parameter  | Required | Description |
|------------|------|------|
| pageNumber | Y    | Page number. |
| pageSize   | Y    | Page size. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecAutomateService.sharedInstance getAutomationListWithPageNumber:1 pageSize:10 success:^(NSArray<QuecAutomateModel *> * _Nonnull models, NSUInteger total) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

**QuecAutomateModel Definition**

| Field        | Type      | Description    |
| ------------ | --------- | -------------- |
| automationId | long long | Automation ID. |
| fid          | String                                  | Home ID. This parameter is only required when the home mode is enabled.   
| conditionType | QuecAutomateConditionRuleType                                     | Trigger type.<br />QuecAutomateConditionRuleAny = 1 //1 - Meet any condition<br />QuecAutomateConditionRuleAll //2 - Meet all conditions   |
| name          | String                                  | Automation name.                   |
| nameType      | int                                     | Automation name generation method. <br />1 - System generated<br />2 - User filled |
| status        | boolean                                 | Enablement status.<br />true: Enabled<br />false: Disabled   |
| precondition   | QuecAutomationPreconditionModel | Effective time.                    |
| conditions   | NSArray<QuecAutomationConditionModel *> * | Trigger conditions.                   |
| actions    | NSArray<QuecAutomationActionModel *> *    | Execution actions.                    |

**QuecAutomationPreconditionModel Definition**

| Field | Type   | Description      |
|------|--------|------------------|
| effectDateType | QuecAutomateEffectDateType | Effective date.<br />QuecAutomateEffectDateTypeEveryday = 0, /// Every day<br />QuecAutomateEffectDateTypeWeekly,       /// Weekly<br />QuecAutomateEffectDateTypeMonthly,      /// Monthly<br />QuecAutomateEffectDateTypeNamedDate     /// Specified dates |
| effectTimeType | QuecAutomateEffectTimeType | Effective time.<br />QuecAutomateEffectTimeTypeDaytime = 0, /// Daytime<br />QuecAutomateEffectTimeTypeNight,       /// Nighttime<br />QuecAutomateEffectTimeTypeWholeDay,      /// The whole day<br />QuecAutomateEffectTimeTypeSpecificTimePeriod     /// Specific time period |
| startTime | NSString    | Start time, required when *effectTimeType* = QuecAutomateEffectTimeTypeWholeDay/QuecAutomateEffectTimeTypeSpecificTimePeriod. Format: HH:mm. |
| endTime | NSString    | End time, required when *effectTimeType* = QuecAutomateEffectTimeTypeWholeDay/QuecAutomateEffectTimeTypeSpecificTimePeriod. Format: HH:mm. |
| effectDate | NSString    | Effective date, omitted when *effectDateType* = QuecAutomateEffectDateTypeEveryday. Every week: 1,2,3,...7 indicates Monday to Sunday. Weekly: 1st to 31st. Specified date format: MM-dd/MM-dd, e.g., 12-19/12-2. |
| regionName | NSString    | Region name. |
| location | NSString    | Longitude and latitude. |
| timeZone | NSString    | Time zone. |

**QuecAutomationConditionModel Definition**

| Field      | Type                    | Description          |
|------------|-------------------------|----------------------|
| type       | int                     | Trigger type. <br />1 - Meet any condition<br />2 - Meet all conditions |
| icon       | String                  | Icon.              |
| name       | String                  | Condition name.  |
| timer      | QuecAutomationTimeModel | Trigger time.    |
| productKey | String                  | Device ProductKey. |
| deviceKey  | String                  | DeviceKey. |
| property   | QuecAutoProductTSLModel | Device property. |
| sort       | int                     | Condition order, starting from 1 incrementally. |

**QuecAutomationTimeModel Definition**

| Field     | Type   | Description                                                |
| --------- | ------ | ---------------------------------------------------------- |
| type      | int    | Timing type.<br />0 - Once<br />1 - Daily<br />2 - Custom  |
| time      | String | Scheduled time in 24-hour format, e.g., 23:00.             |
| dayOfWeek | String | Custom time range, formatted as "1,3,4", separated by ",". |
| timeZone  | String | Time zone ID, e.g., GMT+08:00.                             |

**QuecAutomationPropertyModel Definition**

| Field    | Type   | Description                                                        |
|----------|--------|--------------------------------------------------------------------|
| identifier       | int    | TSL ID.                                                 |
| code     | String | TSL identifier. Identifier is used because ID is the keyword for Objective-C. |
| name     | String | TSL name.                                               |
| compare  | String | Comparison operator when used as a condition: > >= < <= == != REPORT COUNT, where REPORT is reported data. |
| unit     | String | Unit.                                                            |
| dataType | String | Data type.                                                   |
| value    | String | Property value.                                                 |
| subName  | String | Data type.                                                     |

**QuecAutomationActionModel Definition**

| Field      | Type                    | Description                                            |
|------------|-------------------------|--------------------------------------------------------|
| type       | int                     | Action type.<br />1 - Delay execution of subsequent action<br />2 - Modify device property<br />3 - Modify group property<br />4 - Execute scene |
| icon       | String                  | Icon.                                                |
| name       | String                  | Name.                                                |
| productKey | String                  | Device ProductKey.                        |
| deviceKey  | String                  | DeviceKey.                                 |
| sceneId    | String                  | Scene ID.                                          |
| delayTime  | NSNumber                     | Delay time in seconds.                         |
| sort       | int                     | Action order, starting from 1 incrementally. |
| property   | QuecAutomationPropertyModel | Device property.                                   |

### Create Automation

**API**

Creating an automation rule can be divided into four parts:

1. Basic information
    1. Name
2. Effective time
    1. Time period
       1. Specific time period (0:00 – 23:59:59)
       2. The whole day
       3. Daytime/Nighttime
    2. Date
       1. Every day
       2. The nth day of each week
       3. The nth day of each month
       4. Specified start date and end date
3. Trigger condition
    1. Condition selection
       1. Meet any condition
       2. Meet all conditions
    2. Condition type (multiple are allowed)
       1. Linked conditions of specified devices
       2. Timer
          1. Specific time of a day
          2. Which days of each week
4. Execution actions (multiple are allowed)
    1. Execute device linkage configuration
    2. Execute specified scene
    3. Add a scheduled task

After filling in all the information of the four parts, a usable rule can be created.

```objc
- (void)addAutomationWithModel:(QuecAutomateModel *)model
                       success:(QuecVoidBlock)success
                       failure:(QuecErrorBlock)failure;
```

**Parameter**

| Parameter       | Required | Description |
|-----------------|------|-------|
| model | Y    | Automation information |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
QuecAutomationPreconditionModel *precondition = [[QuecAutomationPreconditionModel alloc] init];
precondition.effectDate = @"";
precondition.effectDateType = QuecAutomateEffectDateTypeEveryday;
precondition.effectTimeType = QuecAutomateEffectTimeTypeWholeDay;
precondition.location = @"";
precondition.timeZone = @"GMT+08:00";

QuecAutomationTimeModel *time = QuecAutomationTimeModel.new;
time.type = 0;
time.time = @"14:10";
time.dayOfWeek = @"";
time.timeZone = @"GMT+8:00";
QuecAutomationConditionModel *condition = [[QuecAutomationConditionModel alloc] initWithType:1
                                                                                        icon:@""
                                                                                        name:@""
                                                                                        timer:time
                                                                                    productKey:@""
                                                                                    deviceKey:@""
                                                                                    property:nil
                                                                                        sort:1];
QuecAutomationActionModel *action = [[QuecAutomationActionModel alloc] initWithType:4
                                                                                icon:@"https://xxxxx.png"
                                                                                name:@"sence name"
                                                                            productKey:@""
                                                                            deviceKey:@""
                                                                            sceneId:@"Scene Id"
                                                                            delayTime:@(0)
                                                                            property:nil
                                                                                sort:1];

QuecAutomateModel *automateModel = [[QuecAutomateModel alloc] initWithFid:@"your fid"
                                                            conditionType:QuecAutomateConditionRuleAny
                                                                        name:@"Automation name"
                                                                    nameType:1
                                                            preconditions:precondition
                                                                conditions:@[condition]
                                                                    actions:@[action]];

[QuecAutomateService.sharedInstance addAutomationWithModel:automateModel
                                                    success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Edit Automation

**API**

Edit an existing automation rule.

```objc
- (void)editAutomationWithModel:(QuecAutomateModel *)model
                        success:(QuecVoidBlock)success
                        failure:(QuecErrorBlock)failure;
```

**Parameter**

| Parameter       | Required | Description |
|-----------------|------|-------|
| model | Y    | Automation information. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
QuecAutomateModel *automate = QuecAutomateModel.new; ///automationModel obtained from the server.
automate.name = @"new name";
[QuecAutomateService.sharedInstance editAutomationWithModel:automate
                                                    success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Delete Automation

Delete a specified automation rule.

**API**

```objc
- (void)deleteAutomationWithAutomationId:(long long)automationId
                                 success:(QuecVoidBlock)success
                                 failure:(QuecErrorBlock)failure;
```

**Parameter**

| Parameter    | Required | Description |
|--------------|------|-------|
| automationId | Y    | Automation ID. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecAutomateService.sharedInstance deleteAutomationWithAutomationId:10010 success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Query TSL Available for Automation Condition and Action

**API**

```objc
- (void)getAutomationTSLWithProductKey:(NSString *)productKey
                                  type:(NSInteger)type
                               success:(QuecAutomationPropertySuccessBlock)success
                               failure:(QuecErrorBlock)failure;
)
```

**Parameter**

| Parameter  | Required | Description         |
|------------|------|---------------------|
| productKey | Y    | Device ProductKey. |
| type       | Y    | Query type.<br />0 - All<br />1 - Condition<br />2 - Action |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecAutomateService.sharedInstance getAutomationTSLWithProductKey:@"pk" type:0 success:^(NSArray<QuecProductTSLPropertyModel *> * _Nonnull conditions, NSArray<QuecProductTSLPropertyModel *> * _Nonnull actions) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

> See QuecProductTSLPropertyModel Definition in the SDK description in the *Device Management* section.

### Get Automation Details

**API**

Get automation details.

```objc
- (void)getAutomationInfoWithAutomationId:(long long)automationId
                                  success:(void(^)(QuecAutomateModel *model))success
                                  failure:(QuecErrorBlock)failure;
```

**Parameter**

| Parameter    | Required | Description |
|--------------|------|-------|
| automationId | Y    | Automation ID. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecAutomateService.sharedInstance getAutomationInfoWithAutomationId:10009 success:^(QuecAutomateModel * _Nonnull model) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Enable/Disable Automation

**API**

Enable or disable an automation rule.

```objc
- (void)updateAutomationSwitchStatusWithAutomationId:(long long)automationId
                                              status:(BOOL)status
                                             success:(QuecVoidBlock)success
                                             failure:(QuecErrorBlock)failure;
```

**Parameter**

| Parameter    | Required | Description |
|--------------|------|-------|
| automationId | Y    | Automation ID. |
| status | Y    | Enablement status.<br />true - Enable<br />false - Disable |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecAutomateService.sharedInstance updateAutomationSwitchStatusWithAutomationId:10011 status:YES success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

## Automation Testing

### Test Automation

**API**

Test whether configured automation actions can be executed.

```objc
- (void)testAutomationInfoWithActions:(NSArray<QuecAutomationActionModel *> *)actions
                                timeout:(long)timeout
                              success:(void(^)(long long testResultId))success
                              failure:(QuecErrorBlock)failure;
```

**Parameter**

| Parameter | Required | Description     |
|----------|------|-----------------|
| actions  | Y    | Automation actions. |
| timeout  | Y    | Timeout. Unit: second. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
QuecAutomationActionModel *action = [[QuecAutomationActionModel alloc] initWithType:4
                                                                                   icon:@"https://xxxxx.png"
                                                                                   name:@"sence name"
                                                                             productKey:@""
                                                                              deviceKey:@""
                                                                                sceneId:@"Scene Id"
                                                                              delayTime:@(0)
                                                                               property:nil
                                                                                   sort:1];
    [QuecAutomateService.sharedInstance testAutomationInfoWithActions:@[action]
                                                              timeout:30
                                                              success:^(long long testResultId) {
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Get Automation Test Results

**API**

After executing an automation test, you can query execution results using the result ID.

```objc
- (void)getTestAutomationResultWithId:(long long)testResultId
                              success:(QuecAutomationResultSuccessBlock)success
                              failure:(QuecErrorBlock)failure;
```

**Parameter**

| Parameter    | Required | Description |
|--------------|------|------|
| testResultId | Y    | Result ID. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecAutomateService.sharedInstance getTestAutomationResultWithId:10002 success:^(QuecAutomationResultModel * _Nullable resultModel) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

**QuecAutomationResultModel Definition**

| Field          | Type                         | Description                  |
|----------------|------------------------------|------------------------------|
| result         | NSInteger                          | Execution result. <br />0 - All successful<br />1 - Partially successful<br />2 - All failed |
| successCount   | NSInteger                          | The number of successful executions. |
| failCount      | NSInteger                          | The number of failed executions. |
| overallFailMsg | NSString                       | Error message.           |
| timeoutStatus  | BOOL                      | Timeout status.          |
| failActionList | NSArray<QuecAutomationResultItemModel *> * | List of failed actions. |

**QuecAutomationResultItemModel Definition**

| Field    | Type                    | Description |
|----------|-------------------------|----------|
| actionName     | NSString                  | Action name. |
| icon     | NSString                  | Action icon. |
| failMsg  | NSString                  | Failure reason. |

## Automation Logs

### Get Automation Log List

**API**

After executing an automation, you can query its execution records.

```objc
- (void)getAutomationLogListWithLastLogId:(long long)lastLogId
                                    limit:(NSInteger)limit
                                  success:(void(^)(NSArray<QuecAutomationLogItemModel *> *list))success
                                  failure:(QuecErrorBlock)failure;
```

**Parameter**

| Parameter | Required | Description |
|-----------|------|----------|
| lastLogId | Y    | ID of the last log. |
| limit     | Y    | The number of logs to get. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecAutomateService.sharedInstance getAutomationLogListWithLastLogId:99
                                                                limit:10
                                                                success:^(NSArray<QuecAutomationLogItemModel *> * _Nonnull list) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

**QuecAutomationLogItemModel Definition**

| Field        | Type                                          | Description                                                  |
| ------------ | --------------------------------------------- | ------------------------------------------------------------ |
| automationId | long                                          | Automation ID.                                               |
| logId        | long                                          | Log ID.                                                      |
| name         | String                                        | Automation task name.                                        |
| icon         | String                                        | Automation icon.                                             |
| result       | int                                           | Execution result. <br />0 - All successful<br />1 - All failed<br />2 - Partially successful<br /> |
| time         | long                                          | Execution time (timestamp).                                  |
| logDetails   | NSArray<QuecAutomationLogItemActionModel *> * | Log details.                                                 |

**QuecAutomationLogItemActionModel Definition**

| Field       | Type                    | Description         |
|-------------|-------------------------|---------------------|
| actionName  | String                  | Action name.    |
| type        | int                     | Type.<br />2 - Device<br />3 - Group<br />4 - Scene |
| result      | boolean                 | Execution result.<br />true - Successful<br />false - Failed |
| executeTime | long                    | Execution time. |
| action      | QuecAutomationPropertyModel | Execution action. |
| actionIcon      | NSString | Execution action icon, device/group/scene. |

### Get Log Details

**API**

Get automation log details.

```objc
- (void)getAutomationLogDetailWithLogId:(long long)logId
                                success:(void(^)(QuecAutomationLogItemModel *detailInfo))success
                                failure:(QuecErrorBlock)failure;
```

**Parameter**

| Parameter | Required | Description |
|----------|------|------|
| logId    | Y    | Log ID. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecAutomateService.sharedInstance getAutomationLogDetailWithLogId:100
                                                                success:^(QuecAutomationLogItemModel * _Nonnull detailInfo) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Clear Automation Logs

**API**

Clear all automation logs.

```objc
- (void)clearAutomationLogsWithSuccess:(QuecVoidBlock)success failure:(QuecErrorBlock)failure;
```

**Parameter**

| Parameter | Required | Description |
|----------|------|------|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecAutomateService.sharedInstance clearAutomationLogsWithSuccess:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```
