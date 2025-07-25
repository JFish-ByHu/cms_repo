# GNSS&LBS&Wi-Fi Positioning API

## **GNSS&LBS&Wi-Fi Positioning API Overview**

|                               Function                                | Description                                                                  |
| :-------------------------------------------------------------------: | :--------------------------------------------------------------------------- |
|             [Ql_iotLocGetSupList()](#Ql_iotLocGetSupList)             | Obtains NMEA sentence types of the module's built-in positioning feature.    |
|                [Ql_iotLocGetData()](#Ql_iotLocGetData)                | Obtains location data of the module's built-in positioning feature.          |
|     [Ql_iotCmdBusLocReportInside()](#Ql_iotCmdBusLocReportInside)     | Reports the location data of the built-in positioning feature of the device. |
|  [Ql_iotCmdBusLocReportInside_ex()](#Ql_iotCmdBusLocReportInside_ex)  | Reports the location data of the built-in positioning feature of the device. |
|    [Ql_iotCmdBusLocReportOutside()](#Ql_iotCmdBusLocReportOutside)    | Reports location data obtained from external GNSS module.                    |
| [Ql_iotCmdBusLocReportOutside_ex()](#Ql_iotCmdBusLocReportOutside_ex) | Reports location data obtained from external GNSS module.                    |

## **API Description**

<span id="Ql_iotLocGetSupList">  </span>

## <span style="color:#A52A2A">__Ql_iotLocGetSupList__</span>

This function obtains NMEA sentence types of the built-in positioning feature of the module.

__Prototype__

```c
void *Ql_iotLocGetSupList(void)
```

__Parameter__

None

__Return Value__

TTLV data table containing nodes that represent supported positioning types.


__NOTE__ 
* This function is supported in SDK version 2.8.0 and above.

  <span style="color:red" >Call Ql_iotTtlvFree() to release the resource after getting the information.</span>

---

__Example__

```c
void *titleTtlv = Ql_iotLocGetSupList();
Ql_iotTtlvFree(&titleTtlv);
```

---

<span id="Ql_iotLocGetData">  </span>

## <span style="color:#A52A2A">__Ql_iotLocGetData__</span>

This function obtains location data of the built-in positioning feature of the module.

__Prototype__

```c
void *Ql_iotLocGetData(const void *titleTtlv)

```

__Parameter__
* __Input__
  * __const void *__   __`titleTtlv`__: TTLV data table head of NMEA type to be obtained.

__Return Value__

TTLV data table containing nodes that represent supported location data.

__NOTE__ 
* This function is supported in SDK version 2.8.0 and above.

  <span style="color:red" >Call Ql_iotTtlvFree() to release the resource after getting the information.</span>

---

__Example__

```c
void *locDataTtlv = Ql_iotLocGetData(titleTtlv);
Ql_iotTtlvFree(&titleTtlv);
```

---

<span id="Ql_iotCmdBusLocReportInside">  </span>

## <span style="color:#A52A2A">__Ql_iotCmdBusLocReportInside__</span>

This function reports the location data of the built-in positioning feature of the device (It is recommended to call Ql_iotCmdBusLocReportInside_ex() to report the location data. Uplink data ID is returned after the location data is reported).

__Prototype__

```c
qbool Ql_iotCmdBusLocReportInside(void *titleTtlv)
```

__Parameter__

* __Input__
  * __void *__   __`titleTtlv`__: TTLV data table head of positioning type to be reported.

__Return Value__

* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 
* This function is supported in SDK version 2.6.1 and above.

---


__Example__

```c
void *titleTtlv = NULL;
Ql_iotTtlvIdAddString(&titleTtlv, 0, "LBS");
Ql_iotCmdBusLocReportInside(titleTtlv);
Ql_iotTtlvFree(&titleTtlv);
```

---

<span id="Ql_iotCmdBusLocReportInside_ex">  </span>

## <span style="color:#A52A2A">__Ql_iotCmdBusLocReportInside_ex__</span>

This function reports the location data of the built-in positioning feature of the device.

__Prototype__

```c
qint32_t Ql_iotCmdBusLocReportInside_ex(void *titleTtlv)
```

__Parameter__
* __Input__
  * __void *__   __`titleTtlv`__: TTLV data table head of NMEA sentence type to be reported.

__Return Value__
* __`-1`__: Failed execution
* __`1–65535`__: Uplink data ID

__NOTE__ 
* This function is supported in SDK version 2.10.0 and above.

---


__Example__

```c
void *titleTtlv = NULL;
qbool ret = Ql_iotCmdBusLocReportInside_ex(titleTtlv);
Ql_iotTtlvFree(&titleTtlv);
```

---

<span id="Ql_iotCmdBusLocReportOutside">  </span>

## <span style="color:#A52A2A">__Ql_iotCmdBusLocReportOutside__</span>

This function reports location data obtained from an external GNSS module. (It is recommended to call Ql_iotCmdBusLocReportOutside_ex() to report the location data. Uplink data ID is returned after the location data is reported).
__Prototype__

```c
qbool Ql_iotCmdBusLocReportOutside(void *nmeaTtlv)
```

__Parameter__
* __Input__
  * __void *__   __`nmeaTtlv`__: TTLV data table head of NMEA sentence data to be reported.

__Return Value__
* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__ 
* This function is supported in SDK version 2.6.1 and above.

---

__Example__

```c
/* Send location data obtained from the external GNSS module. */
void *nmeaTtlv=NULL;
Ql_iotTtlvIdAddString(&nmeaTtlv,0,"$GPGGA,042523.0,3413.610533,N,10854.063257,E,1,05,2.6,438.5,M,-28.0,M,,*78");
Ql_iotTtlvIdAddString(&nmeaTtlv,0,"$GPRMC,042523.0,A,3413.610533,N,10854.063257,E,0.0,245.9,190716,0.0,E,A*0F");
Ql_iotCmdBusLocReportOutside(nmeaTtlv);
Ql_iotTtlvFree(&nmeaTtlv);
```

---

<span id="Ql_iotCmdBusLocReportOutside_ex">  </span>

## <span style="color:#A52A2A">__Ql_iotCmdBusLocReportOutside_ex__</span>

This function reports location data obtained from an external GNSS module.

__Prototype__

```c
qint32_t Ql_iotCmdBusLocReportOutside_ex(void *nmeaTtlv)
```

__Parameter__
* __Input__
  * __void *__   __`nmeaTtlv`__: TTLV data table head of NMEA type to be reported.

__Return Value__
* __`-1`__: Failed execution
* __`1–65535`__: Uplink data ID

__NOTE__ 
* This function is supported in SDK version 2.10 and above.

---

__Example__

```c
void *titleTtlv = NULL;
qbool ret = Ql_iotCmdBusLocReportOutside_ex(titleTtlv);
Ql_iotTtlvFree(&titleTtlv);
```

---