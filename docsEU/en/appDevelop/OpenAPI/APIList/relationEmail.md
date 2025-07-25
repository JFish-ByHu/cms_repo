# Link Email


**Interface Address**:`/v2/enduser/enduserapi/relationEmail`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**Interface Description**:`Link Email`


**Request Parameters**:


| Parameter Name | Parameter Description | Request Type | Required | Data Type | schema |
| -------------- | --------------------- | ------------ | -------- | --------- | ------ |
| code           | Verification code     | query        | true     | string    |        |
| email          | Email                 | query        | true     | string    |        |


**Response Status**:


| Status Code | Description                    | schema                     |
| ----------- | ------------------------------ | -------------------------- |
| 200         | Email linked successfully      | Registration code response data |
| 5026        | Please enter email             |                            |
| 5039        | Email already registered       |                            |
| 5040        | Email format incorrect         |                            |
| 5046        | Email verification code failed |                            |
| 5064        | Please enter verification code |                            |


**Response Parameters**:


| Parameter Name | Parameter Description | Type           | schema         |
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