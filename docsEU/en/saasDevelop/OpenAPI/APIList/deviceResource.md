# Query Device Resources


**API Address**:`/v2/deviceshadow/r2/openapi/device/resource`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**: `Device resources`


**Request Parameters**:


| Parameter Name | Parameter Description        | Request Type | Required | Data Type | Schema |
| -------------- | ---------------------------- | ------------ | -------- | --------- | ------ |
| deviceKey      | Device key                   | query        | true     | string    |        |
| productKey     | Product key                  | query        | true     | string    |        |
| language       | Language: CN/EN (default: CN)| query        | false    | string    |        |


**Response Status**:


| Status Code | Description                                                  | Schema                       |
| ----------- | ------------------------------------------------------------ | ---------------------------- |
| 200         | OK                                                           | ActionResultOfQdDeviceStatus |
| 401         | Unauthorized                                                 |                              |
| 403         | Forbidden                                                    |                              |
| 404         | Not Found                                                    |                              |
| 50000       | Service exception                                            |                              |
| 50005       | Parameter check error                                        |                              |
| 70000       | Hub service unavailable                                      |                              |
| 70089       | You have limited permission to operate this project or product or device |                              |
| 70130       | Non-existent device                                          |                              |
| 91001       | Token does not exist                                         |                              |
| 91004       | Token incorrect                                              |                              |
| 91005       | Doesn't have permission                                      |                              |
| 91006       | User not in IP white list                                    |                              |
| 91007       | Please enable API permission                                 |                              |


**Response Parameters**:


| Parameter Name                 | Parameter Description                | Type              | Schema         |
| ------------------------------ | ------------------------------------ | ----------------- | -------------- |
| code                           | Return code                          | object            |                |
| data                           | Object                               | QdDeviceStatus    | QdDeviceStatus |
| &emsp;&emsp;battery            | Battery level                        | number(double)    |                |
| &emsp;&emsp;capabilitiesBitmask| Device networking method             | integer(int32)    |                |
| &emsp;&emsp;cellId             | Base station ID                      | integer(int64)    |                |
| &emsp;&emsp;comProtocolVer     | Communication protocol version       | string            |                |
| &emsp;&emsp;createTime         | Creation time                        | string(date-time) |                |
| &emsp;&emsp;dataProtocolVer    | Data protocol version                | string            |                |
| &emsp;&emsp;deviceId           | Device identifier                    | string            |                |
| &emsp;&emsp;deviceKey          | DK                                   | string            |                |
| &emsp;&emsp;iccId              | ICCID number                         | string            |                |
| &emsp;&emsp;id                 | ID                                   | integer(int64)    |                |
| &emsp;&emsp;lac                | Location Area Code                   | integer(int64)    |                |
| &emsp;&emsp;locator            | Location function support            | string            |                |
| &emsp;&emsp;logEnable          | Log reporting duration switch        | integer(int32)    |                |
| &emsp;&emsp;logLevel           | Log level                            | string            |                |
| &emsp;&emsp;mcc                | Mobile Country Code                  | integer(int64)    |                |
| &emsp;&emsp;mcuVersion         | MCU version                          | string            |                |
| &emsp;&emsp;memoryFree         | Free space                           | integer(int64)    |                |
| &emsp;&emsp;mnc                | Mobile Network Code                  | integer(int64)    |                |
| &emsp;&emsp;phoneNum           | Phone number                         | string            |                |
| &emsp;&emsp;productKey         | PK                                   | string            |                |
| &emsp;&emsp;rsrp               | Reference Signal Received Power      | integer(int64)    |                |
| &emsp;&emsp;rsrq               | LTE Reference Signal Received Quality| integer(int64)    |                |
| &emsp;&emsp;sdkVer             | SDK version number                   | string            |                |
| &emsp;&emsp;signalStrength     | Signal strength                      | integer(int64)    |                |
| &emsp;&emsp;simNum             | SIM number                           | string            |                |
| &emsp;&emsp;sn                 | Device SN                            | string            |                |
| &emsp;&emsp;snr                | Signal to Noise plus Interference Ratio | integer(int64) |                |
| &emsp;&emsp;type               | Module model                         | string            |                |
| &emsp;&emsp;updateTime         | Modification time                    | string(date-time) |                |
| &emsp;&emsp;version            | Firmware version                     | string            |                |
| &emsp;&emsp;voltage            | Voltage                              | number(double)    |                |
| exp1                           |                                      | string            |                |
| msg                            | Prompt message                       | object            |                |
| pageNum                        | Current page number                  | object            |                |
| pageSize                       | Items per page                       | object            |                |
| pages                          | Total pages                          | object            |                |
| total                          | Total count                          | object            |                |


**Response Example**:
```javascript
{
    "code":200,
        "msg":"",
        "data":{
            "id":null,
            "deviceKey":"DK00001",
            "productKey":"PK0001",
            "battery":null,
            "voltage":null,
            "signalStrength":null,
            "memoryFree":null,
            "rsrp":null,
            "rsrq":null,
            "snr":null,
            "type":null,
            "cellId":null,
            "iccId":null,
            "mcc":null,
            "mnc":null,
            "lac":null,
            "phoneNum":null,
            "simNum":null,
            "locator":"NONE;LBS;WIFI;AUTO;GGA;RMC;GSV;GSA;VTG;GPGGA;GPRMC;GPGSV;GPGSA;GPVTG;",
            "comProtocolVer":null,
            "dataProtocolVer":"1.3.0",
            "createTime":1693927443000,
            "updateTime":1730900414000,
            "sdkVer":null,
            "version":null,
            "mcuVersion":null,
            "deviceId":null,
            "capabilitiesBitmask":1,
            "sn":null,
            "logEnable":null,
            "logLevel":null
    }
}
```
