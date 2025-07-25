# Device Group

## Feature Description

Device grouping refers to grouping multiple devices into one group for easier management, such as batch control and batch query operations.

> See QuecDeviceModel Definition in [Device Management](Device%20Management.md)

```kotlin
QuecDeviceGroupService
```

## Device Group

### Get Device Group List

**API**

Get a device group list. You can first call Add Device Group interface and then obtain the device group list.

```kotlin
fun getDeviceGroupList(
    pageNumber: Int,
    pageSize: Int,
    extra: QuecDeviceGroupParamModel?,
    callback: QuecCallback<QuecPageResponse<QuecDeviceGroupInfoModel>>
)
```

**Parameter**

| Parameter  | Required | Description                       |
| ---------- | -------- | --------------------------------- |
| pageNumber | Y        | Page number.                      |
| pageSize   | Y        | Page size.                        |
| infoModel  | N        | Group expansion information.      |
| callback   | Y        | Callback function of the request. |

**QuecDeviceGroupParamModel Definition**

| Field            | Type   | Description                             |
| ---------------- | ------ | --------------------------------------- |
| name             | String | Name, required when you create a group. |
| address          | String | Address.                                |
| contactPhoneList | String | Contact person.                         |
| coordinate       | String | Longitude and latitude.                 |
| coordinateSystem | String | Coordinate system.                      |
| descrip          | String | Description.                            |
| manager          | String | Administrator.                          |
| managerType      | String | Administrator type.                     |
| parentId         | String | Parent device group ID.                 |
| extend           | String | Extended field.                         |

**QuecDeviceGroupInfoModel Definition**

| Field            | Type   | Description                             |
| ---------------- | ------ | --------------------------------------- |
| name             | String | Name, required when you create a group. |
| address          | String | Address.                                |
| contactPhoneList | String | Contact person.                         |
| coordinate       | String | Longitude and latitude.                 |
| coordinateSystem | String | Coordinate system.                      |
| descrip          | String | Description.                            |
| manager          | String | Administrator.                          |
| managerType      | String | Administrator type.                     |
| parentId         | String | Parent device group ID.                 |
| extend           | String | Extended field.                         |
| dgid             | String | Group ID.                               |
| owner            | String | Owner.                                  |
| addTime          | String | The time to add the group.              |
| addTimeTs        | String | The timestamp to add the group.         |

**Example**

