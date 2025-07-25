# Home Information

## Feature Description

This section introduces how to manage homes, including creating a home, editing home information, deleting a home, and getting a home list.

## General Information

```kotlin
QuecSmartHomeService
```

**QuecSmartHomeService Class Definition**

| Field            | Type                          | Description                                         |
| ---------------- | ----------------------------- | --------------------------------------------------- |
| enable           | BOOL                          | Whether to enable home mode.                        |
| autoSwitch       | BOOL                          | Whether to enable home auto-switch.                 |
| currentFamily    | QuecFamilyItemModel           | Home information of the current user.               |
| familys          | List&lt;QuecFamilyItemModel  | Data list of all homes of the current user.         |
| familyInviteList | List&lt;QuecInviteItemModel> | List of homes to which the current user is invited. |

**QuecFamilyItemModel Definition**

| Field                | Type                             | Description                                                                  |
|----------------------|----------------------------------|------------------------------------------------------------------------------|
| fid                  | String                           | Home ID.                                                                     |
| familyName           | String                           | Home name.                                                                   |
| familyLocation       | String                           | Home location.                                                               |
| familyCoordinates    | String                           | Latitude and longitude of the home.                                          |
| addTime              | String                           | The time to add the home.                                                    |
| addTimeTs            | Long                             | The timestamp to add the home.                                               |
| memberRole           | Int                              | Member role.<br />1-Home creator<br />2-Administrator<br />3-Ordinary member |
| currentRoom          | QuecFamilyRoomItemModel          | Information of rooms selected by the current family.                         |
| rooms                | List&lt;QuecFamilyRoomItemModel> | List of all rooms in the current home.                                       |
| groupDeviceDeviceNum | Int                              | The number of devices included in a group.                                   |
| deviceList           | List&lt;QuecGroupDeviceBean>     | Device list.                                                                 |

**QuecFamilyRoomItemModel Definition**

| Field    | Type   | Description |
| -------- | ------ | ----------- |
| frid     | String | Room ID.    |
| roomName | String | Room name.  |
| roomSort | String | Room order. |

**QuecInviteItemModel Definition**

| Field             | Type   | Description                                    |
|-------------------|--------|------------------------------------------------|
| fid               | String | Home ID.                                       |
| familyName        | String | Home name.                                     |
| familyLocation    | String | Home location.                                 |
| familyCoordinates | String | Latitude and longitude of the home.            |
| addTime           | String | The time to add the home.                      |
| addTimeTs         | Long   | The timestamp to add the home.                 |
| invalidTime       | String | The time when the user is invited to the home. |

## Home Mode

### Enable/Disable Home Mode

**API**

Enable or disable the home mode.

```kotlin
fun enabledFamilyMode(familyMode: Boolean, callback: QuecCallback<Unit>)
```

**Parameter**

| Parameter  | Required | Description                       |
| ---------- | -------- | --------------------------------- |
| familyMode | Y        | Enable or disable the home mode.  |
| callback   | Y        | Callback function of the request. |

**Example**

