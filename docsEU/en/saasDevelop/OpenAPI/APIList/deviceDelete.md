# Delete Device


**API Address**:`/v2/devicemgr/r3/openapi/device/delete`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:


**Request Example**:


```javascript
{
    "deviceKey": "DK00001",
    "productKey": "PK0001"
}
```


**Request Parameters**:


| Parameter Name          | Parameter Description | Request Type | Required | Data Type            | Schema              |
| ----------------------- | --------------------- | ------------ | -------- | -------------------- | ------------------- |
| deviceDeleteR3Dto       | deviceDeleteR3Dto     | body         | true     | Delete device parameters | Delete device parameters |
| &emsp;&emsp;deviceKey   | Device DK             |              | true     | string              |                     |
| &emsp;&emsp;productKey  | Product PK            |              | true     | string              |                     |


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
