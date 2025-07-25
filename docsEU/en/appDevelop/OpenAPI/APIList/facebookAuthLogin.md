# Facebook Authorization Login


**API Address**:`/v2/enduser/enduserapi/facebookAuthLogin`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Facebook authorization login`


**Request Parameters**:


| Parameter Name | Parameter Description                                          | Request Type | Required | Data Type       | Schema |
| -------------- | -------------------------------------------------------------- | ------------ | -------- | -------------- | ------ |
| appId          | Application ID assigned to developer by Facebook               | query        | true     | string         |        |
| code           | Code returned by callback when Facebook user logs in           | query        | true     | string         |        |
| signature      | Signature<br/>Signature generation rule: SHA256(appId+code+userDomainSecret) | query    | true     | string         |        |
| userDomain     | User domain                                                    | query        | true     | string         |        |
| mcc            | MCC                                                            | query        | false    | integer(int32) |        |


**Response Status**:


| Status Code | Description                             | Schema                                      |
| ----------- | --------------------------------------- | ------------------------------------------- |
| 200         | Login successful, token returned in data | Registration code response data«Login returned token» |
| 5013        | Incorrect user domain format            |                                             |
| 5015        | User domain does not exist              |                                             |
| 5023        | Please enter user domain                |                                             |
| 5104        | User domain disabled                    |                                             |
| 5218        | Please enter appid                      |                                             |
| 5374        | Please enter code                       |                                             |
| 6084        | MCC does not belong to current data center |                                          |
| 6085        | Failed to query MCC data center         |                                             |


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