# Data Interaction API

## **Data Interaction API Overview**

|                             Function                              |                                 Description                                 |
| :---------------------------------------------------------------: | :-------------------------------------------------------------------------: |
|     [Ql_iotCmdBusPassTransSend()](#Ql_iotCmdBusPassTransSend)     |          Sends transparent transmission data to Developer Center.           |
|  [Ql_iotCmdBusPassTransSend_ex()](#Ql_iotCmdBusPassTransSend_ex)  | Sends transparent transmission data to Developer Center according to PkgID. |
|    [Ql_iotCmdBusPhymodelReport()](#Ql_iotCmdBusPhymodelReport)    |                     Sends TSL data to Developer Center.                     |
| [Ql_iotCmdBusPhymodelReport_ex()](#Ql_iotCmdBusPhymodelReport_ex) |           Sends TSL data to Developer Center according to PkgID.            |
|       [Ql_iotCmdBusPhymodelAck()](#Ql_iotCmdBusPhymodelAck)       |             Replies to TSL data request from Developer Center.              |
|      [Ql_iotCmdSysStatusReport()](#Ql_iotCmdSysStatusReport)      |                           Reports device status.                            |
|         [Ql_iotSysGetDevStatus()](#Ql_iotSysGetDevStatus)         |                             Gets device status.                             |
|     [Ql_iotCmdSysDevInfoReport()](#Ql_iotCmdSysDevInfoReport)     |                    Reports specified device information.                    |
|           [Ql_iotSysGetDevInfo()](#Ql_iotSysGetDevInfo)           |                     Gets specified device information.                      |

## **API  Description**

<span id="Ql_iotCmdBusPassTransSend">  </span>

## <span style="color:#A52A2A">__Ql_iotCmdBusPassTransSend__</span>

This function sends transparent transmission data to Developer Center. (It is recommended to call Ql_iotCmdBusPassTransSend_ex() to send transparent transmission data. Uplink data ID will be returned after successful sending.)

__Prototype__

```c
qbool Ql_iotCmdBusPassTransSend(quint16_t mode, quint8_t *payload, quint32_t len)
```

__Parameter__
* __Input__
  * __quint16_t__   __`mode`__: Data sending mode.<br>
    * __`0`__: QoS = 0, at most once. 
    * __`1`__: QoS = 1, at least once.
    * __`2`__: QoS = 2, exactly only once.

  * __quint8_t *__   __`payload`__: Data to be sent.
  * __quint32_t__   __`len`__: Length of the data to be sent. Unit: byte.

__Return Value__
* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 
* This function is supported in SDK version 2.3.3 and above.

---

__Example__

```c
qbool ret = Ql_iotCmdBusPassTransSend(0,(unsigned char *)"123abc",6);
```

---

<span id="Ql_iotCmdBusPassTransSend_ex">  </span>

## <span style="color:#A52A2A">__Ql_iotCmdBusPassTransSend_ex__</span>

This function sends transparent transmission data to Developer Center according to PkgID. The uplink data ID will be returned after successful sending.

__Prototype__

```c
qint32_t Ql_iotCmdBusPassTransSend_ex(quint16_t mode, quint8_t *payload, quint32_t len)
```

__Parameter__
* __Input__
  * __quint16_t__   __`mode`__: Data sending mode.    
    * __`0`__: QoS = 0, at most once. 
    * __`1`__: QoS = 1, at least once.
    * __`2`__: QoS = 2, exactly only once.
  * __quint8_t *__   __`payload`__: Data to be sent.
  * __quint32_t__   __`len`__: Length of the data to be sent. Unit: byte.

__Return Value__
* __`-1`__: Failed execution
* __`1–65535`__: Uplink data ID

__NOTE__ 
* This function is supported in SDK version 2.10.0 and above.

---

__Example__

```c
qbool ret = Ql_iotCmdBusPassTransSend_ex(0,(unsigned char *)"123abc",6);
```

---

<span id="Ql_iotCmdBusPhymodelReport">  </span>

## <span style="color:#A52A2A">__Ql_iotCmdBusPhymodelReport__</span>

This command sends TSL data to Developer Center. (It is recommended to call Ql_iotCmdBusPhymodelReport_ex() to send TSL data. Uplink data ID will be returned after successful sending.)

__Prototype__

```c
qbool Ql_iotCmdBusPhymodelReport(quint16_t mode, const void *ttlvHead)
```

__Parameter__

* __Input__
  * __quint16_t__   __`mode`__: Data sending mode.<br>
    * __`0`__: QoS = 0, at most once. 
    * __`1`__: QoS = 1, at least once.
    * __`2`__: QoS = 2, exactly only once.

  * __const void *__   __`ttlvHead`__: TTLV data head to be sent.

__Return Value__
* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 
* This function is supported in SDK version 2.3.3 and above.

---


__Example__

```c
void *ttlvHead = NULL;  
Ql_iotTtlvIdAddInt(&ttlvHead, 1, 100);
Ql_iotCmdBusPhymodelReport(1, ttlvHead);
Ql_iotTtlvFree(&ttlvHead); //Release pointer.
```

---

<span id="Ql_iotCmdBusPhymodelReport_ex">  </span>

## <span style="color:#A52A2A">__Ql_iotCmdBusPhymodelReport_ex__</span>

This function sends TSL data to Developer Center according to PkgID. The uplink data ID will be returned after successful sending.

__Prototype__

```c
qint32_t Ql_iotCmdBusPhymodelReport_ex(quint16_t mode, const void *ttlvHead)
```

__Parameter__

* __Input__
  * __quint16_t__   __`mode`__: Data sending mode.
    * __`0`__: QoS = 0, at most once. 
    * __`1`__: QoS = 1, at least once.
    * __`2`__: QoS = 2, exactly only once.
  * __const void *__   __`ttlvHead`__: TTLV data head to be sent.

__Return Value__
* __`-1`__: Failed execution
* __`1–65535`__: Uplink data ID

__NOTE__ 
* This function is supported in SDK version 2.3.3 and above.

  <span style="color:red" >Call __Ql_iotTtlvFree()__ to release the pointer after using the return value.</span>

---

__Example__

```c
void *ttlvHead = NULL;  
Ql_iotTtlvIdAddInt(&ttlvHead, 1, 100);
Ql_iotCmdBusPhymodelReport_ex(1, ttlvHead);
Ql_iotTtlvFree(&ttlvHead); //Release the pointer.
```

---

<span id="Ql_iotCmdBusPhymodelAck">  </span>

## <span style="color:#A52A2A">__Ql_iotCmdBusPhymodelAck__</span>

This function replies to the TSL data request from Developer Center.

__Prototype__

```c
qbool Ql_iotCmdBusPhymodelAck(quint16_t mode, quint16_t pkgId, const void *ttlvHead)
```

__Parameter__

* __Input__
  * __quint16_t__   __`mode`__: Data sending mode.<br>
    * __`0`__: QoS = 0, at most once. 
    * __`1`__: QoS = 1, at least once.
    * __`2`__: QoS = 2, exactly only once.

  * __quint16_t__    __`pkgId`__: Request package ID issued by Developer Center.
  * __const void *__   __`ttlvHead`__: TTLV data head to be sent.

__Return Value__
* __`True`__: Successful execution
* __`False`__: Failed execution


__NOTE__ 
* This function is supported in SDK version 2.3.3 and above.

  <span style="color:red" >Call __Ql_iotTtlvFree()__ to release the pointer after using the return value.</span>

---



__Example__

```c
quint16_t pkgId ;
void *ttlvHead = NULL;  
Ql_iotTtlvIdAddInt(&ttlvHead, 1, 100);
qbool ret = Ql_iotCmdBusPhymodelAck(0,pkgId,ttlvHead);
Ql_iotTtlvFree(&ttlvHead); //Release the pointer.
```

---

<span id="Ql_iotCmdSysStatusReport">  </span>

## <span style="color:#A52A2A">__Ql_iotCmdSysStatusReport__</span>

This function reports device status.

__Prototype__

```c
qbool Ql_iotCmdSysStatusReport(quint16_t ids[], quint32_t size)
```

__Parameter__
* __Input__
  * __quint16_t__  __`ids[]`__: Device status ID list. See [Device Status ID Description](#EquipmentStatus) for details.
  * __quint32_t__  __`size`__: Number of device status ID .

__Return Value__
* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 
* This function is supported in SDK version 2.3.3 and above.

---

__Example__

```c
quint16_t statusIds[] = {
        QIOT_DPID_STATUS_BATTERY,    
        QIOT_DPID_STATUS_VOLTAGE,               
        QIOT_DPID_STATUS_SIGNAL,                                                                                                              
        QIOT_DPID_STATUS_FLASHFREE
    };
qbool ret = Ql_iotCmdSysStatusReport(statusIds, sizeof(statusIds) / sizeof(statusIds[0]));
```

---

<span id="Ql_iotSysGetDevStatus">  </span>

## <span style="color:#A52A2A">__Ql_iotSysGetDevStatus__</span>

This function gets device status.

__Prototype__

```c
void *Ql_iotSysGetDevStatus(quint16_t ids[], quint32_t size)
```

__Parameter__
* __Input__
  * __quint16_t__  __`ids`__: Device status ID list. See [Device Status ID Description](#EquipmentStatus) for details.
  * __quint32_t__   __`size`__: Device status ID number.


__Return Value__

TTLV data table. A node is a device status.

__NOTE__ 
* This function is supported in SDK version 2.8.1 and above.

  <span style="color:red" >Call __Ql_iotTtlvFree()__ to release the pointer after getting the device status.</span>

---

__Example__

```c
quint16_t ids[QIOT_DPID_STATUS_MAX];
quint32_t i = 0;
void *ttlvHead = Ql_iotSysGetDevStatus(ids, i / 2);
```

---

<span id="Ql_iotCmdSysDevInfoReport">  </span>

## <span style="color:#A52A2A">__Ql_iotCmdSysDevInfoReport__</span>

This function reports the specified device information.

__Prototype__

```c
qbool Ql_iotCmdSysDevInfoReport(quint16_t ids[], quint32_t size)
```

__Parameter__

* __Input__
  * __quint16_t__  __`ids[]`__: Device information ID list. See [Device Information ID Description](#Device_ID) for details.
  * __quint32_t__   __`size`__: Number of device information ID.

__Return Value__
* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 
* This function is supported in SDK version 2.3.3 and above.

---

__Example__

```c
quint16_t infoIds[] = {QIOT_DPID_INFO_MODEL_TYPE,
                        QIOT_DPID_INFO_MODEL_VER,
                        QIOT_DPID_INFO_MCU_VER,
                        QIOT_DPID_INFO_CELLID,
                        QIOT_DPID_INFO_ICCID,
                        QIOT_DPID_INFO_MCC,
                        QIOT_DPID_INFO_MNC,
                        QIOT_DPID_INFO_LAC,
                        QIOT_DPID_INFO_PHONE_NUM,
                        QIOT_DPID_INFO_SIM_NUM,
                        QIOT_DPID_INFO_SDK_VER,
                        QIOT_DPID_INFO_LOC_SUPLIST,
                        QIOT_DPIO_INFO_DP_VER,
                        QIOT_DPIO_INFO_CP_VER};
Ql_iotCmdSysDevInfoReport(infoIds, sizeof(infoIds) / sizeof(infoIds[0]));
```

---

<span id="Ql_iotSysGetDevInfo">  </span>

## <span style="color:#A52A2A">__Ql_iotSysGetDevInfo__</span>

This function gets the specified device information.

__Prototype__

```c
void *Ql_iotSysGetDevInfo(quint16_t ids[], quint32_t size)
```

__Parameter__

* __Input__
  * __quint16_t__  __`ids`__: Device information ID list. See [Device Information ID Description](#Device_ID) for details.
  * __quint32_t__   __`size`__: Device information ID number.


__Return Value__

TTLV data table. A node is device information.

__NOTE__ 
* This function is supported in SDK version 2.8.1 and above.

  <span style="color:red" >Call __Ql_iotTtlvFree()__ to release the pointer after getting the device information.</span>

---

__Example__

```c
quint16_t ids[QIOT_DPID_INFO_MAX];
quint32_t i;
void *ttlvHead = Ql_iotSysGetDevInfo(ids, i / 2);
```

---


## **Enumeration**

<span id="EquipmentStatus">  </span>

* __Device Status ID__

    __Enumeration Definition__

    ```c
    enum { 
        QIOT_DPID_STATUS_BATTERY = 1, /* Battery power */
        QIOT_DPID_STATUS_VOLTAGE = 2, /* Voltage */ 
        QIOT_DPID_STATUS_SIGNAL = 3, /* RSSI */ 
        QIOT_DPID_STATUS_FLASHFREE = 4, /* Available space */ 
        QIOT_DPID_STATUS_RSRP = 5, /* RSRP */ 
        QIOT_DPID_STATUS_RSRQ = 6, /* LTE RSRQ */ 
        QIOT_DPID_STATUS_SNR = 7, /* SNR */ 
        QIOT_DPID_STATUS_MAX, 
    };
    ```

    __Member__

    | Member                     |        Description         |
    | :------------------------- | :------------------------: |
    | QIOT_DPID_STATUS_BATTERY   | Battery power (percentage) |
    | QIOT_DPID_STATUS_VOLTAGE   |        Voltage (V)         |
    | QIOT_DPID_STATUS_SIGNAL    |            RSSI            |
    | QIOT_DPID_STATUS_FLASHFREE |   Available space (byte)   |
    | QIOT_DPID_STATUS_RSRP      |            RSRP            |
    | QIOT_DPID_STATUS_RSRQ      |          LTE RSRQ          |
    | QIOT_DPID_STATUS_SNR       |            SNR             |

<span id="Device_ID">  </span>

* __Device Information ID__

    __Enumeration Definition__

    ```c
    enum {
        QIOT_DPID_INFO_MODEL_TYPE = 1, /* Module model */ 
        QIOT_DPID_INFO_MODEL_VER = 2, /* Module firmware version */ 
        QIOT_DPID_INFO_MCU_VER = 3, /* MCU version */ 
        QIOT_DPID_INFO_CELLID = 4, /* Cell ID */ 
        QIOT_DPID_INFO_ICCID = 5, /* ICCID */ 
        QIOT_DPID_INFO_MCC = 6, /* MCC */ 
        QIOT_DPID_INFO_MNC = 7, /* MNC */ 
        QIOT_DPID_INFO_LAC = 8, /* LAC */ 
        QIOT_DPID_INFO_PHONE_NUM = 9, /* Phone number */ 
        QIOT_DPID_INFO_SIM_NUM = 10, /* IMSI */ 
        QIOT_DPID_INFO_SDK_VER = 11, /* QuecThing SDK version number*/ 
        QIOT_DPID_INFO_MAX,
    };
    ```

    __Member__

    | Member                    |         Description          |
    | :------------------------ | :--------------------------: |
    | QIOT_DPID_INFO_MODEL_TYPE |         Module model         |
    | QIOT_DPID_INFO_MODEL_VER  |   Module firmware version    |
    | QIOT_DPID_INFO_MCU_VER    |         MCU version          |
    | QIOT_DPID_INFO_CELLID     |           Cell ID            |
    | QIOT_DPID_INFO_ICCID      |            ICCID             |
    | QIOT_DPID_INFO_MCC        |             MCC              |
    | QIOT_DPID_INFO_MNC        |             MNC              |
    | QIOT_DPID_INFO_LAC        |             LAC              |
    | QIOT_DPID_INFO_PHONE_NUM  |         Phone number         |
    | IOT_DPID_INFO_SIM_NUM     |             IMSI             |
    | QIOT_DPID_INFO_SDK_VER    | QuecThing SDK version number |

