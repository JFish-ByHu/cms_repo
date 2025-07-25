# 本机号码一键登录


**接口地址**:`/v2/enduser/enduserapi/phoneAuthLogin`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>本机号码一键登录，如果登录号码未注册，则会自动注册后登陆，返回 token</p>


**请求参数**:


| 参数名称            | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型       | schema |
| ------------------- | ------------------------------------------------------------ | -------- | -------- | -------------- | ------ |
| appid               | 应用Id                                                       | query    | true     | string         |        |
| msgid               | 业务方生成唯一标识(标识请求的随机数即可(1-36位))             | query    | true     | string         |        |
| sign                | 加密后的sign<br/>sign生成规则： MD5(appId +version + msgId + systemtime + strictcheck + token + appsecret) | query    | true     | string         |        |
| strictcheck         | 暂时填写"0"，填写“1”时，将对服务器IP白名单进行强校验（后续将强制要求IP强校验） | query    | true     | string         |        |
| systemtime          | 请求消息发送的系统时间，精确到毫秒，共17位，格式：20121227180001165 | query    | true     | string         |        |
| token               | 业务凭证                                                     | query    | true     | string         |        |
| userDomain          | 用户域                                                       | query    | true     | string         |        |
| version             | 接口版本号                                                   | query    | true     | string         |        |
| encryptionalgorithm | 加密算法(MD5)                                                | query    | false    | string         |        |
| expandparams        | 扩展参数                                                     | query    | false    | string         |        |
| mcc                 | MCC                                                          | query    | false    | integer(int32) |        |


**响应状态**:


| 状态码 | 说明                           | schema                               |
| ------ | ------------------------------ | ------------------------------------ |
| 200    | 登录成功，data 中返回 token    | 返回注册码响应数据«登录返回的 token» |
| 5000   | 服务异常                       |                                      |
| 5013   | 用户域格式不正确               |                                      |
| 5015   | 用户域不存在                   |                                      |
| 5023   | 请输入用户域                   |                                      |
| 5104   | 用户域已停用                   |                                      |
| 5220   | 中国移动服务响应异常           |                                      |
| 5221   | 中国移动服务请求参数校验不通过 |                                      |
| 6084   | MCC不属于当前数据中心          |                                      |
| 6085   | 查询MCC的数据中心失败          |                                      |


**响应参数**:


| 参数名称                               | 参数说明                                                 | 类型             | schema           |
| -------------------------------------- | -------------------------------------------------------- | ---------------- | ---------------- |
| code                                   | 响应状态码                                               | integer(int32)   | integer(int32)   |
| data                                   | 响应数据                                                 | 登录返回的 token | 登录返回的 token |
| &emsp;&emsp;accessToken                | 接口访问 token                                           | token            | token            |
| &emsp;&emsp;&emsp;&emsp;expirationTime | 到期时间的时间戳，单位为秒。超过到期时间后，token 失效。 | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;token          | token                                                    | string           |                  |
| &emsp;&emsp;refreshToken               | 刷新 token                                               | token            | token            |
| &emsp;&emsp;&emsp;&emsp;expirationTime | 到期时间的时间戳，单位为秒。超过到期时间后，token 失效。 | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;token          | token                                                    | string           |                  |
| extMsg                                 | 扩展消息                                                 | string           |                  |
| msg                                    | 响应消息                                                 | string           |                  |


**响应示例**:
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
