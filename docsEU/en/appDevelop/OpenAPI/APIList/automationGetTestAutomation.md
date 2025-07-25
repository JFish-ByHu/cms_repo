# Query Automation Test Results


**API Address**:`/v2/cep/enduserapi/automation/getTestAutomation`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Query automation test results`


**Request Parameters**:


| Parameter Name | Description      | Request Type | Required | Data Type       | Schema |
| -------------- | ---------------- | ------------ | -------- | --------------- | ------ |
| testResultId   | Test result ID   | query        | true     | integer(int64)  |        |
| Authorization  |                  | header       | false    | string          |        |


**Response Status**:


| Status Code | Description  | Schema                          |
| ----------- | ------------ | ------------------------------- |
| 200         | OK           | ApiResult«Automation Test Result» |
| 401         | Unauthorized |                                 |
| 403         | Forbidden    |                                 |
| 404         | Not Found    |                                 |


**Response Parameters**:


| Parameter Name                           | Description                                               | Type           | Schema         |
| ---------------------------------------- | --------------------------------------------------------- | -------------- | -------------- |
| code                                     |                                                           | integer(int32) | integer(int32) |
| data                                     |                                                           | Automation Test Result | Automation Test Result |
| &emsp;&emsp;failActionList               | Failure details                                           | array          | FailDetail     |
| &emsp;&emsp;&emsp;&emsp;failMsg          |                                                           | string         |                |
| &emsp;&emsp;&emsp;&emsp;icon             |                                                           | string         |                |
| &emsp;&emsp;&emsp;&emsp;name             |                                                           | string         |                |
| &emsp;&emsp;&emsp;&emsp;property         |                                                           | Thing Model Property | Thing Model Property |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code | Thing model identifier                                    | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;compare | Comparison operator: >                                 | >=             | <              |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataType | Data type. Supports: BOOL, ENUM, INT, FLOAT, DOUBLE, Available values: BOOL,DOUBLE,ENUM,FLOAT,INT | string    |     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id   | Thing model function ID                                   | integer        |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name | Thing model name                                          | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subName |                                                        | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subType |                                                        | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type | Thing model type                                          | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unit | Thing model unit                                          | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value | Thing model property comparison value                    | object         |                |
| &emsp;&emsp;failCount                    | Failure count                                             | AtomicInteger  | AtomicInteger  |
| &emsp;&emsp;&emsp;&emsp;andDecrement     |                                                           | integer        |                |
| &emsp;&emsp;&emsp;&emsp;andIncrement     |                                                           | integer        |                |
| &emsp;&emsp;overallFailMsg               | Failure reason                                            | string         |                |
| &emsp;&emsp;result                       | 0: Success, 1: Failure, 2: Partial success                | integer(int32) |                |
| &emsp;&emsp;successCount                 | Success count                                             | AtomicInteger  | AtomicInteger  |
| &emsp;&emsp;&emsp;&emsp;andDecrement     |                                                           | integer        |                |
| &emsp;&emsp;&emsp;&emsp;andIncrement     |                                                           | integer        |                |
| &emsp;&emsp;timeoutStatus                | Whether timeout occurred                                  | boolean        |                |
| extMsg                                   |                                                           | string         |                |
| msg                                      |                                                           | string         |                |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
		"failActionList": [
			{
				"failMsg": "",
				"icon": "",
				"name": "",
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
				}
			}
		],
		"failCount": {
			"andDecrement": 0,
			"andIncrement": 0
		},
		"overallFailMsg": "",
		"result": 0,
		"successCount": {
			"andDecrement": 0,
			"andIncrement": 0
		},
		"timeoutStatus": true
	},
	"extMsg": "",
	"msg": ""
}
```