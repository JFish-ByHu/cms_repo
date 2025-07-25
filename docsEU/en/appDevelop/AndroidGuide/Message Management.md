# Message Management

The content below introduces how to manage messages, including device alert, automation and scene execution. 

## Feature Description

```kotlin
QuecUserMessageService
```

### Query Message List

**API**

Query a message list by message type (call the new API below when reading messages by label).

```kotlin
fun getUserMessageListByPageNumber(
    pageNumber: Int,
    pageSize: Int,
    msgType: Int,
    isRead: Boolean,
    deviceKey: String?,
    productKey: String?,
    callback: QuecCallback<QuecPageResponse<QuecUserMessageListModel>>
)
```

**Parameter**

| Parameter  | Required | Description                                                  |
| ---------- | -------- | ------------------------------------------------------------ |
| pageNumber | N        | Page number. Default value: 1.                               |
| pageSize   | N        | Page size. Default value: 10.                                |
| msgType    | N        | The random combination of the received message types. Separate multiple types by commas.<br />1-Device notification<br />2-Device alert<br />3-Device fault<br />4-System messages |
| isRead     | N        | Whether the message is read or not.                          |
| deviceKey  | N        | DeviceKey.                                                   |
| productKey | N        | ProductKey.                                                  |
| callback   | Y        | Callback function of the request.                            |

**QuecUserMessageListModel Definition**

| Parameter        | Type    | Description                                                  |
| ---------------- | ------- | ------------------------------------------------------------ |
| msgId            | String  | Massage ID.                                                  |
| msgType          | int     | Message type. <br />1-Device notification <br />2-Device alert  <br />3-Device fault  <br />4-System messages |
| isRead           | boolean | Whether the message is read or not.                          |
| title            | String  | Title.                                                       |
| content          | String  | Content.                                                     |
| pk               | String  | ProductKey.                                                  |
| dk               | String  | DeviceKey.                                                   |
| addTime          | long    | The time to add the message.                                 |
| readTime         | long    | The time to read the message.                                |
| shareCode        | String  | Share code.                                                  |
| sceneIcon        | String  | Scene icon.                                                  |
| sceneName        | String  | Scene name.                                                  |
| sceneExecuteTime | String  | Scene execution time.                                        |
| executeId        | String  | Scene execution ID.                                          |
| logId            | String  | Automation log ID.                                           |
| automationId     | String  | Automation ID.                                               |
| firstLabel       | String  | Label of the first-level messages.                           |
| secondaryLabel   | String  | Label of the second-level messages.                          |

**Example**

