# 批量删除消息


**接口地址**:`/v2/mobilepush/enduserapi/batchDeleteMsg`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`

**接口描述**:<p>批量删除消息</p>


**请求参数**:


| 参数名称  | 参数说明                              | 请求类型 | 是否必须 | 数据类型 | schema |
| --------- | ------------------------------------- | -------- | -------- | -------- | ------ |
| msgIdList | 消息ID列表,多个消息ID请用英文逗号分隔 | query    | true     | string   |        |


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
