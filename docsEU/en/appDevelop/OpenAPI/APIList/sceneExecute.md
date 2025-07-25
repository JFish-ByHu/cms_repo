# Execute Scene


**Interface Address**:`/v2/cep/enduserapi/sceneExecute`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**Interface Description**:`Execute Scene`

**Request Parameters**:


| Parameter Name | Parameter Description                                   | Request Type | Required | Data Type | schema |
| -------------- | ------------------------------------------------------- | ------------ | -------- | --------- | ------ |
| sceneId        | Scene ID                                                | body         | true     | string    |        |
| Authorization  |                                                         | header       | false    | string    |        |
| fid            | Family ID, required when home mode is enabled, otherwise not | body         | false    | string    |        |


**Response Status**:


| Status Code | Description  | schema                       |
| ----------- | ------------ | ---------------------------- |
| 200         | OK           | ApiResult«ExecutionResultCO» |
| 201         | Created      |                              |
| 401         | Unauthorized |                              |
| 403         | Forbidden    |                              |
| 404         | Not Found    |                              |


**Response Parameters**:


| Parameter Name                        | Parameter Description                             | Type              | schema            |
| ------------------------------------- | ------------------------------------------------- | ----------------- | ----------------- |
| code                                  |                                                   | integer(int32)    | integer(int32)    |
| data                                  |                                                   | ExecutionResultCO | ExecutionResultCO |
| &emsp;&emsp;callType                  | Call method                                       | string            |                   |
| &emsp;&emsp;executeResult             | Execution result. Success: true, Failure: false   | boolean           |                   |
| &emsp;&emsp;executeTime               | Execution time                                    | integer(int64)    |                   |
| &emsp;&emsp;executionId               | Execution record ID                               | integer(int64)    |                   |
| &emsp;&emsp;failActionList            | Failure reasons                                   | array             | ExecuteFailedCO   |
| &emsp;&emsp;&emsp;&emsp;deviceKey     |                                                   | string            |                   |
| &emsp;&emsp;&emsp;&emsp;deviceName    |                                                   | string            |                   |
| &emsp;&emsp;&emsp;&emsp;deviceType    |                                                   | integer           |                   |
| &emsp;&emsp;&emsp;&emsp;logoImage     |                                                   | string            |                   |
| &emsp;&emsp;&emsp;&emsp;productKey    |                                                   | string            |                   |
| &emsp;&emsp;&emsp;&emsp;reason        |                                                   | string            |                   |
| &emsp;&emsp;failCount                 | Failure count                                     | AtomicInteger     | AtomicInteger     |
| &emsp;&emsp;&emsp;&emsp;andDecrement  |                                                   | integer           |                   |
| &emsp;&emsp;&emsp;&emsp;andIncrement  |                                                   | integer           |                   |
| &emsp;&emsp;successCount              | Success count                                     | AtomicInteger     | AtomicInteger     |
| &emsp;&emsp;&emsp;&emsp;andDecrement  |                                                   | integer           |                   |
| &emsp;&emsp;&emsp;&emsp;andIncrement  |                                                   | integer           |                   |
| extMsg                                |                                                   | string            |                   |
| msg                                   |                                                   | string            |                   |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
		"callType": "",
		"executeResult": true,
		"executeTime": 0,
		"executionId": 0,
		"failActionList": [
			{
				"deviceKey": "",
				"deviceName": "",
				"deviceType": 0,
				"logoImage": "",
				"productKey": "",
				"reason": ""
			}
		],
		"failCount": {
			"andDecrement": 0,
			"andIncrement": 0
		},
		"successCount": {
			"andDecrement": 0,
			"andIncrement": 0
		}
	},
	"extMsg": "",
	"msg": ""
}
```