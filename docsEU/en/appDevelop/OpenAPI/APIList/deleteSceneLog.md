# Delete Logs


**API Address**:`/v2/cep/enduserapi/deleteSceneLog`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Delete logs`


**Request Parameters**:


| Parameter Name | Parameter Description                                    | Request Type | Required | Data Type | Schema |
| -------------- | -------------------------------------------------------- | ------------ | -------- | --------- | ------ |
| Authorization  |                                                          | header       | false    | string    |        |
| fid            | Family ID, required when home mode is enabled, otherwise not needed | body     | false    | string    |        |


**Response Status**:


| Status Code | Description   | Schema          |
| ----------- | ------------- | --------------- |
| 200         | OK            | ApiResult«Void» |
| 201         | Created       |                 |
| 401         | Unauthorized  |                 |
| 403         | Forbidden     |                 |
| 404         | Not Found     |                 |


**Response Parameters**:


| Parameter Name | Parameter Description | Type           | Schema         |
| -------------- | --------------------- | -------------- | -------------- |
| code           |                       | integer(int32) | integer(int32) |
| extMsg         |                       | string         |                |
| msg            |                       | string         |                |


**Response Example**:
```javascript
{
	"code": 0,
	"extMsg": "",
	"msg": ""
}
```