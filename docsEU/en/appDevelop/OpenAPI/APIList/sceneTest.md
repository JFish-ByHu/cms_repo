# Test Scene


**Interface Address**:`/v2/cep/enduserapi/sceneTest`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**Interface Description**:`Test Scene`



**Request Example**:


```javascript
{
  "fid": "",
  "isCommon": true,
  "sceneInfo": {
    "icon": "",
    "id": 0,
    "metaDataList": [
      {
        "actionList": [
          {
            "actionId": 0,
            "code": "",
            "dataType": "",
            "id": 0,
            "name": "",
            "subName": "",
            "subType": "",
            "type": "",
            "unit": "",
            "value": {}
          }
        ],
        "deviceKey": "",
        "deviceName": "",
        "deviceType": 0,
        "logoImage": "",
        "productKey": ""
      }
    ],
    "name": "",
    "sceneId": "",
    "uid": ""
  }
}
```

**Request Parameters**:


| Parameter Name                                           | Parameter Description                                   | Request Type | Required | Data Type      | schema        |
| -------------------------------------------------------- | ------------------------------------------------------- | ------------ | -------- | -------------- | ------------- |
| cmd                                                      | cmd                                                     | body         | true     | Scene Param Req | Scene Param Req |
| &emsp;&emsp;fid                                          | Family ID, required when home mode is enabled, otherwise not | | false    | string         |               |
| &emsp;&emsp;isCommon                                     | Whether to add to common scenes                         |              | false    | boolean        |               |
| &emsp;&emsp;sceneInfo                                    | Scene information                                       |              | true     | Scene Info     | Scene Info    |
| &emsp;&emsp;&emsp;&emsp;icon                             | Scene icon                                              |              | false    | string         |               |
| &emsp;&emsp;&emsp;&emsp;id                               | Scene primary key ID                                    |              | false    | integer        |               |
| &emsp;&emsp;&emsp;&emsp;metaDataList                     | Linkage data                                            |              | true     | array          | Linkage Data  |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;actionList           | Execute actions                                         |              | true     | array          | Execute Action |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;actionId | Execute action ID                                       |              | false    | integer        |               |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code     | Thing model identifier                                  |              | true     | string         |               |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataType | Thing model data type                                   |              | true     | string         |               |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id       | Thing model function ID                                 |              | true     | integer        |               |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name     | Thing model function name                               |              | true     | string         |               |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subName  |                                                         |              | false    | string         |               |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subType  | Read/write type                                         |              | false    | string         |               |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type     | Thing model function type                               |              | true     | string         |               |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unit     | Thing model unit                                        |              | false    | string         |               |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value    | Thing model value                                       |              | true     | object         |               |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deviceKey            | Device/Group ID                                         |              | true     | string         |               |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deviceName           | Device name/Group name                                  |              | false    | string         |               |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deviceType           | Device type, 1: Normal device, 2: Group                 |              | true     | integer        |               |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;logoImage            | Scene LOGO                                              |              | false    | string         |               |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productKey           | Product KEY                                             |              | true     | string         |               |
| &emsp;&emsp;&emsp;&emsp;name                             | Scene name                                              |              | false    | string         |               |
| &emsp;&emsp;&emsp;&emsp;sceneId                          | Scene ID                                                |              | false    | string         |               |
| &emsp;&emsp;&emsp;&emsp;uid                              | End-user ID                                             |              | false    | string         |               |
| Authorization                                            |                                                         | header       | false    | string         |               |


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