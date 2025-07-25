# Add Bluetooth-only Devices

## Feature Description

Bluetooth-only devices cannot directly connect to the platform and can only be bound to the app through searching devices nearby for nearby use. The Wi-Fi SSID and password are not required during the device addition process.

```kotlin
QuecDevicePairingService
```

Device addition process:

1. Add a network provisioning listener.
2. Call *QuecDevicePairingService.scan()* and get the discovered devices through the network provisioning listener callback.
3. Select the discovered device and call *QuecDevicePairingService.startPairingByDevices()* to add the device.
4. Obtain the device addition status (successful/failed) through the network provisioning listener callback.
5. After completing the device addition, remove the network provisioning listener.

## Feature List

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

**QuecPairDeviceBean Definition**

| Field           | Type          | Description                                                  |
| --------------- | ------------- | ------------------------------------------------------------ |
| deviceName      | String        | Device name.                                                 |
| productName     | String        | Product name.                                                |
| productLogo     | String        | Product logo.                                                |
| bindingMode     | Int           | Binding mode.<br />1 - Multi-binding<br />2 - Single binding<br />3 - Alternate binding |
| activeBluetooth | boolean       | Enable prioritizing activating device via bluetooth.<br />true: Enable<br />false: Disable |
| bleDevice       | QuecBleDevice | Device information.                                          |

**QuecBleDevice Definition**

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
    null,
    null
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

Set the BLE network provisioning timeout time. Range: 30–60. Default value: 60. Unit: second.

```kotlin
fun setBlePairingDuration(duration: Int): Boolean
```

**Parameter**

| Parameter | Required | Description             |
| --------- | -------- | ----------------------- |
| duration  | Y        | Time out. Unit: second. |

**Example**

```kotlin
QuecDevicePairingService.setBlePairingDuration(60)
```
