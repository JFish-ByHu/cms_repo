# Timer Management - Remote Timing

## Feature Description

Device timer management supports operations such as creating, editing, deleting, querying a list of timed tasks, and querying details of timed tasks.

```kotlin
QuecDeviceService
```

## Timer Management - Remote Timing

### Create Timed Task

**API**

Create a timed task.

```kotlin
fun addCornJob(
    cornJobModel: QuecCornJobModel,
    callback: QuecCallback<String>
)
```

**Parameter**

| Parameter    | Required | Description                       |
| ------------ | -------- | --------------------------------- |
| cornJobModel | Y        | QuecCornJobModel class            |
| callback     | Y        | Callback function of the request. |

**QuecCornJobModel Definition**

| Field      | Type                         | Description                                                  |
| ---------- | ---------------------------- | ------------------------------------------------------------ |
| createTime | long                         | Creation time.                                               |
| productKey | String                       | ProductKey.                                                  |
| deviceKey  | String                       | DeviceKey.                                                   |
| ruleId     | String                       | Rule ID, required when you modify rule instance information. |
| type       | String                       | Timed task type.<br />once: execute once<br />day-repeat: repeat daily<br />custom-repeat: custom repeat<br />multi-section: multi-segment execution<br />random: execute randomly<br />delay: delayed execution - countdown |
| enabled    | boolean                      | Status of timed tasks.<br />false-Stopped (default)<br />true-Started |
| dayOfWeek  | String                       | Execution day, required when *type* = custom-repeat. You can select multiple days and separate them by commas.<br />1-Monday <br />2-Tuesday<br />3-Wednesday<br />4-Thursday<br />5-Friday<br />6-Saturday<br />7-Sunday |
| timers     | List&lt;QuecCornTimersModel> | Details of the timed task.                                   |

**QuecCornTimersModel Definition**

| Field      | Type          | Description                                                  |
| ---------- | ------------- | ------------------------------------------------------------ |
| action     | String        | Command to execute the timed task. Format: JSON string in TSL model. |
| delay      | long          | Delayed execution time, required when *type* = delay. Unit: second. |
| endTime    | String        | End time, required when *type* = random. Format: "HH:mm:ss", such as "12:00:00". |
| startTime  | String        | Start time, required when *type* = random. Format: "HH:mm:ss", such as "12:00:00". |
| time       | String        | Execution time, required when *type* = once, day-repeat, custom-repeat, multi-section.  Format: "HH:mm:ss". |
| day-repeat | custom-repeat | Required when *type* = multi-section.                        |
| timerId    | String        | ID of the timed task.                                        |

**Example**

```kotlin
QuecDeviceService.addCornJob(
    QuecCornJobModel(
        System.currentTimeMillis(),
        "pk",
        "dk",
        "ruleId",
        "once",
        true,
        "1",
        listOf(
            QuecCornJobModel.QuecCornTimersModel(
                action = "[{\"modelCode\":\"switch\",\"modelName\":\"switch\",\"modelType\":\"PROPERTY\",\"dataType\":\"BOOL\",\"value\":\"true\",\"unit\":\"\"}]",
                delay = 0,
                timerId = "11:00:00"
            )
        )
    )
) {
    if (it.isSuccess) {
        val data = it.data //Create a timed task successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Edit Timed Task

**API**

Edit a timed task.

```kotlin
fun setCronJob(
    cornJobModel: QuecCornJobModel,
    callback: QuecCallback<Unit>
)
```

**Parameter**

| Parameter    | Required | Description                       |
| ------------ | -------- | --------------------------------- |
| cornJobModel | Y        | QuecCornJobModel class.           |
| callback     | Y        | Callback function of the request. |

> See QuecCornJobModel Definition above.

**Example**

```kotlin
val job = getJob()  //Get a timed task from the platform.
job.enabled = false
QuecDeviceService.setCronJob(job) {
    if (it.isSuccess) {
        //Edit the timed task successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Query Timed Task List

**API**

Query the list of timed tasks under a device.

```kotlin
fun getCronJobList(
    deviceKey: String,
    productKey: String,
    type: String?,
    pageNumber: Int,
    pageSize: Int,
    callback: QuecCallback<QuecPageResponse<QuecCornJobModel>>
)
```

**Parameter**

| Parameter  | Required | Description                                                  |
| ---------- | -------- | ------------------------------------------------------------ |
| productKey | Y        | ProductKey.                                                  |
| deviceKey  | Y        | DeviceKey.                                                   |
| type       | N        | Timed task type.<br />once: execute once<br />day-repeat: repeat daily<br />custom-repeat: custom repeat<br />multi-section: multi-segment execution<br />random: execute randomly<br />delay: delayed execution - countdown |
| pageNumber | N        | Page number. Default value: 1.                               |
| pageSize   | N        | Page size. Default value: 10.                                |
| callback   | Y        | Callback function of the request.                            |

> See QuecCornJobModel Definition above.

**Example**

```kotlin
QuecDeviceService.getCronJobList("dk", "pk", null, 1, 10) {
    if (it.isSuccess) {
        val data = it.data //Query the list of timed tasks under a device successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Query Timed Task Details

**API**

Query the details of a timed task.

```kotlin
fun getCronJobInfo(
    ruleId: String,
    callback: QuecCallback<QuecCornJobModel>
)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| ruleId    | Y        | Timed task ID.                    |
| callback  | Y        | Callback function of the request. |

> See QuecCornJobModel Definition above.

**Example**

```kotlin
QuecDeviceService.getCronJobInfo("ruleId") {
    if (it.isSuccess) {
        val data = it.data //Query the details of a timed task successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Delete Timed Tasks in Batches

**API**

Delete timed tasks in batches.

```kotlin
fun batchDeleteCornJob(
    ruleIdList: List<String>,
    callback: QuecCallback<QuecCornJobDeleteListModel>
)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| params    | Y        | Array of timed task IDs.          |
| callback  | Y        | Callback function of the request. |

**QuecCornJobDeleteListModel Definition**

| Field       | Type                            | Description                    |
| ----------- | ------------------------------- | ------------------------------ |
| successList | List&lt;QuecCornJobDeleteModel> | List of successful executions. |
| failureList | List&lt;QuecCornJobDeleteModel> | List of failed executions.     |

**QuecCornJobDeleteModel Definition**

| Field  | Type   | Description     |
| ------ | ------ | --------------- |
| code   | String | Code.           |
| msg    | String | Prompt message. |
| ruleId | String | Timed task ID.  |

**Example**

```kotlin
QuecDeviceService.batchDeleteCornJob(listOf("ruleId")) {
    if (it.isSuccess) {
        val data = it.data //Delete timed tasks in batches successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Query Maximum Number of Timed Tasks

**API**

Query the maximum number of timed tasks under a product.

```kotlin
fun getProductCornJobLimit(
    productKey: String,
    callback: QuecCallback<Int>
)
```

**Parameter**

| Parameter  | Required | Description                       |
| ---------- | -------- | --------------------------------- |
| productKey | Y        | ProductKey.                       |
| callback   | Y        | Callback function of the request. |

**Example**

```kotlin
QuecDeviceService.getProductCornJobLimit("pk") {
    if (it.isSuccess) {
        val data = it.data //Query the maximum number of timed tasks under a product successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```
