# Enable/Disable Automatic Family Switching


**API Address**:`/v2/family/enduserapi/enabledAutoSwitch`


**Request Method**:`PUT`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Enable/disable automatic switching`


**Request Parameters**:


| Parameter Name | Parameter Description          | Request Type | Required | Data Type | Schema |
| -------------- | ------------------------------ | ------------ | -------- | --------- | ------ |
| enabled        | true-Enable  false-Disable     | query        | true     | boolean   |        |


**Response Status**:


| Status Code | Description                                   | Schema                        |
| ----------- | --------------------------------------------- | ----------------------------- |
| 200         | Successfully enabled/disabled automatic switching | Registration code response data |
| 5623        | Please enter enable/disable                   |                               |
| 5635        | Home mode not enabled                         |                               |


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