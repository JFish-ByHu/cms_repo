# 刷新token


**接口地址**:`/v2/enduser/enduserapi/refreshToken`


**请求方式**:`PUT`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>刷新 token，刷新成功后，token 的有效时间重置为 2 小时</p>


**请求参数**:


| 参数名称     | 参数说明   | 请求类型 | 是否必须 | 数据类型 | schema |
| ------------ | ---------- | -------- | -------- | -------- | ------ |
| refreshToken | 刷新 token | query    | true     | string   |        |


**响应状态**:


| 状态码 | 说明            | schema                               |
| ------ | --------------- | ------------------------------------ |
| 200    | 刷新 token 成功 | 返回注册码响应数据«登录返回的 token» |


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
