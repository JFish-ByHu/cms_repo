# Enable/Disable Home Mode


**API Address**:`/v2/family/enduserapi/enabledFamilyMode`


**Request Method**:`PUT`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Enable/disable home mode`


**Request Parameters**:


| Parameter Name | Parameter Description          | Request Type | Required | Data Type | Schema |
| -------------- | ------------------------------ | ------------ | -------- | --------- | ------ |
| enabled        | true-Enable  false-Disable     | query        | true     | boolean   |        |


**Response Status**:


| Status Code | Description                         | Schema                        |
| ----------- | ----------------------------------- | ----------------------------- |
| 200         | Successfully enabled/disabled home mode | Registration code response data |
| 5623        | Please enter enable/disable         |                               |


**Response Parameters**:


| Parameter Name | Parameter Description | Type           | Schema         |
| -------------- | --------------------- | -------------- | -------------- |
| code           | Response status code  | integer(int32) | integer(int32) |
| data           | Response data         | object         |                |
| extMsg         | Extended message      | string         |                |
| msg            | Response message      | string         |                |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {},
	"extMsg": "",
	"msg": ""
}
```