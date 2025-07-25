# 网关子设备 相关接口

## **API 列表**

|                              函数                               |                 说明                 |
| :-------------------------------------------------------------: | :----------------------------------: |
| [Ql_iotConfigSetSubDevEventCB()](#Ql_iotConfigSetSubDevEventCB) | 注册子设备与网关交互事件回调处理函数 |
|             [Ql_iotSubDevConn()](#Ql_iotSubDevConn)             |     连接子设备至网关或认证子设备     |
|          [Ql_iotSubDevDisconn()](#Ql_iotSubDevDisconn)          |      断开子设备与网关之间的连接      |
|    [Ql_iotSubDevPassTransSend()](#Ql_iotSubDevPassTransSend)    |       发送子设备透传数据至平台       |
| [Ql_iotSubDevPassTransSend_ex()](#Ql_iotSubDevPassTransSend_ex) |       发送子设备透传数据至平台       |
|        [Ql_iotSubDevTslReport()](#Ql_iotSubDevTslReport)        |      发送子设备物模型数据至平台      |
|     [Ql_iotSubDevTslReport_ex()](#Ql_iotSubDevTslReport_ex)     |      发送子设备物模型数据至平台      |
|           [Ql_iotSubDevTslAck()](#Ql_iotSubDevTslAck)           |   回复平台向子设备请求的物模型数据   |
|           [Ql_iotSubDevDeauth()](#Ql_iotSubDevDeauth)           |              注销子设备              |
|              [Ql_iotSubDevHTB()](#Ql_iotSubDevHTB)              |  刷新子设备与网关最后进行交互的时间  |
|        [Ql_iotGwDevInfoReport()](#Ql_iotGwDevInfoReport)        |            子设备信息上报            |
|            [Ql_iotGwDevOtaReq()](#Ql_iotGwDevOtaReq)            |           子设备 OTA 请求            |
|         [Ql_iotGwDevOtaUpdate()](#Ql_iotGwDevOtaUpdate)         |         子设备 OTA 升级配置          |
|           [Ql_iotGwDevOtaRead()](#Ql_iotGwDevOtaRead)           |         子设备 OTA 固件读取          |
|         [Ql_iotGwDevLocReport()](#Ql_iotGwDevLocReport)         |          子设备定位信息上报          |

<br>

## __API接口详情__

<span id="Ql_iotConfigSetSubDevEventCB"> </span>

## <span style="color:#A52A2A">__Ql_iotConfigSetSubDevEventCB__</span>

该函数用于注册子设备与网关交互事件回调函数。后续子设备与网关交互事件均通过该回调函数进行通知。

__函数原型__

```c
void Ql_iotConfigSetSubDevEventCB(void (*eventCb))
```

__参数说明__

* __入参回调函数__
  * __void *__  __`eventCb`__：子设备连接网关后，发生子设备与网关交互事件时自动调用该回调函数。
    * __函数原型__
      ```c
      typedef void (*eventCb)(quint32_t event, qint32_t errcode, const char *subPk, const char *subDk ,const void *value, quint32_t valLen)
      ```

      * __输入参数__
        * __quint32_t__    __`event`__：事件标识。详情请参考[事件回调描述](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/InteractionEvent)
        * __quint32_t__     __`errcode`__： 事件码。详情请参考[事件回调描述](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/InteractionEvent)
        * __const char *__ __`subPk`__：在平台创建产品时生成的ProductKey。
        * __const char *__  __`subDk`__：子设备唯一标识。
        * __const void *__ __`value`__：回调内容。详情请参考[事件回调描述](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/InteractionEvent)
        * __quint32_t__     __`valLen`__：回调内容长度。详情请参考[事件回调描述](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/InteractionEvent)

__返回值__

无。

__备注__
* __2.10.0及以上版本支持__<br>
  响应码、回调内容、回调内容长度详情参考[网关子设备回调事件](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/InteractionEvent)。


---

__调用示例__

```c
Ql_iotConfigSetSubDevEventCB(Ql_iotSubEventCB);
```

---

<span id="Ql_iotSubDevConn"> </span>

## <span style="color:#A52A2A">__Ql_iotSubDevConn__</span>

该函数用于连接子设备至网关或认证子设备。连接/认证结果通过子设备与网关回调事件通知。设置 subDs为 NULL 时，表示认证子设备；指定 subDs 时，表示连接子设备至网关。

__函数原型__

```c
qbool Ql_iotSubDevConn(const char *subPk, const char *subPs, const char *subDk, const char *subDs, quint8_t sessionType, quint16_t keepalive)
```

__参数说明__
* __输入参数__
  * __const char *__  __`subPk`__：创建子设备产品生成的 ProductKey。
  * __const char *__  __`subPs`__：创建子设备产品生成的 ProductSecret。
  * __const char *__  __`subDk`__：子设备设备唯一标识。
  * __const char *__   __`subDs`__：子设备的设备密钥。
  * __quint8_t__    __`sessionType`__：子设备使用加密方式。
    * __`0`__： 不加密。
    * __`1`__： 加密。
  * __quint16_t__    __`keepalive`__：子设备保活时间。

__返回值__
* __`True`__：函数执行成功。
* __`False`__： 函数执行失败。

__备注__
* __2.9.0及以上版本支持__

---

__调用示例__

```c
mp_buffer_info_t pro_keyinfo = {0};
mp_buffer_info_t pro_secretinfo = {0};
mp_buffer_info_t dev_keyinfo = {0};
mp_buffer_info_t dev_secretinfo = {0};
int session_type_val;
int keepalive_val;
qbool ret = Ql_iotSubDevConn((const char *)pro_keyinfo.buf, (const char *)pro_secretinfo.buf, (const char *)dev_keyinfo.buf, (const char *)dev_secretinfo.buf, session_type_val, keepalive_val);
```

---

<span id="Ql_iotSubDevDisconn"> </span>

## <span style="color:#A52A2A">__Ql_iotSubDevDisconn__</span>

该函数用于断开子设备与网关之间的连接。

__函数原型__

```c
qbool Ql_iotSubDevDisconn(const quint8_t *subPk, const quint8_t *subDk)
```

__参数说明__
* __输入参数__
  * __const quint8_t *__  __`subPk`__：在平台创建产品时生成的ProductKey。
  * __const quint8_t *__  __`subDk`__：子设备设备唯一标识。

__返回值__
* __`True`__： 函数执行成功。
* __`False`__： 函数执行失败。

__备注__
* __2.9.0及以上版本支持__

---

__调用示例__

```c
mp_buffer_info_t pro_key = {0};
mp_buffer_info_t dev_key = {0};
qbool ret = Ql_iotSubDevDisconn((const char *)pro_key.buf, (const char *)dev_key.buf);
```

---

<span id="Ql_iotSubDevDeauth"> </span>

## <span style="color:#A52A2A">__Ql_iotSubDevDeauth__</span>

该函数用于注销子设备。

__函数原型__

```c
qbool Ql_iotSubDevDeauth(const char *subPk, const char *subPs, const char *subDk, const char *subDs)
```

__参数说明__
* __输入参数__
  * __const char *__  __`subPk`__：创建子设备产品生成的 ProductKey。
  * __const char *__  __`subPs`__：创建子设备产品生成的 ProductSecret。
  * __const char *__  __`subDk`__：子设备唯一标识。
  * __const char *__  __`subDs`__：子设备的设备密钥。

__返回值__
* __`True`__：函数执行成功。
* __`False`__： 函数执行失败。

__备注__
* __2.9.0及以上版本支持__

---

__调用示例__

```c
mp_buffer_info_t pro_key = {0};
mp_buffer_info_t pro_secret = {0};
mp_buffer_info_t dev_key = {0};
mp_buffer_info_t dev_secret = {0};
qbool ret = Ql_iotSubDevDeauth((const char *)pro_key.buf, (const char *)pro_secret.buf, (const char *)dev_key.buf, (const char *)dev_secret.buf);
```

---

<span id="Ql_iotSubDevPassTransSend"> </span>

## <span style="color:#A52A2A">__Ql_iotSubDevPassTransSend__</span>

该函数用于发送子设备透传数据至平台(建议使用函数Ql_iotSubDevPassTransSend_ex替换)。

__函数原型__

```c
qbool Ql_iotSubDevPassTransSend(const quint8_t *subPk, const quint8_t *subDk, quint8_t *payload, quint16_t payloadlen)
```

__参数说明__
* __输入参数__
  * __const  quint8_t *__  __`subPk`__：创建子设备产品生成的 ProductKey。
  * __const  quint8_t *__  __`subDk`__：子设备设备唯一标识。
  * __quint8_t *__     __`payload`__：上报透传数据指针。
  * __quint16_t *__     __`payloadlen`__：上报透传数据长度。

__返回值__
* __`True`__：函数执行成功。
* __`False`__： 函数执行失败。

__备注__
* __2.9.0及以上版本支持__

---

__调用示例__

```c
char *subPk;
char *subDk;
Ql_iotSubDevPassTransSend(subPk, subDk, "hello world", HAL_STRLEN("hello world"));
```

---

<span id="Ql_iotSubDevPassTransSend_ex"> </span>

## <span style="color:#A52A2A">__Ql_iotSubDevPassTransSend_ex__</span>

该函数用于发送子设备透传数据至平台。

__函数原型__

```c
qint32_t Ql_iotSubDevPassTransSend_ex(const quint8_t *subPk, const quint8_t *subDk, quint8_t *payload, quint16_t payloadlen)
```

__参数说明__
* __输入参数__
  * __const  quint8_t *__  __`subPk`__：创建子设备产品生成的 ProductKey。
  * __const  quint8_t *__  __`subDk`__：子设备设备唯一标识。
  * __quint8_t *__     __`payload`__：上报透传数据指针。
  * __quint16_t *__     __`payloadlen`__：上报透传数据长度。

__返回值__
* __`-1`__：      函数执行失败。
* __`1~65535`__： 函数执行成功时上报的消息txid。

__备注__
* __2.10.0及以上版本支持__

---

__调用示例__

```c
char *subPk;
char *subDk;
Ql_iotSubDevPassTransSend_ex(subPk, subDk, "hello world", HAL_STRLEN("hello world"));
```

---

<span id="Ql_iotSubDevTslReport"> </span>

## <span style="color:#A52A2A">__Ql_iotSubDevTslReport__</span>

该函数用于发送子设备物模型数据至平台(建议使用函数Ql_iotSubDevTslReport_ex替换)。

__函数原型__

```c
qbool Ql_iotSubDevTslReport(const char *subPk, const char *subDk, const void *ttlvHead)
```

__参数说明__
* __输入参数__
  * __const char *__  __`subPk`__：创建子设备产品生成的 ProductKey。
  * __const char *__  __`subDk`__：子设备设备唯一标识。
  * __const void *__  __`ttlvHead`__：ttlv 数据链表头指针。

__返回值__
* __`True`__：函数执行成功。
* __`False`__： 函数执行失败。

__备注__
* __2.9.0及以上版本支持__

---

__调用示例__

```c
void *ttlvHead = NULL;
char *subPk = NULL;
char *subDk = NULL;
Ql_iotSubDevTslReport(subPk,subDk,ttlvHead);
```

---

<span id="Ql_iotSubDevTslReport_ex"> </span>

## <span style="color:#A52A2A">__Ql_iotSubDevTslReport_ex__</span>

该函数用于发送子设备物模型数据至平台。

__函数原型__

```c
qint32_t Ql_iotSubDevTslReport_ex(const char *subPk, const char *subDk, const void *ttlvHead)
```

__参数说明__
* __输入参数__
  * __const char *__  __`subPk`__：创建子设备产品生成的 ProductKey。
  * __const char *__  __`subDk`__：子设备设备唯一标识。
  * __const void *__  __`ttlvHead`__：ttlv 数据链表头指针。

__返回值__
* __`-1`__：      函数执行失败。
* __`1~65535`__： 函数执行成功时上报的消息txid。

__备注__
* __2.9.0及以上版本支持__

---

__调用示例__

```c
void *ttlvHead = NULL;
char *subPk = NULL;
char *subDk = NULL;
Ql_iotSubDevTslReport_ex(subPk,subDk,ttlvHead);
```

---

<span id="Ql_iotSubDevTslAck"> </span>

## <span style="color:#A52A2A">__Ql_iotSubDevTslAck__</span>

该函数用于回复平台向子设备请求的物模型数据。

__函数原型__

```c
qbool Ql_iotSubDevTslAck(const char *subPk, const char *subDk, quint16_t PkgID, const void *ttlv Head)
```

__参数说明__
* __输入参数__
  * __const char *__  __`subPk`__：创建子设备产品生成的 ProductKey。
  * __const char *__  __`subDk`__：子设备设备唯一标识。
  * __quint16_t__    __`PkgID`__：ttlv 回复包 id，该 id 需要通过事件通知获取。
  * __const void *__  __`ttlvHead`__：ttlv数据链表头指针。

__返回值__
* __`True`__： 函数执行成功。
* __`False`__： 函数执行失败。

__备注__
* __2.9.0及以上版本支持__

---

__调用示例__

```c
char *subPk = NULL;
char *subDk = NULL;
quint16_t PkgID ;
void *ttlvHead = NULL;
Ql_iotSubDevTslAck(subPk, subDk, PkgID, ttlvHead);
Ql_iotTtlvFree(&ttlvHead);
```

---

<span id="Ql_iotSubDevHTB"> </span>

## <span style="color:#A52A2A">__Ql_iotSubDevHTB__</span>

该函数用于刷新子设备与网关最后进行交互的时间。

__函数原型__

```c
qbool Ql_iotSubDevHTB(const char *subPk, const char *subDk)
```

__参数说明__
* __输入参数__
  * __const char *__  __`subPk`__：创建子设备产品生成的 ProductKey。
  * __const char *__  __`subDk`__：子设备设备唯一标识。

__返回值__
* __`True`__：函数执行成功。
* __`False`__： 函数执行失败。

__备注__
* __2.9.0及以上版本支持__

---

__调用示例__

```c
mp_buffer_info_t pro_key = {0};
mp_buffer_info_t dev_key = {0};
qbool ret = Ql_iotSubDevHTB((const char *)pro_key.buf, (const char *)dev_key.buf);
```

---

<span id="Ql_iotGwDevInfoReport">  </span>

## <span style="color:#A52A2A">Ql_iotGwDevInfoReport</span>

该函数用于上报子设备信息。

__函数原型__

```c
qbool Ql_iotGwDevInfoReport(const char *subPk, const char *subDk, const char *subVer)
```

__参数说明__
* __输入参数__
  * __const char *__ __`subPk`__：创建子设备产品生成的 ProductKey。
  * __const char *__ __`subDk`__：子设备设备唯一标识。
  * __const char *__ __`subVer`__：子设备版本号。

__返回值__
* __`True`__：函数执行成功。
* __`False`__： 函数执行失败。

__备注__
* __2.19.0及以上版本支持__

---

__调用示例__

```c
qbool ret = Ql_iotGwDevInfoReport("p1112k","12345678");
```

---

<span id="Ql_iotGwDevOtaReq">  </span>

## <span style="color:#A52A2A">Ql_iotGwDevOtaReq</span>

该函数用于子设备向平台进行OTA请求。

__函数原型__

```c
qbool Ql_iotGwDevOtaReq(const char *subPk,const char *subDk,const char *subVer, quint8_t mode)
```

__参数说明__
* __输入参数__
  * __const char *__ __`subPk`__：创建子设备产品生成的 ProductKey。
  * __const char *__ __`subDk`__：子设备设备唯一标识。
  * __const char *__ __`subVer`__：子设备版本号。
  * __quint8_t__  __`mode`__：子设备通信模式。<br>
    * __`0`__：不需要sha256信息，也不需要URL外发<br>
    * __`1`__：携带sha256信息，但不需要URL外发<br>
    * __`2`__：不需要sha256信息，但需要URL外发<br>
    * __`3`__：携带sha256信息，且需要URL外发<br>

__返回值__
* __`True`__：函数执行成功。
* __`False`__： 函数执行失败。

__备注__
* __2.19.0及以上版本支持__

---

__调用示例__

```c
qbool ret = Ql_iotGwDevOtaReq("p1112k","12345678","1_0_0",0);
```

---

<br>

<span id="Ql_iotGwDevOtaUpdate">  </span>

## <span style="color:#A52A2A">Ql_iotGwDevOtaUpdate</span>

该函数用于子设备OTA升级时配置参数。

__函数原型__

```c
qbool Ql_iotGwDevOtaUpdate(const char *subPk, const char *subDk, const char *subVer, quint8_t action)
```

__参数说明__
* __输入参数__
  * __const char *__ __`subPk`__：创建子设备产品生成的 ProductKey。
  * __const char *__ __`subDk`__：子设备设备唯一标识。
  * __const char *__ __`subVer`__：子设备版本号。
  * __quint8_t__ __`action`__：子设备OTA行为配置。<br>
    * __`0`__- 拒绝升级<br>
    * __`1`__- 确认升级<br>
    * __`3`__- 上报更新状态为“升级中”<br>
    * __`4`__- 上报更新状态为“升级成功”<br>
    * __`5`__- 上报更新状态为“升级失败”<br>

__返回值__
* __`True`__：函数执行成功。
* __`False`__： 函数执行失败。

__备注__
* __2.19.0及以上版本支持__

---

__调用示例__

```c
qbool ret = Ql_iotGwDevOtaUpdate("p1112k","12345678","1_0_0",1);
```

---

<span id="Ql_iotGwDevOtaRead">  </span>

## <span style="color:#A52A2A">Ql_iotGwDevOtaRead</span>

该函数用于子设备根据平台下发的url链接下载相应固件数据并传输至用户。

__函数原型__

```c
qint32_t Ql_iotGwDevOtaRead(const char *subPk, const char *subDk, quint32_t startAddr, quint16_t size, quint8_t *buff)
```

__参数说明__
* __输入参数__
  * __const char *__ __`subPk`__：创建子设备产品生成的 ProductKey。
  * __const char *__ __`subDk`__：子设备设备唯一标识。
  * __const char *__ __`startAddr`__：读取OTA固件的起始地址。
  * __quint8_t__ __`size`__：当前次读取固件的最大长度。
  * __quint8_t__ __`buff`__：当前次读取固件的缓存指针。

__返回值__

__备注__
* __2.19.0及以上版本支持__

---

__调用示例__

```c
quint8_t buff[1024] = {0};
qbool ret = Ql_iotGwDevOtaRead("p1112k","12345678",0,1024,buff);
```

---

<span id="Ql_iotGwDevLocReport">  </span>

## <span style="color:#A52A2A">Ql_iotGwDevLocReport</span>

该函数用于子设备根据平台下发的url链接下载相应固件数据并传输至用户。

__函数原型__

```c
qbool Ql_iotGwDevLocReport(const char *subPk, const char *subDk,const void *ttlvHead)
```

__参数说明__
* __输入参数__
  * __const char *__ __`subPk`__：创建子设备产品生成的 ProductKey。
  * __const char *__ __`subDk`__：子设备设备唯一标识。
  * __const char *__ __`ttlvHead`__：定位信息的ttlv格式。

__返回值__
* __`True`__：函数执行成功。
* __`False`__： 函数执行失败。

__备注__
* __2.19.0及以上版本支持__

---

__调用示例__

```c
void *ttlvHead = NULL;
Ql_iotTtlvIdAddString(&ttlvHead,0,"$GPGGA,042523.0,3413.610533,N,10854.063257,E,1,05,2.6,438.5,M,-28.0,M,,*78");
qbool ret = Ql_iotGwDevLocReport("p1112k","12345678",ttlvHead);
Ql_iotTtlvFree(&ttlvHead);
```

---

<br>
