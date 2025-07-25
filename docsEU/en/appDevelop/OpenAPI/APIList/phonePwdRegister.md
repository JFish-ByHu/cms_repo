# Phone Number and Password Registration

**Interface Address**:`/v2/enduser/enduserapi/phonePwdRegister`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**Interface Description**:`Register with phone number and password, returns user ID`


**Request Parameters**:


| Parameter Name    | Parameter Description                                        | Request Type | Required | Data Type      | schema |
| ----------------- | ------------------------------------------------------------ | ------------ | -------- | -------------- | ------ |
| phone             | Phone number                                                 | query        | true     | string         |        |
| pwd               | Password                                                     | query        | true     | string         |        |
| smsCode           | SMS verification code (provided by SMS service's send verification code interface) | query        | true     | string         |        |
| userDomain        | User domain                                                  | query        | true     | string         |        |
| internationalCode | International code, default is for domestic                   | query        | false    | string         |        |
| lang              | Language                                                     | query        | false    | integer(int32) |        |
| mcc               | MCC                                                          | query        | false    | integer(int32) |        |
| nationality       | Country                                                      | query        | false    | integer(int32) |        |
| random            | Random number used for password encryption and decryption.<br/><b>Password encryption and decryption rule:</b><br/>AES128(pwd,MD5(random),initialization vector).<br/><b>AES encryption convention:</b><br/>Encryption mode: CBC<br/>Padding: PKCS5Padding<br/>Data block size: 128 bits<br/>Content: pwd<br/>AES key: MD5(random), MD5(random) generates a 16B uppercase string (takes the 8-24 part of the 32-length MD5 string)<br/>Initialization vector: Split the generated AES password (MD5(random)) into two 8B byte data groups, reverse them and concatenate to generate new 16B byte data as the offset<br/>Output: BASE64<br/>Character set: utf-8<br/><b>Example:</b><br/>pwd: china1234<br/>random: j1acpdj2bmtqZXVb<br/>AES key: 89A049614445CCA8<br/>AES iv: 4445CCA889A04961<br/>After encryption: lkZMvj0KDSJXlp66jBieHA==<br/>After decryption: china1234 | query        | false    | string         |        |
| timezone          | Time zone                                                    | query        | false    | integer(int32) |        |


**Response Status**:


| Status Code | Description                                                  | schema                            |
| ----------- | ------------------------------------------------------------ | --------------------------------- |
| 200         | Registration successful, user ID returned in data            | Registration code response data«string» |
| 5002        | Phone number already registered                              |                                   |
| 5013        | User domain format incorrect                                 |                                   |
| 5015        | User domain does not exist                                   |                                   |
| 5019        | Phone number format incorrect                                |                                   |
| 5021        | Please enter phone number                                    |                                   |
| 5022        | Please enter password                                        |                                   |
| 5023        | Please enter user domain                                     |                                   |
| 5037        | SMS verification code verification failed                    |                                   |
| 5056        | Password format incorrect, please enter 6-20 characters including letters, numbers, or special characters |                                   |
| 5064        | Please enter verification code                               |                                   |
| 5104        | User domain has been disabled                                |                                   |
| 5171        | Time zone parameter value validation failed                  |                                   |
| 5172        | Country parameter value validation failed                    |                                   |
| 5173        | Language parameter value validation failed                   |                                   |
| 6084        | MCC does not belong to the current data center               |                                   |
| 6085        | Failed to query data center for MCC                          |                                   |


**Response Parameters**:


| Parameter Name | Parameter Description | Type           | schema         |
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