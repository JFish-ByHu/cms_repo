# Add Cellular Devices

## Feature Description

You can add a cellular device via its serial number, and it will go online directly after startup.

```kotlin
QuecDeviceService
```

## Directly Add Online Device

You can directly add a device whose network has been provisioned and is already online.

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
