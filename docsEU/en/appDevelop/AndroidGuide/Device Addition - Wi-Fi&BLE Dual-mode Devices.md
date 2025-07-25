# Add Wi-Fi & BLE Dual-Mode Device

## Feature Description

For Wi-Fi & BLE dual-mode devices, the App SDK can configure the Wi-Fi SSID and password via Bluetooth, allowing the device to connect to the router and subsequently connect to the platform.

Devices can also be bound via Bluetooth for nearby use (near-field control) and then configured with router information later to enable remote control. This configuration process is called device activation.

```kotlin
//Device network provisioning related services.
QuecDevicePairingService

//Device activation related services.
QuecDeviceVerifyService

//Online device direct addition related services.
QuecDeviceService
```

## Device Network Provisioning

Device addition process:

1. Add a network provisioning listener.
2. Call *QuecDevicePairingService.scan()* and get the discovered devices through the network provisioning listener callback.
3. Select the discovered device and call *QuecDevicePairingService.startPairingByDevices()* to add the device.
4. Obtain the device addition status (successful/failed) through the network provisioning listener callback.
5. After completing the device addition, remove the network provisioning listener.

### Start Discovering Device

**API**

Discover Bluetooth devices. Before calling this interface, it is necessary to request the following dynamic permissions.

- android.permission.BLUETOOTH
- android.permission.BLUETOOTH_SCAN
- android.permission.BLUETOOTH_CONNECT
- android.permission.BLUETOOTH_ADMIN
- android.permission.ACCESS_FINE_LOCATION

```kotlin
fun scan(name: String?, mac: String?)
```

**Parameter**

| Parameter | Required | Description                           |
| --------- | -------- | ------------------------------------- |
| name      | N        | Filter condition: Device name.        |
| mac       | N        | Filter condition: Device MAC address. |

**Example**

```kotlin
QuecDevicePairingService.scan(null, null)
```

### Stop Discovering Device

**API**

Stop discovering devices. It is necessary to stop discovering devices after discovering or exiting the addition process, otherwise, it may affect the normal connection of devices in the list.

```kotlin
fun stopScan()
```

**Example**

```kotlin
QuecDevicePairingService.stopScan()
```

### Add Network Provisioning Listener

**API**

Add a network provisioning listener to monitor the network provisioning process, including scanning devices, updating the addition progress, network provisioning results, etc.

```kotlin
fun addPairingListener(listener: QuecPairingListener?)
```

**Parameter**

| Parameter | Required | Description                    |
| --------- | -------- | ------------------------------ |
| listener  | Y        | Network provisioning listener. |

**QuecPairingListener Definition**

```kotlin
interface QuecPairingListener {
x
    /**
     * Scanned a device.
     * @param deviceBean Device information.
     */
    fun onScanDevice(deviceBean: QuecPairDeviceBean)
    
    /**
     * Update addition progress.
     * @param deviceBean Device information.
     * @param progress Progress.
     */
    fun onUpdatePairingStatus(deviceBean: QuecPairDeviceBean, progress: Float)

    /**
     * Network provisioning result.
     * @param deviceBean Device information.
     * @param result Network provisioning result.
     * @param errorCode Error code.
     */
    fun onUpdatePairingResult(deviceBean: QuecPairDeviceBean, result: Boolean, errorCode: QuecPairErrorCode)
}
```

**Example**

```kotlin
val listener = object : QuecPairingListener {
        override fun onScanDevice(deviceBean: QuecPairDeviceBean) {
            //Scanned a device.
        }

        override fun onUpdatePairingResult(
            deviceBean: QuecPairDeviceBean,
            result: Boolean,
            errorCode: QuecPairErrorCode
        ) {
            //Update addition progress.
        }

        override fun onUpdatePairingStatus(deviceBean: QuecPairDeviceBean, progress: Float) {
            //Update network provisioning result.
        }
    }
    
QuecDevicePairingService.addPairingListener(listener)
```

**QuecPairDeviceBean  Definition**

| Field           | Type          | Description                                                  |
| --------------- | ------------- | ------------------------------------------------------------ |
| deviceName      | String        | Device name.                                                 |
| productName     | String        | Product name.                                                |
| productLogo     | String        | Product logo.                                                |
| bindingMode     | Int           | Binding mode.<br />1 - Multi-binding<br />2 - Single binding<br />3 - Alternate binding |
| activeBluetooth | boolean       | Enable prioritizing activating device via bluetooth.<br />true: Enable<br />false: Disable |
| bleDevice       | QuecBleDevice | Device information.                                          |

