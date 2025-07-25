# Gateway Sub-device API

## **API Overview**

|                    Function                     |                                           Description                                            |
| :---------------------------------------------: | :----------------------------------------------------------------------------------------------: |
| [Qth_subDevSetEventCb()](#Qth_subDevSetEventCb) | Registers the callback function of the interaction event between the sub-device and the gateway. |
|       [Qth_subDevConn()](#Qth_subDevConn)       |                               Connects the sub-device to gateway.                                |
|    [Qth_subDevDisconn()](#Qth_subDevDisconn)    |                           Disconnects the sub-device from the gateway.                           |
|     [Qth_subDevDeauth()](#Qth_subDevDeauth)     |                                     Deletes the sub-device.                                      |
|    [Qth_subDevSendTsl()](#Qth_subDevSendTsl)    |                      Sends TSL data of the sub-device to Developer Center.                       |
|  [Qth_subDevSendTrans()](#Qth_subDevSendTrans)  |            Sends transparent transmission data of the sub-device to Developer Center.            |
|  [Qth_subDevLocReport()](#Qth_subDevLocReport)  |                    Sends location data of the sub-device to Developer Center.                    |
|  [Qth_subOtaUpdateVer()](#Qth_subOtaUpdateVer)  |                              Reports the sub-device version number.                              |
|        [Qth_subOtaReq()](#Qth_subOtaReq)        |                             Requests a sub-device OTA upgrade plan.                              |

## **API Description**

<span id="Qth_subDevSetEventCb"></span>
## <span style="color:#A52A2A">__Qth_subDevSetEventCb__</span>

This function registers the callback function of the interaction event between the sub-device and the gateway.

__Prototype__

```c
oprt_ret Qth_subDevSetEventCb(Qth_subEventCb_t cb);
```

__Parameter__

* __Input Parameter__
  * __Qth_subEventCb_t__ __`cb`__: Callback function of the interaction event between the sub-device and the gateway.
    * __Qth_subDevEventCb_f__ __`devEventCb`__: Callback function of sub-device events.
      * __Prototype__
        ```c
        void (*Qth_subDevEventCb_f)(const char *subPk, const char *subDk, const char *subDs, Qth_subDevEvent_e event, oprt_ret result);
        ```
      * __Input Parameter__
        * __const char *__ __`subPk`__: ProductKey of the sub-device.
        * __const char *__ __`subDk`__: DeviceKey of the sub-device.
        * __const char *__ __`subDs`__: DeviceSecret of the sub-device.
        * __Qth_devEvent_e__ __`event`__: Event type.
            | Value                    | Description                       |
            | ------------------------ | --------------------------------- |
            | QTH_SUBDEV_EVENT_AUTH    | Sub-device registration event.    |
            | QTH_SUBDEV_EVENT_LOGIN   | Sub-device login event.           |
            | QTH_SUBDEV_EVENT_LOGOUT  | Sub-device logout event.          |
            | QTH_SUBDEV_EVENT_UNAUTH  | Sub-device de-registration event. |
            | QTH_SUBDEV_EVENT_OFFLINE | Sub-device offline event.         |
            | QTH_SUBDEV_EVENT_RESET   | Sub-device reset event.           |
        * __oprt_ret__ __`result`__: Event code. See [Error Code List](#ERROR_CODE) for details.
    * __Qth_subTtlvRecvCb_f__ __`ttlvRecvCb`__: Callback function of receiving TSL data of the sub-device.
      * __Prototype__
        ```c
        void (*Qth_subTtlvRecvCb_f)(const char *subPk, const char *subDk, void *ttlvHead);
        ```
      * __Input Parameter__
        * __const char *__ __`subPk`__: ProductKey of the sub-device.
        * __const char *__ __`subDk`__: DeviceKey of the sub-device.
        * __void *__ __`ttlvHead`__: TSL data in TTLV format.
    * __Qth_subTtlvReqCb_f__ __`ttlvReqCb`__: Callback function of reading TSL data of the sub-device.
      * __Prototype__
        ```c
        void *(*Qth_subTtlvReqCb_f)(const char *subPk, const char *subDk, quint16_t id[], quint32_t idNum);
        ```
      * __Input Parameter__
        * __const char *__ __`subPk`__: ProductKey of the sub-device.
        * __const char *__ __`subDk`__: DeviceKey of the sub-device.
        * __quint16_t__ __`id`__: Array of TSL IDs read.
        * __quint32_t__ __`idNum`__: Number of TSL IDs read.
    * __Qth_subTransRecvCb_f__ __`transRecvCb`__: Callback function of receiving transparent transmission data of the sub-device.
      * __Prototype__
        ```c
        void (*Qth_subTransRecvCb_f)(const char *subPk, const char *subDk, quint8_t *value, quint32_t valLen);
        ```
      * __Input Parameter__
        * __const char *__ __`subPk`__: ProductKey of the sub-device.
        * __const char *__ __`subDk`__: DeviceKey of the sub-device.
        * __quint8_t *__ __`value`__: Transparent transmission data issued by Developer Center.
        * __quint32_t__ __`valLen`__: Length of the transparent transmission data issued by Developer Center.
    * __Qth_subOtaCb_t__ __`otaEventCb`__: Callback function of receiving OTA upgrade events of the sub-device.
      * __Qth_subOtaPlanCb_f__ __`planCb`__: Callback function of issuing OTA upgrade plans of the sub-device (Old). The return value indicates the OTA upgrade plan confirmation result.
        * __Prototype__
          ```c
          qbool (*Qth_subOtaPlanCb_f)(const char *subPk, const char *subDk, Qth_otaPlan_t *planList, quint16_t count);
          ```
        * __Input Parameter__
          * __const char *__ __`subPk`__: ProductKey of the sub-device.
          * __const char *__ __`subDk`__: DeviceKey of the sub-device.
          * __Qth_otaPlan_t *__ __`planList`__: Component OTA upgrade plan issued by Developer Center.
          * __quint16_t__ __`count`__: Number of components in the OTA upgrade plan issued by Developer Center.
        * __Return Value__
          * `TRUE`: The device accepts the OTA upgrade plan.
          * `FALSE`: The device rejects the OTA upgrade plan.
      * __Qth_subOtaPlanExCb_f__ __`planExCb`__: Callback function of issuing OTA upgrade plans of the sub-device (New). Call *Qth_otaPlanConfirm()* to confirm the OTA upgrade plan.
        * __Prototype__
          ```c
          void (*Qth_subOtaPlanExCb_f)(const char *subPk, const char *subDk, Qth_otaPlan_t *planList, quint16_t count);
          ```
        * __Input Parameter__
          * __const char *__ __`subPk`__: ProductKey of the sub-device.
          * __const char *__ __`subDk`__: DeviceKey of the sub-device.
          * __Qth_otaPlan_t *__ __`planList`__: Component OTA upgrade plan issued by Developer Center.
          * __quint16_t__ __`count`__: Number of components in the OTA upgrade plan issued by Developer Center.
      * __Qth_subOtaDownloadCb_f__ __`downloadCb`__: Callback function of receiving firmware download progress.
        * __Prototype__
          ```c
          void (*Qth_subOtaDownloadCb_f)(const char *subPk, const char *subDk, char *identity, quint8_t percent);
          ```
        * __Input Parameter__
          * __const char *__ __`subPk`__: ProductKey of the sub-device.
          * __const char *__ __`subDk`__: DeviceKey of the sub-device.
          * __char *__ __`identity`__: Component ID.
          * __quint8_t__ __`percent`__: Firmware download progress. Range: 0–100. Unit: percentage.
      * __Qth_subOtaResultCb_f__ __`resultCb`__: Callback function of receiving OTA upgrade result.
        * __Prototype__
          ```c
          void (*Qth_subOtaResultCb_f)(const char *subPk, const char *subDk, char *identity, qbool result);
          ```
        * __Input Parameter__
          * __const char *__ __`subPk`__: ProductKey of the sub-device.
          * __const char *__ __`subDk`__: DeviceKey of the sub-device.
          * __char *__ __`identity`__: Component ID.
          * __qbool__ __`result`__: OTA upgrade result.
      * __Qth_subOtaInfoCb_f__ __`infoCb`__: Callback function of receiving OTA upgrade firmware of the sub-device.
        * __Prototype__
          ```c
          qbool (*Qth_subOtaInfoCb_f)(const char *subPk, const char *subDk, char *identity, Qth_otaInfo_t *info, Qth_otaDownType_e *type);
          ```
        * __Input Parameter__
          * __const char *__ __`subPk`__: ProductKey of the sub-device.
          * __const char *__ __`subDk`__: DeviceKey of the sub-device.
          * __char *__ __`identity`__: Component ID.
          * __Qth_otaInfo_t *__ __`info`__: Firmware information of the OTA upgrade.
        * __Output Parameter__
          * __Qth_otaDownType_e *__ __`type`__: Download type of SOTA upgrades.
            | Value                     | Description                                                 |
            | ------------------------- | ----------------------------------------------------------- |
            | QTH_SOTA_DOWN_TYPE_MODULE | The module downloads the MCU firmware for the external MCU. |
            | QTH_SOTA_DOWN_TYPE_MCU    | The MCU downloads the MCU firmware by itself.               |
        * __Return Value__
          * `TRUE`: The device accepts the OTA upgrade plan.
          * `FALSE`: The device rejects the OTA upgrade plan.
      * __Qth_subOtaFileCb_f__ __`fileCb`__: Callback function of issuing OTA upgrade files of the sub-device.
        * __Prototype__
          ```c
          qbool (*Qth_subOtaFileCb_f)(const char *subPk, const char *subDk, char *identity, quint32_t offset, quint8_t *data, quint32_t dataLen);
          ```
        * __Input Parameter__
          * __const char *__ __`subPk`__: ProductKey of the sub-device.
          * __const char *__ __`subDk`__: DeviceKey of the sub-device.
          * __char *__ __`identity`__: Component ID.
          * __quint32_t__ __`offset`__: Offset of the firmware block.
          * __quint8_t *__ __`data`__: Content of the firmware block.
          * __quint32_t__ __`dataLen`__: Size of the firmware block.
        * __Return Value__
          * `TRUE`: File saved successfully
          * `FALSE`: File saving failed

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
    Qth_subEventCb_t subEventCb = {0};
    Qth_subOtaCb_t subOtaCb = {0};
    subOtaCb.planCb = subOtaPlanCb;
    subOtaCb.downloadCb = subOtaDownloadCb;
    subOtaCb.resultCb = subOtaResultCb;
    subOtaCb.infoCb = subOtaInfoCb;
    subOtaCb.fileCb = subOtaFileCb;
    subEventCb.devEventCb = subDevEventCb;
    subEventCb.ttlvRecvCb = subTtlvRecvCb;
    subEventCb.ttlvReqCb = subTtlvReqCb;
    subEventCb.transRecvCb = subTransRecvCb;
    subEventCb.otaEventCb = subOtaCb;
    Qth_subDevSetEventCb(subEventCb);
```
---

<span id="Qth_subDevConn"></span>
## <span style="color:#A52A2A">__Qth_subDevConn__</span>

This function connects a sub-device to a gateway or authenticates a sub-device. The sub-device should be authenticated when the sub-device connects to Developer Center for the first time, so you can set DeviceSecret of the sub-device to NULL. After the sub-device has been authenticated successfully, the DeviceSecret should be specified and saved for subsequent connections.

__Prototype__

```c
oprt_ret Qth_subDevConn(const char *subPk, const char *subPs, const char *subDk, const char *subDs);
```

__Parameter__

* __Input Parameter__
  * __const char *__ __`subPk`__: ProductKey of the sub-device.
  * __const char *__ __`subPs`__: ProductSecret of the sub-device.
  * __const char *__ __`subDk`__: DeviceKey of the sub-device.
  * __const char *__ __`subDs`__: DeviceSecret of the sub-device.

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
void subDevEventCb(const char *subPk, const char *subDk, const char *subDs, Qth_subDevEvent_e event, oprt_ret result)
{
    switch (event)
    {
    case QTH_SUBDEV_EVENT_LOGIN:
        Quos_logPrintf(APPS_OPEN, LL_DBG, "subPk:%s,subDk:%s,subDs:%s", subPk, subDk, subDs);
    break;
    }
}
/* Authenticate the sub-device. */
Qth_subDevConn("xxxxxx", "xxxxxxxxxxxxxxxx", "1234567890", NULL);
/* Connect the sub-device to the gateway. */
Qth_subDevConn("xxxxxx", "xxxxxxxxxxxxxxxx", "1234567890", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
```
---

<span id="Qth_subDevDisconn"></span>
## <span style="color:#A52A2A">__Qth_subDevDisconn__</span>

This function disconnects the sub-device from the gateway.

__Prototype__

```c
oprt_ret Qth_subDevDisconn(const char *subPk, const char *subDk);
```

__Parameter__

* __Input Parameter__
  * __const char *__ __`subPk`__: ProductKey of the sub-device.
  * __const char *__ __`subDk`__: DeviceKey of the sub-device.

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
Qth_subDevDisconn("xxxxxx", "xxxxxxxxxxxxxxxx");
```
---

<span id="Qth_subDevDeauth"></span>
## <span style="color:#A52A2A">__Qth_subDevDeauth__</span>

This function deletes the sub-device.

__Prototype__

```c
oprt_ret Qth_subDevDeauth(const char *subPk, const char *subPs, const char *subDk, const char *subDs);
```

__Parameter__

* __Input Parameter__
  * __const char *__ __`subPk`__: ProductKey of the sub-device.
  * __const char *__ __`subPs`__: ProductSecret of the sub-device.
  * __const char *__ __`subDk`__: DeviceKey of the sub-device.
  * __const char *__ __`subDs`__: DeviceSecret of the sub-device.

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
Qth_subDevDeauth("xxxxxx", "xxxxxxxxxxxxxxxx", "1234567890", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
```
---

<span id="Qth_subDevSendTsl"></span>
## <span style="color:#A52A2A">__Qth_subDevSendTsl__</span>

This function sends TSL data of sub-device to Developer Center.

__Prototype__

```c
oprt_ret Qth_subDevSendTsl(const char *subPk, const char *subDk, Qth_sendMode_e mode, void *ttlvHead, quint16_t *pkgId, Qth_sendCb_f sendCb);
```

__Parameter__

* __Input Parameter__
  * __const char *__ __`subPk`__: ProductKey of the sub-device.
  * __const char *__ __`subDk`__: DeviceKey of the sub-device.
  * __Qth_sendMode_e__ __`mode`__: Data sending mode.

    | Value                  | Description                                                                                                                               |
    | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
    | QTH_SEND_AT_MOST_ONCE  | Each message is only sent once with no confirmation or resending required. Data loss or repetition may occur.                             |
    | QTH_SEND_AT_LEAST_ONCE | Each message is sent at least once until the device receives the reception confirmation from Developer Center. Data repetition may occur. |
    | QTH_SEND_EXACTLY_ONCE  | Each message is only sent once by Developer Center and only received once by the receiver, with no data loss or repetition.               |
  * __void *__ __`ttlvHead`__: TTLV data table.
  * __Qth_sendCb_f__ __`sendCb`__: Callback function of the TSL data sending result.
    * __Prototype__
      ```c
      typedef void (*Qth_sendCb_f)(quint16_t pkgId, qbool result);
      ```
    * __Input Parameter__
      * __quint16_t__ __`pkgId`__: PkgID of the data sent.
      * __qbool__ __`result`__: Data sending result.

* __Output Parameter__
  
* __quint16_t *__ __`pkgId`__: PkgID of the data sent.
  
* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
void sendCb(quint16_t pkgId, qbool result)
{
    Quos_logPrintf(APPS_OPEN, LL_DBG, "recv send event, pkgId:%u, result:%d", pkgId, result);
}


void *ttlvHead = NULL;
quint16_t pkgId = 0;
oprt_ret ret = 0;
Quos_ttlvAddIdBool(&ttlvHead, 1, TRUE);
ret = Qth_subDevSendTsl("xxxxxx", "xxxxxxxxxxxxxxxx", QTH_SEND_AT_LEAST_ONCE, ttlvHead, &pkgId, sendCb);
Quos_logPrintf(APPS_OPEN, LL_DBG, "subdev tsl send ret:%d pkgId:%d", ret, pkgId);
```
---

<span id="Qth_subDevSendTrans"></span>
## <span style="color:#A52A2A">__Qth_subDevSendTrans__</span>

This function sends transparent transmission data of the sub-device to Developer Center.

__Prototype__

```c
oprt_ret Qth_subDevSendTrans(const char *subPk, const char *subDk, Qth_sendMode_e mode, quint8_t *value, quint32_t valLen, quint16_t *pkgId, Qth_sendCb_f sendCb);
```

__Parameter__

* __Input Parameter__
  * __const char *__ __`subPk`__: ProductKey of the sub-device.
  * __const char *__ __`subDk`__: DeviceKey of the sub-device.
  * __Qth_sendMode_e__ __`mode`__: Data sending mode.

    | Value                  | Description                                                                                                                               |
    | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
    | QTH_SEND_AT_MOST_ONCE  | Each message is only sent once with no confirmation or resending required. Data loss or repetition may occur.                             |
    | QTH_SEND_AT_LEAST_ONCE | Each message is sent at least once until the device receives the reception confirmation from Developer Center. Data repetition may occur. |
    | QTH_SEND_EXACTLY_ONCE  | Each message is only sent once by Developer Center and only received once by the receiver, with no data loss or repetition.               |
  * __quint8_t *__ __`value`__: Transparent transmission data to be sent.
  * __quint32_t__ __`valLen`__: Length of transparent transmission data to be sent.
  * __Qth_sendCb_f__ __`sendCb`__: Callback function of data sending result.
    * __Prototype__
      ```c
      typedef void (*Qth_sendCb_f)(quint16_t pkgId, qbool result);
      ```
    * __Input Parameter__
      * __quint16_t__ __`pkgId`__: PkgID of the data sent.
      * __qbool__ __`result`__: Data sending result.

* __Output Parameter__
  
* __quint16_t *__ __`pkgId`__: PkgID of the data sent.
  
* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
void sendCb(quint16_t pkgId, qbool result)
{
    Quos_logPrintf(APPS_OPEN, LL_DBG, "recv send event, pkgId:%u, result:%d", pkgId, result);
}


quint16_t pkgId = 0;
oprt_ret ret = 0;
ret = Qth_subDevSendTrans("xxxxxx", "xxxxxxxxxxxxxxxx", QTH_SEND_AT_LEAST_ONCE, "hello", 5, &pkgId, sendCb);
Quos_logPrintf(APPS_OPEN, LL_DBG, "subdev Trans send ret:%d pkgId:%d", ret, pkgId);
```
---

<span id="Qth_subDevLocReport"></span>
## <span style="color:#A52A2A">__Qth_subDevLocReport__</span>

This function sends location data of the sub-device to Developer Center.

__Prototype__

```c
oprt_ret Qth_subDevLocReport(const char *subPk, const char *subDk, const char *location, quint16_t *pkgId, Qth_sendCb_f sendCb);
```

__Parameter__

* __Input Parameter__
  * __const char *__ __`subPk`__: ProductKey of the sub-device.
  
  * __const char *__ __`subDk`__: DeviceKey of the sub-device.
  
  * __quint16_t *__ __`location`__: The location data to be sent.
  
  * __Qth_sendCb_f__ __`sendCb`__: Callback function of data sending result.
    * __Prototype__
      ```c
      typedef void (*Qth_sendCb_f)(quint16_t pkgId, qbool result);
      ```
  * __Input Parameter__
      * __quint16_t__ __`pkgId`__: PkgID of the data sent.
      * __qbool__ __`result`__: Data sending result.
  
* __Output Parameter__
  
* __quint16_t *__ __`pkgId`__: PkgID of the data sent.
  
* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
void sendCb(quint16_t pkgId, qbool result)
{
    Quos_logPrintf(APPS_OPEN, LL_DBG, "recv send event, pkgId:%u, result:%d", pkgId, result);
}


quint16_t pkgId = 0;
oprt_ret ret = 0;
ret = Qth_subDevLocReport("xxxxxx", "xxxxxxxxxxxxxxxx", (char *)"$GPGGA,095029.82,3012.5500,N,12012.7273,E,1,8,1.098,42.110,M,,M,,*70", &pkgId, sendCb);
Quos_logPrintf(APPS_OPEN, LL_DBG, "subdev location send ret:%d pkgId:%d", ret, pkgId);
```
---

<span id="Qth_subOtaUpdateVer"></span>
## <span style="color:#A52A2A">__Qth_subOtaUpdateVer__</span>

This function reports the sub-device version number to Developer Center.

__Prototype__

```c
oprt_ret Qth_subOtaUpdateVer(const char *subPk, const char *subDk, const char *subVer);
```

__Parameter__

* __Input Parameter__
  * __const char *__ __`subPk`__: ProductKey of the sub-device.
  * __const char *__ __`subDk`__: DeviceKey of the sub-device.
  * __const char *__ __`subVer`__: Version number of the sub-device.

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
Qth_subOtaUpdateVer("xxxxxx", "xxxxxxxxxxxxxxxx", "1.0.0");
```
---

<span id="Qth_subOtaReq"></span>
## <span style="color:#A52A2A">__Qth_subOtaReq__</span>

This function requests a sub-device OTA upgrade plan. When a sub-device goes online or reports its version number, Developer Center will automatically issue the corresponding OTA plan. If an OTA upgrade is required at other times, the sub-device needs call this function to request an OTA upgrade plan actively.

__Prototype__

```c
oprt_ret Qth_subOtaReq(const char *subPk, const char *subDk);
```

__Parameter__

* __Input Parameter__
  * __const char *__ __`subPk`__: ProductKey of the sub-device.
  * __const char *__ __`subDk`__: DeviceKey of the sub-device.

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
Qth_subOtaReq("xxxxxx", "xxxxxxxxxxxxxxxx");
```
---


<span id="ERROR_CODE">  </span>
## **Error Code List**
| Enumeration Value                | Hexadecimal | Decimal | Description                                                                             |
| -------------------------------- | ----------- | ------- | --------------------------------------------------------------------------------------- |
| OPRT_OK                          | -0x0000     | -0      | Successful execution.                                                                   |
| OPRT_COM_ERROR                   | -0x0001     | -1      | General error.                                                                          |
| OPRT_INVALID_PARM                | -0x0002     | -2      | Invalid parameter.                                                                      |
| OPRT_MALLOC_FAILED               | -0x0003     | -3      | Memory allocation failed.                                                               |
| OPRT_NOT_SUPPORTED               | -0x0004     | -4      | Not supported.                                                                          |
| OPRT_NOT_FOUND                   | -0x0005     | -5      | Object not found.                                                                       |
| OPRT_INDEX_OUT_OF_BOUND          | -0x0006     | -6      | Index out of bounds.                                                                    |
| OPRT_EXCEED_UPPER_LIMIT          | -0x0007     | -7      | Exceed upper limit.                                                                     |
| OPRT_NOT_EXIST                   | -0x0008     | -8      | Not exist.                                                                              |
| OPRT_QTH_DMP_SERVER_ERROR        | -0x1700     | -5888   | Exceptions occurred for some server APIs.                                               |
| OPRT_QTH_DMP_SEND_NOT_ALLOW      | -0x1701     | -5889   | Device messages are limited.                                                            |
| OPRT_QTH_DMP_AUTH_NOT_ALLOW      | -0x1702     | -5890   | The device cannot be activated.                                                         |
| OPRT_QTH_DMP_AUTH_ALREADY        | -0x1703     | -5891   | The device has been authenticated.                                                      |
| OPRT_QTH_DMP_PK_NOT_FOUND        | -0x1704     | -5892   | No product information is found via the ProductKey.                                     |
| OPRT_QTH_DMP_PAYLOAD_INVALID     | -0x1705     | -5893   | Password parsing error.                                                                 |
| OPRT_QTH_DMP_SIGN_ERROR          | -0x1706     | -5894   | Sign error.                                                                             |
| OPRT_QTH_DMP_RAND_ILLEGAL        | -0x1707     | -5895   | Rand is illegal.                                                                        |
| OPRT_QTH_DMP_MISMATCH            | -0x1708     | -5896   | The passed DeviceKey and ProductKey are inconsistent with those stored in the database. |
| OPRT_QTH_DMP_DK_ILLEGAL          | -0x1709     | -5897   | DeviceKey is illegal.                                                                   |
| OPRT_QTH_DMP_FLAG_ILLEGAL        | -0x170a     | -5898   | Flag is illegal.                                                                        |
| OPRT_QTH_DMP_CLIENTID_ERROR      | -0x170b     | -5899   | ClientID is not matched with the password.                                              |
| OPRT_QTH_DMP_DS_ERROR            | -0x170c     | -5900   | DeviceSecret is incorrect.                                                              |
| OPRT_QTH_DMP_DK_NOT_FOUND        | -0x170d     | -5901   | Device information not found.                                                           |
| OPRT_QTH_DMP_SUB_RELATED         | -0x170e     | -5902   | The gateway is not associated with the sub-device.                                      |
| OPRT_QTH_DMP_SUB_CONNECT_ALREADY | -0x170f     | -5903   | The sub-device is already online.                                                       |
| OPRT_QTH_DMP_DEV_OFFLINE         | -0x1710     | -5904   | Device offline.                                                                         |
| OPRT_QTH_DMP_UNKNOWN_ERROR       | -0x1711     | -5905   | Unknown error.                                                                          |
| OPRT_QTH_SUBDEV_OFFLINE          | -0x1d00     | -7424   | Sub-device offline.                                                                     |
| OPRT_QTH_SUBDEV_NODE_NOTFOUND    | -0x1d01     | -7425   | Sub-device not found.                                                                   |
| OPRT_QTH_SUBDEV_PS_NOTFOUNT      | -0x1d02     | -7426   | ProductSecret of the sub-device not found.                                              |
| OPRT_QTH_SUBDEV_DS_NOTFOUNT      | -0x1d03     | -7427   | DeviceSecret of the sub-device not found.                                               |
| OPRT_QTH_SUBDEV_ALREADY_LOGIN    | -0x1d04     | -7428   | Sub-device already logged in.                                                           |
