# Query Scene Log Details


**Interface Address**:`/v2/cep/enduserapi/selectSceneLogDetail`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**Interface Description**:`Query Scene Log Details`

**Request Parameters**:


| Parameter Name | Parameter Description   | Request Type | Required | Data Type | schema |
| -------------- | ----------------------- | ------------ | -------- | --------- | ------ |
| executionId    | Execution record ID     | body         | true     | integer   |        |
| Authorization  |                         | header       | false    | string    |        |


**Response Status**:


| Status Code | Description  | schema                  |
| ----------- | ------------ | ----------------------- |
| 200         | OK           | ApiResult«Scene Log Details» |
| 201         | Created      |                         |
| 401         | Unauthorized |                         |
| 403         | Forbidden    |                         |
| 404         | Not Found    |                         |


**Response Parameters**:


| Parameter Name                                            | Parameter Description                                   | Type           | schema         |
| --------------------------------------------------------- | ------------------------------------------------------- | -------------- | -------------- |
| code                                                      |                                                         | integer(int32) | integer(int32) |
| data                                                      |                                                         | Scene Log Details | Scene Log Details |
| &emsp;&emsp;callType                                      | Call method                                             | string         |                |
| &emsp;&emsp;executionId                                   | Execution record ID                                     | integer(int64) |                |
| &emsp;&emsp;executionList                                 | Execution details                                       | array          | Execution Details |
| &emsp;&emsp;&emsp;&emsp;actionResultList                  | Action execution details                                | array          | Action Execution Result |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;action                | Scene thing model                                       | ActionModel    | ActionModel    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code      | Thing model identifier                                  | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataType  | Thing model data type                                   | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id        | Thing model function ID                                 | integer        |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name      | Thing model function name                               | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subName   |                                                         | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subType   | Read/write type                                         | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type      | Thing model function type                               | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unit      | Thing model unit                                        | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value     | Thing model value                                       | object         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;executionTime         | Execution time                                          | integer        |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;reason                | Failure reason                                          | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;result                | Execution result. Success: true, Failure: false         | boolean        |                |
| &emsp;&emsp;&emsp;&emsp;deviceKey                         | Device/Group ID                                         | string         |                |
| &emsp;&emsp;&emsp;&emsp;deviceName                        | Device name/Group name                                  | string         |                |
| &emsp;&emsp;&emsp;&emsp;deviceType                        | Device type, 1: Normal device, 2: Group device          | integer        |                |
| &emsp;&emsp;&emsp;&emsp;executionResult                   | Action execution result, 1: Success, 2: Failure, 3: Partial success | integer  |                |
| &emsp;&emsp;&emsp;&emsp;logoImage                         | Scene LOGO                                              | string         |                |
| &emsp;&emsp;&emsp;&emsp;productKey                        | Product KEY                                             | string         |                |
| &emsp;&emsp;executionResult                               | Execution result, 1: Success, 2: Failure, 3: Partial success | integer(int32) |            |
| &emsp;&emsp;executionTime                                 | Execution time                                          | integer(int64) |                |
| &emsp;&emsp;sceneIcon                                     | Scene icon                                              | string         |                |
| &emsp;&emsp;sceneId                                       | Scene ID                                                | string         |                |
| &emsp;&emsp;sceneName                                     | Scene name                                              | string         |                |
| extMsg                                                    |                                                         | string         |                |
| msg                                                       |                                                         | string         |                |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
		"callType": "",
		"executionId": 0,
		"executionList": [
			{
				"actionResultList": [
					{
						"action": {
							"code": "",
							"dataType": "",
							"id": 0,
							"name": "",
							"subName": "",
							"subType": "",
							"type": "",
							"unit": "",
							"value": {}
						},
						"executionTime": 0,
						"reason": "",
						"result": true
					}
				],
				"deviceKey": "",
				"deviceName": "",
				"deviceType": 0,
				"executionResult": 0,
				"logoImage": "",
				"productKey": ""
			}
		],
		"executionResult": 0,
		"executionTime": 0,
		"sceneIcon": "",
		"sceneId": "",
		"sceneName": ""
	},
	"extMsg": "",
	"msg": ""
}
```