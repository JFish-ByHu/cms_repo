# Query Common Scenes


**Interface Address**:`/v2/cep/enduserapi/selectCommonSceneList`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**Interface Description**:`Query Common Scenes`


**Request Parameters**:


| Parameter Name | Parameter Description                                   | Request Type | Required | Data Type      | schema |
| -------------- | ------------------------------------------------------- | ------------ | -------- | -------------- | ------ |
| Authorization  |                                                         | header       | false    | string         |        |
| fid            | Family ID, required when home mode is enabled, otherwise not | query        | false    | string         |        |
| page           | Current page number                                     | query        | false    | integer(int32) |        |
| pageSize       | Number of items per page                                | query        | false    | integer(int32) |        |


**Response Status**:


| Status Code | Description  | schema                        |
| ----------- | ------------ | ----------------------------- |
| 200         | OK           | ApiResult«PageInfo«Scene Param»» |
| 401         | Unauthorized |                               |
| 403         | Forbidden    |                               |
| 404         | Not Found    |                               |


**Response Parameters**:


| Parameter Name                                                | Parameter Description                | Type               | schema             |
| ------------------------------------------------------------- | ------------------------------------ | ------------------ | ------------------ |
| code                                                          |                                      | integer(int32)     | integer(int32)     |
| data                                                          |                                      | PageInfo«Scene Param» | PageInfo«Scene Param» |
| &emsp;&emsp;endRow                                            |                                      | integer(int64)     |                    |
| &emsp;&emsp;hasNextPage                                       |                                      | boolean            |                    |
| &emsp;&emsp;hasPreviousPage                                   |                                      | boolean            |                    |
| &emsp;&emsp;isFirstPage                                       |                                      | boolean            |                    |
| &emsp;&emsp;isLastPage                                        |                                      | boolean            |                    |
| &emsp;&emsp;list                                              |                                      | array              | Scene Param Res    |
| &emsp;&emsp;&emsp;&emsp;fid                                   | Family ID                            | string             |                    |
| &emsp;&emsp;&emsp;&emsp;isCommon                              | Is common                            | boolean            |                    |
| &emsp;&emsp;&emsp;&emsp;sceneInfo                             | Scene information                    | Scene Info         | Scene Info         |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;icon                      | Scene icon                           | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id                        | Scene primary key ID                 | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;metaDataList              | Linkage data                         | array              | Linkage Data       |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;actionList    | Execute actions                      | array              | Execute Action     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;actionId | Execute action ID              | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code | Thing model identifier            | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataType | Thing model data type          | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id | Thing model function ID            | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name | Thing model function name        | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subName |                               | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subType | Read/write type                | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type | Thing model function type        | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unit | Thing model unit                 | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value | Thing model value               | object             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deviceKey     | Device/Group ID                     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deviceName    | Device name/Group name              | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deviceType    | Device type, 1: Normal device, 2: Group | integer        |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;logoImage     | Scene LOGO                          | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productKey    | Product KEY                         | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name                      | Scene name                          | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sceneId                   | Scene ID                            | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;uid                       | End-user ID                         | string             |                    |
| &emsp;&emsp;navigateFirstPage                                 |                                      | integer(int32)     |                    |
| &emsp;&emsp;navigateLastPage                                  |                                      | integer(int32)     |                    |
| &emsp;&emsp;navigatePages                                     |                                      | integer(int32)     |                    |
| &emsp;&emsp;navigatepageNums                                  |                                      | array              | integer            |
| &emsp;&emsp;nextPage                                          |                                      | integer(int32)     |                    |
| &emsp;&emsp;pageNum                                           |                                      | integer(int32)     |                    |
| &emsp;&emsp;pageSize                                          |                                      | integer(int32)     |                    |
| &emsp;&emsp;pages                                             |                                      | integer(int32)     |                    |
| &emsp;&emsp;prePage                                           |                                      | integer(int32)     |                    |
| &emsp;&emsp;size                                              |                                      | integer(int32)     |                    |
| &emsp;&emsp;startRow                                          |                                      | integer(int64)     |                    |
| &emsp;&emsp;total                                             |                                      | integer(int64)     |                    |
| extMsg                                                        |                                      | string             |                    |
| msg                                                           |                                      | string             |                    |


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