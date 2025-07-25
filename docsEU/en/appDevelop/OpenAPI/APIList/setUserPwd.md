# Modify User Password


**Interface Address**:`/v2/enduser/enduserapi/setUserPwd`


**Request Method**:`PUT`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**Interface Description**:`Modify User Password`


**Request Parameters**:


| Parameter Name | Parameter Description                                                                                                 | Request Type | Required | Data Type | schema |
| -------------- | --------------------------------------------------------------------------------------------------------------------- | ------------ | -------- | --------- | ------ |
| newPwd         | New password                                                                                                          | query        | true     | string    |        |
| oldPwd         | Original password                                                                                                     | query        | true     | string    |        |
| random         | Random number used for password encryption and decryption.<br/><b>Password encryption and decryption rule:</b><br/>AES128(pwd,MD5(random),initialization vector).<br/><b>AES encryption convention:</b><br/>Encryption mode: CBC<br/>Padding: PKCS5Padding<br/>Data block size: 128 bits<br/>Content: pwd<br/>AES key: MD5(random), MD5(random) generates a 16B uppercase string (takes the 8-24 part of the 32-length MD5 string)<br/>Initialization vector: Split the generated AES password (MD5(random)) into two 8B byte data groups, reverse them and concatenate to generate new 16B byte data as the offset<br/>Output: BASE64<br/>Character set: utf-8<br/><b>Example:</b><br/>pwd: china1234<br/>random: j1acpdj2bmtqZXVb<br/>AES key: 89A049614445CCA8<br/>AES iv: 4445CCA889A04961<br/>After encryption: lkZMvj0KDSJXlp66jBieHA==<br/>After decryption: china1234 | query | false    | string    |        |


**Response Status**:


| Status Code | Description                                                                        | schema                     |
| ----------- | ---------------------------------------------------------------------------------- | -------------------------- |
| 200         | User password modified successfully                                                | Registration code response data |
| 5008        | Original password is incorrect                                                     |                            |
| 5032        | Token verification failed                                                          |                            |
| 5043        | User password modification failed                                                  |                            |
| 5063        | New password cannot be the same as original password                               |                            |
| 5505        | Please enter original password                                                     |                            |
| 5506        | Original password decryption failed                                                |                            |
| 5507        | Please enter new password                                                          |                            |
| 5508        | New password decryption failed                                                     |                            |
| 5509        | Original password format incorrect, please enter 6-20 characters including letters, numbers, or special characters |    |
| 5510        | New password format incorrect, please enter 6-20 characters including letters, numbers, or special characters |         |


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