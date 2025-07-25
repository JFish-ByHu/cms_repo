# Delete Automation Execution Logs


**API Address**:`/v2/cep/enduserapi/automation/log/clear`


**Request Method**:`DELETE`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Delete automation execution logs`


**Request Parameters**:


| Parameter Name | Description                                       | Request Type | Required | Data Type | Schema |
| -------------- | ------------------------------------------------- | ------------ | -------- | --------- | ------ |
| Authorization  |                                                   | header       | false    | string    |        |
| fid            | Home ID, required if home mode is enabled, otherwise not required | body     | false    | string    |        |


**Response Status**:


| Status Code | Description  | Schema          |
| ----------- | ------------ | --------------- |
| 200         | OK           | ApiResult«Void» |
| 204         | No Content   |                 |
| 401         | Unauthorized |                 |
| 403         | Forbidden    |                 |


**Response Parameters**:


| Parameter Name | Description | Type           | Schema         |
| -------------- | ----------- | -------------- | -------------- |
| code           |             | integer(int32) | integer(int32) |
| extMsg         |             | string         |                |
| msg            |             | string         |                |


**Response Example**:
```javascript
{
	"code": 0,
	"extMsg": "",
	"msg": ""
}
```