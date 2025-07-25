# GNSS&LBS&Wi-Fi定位 相关接口
## **API 列表**

|                                 函数                                  | 说明                                   |
| :-------------------------------------------------------------------: | :------------------------------------- |
|             [Ql_iotLocGetSupList()](#Ql_iotLocGetSupList)             | 获取设备内置定位功能支持的NMEA语句类型 |
|                [Ql_iotLocGetData()](#Ql_iotLocGetData)                | 获取设备当前内置定位功能的定位数据     |
|     [Ql_iotCmdBusLocReportInside()](#Ql_iotCmdBusLocReportInside)     | 上报设备当前内置定位功能的定位数据     |
|  [Ql_iotCmdBusLocReportInside_ex()](#Ql_iotCmdBusLocReportInside_ex)  | 上报设备当前内置定位功能的定位数据     |
|    [Ql_iotCmdBusLocReportOutside()](#Ql_iotCmdBusLocReportOutside)    | 上报设备外置定位功能的定位数据         |
| [Ql_iotCmdBusLocReportOutside_ex()](#Ql_iotCmdBusLocReportOutside_ex) | 上报设备外置定位功能的定位数据         |

## **API 详情**

<span id="Ql_iotLocGetSupList">  </span>
## <span style="color:#A52A2A">__Ql_iotLocGetSupList__</span>

该函数用于获取设备内置定位功能支持的NMEA语句类型。

__函数原型__

```c
void *Ql_iotLocGetSupList(void)
```

__参数说明__

无。

__返回值__

TTLV 数据表，节点是定位支持类型。 

__备注__
* __2.8.0及以上版本支持__

	<span style="color:red">注意：获取信息完成后，需调用 __Ql_iotTtlvFree()__ 释放资源。</span>

---


__调用示例__

```c
void *titleTtlv = Ql_iotLocGetSupList();
Ql_iotTtlvFree(&titleTtlv);
```

---

<span id="Ql_iotLocGetData">  </span>
## <span style="color:#A52A2A">__Ql_iotLocGetData__</span>

该函数用于获取设备当前内置定位功能的定位数据。

__函数原型__

```c
void *Ql_iotLocGetData(const void *titleTtlv)

```

__参数说明__
* __输入参数__
	* __const void *__   __`titleTtlv`__： 待获取定位类型的 TTLV 数据表头。

__返回值__

TTLV 数据表，节点是定位数据。

__备注__
* __2.8.0及以上版本支持__

	<span style="color:red">注意：获取信息完成后，需调用 __Ql_iotTtlvFree()__ 释放资源。</span>

---


__调用示例__

```c
void *locDataTtlv = Ql_iotLocGetData(titleTtlv);
Ql_iotTtlvFree(&titleTtlv);
```
---

<span id="Ql_iotCmdBusLocReportInside">  </span>
## <span style="color:#A52A2A">__Ql_iotCmdBusLocReportInside__</span>

该函数用于上报设备当前内置定位功能的定位数据（建议通过 Ql_iotCmdBusLocReportInside_ex()发送定位数据，发送成功后返回上行消息 ID）。

__函数原型__

```c
qbool Ql_iotCmdBusLocReportInside(void *titleTtlv)
```

__参数说明__
* __输入参数__
	* __void *__   __`titleTtlv`__： 待上报定位类型的 TTLV 数据表头。

__返回值__
* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__ 
* __2.6.1及以上版本支持__

---


__调用示例__

```c
void *titleTtlv = NULL;
Ql_iotTtlvIdAddString(&titleTtlv, 0, "LBS");
Ql_iotCmdBusLocReportInside(titleTtlv);
Ql_iotTtlvFree(&titleTtlv);
```
---
<span id="Ql_iotCmdBusLocReportInside_ex">  </span>
## <span style="color:#A52A2A">__Ql_iotCmdBusLocReportInside_ex__</span>

该函数用于上报设备当前内置定位功能的定位数据。

__函数原型__

```c
qint32_t Ql_iotCmdBusLocReportInside_ex(void *titleTtlv)
```

__参数说明__
* __输入参数__
	* __void *__   __`titleTtlv`__： 待上报定位类型的TTLV数据表头。

__返回值__
* __`-1`__：      函数执行失败。
* __`1~65535`__： 函数执行成功时上报的消息txid。

__备注__ 
* __2.10.0及以上版本支持__

---

__调用示例__

```c
void *titleTtlv = NULL;
qbool ret = Ql_iotCmdBusLocReportInside_ex(titleTtlv);
Ql_iotTtlvFree(&titleTtlv);
```
---

<span id="Ql_iotCmdBusLocReportOutside">  </span>
## <span style="color:#A52A2A">__Ql_iotCmdBusLocReportOutside__</span>

该函数用于上报设备外置定位功能的定位数据（建议通过 Ql_iotCmdBusLocReportOutside_ex()发送定位数据，发送成功后返回上行消息 ID）。
__函数原型__

```c
qbool Ql_iotCmdBusLocReportOutside(void *nmeaTtlv)
```

__参数说明__
* __输入参数__
	* __void *__   __`nmeaTtlv`__： 待上报定位 NMEA 数据的 TTLV 数据表头。

__返回值__
* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__ 
* __2.6.1及以上版本支持__

---

__调用示例__

```c
/* 发送外部定位数据 */
void *nmeaTtlv=NULL;
Ql_iotTtlvIdAddString(&nmeaTtlv,0,"$GPGGA,042523.0,3413.610533,N,10854.063257,E,1,05,2.6,438.5,M,-28.0,M,,*78");
Ql_iotTtlvIdAddString(&nmeaTtlv,0,"$GPRMC,042523.0,A,3413.610533,N,10854.063257,E,0.0,245.9,190716,0.0,E,A*0F");
Ql_iotCmdBusLocReportOutside(nmeaTtlv);
Ql_iotTtlvFree(&nmeaTtlv);
```
---
<span id="Ql_iotCmdBusLocReportOutside_ex">  </span>
## <span style="color:#A52A2A">__Ql_iotCmdBusLocReportOutside_ex__</span>

该函数用于上报设备外置定位功能的定位数据。

__函数原型__

```c
qint32_t Ql_iotCmdBusLocReportOutside_ex(void *nmeaTtlv)
```

__参数说明__
* __输入参数__
	* __void *__   __`nmeaTtlv`__： 待上报定位 NMEA 数据的 TTLV 数据表头。

__返回值__
* __`-1`__：      函数执行失败。
* __`1~65535`__： 函数执行成功时上报的消息txid。

__备注__ 
* __2.10.0及以上版本支持__

---

__调用示例__

```c
void *titleTtlv = NULL;
qbool ret = Ql_iotCmdBusLocReportOutside_ex(titleTtlv);
Ql_iotTtlvFree(&titleTtlv);
```
---





