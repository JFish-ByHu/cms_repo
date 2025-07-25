# 增值服务 相关接口

## **API 列表**

|                    函数                     |        说明        |
| :-----------------------------------------: | :----------------: |
| [Ql_iotCmdSysNTPReq()](#Ql_iotCmdSysNTPReq) |  获取NTP网络时间   |
| [Ql_iotDataCollSend()](#Ql_iotDataCollSend) | 设备端上报数采数据 |

## **API 详情**

<span id="Ql_iotCmdSysNTPReq">  </span>

## <span style="color:#A52A2A">__Ql_iotCmdSysNTPReq__</span>

该函数用于获取NTP网络时间，若获取完成则通过URC事件码的形式通知。

__函数原型__

```c
qbool Ql_iotCmdSysNTPReq(void)
```

__参数说明__
* __输入参数__

	无

__返回值__
* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__
* __2.11.0及以上版本支持__

---

__调用示例__

```c
qbool ret = Ql_iotCmdSysNTPReq();
```

---

<span id="Ql_iotDataCollSend">  </span>

## <span style="color:#A52A2A">__Ql_iotDataCollSend__ </span>

该函数用于设备端上报数采数据。

__函数原型__

```c
qbool Ql_iotDataCollSend(qbool lastPack, quint32_t packNum, quint16_t dataLen, quint8_t *data);
```

__参数说明__
* __输入参数__
    * __`<lastPack>`__： 布尔类型。指示当前次发送的数据是否为最后一包。
        * __`True`__ ：最后一个包
        * __`False`__ ：不是最后一个包
    * __`<packNum>`__： 数值类型,范围为(0 - 1048576)。当前大数据分包发送的分包序号。
    * __`<dataLen>`__： 数值类型,范围为(1 - 1024)。当前分包的包大小。
    * __`<data>`__： 字节流类型，长度根据具体模组分配的缓存大小决定。表示数据。

__返回值__
* __`True`__：函数执行成功。
* __`False`__：函数执行失败。

__备注__
* __2.18.0及以上版本支持__

---

__调用示例__

```c
qbool ret = Ql_iotDataCollSend(TRUE,0,5,((quint8_t *)"hello"));
```

---

