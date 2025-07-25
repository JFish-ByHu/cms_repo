# Query Scheduled Task List


**API Address**:`/v2/cep/enduserapi/v2/getCronJobList`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Query scheduled task list`

**Request Parameters**:


| Parameter Name | Parameter Description                                                                                                                 | Request Type | Required | Data Type       | Schema |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------ | -------- | -------------- | ------ |
| dk             | Device KEY                                                                                                                            | query        | true     | string         |        |
| pk             | Product KEY                                                                                                                           | query        | true     | string         |        |
| Authorization  |                                                                                                                                       | header       | false    | string         |        |
| page           | Current page number                                                                                                                   | query        | false    | integer(int32) |        |
| pageSize       | Number of items per page                                                                                                              | query        | false    | integer(int32) |        |
| type           | Scheduled task type, once: execute once, day-repeat: repeat daily, custom-repeat: repeat weekly, multi-section: multi-stage execution, delay: countdown | query | false | string         |        |


**Response Status**:


| Status Code | Description                                  | Schema                                    |
| ----------- | -------------------------------------------- | ----------------------------------------- |
| 200         | OK                                           | ApiResult«PageInfo«Scheduled Task List»» |
| 401         | Unauthorized                                 |                                           |
| 403         | Forbidden                                    |                                           |
| 404         | Not Found                                    |                                           |
| 5041        | No permission                                |                                           |
| 5066        | Please enter Product Key                     |                                           |
| 5067        | Please enter Device Key                      |                                           |
| 5588        | Scheduled task type parameter value out of range |                                      |
| 5594        | Failed to query scheduled task               |                                           |


**Response Parameters**:


| Parameter Name                                | Parameter Description                                                                                                                 | Type                         | Schema                       |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------- |
| code                                          |                                                                                                                                       | integer(int32)               | integer(int32)               |
| data                                          |                                                                                                                                       | PageInfo«Scheduled Task List» | PageInfo«Scheduled Task List» |
| &emsp;&emsp;endRow                            |                                                                                                                                       | integer(int64)               |                              |
| &emsp;&emsp;hasNextPage                       |                                                                                                                                       | boolean                      |                              |
| &emsp;&emsp;hasPreviousPage                   |                                                                                                                                       | boolean                      |                              |
| &emsp;&emsp;isFirstPage                       |                                                                                                                                       | boolean                      |                              |
| &emsp;&emsp;isLastPage                        |                                                                                                                                       | boolean                      |                              |
| &emsp;&emsp;list                              |                                                                                                                                       | array                        | Scheduled Task List          |
| &emsp;&emsp;&emsp;&emsp;cacheTime             | Downstream cache time, in seconds, value range: 0-7776000                                                                             | integer                      |                              |
| &emsp;&emsp;&emsp;&emsp;createTime            | Creation time                                                                                                                         | integer                      |                              |
| &emsp;&emsp;&emsp;&emsp;dayOfWeek             | Repeat cycle, 1: Monday, 2: Tuesday, 3: Wednesday, 4: Thursday, 5: Friday, 6: Saturday, 7: Sunday, multiple separated by comma, when type = custom-repeat |                        | multi-section               |
| &emsp;&emsp;&emsp;&emsp;deviceKey             | Device KEY                                                                                                                            | string                       |                              |
| &emsp;&emsp;&emsp;&emsp;enabled               | Scheduled task status, true: enabled, false: disabled                                                                                 | boolean                      |                              |
| &emsp;&emsp;&emsp;&emsp;productKey            | Product KEY                                                                                                                           | string                       |                              |
| &emsp;&emsp;&emsp;&emsp;ruleId                | Scheduled task rule ID                                                                                                                | string                       |                              |
| &emsp;&emsp;&emsp;&emsp;timeZone              | Timezone, format: +-HH:mm                                                                                                             | string                       |                              |
| &emsp;&emsp;&emsp;&emsp;timers                | Scheduled task list, when type = multi-section, scheduled task quantity is limited to 2-5                                             | array                        | Scheduled Task Res           |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;action    | Command executed by scheduled task, format: Thing model JSON string                                                                    | string                       |                              |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cacheTime | Downstream cache time, in seconds, value range: 0-7776000                                                                             | integer                      |                              |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;delay     | Delayed execution time, in seconds, required when type = delay                                                                         | integer                      |                              |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;taskLogo  | Task icon                                                                                                                             | string                       |                              |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;taskName  | Task name                                                                                                                             | string                       |                              |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;time      | Execution time, format: HH:mm:ss, when type = once                                                                                     |                              | day-repeat                   |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;timerId   | Scheduled task ID                                                                                                                     | string                       |                              |
| &emsp;&emsp;&emsp;&emsp;type                  | Scheduled task type, once: execute once, day-repeat: repeat daily, custom-repeat: repeat weekly, multi-section: multi-stage execution, random: random execution, delay: countdown | string               |                              |
| &emsp;&emsp;navigateFirstPage                 |                                                                                                                                       | integer(int32)               |                              |
| &emsp;&emsp;navigateLastPage                  |                                                                                                                                       | integer(int32)               |                              |
| &emsp;&emsp;navigatePages                     |                                                                                                                                       | integer(int32)               |                              |
| &emsp;&emsp;navigatepageNums                  |                                                                                                                                       | array                        | integer                      |
| &emsp;&emsp;nextPage                          |                                                                                                                                       | integer(int32)               |                              |
| &emsp;&emsp;pageNum                           |                                                                                                                                       | integer(int32)               |                              |
| &emsp;&emsp;pageSize                          |                                                                                                                                       | integer(int32)               |                              |
| &emsp;&emsp;pages                             |                                                                                                                                       | integer(int32)               |                              |
| &emsp;&emsp;prePage                           |                                                                                                                                       | integer(int32)               |                              |
| &emsp;&emsp;size                              |                                                                                                                                       | integer(int32)               |                              |
| &emsp;&emsp;startRow                          |                                                                                                                                       | integer(int64)               |                              |
| &emsp;&emsp;total                             |                                                                                                                                       | integer(int64)               |                              |
| extMsg                                        |                                                                                                                                       | string                       |                              |
| msg                                           |                                                                                                                                       | string                       |                              |


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
				"cacheTime": 0,
				"createTime": 0,
				"dayOfWeek": "",
				"deviceKey": "",
				"enabled": true,
				"productKey": "",
				"ruleId": "",
				"timeZone": "",
				"timers": [
					{
						"action": "",
						"cacheTime": 0,
						"delay": 0,
						"taskLogo": "",
						"taskName": "",
						"time": "",
						"timerId": ""
					}
				],
				"type": ""
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