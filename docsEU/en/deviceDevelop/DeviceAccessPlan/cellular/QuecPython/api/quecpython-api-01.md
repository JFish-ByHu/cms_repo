# API Overview

## **Product Configuration API**

|       Function       |                      Description                      |
| :------------------: | :---------------------------------------------------: |
| Qth.setProductInfo() |             Sets the product information.             |
|   Qth.setServer()    |                 Sets the server URL.                  |
|  Qth.setLifetime()   | Sets the keep alive interval of the MQTT connection.  |
|   Qth.setEventCb()   |           Sets the event callback function.           |
|   Qth.setMcuVer()    |           Sets the MUC version information.           |
|   Qth.setAppVer()    | Sets the App (QuecPython script) version Information. |

<span style='color:#999AAA'>Note: See[Product Configuration API](/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-02) for details.</span>

## **Network Configuration API**

|   Function   |         Description         |
| :----------: | :-------------------------: |
| Qth.setApn() | Configures APN information. |

<span style='color:#999AAA'>Note: See[Network Configuration API](/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-03) for details.</span>

## **Device Connection API**

|  Function   |                             Description                             |
| :---------: | :-----------------------------------------------------------------: |
| Qth.init()  |                       Initializes QuecThing.                        |
| Qth.start() |              Connects the device to Developer Center.               |
| Qth.stop()  |            Disconnects the device from Developer Center.            |
| Qth.state() | Gets the connection status between the device and Developer Center. |
| Qth.reset() |                         Resets the device.                          |

<span style='color:#999AAA'>Note: See[Device Connection API](/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-04) for details.</span>

## **Data Interaction API**

|      Function      |                       Description                        |
| :----------------: | :------------------------------------------------------: |
|  Qth.sendTrans()   | Sends transparent transmission data to Developer Center. |
|   Qth.sendTsl()    |           Sends TSL data to Developer Center.            |
|    Qth.ackTsl()    |    Replies to TSL data request from Developer Center.    |
| Qth.ackTslServer() |  Replies to TSL service request from Developer Center.   |

<span style='color:#999AAA'>Note: See[Data Interaction API](/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-05) for details.</span>

## **OTA Upgrade API**

|     Function     |         Description         |
| :--------------: | :-------------------------: |
| Qth.otaRequest() | Requests OTA upgrade plans. |
| Qth.otaAction()  | Confirms OTA upgrade plans. |

<span style='color:#999AAA'>Note: See[OTA Upgrade API](/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-06) for details.</span>
