# Automation SDK: QuecAutomateSdk

## Feature Description

The SDK supports the user to configure certain rules to make the device perform the specified actions under the specified conditions.

```kotlin
QuecAutomateService
```

## SDK Integration Method

> **Note**
>
> The automation SDK depends on the core library quec-iot-sdk to run. Please integrate the core library according to the *IoT SDK Integration Guide*.

Add dependencies

```groovy
implementation 'com.quectel.app.sdk:quec-automate-sdk:2.14.0'
```

### Automation Management

#### Obtain Automation List

**API**

Obtain the automation list by paging request.

```kotlin
fun getAutomationList(pageNumber: Int, pageSize: Int, callBack: QuecCallback<QuecAutoListModel>)
```

**Parameter**

| Parameter  | Required | Description                       |
| ---------- | -------- | --------------------------------- |
| pageNumber | Y        | Page number.                      |
| pageSize   | Y        | Page size.                        |
| callback   | Y        | Callback function of the request. |

**Example**

```kotlin
QuecAutomateService.getAutomationList(1, 10) {
    if (it.isSuccess) {
        val data = it.data //Obtain the automation list successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg   //Failed. Error message.
    }
}
```

**QuecAutoListModel Definition**

| Field           | Type                           | Description                   |
| --------------- | ------------------------------ | ----------------------------- |
| hasNextPage     | boolean                        | Whether there is a next page. |
| hasPreviousPage | boolean                        | Whether there is a previous page. |
| isFirstPage     | boolean                        | Whether it is the first page. |
| isLastPage      | boolean                        | Whether it is the last page.  |
| total           | int                            | Total recorded count.         |
| page            | int                            | Current page number.          |
| pageSize        | int                            | Page size.                    |
| list            | List&lt;QuecAutoListItemModel> | Record data.                  |

**QuecAutoListItemModel Definition**

| Field         | Type                                    | Description                                                  |
| ------------- | --------------------------------------- | ------------------------------------------------------------ |
| automationId  | long                                    | Automation ID                                                |
| conditionType | int                                     | Trigger type. <br />1 - Meet any condition<br />2 - Meet all conditions |
| name          | String                                  | Automation name.                                             |
| nameType      | int                                     | Automation name generation method. <br />1 - System generated<br />2 - User filled |
| status        | boolean                                 | Enablement status.<br />true: Enabled<br />false: Disabled   |
| triggerList   | List&lt;QuecAutoListItemConditionModel> | Trigger conditions.                                          |
| actionList    | List&lt;QuecAutoListItemActionModel>    | Execution actions.                                           |

**QuecAutoListItemConditionModel Definition**

| Field | Type   | Description                                            |
| ----- | ------ | ------------------------------------------------------ |
| name  | String | Device name.                                           |
| icon  | String | Device icon.                                           |
| type  | int    | Trigger condition type.<br />0 - Device<br />1 - Timer |
| sort  | int    | Condition order, starting from 1 incrementally.        |

**QuecAutoListItemActionModel Definition**

| Field | Type   | Description                                                  |
| ----- | ------ | ------------------------------------------------------------ |
| name  | String | Device/Group/Scene name.                                     |
| icon  | String | Device/Group/Scene icon.                                     |
| type  | int    | Action type.<br />1 - Scheduled task<br />2 - Device<br />3 - Group<br />4 - Scene |
| sort  | int    | Order, starting from 1 incrementally.                        |

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

```kotlin
fun addAutomation(automationModel: QuecAutomationModel, callBack: QuecCallback<Long>)
```

**Parameter**

| Parameter       | Required | Description                       |
| --------------- | -------- | --------------------------------- |
| automationModel | Y        | Automation information            |
| callback        | Y        | Callback function of the request. |

**Example**

```kotlin
QuecAutomateService.addAutomation(
    QuecAutomationModel(
        "",
        0L,
        1,
        null,
        "Automation Name",
        1,
        QuecAutomationPreconditionModel().apply {
            effectDate = ""
            effectDateType = 0
            effectTimeType = 2
            location = ""
            timeZone = "GMT+08:00"
        },
        listOf(
            QuecAutomationConditionModel(
                type = 1,
                timer = QuecAutomationTimeModel(
                    0, "14:10", "", "GMT+8:00"
                ),
            )
        ),
        listOf(
            QuecAutomationActionModel(
                type = 4,
                icon = "https://xxx/xxx.png",
                name = "sence name",
                sceneId = "Scene ID",
                sort = 1,
            )
        )
    )
) {
    if (it.isSuccess) {
        //Create an automation successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg   //Failed. Error message.
    }
}
```

