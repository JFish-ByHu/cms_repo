<!--
 * @Author: mack.zhang@quectel.com mack.zhang@quectel.com
 * @Date: 2025-04-18 10:14:21
 * @LastEditors: mack.zhang@quectel.com mack.zhang@quectel.com
 * @LastEditTime: 2025-04-24 10:04:04
 * @FilePath: \quec-doc-web\docs\zh\deviceDevelop\DeviceAccessPlan\cellular\QuecPython\api\quecpython-api-01.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# API 概览

## **产品配置 相关接口**

|         函数         |       说明        |
| :------------------: | :---------------: |
| Qth.setProductInfo() |   配置产品信息    |
|   Qth.setServer()    |  配置服务器域名   |
|  Qth.setLifetime()   | 配置设备生命周期  |
|   Qth.setEventCb()   | 配置事件回调函数  |
|   Qth.setMcuVer()    | 配置 MCU 版本信息 |
|   Qth.setAppVer()    | 配置脚本版本信息  |

<span style='color:#999AAA'>提示：详情请参考[产品配置 相关接口](/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-02)。</span>

## **网络配置 相关接口**

|     函数     |   说明   |
| :----------: | :------: |
| Qth.setApn() | 配置 APN |

<span style='color:#999AAA'>提示：详情请参考[网络配置 相关接口](/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-03)。</span>

## **设备连接 相关接口**

|    函数     |       说明        |
| :---------: | :---------------: |
| Qth.init()  |   QthSDK 初始化   |
| Qth.start() | 开始连接 IOT 平台 |
| Qth.stop()  | 断开 IOT 平台连接 |
| Qth.state() | 获取平台连接状态  |
| Qth.reset() |     重置设备      |

<span style='color:#999AAA'>提示：详情请参考[设备连接 相关接口](/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-04)。</span>

## **数据业务交互 相关接口**

|        函数        |        说明        |
| :----------------: | :----------------: |
|  Qth.sendTrans()   |    发送透传数据    |
|   Qth.sendTsl()    |   发送物模型数据   |
|    Qth.ackTsl()    | 应答物模型读取请求 |
| Qth.ackTslServer() | 应答物模型服务请求 |

<span style='color:#999AAA'>提示：详情请参考[数据业务交互 相关接口](/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-05)。</span>

## **OTA 相关接口**

|       函数       |   说明   |
| :--------------: | :------: |
| Qth.otaRequest() | OTA 请求 |
| Qth.otaAction()  | OTA 确认 |

<span style='color:#999AAA'>提示：详情请参考[OTA 相关接口](/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-06)。</span>


## **定位 相关接口**

|                函数                 |  说明   |
| :---------------------------------: | :-----: |
| Qth.sendOutsideLocation() | 发送外部定位NEMA数据 |

<span style='color:#999AAA'>提示：详情请参考[定位 相关接口](/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-07)。</span>
