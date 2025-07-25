# Update Device Information (Batch)


**API Address**:`/v2/devicemgr/r3/openapi/device/updateBatch`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:


**Request Example**:


```javascript
{
    "devices": [
        {
            "deviceKey": "DK00001",
            "deviceName": "DeviceName01",
            "sn": "SN00001"
        },
        {
            "deviceKey": "DK00002",
            "deviceName": "DeviceName02",
            "sn": "SN00002"
        }
    ],
        "productKey": "PK0001"
}
```


**Request Parameters**:


| Parameter Name                    | Parameter Description            | Request Type | Required | Data Type                | Schema                    |
| --------------------------------- | -------------------------------- | ------------ | -------- | ------------------------ | ------------------------- |
| deviceUpdateBatchR3Dto            | deviceUpdateBatchR3Dto           | body         | true     | Batch device update parameters | Batch device update parameters |
| &emsp;&emsp;devices               | Device information, maximum 500  |              | false    | array                    | Batch device update information |
| &emsp;&emsp;&emsp;&emsp;deviceKey | Device DK                        |              | true     | string                   |                           |
| &emsp;&emsp;&emsp;&emsp;deviceName| Device name                      |              | false    | string                   |                           |
| &emsp;&emsp;&emsp;&emsp;sn        | Device SN                        |              | false    | string                   |                           |
| &emsp;&emsp;productKey            | Product PK                       |              | true     | string                   |                           |


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
