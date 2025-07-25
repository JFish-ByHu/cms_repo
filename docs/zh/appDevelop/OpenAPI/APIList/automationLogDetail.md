# 查询自动化日志详情


**接口地址**:`/v2/cep/enduserapi/automation/log/detail`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询自动化日志详情</p>


**请求参数**:


| 参数名称      | 参数说明                           | 请求类型 | 是否必须 | 数据类型       | schema |
| ------------- | ---------------------------------- | -------- | -------- | -------------- | ------ |
| logId         | 执行日志ID                         | query    | true     | integer(int64) |        |
| Authorization |                                    | header   | false    | string         |        |
| fid           | 家庭ID，开启家居模式必填，否则不填 | query    | false    | string         |        |


**响应状态**:


| 状态码 | 说明         | schema                |
| ------ | ------------ | --------------------- |
| 200    | OK           | ApiResult«自动化日志» |
| 401    | Unauthorized |                       |
| 403    | Forbidden    |                       |
| 404    | Not Found    |                       |


**响应参数**:


| 参数名称                                     | 参数说明                                                     | 类型           | schema         |
| -------------------------------------------- | ------------------------------------------------------------ | -------------- | -------------- |
| code                                         |                                                              | integer(int32) | integer(int32) |
| data                                         |                                                              | 自动化日志     | 自动化日志     |
| &emsp;&emsp;automationId                     | 自动化ID                                                     | integer(int64) |                |
| &emsp;&emsp;logDetails                       | 执行日志详情                                                 | array          | 自动化日志详情 |
| &emsp;&emsp;&emsp;&emsp;action               | 执行动作                                                     | 物模型属性     | 物模型属性     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code     | 物模型标识符                                                 | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;compare  | 比较符。>                                                    | >=             | <              |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataType | 数据类型。支持：BOOL、ENUM、INT、FLOAT、DOUBLE,可用值:BOOL,DOUBLE,ENUM,FLOAT,INT | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id       | 物模型功能ID                                                 | integer        |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name     | 物模型名称                                                   | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subName  |                                                              | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subType  |                                                              | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type     | 物模型类型                                                   | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unit     | 物模型单位                                                   | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value    | 物模型属性比较值                                             | object         |                |
| &emsp;&emsp;&emsp;&emsp;actionIcon           | 执行动作图标，设备/群组/群组                                 | string         |                |
| &emsp;&emsp;&emsp;&emsp;actionName           | 执行动作名称，设备名称/场景名称/群组ID                       | string         |                |
| &emsp;&emsp;&emsp;&emsp;executeTime          | 执行时间                                                     | integer        |                |
| &emsp;&emsp;&emsp;&emsp;failMsg              | 执行失败原因                                                 | string         |                |
| &emsp;&emsp;&emsp;&emsp;result               | 执行结果，1：成功，0：失败                                   | boolean        |                |
| &emsp;&emsp;&emsp;&emsp;type                 | 执行动作类型。2：设备，3：群组，4：场景                      | integer        |                |
| &emsp;&emsp;logId                            | 执行日志ID                                                   | integer(int64) |                |
| &emsp;&emsp;name                             | 自动化名称                                                   | string         |                |
| &emsp;&emsp;result                           | 执行结果。0：成功，1：失败，2：部分成功                      | integer(int32) |                |
| &emsp;&emsp;time                             | 执行时间                                                     | integer(int64) |                |
| extMsg                                       |                                                              | string         |                |
| msg                                          |                                                              | string         |                |


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"automationId": 0,
		"logDetails": [
			{
				"action": {
					"code": "",
					"compare": "",
					"dataType": "",
					"id": 0,
					"name": "",
					"subName": "",
					"subType": "",
					"type": "",
					"unit": "",
					"value": {}
				},
				"actionIcon": "",
				"actionName": "",
				"executeTime": 0,
				"failMsg": "",
				"result": true,
				"type": 0
			}
		],
		"logId": 0,
		"name": "",
		"result": 0,
		"time": 0
	},
	"extMsg": "",
	"msg": ""
}
```
