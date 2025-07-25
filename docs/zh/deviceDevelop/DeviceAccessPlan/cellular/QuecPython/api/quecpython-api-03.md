# 网络配置 相关接口


## **API 列表**

|            函数             |  说明   |
| :-------------------------: | :-----: |
| [Qth.setApn()](#Qth.setApn) | 配置APN |

## **API 详情**

<span id="Qth.setApn"></span>
## <span style="color:#A52A2A">__Qth.setApn__</span>

配置网络拨号的APN信息。

__函数原型__

```python
Qth.setApn(apn, username, password)
```

__参数说明__

* __输入参数__
  * __`apn`__：接入点名称。
  * __`username`__：接入点用户名，可缺省。
  * __`password`__：接入点密码，可缺省。

* __输出参数__
  * 无。

* __返回值__
  * 无。

__调用示例__

```python
Qth.setApn("cmiot","","")
```

