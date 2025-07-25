# User Password Reset


**Interface Address**:`/v2/enduser/enduserapi/userPwdReset`


**Request Method**:`PUT`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**Interface Description**:`Reset User Password via Phone Number or Email`


**Request Parameters**:


| Parameter Name    | Parameter Description                                                                                                 | Request Type | Required | Data Type | schema |
| ----------------- | --------------------------------------------------------------------------------------------------------------------- | ------------ | -------- | --------- | ------ |
| code              | Verification code                                                                                                     | query        | true     | string    |        |
| userDomain        | User domain                                                                                                           | query        | true     | string    |        |
| email             | Email, choose one between this and phone                                                                              | query        | false    | string    |        |
| internationalCode | International code, used with phone number, default is for domestic                                                   | query        | false    | string    |        |
| phone             | Phone number, choose one between this and email                                                                       | query        | false    | string    |        |
| pwd               | Password to reset, if not provided, default is 12345678                                                               | query        | false    | string    |        |
| random            | Random number used for password encryption and decryption.<br/><b>Password encryption and decryption rule:</b><br/>AES128(pwd,MD5(random),initialization vector).<br/><b>AES encryption convention:</b><br/>Encryption mode: CBC<br/>Padding: PKCS5Padding<br/>Data block size: 128 bits<br/>Content: pwd<br/>AES key: MD5(random), MD5(random) generates a 16B uppercase string (takes the 8-24 part of the 32-length MD5 string)<br/>Initialization vector: Split the generated AES password (MD5(random)) into two 8B byte data groups, reverse them and concatenate to generate new 16B byte data as the offset<br/>Output: BASE64<br/>Character set: utf-8<br/><b>Example:</b><br/>pwd: china1234<br/>random: j1acpdj2bmtqZXVb<br/>AES key: 89A049614445CCA8<br/>AES iv: 4445CCA889A04961<br/>After encryption: lkZMvj0KDSJXlp66jBieHA==<br/>After decryption: china1234 | query | false    | string    |        |


**Response Status**:


| Status Code | Description                                                                         | schema                     |
| ----------- | ----------------------------------------------------------------------------------- | -------------------------- |
| 200         | User password reset successful                                                      | Registration code response data |
| 5004        | Phone number not registered                                                         |                            |
| 5013        | User domain format incorrect                                                        |                            |
| 5015        | User domain does not exist                                                          |                            |
| 5019        | Phone number format incorrect                                                       |                            |
| 5023        | Please enter user domain                                                            |                            |
| 5031        | Email not registered                                                                |                            |
| 5037        | SMS verification code verification failed                                           |                            |
| 5044        | Please enter phone number or email                                                  |                            |
| 5056        | Password format incorrect, please enter 6-20 characters including letters, numbers, or special characters |            |
| 5064        | Please enter verification code                                                      |                            |
| 5104        | User domain has been disabled                                                       |                            |


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