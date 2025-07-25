# Create Scheduled Task


**API Address**:`/v2/cep/enduserapi/v2/addCornJob`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Create scheduled task`



**Request Example**:


```javascript
{
  "cacheTime": 0,
  "dayOfWeek": "",
  "dk": "",
  "enabled": true,
  "pk": "",
  "timeZone": "",
  "timers": [
    {
      "action": "",
      "cacheTime": 0,
      "delay": 0,
      "taskLogo": "",
      "taskName": "",
      "time": ""
    }
  ],
  "type": ""
}
```


**Request Parameters**:


| Parameter Name                    | Description                                                  | Request Type | Required       | Data Type       | Schema         |
| --------------------------------- | ------------------------------------------------------------ | ------------ | -------------- | --------------- | -------------- |
| cmd                               | cmd                                                          | body         | true           | Create scheduled task | Create scheduled task |
| &emsp;&emsp;cacheTime             | Downlink cache time, in seconds, range: 0-7776000            |              | false          | integer(int32)  |                |
| &emsp;&emsp;dayOfWeek             | Repeat cycle: 1: Monday, 2: Tuesday, 3: Wednesday, 4: Thursday, 5: Friday, 6: Saturday, 7: Sunday, multiple values separated by commas, required when type = custom-repeat |              | multi-section  |                 | random         |
| &emsp;&emsp;dk                    | Device Key                                                   |              | true           | string          |                |
| &emsp;&emsp;enabled               | Task status, enabled: true, disabled: false                  |              | false          | boolean         |                |
| &emsp;&emsp;pk                    | Product Key                                                  |              | true           | string          |                |
| &emsp;&emsp;timeZone              | Time zone. Format: +-HH:mm                                   |              | false          | string          |                |
| &emsp;&emsp;timers                | Task list, when type = multi-section, limit is 2-5 tasks     |              | true           | array           | Task Req       |
| &emsp;&emsp;&emsp;&emsp;action    | Command to execute, format: Thing Model JSON string          |              | true           | string          |                |
| &emsp;&emsp;&emsp;&emsp;cacheTime | Downlink cache time, in seconds, range: 0-7776000            |              | false          | integer         |                |
| &emsp;&emsp;&emsp;&emsp;delay     | Delay execution time, in seconds, required when type = delay |              | false          | integer         |                |
| &emsp;&emsp;&emsp;&emsp;taskLogo  | Task icon                                                    |              | false          | string          |                |
| &emsp;&emsp;&emsp;&emsp;taskName  | Task name                                                    |              | false          | string          |                |
| &emsp;&emsp;&emsp;&emsp;time      | Execution time, format: HH:mm:ss, when type = once           |              | day-repeat     |                 | custom-repeat  |
| &emsp;&emsp;type                  | Task type, once: execute once, day-repeat: repeat daily, custom-repeat: repeat weekly, multi-section: multi-stage execution, delay: countdown |              | true           | string          |                |
| Authorization                     |                                                              | header       | false          | string          |                |


**Response Status**:


| Status Code | Description                           | Schema                        |
| ----------- | ------------------------------------- | ----------------------------- |
| 200         | OK                                    | ApiResult«Add scheduled task» |
| 201         | Created                               |                               |
| 401         | Unauthorized                          |                               |
| 403         | Forbidden                             |                               |
| 404         | Not Found                             |                               |
| 5066        | Please enter Product Key              |                               |
| 5067        | Please enter Device Key               |                               |
| 5107        | Please enter start time               |                               |
| 5108        | Please enter end time                 |                               |
| 5109        | Start time format is incorrect        |                               |
| 5110        | End time format is incorrect          |                               |
| 5587        | Please enter task type                |                               |
| 5588        | Task type parameter out of range      |                               |
| 5589        | Please enter command to execute       |                               |
| 5590        | Please enter day of week to execute   |                               |
| 5591        | Day of week parameter out of range    |                               |
| 5592        | Failed to add scheduled task          |                               |
| 5598        | Please enter execution time           |                               |
| 5599        | Execution time parameter out of range |                               |
| 5600        | Start time must be less than end time |                               |
| 5601        | Please enter delay execution time     |                               |
| 5602        | Delay time parameter out of range     |                               |
| 5604        | Task limit reached for this device    |                               |


**Response Parameters**:


| Parameter Name      | Description  | Type           | Schema         |
| ------------------- | ------------ | -------------- | -------------- |
| code                |              | integer(int32) | integer(int32) |
| data                |              | Add scheduled task | Add scheduled task |
| &emsp;&emsp;ruleId  | Task ID      | string         |                |
| extMsg              |              | string         |                |
| msg                 |              | string         |                |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
		"ruleId": ""
	},
	"extMsg": "",
	"msg": ""
}
```