# OTA 相关接口


## **API 列表**

|                函数                 |  说明   |
| :---------------------------------: | :-----: |
| [Qth.otaRequest()](#Qth.otaRequest) | OTA请求 |
|  [Qth.otaAction()](#Qth.otaAction)  | OTA确认 |

## **API 详情**

<span id="Qth.otaRequest"></span>
## <span style="color:#A52A2A">__Qth.otaRequest__</span>

从IOT平台获取设备的OTA升级计划。若需要主动检查是否存在OTA任务，可以使用该API进行OTA请求。

__函数原型__

```python
Qth.otaRequest()
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
Qth.otaRequest()
```
---

<span id="Qth.otaAction"></span>
## <span style="color:#A52A2A">__Qth.otaAction__</span>

在IOT平台下发OTA计划时，对OTA计划进行确认操作，接受或者拒绝OTA计划。

__函数原型__

```python
Qth.otaAction(otaAction)
```

__参数说明__

* __输入参数__
  * __`otaAction`__：对OTA计划进行操作，具体取值见下表：

    | 取值 | 描述     |
    | ---- | -------- |
    | 0    | 拒绝升级 |
    | 1    | 确认升级 |

* __输出参数__
  * 无。

* __返回值__
  * 成功：返回 `True`。
  * 失败：返回 `False`。

__调用示例__

```python
def App_otaPlanCb(plans):
    print('otaPlan:', plans)
    Qth.otaAction(1)
```
---