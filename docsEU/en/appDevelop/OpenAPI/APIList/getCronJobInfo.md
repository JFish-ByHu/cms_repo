# Query Scheduled Task Details


**API Address**:`/v2/cep/enduserapi/v2/getCronJobInfo`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Query scheduled task details`


**Request Parameters**:


| Parameter Name | Parameter Description       | Request Type | Required | Data Type | Schema |
| -------------- | --------------------------- | ------------ | -------- | --------- | ------ |
| ruleId         | Scheduled task rule ID      | query        | true     | string    |        |
| Authorization  |                             | header       | false    | string    |        |


**Response Status**:


| Status Code | Description                        | Schema                                   |
| ----------- | ---------------------------------- | ---------------------------------------- |
| 200         | OK                                 | ApiResult«Scheduled Task Details»        |
| 401         | Unauthorized                       |                                          |
| 403         | Forbidden                          |                                          |
| 404         | Not Found                          |                                          |
| 5041        | No permission                      |                                          |
| 5593        | Please enter scheduled task ID     |                                          |
| 5594        | Failed to query scheduled task     |                                          |


**Response Parameters**:


| Parameter Name                    | Parameter Description                                                                                                                 | Type           | Schema              |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------------------- |
| code                              |                                                                                                                                       | integer(int32) | integer(int32)      |
| data                              |                                                                                                                                       | Scheduled Task Details | Scheduled Task Details |
| &emsp;&emsp;cacheTime             | Downstream cache time, in seconds, value range: 0-7776000                                                                             | integer(int64) |                     |
| &emsp;&emsp;createTime            | Creation time                                                                                                                         | integer(int64) |                     |
| &emsp;&emsp;dayOfWeek             | Repeat cycle, 1: Monday, 2: Tuesday, 3: Wednesday, 4: Thursday, 5: Friday, 6: Saturday, 7: Sunday, multiple separated by comma, when type = custom-repeat | | multi-section      |
| &emsp;&emsp;deviceKey             | Device KEY                                                                                                                           | string         |                     |
| &emsp;&emsp;enabled               | Scheduled task status, true: enabled, false: disabled                                                                                 | boolean        |                     |
| &emsp;&emsp;productKey            | Product KEY                                                                                                                          | string         |                     |
| &emsp;&emsp;ruleId                | Scheduled task rule ID                                                                                                               | string         |                     |
| &emsp;&emsp;timeZone              | Timezone, format: +-HH:mm                                                                                                            | string         |                     |
| &emsp;&emsp;timers                | Scheduled task list, when type = multi-section, scheduled task quantity is limited to 2-5                                             | array          | Scheduled Task Res  |
| &emsp;&emsp;&emsp;&emsp;action    | Command executed by scheduled task, format: Thing model JSON string                                                                   | string         |                     |
| &emsp;&emsp;&emsp;&emsp;cacheTime | Downstream cache time, in seconds, value range: 0-7776000                                                                             | integer        |                     |
| &emsp;&emsp;&emsp;&emsp;delay     | Delayed execution time, in seconds, required when type = delay                                                                         | integer        |                     |
| &emsp;&emsp;&emsp;&emsp;taskLogo  | Task icon                                                                                                                            | string         |                     |
| &emsp;&emsp;&emsp;&emsp;taskName  | Task name                                                                                                                            | string         |                     |
| &emsp;&emsp;&emsp;&emsp;time      | Execution time, format: HH:mm:ss, when type = once                                                                                    |                | day-repeat          |
| &emsp;&emsp;&emsp;&emsp;timerId   | Scheduled task ID                                                                                                                    | string         |                     |
| &emsp;&emsp;type                  | Scheduled task type, once: execute once, day-repeat: repeat daily, custom-repeat: repeat weekly, multi-section: multi-stage execution, delay: countdown | string    |                     |
| extMsg                            |                                                                                                                                       | string         |                     |
| msg                               |                                                                                                                                       | string         |                     |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
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
	},
	"extMsg": "",
	"msg": ""
}
```