# OTA Upgrade API

## **API Overview**

|                  Function                   |         Description         |
| :-----------------------------------------: | :-------------------------: |
|     [Qth_otaRequest()](#Qth_otaRequest)     | Requests OTA upgrade plans. |
| [Qth_otaPlanConfirm()](#Qth_otaPlanConfirm) | Confirms OTA upgrade plans. |

## **API Description**

<span id="Qth_otaRequest"></span>
## <span style="color:#A52A2A">__Qth_otaRequest__</span>

This function requests OTA upgrade plans for the device from Developer Center. When the device goes online, it will actively request an OTA upgrade. If the device needs to check for OTA upgrade tasks at other times, call this function to request OTA upgrade plans.

__Prototype__

```c
oprt_ret Qth_otaRequest(void);
```

__Parameter__

* __Input Parameter__
  - None
* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
oprt_ret ret = Qth_otaRequest();
if (OPRT_OK != ret)
{
    Quos_logPrintf(APPS_OPEN, LL_ERR, "ota request fail ret:%d", ret);
    return ret;
}
```
---

<span id="Qth_otaPlanConfirm"></span>
## <span style="color:#A52A2A">__Qth_otaPlanConfirm__</span>

This function confirms OTA upgrade plans, including accepting or rejecting the plan, when Developer Center issues an OTA upgrade plan. This function is not used if *Qth_otaPlanCb_f()* has been registered.

__Prototype__

```c
oprt_ret Qth_otaPlanConfirm(quint8_t action);
```

__Parameter__

* __Input Parameter__
  * __quint8_t__ __`action`__: Operation on the OTA upgrade plan.
    | Value | Description         |
    | ----- | ------------------- |
    | 0     | Accept the upgrade. |
    | 1     | Reject the upgrade. |

* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
void otaPlanExCb(Qth_otaPlan_t *planList, quint16_t count)
{
    if(QTH_OTA_TYPE_FOTA == (qint32_t)planList[0].type)
    {
        Qth_otaPlanConfirm(1);
    }
}
```
---

<span id="ERROR_CODE">  </span>
## **Error Code List**
| Enumeration Value           | Hexadecimal | Decimal | Description                                           |
| --------------------------- | ----------- | ------- | ----------------------------------------------------- |
| OPRT_OK                     | -0x0000     | -0      | Successful execution.                                 |
| OPRT_COM_ERROR              | -0x0001     | -1      | General error.                                        |
| OPRT_INVALID_PARM           | -0x0002     | -2      | Invalid parameter.                                    |
| OPRT_MALLOC_FAILED          | -0x0003     | -3      | Memory allocation failed.                             |
| OPRT_NOT_SUPPORTED          | -0x0004     | -4      | Not supported.                                        |
| OPRT_NOT_FOUND              | -0x0005     | -5      | Object not found.                                     |
| OPRT_INDEX_OUT_OF_BOUND     | -0x0006     | -6      | Index out of bounds.                                  |
| OPRT_EXCEED_UPPER_LIMIT     | -0x0007     | -7      | Exceed upper limit.                                   |
| OPRT_NOT_EXIST              | -0x0008     | -8      | Not exist.                                            |
| OPRT_QTH_OTA_REQUEST_FAILED | -0x1a00     | -6656   | Failed to request an OTA upgrade.                     |
| OPRT_QTH_OTA_ID_NOT_TASK    | -0x1a01     | -6657   | No OTA upgrade task is in progress for the component. |