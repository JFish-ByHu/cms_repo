# GNSS&LBS&Wi-Fi Positioning Example

## **Introduction**

Currently, Developer Center location service supports **GNSS positioning**, **LBS positioning,** and **Wi-Fi positioning** to determine the specific location of the device. This section will introduce how to obtain and report location data to the Developer Center.

* __GNSS Positioning__ 
  The module connects with an external GNSS module to realize satellite positioning.
* __LBS Positioning__ 
  LBS Positioning is based on the station positioning system of communication operators.
* __Wi-Fi Positioning__ 
  A location tracking system based on wireless router signal.

## **Related AT Commands**


|  AT Command   |                              Description                              |
| :-----------: | :-------------------------------------------------------------------: |
| AT+QIOTLOCIN  | Obtain/Report Location Data of Built-in Positioning Feature of Module |
| AT+QIOTLOCEXT |        Report Location Data Obtained from External GNSS Module        |

<span style='color:#999AAA'>Note: See [GNSS&LBS&Wi-Fi Positioning Commands](/deviceDevelop/DeviceAccessPlan/nb/AT/API/nb-at-06) for details.</span>


## **Procedure**

### **Operation on Developer Center**

### **1. Log in to Developer Center**

Log in to <a href="https://core.acceleronix.io"  target="_blank">Developer Center</a>. If you don't have an account click <a href="https://core.acceleronix.io/registerType" target="_blank">Register Now</a> to register.


### **2. Create a Product** 

Creating a product is the first step in product development. A product is an abstract description of a class of devices defined by Developer Center, which is used to manage devices of the same category. For example, if you have an aromatherapy diffuser with LTE networking capability and you need to connect the aromatherapy diffuser to Developer Center to monitor it, you can define it as a product: "Smart Aromatherapy Diffuser".

### **Example 1 (Obtain location data of the module's built-in positioning feature)**

1. Obtain NMEA sentence type of the built-in positioning feature of the module.

```c
[TX]AT+QIOTLOCIN?

[RX]+QIOTLOCIN: "AUTO","LBS"

[RX]OK
```

2. Obtain the location data of the module through NMEA sentences.

```c
[TX]AT+QIOTLOCIN=1,"LBS"

[RX]+QIOTLOCIN: "$LBS,460,02,0,455,-113,0*71"
[RX]+QIOTLOCIN: "$LBS,460,01,0,456,-100,0*69"


[RX]OK
```

### **Example 2 (Report location data of the built-in positioning feature of the module)**

1. Query the type of the built-in positioning feature of the module.

```c
[TX]AT+QIOTLOCIN?

[RX]+QIOTLOCIN: "AUTO","LBS"

[RX]OK
```

2. Report location data of the module's built-in positioning feature to Developer Center.

```c
[TX]AT+QIOTLOCIN=0,"LBS"

[RX]OK

[RX]+QIOTEVT: 4,10220
```

### **Example 3 (Report location data obtained from external GNSS module)**

1. Obtain the location data from an external GNSS module
b y connecting MCU with the external GNSS module, the GNSS module will print NMEA data to MCU after receiving the positioning data. For example, the NMEA data obtained by GNSS module is __$GPGGA,042523.0,3116.552,N,12138.7385,E,1,05,2.6,438.5,M,-28.0,M,,*78"__ .

2. Report the obtained location data to Developer Center.

Execute __AT+QIOTLOCEXT__ to report the NMEA data obtained from the external GNSS module to Developer Center.

```c
[TX]AT+QIOTLOCEXT="$GPGGA,042523.0,3116.552,N,12138.7385,E,1,05,2.6,438.5,M,-28.0,M,,*78"

[RX]OK

[RX]+QIOTEVT: 4,10220
```

3. View device location on Developer Center.
Open the "__Device Details__" page, and click "__Location__" to view the location data.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/LBS&GNSS/Example-01.png">![img](/en/deviceDevelop/develop/LBS&GNSS/Example-01.png)</a>


### **Example 4 (Obtain location data of the module's Wi-Fi positioning feature)**
__1. Obtain operation type and NMEA data type of the module's Wi-Fi positioning feature__

```c
[TX]AT+QIOTLOCIN?

[RX]+QIOTLOCIN: "AUTO","WIFI"

[RX]OK
```

__2. Obtain NMEA location data of the module's Wi-Fi positioning feature__
```c
[TX]AT+QIOTLOCIN=1,"WIFI"

[RX]+QIOTLOCIN: "$WIFI,687724457D14,515545435F574946495F544553542C,-100*2A"


[RX]OK
```

__3. View device location on Developer Center__

Open the "__Device Details__" page, and click "__Location__" to view the location data.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/LBS&GNSS/Example-02.png">![img](/en/deviceDevelop/develop/LBS&GNSS/Example-02.png)</a>

### __Example 5 (Report location data of the module's Wi-Fi positioning feature)__

__1. Report location data of the module's Wi-Fi positioning feature to Developer Center__

```c
[TX]AT+QIOTLOCIN=0,"WIFI"

[RX]OK

[RX]+QIOTEVT: 4,10220
```
__2. Developer Center queries the location data of the module's Wi-Fi positioning feature__

Open the "__Device Details__" page, and click "__Location__" to view the location data.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/LBS&GNSS/Example-03.png">![img](/en/deviceDevelop/develop/LBS&GNSS/Example-03.png)</a>
