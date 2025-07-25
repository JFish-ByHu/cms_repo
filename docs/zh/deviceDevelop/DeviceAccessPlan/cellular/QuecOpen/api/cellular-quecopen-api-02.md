# 产品配置 相关接口

## **API 列表**

|                             函数                              |                   说明                   |
| :-----------------------------------------------------------: | :--------------------------------------: |
|                  [Ql_iotInit()](#Ql_iotInit)                  |     初始化配置并启动 QuecThing 功能      |
|      [Ql_iotConfigSetEventCB()](#Ql_iotConfigSetEventCB)      |    设置设备与平台交互事件回调处理函数    |
|     [Ql_iotConfigSetConnmode()](#Ql_iotConfigSetConnmode)     |       配置设备与平台之间的连接模式       |
|     [Ql_iotConfigGetConnmode()](#Ql_iotConfigGetConnmode)     |     获取当前设备与平台之间的连接模式     |
|          [Ql_iotGetWorkState()](#Ql_iotGetWorkState)          |     查询当前设备与平台之间的连接状态     |
| [Ql_iotConfigSetPdpContextId()](#Ql_iotConfigSetPdpContextId) |   配置设备连接平台使用的 PDP 上下文 ID   |
| [Ql_iotConfigGetPdpContextId()](#Ql_iotConfigGetPdpContextId) |   获取设备连接平台使用的 PDP 上下文 ID   |
|       [Ql_iotConfigSetServer()](#Ql_iotConfigSetServer)       |              配置服务器信息              |
|       [Ql_iotConfigGetServer()](#Ql_iotConfigGetServer)       |              查询服务器信息              |
|     [Ql_iotConfigSetLifetime()](#Ql_iotConfigSetLifetime)     |             配置设备生命周期             |
|     [Ql_iotConfigGetLifetime()](#Ql_iotConfigGetLifetime)     |             获取设备生命周期             |
|  [Ql_iotConfigSetProductinfo()](#Ql_iotConfigSetProductinfo)  |               配置产品信息               |
|  [Ql_iotConfigGetProductinfo()](#Ql_iotConfigGetProductinfo)  |               查询产品信息               |
|   [Ql_iotConfigSetMcuVersion()](#Ql_iotConfigSetMcuVersion)   |      配置 MCU 编号及其对应的版本号       |
|   [Ql_iotConfigGetMcuVersion()](#Ql_iotConfigGetMcuVersion)   |      获取 MCU 编号及其对应的版本号       |
|  [Ql_iotConfigSetSessionFlag()](#Ql_iotConfigSetSessionFlag)  |  关闭或开启设备与平台之间的连接加密模式  |
|  [Ql_iotConfigGetSessionFlag()](#Ql_iotConfigGetSessionFlag)  | 查询设备与平台之间的连接加密模式是否开启 |
|   [Ql_iotConfigSetAppVersion()](#Ql_iotConfigSetAppVersion)   |         设置设备软件版本用户标识         |
|  [Ql_iotConfigGetSoftVersion()](#Ql_iotConfigGetSoftVersion)  |         获取设备软件版本用户标识         |
|         [Ql_iotConfigSetDkDs()](#Ql_iotConfigSetDkDs)         |       设置自定义设备标识和设备密钥       |
|         [Ql_iotConfigGetDkDs()](#Ql_iotConfigGetDkDs)         |       获取自定义设备标识和设备密钥       |

## **API 详情**

<span id="Ql_iotInit">  </span>
## <span style="color:#A52A2A">__Ql_iotInit__</span>

该函数用于初始化配置并启动 QuecThing 功能。

__函数原型__

```c
void Ql_iotInit(void)
```
__参数说明__

无。

__返回值__

无。

__备注__
* __2.3.3及以上版本支持__

---
<span id="Ql_iotConfigSetEventCB">  </span>
## <span style="color:#A52A2A">__Ql_iotConfigSetEventCB__</span>
该函数用于设置设备与平台交互事件回调函数（须在连接平台前进行设置）。


__函数原型__

```c
void Ql_iotConfigSetEventCB(void (*eventCb)(quint32_t event, qint32_t errcode, const void *v
alue, quint32_t valLen))
```
__参数说明__

* __入参回调函数__
  * __void *__  __`eventCb`__：设备与平台交互事件回调函数。
    * __函数原型__
      ```c
      typedef void (*eventCB)(quint32_t event, qint32_t errcode, const void *value, quint32_t valLen);
      ```
    * __输入参数__
      * __quint32_t__   __`eventCb`__：事件标识。详情请参考[事件回调描述](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/InteractionEvent)
      * __quint32_t__   __`errcode`__：事件码。详情请参考[事件回调描述](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/InteractionEvent)
      * __const void *__   __`value`__：回调内容。详情请参考[事件回调描述](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/InteractionEvent)
      * __quint32_t__    __`valLen`__：回调内容长度。详情请参考[事件回调描述](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/InteractionEvent)

__返回值__

无。

__备注__
* __2.3.3及以上版本支持__

---

__调用示例__

```c
Ql_iotConfigSetEventCB(Ql_iotEventCB);
```

---

<span id="Ql_iotConfigSetConnmode">  </span>
## <span style="color:#A52A2A">__Ql_iotConfigSetConnmode__</span>
该函数用于配置设备连接至平台的连接模式。可在QuecThing功能启动前和运行中进行配置。


__函数原型__

```c
void Ql_iotConfigSetConnmode(QIot_connMode_e mode)
```
__参数说明__

* __输入参数__
  * __QIot_connMode_e__   __`mode`__：连接模式。详情请参考[QIot_connMode_e](#QIot_connMode_e)。


      
__返回值__

无。

__备注__
* __2.3.3及以上版本支持__

---

__调用示例__

```c
Ql_iotConfigSetConnmode(1);
```

---

<span id="Ql_iotConfigGetConnmode">  </span>
## <span style="color:#A52A2A">__Ql_iotConfigGetConnmode__</span>

该函数用于获取当前设备与平台之间的连接模式。

__函数原型__

```c
QIot_connMode_e Ql_iotConfigGetConnmode(void)
```

__参数说明__

无。

__返回值__

连接模式。详情请参考[连接模式详情](#QIot_connMode_e)。

__备注__
* __2.3.3及以上版本支持__

---

__调用示例__

```c
QIot_connMode_e ConnMode = Ql_iotConfigGetConnmode();
```


---

<span id="Ql_iotGetWorkState">  </span>
## <span style="color:#A52A2A">__Ql_iotGetWorkState__</span>

该函数用于查询当前设备与平台之间的连接状态。

__函数原型__

```c
QIot_state_e Ql_iotGetWorkState(void)
```
__参数说明__

无。


__返回值__

连接状态。详情请参考[连接状态详情](#QIot_state_e)。      


__备注__
* __2.3.3及以上版本支持__

---

__调用示例__

```c
QIot_state_e status = Ql_iotGetWorkState();
```

---


<span id="Ql_iotConfigSetProductinfo">  </span>
## <span style="color:#A52A2A">__Ql_iotConfigSetProductinfo__</span>

该函数用于配置产品信息。产品信息包括 ProductKey 和 ProductSecret，均为在平台创建产品时生成。


__函数原型__

```c
qbool Ql_iotConfigSetProductinfo(const char *pk, const char *ps)
```
__参数说明__

* __输入参数__
  * __const char *__  __`pk`__：在平台创建产品时生成的 ProductKey。
  * __const char *__  __`ps`__：在平台创建产品时生成的 ProductSecret。


__返回值__

* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__
* __2.3.3及以上版本支持__

---

__调用示例__

```c
qbool ret = Ql_iotConfigSetProductinfo("pxxxxS", "VnhyxxxxxxxxSTFh");
```
---
<span id="Ql_iotConfigGetProductinfo">  </span>
## <span style="color:#A52A2A">__Ql_iotConfigGetProductinfo__</span>

该函数用于查询产品信息。

__函数原型__

```c
qbool Ql_iotConfigGetProductinfo(char **pk, char **ps, char **ver)
```
__参数说明__

* __输出参数__
  * __char **__  __`pk`__：在平台创建产品时生成的 ProductKey。
  * __char **__  __`ps`__：在平台创建产品时生成的 ProductSecret。
  * __char **__  __`ver`__：设备认证协议版本号。


__返回值__

无。

__备注__
* __2.3.3及以上版本支持__

---

__调用示例__

```c
char *pk, *ps, *ver;
qbool ret = Ql_iotConfigGetProductinfo(&pk, &ps, &ver);
```
---
<span id="Ql_iotConfigSetServer">  </span>
## <span style="color:#A52A2A">__Ql_iotConfigSetServer__</span>

该函数用于配置服务器信息。

__函数原型__

```c
qbool Ql_iotConfigSetServer(QIot_protocolType_t type, const char *server_url)
```
__参数说明__

* __输入参数__
  * __QIot_protocolType_t__  __`type`__：协议类型。详情请参考[QIot_protocolType_t](#QIot_protocolType_t)。
  * __const char *__      __`server_url`__：服务器地址（平台域名和端口）。可选参数，不配置时使用默认值。
    * 默认值："mqtt://iot-south.quectelcn.com:1883"
    
    | 地区           | 域名                                  |
    | -------------- | ------------------------------------- |
    | 中国地区非加密 | mqtt://iot-south.quectelcn.com:1883   |
    | 中国地区加密   | mqtts://iot-south.quectelcn.com:8883  |
    | 欧洲地区非加密 | mqtt://iot-south.acceleronix.io:1883  |
    | 欧洲地区加密   | mqtts://iot-south.acceleronix.io:8883 |

__返回值__
* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__
* __2.3.3及以上版本支持__

---

__调用示例__

```c
qbool ret = Ql_iotConfigSetServer(1,"xxx");
```



---
<span id="Ql_iotConfigGetServer">  </span>
## <span style="color:#A52A2A">__Ql_iotConfigGetServer__</span>

该函数用于查询服务器信息。

__函数原型__

```c
void Ql_iotConfigGetServer(QIot_protocolType_t *type, char **server_url)
```
__参数说明__

* __输出参数__
  * __QIot_protocolType_t *__  __`type`__： 协议类型。详情请参考[QIot_protocolType_t](#QIot_protocolType_t)。
  * __char **__          __`server_url`__：  服务器地址。

__返回值__

无。

__备注__
* __2.3.3及以上版本支持__

---

__调用示例__

```c
QIot_protocolType_t type;
char *url;
Ql_iotConfigGetServer(&type, &url);
```
---
<span id="Ql_iotConfigSetLifetime">  </span>
## <span style="color:#A52A2A">__Ql_iotConfigSetLifetime__</span>

该函数用于配置设备生命周期。

__函数原型__

```c
qbool Ql_iotConfigSetLifetime(quint32_t lifetime)
```
__参数说明__

* __输入参数__<br>
  * __quint32_t__  __`lifetime`__：设备生命周期。单位：秒。可选参数，不配置时使用默认值（范围：1~65535；默认值：120）

__返回值__

* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__
* __2.3.3及以上版本支持，接口不检查输入值的合法性__

---

__调用示例__

```c
qbool ret = Ql_iotConfigSetLifetime(120);
```
---

<span id="Ql_iotConfigGetLifetime">  </span>
## <span style="color:#A52A2A">__Ql_iotConfigGetLifetime__</span>

该函数用于查询设备生命周期。

__函数原型__

```c
quint32_t Ql_iotConfigGetLifetime(void)
```
__参数说明__

无。

__返回值__

设备生命周期，单位：秒。

__备注__
* __2.3.3及以上版本支持__

---

__调用示例__

```c
quint32_t lifetime = Ql_iotConfigGetLifetime();
```
---
<span id="Ql_iotConfigSetPdpContextId">  </span>
## <span style="color:#A52A2A">__Ql_iotConfigSetPdpContextId__</span>

该函数用于配置设备连接平台使用的 PDP 上下文 ID。

__函数原型__

```c
qbool Ql_iotConfigSetPdpContextId(quint8_t contextID)
```
__参数说明__

* __输入参数__
  * __quint32_t__  __`contextID`__：PDP上下文ID。可选参数。不配置时使用默认值1。

__返回值__

* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__ 

* __2.3.3及以上版本支持__

---

__调用示例__

```c
qbool ret = Ql_iotConfigSetPdpContextId(1);
```

---

<span id="Ql_iotConfigGetPdpContextId">  </span>
## <span style="color:#A52A2A">__Ql_iotConfigGetPdpContextId__</span>

该函数用于获取设备连接平台使用的 PDP 上下文 ID。

__函数原型__

```c
quint8_t Ql_iotConfigGetPdpContextId(void)
```
__参数说明__

无。

__返回值__

设备连接平台使用的 PDP 上下文 ID。

__备注__
* __2.3.3及以上版本支持__

---

__调用示例__

```c
quint8_t contextid = Ql_iotConfigGetPdpContextId();
```
---
<span id="Ql_iotConfigSetSessionFlag">  </span>
## <span style="color:#A52A2A">__Ql_iotConfigSetSessionFlag__</span>

该函数用于关闭或开启设备与平台之间的连接加密模式。

__函数原型__

```c
qbool Ql_iotConfigSetSessionFlag(qbool flag)
```
__参数说明__

* __输入参数__
  * __qbool__  __`flag`__：连接加密开启标识。可选参数，不配置时使用默认值。
    * __`FALSE`__：关闭
    * __`TRUE`__：开启

__返回值__

* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

  
__备注__ 
* __2.7.2及以上版本支持__

---

__调用示例__

```c
qbool ret = Ql_iotConfigSetSessionFlag(1);
```
---
<span id="Ql_iotConfigGetSessionFlag">  </span>
## <span style="color:#A52A2A">__Ql_iotConfigGetSessionFlag__</span>

该函数用于查询设备与平台之间的连接加密模式是否开启。

__函数原型__

```c
qbool Ql_iotConfigGetSessionFlag(void)
```
__参数说明__

无。

__返回值__

* __`True`__： &nbsp; 加密模式已开启
* __`False`__： 加密模式已关闭

__备注__ 
* __2.7.2及以上版本支持__

---

__调用示例__

```c
qbool ret = Ql_iotConfigGetSessionFlag();
```



---
<span id="Ql_iotConfigSetAppVersion">  </span>
## <span style="color:#A52A2A">__Ql_iotConfigSetAppVersion__</span>

该函数用于设置设备软件版本用户标识。

__函数原型__

```c
qbool Ql_iotConfigSetAppVersion(const char *appVer)
```
__参数说明__

* __输入参数__
  * __const char *__  __`appVer`__：设备软件版本用户标识。

__返回值__

* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__ 
  * __2.8.1及以上版本支持__

---

__调用示例__

```c
qbool ret = Ql_iotConfigSetAppVersion("app");
```
---
<span id="Ql_iotConfigGetSoftVersion">  </span>
## <span style="color:#A52A2A">__Ql_iotConfigGetSoftVersion__</span>

该函数用于获取设备软件版本用户标识。

__函数原型__

```c
char *Ql_iotConfigGetSoftVersion(void)
```
__参数说明__

无。

__返回值__

设备当前软件版本用户标识。

__备注__ 
* __2.3.3及以上版本支持__

---

__调用示例__

```c
char *ver = Ql_iotConfigGetSoftVersion();
```
---
<span id="Ql_iotConfigSetMcuVersion">  </span>
## <span style="color:#A52A2A">__Ql_iotConfigSetMcuVersion__</span>

该函数用于配置 MCU 编号及其对应的版本号。需要外挂 MCU 来配置。

__函数原型__

```c
qbool Ql_iotConfigSetMcuVersion(const char *compno, const char *version)
```
__参数说明__

* __输入参数__
  * __const char *__  __`compno`__：MCU编号。最大长度32字节。
  * __const char *__  __`version`__：MCU编号对应的版本，最大长度64字节。

__返回值__
* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__ 
* __2.3.3及以上版本支持__

---

__调用示例__

```c
qbool ret = Ql_iotConfigSetMcuVersion("MCU","1_0_0");
```
---
<span id="Ql_iotConfigGetMcuVersion">  </span>
## <span style="color:#A52A2A">__Ql_iotConfigGetMcuVersion__</span>

该函数用于获取 MCU 编号及其对应的版本号。

__函数原型__

```c
quint32_t Ql_iotConfigGetMcuVersion(const char *compno, char **version)
```
__参数说明__

* __输入参数__
  * __const char *__  __`compno`__：MCU编号。设置为NULL时获取所有配置的MCU版本信息。
  
* __输出参数__
  * __char **__      __`version`__：MCU编号对应的版本。最大长度64字节。



__返回值__

MCU编号对应版本号的字符串长度。

__备注__
* __2.3.3及以上版本支持__

---

__调用示例__

```c
char *arg[]
char *oldVer = NULL;
quint32_t ret = Ql_iotConfigGetMcuVersion(arg[0], &oldVer);
```
---

<span id="Ql_iotConfigSetDkDs">  </span>
## <span style="color:#A52A2A">__Ql_iotConfigSetDkDs__</span>

该函数用于设置自定义设备标识和设备密钥。

__函数原型__

```c
qbool Ql_iotConfigSetDkDs(const char *dk, const char *ds)
```
__参数说明__

* __输入参数__
  * __const char *__  __`dk`__：用户自定义的设备的唯一标识。蜂窝移动模块默认值为IMEI号，Wi-Fi等无线模块默认值为MAC  地址。最大字节长度为16字节。若设置为空，删除自定义的dk与ds，并使用默认配置，此时需重新在平台进行认证。
  * __const char *__   __`ds`__：设备认证后获取的密钥。固定长度为32字节。仅当设置dk为非空且非默认值时，允许设置设备  密钥。


__返回值__
* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__ 
* __2.8.1及以上版本支持__

---

__调用示例__

```c
qbool ret = Ql_iotConfigSetDkDs("B07xxxxxx2A3","VnhyXXXXXXSTFh");
```
---
<span id="Ql_iotConfigGetDkDs">  </span>

## <span style="color:#A52A2A">__Ql_iotConfigGetDkDs__</span>

该函数用于获取自定义的设备标识和设备密钥。仅支持查询通过 Ql_iotConfigSetDkDs()自定义的设备
标识。

__函数原型__

```c
qbool Ql_iotConfigGetDkDs(char **dk, char **ds)
```
__参数说明__
* __输出参数__
  * __char **__ __`dk`__：自定义的设备标识。
  * __char **__   __`ds`__：自定义的设备密钥。

__返回值__
* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__ 
* __2.8.1及以上版本支持__

---


## __类型解析__
<span id="QIot_state_e">  </span>
* __QIot_state_e（设备与平台之间的连接状态）__    
  
    __枚举定义__
  
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

  __成员__
    

  | 数值 | 成员                           | 描述               |
  | :--- | :----------------------------- | :----------------- |
  | 0    | QIOT_STATE_UNINITIALIZE        | 未初始化           |
  | 1    | QIOT_STATE_INITIALIZED         | 已初始化           |
  | 2    | QIOT_STATE_AUTHENTICATING      | 正在认证           |
  | 3    | QIOT_STATE_AUTHENTICATED       | 认证成功           |
  | 4    | QIOT_STATE_AUTHENTICATE_FAILED | 认证失败           |
  | 5    | QIOT_STATE_CONNECTING          | 正在注册           |
  | 6    | QIOT_STATE_CONNECTED           | 注册成功，等待订阅 |
  | 7    | QIOT_STATE_CONNECT_FAIL        | 注册失败           |
  | 8    | QIOT_STATE_SUBSCRIBED          | 已订阅，数据可发送 |
  | 9    | QIOT_STATE_SUBSCRIBE_FAIL      | 订阅失败           |
  | 10   | QIOT_STATE_DISCONNECTING       | 正在注销           |
  | 11   | QIOT_STATE_DISCONNECTED        | 注销成功           |
  | 12   | QIOT_STATE_DISCONNECT_FAIL     | 注销失败           |

<span id="QIot_connMode_e">  </span>
* __QIot_connMode_e（连接模式）__    
  
    __枚举定义__
  
  ```c
  typedef enum { 
    QIOT_CONNMODE_IDLE, /* 不连接 IOT */ 
    QIOT_CONNMODE_REQ, /* 手动发起连接 IOT */ 
  } QIot_connMode_e;
  ```
    
  __成员说明__
    
  | 参数               |         描述         |
  | :----------------- | :------------------: |
  | QIOT_CONNMODE_IDLE |    不连接移远平台    |
  | QIOT_CONNMODE_REQ  | 手动发起连接移远平台 |

<span id="QIot_protocolType_t">  </span>
* __QIot_protocolType_t（协议类型）__    
  __枚举定义__
  
  ```c
  typedef enum
  {
    QIOT_PPROTOCOL_COAP = 0,
    QIOT_PPROTOCOL_MQTT = 1,
  } QIot_protocolType_t;
  ```
    
  __成员说明__
    
  | 参数                |   描述   |
  | :------------------ | :------: |
  | QIOT_PPROTOCOL_MQTT | MQTT协议 |





