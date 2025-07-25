# Data Interaction Commands

## **Data Interaction Command Overview**

These AT commands realize the feature of data interaction after the device is connected to Developer Center, including sending and receiving transparent transmission data, sending and receiving TSL data and reporting request information.

|            AT Command             |                          Description                          |
| :-------------------------------: | :-----------------------------------------------------------: |
|    [AT+QIOTSEND](#AT+QIOTSEND)    |    Send Transparent Transmission Data to Developer Center     |
|      [AT+QIOTRD](#AT+QIOTRD)      | Read Transparent Transmission Data Issued by Developer Center |
| [AT+QIOTMODELTD](#AT+QIOTMODELTD) |               Send TSL Data to Developer Center               |
| [AT+QIOTMODELRD](#AT+QIOTMODELRD) |           Read TSL Data Issued by Developer Center            |
|    [AT+QIOTINFO](#AT+QIOTINFO)    |        Request QuecThing to Report Device Information         |

## **AT Command Description**

<span id="AT+QIOTSEND">  </span>

## <span style="color:#A52A2A">__AT+QIOTSEND (Send Transparent Transmission Data to Developer Center)__</span>

* __Description__: This command sends transparent transmission data to Developer Center.
* __Maximum Response Time__: 300 ms.
* __Characteristics__: The command takes effect immediately.

### Test Command

* __Issue__

  ```c
  AT+QIOTSEND=?
  ```

* __Response__

  Return the supported sending modes and range of data length.

  ```c
  +QIOTSEND: (range of supported <mode>s),(range of supported <length>s),<data>
  
  OK
  ```

### **Write Command**

* __Issue__

  ```c
  AT+QIOTSEND=<mode>,<length>[,<data>]
  ```

* __Response__

  If the optional parameter is specified and the connection is established,

  * If a Package ID has been configured to respond to the uplink message:

  ```c
  +QIOTSEND: <txid>
  
  OK
  ```

  * If not:

  ```c
  OK
  ```

  If the optional parameter is omitted and the connection is established,

  ```c
  >
  ```

  After "__>__" is responded, input the data with the length equal to \<length>
    * If it is required to configure a Package ID for the device to report a message to Developer Center:

    ```c
    +QIOTSEND: <txid>
    
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

* __Parameter__
  * __`<mode>` :__ Integer type. Data sending mode.<br>
    * __`0` :__ Send NON data and the set the carried RAI to 0
    * __`1` :__ Send NON data and the set the carried RAI to 1
    * __`2` :__ Send NON data and the set the carried RAI to 2
    * __`100` :__ Send CON data and the set the carried RAI  to 0
    * __`101` :__ Send CON data and the set the carried RAI to 1
    * __`102` :__ Send CON data and the set the carried RAI to 2
    <br>
    <span style="color:#999AAA">
    Explanation of sending modes:<br />
    In NON mode, the server ACK is not required for sending data.<br />
    In CON mode,  after the module sends data and receives the server ACK, it will notify the application layer by URC.<br />
    Explanation of RAI:<br />
    0: No indication<br />
    1: No further uplink or downlink data is expected after the data is sent and the core network can be released immediately.<br />
    2: A single downlink data packet with corresponding reply is expected after the data is sent and the core network can be released immediately.</span>

 * __`<length>`__: Integer type. The length of data to be sent. Unit: byte.
    * If \<data\> in Write Command is specified, the length range is the actual value returned by Test Command.
    * If \<data\> in Write Command is omitted, the length range depends on the performance of the specific module.

 * __`<data>`__ : Data to be sent.
    * If \<data\> in Write Command is specified, the data to be sent can only be a string.
    * If \<data\> in Write Command is omitted, the data to be sent can be any byte stream type data, which depends on the performance of the specific module.
 * __`<txid>`__ : Integer type. Uplink data ID.
    * If QoS = 0, this value is 0.
    * If QoS > 0, range: 1–65535.

__NOTE__
* This command is supported in SDK versions 2.1.2 and above.  
  There will be event callback when \<mode\> is equal to 100, 101 or 102.

---

__Example 1 (Send transparent transmission data.)__  
<span style="color:#999AAA">Note: Ensure that the device is online during business data interaction.</span>

Send transparent transmission data "__ABCabc123456__" to Developer Center. Send “ABCabc123456” after __>__ is returned.

```c
[TX]AT+QIOTSEND=1,12

[RX]> 
[TX]ABCabc123456
[RX]OK

[RX]+QIOTEVT: 4,10200
```

***

<span id="AT+QIOTRD">  </span>

## <span style="color:#A52A2A">__AT+QIOTRD (Read Transparent Transmission Data Issued by Developer Center)__</span>

* __Description__: This command reads transparent transmission data issued by Developer Center.
* __Maximum Response Time__: 300 ms.
* __Characteristics__: The command takes effect immediately.

### Test Command

* __Issue__

  ```c
  AT+QIOTRD=?
  ```

* __Response__

  Return the data length to be read.

  ```c
  +QIOTRD: (range of supported <req_length>s)
  
  OK
  ```

### **Read Command**

* __Issue__

  ```c
  AT+QIOTRD?
  ```

* __Response__

  Return the number of remaining data packages.

  ```c
  +QIOTRD: <remain_pieces>
  
  OK
  ```


### **Write Command**

* __Issue__

  ```c
  AT+QIOTRD=<req_length>
  ```

* __Response__

  Successfully read the transparent transmission data.

  ```c
  +QIOTRD: <cur_len>,<remain_len>,<remain_pieces>
  <data>
  ```

  If not:

  ```c
  ERROR
  ```

---

__Parameter__
* __`<req_length>`__: Integer type. Length of data to be read. Length range is subject to the value returned by the Test Command.
* __`<cur_len>`__: Integer type. Length of data actually read.
* __`<data>`__: Byte stream type. Data actually read.
* __`<remain_len>`__: Integer type. Length of unread data remaining in the current data packet. Unit: byte.
* __`<remain_pieces>`__: Integer type. The number of remaining data package.

__NOTE__
* This command is supported in SDK versions 2.1.2 and above.

***

#### **Example**

 <span style="color:#999AAA">Note: Ensure that the device is online during business data interaction.</span>

__Example 1 (Read the downlink data in buffer mode.)__  
__i.__ Developer Center issues transparent transmission data "123456".  
__ii.__ The module prints the callback event __{+QIOTEVT: 5,10200}__.  
__iii.__ Send __AT+QIOTRD?__ to query the  number of remaining data packages.  
__iiii.__ Send __AT+QIOTRD=1024__ to query the data actually read.

```c
[RX]+QIOTEVT: 5,10200
[TX]AT+QIOTRD?

[RX]+QIOTRD: 1

[RX]OK
[TX]AT+QIOTRD=1024

[RX]+QIOTRD: 6,0,0
[RX]123456
[RX]OK
```

__Example 2 (Read the downlink data in unbuffered mode.)__
In unbuffered mode, the module will print the transparent transmission data issued by Developer Center to the port.

```c
[RX]+QIOTEVT: 5,10200,6
123456
```

***

<span id="AT+QIOTMODELTD">  </span>

## <span style="color:#A52A2A">__AT+QIOTMODELTD (Send TSL Data to Developer Center)__</span>

* __Description__: This command sends TSL data to Developer Center. If \<pkgID> is specified in Write Command, this command responds to Developer Center request. If \<pkgID> is omitted in Write Command, this command sends data to Developer Center. If the data is sent and QoS level is 1 or 2, +QIOTEVT: 4,10210 will be returned to indicate that TSL data was sent successfully.
* __Maximum Response Time__: 300 ms.
* __Characteristics__: The command takes effect immediately.


### **Test Command**

* __Issue__

  ```c
  AT+QIOTMODELTD=?
  ```

* __Response__

  Return the parameter range supported to be configured.

  ```c
  +QIOTMODELTD: (range of supported <mode>s),<length>,(range of supported <pkgID>s)
  
  OK
  ```


### **Write Command**

* __Issue__

  ```c
  AT+QIOTMODELTD=<mode>,<length>[,<pkgID>]
  ```

* __Response__

  ```c
  >
  After > is returned, input the byte stream data with the length equal to <length>.
  ```

  If response Package ID is required when you configure an uplink message, this command responds to Developer Center request.

  ```c
  OK
  ```

  If response Package ID is not required when you configure an uplink message, this command sends data to Developer Center.
  * When AT+QIOTCFG="txid_mode",1 is executed, it returns

  ```c
  +QIOTMODELTD: <txid>
  
  OK
  ```
  * Otherwise
 	
  ```c
  OK
  ```
 	
 	If there is any error:
 	```c
 	ERROR
 	```	

***


__Parameter__
* __`<mode>`__ Integer type. Data sending mode.<br>
  * __`0` :__ Send NON data and the set the carried RAI to 0
  * __`1` :__ Send NON data and the set the carried RAI to 1
  * __`2` :__ Send NON data and the set the carried RAI to 2
  * __`100` :__ Send CON data and the set the carried RAI  to 0
  * __`101` :__ Send CON data and the set the carried RAI to 1
  * __`102` :__ Send CON data and the set the carried RAI to 2
  <br>
  <span style="color:#999AAA">
  Explanation of sending modes:<br />
  In NON mode, the server ACK is not required for sending data.<br />
  In CON mode,  after the module sends data and receives the server ACK, it will notify the application layer by URC.<br />
  Explanation of RAI:<br />
  0: No indication<br />
  1: No further uplink or downlink data is expected after the data is sent and the core network can be released immediately.<br />
  2: A single downlink data packet with corresponding reply is expected after the data is sent and the core network can be released immediately.</span>

* __`<length>`__: Integer type. Length of data to be sent. Length range depends on the performance of the specific module model.
* __`<pkgID>`__:  Integer type. Request Package ID. Range: 1–65534. This parameter is required only when the device responds to the Developer Center request.
* __`<txid>`__ : Integer type.
  * If QoS = 0, `<txid>` is 0.
  * If QoS = 1 or 2,`<txid>`- range is 1–65535.


__NOTE__
* This command is supported in SDK versions 2.1.2 and above.
Parameter \<txid\> is not supported

---

#### Example 

 <span style="color:#999AAA">Note: Add TSL model on Developer Center according to actual project requirement. Ensure that the device is online during business data interaction.</span>

__Example 1 (Send TSL properties)__

* Feature ID: 1. Data Format: BOOL. Value: true.
* Feature ID: 2. Data Format: INT. Value: 100.
* Feature ID: 3. Data Format: FLOAT. Value: 28.56.
* Feature ID: 4. Data Format: ENUM. Value: 1.
* Feature ID: 5. Data Format: TEXT. Value: Hello World.
* Feature ID: 6. Data Format: DATE. Value: 1658030723000.
* Feature ID: 7. Data Format: STRUCT. Value: {"1":true,"2":100}.


```c
[TX]AT+QIOTMODELTD=1,93

[RX]> 
[TX]{"1":true,"2":100,"3":28.56,"4":1,"5":"Hello World","6":1658030723000,"7":{"1":true,"2":100}}
[RX]OK

[RX]+QIOTEVT: 4,10210
```

__Example 2 (Sending TSL event.)__

Feature ID: 2; { Output Parameter ID: 1; Data Format: FLOAT; Value: 25.86 }；

```c
[TX]AT+QIOTMODELTD=1,17

[RX]> 
[TX]{"2":{"1":25.86}}
[RX]OK

[RX]+QIOTEVT: 4,10210
```

__Example 3 (Respond to the Developer Center request package)__

__i.__ __Click "View" on the "Define Feature" Definition" Page__ of Developer Center.
__ii.__ The module prints callback function {+QIOTEVT: 5,10211,7,1}.
__iii.__ Respond to the TSL data whose Package ID is __7__.

```c
[TX]AT+QIOTMODELTD=1,11,7

[RX]> 
[TX]{"1":25.14}
[RX]OK
```

__Example 4 (Send an ARRAY of TSL properties in STRUCT format)__

* Feature ID: 8. Data Format: ARRAY. Maximum number of elements: 3.
  * Element type: STRUCT
    * Feature ID: 1. Data Format: BOOL.
    * Feature ID: 2. Data Format: INT.
    * Feature ID: 3. Data Format: ENUM.
    * Feature ID: 4. Data Format: TEXT.

```c
[TX]AT+QIOTMODELTD=1,120

[RX]> 
[TX]{"8":[{"1":true,"2":10,"3":1,"4":"ABC123"},{"1":false,"2":10,"3":1,"4":"ABC123"},{"1":false,"2":10,"3":1,"4":"ABC123"}]}
[RX]OK

[RX]+QIOTEVT: 4,10210
```


***

<span id="AT+QIOTMODELRD">  </span>

## <span style="color:#A52A2A">__AT+QIOTMODELRD (Read TSL data issued by Developer Center)__</span>

* __Description__: This command reads the TSL data issued by Developer Center.
* __Maximum Response Time__: 300 ms.
* __Characteristics__: The command takes effect immediately.

### **Test Command**

* __Issue__

  ```c
  AT+QIOTMODELRD=?
  ```

* __Response__

  Return the data range supported to be read.

  ```c
  +QIOTMODELRD: (range of supported <req_length>s)
  
  OK
  ```

### **Read Command**

* __Issue__

  ```c
  AT+QIOTMODELRD?
  ```

* __Response__

  Return the number of remaining data packets.

  ```c
  +QIOTMODELRD: <remain_pieces>
  
  OK
  ```

### **Write Command**

* __Issue__

  ```c
  AT+QIOTMODELRD=<req_length>
  ```

* __Response__

  If the optional parameter is specified and the connection is established:

  ```c
  +QIOTMODELRD: <cur_len>,<remain_len>,<remain_pieces>
  <data>	
  	
  OK
  ```

   If there is any error:

   ```c
  ERROR
   ```

***

__Parameter__
* __`<req_length>`__: Integer type. Length of the data to be read. Length range is subject to the value returned by Test Command.
* __`<cur_len>`__: Integer type. Length of the data actually read.
* __`<data>`__: Byte stream type. Data actually read.
* __`<remain_len>`__: Integer type. Length of unread data remaining in the current data packet. Unit: byte.
* __`<remain_pieces>`__: Integer type. Number of remaining data packets.

__NOTE__
* This command is supported in SDK versions 2.1.2 and above.

#### **Example**

<span style="color:#999AAA">Note: Add TSL model on Developer Center according to actual project requirement. Ensure that the device is online during business data interaction.</span>

__Example 1 (Read TSL data in unbuffered mode.)__

* Feature ID: 1. Data Format: BOOL. Value: true.
* Feature ID: 2. Data Format: INT. Value: 100.
* Feature ID: 3. Data Format: FLOAT. Value: 28.56.
* Feature ID: 4. Data Format: ENUM. Value: 1.
* Feature ID: 5. Data Format: TEXT. Value: Hello World.
* Feature ID: 6. Data Format: DATE. Value: 1658030723000.
* Feature ID: 7. Data Format: STRUCT. Value: {"1":true,"2":100}.


```c
[RX]+QIOTEVT: 5,10210,93
[RX]{"1":true,"2":100,"3":28.56,"4":1,"5":"Hello World","6":1658030723000,"7":{"1":true,"2":100}}
```

__Example 2 (Read TSL data in buffer mode.)__

* Feature ID: 1. Data Format: BOOL. Value: true.
* Feature ID: 2. Data Format: INT. Value: 100.
* Feature ID: 3. Data Format: FLOAT. Value: 28.56.
* Feature ID: 4. Data Format: ENUM. Value: 1.
* Feature ID: 5. Data Format: TEXT. Value: Hello World.
* Feature ID: 6. Data Format: DATE. Value: 1658030723000.
* Feature ID: 7. Data Format: STRUCT. Value: {"1":true,"2":100}.


```c
[RX]+QIOTEVT: 5,10210
[TX]AT+QIOTMODELRD=1024 
[RX]+QIOTMODELRD: 93,0,0
[RX]{"1":true,"2":100,"3":28.56,"4":1,"5":"Hello World","6":1658030723000,"7":{"1":true,"2":100}}

[RX]OK
```

***



<span id="AT+QIOTINFO">  </span>

## <span style="color:#A52A2A">__AT+QIOTINFO (Request QuecThing to Report Device Information)__</span>

* __Description__: This command requests QuecThing to report device information.
* __Maximum Response Time__: 300 ms.
* __Characteristics__: The command takes effect immediately.



### **Test Command**

* __Issue__

  ```c
  AT+QIOTINFO=?
  ```

* __Response__


	```c
	+QIOTINFO: "up"
	
	OK
	```

### **Read Command**

* __Issue__

  ```c
  AT+QIOTINFO?
  ```

* __Response__

  Return the keywords and data of the reported information.

  ```c
  +QIOTINFO: <item1>,<value1>
  [+QIOTINFO: <item2>,<value2>
  [...]]
  OK
  ```

  If there is any error:

  ```c
  ERROR
  ```

### **Write Command**

* __Issue__

  ```c
  AT+QIOTINFO="up"
  ```

* __Response__

  If device information is successfully reported:

  ```c
  OK
  ```

  If there is any error:

   ```c
  ERROR
   ```

***


__Parameter__
* __`<itemN>`__: String type. Keywords of reported information.
* __`<valueN>`__: String type. Information data.

__NOTE__
* This command is supported in SDK versions 2.1.2 and above.

---

#### **Example**

__Example 1 (Report device information)__

```c
[TX]AT+QIOTINFO="up"

[RX]OK
```