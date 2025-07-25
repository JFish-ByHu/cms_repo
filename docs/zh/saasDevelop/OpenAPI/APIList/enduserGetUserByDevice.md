# 查询已绑定设备的用户列表


**接口地址**:`/v2/binding/enterpriseapi/getUserListByBind`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询已绑定设备的用户列表</p>


**请求参数**:


| 参数名称   | 参数说明              | 请求类型 | 是否必须 | 数据类型       | schema |
| ---------- | --------------------- | -------- | -------- | -------------- | ------ |
| page       | 当前页，默认为第 1 页 | query    | false    | integer(int32) |        |
| pageSize   | 页大小，默认为 10 条  | query    | false    | integer(int32) |        |
| pk         | Product Key           | query    | false    | string         |        |
| uid        | 用户ID                | query    | false    | string         |        |
| userDomain | 用户域                | query    | false    | string         |        |


**响应状态**:


| 状态码 | 说明                       | schema                                       |
| ------ | -------------------------- | -------------------------------------------- |
| 200    | 企业解绑用户绑定的设备成功 | 返回注册码响应数据«PageInfo«绑定设备的用户»» |
| 5032   | token 验证失败             |                                              |
| 5106   | 请输入token                |                                              |
| 5327   | 没有此产品的权限           |                                              |
| 5370   | 企业中无此用户             |                                              |


**响应参数**:


| 参数名称                                        | 参数说明         | 类型                     | schema                   |
| ----------------------------------------------- | ---------------- | ------------------------ | ------------------------ |
| code                                            | 响应状态码       | integer(int32)           | integer(int32)           |
| data                                            | 响应数据         | PageInfo«绑定设备的用户» | PageInfo«绑定设备的用户» |
| &emsp;&emsp;endRow                              |                  | integer(int64)           |                          |
| &emsp;&emsp;hasNextPage                         |                  | boolean                  |                          |
| &emsp;&emsp;hasPreviousPage                     |                  | boolean                  |                          |
| &emsp;&emsp;isFirstPage                         |                  | boolean                  |                          |
| &emsp;&emsp;isLastPage                          |                  | boolean                  |                          |
| &emsp;&emsp;list                                |                  | array                    | 绑定设备的用户           |
| &emsp;&emsp;&emsp;&emsp;address                 | 地址             | string                   |                          |
| &emsp;&emsp;&emsp;&emsp;alipayUserId            | 支付宝用户ID     | string                   |                          |
| &emsp;&emsp;&emsp;&emsp;email                   | email            | string                   |                          |
| &emsp;&emsp;&emsp;&emsp;facebookUserId          | Facebook用户ID   | string                   |                          |
| &emsp;&emsp;&emsp;&emsp;headimg                 | 头像             | string                   |                          |
| &emsp;&emsp;&emsp;&emsp;lastLoginTime           | 最后上线时间     | string                   |                          |
| &emsp;&emsp;&emsp;&emsp;lastLoginTimeTs         |                  | integer                  |                          |
| &emsp;&emsp;&emsp;&emsp;nikeName                | 昵称             | string                   |                          |
| &emsp;&emsp;&emsp;&emsp;phone                   | 手机号码         | string                   |                          |
| &emsp;&emsp;&emsp;&emsp;qqUserId                | QQ用户ID         | string                   |                          |
| &emsp;&emsp;&emsp;&emsp;sex                     | 性别             | string                   |                          |
| &emsp;&emsp;&emsp;&emsp;twitterUserId           | Twitter用户ID    | string                   |                          |
| &emsp;&emsp;&emsp;&emsp;uid                     | 用户ID           | string                   |                          |
| &emsp;&emsp;&emsp;&emsp;userDomain              | 用户域           | string                   |                          |
| &emsp;&emsp;&emsp;&emsp;wechatMiniprogramUserId | 微信小程序用户ID | string                   |                          |
| &emsp;&emsp;&emsp;&emsp;wechatOffiaccountUserId | 微信公众号用户ID | string                   |                          |
| &emsp;&emsp;&emsp;&emsp;wechatUnionId           | 微信通用用户ID   | string                   |                          |
| &emsp;&emsp;navigateFirstPage                   |                  | integer(int32)           |                          |
| &emsp;&emsp;navigateLastPage                    |                  | integer(int32)           |                          |
| &emsp;&emsp;navigatePages                       |                  | integer(int32)           |                          |
| &emsp;&emsp;navigatepageNums                    |                  | array                    | integer                  |
| &emsp;&emsp;nextPage                            |                  | integer(int32)           |                          |
| &emsp;&emsp;pageNum                             |                  | integer(int32)           |                          |
| &emsp;&emsp;pageSize                            |                  | integer(int32)           |                          |
| &emsp;&emsp;pages                               |                  | integer(int32)           |                          |
| &emsp;&emsp;prePage                             |                  | integer(int32)           |                          |
| &emsp;&emsp;size                                |                  | integer(int32)           |                          |
| &emsp;&emsp;startRow                            |                  | integer(int64)           |                          |
| &emsp;&emsp;total                               |                  | integer(int64)           |                          |
| extMsg                                          | 扩展消息         | string                   |                          |
| msg                                             | 响应消息         | string                   |                          |


**响应示例**:
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
