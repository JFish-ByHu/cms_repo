# Send Email Verification Code


**Interface Address**:`/v2/mail/enduserapi/v2/sendEmail`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**Interface Description**:`Send Email`


**Request Parameters**:


| Parameter Name | Parameter Description                                                                                                                | Request Type | Required | Data Type      | schema |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------ | -------- | -------------- | ------ |
| email          | Recipient email address                                                                                                              | query        | true     | string         |        |
| emailType      | Email type (1-Registration verification code 2-Password reset verification code 3-Link email verification code 4-Delete email link verification code 5-User cancellation verification code) | query | true | integer(int32) |        |
| userDomain     | User domain                                                                                                                          | query        | true     | string         |        |


**Response Status**:


| Status Code | Description           | schema                     |
| ----------- | --------------------- | -------------------------- |
| 200         | Email sent successfully | Registration code response data |
| 5026        | Please enter email    |                            |
| 5040        | Email format incorrect |                           |


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