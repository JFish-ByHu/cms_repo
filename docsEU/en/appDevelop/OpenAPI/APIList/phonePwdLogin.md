# Phone Number and Password Login


**Interface Address**:`/v2/enduser/enduserapi/phonePwdLogin`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**Interface Description**:`Login with phone number and password, returns a token`


**Request Parameters**:


| Parameter Name    | Parameter Description                                        | Request Type | Required | Data Type      | schema |
| ----------------- | ------------------------------------------------------------ | ------------ | -------- | -------------- | ------ |
| phone             | Phone number                                                 | query        | true     | string         |        |
| pwd               | Password                                                     | query        | true     | string         |        |
| signature         | Signature<br/>Signature generation rule: SHA256(internationalCode+phone+pwd+random+userDomainSecret) | query        | true     | string         |        |
| userDomain        | User domain                                                  | query        | true     | string         |        |
| internationalCode | International code, default is for domestic                   | query        | false    | string         |        |
| mcc               | MCC                                                          | query        | false    | integer(int32) |        |
| random            | Random number used for password encryption and decryption.<br/><b>Password encryption and decryption rule:</b><br/>AES128(pwd,MD5(random),initialization vector).<br/><b>AES encryption convention:</b><br/>Encryption mode: CBC<br/>Padding: PKCS5Padding<br/>Data block size: 128 bits<br/>Content: pwd<br/>AES key: MD5(random), MD5(random) generates a 16B uppercase string (takes the 8-24 part of the 32-length MD5 string)<br/>Initialization vector: Split the generated AES password (MD5(random)) into two 8B byte data groups, reverse them and concatenate to generate new 16B byte data as the offset<br/>Output: BASE64<br/>Character set: utf-8<br/><b>Example:</b><br/>pwd: china1234<br/>random: j1acpdj2bmtqZXVb<br/>AES key: 89A049614445CCA8<br/>AES iv: 4445CCA889A04961<br/>After encryption: lkZMvj0KDSJXlp66jBieHA==<br/>After decryption: china1234 | query        | false    | string         |        |


**Response Status**:


| Status Code | Description                                                  | schema                                          |
| ----------- | ------------------------------------------------------------ | ----------------------------------------------- |
| 200         | Login successful, token returned in data                     | Registration code response data«Login token return» |
| 5002        | Phone number already registered                              |                                                 |
| 5004        | Phone number not registered                                  |                                                 |
| 5013        | User domain format incorrect                                 |                                                 |
| 5015        | User domain does not exist                                   |                                                 |
| 5019        | Phone number format incorrect                                |                                                 |
| 5021        | Please enter phone number                                    |                                                 |
| 5022        | Please enter password                                        |                                                 |
| 5023        | Please enter user domain                                     |                                                 |
| 5028        | Password incorrect                                           |                                                 |
| 5056        | Password format incorrect, please enter 6-20 characters including letters, numbers, or special characters |                                                 |
| 5104        | User domain has been disabled                                |                                                 |
| 5147        | Account is frozen, please try again after 20 minutes         |                                                 |
| 5325        | Due to abnormal behavior from your current network access, there may be security risks. We have temporarily blocked your access, which will be automatically lifted after 24 hours |                                                 |
| 5420        | Signature verification failed                                |                                                 |
| 5550        | Please enter signature                                       |                                                 |
| 5579        | Phone number or password incorrect, you have 1 more attempt  |                                                 |
| 5580        | Phone number or password incorrect, you have 2 more attempts |                                                 |
| 5581        | Phone number or password incorrect, you have 3 more attempts |                                                 |
| 5582        | Phone number or password incorrect, you have 4 more attempts |                                                 |
| 6084        | MCC does not belong to the current data center               |                                                 |
| 6085        | Failed to query data center for MCC                          |                                                 |


**Response Parameters**:


| Parameter Name                         | Parameter Description                                         | Type             | schema           |
| -------------------------------------- | ------------------------------------------------------------ | ---------------- | ---------------- |
| code                                   | Response status code                                         | integer(int32)   | integer(int32)   |
| data                                   | Response data                                                | Login token return | Login token return |
| &emsp;&emsp;accessToken                | Interface access token                                       | token            | token            |
| &emsp;&emsp;&emsp;&emsp;expirationTime | Expiration timestamp in seconds. Token becomes invalid after this time. | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;token          | token                                                        | string           |                  |
| &emsp;&emsp;refreshToken               | Refresh token                                                | token            | token            |
| &emsp;&emsp;&emsp;&emsp;expirationTime | Expiration timestamp in seconds. Token becomes invalid after this time. | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;token          | token                                                        | string           |                  |
| extMsg                                 | Extended message                                             | string           |                  |
| msg                                    | Response message                                             | string           |                  |


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