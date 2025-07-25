# Alipay Authorization Login


**API Address**:`/v2/enduser/enduserapi/alipayAuthLogin`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Alipay authorization login`


**Request Parameters**:


| Parameter Name | Description                                                | Request Type | Required | Data Type       | Schema |
| -------------- | ---------------------------------------------------------- | ------------ | -------- | --------------- | ------ |
| appId          | Application ID assigned by Alipay to the developer          | query        | true     | string          |        |
| authCode       | Authorization code obtained after user authorizes the app   | query        | true     | string          |        |
| signature      | Signature<br/>Signature generation rule: SHA256(appId + authCode+userDomainSecret) | query    | true     | string          |        |
| userDomain     | User domain                                                 | query        | true     | string          |        |
| mcc            | MCC                                                         | query        | false    | integer(int32)  |        |


**Response Status**:


| Status Code | Description                                    | Schema                                |
| ----------- | ---------------------------------------------- | ------------------------------------- |
| 200         | Login successful, token returned in data field | Return registration code response«Login return token» |
| 5013        | User domain format is incorrect                |                                       |
| 5015        | User domain does not exist                     |                                       |
| 5023        | Please enter user domain                       |                                       |
| 5104        | User domain has been disabled                  |                                       |
| 5218        | Please enter appid                             |                                       |
| 5368        | Failed to get user OpenID                      |                                       |
| 5376        | Enterprise has not configured RSA2 public and private keys for this Alipay application |         |
| 6084        | MCC does not belong to the current data center |                                       |
| 6085        | Failed to query data center for MCC            |                                       |


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