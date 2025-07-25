# Product Configuration Commands

## **Product Configuration Command Overview**

|           AT Command            |          Description          |                                                                                                                                                                                                                                                                                                                                                                         Note                                                                                                                                                                                                                                                                                                                                                                         |
| :-----------------------------: | :---------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    [AT+QIOTCFG](#AT+QIOTCFG)    | Configure Optional Parameters | __Optional Parameters :__<br>● [Query/Configure product information](#Query/Configure-product-information)<br/>● [Query/Configure server information](#Query/Configure-server-information)<br/>● [Query/Configure the lifetime of device](#Query/Configure-the-lifetime-of-device)<br/>● [Query/Configure the buffer mode of downlink data](#Query/Configure-the-buffer-mode-of-downlink-data)<br/>● [Query/Configure PDP context ID](#Query/Configure-PDP-context-ID)<br/>● [Query/Configure TSL data format](#Query/Configure-TSL-data-format)<br/>● [Query/Configure custom DeviceKey and DeviceSecret](#Query/Configure-custom-DeviceKey-and-DeviceSecret)<br/>● [Query/Configure device Pre-Shared Key](#Query/Configure-device-Pre-Shared-Key) |
|    [AT+QIOTREG](#AT+QIOTREG)    |   Configure Connection Mode   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  [AT+QIOTSTATE](#AT+QIOTSTATE)  |    Query Connection Status    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [AT+QIOTMCUVER](#AT+QIOTMCUVER) | Configure MCU Version Number  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

## **AT Command Description**

<span id="AT+QIOTCFG">  </span>

## <span style="color:#A52A2A">__AT+QIOTCFG (Configure Optional Parameters)__</span><br>

* __Description__: This command configures optional parameters.
* __Maximum Response Time__: 300 ms.
* __Characteristics__:   The command takes effect immediately. The configurations are saved automatically.


### **Test Command**

* __Issue__

  ```c
  AT+QIOTCFG=?
  ```

* __Response__

  ```c
  +QIOTCFG: "productinfo",<pk>,<ps>
  +QIOTCFG: "server",(list of supported <server_type>s),<server_URL>
  +QIOTCFG: "lifetime",(range of supproted <lifetime>s)
  +QIOTCFG: "buffer",(list of supported <buffer_mode>s)
  +QIOTCFG: "act",(range of supported <contextID>s)
  +QIOTCFG: "tsl",(list of supported <tsl_mode>s)
  +QIOTCFG: "dk_ds",<dk>[,<ds>]
  +QIOTCFG: "psk"[,<psk>]
  OK
  ```

* __Example (Query configurable information and range)__


  After the module is powered up, if no parameter is configured, execute __AT+QIOTCFG=?__ to query the configurable information and ranges.

  ```c
  [TX]AT+QIOTCFG=?
  
  [RX]+QIOTCFG: "productinfo",<pk>,<ps>
  +QIOTCFG: "server",1,<server_URL>
  +QIOTCFG: "lifetime",(1–864000)
  +QIOTCFG: "buffer",(0,1)
  +QIOTCFG: "act",(1-15)
  +QIOTCFG: "tsl",(0,1)
  +QIOTCFG: "dk_ds",<dk>,<ds>
  +QIOTCFG: "psk"[,<psk>]
  [RX]
  
  OK
  ```

###  **Write Command**
<span id="Query/Configure-product-information">  </span>

* ##### <span style="color:#A52A2A"> __Query/Configure product information__ </span>
  * __Issue__

    ```c
    AT+QIOTCFG="productinfo"[,\<pk\>,\<ps\>]
    ```

  * __Response__

    If the optional parameters are omitted, query the current setting:

    ```c
    +QIOTCFG: "productinfo",<pk>,<ps>,<ver> 
    
    OK
    ```

    If the optional parameters are specified, Configure the product information:

    ```c
    OK
    ```

      If  there is any error:  

    ```c
    ERROR
    ```
  
  ---

  * __Parameter__
    * __`<pk>`__ String type. ProductKey generated when a product is created.
    * __`<ps>`__ String type. ProductSecret generated when a product is created.
    * __`<ver>`__ String type. Protocol version used for device authentication.

  * __NOTE__
    * This command is supported in SDK versions 2.1.2 and above.

  ---

  * __Example (Initialize product information.)__

  	```c
  	AT+QIOTCFG="productinfo","p****n","RMW**********Dlt"
  	
  	OK
  	```

---
<br>

<span id="Query/Configure-server-information">  </span>

* ##### <span style="color:#A52A2A"> __Query/Configure server information__ </span>
  * __Issue__

    ```c
    AT+QIOTCFG="server"[,<server_type>,<server_URL>]
    ```

  * __Response__

    If the optional parameter is omitted, query the current setting:

    ```c
    +QIOTCFG:"server",<server_type>,<server_URL>
    
    OK
    ```

    If the optional parameter is specified, configure the server information:

    ```c
    OK
    ```

    If there is any error:

    ```c
    ERROR
    ```

  ---

  * __Parameter__
    * __`<server_type>`__ Integer type. Supported protocol type.
      * __`0`__ : LwM2M

    * __`<server_URL>`__ String type. Server URL (domain name and port of Developer Center).
      * Default:`"coap://iot-south.quectelcn.com:5683"`.

      | region                                              | server URL                           |
      | --------------------------------------------------- | ------------------------------------ |
      | Non-encrypted in China                              | coap://iot-south.quectelcn.com:5683  |
      | Encryption in China                                 | coaps://iot-south.quectelcn.com:5684 |
      | Non-encrypted in Europe                             | coap://iot-south.acceleronix.io:5683  |
      | Encryption in Europe                                | coaps://iot-south.acceleronix.io.5684 |


  * __NOTE__
    * This command is supported in SDK versions 2.1.2 and above.

  ---

  * __Example (Set server information.)__

    ```c
    AT+QIOTCFG="server",0,"coap://iot-south.acceleronix.io:5683"
    
    OK
    ```

---
<br>

<span id="Query/Configure-the-lifetime-of-device">  </span>

* ##### <span style="color:#A52A2A"> __Query/Configure the lifetime of device__ </span>
  * __Issue__

    ```c
    AT+QIOTCFG="lifetime"[,<lifetime>] 
    ```

  * __Response__

    If the optional parameter is omitted, query the current setting:

    ```c
    +QIOTCFG: "lifetime",<lifetime>
    
    OK
    ```

    If the optional parameter is specified, configure the lifetime of the device:

    ```c
    OK
    ```

    If there is any error:

    ```c
    ERROR
    ```

  ---

  * __Parameter__
    * __`<lifetime>`__ Integer type. Device lifetime. Range: 1–864000. Default: 86400. Unit: second.

  * __NOTE__
    * This command is supported in SDK versions 2.1.2 and above.

  ---

  * __Example (Configure the lifetime of device.)__

      ```c
      AT+QIOTCFG="lifetime",86400
      
      OK
      
      ```

---
<br>

<span id="Query/Configure-the-buffer-mode-of-downlink-data">  </span>

* ##### <span style="color:#A52A2A"> __Query/Configure the buffer mode of downlink data__ </span>
  * __Issue__

    ```c
    AT+QIOTCFG="buffer"[,<buffer_mode>]
    ```

  * __Response__

    If the optional parameter is omitted, query the current setting:

    ```c
    +QIOTCFG: "buffer",<buffer_mode>
    
    OK
    ```

    If the optional parameter is specified, configure the buffer mode of downlink data:

    ```c
    OK
    ```

    If there is any error:

    ```c
    ERROR
    ```

  ---

  * __Parameter__
    * __`<buffer_mode>`__ Integer type. Enable or disable buffer mode for downlink data.
      * __`0`__ : Disable
      * __`1`__ : Enable

  * __NOTE__
    * This command is supported in SDK versions 2.1.2 and above.

  ---

  * __Example (Enable the buffer mode of downlink data.)__

  ```c
  AT+QIOTCFG="buffer",1
  
  OK
  ```

---
<br>

<span id="Query/Configure-PDP-context-ID">  </span>

* ##### <span style="color:#A52A2A"> __Query/Configure PDP context ID__ </span>
  * __Issue__

  	```c
  	AT+QIOTCFG="act"[,<contextID>]
  	```

  * __Response__

  	If the optional parameter is omitted, query the current setting:
  	
  	```c
  	+QIOTCFG: "act",<contextID>
  	
  	OK
  	```
  	
  	If the optional parameter is specified, configure the PDP context ID used for device to connect to Developer Center:
  	```c
  	OK
  	```
  	If there is any error:
  	```c
  	ERROR
  	```

  ---

  * __Parameter__
    * __`<contextID>`__ Integer type. PDP context ID. Range: 1–15. The actual range is subject to the specific module model.

  * __NOTE__
  	* This command is supported in SDK versions 2.1.2 and above.

  ---

  * __Example (Configure the PDP context ID used for device connecting to Developer Center.)__

  	```c
  	AT+QIOTCFG="act",1
  	
  	OK
  	```

---
<br>

<span id="Query/Configure-TSL-data-format">  </span>

* ##### <span style="color:#A52A2A"> __Query/Configure TSL data format__ </span>
  * __Issue__

    ```c
    AT+QIOTCFG="tsl"[,<tsl_mode>]
    ```

  * __Response__

    If the optional parameter is omitted, query the current setting:

    ```c
    +QIOTCFG: "tsl",<tsl_mode>
    
    OK
    ```

    If the optional parameter is specified, configure TSL data format:

    ```c
    OK
    ```

    If there is any error:

    ```c
    ERROR
    ```

  ---

  * __Parameter__
    * __`<tsl_mode>`__ Integer type. TSL data format.
      * __`0`__ : TTLV
      * __`1`__ : JSON

  * __NOTE__
    * This command is supported in SDK versions 2.1.2 and above.

  ---

  * __Example (Set TSL data format to JSON)__
    ```c
    AT+QIOTCFG="tsl",1
    
    OK
    ```

---
<br>

<span id="Query/Configure-custom-DeviceKey-and-DeviceSecret">  </span>

* ##### <span style="color:#A52A2A"> __Query/Configure custom DeviceKey and DeviceSecret__ </span>
  * __Issue__

    ```c
    AT+QIOTCFG="dk_ds",[<dk>[,<ds>]]
    ```

  * __Response__

    If the optional parameter is omitted, query the custom DeviceKey and DeviceSecret (only the DeviceKey and DeviceSecret customized by this command can be queried):

    ```c
    +QIOTCFG:"dk_ds",<dk>,<ds>
    
    OK
    ```

    If only \<dk\> is specified and is an empty string, delete the customized \<dk\> and \<ds\>, and default configuration is used:

    ```c
    OK
    ```

    If only \<dk\> is specified and is not empty, customize the DeviceKey (then the device starts authentication process):

    ```c
    OK
    ```

    If the optional parameters are specified and are not empty, customize the DeviceKey and DeviceSecret:

    ```c
    OK
    ```

    If the optional parameters are specified and are empty strings, remove the customized DeviceKey and DeviceSecret:

    ```c
    OK
    ```

    If there is any error:

    ```c
    ERROR
    ```

  ---

  * __Parameter__
    * __`<dk>` :__ String type. DeviceKey, i.e., the customized unique identifier for the device. Cellular modules use IMEI as the default identifier, while wireless modules, such as Wi-Fi modules, use MAC address.
    * __`<ds>` :__ String type. DeviceSecret generated after device authentication.

  * __NOTE__
    * This command is supported in SDK versions 2.1.2 and above.

  ---

  * __Example (Configure custom DeviceKey)__
  	```c
  	AT+QIOTCFG="dk_ds","12345678"
  	
  	OK
  	```

---
<br>

<span id="Query/Configure-device-Pre-Shared-Key">  </span>

* ##### <span style="color:#A52A2A"> __Query/Configure device Pre-Shared Key__ </span>
* __Query/Configure device Pre-Shared Key__

  * __Issue__

    ```c
    AT+QIOTCFG="psk",[<psk>]
    ```

  * __Response__

    If the optional parameter is omitted, query the current Pre-Shared Key:

    ```c
    +QIOTCFG:"psk",<psk>
    
    OK
    ```

    If the optional parameter is specified and are empty strings, remove the Pre-Shared Key:

     ```c
    OK
     ```

    If the optional parameter is specified and are not empty, configure the device Pre-Shared Key:

     ```c
    OK
     ```

    If there is any error:

    ```c
    ERROR
    ```

    ---

  * __Parameter__
    * __`<psk>`__ String type. Device Pre-Shared Key. Maximum length: 32 bytes.

  * __NOTE__
    * This command is supported in SDK versions 2.1.2 and above.

  ---

  * __Example (Configure device Pre-Shared Key)__

    ```c
    [TX]AT+QIOTCFG="psk","1234567890"
    
    [RX]OK
    ```
---

<span id="AT+QIOTREG">  </span>

## <span style="color:#A52A2A">__AT+QIOTREG (Configure Connection Mode)__</span>

* __Description__: This command configures the connection mode.
* __Maximum Response Time__: 300 ms.
* __Characteristics__: The command takes effect immediately. The configuration is saved automatically.

### **Test Command**

* __Issue__

  ```c
  AT+QIOTREG=?
  ```

* __Response__

  Return the range of supported connection mode.

  ```c
  +QIOTREG: (range of supported <reg_mode>s)
  
  OK
  ```

### **Read Command**

* __Issue__

  ```c
  AT+QIOTREG?
  ```

* __Response__

  Return the range of supported connection mode.

  ```c
  +QIOTREG: <reg_mode>
  
  OK
  ```

### **Write Command**

* __Issue__

  ```c
  AT+QIOTREG=<reg_mode>
  ```

* __Response__

  If the command is executed successfully:

  ```c
  OK
  ```

  If there is any error:

   ```c
  ERROR
   ```

***

__Parameter__
  * __`<reg_mode>`__ Integer type. Connection mode.
    * __`0` :__ De-register Developer Center and disable QuecThing.
    * __`1` :__ Enable QuecThing manually. ERROR is returned if ProductKey, ProductSecret and domain name and port of Developer Center are not configured.
    * __`2` :__ Enable QuecThing automatically. The device connects to Developer Center automatically after powered on. ERROR is returned if ProductKey,  ProductSecret and domain name and port of Developer Center are not configured.

__NOTE__
  * This command is supported in SDK versions 2.1.2 and above.

---

#### **Example**

__Example 1 (Query connection mode.)__

```c
AT+QIOTREG?

+QIOTREG: 0

OK
```

__Example 2 (Enable QuecThing manually.)__

```c
AT+QIOTREG=1

OK
```

***

<span id="AT+QIOTSTATE">  </span>

## <span style="color:#A52A2A">__AT+QIOTSTATE (Query Connection Status)__</span>

* __Description__: This command queries the status of the connection between the device and Developer Center.
* __Maximum Response Time__: 300 ms.

### **Read Command**

* __Issue__

  ```c
  AT+QIOTSTATE?
  ```

* __Response__

  Return the status of the connection between the device and Developer Center.

  ```c
  +QIOTSTATE: <state>
  
  OK
  ```

***

__Parameter__
 * __`<state>`__ Integer type. Connection status.
   * __`0`__：  Uninitialized
   * __`1`__：  Initialized
   * __`2`__：  Authenticating
   * __`3`__：  Authenticated
   * __`4`__：  Authentication failed
   * __`5`__：  Registering
   * __`6`__：  Registered and waiting to subscribe 
   * __`7`__：  Registration failed
   * __`8`__：  Subscribed and data can be sent 
   * __`9`__：  Subscription failed
   * __`10`__： Deregistering
   * __`11`__： Deregistered 
   * __`12`__： Deregistration failed

__NOTE__
  * This command is supported in SDK versions 2.1.2 and above.

---

#### **Example**

__Example 1 (Query Connection Status)__

Return __8__: The device has connected to Developer Center and can communicate with Developer Center.

```c
AT+QIOTSTATE?

+QIOTSTATE: 8

OK
```

***

<span id="AT+QIOTMCUVER">  </span>

## <span style="color:#A52A2A">__AT+QIOTMCUVER (Configure MCU Version Number)__</span>

* __Description__: This command configures MCU version.
* __Maximum Response Time__: 300 ms.
* __Characteristics__: The command takes effect immediately. The configurations are saved automatically.

### **Test Command**

* __Issue__

  ```c
  AT+QIOTMCUVER=?
  ```

* __Response__

  Return whether the command is supported.

  ```c
  +QIOTMCUVER: <MCU_number>,<MCU_version>
  
  OK
  ```


### **Read Command**

* __Issue__

  ```c
  AT+QIOTMCUVER?
  ```

* __Response__

  Return the configured MCU ID and corresponding version:

  ```c
  +QIOTMCUVER: <MCU_number1>,<MCU_version1> 
  [+QIOTMCUVER: <MCU_number2>,<MCU_version2>] […]
  
  OK
  ```

  If there is any error:

  ```c
  ERROR
  ```

### **Write Command**

* __Issue__

  ```c
  AT+QIOTMCUVER=<MCU_number>[, <MCU_number_version>]
  ```

* __Response__

  If the optional parameter is omitted, query the current setting:

  ```c
  +QIOTMCUVER: <MCU_number>,<MCU_version> 
  
  OK
  ```

  If the optional parameter is specified, configure MCU version number:

  ```c
  OK
  ```

  If there is any error:

  ```c
  ERROR
  ```

---

__Parameter__
  * __`<MCU_numberN>` :__ String type. MCU ID.
  * __`<MCU_versionN>` :__ String type. MCU version.

__NOTE__
  * This command is supported in SDK versions 2.1.2 and above.

---

#### **Example**

__Example 1 (Query current MCU ID)__

Response: __MCU1__; MCU version number: __1.0.0__.

```c
AT+QIOTMCUVER?

+QIOTMCUVER: "MCU1","1.0.0"

OK
```

__Example 2 (Configure MCU ID and version number)__

Set the current MCU ID to MCU1 and MCU1 version number to 1.0.1.

```c
AT+QIOTMCUVER="MCU1","1.0.1"

OK
```