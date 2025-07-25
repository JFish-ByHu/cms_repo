# Refresh Token


**Interface Address**:`/v2/enduser/enduserapi/refreshToken`


**Request Method**:`PUT`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**Interface Description**:`Refresh token, after successful refresh, the token's validity period is reset to 2 hours`


**Request Parameters**:


| Parameter Name | Parameter Description | Request Type | Required | Data Type | schema |
| -------------- | --------------------- | ------------ | -------- | --------- | ------ |
| refreshToken   | Refresh token         | query        | true     | string    |        |


**Response Status**:


| Status Code | Description            | schema                                      |
| ----------- | ---------------------- | ------------------------------------------- |
| 200         | Token refresh successful | Registration code response data«Login token return» |


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