**QuecAutomationModel Definition**

| Field         | Type                                  | Description                                                  |
| ------------- | ------------------------------------- | ------------------------------------------------------------ |
| fid           | String                                | Home ID. This parameter is only specified in home mode, otherwise "" is passed. |
| automationId  | long                                  | Automation ID                                                |
| conditionType | int                                   | Trigger type. <br />1 - Meet any condition<br />2 - Meet all conditions |
| icon          | String                                | Automation icon                                              |
| name          | String                                | Automation name                                              |
| nameType      | int                                   | Automation name generation method. <br />1 - System generated<br />2 - User filled |
| precondition  | QuecAutomationPreconditionModel       | Effective conditions.                                        |
| conditions    | List&lt;QuecAutomationConditionModel> | Trigger conditions.                                          |
| actions       | List&lt;QuecAutomationActionModel>    | Execution actions.                                           |

**QuecAutomationPreconditionModel Definition**

| Field          | Type   | Description                                                  |
| -------------- | ------ | ------------------------------------------------------------ |
| effectTimeType | int    | Effective time.<br />0 - Daytime<br />1 - Nighttime<br />2 - The whole day<br />3 - Specific time period |
| startTime      | String | Specific start time, e.g., 12:00:00                          |
| endTime        | String | Specific end time, e.g., 12:00:00                            |
| effectDateType | int    | Effective date.<br />0 - Every day<br />1 - Weekly<br />2 - Monthly<br />3 - Specified dates |
| effectDate     | String | Effective date for transmission calculation, e.g., weekly 1/2/3/4/5/6/7, monthly 1...31, specified dates 12-19/12-21. |
| effectDateShow | String | Effective date for display, e.g., Daily Monday...Sunday 1st...31st |
| regionName     | String | Region name.                                                 |
| location       | String | Longitude and latitude coordinates, longitude first, latitude second. Coordinate system: GCJ-02. |
| timeZone       | String | Time zone ID, e.g., GMT+08:00.                               |

**QuecAutomationConditionModel Definition**

| Field      | Type                    | Description                                                  |
| ---------- | ----------------------- | ------------------------------------------------------------ |
| type       | int                     | Trigger type. <br />1 - Meet any condition<br />2 - Meet all conditions |
| icon       | String                  | Icon.                                                        |
| name       | String                  | Condition name.                                              |
| timer      | QuecAutomationTimeModel | Trigger time.                                                |
| productKey | String                  | Device ProductKey.                                           |
| deviceKey  | String                  | DeviceKey.                                                   |
| property   | QuecAutoProductTSLModel | Device property.                                             |
| sort       | int                     | Condition order, starting from 1 incrementally.              |

**QuecAutomationActionModel Definition**

| Field      | Type                    | Description                                                  |
| ---------- | ----------------------- | ------------------------------------------------------------ |
| type       | int                     | Action type.<br />1 - Delay execution of subsequent action<br />2 - Modify device property<br />3 - Modify group property<br />4 - Execute scene |
| icon       | String                  | Icon.                                                        |
| name       | String                  | Name.                                                        |
| productKey | String                  | Device ProductKey.                                           |
| deviceKey  | String                  | DeviceKey.                                                   |
| sceneId    | String                  | Scene ID.                                                    |
| delayTime  | int                     | Delay time in seconds.                                       |
| sort       | int                     | Action order, starting from 1 incrementally.                 |
| property   | QuecAutoProductTSLModel | Device property.                                             |

**QuecAutomationTimeModel Definition**

| Field     | Type   | Description                                                |
| --------- | ------ | ---------------------------------------------------------- |
| type      | int    | Timing type.<br />0 - Once<br />1 - Daily<br />2 - Custom  |
| time      | String | Scheduled time in 24-hour format, e.g., 23:00.             |
| dayOfWeek | String | Custom time range, formatted as "1,3,4", separated by ",". |
| timeZone  | String | Time zone ID, e.g., GMT+08:00.                             |

**QuecAutoProductTSLModel Definition**

| Field    | Type   | Description                                                  |
| -------- | ------ | ------------------------------------------------------------ |
| id       | int    | TSL ID.                                                |
| code     | String | TSL code.                                        |
| name     | String | TSL name.                                              |
| compare  | String | Comparison operator when used as a condition: > >= < <= == != REPORT COUNT, where REPORT is reported data. |
| unit     | String | Unit.                                                        |
| dataType | String | Data type.                                                   |
| value    | String | Property value.                                              |
| subName  | String | Data type.                                                   |

### Edit Automation

**API**

Edit an existing automation rule.

```kotlin
fun editAutomation(automationModel: QuecAutomationModel, callBack: QuecSimpleCallBack)
```

