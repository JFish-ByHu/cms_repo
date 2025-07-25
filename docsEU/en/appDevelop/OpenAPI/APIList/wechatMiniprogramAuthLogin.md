# WeChat Mini Program Authorization Login


**API Address**:`/v2/enduser/enduserapi/wechatMiniprogramAuthLogin`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`WeChat Mini Program Authorization Login`


**Request Parameters**:


| Parameter Name | Parameter Description | Request Type | Required | Data Type | Schema |
| -------------- | --------------------- | ------------ | -------- | --------- | ------ |
| appId          | Mini program appId    | query        | true     | string    |        |
| jsCode         | Code obtained during login | query    | true     | string    |        |
| signature      | Signature<br/>Signature generation rule: SHA256(appId + jsCode+userDomainSecret) | query | true | string |        |
| userDomain     | User domain           | query        | true     | string    |        |
| mcc            | MCC                   | query        | false    | integer(int32) |     |


**Response Status**:


| Status Code | Description | Schema |
| ----------- | ----------- | ------ |
| 200         | Login successful, token returned in data | Return registration code response data«Login returned token» |
| 5013        | User domain format incorrect |          |
| 5015        | User domain does not exist   |          |
| 5023        | Please enter user domain     |          |
| 5104        | User domain has been disabled |         |
| 5218        | Please enter appid           |          |
| 5367        | Exception in requesting user OpenID |    |
| 5368        | Failed to get user OpenID    |          |
| 5369        | Failed to parse user OpenID  |          |
| 5372        | Please enter jsCode          |          |
| 5373        | Enterprise has not configured this mini program Secret | |
| 6084        | MCC does not belong to current data center | |
| 6085        | Failed to query data center for MCC |     |


**Response Parameters**:


| Parameter Name | Parameter Description | Type | Schema |
| -------------- | --------------------- | ---- | ------ |
| code           | Response status code  | integer(int32) | integer(int32) |
| data           | Response data         | Login returned token | Login returned token |
| &emsp;&emsp;accessToken | Interface access token | token | token |
| &emsp;&emsp;&emsp;&emsp;expirationTime | Expiration timestamp in seconds. Token becomes invalid after expiration time. | integer | |
| &emsp;&emsp;&emsp;&emsp;token | token  | string | |
| &emsp;&emsp;refreshToken | Refresh token | token | token |
| &emsp;&emsp;&emsp;&emsp;expirationTime | Expiration timestamp in seconds. Token becomes invalid after expiration time. | integer | |
| &emsp;&emsp;&emsp;&emsp;token | token  | string | |
| extMsg         | Extended message      | string | |
| msg            | Response message      | string | |


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