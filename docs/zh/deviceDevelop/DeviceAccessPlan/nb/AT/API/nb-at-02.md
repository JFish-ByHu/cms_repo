# AT指令概览

## **1、产品配置相关命令**

|   指令名称    |             功能描述             |
| :-----------: | :------------------------------: |
|  AT+QIOTCFG   |           配置可选参数           |
|  AT+QIOTREG   |         配置平台连接模式         |
| AT+QIOTSTATE  | 查询当前设备与平台之间的连接状态 |
| AT+QIOTMCUVER |         配置 MCU 版本号          |

<span style='color:#999AAA'>提示：详情请参考[产品配置相关命令](/deviceDevelop/DeviceAccessPlan/nb/AT/API/nb-at-03)。</span>

<br>

## **2、数据交互相关命令**

|    指令名称    |         功能描述          |
| :------------: | :-----------------------: |
|  AT+QIOTSEND   |    发送透传数据至平台     |
|   AT+QIOTRD    |  读取平台下发的透传数据   |
| AT+QIOTMODELTD |   发送物模型数据至平台    |
| AT+QIOTMODELRD | 读取平台下发的物模型数据  |
|  AT+QIOTINFO   | 请求QuecThing上报设备信息 |

<span style='color:#999AAA'>提示：详情请参考[数据交互相关命令](/deviceDevelop/DeviceAccessPlan/nb/AT/API/nb-at-04)。</span>

<br>

## **3、OTA升级相关命令**

|   指令名称    |      功能描述      |
| :-----------: | :----------------: |
| AT+QIOTOTAREQ |  请求OTA升级计划   |
| AT+QIOTUPDATE | 配置 OTA 升级行为  |
| AT+QIOTOTARD  | 分片读取 SOTA 数据 |

<span style='color:#999AAA'>提示：详情请参考[OTA升级相关命令](/deviceDevelop/DeviceAccessPlan/nb/AT/API/nb-at-05)。</span>

<br>

## **4、设备定位相关命令**

|   指令名称    |              功能描述               |
| :-----------: | :---------------------------------: |
| AT+QIOTLOCIN  | 获取/上报设备内置定位功能的定位数据 |
| AT+QIOTLOCEXT |   上报设备外置定位功能的定位数据    |

<span style='color:#999AAA'>提示：详情请参考[设备定位相关命令](/deviceDevelop/DeviceAccessPlan/nb/AT/API/nb-at-06)。</span>

<br>
