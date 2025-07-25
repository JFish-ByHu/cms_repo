# Delete Phone Number Association


**API Address**:`/v2/enduser/enduserapi/deletePhoneRelation`


**Request Method**:`DELETE`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Delete phone number association`


**Request Parameters**:


| Parameter Name | Parameter Description | Request Type | Required | Data Type | Schema |
| -------------- | --------------------- | ------------ | -------- | --------- | ------ |
| code           | Verification code     | query        | true     | string    |        |


**Response Status**:


| Status Code | Description                                       | Schema                        |
| ----------- | ------------------------------------------------- | ----------------------------- |
| 200         | Phone number association deleted successfully     | Registration code response data |
| 5037        | SMS verification code validation failed           |                               |
| 5064        | Please enter verification code                    |                               |
| 5384        | No phone number bound                             |                               |
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