# Send Downlink Transparent Transmission Data


**API Address**:`/v2/deviceshadow/r3/openapi/raw/sendData`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Send downlink transparent transmission data to device. data is the specific content of the downlink data.`



**Request Example**:


```javascript
{
    "encode": "Text",
        "isCache": true,
        "data": "123",
        "qos": 1,
        "devices": [
        {
            "deviceKey": "DK00001",
            "productKey": "PK0001"
        }
    ],
        "isCover": true,
        "cacheTime": 60
}
```


**Request Parameters**:


| Parameter Name                    | Parameter Description                                         | Request Type | Required | Data Type             | Schema               |
| --------------------------------- | ------------------------------------------------------------- | ------------ | -------- | -------------------- | -------------------- |
| sendDataDTOR3                     | sendDataDTOR3                                                 | body         | true     | OpenApiSendDataDTOR3 | OpenApiSendDataDTOR3 |
| &emsp;&emsp;cacheTime             | Cache time in seconds. When isCache is true, if empty defaults to 10 minutes |              | false    | object               |                      |
| &emsp;&emsp;data                  | Specific content of the downlink data being sent              |              | true     | object               |                      |
| &emsp;&emsp;devices               | Device list                                                   |              | true     | array                | DevicePrimaryKeyR2   |
| &emsp;&emsp;&emsp;&emsp;deviceKey | Device deviceKey                                              |              | true     | object               |                      |
| &emsp;&emsp;&emsp;&emsp;productKey| Product productKey                                            |              | true     | object               |                      |
| &emsp;&emsp;encode                | Must specify data format Hex or Text (Hex: converts data or byte array to hexadecimal characters; (Example: binary content 0x1234AB (3 bytes) converted to string "1234AB" (6 bytes); string "1234AB" (6 bytes) converted to binary content 0x1234AB (3 bytes);) Text: will be sent in a certain encoding format, default UTF-8 encoding;) When Hex, data content consists of 0-9, A-F, a-f, length not exceeding 4096 characters, and character length must be even. When Text, does not exceed 4096 characters |          | false    | object               |                      |
| &emsp;&emsp;isCache               | Whether to enable caching, default is false if not provided   |              | false    | object               |                      |
| &emsp;&emsp;isCover               | Whether to overwrite previously sent data, default is false if not provided |              | false    | object               |                      |
| &emsp;&emsp;qos                   | QoS level setting (default is 1 if not provided)              |              | false    | object               |                      |
| language                          | Language: CN/EN (default: CN)                                 | query        | false    | string               |                      |


**Response Status**:


| Status Code | Description                                                  | Schema       |
| ----------- | ------------------------------------------------------------ | ------------ |
| 200         | OK                                                           | ActionResult |
| 201         | Created                                                      |              |
| 401         | Unauthorized                                                 |              |
| 403         | Forbidden                                                    |              |
| 404         | Not Found                                                    |              |
| 50000       | Service exception                                            |              |
| 50005       | Parameter check error                                        |              |
| 50007       | The deviceID, productKey or deviceKey is empty               |              |
| 61001       | PROTOCOL_NOT_SUPPORT                                         |              |
| 61002       | Device offline                                               |              |
| 61005       | Unauthorized device                                          |              |
| 61006       | Device message upper limit                                   |              |
| 61007       | Device message frequency is limited                          |              |
| 70000       | Hub service unavailable                                      |              |
| 70026       | The sub-device is not connected to the gateway device        |              |
| 70051       | Failed data sending                                          |              |
| 70083       | Product category and parameter type are unmatched            |              |
| 70089       | You have limited permission to operate this project or product or device |              |
| 70090       | The number is out of range or step size                      |              |
| 70091       | The value is not a member of the enumeration                 |              |
| 70092       | The text is too long                                         |              |
| 70093       | Incorrect time stamp character                               |              |
| 70094       | The TSL model is unable to analyze and identify data         |              |
| 70095       | Failed to call cloudBridgeService                            |              |
| 70096       | Failed to issue command from DMP to AEP                      |              |
| 71008       | TSL data format verification error                           |              |
| 71027       | TSL model downlink data format is not JSON                   |              |
| 71028       | TSL model downlink data format verification error            |              |
| 71029       | Illegal downlink data setting for TSL model                  |              |
| 71035       | Parameter verification error                                 |              |
| 71036       | TSL model data verification error                            |              |
| 71038       | Failed communication. Read-only attributes can't send commands |              |
| 71039       | The length of message array has exceeded the defined size    |              |
| 71047       | Downstream TSL data format check error                       |              |
| 71048       | The fetch instruction cannot only contain write-only data    |              |
| 80005       | OpenAPI does not support setting AEP products                |              |
| 91001       | Token does not exist                                         |              |
| 91004       | Token incorrect                                              |              |
| 91005       | Doesn't have permission                                      |              |
| 91006       | User not in IP white list                                    |              |
| 91007       | Please enable API permission                                 |              |


**Response Parameters**:


| Parameter Name | Parameter Description | Type   | Schema |
| -------------- | --------------------- | ------ | ------ |
| code           | Return code           | object |        |
| data           | Object                | object |        |
| exp1           |                       | string |        |
| msg            | Prompt message        | object |        |
| pageNum        | Current page number   | object |        |
| pageSize       | Items per page        | object |        |
| pages          | Total pages           | object |        |
| total          | Total count           | object |        |


**Response Example**:
```javascript
{
        "code":200,
        "msg":"",
        "data":[
        {
            "code":200,
            "productKey":"PK0001",
            "deviceKey":"DK00001",
            "ticket":"1335005438836604928",
            "message":null
        }
    ]
}
```
