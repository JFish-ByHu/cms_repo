# GNSS&LBS&Wi-Fi定位示例
## __场景描述__
目前开发者中心位置服务支持 __GNSS设备定位__ 与 __LBS定位__ 与 __WIFI定位__，从而确定设备所在具体位置。本文将为您介绍如何获取与上报定位数据到开发者中心。
* __全球导航卫星系统（GNSS）__ 
	连接外置GNSS模组实现卫星定位。
* __LBS定位__ 
    连接外置蜂窝模组实现基站定位。
* __WIFI定位__ 
    基于无线路由器信号的定位系统。
## __涉及指令__

|             函数             | 说明                               |
| :--------------------------: | :--------------------------------- |
|  Qth_locGetInsideLocation()  | 获取设备当前内置定位功能的定位数据 |
| Qth_locSendInsideLocation()  | 上报设备当前内置定位功能的定位数据 |
| Qth_locSendOutsideLocation() | 上报设备外置定位功能的定位数据     |

<span style='color:#999AAA'>提示：详情请参考[设备定位 相关接口](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-08)。</span>

### __示例一(上报设备外置定位功能的定位数据)__
__1、获取外置GNSS模组定位数据__

通过WIFI模组连接外置GNSS模组，GNSS模组接收到定位数据后会将NMEA数据打印到WIFI模组。例如外置GNSS模组获取到的NMEA数据为 __$GPGGA,042523.0,3116.552,N,12138.7385,E,1,05,2.6,438.5,M,-28.0,M,,*78"__ 。

__2、将获取到的定位数据上报到开发者中心__

您可使用 __Qth_locSendOutsideLocation()__ 函数可将外置定位模组获取到的NMEA数据上报到开发者中心。

```c
/* 发送外部定位数据 */
    Qth_locSendOutsideLocation("$GPGGA,042523.0,3116.552,N,12138.7385,E,1,05,2.6,438.5,M,-28.0,M,,*78", NULL, NULL);
```
__3、开发者中心查看设备定位__

在 __设备详情__ 详情页，单击 __设备定位__ 页签可查看定位数据及地图位置。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/LBS&GNSS/Example-02.png">![img](/zh/deviceDevelop/develop/LBS&GNSS/Example-02.png)</a>


### **示例二(获取设备WIFI定位功能的定位数据)**

__1、获取模组WIFI的NMEA定位数据__

```c
    void *nmeaTtlv = Qth_locGetInsideLocation();
    Quos_ttlvFree(&nmeaTtlv);
```

### __示例三(上报WIFI定位功能的定位数据)__

__1、上报模组WIFI定位数据到开发者中心__

```c
    /* 发送内部定位数据 */
    Qth_locSendInsideLocation(NULL, NULL);
```
__2、开发者中心查看设备WiFi定位__

在 __设备详情__ 详情页，单击 __设备定位__ 页签可查看定位数据及地图位置。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/LBS&GNSS/Example-03.png">![img](/zh/deviceDevelop/develop/LBS&GNSS/Example-03.png)</a>



