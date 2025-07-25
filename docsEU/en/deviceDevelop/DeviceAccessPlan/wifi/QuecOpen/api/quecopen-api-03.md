# Device Connection API

## **API Overview**

|                Function                 |                  Description                  |
| :-------------------------------------: | :-------------------------------------------: |
|      [Qth_devInit()](#Qth_devInit)      |          Initializes QuecThing SDK.           |
|     [Qth_devStart()](#Qth_devStart)     | Initiates the connection to Developer Center. |
|     [Qth_devReset()](#Qth_devReset)     |              Resets the device.               |
|    [Qth_devRemove()](#Qth_devRemove)    |              Deletes the device.              |
| [Qth_devGetStatus()](#Qth_devGetStatus) |            Gets the device status.            |

## **API Description**

<span id="Qth_devInit"></span>
## <span style="color:#A52A2A">__Qth_devInit__</span>

This function automatically calls the initialization functions of all component objects to initialize QuecThing SDK. This function must be called before other functions are used.

__Prototype__

```c
oprt_ret Qth_devInit();
```

__Parameter__

* __Input Parameter__
  * None

* __Output Parameter__
  * None

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other value: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
oprt_ret ret = OPRT_OK;

ret = Qth_devInit();
if (OPRT_OK != ret)
{
    Quos_logPrintf(APPS_OPEN, LL_ERR, "sdk init error");
}
```
---

<span id="Qth_devStart"></span>
## <span style="color:#A52A2A">__Qth_devStart__</span>

This function initiates the connection to Developer Center. Before the connection, relevant configurations (such as product information configuration) should be done. After initiating the connection, the device will automatically connect to the router and Developer Center if there is Wi-Fi network provisioning information, and it will enter the network provisioning mode if there is no Wi-Fi network provisioning information.

__Prototype__

```c
oprt_ret Qth_devStart();
```

__Parameter__

* __Input Parameter__
  * None

* __Output Parameter__
  * None

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other value: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
oprt_ret ret = OPRT_OK;

Qth_devInit();
/* Configure server information, product information, etc. */
ret = Qth_devStart();
if (OPRT_OK != ret)
{
    Quos_logPrintf(APPS_OPEN, LL_ERR, "sdk start error");
}
```
---

<span id="Qth_devReset"></span>
## <span style="color:#A52A2A">__Qth_devReset__</span>

This function resets the device. After this function is called, the Wi-Fi information will be cleared, and the device will reboot to enter the network provisioning mode. When the device reconnects to Developer Center, the binding information and DeviceSecret will be reset.

__Prototype__

```c
oprt_ret Qth_devReset();
```

__Parameter__

* __Input Parameter__
  * None

* __Output Parameter__
  * None

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other value: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
oprt_ret ret = OPRT_OK;

ret = Qth_devReset();
if (OPRT_OK != ret)
{
    Quos_logPrintf(APPS_OPEN, LL_ERR, "dev reset error");
}
```
---

<span id="Qth_devRemove"></span>
## <span style="color:#A52A2A">__Qth_devRemove__</span>

This function deletes the device. After this function is called, the Wi-Fi information will be cleared and the device will automatically enter the network provisioning mode.

__Prototype__

```c
oprt_ret Qth_devRemove();
```

__Parameter__

* __Input Parameter__
  * None

* __Output Parameter__
  * None

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other value: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
oprt_ret ret = OPRT_OK;

ret = Qth_devRemove();
if (OPRT_OK != ret)
{
    Quos_logPrintf(APPS_OPEN, LL_ERR, "dev remove error");
}
```
---

<span id="Qth_devGetStatus"></span>
## <span style="color:#A52A2A">__Qth_devGetStatus__</span>

This function gets the device status.

__Prototype__

```c
oprt_ret Qth_devGetStatus(Qth_devStatus_e *status);
```

__Parameter__

* __Input Parameter__
  
* None
  
* __Output Parameter__
  * __Qth_devStatus_e__ __`status`__: Device status.
    | Value                          | Description                                        |
    | ------------------------------ | -------------------------------------------------- |
    | QTH_DEV_STATUS_SLIENT          | Idle status, with Bluetooth broadcast off.         |
    | QTH_DEV_STATUS_NETCFG          | Network provisioning, with Bluetooth broadcast on. |
    | QTH_DEV_STATUS_NETCFGED        | Network provisioned.                               |
    | QTH_DEV_STATUS_CONNECTED_ROUTE | Router connected.                                  |
    | QTH_DEV_STATUS_CONNECTED_DMP   | Platform connected.                                |

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other value: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
oprt_ret ret = OPRT_OK;
Qth_devStatus_e status;

ret = Qth_devGetStatus(&status);
if (OPRT_OK != ret)
{
    Quos_logPrintf(APPS_OPEN, LL_ERR, "get dev connect status error");
}
```
---

<span id="ERROR_CODE">  </span>
## **Error Code List**
| Enumeration Value                | Hexadecimal | Decimal | Description                                                                                                                |
| -------------------------------- | ----------- | ------- | -------------------------------------------------------------------------------------------------------------------------- |
| OPRT_OK                          | -0x0000     | -0      | Successful execution.                                                                                                      |
| OPRT_COM_ERROR                   | -0x0001     | -1      | General error.                                                                                                             |
| OPRT_INVALID_PARM                | -0x0002     | -2      | Invalid parameter.                                                                                                         |
| OPRT_MALLOC_FAILED               | -0x0003     | -3      | Memory allocation failed.                                                                                                  |
| OPRT_NOT_SUPPORTED               | -0x0004     | -4      | Not supported.                                                                                                             |
| OPRT_NOT_FOUND                   | -0x0005     | -5      | Object not found.                                                                                                          |
| OPRT_INDEX_OUT_OF_BOUND          | -0x0006     | -6      | Index out of bounds.                                                                                                       |
| OPRT_EXCEED_UPPER_LIMIT          | -0x0007     | -7      | Exceed upper limit.                                                                                                        |
| OPRT_NOT_EXIST                   | -0x0008     | -8      | Not exist.                                                                                                                 |
| OPRT_QTH_DMP_SERVER_ERROR        | -0x1700     | -5888   | Exceptions occurred for some server APIs.                                                                                  |
| OPRT_QTH_DMP_SEND_NOT_ALLOW      | -0x1701     | -5889   | Device messages are limited.                                                                                               |
| OPRT_QTH_DMP_AUTH_NOT_ALLOW      | -0x1702     | -5890   | The device cannot be activated.                                                                                            |
| OPRT_QTH_DMP_AUTH_ALREADY        | -0x1703     | -5891   | The device has been authenticated.                                                                                         |
| OPRT_QTH_DMP_PK_NOT_FOUND        | -0x1704     | -5892   | No product information is found via the ProductKey.                                                                        |
| OPRT_QTH_DMP_PAYLOAD_INVALID     | -0x1705     | -5893   | Password parsing error.                                                                                                    |
| OPRT_QTH_DMP_SIGN_ERROR          | -0x1706     | -5894   | Sign error.                                                                                                                |
| OPRT_QTH_DMP_RAND_ILLEGAL        | -0x1707     | -5895   | Rand is illegal.                                                                                                           |
| OPRT_QTH_DMP_MISMATCH            | -0x1708     | -5896   | The passed DeviceKey and ProductKey are inconsistent with those stored in the database.                                    |
| OPRT_QTH_DMP_DK_ILLEGAL          | -0x1709     | -5897   | DeviceKey is illegal.                                                                                                      |
| OPRT_QTH_DMP_FLAG_ILLEGAL        | -0x170a     | -5898   | Flag is illegal.                                                                                                           |
| OPRT_QTH_DMP_CLIENTID_ERROR      | -0x170b     | -5899   | ClientID is not matched with the password.                                                                                 |
| OPRT_QTH_DMP_DS_ERROR            | -0x170c     | -5900   | DeviceSecret is incorrect.                                                                                                 |
| OPRT_QTH_DMP_DK_NOT_FOUND        | -0x170d     | -5901   | Device information not found.                                                                                              |
| OPRT_QTH_DMP_SUB_RELATED         | -0x170e     | -5902   | The gateway is not associated with the sub-device.                                                                         |
| OPRT_QTH_DMP_SUB_CONNECT_ALREADY | -0x170f     | -5903   | The sub-device is already online.                                                                                          |
| OPRT_QTH_DMP_DEV_OFFLINE         | -0x1710     | -5904   | Device offline.                                                                                                            |
| OPRT_QTH_DMP_UNKNOWN_ERROR       | -0x1711     | -5905   | Unknown error.                                                                                                             |
| OPRT_QTH_DEV_GET_CONFIG_FAILED   | -0x1100     | -4352   | Failed to get the configuration.                                                                                           |
| OPRT_QTH_DEV_NOT_AUTH            | -0x1101     | -4353   | Device not authenticated.                                                                                                  |
| OPRT_QTH_DEV_CONN_FAILED         | -0x1102     | -4354   | Device connection failed.                                                                                                  |
| OPRT_QTH_DEV_RESET_FAILED        | -0x1103     | -4355   | Device reset failed.                                                                                                       |
| OPRT_QTH_DEV_REMOVE_FAILED       | -0x1104     | -4356   | Failed to delete the device.                                                                                               |
| OPRT_QTH_DEV_ALREADY_CONNECTED   | -0x1105     | -4357   | Device connected.                                                                                                          |
| OPRT_QTH_DEV_RESET_ABNORMAL      | -0x1106     | -4358   | Device reset error (New DeviceSecret has been received for the device with unique-DeviceSecret-per-device authentication). |
