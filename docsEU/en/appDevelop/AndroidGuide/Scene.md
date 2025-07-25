# Scene SDK: QuecSceneSdk

## Feature Description

SDK supports users in enabling one or more devices to execute multiple tasks according to certain rules. 

```kotlin
QuecSceneService
```

## SDK Integration Method

> **Note**
>
> The scene SDK depends on the core library quec-iot-sdk to run. Please integrate the core library according to the *Quick Integration Guide*.

Add dependencies

```groovy
implementation 'com.quectel.app.sdk:quec-scene-sdk:2.14.0'
```

## Scene Management

### Get Scene List

**API**

Get the list of current scene.

```kotlin
fun getSceneList(pageNumber: Int, pageSize: Int, callback: QuecCallback<QuecPageResponse<QuecSceneModel>>)
```

**Parameter**

| Parameter  | Required | Description                       |
| ---------- | -------- | --------------------------------- |
| pageNumber | Y        | Page number.                      |
| pageSize   | Y        | Page size.                        |
| callback   | Y        | Callback function of the request. |

**Example**

```kotlin
QuecSceneService.getSceneList(1, 10) {
    if (it.isSuccess) {
        //Get scene list successfully.
        val data = it.data  //scene list data.
    } else {
        //Failed to get scene list.
        val code = it.code  //Error code.
        val msg = it.msg    //Error message.
    }
}
```

**QuecSceneModel Definition**

| Field     | Type               | Description                  |
| --------- | ------------------ | ---------------------------- |
| fid       | String             | Family ID.                   |
| isCommon  | bool               | Whether the scene is common. |
| sceneInfo | QuecSceneInfoModel | Scene details.               |

**QuecSceneInfoModel Definition**

| Field         | Type                       | Description                         |
| ------------- | -------------------------- | ----------------------------------- |
| executeResult | int                        | Execution result of the last scene. |
| icon          | String                     | Scene icon.                         |
| id            | int                        | Execution result of the scene.      |
| metaDataList  | List&lt;QuecMetaDataModel> | Device action list in the scene.    |
| name          | String                     | Scene name.                         |
| sceneId       | String                     | Scene ID.                           |

**QuecMetaDataModel Definition**

| Field      | Type                       | Description                                            |
| ---------- | -------------------------- | ------------------------------------------------------ |
| actionList | List&lt;QuecSceneActionModel> | Device action list.                                    |
| deviceKey  | String                     | DeviceKey.                                             |
| productKey | String                     | ProductKey.                                            |
| deviceName | String                     | Device name.                                           |
| logoImage  | String                     | Device icon.                                           |
| deviceType | int                        | Device type.<br />1 Default normal device<br />2 Group |

**QuecSceneActionModel Definition**

| Field    | Type   | Description                         |
| -------- | ------ | ----------------------------------- |
| id       | int    | TSL feature ID.                     |
| code     | String | TSL feature code.                   |
| dataType | String | TSL data type.                      |
| actionId | int    | Action ID.                          |
| name     | String | TSL feature name.                   |
| subName  | String | Data type of the TSL feature.       |
| type     | String | TSL feature type.                   |
| subType  | String | Read/Write mode of the TSL feature. |

### Add Scene

**API**

Add a new scene.

```kotlin
fun addScene(sceneModel: QuecSceneModel, callback: QuecCallback<Unit>)
```

**Parameter**

| Parameter  | Required | Description                       |
| ---------- | -------- | --------------------------------- |
| sceneModel | Y        | Scene property.                   |
| callback   | Y        | Callback function of the request. |

**Example**

```kotlin
val model = QuecSceneModel()
val sceneInfoModel = QuecSceneInfoModel()
val metaDataModel = QuecMetaDataModel()
val actionModel = QuecSceneActionModel()

model.isIsCommon = true
sceneInfoModel.name = "Turn on the device light"
sceneInfoModel.icon = "https://xxx/xxx.png"

actionModel.code = "switch"
actionModel.dataType = "BOOL"
actionModel.id = 1
actionModel.name = "Switch"
actionModel.subName = "Turn on the light"
actionModel.subType = "RW"
actionModel.type = "PROPERTY"
actionModel.value = true

metaDataModel.productKey = "pk"
metaDataModel.deviceKey = "dk"
metaDataModel.deviceType = 1

model.sceneInfo = sceneInfoModel
sceneInfoModel.metaDataList = listOf(metaDataModel)
metaDataModel.actionList = listOf(actionModel)

QuecSceneService.addScene(model) {
    if (it.isSuccess) {
        //Add a scene successfully.
    } else {
        //Failed to add a scene.
        val code = it.code  //Error code.
        val msg = it.msg    //Error message.
    }
}
```

### Edit Scene

**API**

Edit scene information.

```kotlin
fun editScene(sceneModel: QuecSceneModel, callback: QuecCallback<Unit>)
```

