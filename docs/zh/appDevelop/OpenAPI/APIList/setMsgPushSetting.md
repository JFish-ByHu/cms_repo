# 设置用户接收推送的消息类型


**接口地址**:`/v2/mobilepush/enduserapi/setMsgPushSetting`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>设置用户接收推送的消息类型</p>


**请求参数**:


| 参数名称       | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型 | schema |
| -------------- | ------------------------------------------------------------ | -------- | -------- | -------- | ------ |
| msgPushSetting | {<br/>"deviceNotify":true,<br/>"smartNotify":true,<br/>"systemNotify":true,<br/>"device": {<br/>"app": true,<br/> "sms": true,<br/> "voice": true<br/> },<br/> "smart": {<br/> "app": true,<br/> "sms": true,<br/>"voice": true<br/> },<br/> "system": {<br/> "app": true,<br/> "sms": true,<br/> "voice": true<br/> }<br/>} | body     | true     | string   |        |


**响应状态**:


| 状态码 | 说明             | schema             |
| ------ | ---------------- | ------------------ |
| 200    | 设置消息类型成功 | 返回注册码响应数据 |
| 5032   | token 验证失败   |                    |
| 5106   | 请输入token      |                    |
| 5515   | 请输入消息ID     |                    |


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
