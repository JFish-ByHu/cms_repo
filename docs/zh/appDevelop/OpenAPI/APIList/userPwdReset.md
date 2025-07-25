# 用户密码重置


**接口地址**:`/v2/enduser/enduserapi/userPwdReset`


**请求方式**:`PUT`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>通过手机号码或邮箱重置用户密码</p>


**请求参数**:


| 参数名称          | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型 | schema |
| ----------------- | ------------------------------------------------------------ | -------- | -------- | -------- | ------ |
| code              | 验证码                                                       | query    | true     | string   |        |
| userDomain        | 用户域                                                       | query    | true     | string   |        |
| email             | 邮箱，和 phone 二选一                                        | query    | false    | string   |        |
| internationalCode | 国际代码，配合手机号码使用，默认为国内                       | query    | false    | string   |        |
| phone             | 手机号码，和 email 二选一                                    | query    | false    | string   |        |
| pwd               | 用户重置的密码，如果不输入默认为 12345678                    | query    | false    | string   |        |
| random            | 用来对密码加密和解密的随机数。<br/><b>密码加密解密规则：</b><br/>AES128(pwd,MD5(random),初始向量)。<br/><b>AES 加密约定：</b><br/>加密模式：CBC<br/>填充：PKCS5Padding<br/>数据块位数：128位<br/>内容：pwd<br/>AES秘钥：MD5(random) ，MD5(random) 生成 16B 大写字符串（截取 32 长度 MD5 字符串的 8-24 部分）<br/>初始向量：将生成的AES密码（MD5(random)）拆分成长度为 8B 的两组字节数据，前后对调后加在一起生成新的 16B 字节数据作为偏移量<br/>输出：BASE64<br/>字符集：utf-8<br/><b>示例：</b><br/>pwd：china1234<br/>random：j1acpdj2bmtqZXVb<br/>AES key：89A049614445CCA8<br/>AES iv：4445CCA889A04961<br/>加密后：lkZMvj0KDSJXlp66jBieHA==<br/>解密后：china1234 | query    | false    | string   |        |


**响应状态**:


| 状态码 | 说明                                               | schema             |
| ------ | -------------------------------------------------- | ------------------ |
| 200    | 用户密码重置成功                                   | 返回注册码响应数据 |
| 5004   | 手机号未注册                                       |                    |
| 5013   | 用户域格式不正确                                   |                    |
| 5015   | 用户域不存在                                       |                    |
| 5019   | 手机号格式不正确                                   |                    |
| 5023   | 请输入用户域                                       |                    |
| 5031   | 邮箱未注册                                         |                    |
| 5037   | 短信验证码验证失败                                 |                    |
| 5044   | 请输入手机号或者邮箱                               |                    |
| 5056   | 密码格式不正确，请输入 6-20 位字母、数字或特殊字符 |                    |
| 5064   | 请输入验证码                                       |                    |
| 5104   | 用户域已停用                                       |                    |


**响应参数**:


| 参数名称 | 参数说明   | 类型           | schema         |
| -------- | ---------- | -------------- | -------------- |
| code     | 响应状态码 | integer(int32) | integer(int32) |
| data     | 响应数据   | object         |                |
| extMsg   | 扩展消息   | string         |                |
| msg      | 响应消息   | string         |                |


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"extMsg": "",
	"msg": ""
}
```