**QuecBleDevice  Definition**

| Field               | Type      | Description                                                  |
| ------------------- | --------- | ------------------------------------------------------------ |
| id                  | String    | Device ID.                                                   |
| productKey          | String    | Device ProductKey.                                           |
| deviceKey           | String    | DeviceKey.                                                   |
| mac                 | String    | Device MAC address.                                          |
| capabilitiesBitmask | int       | Device capability. <br/>bit0=1 indicates device supports WAN remote communication capability. <br/>bit1=1 indicates device supports Wi-Fi LAN near-field communication capability. <br/>bit2=1 indicates device supports BLE near-field communication capability. <br/>bit3=1 indicates device supports Matter near-field communication capability. |
| data                | ByteArray | Custom device data.                                          |

### Remove Network Provisioning Listener

**API**

Remove the network provisioning listener. After finishing the addition, it is necessary to remove the listener to prevent memory leaks.

```kotlin
fun removePairingListener(listener: QuecPairingListener?)
```

**Parameter**

| Parameter | Required | Description                    |
| --------- | -------- | ------------------------------ |
| listener  | Y        | Network provisioning listener. |

**Example**

```kotlin
QuecDevicePairingService.removePairingListener(listener)
```

### Start Adding Device

**API**

Start adding devices. After discovering the device, you can pass the device information to start the addition.

```kotlin
fun startPairingByDevices(
    devices: MutableList<QuecPairDeviceBean>?, ssid: String?, pw: String?
)
```

**Parameter**

| Parameter | Required | Description                                                  |
| --------- | -------- | ------------------------------------------------------------ |
| devices   | Y        | Discovered device information. Multiple devices can be passed for addition. |
| ssid      | N        | Wi-Fi SSID.  Pass null to add Bluetooth-only devices.        |
| pw        | N        | Wi-Fi password. Pass null to add Bluetooth-only devices.     |

**Example**

```kotlin
val bean = QuecPairDeviceBean() //Discovered device information.

QuecDevicePairingService.startPairingByDevices(
    mutableListOf(bean),
    "ssid",
    "pwd"
)
```

### Stop Adding Device

**API**

Stop adding devices. For devices that have not been successfully added, you can call this interface to stop the addition.

```kotlin
fun cancelAllDevicePairing()
```

**Example**

```kotlin
QuecDevicePairingService.cancelAllDevicePairing()
```

### Set BLE Network Provisioning Timeout

**API**

Set the BLE network provisioning timeout time. Range: 60–120. Default value: 120. Unit: second.

```kotlin
fun setWiFiPairingDuration(duration: Int): Boolean
```

**Parameter**

| Parameter | Required | Description             |
| --------- | -------- | ----------------------- |
| duration  | Y        | Time out. Unit: second. |

**Example**

```kotlin
QuecDevicePairingService.setBlePairingDuration(60)
```

## Bind Bluetooth-only Device

### Bind Device Bluetooth

The process for device Bluetooth binding is similar to the device network provisioning process. The main difference lies in the value of QuecPairDeviceBean.activeBluetooth when discovering devices. When this value is set to *true*, during the device addition process, it will directly perform a Bluetooth-only binding.

By default, the value of QuecPairDeviceBean.activeBluetooth is *false*. There are two ways to change its value to *true*:

