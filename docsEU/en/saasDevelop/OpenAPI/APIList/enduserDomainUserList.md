# Query User List in User Domain


**API Address**:`/v2/enduser/enterpriseapi/userDomainUserList`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`

**API Description**: `Query the list of registered users in a user domain`


**Request Parameters**:


| Parameter Name | Parameter Description               | Request Type | Required | Data Type       | Schema |
| -------------- | ----------------------------------- | ------------ | -------- | -------------- | ------ |
| userDomain     | User domain                         | query        | true     | string         |        |
| page           | Current page, default is page 1     | query        | false    | integer(int32) |        |
| pageSize       | Page size, default is 10 items      | query        | false    | integer(int32) |        |


**Response Status**:


| Status Code | Description                                     | Schema                                      |
| ----------- | ----------------------------------------------- | ------------------------------------------- |
| 200         | Successfully queried user list in user domain   | Return registration code response data«PageInfo«User Information»» |
| 5015        | User domain does not exist                      |                                             |
| 5023        | Please enter user domain                        |                                             |
| 5032        | Token verification failed                       |                                             |
| 5041        | No permission                                   |                                             |
| 5106        | Please enter token                              |                                             |
| 5112        | Please enter enterprise ID                      |                                             |


**Response Parameters**:


| Parameter Name                             | Parameter Description                     | Type               | Schema             |
| ------------------------------------------ | ----------------------------------------- | ------------------ | ------------------ |
| code                                       | Response status code                      | integer(int32)     | integer(int32)     |
| data                                       | Response data                             | PageInfo«User Information» | PageInfo«User Information» |
| &emsp;&emsp;endRow                         |                                           | integer(int64)     |                    |
| &emsp;&emsp;hasNextPage                    |                                           | boolean            |                    |
| &emsp;&emsp;hasPreviousPage                |                                           | boolean            |                    |
| &emsp;&emsp;isFirstPage                    |                                           | boolean            |                    |
| &emsp;&emsp;isLastPage                     |                                           | boolean            |                    |
| &emsp;&emsp;list                           |                                           | array              | User Information   |
| &emsp;&emsp;&emsp;&emsp;address            | Address                                   | string             |                    |
| &emsp;&emsp;&emsp;&emsp;alipayUserId       | Alipay user ID                            | string             |                    |
| &emsp;&emsp;&emsp;&emsp;appleUserId        | Apple user ID                             | string             |                    |
| &emsp;&emsp;&emsp;&emsp;city               | City                                      | string             |                    |
| &emsp;&emsp;&emsp;&emsp;email              | Email                                     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;facebookUserId     | Facebook user ID                          | string             |                    |
| &emsp;&emsp;&emsp;&emsp;headimg            | Profile picture                           | string             |                    |
| &emsp;&emsp;&emsp;&emsp;lang               | Language                                  | string             |                    |
| &emsp;&emsp;&emsp;&emsp;lastLoginTime      | Last login time                           | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;lastLoginTimeTs    |                                           | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;logonMode          | Registration method                       | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;nationality        | Country                                   | string             |                    |
| &emsp;&emsp;&emsp;&emsp;nikeName           | Nickname                                  | string             |                    |
| &emsp;&emsp;&emsp;&emsp;phone              | Phone number                              | string             |                    |
| &emsp;&emsp;&emsp;&emsp;province           | Province                                  | string             |                    |
| &emsp;&emsp;&emsp;&emsp;qqUserId           | QQ user ID                                | string             |                    |
| &emsp;&emsp;&emsp;&emsp;registerTime       | Registration time                         | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;registerTimeTs     |                                           | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;remark             | Remark                                    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;sex                | Gender                                    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;signature          | Personal signature                        | string             |                    |
| &emsp;&emsp;&emsp;&emsp;status             | Account status: 0-Disabled, 1-Normal      | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;timezone           | Timezone                                  | string             |                    |
| &emsp;&emsp;&emsp;&emsp;twitterUserId      | Twitter user ID                           | string             |                    |
| &emsp;&emsp;&emsp;&emsp;uid                | User ID                                   | string             |                    |
| &emsp;&emsp;&emsp;&emsp;userDomain         | User domain                               | string             |                    |
| &emsp;&emsp;&emsp;&emsp;wechatMiniprogramUserId | WeChat Mini Program user ID          | string             |                    |
| &emsp;&emsp;&emsp;&emsp;wechatOffiaccountUserId | WeChat Official Account user ID      | string             |                    |
| &emsp;&emsp;&emsp;&emsp;wechatUnionId      | WeChat universal user ID                  | string             |                    |
| &emsp;&emsp;navigateFirstPage              |                                           | integer(int32)     |                    |
| &emsp;&emsp;navigateLastPage               |                                           | integer(int32)     |                    |
| &emsp;&emsp;navigatePages                  |                                           | integer(int32)     |                    |
| &emsp;&emsp;navigatepageNums               |                                           | array              | integer            |
| &emsp;&emsp;nextPage                       |                                           | integer(int32)     |                    |
| &emsp;&emsp;pageNum                        |                                           | integer(int32)     |                    |
| &emsp;&emsp;pageSize                       |                                           | integer(int32)     |                    |
| &emsp;&emsp;pages                          |                                           | integer(int32)     |                    |
| &emsp;&emsp;prePage                        |                                           | integer(int32)     |                    |
| &emsp;&emsp;size                           |                                           | integer(int32)     |                    |
| &emsp;&emsp;startRow                       |                                           | integer(int64)     |                    |
| &emsp;&emsp;total                          |                                           | integer(int64)     |                    |
| extMsg                                     | Extended message                          | string             |                    |
| msg                                        | Response message                          | string             |                    |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
		"endRow": 0,
		"hasNextPage": true,
		"hasPreviousPage": true,
		"isFirstPage": true,
		"isLastPage": true,
		"list": [
			{
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
			}
		],
		"navigateFirstPage": 0,
		"navigateLastPage": 0,
		"navigatePages": 0,
		"navigatepageNums": [],
		"nextPage": 0,
		"pageNum": 0,
		"pageSize": 0,
		"pages": 0,
		"prePage": 0,
		"size": 0,
		"startRow": 0,
		"total": 0
	},
	"extMsg": "",
	"msg": ""
}
```