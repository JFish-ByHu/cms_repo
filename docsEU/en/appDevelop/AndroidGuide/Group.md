# Group Control

## Feature Description

Device group: organize multiple devices to form a group for easy management and control.

> Note
>
> **Only when home mode is enabled can the group feature be used.**



For all SDK APIs requiring the *fid* parameter, you can obtain it by calling *QuecFamilyUtil.getFamilyId()*.

> **Note**
>
> The group SDK depends on the core library quec-iot-sdk to run. Please integrate the core library according to the *IoT SDK Integration Guide*.

Add dependencies

```groovy
implementation 'com.quectel.app.sdk:quec-group-sdk:2.14.0'
```

## Feature List

### Create Group

**API**

Create a group.

```kotlin
fun createGroup(bean: QuecGroupCreateBean, callback: QuecCallback<QuecGroupCreateResultBean>)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| bean      | Y        | QuecGroupCreateBean class object. |
| callback  | Y        | Callback function of the request. |

**QuecGroupCreateBean Definition**

| Field           | Type                               | Description                                                  |
| --------------- | ---------------------------------- | ------------------------------------------------------------ |
| groupDeviceName | String                             | Group name.                                                  |
| fid             | String                             | Home ID.                                                     |
| frid            | String                             | Room ID.                                                     |
| isCommonUsed    | BOOL                               | Whether the device is commonly used.<br />0-Not commonly used<br />1-Commonly used |
| deviceList      | List&lt;QuecGroupCreateDeviceBean> | Device list.                                                 |

**QuecGroupCreateDeviceBean Definition**

| Field      | Type   | Description |
| ---------- | ------ | ----------- |
| productKey | String | ProductKey. |
| deviceKey  | String | DeviceKey.  |

**Example**

```kotlin
QuecGroupService.createGroup(QuecGroupCreateBean().apply {
    groupDeviceName = "test"
    fid = QuecFamilyUtil.getFamilyId()
    frid = "C17592"
    isCommonUsed = true
}) {
    if (it.isSuccess) {
        val data = it.data //Create a group successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Query Group Details

**API**

Query group details.

```kotlin
fun getGroupInfo(gdid: String, callback: QuecCallback<QuecGroupBean>)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| groupId   | Y        | Group ID.                         |
| callback  | Y        | Callback function of the request. |

> The response type is QuecGroupBean, and the properties are defined as above.

**Example**

```kotlin
QuecGroupService.getGroupInfo("fdid") {
    if (it.isSuccess) {
        val data = it.data //Query group details successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

**QuecGroupBean Definition**

| Field                | Type                         | Description                                                  |
| -------------------- | ---------------------------- | ------------------------------------------------------------ |
| name                 | String                       | Group name.                                                  |
| fid                  | String                       | Home ID.                                                     |
| frid                 | String                       | Room ID.                                                     |
| gdid                 | String                       | Group ID.                                                    |
| roomName             | String                       | Room name.                                                   |
| onlineStatus         | int                          | Device status.<br />0-Offline<br />1-Online                  |
| productKey           | String                       | ProductKey.                                                  |
| deviceKey            | String                       | DeviceKey.                                                   |
| isCommonUsed         | BOOL                         | Whether the device is commonly used.<br />0-Not commonly used<br />1-Commonly used |
| groupDeviceDeviceNum | int                          | The number of devices included in the group.                 |
| deviceList           | List&lt;QuecGroupDeviceBean> | Device list.                                                 |

**QuecGroupDeviceBean Definition**

| Field               | Type   | Description                                         |
| ------------------- | ------ | --------------------------------------------------- |
| productKey          | String | ProductKey.                                         |
| deviceKey           | String | DeviceKey.                                          |
| deviceName          | String | Device name.                                        |
| logoImage           | String | Device logo.                                        |
| frid                | String | Room ID.                                            |
| roomName            | String | Room name.                                          |
| onlineStatus        | int    | Device status.<br />0-Offline<br />1-Online         |
| msg                 | String | Message of API response.                            |
| code                | int    | API response code.                                  |
| lowPowerProduct     | BOOL   | Whether it is a low-power product.                  |
| lowPowerStatus      | BOOL   | Whether the low-power mode is enabled.              |
| lowPowerCache       | int    | Cache duration in low-power mode. Unit: second.     |
| lowPowerAlive       | int    | Heartbeat interval in low-power mode. Unit: minute. |
| lastOfflineTimeTs   | int    | Timestamp of device offline.                        |
| capabilitiesBitmask | int    | Device channel capability mask.                     |



### Query Basic Group Information

**API**

Query the basic information of a group.

```kotlin
fun getGroupDeviceInfo(
    gdid: String,
    callback: QuecCallback<QuecDeviceModel>
)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| groupId   | Y        | Group ID.                         |
| callback  | Y        | Callback function of the request. |

> The response type is QuecDeviceModel, and the properties are defined in SDK description in the *Device Management* section.

**Example**

```kotlin
QuecGroupService.getGroupDeviceInfo("gdid") {
    if (it.isSuccess) {
        val data = it.data //Query the basic information of a group successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Determine Whether Device Can Join Group

**API**

Determine whether devices can join the group in batches.

```kotlin
fun checkDeviceAddGroup(
    fid: String,
    deviceList: List<QuecGroupCreateDeviceBean>,
    callback: QuecCallback<List<QuecGroupDeviceBean>?>
)
```

**Parameter**

| Parameter  | Required | Description                             |
| ---------- | -------- | --------------------------------------- |
| fid        | Y        | Home ID.                                |
| deviceList | Y        | QuecGroupCreateDeviceBean class object. |
| callback   | Y        | Callback function of the request.       |

> See QuecGroupDeviceBean and QuecGroupCreateDeviceBean Definitions above.

**Example**

```kotlin
QuecGroupService.checkDeviceAddGroup(
    QuecFamilyUtil.getFamilyId(), listOf(
    QuecGroupCreateDeviceBean().apply {
        productKey = "pk"
        deviceKey = "dk"
    }
)) {
    if (it.isSuccess) {
        val data = it.data //Determine whether devices can join the group in batches successfuly.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Get List of Devices to Be Added

**API**

Get the list of devices to be added.

```kotlin
fun getAddableList(
    fid: String,
    gdid: String,
    deviceList: List<QuecGroupCreateDeviceBean>,
    page: Int,
    pageSize: Int,
    callback: QuecCallback<QuecPageResponse<QuecGroupDeviceBean>>
)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| addedList | Y        | QuecGroupCreateDeviceBean         |
| fid       | Y        | Home ID.                          |
| gdid      | N        | Group ID.                         |
| pageSize  | N        | Page size. Default value: 10.     |
| page      | N        | Page number. Default value: 1.    |
| callback  | Y        | Callback function of the request. |

> See QuecGroupCreateDeviceBean Definition above.

**Example**

```kotlin
QuecGroupService.getAddableList(
    QuecFamilyUtil.getFamilyId(),
    "gdid",
    listOf(QuecGroupCreateDeviceBean().apply {
        productKey = "pk"
        deviceKey = "dk"
    }),
    1, 10
) {
    if (it.isSuccess) {
        val data = it.data //Get the list of devices to be added successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Control Group Device

**API**

Control group devices.

```kotlin
fun controlGroupByHttp(
    data: List<QuecIotDataPointsModel.DataModel>,
    gdid: String,
    extraData: DpsHttpExtraDataBean?,
    callback: QuecCallback<Unit>
)
```

**Parameter**

| Parameter | Required | Description                                                  |
| --------- | -------- | ------------------------------------------------------------ |
| dps       | Y        | dps data (The format encapsulation is the same as the device SDK). |
| groupId   | Y        | Group ID.                                                    |
| extraData | N        | Extra data.                                                  |
| callback  | Y        | Callback function of the request.                            |

**extraData Parameter Specification (NSDictionary Format)**

```kotlin
{
 type Type 1: Transparent transmission 2: Property 3: Service
 dataFormat Data format 1: Hex 2: Text (If type is transparent transmission, dataFormat must be specified.)
 cacheTime Cache duration (seconds, range: 1-7776000). Required if isCache is enabled.
 isCache  Enable/disable caching 1: Enable 2: Disable (Default)
 isCover Overwrite previous commands: 1: Overwrite, 2: Do not overwrite (Default) This parameter is effective if isCache is enabled.
 }
```

> See QuecIotDataPoint Definitionin in SDK description in the *Device Management* section.

**Example**

```kotlin
QuecGroupService.controlGroupByHttp(listOf(QuecIotDataPointsModel.DataModel().apply {
    id = 1
    dataType = QuecIotDataPointsModel.DataModel.QuecIotDataPointDataType.BOOL
    value = true
    code = "switch"
}), "gdid", null) {
    if (it.isSuccess) {
        //Control group devices successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Query Group TSL Property

**API**

Query group TSL properties.

```kotlin
fun groupAttributesById(
    groupId: String,
    codeList: String?,
    callback: QuecCallback<QuecProductTSLInfoModel>
)
```

**Parameter**

| Parameter | Required | Description                                                  |
| --------- | -------- | ------------------------------------------------------------ |
| groupId   | Y        | Group ID.                                                    |
| codeList  | N        | Properties to be queried. Separate multiple properties by commas. |
| callback  | Y        | Callback function of the request.                            |

> See QuecProductTSLInfoModel Definition in SDK description in the *Device Management* section.

**Example**

```kotlin
QuecGroupService.groupAttributesById("gid", "switch") {
    if (it.isSuccess) {
        val data = it.data //Query group TSL properties successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Query Group TSL Property, Including Property Value

**API**

Query group TSL properties, including property values.

```kotlin
fun groupAttributesWithTSL(
    groupId: String,
    productKey: String,
    codeList: String?,
    callback: QuecCallback<QuecProductTSLPropertyModel<Any>>
)
```

**Parameter**

| Parameter  | Required | Description                                                  |
| ---------- | -------- | ------------------------------------------------------------ |
| bean       | Y        | QuecGroupCreateBean class object.                            |
| productKey | Y        | ProductKey.                                                  |
| codeList   | N        | Properties to be queried. Separate multiple properties by commas. |
| callback   | Y        | Callback function of the request.                            |

> See QuecProductTSLPropertyModel Definition in SDK description in the *Device Management* section.

**Example**

```kotlin
QuecGroupService.groupAttributesWithTSL("groupId", "pk", null) {
    if (it.isSuccess) {
        val data = it.data //Query group TSL properties, including property values successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Edit Basic Group Information

**API**

Edit the basic information of groups.

```kotlin
fun editGroupBasicInfo(
    groupId: String,
    groupDeviceName: String,
    fid: String?,
    frid: String?,
    callback: QuecCallback<Unit>
)
```

**Parameter**

| Parameter       | Required | Description                                                  |
| --------------- | -------- | ------------------------------------------------------------ |
| groupId         | Y        | Group ID.                                                    |
| groupDeviceName | Y        | Group name.                                                  |
| fid             | N        | Home ID.                                                     |
| frid            | N        | Room ID.                                                     |
| isCommonUsed    | N        | Whether the device is commonly used.<br />0-Not commonly used<br />1-Commonly used |
| callback        | Y        | Callback function of the request.                            |

**Example**

```kotlin
QuecGroupService.editGroupBasicInfo(
    "gid",
    "newName",
    QuecFamilyUtil.getFamilyId(),
    "frid"
) {
    if (it.isSuccess) {
        //Edit the basic information of groups successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Edit Group Information

**API**

Edit group information.

```kotlin
fun editGroupInfo(
    groupId: String,
    groupDeviceName: String,
    fid: String?,
    frid: String?,
    isCommonUsed: Boolean,
    deviceList: List<QuecGroupCreateDeviceBean>,
    callback: QuecCallback<QuecGroupCreateResultBean>
)
```

**Parameter**

| Parameter       | Required | Description                                                  |
| --------------- | -------- | ------------------------------------------------------------ |
| groupId         | Y        | Group ID.                                                    |
| groupDeviceName | Y        | Group name.                                                  |
| fid             | N        | Home ID.                                                     |
| frid            | N        | Room ID.                                                     |
| deviceList      | Y        | Device list.                                                 |
| isCommonUsed    | N        | Whether the device is commonly used.<br />0-Not commonly used<br />1-Commonly used |
| callback        | Y        | Callback function of the request.                            |

**Example**

```kotlin
QuecGroupService.editGroupInfo(
    "gid", "newName", QuecFamilyUtil.getFamilyId(), "frid", true,
    listOf(QuecGroupCreateDeviceBean().apply {
        productKey = "pk"
        deviceKey = "dk"
    })
) {
    if (it.isSuccess) {
        //Edit group information successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Remove/Add Groups to Common in Batches

**API**

Remove or add groups to the common in batches.

```kotlin
fun batchAddCommon(
    gdidList: MutableList<String>,
    fid: String,
    isCommonUsed: Boolean,
    callback: QuecCallback<QuecGroupBatchResultBean>
)
```

**Parameter**

| Parameter    | Required | Description                                                  |
| ------------ | -------- | ------------------------------------------------------------ |
| groupIds     | Y        | Group ID list.                                               |
| fid          | N        | Home ID.                                                     |
| isCommonUsed | N        | Whether the device is commonly used.<br />0-Not commonly used<br />1-Commonly used |
| callback     | Y        | Callback function of the request.                            |

**QuecGroupBatchResultBean Definition**

| Field | Type   | Description     |
| ----- | ------ | --------------- |
| code  | String | Code.           |
| msg   | String | Prompt message. |
| gdid  | String | Group ID.       |

**Example**

```kotlin
QuecGroupService.batchAddCommon(mutableListOf("gid"), QuecFamilyUtil.getFamilyId(), true) {
    if (it.isSuccess) {
        //Add groups to the common in batches successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Move Group to New Room

**API**

Move groups to a new room in batches. This API is effective only when the home mode is enabled.

```kotlin
fun batchMoving(
    gdidList: List<String>,
    newFrid: String,
    callback: QuecCallback<QuecGroupBatchResultBean>
)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| groupIds  | Y        | Group ID list.                    |
| newFrid   | N        | New room ID.                      |
| callback  | Y        | Callback function of the request. |

> See QuecGroupBatchResultBean Definition above.

**Example**

```kotlin
QuecGroupService.batchMoving(listOf("gid"), "newFrid") {
    if (it.isSuccess) {
        //Move groups to a new room in batches successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Delete Groups in Batches

**API**

Delete groups in batches.

```kotlin
fun deleteGroupDevice(
    gdidList: List<String>,
    callback: QuecCallback<QuecGroupBatchResultBean>
)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| groupIds  | Y        | Group ID list.                    |
| callback  | Y        | Callback function of the request. |

> See QuecGroupBatchResultBean Definition above.

**Example**

```kotlin
QuecGroupService.deleteGroupDevice(listOf("gid")) {
    if (it.isSuccess) {
        //Delete groups in batches successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Set Group Sharing Information

**API**

Set the sharing information of the group.

```kotlin
fun getShareCode(
    groupId: String,
    acceptingExpireAt: Long,
    isSharingAlwaysValid: Boolean,
    sharingExpireAt: Long,
    coverMark: Int,
    callback: QuecCallback<String>
)
```

**Parameter**

| Parameter            | Required | Description                                                  |
| -------------------- | -------- | ------------------------------------------------------------ |
| groupId              | Y        | Group ID.                                                    |
| acceptingExpireAt    | Y        | Expiration time of the shared QR code, in milliseconds. This share will expire if it is not used before the expiration time. |
| isSharingAlwaysValid | Y        | Whether the device sharing is permanently valid.             |
| sharingExpireAt      | Y        | Expiration time of the device usage, in milliseconds. The shared group can be used by the recipient before the expiration time. <br/>If this parameter is omitted, the share will be valid permanently. |
| coverMark            | Y        | Overwrite flag. Default value: 1.<br/>1 Directly overwrite the previous valid share (overwrite the existing sharing code)<br/>2 Add a new share directly, allowing multiple shares to coexist<br/>3 Overwrite the previous share only when the sharing time is extended. |
| callback             | Y        | Callback function of the request.                            |

**Example**

```kotlin
QuecGroupService.getShareCode(
    "gid",
    1745214106879,
    false,
    System.currentTimeMillis() + 90000,
    1
) {
    if (it.isSuccess) {
        val data = it.data //Set the sharing information of the group successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Get Group Shared Recipient List

**API**

Get the recipient list to whom the group is shared.

```kotlin
fun getSharedLists(
    groupId: String,
    callback: QuecCallback<List<QuecGroupShareInfoBean>>
)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| groupId   | Y        | Group ID.                         |
| callback  | Y        | Callback function of the request. |

**QuecGroupShareInfoBean Definition**

| Field     | Type               | Description          |
| --------- | ------------------ | -------------------- |
| shareInfo | QuecGroupShareInfo | Sharing information. |
| userInfo  | QuecGroupUserInfo  | User information.    |

**QuecGroupShareInfo Definition**

| Field             | Type   | Description                                                  |
| ----------------- | ------ | ------------------------------------------------------------ |
| acceptTime        | String | Time to accept the sharing.                                  |
| acceptingExpireAt | String | Expiration time of accepting the sharing.                    |
| coverMark         | int    | Overwrite flag.                                              |
| deviceName        | String | Device name.                                                 |
| dk                | String | DeviceKey.                                                   |
| ownerUid          | String | Owner ID.                                                    |
| pk                | String | ProductKey.                                                  |
| shareCode         | String | Share code.                                                  |
| shareId           | String | Sharing ID.                                                  |
| shareStatus       | int    | Sharing status.                                              |
| shareTime         | String | Time to create the sharing.                                  |
| shareUid          | String | User ID of the share recipient.                              |
| sharingExpireAt   | String | Expiration time of the sharing after the sharing is accepted. |
| updateTime        | String | Update time.                                                 |

**Example**

```kotlin
QuecGroupService.getSharedLists("gid") {
    if (it.isSuccess) {
        val data = it.data //Get the recipient list to whom the group is shared successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Initiator Cancel Sharing

**API**

The share initiator cancels the sharing.

```kotlin
fun ownerUnShare(
    shareCode: String,
    callback: QuecCallback<Unit>
)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| shareCode | Y        | Share code.                       |
| callback  | Y        | Callback function of the request. |

**Example**

```kotlin
QuecGroupService.ownerUnShare("shareCode") {
    if (it.isSuccess) {
        //The share initiator cancels the sharing successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Recipient Cancel Sharing

**API**

The share recipient cancels the sharing.

```kotlin
fun unShared(shareCode: String, callback: QuecCallback<Unit>)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| shareCode | Y        | Share code.                       |
| callback  | Y        | Callback function of the request. |

**Example**

```kotlin
QuecGroupService.unShared("shareCode") {
    if (it.isSuccess) {
        //The share recipient cancels the sharing successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Accept Sharing

**API**

The share recipient accepts the sharing.

```kotlin
fun acceptShare(
    shareCode: String,
    callback: QuecCallback<Unit>
)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| shareCode | Y        | Share code.                       |
| callback  | Y        | Callback function of the request. |

**Example**

```kotlin
QuecGroupService.acceptShare("shareCode") {
    if (it.isSuccess) {
        //The share recipient accepts the sharing successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Query Group-sharing Information

**API**

Query the group-sharing information.

```kotlin
fun getShareGroupInfo(shareCode: String, callback: QuecCallback<QuecGroupBasicInfoBean>)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| shareCode | Y        | Share code.                       |
| callback  | Y        | Callback function of the request. |

**QuecGroupBasicInfoBean Definition**

| Field           | Type   | Description                                        |
| --------------- | ------ | -------------------------------------------------- |
| gdid            | String | Group ID.                                          |
| productkey      | String | ProductKey.                                        |
| groupDeviceName | String | Group name.                                        |
| onlinestatus    | int    | Group online status.<br />0-Offline <br />1-Online |
| logoImage       | String | Group logo.                                        |
| fid             | String | Home ID.                                           |
| frid            | String | Room ID.                                           |

**Example**

```kotlin
QuecGroupService.getShareGroupInfo("shareCode") {
    if (it.isSuccess) {
        val data = it.data //Query the group-sharing information successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```
