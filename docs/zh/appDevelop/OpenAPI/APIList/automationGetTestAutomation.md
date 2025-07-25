# 查询自动化测试结果


**接口地址**:`/v2/cep/enduserapi/automation/getTestAutomation`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询自动化测试结果</p>


**请求参数**:


| 参数名称      | 参数说明   | 请求类型 | 是否必须 | 数据类型       | schema |
| ------------- | ---------- | -------- | -------- | -------------- | ------ |
| testResultId  | 测试结果ID | query    | true     | integer(int64) |        |
| Authorization |            | header   | false    | string         |        |


**响应状态**:


| 状态码 | 说明         | schema                    |
| ------ | ------------ | ------------------------- |
| 200    | OK           | ApiResult«测试自动化结果» |
| 401    | Unauthorized |                           |
| 403    | Forbidden    |                           |
| 404    | Not Found    |                           |


**响应参数**:


| 参数名称                                     | 参数说明                                                     | 类型           | schema         |
| -------------------------------------------- | ------------------------------------------------------------ | -------------- | -------------- |
| code                                         |                                                              | integer(int32) | integer(int32) |
| data                                         |                                                              | 测试自动化结果 | 测试自动化结果 |
| &emsp;&emsp;failActionList                   | 失败详情                                                     | array          | FailDetail     |
| &emsp;&emsp;&emsp;&emsp;failMsg              |                                                              | string         |                |
| &emsp;&emsp;&emsp;&emsp;icon                 |                                                              | string         |                |
| &emsp;&emsp;&emsp;&emsp;name                 |                                                              | string         |                |
| &emsp;&emsp;&emsp;&emsp;property             |                                                              | 物模型属性     | 物模型属性     |
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
| &emsp;&emsp;failCount                        | 失败数量                                                     | AtomicInteger  | AtomicInteger  |
| &emsp;&emsp;&emsp;&emsp;andDecrement         |                                                              | integer        |                |
| &emsp;&emsp;&emsp;&emsp;andIncrement         |                                                              | integer        |                |
| &emsp;&emsp;overallFailMsg                   | 失败原因                                                     | string         |                |
| &emsp;&emsp;result                           | 0：成功，1：失败，2：部分成功                                | integer(int32) |                |
| &emsp;&emsp;successCount                     | 成功数量                                                     | AtomicInteger  | AtomicInteger  |
| &emsp;&emsp;&emsp;&emsp;andDecrement         |                                                              | integer        |                |
| &emsp;&emsp;&emsp;&emsp;andIncrement         |                                                              | integer        |                |
| &emsp;&emsp;timeoutStatus                    | 是否超时                                                     | boolean        |                |
| extMsg                                       |                                                              | string         |                |
| msg                                          |                                                              | string         |                |


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"failActionList": [
			{
				"failMsg": "",
				"icon": "",
				"name": "",
				"property": {
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
				}
			}
		],
		"failCount": {
			"andDecrement": 0,
			"andIncrement": 0
		},
		"overallFailMsg": "",
		"result": 0,
		"successCount": {
			"andDecrement": 0,
			"andIncrement": 0
		},
		"timeoutStatus": true
	},
	"extMsg": "",
	"msg": ""
}
```
