# Modify Scheduled Task


**Interface Address**:`/v2/cep/enduserapi/v2/setCronJob`


**Request Method**:`PUT`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**Interface Description**:`Modify Scheduled Task`



**Request Example**:


```javascript
{
  "cacheTime": 0,
  "dayOfWeek": "",
  "dk": "",
  "enabled": true,
  "pk": "",
  "ruleId": "",
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


| Parameter Name                    | Parameter Description                                                                                                                 | Request Type | Required      | Data Type      | schema        |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------- | -------------- | ------------- |
| cmd                               | cmd                                                                                                                                   | body         | true          | Modify Scheduled Task | Modify Scheduled Task |
| &emsp;&emsp;cacheTime             | Downlink cache time, in seconds, value range: 0-7776000                                                                               |              | false         | integer(int32) |               |
| &emsp;&emsp;dayOfWeek             | Repeat cycle: 1: Monday, 2: Tuesday, 3: Wednesday, 4: Thursday, 5: Friday, 6: Saturday, 7: Sunday, multiple separated by English commas, required when type = custom-repeat |  | multi-section |                | random |
| &emsp;&emsp;dk                    | Device Key                                                                                                                            |              | true          | string         |               |
| &emsp;&emsp;enabled               | Scheduled task status, enable: true, disable: false                                                                                   |              | false         | boolean        |               |
| &emsp;&emsp;pk                    | Product Key                                                                                                                           |              | true          | string         |               |
| &emsp;&emsp;ruleId                | Scheduled task ID                                                                                                                     |              | true          | string         |               |
| &emsp;&emsp;timeZone              | Time zone. Format: +-HH:mm                                                                                                            |              | false         | string         |               |
| &emsp;&emsp;timers                | Scheduled task list, when type = multi-section, the number of scheduled tasks is limited to 2-5                                        |              | true          | array          | Scheduled Task Req |
| &emsp;&emsp;&emsp;&emsp;action    | Command executed by the scheduled task, format: Thing model JSON string                                                               |              | true          | string         |               |
| &emsp;&emsp;&emsp;&emsp;cacheTime | Downlink cache time, in seconds, value range: 0-7776000                                                                               |              | false         | integer        |               |
| &emsp;&emsp;&emsp;&emsp;delay     | Delayed execution time, in seconds, required when type = delay                                                                        |              | false         | integer        |               |
| &emsp;&emsp;&emsp;&emsp;taskLogo  | Task icon                                                                                                                             |              | false         | string         |               |
| &emsp;&emsp;&emsp;&emsp;taskName  | Task name                                                                                                                             |              | false         | string         |               |
| &emsp;&emsp;&emsp;&emsp;time      | Execution time, format: HH:mm:ss, when type = once                                                                                    |              | day-repeat    |                | custom-repeat |
| &emsp;&emsp;type                  | Scheduled task type, once: execute once, day-repeat: repeat daily, custom-repeat: repeat weekly, multi-section: multi-stage execution, delay: countdown |  | true          | string         |               |
| Authorization                     |                                                                                                                                       | header       | false         | string         |               |


**Response Status**:


| Status Code | Description                                  | schema          |
| ----------- | -------------------------------------------- | --------------- |
| 200         | OK                                           | ApiResult«Void» |
| 201         | Created                                      |                 |
| 401         | Unauthorized                                 |                 |
| 403         | Forbidden                                    |                 |
| 404         | Not Found                                    |                 |
| 5066        | Please enter Product Key                     |                 |
| 5067        | Please enter Device Key                      |                 |
| 5107        | Please enter start time                      |                 |
| 5108        | Please enter end time                        |                 |
| 5109        | Start time format incorrect                  |                 |
| 5110        | End time format incorrect                    |                 |
| 5587        | Please enter scheduled task type             |                 |
| 5588        | Scheduled task type parameter value out of range |             |
| 5589        | Please enter command for scheduled task execution |           |
| 5590        | Please enter which day of week to execute    |                 |
| 5591        | Day of week parameter value out of range     |                 |
| 5593        | Please enter scheduled task ID               |                 |
| 5598        | Please enter execution time                  |                 |
| 5599        | Execution time parameter value out of range  |                 |
| 5600        | Start time must be less than end time        |                 |
| 5601        | Please enter delayed execution time          |                 |
| 5602        | Delayed execution time parameter value out of range |         |
| 5603        | Failed to modify scheduled task              |                 |


**Response Parameters**:


| Parameter Name | Parameter Description | Type           | schema         |
| -------------- | --------------------- | -------------- | -------------- |
| code           |                      | integer(int32) | integer(int32) |
| extMsg         |                      | string         |                |
| msg            |                      | string         |                |


**Response Example**:
```javascript
{
	"code": 0,
	"extMsg": "",
	"msg": ""
}
```