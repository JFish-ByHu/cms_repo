# Device Upgrade SDK: QuecOtaUpgradeSdk

## Feature Description

This SDK enable device upgrade via cloud or Bluetooth.

```kotlin
QuecOtaManager
```

## Device Upgrade

The procedures for device upgrade are as follows:

1. Query the device upgrade plan.
2. Set a event listener. 
3. Start device upgrade.
4. Obtain the upgrade process and result through event callbacks.
5. Display the upgrade result and remove the event listener. 

The SDK will determine whether to use cloud OTA or Bluetooth OTA according to device online status:

1. Cloud OTA when the device is cloud online.
2. Bluetooth OTA when the device is cloud offline. 

### Query Upgrade Plan of  Single Device

**API**

Query an upgrade plan of a single device. If the device has an upgrade plan, the upgrade plan will be returned; otherwise, null will be returned.

```kotlin
fun checkVersion(pk: String, dk: String, callback: QuecCallback<QuecOtaInfo?>)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| pk        | Y        | ProductKey.                       |
| dk        | Y        | DeviceKey.                        |
| callback  | Y        | Callback function of the request. |

**Example**

```kotlin
QuecOtaManager.checkVersion("pk", "dk") {
    if (it.isSuccess) {
        //Query an upgrade plan of a single device successfully.  A non-empty data value indicates that there is an upgrade plan.
        val data = it.data
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg   //Failed. Error message.
    }
}
```

**QuecOtaInfo Definition**

| Field              | Type            | Description                    |
| ------------------ | --------------- | ------------------------------ |
| productKey         | String          | ProductKey.                    |
| deviceKey          | String          | DeviceKey.                     |
| upgradeVersionInfo | String          | Upgrade version information.   |
| planId             | String          | Upgrade plan ID.               |
| planName           | String          | Upgrade plan name.             |
| comVerList         | List&lt;ComVer> | Component version information. |
| productIcon        | String          | Product icon.                  |
| deviceName         | String          | Device name.                   |

**QuecOtaInfo.ComVer Definition**

| Field       | Type          | Description                                |
| ----------- | ------------- | ------------------------------------------ |
| sort        | Int           | Component sort.                            |
| comNo       | String        | Component number.                          |
| comType     | int           | Component type. <br />0-Module <br />1-MCU |
| cver        | String        | Current version number.                    |
| tver        | String        | Target version number.                     |
| versionInfo | String        | Component version information.             |
| fileList    | List&lt;File> | Upgrade file list.                         |

**QuecOtaInfo.File Definition**

| Field      | Type   | Description                       |
| ---------- | ------ | --------------------------------- |
| updIndex   | Int    | Upgrade file serial number.       |
| fileName   | String | Upgrade file name.                |
| filePath   | String | Upgrade file path.                |
| fileSize   | Long   | Upgrade file size.                |
| fileSha256 | String | SHA-256 value of the update file. |

### Batch Query Device Upgrade Plan 

**API**

```kotlin
 fun checkListVersion(list: List<Info>, callback: QuecCallback<List<QuecOtaInfo>>)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| list      | Y        | Device list.                      |
| callback  | Y        | Callback function of the request. |

**Example**

```kotlin
QuecOtaManager.checkListVersion(
    listOf(
        IQuecOtaManager.Info("pk1", "dk1"),
        IQuecOtaManager.Info("pk2", "dk2"),
    )
) {
    if (it.isSuccess) {
        //Batch a query device upgrade successfully. When the size in the data is greater than 0, it indicates that there is an upgrade plan.
        val data = it.data
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg   //Failed. Error message.
    }
}
```

**IQuecOtaManager.Info Definition**

| Field | Type   | Description |
| ----- | ------ | ----------- |
| pk    | String | ProductKey. |
| dk    | String | DeviceKey.  |

### Query Upgrade Plan for All Device Under Account

**API**

```kotlin
fun checkAllVersion(
    page: Int,
    pageSize: Int,
    callback: QuecCallback<QuecPageResponse<QuecOtaInfo>>
)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| page      | Y        | Page number.                      |
| pageSize  | Y        | Page size.                        |
| callback  | Y        | Callback function of the request. |

**Example**

```kotlin
QuecOtaManager.checkAllVersion(1, 10) {
    if (it.isSuccess) {
        //Query a upgrade plan for all devices under a account successfully.
        val data = it.data
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg   //Failed. Error message.
    }
}
```

### Query Device Version Information

**API**

```kotlin
fun queryCurrentVersion(
    pk: String,
    dk: String,
    callback: QuecCallback<List<QuecOtaInfo.ComVer>>
)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| pk        | Y        | ProductKey.                       |
| dk        | Y        | DeviceKey.                        |
| callback  | Y        | Callback function of the request. |

**Example**

```kotlin
QuecOtaManager.queryCurrentVersion("pk", "dk") {
    if (it.isSuccess) {
        //Query device version information successfully. A non-empty data value indicates that there is version information.
        val data = it.data
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg   //Failed. Error message.
    }
}
```

### Start Device Upgrade

**API**

A specified device starts OTA upgrade. Upgrade method will be automatically determined when the method is called. 

```kotlin
fun startOta(info: QuecOtaInfo)
```

**Parameter**

| Parameter | Required | Description          |
| --------- | -------- | -------------------- |
| info      | Y        | Upgrade information. |

**Example**

```kotlin
//Information obtained from upgrade plan query.
val otaInfo = getOtaInfo()
QuecOtaManager.startOta(otaInfo)
```

