# API Overview

## **Product Configuration API**

|          Function          |                           Description                           |
| :------------------------: | :-------------------------------------------------------------: |
| Qth_configSetProductInfo() |                    Sets product information.                    |
| Qth_configGetProductInfo() |                  Gets the product information.                  |
| Qth_configSetDeviceInfo()  |                    Sets device information.                     |
| Qth_configGetDeviceInfo()  |                  Gets the device information.                   |
|  Qth_configGetAuthType()   |              Gets the device authentication type.               |
|  Qth_configSetODOSInfo()   | Sets unique-DeviceSecret-per-device authentication information. |
|   Qth_configSetServer()    |             Sets server URL and default IP address.             |
|   Qth_configGetServer()    |           Gets the server URL and default IP address.           |
|  Qth_configSetLifetime()   |                 Sets MQTT keep alive interval.                  |
|  Qth_configGetLifetime()   |               Gets the MQTT keep alive interval.                |
|   Qth_configSetEventCb()   |               Sets user event callback function.                |
|   Qth_configGetEventCb()   |             Gets the user event callback function.              |
|  Qth_configSetModuleVer()  |                  Sets module's version number.                  |
|  Qth_configGetModuleVer()  |                Gets the module's version number.                |
|   Qth_configSetMcuVer()    |                    Sets MCU version number.                     |
|   Qth_configGetMcuVer()    |                  Gets the MCU version number.                   |
|  Qth_configSetWifiInfo()   |                     Sets Wi-Fi information.                     |
|  Qth_configGetWifiInfo()   |                   Gets the Wi-Fi information.                   |
| Qth_configClearWifiInfo()  |                    Clears Wi-Fi information.                    |
| Qth_configSetNetcfgMode()  |              Sets Wi-Fi network provisioning mode.              |
| Qth_configGetNetcfgMode()  |            Gets the Wi-Fi network provisioning mode.            |

<span style='color:#999AAA'>Note: See[Product Configuration API](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-02) for details.</span>

## **Device Connection API**

|      Function      |                  Description                  |
| :----------------: | :-------------------------------------------: |
|   Qth_devInit()    |          Initializes QuecThing SDK.           |
|   Qth_devStart()   | Initiates the connection to Developer Center. |
|   Qth_devReset()   |              Resets the device.               |
|  Qth_devRemove()   |              Deletes the device.              |
| Qth_devGetStatus() |            Gets the device status.            |

<span style='color:#999AAA'>Note: See[Device Connection API](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-03) for details.</span>

## **Network Provisioning API**

|        Function        |               Description               |
| :--------------------: | :-------------------------------------: |
|  Qth_wifiOpenNetcfg()  |      Enables network provisioning.      |
| Qth_wifiCloseNetcfg()  |     Disables network provisioning.      |
| Qth_wifiGetCfgStatus() | Gets Wi-Fi network provisioning status. |

<span style='color:#999AAA'>Note: See[Network Provisioning API](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-04) for details.</span>

## **TTLV Data API**

|         Function         |                        Description                        |
| :----------------------: | :-------------------------------------------------------: |
|   Quos_ttlvAddIdBool()   |     Adds a boolean data node to the TTLV data table.      |
|   Quos_ttlvAddIdInt()    |     Adds an integer data node to the TTLV data table.     |
|  Quos_ttlvAddIdFloat()   |      Adds a float data node to the TTLV data table.       |
| Quos_ttlvAddIdFloatEx()  |  Adds a float-extended data node to the TTLV data table.  |
|   Quos_ttlvAddIdRaw()    |       Adds a raw data node to the TTLV data table.        |
|   Quos_ttlvAddIdText()   |       Adds a text data node to the TTLV data table.       |
|  Quos_ttlvAddIdStruct()  |    Adds a structure data node to the TTLV data table.     |
|  Quos_ttlvGetNodeType()  |               Gets the data type of a node.               |
|  Quos_ttlvGetNodeBool()  |              Gets boolean data from a node.               |
|  Quos_ttlvGetNodeInt()   |              Gets integer data from a node.               |
| Quos_ttlvGetNodeFloat()  |               Gets float data from a node.                |
|  Quos_ttlvGetNodeText()  |                Gets text data from a node.                |
| Quos_ttlvGetNodeStruct() |             Gets structure data from a node.              |
|  Quos_ttlvGetNodeRaw()   |                Gets raw data from a node.                 |
|   Quos_ttlvGetIdType()   |               Gets the data type of a node.               |
|   Quos_ttlvGetIdBool()   |              Gets boolean data from a node.               |
|   Quos_ttlvGetIdInt()    |              Gets integer data from a node.               |
|  Quos_ttlvGetIdFloat()   |               Gets float data from a node.                |
|   Quos_ttlvGetIdText()   |                Gets text data from a node.                |
|  Quos_ttlvGetIdStruct()  |             Gets structure data from a node.              |
|   Quos_ttlvGetIdRaw()    |                Gets raw data from a node.                 |
|   Quos_ttlvGetCount()    |                 Gets the number of nodes.                 |
|    Quos_ttlvGetNode()    |                Gets the pointer to a node.                |
|    Quos_ttlvRemove()     |                       Deletes node.                       |
|     Quos_ttlvFree()      |            Releases TTLV data table resources.            |
|   Quos_ttlvUnformat()    |         Converts byte stream to TTLV data table.          |
|    Quos_ttlvFormat()     |          Converts TTLV data to byte stream data.          |
|   Quos_ttlvFormatLen()   | Gets the length of byte stream converted from TTLV object |
|  Quos_ttlvHeadPrintf()   |                Prints the TTLV data table.                |
|     Quos_json2Ttlv()     |             Converts JSON data to TTLV data.              |
|     Quos_ttlv2Json()     |             Converts TTLV data to JSON data.              |

