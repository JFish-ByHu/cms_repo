# AT指令概览

## **1、产品配置相关命令**

|   指令名称    |             功能描述             |
| :-----------: | :------------------------------: |
|  AT+QIOTCFG   |           配置可选参数           |
|  AT+QIOTREG   |         配置平台连接模式         |
| AT+QIOTSTATE  | 查询当前设备与平台之间的连接状态 |
| AT+QIOTMCUVER |         配置 MCU 版本号          |

<span style='color:#999AAA'>提示：详情请参考[产品配置相关命令](/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-03)。</span>

<br>

## **2、数据交互相关命令**

|    指令名称    |         功能描述          |
| :------------: | :-----------------------: |
|  AT+QIOTSEND   |    发送透传数据至平台     |
|   AT+QIOTRD    |  读取平台下发的透传数据   |
| AT+QIOTMODELTD |   发送物模型数据至平台    |
| AT+QIOTMODELRD | 读取平台下发的物模型数据  |
|  AT+QIOTINFO   | 请求QuecThing上报设备信息 |

<span style='color:#999AAA'>提示：详情请参考[数据交互相关命令](/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-04)。</span>

<br>

## **3、OTA升级相关命令**

|   指令名称    |      功能描述      |
| :-----------: | :----------------: |
| AT+QIOTOTAREQ |  请求OTA升级计划   |
| AT+QIOTUPDATE | 配置 OTA 升级行为  |
| AT+QIOTOTARD  | 分片读取 SOTA 数据 |

<span style='color:#999AAA'>提示：详情请参考[OTA升级相关命令](/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-05)。</span>

<br>

## **4、设备定位相关命令**

|   指令名称    |              功能描述               |
| :-----------: | :---------------------------------: |
| AT+QIOTLOCIN  | 获取/上报设备内置定位功能的定位数据 |
| AT+QIOTLOCEXT |   上报设备外置定位功能的定位数据    |

<span style='color:#999AAA'>提示：详情请参考[设备定位相关命令](/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-07)。</span>

<br>

## **5、设备授权相关命令**

|    指令名称     |     功能描述     |
| :-------------: | :--------------: |
| AT+QIOTBINDCODE | 上报设备绑定信息 |
|   AT+QIOTRST    |   重置设备信息   |

<span style='color:#999AAA'>提示：详情请参考[设备授权相关命令](/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-08)。</span>

<br>

## **6、网关子设备相关命令**

|      指令名称       |           功能描述           |
| :-----------------: | :--------------------------: |
|   AT+QIOTSUBCONN    |       连接子设备至网关       |
|  AT+QIOTSUBDISCONN  | 断开/注销子设备与网关的连接  |
|   AT+QIOTSUBSEND    |   发送子设备透传数据至平台   |
|    AT+QIOTSUBRD     | 子设备读取平台下发的透传数据 |
|   AT+QIOTSUBTSLTD   |  发送子设备物模型数据至平台  |
|   AT+QIOTSUBTSLRD   |   读取平台下发的物模型数据   |
|    AT+QIOTSUBHTB    |          发送心跳包          |
|  AT+QIOTSUBDEVINFO  |        子设备信息上报        |
|  AT+QIOTSUBOTAREQ   |       子设备 OTA 请求        |
| AT+QIOTSUBOTAUPDATE |     子设备 OTA 升级配置      |
|   AT+QIOTSUBOTARD   |     子设备 OTA 固件读取      |
|    AT+QIOTSUBLOC    |      子设备定位信息上报      |

<span style='color:#999AAA'>提示：详情请参考[网关子设备相关命令](/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-10)。</span>

<br>

## **7、增值服务相关命令**

|     指令名称      |   功能描述   |
| :---------------: | :----------: |
|   AT+QIOTNTPREQ   | 获取网络时间 |
| AT+QIOTDATACOLLTX | 数采信息上报 |

<span style='color:#999AAA'>提示：详情请参考[增值服务相关命令](/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-09)。</span>

<br>
