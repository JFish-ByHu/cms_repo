# GNSS&LBS&Wi-Fi Positioning Commands

## **GNSS&LBS&Wi-Fi Positioning Command Overview**

|           AT Command            |                              Description                              |
| :-----------------------------: | :-------------------------------------------------------------------: |
|  [AT+QIOTLOCIN](#AT+QIOTLOCIN)  | Obtain/Report Location Data of Built-in Positioning Feature of Module |
| [AT+QIOTLOCEXT](#AT+QIOTLOCEXT) |        Report Location Data Obtained from External GNSS Module        |

## **AT Command Description**

<span id="AT+QIOTLOCIN">  </span>

## <span style="color:#A52A2A">__AT+QIOTLOCIN (Obtain/Report Location Data of Built-in Positioning Feature of Module)__</span>

* __Description__: This command obtains or reports the location data of the built-in positioning device feature.
* __Maximum Response Time__: 300 ms.


### **Test Command**

* __Issue__

  ```c
  AT+QIOTLOCIN=?
  ```

* __Response__

  Return the supported parameter range.

  ```c
  +QIOTLOCIN: <type>,<mode1>[,<mode2>[,...]]
  
  OK
  ```

### **Read Command**

* __Issue__

  ```c
  AT+QIOTLOCIN?
  ```

* __Response__

  Return the current NMEA data

  ```c
  +QIOTLOCIN: <mode1>[,<mode2>[,...]]
  
  OK
  ```

### **Write Command**

* __Issue__

  ```c
  AT+QIOTLOCIN=<type>,<mode1>[,<mode2>[,...]]
  ```

* __Response__

  If the command is executed successfully:

  * If \<type\>=1, obtain the location data of the built-in positioning feature of the device:

  ```c
  [+QIOTLOCIN: <nmea1>]
  [+QIOTLOCIN: <nmea2>]
  [...]
  
  OK
  ```

  * If \<type\>=0, report the location data of the built-in positioning feature of the device:
    * If a Package ID has been configured to respond to the uplink message:

    ```c
    +QIOTLOCIN: <txid>
    
    OK
    ```

    * If not:

    ```c
    OK
    ```

  If there is any error:

  ```c
  ERROR
  ```

***

__Parameter__
* __`<type>`__ Integer type. Operation type.  
  * __`0` :__ Report NMEA sentence data to Developer Center
  * __`1` :__ Obtain current NMEA sentence data of the device
* __`<modeN>`__ String type. NMEA sentence data type.
* __`<nameN>`__ String type. NMEA sentence data.
* __`<txid>`__ Integer type. Uplink data ID. Range: 1–65535.

__NOTE__
* This command is supported in SDK versions 2.1.2 and above.
  Parameter \<txid\> is not supported.

---

#### **Example**

__Example 1 (Query location data of built-in positioning feature of device.)__  

```c
[TX]AT+QIOTLOCIN?

[RX]+QIOTLOCIN: "AUTO","LBS"

[RX]OK
```

__Example 2 (Obtain location data of built-in positioning feature of device.)__  

```c
[TX]AT+QIOTLOCIN=1,"LBS"

[RX]+QIOTLOCIN: "$LBS,460,02,0,455,-113,0*71"
[RX]+QIOTLOCIN: "$LBS,460,01,0,456,-100,0*69"


[RX]OK
```

__Example3 (Report location data of built-in positioning feature of device to Developer Center.)__  

```c
[TX]AT+QIOTLOCIN=0,"LBS"

[RX]OK

[RX]+QIOTEVT: 4,10220
```

***

<span id="AT+QIOTLOCEXT">  </span>

## <span style="color:#A52A2A">__AT+QIOTLOCEXT (Report Location Data Obtained from External GNSS Module)__</span>

* __Description__: This command reports the location data obtained from the external GNSS module.
* __Maximum Response Time__: 300 ms.


### Test Command

* __Issue__

  ```c
  AT+QIOTLOCEXT=?
  ```

* __Response__

  Return the parameter range supported to be set.

  ```c
  +QIOTLOCEXT: <nmea1>[,<nmea2>[,...]]

  OK
  ```

### **Write Command**

* __Issue__

  ```c
  AT+QIOTLOCEXT=<nmea1>[,<nmea2>[,...]]
  ```

* __Response__

  If the command is executed successfully:

  * If a Package ID has been configured to respond to the uplink message: 

  ```c
  +QIOTLOCEXT: <txid>
  
  OK
  ```

  * If not:

  ```c
  OK
  ```

  If there is any error:

  ```c
  ERROR
  ```

***

__Parameter__
* __\<nameN\>__ String type. NMEA sentence data.
* __\<txid\>__ Integer type. Uplink data ID. Range: 1–65535.

__NOTE__
* This command is supported in SDK versions 2.1.2 and above.
  Parameter __\<txid\>__ is not supported.

---

#### **Example**

__Example 1 (Report location data obtained from external GNSS module to Developer Center.)__  

```c
[TX]AT+QIOTLOCEXT="$GPGGA,042523.0,3116.552,N,12138.7385,E,1,05,2.6,438.5,M,-28.0,M,,*78"

[RX]OK

[RX]+QIOTEVT: 4,10220
```

***