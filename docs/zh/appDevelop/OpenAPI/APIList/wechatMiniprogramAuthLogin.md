# 微信小程序授权登录


**接口地址**:`/v2/enduser/enduserapi/wechatMiniprogramAuthLogin`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>微信小程序授权登录</p>


**请求参数**:


| 参数名称   | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型       | schema |
| ---------- | ------------------------------------------------------------ | -------- | -------- | -------------- | ------ |
| appId      | 小程序appId                                                  | query    | true     | string         |        |
| jsCode     | 登录时获取的code                                             | query    | true     | string         |        |
| signature  | 签名<br/>签名生成规则：SHA256(appId + jsCode+userDomainSecret) | query    | true     | string         |        |
| userDomain | 用户域                                                       | query    | true     | string         |        |
| mcc        | MCC                                                          | query    | false    | integer(int32) |        |


**响应状态**:


| 状态码 | 说明                        | schema                               |
| ------ | --------------------------- | ------------------------------------ |
| 200    | 登录成功，data 中返回 token | 返回注册码响应数据«登录返回的 token» |
| 5013   | 用户域格式不正确            |                                      |
| 5015   | 用户域不存在                |                                      |
| 5023   | 请输入用户域                |                                      |
| 5104   | 用户域已停用                |                                      |
| 5218   | 请输入appid                 |                                      |
| 5367   | 获取用户OpenID请求异常      |                                      |
| 5368   | 获取用户OpenID失败          |                                      |
| 5369   | 解析用户OpenID失败          |                                      |
| 5372   | 请输入jsCode                |                                      |
| 5373   | 企业未配置该小程序Secret    |                                      |
| 6084   | MCC不属于当前数据中心       |                                      |
| 6085   | 查询MCC的数据中心失败       |                                      |


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
