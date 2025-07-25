# 设备连接 相关接口


## **API 列表**

|           函数            |       说明       |
| :-----------------------: | :--------------: |
|  [Qth.init()](#Qth.init)  |  QthSDK 初始化   |
| [Qth.start()](#Qth.start) | 开始连接IOT平台  |
|  [Qth.stop()](#Qth.stop)  | 断开IOT平台连接  |
| [Qth.state()](#Qth.state) | 获取平台连接状态 |
| [Qth.reset()](#Qth.reset) |     重置设备     |

## **API 详情**

<span id="Qth.init"></span>
## <span style="color:#A52A2A">__Qth.init__</span>

QthSDK 初始化，会自动调用各个业务组件初始化函数，在使用QthSDK API前必须先进行初始化。

__函数原型__

```python
Qth.init()
```

__参数说明__

* __输入参数__
  * 无。

* __输出参数__
  * 无。

* __返回值__
  * 成功：返回 `True`。
  * 失败：返回 `False`。

__调用示例__

```python
Qth.init()
```
---

<span id="Qth.start"></span>
## <span style="color:#A52A2A">__Qth.start__</span>

开始IOT平台连接，会自动拨号并发起IOT平台连接。

__函数原型__

```python
Qth.start()
```

__参数说明__

* __输入参数__
  * 无。

* __输出参数__
  * 无。

* __返回值__
  * 成功：返回 `True`。
  * 失败：返回 `False`。

__调用示例__

```python
Qth.stop()
```
---

<span id="Qth.stop"></span>
## <span style="color:#A52A2A">__Qth.stop__</span>

断开IOT平台连接。

__函数原型__

```python
Qth.stop()
```

__参数说明__

* __输入参数__
  * 无。

* __输出参数__
  * 无。

* __返回值__
  * 无。

__调用示例__

```python
Qth.stop()
```
---
<span id="Qth.state"></span>
## <span style="color:#A52A2A">__Qth.state__</span>

获取当前设备连接IOT平台状态。

__函数原型__

```python
Qth.state()
```

__参数说明__

* __输入参数__
  * 无。

* __输出参数__
  * 无。

* __返回值__
  * 已连接：返回 `True`。
  * 未连接：返回 `False`。

__调用示例__

```python
ret = Qth.state()
print("ret:", ret)
```
---
<span id="Qth.reset"></span>
## <span style="color:#A52A2A">__Qth.reset__</span>

设备重置，调用该API并将重置设备密钥(DS)，并解除用户与设备的绑定关系，重置结果会通过注册的事件回调函数进行通知。

__函数原型__

```python
Qth.reset()
```

__参数说明__

* __输入参数__
  * 无。

* __输出参数__
  * 无。

* __返回值__
  * 无。

__调用示例__

```python
Qth.reset()
```
