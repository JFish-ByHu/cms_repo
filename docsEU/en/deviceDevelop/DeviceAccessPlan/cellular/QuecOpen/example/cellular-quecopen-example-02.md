# GNSS&LBS&Wi-Fi Positioning Example

## **Introduction**

Currently, Developer Center location service supports **GNSS positioning**, **LBS positioning,** and **Wi-Fi positioning** to determine the specific location of the device. This section will introduce how to obtain and report location data to the Developer Center.

* __GNSS Positioning__ 
  The module connects with an external GNSS module to realize satellite positioning.
* __LBS Positioning__ 
  LBS Positioning is based on the station positioning system of communication operators.
* __Wi-Fi Positioning__ 
  A location tracking system based on wireless router signal.

## __Related API__

|             Function              | Description                                                                                                                |
| :-------------------------------: | :------------------------------------------------------------------------------------------------------------------------- |
|       Ql_iotLocGetSupList()       | Obtains NMEA sentence types of the module's built-in positioning feature.                                                  |
|        Ql_iotLocGetData()         | Obtains location data of the module's built-in positioning feature.                                                        |
|   Ql_iotCmdBusLocReportInside()   | Reports the location data of the built-in positioning feature of the device.                                               |
| Ql_iotCmdBusLocReportInside_ex()  | Reports the location data of the built-in positioning feature of the device (only valid in SDK versions 2.10.0 and above). |
|  Ql_iotCmdBusLocReportOutside()   | Reports location data obtained from external GNSS module.                                                                  |
| Ql_iotCmdBusLocReportOutside_ex() | Reports location data obtained from the external GNSS module (only valid in SDK versions 2.10.0 and above).                |

<span style='color:#999AAA'>Note: See [GNSS&LBS&Wi-Fi Positioning API](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-07) for details.</span>



### __Example 1 (Obtain NMEA sentences type of the module's built-in positioning feature)__

This function obtains the NMEA type head pointer of a TTLV linked list supported by the device's built-in positioning feature. The returned NMEA type node corresponds to the built-in positioning feature. A NULL return value indicates that the pointer could not be obtained.

```c
void *titleTtlv = Ql_iotLocGetSupList();
Ql_iotTtlvFree(&titleTtlv);
```

<span style="color:#999AAA">Note: Call Ql_iotTtlvFree() to release the resource after adding TSL model node and getting its information. Ql_iotTtlvFree() releases a memory block pointed to by the pointer, thus avoiding problems such as memory leakage.</span>



### __Example 2 (Obtain location data of the module's built-in positioning feature)__

This function obtains the NMEA type head pointer of a TTLV linked list, which contains location data supported by the device's built-in positioning feature. A NULL return value indicates that the pointer could not be obtained.

```c
void *locDataTtlv = Ql_iotLocGetData(titleTtlv);
Ql_iotTtlvFree(&titleTtlv);
```

<span style="color:#999AAA">Note: Call Ql_iotTtlvFree() to release the resource after getting the information.</span>




### __Example 3 (Report location data of the device's built-in positioning feature)__

__1. Report location data of the module's built-in positioning feature to Developer Center__

```c
  /* Send the location data of the built-in positioning feature of the device */
  void *titleTtlv = NULL;
  Ql_iotTtlvIdAddString(&titleTtlv, 0, "LBS");
  Ql_iotCmdBusLocReportInside(titleTtlv);
  Ql_iotTtlvFree(&titleTtlv);
```

<span style="color:#999AAA">Note: Call Ql_iotTtlvFree() to release head pointer of TTLV linked list  after using the pointer.</span>

### __Example 4 (Report location data obtained from external GNSS module)__

__1. Obtain the location data from the external GNSS module__

Connect the MCU with the external GNSS module to receive positioning data. The GNSS module will transmit NMEA data to the MCU, which can be used to determine the device's location. For example, the NMEA data obtained by GNSS module may look like this: **$GPGGA,042523.0,3116.552,N,12138.7385,E,1,05,2.6,438.5,M,-28.0,M,,\*78"**.

__2. Report the obtained location data to Developer Center__

Call __Ql_iotCmdBusLocReportOutside()__ to report the NMEA data obtained from the external GNSS module to Developer Center.

```c
/* Report the NMEA data obtained from the external GNSS module to Developer Center */
void *nmeaTtlv=NULL;
Ql_iotTtlvIdAddString(&nmeaTtlv,0,"$GPGGA,042523.0,3116.552,N,12138.7385,E,1,05,2.6,438.5,M,-28.0,M,,*78");
Ql_iotCmdBusLocReportOutside(nmeaTtlv);
Ql_iotTtlvFree(&nmeaTtlv);
```

__3. View device location on Developer Center__

Open the "__Device Details__" page, and click "__Location__" page to view the location data.
<a data-fancybox title="img" href="/en/deviceDevelop/develop/LBS&GNSS/Example-01.png">![img](/en/deviceDevelop/develop/LBS&GNSS/Example-01.png)</a>




### **Example 5 (Obtain location data of the module's Wi-Fi positioning feature)**
__1. Obtain operation type and NMEA data type of the module's Wi-Fi positioning feature__

```c
	void *titleTtlv = Ql_iotLocGetSupList();
  Ql_iotTtlvFree(&titleTtlv); 
```

__2. Obtain NMEA location data of the module's Wi-Fi positioning feature__

```c
  void *locDataTtlv = Ql_iotLocGetData(titleTtlv);
  Ql_iotTtlvFree(&titleTtlv);
```


__3. View device location on Developer Center__

Open the "__Device Details__" page, and click "__Location__" page to view the location data.
<a data-fancybox title="img" href="/en/deviceDevelop/develop/LBS&GNSS/Example-02.png">![img](/en/deviceDevelop/develop/LBS&GNSS/Example-02.png)</a>


### __Example 6 (Report location data of the module's Wi-Fi positioning feature)__

__1. Report location data of the module's Wi-Fi positioning feature to Developer Center__

```c
  /* Report location data of the module's built-in positioning feature to Developer Center */
  void *titleTtlv = NULL;
  Ql_iotTtlvIdAddString(&titleTtlv, 0, "WiFi");
  Ql_iotCmdBusLocReportInside_ex(titleTtlv);
  Ql_iotTtlvFree(&titleTtlv);
```
__2. Developer Center queries the location data of the module's Wi-Fi positioning feature__

Open the "__Device Details__" page, and click "__Location__" page to view the location data.
<a data-fancybox title="img" href="/en/deviceDevelop/develop/LBS&GNSS/Example-03.png">![img](/en/deviceDevelop/develop/LBS&GNSS/Example-03.png)</a>


