# GNSS&LBS&Wi-Fi Positioning Example
## __Introduction__
Currently, Developer Center location service supports **GNSS positioning**, **LBS positioning,** and **Wi-Fi positioning** to determine the specific location of the device. This section will introduce how to obtain and report location data to the Developer Center.
* __GNSS Positioning__ 
	The module connects with an external GNSS module to realize satellite positioning.
* __LBS Positioning__ 
The module connects with an external cellular module to realize LBS positioning.
* __Wi-Fi Positioning__ 
A location tracking system based on wireless router signal.
## __Related APIs__

|           Function           | Description                                                                   |
| :--------------------------: | :---------------------------------------------------------------------------- |
|  Qth_locGetInsideLocation()  | Gets the location data of the module's built-in Wi-Fi positioning feature.    |
| Qth_locSendInsideLocation()  | Reports the location data of the module's built-in Wi-Fi positioning feature. |
| Qth_locSendOutsideLocation() | Reports the location data obtained from the external GNSS module.             |

<span style='color:#999AAA'>Note: See [GNSS&LBS&Wi-Fi Positioning API](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-08) for details.</span>

### __Example 1 (Reports the location data obtained from the external GNSS module.)__
__1. Get the location data of the external GNSS module.__

Connect the Wi-Fi module with the external GNSS module to receive location data. The GNSS module will print the NMEA data to the Wi-Fi module after receiving location data. For example, the NMEA data obtained by the external GNSS module is __$GPGGA,042523.0,3116.552,N,12138.7385,E,1,05,2.6,438.5,M,-28.0,M,,*78"__ .

__2. Report the location data obtained from the external GNSS module to Developer Center__

Call __Qth_locSendOutsideLocation()__ to report the NMEA data obtained from the external GNSS module to Developer Center.

```c
/* Report the NMEA data obtained from the external GNSS module to Developer Center. */
    Qth_locSendOutsideLocation("$GPGGA,042523.0,3116.552,N,12138.7385,E,1,05,2.6,438.5,M,-28.0,M,,*78", NULL, NULL);
```
__3. View the device location on Developer Center__

Open the "**Device Details**" page, and click the "**Location**" tab to view the location data. 

<a data-fancybox title="img" href="/en/deviceDevelop/develop/LBS&GNSS/Example-02.png">![img](/en/deviceDevelop/develop/LBS&GNSS/Example-02.png)</a>


### **Example 2 (Get the location data of the module's built-in Wi-Fi positioning feature)**

__Get the NMEA location data of the module's Wi-Fi positioning feature__

```c
    void *nmeaTtlv = Qth_locGetInsideLocation();
    Quos_ttlvFree(&nmeaTtlv);
```

### __Example 3 (Report the location data of the module's built-in Wi-Fi positioning feature)__

__1. Report location data of the module's Wi-Fi positioning feature to Developer Center__

```c
    /* Report location data of the module's built-in positioning feature to Developer Center. */
    Qth_locSendInsideLocation(NULL, NULL);
```
__2. View the device location on Developer Center__

Open the "**Device Details**" page, and click the "**Location**" tab to view the location data. 

<a data-fancybox title="img" href="/en/deviceDevelop/develop/LBS&GNSS/Example-03.png">![img](/en/deviceDevelop/develop/LBS&GNSS/Example-03.png)</a>



