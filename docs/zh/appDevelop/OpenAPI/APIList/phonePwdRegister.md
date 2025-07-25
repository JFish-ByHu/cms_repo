# 手机号密码注册

**接口地址**:`/v2/enduser/enduserapi/phonePwdRegister`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>手机号密码注册，返回用户ID</p>


**请求参数**:


| 参数名称          | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型       | schema |
| ----------------- | ------------------------------------------------------------ | -------- | -------- | -------------- | ------ |
| phone             | 手机号码                                                     | query    | true     | string         |        |
| pwd               | 密码                                                         | query    | true     | string         |        |
| smsCode           | 短信登录验证码（由短信服务提供发送短信验证码接口）           | query    | true     | string         |        |
| userDomain        | 用户域                                                       | query    | true     | string         |        |
| internationalCode | 国际代码，默认为国内                                         | query    | false    | string         |        |
| lang              | 语言                                                         | query    | false    | integer(int32) |        |
| mcc               | MCC                                                          | query    | false    | integer(int32) |        |
| nationality       | 国家                                                         | query    | false    | integer(int32) |        |
| random            | 用来对密码加密和解密的随机数。<br/><b>密码加密解密规则：</b><br/>AES128(pwd,MD5(random),初始向量)。<br/><b>AES 加密约定：</b><br/>加密模式：CBC<br/>填充：PKCS5Padding<br/>数据块位数：128位<br/>内容：pwd<br/>AES秘钥：MD5(random) ，MD5(random) 生成 16B 大写字符串（截取 32 长度 MD5 字符串的 8-24 部分）<br/>初始向量：将生成的AES密码（MD5(random)）拆分成长度为 8B 的两组字节数据，前后对调后加在一起生成新的 16B 字节数据作为偏移量<br/>输出：BASE64<br/>字符集：utf-8<br/><b>示例：</b><br/>pwd：china1234<br/>random：j1acpdj2bmtqZXVb<br/>AES key：89A049614445CCA8<br/>AES iv：4445CCA889A04961<br/>加密后：lkZMvj0KDSJXlp66jBieHA==<br/>解密后：china1234 | query    | false    | string         |        |
| timezone          | 时区                                                         | query    | false    | integer(int32) |        |


**响应状态**:


| 状态码 | 说明                                               | schema                     |
| ------ | -------------------------------------------------- | -------------------------- |
| 200    | 注册成功，data 中返回用户ID                        | 返回注册码响应数据«string» |
| 5002   | 手机号已注册                                       |                            |
| 5013   | 用户域格式不正确                                   |                            |
| 5015   | 用户域不存在                                       |                            |
| 5019   | 手机号格式不正确                                   |                            |
| 5021   | 请输入手机号码                                     |                            |
| 5022   | 请输入密码                                         |                            |
| 5023   | 请输入用户域                                       |                            |
| 5037   | 短信验证码验证失败                                 |                            |
| 5056   | 密码格式不正确，请输入 6-20 位字母、数字或特殊字符 |                            |
| 5064   | 请输入验证码                                       |                            |
| 5104   | 用户域已停用                                       |                            |
| 5171   | 时区参数值验证失败                                 |                            |
| 5172   | 国家参数值验证失败                                 |                            |
| 5173   | 语言参数值验证失败                                 |                            |
| 6084   | MCC不属于当前数据中心                              |                            |
| 6085   | 查询MCC的数据中心失败                              |                            |


**响应参数**:


| 参数名称 | 参数说明   | 类型           | schema         |
| -------- | ---------- | -------------- | -------------- |
| code     | 响应状态码 | integer(int32) | integer(int32) |
| data     | 响应数据   | string         |                |
| extMsg   | 扩展消息   | string         |                |
| msg      | 响应消息   | string         |                |


**响应示例**:
```javascript
{
	"code": 0,
	"data": "",
	"extMsg": "",
	"msg": ""
}
```
