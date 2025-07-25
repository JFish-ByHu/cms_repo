# Message Management

The content below introduces how to manage messages, including device alert, automation and scene execution. 

## Feature Description

```objc
#import <QuecUserKit/QuecUserKit.h>
/// Initialize
[QuecUserMessageService sharedInstance]
```

### Delete Message

**API**

Delete a message.

```objc
- (void)deleteMessageByMsgId:(NSString *)msgId
                    language:(NSString *)language
                     success:(QuecVoidBlock)success
                     failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| msgId |	Y|List of message IDs to be read. Separate multiple IDs by commas.	|
| language |	N|Voice.	|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[[QuecUserMessageService sharedInstance] deleteMessageByMsgId:@"messageId" language:@"cn" success:^{
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Read Message

**API**

Read a message or messages in batches (call the new API below when reading messages by label). 

```objc
- (void)readMessageByMsgIdList:(NSString *)msgIdList
                        msgType:(int)msgType
                        success:(void(^)(QuecReadMsgModel *model))success
                        failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| msgIdList |	N|List of message IDs to be read. Separate multiple IDs by commas. Read all the messages if this parameter is omitted.|
| msgType |	N|The random combination pf the received message types. <br />1-Device notification<br />2-Device alert<br />3-Device fault<br />4-System messages	|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecReadMsgModel Definition**

|Parameter| Type |Description|
| --- | --- | --- |
| successList | NSArray<QuecReadMsgListModel *> |List of successful executions.|
| failureList | NSArray<QuecReadMsgListModel *>   |List of failed executions.|

**QuecReadMsgListModel Definition**
|Parameter| Type |Description|
| --- | --- | --- |
| msgID | NSString |Message ID.|
| failureMsg | NSString   |Reasons for reading failure (only valid for *failurelist*).|

**Example**

```objc
[QuecUserMessageService.sharedInstance readMessageByMsgIdList:@"MsgIdList" msgType:1 success:^(QuecReadMsgModel * _Nonnull model) {
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Query Message List

**API**

Query a message list by message type (call the new API below when reading messages by label).

```objc
- (void)getUserMessageListByPageNumber:(NSInteger)pageNumber
                              pageSize:(NSInteger)pageSize
                               msgType:(NSInteger)msgType
                                isRead:(BOOL)isRead
                             deviceKey:(NSString *)deviceKey
                            productKey:(NSString *)productKey
                               success:(void(^)(NSArray<QuecUserMessageListModel *> *list, NSInteger total))success
                               failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| pageNumber |	N|Page number. Default value: 1.	|
| pageSize |	N|Page size. Default value: 10.	|
| msgType |	N|The random combination pf the received message types. Separate multiple types by commas.<br />1-Device notification<br />2-Device alert<br />3-Device fault<br />4-System messages	|
| isRead |	N|Whether the message is read or not.	|
| deviceKey |	N|DeviceKey.	|
| productKey |	N|ProductKey.	|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecUserMessageListModel Definition**

|Parameter| Type |Description|
| --- | --- | --- |
| msgId | NSString |Massage ID.|
| msgType | NSInteger   |Message type. <br />1-Device notification <br />2-Device alert  <br />3-Device fault  <br />4-System messages|
| isRead | BOOL |Whether the message is read or not.|
| title | NSString |Title.|
| content | NSString |Content.|
| pk | NSString |ProductKey.|
| dk | NSString |DeviceKey.|
| addTime | NSUInteger |The time to add the message.|
| readTime | NSUInteger |The time to read the message.|
| shareCode | NSString |Share code.|
| sceneIcon | NSString |Scene icon.|
| sceneName | NSString |Scene name.|
| sceneExecuteTime | NSString |Scene execution time.|
| executeId | NSString |Scene execution ID.|
| logId | NSString |Automation log ID.|
| automationId | NSString |Automation ID.|
| firstLabel | NSString |Label of the first-level messages.|
| secondaryLabel | NSString |Label of the second-level messages.|

**Example**

