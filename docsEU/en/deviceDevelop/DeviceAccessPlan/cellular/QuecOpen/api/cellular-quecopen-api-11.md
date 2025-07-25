# Gateway Sub-device API

## **Gateway Sub-device API Overview**

|                            Function                             |                                            Description                                            |
| :-------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: |
| [Ql_iotConfigSetSubDevEventCB()](#Ql_iotConfigSetSubDevEventCB) | Registers the callback function for the interaction event between the sub-device and the gateway. |
|             [Ql_iotSubDevConn()](#Ql_iotSubDevConn)             |                    Connects sub-device to gateway or authenticates sub-device.                    |
|          [Ql_iotSubDevDisconn()](#Ql_iotSubDevDisconn)          |                           Disconnects the sub-device from the gateway.                            |
|    [Ql_iotSubDevPassTransSend()](#Ql_iotSubDevPassTransSend)    |             Sends transparent tranmission data of the sub-device to Developer Center.             |
| [Ql_iotSubDevPassTransSend_ex()](#Ql_iotSubDevPassTransSend_ex) |             Sends transparent tranmission data of the sub-device to Developer Center.             |
|        [Ql_iotSubDevTslReport()](#Ql_iotSubDevTslReport)        |                         Sends TSL data of sub-device to Developer Center.                         |
|     [Ql_iotSubDevTslReport_ex()](#Ql_iotSubDevTslReport_ex)     |                         Sends TSL data of sub-device to Developer Center.                         |
|           [Ql_iotSubDevTslAck()](#Ql_iotSubDevTslAck)           |               Replies to TSL data requested by Developer Center to the sub-device.                |
|           [Ql_iotSubDevDeauth()](#Ql_iotSubDevDeauth)           |                                   De-registers the sub-device.                                    |
|              [Ql_iotSubDevHTB()](#Ql_iotSubDevHTB)              |                Refreshes the last interaction time between sub-device and gateway.                |
|        [Ql_iotGwDevInfoReport()](#Ql_iotGwDevInfoReport)        |                                  Report Sub-device Information.                                   |
|            [Ql_iotGwDevOtaReq()](#Ql_iotGwDevOtaReq)            |                                Request Sub-device OTA Upgrade Pla.                                |
|         [Ql_iotGwDevOtaUpdate()](#Ql_iotGwDevOtaUpdate)         |                           Configure Sub-device OTA Upgrade Operations.                            |
|           [Ql_iotGwDevOtaRead()](#Ql_iotGwDevOtaRead)           |                                Read Sub-device OTA Firmware Data.                                 |
|         [Ql_iotGwDevLocReport()](#Ql_iotGwDevLocReport)         |                                 Report Sub-device Location Data.                                  |


<br>

## __API Description__

<span id="Ql_iotConfigSetSubDevEventCB">  </span>

## <span style="color:#A52A2A">__Ql_iotConfigSetSubDevEventCB__</span>

This function registers the callback function for the interaction event between the sub-device and the gateway. Subsequent interaction events between the sub-device and the gateway are notified through this callback function.

__Prototype__

```c
void Ql_iotConfigSetSubDevEventCB(void (*eventCb));
```

__Parameter__
* __Callback function__
  * __void *__  __`eventCb`__: Callback function for the interaction events between the sub-device and the gateway after the sub-device connects to the gateway.
    * __Prototype__

      ```c
      typedef void (*eventCb)(quint32_t event, qint32_t errcode, const char *subPk, const char *subDk ,const void *value, quint32_t valLen)
      ```

      * __Input__
        * __quint32_t__    __`event`__: Event identifier.
        * __quint32_t__     __`errcode`__: Event code. 
        * __const char *__ __`subPk`__: ProductKey generated when a product is created on Developer Center.
        * __const char *__  __`subDk`__: Unique identifier of the sub-device.
        * __const void *__ __`value`__: Callback data.
        * __quint32_t__     __`valLen`__: Length of the callback data.

__Return Value__

None

__NOTE__ 
* This function is supported in SDK version 2.10.0 and above.

  For details of response code, callback data and callback content length, see [Interaction Events Between Sub-device and Gateway](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/InteractionEvent)。

---

__Example__

```c
Ql_iotConfigSetSubDevEventCB(Ql_iotSubEventCB);
```

---

<span id="Ql_iotSubDevConn">  </span>

## <span style="color:#A52A2A">__Ql_iotSubDevConn__</span>

This function connects a sub-device to a gateway or authenticates a sub-device. The connection/authentication result is notified by the sub-device and gateway callback event. When subDS is set to NULL, it means to authenticate the sub-device; when subDS is specified, it means to connect the sub-device to the gateway.

__Prototype__

```c
qbool Ql_iotSubDevConn(const char *subPk, const char *subPs, const char *subDk, const char *subDs, quint8_t sessionType, quint16_t keepalive)
```

__Parameter__
* __Input__
  * __const char *__  __`subPk`__: ProductKey generated when a product is created on Developer Center.
  * __const char *__  __`subPs`__: ProductSecret generated when a product is created on Developer Center.
  * __const char *__  __`subDk`__: Unique identifier of the sub-device.
  * __const char *__   __`subDs`__: The device secret of the sub-device.
  * __quint8_t__    __`sessionType`__: Encryption method of data interaction of the sub-device.
    * __`0`__: Not encrypted.
    * __`1`__: Encrypted.
  * __quint16_t__    __`keepalive`__: Keepalive time of the sub-device.

__Return Value__
* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 
* This function is supported in SDK version 2.9.0 and above.

---

__Example__

```c
mp_buffer_info_t pro_keyinfo = {0};
mp_buffer_info_t pro_secretinfo = {0};
mp_buffer_info_t dev_keyinfo = {0};
mp_buffer_info_t dev_secretinfo = {0};
int session_type_val;
int keepalive_val;
qbool ret = Ql_iotSubDevConn((const char *)pro_keyinfo.buf, (const char *)pro_secretinfo.buf, (const char *)dev_keyinfo.buf, (const char *)dev_secretinfo.buf, session_type_val, keepalive_val);
```

---

<span id="Ql_iotSubDevDisconn">  </span>

## <span style="color:#A52A2A">__Ql_iotSubDevDisconn__</span>

This function disconnects the sub-device from the gateway.

__Prototype__

```c
qbool Ql_iotSubDevDisconn(const quint8_t *subPk, const quint8_t *subDk)
```

__Parameter__
* __Input__
  * __const quint8_t *__  __`subPk`__: ProductKey generated when a product is created on Developer Center.
  * __const quint8_t *__  __`subDk`__: Unique identifier of the sub-device.

__Return Value__
* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 
* This function is supported in SDK version 2.9.0 and above.

---

__Example__

```c
mp_buffer_info_t pro_key = {0};
mp_buffer_info_t dev_key = {0};
qbool ret = Ql_iotSubDevDisconn((const char *)pro_key.buf, (const char *)dev_key.buf);
```

---

<span id="Ql_iotSubDevDeauth">  </span>

## <span style="color:#A52A2A">__Ql_iotSubDevDeauth__</span>

This function de-registers the sub-device.

__Prototype__

```c
qbool Ql_iotSubDevDeauth(const char *subPk, const char *subPs, const char *subDk, const char *subDs)
```

__Parameter__
* __Input__
  * __const char *__  __`subPk`__: ProductKey generated when a product is created on Developer Center.
  * __const char *__  __`subPs`__: ProductSecret generated when a product is created on Developer Center.
  * __const char *__  __`subDk`__: Unique identifier of the sub-device.
  * __const char *__  __`subDs`__: The device secret of the sub-device.

__Return Value__
* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 
* This function is supported in SDK version 2.9.0 and above.

---

__Example__

```c
mp_buffer_info_t pro_key = {0};
mp_buffer_info_t pro_secret = {0};
mp_buffer_info_t dev_key = {0};
mp_buffer_info_t dev_secret = {0};
qbool ret = Ql_iotSubDevDeauth((const char *)pro_key.buf, (const char *)pro_secret.buf, (const char *)dev_key.buf, (const char *)dev_secret.buf);
```

---

<span id="Ql_iotSubDevPassTransSend">  </span>

## <span style="color:#A52A2A">__Ql_iotSubDevPassTransSend__</span>

This function sends transparent transmission data of the sub-device to Developer Center. (It is recommended to call Ql_iotSubDevPassTransSend_ex.)

__Prototype__

```c
qbool Ql_iotSubDevPassTransSend(const quint8_t *subPk, const quint8_t *subDk, quint8_t *payload, quint16_t payloadlen)
```

__Parameter__
* __Input__
  * __const  quint8_t *__  __`subPk`__: ProductKey generated when a product is created on Developer Center.
  * __const  quint8_t *__  __`subDk`__: Unique identifier of the sub-device.
  * __quint8_t *__     __`payload`__: Pointer to the transparent transmission data to be reported.
  * __quint16_t *__     __`payloadlen`__: Length of the transparent transmission data to be reported.

__Return Value__
* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 
* This function is supported in SDK version 2.9.0 and above.

---

__Example__

```c
char *subPk;
char *subDk;
Ql_iotSubDevPassTransSend(subPk, subDk, "hello world", HAL_STRLEN("hello world"));
```

---

<span id="Ql_iotSubDevPassTransSend_ex">  </span>

## <span style="color:#A52A2A">__Ql_iotSubDevPassTransSend_ex__</span>

This function sends transparent transmission data of the sub-device to Developer Center.

__Prototype__

```c
qint32_t Ql_iotSubDevPassTransSend_ex(const quint8_t *subPk, const quint8_t *subDk, quint8_t *payload, quint16_t payloadlen)
```

__Parameter__
* __Input__
  * __const  quint8_t *__  __`subPk`__: ProductKey generated when a product is created on Developer Center.
  * __const  quint8_t *__  __`subDk`__: Unique identifier of the sub-device.
  * __quint8_t *__     __`payload`__: Pointer to the transparent transmission data to be reported.
  * __quint16_t *__     __`payloadlen`__: Length of the transparent transmission data to be reported.

__Return Value__
* __`-1`__: Failed execution
* __`1–65535`__: The message txid reported when the function is executed successfully.

__NOTE__ 
* This function is supported in SDK version 2.10.0 and above.

---

__Example__

```c
char *subPk;
char *subDk;
Ql_iotSubDevPassTransSend_ex(subPk, subDk, "hello world", HAL_STRLEN("hello world"));
```

---

<span id="Ql_iotSubDevTslReport">  </span>

## <span style="color:#A52A2A">__Ql_iotSubDevTslReport__</span>

This function sends TSL data of sub-device to Developer Center. (It is recommended to call Ql_iotSubDevTslReport_ex.)

__Prototype__

```c
qbool Ql_iotSubDevTslReport(const char *subPk, const char *subDk, const void *ttlvHead)
```

__Parameter__
* __Input__
  * __const char *__  __`subPk`__: ProductKey generated when a product is created on Developer Center.
  * __const char *__  __`subDk`__: Unique identifier of the sub-device.
  * __const void *__  __`ttlvHead`__: Pointer to TTLV data chain header.

__Return Value__
* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 
* This function is supported in SDK version 2.9.0 and above.

---

__Example__

```c
void *ttlvHead = NULL;
char *subPk = NULL;
char *subDk = NULL;
Ql_iotSubDevTslReport(subPk,subDk,ttlvHead);
```

---

<span id="Ql_iotSubDevTslReport_ex">  </span>

## <span style="color:#A52A2A">__Ql_iotSubDevTslReport_ex__</span>

This function sends TSL data of sub-device to Developer Center.

__Prototype__

```c
qint32_t Ql_iotSubDevTslReport_ex(const char *subPk, const char *subDk, const void *ttlvHead)
```

__Parameter__
* __Input__
  * __const char *__  __`subPk`__: ProductKey generated when a product is created on Developer Center.
  * __const char *__  __`subDk`__: Unique identifier of the sub-device.
  * __const void *__  __`ttlvHead`__: Pointer to TTLV data chain header.

__Return Value__
* __`-1`__: Failed execution
* __`1–65535`__: The message txid reported when the function is executed successfully.

__NOTE__ 
* This function is supported in SDK version 2.9.0 and above.

---

__Example__

```c
void *ttlvHead = NULL;
char *subPk = NULL;
char *subDk = NULL;
Ql_iotSubDevTslReport_ex(subPk,subDk,ttlvHead);
```

---

<span id="Ql_iotSubDevTslAck">  </span>

## <span style="color:#A52A2A">__Ql_iotSubDevTslAck__</span>

This function replies to TSL data requested by Developer Center to the sub-device.

__Prototype__

```c
qbool Ql_iotSubDevTslAck(const char *subPk, const char *subDk, quint16_t pkgId, const void *ttlv Head)
```

__Parameter__
* __Input__
  * __const char *__  __`subPk`__: ProductKey generated when a product is created on Developer Center.
  * __const char *__  __`subDk`__: Unique identifier of the sub-device.
  * __quint16_t__    __`pkgId`__: The replied TTLV package ID. The ID is obtained through the event.
  * __const void *__  __`ttlvHead`__: Pointer to TTLV data chain header.

__Return Value__
* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 
* This function is supported in SDK version 2.9.0 and above.

---

__Example__

```c
char *subPk = NULL;
char *subDk = NULL;
quint16_t pkgId ;
void *ttlvHead = NULL;
Ql_iotSubDevTslAck(subPk, subDk, pkgId, ttlvHead);
Ql_iotTtlvFree(&ttlvHead);
```

---

<span id="Ql_iotSubDevHTB">  </span>

## <span style="color:#A52A2A">__Ql_iotSubDevHTB__</span>

This function refreshes the last interaction time between a sub-device and a gateway.

__Prototype__

```c
qbool Ql_iotSubDevHTB(const char *subPk, const char *subDk)
```

__Parameter__
* __Input__
  * __const char *__  __`subPk`__: ProductKey generated when a product is created on Developer Center.
  * __const char *__  __`subDk`__: Unique identifier of the sub-device.

__Return Value__
* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 
* This function is supported in SDK version 2.9.0 and above.

---

__Example__

```c
mp_buffer_info_t pro_key = {0};
mp_buffer_info_t dev_key = {0};
qbool ret = Ql_iotSubDevHTB((const char *)pro_key.buf, (const char *)dev_key.buf);
```

---

<span id="Ql_iotGwDevInfoReport">  </span>

## <span style="color:#A52A2A">Ql_iotGwDevInfoReport</span>

This function reports the sub-device information.

__Prototype__

```c
qbool Ql_iotGwDevInfoReport(const char *subPk, const char *subDk, const char *subVer)
```

__Parameter__
* __Input__
  * __const char *__ __`subPk`__: ProductKey generated when a product is created.
  * __const char *__ __`subDk`__: The unique ID of a sub-device.
  * __const char *__ __`subVer`__: Sub-device version.

__Return Value__
* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 
* This function is supported in SDK version 2.19.0 and above.

---

__Example__

```c
qbool ret = Ql_iotGwDevInfoReport("p1112k","12345678");
```

---

<span id="Ql_iotGwDevOtaReq">  </span>

## <span style="color:#A52A2A">Ql_iotGwDevOtaReq</span>

This function requests a sub-device OTA upgrade plan.

__Prototype__

```c
qbool Ql_iotGwDevOtaReq(const char *subPk,const char *subDk,const char *subVer, quint8_t mode)
```

__Parameter__
* __Input__
  * __const char *__ __`subPk`__: ProductKey generated when a product is created.
  * __const char *__ __`subDk`__: The unique ID of a sub-device.
  * __const char *__ __`subVer`__: Sub-device version.
  * __quint8_t__ __`mode`__: Sub-device communication mode.
    * __`0` :__ – Neither SHA256 information nor an outgoing URL is required.
    * __`1` :__ – SHA256 information is required, but no outgoing URL is required.
    * __`2` :__ – No SHA256 information is required, but an outgoing URL is required.
    * __`3` :__ – Both SHA256 information and an outgoing URL are required.

__Return Value__
* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 
* This function is supported in SDK version 2.19.0 and above.

---

__Example__

```c
qbool ret = Ql_iotGwDevOtaReq("p1112k","12345678","1_0_0",0);
```

---


<span id="Ql_iotGwDevOtaUpdate">  </span>

## <span style="color:#A52A2A">Ql_iotGwDevOtaUpdate</span>

This function configures the sub-device OTA upgrade operations.

__Prototype__

```c
qbool Ql_iotGwDevOtaUpdate(const char *subPk, const char *subDk, const char *subVer, quint8_t action)
```

__Parameter__
* __Input__
  * __const char *__ __`subPk`__: ProductKey generated when a product is created.
  * __const char *__ __`subDk`__: The unique ID of a sub-device.
  * __const char *__ __`subVer`__: Sub-device version.
  * __quint8_t__ __`action`__: Sub-device OTA upgrade operations.<br>
    * __`0`__– Refuse the upgrade<br>
    * __`1`__– Confirm the upgrade<br>
    * __`3`__– Report the status of "Upgrading"<br>
    * __`4`__– Report the status of "Upgraded"<br>
    * __`5`__– Report the status of "Upgrade Failed"<br>

__Return Value__
* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 
* This function is supported in SDK version 2.19.0 and above.

---

__Example__

```c
qbool ret = Ql_iotGwDevOtaUpdate("p1112k","12345678","1_0_0",1);
```

---

<span id="Ql_iotGwDevOtaRead">  </span>

## <span style="color:#A52A2A">Ql_iotGwDevOtaRead</span>

This function downloads the sub-device firmware data according to the URL provided by the platform and transfers the data to users.

__Prototype__

```c
qint32_t Ql_iotGwDevOtaRead(const char *subPk, const char *subDk, quint32_t startAddr, quint16_t size, quint8_t *buff)
```

__Parameter__
* __Input__
  * __const char *__ __`subPk`__: ProductKey generated when a product is created.
  * __const char *__ __`subDk`__: The unique ID of a sub-device.
  * __const char *__ __`startAddr`__: The start address of downloading the firmware.
  * __quint8_t__ __`size`__: Maximum length of the firmware data read this time.
  * __quint8_t__ __`buff`__: Buffer pointer of the firmware data read this time.

__Return Value__

__NOTE__ 
* This function is supported in SDK version 2.19.0 and above.

---

__Example__

```c
quint8_t buff[1024] = {0};
qbool ret = Ql_iotGwDevOtaRead("p1112k","12345678",0,1024,buff);
```

---

<span id="Ql_iotGwDevLocReport">  </span>

## <span style="color:#A52A2A">Ql_iotGwDevLocReport</span>

This function reports the sub-device location data.

__Prototype__

```c
qbool Ql_iotGwDevLocReport(const char *subPk, const char *subDk,const void *ttlvHead)
```

__Parameter__
* __Input__
  * __const char *__ __`subPk`__: ProductKey generated when a product is created.
  * __const char *__ __`subDk`__: The unique ID of a sub-device.
  * __const char *__ __`ttlvHead`__: Location data in TTLV format.

__Return Value__
* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 
* This function is supported in SDK version 2.19.0 and above.

---

__Example__

```c
void *ttlvHead = NULL;
Ql_iotTtlvIdAddString(&ttlvHead,0,"$GPGGA,042523.0,3413.610533,N,10854.063257,E,1,05,2.6,438.5,M,-28.0,M,,*78");
qbool ret = Ql_iotGwDevLocReport("p1112k","12345678",ttlvHead);
Ql_iotTtlvFree(&ttlvHead);
```

---

<br>
