# Query User Information


**API Address**:`/v2/enduser/enterpriseapi/userInfo`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`

**API Description**:`Query user information`


**Request Parameters**:


| Parameter Name | Parameter Description | Request Type | Required | Data Type | Schema |
| -------------- | --------------------- | ------------ | -------- | --------- | ------ |
| uid            | User ID               | query        | true     | string    |        |


**Response Status**:


| Status Code | Description                     | Schema                                |
| ----------- | ------------------------------- | ------------------------------------- |
| 200         | Successfully queried user info  | Return registration code response data«User Information» |
| 5032        | Token verification failed       |                                       |
| 5041        | No permission                   |                                       |
| 5065        | Please enter user ID            |                                       |
| 5106        | Please enter token              |                                       |


**Response Parameters**:


| Parameter Name                      | Parameter Description                     | Type           | Schema         |
| ----------------------------------- | ----------------------------------------- | -------------- | -------------- |
| code                                | Response status code                      | integer(int32) | integer(int32) |
| data                                | Response data                             | User Information | User Information |
| &emsp;&emsp;address                 | Address                                   | string         |                |
| &emsp;&emsp;alipayUserId            | Alipay user ID                            | string         |                |
| &emsp;&emsp;appleUserId             | Apple user ID                             | string         |                |
| &emsp;&emsp;city                    | City                                      | string         |                |
| &emsp;&emsp;email                   | Email                                     | string         |                |
| &emsp;&emsp;facebookUserId          | Facebook user ID                          | string         |                |
| &emsp;&emsp;headimg                 | Profile picture                           | string         |                |
| &emsp;&emsp;lang                    | Language                                  | string         |                |
| &emsp;&emsp;lastLoginTime           | Last login time                           | integer(int64) |                |
| &emsp;&emsp;lastLoginTimeTs         |                                           | integer(int64) |                |
| &emsp;&emsp;logonMode               | Registration method                       | integer(int32) |                |
| &emsp;&emsp;nationality             | Country                                   | string         |                |
| &emsp;&emsp;nikeName                | Nickname                                  | string         |                |
| &emsp;&emsp;phone                   | Phone number                              | string         |                |
| &emsp;&emsp;province                | Province                                  | string         |                |
| &emsp;&emsp;qqUserId                | QQ user ID                                | string         |                |
| &emsp;&emsp;registerTime            | Registration time                         | integer(int64) |                |
| &emsp;&emsp;registerTimeTs          |                                           | integer(int64) |                |
| &emsp;&emsp;remark                  | Remark                                    | string         |                |
| &emsp;&emsp;sex                     | Gender                                    | string         |                |
| &emsp;&emsp;signature               | Personal signature                        | string         |                |
| &emsp;&emsp;status                  | Account status: 0-Disabled, 1-Normal      | integer(int32) |                |
| &emsp;&emsp;timezone                | Timezone                                  | string         |                |
| &emsp;&emsp;twitterUserId           | Twitter user ID                           | string         |                |
| &emsp;&emsp;uid                     | User ID                                   | string         |                |
| &emsp;&emsp;userDomain              | User domain                               | string         |                |
| &emsp;&emsp;wechatMiniprogramUserId | WeChat Mini Program user ID               | string         |                |
| &emsp;&emsp;wechatOffiaccountUserId | WeChat Official Account user ID           | string         |                |
| &emsp;&emsp;wechatUnionId           | WeChat universal user ID                  | string         |                |
| extMsg                              | Extended message                          | string         |                |
| msg                                 | Response message                          | string         |                |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
		"address": "",
		"alipayUserId": "",
		"appleUserId": "",
		"city": "",
		"email": "",
		"facebookUserId": "",
		"headimg": "",
		"lang": "",
		"lastLoginTime": 0,
		"lastLoginTimeTs": 0,
		"logonMode": 0,
		"nationality": "",
		"nikeName": "",
		"phone": "",
		"province": "",
		"qqUserId": "",
		"registerTime": 0,
		"registerTimeTs": 0,
		"remark": "",
		"sex": "",
		"signature": "",
		"status": 0,
		"timezone": "",
		"twitterUserId": "",
		"uid": "",
		"userDomain": "",
		"wechatMiniprogramUserId": "",
		"wechatOffiaccountUserId": "",
		"wechatUnionId": ""
	},
	"extMsg": "",
	"msg": ""
}
```