```objc
[QuecUserMessageService.sharedInstance getUserMessageListByPageNumber:1 pageSize:10 msgType:1 isRead:NO deviceKey:@"deviceKey" productKey:@"productKey" success:^(NSArray<QuecUserMessageListModel *> * _Nonnull list, NSInteger total) {
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Upload PushToken

**API**

Upload a PushToken. Aliyun's DeviceID (Google's FCM Token in overseas) must be obtained before this API is called.

```objc
- (void)addPushToken:(NSString *)pushToken
              success:(QuecVoidBlock)success
              failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| pushToken | Y       | PushToken (Aliyun‘s DeviceID or Google's FCM Token). |
| success   | N       | Callback function of successful request. |
| failure   | N       | Callback function of failed request.    |

**Example**

```objc
[QuecUserMessageService.sharedInstance addPushToken:@"pushToken" success:^{
            /// Next Action
        } failure:^(NSError *error) {
            NSLog(@"check error: %@", error);
        }];
```

### Delete PushToken

**API**

Delete a bound PushToken. The cached Aliyun's DeviceID (Google's FCM Token in overseas) must be obtained before this API is called.

```objc
- (void)deletePushToken:(NSString *)pushToken
                 success:(QuecVoidBlock)success
                 failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| pushToken | Y       | PushToken (Aliyun‘s DeviceID or Google's FCM Token). |
| success   | N       | Callback function of successful request. |
| failure   | N       | Callback function of failed request.    |


**Example**

```objc
[QuecUserMessageService.sharedInstance deletePushToken:@"pushToken" success:^{
            /// Next Action
        } failure:^(NSError *error) {
            NSLog(@"check error: %@", error);
        }];
```

### Query Message List

**API**

Query a message list by label. 

```objc
- (void)getUserMessageListByPageNumber:(NSInteger)pageNumber
                              pageSize:(NSInteger)pageSize
                        firstLabelList:(NSString *)firstLabelList
                    secondaryLabelList:(NSString *)secondaryLabelList
                                isRead:(BOOL)isRead
                             deviceKey:(NSString * _Nullable)deviceKey
                            productKey:(NSString * _Nullable)productKey
                               success:(void (^)(NSArray<QuecUserMessageListModel *> *, NSInteger))success
                               failure:(void (^)(NSError *))failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| pageNumber         | N       | Page number. Default value: 1. |
| pageSize           | N       | Page size. Default value: 10. |
| firstLabelList     | Y       | Label list of the first-level messages. Separate multiple labels by commas.<br />1-System<br />2-Smart <br />3-Device |
| secondaryLabelList | Y       | Label list of the second-level messages. Separate multiple labels by commas.<br />1-Privacy <br />2-Service <br />3-Automation <br />4-Scene <br />5-Device notification <br />6-Device alert <br />7-Device fault <br />8-OTA |
| isRead             | Y       | Whether the message is read or not.                  |
| deviceKey          | Y       | DeviceKey.                                             |
| productKey         | Y       | ProductKey.                                            |
| success            | N       | Callback function of successful request.             |
| failure            | N       | Callback function of failed request.                 |

**QuecUserMessageListModel Definition**

|Parameter| Type |Description|
| --- | --- | --- |
| msgId | NSString |Massage ID.|
| msgType | NSInteger   |Message type. <br />1-Device notification <br />2-Device alert  <br />3-Device fault  <br />4-System messages|
| isRead | BOOL |Whether the message is read or not.|
| title | NSString |Title.|
| content | NSString |Content.|
| pk | NSString |ProductKey.|
| dk | NSString |DeviceKey.|
| addTime | NSUInteger |The time to add the message.|
| readTime | NSUInteger |The time to read the message.|
| shareCode | NSString | Share code.                            |
| sceneIcon | NSString |Scene icon.|
| sceneName | NSString |Scene name.|
| sceneExecuteTime | NSString |Scene execution time.|
| executeId | NSString |Scene execution ID.|
| logId | NSString |Automation log ID.|
| automationId | NSString |Automation ID.|
| firstLabel | NSString |Label of the first-level messages.|
| secondaryLabel | NSString |Label of the second-level messages.|

**Example**

```objc
[QuecUserMessageService.sharedInstance getUserMessageListByPageNumber:1 pageSize:10 firstLabelList:@"firstLabelList" secondaryLabelList:@"secondaryLabelList" isRead:NO deviceKey:@"dk" productKey:@"pk" success:^(NSArray<QuecUserMessageListModel *> * _Nonnull, NSInteger) {
        /// Next Action
    } failure:^(NSError * _Nonnull) {
        NSLog(@"check error: %@", error);
    }]
```

### Read Message

**API**

Read a message by label. 