```kotlin
QuecUserMessageService.getUserMessageListByPageNumber(1, 10, 1, false, null, null) {
    if (it.isSuccess) {
        val value = it.data //Query a message list successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Read Message

**API**

Read a message or messages in batches (call the new API below when reading messages by label). 

```kotlin
fun readMessageByMsgIdList(
    msgIdList: String?,
    msgType: Int,
    callback: QuecCallback<QuecReadMsgModel>
)
```

**Parameter**

| Parameter | Required | Description                                                  |
| --------- | -------- | ------------------------------------------------------------ |
| msgIdList | N        | List of message IDs to be read. Separate multiple IDs by commas. Read all the messages if this parameter is omitted. |
| msgType   | N        | The random combination of the received message types. Separate multiple types by commas.<br />1-Device notification<br />2-Device alert<br />3-Device fault<br />4-System messages |
| callback  | Y        | Callback function of the request.                            |

**QuecReadMsgModel Definition**

| Parameter   | Type                          | Description                    |
| ----------- | ----------------------------- | ------------------------------ |
| successList | List&lt;QuecReadMsgListModel> | List of successful executions. |
| failureList | List&lt;QuecReadMsgListModel> | List of failed executions.     |

**QuecReadMsgListModel Definition**

| Parameter  | Type   | Description                                                 |
| ---------- | ------ | ----------------------------------------------------------- |
| msgID      | String | Message ID.                                                 |
| failureMsg | String | Reasons for reading failure (only valid for *failurelist*). |

**Example**

```kotlin
QuecUserMessageService.readMessageByMsgIdList("msgIdList", 1) {
    if (it.isSuccess) {
        val value = it.data //Read a message successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Delete Message

**API**

Delete a message.

```kotlin
fun deleteMessageByMsgId(msgId: String?, language: String?, callback: QuecCallback<Unit>)
```

**Parameter**

| Parameter | Required | Description                                                  |
| --------- | -------- | ------------------------------------------------------------ |
| msgId     | Y        | List of message IDs to be read. Separate multiple IDs by commas. |
| language  | N        | Voice.                                                       |
| callback  | Y        | Callback function of the request.                            |

**Example**

```kotlin
QuecUserMessageService.deleteMessageByMsgId("msgId", "cn") {
    if (it.isSuccess) {
        //Delete a message successfully. 
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Read Message

**API**

Read a message by label. 

```kotlin
fun readMessageByMsgIdList(
    msgIdList: String?,
    firstLabelList: String?,
    secondaryLabelList: String?,
    callback: QuecCallback<QuecReadMsgModel>
)
```

**Parameter**

| Parameter          | Required | Description                                                  |
| ------------------ | -------- | ------------------------------------------------------------ |
| msgIdList          | Y        | List of message IDs to be read. Separate multiple IDs by commas. Read all the messages if this parameter is omitted. |
| firstLabelList     | Y        | List of first-level messages. Separate multiple lists by commas.<br />1-System<br />2-Smart <br />3-Device |
| secondaryLabelList | Y        | List of secondary messages. Separate multiple lists by commas.<br />1-Privacy <br />2-Service <br />3-Automation <br />4-Scene <br />5-Device notification <br />6-Device alert <br />7-Device fault <br />8-OTA |
| callback           | Y        | Callback function of the request.                            |

**QuecReadMsgModel Definition**

| Parameter   | Type                          | Description                    |
| ----------- | ----------------------------- | ------------------------------ |
| successList | List&lt;QuecReadMsgListModel> | List of successful executions. |
| failureList | List&lt;QuecReadMsgListModel> | List of failed executions.     |

**QuecReadMsgListModel Definition**

| Parameter  | Type   | Description                                                 |
| ---------- | ------ | ----------------------------------------------------------- |
| msgID      | String | Message ID.                                                 |
| failureMsg | String | Reasons for reading failure (only valid for *failurelist*). |

**Example**

```kotlin
QuecUserMessageService.readMessageByMsgIdList("msgIdList", "1", "1") {
    if (it.isSuccess) {
        val value = it.data //Read a message by label successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Query Unread Message Number

**API**

Query the number of unread messages, which can be used to mark the user's message reading state.

```kotlin
fun getMsgStats(callback: QuecCallback<QuecUserMessageStatsModel>)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| callback  | Y        | Callback function of the request. |

**QuecUserMessageStatsModel Definition**

| Parameter | Type                       | Description              |
| --------- | -------------------------- | ------------------------ |
| smart     | QuecUserMessageUnReadModel | Smart-related messages.  |
| system    | QuecUserMessageUnReadModel | System-related messages. |
| device    | QuecUserMessageUnReadModel | Device-related messages. |

**QuecUserMessageUnReadModel Definition**

| Parameter | Type | Description                    |
| --------- | ---- | ------------------------------ |
| read      | int  | The number of read messages.   |
| unRead    | int  | The number of unread messages. |

**Example**

```kotlin
QuecUserMessageService.getMsgStats {
    if (it.isSuccess) {
        val value = it.data //Query the number of unread messages successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Query Type of Push Message Received by User

**API**

Query the type of push messages received by user.

```kotlin
fun getMsgPushSetting(callback: QuecCallback<QuecPushSettingModel>)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| callback  | Y        | Callback function of the request. |

**QuecPushSettingModel Definition**

| Parameter    | Type                     | Description                                        |
| ------------ | ------------------------ | -------------------------------------------------- |
| deviceNotify | boolean                  | Device push.                                       |
| smartNotify  | boolean                  | Smart push.                                        |
| systemNotify | boolean                  | System push.                                       |
| device       | QuecPushSettingItemModel | Configuration state of device push sub-properties. |
| smart        | QuecPushSettingItemModel | Configuration state of smart push sub-properties.  |
| system       | QuecPushSettingItemModel | Configuration state of system push sub-properties. |

**QuecPushSettingItemModel Definition**

| Parameter | Type    | Description                    |
| --------- | ------- | ------------------------------ |
| app       | boolean | Whether system push is on.     |
| sms       | boolean | Whether SMS push is on.        |
| voice     | boolean | Whether voice call push is on. |

**Example**

```kotlin
QuecUserMessageService.getMsgPushSetting {
    if (it.isSuccess) {
        val value = it.data //Query the type of push messages received by user successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Set Type of Push Message Received by User

**API**

Set the type of push message received by user.

```kotlin
fun setMsgPushSetting(config: QuecPushSettingModel, callback: QuecCallback<Unit>)
```

**Parameter**

| Parameter | Required | Description                                                  |
| --------- | -------- | ------------------------------------------------------------ |
| config    | Y        | See QuecPushSettingModel Definition above. [Query Type of Push Message Received by User] |
| callback  | Y        | Callback function of the request.                            |

**Example**

```kotlin
val config = getConfig() //Obtain configuration parameter from the cloud.
QuecUserMessageService.setMsgPushSetting(config) {
    if (it.isSuccess) {
        //Set the type of push message received by user successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