```kotlin
QuecSmartHomeService.enabledFamilyMode(true) {
    if (it.isSuccess) {
        //Enable the home mode successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Enable/Disable Home Auto-switch

**API**

Enable or disable the home auto-switch. This feature can only be set after the home mode is enabled. If home auto-switch is enabled, the connected home will be automatically switched when your location changes.

```kotlin
fun enabledAutoSwitch(autoSwitch: Boolean, callback: QuecCallback<Unit>)
```

**Parameter**

| Parameter  | Required | Description                             |
| ---------- | -------- | --------------------------------------- |
| autoSwitch | Y        | Enable or disable the home auto-switch. |
| callback   | Y        | Callback function of the request.       |

**Example**

```kotlin
QuecSmartHomeService.enabledAutoSwitch(true) {
    if (it.isSuccess) {
        //Enable home auto-switch successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Get Home Mode Configuration

**API**

Query the home mode configuration to check whether the home mode is enabled.

```kotlin
fun getFamilyModeConfig(callback: QuecCallback<QuecFamilyModeConfigModel>)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| callback  | Y        | Callback function of the request. |

**QuecFamilyModeConfigModel Definition**

| Field             | Type | Description                              |
| ----------------- | ---- | ---------------------------------------- |
| enabledAutoSwitch | BOOL | Whether the home auto-switch is enabled. |
| enabledFamilyMode | BOOL | Whether the home mode is enabled.        |

**Example**

```kotlin
QuecSmartHomeService.getFamilyModeConfig {
    if (it.isSuccess) {
        val data = it.data //Query the home mode configuration successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

## Home Management

### Create Home

**API**

Create a home.

```kotlin
fun addFamily(familyParamModel: QuecFamilyParamModel, callback: QuecCallback<Unit>)
```

**Parameter**

| Parameter        | Required | Description                       |
| ---------------- | -------- | --------------------------------- |
| familyParamModel | Y        | Home information.                 |
| callback         | Y        | Callback function of the request. |

**QuecFamilyParamModel Definition**

| Field             | Type            | Description                                                  |
| ----------------- | --------------- | ------------------------------------------------------------ |
| fid               | String          | Home ID. This parameter is required when you edit home information or delete a home, while it can be omitted when you create a home. |
| familyName        | String          | Home name. This parameter is required when you create a home, while it is optional when you edit home information. |
| familyLocation    | String          | Home location. Optional parameter.                           |
| familyCoordinates | String          | Latitude and longitude of the home. WGS84 coordinate system. Format: 40.759186,-73.928204. Optional parameter. |
| familyRoomList    | List&lt;String> | Room list. Optional parameter.                               |

**Example**

```kotlin
QuecSmartHomeService.addFamily(
    QuecFamilyParamModel(
        null, "familyName",
        "location name", "110.53263738426125,25.668388834428706", listOf("room1")
    )
) {
    if (it.isSuccess) {
        val data = it.data //Create a home successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Edit Home Information

**API**

Edit home information.

```kotlin
fun setFamily(familyParamModel: QuecFamilyParamModel, callback: QuecCallback<Unit>)
```

**Parameter**

| Parameter        | Required | Description                       |
| ---------------- | -------- | --------------------------------- |
| familyParamModel | Y        | Home information.                 |
| callback         | Y        | Callback function of the request. |

> See QuecFamilyParamModel Definition above.

**Example**

```kotlin
val family = getFamilyInfo()    //Get home information from the platform.
family.familyName = "new name"
QuecSmartHomeService.setFamily(family) {
    if (it.isSuccess) {
        //Edit home information successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Delete Home

**API**

Delete a home.

```kotlin
fun deleteFamily(fid: String, callback: QuecCallback<Unit>)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| fid       | Y        | Home ID.                          |
| callback  | Y        | Callback function of the request. |

**Example**

```kotlin
QuecSmartHomeService.deleteFamily("fid") {
    if (it.isSuccess) {
        //Delete a home successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Query Current Home

**API**

Query the current home.

```kotlin
fun getCurrentFamily(
    fid: String?, currentCoordinates: String?, callback: QuecCallback<QuecFamilyItemModel>
)
```

**Parameter**

| Parameter          | Required | Description                                                  |
| ------------------ | -------- | ------------------------------------------------------------ |
| fid                | Y        | Home ID.                                                     |
| currentCoordinates | N        | Current GPS coordinates (WGS84 format): 40.759186, -73.928204. Optional parameter. |
| callback           | Y        | Callback function of the request.                            |

> See QuecFamilyItemModel Definition above.

**Example**

```kotlin
QuecSmartHomeService.getCurrentFamily("fid", null) {
    if (it.isSuccess) {
        val data = it.data //Query the current home successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Query Home List

**API**

Query the home list.

```kotlin
fun getFamilyList(
    role: String?,
    pageNumber: Int,
    pageSize: Int,
    callback: QuecCallback<QuecPageResponse<QuecFamilyItemModel>>
)
```

**Parameter**

| Parameter  | Required | Description                                                  |
| ---------- | -------- | ------------------------------------------------------------ |
| role       | N        | Member role. Separate multiple roles by commas.<br />1-Home creator<br />2-Administrator<br />3-Ordinary member |
| pageNumber | Y        | Page number. Default: 1.                                     |
| pageSize   | Y        | Page size. Default: 10.                                      |
| callback   | Y        | Callback function of the request.                            |

> See QuecFamilyItemModel Definition above.

**Example**

```kotlin
QuecSmartHomeService.getFamilyList("1", 1, 10) {
    if (it.isSuccess) {
        val data = it.data //Query the home list successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Query Device List in Home

**API**

Query device list in the specified home.

```kotlin
fun getFamilyDeviceList(
    params: QuecFamilyDeviceListParamsModel,
    callback: QuecCallback<QuecPageResponse<QuecDeviceModel>>
)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| params    | Y        | Parameters.                       |
| callback  | Y        | Callback function of the request. |

**QuecFamilyDeviceListParamsModel Definition**

| Field             | Type   | Description                                                               |
|-------------------|--------|---------------------------------------------------------------------------|
| fid               | String | Home ID.                                                                  |
| isAddOwnerDevice  | BOOL   | Whether to add all your devices. Optional parameter.                      |
| deviceName        | String | Device name. Optional parameter.                                          |
| pageNumber        | Int    | Page number. Default: 1. Optional parameter.                              |
| pageSize          | Int    | Page size. Default: 10. Optional parameter.                               |
| isGroupDeviceShow | BOOL   | Whether to display group devices. This parameter is omitted by default.   |
| isAssociation     | BOOL   | Whether to query the unassociated devices. Default value: false.          |
| secondItemCode    | String | Second category. Default value: null.                                     |
| pkList            | String | List of ProductKeys to be added. Separate multiple ProductKeys by commas. |

**Example**

```kotlin
QuecSmartHomeService.getFamilyDeviceList(
    QuecFamilyDeviceListParamsModel(
        "fid", true, null, 1, 10, true, false, null, null
    )
) {
    if (it.isSuccess) {
        val data = it.data //Query device list in the specified home successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

## Common Devices

### Add Common Device

**API**

Add a common device or multiple common devices in batches.

```kotlin
fun addCommonUsedDevice(
    fid: String, deviceList: List<QuecDeviceEnterModel>, callback: QuecCallback<OperateDeviceListRespModel>
)
```

**Parameter**

| Parameter  | Required | Description                       |
| ---------- | -------- | --------------------------------- |
| fid        | Y        | Home ID.                          |
| deviceList | Y        | Device list.                      |
| callback   | Y        | Callback function of the request. |

**QuecDeviceEnterModel Definition**

| Field | Type   | Description |
| ----- | ------ | ----------- |
| pk    | String | ProductKey. |
| dk    | String | DeviceKey.  |

> QuecOperateDeviceRespModel is a generic batch operation response class. You can extract the required properties based on the actual returned parameters.

**QuecOperateDeviceRespModel Definition**

| Field       | Type                      | Description                    |
| ----------- | ------------------------- | ------------------------------ |
| successList | QuecOperateDeviceRespItem | List of successful executions. |
| failureList | QuecOperateDeviceRespItem | List of failed executions.     |

**QuecOperateDeviceRespItem Definition**

| Field        | Type   | Description                                                  |
| ------------ | ------ | ------------------------------------------------------------ |
| fid          | String | Home ID.                                                     |
| oldFrid      | String | Original room ID.                                            |
| nFrid        | String | New room ID.                                                 |
| pk           | String | ProductKey.                                                  |
| dk           | String | DeviceKey.                                                   |
| deviceName   | String | Device name.                                                 |
| shareCode    | String | Share code.                                                  |
| isCommonUsed | BOOL   | Whether the device is commonly used.<br />true-Commonly used<br />false-Not commonly used |
| msg          | String | Error message (Only valid for *failureList*).                |

**Example**

```kotlin
QuecSmartHomeService.addCommonUsedDevice(
    "fid",
    listOf(QuecDeviceEnterModel("dk", "pk"))
) {
    if (it.isSuccess) {
        val data = it.data //Add a common device successfully. 
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Delete Common Device

**API**

Delete a device or multiple devices in batches.

```kotlin
fun deleteCommonUsedDevice(
    fid: String, deviceList: List<CommonDevice>, callback: QuecCallback<OperateDeviceListRespModel>
)
```

**Parameter**

| Parameter  | Required | Description                       |
| ---------- | -------- | --------------------------------- |
| fid        | Y        | Home ID.                          |
| deviceList | Y        | Device list.                      |
| callback   | Y        | Callback function of the request. |

> See QuecDeviceEnterModel and QuecOperateDeviceRespModel Definition above.

**Example**

```kotlin
QuecSmartHomeService.deleteCommonUsedDevice("fid", listOf(CommonDevice().apply {
    pk = "pk"
    dk = "dk"
})) {
    if (it.isSuccess) {
        val data = it.data //Delete a device successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Query Common Device List

**API**

Query the list of common devices.

```kotlin
fun getCommonUsedDeviceList(
    fid: String,
    pageNumber: Int,
    pageSize: Int,
    isGroupDeviceShow: Boolean,
    callback: QuecCallback<QuecPageResponse<QuecDeviceModel>>
)
```

**Parameter**

| Parameter         | Required | Description                                                  |
| ----------------- | -------- | ------------------------------------------------------------ |
| fid               | Y        | Home ID.                                                     |
| pageNumber        | N        | Page number. Default: 1.                                     |
| pageSize          | N        | Page size. Default: 10.                                      |
| isGroupDeviceShow | N        | Whether to display group devices. This parameter is omitted by default. |
| callback          | Y        | Callback function of the request.                            |

> The QuecDeviceModel Definition is the same as the SDK description in the *Device Management* section.

**Example**

```kotlin
QuecSmartHomeService.getCommonUsedDeviceList("fid", 1, 10, true) {
    if (it.isSuccess) {
        val data = it.data //Query the list of common devices successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

## Device Group

### Query Home Device Group List

**API**

Query the home device group list.

```kotlin
fun getFamilyGroupList(
    fid: String,
    pageNumber: Int,
    pageSize: Int,
    callback: QuecCallback<QuecPageResponse<QuecFamilyDeviceGroupInfoModel>>
)
```

**Parameter**

| Parameter  | Required | Description                       |
| ---------- | -------- | --------------------------------- |
| fid        | Y        | Home ID.                          |
| pageNumber | N        | Page number. Default: 1.          |
| pageSize   | N        | Page size. Default: 10.           |
| callback   | Y        | Callback function of the request. |

**QuecFamilyDeviceGroupInfoModel Definition**

| Field            | Type   | Description                                                  |
|------------------|--------|--------------------------------------------------------------|
| name             | String | Group name.                                                  |
| fid              | String | Home ID. This parameter is required when you create a group. |
| address          | String | Address.                                                     |
| contactPhoneList | String | Contact person.                                              |
| coordinate       | String | Longitude and latitude.                                      |
| coordinateSystem | String | Coordinate system.                                           |
| descrip          | String | Description.                                                 |
| manager          | String | Administrator.                                               |
| managerType      | String | Administrator type.                                          |
| parentId         | String | Parent device group ID.                                      |
| extend           | String | Extended field.                                              |
| dgid             | String | Group ID.                                                    |
| owner            | String | Owner.                                                       |
| addTime          | String | The time to add the group.                                   |
| addTimeTs        | Long   | The timestamp to add the group.                              |

**Example**

```kotlin
QuecSmartHomeService.getFamilyGroupList("fid", 1, 10) {
    if (it.isSuccess) {
        val data = it.data //Query the home device group list successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Add Home Device Group

**API**

Add a home device group.

```kotlin
fun addFamilyDeviceGroup(
    groupInfoModel: QuecFamilyDeviceGroupModel, callback: QuecCallback<Unit>
)
```

**Parameter**

| Parameter      | Required | Description                       |
| -------------- | -------- | --------------------------------- |
| groupInfoModel | Y        | Group information.                |
| callback       | Y        | Callback function of the request. |

**QuecFamilyDeviceGroupModel Definition**

| Field            | Type   | Description                                                  |
| ---------------- | ------ | ------------------------------------------------------------ |
| name             | String | Home name.                                                   |
| fid              | String | Home ID. This parameter is required when you create a group. |
| address          | String | Address.                                                     |
| contactPhoneList | String | Contact person.                                              |
| coordinate       | String | Longitude and latitude.                                      |
| coordinateSystem | String | Coordinate system.                                           |
| descrip          | String | Description.                                                 |
| manager          | String | Administrator.                                               |
| managerType      | String | Administrator type.                                          |
| parentId         | String | Parent device group ID.                                      |
| extend           | String | Extended field.                                              |

**Example**

```kotlin
QuecSmartHomeService.addFamilyDeviceGroup(
    QuecFamilyDeviceGroupModel(
        name = "name",
        fid = "fid",
    )
) {
    if (it.isSuccess) {
        //Add a home device group successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Query List of Devices not in Home Device Group

**API**

Query the list of devices that are not in the home device group.

```kotlin
fun getDeviceListByNotInDeviceGroup(
    fid: String,
    pageNumber: Int,
    pageSize: Int,
    groupId: String,
    callback: QuecCallback<QuecPageResponse<QuecDeviceModel>>
)
```

**Parameter**

| Parameter  | Required | Description                       |
| ---------- | -------- | --------------------------------- |
| fid        | N        | Home ID.                          |
| pageNumber | N        | Page number. Default: 1.          |
| pageSize   | N        | Page size. Default: 10.           |
| groupId    | Y        | Device group ID.                  |
| callback   | Y        | Callback function of the request. |

> The QuecDeviceModel Definition is the same as the SDK description in the *Device Management* section.

**Example**

```kotlin
QuecSmartHomeService.getDeviceListByNotInDeviceGroup("fid", 1, 10, "groupId") {
    if (it.isSuccess) {
        val data = it.data //Query the list of devices that are not in the home device group successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```
