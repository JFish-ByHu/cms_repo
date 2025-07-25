<!--
 * @Author: mack.zhang@quectel.com mack.zhang@quectel.com
 * @Date: 2024-11-11 11:28:41
 * @LastEditors: mack.zhang@quectel.com mack.zhang@quectel.com
 * @LastEditTime: 2024-11-12 15:45:20
 * @FilePath: \quec-doc-web\docs\zh\deviceDevelop\cellular\QuecPython\api\quecpython-api-07.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# 定位 相关接口


## **API 列表**

|                函数                 |  说明   |
| :---------------------------------: | :-----: |
| [Qth.sendOutsideLocation()](#Qth.sendOutsideLocation) | 发送外部定位NEMA数据 |


## **API 详情**

<span id="Qth.sendOutsideLocation"></span>
## <font color=#A52A2A>__Qth.sendOutsideLocation__</font>

该函数用于设备发送外部定位的NMEA-0183标准格式数据到IOT平台。

__函数原型__

```python
Qth.sendOutsideLocation(location)
```

__参数说明__

* __输入参数__
  * __`location`__：NMEA-0183标准格式，或以$LBS开头的数据，多条语句用分号";"组合。
  LBS类型和WIFI定位数据需构建NMEA格式数据。
  ```  
  $LBS,<1>,<2>,<3>,<4>,<5>,<6>*hh<CR><LF>
  <1>：基站mcc
  <2>：基站mnc
  <3>：基站lac
  <4>：基站cellid
  <5>: 基站RxLev
  <6>: 备注

  $WIFI,<1>,<2>,<3>*hh<CR><LF>
  <1>：WIFI路由物理地址MAC，格式：AABBCCDDEEFFGG。
  <2>：WIFI路由名称SSID，填充方式为SSID的HEX数据内容转为string方式(HEX2STRING)。
  <3>：WIFI路由信号强度RSSI。
  ```
* __输出参数__
  * 无。

* __返回值__
  * 成功：返回 `True`。
  * 失败：返回 `False`。

__调用示例__

```python
Qth.sendOutsideLocation("$GPGGA,092204.999,4250.5589,S,14718.5084,E,1,04,24.4,19.7,M,,,,0000*1F;$GPGSA,A,3,01,20,19,13,,,,,,,,,40.4,24.4,32.2*0A")
```