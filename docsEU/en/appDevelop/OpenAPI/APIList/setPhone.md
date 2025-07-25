# Modify User Phone Number


**Interface Address**:`/v2/enduser/enduserapi/setPhone`


**Request Method**:`PUT`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**Interface Description**:`Modify User Phone Number`


**Request Parameters**:


| Parameter Name       | Parameter Description                      | Request Type | Required | Data Type | schema |
| -------------------- | ------------------------------------------ | ------------ | -------- | --------- | ------ |
| newInternationalCode | New phone number international code        | query        | true     | string    |        |
| newPhone             | New phone number                           | query        | true     | string    |        |
| newPhoneCode         | Verification code received by new phone    | query        | true     | string    |        |
| oldInternationalCode | Original phone number international code   | query        | true     | string    |        |
| oldPhone             | Original phone number                      | query        | true     | string    |        |
| oldPhoneCode         | Verification code received by original phone | query      | true     | string    |        |


**Response Status**:


| Status Code | Description                                                   | schema                     |
| ----------- | ------------------------------------------------------------- | -------------------------- |
| 200         | User phone number modified successfully                       | Registration code response data |
| 5032        | Token verification failed                                     |                            |
| 5033        | User does not exist                                           |                            |
| 5162        | Please enter original phone number international code         |                            |
| 5163        | Please enter original phone number                            |                            |
| 5164        | Please enter verification code received by original phone     |                            |
| 5165        | Please enter new phone number international code              |                            |
| 5166        | Please enter new phone number                                 |                            |
| 5167        | Please enter verification code received by new phone          |                            |
| 5168        | Original phone number verification failed                     |                            |
| 5169        | New phone number verification failed                          |                            |
| 5170        | User phone number modification failed                         |                            |
| 5174        | Original phone number is incorrect                            |                            |
| 5175        | New phone number is in 7-day cancellation status, cannot be used as replacement phone number |   |
| 5176        | New phone number already registered                           |                            |


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