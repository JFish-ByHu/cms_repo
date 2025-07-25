# 获取用户接收推送的消息类型


**接口地址**:`/v2/mobilepush/enduserapi/getMsgPushSetting`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`

**接口描述**:<p>设置用户接收推送的消息类型</p>


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明             | schema                                   |
| ------ | ---------------- | ---------------------------------------- |
| 200    | 设置消息类型成功 | 返回注册码响应数据«MsgUserTypeDataModel» |
| 5032   | token 验证失败   |                                          |
| 5106   | 请输入token      |                                          |
| 5515   | 请输入消息ID     |                                          |


**响应参数**:


| 参数名称                      | 参数说明         | 类型                 | schema               |
| ----------------------------- | ---------------- | -------------------- | -------------------- |
| code                          | 响应状态码       | integer(int32)       | integer(int32)       |
| data                          | 响应数据         | MsgUserTypeDataModel | MsgUserTypeDataModel |
| &emsp;&emsp;addTime           | 配置时间         | integer(int64)       |                      |
| &emsp;&emsp;msgPushSetting    | 用户接收消息类型 | string               |                      |
| &emsp;&emsp;msgUserTypeDataId | 用户消息配置ID   | string               |                      |
| &emsp;&emsp;recvMsgPushType   | 用户接收消息类型 | string               |                      |
| &emsp;&emsp;uid               | 用户UID          | string               |                      |
| extMsg                        | 扩展消息         | string               |                      |
| msg                           | 响应消息         | string               |                      |


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"addTime": 0,
		"msgPushSetting": "",
		"msgUserTypeDataId": "",
		"recvMsgPushType": "",
		"uid": ""
	},
	"extMsg": "",
	"msg": ""
}
```
