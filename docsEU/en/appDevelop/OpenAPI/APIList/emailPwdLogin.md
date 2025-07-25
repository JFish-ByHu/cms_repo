# Email Password Login


**API Address**:`/v2/enduser/enduserapi/emailPwdLogin`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Email password login, returns token`


**Request Parameters**:


| Parameter Name | Parameter Description                                         | Request Type | Required | Data Type       | Schema |
| -------------- | ------------------------------------------------------------- | ------------ | -------- | -------------- | ------ |
| email          | Email                                                         | query        | true     | string         |        |
| pwd            | Password                                                      | query        | true     | string         |        |
| signature      | Signature<br/>Signature generation rule: SHA256(email + pwd + random+userDomainSecret) | query    | true     | string         |        |
| userDomain     | User domain                                                   | query        | true     | string         |        |
| mcc            | MCC                                                           | query        | false    | integer(int32) |        |
| random         | Random number used for password encryption and decryption.<br/><b>Password encryption and decryption rules:</b><br/>AES128(pwd,MD5(random),initialization vector).<br/><b>AES encryption agreement:</b><br/>Encryption mode: CBC<br/>Padding: PKCS5Padding<br/>Data block bits: 128 bits<br/>Content: pwd<br/>AES key: MD5(random), MD5(random) generates a 16B uppercase string (extract part 8-24 of the 32-length MD5 string)<br/>Initialization vector: Split the generated AES password (MD5(random)) into two groups of 8B byte data, swap them and combine to generate new 16B byte data as offset<br/>Output: BASE64<br/>Character set: utf-8<br/><b>Example:</b><br/>pwd: china1234<br/>random: j1acpdj2bmtqZXVb<br/>AES key: 89A049614445CCA8<br/>AES iv: 4445CCA889A04961<br/>After encryption: lkZMvj0KDSJXlp66jBieHA==<br/>After decryption: china1234 | query    | false    | string         |        |


**Response Status**:


| Status Code | Description                                                   | Schema                                      |
| ----------- | ------------------------------------------------------------- | ------------------------------------------- |
| 200         | Login successful, token returned in data                       | Registration code response data«Login returned token» |
| 5013        | Incorrect user domain format                                   |                                             |
| 5015        | User domain does not exist                                     |                                             |
| 5022        | Please enter password                                          |                                             |
| 5023        | Please enter user domain                                       |                                             |
| 5026        | Please enter email                                             |                                             |
| 5031        | Email not registered                                           |                                             |
| 5040        | Incorrect email format                                         |                                             |
| 5056        | Incorrect password format, please enter 6-20 letters, numbers or special characters |                      |
| 5104        | User domain disabled                                           |                                             |
| 5147        | Account frozen, please try again after 20 minutes              |                                             |
| 5325        | Due to abnormal behavior in your current network access, there may be security risks. We have temporarily blocked your access, which will be automatically lifted after 24 hours |     |
| 5420        | Signature verification failed                                  |                                             |
| 5550        | Please enter signature                                         |                                             |
| 5583        | Incorrect email or password, you have 1 more attempt           |                                             |
| 5584        | Incorrect email or password, you have 2 more attempts          |                                             |
| 5585        | Incorrect email or password, you have 3 more attempts          |                                             |
| 5586        | Incorrect email or password, you have 4 more attempts          |                                             |
| 6084        | MCC does not belong to current data center                     |                                             |
| 6085        | Failed to query MCC data center                                |                                             |


**Response Parameters**:


| Parameter Name                         | Parameter Description                                                          | Type             | Schema           |
| -------------------------------------- | ------------------------------------------------------------------------------ | ---------------- | ---------------- |
| code                                   | Response status code                                                           | integer(int32)   | integer(int32)   |
| data                                   | Response data                                                                  | Login returned token | Login returned token |
| &emsp;&emsp;accessToken                | Interface access token                                                         | token            | token            |
| &emsp;&emsp;&emsp;&emsp;expirationTime | Expiration time timestamp, in seconds. Token becomes invalid after expiration. | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;token          | token                                                                          | string           |                  |
| &emsp;&emsp;refreshToken               | Refresh token                                                                  | token            | token            |
| &emsp;&emsp;&emsp;&emsp;expirationTime | Expiration time timestamp, in seconds. Token becomes invalid after expiration. | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;token          | token                                                                          | string           |                  |
| extMsg                                 | Extended message                                                               | string           |                  |
| msg                                    | Response message                                                               | string           |                  |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
		"accessToken": {
			"expirationTime": 0,
			"token": ""
		},
		"refreshToken": {
			"expirationTime": 0,
			"token": ""
		}
	},
	"extMsg": "",
	"msg": ""
}
```