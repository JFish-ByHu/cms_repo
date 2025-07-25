# 执行场景


**接口地址**:`/v2/cep/enduserapi/sceneExecute`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>执行场景</p>

**请求参数**:


| 参数名称      | 参数说明                           | 请求类型 | 是否必须 | 数据类型 | schema |
| ------------- | ---------------------------------- | -------- | -------- | -------- | ------ |
| sceneId       | 场景ID                             | body     | true     | string   |        |
| Authorization |                                    | header   | false    | string   |        |
| fid           | 家庭ID，开启家居模式必填，否则不填 | body     | false    | string   |        |


**响应状态**:


| 状态码 | 说明         | schema                       |
| ------ | ------------ | ---------------------------- |
| 200    | OK           | ApiResult«ExecutionResultCO» |
| 201    | Created      |                              |
| 401    | Unauthorized |                              |
| 403    | Forbidden    |                              |
| 404    | Not Found    |                              |


**响应参数**:


| 参数名称                             | 参数说明                          | 类型              | schema            |
| ------------------------------------ | --------------------------------- | ----------------- | ----------------- |
| code                                 |                                   | integer(int32)    | integer(int32)    |
| data                                 |                                   | ExecutionResultCO | ExecutionResultCO |
| &emsp;&emsp;callType                 | 调用方式                          | string            |                   |
| &emsp;&emsp;executeResult            | 执行结果。成功：true，失败：false | boolean           |                   |
| &emsp;&emsp;executeTime              | 执行时间                          | integer(int64)    |                   |
| &emsp;&emsp;executionId              | 执行记录ID                        | integer(int64)    |                   |
| &emsp;&emsp;failActionList           | 失败原因                          | array             | ExecuteFailedCO   |
| &emsp;&emsp;&emsp;&emsp;deviceKey    |                                   | string            |                   |
| &emsp;&emsp;&emsp;&emsp;deviceName   |                                   | string            |                   |
| &emsp;&emsp;&emsp;&emsp;deviceType   |                                   | integer           |                   |
| &emsp;&emsp;&emsp;&emsp;logoImage    |                                   | string            |                   |
| &emsp;&emsp;&emsp;&emsp;productKey   |                                   | string            |                   |
| &emsp;&emsp;&emsp;&emsp;reason       |                                   | string            |                   |
| &emsp;&emsp;failCount                | 失败数量                          | AtomicInteger     | AtomicInteger     |
| &emsp;&emsp;&emsp;&emsp;andDecrement |                                   | integer           |                   |
| &emsp;&emsp;&emsp;&emsp;andIncrement |                                   | integer           |                   |
| &emsp;&emsp;successCount             | 成功数量                          | AtomicInteger     | AtomicInteger     |
| &emsp;&emsp;&emsp;&emsp;andDecrement |                                   | integer           |                   |
| &emsp;&emsp;&emsp;&emsp;andIncrement |                                   | integer           |                   |
| extMsg                               |                                   | string            |                   |
| msg                                  |                                   | string            |                   |


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"callType": "",
		"executeResult": true,
		"executeTime": 0,
		"executionId": 0,
		"failActionList": [
			{
				"deviceKey": "",
				"deviceName": "",
				"deviceType": 0,
				"logoImage": "",
				"productKey": "",
				"reason": ""
			}
		],
		"failCount": {
			"andDecrement": 0,
			"andIncrement": 0
		},
		"successCount": {
			"andDecrement": 0,
			"andIncrement": 0
		}
	},
	"extMsg": "",
	"msg": ""
}
```
