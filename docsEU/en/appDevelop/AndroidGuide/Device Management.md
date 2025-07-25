# Device Management

## Feature Description

Device management provides operations related to device lists, device information, and device configuration.

In the device management class, you will frequently use the QuecDeviceModel class. The properties are defined as follows:

**QuecDeviceModel Definition**

| Field                  | Type                 | Description                                                  |
| ---------------------- | -------------------- | ------------------------------------------------------------ |
| accessType             | String               | 0-Directly connected device<br />1-Gateway <br />2-Sub-device |
| activeTime             | String               | Activation time.                                             |
| activeTimeTs           | long                 | Activation timestamp.                                        |
| authKey                | String               | AuthorizationKey.                                            |
| deviceBindTime         | String               | Device binding time.                                         |
| deviceBindTimeTs       | long                 | Device binding timestamp.                                    |
| deviceCreateTime       | String               | Device creation time.                                        |
| deviceKey              | String               | DeviceKey.                                                   |
| deviceName             | String               | Device name.                                                 |
| deviceStatus           | String               | Device online status.<br />Offline<br />Online               |
| onlineStatus           | int                  | Device online status.<br />0-Offline <br />1-Online          |
| deviceType             | int                  | Device type.<br />1 Owned device<br />2 Shared device        |
| invaildTime            | String               | Expiration time.                                             |
| invaildTimeTs          | long                 | Expiration timestamp.                                        |
| lastConnTime           | String               | Last connection time.                                        |
| lastConnTimeTs         | String               | Last connection timestamp.                                   |
| locateType             | String               | Supported positioning types.                                 |
| ownerUid               | String               | User ID of the sharer.                                       |
| phone                  | String               | Bound phone number.                                          |
| productKey             | String               | ProductKey.                                                  |
| productName            | String               | Product name.                                                |
| protocol               | String               | Connection protocol.                                         |
| uid                    | String               | Bound user ID.                                               |
| userName               | String               | Bound user nickname.                                         |
| verified               | String               | Whether device binding is authenticated. <br />0 - Unauthenticated<br />1 - Authenticated |
| signalStrength         | String               | Signal strength.                                             |
| status                 | int                  | Binding status.<br />1 - Normal<br />2 - Invalid             |
| lastOfflineTime        | String               | Offline time.                                                |
| lastOfflineTimeTs      | long                 | Offline timestamp.                                           |
| btPwd                  | String               | Bluetooth password.                                          |
| bindType               | String               | Binding type.<br />1 - SN binding<br />2 - Wi-Fi binding<br />3 - PKDK binding<br />4 - Bluetooth binding |
| authCode               | String               | Authorization code.                                          |
| logoImage              | String               | Product logo.                                                |
| sn                     | String               | Serial number.                                               |
| productIcon            | String               | Product image.                                               |
| upgradeStatus          | int                  | OTA status.<br />0 - Not upgraded<br />1 - Upgrading<br />2 - Successful upgrade<br />3 - Upgrade failed |
| userConfirmStatus      | int                  | User confirmation status for an OTA upgrade.                 |
| planId                 | long                 | Plan ID.                                                     |
| capabilitiesBitmask    | int                  | Device channel capability mask.                              |
| bindMode               | int                  | Binding mode.<br />1 - Multi-binding<br />2 - Single binding<br />3 - Alternate binding |
| deviceId               | String               | Unique device identifier, determined by ProductKey and DeviceKey. |
| onlineChannelState     | int                  | Channel online/offline status, including near-field and Websocket connection. |
| connectingChannelState | int                  | Channel connecting status.                                   |
| isMatter               | int                  | Whether it is a Matter device.<br />0 - No<br />1 - Yes      |
| networkType            | String               | Network type.<br />1 - Wi-Fi<br />2 - Cellular<br />3 - NB-IoT<br />5 - Bluetooth |
| matterInfo             | QuecDeviceMatterMeta | Matter metadata.                                             |
| firstItemCode          | String               | Primary category code.                                       |
| firstItemName          | String               | Primary category name.                                       |
| secondItemCode         | String               | Secondary category code.                                     |
| secondItemName         | String               | Secondary category name.                                     |
| lowPowerProduct        | boolean              | Whether it is a low-power product.                           |
| lowPowerStatus         | boolean              | Whether the low-power mode is enabled.                       |
| lowPowerCache          | int                  | Cache duration in low-power mode. Unit: second.              |
| isCommonUsed           | boolean              | Whether the device is commonly used.                         |
| fid                    | String               | Home ID.                                                     |
| frid                   | String               | Room ID.                                                     |
| roomName               | String               | Room name.                                                   |
| shareCode              | String               | Share code.                                                  |
| isShared               | boolean              | Whether it is a shared device.                               |
| gdid                   | String               | Group ID.                                                    |
| isGroupDevice          | boolean              | Whether it is a group device.                                |
| groupDeviceDeviceNum   | int                  | Number of devices in the group.                              |
| dps                    | NSDictionary         | DPS data.                                                    |
| bindingCode            | String               | Binding code.                                                |
| btLastUseTime          | long                 | Last Bluetooth usage time (millisecond timestamp).           |
| lowPowerAlive          | int                  | Heartbeat interval in low-power mode. Unit: minute.          |
| aiCapabilityStatus     | boolean              | Whether it supports AI capabilities.                         |

