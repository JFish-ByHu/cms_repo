# Delete Scene


**Interface Address**:`/v2/cep/enduserapi/sceneDelete`


**Request Method**:`DELETE`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**Interface Description**:`Delete Scene`


**Request Parameters**:


| Parameter Name | Parameter Description                                   | Request Type | Required | Data Type | schema |
| -------------- | ------------------------------------------------------- | ------------ | -------- | --------- | ------ |
| sceneId        | Scene ID                                                | body         | true     | string    |        |
| Authorization  |                                                         | header       | false    | string    |        |
| fid            | Family ID, required when home mode is enabled, otherwise not | body         | false    | string    |        |


**Response Status**:


| Status Code | Description  | schema          |
| ----------- | ------------ | --------------- |
| 200         | OK           | ApiResult«Void» |
| 204         | No Content   |                 |
| 401         | Unauthorized |                 |
| 403         | Forbidden    |                 |


**Response Parameters**:


| Parameter Name | Parameter Description | Type           | schema         |
| -------------- | --------------------- | -------------- | -------------- |
| code           |                      | integer(int32) | integer(int32) |
| extMsg         |                      | string         |                |
| msg            |                      | string         |                |


**Response Example**:
```javascript
{
	"code": 0,
	"extMsg": "",
	"msg": ""
}
```