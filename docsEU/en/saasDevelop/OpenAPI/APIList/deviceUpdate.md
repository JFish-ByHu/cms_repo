# Update Device Information (Single)


**API Address**:`/v2/devicemgr/r3/openapi/device/update`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:


**Request Example**:


```javascript
{
        "deviceKey": "DK00001",
        "deviceName": "DeviceName01",
        "productKey": "PK0001",
        "sn": "SN00001"
}
```


**Request Parameters**:


| Parameter Name           | Parameter Description     | Request Type | Required | Data Type            | Schema                |
| ------------------------ | ------------------------- | ------------ | -------- | -------------------- | --------------------- |
| deviceUpdateSingleR3Dto  | deviceUpdateSingleR3Dto   | body         | true     | R3 device update parameters | R3 device update parameters |
| &emsp;&emsp;deviceKey    | Device DK                 |              | true     | string               |                       |
| &emsp;&emsp;deviceName   | Device name               |              | false    | string               |                       |
| &emsp;&emsp;productKey   | Product PK                |              | true     | string               |                       |
| &emsp;&emsp;sn           | Device SN                 |              | false    | string               |                       |


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