### Stop Device Upgrade

**API**

> Note
>
> Device upgrade can only be stopped when upgrading through Bluetooth. If upgrading through cloud, the upgrading will not be stopped and will continue until finished.

Specify a device to stop an OTA upgrade.

```kotlin
fun stopOta(info: QuecOtaInfo)
```

**Parameter**

| Parameter | Required | Description          |
| --------- | -------- | -------------------- |
| info      | Y        | Upgrade information. |

**Example**

```kotlin
//Information obtained from upgrade plan query.
val otaInfo = getOtaInfo()
QuecOtaManager.stopOta(otaInfo)
```

### Add Update State Listener

**API**

Add an upgrade state listener. Through the callback of this listener, upgrade status and progress can be obtained. 

```kotlin
interface QuecOnOtaStateChangeListener {
    fun onCall(state: QuecOTAStateModel)
}

fun addStateListener(listener: QuecOnOtaStateChangeListener)
```

**Parameter**

| Parameter | Required | Description |
| --------- | -------- | ----------- |
| listener  | Y        | Listener.   |

**Example**

```kotlin
val listener = object : QuecOnOtaStateChangeListener {
    override fun onCall(state: QuecOTAStateModel) {
        //Device state changes.
    }
}
QuecOtaManager.addStateListener(listener)
```

**QuecOTAStateModel Definition**

| Field       | Type   | Description                                                  |
| ----------- | ------ | ------------------------------------------------------------ |
| planId      | long   | Upgrade Plan ID.                                             |
| state       | enum   | Upgrade state: QuecOTAState.                                 |
| pk          | String | ProductKey.                                                  |
| dk          | String | DeviceKey.                                                   |
| progress    | double | Upgrade progress(0.0 – 100.0).                               |
| failCode    | enum   | Failure reason: IQuecOtaManager.ErrorCode. This field contains a value only when the upgrade fails. |
| channelMode | enum   | Upgrade channel mode: QuecOTAChannelMode.                    |

**QuecOTAStateModel Enumeration Definition**

| Field                 | Description            |
| --------------------- | ---------------------- |
| QuecOTAUpgradeEmpty   | No upgrade plan.       |
| QuecOTAUpgradeWait    | Waiting for upgrade.   |
| QuecOTAUpgrading      | Upgrading.             |
| QuecOTAUpgradeSuccess | Upgraded successfully. |
| QuecOTAUpgradeFailure | Upgrade failed.        |
| QuecOTAUpgradeExpired | Upgrade plan expired.  |

**IQuecOtaManager.ErrorCode Enumeration Definition**

| Field              | Description                          |
| ------------------ | ------------------------------------ |
| COMMON             | Common error.                        |
| FILE_DOWNLOAD_FAIL | OTA file download failed.            |
| NOT_CONNECT        | Device connection failed.            |
| NO_FILE_PATH       | Upgrade plan is invalid.             |
| FILE_CHECK_FAIL    | OTA file verification failed.        |
| DEVICE_REFUSE      | Device refuses the upgrade.          |
| DEVICE_CANCELLED   | Device cancels the upgrade.          |
| DEVICE_FAIL        | Device responds the upgrade failure. |
| TIMEOUT            | Upgrade timeout.                     |

**QuecOTAChannelMode Enumeration Definition**

| Field                 | Description        |
| --------------------- | ------------------ |
| QuecOTAChannelUnknown | Unknown.           |
| QuecOTAChannelCloud   | Cloud upgrade.     |
| QuecOTAChannelBle     | Bluetooth upgrade. |

### Remove Upgrade State Listener

**API**

Remove an upgrade state listener. Remove the listener after completing the OTA upgrade to avoid memory leak. 

```kotlin
fun removeStateListener(listener: QuecOnOtaStateChangeListener)
```

**Parameter**

| Parameter | Required | Description |
| --------- | -------- | ----------- |
| listener  | Y        | Listener.   |

**Example**

```kotlin
val listener = object : QuecOnOtaStateChangeListener {
    override fun onCall(state: QuecOTAStateModel) {
        //Device state changes.
    }
}
QuecOtaManager.removeStateListener(listener)
```

### Remove All Caches in Class

**API**

Remove all caches in a class and call them when OTA resources are no longer in use.

```kotlin
fun release()
```

**Example**

```kotlin
QuecOtaManager.release()
```

### Query Specified Device OTA Upgrade Progress and State

**API**

Query a specified device OTA upgrade progress and state. An empty value indicates that the device has no state. 

```kotlin
fun getOtaState(pk: String, dk: String): QuecOTAStateModel?
```

**Parameter**

| Parameter | Required | Description |
| --------- | -------- | ----------- |
| pk        | Y        | ProductKey. |
| dk        | Y        | DeviceKey.  |

The return value is upgrade state and progress.

**Example**

```kotlin
val state = QuecOtaManager.getOtaState("pk", "dk")
```

### Query Device Upgrade Method

**API**

Call this function before starting the device upgrade to obtain the upgrade method that will be selected when the current upgrade begins.

```kotlin
fun getDeviceUpgradeChannel(pk: String, dk: String): QuecOTAStateModel.QuecOTAChannelMode
```

**Parameter**

| Parameter | Required | Description |
| --------- | -------- | ----------- |
| pk        | Y        | ProductKey. |
| dk        | Y        | DeviceKey.  |

The return value is an enumeration of the upgrade method. 

**Example**

```kotlin
val mode = QuecOtaManager.getDeviceUpgradeChannel("pk", "dk")
```
