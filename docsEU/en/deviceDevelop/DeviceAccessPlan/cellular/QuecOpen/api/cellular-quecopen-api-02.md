# Product Configuration API

## **Product Configuration API Overview**

|                           Function                            |                                           Description                                           |
| :-----------------------------------------------------------: | :---------------------------------------------------------------------------------------------: |
|                  [Ql_iotInit()](#Ql_iotInit)                  |                        Initializes configurations and enables QuecThing.                        |
|      [Ql_iotConfigSetEventCB()](#Ql_iotConfigSetEventCB)      |           Sets a callback function for device and Developer Center interaction event.           |
|     [Ql_iotConfigSetConnmode()](#Ql_iotConfigSetConnmode)     |                Sets the connection mode between the device and Developer Center.                |
|     [Ql_iotConfigGetConnmode()](#Ql_iotConfigGetConnmode)     |                Gets the connection mode between the device and Developer Center.                |
|          [Ql_iotGetWorkState()](#Ql_iotGetWorkState)          |               Gets the connection status between the device and Developer Center.               |
| [Ql_iotConfigSetPdpContextId()](#Ql_iotConfigSetPdpContextId) |            Configures PDP context ID used by device to connect to Developer Center.             |
| [Ql_iotConfigGetPdpContextId()](#Ql_iotConfigGetPdpContextId) |             Gets the PDP context ID used by device to connect to Developer Center.              |
|       [Ql_iotConfigSetServer()](#Ql_iotConfigSetServer)       |                                    Sets server information.                                     |
|       [Ql_iotConfigGetServer()](#Ql_iotConfigGetServer)       |                                    Gets server information.                                     |
|     [Ql_iotConfigSetLifetime()](#Ql_iotConfigSetLifetime)     |                                      Sets device lifetime.                                      |
|     [Ql_iotConfigGetLifetime()](#Ql_iotConfigGetLifetime)     |                                      Gets device lifetime.                                      |
|  [Ql_iotConfigSetProductinfo()](#Ql_iotConfigSetProductinfo)  |                                    Sets product information.                                    |
|  [Ql_iotConfigGetProductinfo()](#Ql_iotConfigGetProductinfo)  |                                    Gets product information.                                    |
|   [Ql_iotConfigSetMcuVersion()](#Ql_iotConfigSetMcuVersion)   |                        Sets MCU ID and the corresponding version number.                        |
|   [Ql_iotConfigGetMcuVersion()](#Ql_iotConfigGetMcuVersion)   |                        Gets MCU ID and the corresponding version number.                        |
|  [Ql_iotConfigSetSessionFlag()](#Ql_iotConfigSetSessionFlag)  | Enables or disables encryption mode for the connection between the device and Developer Center. |
|  [Ql_iotConfigGetSessionFlag()](#Ql_iotConfigGetSessionFlag)  |     Queries the encryption mode of the connection between the device and Developer Center.      |
|   [Ql_iotConfigSetAppVersion()](#Ql_iotConfigSetAppVersion)   |                                Sets device software version ID.                                 |
|  [Ql_iotConfigGetSoftVersion()](#Ql_iotConfigGetSoftVersion)  |                                Gets device software version ID.                                 |
|         [Ql_iotConfigSetDkDs()](#Ql_iotConfigSetDkDs)         |                         Sets the customized DeviceKey and DeviceSecret.                         |
|         [Ql_iotConfigGetDkDs()](#Ql_iotConfigGetDkDs)         |                         Gets the customized DeviceKey and DeviceSecret.                         |

## **API Description**

<span id="Ql_iotInit">  </span>

## <span style="color:#A52A2A">__Ql_iotInit__</span>

This function initializes configurations and enables QuecThing.

__Prototype__

```c
void Ql_iotInit(void)
```

__Parameter__

None

__Return Value__

None

__NOTE__
* This function is supported in SDK version 2.3.3 and above. 

---

<span id="Ql_iotConfigSetEventCB">  </span>

## <span style="color:#A52A2A">__Ql_iotConfigSetEventCB__</span>

This function sets callback function for the device and Developer Center interaction event (The callback function must be registered before you connect the device to Developer Center).


__Prototype__

```c
void Ql_iotConfigSetEventCB(void (*eventCb)(quint32_t event, qint32_t errcode, const void *v
alue, quint32_t valLen))
```

__Parameter__
* __Input callback function__
  * __void *__ __`eventCb`__: Callback function for device and Developer Center interaction event.
    * __Prototype__

      ```c
      typedef void (*eventCB)(quint32_t event, qint32_t errcode, const void *value, quint32_t valLen);
      ```

    * __Input__
      * __quint32_t__ __`eventCb`__: Event identifier. See [Device and Platform Interaction Event](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/InteractionEvent) for details.
      * __quint32_t__ __`errcode`__: Event code. See [Device and Platform Interaction Event](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/InteractionEvent) for details.
      * __const void *__ __`value`__: Callback data. See [Device and Platform Interaction Event](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/InteractionEvent) for details.
      * __quint32_t__ __`valLen`__: Length of the callback data. See [Device and Platform Interaction Event](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/InteractionEvent) for details.

__Return Value__

None

__NOTE__
* This function is supported in SDK version 2.3.3 and above. 

---


__Example__

```c
Ql_iotConfigSetEventCB(Ql_iotEventCB);
```

---

<span id="Ql_iotConfigSetConnmode">  </span>

## <span style="color:#A52A2A">__Ql_iotConfigSetConnmode__</span>

This function sets the connection mode between the device and Developer Center. You can configure the connection mode before enabling QuecThing or while QuecThing is running.


__Prototype__

```c
void Ql_iotConfigSetConnmode(QIot_connMode_e mode)
```

__Parameter__
* __Input__
  * __QIot_connMode_e__  __`mode`__: Connection mode. See [QIot_connMode_e](#QIot_connMode_e) for details.
		
__Return Value__

None

__NOTE__
* This function is supported in SDK version 2.3.3 and above. 

---


__Example__

```c
Ql_iotConfigSetConnmode(1);
```

---

<span id="Ql_iotConfigGetConnmode">  </span>

## <span style="color:#A52A2A">__Ql_iotConfigGetConnmode__</span>

This function gets the connection mode between the device and Developer Center.

__Prototype__

```c
QIot_connMode_e Ql_iotConfigGetConnmode(void)
```

__Parameter__

None

__Return Value__

Connection mode. See [QIot_connMode_e](#QIot_connMode_e) for details.

__NOTE__
* This function is supported in SDK version 2.3.3 and above.  

---


__Example__

```c
QIot_connMode_e ConnMode = Ql_iotConfigGetConnmode();
```

---

<span id="Ql_iotGetWorkState">  </span>

## <span style="color:#A52A2A">__Ql_iotGetWorkState__</span>

This function gets the connection status between the device and Developer Center.

__Prototype__

```c
QIot_state_e Ql_iotGetWorkState(void)
```

__Parameter__

None


__Return Value__

Connection status. See [QIot_state_e](#QIot_connMode_e) for details.		

__NOTE__
* This function is supported in SDK version 2.3.3 and above.  

---

__Example__

```c
QIot_state_e status = Ql_iotGetWorkState();
```

---

<span id="Ql_iotConfigSetProductinfo">  </span>

## <span style="color:#A52A2A">__Ql_iotConfigSetProductinfo__</span>

This function sets product information. The product information contains ProductKey and ProductSecret, which are generated when you create the product on Developer Center.


__Prototype__

```c
qbool Ql_iotConfigSetProductinfo(const char *pk, const char *ps)
```

__Parameter__
* __Input__
  * __const char *__  __`pk`__: ProductKey generated when you create the product on Developer Center.
  * __const char *__  __`ps`__: ProductSecret generated when you create the product on Developer Center.

__Return Value__
  * __`True`__: Successful execution
  * __`False`__: Failed execution

__NOTE__
* This function is supported in SDK version 2.3.3 and above. 

---


__Example__

```c
qbool ret = Ql_iotConfigSetProductinfo("pxxxxS", "VnhyxxxxxxxxSTFh");
```

---

<span id="Ql_iotConfigGetProductinfo">  </span>

## <span style="color:#A52A2A">__Ql_iotConfigGetProductinfo__</span>

This function gets product information.

__Prototype__

```c
qbool Ql_iotConfigGetProductinfo(char **pk, char **ps, char **ver)
```

__Parameter__
* __Output__
  * __char **__  __`pk`__: ProductKey generated when you create the product on Developer Center.
  * __char **__  __`ps`__: ProductSecret generated when you create the product on Developer Center.
  * __char **__  __`ver`__: Protocol version used during the device authentication process.

__Return Value__

None

__NOTE__
* This function is supported in SDK version 2.3.3 and above.  

---

__Example__

```c
char *pk, *ps, *ver;
qbool ret = Ql_iotConfigGetProductinfo(&pk, &ps, &ver);
```

---

<span id="Ql_iotConfigSetServer">  </span>

## <span style="color:#A52A2A">__Ql_iotConfigSetServer__</span>

This function sets server information.

__Prototype__

```c
qbool Ql_iotConfigSetServer(QIot_protocolType_t type, const char *server_url)
```

__Parameter__
* __Input__
  * __QIot_protocolType_t__  __`type`__: Protocol type. Optional parameter. See [QIot_protocolType_t](#QIot_protocolType_t) for details.
  * __const char *__      __`server_url`__: Server address (domain name and port of Developer Center). Optional parameter. 
    * Default : `"mqtt://iot-south.acceleronix.io:1883"`

    | region                  | server URL                           |
    | ----------------------- | ------------------------------------ |
    | Non-encrypted in China  | mqtt://iot-south.quectelcn.com:1883  |
    | Encryption in China     | mqtts://iot-south.quectelcn.com:8883 |
    | Non-encrypted in Europe | mqtt://iot-south.acceleronix.io:1883  |
    | Encryption in Europe    | mqtts://iot-south.acceleronix.io:8883 |


__Return Value__
* __`True`__: Successful execution
* __`False`__: Failed execution

__NOTE__
* This function is supported in SDK version 2.3.3 and above. 

---

__Example__

```c
qbool ret = Ql_iotConfigSetServer(1,"xxx");
```

Domain name in China: mqtt://iot-south.quectelcn.com:1883<br>
Domain name in Europe: mqtt://iot-south.acceleronix.io:1883<br>

<span id="Ql_iotConfigGetServer">  </span>

## <span style="color:#A52A2A">__Ql_iotConfigGetServer__</span>

This function gets server information.

__Prototype__

```c
void Ql_iotConfigGetServer(QIot_protocolType_t *type, char **server_url)
```

__Parameter__
* __Output__
  * __QIot_protocolType_t *__  __`type`__: Protocol type. See [QIot_protocolType_t](#QIot_protocolType_t) for details.
  * __char **__          __`server_url`__: Server URL. 

__Return Value__

None

__NOTE__
* This function is supported in SDK version 2.3.3 and above. 

---

__Example__

```c
QIot_protocolType_t type;
char *url;
Ql_iotConfigGetServer(&type, &url);
```

---

<span id="Ql_iotConfigSetLifetime">  </span>

## <span style="color:#A52A2A">__Ql_iotConfigSetLifetime__</span>

This function sets device lifetime.

__Prototype__

```c
qbool Ql_iotConfigSetLifetime(quint32_t lifetime)
```

__Parameter__
* __Input__
  * __quint32_t__  __`lifetime`__: Device lifetime. Unit: second. Optional parameter. Default value is used if this parameter is omitted.  Range: 1–65535; Default value: 120.


__Return Value__
* __`True`__：Successful execution
* __`False`__：Failed execution

__NOTE__
* This function is supported in SDK version 2.3.3 and above. 
  The API does not check input value validity.

---

__Example__

```c
qbool ret = Ql_iotConfigSetLifetime(120);
```

---

<span id="Ql_iotConfigGetLifetime">  </span>

## <span style="color:#A52A2A">__Ql_iotConfigGetLifetime__</span>

This function gets device lifetime.

__Prototype__

```c
quint32_t Ql_iotConfigGetLifetime(void)
```

__Parameter__

None

__Return Value__

Device lifetime. Unit: second.

__NOTE__
* This function is supported in SDK version 2.3.3 and above. 

---

__Example__

```c
quint32_t lifetime = Ql_iotConfigGetLifetime();
```

---

<span id="Ql_iotConfigSetPdpContextId">  </span>

## <span style="color:#A52A2A">__Ql_iotConfigSetPdpContextId__</span>

This function configures the PDP context ID used by device to connect to Developer Center.

__Prototype__

```c
qbool Ql_iotConfigSetPdpContextId(quint8_t contextID)
```

__Parameter__
* __Input__
  * __quint32_t__  __`contextID`__: PDP context ID. Optional parameter. Default value 1 is used if this parameter is omitted.

__Return Value__
* __`True`__：Successful execution
* __`False`__：Failed execution

__NOTE__ 
* This function is supported in SDK version 2.3.3 and above.

---

__Example__

```c
qbool ret = Ql_iotConfigSetPdpContextId(1);
```

---

<span id="Ql_iotConfigGetPdpContextId">  </span>

## <span style="color:#A52A2A">__Ql_iotConfigGetPdpContextId__</span>

This function gets the PDP context ID used by device to connect to Developer Center.

__Prototype__

```c
quint8_t Ql_iotConfigGetPdpContextId(void)
```

__Parameter__

None

__Return Value__

PDP context ID used by device to connect to Developer Center.

__NOTE__ 
* This function is supported in SDK version 2.3.3 and above.

---

__Example__

```c
quint8_t contextid = Ql_iotConfigGetPdpContextId();
```

---

<span id="Ql_iotConfigSetSessionFlag">  </span>

## <span style="color:#A52A2A">__Ql_iotConfigSetSessionFlag__</span>

This function enables or disables encryption mode for the connection between the device and Developer Center.

__Prototype__

```c
qbool Ql_iotConfigSetSessionFlag(qbool flag)
```

__Parameter__
* __Input__
  * __qbool__  __`flag`__: Enable or disable encryption mode of the session between the device and Developer Center. Optional parameter. Default value is used if this parameter is omitted.
    * __`FALSE`__: Disable (Default)
    * __`TRUE`__: Enable

__Return Value__
* __`True`__：Successful execution
* __`False`__：Failed execution

__NOTE__ 
* This function is supported in SDK version 2.7.2 and above.

---

__Example__

```c
qbool ret = Ql_iotConfigSetSessionFlag(1);
```

---

<span id="Ql_iotConfigGetSessionFlag">  </span>

## <span style="color:#A52A2A">__Ql_iotConfigGetSessionFlag__</span>

This function queries whether the encryption mode of the connection between the device and Developer Center is enabled.

__Prototype__

```c
qbool Ql_iotConfigGetSessionFlag(void)
```

__Parameter__

None

__Return Value__
* __`True`__: Enabled
* __`False`__: Disabled

__NOTE__ 
* This function is supported in SDK version 2.7.2 and above.

---

__Example__

```c
qbool ret = Ql_iotConfigGetSessionFlag();
```

---

<span id="Ql_iotConfigSetAppVersion">  </span>

## <span style="color:#A52A2A">__Ql_iotConfigSetAppVersion__</span>

This function sets device software version ID.

__Prototype__

```c
qbool Ql_iotConfigSetAppVersion(const char *appVer)
```

__Parameter__
* __Input__
  * __const char *__  __`appVer`__:  Device software version ID.

__Return Value__
* __`True`__：Successful execution
* __`False`__：Failed execution

__NOTE__ 
* This function is supported in SDK version 2.8.1 and above.

---

__Example__

```c
qbool ret = Ql_iotConfigSetAppVersion("app");
```

---

<span id="Ql_iotConfigGetSoftVersion">  </span>

## <span style="color:#A52A2A">__Ql_iotConfigGetSoftVersion__</span>

This function gets device software version ID.

__Prototype__

```c
char *Ql_iotConfigGetSoftVersion(void)
```

__Parameter__

None

__Return Value__

Device software version ID.

__NOTE__ 
* This function is supported in SDK version 2.3.3 and above.

---

__Example__

```c
char *ver = Ql_iotConfigGetSoftVersion();
```

---

<span id="Ql_iotConfigSetMcuVersion">  </span>

## <span style="color:#A52A2A">__Ql_iotConfigSetMcuVersion__</span>

This function sets MCU ID and the corresponding version number, which should be configured by the external MCU.

__Prototype__

```c
qbool Ql_iotConfigSetMcuVersion(const char *compno, const char *version)
```

__Parameter__
* __Input__
  * __const char *__  __`compno`__: MCU ID. Maximum length: 32 bytes.
  * __const char *__  __`version`__: Version number corresponding to the MCU ID. Maximum length: 64 bytes.

__Return Value__
* __`True`__：Successful execution
* __`False`__：Failed execution

__NOTE__ 
* This function is supported in SDK version 2.3.3 and above.

---

__Example__

```c
qbool ret = Ql_iotConfigSetMcuVersion("MCU","1_0_0");
```

---

<span id="Ql_iotConfigGetMcuVersion">  </span>

## <span style="color:#A52A2A">__Ql_iotConfigGetMcuVersion__</span>

This function gets MCU ID and the corresponding version number.

__Prototype__

```c
quint32_t Ql_iotConfigGetMcuVersion(const char *compno, char **version)
```

__Parameter__
* __Input__
  * __const char *__  __`compno`__: MCU ID. All configured MCU information will be acquired if this parameter is set to NULL.

* __Output__
  * __char **__   __`version`__: Version number corresponding to the MCU ID. Maximum length: 64 bytes.



__Return Value__

The string length of the version number corresponding to the MCU ID.

__NOTE__
* This function is supported in SDK version 2.3.3 and above.

---

__Example__

```c
char *arg[]
char *oldVer = NULL;
quint32_t ret = Ql_iotConfigGetMcuVersion(arg[0], &oldVer);
```

---

<span id="Ql_iotConfigSetDkDs">  </span>

## <span style="color:#A52A2A">__Ql_iotConfigSetDkDs__</span>

This function sets the customized DeviceKey and DeviceSecret.

__Prototype__

```c
qbool Ql_iotConfigSetDkDs(const char *dk, const char *ds)
```

__Parameter__
* __Input__
  * __const char *__  __`dk`__: DeviceKey is the customized unique identifier of the device. Cellular modules use IMEI as the default identifier, whereas wireless modules, such as Wi-Fi module, use MAC address. Maximum length: 16 bytes. If this parameter is set to an empty string, this function will delete the customized DK and DA, and use the default configurations. In that case, the device needs to be reauthenticated by Developer Center.
  * __const char *__   __`ds`__: DeviceSecret generated after device authentication. The length is fixed to 32 bytes. DS can be configured only upon customizing DK.

__Return Value__
* __`True`__：Successful execution
* __`False`__：Failed execution

__NOTE__ 
* This function is supported in SDK version 2.8.1 and above.

---

__Example__

```c
qbool ret = Ql_iotConfigSetDkDs("B07xxxxxx2A3","VnhyXXXXXXSTFh");
```

---

<span id="Ql_iotConfigGetDkDs">  </span>

## <span style="color:#A52A2A">__Ql_iotConfigGetDkDs__</span>

This function gets the customized DeviceKey and DeviceSecret. This function only queries the DeviceKey customized by Ql_iotConfigSetDkDs().

__Prototype__

```c
qbool Ql_iotConfigGetDkDs(char **dk, char **ds)
```

__Parameter__
* __Output__
  * __char **__ __`dk`__: Customized DK.
  * __char **__   __`ds`__: Customized DS.

__Return Value__
* __`True`__：Successful execution
* __`False`__：Failed execution

__NOTE__ 
* This function is supported in SDK version 2.8.1 and above.

---

__Example__

```c
char *dk = NULL, *ds = NULL;
Ql_iotConfigGetDkDs(&dk, &ds);
```

---


## __Enumeration__

<span id="QIot_state_e">  </span>

* __QIot_state_e (Connection status between the device and Developer Center)__		

  __Enumeration Definition__

  ```c
  typedef enum { 
  QIOT_STATE_UNINITIALIZE = 0, 
  QIOT_STATE_INITIALIZED, 
  QIOT_STATE_AUTHENTICATING, 
  QIOT_STATE_AUTHENTICATED, 
  QIOT_STATE_AUTHENTICATE_FAILED, 
  QIOT_STATE_CONNECTING, 
  QIOT_STATE_CONNECTED, 
  QIOT_STATE_CONNECT_FAIL, 
  QIOT_STATE_SUBSCRIBED, 
  QIOT_STATE_SUBSCRIBE_FAIL, 
  QIOT_STATE_DISCONNECTING, 
  QIOT_STATE_DISCONNECTED, 
  QIOT_STATE_DISCONNECT_FAIL
  } QIot_state_e;
  ```

  __Member__

  | Number | Member                         | Description                            |
  | :----- | :----------------------------- | :------------------------------------- |
  | 0      | QIOT_STATE_UNINITIALIZE        | Uninitialized                          |
  | 1      | QIOT_STATE_INITIALIZED         | Initialized                            |
  | 2      | QIOT_STATE_AUTHENTICATING      | Authenticating                         |
  | 3      | QIOT_STATE_AUTHENTICATED       | Authenticated                          |
  | 4      | QIOT_STATE_AUTHENTICATE_FAILED | Authentication failed                  |
  | 5      | QIOT_STATE_CONNECTING          | Registering                            |
  | 6      | QIOT_STATE_CONNECTED           | Registered and is waiting to subscribe |
  | 7      | QIOT_STATE_CONNECT_FAIL        | Registration failed                    |
  | 8      | QIOT_STATE_SUBSCRIBED          | Subscribed and data can be sent        |
  | 9      | QIOT_STATE_SUBSCRIBE_FAIL      | Subscription failed                    |
  | 10     | QIOT_STATE_DISCONNECTING       | Deregistering                          |
  | 11     | QIOT_STATE_DISCONNECTED        | Deregistered                           |
  | 12     | QIOT_STATE_DISCONNECT_FAIL     | Deregistration failed                  |

<span id="QIot_connMode_e">  </span>

* __QIot_connMode_e (Connection mode between the device and Developer Center)__		

  __Enumeration Definition__

  ```c
  typedef enum { 
  	QIOT_CONNMODE_IDLE, /* Log out from or do not connect to Developer Center */ 
  	QIOT_CONNMODE_REQ, /* Request to connect to Developer Center*/ 
  } QIot_connMode_e;
  ```

  __Member__

  | Member             |                    Description                     |
  | :----------------- | :------------------------------------------------: |
  | QIOT_CONNMODE_IDLE | Log out from or do not connect to Developer Center |
  | QIOT_CONNMODE_REQ  |       Request to connect to Developer Center       |

<span id="QIot_protocolType_t">  </span>

* __QIot_protocolType_t (Protocol type)__

  __Enumeration Definition__

  ```c
  typedef enum
  {
    QIOT_PPROTOCOL_COAP = 0,
  	QIOT_PPROTOCOL_MQTT = 1,
  } QIot_protocolType_t;
  ```

  __Member__

  | Member              | Description |
  | :------------------ | :---------: |
  | QIOT_PPROTOCOL_MQTT |    MQTT     |
