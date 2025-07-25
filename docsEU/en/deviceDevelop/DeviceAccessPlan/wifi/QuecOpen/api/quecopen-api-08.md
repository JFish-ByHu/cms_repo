# GNSS&LBS&Wi-Fi Positioning API

## **API Overview**

|                          Function                           |                                  Description                                  |
| :---------------------------------------------------------: | :---------------------------------------------------------------------------: |
|      [Qth_locGetSupportType()](#Qth_locGetSupportType)      |                  Gets the supported positioning techniques.                   |
|   [Qth_locGetInsideLocation()](#Qth_locGetInsideLocation)   |  Gets the location data of the module's built-in Wi-Fi positioning feature.   |
|  [Qth_locSendInsideLocation()](#Qth_locSendInsideLocation)  | Reports the location data of the module's built-in Wi-Fi positioning feature. |
| [Qth_locSendOutsideLocation()](#Qth_locSendOutsideLocation) |       Reports the location data obtained from the external GNSS module.       |


## **API Description**

<span id="Qth_locGetSupportType"></span>
## <span style="color:#A52A2A">__Qth_locGetSupportType__</span>

This function gets the supported positioning techniques.

__Prototype__

```c
char *Qth_locGetSupportType();
```

__Parameter__

* __Input Parameter__
  * None

* __Output Parameter__
  * None

* __Return Value__
  * The supported positioning technique(s): Successful execution
  * NULL: Failed execution

__Example__

```c
char *locType = NULL;

locType = Qth_locGetSupportType();
Qhal_mem_free(locType);
```
---

<span id="Qth_locGetInsideLocation"></span>
## <span style="color:#A52A2A">__Qth_locGetInsideLocation__</span>

This function gets the location data of the module's built-in Wi-Fi positioning feature.

__Prototype__

```c
void *Qth_locGetInsideLocation(void);
```

__Parameter__

* __Input Parameter__
  * None

* __Output Parameter__
  * None

* __Return Value__
  * The location data of the module's built-in Wi-Fi positioning feature in TTLV format: Successful execution
  * NULL: Failed execution

__Example__

```c
void *nmeaTtlv = NULL;

nmeaTtlv = Qth_locGetInsideLocation();
Quos_ttlvFree(&nmeaTtlv);
```
---

<span id="Qth_locSendInsideLocation"></span>
## <span style="color:#A52A2A">__Qth_locSendInsideLocation__</span>

This function reports the location data of the module's built-in Wi-Fi positioning feature.

__Prototype__

```c
oprt_ret Qth_locSendInsideLocation(quint16_t *pkgId, Qth_sendCb_f sendCb);
```

__Parameter__

* __Input Parameter__
  * __Qth_sendCb_f__ __`sendCb`__: Callback function of the data reporting result.
    * __Prototype__
      ```c
      typedef void (*Qth_sendCb_f)(quint16_t pkgId, qbool result);
      ```

* __Output Parameter__
  
* __quint16_t__ __`pkgId`__: PkgID of the reported data.
  
* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c

void sendCb(quint16_t pkgId, qbool result)
{
    Quos_logPrintf(LL_DBG, "recv send event, pkgId:%u, result:%d", pkgId, result);
}

quint16_t pkgId = 0;
oprt_ret ret = OPRT_OK;
ret = Qth_locSendInsideLocation(&pkgId, sendCb);
if (OPRT_OK != ret)
{
    Quos_logPrintf(APPS_OPEN, LL_ERR, "send inside location error");
}
```
---

<span id="Qth_locSendOutsideLocation"></span>
## <span style="color:#A52A2A">__Qth_locSendOutsideLocation__</span>

This function reports the location data obtained from the external GNSS module.

__Prototype__

```c
oprt_ret Qth_locSendOutsideLocation(char *location, quint16_t *pkgId, Qth_sendCb_f sendCb)
```

__Parameter__

* __Input Parameter__
  * __char *__ __`location`__: The location data obtained from the external GNSS module.

  * __Qth_sendCb_f__ __`sendCb`__: Callback function of the data reporting result. If you do not care about the reporting result, you can set this parameter to "NULL".
    * __Prototype__
    ```c
    typedef void (*Qth_sendCb_f)(quint16_t pkgId, qbool result);
    ```

* __Output Parameter__
  
* __quint16_t__ __`pkgId`__: PkgID of the reported data. If you do not care about the reporting result, you can set this parameter to "NULL".
  
* __Return Value__
  * `OPRT_OK`: Successful execution
  * Other values: Failed execution. See [Error Code List](#ERROR_CODE) for details.

__Example__

```c
void sendCb(quint16_t pkgId, qbool result)
{
    Quos_logPrintf(LL_DBG, "recv send event, pkgId:%u, result:%d", pkgId, result);
}

quint16_t pkgId = 0;
oprt_ret ret = OPRT_OK;
ret = Qth_locSendOutsideLocation("$GPGGA,095029.82,3012.5500,N,12012.7273,E,1,8,1.098,42.110,M,,M,,*70", &pkgId, sendCb);
if (OPRT_OK != ret)
{
    Quos_logPrintf(APPS_OPEN, LL_ERR, "send outside location error");
}
```
---

<span id="ERROR_CODE">  </span>
## **Error Code List**
| Enumeration Value            | Hexadecimal | Decimal | Description                                                       |
| ---------------------------- | ----------- | ------- | ----------------------------------------------------------------- |
| OPRT_OK                      | -0x0000     | -0      | Successful execution.                                             |
| OPRT_COM_ERROR               | -0x0001     | -1      | General error.                                                    |
| OPRT_INVALID_PARM            | -0x0002     | -2      | Invalid parameter.                                                |
| OPRT_MALLOC_FAILED           | -0x0003     | -3      | Memory allocation failed.                                         |
| OPRT_NOT_SUPPORTED           | -0x0004     | -4      | Not supported.                                                    |
| OPRT_NOT_FOUND               | -0x0005     | -5      | Object not found.                                                 |
| OPRT_INDEX_OUT_OF_BOUND      | -0x0006     | -6      | Index out of bounds.                                              |
| OPRT_EXCEED_UPPER_LIMIT      | -0x0007     | -7      | Exceed upper limit.                                               |
| OPRT_NOT_EXIST               | -0x0008     | -8      | Not exist.                                                        |
| OPRT_QTH_LOC_OUTSIDE_IS_NULL | -0x1500     | -5376   | The location data obtained from the external GNSS module is null. |
