# Query Family Room List


**API Address**:`/v2/family/enduserapi/getFamilyRoomList`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Query room list in family`


**Request Parameters**:


| Parameter Name | Parameter Description              | Request Type | Required | Data Type       | Schema |
| -------------- | ---------------------------------- | ------------ | -------- | -------------- | ------ |
| fid            | Family ID                          | query        | true     | string         |        |
| page           | Current page, default is page 1    | query        | false    | integer(int32) |        |
| pageSize       | Page size, default is 10 items     | query        | false    | integer(int32) |        |


**Response Status**:


| Status Code | Description                          | Schema                                             |
| ----------- | ------------------------------------ | -------------------------------------------------- |
| 200         | Successfully queried family room list | Registration code response data«PageInfo«List«RoomListVO»»» |
| 5041        | No permission                        |                                                    |
| 5618        | Please enter family ID               |                                                    |


**Response Parameters**:


| Parameter Name                   | Parameter Description | Type                       | Schema                     |
| -------------------------------- | --------------------- | -------------------------- | -------------------------- |
| code                             | Response status code  | integer(int32)             | integer(int32)             |
| data                             | Response data         | PageInfo«List«RoomListVO»» | PageInfo«List«RoomListVO»» |
| &emsp;&emsp;endRow               |                       | integer(int64)             |                            |
| &emsp;&emsp;hasNextPage          |                       | boolean                    |                            |
| &emsp;&emsp;hasPreviousPage      |                       | boolean                    |                            |
| &emsp;&emsp;isFirstPage          |                       | boolean                    |                            |
| &emsp;&emsp;isLastPage           |                       | boolean                    |                            |
| &emsp;&emsp;list                 |                       | array                      | RoomListVO                 |
| &emsp;&emsp;&emsp;&emsp;addTime  | Add time              | integer                    |                            |
| &emsp;&emsp;&emsp;&emsp;frid     | Room ID               | string                     |                            |
| &emsp;&emsp;&emsp;&emsp;roomName | Room name             | string                     |                            |
| &emsp;&emsp;&emsp;&emsp;roomSort | Room order            | integer                    |                            |
| &emsp;&emsp;navigateFirstPage    |                       | integer(int32)             |                            |
| &emsp;&emsp;navigateLastPage     |                       | integer(int32)             |                            |
| &emsp;&emsp;navigatePages        |                       | integer(int32)             |                            |
| &emsp;&emsp;navigatepageNums     |                       | array                      | integer                    |
| &emsp;&emsp;nextPage             |                       | integer(int32)             |                            |
| &emsp;&emsp;pageNum              |                       | integer(int32)             |                            |
| &emsp;&emsp;pageSize             |                       | integer(int32)             |                            |
| &emsp;&emsp;pages                |                       | integer(int32)             |                            |
| &emsp;&emsp;prePage              |                       | integer(int32)             |                            |
| &emsp;&emsp;size                 |                       | integer(int32)             |                            |
| &emsp;&emsp;startRow             |                       | integer(int64)             |                            |
| &emsp;&emsp;total                |                       | integer(int64)             |                            |
| extMsg                           | Extended message      | string                     |                            |
| msg                              | Response message      | string                     |                            |


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
				"frid": "",
				"roomName": "",
				"roomSort": 0
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