# GNSS&LBS&Wi-Fi定位示例
## __场景描述__
目前开发者中心位置服务支持 __GNSS设备定位__ 与 __LBS定位__ 与 __WIFI定位__，从而确定设备所在具体位置。本文将为您介绍如何获取与上报定位数据到开发者中心。
* __全球导航卫星系统（GNSS）__ 
  连接外置GNSS模组实现卫星定位。
* __LBS定位__ 
  基于通信运营商的基站定位系统。
* __WIFI定位__ 
  基于无线路由器信号的定位系统。
## __涉及指令__

|               函数                | 说明                                                                               |
| :-------------------------------: | :--------------------------------------------------------------------------------- |
|       Ql_iotLocGetSupList()       | 获取设备内置定位功能支持的NMEA语句类型                                             |
|        Ql_iotLocGetData()         | 获取设备当前内置定位功能的定位数据                                                 |
|   Ql_iotCmdBusLocReportInside()   | 上报设备当前内置定位功能的定位数据                                                 |
| Ql_iotCmdBusLocReportInside_ex()  | 上报设备当前内置定位功能的定位数据（仅 QuecThing SDK 2.10.0 及以后版本支持该函数） |
|  Ql_iotCmdBusLocReportOutside()   | 上报设备外置定位功能的定位数据                                                     |
| Ql_iotCmdBusLocReportOutside_ex() | 上报设备外置定位功能的定位数据（仅 QuecThing SDK 2.10.0 及以后版本支持该函数）     |

<span style='color:#999AAA'>提示：详情请参考[设备定位 相关接口](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-07)。</span>



### __示例一(获取内置定位功能支持的NMEA类型)__
获取内置定位功能支持的NMEA类型ttlv链表头指针，正常返回节点为定位支持的NMEA类型，若是NULL则表示获取失败。

```c
  void *titleTtlv = Ql_iotLocGetSupList();
  Ql_iotTtlvFree(&titleTtlv);
```

<span style="color:#999AAA">注意：在添加物模型节点且调用完后，开发者请调用 Ql_iotTtlvFree() 函数，该函数会释放指针指向的一个内存块，从而避免内存泄漏等问题。</span>


### __示例二(获取内置定位数据)__
获取内置定位功能支持的NMEA类型ttlv链表头指针，正常返回节点是定位数据，若是NULL则表示获取失败。

```c
  void *locDataTtlv = Ql_iotLocGetData(titleTtlv);
  Ql_iotTtlvFree(&titleTtlv);
```

<span style="color:#999AAA">提示：返回值在使用完成后需要调用函数Ql_iotTtlvFree()释放该变量</span>

### __示例三(上报设备内置定位功能的定位数据)__
__1、上报模组内置的定位数据到开发者中心__
```c
  /* 发送内部定位数据 */
  void *titleTtlv = NULL;
  Ql_iotTtlvIdAddString(&titleTtlv, 0, "LBS");
  Ql_iotCmdBusLocReportInside(titleTtlv);
  Ql_iotTtlvFree(&titleTtlv);
```
<span style="color:#999AAA">提示：ttlv链表头指针在使用完成后需要调用函数Ql_iotTtlvFree()释放该变量</span>

__2、开发者中心查看设备定位__

在 __设备详情__ 详情页，单击 __设备定位__ 页签可查看定位数据及地图位置。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/LBS&GNSS/Example-01.png">![img](/zh/deviceDevelop/develop/LBS&GNSS/Example-01.png)</a>

### __示例四(上报设备外置定位功能的定位数据)__
__1、获取外置GNSS模组定位数据__

通过MCU连接外置GNSS模组，GNSS模组接收到定位数据后会将NMEA数据打印到设备。例如外置GNSS模组获取到的NMEA数据为 __$GPGGA,042523.0,3116.552,N,12138.7385,E,1,05,2.6,438.5,M,-28.0,M,,*78"__ 。

__2、将获取到的定位数据上报到开发者中心__

您可使用 __Ql_iotCmdBusLocReportOutside()__ 函数可将外置定位模组获取到的NMEA数据上报到开发者中心。

```c
  /* 发送外部定位数据 */
  void *nmeaTtlv=NULL;
  Ql_iotTtlvIdAddString(&nmeaTtlv,0,"$GPGGA,042523.0,3116.552,N,12138.7385,E,1,05,2.6,438.5,M,-28.0,M,,*78");
  Ql_iotCmdBusLocReportOutside(nmeaTtlv);
  Ql_iotTtlvFree(&nmeaTtlv);
```
__3、开发者中心查看设备定位__

在 __设备详情__ 详情页，单击 __设备定位__ 页签可查看定位数据及地图位置。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/LBS&GNSS/Example-02.png">![img](/zh/deviceDevelop/develop/LBS&GNSS/Example-02.png)</a>

### **示例五(获取设备WIFI定位功能的定位数据)**
__1、获取模组WIFI定位的 操作类型 以及 NMEA 数据类型__

```c
  void *titleTtlv = Ql_iotLocGetSupList();
  Ql_iotTtlvFree(&titleTtlv); 
```

__2、获取模组WIFI的NMEA定位数据__

```c
  void *locDataTtlv = Ql_iotLocGetData(titleTtlv);
  Ql_iotTtlvFree(&titleTtlv);
```


### __示例六(上报WIFI定位功能的定位数据)__

__1、上报模组WIFI定位数据到开发者中心__

```c
  /* 发送内部定位数据 */
  void *titleTtlv = NULL;
  Ql_iotTtlvIdAddString(&titleTtlv, 0, "WiFi");
  Ql_iotCmdBusLocReportInside_ex(titleTtlv);
  Ql_iotTtlvFree(&titleTtlv);
```
__2、开发者中心查看设备WiFi定位__

在 __设备详情__ 详情页，单击 __设备定位__ 页签可查看定位数据及地图位置。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/LBS&GNSS/Example-03.png">![img](/zh/deviceDevelop/develop/LBS&GNSS/Example-03.png)</a>