```kotlin
QuecDeviceGroupService.getDeviceGroupList(1, 10, null) {
    if (it.isSuccess) {
        val data = it.data //Get a device group list successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Add Device Group

**API**

Add a device group.

```kotlin
fun addDeviceGroup(
    groupInfoModel: QuecDeviceGroupParamModel,
    callback: QuecCallback<Unit>
)
```

**Parameter**

| Parameter      | Required | Description                       |
| -------------- | -------- | --------------------------------- |
| groupInfoModel | Y        | Group information.                |
| callback       | Y        | Callback function of the request. |

> See QuecDeviceGroupParamModel Definition above.

**Example**

```kotlin
QuecDeviceGroupService.addDeviceGroup(
    QuecDeviceGroupParamModel(
        name = "name"
    )
) {
    if (it.isSuccess) {
        //Add a device group successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Edit Device Group

**API**

Edit a device group.

```kotlin
fun updateDeviceGroupInfo(
    deviceGroupId: String,
    infoModel: QuecDeviceGroupParamModel,
    callback: QuecCallback<Unit>
)
```

**Parameter**

| Parameter     | Required | Description                       |
| ------------- | -------- | --------------------------------- |
| deviceGroupId | Y        | Group ID.                         |
| infoModel     | Y        | Group information.                |
| callback      | Y        | Callback function of the request. |

> See QuecDeviceGroupParamModel Definition above.

**Example**

```kotlin
val info = getInfo() //Group information obtained from the cloud
info.name = "name"
QuecDeviceGroupService.updateDeviceGroupInfo(
    "id",
    info
) {
    if (it.isSuccess) {
        //Edit a device group successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Delete Device Group

**API**

Delete a device group according to group ID.

```kotlin
fun deleteDeviceGroup(
    deviceGroupId: String,
    callback: QuecCallback<Unit>
)
```

**Parameter**

| Parameter     | Required | Description                       |
| ------------- | -------- | --------------------------------- |
| deviceGroupId | Y        | Group ID.                         |
| callback      | Y        | Callback function of the request. |

**Example**

```kotlin
QuecDeviceGroupService.deleteDeviceGroup("groupId") {
    if (it.isSuccess) {
        //Delete a device group successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Get Device Group Information

**API**

Get device group information.

```kotlin
fun getDeviceGroupInfo(
    deviceGroupId: String,
    callback: QuecCallback<QuecDeviceGroupInfoModel>
)
```

**Parameter**

| Parameter     | Required | Description                       |
| ------------- | -------- | --------------------------------- |
| deviceGroupId | Y        | Group ID.                         |
| callback      | Y        | Callback function of the request. |

> See QuecDeviceGroupInfoModel Definition above.

**Example**

```kotlin
QuecDeviceGroupService.getDeviceGroupInfo("groupId") {
    if (it.isSuccess) {
        val data = it.data //Get device group information successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Get Device List

**API**

Get a device list. The list data is added through [Add Device to Group] interface. 

```kotlin
fun getDeviceList(
    deviceGroupId: String?,
    deviceGroupName: String?,
    deviceKeyList: String?,
    productKey: String?,
    pageNumber: Int,
    pageSize: Int,
    callback: QuecCallback<QuecPageResponse<QuecDeviceModel>>
)
```

**Parameter**

| Parameter       | Required | Description                                                  |
| --------------- | -------- | ------------------------------------------------------------ |
| deviceGroupId   | Y        | Group ID.                                                    |
| deviceGroupName | N        | Device group name.                                           |
| deviceKeyList   | N        | DeviceKey list,  containing multiple Devicekeys separated by commas. |
| productKey      | N        | ProductKey.                                                  |
| pageNumber      | Y        | Current Page. Default value: 1.                              |
| pageSize        | Y        | Page size: Default value: 10.                                |
| callback        | Y        | Callback function of the request.                            |

> See QuecDeviceModel Definition above.

**Example**

```kotlin
QuecDeviceGroupService.getDeviceList("groupId", null, null, null, 1, 10) {
    if (it.isSuccess) {
        val data = it.data //Get a device list successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Add Device to Group

**API**

Add a device to a group.

```kotlin
fun addDeviceToGroup(
    deviceGroupId: String,
    deviceList: List<QuecDeviceModel>,
    callback: QuecCallback<QuecOperateDeviceToGroupModel>
)
```

**Parameter**

| Parameter     | Required | Description                       |
| ------------- | -------- | --------------------------------- |
| deviceGroupId | Y        | Group ID.                         |
| deviceList    | Y        | Device list.                      |
| callback      | Y        | Callback function of the request. |

**QuecOperateDeviceToGroupModel Definition**

| Field       | Type                                      | Description                    |
| ----------- | ----------------------------------------- | ------------------------------ |
| successList | List&lt;QuecOperateDeviceToGroupRstModel> | List of successful executions. |
| failureList | List&lt;QuecOperateDeviceToGroupRstModel> | List of failed executions.     |

**QuecOperateDeviceToGroupFailRstModel Definition**

| Field | Type                             | Description         |
| ----- | -------------------------------- | ------------------- |
| data  | QuecOperateDeviceToGroupRstModel | Device information. |
| msg   | String                           | Prompt message.     |

**QuecOperateDeviceToGroupRstModel Definition**

| Field | Type   | Description |
| ----- | ------ | ----------- |
| pk    | String | ProductKey. |
| dk    | String | DeviceKey.  |

**Example**

```kotlin
QuecDeviceGroupService.addDeviceToGroup(
    "groupId",
    listOf(QuecDeviceModel("productKey", "deviceKey"))
) {
    if (it.isSuccess) {
        val data = it.data //Add a device to a group successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Delete Device from Group

**API**

Delete a device from a group.

```kotlin
fun deleteDeviceFromGroup(
    deviceGroupId: String,
    deviceList: List<QuecDeviceModel>,
    callback: QuecCallback<QuecOperateDeviceToGroupModel>
)
```

**Parameter**

| Parameter     | Required | Description                       |
| ------------- | -------- | --------------------------------- |
| deviceGroupId | Y        | Group ID.                         |
| deviceList    | Y        | Device List.                      |
| callback      | Y        | Callback function of the request. |

> See QuecOperateDeviceToGroupModel Definition above.

**Example**

```kotlin
QuecDeviceGroupService.deleteDeviceFromGroup(
    "groupId",
    listOf(QuecDeviceModel("productKey", "deviceKey"))
) {
    if (it.isSuccess) {
        //Delete a device from a group successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Get Sub-device List of Gateway

**API**

Get a sub-device list of a gateway.

```kotlin
fun getGatewayDeviceChildList(
    deviceKey: String,
    productKey: String,
    pageNumber: Int,
    pageSize: Int,
    callback: QuecCallback<QuecPageResponse<QuecDeviceModel>>
)
```

**Parameter**

| Parameter  | Required | Description                       |
| ---------- | -------- | --------------------------------- |
| deviceKey  | Y        | DeviceKey.                        |
| productKey | Y        | ProductKey.                       |
| pageNumber | Y        | Page number.                      |
| pageSize   | Y        | Page size.                        |
| callback   | Y        | Callback function of the request. |

> See QuecDeviceModel Definition above.

**Example**

```kotlin
QuecDeviceGroupService.getGatewayDeviceChildList("deviceKey", "productKey", 1, 10) {
    if (it.isSuccess) {
        val data = it.data //Get a sub-device list of a gateway successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Get Device List Not in Device Group

**API**

Get a device list not in a device group for devices filtering and adding them to a device group.

```kotlin
fun getDeviceListByNotInDeviceGroup(
    pageNumber: Int,
    pageSize: Int,
    groupId:String,
    callback: QuecCallback<QuecPageResponse<QuecDeviceModel>>
)
```

**Parameter**

| Parameter  | Required | Description                       |
| ---------- | -------- | --------------------------------- |
| pageNumber | Y        | Page number.                      |
| pageSize   | Y        | Page size.                        |
| groupId    | Y        | Device group ID.                  |
| callback   | Y        | Callback function of the request. |

> See QuecDeviceModel Definition above.

**Example**

```kotlin
QuecDeviceGroupService.getDeviceListByNotInDeviceGroup(1, 10, "groupId") {
    if (it.isSuccess) {
        val data = it.data //Get a device list not in a device group successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```
