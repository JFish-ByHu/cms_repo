# 查询场景日志列表


**接口地址**:`/v2/cep/enduserapi/selectSceneLogList`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>查询场景日志列表</p>


**请求参数**:


| 参数名称        | 参数说明                           | 请求类型 | 是否必须 | 数据类型 | schema |
| --------------- | ---------------------------------- | -------- | -------- | -------- | ------ |
| lastExecutionId | 最后一条执行记录ID                 | body     | true     | integer  |        |
| limit           | 每页数据条数                       | body     | true     | integer  |        |
| Authorization   |                                    | header   | false    | string   |        |
| fid             | 家庭ID，开启家居模式必填，否则不填 | body     | false    | string   |        |


**响应状态**:


| 状态码 | 说明         | schema                        |
| ------ | ------------ | ----------------------------- |
| 200    | OK           | ApiResult«List«场景日志详情»» |
| 201    | Created      |                               |
| 401    | Unauthorized |                               |
| 403    | Forbidden    |                               |
| 404    | Not Found    |                               |


**响应参数**:


| 参数名称                                                 | 参数说明                                    | 类型           | schema         |
| -------------------------------------------------------- | ------------------------------------------- | -------------- | -------------- |
| code                                                     |                                             | integer(int32) | integer(int32) |
| data                                                     |                                             | array          | 场景日志详情   |
| &emsp;&emsp;callType                                     | 调用方式                                    | string         |                |
| &emsp;&emsp;executionId                                  | 执行记录ID                                  | integer(int64) |                |
| &emsp;&emsp;executionList                                | 执行详情                                    | array          | 执行详情       |
| &emsp;&emsp;&emsp;&emsp;actionResultList                 | 执行动作详情                                | array          | 执行动作结果   |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;action               | 场景物模型                                  | ActionModel    | ActionModel    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code     | 物模型标识符                                | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataType | 物模型数据类型                              | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id       | 物模型功能ID                                | integer        |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name     | 物模型功能名称                              | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subName  |                                             | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subType  | 读写类型                                    | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type     | 物模型功能类型                              | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unit     | 物模型单位                                  | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value    | 物模型值                                    | object         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executionTime        | 执行时间                                    | integer        |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;reason               | 失败原因                                    | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;result               | 执行结果。成功：true，失败：false           | boolean        |                |
| &emsp;&emsp;&emsp;&emsp;deviceKey                        | 设备/群组ID                                 | string         |                |
| &emsp;&emsp;&emsp;&emsp;deviceName                       | 设备名称/群组名称                           | string         |                |
| &emsp;&emsp;&emsp;&emsp;deviceType                       | 设备类型，1：普通设备，2：群组设备          | integer        |                |
| &emsp;&emsp;&emsp;&emsp;executionResult                  | 执行动作结果，1：成功，2：失败，3：部分成功 | integer        |                |
| &emsp;&emsp;&emsp;&emsp;logoImage                        | 场景LOGO                                    | string         |                |
| &emsp;&emsp;&emsp;&emsp;productKey                       | 产品KEY                                     | string         |                |
| &emsp;&emsp;executionResult                              | 执行结果，1：成功，2：失败，3：部分成功）   | integer(int32) |                |
| &emsp;&emsp;executionTime                                | 执行时间                                    | integer(int64) |                |
| &emsp;&emsp;sceneIcon                                    | 场景图标                                    | string         |                |
| &emsp;&emsp;sceneId                                      | 场景ID                                      | string         |                |
| &emsp;&emsp;sceneName                                    | 场景名称                                    | string         |                |
| extMsg                                                   |                                             | string         |                |
| msg                                                      |                                             | string         |                |


**响应示例**:
```javascript
{
	"code": 0,
	"data": [
		{
			"callType": "",
			"executionId": 0,
			"executionList": [
				{
					"actionResultList": [
						{
							"action": {
								"code": "",
								"dataType": "",
								"id": 0,
								"name": "",
								"subName": "",
								"subType": "",
								"type": "",
								"unit": "",
								"value": {}
							},
							"executionTime": 0,
							"reason": "",
							"result": true
						}
					],
					"deviceKey": "",
					"deviceName": "",
					"deviceType": 0,
					"executionResult": 0,
					"logoImage": "",
					"productKey": ""
				}
			],
			"executionResult": 0,
			"executionTime": 0,
			"sceneIcon": "",
			"sceneId": "",
			"sceneName": ""
		}
	],
	"extMsg": "",
	"msg": ""
}
```
