# Query Automation Details


**API Address**:`/v2/cep/enduserapi/automation/detail`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Query automation details`

**Request Parameters**:


| Parameter Name | Description                                       | Request Type | Required | Data Type       | Schema |
| -------------- | ------------------------------------------------- | ------------ | -------- | --------------- | ------ |
| automationId   | Automation ID                                     | query        | true     | integer(int64)  |        |
| Authorization  |                                                   | header       | false    | string          |        |
| fid            | Home ID, required if home mode is enabled, otherwise not required | query   | false    | string          |        |


**Response Status**:


| Status Code | Description  | Schema                      |
| ----------- | ------------ | --------------------------- |
| 200         | OK           | ApiResult«Automation Details» |
| 401         | Unauthorized |                             |
| 403         | Forbidden    |                             |
| 404         | Not Found    |                             |


**Response Parameters**:


| Parameter Name                                | Description                                                   | Type                  | Schema                |
| --------------------------------------------- | ------------------------------------------------------------- | --------------------- | --------------------- |
| code                                          |                                                               | integer(int32)        | integer(int32)        |
| data                                          |                                                               | Automation Details    | Automation Details    |
| &emsp;&emsp;actions                           | Trigger actions                                               | array                 | Automation Execution Action |
| &emsp;&emsp;&emsp;&emsp;delayTime             | Delay time in seconds                                         | integer               |                       |
| &emsp;&emsp;&emsp;&emsp;deviceKey             | Device DK/Group ID                                            | string                |                       |
| &emsp;&emsp;&emsp;&emsp;icon                  | Device/Group/Scene icon                                       | string                |                       |
| &emsp;&emsp;&emsp;&emsp;id                    |                                                               | integer               |                       |
| &emsp;&emsp;&emsp;&emsp;name                  | Device/Group/Scene name                                       | string                |                       |
| &emsp;&emsp;&emsp;&emsp;productKey            | Product PK/Group PK                                           | string                |                       |
| &emsp;&emsp;&emsp;&emsp;property              | Device property                                               | Thing Model Property  | Thing Model Property  |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code      | Thing model identifier                                        | string                |                       |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;compare   | Comparison operator: >                                        | >=                    | <                     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataType  | Data type. Supports: BOOL, ENUM, INT, FLOAT, DOUBLE, Available values: BOOL,DOUBLE,ENUM,FLOAT,INT | string    |            |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id        | Thing model function ID                                       | integer               |                       |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name      | Thing model name                                              | string                |                       |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subName   |                                                               | string                |                       |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subType   |                                                               | string                |                       |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type      | Thing model type                                              | string                |                       |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unit      | Thing model unit                                              | string                |                       |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value     | Thing model property comparison value                         | object                |                       |
| &emsp;&emsp;&emsp;&emsp;sceneId               | Scene ID                                                      | string                |                       |
| &emsp;&emsp;&emsp;&emsp;sort                  | Execution action order, starts from 1 and increments          | integer               |                       |
| &emsp;&emsp;&emsp;&emsp;type                  | Execution action type. 1: Delay, 2: Device, 3: Group, 4: Scene | integer               |                       |
| &emsp;&emsp;automationId                      | Automation ID                                                 | integer(int64)        |                       |
| &emsp;&emsp;conditionType                     | Trigger type. 1: Meet any, 2: Meet all                        | integer(int32)        |                       |
| &emsp;&emsp;conditions                        | Trigger conditions                                            | array                 | Automation Trigger Condition |
| &emsp;&emsp;&emsp;&emsp;deviceKey             | Device DK                                                     | string                |                       |
| &emsp;&emsp;&emsp;&emsp;icon                  | Device/Group/Scene icon                                       | string                |                       |
| &emsp;&emsp;&emsp;&emsp;name                  | Device/Group/Scene name                                       | string                |                       |
| &emsp;&emsp;&emsp;&emsp;productKey            | Product PK                                                    | string                |                       |
| &emsp;&emsp;&emsp;&emsp;property              | Device property                                               | Thing Model Property  | Thing Model Property  |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code      | Thing model identifier                                        | string                |                       |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;compare   | Comparison operator: >                                        | >=                    | <                     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataType  | Data type. Supports: BOOL, ENUM, INT, FLOAT, DOUBLE, Available values: BOOL,DOUBLE,ENUM,FLOAT,INT | string    |            |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id        | Thing model function ID                                       | integer               |                       |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name      | Thing model name                                              | string                |                       |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subName   |                                                               | string                |                       |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subType   |                                                               | string                |                       |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type      | Thing model type                                              | string                |                       |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unit      | Thing model unit                                              | string                |                       |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value     | Thing model property comparison value                         | object                |                       |
| &emsp;&emsp;&emsp;&emsp;sort                  | Condition order, starts from 1 and increments                 | integer               |                       |
| &emsp;&emsp;&emsp;&emsp;timer                 | Condition time                                                | Automation Trigger Condition Time | Automation Trigger Condition Time |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dayOfWeek | Repeat cycle. Required when timer type is custom, 1,2,3...7 represent Monday to Sunday | string         |            |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;time      | Scheduled execution time. Format: HH:mm                       | string                |                       |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;timeZone  | Time zone, format: +-HH:mm                                    | string                |                       |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type      | Timer type. 0: Once only, 1: Daily, 2: Custom                 | integer               |                       |
| &emsp;&emsp;&emsp;&emsp;type                  | Trigger condition type. 0: Device, 1: Timer                   | integer               |                       |
| &emsp;&emsp;icon                              | Automation icon                                               | string                |                       |
| &emsp;&emsp;name                              | Automation name                                               | string                |                       |
| &emsp;&emsp;nameType                          | Automation name generation method. 1: System generated, 2: User defined | integer(int32) |              |
| &emsp;&emsp;precondition                      | Effective time                                                | Automation Effective Time | Automation Effective Time |
| &emsp;&emsp;&emsp;&emsp;effectDate            | Effective date. Not filled when effective date type is daily. Weekly: 1,2,3,...7 represent Monday to Sunday, Monthly: 1-31, Specific date: format MM-dd/MM-dd, e.g.: 12-19/12-21 | string   |          |
| &emsp;&emsp;&emsp;&emsp;effectDateType        | Effective date type. 0: Daily, 1: Weekly, 2: Monthly, 3: Specific date | integer        |                       |
| &emsp;&emsp;&emsp;&emsp;effectTimeType        | Effective time type. 0: Day, 1: Night, 2: All day, 3: Specific time period | integer      |                     |
| &emsp;&emsp;&emsp;&emsp;endTime               | End time. Required when effective time type is all day or specific time period, format: HH:mm | string       |              |
| &emsp;&emsp;&emsp;&emsp;location              | Coordinates. Longitude first followed by latitude, required when effective time type is day or night | string      |               |
| &emsp;&emsp;&emsp;&emsp;regionName            | Region name                                                   | string                |                       |
| &emsp;&emsp;&emsp;&emsp;startTime             | Start time. Required when effective time type is all day or specific time period, format: HH:mm | string      |               |
| &emsp;&emsp;&emsp;&emsp;timeZone              | Time zone, format: +-HH:mm                                    | string                |                       |
| extMsg                                        |                                                               | string                |                       |
| msg                                           |                                                               | string                |                       |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
		"actions": [
			{
				"delayTime": 0,
				"deviceKey": "",
				"icon": "",
				"id": 0,
				"name": "",
				"productKey": "",
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
				},
				"sceneId": "",
				"sort": 0,
				"type": 0
			}
		],
		"automationId": 0,
		"conditionType": 0,
		"conditions": [
			{
				"deviceKey": "",
				"icon": "",
				"name": "",
				"productKey": "",
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
				},
				"sort": 0,
				"timer": {
					"dayOfWeek": "",
					"time": "",
					"timeZone": "",
					"type": 0
				},
				"type": 0
			}
		],
		"icon": "",
		"name": "",
		"nameType": 0,
		"precondition": {
			"effectDate": "",
			"effectDateType": 0,
			"effectTimeType": 0,
			"endTime": "",
			"location": "",
			"regionName": "",
			"startTime": "",
			"timeZone": ""
		}
	},
	"extMsg": "",
	"msg": ""
}
```