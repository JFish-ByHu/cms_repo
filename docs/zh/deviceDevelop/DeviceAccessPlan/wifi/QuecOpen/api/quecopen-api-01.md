# API 概览

## **产品配置 相关接口**

|            函数            |             说明             |
| :------------------------: | :--------------------------: |
| Qth_configSetProductInfo() |       配置平台产品信息       |
| Qth_configGetProductInfo() |       获取平台产品信息       |
| Qth_configSetDeviceInfo()  | 设置自定义设备标识和设备密钥 |
| Qth_configGetDeviceInfo()  | 获取自定义设备标识和设备密钥 |
|  Qth_configGetAuthType()   |       获取设备认证类型       |
|  Qth_configSetODOSInfo()   |       设置一机一密信息       |
|   Qth_configSetServer()    |   设置服务器域名和默认 IP    |
|   Qth_configGetServer()    |   获取服务器域名和默认 IP    |
|  Qth_configSetLifetime()   |   设置 MQTT 连接的生命周期   |
|  Qth_configGetLifetime()   |   获取 MQTT 连接的生命周期   |
|   Qth_configSetEventCb()   |       设置用户事件回调       |
|   Qth_configGetEventCb()   |       获取用户事件回调       |
| Qth_configGetBindingInfo() |         获取绑定信息         |
|  Qth_configSetModuleVer()  |        设置模组版本号        |
|  Qth_configGetModuleVer()  |        获取模组版本号        |
|   Qth_configSetMcuVer()    |       设置 MCU 版本号        |
|   Qth_configGetMcuVer()    |       获取 MCU 版本号        |
|  Qth_configSetWifiInfo()   |        配置 WiFi 信息        |
|  Qth_configGetWifiInfo()   |        获取 WiFi 信息        |
| Qth_configClearWifiInfo()  |        清除 WiFi 信息        |
| Qth_configSetNetcfgMode()  |      设置 WiFi 配置模式      |
| Qth_configGetNetcfgMode()  |      获取 WiFi 配置模式      |

<span style='color:#999AAA'>提示：详情请参考[产品配置 相关接口](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-02)。</span>

## **设备连接 相关接口**

|        函数        |              说明               |
| :----------------: | :-----------------------------: |
|   Qth_devInit()    | 初始化配置并七档 Quecthing 功能 |
|   Qth_devStart()   |         开始连接IoT平台         |
|   Qth_devReset()   |            设备重置             |
|  Qth_devRemove()   |            设备移除             |
| Qth_devGetStatus() |          获取设备状态           |

<span style='color:#999AAA'>提示：详情请参考[设备连接 相关接口](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-03)。</span>

## **网络配置 相关接口**

|          函数          |        说明        |
| :--------------------: | :----------------: |
|  Qth_wifiOpenNetcfg()  |   开启 WiFi 配网   |
| Qth_wifiCloseNetcfg()  |   关闭 WiFi 配网   |
| Qth_wifiGetCfgStatus() | 获取 WiFi 配置状态 |

<span style='color:#999AAA'>提示：详情请参考[网络配置 相关接口](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-04)。</span>

## **TTLV 数据处理 相关接口**

|           函数           |             说明             |
| :----------------------: | :--------------------------: |
|   Quos_ttlvAddIdBool()   |      添加节点数据 bool       |
|   Quos_ttlvAddIdInt()    |       添加节点数据 int       |
|  Quos_ttlvAddIdFloat()   |      添加节点数据 float      |
| Quos_ttlvAddIdFloatEx()  |   添加节点数据 float 扩展    |
|   Quos_ttlvAddIdRaw()    |       添加节点数据 raw       |
|   Quos_ttlvAddIdText()   |      添加节点数据 text       |
|  Quos_ttlvAddIdStruct()  |     添加节点数据 struct      |
|  Quos_ttlvGetNodeType()  |       获取节点数据类型       |
|  Quos_ttlvGetNodeBool()  |      获取节点数据 bool       |
|  Quos_ttlvGetNodeInt()   |       获取节点数据 int       |
| Quos_ttlvGetNodeFloat()  |      获取节点数据 float      |
|  Quos_ttlvGetNodeText()  |      获取节点数据 text       |
| Quos_ttlvGetNodeStruct() |     获取节点数据 struct      |
|  Quos_ttlvGetNodeRaw()   |  获取指定 ID  节点数据 raw   |
|   Quos_ttlvGetIdType()   |  获取指定 ID  节点数据类型   |
|   Quos_ttlvGetIdBool()   |  获取指定 ID  节点数据 bool  |
|   Quos_ttlvGetIdInt()    |  获取指定 ID  节点数据 int   |
|  Quos_ttlvGetIdFloat()   | 获取指定 ID  节点数据 float  |
|   Quos_ttlvGetIdText()   |  获取指定 ID  节点数据 text  |
|  Quos_ttlvGetIdStruct()  | 获取指定 ID  节点数据 struct |
|   Quos_ttlvGetIdRaw()    |  获取指定 ID  节点数据 raw   |
|   Quos_ttlvGetCount()    |         获取节点个数         |
|    Quos_ttlvGetNode()    |         获取节点指针         |
|    Quos_ttlvRemove()     |           删除节点           |
|     Quos_ttlvFree()      |          释放 ttlv           |
|   Quos_ttlvUnformat()    |    将字节流转成 ttlv 节点    |
|    Quos_ttlvFormat()     |    将 ttlv 节点转成字节流    |
|   Quos_ttlvFormatLen()   | 将 ttlv 节点转成字节流的长度 |
|  Quos_ttlvHeadPrintf()   |        打印 ttlv 内容        |
|     Quos_json2Ttlv()     |  将 json 对象转成 ttlv 节点  |
|     Quos_ttlv2Json()     |  将 ttlv 节点转成 json 对象  |