**Parameter**

| Parameter  | Required | Description                       |
| ---------- | -------- | --------------------------------- |
| sceneModel | Y        | Scene property.                   |
| callback   | Y        | Callback function of the request. |

**Example**

```kotlin
val model = QuecSceneModel() //Get the object from the scene list.
model.sceneInfo.name = "New name"
QuecSceneService.editScene(model) {
    if (it.isSuccess) {
        //Edit the scene successfully.
    } else {
        //Failed to edit the scene.
        val code = it.code  //Error code.
        val msg = it.msg    //Error message.
    }
}
```

### Delete Scene

**API**

Delete the specified scene.

```kotlin
fun deleteScene(sceneId: String, callback: QuecCallback<Unit>)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| sceneId   | Y        | Scene ID.                         |
| callback  | Y        | Callback function of the request. |

**Example**

```kotlin
QuecSceneService.deleteScene("sceneId") {
    if (it.isSuccess) {
        //Delete a scene successfully.
    } else {
        //Failed to delete a scene.
        val code = it.code  //Error code.
        val msg = it.msg    //Error message.
    }
}
```

### Get Scene Details

**API**

Get details of the specified scene. 

```kotlin
fun getSceneInfo(sceneId: String, callback: QuecCallback<QuecSceneModel>)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| sceneId   | Y        | Scene ID.                         |
| callback  | Y        | Callback function of the request. |

**Example**

```kotlin
QuecSceneService.getSceneInfo("sceneId") {
    if (it.isSuccess) {
        //Get scene details successfully.
    } else {
        //Failed to get scene details.
        val code = it.code  //Error code.
        val msg = it.msg    //Error message.
    }
}
```

## Execute Scene

### Execute Scene

**API**

Execute the specified scene.