**Parameter**

| Parameter       | Required | Description                       |
| --------------- | -------- | --------------------------------- |
| automationModel | Y        | Automation information.           |
| callback        | Y        | Callback function of the request. |

**Example**

```kotlin
val model = getModel() //automationModel obtained from the server.
model.name = "new name"
QuecAutomateService.editAutomation(model) {
    if (it.isSuccess) {
        //Edit an existing automation rule successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg   //Failed. Error message.
    }
}
```

### Delete Automation

Delete a specified automation rule.

**API**

```kotlin
fun deleteAutomation(automationId: Long, callBack: QuecCallback<Any>)
```

**Parameter**

| Parameter    | Required | Description                       |
| ------------ | -------- | --------------------------------- |
| automationId | Y        | Automation ID.                    |
| callback     | Y        | Callback function of the request. |

**Example**

```kotlin
val model = getModel() //automationModel obtained from the server.
QuecAutomateService.deleteAutomation(model.automationId) {
    if (it.isSuccess) {
        //Delete a specified automation rule successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg   //Failed. Error message.
    }
}
```

### Query TSL Available for Automation Condition and Action

**API**

```kotlin
fun <T> getAutomationTSLWithProductKey(
        productKey: String,
        type: Int,
        convertor: PropertyConvertor<T>,
        callBack: QuecCallback<QuecPublishedAutoProductTSLModel<T>>
)
```

**Parameter**

| Parameter  | Required | Description                                                 |
| ---------- | -------- | ----------------------------------------------------------- |
| productKey | Y        | Device ProductKey.                                          |
| type       | Y        | Query type.<br />0 - All<br />1 - Condition<br />2 - Action |
| convertor  | Y        | Custom TSL model parser.                                    |
| callback   | Y        | Callback function of the request.                           |

**Example**

```kotlin
//ModelBasic is defined in the core library.
val modelConvertor = object : PropertyConvertor<ModelBasic<*>> {
    override fun convert(objectJson: JSONArray): List<ModelBasic<*>> {
        val modelBasics: MutableList<ModelBasic<*>> = ArrayList()
        try {
            //This method is defined in the core library.
            return ObjectModelParse.buildModelListContent(objectJson)
        } catch (e: JSONException) {
            QLog.e("TslModelUtils", "convert error $e")
        }
        return modelBasics
    }
}
QuecAutomateService.getAutomationTSLWithProductKey("pk", 0, modelConvertor) {
    if (it.isSuccess) {
        //Query the TSL model available for automation conditions and actions successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg   //Failed. Error message.
    }
}
```

**QuecPublishedAutoProductTSLModel Definition**

| Field      | Type       | Description                          |
| ---------- | ---------- | ------------------------------------ |
| actions    | List&lt;T> | Properties available for conditions. |
| conditions | List&lt;T> | Properties available for actions.    |

### Get Automation Details

**API**

Get automation details.

```kotlin
fun getAutomationInfo(automationId: Long, callBack: QuecCallback<QuecAutomationModel>)
```

**Parameter**

| Parameter    | Required | Description                       |
| ------------ | -------- | --------------------------------- |
| automationId | Y        | Automation ID.                    |
| callback     | Y        | Callback function of the request. |

**Example**

```kotlin
QuecAutomateService.getAutomationInfo(1002) {
    if (it.isSuccess) {
        //Get automation details successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg   //Failed. Error message.
    }
}
```

### Enable/Disable Automation

**API**

Enable or disable an automation rule.

```kotlin
fun updateAutomationSwitchStatus(automationId: Long, open: Boolean, callBack: QuecCallback<Any>)
```

**Parameter**

| Parameter    | Required | Description                       |
| ------------ | -------- | --------------------------------- |
| automationId | Y        | Automation ID.                    |
| open         | Y        | Enablement status.                |
| callback     | Y        | Callback function of the request. |

**Example**

```kotlin
QuecAutomateService.updateAutomationSwitchStatus(1002, true) {
    if (it.isSuccess) {
        //Enable an automation rule successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg   //Failed. Error message.
    }
```

## Automation Testing

### Test Automation

**API**

Test whether configured automation actions can be executed.

```kotlin
fun testAutomationInfo(actions: List<QuecAutomationActionModel>, timeout: Long, callBack: QuecCallback<Long>)
```

**Parameter**

| Parameter | Required | Description                                                  |
| --------- | -------- | ------------------------------------------------------------ |
| actions   | Y        | Automation actions.                                          |
| timeout   | Y        | Timeout. Unit: second.                                       |
| callback  | Y        | Callback function of the request. Result ID is returned upon successful execution. |

