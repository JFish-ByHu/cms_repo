# Device Sharing

## Feature Description

You can share your devices to other users through the device sharing feature so that the sharing recipients can control your devices.

> See QuecDeviceModel Definition in [Device Management](Device%20Management.md).

```kotlin
QuecDeviceShareService
```

## Device Sharing

### Query Device Information by Share Code

**API**

Query the device information by a share code.

```kotlin
fun getDeviceInfoByShareCode(
    shareCode: String,
    callback: QuecCallback<QuecDeviceModel>
)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| shareCode | Y        | Share code.                       |
| callback  | Y        | Callback function of the request. |

**Example**

```kotlin
QuecDeviceShareService.getDeviceInfoByShareCode("code") {
    if (it.isSuccess) {
        val data = it.data //Query the device information by a share code successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Change Shared Device Name

**API**

Change the name of the shared device.

```kotlin
fun updateDeviceNameByShareUser(
    deviceName: String,
    shareCode: String,
    callback: QuecCallback<Unit>
)
```

**Parameter**

| Parameter  | Required | Description                       |
| ---------- | -------- | --------------------------------- |
| deviceName | Y        | Device name.                      |
| shareCode  | Y        | Share code.                       |
| callback   | Y        | Callback function of the request. |

**Example**

```kotlin
QuecDeviceShareService.updateDeviceNameByShareUser("name", "code") {
    if (it.isSuccess) {
        //Change the name of the shared device successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Get Device Shared Recipient List

**API**

Get the recipient list to whom the group is shared.

```kotlin
fun getDeviceShareUserList(
    deviceKey: String,
    productKey: String,
    callback: QuecCallback<List<QuecShareUserModel>>
)
```

**Parameter**

| Parameter  | Required | Description                       |
| ---------- | -------- | --------------------------------- |
| deviceKey  | Y        | DeviceKey.                        |
| productKey | Y        | ProductKey.                       |
| callback   | Y        | Callback function of the request. |

**QuecShareUserModel Definition**

| Field     | Type                        | Description          |
| --------- | --------------------------- | -------------------- |
| shareInfo | QuecShareUserShareInfoModel | Sharing information. |
| userInfo  | QuecShareUserInfoModel      | User information.    |

**QuecShareUserShareInfoModel Definition**

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

**QuecShareUserInfoModel Definition**

| Field         | Type   | Description        |
| ------------- | ------ | ------------------ |
| address       | String | Address.           |
| email         | String | Email address.     |
| headimg       | String | Profile.           |
| lastLoginTime | String | Last login time.   |
| nikeName      | String | Nickname.          |
| phone         | String | Phone number.      |
| registerTime  | String | Registration time. |
| sex           | String | Gender.            |
| uid           | String | User ID.           |
| userDomain    | String | User domain.       |
| userType      | int    | User source.       |
| wchartId      | String | WeChat ID.         |
| wchartName    | String | WeChat name.       |

**Example**

```kotlin
QuecDeviceShareService.getDeviceShareUserList("deviceKey", "productKey") {
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
fun unShareDeviceByOwner(
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
QuecDeviceShareService.unShareDeviceByOwner("code") {
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
fun unShareDeviceByShareUser(
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
QuecDeviceShareService.unShareDeviceByShareUser("code") {
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
fun acceptShareByShareUser(
    shareCode: String,
    deviceName: String?,
    callback: QuecCallback<Unit>
)
```

**Parameter**

| Parameter  | Required | Description                       |
| ---------- | -------- | --------------------------------- |
| shareCode  | Y        | Share code.                       |
| deviceName | Y        | Device name.                      |
| callback   | Y        | Callback function of the request. |

**Example**

```kotlin
QuecDeviceShareService.acceptShareByShareUser("code", "name") {
    if (it.isSuccess) {
        //The share recipient accepts the sharing successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Set Device Sharing Information

**API**

Set the sharing information of the device.

```kotlin
fun setShareInfoByOwner(
    deviceKey: String,
    productKey: String,
    acceptingExpireTime: Long,
    coverMark: Int,
    isSharingAlwaysValid: Boolean,
    sharingExpireTime: Long,
    callback: QuecCallback<String>
)
```

**Parameter**

| Parameter            | Required | Description                                                  |
| -------------------- | -------- | ------------------------------------------------------------ |
| deviceKey            | Y        | DeviceKey.                                                   |
| productKey           | Y        | ProductKey.                                                  |
| acceptingExpireTime  | Y        | Expiration time of the shared QR code, in milliseconds. This share will expire if it is not used before the expiration time. |
| coverMark            | Y        | Overwrite flag. Default value: 1.<br/>1 Directly overwrite the previous valid share (overwrite the existing sharing code)<br/>2 Add a new share directly, allowing multiple shares to coexist<br/>3 Overwrite the previous share only when the sharing time is extended. |
| isSharingAlwaysValid | N        | Whether the device sharing is permanently valid.             |
| sharingExpireTime    | N        | Expiration time of the device usage, in milliseconds. The shared group can be used by the recipient before the expiration time. This parameter is invalid when *isSharingAlwaysValid* = YES. |
| callback             | Y        | Callback function of the request.                            |

**Example**

```kotlin
QuecDeviceShareService.setShareInfoByOwner(
    "deviceKey",
    "productKey",
    0,
    1,
    true,
    System.currentTimeMillis() + 60000
) {
    if (it.isSuccess) {
        val data = it.data //Set the sharing information of the group successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```
