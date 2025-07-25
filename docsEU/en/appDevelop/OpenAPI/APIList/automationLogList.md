# Query Automation Log List


**API Address**:`/v2/cep/enduserapi/automation/log/list`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Query automation log list`


**Request Parameters**:


| Parameter Name | Description                                       | Request Type | Required | Data Type       | Schema |
| -------------- | ------------------------------------------------- | ------------ | -------- | --------------- | ------ |
| Authorization  |                                                   | header       | false    | string          |        |
| fid            | Home ID, required if home mode is enabled, otherwise not required | query   | false    | string          |        |
| lastLogId      | Last execution log ID for pagination              | query        | false    | integer(int64)  |        |
| limit          | Number of items per page                          | query        | false    | integer(int32)  |        |


**Response Status**:


| Status Code | Description  | Schema                            |
| ----------- | ------------ | --------------------------------- |
| 200         | OK           | ApiResult«List«Automation Log»»   |
| 401         | Unauthorized |                                   |
| 403         | Forbidden    |                                   |
| 404         | Not Found    |                                   |


**Response Parameters**:


| Parameter Name                           | Description                                               | Type           | Schema               |
| ---------------------------------------- | --------------------------------------------------------- | -------------- | -------------------- |
| code                                     |                                                           | integer(int32) | integer(int32)       |
| data                                     |                                                           | array          | Automation Log       |
| &emsp;&emsp;automationId                 | Automation ID                                             | integer(int64) |                      |
| &emsp;&emsp;logDetails                   | Execution log details                                     | array          | Automation Log Detail |
| &emsp;&emsp;&emsp;&emsp;action           | Execution action                                          | Thing Model Property | Thing Model Property |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code | Thing model identifier                                    | string         |                      |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;compare | Comparison operator: >                                 | >=             | <                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataType | Data type. Supports: BOOL, ENUM, INT, FLOAT, DOUBLE, Available values: BOOL,DOUBLE,ENUM,FLOAT,INT | string    |             |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id   | Thing model function ID                                   | integer        |                      |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name | Thing model name                                          | string         |                      |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subName |                                                        | string         |                      |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subType |                                                        | string         |                      |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type | Thing model type                                          | string         |                      |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unit | Thing model unit                                          | string         |                      |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value | Thing model property comparison value                    | object         |                      |
| &emsp;&emsp;&emsp;&emsp;actionIcon       | Execution action icon, device/group/group                 | string         |                      |
| &emsp;&emsp;&emsp;&emsp;actionName       | Execution action name, device name/scene name/group ID    | string         |                      |
| &emsp;&emsp;&emsp;&emsp;executeTime      | Execution time                                            | integer        |                      |
| &emsp;&emsp;&emsp;&emsp;failMsg          | Execution failure reason                                  | string         |                      |
| &emsp;&emsp;&emsp;&emsp;result           | Execution result, 1: Success, 0: Failure                  | boolean        |                      |
| &emsp;&emsp;&emsp;&emsp;type             | Execution action type. 2: Device, 3: Group, 4: Scene      | integer        |                      |
| &emsp;&emsp;logId                        | Execution log ID                                          | integer(int64) |                      |
| &emsp;&emsp;name                         | Automation name                                           | string         |                      |
| &emsp;&emsp;result                       | Execution result. 0: Success, 1: Failure, 2: Partial success | integer(int32) |                    |
| &emsp;&emsp;time                         | Execution time                                            | integer(int64) |                      |
| extMsg                                   |                                                           | string         |                      |
| msg                                      |                                                           | string         |                      |


**Response Example**:
```javascript
{
	"code": 0,
	"data": [
		{
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
		}
	],
	"extMsg": "",
	"msg": ""
}
```