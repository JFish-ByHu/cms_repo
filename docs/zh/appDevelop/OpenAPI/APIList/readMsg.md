# 阅读消息


**接口地址**:`/v2/mobilepush/enduserapi/readMsg`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>阅读消息</p>


**请求参数**:


| 参数名称           | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型       | schema |
| ------------------ | ------------------------------------------------------------ | -------- | -------- | -------------- | ------ |
| firstLabelList     | 一级标签列表，使用英文逗号分隔<br/>一级标签：1-系统  2-智能  3-设备 | query    | false    | string         |        |
| msgIdList          | 消息ID列表，使英文逗号分隔，不传会阅读所有消息               | query    | false    | string         |        |
| msgType            | 消息类型：1-设备通知  2-设备告警  3-设备故障  4-系统消息     | query    | false    | integer(int32) |        |
| secondaryLabelList | 二级标签列表，使用英文逗号分隔<br/>二级标签：1-隐私  2-服务  3-自动化  4-场景  5-设备通知  6-设备告警  7-设备故障  8-OTA | query    | false    | string         |        |


**响应状态**:


| 状态码 | 说明           | schema                       |
| ------ | -------------- | ---------------------------- |
| 200    | OK             | 返回注册码响应数据«阅读消息» |
| 5032   | token 验证失败 |                              |
| 5041   | 没有权限       |                              |
| 5106   | 请输入token    |                              |


**响应参数**:


| 参数名称                           | 参数说明     | 类型           | schema            |
| ---------------------------------- | ------------ | -------------- | ----------------- |
| code                               | 响应状态码   | integer(int32) | integer(int32)    |
| data                               | 响应数据     | 阅读消息       | 阅读消息          |
| &emsp;&emsp;failureList            | 失败列表     | array          | 消息失败返回列表  |
| &emsp;&emsp;&emsp;&emsp;failureMsg | 失败原因描述 | string         |                   |
| &emsp;&emsp;&emsp;&emsp;id         | 消息ID       | string         |                   |
| &emsp;&emsp;successList            | 成功列表     | array          | ReadMsgSuccessDto |
| &emsp;&emsp;&emsp;&emsp;id         | 消息ID       | string         |                   |
| extMsg                             | 扩展消息     | string         |                   |
| msg                                | 响应消息     | string         |                   |


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"failureList": [
			{
				"failureMsg": "",
				"id": ""
			}
		],
		"successList": [
			{
				"id": ""
			}
		]
	},
	"extMsg": "",
	"msg": ""
}
```