1. Manually set the *activeBluetooth* value to *true* when calling the SDK to search for devices.
2. On the "Configure Product" page of [Developer Center](https://iot.quectelcn.com/login), enable "Prioritize Activating Device via Bluetooth".

After successfully adding the device, you can obtain device information through the get device list interface and normally connect and control the device.

## Activate Device

For Bluetooth-only devices, you can use the device activation feature to obtain device information and normally connect and control them.

This type of device can be identified by the isBleBindState() method in the QuecDeviceModel obtained from the device list. If this method returns *true*, it indicates that the device can be activated.

Device activation process:

1. Add an activation status listener.
2. Call the interface to start activation.
3. Obtain the device activation status (success/failed) through the activation listener callback.
4. After completing the device activation, remove the activation listener.

### Add Activation Status Listener

**API**

Add an activation status listener. This should be called before activation starts.

```kotlin
fun addVerifyListener(listener: QuecVerifyDelegate)
```

**Parameter**

| Parameter | Required | Description                 |
| --------- | -------- | --------------------------- |
| listener  | Y        | Activation status listener. |

**QuecVerifyDelegate Definition**

```kotlin
interface QuecVerifyDelegate {
    /**
     * Callback for binding result, indicating the device is being activated.
     * @param device Device information.
     */
    fun didStartVerifyingDevice(device: QuecDeviceModel)
    
    /**
     * Callback for binding result, indicating activation result.
     * @param device Device information.
     * @param result Activation result. true: successful; false: failed.
     * @param error Error message.
     */
    fun didUpdateVerifyResult(device: QuecDeviceModel, result: Boolean, error: ErrorCode?)
}
```

See QuecDeviceModel Definition in [Device Management](Device Management.md)

**ErrorCode Enumeration Definition**

| Field                   | Description                                                  |
| ----------------------- | ------------------------------------------------------------ |
| COMMON                  | Activation failed. General failure.                          |
| CONNECT_FAIL            | Activation failed. Device connection failed.                 |
| DEVICE_ALREADY_VERIFIED | Device already activated.                                    |
| DEVICE_NOT_FOUND        | Activation failed. Device not found.                         |
| DEVICE_NOT_VERIFY       | Activation failed. Device not authenticated (query timeout). |
| WIFI_SSID_NOT_SET       | Wi-Fi SSID not set.                                           |

**Example**

```kotlin
val verifyListener = object : IQuecDeviceVerifyService.QuecVerifyDelegate {
    override fun didStartVerifyingDevice(device: QuecDeviceModel) {
        //Device is being activated.
    }
    override fun didUpdateVerifyResult(
        device: QuecDeviceModel,
        result: Boolean,
        error: IQuecDeviceVerifyService.ErrorCode?
    ) {
        //Activation result.
    }
}

QuecDeviceVerifyService.addVerifyListener(verifyListener)
```

### Remove Activation Status Listener

**API**

Remove the activation status listener. After completing the activation, it is necessary to remove the listener to prevent memory leaks.

```kotlin
fun removeVerifyListener(listener: QuecVerifyDelegate)
```

**Parameter**

| Parameter | Required | Description                 |
| --------- | -------- | --------------------------- |
| listener  | Y        | Activation status listener. |

**Example**

```kotlin
QuecDeviceVerifyService.removeVerifyListener(verifyListener)
```

### Start Activating Device

**API**

Start activating a device or devices in batches. Note that during the activation state, no other operations can be performed on the device.

```kotlin
fun startVerifyByDevices(
    devices: List<QuecDeviceModel>,
    ssid: String,
    pwd: String
)
```

**Parameter**

| Parameter | Required | Description     |
| --------- | -------- | --------------- |
| devices   | Y        | Device list.    |
| ssid      | Y        | Wi-Fi SSID.     |
| pwd       | Y        | Wi-Fi password. |

**Example**

```kotlin
//device is the device information obtained from the device list.
QuecDeviceVerifyService.startVerifyByDevices(listOf(device), "ssid", "pwd")
```

### Stop Activating Device

**API**

Stop activating devices. During the activation process, you can call this interface to stop the activation. This API is only valid for devices that have not been activated yet.

```kotlin
fun cancelAllDeviceVerify()
```

**Example**

```kotlin
QuecDeviceVerifyService.cancelAllDeviceVerify()
```

## Directly Add Online Devices

For devices that have already been network provisioned and are online, you can directly add them.

### Bind Device via SN

**API**

Add a device already online by binding the device via its serial number.

```kotlin
fun bindDeviceBySerialNumber(
    serialNumber: String,
    productKey: String,
    deviceName: String?,
    callback: QuecCallback<QuecDeviceBindSNModel>
)
```

**Parameter**

| Parameter    | Required | Description                       |
| ------------ | -------- | --------------------------------- |
| serialNumber | Y        | Device serial number.             |
| productKey   | Y        | Device ProductKey.                |
| deviceName   | N        | Device name.                      |
| callback     | Y        | Callback function of the request. |

**Example**

```kotlin
QuecDeviceService.bindDeviceBySerialNumber(content2, content1, null) {
    if (it.isSuccess) {
        //Add a device already online by binding the device via its serial number successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg   //Failed. Error message.
    }
}
```
