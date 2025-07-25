# 查询用户信息


**接口地址**:`/v2/enduser/enduserapi/userInfo`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询用户信息</p>


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明                                  | schema                       |
| ------ | ------------------------------------- | ---------------------------- |
| 200    | 查询用户信息成功，data 中返回用户信息 | 返回注册码响应数据«用户信息» |
| 5032   | token 验证失败                        |                              |
| 5033   | 用户不存在                            |                              |
| 5065   | 请输入用户ID                          |                              |
| 5106   | 请输入token                           |                              |


**响应参数**:


| 参数名称                            | 参数说明                 | 类型           | schema         |
| ----------------------------------- | ------------------------ | -------------- | -------------- |
| code                                | 响应状态码               | integer(int32) | integer(int32) |
| data                                | 响应数据                 | 用户信息       | 用户信息       |
| &emsp;&emsp;address                 | 地址                     | string         |                |
| &emsp;&emsp;alipayUserId            | 支付宝用户ID             | string         |                |
| &emsp;&emsp;appleUserId             | 苹果用户ID               | string         |                |
| &emsp;&emsp;city                    | 城市                     | string         |                |
| &emsp;&emsp;email                   | email                    | string         |                |
| &emsp;&emsp;facebookUserId          | Facebook用户ID           | string         |                |
| &emsp;&emsp;headimg                 | 头像                     | string         |                |
| &emsp;&emsp;lang                    | 语言                     | string         |                |
| &emsp;&emsp;lastLoginTime           | 最后登录时间             | integer(int64) |                |
| &emsp;&emsp;lastLoginTimeTs         |                          | integer(int64) |                |
| &emsp;&emsp;logonMode               | 注册方式                 | integer(int32) |                |
| &emsp;&emsp;nationality             | 国家                     | string         |                |
| &emsp;&emsp;nikeName                | 昵称                     | string         |                |
| &emsp;&emsp;phone                   | 手机号码                 | string         |                |
| &emsp;&emsp;province                | 省份                     | string         |                |
| &emsp;&emsp;qqUserId                | QQ用户ID                 | string         |                |
| &emsp;&emsp;registerTime            | 注册时间                 | integer(int64) |                |
| &emsp;&emsp;registerTimeTs          |                          | integer(int64) |                |
| &emsp;&emsp;remark                  | 备注                     | string         |                |
| &emsp;&emsp;sex                     | 性别                     | string         |                |
| &emsp;&emsp;signature               | 个性签名                 | string         |                |
| &emsp;&emsp;status                  | 账号状态：0 禁用  1 正常 | integer(int32) |                |
| &emsp;&emsp;timezone                | 时区                     | string         |                |
| &emsp;&emsp;twitterUserId           | Twitter用户ID            | string         |                |
| &emsp;&emsp;uid                     | 用户ID                   | string         |                |
| &emsp;&emsp;wechatMiniprogramUserId | 微信小程序用户ID         | string         |                |
| &emsp;&emsp;wechatOffiaccountUserId | 微信公众号用户ID         | string         |                |
| &emsp;&emsp;wechatUnionId           | 微信通用用户ID           | string         |                |
| extMsg                              | 扩展消息                 | string         |                |
| msg                                 | 响应消息                 | string         |                |


**响应示例**:
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
		"wechatMiniprogramUserId": "",
		"wechatOffiaccountUserId": "",
		"wechatUnionId": ""
	},
	"extMsg": "",
	"msg": ""
}
```
