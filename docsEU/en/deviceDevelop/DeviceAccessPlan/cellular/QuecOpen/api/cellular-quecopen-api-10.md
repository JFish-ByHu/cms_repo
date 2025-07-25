# Value-Added Service API

## **Value-Added Service API Overview**

|                  Function                   |             Description             |
| :-----------------------------------------: | :---------------------------------: |
| [Ql_iotCmdSysNTPReq()](#Ql_iotCmdSysNTPReq) |      Get time from NTP server       |
| [Ql_iotDataCollSend()](#Ql_iotDataCollSend) | Report data acquisition information |

## __API Description__

<span id="Ql_iotCmdSysNTPReq">  </span>

## <span style="color:#A52A2A">__Ql_iotCmdSysNTPReq__</span>

This function gets the time from the NTP server. You will be informed of the successful acquisition by URC event codes.

__Prototype__

```c
qbool Ql_iotCmdSysNTPReq(void)
```

__Parameter__

  None

__Return Value__
* __`True`__: &nbsp;&nbsp; Successful execution.
* __`False`__: Failed execution.

__NOTE__ 
* This function is supported in SDK version 2.11.0 and above.

---

__Example__

```c
qbool ret = Ql_iotCmdSysNTPReq();
```

---

<span id="Ql_iotDataCollSend">  </span>

## <span style="color:#A52A2A">__Ql_iotDataCollSend__</span>

This function reports data acquisition information.

__Prototype__

```c
qbool Ql_iotDataCollSend(qbool lastPack, quint32_t packNum, quint16_t dataLen, quint8_t *data);
```

__Parameter__
* __Input__
  * __`<lastPack>`__: Bool type. Whether the package is the last one.
    * __`True`__ : The package is the last one.
    * __`False`__ : The package is not the last one.
  * __`<packNum>`__: Integer type. Range: 0–1048576.当前大数据分包发送的分包序号。
  * __`<dataLen>`__: Integer type. Size of the subpackage. Range: 1–1024.
  * __`<data>`__: Byte stream type. Data. The length is determined by the cache size allocated by the specific module model.

* __Return Value__
  * __`True`__: Successful execution.
  * __`False`__: Failed execution.

__NOTE__ 
* This function is supported in SDK version 2.18.0 and above.

---

__Example__

```c
qbool ret = Ql_iotDataCollSend(TRUE,0,5,((quint8_t *)"hello"));
```

---
