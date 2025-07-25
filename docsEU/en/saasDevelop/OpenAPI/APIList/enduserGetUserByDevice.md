# Query List of Users with Bound Devices


**API Address**:`/v2/binding/enterpriseapi/getUserListByBind`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Query list of users with bound devices`


**Request Parameters**:


| Parameter Name | Parameter Description               | Request Type | Required | Data Type       | Schema |
| -------------- | ----------------------------------- | ------------ | -------- | -------------- | ------ |
| page           | Current page, default is page 1     | query        | false    | integer(int32) |        |
| pageSize       | Page size, default is 10 items      | query        | false    | integer(int32) |        |
| pk             | Product Key                         | query        | false    | string         |        |
| uid            | User ID                             | query        | false    | string         |        |
| userDomain     | User domain                         | query        | false    | string         |        |


**Response Status**:


| Status Code | Description                                            | Schema                                            |
| ----------- | ------------------------------------------------------ | ------------------------------------------------- |
| 200         | Enterprise successfully unbound device from user       | Return registration code response data«PageInfo«User with bound device»» |
| 5032        | Token verification failed                              |                                                   |
| 5106        | Please enter token                                     |                                                   |
| 5327        | No permission for this product                         |                                                   |
| 5370        | No such user in the enterprise                         |                                                   |


**Response Parameters**:


| Parameter Name                             | Parameter Description      | Type                         | Schema                       |
| ------------------------------------------ | -------------------------- | ---------------------------- | ---------------------------- |
| code                                       | Response status code       | integer(int32)               | integer(int32)               |
| data                                       | Response data              | PageInfo«User with bound device» | PageInfo«User with bound device» |
| &emsp;&emsp;endRow                         |                            | integer(int64)               |                              |
| &emsp;&emsp;hasNextPage                    |                            | boolean                      |                              |
| &emsp;&emsp;hasPreviousPage                |                            | boolean                      |                              |
| &emsp;&emsp;isFirstPage                    |                            | boolean                      |                              |
| &emsp;&emsp;isLastPage                     |                            | boolean                      |                              |
| &emsp;&emsp;list                           |                            | array                        | User with bound device       |
| &emsp;&emsp;&emsp;&emsp;address            | Address                    | string                       |                              |
| &emsp;&emsp;&emsp;&emsp;alipayUserId       | Alipay user ID             | string                       |                              |
| &emsp;&emsp;&emsp;&emsp;email              | Email                      | string                       |                              |
| &emsp;&emsp;&emsp;&emsp;facebookUserId     | Facebook user ID           | string                       |                              |
| &emsp;&emsp;&emsp;&emsp;headimg            | Profile picture            | string                       |                              |
| &emsp;&emsp;&emsp;&emsp;lastLoginTime      | Last login time            | string                       |                              |
| &emsp;&emsp;&emsp;&emsp;lastLoginTimeTs    |                            | integer                      |                              |
| &emsp;&emsp;&emsp;&emsp;nikeName           | Nickname                   | string                       |                              |
| &emsp;&emsp;&emsp;&emsp;phone              | Phone number               | string                       |                              |
| &emsp;&emsp;&emsp;&emsp;qqUserId           | QQ user ID                 | string                       |                              |
| &emsp;&emsp;&emsp;&emsp;sex                | Gender                     | string                       |                              |
| &emsp;&emsp;&emsp;&emsp;twitterUserId      | Twitter user ID            | string                       |                              |
| &emsp;&emsp;&emsp;&emsp;uid                | User ID                    | string                       |                              |
| &emsp;&emsp;&emsp;&emsp;userDomain         | User domain                | string                       |                              |
| &emsp;&emsp;&emsp;&emsp;wechatMiniprogramUserId | WeChat Mini Program user ID | string                 |                              |
| &emsp;&emsp;&emsp;&emsp;wechatOffiaccountUserId | WeChat Official Account user ID | string              |                              |
| &emsp;&emsp;&emsp;&emsp;wechatUnionId      | WeChat universal user ID   | string                       |                              |
| &emsp;&emsp;navigateFirstPage              |                            | integer(int32)               |                              |
| &emsp;&emsp;navigateLastPage               |                            | integer(int32)               |                              |
| &emsp;&emsp;navigatePages                  |                            | integer(int32)               |                              |
| &emsp;&emsp;navigatepageNums               |                            | array                        | integer                      |
| &emsp;&emsp;nextPage                       |                            | integer(int32)               |                              |
| &emsp;&emsp;pageNum                        |                            | integer(int32)               |                              |
| &emsp;&emsp;pageSize                       |                            | integer(int32)               |                              |
| &emsp;&emsp;pages                          |                            | integer(int32)               |                              |
| &emsp;&emsp;prePage                        |                            | integer(int32)               |                              |
| &emsp;&emsp;size                           |                            | integer(int32)               |                              |
| &emsp;&emsp;startRow                       |                            | integer(int64)               |                              |
| &emsp;&emsp;total                          |                            | integer(int64)               |                              |
| extMsg                                     | Extended message           | string                       |                              |
| msg                                        | Response message           | string                       |                              |


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
				"email": "",
				"facebookUserId": "",
				"headimg": "",
				"lastLoginTime": "",
				"lastLoginTimeTs": 0,
				"nikeName": "",
				"phone": "",
				"qqUserId": "",
				"sex": "",
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