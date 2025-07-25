# Enable/Disable Automation


**API Address**:`/v2/cep/enduserapi/automation/status`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Enable/Disable automation`


**Request Parameters**:


| Parameter Name | Description                                       | Request Type | Required | Data Type       | Schema |
| -------------- | ------------------------------------------------- | ------------ | -------- | --------------- | ------ |
| automationId   | Automation ID                                     | query        | true     | integer(int64)  |        |
| status         | Status, Enable: true, Disable: false              | query        | true     | boolean         |        |
| Authorization  |                                                   | header       | false    | string          |        |
| fid            | Home ID, required if home mode is enabled, otherwise not required | body     | false    | string          |        |


**Response Status**:


| Status Code | Description  | Schema          |
| ----------- | ------------ | --------------- |
| 200         | OK           | ApiResult«Void» |
| 201         | Created      |                 |
| 401         | Unauthorized |                 |
| 403         | Forbidden    |                 |
| 404         | Not Found    |                 |


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