## Device Management

### Get Device List

**API**

Get a list of devices. You need to call the binding interface to associate the device and user relationship first.

```kotlin
fun getDeviceList(params: QuecDeviceListParamsModel, callback: QuecCallback<QuecPageResponse<QuecDeviceModel>>)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| params    | Y        | QuecDeviceListParamsModel class.  |
| callback  | Y        | Callback function of the request. |

**QuecDeviceListParamsModel Definition**

| Field          | Type    | Description                                           |
| -------------- | ------- | ----------------------------------------------------- |
| pageNumber     | int     | Page number. (Required)                               |
| pageSize       | int     | Page size. (Required)                                 |
| isAssociation  | boolean | Device association management parameter. (Optional)   |
| secondItemCode | String  | Secondary category parameter. (Optional)              |
| pkList         | String  | ProductKey list, separated by commas. (Optional)      |
| deviceName     | String  | Device name \- used for searching devices. (Optional) |

> See QuecDeviceModel Definition above.

**Example**

```kotlin
QuecDeviceService.getDeviceList(QuecDeviceListParamsModel(1, 10, true, null, null, null)) {
    if (it.isSuccess) {
        val data = it.data //Get a list of devices successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Edit Device Name

**API**

Edit a device name.

```kotlin
fun updateDeviceName(
    deviceName: String,
    productKey: String,
    deviceKey: String,
    callback: QuecCallback<Unit>
)
```

**Parameter**

| Parameter  | Required | Description                       |
| ---------- | -------- | --------------------------------- |
| deviceName | Y        | Device name.                      |
| productKey | Y        | ProductKey.                       |
| deviceKey  | Y        | DeviceKey.                        |
| callback   | Y        | Callback function of the request. |

**Example**

```kotlin
QuecDeviceService.updateDeviceName("newName", "pk", "dk") {
    if (it.isSuccess) {
        //Edit a device name successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Get Device Details

**API**

Get device details.

```kotlin
fun getDeviceInfoByDeviceKey(
    deviceKey: String,
    productKey: String,
    callback: QuecCallback<QuecDeviceModel>
)
```

**Parameter**

| Parameter  | Required | Description                       |
| ---------- | -------- | --------------------------------- |
| productKey | Y        | ProductKey.                       |
| deviceKey  | Y        | DeviceKey.                        |
| callback   | Y        | Callback function of the request. |

> See QuecDeviceModel Definition above.

**Example**

```kotlin
QuecDeviceService.getDeviceInfoByDeviceKey("dk", "pk") {
    if (it.isSuccess) {
        val data = it.data //Get device details successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Get Device TSL and Business Property

**API**

Get the device TSL model and business properties.

```kotlin
fun getProductTslAndDeviceBusinessAttributes(
    productKey: String,
    deviceKey: String,
    gatewayPk: String?,
    gatewayDk: String?,
    codeList: String?,
    type: String?,
    callback: IDeviceTSLModelCallback
)
```

**IDeviceTSLModelCallback Definition**

```kotlin
public interface IDeviceTSLModelCallback {
    void onResultCallback(List<QuecProductTSLPropertyModel<?>> list);
    void onFail(Throwable throwable);
}
```

**Parameter**

| Parameter  | Required | Description                                                  |
| ---------- | -------- | ------------------------------------------------------------ |
| productKey | Y        | ProductKey.                                                  |
| deviceKey  | Y        | DeviceKey.                                                   |
| gatewayPk  | N        | ProductKey of the gateway.                                   |
| gatewayDk  | N        | DeviceKey of the gateway.                                    |
| codeList   | N        | Property ID list, used with *type*. Separate multiple properties by commas. |
| type       | N        | Query type, supporting single selection and multiple selection. Separate multiple types by commas. <br />1 Query basic device property<br />2 Query TSL property<br />3 Query location information |
| callback   | Y        | Callback function of the request.                            |

**QuecProductTSLPropertyModel Definition**

| Field          | Type                             | Description                    |
| -------------- | -------------------------------- | ------------------------------ |
| specs          | List&lt;QuecProductTSLSpecModel> | TSL data.                      |
| formatSpecs    | List&lt;QuecProductTSLSpecModel> | TSL data, the same as *specs*. |
| dataType       | String                           | Data type.                     |
| attributeValue | String                           | Property value.                |
| code           | String                           | Code.                          |
| name           | String                           | Name.                          |
| subType        | String                           | Read/Write type.               |
| itemId         | int                              | ID.                            |
| sort           | String                           | Order.                         |
| type           | String                           | Type.                          |
| desc           | String                           | Description.                   |

**QuecProductTSLSpecModel Definition**

| Field          | Type                             | Description                           |
| -------------- | -------------------------------- | ------------------------------------- |
| specs          | List&lt;QuecProductTSLSpecModel> | Nested TSL data.                      |
| formatSpecs    | List&lt;QuecProductTSLSpecModel> | Nested TSL data, the same as *specs*. |
| dataType       | String                           | Data type.                            |
| code           | String                           | Code.                                 |
| name           | String                           | Name.                                 |
| value          | String                           | Value.                                |
| itemId         | int                              | ID.                                   |
| unit           | String                           | Unit.                                 |
| min            | String                           | Minimum.                              |
| max            | String                           | Maximum.                              |
| step           | String                           | Step.                                 |
| length         | String                           | Text length.                          |
| size           | String                           | Array size.                           |
| attributeValue | id                               | Property value.                       |

**Example**

```kotlin
QuecDeviceService.getProductTslAndDeviceBusinessAttributes(
    "pk", "dk", null, null, null, null, object : IDeviceTSLModelCallback {
        override fun onResultCallback(list: MutableList<QuecProductTSLPropertyModel<*>>?) {
            //Get the device TSL model and business properties successfully.
        }
        override fun onFail(throwable: Throwable?) {
            //Failed.
        }
    })
```

### Get Device TSL Model

**API**

Get the device TSL model.

```kotlin
fun getProductTSL(
    productKey: String, callback: IDeviceTSLCallBack
)
```

**IDeviceTSLCallBack Definition**

```kotlin
public interface IDeviceTSLCallBack {
    void onSuccess(List<ModelBasic> modelBasicList, List<TSLEvent> tslEventList, List<TSLService> tslServiceList);
 
    void onFail(Throwable throwable);
}
```

**Parameter**

| Parameter  | Required | Description                       |
| ---------- | -------- | --------------------------------- |
| productKey | Y        | ProductKey.                       |
| callback   | Y        | Callback function of the request. |

**QuecProductTSLModel Definition**

| Field      | Type                                 | Description                                  |
| ---------- | ------------------------------------ | -------------------------------------------- |
| profile    | QuecProductTSLProfileModel           | Profile information                          |
| properties | List&lt;QuecProductTSLPropertyModel> | Property. Item: QuecProductTSLPropertyModel. |
| services   | List&lt;QuecProductTSLServiceModel>  | Service. Item: QuecProductTSLServiceModel.   |
| events     | List&lt;QuecProductTSLEventModel>    | Event. Item: QuecProductTSLEventModel.       |

**QuecProductTSLProfileModel Definition**

| Field      | Type   | Description        |
| ---------- | ------ | ------------------ |
| productKey | String | ProductKey.        |
| version    | String | Version.           |
| tslVersion | String | TSL model version. |

> See QuecProductTSLPropertyModel Definition above.

**QuecProductTSLServiceModel Definition**

| Field      | Type         | Description                                                  |
| ---------- | ------------ | ------------------------------------------------------------ |
| inputData  | NSDictionary | Service input parameter, used to describe service input data. |
| outputData | NSDictionary | Service output parameter, used to describe service output data. |

**QuecProductTSLEventModel Definition**

| Field      | Type         | Description                                                  |
| ---------- | ------------ | ------------------------------------------------------------ |
| outputData | NSDictionary | Event output parameter, used to describe the specific output item. |

**Example**

```kotlin
QuecDeviceService.getProductTSL("pk", object : IDeviceTSLCallBack {
    override fun onSuccess(
        modelBasicList: MutableList<ModelBasic<Any>>?,
        tslEventList: MutableList<TSLEvent>?,
        tslServiceList: MutableList<TSLService>?
    ) {
        //Get the device TSL model successfully.
    }
    override fun onFail(throwable: Throwable?) {
        //Failed.
    }
})
```

### Get Device Business Property

**API**

Get device business properties.

```kotlin
fun getDeviceBusinessAttributes(
    productKey: String,
    deviceKey: String,
    gatewayPk: String?,
    gatewayDk: String?,
    codeList: String?,
    type: String?,
    callback: QuecCallback<QuecProductTSLInfoModel>
)
```

**Parameter**

| Parameter  | Required | Description                                                  |
| ---------- | -------- | ------------------------------------------------------------ |
| productKey | Y        | ProductKey.                                                  |
| deviceKey  | Y        | DeviceKey.                                                   |
| gatewayPk  | N        | ProductKey of the gateway.                                   |
| gatewayDk  | N        | DeviceKey of the gateway.                                    |
| codeList   | N        | Property ID list, used with *type*. Separate multiple properties by commas. |
| type       | N        | Query type, supporting single selection and multiple selection. Separate multiple types by commas. <br />1 Query basic device property<br />2 Query TSL property<br />3 Query location information |
| callback   | Y        | Callback function of the request.                            |

**QuecProductTSLInfoModel Definition**

| Field            | Type                                     | Description                           |
| ---------------- | ---------------------------------------- | ------------------------------------- |
| customizeTslInfo | List&lt;QuecProductTSLCustomInfoModel>   | Custom TSL model data reporting list. |
| deviceLocateInfo | QuecProductTSLLocateInfoModel            | Location information.                 |
| deviceData       | QuecProductTSLDataModel                  | Device resource data.                 |
| tslResourcesInfo | List&lt;QuecProductTSLResourceInfoModel> | Resource TSL model data.              |

**QuecProductTSLCustomInfoModel Definition**

| Field         | Type   | Description          |
| ------------- | ------ | -------------------- |
| abId          | int    | Feature ID.          |
| dataType      | String | Data type.           |
| name          | String | Feature name.        |
| resourceCode  | String | Feature code.        |
| resourceValue | String | Feature value.       |
| subType       | String | Data operation type. |
| type          | String | Feature type.        |

**QuecProductTSLLocateInfoModel Definition**

| Field        | Type   | Description                                                |
| ------------ | ------ | ---------------------------------------------------------- |
| createTime   | double | Creation time.                                             |
| deviceKey    | String | DeviceKey.                                                 |
| hdop         | String | Horizontal Dilution of Precision (GPS accuracy indicator). |
| lat          | String | Latitude.                                                  |
| lng          | String | Longitude.                                                 |
| productKey   | String | ProductKey.                                                |
| latType      | String | Latitude hemisphere (N/S).                                 |
| lngType      | String | Longitude hemisphere (W/E).                                |
| locateRaw    | String | Raw positioning data.                                      |
| locateStatus | String | Differential/non-differential positioning status.          |
| locateTime   | String | Positioning time.                                          |
| locateType   | String | Positioning method type.                                   |
| satellites   | String | Number of connected satellites.                            |
| bdLat        | String | Latitude in BD09 coordinate system.                        |
| bdLng        | String | Longitude in BD09 coordinate system.                       |
| gcjLat       | String | Latitude in GCJ coordinate system.                         |
| gcjLng       | String | Longitude in GCJ coordinate system.                        |
| wgsLat       | String | Raw GPS latitude (WGS84).                                  |
| wgsLng       | String | Raw GPS longitude (WGS84).                                 |

**QuecProductTSLDataModel Definition**

| Field           | Type   | Description                            |
| --------------- | ------ | -------------------------------------- |
| battery         | double | Battery level.                         |
| cellId          | int    | Cell ID.                               |
| comProtocolVer  | String | Communication protocol version.        |
| dataProtocolVer | String | Data protocol version.                 |
| deviceKey       | String | DeviceKey.                             |
| iccid           | String | ICCID.                                 |
| lac             | int    | Location Area Code.                    |
| locator         | String | Supported positioning method.          |
| mcc             | String | Mobile Country Code.                   |
| mcuVersion      | String | MCU version.                           |
| memoryFree      | int    | Available storage space.               |
| mnc             | int    | Mobile Network Code.                   |
| phoneNum        | String | Mobile phone number.                   |
| productKey      | String | ProductKey.                            |
| rsrp            | int    | Reference Signal Received Power.       |
| rsrq            | int    | LTE Reference Signal Received Quality. |
| sdkVersion      | String | SDK version.                           |
| sim             | String | SIM card number.                       |
| snr             | int    | Signal-to-Noise Ratio.                 |
| type            | String | Module model.                          |
| version         | String | Module firmware version.               |
| voltage         | double | Voltage.                               |

**QuecProductTSLResourceInfoModel Definition**

| Field         | Type   | Description     |
| ------------- | ------ | --------------- |
| deviceKey     | String | DeviceKey.      |
| createTime    | String | Creation time.  |
| deviceId      | String | Device ID.      |
| resourceCode  | String | Resource code.  |
| resourceValue | String | Resource value. |
| updateTime    | String | Update time.    |

**Example**

```kotlin
QuecDeviceService.getDeviceBusinessAttributes("pk", "dk", null, null, null, null) {
    if (it.isSuccess) {
        val data = it.data //Get device business properties successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Enable/Disable Device Offline Notification

**API**

Enable or disable the device offline notification.

```kotlin
fun setOfflineReminder(
    productKey: String,
    deviceKey: String,
    enableOfflineReminder: Int,
    callback: QuecCallback<Unit>
)
```

**Parameter**

| Parameter             | Required | Description                       |
| --------------------- | -------- | --------------------------------- |
| productKey            | Y        | ProductKey.                       |
| deviceKey             | Y        | DeviceKey.                        |
| enableOfflineReminder | Y        | 0: Disable<br />1: Enable         |
| callback              | Y        | Callback function of the request. |

**Example**

```kotlin
QuecDeviceService.setOfflineReminder("pk", "dk", 1) {
    if (it.isSuccess) {
        //Enable the device offline notification successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Get Enablement Status of Offline Notification

**API**

Get the enablement status of the device offline notification.

```kotlin
fun getOfflineReminder(
    productKey: String,
    deviceKey: String,
    callback: QuecCallback<Int>
)
```

**Parameter**

| Parameter  | Required | Description                                                  |
| ---------- | -------- | ------------------------------------------------------------ |
| productKey | Y        | ProductKey.                                                  |
| deviceKey  | Y        | DeviceKey.                                                   |
| callback   | Y        | Callback function of the request.<br />0: Disabled<br />1: Enabled |

**Example**

```kotlin
QuecDeviceService.getOfflineReminder("pk", "dk") {
    if (it.isSuccess) {
        val data = it.data //Get the enablement status of the device offline notification successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Set Device Timezone

**API**

Set the device timezone, used for synchronizing the device's time zone with the app's set time zone.

```kotlin
fun setDeviceTimeZone(
    productKey: String,
    deviceKey: String,
    timeZone: String,
    timeZoneId: String?,
    callback: QuecCallback<Unit>
)
```

**Parameter**

| Parameter  | Required | Description                              |
| ---------- | -------- | ---------------------------------------- |
| productKey | Y        | ProductKey.                              |
| deviceKey  | Y        | DeviceKey.                               |
| timeZone   | Y        | Timezone. Format: GMT+-HH:mm or GMT+-HH. |
| timeZoneId | Y        | Timezone ID.                             |
| callback   | Y        | Callback function of the request.        |

**Example**

```kotlin
QuecDeviceService.setDeviceTimeZone("pk", "dk", "GMT+08:00", TimeZone.getDefault().id) {
    if (it.isSuccess) {
        //Set the device timezone successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Get Device Timezone

**API**

Get the current device time zone.

```kotlin
fun getDeviceTimeZone(
    productKey: String,
    deviceKey: String,
    callback: QuecCallback<QuecDeviceTimeZoneModel>
)
```

**Parameter**

| Parameter  | Required | Description                       |
| ---------- | -------- | --------------------------------- |
| productKey | Y        | ProductKey.                       |
| deviceKey  | Y        | DeviceKey.                        |
| callback   | Y        | Callback function of the request. |

**QuecDeviceTimeZoneModel Definition**

| Field      | Type   | Description      |
| ---------- | ------ | ---------------- |
| timeZone   | String | Device timezone. |
| timeZoneId | String | Timezone ID.     |

**Example**

```kotlin
QuecDeviceService.getDeviceTimeZone("pk", "dk") {
    if (it.isSuccess) {
        val data = it.data //Get the current device time zone successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Get Product Manual

**API**

Get a product manual.

```kotlin
fun getProductDescription(
    productKey: String,
    callback: QuecCallback<String>
)
```

**Parameter**

| Parameter  | Required | Description                       |
| ---------- | -------- | --------------------------------- |
| productKey | Y        | ProductKey.                       |
| callback   | Y        | Callback function of the request. |

**Example**

```kotlin
QuecDeviceService.getProductDescription("pk") {
    if (it.isSuccess) {
        val data = it.data //Get a product manual successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Unbind Device

**API**

Unbind a device.

```kotlin
fun unbindDevice(
    deviceKey: String,
    productKey: String,
    isInit: Boolean,
    random: String?,
    resetCredentials: String?,
    callback: QuecCallback<Unit>
)
```

**Parameter**

| Parameter        | Required | Description                                                  |
| ---------------- | -------- | ------------------------------------------------------------ |
| deviceKey        | Y        | DeviceKey.                                                   |
| productKey       | Y        | ProductKey.                                                  |
| isInit           | N        | Whether initialization is required. Default value: false. (This parameter is required for Bluetooth-only devices) |
| random           | N        | (This parameter is required for Bluetooth-only devices)      |
| resetCredentials | N        | Bluetooth-only device reset credentials (This parameter is required for Bluetooth-only devices) |
| callback         | Y        | Callback function of the request.                            |

**Example**

```kotlin
QuecDeviceService.unbindDevice("dk", "pk", false, null, null) {
    if (it.isSuccess) {
        //Unbind a device successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Unbind Device in Batches

**API**

Unbind devices in batches.

```kotlin
fun batchUnbindDevice(
    isInit: Boolean,
    deviceList: List<QuecDeviceModel>,
    callback: QuecCallback<QuecBatchUnbindModel>
)
```

**Parameter**

| Parameter  | Required | Description                                               |
| ---------- | -------- | --------------------------------------------------------- |
| isInit     | N        | Whether initialization is required. Default value: false. |
| deviceList | Y        | QuecDeviceModel array.                                    |
| callback   | Y        | Callback function of the request.                         |

> See QuecDeviceModel Definition above.

**QuecBatchUnbindModel Definition**

| Field       | Type                                | Description                    |
| ----------- | ----------------------------------- | ------------------------------ |
| successList | List&lt;QuecBatchUnbindDeviceModel> | List of successful executions. |
| failList    | List&lt;QuecBatchUnbindDeviceModel> | List of failed executions.     |

**QuecBatchUnbindDeviceModel Definition**

| Field      | Type   | Description                                                  |
| ---------- | ------ | ------------------------------------------------------------ |
| pk         | String | ProductKey.                                                  |
| dk         | String | DeviceKey.                                                   |
| gdid       | String | Group ID.                                                    |
| shareCode  | String | Share code.                                                  |
| bindingSum | int    | The number of bound users of the device in the platform after the unbinding operation, including pseudo-binding. |
| code       | int    | Error code (Only valid for *failureList*).                   |
| msg        | String | Error message (Only valid for *failureList*).                |

**Example**

```kotlin
QuecDeviceService.batchUnbindDevice(false, listOf(QuecDeviceModel("pk", "dk"))) {
    if (it.isSuccess) {
        val data = it.data //Unbind devices in batches successsfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```
