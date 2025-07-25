# 数据业务交互 相关接口


## **API 列表**

|                  函数                   |        说明        |
| :-------------------------------------: | :----------------: |
|    [Qth.sendTrans()](#Qth.sendTrans)    |    发送透传数据    |
|      [Qth.sendTsl()](#Qth.sendTsl)      |   发送物模型数据   |
|       [Qth.ackTsl()](#Qth.ackTsl)       | 应答物模型读取请求 |
| [Qth.ackTslServer()](#Qth.ackTslServer) | 应答物模型服务请求 |

## **API 详情**

<span id="Qth.sendTrans"></span>
## <span style="color:#A52A2A">__Qth.sendTrans__</span>

该函数用于设备发送透传数据到IOT平台。

__函数原型__

```python
Qth.sendTrans(mode, value)
```

__参数说明__

* __输入参数__
  * __`mode`__：发送模式，具体取值见下表：

    | 取值 | 描述                                               |
    | ---- | -------------------------------------------------- |
    | 0    | 消息仅发送一次，不需要确认或重传。可能会丢失或重复 |
    | 1    | 消息至少发送一次，直到收到确认。可能会重复         |
  * __`value`__：透传数据。

* __输出参数__
  * 无。

* __返回值__
  * 成功：返回 `True`。
  * 失败：返回 `False`。

__调用示例__

```python
Qth.sendTrans(1, "hello world")
```
---

<span id="Qth.sendTsl"></span>
## <span style="color:#A52A2A">__Qth.sendTsl__</span>

该函数用于设备发送物模型数据到IOT平台。

__函数原型__

```python
Qth.sendTsl(mode, value)
```

__参数说明__

* __输入参数__
  * __`mode`__：发送模式，具体取值见下表：

    | 取值 | 描述                                               |
    | ---- | -------------------------------------------------- |
    | 0    | 消息仅发送一次，不需要确认或重传。可能会丢失或重复 |
    | 1    | 消息至少发送一次，直到收到确认。可能会重复         |
  * __`value`__：物模型数据，字典格式。

* __输出参数__
  * 无。

* __返回值__
  * 成功：返回 `True`。
  * 失败：返回 `False`。

__调用示例__

```python
Qth.sendTsl(1, {1:10,2:'hello'})
```
---

<span id="Qth.ackTsl"></span>
## <span style="color:#A52A2A">__Qth.ackTsl__</span>

当IOT平台读取设备物模型数据时，该函数用于设备应答物模型数据。

__函数原型__

```python
Qth.ackTsl(mode, value, pkgId)
```

__参数说明__

* __输入参数__
  * __`mode`__：发送模式，具体取值见下表：

    | 取值 | 描述                                               |
    | ---- | -------------------------------------------------- |
    | 0    | 消息仅发送一次，不需要确认或重传。可能会丢失或重复 |
    | 1    | 消息至少发送一次，直到收到确认。可能会重复         |
  * __`value`__：物模型数据，字典格式。
  * __`pkgId`__：数据包ID，整型格式。

* __输出参数__
  * 无。

* __返回值__
  * 成功：返回 `True`。
  * 失败：返回 `False`。

__调用示例__

```python
def App_cmdReadTslCb(ids, pkgId):
    print('readTsl:', ids, pkgId)
    value = {1:10,2:'hello'}
    Qth.ackTsl(0, value, pkgId)
```
---

<span id="Qth.ackTslServer"></span>
## <span style="color:#A52A2A">__Qth.ackTslServer__</span>

当IOT平台下发设备物模型服务时，该函数用于设备应答物模型服务请求。

__函数原型__

```python
Qth.ackTslServer(mode, serverId, value, pkgId)
```

__参数说明__

* __输入参数__
  * __`mode`__：发送模式，具体取值见下表：

    | 取值 | 描述                                               |
    | ---- | -------------------------------------------------- |
    | 0    | 消息仅发送一次，不需要确认或重传。可能会丢失或重复 |
    | 1    | 消息至少发送一次，直到收到确认。可能会重复         |
  * __`serverId`__：物模型服务ID，整型格式。
  * __`value`__：物模型数据，字典格式。
  * __`pkgId`__：数据包ID，整型格式。

* __输出参数__
  * 无。

* __返回值__
  * 成功：返回 `True`。
  * 失败：返回 `False`。

__调用示例__

```python
def App_cmdRecvTslServerCb(serverId, value, pkgId):
    print('recvTslServer:', serverId, value, pkgId)
    Qth.ackTslServer(1, serverId, value, pkgId)
```
