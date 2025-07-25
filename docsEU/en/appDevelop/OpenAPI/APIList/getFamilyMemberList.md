# Query Family Member List

**API Address**:`/v2/family/enduserapi/getFamilyMemberList`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Query family member list`

**Request Parameters**:


| Parameter Name | Parameter Description               | Request Type | Required | Data Type       | Schema |
| -------------- | ----------------------------------- | ------------ | -------- | -------------- | ------ |
| fid            | Family ID                           | query        | true     | string         |        |
| page           | Current page, default is page 1     | query        | false    | integer(int32) |        |
| pageSize       | Page size, default is 10 items      | query        | false    | integer(int32) |        |


**Response Status**:


| Status Code | Description                                | Schema                                     |
| ----------- | ------------------------------------------ | ------------------------------------------ |
| 200         | Successfully queried family member list    | Registration code response data«PageInfo«User Info»» |
| 5628        | User information not found                 |                                            |
| 5635        | Home mode not enabled                      |                                            |
| 5636        | Please enter family ID                     |                                            |
| 5658        | Member permission invalid                  |                                            |


**Response Parameters**:


| Parameter Name                                  | Parameter Description                                                                                                      | Type               | Schema             |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------ |
| code                                            | Response status code                                                                                                       | integer(int32)     | integer(int32)     |
| data                                            | Response data                                                                                                             | PageInfo«User Info» | PageInfo«User Info» |
| &emsp;&emsp;endRow                              |                                                                                                                            | integer(int64)     |                    |
| &emsp;&emsp;hasNextPage                         |                                                                                                                            | boolean            |                    |
| &emsp;&emsp;hasPreviousPage                     |                                                                                                                            | boolean            |                    |
| &emsp;&emsp;isFirstPage                         |                                                                                                                            | boolean            |                    |
| &emsp;&emsp;isLastPage                          |                                                                                                                            | boolean            |                    |
| &emsp;&emsp;list                                |                                                                                                                            | array              | User Info          |
| &emsp;&emsp;&emsp;&emsp;acceptTime              | Invitation acceptance time                                                                                                 | string             |                    |
| &emsp;&emsp;&emsp;&emsp;address                 | Address                                                                                                                    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;alipayUserId            | Alipay user ID                                                                                                             | string             |                    |
| &emsp;&emsp;&emsp;&emsp;appleUserId             | Apple user ID                                                                                                              | string             |                    |
| &emsp;&emsp;&emsp;&emsp;city                    | City                                                                                                                       | string             |                    |
| &emsp;&emsp;&emsp;&emsp;email                   | Email                                                                                                                      | string             |                    |
| &emsp;&emsp;&emsp;&emsp;facebookUserId          | Facebook user ID                                                                                                           | string             |                    |
| &emsp;&emsp;&emsp;&emsp;headimg                 | Profile picture                                                                                                            | string             |                    |
| &emsp;&emsp;&emsp;&emsp;invalidTime             | Invitation time                                                                                                            | string             |                    |
| &emsp;&emsp;&emsp;&emsp;lang                    | Language                                                                                                                   | string             |                    |
| &emsp;&emsp;&emsp;&emsp;lastLoginTime           | Last login time                                                                                                            | string             |                    |
| &emsp;&emsp;&emsp;&emsp;lastLoginTimeTs         |                                                                                                                            | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;memberName              | User nickname                                                                                                              | string             |                    |
| &emsp;&emsp;&emsp;&emsp;memberRole              | Family member role:<br/>1-Family creator, only has this role in families created by themselves<br/>2-Family administrator<br/>3-Regular family member | integer        |                    |
| &emsp;&emsp;&emsp;&emsp;nationality             | Country                                                                                                                    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;nikeName                | Nickname                                                                                                                   | string             |                    |
| &emsp;&emsp;&emsp;&emsp;phone                   | Phone number                                                                                                               | string             |                    |
| &emsp;&emsp;&emsp;&emsp;province                | Province                                                                                                                   | string             |                    |
| &emsp;&emsp;&emsp;&emsp;qqUserId                | QQ user ID                                                                                                                 | string             |                    |
| &emsp;&emsp;&emsp;&emsp;registerTime            | Registration time                                                                                                          | string             |                    |
| &emsp;&emsp;&emsp;&emsp;registerTimeTs          |                                                                                                                            | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;remark                  | Remarks                                                                                                                    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;sex                     | Gender                                                                                                                     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;signature               | Personal signature                                                                                                         | string             |                    |
| &emsp;&emsp;&emsp;&emsp;status                  | Account status: 0 Disabled  1 Normal                                                                                      | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;timezone                | Timezone                                                                                                                   | string             |                    |
| &emsp;&emsp;&emsp;&emsp;twitterUserId           | Twitter user ID                                                                                                            | string             |                    |
| &emsp;&emsp;&emsp;&emsp;uid                     | User ID                                                                                                                    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;userDomain              | User domain                                                                                                                | string             |                    |
| &emsp;&emsp;&emsp;&emsp;wechatMiniprogramUserId | WeChat Mini Program user ID                                                                                                | string             |                    |
| &emsp;&emsp;&emsp;&emsp;wechatOffiaccountUserId | WeChat Official Account user ID                                                                                            | string             |                    |
| &emsp;&emsp;&emsp;&emsp;wechatUnionId           | WeChat Universal user ID                                                                                                   | string             |                    |
| &emsp;&emsp;navigateFirstPage                   |                                                                                                                            | integer(int32)     |                    |
| &emsp;&emsp;navigateLastPage                    |                                                                                                                            | integer(int32)     |                    |
| &emsp;&emsp;navigatePages                       |                                                                                                                            | integer(int32)     |                    |
| &emsp;&emsp;navigatepageNums                    |                                                                                                                            | array              | integer            |
| &emsp;&emsp;nextPage                            |                                                                                                                            | integer(int32)     |                    |
| &emsp;&emsp;pageNum                             |                                                                                                                            | integer(int32)     |                    |
| &emsp;&emsp;pageSize                            |                                                                                                                            | integer(int32)     |                    |
| &emsp;&emsp;pages                               |                                                                                                                            | integer(int32)     |                    |
| &emsp;&emsp;prePage                             |                                                                                                                            | integer(int32)     |                    |
| &emsp;&emsp;size                                |                                                                                                                            | integer(int32)     |                    |
| &emsp;&emsp;startRow                            |                                                                                                                            | integer(int64)     |                    |
| &emsp;&emsp;total                               |                                                                                                                            | integer(int64)     |                    |
| extMsg                                          | Extended message                                                                                                          | string             |                    |
| msg                                             | Response message                                                                                                          | string             |                    |


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
				"acceptTime": "",
				"address": "",
				"alipayUserId": "",
				"appleUserId": "",
				"city": "",
				"email": "",
				"facebookUserId": "",
				"headimg": "",
				"invalidTime": "",
				"lang": "",
				"lastLoginTime": "",
				"lastLoginTimeTs": 0,
				"memberName": "",
				"memberRole": 0,
				"nationality": "",
				"nikeName": "",
				"phone": "",
				"province": "",
				"qqUserId": "",
				"registerTime": "",
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