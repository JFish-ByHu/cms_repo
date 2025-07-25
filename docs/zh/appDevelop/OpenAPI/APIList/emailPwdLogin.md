# 邮箱密码登录


**接口地址**:`/v2/enduser/enduserapi/emailPwdLogin`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>邮箱密码登录，返回 token</p>


**请求参数**:


| 参数名称   | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型       | schema |
| ---------- | ------------------------------------------------------------ | -------- | -------- | -------------- | ------ |
| email      | 邮箱                                                         | query    | true     | string         |        |
| pwd        | 密码                                                         | query    | true     | string         |        |
| signature  | 签名<br/>签名生成规则：SHA256(email + pwd + random+userDomainSecret) | query    | true     | string         |        |
| userDomain | 用户域                                                       | query    | true     | string         |        |
| mcc        | MCC                                                          | query    | false    | integer(int32) |        |
| random     | 用来对密码加密和解密的随机数。<br/><b>密码加密解密规则：</b><br/>AES128(pwd,MD5(random),初始向量)。<br/><b>AES 加密约定：</b><br/>加密模式：CBC<br/>填充：PKCS5Padding<br/>数据块位数：128位<br/>内容：pwd<br/>AES秘钥：MD5(random) ，MD5(random) 生成 16B 大写字符串（截取 32 长度 MD5 字符串的 8-24 部分）<br/>初始向量：将生成的AES密码（MD5(random)）拆分成长度为 8B 的两组字节数据，前后对调后加在一起生成新的 16B 字节数据作为偏移量<br/>输出：BASE64<br/>字符集：utf-8<br/><b>示例：</b><br/>pwd：china1234<br/>random：j1acpdj2bmtqZXVb<br/>AES key：89A049614445CCA8<br/>AES iv：4445CCA889A04961<br/>加密后：lkZMvj0KDSJXlp66jBieHA==<br/>解密后：china1234 | query    | false    | string         |        |


**响应状态**:


| 状态码 | 说明                                                         | schema                               |
| ------ | ------------------------------------------------------------ | ------------------------------------ |
| 200    | 登录成功，data 中返回 token                                  | 返回注册码响应数据«登录返回的 token» |
| 5013   | 用户域格式不正确                                             |                                      |
| 5015   | 用户域不存在                                                 |                                      |
| 5022   | 请输入密码                                                   |                                      |
| 5023   | 请输入用户域                                                 |                                      |
| 5026   | 请输入邮箱                                                   |                                      |
| 5031   | 邮箱未注册                                                   |                                      |
| 5040   | 邮箱格式不正确                                               |                                      |
| 5056   | 密码格式不正确，请输入 6-20 位字母、数字或特殊字符           |                                      |
| 5104   | 用户域已停用                                                 |                                      |
| 5147   | 账号被冻结，请20分钟后再登录                                 |                                      |
| 5325   | 由于您当前网络访问页面存在异常行为，可能存在安全风险，我们暂时阻止了您的本次访问，24小时将自动解除限制 |                                      |
| 5420   | 签名验证失败                                                 |                                      |
| 5550   | 请输入签名                                                   |                                      |
| 5583   | 邮箱或密码错误，您还有1次机会                                |                                      |
| 5584   | 邮箱或密码错误，您还有2次机会                                |                                      |
| 5585   | 邮箱或密码错误，您还有3次机会                                |                                      |
| 5586   | 邮箱或密码错误，您还有4次机会                                |                                      |
| 6084   | MCC不属于当前数据中心                                        |                                      |
| 6085   | 查询MCC的数据中心失败                                        |                                      |


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