**Example**

```kotlin
QuecAutomateService.testAutomationInfo(
    listOf(
        QuecAutomationActionModel(
            type = 4,
            icon = "https://iot-oss.quectelcn.com/quec_scene_1.png",
            name = "sence name",
            sceneId = "Scene ID",
            sort = 1,
        )
    ), 30
) {
    if (it.isSuccess) {
        //Test whether configured automation actions can be executed successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg   //Failed. Error message.
    }
}
```

### Get Automation Test Results

**API**

After executing an automation test, you can query execution results using the result ID.

```kotlin
fun getTestAutomationResult(testResultId: Long, callBack: QuecCallback<QuecTestAutomationResultModel>)
```

**Parameter**

| Parameter    | Required | Description                       |
| ------------ | -------- | --------------------------------- |
| testResultId | Y        | Result ID.                        |
| callback     | Y        | Callback function of the request. |

**Example**

```kotlin
QuecAutomateService.getTestAutomationResult(100) {
    if (it.isSuccess) {
        val data = it.data //query the execution result successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg   //Failed. Error message.
    }
}
```

**QuecTestAutomationResultModel Definition**

| Field          | Type                         | Description                                                  |
| -------------- | ---------------------------- | ------------------------------------------------------------ |
| result         | int                          | Execution result. <br />0 - All successful<br />1 - Partially successful<br />2 - All failed |
| successCount   | int                          | The number of successful executions.                         |
| failCount      | int                          | The number of failed executions.                             |
| overallFailMsg | String                       | Error message.                                               |
| timeoutStatus  | boolean                      | Timeout status.                                              |
| failActionList | List&lt;QuecTestActionModel> | List of failed actions.                                      |

**QuecTestActionModel Definition**

| Field    | Type                    | Description                |
| -------- | ----------------------- | -------------------------- |
| name     | String                  | Action name.               |
| icon     | String                  | Action icon.               |
| failMsg  | String                  | Failure reason.            |
| property | QuecAutoProductTSLModel | Failed TSL model property. |

## Automation Logs

### Get Automation Log List

**API**

After executing an automation, you can query its execution records.

```kotlin
fun getAutomationLogList(
        lastLogId: Long,
        limit: Int,
        callBack: QuecCallback<List<QuecAutoLogDataModel>>
)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| lastLogId | Y        | ID of the last log.               |
| limit     | Y        | The number of logs to get.        |
| callback  | Y        | Callback function of the request. |

**Example**

```kotlin
QuecAutomateService.getAutomationLogList(0, 10) {
    if (it.isSuccess) {
        val data = it.data //Get automation logs successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg   //Failed. Error message.
    }
}
```

**QuecAutoLogDataModel Definition**

| Field        | Type                    | Description                                                  |
| ------------ | ----------------------- | ------------------------------------------------------------ |
| automationId | long                    | Automation ID.                                               |
| logId        | long                    | Log ID.                                                      |
| name         | String                  | Automation task name.                                        |
| result       | int                     | Execution result. <br />0 - All successful<br />1 - All failed<br />2 - Partially successful<br /> |
| time         | long                    | Execution time (timestamp).                                  |
| logDetails   | List&lt;QuecLogDetails> | Log details.                                                 |

**QuecLogDetails Definition**

| Field       | Type                    | Description                                                  |
| ----------- | ----------------------- | ------------------------------------------------------------ |
| actionName  | String                  | Action name.                                                 |
| type        | int                     | Type.<br />2 - Device<br />3 - Group<br />4 - Scene          |
| result      | boolean                 | Execution result.<br />true - Successful<br />false - Failed |
| executeTime | long                    | Execution time.                                              |
| action      | QuecAutoProductTSLModel | Execution action.                                            |

### Get Log Details

**API**

Get automation log details.

```kotlin
fun getAutomationLogDetail(logId: Long, callBack: QuecCallback<QuecAutoLogDataModel>)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| logId     | Y        | Log ID.                           |
| callback  | Y        | Callback function of the request. |

**Example**

```kotlin
QuecAutomateService.getAutomationLogDetail(200) {
    if (it.isSuccess) {
        val data = it.data //Get automation log details successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg   //Failed. Error message.
    }
}
```

### Clear Automation Logs

**API**

Clear all automation logs.

```kotlin
fun clearAutomationLogs(callBack: QuecCallback<Any>)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| callback  | Y        | Callback function of the request. |

**Example**

```kotlin
QuecAutomateService.clearAutomationLogs {
    if (it.isSuccess) {
        //Clear all automation logs successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg   //Failed. Error message.
    }
}
```
