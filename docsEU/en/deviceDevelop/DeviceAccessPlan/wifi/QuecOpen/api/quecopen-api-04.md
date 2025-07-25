# Network Provisioning API


## **API Overview**

|                    Function                     |               Description               |
| :---------------------------------------------: | :-------------------------------------: |
|   [Qth_wifiOpenNetcfg()](#Qth_wifiOpenNetcfg)   |      Enables network provisioning.      |
|  [Qth_wifiCloseNetcfg()](#Qth_wifiCloseNetcfg)  |     Disables network provisioning.      |
| [Qth_wifiGetCfgStatus()](#Qth_wifiGetCfgStatus) | Gets Wi-Fi network provisioning status. |

<span style='color:#999AAA'>Note: See [Product Configuration API](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-02) for the details about Wi-Fi information configuration.</span>

## **API Description**

<span id="Qth_wifiOpenNetcfg"></span>
## <span style="color:#A52A2A">__Qth_wifiOpenNetcfg__</span>

This function enables network provisioning.

__Prototype__

```c
oprt_ret Qth_wifiOpenNetcfg(Qth_wifiConfigMode_e mode);
```

__Parameter__

* __Input Parameter__
  * __Qth_wifiConfigMode__ __`mode`__: Network provisioning mode.
    | Value                      | Description                                                                                                                                  |
    | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
    | QTH_WIFI_CFGMODE_SLIENT    | Idle mode (The device enters idle mode after network provisioning fails.)                                                                    |
    | QTH_WIFI_CFGMODE_BACKROUTE | Reconnect mode (The device attempts to reconnect to the previous router after network provisioning fails; if unsuccessful, enter idle mode.) |

* __Output Parameter__
  
* None
  
* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
oprt_ret ret = OPRT_OK;
ret = Qth_wifiOpenNetcfg(QTH_WIFI_CFGMODE_SLIENT);
if (OPRT_OK != ret)
{
    Quos_logPrintf(APPS_OPEN, LL_ERR, "open wifi netcfg error");
}
```
---

<span id="Qth_wifiCloseNetcfg"></span>

## <span style="color:#A52A2A">__Qth_wifiCloseNetcfg__</span>

This function disables network provisioning.

__Prototype__

```c
oprt_ret Qth_wifiCloseNetcfg(void);
```

__Parameter__

* __Input Parameter__
  * None

* __Output Parameter__
  * None

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
oprt_ret ret = OPRT_OK;
Qth_wifiOpenNetcfg();
Qhal_system_sleepMs(10000);
ret = Qth_wifiCloseNetcfg();
if (OPRT_OK != ret)
{
    Quos_logPrintf(APPS_OPEN, LL_ERR, "close wifi netcfg error");
}
```
---
<span id="Qth_wifiGetCfgStatus"></span>

## <span style="color:#A52A2A">__Qth_wifiGetCfgStatus__</span>

This function gets Wi-Fi network provisioning status.

__Prototype__

```c
Qth_wifiConfigStatus_e Qth_wifiGetCfgStatus(void);
```

__Parameter__

* __Input Parameter__
  
* None
  
* __Output Parameter__
  
* None
  
* __Return Value__
    | Value                          | Description                 |
    | ------------------------------ | --------------------------- |
    | QTH_WIFI_CFGSTA_NOT_CONFIG     | Wi-Fi network unprovisioned |
    | QTH_WIFI_CFGSTA_CONFIGING      | Wi-Fi network provisioning  |
    | QTH_WIFI_CFGSTA_ALREADY_CONFIG | Wi-Fi network provisioned   |

__Example__

```c
Qth_wifiConfigStatus_e status;
status = Qth_wifiGetCfgStatus();
Quos_logPrintf(APPS_OPEN, LL_DBG, "status:%d", status);
```
---

<span id="ERROR_CODE">  </span>
## **Error Code List**
| Enumeration Value                 | Hexadecimal | Decimal | Description                                  |
| --------------------------------- | ----------- | ------- | -------------------------------------------- |
| OPRT_OK                           | -0x0000     | -0      | Successful execution.                        |
| OPRT_COM_ERROR                    | -0x0001     | -1      | General error.                               |
| OPRT_INVALID_PARM                 | -0x0002     | -2      | Invalid parameter.                           |
| OPRT_MALLOC_FAILED                | -0x0003     | -3      | Memory allocation failed.                    |
| OPRT_NOT_SUPPORTED                | -0x0004     | -4      | Not supported.                               |
| OPRT_NOT_FOUND                    | -0x0005     | -5      | Object not found.                            |
| OPRT_INDEX_OUT_OF_BOUND           | -0x0006     | -6      | Index out of bounds.                         |
| OPRT_EXCEED_UPPER_LIMIT           | -0x0007     | -7      | Exceed upper limit.                          |
| OPRT_NOT_EXIST                    | -0x0008     | -8      | Not exist.                                   |
| OPRT_QTH_WIFI_OPEN_NETCFG_FAILED  | -0x1c00     | -7168   | Failed to enable Wi-Fi network provisioning. |
| OPRT_QTH_WIFI_CONN_ROUTER_FAILED  | -0x1c01     | -7169   | Failed to connect to the router.             |
| OPRT_QTH_WIFI_ROUTER_DISCONNECTED | -0x1c02     | -7170   | Router disconnected.                         |
