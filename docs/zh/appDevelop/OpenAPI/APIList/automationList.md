# 查询自动化列表


**接口地址**:`/v2/cep/enduserapi/automation/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询自动化列表</p>

**请求参数**:


| 参数名称      | 参数说明                           | 请求类型 | 是否必须 | 数据类型       | schema |
| ------------- | ---------------------------------- | -------- | -------- | -------------- | ------ |
| page          | 分页当前页码                       | query    | true     | integer(int32) |        |
| pageSize      | 分页每页条数                       | query    | true     | integer(int32) |        |
| Authorization |                                    | header   | false    | string         |        |
| fid           | 家庭ID，开启家居模式必填，否则不填 | query    | false    | string         |        |


**响应状态**:


| 状态码 | 说明         | schema                          |
| ------ | ------------ | ------------------------------- |
| 200    | OK           | ApiResult«PageInfo«自动化列表»» |
| 401    | Unauthorized |                                 |
| 403    | Forbidden    |                                 |
| 404    | Not Found    |                                 |


**响应参数**:


| 参数名称                                 | 参数说明                                         | 类型                 | schema               |
| ---------------------------------------- | ------------------------------------------------ | -------------------- | -------------------- |
| code                                     |                                                  | integer(int32)       | integer(int32)       |
| data                                     |                                                  | PageInfo«自动化列表» | PageInfo«自动化列表» |
| &emsp;&emsp;endRow                       |                                                  | integer(int64)       |                      |
| &emsp;&emsp;hasNextPage                  |                                                  | boolean              |                      |
| &emsp;&emsp;hasPreviousPage              |                                                  | boolean              |                      |
| &emsp;&emsp;isFirstPage                  |                                                  | boolean              |                      |
| &emsp;&emsp;isLastPage                   |                                                  | boolean              |                      |
| &emsp;&emsp;list                         |                                                  | array                | 自动化列表           |
| &emsp;&emsp;&emsp;&emsp;actionList       | 执行动作                                         | array                | ActionBase           |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;icon | 设备/群组/场景图标                               | string               |                      |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name | 设备/群组/场景名称                               | string               |                      |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sort | 条件顺序，从1开始递增                            | integer              |                      |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type | 执行动作类型，1：延时，2：设备，3：群组，4：场景 | integer              |                      |
| &emsp;&emsp;&emsp;&emsp;automationId     | 自动化ID                                         | integer              |                      |
| &emsp;&emsp;&emsp;&emsp;conditionType    | 触发类型。1: 满足任意，2: 满足所有               | integer              |                      |
| &emsp;&emsp;&emsp;&emsp;name             | 自动化名称                                       | string               |                      |
| &emsp;&emsp;&emsp;&emsp;nameType         | 自动化名称生成方式。1：系统生成，2：用户填写     | integer              |                      |
| &emsp;&emsp;&emsp;&emsp;status           | 启停状态。true：启用，false：停用                | boolean              |                      |
| &emsp;&emsp;&emsp;&emsp;triggerList      | 触发条件                                         | array                | ConditionBase        |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;icon | 设备图标                                         | string               |                      |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name | 设备名称                                         | string               |                      |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sort | 条件顺序，从1开始递增                            | integer              |                      |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type | 触发条件类型，0：设备，1：定时                   | integer              |                      |
| &emsp;&emsp;navigateFirstPage            |                                                  | integer(int32)       |                      |
| &emsp;&emsp;navigateLastPage             |                                                  | integer(int32)       |                      |
| &emsp;&emsp;navigatePages                |                                                  | integer(int32)       |                      |
| &emsp;&emsp;navigatepageNums             |                                                  | array                | integer              |
| &emsp;&emsp;nextPage                     |                                                  | integer(int32)       |                      |
| &emsp;&emsp;pageNum                      |                                                  | integer(int32)       |                      |
| &emsp;&emsp;pageSize                     |                                                  | integer(int32)       |                      |
| &emsp;&emsp;pages                        |                                                  | integer(int32)       |                      |
| &emsp;&emsp;prePage                      |                                                  | integer(int32)       |                      |
| &emsp;&emsp;size                         |                                                  | integer(int32)       |                      |
| &emsp;&emsp;startRow                     |                                                  | integer(int64)       |                      |
| &emsp;&emsp;total                        |                                                  | integer(int64)       |                      |
| extMsg                                   |                                                  | string               |                      |
| msg                                      |                                                  | string               |                      |


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"endRow": 0,
		"hasNextPage": true,
		"hasPreviousPage": true,
		"isFirstPage": true,
		"isLastPage": true,
		"list": [
			{
				"actionList": [
					{
						"icon": "",
						"name": "",
						"sort": 0,
						"type": 0
					}
				],
				"automationId": 0,
				"conditionType": 0,
				"name": "",
				"nameType": 0,
				"status": true,
				"triggerList": [
					{
						"icon": "",
						"name": "",
						"sort": 0,
						"type": 0
					}
				]
			}
		],
		"navigateFirstPage": 0,
		"navigateLastPage": 0,
		"navigatePages": 0,
		"navigatepageNums": [],
		"nextPage": 0,
		"pageNum": 0,
		"pageSize": 0,
		"pages": 0,
		"prePage": 0,
		"size": 0,
		"startRow": 0,
		"total": 0
	},
	"extMsg": "",
	"msg": ""
}
```
