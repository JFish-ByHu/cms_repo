# Add Devices (Batch)


**API Address**:`/v2/devicemgr/r3/openapi/device/createBatch`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:


**Request Example**:


```javascript
{
    "devices": [
        {
            "authMode": 0,
            "deviceKey": "DK00001",
            "deviceName": "DeviceName1",
            "fingerPrint": "d30075fefc2c86d1f9ae5a2960750485076d7213",
            "psk": "",
            "sn": "SN0001"
        },
        {
            "authMode": 0,
            "deviceKey": "DK00002",
            "deviceName": "DeviceName2",
            "fingerPrint": "d30075fefc2c86d1f9ae5a2960750485076d7212",
            "psk": "",
            "sn": "SN00002"
        }
    ],
        "productKey": "PK0001"
}
```


**Request Parameters**:


| Parameter Name                       | Parameter Description                                             | Request Type | Required | Data Type         | Schema               |
| ------------------------------------ | ----------------------------------------------------------------- | ------------ | -------- | ---------------- | -------------------- |
| deviceCreateBatchDto                 | deviceCreateBatchDto                                              | body         | true     | Batch device creation parameters | Batch device creation parameters |
| &emsp;&emsp;devices                  | Device information, maximum 500 devices                           |              | true     | array            | Device information   |
| &emsp;&emsp;&emsp;&emsp;authMode     | Authentication method, 0-Dynamic authentication 1-Static authentication 2-X509, default 0 |          | false    | integer          |                      |
| &emsp;&emsp;&emsp;&emsp;deviceKey    | Device DK                                                         |              | true     | string           |                      |
| &emsp;&emsp;&emsp;&emsp;deviceName   | Device name                                                       |              | false    | string           |                      |
| &emsp;&emsp;&emsp;&emsp;fingerPrint  | Device fingerprint, required for X509 device addition             |              | false    | string           |                      |
| &emsp;&emsp;&emsp;&emsp;psk          | psk, required for China Telecom AEP device addition               |              | false    | string           |                      |
| &emsp;&emsp;&emsp;&emsp;sn           | Device SN                                                         |              | false    | string           |                      |
| &emsp;&emsp;productKey               | Product PK                                                        |              | true     | string           |                      |


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
