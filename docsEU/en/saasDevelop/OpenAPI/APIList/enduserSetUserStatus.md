# Set User Status


**API Address**:`/v2/enduser/enterpriseapi/setUserStatus`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`

**API Description**:`Set user status`


**Request Parameters**:


| Parameter Name | Parameter Description                | Request Type | Required | Data Type       | Schema |
| -------------- | ------------------------------------ | ------------ | -------- | -------------- | ------ |
| status         | User status: 0-Disabled, 1-Normal    | query        | true     | integer(int32) |        |
| uid            | User ID                              | query        | true     | string         |        |


**Response Status**:


| Status Code | Description                  | Schema                     |
| ----------- | ---------------------------- | -------------------------- |
| 200         | User status set successfully | Return registration code response data |
| 5036        | Secret key verification failed |                          |
| 5055        | Please enter secret key      |                            |


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