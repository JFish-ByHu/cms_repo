# Apple Authorization Login


**API Address**:`/v2/enduser/enduserapi/appleAuthLogin`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**: `Apple authorization login`


**Request Parameters**:


| Parameter Name | Description                                                 | Request Type | Required | Data Type       | Schema |
| -------------- | ----------------------------------------------------------- | ------------ | -------- | --------------- | ------ |
| identityToken  | identityToken obtained after successful Apple authorization  | query        | true     | string          |        |
| signature      | Signature<br/>Signature generation rule: SHA256(identityToken+userDomainSecret) | query | true  | string     |        |
| userDomain     | User domain                                                  | query        | true     | string          |        |
| mcc            | MCC                                                          | query        | false    | integer(int32)  |        |


**Response Status**:


| Status Code | Description                             | Schema                                |
| ----------- | --------------------------------------- | ------------------------------------- |
| 200         | Login successful, token returned in data | Return registration code response«Login return token» |
| 5013        | User domain format is incorrect         |                                       |
| 5015        | User domain does not exist              |                                       |
| 5023        | Please enter user domain                |                                       |
| 5104        | User domain has been disabled           |                                       |
| 5566        | Public key is empty                     |                                       |
| 5567        | identityToken format is incorrect       |                                       |
| 5568        | Please enter identityToken              |                                       |
| 6084        | MCC does not belong to the current data center |                                |
| 6085        | Failed to query data center for MCC     |                                       |


**Response Parameters**:


| Parameter Name                      | Description                                               | Type              | Schema            |
| ----------------------------------- | --------------------------------------------------------- | ----------------- | ----------------- |
| code                                | Response code                                             | integer(int32)    | integer(int32)    |
| data                                | Response data                                             | Login return token | Login return token |
| &emsp;&emsp;accessToken             | API access token                                          | token             | token             |
| &emsp;&emsp;&emsp;&emsp;expirationTime | Expiration timestamp in seconds. Token becomes invalid after this time. | integer       |                   |
| &emsp;&emsp;&emsp;&emsp;token       | token                                                     | string            |                   |
| &emsp;&emsp;refreshToken            | Refresh token                                             | token             | token             |
| &emsp;&emsp;&emsp;&emsp;expirationTime | Expiration timestamp in seconds. Token becomes invalid after this time. | integer       |                   |
| &emsp;&emsp;&emsp;&emsp;token       | token                                                     | string            |                   |
| extMsg                              | Extended message                                          | string            |                   |
| msg                                 | Response message                                          | string            |                   |


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