# Delete Email Association


**API Address**:`/v2/enduser/enduserapi/deleteEmailRelation`


**Request Method**:`DELETE`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Delete email association`


**Request Parameters**:


| Parameter Name | Parameter Description | Request Type | Required | Data Type | Schema |
| -------------- | --------------------- | ------------ | -------- | --------- | ------ |
| code           | Verification code     | query        | true     | string    |        |


**Response Status**:


| Status Code | Description                                       | Schema                        |
| ----------- | ------------------------------------------------- | ----------------------------- |
| 200         | Email association deleted successfully            | Registration code response data |
| 5046        | Email verification code validation failed         |                               |
| 5064        | Please enter verification code                    |                               |
| 5385        | No email bound                                    |                               |
| 5396        | This is the only login method, cannot be deleted  |                               |


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