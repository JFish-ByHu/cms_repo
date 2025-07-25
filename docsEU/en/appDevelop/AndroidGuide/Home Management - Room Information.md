# Room Information

## Feature Description

This section introduces how to manage rooms in a home, including creating a room, editing a room name, deleting a room, moving a device to a room, setting room orders, and querying device lists in a room.

## Room Management

### Create Room

**API**

Create a room in a home.

```kotlin
fun addFamilyRoom(fid: String, roomName: String, callback: QuecCallback<Unit>)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| fid       | Y        | Home ID.                          |
| roomName  | Y        | Room name.                        |
| callback  | Y        | Callback function of the request. |

**Example**

```kotlin
QuecSmartHomeService.addFamilyRoom("fid", "roomName") {
    if (it.isSuccess) {
        //Create a room in a home successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Edit Room Name

**API**

Edit a room name.

```kotlin
fun setFamilyRoom(frid: String, roomName: String, callback: QuecCallback<Unit>)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| frid      | Y        | Room ID.                          |
| roomName  | Y        | Room name.                        |
| callback  | Y        | Callback function of the request. |

**Example**

```kotlin
QuecSmartHomeService.setFamilyRoom("fid", "newRoomName") {
    if (it.isSuccess) {
        //Edit a room name successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Delete Room

**API**

Delete a room or multiple rooms in batches.

```kotlin
fun deleteFamilyRooms(fridList: List<String>, callback: QuecCallback<Unit>)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| fridList  | Y        | Room ID list.                     |
| callback  | Y        | Callback function of the request. |

**Example**

```kotlin
QuecSmartHomeService.deleteFamilyRooms(listOf("fid")) {
    if (it.isSuccess) {
        //Delete rooms successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Move Device to Room

**API**

Move a device or multiple devices in batches to a room.

```kotlin
fun addDeviceInFamilyRoom(
    deviceList: List<QuecAddDeviceEnterModel>, callback: QuecCallback<QuecFamilyAddDeviceModel>
)
```

**Parameter**

| Parameter  | Required | Description                       |
| ---------- | -------- | --------------------------------- |
| deviceList | Y        | Device list.                      |
| callback   | Y        | Callback function of the request. |

**QuecAddDeviceEnterModel Definition**

| Field   | Type   | Description       |
| ------- | ------ | ----------------- |
| pk      | String | ProductKey.       |
| dk      | String | DeviceKey.        |
| oldFrid | String | Original room ID. |
| nFrid   | String | New room ID.      |

**QuecFamilyAddDeviceModel Definition**

| Field       | Type                                  | Description                    |
| ----------- | ------------------------------------- | ------------------------------ |
| successList | List&lt;QuecFamilyAddDeviceListModel> | List of successful executions. |
| failureList | List&lt;QuecFamilyAddDeviceListModel> | List of failed executions.     |

**QuecFamilyAddDeviceListModel Definition**

| Field   | Type   | Description                                   |
|---------|--------|-----------------------------------------------|
| oldFrid | String | Original room ID.                             |
| nFrid   | String | New room ID.                                  |
| pk      | String | ProductKey.                                   |
| dk      | String | DeviceKey.                                    |
| code    | Int    | Error code (Only valid for *failureList*).    |
| String  | String | Error message (Only valid for *failureList*). |

**Example**

```kotlin
QuecSmartHomeService.addDeviceInFamilyRoom(
    listOf(
        QuecAddDeviceEnterModel(
            "pk",
            "dk",
            null,
            "newFrid"
        )
    )
) {
    if (it.isSuccess) {
        //Move a device to a room successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Set Room Order

**API**

Set the room order and display priority.

```kotlin
fun setFamilyRoomSort(
    roomSortList: List<QuecSortDeviceEnterModel>, callback: QuecCallback<Unit>
)
```

**Parameter**

| Parameter    | Required | Description                       |
| ------------ | -------- | --------------------------------- |
| roomSortList | Y        | Room array to be sorted.          |
| callback     | Y        | Callback function of the request. |

**QuecSortDeviceEnterModel Definition**

| Field    | Type   | Description                                                  |
| -------- | ------ | ------------------------------------------------------------ |
| frid     | String | Room ID.                                                     |
| roomSort | String | Room order, starting from 0, with the lower numbers at the front of the list, non-consecutive values allowed but duplicate values prohibited. |

**Example**

```kotlin
QuecSmartHomeService.setFamilyRoomSort(
    listOf(
        QuecSortDeviceEnterModel("frid1", 0),
        QuecSortDeviceEnterModel("frid2", 1),
    )
) {
    if (it.isSuccess) {
        //Set the room order and display priority successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Query Device List in Room

**API**

Query device list in a room.

```kotlin
fun getFamilyRoomDeviceList(
    frid: String,
    pageNumber: Int,
    pageSize: Int,
    isGroupDeviceShow: Boolean,
    callback: QuecCallback<QuecPageResponse<QuecDeviceModel>>
)
```

**Parameter**

| Parameter         | Required | Description                                            |
| ----------------- | -------- | ------------------------------------------------------ |
| frid              | Y        | Room ID.                                               |
| pageNumber        | N        | Page number. Default value: 1.                         |
| pageSize          | N        | Page size. Default value: 10.                          |
| isGroupDeviceShow | N        | Whether to display group devices. Default: Not display |
| callback          | Y        | Callback function of the request.                      |

> The QuecDeviceModel Definition is the same as the SDK description in the *Device Management* section.

**Example**

```kotlin
QuecSmartHomeService.getFamilyRoomDeviceList("frid", 1, 10, true) {
    if (it.isSuccess) {
        val data = it.data //Query device list in a room successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Query Room List in Home

**API**

Query the room list in a home.

```kotlin
fun getFamilyRoomList(
    fid: String,
    pageNumber: Int,
    pageSize: Int,
    callback: QuecCallback<QuecPageResponse<QuecFamilyRoomItemModel>>
)
```

**Parameter**

| Parameter  | Required | Description                       |
| ---------- | -------- | --------------------------------- |
| fid        | Y        | Home ID.                          |
| pageNumber | N        | Page number. Default value: 1.    |
| pageSize   | N        | Page size. Default value: 10.     |
| callback   | Y        | Callback function of the request. |

> See QuecFamilyRoomItemModel Definition above.

**Example**

```kotlin
QuecSmartHomeService.getFamilyRoomList("fid", 1, 10) {
    if (it.isSuccess) {
        val data = it.data //Query the room list in a home successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Edit Device Information

**API**

Edit device information, such as setting the room information and whether the device is commonly used.

```kotlin
fun setDeviceInfo(
    modelArray: List<QuecSetDeviceInfoModel>, callback: QuecCallback<QuecFamilySetDeviceModel>
)
```

**Parameter**

| Parameter  | Required | Description                                                 |
| ---------- | -------- | ----------------------------------------------------------- |
| modelArray | N        | The list of devices to be configured with room information. |
| callback   | Y        | Callback function of the request.                           |

**QuecSetDeviceInfoModel Definition**

| Field        | Type   | Description                                                  |
| ------------ | ------ | ------------------------------------------------------------ |
| fid          | String | Home ID.                                                     |
| dk           | String | DeviceKey.                                                   |
| pk           | String | ProductKey.                                                  |
| deviceName   | String | Device name.                                                 |
| isCommonUsed | BOOL   | Whether the device is commonly used.<br />true-Commonly used<br />false-Not commonly used |
| type         | int    | Device type.<br />1-Home device<br />2-Shared device<br />3-Multi-bound device |
| oldFrid      | String | Original room ID from which the device is moved out.         |
| selectFrid   | String | New room ID into which the device is moved.                  |
| shareCode    | String | Share code.                                                  |

**Example**

```kotlin
QuecSmartHomeService.setDeviceInfo(
    listOf(
        QuecSetDeviceInfoModel(
            fid = "fid",
            dk = "dk",
            pk = "pk",
            deviceName = "deviceName",
            isCommonUsed = true,
            type = 3
        )
    )
) {
    if (it.isSuccess) {
        //Edit device information successfully.
    } else {
        val code = it.code //Failed. Error code.
    }
}
```
