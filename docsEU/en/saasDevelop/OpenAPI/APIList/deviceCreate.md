# Add Device (Single)


**API Address**:`/v2/devicemgr/r3/openapi/device/create`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:


**Request Example**:


```javascript
{
        "authMode": 0,
        "deviceKey": "DK00001",
        "deviceName": "DeviceName1",
        "fingerPrint": "d30075fefc2c86d1f9ae5a2960750485076d7213",
        "productKey": "PK0001",
        "psk": "",
        "sn": "SN00001"
}
```


**Request Parameters**:


| Parameter Name           | Parameter Description                                             | Request Type | Required | Data Type       | Schema           |
| ------------------------ | ----------------------------------------------------------------- | ------------ | -------- | -------------- | ---------------- |
| deviceCreateSingleR3Dto  | deviceCreateSingleR3Dto                                           | body         | true     | New device input parameters | New device input parameters |
| &emsp;&emsp;authMode     | Authentication method, 0-Dynamic authentication 1-Static authentication 2-X509, default 0 |          | false    | integer(int32) |                  |
| &emsp;&emsp;deviceKey    | Device DK                                                         |              | true     | string         |                  |
| &emsp;&emsp;deviceName   | Device name                                                       |              | false    | string         |                  |
| &emsp;&emsp;fingerPrint  | Device fingerprint, required for X509 device addition             |              | false    | string         |                  |
| &emsp;&emsp;productKey   | Product PK                                                        |              | true     | string         |                  |
| &emsp;&emsp;psk          | psk, required for China Telecom AEP device addition               |              | false    | string         |                  |
| &emsp;&emsp;sn           | Device SN                                                         |              | false    | string         |                  |


**Response Status**:


| Status Code | Description  | Schema               |
| ----------- | ------------ | -------------------- |
| 200         | OK           | ActionResultOfobject |
| 201         | Created      |                      |
| 401         | Unauthorized |                      |
| 403         | Forbidden    |                      |
| 404         | Not Found    |                      |


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
    "code": 200,
    "msg": ""
}
```
