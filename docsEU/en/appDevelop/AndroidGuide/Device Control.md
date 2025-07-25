# Device Control

## Feature Description

The device control feature provides device control, connection, and disconnection of device channels. 

It supports the following channel connections:

1. Cloud channel (WebSocket)
2. Wi-Fi LAN channel
3. BLE channel

When a device connects to the platform, the WebSocket channel will be established by default.

When connecting to a device in the default mode, the connection priority is: cloud > Wi-Fi > BLE.

> See QuecDeviceModel Definition in [Device Management](Device%20Management.md).

## Device Control

### Initialize Device

Initialize the device control class according to the device ID.

**API**

> Note
>
> Only after you call the get device list interface first can QuecDeviceModel be used successfully. After initialization, you can directly retrieve the cached client using the initWithId method.

```kotlin
//Initialize or update the device information.
fun initWithDevice(device: QuecDeviceModel): QuecDeviceClientApi
```

**Parameter**

| Parameter | Required | Description             |
| --------- | -------- | ----------------------- |
| device    | Y        | QuecDeviceModel object. |

```kotlin
//Retrieve the cached client.
fun initWithId(deviceId: String): QuecDeviceClientApi?
```

| Parameter | Required | Description                                                  |
| --------- | -------- | ------------------------------------------------------------ |
| deviceId  | Y        | Property in QuecDeviceModel. Custom format: pk_dk. Example, "p00001_AABBCCDD0001". *channelId* is the same as *deviceId*. |

**Example**

```kotlin
val deviceModel = getDeviceModel() //Get device object from the device list interface.

val deviceClient = QuecDeviceClient.initWithDevice(deviceModel)

val cacheDeviceClient = QuecDeviceClient.initWithId(deviceModel.channelId)
```

### Listen to Device Status

**API**

> After QuecDeviceClientDelegate protocol is implemented, you need to handle updates such as refreshing the online/offline status of devices and updating UI elements.

```kotlin
//Add listener.
fun addListener(listener: Listener)

//Remove listener.
fun removeListener(listener: Listener)
```

**Parameter**

| Parameter | Required | Description                          |
| --------- | -------- | ------------------------------------ |
| listener  | Y        | QuecDeviceClientApi.Listener object. |

**QuecDeviceClientApi.Listener Definition**

```kotlin
/**
 *  Device information has been updated, e.g., device name changed.
 *  @param device Device object.
 */
fun deviceInfoUpdate(device: QuecDeviceModel)

/**
 * Device online status updates.
 * @param device Device object.
 * @param onlineState  Device channel online status, bit-based placement (0: all offline, 1: WebSocket online, 2 : Wi-Fi online, 3: Wi-Fi + WebSocket online, 4: BLE online, 5: WebSocket + BLE online, 6: BLE + Wi-Fi online, 7: Wi-Fi + BLE + WebSocket online).
 */
fun onlineUpdate(device: QuecDeviceModel, onlineState: Int)

/**
 * Device status updates during connection.
 * @param device Device object.
 * @param connectingState  Device channel connecting state, 0: not connected, 1: connecting.
 */
fun connectingStateUpdate(device: QuecDeviceModel, connectingState: Int)

/**
 * Called when the device is removed.
 * @param device Device object.
 */
fun deviceRemoved(device: QuecDeviceModel)

/**
 * Device data updates, e.g., TSL model data updated.
 * @param device Device object.
 * @param dps  Command dictionary.
 */
fun dpsUpdate(device: QuecDeviceModel, dps: QuecIotDataPointsModel)
```

**Example**

```kotlin
val deviceStatusListener = object : QuecDeviceClientApi.Listener {
    override fun connectingStateUpdate(device: QuecDeviceModel, connectingState: Int) {
    }
    
    override fun deviceInfoUpdate(device: QuecDeviceModel) {
    }
    
    override fun deviceRemoved(device: QuecDeviceModel) {
    }
    
    override fun dpsUpdate(device: QuecDeviceModel, dps: QuecIotDataPointsModel) {
    }
    
    override fun onlineUpdate(device: QuecDeviceModel, onlineState: Int) {  
    }
}

addListener(deviceStatusListener)

removeListener(deviceStatusListener)
```

**QuecIotDataPointsModel Definition**

| Field           | Type                   | Description                    |
| --------------- | ---------------------- | ------------------------------ |
| pk              | String                 | ProductKey.                    |
| dk              | String                 | DeviceKey.                     |
| channelType     | QuecIotChannelType     | Channel type.                  |
| action          | QuecIotDataPointAction | Action type.                   |
| dps             | List&lt;DataModel>     | DPS data.                      |
| originData      | JSONObject             | Original channel data.         |
| transparentData | ByteArray              | Transparent transmission data. |

**QuecIotDataPointsModel.DataModel Definition**

