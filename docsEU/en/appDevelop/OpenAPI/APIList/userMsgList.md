# Query User Message List


**Interface Address**:`/v2/mobilepush/enduserapi/userMsgList`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**Interface Description**:`Query Message List`


**Request Parameters**:


| Parameter Name     | Parameter Description                                                                                                   | Request Type | Required | Data Type      | schema |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------- | ------------ | -------- | -------------- | ------ |
| dk                 | Device Key                                                                                                              | query        | false    | string         |        |
| firstLabelList     | Primary labels: 1-System  2-Smart  3-Device                                                                             | query        | false    | string         |        |
| isRead             | Read status: true-Read  false-Unread                                                                                    | query        | false    | boolean        |        |
| msgType            | Message type: 1-Device notification  2-Device alarm  3-Device fault  4-System message                                   | query        | false    | integer(int32) |        |
| page               | Current page, default is page 1                                                                                         | query        | false    | integer(int32) |        |
| pageSize           | Page size, default is 10 items                                                                                          | query        | false    | integer(int32) |        |
| pk                 | Product Key                                                                                                             | query        | false    | string         |        |
| secondaryLabelList | Secondary labels: 1-Privacy  2-Service  3-Automation  4-Scene  5-Device notification  6-Device alarm  7-Device fault  8-OTA | query    | false    | string         |        |


**Response Status**:


| Status Code | Description          | schema                                     |
| ----------- | -------------------- | ------------------------------------------ |
| 200         | Query message success | Registration code response data«PageInfo«Query Message List»» |
| 5036        | Secret key verification failed |                                  |
| 5055        | Please enter secret key |                                         |


**Response Parameters**:


| Parameter Name                            | Parameter Description | Type                   | schema                 |
| ----------------------------------------- | --------------------- | ---------------------- | ---------------------- |
| code                                      | Response status code  | integer(int32)         | integer(int32)         |
| data                                      | Response data         | PageInfo«Query Message List» | PageInfo«Query Message List» |
| &emsp;&emsp;endRow                        |                       | integer(int64)         |                        |
| &emsp;&emsp;hasNextPage                   |                       | boolean                |                        |
| &emsp;&emsp;hasPreviousPage               |                       | boolean                |                        |
| &emsp;&emsp;isFirstPage                   |                       | boolean                |                        |
| &emsp;&emsp;isLastPage                    |                       | boolean                |                        |
| &emsp;&emsp;list                          |                       | array                  | Query Message List     |
| &emsp;&emsp;&emsp;&emsp;addTime           |                       | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;automationId      |                       | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;conditionKey      |                       | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;content           |                       | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;contentLangs      |                       | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;deviceName        |                       | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;dk                |                       | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;executeId         |                       | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;firstLabel        |                       | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;i18nData          |                       | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;icon              |                       | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;id                |                       | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;isRead            |                       | boolean                |                        |
| &emsp;&emsp;&emsp;&emsp;logId             |                       | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;msgType           |                       | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;pk                |                       | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;productName       |                       | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;readTime          |                       | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;replaceData       |                       | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;sceneExecuteTime  |                       | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;sceneIcon         |                       | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;sceneName         |                       | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;secondaryLabel    |                       | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;shareCode         |                       | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;target            |                       | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;targetValue       |                       | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;title             |                       | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;titleLangs        |                       | string                 |                        |
| &emsp;&emsp;navigateFirstPage             |                       | integer(int32)         |                        |
| &emsp;&emsp;navigateLastPage              |                       | integer(int32)         |                        |
| &emsp;&emsp;navigatePages                 |                       | integer(int32)         |                        |
| &emsp;&emsp;navigatepageNums              |                       | array                  | integer                |
| &emsp;&emsp;nextPage                      |                       | integer(int32)         |                        |
| &emsp;&emsp;pageNum                       |                       | integer(int32)         |                        |
| &emsp;&emsp;pageSize                      |                       | integer(int32)         |                        |
| &emsp;&emsp;pages                         |                       | integer(int32)         |                        |
| &emsp;&emsp;prePage                       |                       | integer(int32)         |                        |
| &emsp;&emsp;size                          |                       | integer(int32)         |                        |
| &emsp;&emsp;startRow                      |                       | integer(int64)         |                        |
| &emsp;&emsp;total                         |                       | integer(int64)         |                        |
| extMsg                                    | Extended message      | string                 |                        |
| msg                                       | Response message      | string                 |                        |


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
				"addTime": 0,
				"automationId": "",
				"conditionKey": "",
				"content": "",
				"contentLangs": "",
				"deviceName": "",
				"dk": "",
				"executeId": 0,
				"firstLabel": 0,
				"i18nData": "",
				"icon": "",
				"id": "",
				"isRead": true,
				"logId": "",
				"msgType": 0,
				"pk": "",
				"productName": "",
				"readTime": 0,
				"replaceData": "",
				"sceneExecuteTime": 0,
				"sceneIcon": "",
				"sceneName": "",
				"secondaryLabel": 0,
				"shareCode": "",
				"target": "",
				"targetValue": "",
				"title": "",
				"titleLangs": ""
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