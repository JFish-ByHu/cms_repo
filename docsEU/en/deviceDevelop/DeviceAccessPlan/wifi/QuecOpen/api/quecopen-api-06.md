# Data Interaction API

## **API Overview**

|                    Function                     |                       Description                        |
| :---------------------------------------------: | :------------------------------------------------------: |
|       [Qth_cmdSendTsl()](#Qth_cmdSendTsl)       |           Sends TSL data to Developer Center.            |
|     [Qth_cmdSendTrans()](#Qth_cmdSendTrans)     | Sends transparent transmission data to Developer Center. |
|   [Qth_wanSendDevInfo()](#Qth_wanSendDevInfo)   |     Reports device information to Developer Center.      |
| [Qth_wanSendDevStatus()](#Qth_wanSendDevStatus) |        Reports device status to Developer Center.        |
|   [Qth_ntpSetResultCb()](#Qth_ntpSetResultCb)   |   Sets callback function of receiving the NTP result.    |
|    [Qth_ntpSendNtpReq()](#Qth_ntpSendNtpReq)    |                  Sends an NTP request.                   |

## **API Description**

<span id="Qth_cmdSendTsl"></span>
## <span style="color:#A52A2A">__Qth_cmdSendTsl__</span>

This function sends TSL data to Developer Center.

__Prototype__

```c
oprt_ret Qth_cmdSendTsl(Qth_sendMode_e mode, void *ttlvHead, quint16_t *pkgId, Qth_sendCb_f sendCb);
```

__Parameter__

* __Input Parameter__
  * __Qth_sendMode_e__ __`mode`__: Data sending mode.

    | Value                  | Description                                                                                                                               |
    | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
    | QTH_SEND_AT_MOST_ONCE  | Each message is only sent once with no confirmation or resending required. Data loss or repetition may occur.                             |
    | QTH_SEND_AT_LEAST_ONCE | Each message is sent at least once until the device receives the reception confirmation from Developer Center. Data repetition may occur. |
    | QTH_SEND_EXACTLY_ONCE  | Each message is only sent once by Developer Center and only received once by the receiver, with no data loss or repetition.               |
  * __void *__ __`ttlvHead`__: TTLV data table.
  * __Qth_sendCb_f__ __`sendCb`__: Callback function of data sending result. If you do not care about the sending result, set this parameter to NULL.
    * __Prototype__
      ```c
      typedef void (*Qth_sendCb_f)(quint16_t pkgId, qbool result);
      ```
    * __Input Parameter__
      * __quint16_t__ __`pkgId`__: PkgID of the data sent.
      * __qbool__ __`result`__: Data sending result.

* __Output Parameter__
  
* __quint16_t *__ __`pkgId`__: PkgID of the data sent. If you do not care about the sending result, set this parameter to NULL.
  
* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: See [Error Code List](#ERROR_CODE) for details.

__Example__
```c
void *ttlvHead = NULL;

Quos_ttlvAddIdBool(&ttlvHead, 1, TRUE);
Qth_cmdSendTsl(QTH_SEND_AT_MOST_ONCE, ttlvHead, NULL, NULL);
```
---

<span id="Qth_cmdSendTrans"></span>
## <span style="color:#A52A2A">__Qth_cmdSendTrans__</span>

This function sends transparent transmission data to Developer Center.

__Prototype__

```c
oprt_ret Qth_cmdSendTrans(Qth_sendMode_e mode, quint8_t *value, quint32_t valLen, quint16_t *pkgId, Qth_sendCb_f sendCb);
```

__Parameter__

* __Input Parameter__
  * __Qth_sendMode_e__ __`mode`__: Data sending mode.

    | Value                  | Description                                                                                                                               |
    | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
    | QTH_SEND_AT_MOST_ONCE  | Each message is only sent once with no confirmation or resending required. Data loss or repetition may occur.                             |
    | QTH_SEND_AT_LEAST_ONCE | Each message is sent at least once until the device receives the reception confirmation from Developer Center. Data repetition may occur. |
    | QTH_SEND_EXACTLY_ONCE  | Each message is only sent once by Developer Center and only received once by the receiver, with no data loss or repetition.               |
  * __quint8_t *__ __`value`__: Transparent transmission data.
  * __quint32_t__ __`valLen`__: Length of transparent transmission data.
  * __Qth_sendCb_f__ __`sendCb`__: Callback function of data sending result. If you do not care about the sending result, set this parameter to NULL.
    * __Prototype__
      ```c
      typedef void (*Qth_sendCb_f)(quint16_t pkgId, qbool result);
      ```
    * __Input Parameter__
      * __quint16_t__ __`pkgId`__: PkgID of the data sent.
      * __qbool__ __`result`__: Data sending result.

* __Output Parameter__
  
* __quint16_t *__ __`pkgId`__: PkgID of the data sent. If you do not care about the sending result, set this parameter to NULL.
  
* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: See [Error Code List](#ERROR_CODE) for details.

__Example__
```c
void sendCb(quint16_t pkgId, qbool result)
{
    Quos_logPrintf(LL_DBG, "recv send event, pkgId:%u, result:%d", pkgId, result);
}
quint16_t pkgId = 0;
Qth_cmdSendTrans(QTH_SEND_AT_LEAST_ONCE, "hello world", 11, &pkgId, sendCb);
```
---
<span id="Qth_ntpSetResultCb"></span>
## <span style="color:#A52A2A">__Qth_ntpSetResultCb__</span>

This function sets callback function of receiving the NTP result.

__Prototype__

```c
oprt_ret Qth_ntpSetResultCb(Qth_ntpCb_f callback);
```

__Parameter__

* __Input Parameter__
  * __Qth_ntpCb_f__ __`callback`__: Callback function of receiving the NTP result.
    * __Prototype__
    ```c
    typedef void (*Qth_ntpCb_f)(quint16_t pkgId, Qth_ntpInfo_t *ntpInfo);
    ```

* __Output Parameter__
  
* None
  
* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
oprt_ret ret = OPRT_OK;

void ntpDataCb(quint16_t pkgId, Qth_ntpInfo_t *ntpInfo)
{
    Quos_logPrintf(LL_DBG, "recv ntp info, pkgId:%u", pkgId);
    Quos_logPrintf(LL_DBG, "%04d-%02d-%02d %02d:%02d:%02d.%03d, %s, "PRINTF_FORMAT_U64,
                    ntpInfo->tm.tm_year, ntpInfo->tm.tm_mon, ntpInfo->tm.tm_mday, ntpInfo->tm.tm_hour, ntpInfo->tm.tm_min, ntpInfo->tm.tm_sec, ntpInfo->tm.tm_ms,
                    ntpInfo->timezone, PRINTF_CONV_U64(ntpInfo->timestamp));
}

ret = Qth_ntpSetResultCb(ntpDataCb);
if (OPRT_OK != ret)
{
    Quos_logPrintf(APPS_OPEN, LL_ERR, "set ntp result callback error");
}
```
---

<span id="Qth_ntpSendNtpReq"></span>
## <span style="color:#A52A2A">__Qth_ntpSendNtpReq__</span>

This function sends an NTP request.

__Prototype__

```c
oprt_ret Qth_ntpSendNtpReq(quint16_t *pkgId, Qth_sendCb_f sendCb);
```

__Parameter__

* __Input Parameter__
  * __Qth_sendCb_f__ __`sendCb`__: Callback function of data reporting result. If you do not care about the sending result, set this parameter to NULL.
    * __Prototype__
    ```c
    typedef void (*Qth_sendCb_f)(quint16_t pkgId, qbool result);
    ```

* __Output Parameter__
  
* __quint16_t__ __`pkgId`__: PkgID of the data reported. If you do not care about the sending result, set this parameter to NULL.
  
* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
oprt_ret ret = OPRT_OK;

void ntpDataCb(quint16_t pkgId, Qth_ntpInfo_t *ntpInfo)
{
    Quos_logPrintf(LL_DBG, "recv ntp info, pkgId:%u", pkgId);
    Quos_logPrintf(LL_DBG, "%04d-%02d-%02d %02d:%02d:%02d.%03d, %s, "PRINTF_FORMAT_U64,
                    ntpInfo->tm.tm_year, ntpInfo->tm.tm_mon, ntpInfo->tm.tm_mday, ntpInfo->tm.tm_hour, ntpInfo->tm.tm_min, ntpInfo->tm.tm_sec, ntpInfo->tm.tm_ms,
                    ntpInfo->timezone, PRINTF_CONV_U64(ntpInfo->timestamp));
}

Qth_ntpSetResultCb(ntpDataCb);
ret = Qth_ntpSendNtpReq(NULL, NULL);
if (OPRT_OK != ret)
{
    Quos_logPrintf(APPS_OPEN, LL_ERR, "send ntp request error");
}
```
---
<span id="Qth_wanSendDevInfo"></span>
## <span style="color:#A52A2A">__Qth_wanSendDevInfo__</span>

This function reports device information to Developer Center.

__Prototype__

```c
void Qth_wanSendDevInfo();
```

__Parameter__

* __Input Parameter__
  * None

* __Return Value__
  * None

__Example__

```c
Qth_wanSendDevInfo();
```
---

<span id="Qth_wanSendDevStatus"></span>
## <span style="color:#A52A2A">__Qth_wanSendDevStatus__</span>

This function reports device status to Developer Center.

__Prototype__

```c
void Qth_wanSendDevStatus();
```

__Parameter__

* __Input Parameter__
  * None

* __Return Value__
  * None

__Example__

```c
Qth_wanSendDevStatus();
```
---

<span id="ERROR_CODE">  </span>
## **Error Code List**
| Enumeration Value                | Hexadecimal | Decimal | Description                         |
| -------------------------------- | ----------- | ------- | ----------------------------------- |
| OPRT_OK                          | -0x0000     | -0      | Successful execution.               |
| OPRT_COM_ERROR                   | -0x0001     | -1      | General error.                      |
| OPRT_INVALID_PARM                | -0x0002     | -2      | Invalid parameter.                  |
| OPRT_MALLOC_FAILED               | -0x0003     | -3      | Memory allocation failed.           |
| OPRT_NOT_SUPPORTED               | -0x0004     | -4      | Not supported.                      |
| OPRT_NOT_FOUND                   | -0x0005     | -5      | Object not found.                   |
| OPRT_INDEX_OUT_OF_BOUND          | -0x0006     | -6      | Index out of bounds.                |
| OPRT_EXCEED_UPPER_LIMIT          | -0x0007     | -7      | Exceed upper limit.                 |
| OPRT_NOT_EXIST                   | -0x0008     | -8      | Not exist.                          |
| OPRT_QTH_CMD_PKG_FORMAT_INVALID  | -0x1200     | -4608   | Data packet format error.           |
| OPRT_QTH_CMD_PKG_GENERATE_FAILED | -0x1201     | -4609   | Failed to generate the data packet. |
| OPRT_QTH_CMD_UNSUPPORTED         | -0x1202     | -4610   | Unsupported data command.           |
| OPRT_QTH_CMD_PKG_SEND_FAILED     | -0x1203     | -4611   | Failed to send the data packet.     |
| OPRT_QTH_WAN_PKG_FORMAT_INVALID  | -0x1300     | -4864   | WAN data packet format error.       |
| OPRT_QTH_WAN_PKG_REPEATED        | -0x1301     | -4865   | Duplicate WAN data packet.          |
| OPRT_QTH_WAN_GET_TOPIC_FAILED    | -0x1302     | -4866   | Failed to get the topic over WAN.   |
| OPRT_QTH_WAN_UNKNOWN_FAILED      | -0x1303     | -4867   | WAN connection unknown error.       |