| Field    | Type   | Description |
| -------- | ------ | ----------- |
| id       | int    | Data ID.    |
| dataType | String | Data type.  |
| value    | Any    | Data value. |
| code     | String | Data code.  |

**QuecIotChannelType Enumeration Definition**

| Field                     | Description             |
| ------------------------- | ----------------------- |
| QuecIotChannelTypeUnknown | Unknown channel.        |
| QuecIotChannelTypeWifi    | Wi-Fi LAN channel.      |
| QuecIotChannelTypeWS      | WebSocket channel.      |
| QuecIotChannelTypeBLE     | BLE near-field channel. |

**QuecIotDataPointAction Enumeration Definition**

Only commonly used types are listed here.

| Field                                  | Description                   |
| -------------------------------------- | ----------------------------- |
| QuecIotDataPointActionUNKNOWN          | Unknown type.                 |
| QuecIotDataPointActionEVENT_INFO       | Device event information.     |
| QuecIotDataPointActionEVENT_WARN       | Device alert information.     |
| QuecIotDataPointActionEVENT_ERROR      | Device error information.     |
| QuecIotDataPointActionLOCATION_INFO_KV | Device location information.  |
| QuecIotDataPointActionTSL_REPORT       | Device TSL model information. |

### Connect and Disconnect Device Channel

**API**

Connect or disconnect the device channel. You need to obtain the current QuecDeviceClient object first.

```kotlin
//Establish connection and automatically select the connection method.
fun connect()

//Establish connection and specify the connection method.
fun connectWithMode(mode: QuecIotDataSendMode)

//Disconnect all channel connections.
fun disconnect()

//Disconnect the specified channel's connection.
fun disconnectWithType(type: QuecIotChannelType)
```

**QuecIotDataSendMode Enumeration Definition**

| Field                   | Description                           |
| ----------------------- | ------------------------------------- |
| QuecIotDataSendModeAuto | Auto-selection.                       |
| QuecIotDataSendModeWS   | WebSocket connection, remote control. |
| QuecIotDataSendModeWifi | Wi-Fi LAN connection.                 |
| QuecIotDataSendModeBLE  | BLE connection.                       |

**QuecIotChannelType Enumeration Definition**

| Field                  | Description                           |
| ---------------------- | ------------------------------------- |
| QuecIotChannelTypeWifi | Wi-Fi LAN connection.                 |
| QuecIotChannelTypeWS   | WebSocket connection, remote control. |
| QuecIotChannelTypeBLE  | BLE connection.                       |

**Example**

```kotlin
deviceClient.connect()

deviceClient.connectWithMode(QuecIotDataSendMode.QuecIotDataSendModeBLE)

deviceClient.disconnect()

deviceClient.disconnectWithType(QuecIotChannelType.QuecIotChannelTypeBLE)
```

### Issue Device Data

**API**

> Send device data to the device by assembling DPS data through the following interface.

```kotlin
fun writeDps(dps: List<QuecIotDataPointsModel.DataModel>, callback: QuecSimpleCallBack?)

fun writeDps(
    dps: List<QuecIotDataPointsModel.DataModel>,
    mode: QuecIotDataSendMode,
    callback: QuecSimpleCallBack?
)

fun writeDps(
    dps: List<QuecIotDataPointsModel.DataModel>,
    mode: QuecIotDataSendMode,
    extraData: QuecIotChannelExtraData?,
    callback: QuecSimpleCallBack?
)
```

**Parameter**

| Parameter | Required | Description         |
| --------- | -------- | ------------------- |
| dps       | Y        | DPS data.           |
| mode      | N        | Connection method.  |
| extraData | N        | Additional data.    |
| callback  | N        | Execution callback. |

**QuecIotChannelExtraData Definition**

| Field      | Type | Description                          |
| ---------- | ---- | ------------------------------------ |
| cacheTime  | Long | Cache time.                          |
| msgId      | Long | Message ID.                          |
| isCache    | Bool | Whether to cache data.               |
| isCover    | Bool | Whether to overwrite the data sent.  |
| isSendJson | Bool | Whether to send data in JSON format. |

**Example**

```kotlin
deviceClient.writeDps(listOf(QuecIotDataPointsModel.DataModel().apply {
    id = 1
    dataType = QuecIotDataPointsModel.DataModel.QuecIotDataPointDataType.BOOL
    code = "switch"
    value = true
})) {
    if (it.isSuccess) {
        //Issue device data successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Read Device Data

**API**

> Read device data by assembling DPS data.

```kotlin
fun readDps(
    dps: List<QuecIotDataPointsModel.DataModel>,
    callback: QuecSimpleCallBack?
)

fun readDps(
    dps: List<QuecIotDataPointsModel.DataModel>,
    mode: QuecIotDataSendMode,
    callback: QuecSimpleCallBack?
)

