# Query Automation List


**API Address**:`/v2/cep/enduserapi/automation/list`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Query automation list`

**Request Parameters**:


| Parameter Name | Description                                       | Request Type | Required | Data Type       | Schema |
| -------------- | ------------------------------------------------- | ------------ | -------- | --------------- | ------ |
| page           | Current page number                               | query        | true     | integer(int32)  |        |
| pageSize       | Number of items per page                          | query        | true     | integer(int32)  |        |
| Authorization  |                                                   | header       | false    | string          |        |
| fid            | Home ID, required if home mode is enabled, otherwise not required | query   | false    | string          |        |


**Response Status**:


| Status Code | Description  | Schema                                |
| ----------- | ------------ | ------------------------------------- |
| 200         | OK           | ApiResult«PageInfo«Automation List»» |
| 401         | Unauthorized |                                       |
| 403         | Forbidden    |                                       |
| 404         | Not Found    |                                       |


**Response Parameters**:


| Parameter Name                           | Description                                           | Type                   | Schema                 |
| ---------------------------------------- | ----------------------------------------------------- | ---------------------- | ---------------------- |
| code                                     |                                                       | integer(int32)         | integer(int32)         |
| data                                     |                                                       | PageInfo«Automation List» | PageInfo«Automation List» |
| &emsp;&emsp;endRow                       |                                                       | integer(int64)         |                        |
| &emsp;&emsp;hasNextPage                  |                                                       | boolean                |                        |
| &emsp;&emsp;hasPreviousPage              |                                                       | boolean                |                        |
| &emsp;&emsp;isFirstPage                  |                                                       | boolean                |                        |
| &emsp;&emsp;isLastPage                   |                                                       | boolean                |                        |
| &emsp;&emsp;list                         |                                                       | array                  | Automation List        |
| &emsp;&emsp;&emsp;&emsp;actionList       | Execution actions                                     | array                  | ActionBase             |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;icon | Device/Group/Scene icon                               | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name | Device/Group/Scene name                               | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sort | Condition order, starts from 1 and increments         | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type | Execution action type, 1: Delay, 2: Device, 3: Group, 4: Scene | integer         |                        |
| &emsp;&emsp;&emsp;&emsp;automationId     | Automation ID                                         | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;conditionType    | Trigger type. 1: Meet any, 2: Meet all                | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;name             | Automation name                                       | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;nameType         | Automation name generation method. 1: System generated, 2: User defined | integer    |                        |
| &emsp;&emsp;&emsp;&emsp;status           | Status. true: Enabled, false: Disabled                | boolean                |                        |
| &emsp;&emsp;&emsp;&emsp;triggerList      | Trigger conditions                                    | array                  | ConditionBase          |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;icon | Device icon                                           | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name | Device name                                           | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sort | Condition order, starts from 1 and increments         | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type | Trigger condition type, 0: Device, 1: Timer           | integer                |                        |
| &emsp;&emsp;navigateFirstPage            |                                                       | integer(int32)         |                        |
| &emsp;&emsp;navigateLastPage             |                                                       | integer(int32)         |                        |
| &emsp;&emsp;navigatePages                |                                                       | integer(int32)         |                        |
| &emsp;&emsp;navigatepageNums             |                                                       | array                  | integer                |
| &emsp;&emsp;nextPage                     |                                                       | integer(int32)         |                        |
| &emsp;&emsp;pageNum                      |                                                       | integer(int32)         |                        |
| &emsp;&emsp;pageSize                     |                                                       | integer(int32)         |                        |
| &emsp;&emsp;pages                        |                                                       | integer(int32)         |                        |
| &emsp;&emsp;prePage                      |                                                       | integer(int32)         |                        |
| &emsp;&emsp;size                         |                                                       | integer(int32)         |                        |
| &emsp;&emsp;startRow                     |                                                       | integer(int64)         |                        |
| &emsp;&emsp;total                        |                                                       | integer(int64)         |                        |
| extMsg                                   |                                                       | string                 |                        |
| msg                                      |                                                       | string                 |                        |


**Response Example**:
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