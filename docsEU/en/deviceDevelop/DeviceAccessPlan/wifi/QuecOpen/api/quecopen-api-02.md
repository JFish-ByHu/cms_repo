# Product Configuration API

## **API Overview**

|                        Function                         |                           Description                           |
| :-----------------------------------------------------: | :-------------------------------------------------------------: |
| [Qth_configSetProductInfo()](#Qth_configSetProductInfo) |                    Sets product information.                    |
| [Qth_configGetProductInfo()](#Qth_configGetProductInfo) |                  Gets the product information.                  |
|  [Qth_configSetDeviceInfo()](#Qth_configSetDeviceInfo)  |                    Sets device information.                     |
|  [Qth_configGetDeviceInfo()](#Qth_configGetDeviceInfo)  |                  Gets the device information.                   |
|    [Qth_configGetAuthType()](#Qth_configGetAuthType)    |              Gets the device authentication type.               |
|    [Qth_configSetODOSInfo()](#Qth_configSetODOSInfo)    | Sets unique-DeviceSecret-per-device authentication information. |
|      [Qth_configSetServer()](#Qth_configSetServer)      |             Sets server URL and default IP address.             |
|      [Qth_configGetServer()](#Qth_configGetServer)      |           Gets the server URL and default IP address.           |
|    [Qth_configSetLifetime()](#Qth_configSetLifetime)    |                 Sets MQTT keep alive interval.                  |
|    [Qth_configGetLifetime()](#Qth_configGetLifetime)    |               Gets the MQTT keep alive interval.                |
|     [Qth_configSetEventCb()](#Qth_configSetEventCb)     |               Sets user event callback function.                |
|     [Qth_configGetEventCb()](#Qth_configGetEventCb)     |             Gets the user event callback function.              |
|   [Qth_configSetModuleVer()](#Qth_configSetModuleVer)   |                  Sets module's version number.                  |
|   [Qth_configGetModuleVer()](#Qth_configGetModuleVer)   |                Gets the module's version number.                |
|      [Qth_configSetMcuVer()](#Qth_configSetMcuVer)      |                    Sets MCU version number.                     |
|      [Qth_configGetMcuVer()](#Qth_configGetMcuVer)      |                  Gets the MCU version number.                   |
|    [Qth_configSetWifiInfo()](#Qth_configSetWifiInfo)    |                     Sets Wi-Fi information.                     |
|    [Qth_configGetWifiInfo()](#Qth_configGetWifiInfo)    |                   Gets the Wi-Fi information.                   |
|  [Qth_configClearWifiInfo()](#Qth_configClearWifiInfo)  |                    Clears Wi-Fi information.                    |
|  [Qth_configSetNetcfgMode()](#Qth_configSetNetcfgMode)  |              Sets Wi-Fi network provisioning mode.              |
|  [Qth_configGetNetcfgMode()](#Qth_configGetNetcfgMode)  |            Gets the Wi-Fi network provisioning mode.            |

## **API Description**

<span id="Qth_configSetProductInfo"></span>
## <span style="color:#A52A2A">__Qth_configSetProductInfo__</span>

This function sets product information. The product information contains ProductKey and ProductSecret, which are generated when you create the product on Developer Center.

__Prototype__

```c
oprt_ret Qth_configSetProductInfo(const char *pk, const char *ps);
```

__Parameter__

* __Input Parameter__
  * __const char *__ __`pk`__: ProductKey generated when you create the product on Developer Center.
  * __const char *__ __`ps`__: ProductSecret generated when you create the product on Developer Center.

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
Qth_configSetProductInfo("xxxxxx", "xxxxxxxxxxxxxxxx");
```
---

<span id="Qth_configGetProductInfo"></span>
## <span style="color:#A52A2A">__Qth_configGetProductInfo__</span>

This function gets the product information.

__Prototype__

```c
oprt_ret Qth_configGetProductInfo(char *pk, char *ps);
```

__Parameter__

* __Input Parameter__
  * None
* __Output Parameter__
  * __char *__ __`pk`__: ProductKey generated when you create the product on Developer Center.
  * __char *__ __`ps`__: ProductSecret generated when you create the product on Developer Center.

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
char pk[QTH_PK_MAXSIZE + 1] = {0};
char ps[QTH_PS_MAXSIZE + 1] = {0};

Qth_configGetProductInfo(pk, ps);
```

---

<span id="Qth_configSetDeviceInfo"></span>

## <span style="color:#A52A2A">__Qth_configSetDeviceInfo__</span>

This function sets device information.

__Prototype__

```c
oprt_ret Qth_configSetDeviceInfo(const char *dk, const char *ds);
```

__Parameter__

* __Input Parameter__
  * __const char *__ __`dk`__: DeviceKey is the customized unique identifier of the device. Cellular modules use IMEI as the default identifier, whereas wireless modules, such as Wi-Fi module, use MAC address. Maximum length: 16 bytes. If this parameter is set to an empty string, this function will delete the customized DK and DS, and use the default configurations. In that case, the device needs to be re-authenticated by Developer Center.
  * __const char *__ __`ds`__: DeviceSecret generated after device authentication. The length is fixed to 32 bytes. Only when DeviceKey is set to a non-empty and non-default value, setting  DeviceSecret is allowed. This parameter can be NULL, which means the default DeviceSecret is not set.
* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
Qth_configSetDeviceInfo("202305091054", NULL);
```
---

<span id="Qth_configGetDeviceInfo"></span>
## <span style="color:#A52A2A">__Qth_configGetDeviceInfo__</span>

This function gets the device information.

__Prototype__

```c
oprt_ret Qth_configGetDeviceInfo(char *dk, char *ds);
```

__Parameter__

* __Input Parameter__
  * None
* __Output Parameter__
  * __char *__ __`dk`__: The unique identifier of the device.
  * __char *__ __`ds`__: DeviceSecret generated after device authentication.

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
char dk[QTH_DK_MAXSIZE + 1] = {0};
char ds[QTH_DS_MAXSIZE + 1] = {0};

Qth_configGetDeviceInfo(dk, ds);
```
---

<span id="Qth_configSetODOSInfo"></span>
## <span style="color:#A52A2A">__Qth_configSetODOSInfo__</span>

This function sets unique-DeviceSecret-per-device authentication information.

__Prototype__

```c
oprt_ret Qth_configSetODOSInfo(const char *pk, const char *ps, const char *dk, const char *ds);
```

__Parameter__

* __Input Parameter__
  * __const char *__ __`pk`__: ProductKey generated when you create the product on Developer Center.
  * __const char *__ __`ps`__: ProductSecret generated when you create the product on Developer Center.
  * __const char *__ __`dk`__: String type. The unique identifier of the device. Range: 4–32 bytes.
  * __const char *__ __`ds`__: String type. DeviceSecret generated after device authentication, with a fixed length of 32 bytes.

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
Qth_configSetODOSInfo("p11rbd", "VDcydF****52VFVq", "12345678abcd", "ca13ecbfaf92********12d372b38711");
```
---

<span id="Qth_configGetAuthType"></span>
## <span style="color:#A52A2A">__Qth_configGetAuthType__</span>

This function gets the device authentication type.

__Prototype__

```c
oprt_ret Qth_configGetAuthType(Qth_authType_e *type);
```

__Parameter__

* __Input Parameter__
  
  * None
* __Output Parameter__
  * __Qth_authType_e *__ __`type`__：Device authentication type.
    | Value             | Description                                     |
    | ----------------- | ----------------------------------------------- |
    | QTH_AUTHTYPE_OTOS | Unique-ProductSecret-per-product authentication |
    | QTH_AUTHTYPE_ODOS | Unique-DeviceSecret-per-device authentication   |

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
Qth_authType_e type = 0;

Qth_configGetAuthType(&type);
```
---

<span id="Qth_configSetServer"></span>
## <span style="color:#A52A2A">__Qth_configSetServer__</span>

This function sets server URL and default IP address.

__Prototype__

```c
oprt_ret Qth_configSetServer(const char *url, const char *ip);
```

__Parameter__ 

- __Input Parameter__
  - __const char *__ __`url`__: Server URL. Optional. Default value: `mqtts://iot-south.quectelcn.com:8883`. The default value is used if this parameter is not set. 

| Region           | Server URL                           |
| ---------------- | ------------------------------------ |
| China (Non-SSL)  | mqtt://iot-south.quectelcn.com:1883  |
| China (SSL)      | mqtts://iot-south.quectelcn.com:8883 |
| Europe (Non-SSL) | mqtt://iot-south.acceleronix.io:1883  |
| Europe (SSL)     | mqtts://iot-south.acceleronix.io:8883 |

  * __const char *__ __`ip`__: Default server IP address. If you set a default IP address, it will be used first to log in to the server. If the login failed, the IP address will be obtained through DNS.

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
Qth_configSetServer("mqtts://iot-south.quectelcn.com:8883", NULL);
```
---

<span id="Qth_configGetServer"></span>
## <span style="color:#A52A2A">__Qth_configGetServer__</span>

This function gets the server URL and default IP address.

__Prototype__

```c
oprt_ret Qth_configGetServer(char *url, char *ip);
```

__Parameter__

* __Input Parameter__
  * None
* __Output Parameter__
  * __char *__ __`url`__: Server URL.
  * __char *__ __`ip`__: Default server IP address. 

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
char url[QTH_DNS_HOSTNANE_MAX_LENGHT + 1] = {0};
char ip[QTH_IP_ADDR_MAX_LEN + 1] = {0};

Qth_configGetServer(url, ip);
```
---

<span id="Qth_configSetLifetime"></span>
## <span style="color:#A52A2A">__Qth_configSetLifetime__</span>

This function sets MQTT keep alive interval.

__Prototype__

```c
oprt_ret Qth_configSetLifetime(quint32_t lifetime);
```

__Parameter__

* __Input Parameter__
  * __quint32_t__ __`lifetime`__: Keep alive interval of the MQTT connection. Range: 1–600. Default value: 120. Unit: second.

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
Qth_configSetLifetime(120);
```
---

<span id="Qth_configGetLifetime"></span>
## <span style="color:#A52A2A">__Qth_configGetLifetime__</span>

This function gets the MQTT keep alive interval.

__Prototype__

```c
oprt_ret Qth_configGetLifetime(quint32_t *lifetime);
```

__Parameter__

* __Input Parameter__
  * None
* __Output Parameter__
  * __quint32_t *__ __`lifetime`__: Keep alive interval of the MQTT connection. Unit: second.

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
quint32_t lifetime = 0;

Qth_configGetLifetime(&lifetime);
```
---

<span id="Qth_configSetEventCb"></span>
## <span style="color:#A52A2A">__Qth_configSetEventCb__</span>

This function sets user event callback function.

__Prototype__

```c
oprt_ret Qth_configSetEventCb(Qth_eventCb_t cb);
```

__Parameter__

* __Input Parameter__

  * __Qth_eventCb_t__ __`cb`__: User event callback function.

    * __Qth_devEventCb_f__ __`devEventCb`__: Device event callback function.

      * __Prototype__

        ```c
        void (*Qth_devEventCb_f)(Qth_devEvent_e event, oprt_ret result);
        ```

      * __Input Parameter__

        * __Qth_devEvent_e__ __`event`__: Event type.

          | Value                      | Description                 |
          | -------------------------- | --------------------------- |
          | QTH_DEV_EVENT_WIFI_CONFIG  | Network provisioning event. |
          | QTH_DEV_EVENT_WIFI_CONNECT | Router connection event.    |
          | QTH_DEV_EVENT_DMP_CONNECT  | Platform connection event.  |
          | QTH_DEV_EVENT_RESET        | Device reset event.         |
          | QTH_DEV_EVENT_REMOVE       | Device deletion event.      |
          | QTH_DEV_EVENT_SLIENT       | Idle mode event.            |

        * __oprt_ret__ __`result`__: Event code. See [Error Code List](#ERROR_CODE) for details.

    * __Qth_ttlvRecvCb_f__ __`ttlvRecvCb`__: Callback function of receiving TTLV data.

      * __Prototype__

        ```c
        void (*Qth_ttlvRecvCb_f)(void *ttlvHead);
        ```

      * __Input Parameter__

        * __void *__ __`ttlvHead`__: TSL data in TTLV format.

    * __Qth_ttlvReqCb_f__ __`ttlvReqCb`__: Callback function of requesting TTLV data.

      * __Prototype__

        ```c
        void *(*Qth_ttlvReqCb_f)(quint16_t id[], quint32_t idNum);
        ```

      * __Input Parameter__

        * __quint16_t__ __`id`__: Array of TSL IDs to be read.
        * __quint32_t__ __`idNum`__: Number of TSL IDs to be read.

    * __Qth_transRecvCb_f__ __`transRecvCb`__: Callback function of receiving transparent transmission data.

      * __Prototype__

        ```c
        void (*Qth_transRecvCb_f)(quint8_t *value, quint32_t valLen);
        ```

      * __Input Parameter__

        * __quint8_t *__ __`value`__: Transparent transmission data issued by Developer Center.
        * __quint32_t__ __`valLen`__: Length of transparent transmission data issued by Developer Center.

    * __Qth_otaEventCb_t__ __`otaEventCb`__: Callback function of receiving OTA upgrade events.

      * __Qth_otaPlanCb_f__ __`planCb`__: Callback function of issuing OTA upgrade plans (Old). The return value indicates the OTA upgrade plan confirmation result.

        * __Prototype__

          ```c
          qbool (*Qth_otaPlanCb_f)(Qth_otaPlan_t *planList, quint16_t count);
          ```

        * __Input Parameter__

          * __Qth_otaPlan_t *__ __`planList`__: Component OTA upgrade plan issued by Developer Center.
          * __quint16_t__ __`count`__: Number of components in the OTA upgrade plan issued by Developer Center.

        * __Return Value__

          * `TRUE`: The device accepts the OTA upgrade plan.
          * `FALSE`: The device rejects the OTA upgrade plan.

      * __Qth_otaPlanExCb_f__ __`planExCb`__: Callback function of issuing OTA upgrade plans (Old). Call *Qth_otaPlanConfirm()* to confirm the OTA upgrade plan.

        * __Prototype__

          ```c
          void (*Qth_otaPlanExCb_f)(Qth_otaPlan_t *planList, quint16_t count);
          ```

        * __Input Parameter__

          * __Qth_otaPlan_t *__ __`planList`__: OTA upgrade plan of components issued by Developer Center.
          * __quint16_t__ __`count`__: Number of components in the OTA upgrade plan issued by Developer Center.

      * __Qth_otaDownloadCb_f__ __`downloadCb`__: Callback function of receiving firmware download progress.

        * __Prototype__

          ```c
          void (*Qth_otaDownloadCb_f)(char *identity, quint8_t percent);
          ```

        * __Input Parameter__

          * __char *__ __`identity`__: Component ID.
          * __quint8_t__ __`percent`__: Firmware download progress. Range: 0–100. Unit: percentage.

      * __Qth_otaResultCb_f__ __`resultCb`__: Callback function of receiving OTA upgrade result.

        * __Prototype__

          ```c
          void (*Qth_otaResultCb_f)(char *identity, qbool result);
          ```

        * __Input Parameter__

          * __char *__ __`identity`__: Component ID.
          * __qbool__ __`result`__: OTA upgrade result.

      * __Qth_sotaInfoCb_f__ __`sotaInfoCb`__: Callback function of receiving SOTA upgrade firmware.

        * __Prototype__

          ```c
          qbool (*Qth_sotaInfoCb_f)(char *identity, Qth_otaInfo_t *info, Qth_otaDownType_e *type);
          ```

        * __Input Parameter__

          * __char *__ __`identity`__: Component ID.
          * __Qth_otaInfo_t *__ __`info`__: Firmware information of the SOTA upgrade.

        * __Output Parameter__

          * __Qth_otaDownType_e *__ __`type`__: Download type of SOTA upgrades.

            | Value                     | Description                                                 |
            | ------------------------- | ----------------------------------------------------------- |
            | QTH_SOTA_DOWN_TYPE_MODULE | The module downloads the MCU firmware for the external MCU. |
            | QTH_SOTA_DOWN_TYPE_MCU    | The MCU downloads the MCU firmware by itself.               |

        * __Return Value__

          * `TRUE`: The device accepts the OTA upgrade plan.
          * `FALSE`: The device rejects the OTA upgrade plan.

      * __Qth_sotaFileCb_f__ __`sotaFileCb`__: Callback function of issuing SOTA upgrade files.

        * __Prototype__

          ```c
          qbool (*Qth_sotaFileCb_f)(char *identity, quint32_t offset, quint8_t *data, quint32_t dataLen);
          ```

        * __Input Parameter__

          * __char *__ __`identity`__: Component ID.
          * __quint32_t__ __`offset`__: Offset of the firmware block.
          * __quint8_t *__ __`data`__: Content of the firmware block.
          * __quint32_t__ __`dataLen`__: Size of the firmware block.

        * __Return Value__

          * `TRUE`: File saved successfully
          * `FALSE`: File saving failed

- __Return Value__
  - `OPRT_OK`: Successful execution
  - Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
void devEventCb(Qth_devEvent_e event, oprt_ret result)
{
    /* do something */
}
void ttlvRecvCb(void *ttlvHead)
{
    /* do something */
}
void *ttlvReqCb(quint16_t id[], quint32_t idNum)
{
    /* do something */
}
void transRecvCb(quint8_t *value, quint32_t valLen)
{
    /* do something */
}
qbool otaPlanCb(Qth_otaPlan_t *planList, quint16_t count)
{
    /* do something */
}
void otaDownloadCb(char *identity, quint8_t percent)
{
    /* do something */
}
void otaResultCb(char *identity, qbool result)
{
    /* do something */
}
qbool sotaInfoCb(char *identity, Qth_otaInfo_t *info, Qth_otaDownType_e *type)
{
    /* do something */
}
qbool sotaFileCb(char *identity, quint32_t offset, quint8_t *data, quint32_t dataLen)
{
    /* do something */
}
otaCb.planCb = otaPlanCb;
otaCb.downloadCb = otaDownloadCb;
otaCb.resultCb = otaResultCb;
otaCb.sotaInfoCb = sotaInfoCb;
otaCb.sotaFileCb = sotaFileCb;
event_cb.devEventCb = devEventCb;
event_cb.ttlvRecvCb = ttlvRecvCb;
event_cb.ttlvReqCb = ttlvReqCb;
event_cb.transRecvCb = transRecvCb;
event_cb.otaEventCb = otaCb;
Qth_configSetEventCb(event_cb);
```
---

<span id="Qth_configGetEventCb"></span>
## <span style="color:#A52A2A">__Qth_configGetEventCb__</span>

This function gets the user event callback function.

__Prototype__

```c
oprt_ret Qth_configGetEventCb(Qth_eventCb_t *cb);
```

__Parameter__

* __Input Parameter__
  * None
* __Output Parameter__
  * __Qth_eventCb_t *__ __`cb`__：User event callback function.

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example of Invocation__

```c
Qth_eventCb_t userEventCb = {0};
Qth_configGetEventCb(&userEventCb);
```
---

<span id="Qth_configSetModuleVer"></span>
## <span style="color:#A52A2A">__Qth_configSetModuleVer__</span>

This function sets module's version number.

__Prototype__

```c
oprt_ret Qth_configSetModuleVer(char *version);
```

__Parameter__

* __Input Parameter__
  * __char *__ __`version`__: Module's version number for FOTA upgrades.

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example of Invocation__

```c
Qth_configSetModuleVer("0.0.1");
```
---

<span id="Qth_configGetModuleVer"></span>
## <span style="color:#A52A2A">__Qth_configGetModuleVer__</span>

This function gets the module's version number.

__Prototype__

```c
oprt_ret Qth_configGetModuleVer(char **version);
```

__Parameter__

* __Output Parameter__
  * __char *__ __`version`__: Module's version number.

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example of Invocation__

```c
char *moduleVer = NULL;

Qth_configGetModuleVer(&moduleVer);
```
---

<span id="Qth_configSetMcuVer"></span>
## <span style="color:#A52A2A">__Qth_configSetMcuVer__</span>

This function sets MCU version number.

__Prototype__

```c
oprt_ret Qth_configSetMcuVer(Qth_mcuInfo_t *mcuList, quint16_t count);
```

__Parameter__

* __Input Parameter__
  * __Qth_mcuInfo_t *__ __`mcuList`__: List of MCUs.
    * __char *__ __`identity`__: MCU component ID.
    * __char *__ __`version`__: MCU component version. 
  * __quint16_t__ __`count`__: Number of MCUs.

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example of Invocation__

```c
Qth_mcuInfo_t mcuList[2] = {0};
Quos_strcpy(mcuList[0].identity, "MCU1");
Quos_strcpy(mcuList[0].version, "0.0.5");
Quos_strcpy(mcuList[1].identity, "MCU2");
Quos_strcpy(mcuList[1].version, "0.0.6");
Qth_configSetMcuVer(mcuList, sizeof(mcuList) / sizeof(Qth_mcuInfo_t));
```

---

<span id="Qth_configGetMcuVer"></span>
## <span style="color:#A52A2A">__Qth_configGetMcuVer__</span>

This function gets the MCU version number.

__Prototype__

```c
oprt_ret Qth_configGetMcuVer(Qth_mcuInfo_t **mcuList, quint16_t *count, char **mcuVer);
```

__Parameter__

* __Output Parameter__
  * __Qth_mcuInfo_t *__ __`mcuList`__: List of MCUs.
    * __char *__ __`identity`__: MCU component ID.
    * __char *__ __`version`__: MCU component version. 
  * __quint16_t *__ __`count`__: Number of MCUs.
  * __char *__ __`mcuVer`__: String type. MCU version number.

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
Qth_mcuInfo_t *mcuList = NULL;
quint16_t mcuCount = 0;
char *mcuVer = NULL;

Qth_configGetMcuVer(&mcuList, &mcuCount, &mcuVer);
```
---

<span id="Qth_configSetWifiInfo"></span>
## <span style="color:#A52A2A">__Qth_configSetWifiInfo__</span>

This function sets Wi-Fi information.

__Prototype__

```c
oprt_ret Qth_configSetWifiInfo(const char *ssid, const char *pwd);
```

__Parameter__

* __Input Parameter__
  * __const char *__ __`ssid`__: Wi-Fi SSID.
  * __const char *__ __`pwd`__: Wi-Fi password. If the password is empty, use "".

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
Qth_configSetWifiInfo("xxxxxxxx", "xxxxxxxxxxxx");
```
---

<span id="Qth_configGetWifiInfo"></span>
## <span style="color:#A52A2A">__Qth_configGetWifiInfo__</span>

This function gets the Wi-Fi information.

__Prototype__

```c
oprt_ret Qth_configGetWifiInfo(char *ssid, char *pwd);
```

__Parameter__

* __Output Parameter__
  * __char *__ __`ssid`__: Wi-Fi SSID.
  * __char *__ __`pwd`__: Wi-Fi password.

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
char ssid[QTH_WIFI_SSID_MAXSIZE + 1] = {0};
char pwd[QTH_WIFI_PWD_MAXSIZE + 1] = {0};

Qth_configGetWifiInfo(ssid, pwd);
```
---

<span id="Qth_configClearWifiInfo"></span>
## <span style="color:#A52A2A">__Qth_configClearWifiInfo__</span>

This function clears Wi-Fi information.

__Prototype__

```c
oprt_ret Qth_configClearWifiInfo();
```

__Parameter__

* __Input Parameter__
  * None

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
Qth_configClearWifiInfo();
```
---

<span id="Qth_configSetNetcfgMode"></span>
## <span style="color:#A52A2A">__Qth_configSetNetcfgMode__</span>

This function sets Wi-Fi network provisioning mode.

__Prototype__

```c
oprt_ret Qth_configSetNetcfgMode(qbool enable, quint16_t timeout);
```

__Parameter__

* __Input Parameter__
  * __qbool__ __`enable`__: If Wi-Fi information is not saved, enable the network provisioning.
  * __quint16_t__ __`timeout`__: Network provisioning timeout. Range: 180–600 or 0xffff (permanent). Default value: 300. Unit: second. When this parameter is set to 0xffff (permanent), the device will remain in the network provisioning mode until the network provisioning is successful.

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
Qth_configSetNetcfgMode(TRUE, 300);
```
---

<span id="Qth_configGetNetcfgMode"></span>
## <span style="color:#A52A2A">__Qth_configGetNetcfgMode__</span>

This function gets the Wi-Fi network provisioning mode.

__Prototype__

```c
oprt_ret Qth_configGetNetcfgMode(qbool *enable, quint16_t *timeout);
```

__Parameter__ 

- __Output Parameter__
  - __qbool *__ __`enable`__: If Wi-Fi information is not saved, enable the network provisioning.
  - __quint16_t *__ __`timeout`__: Network provisioning timeout. Range: 180–600. Unit: second.

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
qbool enable = FALSE;
quint16_t timeout = 0;

Qth_configGetNetcfgMode(&enable, &timeout);
```
---

<span id="ERROR_CODE">  </span>

## **Error Code List**
| Enumeration Value                     | Hexadecimal | Decimal | Description                       |
| ------------------------------------- | ----------- | ------- | --------------------------------- |
| OPRT_OK                               | -0x0000     | -0      | Successful execution.             |
| OPRT_COM_ERROR                        | -0x0001     | -1      | General error.                    |
| OPRT_INVALID_PARM                     | -0x0002     | -2      | Invalid parameter.                |
| OPRT_MALLOC_FAILED                    | -0x0003     | -3      | Memory allocation failed.         |
| OPRT_NOT_SUPPORTED                    | -0x0004     | -4      | Not supported.                    |
| OPRT_NOT_FOUND                        | -0x0005     | -5      | Object not found.                 |
| OPRT_INDEX_OUT_OF_BOUND               | -0x0006     | -6      | Index out of bounds.              |
| OPRT_EXCEED_UPPER_LIMIT               | -0x0007     | -7      | Exceed upper limit.               |
| OPRT_NOT_EXIST                        | -0x0008     | -8      | Not exist.                        |
| OPRT_QTH_CONFIG_READ_FAILED           | -0x1000     | -4096   | Reading failed.                   |
| OPRT_QTH_CONFIG_WRITE_FAILED          | -0x1001     | -4097   | Writing failed.                   |
| OPRT_QTH_CONFIG_SET_DEVINFO_FAILED    | -0x1002     | -4098   | Failed to set device information. |
| OPRT_QTH_CONFIG_APPVER_STRDUMP_FAILED | -0x1003     | -4099   | Failed to set App version.        |
| OPRT_QTH_CONFIG_DK_FORMT_FAILED       | -0x1004     | -4100   | Failed to set DeviceKey format.   |
| OPRT_QTH_CONFIG_MAC_GET_FAILED        | -0x1005     | -4101   | Failed to get device MAC address. |