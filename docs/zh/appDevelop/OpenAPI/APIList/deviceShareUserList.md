# 分享人查询设备的被分享人列表


**接口地址**:`/v2/binding/enduserapi/deviceShareUserList`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>分享人查询设备的被分享人列表</p>


**请求参数**:


| 参数名称 | 参数说明    | 请求类型 | 是否必须 | 数据类型 | schema |
| -------- | ----------- | -------- | -------- | -------- | ------ |
| dk       | Device Key  | query    | true     | string   |        |
| pk       | Product Key | query    | true     | string   |        |


**响应状态**:


| 状态码 | 说明                             | schema                                 |
| ------ | -------------------------------- | -------------------------------------- |
| 200    | 分享人查询设备的被分享人列表成功 | 返回注册码响应数据«List«设备分享用户»» |
| 5032   | token 验证失败                   |                                        |
| 5066   | 请输入Product Key                |                                        |
| 5067   | 请输入Device Key                 |                                        |
| 5106   | 请输入token                      |                                        |
| 5141   | 没有权限查询此设备               |                                        |


**响应参数**:


| 参数名称                                        | 参数说明                 | 类型               | schema             |
| ----------------------------------------------- | ------------------------ | ------------------ | ------------------ |
| code                                            | 响应状态码               | integer(int32)     | integer(int32)     |
| data                                            | 响应数据                 | array              | 设备分享用户       |
| &emsp;&emsp;shareInfo                           | 分享信息                 | BidShareModelExtV1 | BidShareModelExtV1 |
| &emsp;&emsp;&emsp;&emsp;acceptTime              | 接受分享时间             | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;acceptTimeTs            | 接受时间戳               | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;acceptingExpireAt       | 接受分享过期时间         | string             |                    |
| &emsp;&emsp;&emsp;&emsp;acceptingExpireAtTs     | 接受分享过期时间戳       | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;authKey                 | authKey                  | string             |                    |
| &emsp;&emsp;&emsp;&emsp;coverMark               | 覆盖标志                 | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;deleteTime              | 接受分享时间             | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;deleteTimeTs            | 取消时间戳               | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;deviceName              | 设备名称                 | string             |                    |
| &emsp;&emsp;&emsp;&emsp;dk                      | dk                       | string             |                    |
| &emsp;&emsp;&emsp;&emsp;failureCause            | 失效原因                 | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;fid                     | 家庭ID                   | string             |                    |
| &emsp;&emsp;&emsp;&emsp;ownerUid                | 分享人ID                 | string             |                    |
| &emsp;&emsp;&emsp;&emsp;pk                      | pk                       | string             |                    |
| &emsp;&emsp;&emsp;&emsp;shareCode               | 分享码                   | string             |                    |
| &emsp;&emsp;&emsp;&emsp;shareId                 | 分享id                   | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;shareStatus             | 分享状态                 | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;shareTime               | 分享时间                 | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;shareTimeTs             | 分享时间戳               | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;shareUid                | 接收分享人ID             | string             |                    |
| &emsp;&emsp;&emsp;&emsp;sharingExpireAt         | 设备使用到期时间         | string             |                    |
| &emsp;&emsp;&emsp;&emsp;sharingExpireAtTs       | 设备使用到期时间戳       | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;updateTime              | 修改时间                 | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;updateTimeTs            | 修改时间戳               | integer            |                    |
| &emsp;&emsp;userInfo                            | 用户信息                 | 用户信息           | 用户信息           |
| &emsp;&emsp;&emsp;&emsp;address                 | 地址                     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;alipayUserId            | 支付宝用户ID             | string             |                    |
| &emsp;&emsp;&emsp;&emsp;city                    | 城市                     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;email                   | email                    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;facebookUserId          | Facebook用户ID           | string             |                    |
| &emsp;&emsp;&emsp;&emsp;headimg                 | 头像                     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;lang                    | 语言                     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;lastLoginTime           | 最后登录时间             | string             |                    |
| &emsp;&emsp;&emsp;&emsp;lastLoginTimeTs         |                          | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;nationality             | 国家                     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;nikeName                | 昵称                     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;phone                   | 手机号码                 | string             |                    |
| &emsp;&emsp;&emsp;&emsp;province                | 省份                     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;qqUserId                | QQ用户ID                 | string             |                    |
| &emsp;&emsp;&emsp;&emsp;registerTime            | 注册时间                 | string             |                    |
| &emsp;&emsp;&emsp;&emsp;registerTimeTs          |                          | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;remark                  | 备注                     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;sex                     | 性别                     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;signature               | 个性签名                 | string             |                    |
| &emsp;&emsp;&emsp;&emsp;status                  | 账号状态：0 禁用  1 正常 | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;timezone                | 时区                     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;twitterUserId           | Twitter用户ID            | string             |                    |
| &emsp;&emsp;&emsp;&emsp;uid                     | 用户ID                   | string             |                    |
| &emsp;&emsp;&emsp;&emsp;userDomain              | 用户域                   | string             |                    |
| &emsp;&emsp;&emsp;&emsp;wechatMiniprogramUserId | 微信小程序用户ID         | string             |                    |
| &emsp;&emsp;&emsp;&emsp;wechatOffiaccountUserId | 微信公众号用户ID         | string             |                    |
| &emsp;&emsp;&emsp;&emsp;wechatUnionId           | 微信通用用户ID           | string             |                    |
| extMsg                                          | 扩展消息                 | string             |                    |
| msg                                             | 响应消息                 | string             |                    |


**响应示例**:
```javascript
{
	"code": 0,
	"data": [
		{
			"shareInfo": {
				"acceptTime": 0,
				"acceptTimeTs": 0,
				"acceptingExpireAt": "",
				"acceptingExpireAtTs": 0,
				"authKey": "",
				"coverMark": 0,
				"deleteTime": 0,
				"deleteTimeTs": 0,
				"deviceName": "",
				"dk": "",
				"failureCause": 0,
				"fid": "",
				"ownerUid": "",
				"pk": "",
				"shareCode": "",
				"shareId": 0,
				"shareStatus": 0,
				"shareTime": 0,
				"shareTimeTs": 0,
				"shareUid": "",
				"sharingExpireAt": "",
				"sharingExpireAtTs": 0,
				"updateTime": 0,
				"updateTimeTs": 0
			},
			"userInfo": {
				"address": "",
				"alipayUserId": "",
				"city": "",
				"email": "",
				"facebookUserId": "",
				"headimg": "",
				"lang": "",
				"lastLoginTime": "",
				"lastLoginTimeTs": 0,
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
		}
	],
	"extMsg": "",
	"msg": ""
}
```