fun readDps(
    dps: List<QuecIotDataPointsModel.DataModel>,
    mode: QuecIotDataSendMode,
    extraData: QuecIotChannelExtraData?,
    callback: QuecSimpleCallBack?
)
```

**Parameter**

> See QuecIotDataPoint, QuecIotChannelExtraData, and QuecIotChannelMode Definitions above.

DPS data are obtained through the device status update callback interface dpsUpdate.

**Example**

```kotlin
deviceClient.readDps(listOf(QuecIotDataPointsModel.DataModel().apply { 
    id = 1
    dataType = QuecIotDataPointsModel.DataModel.QuecIotDataPointDataType.BOOL
    code = "switch"
})) {
    if (it.isSuccess) {
        val data = it.data //Read device data successfully.
    } else {
        val code = it.code //Failed. Error code.
    }
}
```

### Send Transparent Transmission Data

**API**

Send transparent transmission data. Note that transparent transmission data can only be sent via the Bluetooth channel.

```kotlin
fun writeTransparent(
    transparentData: ByteArray,
    callback: QuecSimpleCallBack?
)
```

**Parameter**

| Parameter       | Required | Description                       |
| --------------- | -------- | --------------------------------- |
| transparentData | Y        | Binary data.                      |
| callback        | Y        | Callback function of the request. |

```kotlin
deviceClient.writeTransparent(byteArrayOf(1, 2, 3)) {
    if (it.isSuccess) {
        //Send transparent transmission data successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

## Control Devices in Batches

### Control Devices in Batches on Platform

**API**

Control devices in batches on the platform.

```kotlin
fun sendDataToDevicesByHttp(
    data: String,
    deviceList: List<QuecBatchControlDeviceModel>,
    type: Int,
    extraData: QuecBatchControlExtraModel?,
    callback: QuecCallback<QuecBatchControlModel>
)
```

**Parameter**

| Parameter  | Required | Description                                                  |
| ---------- | -------- | ------------------------------------------------------------ |
| data       | Y        | JSON string in TSL format.                             |
| deviceList | Y        | Device list.                                                 |
| type       | Y        | Type.<br />1: Transparent transmission<br />2: Property<br />3: Service |
| extraData  | N        | dataFormat type. This parameter must be specified when *type* = 1. *dataFormat* is passed within *extraData*.<br />1: Hex<br />2: Text |
| callback   | Y        | Callback function of the request.                            |

**QuecBatchControlDeviceModel Definition**

| Field             | Type   | Description         |
| ----------------- | ------ | ------------------- |
| productKey        | String | ProductKey.         |
| deviceKey         | String | DeviceKey.          |
| gatewayDeviceKey  | String | Gateway DeviceKey.  |
| gatewayProductKey | String | Gateway ProductKey. |

**QuecBatchControlExtraModel Definition**

| Field      | Type | Description                                                  |
| ---------- | ---- | ------------------------------------------------------------ |
| cacheTime  | int  | Cache time in seconds, range: 1-7776000. This parameter must be set when *isCache* is enabled. Optional parameter. |
| dataFormat | int  | Data type. This parameter must be specified when *type* = 1. Optional parameter.<br />1: Hex<br />2: Text |
| isCache    | int  | Whether to enable caching. Optional parameter.<br />1 - Enable<br />2 - Disable (default) |
| isCover    | int  | Whether to overwrite previously sent identical commands. This parameter must be set when *isCache* is enabled. Optional parameter.<br />1 - Overwrite<br />2 - Do not overwrite (default) |
| qos        | int  | QoS level. Range: 0 or 1. Default value: 1. Optional parameter. |

**QuecBatchControlModel Definition**

| Field       | Type                                 | Description                    |
| ----------- | ------------------------------------ | ------------------------------ |
| successList | List&lt;QuecBatchControlResultModel> | List of successful executions. |
| failureList | List&lt;QuecBatchControlResultModel> | List of failed executions.     |

**QuecBatchControlResultModel Definition**

| Field  | Type                        | Description                                   |
| ------ | --------------------------- | --------------------------------------------- |
| data   | QuecBatchControlDeviceModel | Control device information.                   |
| ticket | String                      | ticket (Only valid for *successList*).        |
| msg    | String                      | Error message (Only valid for *failureList*). |

**QuecBatchControlDeviceModel Definition**

| Field             | Type   | Description         |
| ----------------- | ------ | ------------------- |
| productKey        | String | ProductKey.         |
| deviceKey         | String | DeviceKey.          |
| gatewayDeviceKey  | String | Gateway DeviceKey.  |
| gatewayProductKey | String | Gateway ProductKey. |

**Example**

```kotlin
QuecDeviceControlService.sendDataToDevicesByHttp(
    "[{\"read_write_float\":\"4.4\"}]",
    listOf(QuecBatchControlDeviceModel("pk", "dk")),
    2, null
) {
    if (it.isSuccess) {
        val data = it.data //Control devices in batches on the platform successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```