<span style='color:#999AAA'>Note: See[TTLV Data API](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-05) for details.</span>

## **Data Interaction API**

|        Function        |                       Description                        |
| :--------------------: | :------------------------------------------------------: |
|    Qth_cmdSendTsl()    |           Sends TSL data to Developer Center.            |
|   Qth_cmdSendTrans()   | Sends transparent transmission data to Developer Center. |
|  Qth_wanSendDevInfo()  |     Reports device information to Developer Center.      |
| Qth_wanSendDevStatus() |        Reports device status to Developer Center.        |
|  Qth_ntpSetResultCb()  |   Sets callback function of receiving the NTP result.    |
|  Qth_ntpSendNtpReq()   |                  Sends an NTP request.                   |

<span style='color:#999AAA'>Note: See[Data Interaction API](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-06) for details.</span>

## **OTA Upgrade API**

|       Function       |         Description         |
| :------------------: | :-------------------------: |
|   Qth_otaRequest()   | Requests OTA upgrade plans. |
| Qth_otaPlanConfirm() | Confirms OTA upgrade plans. |

<span style='color:#999AAA'>Note: See[OTA Upgrade API](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-07) for details.</span>

## **GNSS&LBS&Wi-Fi Positioning API**

|           Function           |                                  Description                                  |
| :--------------------------: | :---------------------------------------------------------------------------: |
|   Qth_locGetSupportType()    |                  Gets the supported positioning techniques.                   |
|  Qth_locGetInsideLocation()  |  Gets the location data of the module's built-in Wi-Fi positioning feature.   |
| Qth_locSendInsideLocation()  | Reports the location data of the module's built-in Wi-Fi positioning feature. |
| Qth_locSendOutsideLocation() |       Reports the location data obtained from the external GNSS module.       |

<span style='color:#999AAA'>Note: See[GNSS&LBS&Wi-Fi Positioning API](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-08) for details.</span>

## **DTU-Modbus API**

|      Function       | Description                                                                                                              |
| :-----------------: | :----------------------------------------------------------------------------------------------------------------------- |
|   Ql_iotMBInit()    | Initializes Modbus components.                                                                                           |
| Ql_iotMBCloudRecv() | Converts the format of the TSL data issued by Developer Center to Modbus format and sends the data to Modbus sub-device. |
| Ql_iotMBLocalRecv() | Forwards Modbus data received by the serial port to Modbus components and processes the Modbus data.                     |
|  Ql_iotMBDeinit()   | De-initializes Modbus components.                                                                                        |

<span style='color:#999AAA'>Note: See[DTU-Modbus API](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-09) for details.</span>

## **Gateway Sub-device API**

|        Function        |                                           Description                                            |
| :--------------------: | :----------------------------------------------------------------------------------------------: |
| Qth_subDevSetEventCb() | Registers the callback function of the interaction event between the sub-device and the gateway. |
|    Qth_subDevConn()    |                               Connects the sub-device to gateway.                                |
|  Qth_subDevDisconn()   |                           Disconnects the sub-device from the gateway.                           |
|   Qth_subDevDeauth()   |                                     Deletes the sub-device.                                      |
|  Qth_subDevSendTsl()   |                      Sends TSL data of the sub-device to Developer Center.                       |
| Qth_subDevSendTrans()  |            Sends transparent transmission data of the sub-device to Developer Center.            |
| Qth_subDevLocReport()  |                    Sends location data of the sub-device to Developer Center.                    |
| Qth_subOtaUpdateVer()  |                              Reports the sub-device version number.                              |
|    Qth_subOtaReq()     |                             Requests a sub-device OTA upgrade plan.                              |

<span style='color:#999AAA'>Note: See[Gateway Sub-device API](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-10) for details.</span>
