# API Overview

## __Product Configuration API__

|           Function            |                                                Description                                                |
| :---------------------------: | :-------------------------------------------------------------------------------------------------------: |
|         Ql_iotInit()          |                             Initializes configurations and enables QuecThing.                             |
|   Ql_iotConfigSetEventCB()    |                Sets a callback function for device and Developer Center interaction event.                |
|   Ql_iotConfigSetConnmode()   |                     Sets the connection mode between the device and Developer Center.                     |
|   Ql_iotConfigGetConnmode()   |                     Gets the connection mode between the device and Developer Center.                     |
|     Ql_iotGetWorkState()      |                    Gets the connection status between the device and Developer Center.                    |
| Ql_iotConfigSetPdpContextId() |                 Configures PDP context ID used by device to connect to Developer Center.                  |
| Ql_iotConfigGetPdpContextId() |                  Gets the PDP context ID used by device to connect to Developer Center.                   |
|    Ql_iotConfigSetServer()    |                                         Sets server information.                                          |
|    Ql_iotConfigGetServer()    |                                         Gets server information.                                          |
|   Ql_iotConfigSetLifetime()   |                                           Sets device lifetime.                                           |
|   Ql_iotConfigGetLifetime()   |                                           Gets device lifetime.                                           |
| Ql_iotConfigSetProductinfo()  |                                         Sets product information.                                         |
| Ql_iotConfigGetProductinfo()  |                                         Gets product information.                                         |
|  Ql_iotConfigSetMcuVersion()  |                             Sets MCU ID and the corresponding version number.                             |
|  Ql_iotConfigGetMcuVersion()  |                             Gets MCU ID and the corresponding version number.                             |
| Ql_iotConfigSetSessionFlag()  |      Enables or disables encryption mode for the connection between the device and Developer Center.      |
| Ql_iotConfigGetSessionFlag()  | Queries whether the encryption mode of the connection between the device and Developer Center is enabled. |
|  Ql_iotConfigSetAppVersion()  |                                     Sets device software version ID.                                      |
| Ql_iotConfigGetSoftVersion()  |                                     Gets device software version ID.                                      |
|     Ql_iotConfigSetDkDs()     |                                  Customizes DeviceKey and DeviceSecret.                                   |
|     Ql_iotConfigGetDkDs()     |                              Gets the customized DeviceKey and DeviceSecret.                              |

<span style='color:#999AAA'>Note: See [Product Configuration API](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-02) for details.</span>

<br>

## __Data Interaction API__

|            Function             |                                    Description                                    |
| :-----------------------------: | :-------------------------------------------------------------------------------: |
|   Ql_iotCmdBusPassTransSend()   |             Sends transparent transmission data to Developer Center.              |
| Ql_iotCmdBusPassTransSend_ex()  | Respond with data of transparent transmission to the platform according to PkgID. |
|  Ql_iotCmdBusPhymodelReport()   |                        Sends TSL data to Developer Center.                        |
| Ql_iotCmdBusPhymodelReport_ex() |              Sends TSL data to Developer Center according to PkgID.               |
|    Ql_iotCmdBusPhymodelAck()    |                Replies to TSL data request from Developer Center.                 |
|   Ql_iotCmdSysStatusReport()    |                              Reports device status.                               |
|     Ql_iotSysGetDevStatus()     |                                Gets device status.                                |
|   Ql_iotCmdSysDevInfoReport()   |                       Reports specified device information.                       |
|      Ql_iotSysGetDevInfo()      |                        Gets specified device information.                         |

<span style='color:#999AAA'>Note: See [Data Interaction API](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-03) for details.</span>

<br>

## __TTLV Data API__

|         Function          |                         Description                          |
| :-----------------------: | :----------------------------------------------------------: |
|   Ql_iotTtlvCountGet()    |       Gets the number of nodes in the TTLV data table.       |
|    Ql_iotTtlvNodeGet()    |           Extracts data nodes from the data table.           |
|     Ql_iotTtlvFree()      |             Releases TTLV data table resources.              |
|  Ql_iotTtlvNodeGetType()  |       Gets data type from a specified TTLV data node.        |
|  Ql_iotTtlvNodeGetBool()  |           Gets Boolean data from a TTLV data node.           |
|  Ql_iotTtlvNodeGetInt()   |           Gets integer data from a TTLV data node.           |
| Ql_iotTtlvNodeGetFloat()  |            Gets float data from a TTLV data node.            |
| Ql_iotTtlvNodeGetString() |            Gets float data from a TTLV data node.            |
|  Ql_iotTtlvNodeGetByte()  |            Gets byte data from a TTLV data node.             |
| Ql_iotTtlvNodeGetStruct() |           Gets struct data from a TTLV data node.            |
|   Ql_iotTtlvIdGetType()   |  Gets data type from a TTLV data node with a specified ID.   |
|   Ql_iotTtlvIdGetBool()   | Gets Boolean data from a TTLV data node with a specified ID. |
|   Ql_iotTtlvIdGetInt()    | Gets integer data from a TTLV data node with a specified ID. |
|  Ql_iotTtlvIdGetFloat()   |  Gets float data from a TTLV data node with a specified ID.  |
|  Ql_iotTtlvIdGetString()  | Gets string data from a TTLV data node with a specified ID.  |
|   Ql_iotTtlvIdGetByte()   |  Gets byte data from a TTLV data node with a specified ID.   |
|  Ql_iotTtlvIdGetStruct()  | Gets struct data from a TTLV data node with a specified ID.  |
|   Ql_iotTtlvIdAddBool()   |          Adds Boolean data node to TTLV data table.          |
|   Ql_iotTtlvIdAddInt()    |          Adds integer data node to TTLV data table.          |
|  Ql_iotTtlvIdAddFloat()   |           Adds float data node to TTLV data table.           |
|  Ql_iotTtlvIdAddString()  |          Adds string data node to TTLV data table.           |
|   Ql_iotTtlvIdAddByte()   |           Adds byte data node to TTLV data table.            |
|  Ql_iotTtlvIdAddStruct()  |          Adds struct data node to TTLV data table.           |

