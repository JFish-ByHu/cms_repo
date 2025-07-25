# Twitter Authorization Login


**Interface Address**:`/v2/enduser/enduserapi/twitterAuthLogin`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**Interface Description**:`Twitter Authorization Login`


**Request Parameters**:


| Parameter Name    | Parameter Description                                                                              | Request Type | Required | Data Type      | schema |
| ----------------- | -------------------------------------------------------------------------------------------------- | ------------ | -------- | -------------- | ------ |
| appId             | Enterprise third-party configured appId                                                            | query        | true     | string         |        |
| oauthToken        | oauthToken obtained after Twitter authorization                                                    | query        | true     | string         |        |
| oauthTokenSecret  | oauthTokenSecret obtained after Twitter authorization                                              | query        | true     | string         |        |
| signature         | Signature<br/>Signature generation rule: SHA256(appId + oauthToken + oauthTokenSecret+userDomainSecret) | query    | true     | string         |        |
| userDomain        | User domain                                                                                        | query        | true     | string         |        |
| mcc               | MCC                                                                                                | query        | false    | integer(int32) |        |


**Response Status**:


| Status Code | Description                       | schema                                      |
| ----------- | --------------------------------- | ------------------------------------------- |
| 200         | Login successful, token returned in data | Registration code response data«Login token return» |
| 5013        | User domain format incorrect      |                                             |
| 5015        | User domain does not exist        |                                             |
| 5023        | Please enter user domain          |                                             |
| 5104        | User domain has been disabled     |                                             |
| 5569        | Please enter oauthToken           |                                             |
| 5570        | Please enter oauthTokenSecret     |                                             |
| 6084        | MCC does not belong to the current data center |                                |
| 6085        | Failed to query data center for MCC |                                           |


**Response Parameters**:


| Parameter Name                         | Parameter Description                                        | Type             | schema           |
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