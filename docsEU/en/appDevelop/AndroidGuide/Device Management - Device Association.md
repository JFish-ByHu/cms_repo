# Device Association

Device association can associate multiple devices. For example, the master device is a smart socket and the slave device is a smart switch. 

## Feature Description

> See QuecDeviceModel Definition in [Device Management](Device%20Management.md)

```kotlin
QuecDeviceAssociateService
```

## Device Association Management

### Associate Device

**API**

Associate a device.

```kotlin
fun deviceAssociation(
    list: List<QuecDeviceModel>,
    masterDevice: QuecDeviceModel,
    callback: QuecCallback<Unit>
)
```

**Parameter**

| Parameter    | Required | Description                                                  |
| ------------ | -------- | ------------------------------------------------------------ |
| list         | Y        | List of slave devices to be associated (element array of QuecDeviceModel). |
| masterDevice | Y        | Master device.                                               |
| callback     | Y        | Callback function of the request.                            |

**Example**

```kotlin
val subDeviceList = listOf(
    QuecDeviceModel("productKey", "deviceKey1"),
    QuecDeviceModel("productKey", "deviceKey2")
)
val masterDevice = QuecDeviceModel("productKey", "deviceKey3")

QuecDeviceAssociateService.deviceAssociation(subDeviceList, masterDevice) {
    if (it.isSuccess) {
        //Associate a device successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Query Device Association Information

**API**

Query device association information.

```kotlin
fun getDeviceAssociationInfo(
    masterDevice: QuecDeviceModel,
    code: String?,
    callback: QuecCallback<QuecDeviceAssociationModel>
)
```

**Parameter**

| Parameter    | Required | Description                                                  |
| ------------ | -------- | ------------------------------------------------------------ |
| masterDevice | Y        | Master device (QuecDeviceModel type).                        |
| code         | Y        | Property identifier to be queried. Separate multiple properties by commas. |
| callback     | Y        | Callback function of the request.                            |

> See QuecDeviceModel Definition above.

**QuecDeviceAssociationModel Definition**

| Field           | Type                                     | Description             |
| --------------- | ---------------------------------------- | ----------------------- |
| slaveDeviceList | List&lt;QuecDeviceAssociationSlaveModel> | Slave device data list. |
| masterDevice    | QuecDeviceAssociationMasterModel         | Master device data.     |

**QuecDeviceAssociationSlaveModel Definition**

| Field                     | Type                    | Description        |
| ------------------------- | ----------------------- | ------------------ |
| deviceAssociationMasterId | int                     | Master device ID.  |
| deviceAssociationSlaveId  | int                     | Slave device ID.   |
| slaveDeviceKey            | String                  | Slave DeviceKey.   |
| slaveDeviceName           | String                  | Slave device name. |
| slaveProductKey           | String                  | Slave ProductKey.  |
| tslDeviceDetail           | QuecProductTSLInfoModel | TSL model.         |

> See QuecProductTSLInfoModel Definition above.

**QuecDeviceAssociationMasterModel Definition**

| Field                     | Type   | Description                                                  |
| ------------------------- | ------ | ------------------------------------------------------------ |
| deviceAssociationMasterId | int    | Master device ID.                                            |
| masterProductKey          | String | Master ProductKey.                                           |
| masterDeviceKey           | String | Master DeviceKey.                                            |
| masterDeviceName          | String | Master device name.                                          |
| siddhiName                | String | Rule name. Must be globally unique, composed of uppercase/lowercase English letters and digits, and 32 characters in length. |

**Example**

```kotlin
val masterDevice = QuecDeviceModel("productKey", "deviceKey3")
QuecDeviceAssociateService.getDeviceAssociationInfo(masterDevice, "code") {
    if (it.isSuccess) {
        val data = it.data //Query device association information successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Disassociate Device

**API**

Disassociate a device.

```kotlin
fun deviceDisassociation(
    model: QuecDeviceModel,
    callback: QuecCallback<Unit>
)
```

**Parameter**

| Parameter | Required | Description                                        |
| --------- | -------- | -------------------------------------------------- |
| model     | Y        | Device to be disassociated (QuecDeviceModel type). |
| callback  | Y        | Callback function of the request.                  |

> See QuecDeviceModel Definition above.

**Example**

```kotlin
val device = QuecDeviceModel("productKey", "deviceKey3")
QuecDeviceAssociateService.deviceDisassociation(device) {
    if (it.isSuccess) {
        //Disassociate a device successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Configure Device Association

**API**

Configure device association.

```kotlin
fun deviceAssociationConfig(
    productKey: String,
    callback: QuecCallback<QuecDeviceAssociationConfig>
)
```

**Parameter**

| Parameter  | Required | Description                       |
| ---------- | -------- | --------------------------------- |
| productKey | Y        | ProductKey.                       |
| callback   | Y        | Callback function of the request. |

**QuecDeviceAssociationConfig Definition**

| Field            | Type            | Description                   |
| ---------------- | --------------- | ----------------------------- |
| productKey       | String          | Master ProductKey.            |
| masterItemCode   | String          | Master category code.         |
| slaveItemCode    | String          | Slave category code.          |
| slaveDeviceLimit | int             | The maximum number of slaves. |
| slaveProductKey  | List&lt;String> | Slave ProductKey array.       |

**Example**

```kotlin
QuecDeviceAssociateService.deviceAssociationConfig("pk") {
    if (it.isSuccess) {
        val data = it.data //Configure device association successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```
