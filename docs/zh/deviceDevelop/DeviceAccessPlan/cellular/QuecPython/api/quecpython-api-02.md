# 产品配置 相关接口


## **API 列表**

|                    函数                     |       说明       |
| :-----------------------------------------: | :--------------: |
| [Qth.setProductInfo()](#Qth.setProductInfo) |   配置产品信息   |
|      [Qth.setServer()](#Qth.setServer)      |  配置服务器域名  |
|    [Qth.setLifetime()](#Qth.setLifetime)    | 配置设备生命周期 |
|     [Qth.setEventCb()](#Qth.setEventCb)     | 配置事件回调函数 |
|      [Qth.setMcuVer()](#Qth.setMcuVer)      | 配置MCU版本信息  |
|      [Qth.setAppVer()](#Qth.setAppVer)      | 配置脚本版本信息 |

## **API 详情**

<span id="Qth.setProductInfo"></span>
## <span style="color:#A52A2A">__Qth.setProductInfo__</span>

该函数用于配置产品信息。产品信息包括 ProductKey 和 ProductSecret，均为在平台创建产品时生成。

__函数原型__

```python
Qth.setProductInfo(pk, ps)
```

__参数说明__

* __输入参数__
  * __`pk`__：在平台创建产品时生成的 ProductKey。
  * __`ps`__：在平台创建产品时生成的 ProductSecret。

* __输出参数__
  * 无。

* __返回值__
  * 成功：返回 `True`。
  * 失败：返回 `False`。

__调用示例__

```python
Qth.setProductInfo("xxxxxx", "xxxxxxxxxxxxxxxx")
```
---

<span id="Qth.setServer"></span>
## <span style="color:#A52A2A">__Qth.setServer__</span>

该函数用于设置服务器域名。

__函数原型__

```python
Qth.setServer(url)
```

__参数说明__

* __输入参数__
  * __`url`__：服务器域名。可选，不配置时使用默认值，默认为:`mqtts://iot-south.quectelcn.com:8883`。
      | 地区           | 服务器域名                            |
      | -------------- | ------------------------------------- |
      | 中国地区非加密 | mqtt://iot-south.quectelcn.com:1883   |
      | 中国地区加密   | mqtts://iot-south.quectelcn.com:8883  |
      | 欧洲地区非加密 | mqtt://iot-south.acceleronix.io:1883  |
      | 欧洲地区加密   | mqtts://iot-south.acceleronix.io:8883 |

* __输出参数__
  * 无。

* __返回值__
  * 成功：返回 `True`。
  * 失败：返回 `False`。

__调用示例__

```python
Qth.setServer("mqtts://iot-south.quectelcn.com:8883")
```
---

<span id="Qth.setLifetime"></span>
## <span style="color:#A52A2A">__Qth.setLifetime__</span>

该函数用于设置 MQTT 连接的生命周期。

__函数原型__

```python
Qth.setLifetime(lifetime)
```

__参数说明__

* __输入参数__
  * __`lifetime`__：MQTT 连接的生命周期，范围是21-600，默认值是120，单位为秒。

* __输出参数__
  * 无。

* __返回值__
  * 成功：返回 `True`。
  * 失败：返回 `False`。

__调用示例__

```python
Qth.setLifetime(120)
```
---

<span id="Qth.setEventCb"></span>
## <span style="color:#A52A2A">__Qth.setEventCb__</span>

该函数用于设置用户事件回调。

__函数原型__

```python
Qth.setEventCb(eventlist)
```

__参数说明__

* __输入参数__
  * __`eventlist`__：用户事件回调函数。
    * __`devEvent`__：设备事件回调函数。
      * __函数原型__
        ```c
        devEventCb(event, result)
        ```
      * __输入参数__
        * __`event`__：事件类型
            | 取值 | 描述               |
            | ---- | ------------------ |
            | 1    | 设备联网事件       |
            | 2    | 设备与平台交互事件 |
            | 3    | 设备重置事件       |
        * __`result`__：事件码  
          * 成功：返回 `0`。
          * 失败：返回其它值，详情请参考[错误码列表](/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/InteractionEvent)
    * __`recvTsl`__：tsl数据接收回调函数。
      * __函数原型__
        ```c
        recvTslCb(value)
        ```
      * __输入参数__
        * __`value`__：tsl物模型数据，字典类型
    * __`readTsl`__：tsl数据请求回调函数。
      * __函数原型__
        ```c
        readTslCb(ids, pkgId)
        ```
      * __输入参数__
        * __`ids`__：tsl物模型ID，数组类型
        * __`pkgId`__：数据包ID
    * __`readTslServer`__：tsl服务请求回调函数。
      * __函数原型__
        ```c
        readTslServerCb(serverId, value, pkgId)
        ```
      * __输入参数__
        * __`serverId`__：tsl物模型服务ID
        * __`value`__：tsl物模型数据，json类型
        * __`pkgId`__：数据包ID
    * __`recvTrans`__：透传数据接收回调函数。
      * __函数原型__
        ```c
        recvTransCb(value)
        ```
      * __输入参数__
        * __`value`__：透传数据
    * __`ota`__：OTA相关事件回调函数。
      * __`otaPlan`__：OTA计划下发回调函数。
        * __函数原型__
          ```c
          otaPlanCb(plans)
          ```
        * __输入参数__
          * __`plans`__：下发的OTA计划，数组类型,可能同时存在多个OTA计划，数组里所包含的数据内容如下：
            ```c
            [(组件类型,组件标识,源版本,目标版本,Ota升级最小电量,ota升级需要磁盘空间,Ota升级最小信号强度),(组件类型,组件标识,源版本,目标版本,Ota升级最小电量,ota升级需要磁盘空间,Ota升级最小信号强度)...]
            ```
      * __`fotaResult`__：OTA升级结果回调函数。
        * __函数原型__
          ```c
          fotaResultCb(comp_no, result)
          ```
        * __输入参数__
          * __`comp_no`__：组件标识
          * __`result`__：升级结果
            * 成功：返回 `True`。
            * 失败：返回 `False`。

* __输出参数__
  * 无。

* __返回值__
  * 无。

__调用示例__

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

该函数用于设置 MCU 版本。

__函数原型__

```python
Qth.setMcuVer(comp_no, version, infoCB, resultCB)
```

__参数说明__

* __输入参数__
  * __`comp_no`__：MCU 组件标识。
  * __`version`__：MCU 组件版本。
  * __`infoCB`__：SOTA固件信息回调函数。
    * __函数原型__
        ```c
        infoCB(comp_no, version, url, md5, crc)
        ```
    * __输入参数__
      * __`comp_no`__：组件标识
      * __`version`__：目标版本
      * __`url`__：固件链接
      * __`md5`__：固件MD5(32字节小写)
      * __`crc`__：固件CRC32(MPEG-2)
  * __`resultCB`__：SOTA升级结果回调函数。
    * __函数原型__
        ```c
        resultCB(comp_no, result)
        ```
    * __输入参数__
        * __`comp_no`__：组件标识
        * __`result`__：升级结果
          * 成功：返回 `True`。
          * 失败：返回 `False`。

* __输出参数__
  * 无。

* __返回值__
  * 无。

__调用示例__

```python
def App_sotaInfoCb(comp_no, version, url, md5, crc):
    print('sotaInfo:', comp_no, version, url, md5, crc)
    # 当使用url下载固件完成，且MCU更新完毕后，需要获取MCU最新的版本信息，并通过setMcuVer进行更新
    # Qth.setMcuVer('MCU1', 'V1.2', App_sotaInfoCb, App_sotaResultCb)

def App_sotaResultCb(comp_no, result):
    print('sotaResult:',comp_no, result)

Qth.setMcuVer('MCU1', 'V1.1', App_sotaInfoCb, App_sotaResultCb)
Qth.setMcuVer('MCU2', 'V2.1', App_sotaInfoCb, App_sotaResultCb)
```
---

<span id="Qth.setAppVer"></span>
## <span style="color:#A52A2A">__Qth.setAppVer__</span>

该函数用于设置 APP(Quecpython脚本) 版本。

__函数原型__

```python
Qth.setAppVer(version, resultCB)
```

__参数说明__

* __输入参数__
  * __`version`__：APP组件版本。
  * __`resultCB`__：APP升级结果回调函数。
    * __函数原型__
        ```c
        resultCB(comp_no, result)
        ```
    * __输入参数__
        * __`comp_no`__：组件标识
        * __`result`__：升级结果
          * 成功：返回 `True`。
          * 失败：返回 `False`。

* __输出参数__
  * 无。

* __返回值__
  * 无。

__调用示例__

```python
Qth.setAppVer('V1.0.1', App_sotaResultCb)
```
---

<span id="ERROR_CODE">  </span>
## **错误码列表**
| 枚举值 | 描述                                             |
| ------ | ------------------------------------------------ |
| -5888  | 调用其他微服务接口网络错误                       |
| -5889  | 设备消息被限制                                   |
| -5890  | 设备不能激活                                     |
| -5891  | 设备已认证                                       |
| -5892  | 通过PK没有查到产品信息                           |
| -5893  | 密码解析错误                                     |
| -5894  | Sign错误                                         |
| -5895  | Rand不符合规则  （Rand为随机数，值为base64字符） |
| -5896  | 参数传入的DK,PK与数据库存储的DK,PK不一致         |
| -5897  | DK不符合规则                                     |
| -5898  | Flag不符合规则                                   |
| -5899  | ClientId规则和Password不匹配                     |
| -5900  | 设备的DS错误                                     |
| -5901  | 没查到设备信息                                   |
| -5902  | 网关与子设备没有关联关系                         |
| -5903  | 子设备重复登录                                   |
| -5904  | 设备不在线                                       |
| -5905  | 未知错误                                         |
| -5906  | 静态设备不可认证                                 |
| -5907  | 断线重连                                         |
| -5908  | 主动断开连接                                     |
| -4352  | 获取配置失败                                     |
| -4353  | 设备未认证                                       |
| -4354  | 设备连接失败                                     |
| -4355  | 设备重置失败                                     |
| -4356  | 设备移除失败                                     |
| -4357  | 设备已连接                                       |
| -4358  | 设备重置异常(一机一密设备收到了新的设备密钥)     |
| -17920 | mqtt 内部错误                                    |
| -17921 | mqtt 网络异常                                    |
| -17922 | mqtt 心跳异常                                    |
| -17923 | mqtt 订阅错误                                    |
| -17924 | mqtt 连接错误                                    |
| -17925 | mqtt 不支持的协议版本                            |
| -17926 | mqtt 标识符被拒绝                                |
| -17927 | mqtt 服务器不可用                                |
| -17928 | mqtt 用户名或密码错误                            |
| -17929 | mqtt 未授权                                      |
| -17930 | URL解析失败                                      |
| -17931 | 获取IP失败                                       |
| -17932 | 数据包构建失败                                   |
| -17933 | 数据包发送失败                                   |