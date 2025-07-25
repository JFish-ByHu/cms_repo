# Email Password Registration


**API Address**:`/v2/enduser/enduserapi/emailPwdRegister`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Email password registration, returns user ID`


**Request Parameters**:


| Parameter Name | Parameter Description                                         | Request Type | Required | Data Type       | Schema |
| -------------- | ------------------------------------------------------------- | ------------ | -------- | -------------- | ------ |
| code           | Email verification code                                       | query        | true     | string         |        |
| email          | Email                                                         | query        | true     | string         |        |
| pwd            | Password                                                      | query        | true     | string         |        |
| userDomain     | User domain                                                   | query        | true     | string         |        |
| lang           | Language                                                      | query        | false    | integer(int32) |        |
| mcc            | MCC                                                           | query        | false    | integer(int32) |        |
| nationality    | Country                                                       | query        | false    | integer(int32) |        |
| random         | Random number used for password encryption and decryption.<br/><b>Password encryption and decryption rules:</b><br/>AES128(pwd,MD5(random),initialization vector).<br/><b>AES encryption agreement:</b><br/>Encryption mode: CBC<br/>Padding: PKCS5Padding<br/>Data block bits: 128 bits<br/>Content: pwd<br/>AES key: MD5(random), MD5(random) generates a 16B uppercase string (extract part 8-24 of the 32-length MD5 string)<br/>Initialization vector: Split the generated AES password (MD5(random)) into two groups of 8B byte data, swap them and combine to generate new 16B byte data as offset<br/>Output: BASE64<br/>Character set: utf-8<br/><b>Example:</b><br/>pwd: china1234<br/>random: j1acpdj2bmtqZXVb<br/>AES key: 89A049614445CCA8<br/>AES iv: 4445CCA889A04961<br/>After encryption: lkZMvj0KDSJXlp66jBieHA==<br/>After decryption: china1234 | query    | false    | string         |        |
| timezone       | Timezone                                                      | query        | false    | integer(int32) |        |


**Response Status**:


| Status Code | Description                                               | Schema                         |
| ----------- | --------------------------------------------------------- | ------------------------------ |
| 200         | Registration successful, user ID returned in data          | Registration code response data«string» |
| 5013        | Incorrect user domain format                               |                                |
| 5015        | User domain does not exist                                 |                                |
| 5022        | Please enter password                                      |                                |
| 5023        | Please enter user domain                                   |                                |
| 5026        | Please enter email                                         |                                |
| 5039        | Email already registered                                   |                                |
| 5040        | Incorrect email format                                     |                                |
| 5046        | Email verification code validation failed                  |                                |
| 5056        | Incorrect password format, please enter 6-20 letters, numbers or special characters |        |
| 5064        | Please enter verification code                             |                                |
| 5104        | User domain disabled                                       |                                |
| 5171        | Timezone parameter validation failed                       |                                |
| 5172        | Country parameter validation failed                        |                                |
| 5173        | Language parameter validation failed                       |                                |
| 6084        | MCC does not belong to current data center                 |                                |
| 6085        | Failed to query MCC data center                            |                                |


**Response Parameters**:


| Parameter Name | Parameter Description | Type           | Schema         |
| -------------- | --------------------- | -------------- | -------------- |
| code           | Response status code  | integer(int32) | integer(int32) |
| data           | Response data         | string         |                |
| extMsg         | Extended message      | string         |                |
| msg            | Response message      | string         |                |


**Response Example**:
```javascript
{
	"code": 0,
	"data": "",
	"extMsg": "",
	"msg": ""
}
```