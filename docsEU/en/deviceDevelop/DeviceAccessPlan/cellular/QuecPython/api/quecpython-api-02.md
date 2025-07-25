# Product Configuration API

## **API Overview**

|                  Function                   |                      Description                      |
| :-----------------------------------------: | :---------------------------------------------------: |
| [Qth.setProductInfo()](#Qth.setProductInfo) |             Sets the product information.             |
|      [Qth.setServer()](#Qth.setServer)      |                 Sets the server URL.                  |
|    [Qth.setLifetime()](#Qth.setLifetime)    | Sets the keep alive interval of the MQTT connection.  |
|     [Qth.setEventCb()](#Qth.setEventCb)     |           Sets the event callback function.           |
|      [Qth.setMcuVer()](#Qth.setMcuVer)      |           Sets the MUC version information.           |
|      [Qth.setAppVer()](#Qth.setAppVer)      | Sets the App (QuecPython script) version Information. |

## **API Description**

<span id="Qth.setProductInfo"></span>

## <span style="color:#A52A2A">__Qth.setProductInfo__</span>

This function sets the product information. The product information includes ProductKey and ProductSecret, which are generated when you create a product on Developer Center.

__Prototype__

```python
Qth.setProductInfo(pk, ps)
```

__Parameter__

* __Input Parameter__
  
  * __`pk`__: ProductKey generated when you create the product on Developer Center.
  * __`ps`__: ProductSecret generated when you create the product on Developer Center.

* __Output Parameter__
  
  * None

* __Return Value__
  
  * `True`: Successful execution
  * `False`: Failed execution

__Example__

```python
Qth.setProductInfo("xxxxxx", "xxxxxxxxxxxxxxxx")
```

---

<span id="Qth.setServer"></span>

## <span style="color:#A52A2A">__Qth.setServer__</span>

This function sets the server URL.

__Prototype__

```python
Qth.setServer(url)
```

__Parameter__

* __Input Parameter__
  
  * __`url`__: Server URL. Optional. Default value: `mqtts://iot-south.quectelcn.com:8883`. The default value is used if this parameter is not set. 

    | Region                  | Server URL                           |
    | ----------------------- | ------------------------------------ |
    | Not-encrypted in China  | mqtt://iot-south.quectelcn.com:1883  |
    | Encrypted in China      | mqtts://iot-south.quectelcn.com:8883 |
    | Not-encrypted in Europe | mqtt://iot-south.acceleronix.io:1883  |
    | Encrypted in Europe     | mqtts://iot-south.acceleronix.io:8883 |
  
* __Output Parameter__

  - None

* __Return Value__
  
  * `True`: Successful execution
  * `False`: Failed execution

__Example__

```python
Qth.setServer("mqtts://iot-south.quectelcn.com:8883")
```

---

<span id="Qth.setLifetime"></span>

## <span style="color:#A52A2A">__Qth.setLifetime__</span>

This function sets the keep alive interval of the MQTT connection.

__Prototype__

```python
Qth.setLifetime(lifetime)
```

__Parameter__

* __Input Parameter__
  
  * __`lifetime`__: Keep alive interval of the MQTT connection. Range: 21–600. Default value: 120. Unit: second.

* __Output Parameter__
  
  * None

* __Return Value__
  
  * `True`: Successful execution
  * `False`: Failed execution

__Example__

```python
Qth.setLifetime(120)
```

---

<span id="Qth.setEventCb"></span>

## <span style="color:#A52A2A">__Qth.setEventCb__</span>

This function sets the event callback function.

__Prototype__

```python
Qth.setEventCb(eventlist)
```

__Parameter__

* __Input Parameter__
  
  * __`eventlist`__: User’s event callback function.
    * __`devEvent`__: Device event callback function.
      * __Prototype__
        ```c
        devEventCb(event, result)
        ```
      * __Input Parameter__
        * __`event`__: Event type  
        
          | Value | Description                           |
          | ----- | ------------------------------------- |
          | 1     | Network connection event              |
          | 2     | Device and platform interaction event |
          | 3     | Device reset event                    |
        
        * __`result`__: Event code.
          * `0`: Successful execution
          * Other values: Failed execution. See [Error Code List](#ERROR_CODE).
    * __`recvTsl`__: Callback function of receiving TSL data.
      * __Prototype__
        
        ```c
        recvTslCb(value)
        ```
      
      * __Input Parameter__
        
        * __`value`__: Dictionary type. TSL data.
    * __`readTsl`__: Callback function of TSL data requests.
      * __Prototype__
        ```c
        readTslCb(ids, pkgId)
        ```
      * __Input Parameter__
        * __`ids`__: Array type.TSL ID.
        * __`pkgId`__: Data packet ID.
    * __`readTslServer`__: Callback function of TSL service requests.
      * __Prototype__
        ```c
        readTslServerCb(serverId, value, pkgId)
        ```
      * __Input Parameter__
        * __`serverId`__: TSL service ID.
        * __`value`__: TSL data in JSON format.
        * __`pkgId`__: Data packet ID.
    * __`recvTrans`__: Callback function of receiving transparent transmission data.
      * __Prototype__
        
        ```c
        recvTransCb(value)
        ```
      
      * __Input Parameter__
        
        * __`value`__: Transparent transmission data.
    * __`ota`__: Callback function of OTA events.
      * __`otaPlan`__: Callback function of issuing OTA upgrade plans.
        * __Prototype__
          ```c
          otaPlanCb(plans)
          ```
        * __Input Parameter__
          * __`plans`__: Array type. Issued OTA upgrade plan. Multiple OTA upgrade plans may exist at the same time. The data included in the array is as follows.
            ```python
            [(Component type, Component ID, Source version, target version, Minimum power required for an OTA upgrade, Disk space required for an OTA upgrade, Minimum signal strength in an OTA upgrade),(Component type, Component ID, Source version, target version, Minimum power required for an OTA upgrade, Disk space required for an OTA upgrade, Minimum signal strength in an OTA upgrade)...]
            ```
      * __`fotaResult`__: Callback function of OTA upgrade results.
        * __Prototype__
          ```c
        fotaResultCb(comp_no, result)
          ```
        * __Input Parameter__
          * __`comp_no`__: Component ID.
          * __`result`__: Upgrade result.
          * `True`: Successful execution
            * `False`: Failed execution
  
* __Output Parameter__

  - None

* __Return Value__
  
  * None

__Example__

```python
def App_devEventCb(event, result):
    print('event:', event, result)
    if(2== event and 0 == result):
        Qth.otaRequest()

def App_cmdRecvTransCb(value):
    print('recvTrans:', value)
    ret = Qth.sendTrans(1, value)
    print('sendTrans ret:', ret)

def App_cmdRecvTslCb(value):
    print('recvTsl:', value)
    ret = Qth.sendTsl(1, value)
    print('sendTsl ret:', ret)

def App_cmdReadTslCb(ids, pkgId):
    print('readTsl:', ids, pkgId)
    value = {1:10,2:'hello'}
    Qth.ackTsl(0, value, pkgId)

def App_cmdRecvTslServerCb(serverId, value, pkgId):
    print('recvTslServer:', serverId, value, pkgId)
    Qth.ackTslServer(1, serverId, value, pkgId)

def App_otaPlanCb(plans):
    print('otaPlan:', plans)
    Qth.otaAction(1)

def App_fotaResultCb(comp_no, result):
    print('fotaResult:', comp_no, result)

eventOtaCb={
            'otaPlan':App_otaPlanCb,
            'fotaResult':App_fotaResultCb
            }
eventCb={
    'devEvent':App_devEventCb, 
    'recvTrans':App_cmdRecvTransCb, 
    'recvTsl':App_cmdRecvTslCb, 
    'readTsl':App_cmdReadTslCb, 
    'readTslServer':App_cmdRecvTslServerCb,
    'ota':eventOtaCb
    }
Qth.setEventCb(eventCb)
```

---

<span id="Qth.setMcuVer"></span>

## <span style="color:#A52A2A">__Qth.setMcuVer__</span>

This function sets the MCU version.

__Prototype__

```python
Qth.setMcuVer(comp_no, version, infoCB, resultCB)
```

__Parameter__

* __Input Parameter__
  
  * __`comp_no`__: MCU component ID.
  * __`version`__: MCU component version.
  * __`infoCB`__: Callback function of SOTA upgrade information.
    * __Prototype__
      ```c
      infoCB(comp_no, version, url, md5, crc)
      ```
    * __Input Parameter__
      * __`comp_no`__: Component ID.
      * __`version`__: Target version.
      * __`url`__: Firmware download URL.
      * __`md5`__: MD5 value of the firmware package (32-byte lowercase letters).
      * __`crc`__: CRC32 value of the firmware version (MPEG-2).
  * __`resultCB`__: Callback function of SOTA upgrade result.
    * __Prototype__
      ```c
      resultCB(comp_no, result)
      ```
    * __Input Parameter__
      * __`comp_no`__: Component ID.
      * __`result`__: Upgrade result.
        * `True`: Successful execution
        * `False`: Failed execution

* __Output Parameter__

  - None

* __Return Value__
  
  * None

__Example__

```python
def App_sotaInfoCb(comp_no, version, url, md5, crc):
    print('sotaInfo:', comp_no, version, url, md5, crc)
    # After the firmware is downloaded via the URL and the MCU has been updated, Qth.setMcuVer() must be called to get and update the latest version information of the MCU.
    # Qth.setMcuVer('MCU1', 'V1.2', App_sotaInfoCb, App_sotaResultCb)

def App_sotaResultCb(comp_no, result):
    print('sotaResult:',comp_no, result)

Qth.setMcuVer('MCU1', 'V1.1', App_sotaInfoCb, App_sotaResultCb)
Qth.setMcuVer('MCU2', 'V2.1', App_sotaInfoCb, App_sotaResultCb)
```

---

<span id="Qth.setAppVer"></span>

## <span style="color:#A52A2A">__Qth.setAppVer__</span>

This function sets App (QuecPython script) version information.

__Prototype__

```python
Qth.setAppVer(version, resultCB)
```

__Parameter__

* __Input Parameter__
  
  * __`version`__: App component version.
  * __`resultCB`__: Callback function of the App upgrade results.
    * __Prototype__
      ```c
      resultCB(comp_no, result)
      ```
    * __Input Parameter__
      * __`comp_no`__: Component ID.
      * __`result`__: Upgrade result.
        * `True`: Successful execution
        * `False`: Failed execution

* __Output Parameter__

  - None

* __Return Value__
  
  * None

__Example__

```python
Qth.setAppVer('V1.0.1', App_sotaResultCb)
```

---

<span id="ERROR_CODE">  </span>

## **Error Code List**

| Enumeration Value | Description                                                                                                               |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- |
| -5888             | Exceptions occurred for some server APIs.                                                                                 |
| -5889             | Device messages are limited.                                                                                              |
| -5890             | The device cannot be activated.                                                                                           |
| -5891             | The device has been authenticated.                                                                                        |
| -5892             | No product information is found via the ProductKey.                                                                       |
| -5893             | Password parsing error.                                                                                                   |
| -5894             | Sign error.                                                                                                               |
| -5895             | Rand is illegal.                                                                                                          |
| -5896             | The passed DeviceKey and ProductKey are inconsistent with those stored in the database.                                   |
| -5897             | DeviceKey is illegal.                                                                                                     |
| -5898             | Flag is illegal.                                                                                                          |
| -5899             | ClientID is not matched with the password.                                                                                |
| -5900             | DeviceSecret is incorrect.                                                                                                |
| -5901             | Device information not found.                                                                                             |
| -5902             | The gateway is not associated with the sub-device.                                                                        |
| -5903             | The sub-device is already online.                                                                                         |
| -5904             | Device offline                                                                                                            |
| -5905             | Unknown error                                                                                                             |
| -5906             | Static devices cannot be authenticated.                                                                                   |
| -5907             | Reinitiate the connection.                                                                                                |
| -5908             | Actively close the connection.                                                                                            |
| -4352             | Failed to get the configuration.                                                                                          |
| -4353             | Device not authenticated.                                                                                                 |
| -4354             | Device connection failed.                                                                                                 |
| -4355             | Device reset failed.                                                                                                      |
| -4356             | Failed to delete the device.                                                                                              |
| -4357             | Device connected.                                                                                                         |
| -4358             | Device reset error (New DeviceSecret has been received for the device with unique-certificate-per-device authentication). |
| -17920            | MQTT internal error.                                                                                                      |
| -17921            | MQTT network error.                                                                                                       |
| -17922            | MQTT keep-alive interval error.                                                                                           |
| -17923            | MQTT subscription error.                                                                                                  |
| -17924            | MQTT connection error.                                                                                                    |
| -17925            | Unsupported MQTT protocol.                                                                                                |
| -17926            | MQTT identifier rejected.                                                                                                 |
| -17927            | Unavailable MQTT server.                                                                                                  |
| -17928            | Incorrect MQTT username or password.                                                                                      |
| -17929            | MQTT unauthorized.                                                                                                        |
| -17930            | URL parsing failed.                                                                                                       |
| -17931            | Failed to get the module’s IP address.                                                                                    |
| -17932            | Failed to build data packets.                                                                                             |
| -17933            | Failed to send data packets.                                                                                              |