<span style='color:#999AAA'>提示：详情请参考[TTLV 数据处理 相关接口](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-05)。</span>

## **数据业务发送 相关接口**

|          函数          |         说明          |
| :--------------------: | :-------------------: |
|    Qth_cmdSendTsl()    |    发送物模型请求     |
|   Qth_cmdSendTrans()   |     发送透传数据      |
|  Qth_wanSendDevInfo()  | 向IoT平台上报设备信息 |
| Qth_wanSendDevStatus() | 向IoT平台上报设备状态 |
|  Qth_ntpSetResultCb()  | 设置 NTP 结果回调函数 |
|  Qth_ntpSendNtpReq()   |     发送 NTP 请求     |

<span style='color:#999AAA'>提示：详情请参考[数据业务发送 相关接口](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-06)。</span>

## **OTA 相关接口**

|         函数         |   说明   |
| :------------------: | :------: |
|   Qth_otaRequest()   | OTA 请求 |
| Qth_otaPlanConfirm() | OTA 确认 |

<span style='color:#999AAA'>提示：详情请参考[OTA 相关接口](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-07)。</span>

## **GNSS&LBS&Wi-Fi定位 相关接口**

|             函数             |          说明          |
| :--------------------------: | :--------------------: |
|   Qth_locGetSupportType()    |   获取支持的定位类型   |
|  Qth_locGetInsideLocation()  | 获取内置 wifi 定位数据 |
| Qth_locSendInsideLocation()  | 上报内置 wifi 定位数据 |
| Qth_locSendOutsideLocation() |    上报外置定位数据    |

<span style='color:#999AAA'>提示：详情请参考[GNSS&LBS&Wi-Fi定位 相关接口](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-08)。</span>

## **Modbus-DTU 相关接口**

|        函数         |                              说明                              |
| :-----------------: | :------------------------------------------------------------: |
|   Ql_iotMBInit()    |                       初始化 modbus 组件                       |
| Ql_iotMBCloudRecv() | 转换平台下发的物模型数据为 ModBus 格式后发送到 ModBus 从机设备 |
| Ql_iotMBLocalRecv() |       转发串口接收到的 ModBus 数据至 ModBus 组件中并处理       |
|  Ql_iotMBDeinit()   |                        注销 modbus 组件                        |

<span style='color:#999AAA'>提示：详情请参考[Modbus-DTU 相关接口](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-09)。</span>

## **网关子设备 相关接口**

|          函数          |         说明         |
| :--------------------: | :------------------: |
| Qth_subDevSetEventCb() |  设置子设备回调函数  |
|    Qth_subDevConn()    |    发起子设备连接    |
|  Qth_subDevDisconn()   |    断开子设备连接    |
|   Qth_subDevDeauth()   |      注销子设备      |
|  Qth_subDevSendTsl()   | 子设备发送物模型数据 |
| Qth_subDevSendTrans()  |  子设备发送透传数据  |
| Qth_subDevLocReport()  |  子设备发送定位数据  |
| Qth_subOtaUpdateVer()  |   子设备上报版本号   |
|    Qth_subOtaReq()     | 子设备发起 OTA 请求  |

<span style='color:#999AAA'>提示：详情请参考[网关子设备 相关接口](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-10)。</span>