<span style='color:#999AAA'>Note: See [TTLV Data API](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-04) for details.</span>

<br>

## __OTA Upgrade API__

|          Function           |                     Description                     |
| :-------------------------: | :-------------------------------------------------: |
|    Ql_iotCmdOtaRequest()    | Requests an OTA upgrade plan from Developer Center. |
|    Ql_iotCmdOtaAction()     |         Configures OTA upgrade operations.          |
| Ql_iotCmdOtaMcuFWDataRead() |      Reads firmware data stored in the device.      |

<span style='color:#999AAA'>Note: See [OTA Upgrade API](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-05) for details.</span>

<br>

## __GNSS&LBS&Wi-Fi Positioning API__

|             Function              |                                  Description                                  |
| :-------------------------------: | :---------------------------------------------------------------------------: |
|       Ql_iotLocGetSupList()       | Obtains NMEA sentence type of the built-in positioning feature of the device. |
|        Ql_iotLocGetData()         |   Obtains location data of the built-in positioning feature of the device.    |
|   Ql_iotCmdBusLocReportInside()   | Reports the location data of the built-in positioning feature of the device.  |
| Ql_iotCmdBusLocReportInside_ex()  | Reports the location data of the built-in positioning feature of the device.  |
|  Ql_iotCmdBusLocReportOutside()   |           Reports location data obtained from external GNSS module.           |
| Ql_iotCmdBusLocReportOutside_ex() |           Reports location data obtained from external GNSS module.           |

<span style='color:#999AAA'>Note: See [GNSS&LBS&Wi-Fi Positioning API](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-07) for details.</span>

<br>

## __Device Authorization API__

|         Function          |                                    Description                                     |
| :-----------------------: | :--------------------------------------------------------------------------------: |
| Ql_iotCmdBindcodeReport() | Reports device binding code (only valid in QuecThing SDK version 2.9.2 and below). |
|   Ql_iotDBindcodeSet()    |                               Sets device bind code.                               |
|   Ql_iotDBindcodeGet()    |                               Gets device bind code.                               |
|        Ql_iotRst()        |                             Resets device information.                             |

<span style='color:#999AAA'>Note: See [Device Authorization API](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-08) for details.</span>

<br>

## __DTU-Modbus API__

|      Function       |                                                        Description                                                        |
| :-----------------: | :-----------------------------------------------------------------------------------------------------------------------: |
|   Ql_iotMBInit()    |                                              Initializes Modbus components.                                               |
| Ql_iotMBCloudRecv() | Convert the format of the TSL data issued by Developer Center to ModBus format and sends the data to ModBus slave device. |
| Ql_iotMBLocalRecv() |           Forwards ModBus data received via the serial port to ModBus components and processes the ModBus data.           |
|  Ql_iotMBDeinit()   |                                             Deinitializes ModBus components.                                              |

<span style='color:#999AAA'>Note: See [DTU-Modbus API](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-09) for details.</span>

<br>

## __Gateway Sub-device API__

|            Function            |                                            Description                                            |
| :----------------------------: | :-----------------------------------------------------------------------------------------------: |
| Ql_iotConfigSetSubDevEventCB() | Registers the callback function for the interaction event between the sub-device and the gateway. |
|       Ql_iotSubDevConn()       |                    Connects sub-device to gateway or authenticates sub-device.                    |
|     Ql_iotSubDevDisconn()      |                           Disconnects the sub-device from the gateway.                            |
|  Ql_iotSubDevPassTransSend()   |             Sends transparent tranmission data of the sub-device to Developer Center.             |
| Ql_iotSubDevPassTransSend_ex() |             Sends transparent tranmission data of the sub-device to Developer Center.             |
|    Ql_iotSubDevTslReport()     |                         Sends TSL data of sub-device to Developer Center.                         |
|   Ql_iotSubDevTslReport_ex()   |                         Sends TSL data of sub-device to Developer Center.                         |
|      Ql_iotSubDevTslAck()      |               Replies to TSL data requested by Developer Center to the sub-device.                |
|      Ql_iotSubDevDeauth()      |                                   De-registers the sub-device.                                    |
|       Ql_iotSubDevHTB()        |                Refreshes the last interaction time between sub-device and gateway.                |
|    Ql_iotGwDevInfoReport()     |                               Report Sub-device Informationpacket.                                |
|      Ql_iotGwDevOtaReq()       |                            Request Sub-device OTA Upgrade Plan packet.                            |
|     Ql_iotGwDevOtaUpdate()     |                        Configure Sub-device OTA Upgrade Operations packet.                        |
|      Ql_iotGwDevOtaRead()      |                             Read Sub-device OTA Firmware Data packet.                             |
|     Ql_iotGwDevLocReport()     |                              Report Sub-device Location Data packet.                              |

<span style='color:#999AAA'>Note: See [Gateway Sub-device API](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-11) for details.</span>

## __Value-Added Service API__

|       Function       |             Description             |
| :------------------: | :---------------------------------: |
| Ql_iotCmdSysNTPReq() |      Get time from NTP server       |
| Ql_iotDataCollSend() | Report data acquisition information |

<span style='color:#999AAA'>Note: See [Value-Added Service API](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-10) for details.</span>

<br>