```kotlin
fun executeScene(sceneId: String, callback: QuecCallback<QuecActionExecuteResultModel>)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| sceneId   | Y        | Scene ID.                         |
| callback  | Y        | Callback function of the request. |

**Example**

```kotlin
QuecSceneService.executeScene("sceneId") {
    if (it.isSuccess) {
        //Execute a scene successfully.
    } else {
        //Failed to execute a scanario.
        val code = it.code  //Error code.
        val msg = it.msg    //Error message.
    }
}
```

**QuecActionExecuteResultModel Definition**

| Field          | Type                         | Description                          |
| -------------- | ---------------------------- | ------------------------------------ |
| executeResult  | boolean                      | Execution result.                    |
| failActionList | List&lt;QuecFailActionModel> | List of failed executions.           |
| failCount      | int                          | The number of failed executions.     |
| successCount   | int                          | The number of successful executions. |

**QuecFailActionModelModel Definition**

| Field      | Type   | Description  |
| ---------- | ------ | ------------ |
| productKey | String | ProductKey.  |
| deviceKey  | String | DeviceKey.   |
| deviceName | String | Device name. |
| imageLogo  | String | Device logo. |
| reason     | String | Reason.      |

### Test Scene

**API**

Test the execution of the scene configuration. A configuration can be executed even though the scene has not been saved to the platform.

```kotlin
fun executeTestScene(sceneInfoModel: QuecSceneModel, callback: QuecCallback<QuecActionExecuteResultModel>)
```

**Parameter**

| Parameter  | Required | Description                       |
| ---------- | -------- | --------------------------------- |
| sceneModel | Y        | Scene property.                   |
| callback   | Y        | Callback function of the request. |

**Example**

```kotlin
val model = QuecSceneModel() //Get the object from the scene list.
QuecSceneService.executeTestScene(model) {
    if (it.isSuccess) {
        //Test the execution of the scene configuration successfully.
    } else {
        //Failed to test the execution of the scene configuration.
        val code = it.code  //Error code.
        val msg = it.msg    //Error message.
    }
}
```

## Common Scene

### Get Common Scene List

**API**

Get the list of common scenes.

```kotlin
fun getCommonSceneList(pageNumber: Int, pageSize: Int, callback: QuecCallback<QuecPageResponse<QuecSceneModel>>)
```

**Parameter**

| Parameter  | Required | Description                       |
| ---------- | -------- | --------------------------------- |
| pageNumber | Y        | Page number.                      |
| pageSize   | Y        | Page size.                        |
| callback   | Y        | Callback function of the request. |

**Example**

```kotlin
QuecSceneService.getCommonSceneList(1, 10) {
    if (it.isSuccess) {
        //Get the list of common scenes successfully.
    } else {
        //Failed to get the list of common scenes.
        val code = it.code  //Error code.
        val msg = it.msg    //Error message.
    }
}
```

### Add Common Scenes in Batches

**API**

Add common scenes in batches.

```kotlin
fun batchAddCommonScene(sceneIdList: List<String>, callback: QuecCallback<QuecAddCommonSceneIdModel>)
```

**Parameter**

| Parameter   | Required | Description                       |
| ----------- | -------- | --------------------------------- |
| sceneIdList | Y        | Scene ID list.                    |
| callback    | Y        | Callback function of the request. |

**Example**

```kotlin
QuecSceneService.batchAddCommonScene(listOf("sceneId1", "sceneId2")) {
    if (it.isSuccess) {
        //Add common scenes in batches successfully.
    } else {
        //Failed to add common scenes in batches.
        val code = it.code  //Error code.
        val msg = it.msg    //Error message.
    }
}
```

### Delete Common Scenes in Batches

**API**

Delete common scenes in batches.

```kotlin
fun batchDeleteCommonScene(sceneIdList: List<String>, callback: QuecCallback<QuecAddCommonSceneIdModel>)
```

**Parameter**

| Parameter   | Required | Description                       |
| ----------- | -------- | --------------------------------- |
| sceneIdList | Y        | Scene ID list.                    |
| callback    | Y        | Callback function of the request. |

**Example**

```kotlin
QuecSceneService.batchDeleteCommonScene(listOf("sceneId1", "sceneId2")) {
    if (it.isSuccess) {
        //Delete common scenes in batches successfully.
    } else {
        //Failed to delete common scenes in batches.
        val code = it.code  //Error code.
        val msg = it.msg    //Error message.
    }
}
```

## Scene Logs

### Get Scene Log List

**API**

Get scene log list.

```kotlin
fun getSceneLogList(lastExecutionId: Long, limit: Int, callback: QuecCallback<List<QuecSceneLogItemModel>>)
```

**Parameter**

| Parameter       | Required | Description                           |
| --------------- | -------- | ------------------------------------- |
| lastExecutionId | N        | ID of the last execution log.         |
| limit           | Y        | The number of the data to be queried. |
| callback        | Y        | Callback function of the request.     |

**Example**

```kotlin
QuecSceneService.getSceneLogList(80, 10) {
    if (it.isSuccess) {
        //Get the scene log list successfully.
        val data = it.data //List data.
    } else {
        //Failed to get the scene log list.
        val code = it.code  //Error code.
        val msg = it.msg    //Error message.
    }
}
```

**QuecSceneLogItemModel Definition**

| Field           | Type                                | Description            |
| --------------- | ----------------------------------- | ---------------------- |
| sceneId         | String                              | Scene ID.              |
| sceneName       | String                              | Scene name.            |
| sceneIcon       | String                              | Scene icon.            |
| executionId     | long                                | Execution ID.          |
| executionTime   | long                                | Execution time.        |
| executionResult | int                                 | Execution result.      |
| executionList   | List&lt;QuecSceneLogExecutionModel> | Execution result list. |

**QuecSceneLogExecutionModel Definition**

| Field            | Type                          | Description |
|------------------|-------------------------------|--------|
| productKey       | String                        | ProductKey. |
| deviceKey        | String                        | DeviceKey. |
| deviceName       | String                        | Device name. |
| logoImage        | String                        | Device logo. |
| executionResult  | String                        | Execution result. |
| actionResultList | List&lt;QuecSceneLogActionModel> | Scene ID. |

**QuecSceneLogActionModel Definition**

| Field      | Type                 | Description       |
| ---------- | -------------------- | ----------------- |
| result     | boolean              | Execution result. |
| reason     | String               | Reason.           |
| createTime | String               | Timestamps.       |
| action     | QuecSceneActionModel | TSL model.        |

### Get Scene Log Details

**API**

Get details of scene logs.

```kotlin
fun getSceneLogDetailInfo(executionId: Long, callback: QuecCallback<QuecSceneLogItemModel>)
```

**Parameter**

| Parameter   | Required | Description                       |
| ----------- | -------- | --------------------------------- |
| executionId | Y        | Scene log ID.                     |
| callback    | Y        | Callback function of the request. |

**Example**

```kotlin
QuecSceneService.getSceneLogDetailInfo(1000) {
    if (it.isSuccess) {
        //Get details of scene logs succesfully.
        val data = it.data //Detailed data.
    } else {
        //Failed to get details of scene logs.
        val code = it.code  //Error code.
        val msg = it.msg    //Error message.
    }
}
```

### Delete Scene Logs

**API**

Delete scene logs.

```kotlin
fun clearSceneLog(callback: QuecCallback<Unit>)
```

**Parameter**

| Parameter | Required | Description      |
|-----|------|------------------|
| callback    | Y    | Callback function of the request. |

**Example**

```kotlin
QuecSceneService.clearSceneLog() {
    if (it.isSuccess) {
        //Delete scene logs successfully.
    } else {
        //Failed to delete scene logs.
        val code = it.code  //Error code.
        val msg = it.msg    //Error message.
    }
}
```
