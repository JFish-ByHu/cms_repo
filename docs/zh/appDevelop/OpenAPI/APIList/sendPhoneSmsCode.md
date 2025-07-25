# 发送手机短信验证码


**接口地址**:`/v2/sms/enduserapi/v2/sendPhoneSmsCode`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>发送手机短信验证码，5分钟内最后一次发送的没有被使用的短信验证码有效</p>


**请求参数**:


| 参数名称          | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型       | schema |
| ----------------- | ------------------------------------------------------------ | -------- | -------- | -------------- | ------ |
| codeType          | 短信类型（1-密码重置 2-登录 3-注册 4-注销 5-添加推送人）     | query    | true     | integer(int32) |        |
| internationalCode | 国际代码                                                     | query    | true     | string         |        |
| phone             | 手机号码                                                     | query    | true     | string         |        |
| random            | 随机数，字符串长度固定为 16                                  | query    | true     | string         |        |
| signature         | 签名<br/>生成规则：SHA256(phone + codeType + random + ts + userDomainSecret)<br/>经过SHA256编码后的数据使用HEX_ENCODE格式。<br/>示例：<br/>phone：13800138000<br/>codeType：3<br/>random：76a6L647F02CAoN9<br/>ts：1744773894369<br/>userDomainSecret：57Fk69oYgbs2aWWN362NtZwYB2RqKNqQ7yZESnF5VM33<br/>签名格式：<br/>SHA256(13800138000376a6L647F02CAoN9174477389436957Fk69oYgbs2aWWN362NtZwYB2RqKNqQ7yZESnF5VM33)<br/>计算后得出签名：<br/>e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855 | query    | true     | string         |        |
| ts                | 当前毫秒时间戳，与服务器时间不能超过 10 分钟                 | query    | true     | integer(int64) |        |
| userDomain        | 用户域                                                       | query    | true     | string         |        |


**响应状态**:


| 状态码 | 说明                                 | schema             |
| ------ | ------------------------------------ | ------------------ |
| 200    | 发送手机短信验证码成功               | 返回注册码响应数据 |
| 5019   | 手机号格式不正确                     |                    |
| 5021   | 请输入手机号码                       |                    |
| 5023   | 请输入用户域                         |                    |
| 5058   | 短信发送超出频率                     |                    |
| 5059   | 短信发送异常                         |                    |
| 5116   | 请输入国际代码                       |                    |
| 5117   | 请输入企业短信签名ID                 |                    |
| 5118   | 请输入企业短信模板ID                 |                    |
| 5122   | 没有权限使用此企业短信签名ID         |                    |
| 5123   | 企业短信签名ID已停用                 |                    |
| 5124   | 没有权限使用此企业短信模板ID         |                    |
| 5125   | 企业短信模板ID已停用                 |                    |
| 5126   | 短信签名和短信模板不在同一短信账号下 |                    |
| 5128   | 企业短信账号已停用                   |                    |
| 5188   | 企业短信账号不存在                   |                    |
| 5202   | 企业短信签名不存在                   |                    |
| 5209   | 企业短信模板不存在                   |                    |
| 5216   | 签名ID和模板ID的类型请保持一致       |                    |


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
