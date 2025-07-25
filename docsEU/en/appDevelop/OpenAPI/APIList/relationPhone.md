# Link Phone Number


**Interface Address**:`/v2/enduser/enduserapi/relationPhone`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**Interface Description**:`Link Phone Number`


**Request Parameters**:


| Parameter Name    | Parameter Description                | Request Type | Required | Data Type | schema |
| ----------------- | ------------------------------------ | ------------ | -------- | --------- | ------ |
| code              | Verification code                    | query        | true     | string    |        |
| phone             | Phone number                         | query        | true     | string    |        |
| internationalCode | International code, default is for domestic | query        | false    | string    |        |


**Response Status**:


| Status Code | Description                      | schema                     |
| ----------- | -------------------------------- | -------------------------- |
| 200         | Phone number linked successfully | Registration code response data |
| 5002        | Phone number already registered  |                            |
| 5019        | Phone number format incorrect    |                            |
| 5021        | Please enter phone number        |                            |
| 5037        | SMS verification code failed     |                            |
| 5064        | Please enter verification code   |                            |


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