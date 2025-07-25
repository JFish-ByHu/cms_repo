# OTA Upgrade API

## **OTA Upgrade API Overview**

|                         Function                          |                   Description                    |
| :-------------------------------------------------------: | :----------------------------------------------: |
|       [Ql_iotCmdOtaRequest()](#Ql_iotCmdOtaRequest)       | Requests OTA Upgrade Plan from Developer Center. |
|        [Ql_iotCmdOtaAction()](#Ql_iotCmdOtaAction)        |        Configures OTA Upgrade Operations.        |
| [Ql_iotCmdOtaMcuFWDataRead()](#Ql_iotCmdOtaMcuFWDataRead) |    Reads firmware data stored in the device.     |


## **API Description**

<span id="Ql_iotCmdOtaRequest">  </span>

## <span style="color:#A52A2A">__Ql_iotCmdOtaRequest__</span>

This function requests OTA upgrade plans from Developer Center.

__Prototype__

```c
qbool Ql_iotCmdOtaRequest(quint32_t mode)
```

__Parameter__
* __Input__
  * __quint32_t__  __`mode`__: Whether extra file verification SHA256 information is needed.
    * __0__: Not needed
    * __1__: Needed

__Return Value__
* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 
* This function is supported in SDK version 2.8.2 and above.

---



__Example__

```c
qbool ret = Ql_iotCmdOtaRequest(0);
```

---

<span id="Ql_iotCmdOtaAction">  </span>

## <span style="color:#A52A2A">__Ql_iotCmdOtaAction__</span>

This function configures OTA upgrade operations when the device receives the upgrade task issued by Developer Center.

__Prototype__

```c
qbool Ql_iotCmdOtaAction(quint8_t action)
```

__Parameter__
* __Input__
  * __quint8_t__  __`action`__: OTA upgrade operation.
    * __`0`__: Refuse the upgrade
    * __`1`__: Confirm the upgrade
    * __`2`__: MCU starts downloading the next block of firmware data
    * __`3`__: MCU reports the upgrading status


__Return Value__
* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 
* This function is supported in SDK version 2.3.3 and above.

---

__Example__

```c
qbool ret = Ql_iotCmdOtaAction(1);
```

---

<span id="Ql_iotCmdOtaMcuFWDataRead">  </span>

## <span style="color:#A52A2A">__Ql_iotCmdOtaMcuFWDataRead__</span>

This function reads firmware data stored in the device.

__Prototype__

```c
quint32_t Ql_iotCmdOtaMcuFWDataRead(quint32_t startAddr, quint8_t data[], quint32_t maxLen)
```

__Parameter__
* __Input__
  * __quint32_t__ __`startAddr`__: Memory address to start reading firmware data from. Unit: byte.
  * __quint8_t__   __`data`__: Pointer to the buffer that stores data to be read.
  * __quint32_t__   __`maxLen`__: Length of data to be read.

__Return Value__
* __`0`__: Failed execution
* __`> 0`__: Length of actually read data

__NOTE__ 
* This function is supported in SDK version 2.3.3 and above.

---

__Example__

```c
quint8_t readBuf[1024];
quint32_t ret = Ql_iotCmdOtaMcuFWDataRead(0,readBuf,sizeof(readBuf));
```