```objc
- (void)readMessageByMsgIdList:(NSString * _Nullable)msgIdList
                firstLabelList:(NSString * _Nullable)firstLabelList
            secondaryLabelList:(NSString * _Nullable)secondaryLabelList
                       success:(void (^)(QuecReadMsgModel *model))success
                       failure:(void (^)(NSError *))failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| msgIdList          | Y       | List of message IDs to be read. Separate multiple IDs by commas. Read all the messages if this parameter is omitted. |
| firstLabelList     | Y       | Label list of the first-level messages. Separate multiple labels by commas.<br />1-System<br />2-Smart <br />3-Device |
| secondaryLabelList | Y       | Label list of the second-level messages. Separate multiple labels by commas.<br />1-Privacy <br />2-Service <br />3-Automation <br />4-Scene <br />5-Device notification <br />6-Device alert <br />7-Device fault <br />8-OTA |
| success            | N       | Callback function of successful request.             |
| failure            | N       | Callback function of failed request.                 |

**QuecReadMsgModel Definition**

|Parameter| Type |Description|
| --- | --- | --- |
| successList | NSArray<QuecReadMsgListModel *> |List of successful executions.|
| failureList | NSArray<QuecReadMsgListModel *>   |List of failed executions.|

**QuecReadMsgListModel Definition**
|Parameter| Type |Description|
| --- | --- | --- |
| msgID | NSString |Message ID.|
| failureMsg | NSString   |Reasons for reading failure (only valid for *failurelist*).|


**Example**

```objc
[QuecUserMessageService.sharedInstance readMessageByMsgIdList:@"messageId" firstLabelList:@"firstLabelList" secondaryLabelList:@"" success:^(QuecReadMsgModel * _Nonnull msgModel) {
        /// Next Action
    } failure:^(NSError * _Nonnull error) {
        NSLog(@"check error: %@", error);
    }];
```

### Query Unread Message Number

**API**

Query the number of unread messages, which can be used to mark the user's message reading state.

```objc
- (void)getMsgStatsWithSuccess:(void(^)(QuecUserMessageStatsModel *statsModel))success failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| success | N       | Callback function of successful request. |
| failure | N       | Callback function of failed request. |

**QuecUserMessageStatsModel Definition**

|Parameter| Type |Description|
| --- | --- | --- |
| smart | QuecUserMessageUnReadModel |Smart-related messages.|
| system | QuecUserMessageUnReadModel   |System-related messages.|
| device | QuecUserMessageUnReadModel   |Device-related messages.|

**QuecUserMessageUnReadModel Definition**

|Parameter| Type |Description|
| --- | --- | --- |
| read | NSInteger |The number of read messages.|
| unRead | NSInteger   |The number of unread messages.|

**Example**

```objc
[QuecUserMessageService.sharedInstance getMsgStatsWithSuccess:^(QuecUserMessageStatsModel * _Nonnull statsModel) {
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Query Type of Push Message Received by User

**API**

Query the type of push messages received by user.

```objc
- (void)getMsgPushSettingWithSuccess:(void(^)(QuecPushSettingModel *data))success failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| success | N       | Callback function of successful request. |
| failure | N       | Callback function of failed request. |

**QuecPushSettingModel Definition**

|Parameter| Type |Description|
| --- | --- | --- |
| deviceNotify | BOOL |Device push.|
| smartNotify | BOOL   |Smart push.|
| systemNotify | BOOL |System push.|
| device | QuecPushSettingItemModel   |Configuration state of device push sub-properties.|
| smart | QuecPushSettingItemModel |Configuration state of smart push sub-properties.|
| system | QuecPushSettingItemModel   |Configuration state of system push sub-properties.|

**QuecPushSettingItemModel Definition**

|Parameter| Type |Description|
| --- | --- | --- |
| app | BOOL |Whether system push is on.|
| sms | BOOL   |Whether SMS push is on.|
| voice | BOOL |Whether voice call push is on.|

**Example**

```objc
[[QuecUserMessageService sharedInstance] getMsgPushSettingWithSuccess:^(QuecPushSettingModel *pushSettingModel) {
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Set Type of Push Message Received by User

**API**

Set the type of push message received by user.

```objc
- (void)setMsgPushSettingWithConfig:(QuecPushSettingModel *)config success:(QuecVoidBlock)success failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| config | Y       | See QuecPushSettingModel Definition above. [Query Type of Push Message Received by User] |
| success | N       | Callback function of successful request. |
| failure | N       | Callback function of failed request. |

**Example**

```objc
[[QuecUserMessageService sharedInstance] setMsgPushSettingWithConfig:model success:^{
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

