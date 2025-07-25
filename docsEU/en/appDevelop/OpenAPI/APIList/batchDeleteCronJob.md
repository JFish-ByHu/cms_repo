# Delete Scheduled Tasks


**API Address**:`/v2/cep/enduserapi/batchDeleteCronJob`


**Request Method**:`DELETE`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Delete scheduled tasks`



**Request Example**:


```javascript
{
  "ruleIdList": []
}
```


**Request Parameters**:


| Parameter Name          | Parameter Description       | Request Type | Required | Data Type               | Schema                 |
| ----------------------- | --------------------------- | ------------ | -------- | ----------------------- | ---------------------- |
| cmd                     | cmd                         | body         | true     | Delete Scheduled Task Parameters | Delete Scheduled Task Parameters |
| &emsp;&emsp;ruleIdList  | Scheduled task ID list      |              | true     | array                   | string                 |
| Authorization           |                             | header       | false    | string                  |                        |


**Response Status**:


| Status Code | Description                        | Schema                              |
| ----------- | ---------------------------------- | ----------------------------------- |
| 200         | OK                                 | ApiResult«Delete Scheduled Task»    |
| 204         | No Content                         |                                     |
| 401         | Unauthorized                       |                                     |
| 403         | Forbidden                          |                                     |
| 5596        | Please enter scheduled task ID list|                                     |


**Response Parameters**:


| Parameter Name                  | Parameter Description | Type           | Schema                  |
| ------------------------------- | --------------------- | -------------- | ----------------------- |
| code                            |                       | integer(int32) | integer(int32)          |
| data                            |                       | Delete Scheduled Task | Delete Scheduled Task    |
| &emsp;&emsp;failureList         | Failure list          | array          | TimerDeleteResultCO     |
| &emsp;&emsp;&emsp;&emsp;code    |                       | integer        |                         |
| &emsp;&emsp;&emsp;&emsp;msg     |                       | string         |                         |
| &emsp;&emsp;&emsp;&emsp;ruleId  |                       | string         |                         |
| &emsp;&emsp;successList         | Success list          | array          | TimerDeleteResultCO     |
| &emsp;&emsp;&emsp;&emsp;code    |                       | integer        |                         |
| &emsp;&emsp;&emsp;&emsp;msg     |                       | string         |                         |
| &emsp;&emsp;&emsp;&emsp;ruleId  |                       | string         |                         |
| extMsg                          |                       | string         |                         |
| msg                             |                       | string         |                         |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
		"failureList": [
			{
				"code": 0,
				"msg": "",
				"ruleId": ""
			}
		],
		"successList": [
			{
				"code": 0,
				"msg": "",
				"ruleId": ""
			}
		]
	},
	"extMsg": "",
	"msg": ""
}
```