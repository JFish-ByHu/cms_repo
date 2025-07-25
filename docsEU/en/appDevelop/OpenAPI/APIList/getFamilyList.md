# Query Family List


**API Address**:`/v2/family/enduserapi/getFamilyList`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Query family list`


**Request Parameters**:


| Parameter Name | Parameter Description                                                                         | Request Type | Required | Data Type       | Schema |
| -------------- | --------------------------------------------------------------------------------------------- | ------------ | -------- | -------------- | ------ |
| page           | Current page, default is page 1                                                               | query        | false    | integer(int32) |        |
| pageSize       | Page size, default is 10 items                                                                | query        | false    | integer(int32) |        |
| role           | Member role: 1-Creator  2-Administrator  3-Regular member, multiple roles separated by commas | query        | false    | string         |        |


**Response Status**:


| Status Code | Description                      | Schema                                                     |
| ----------- | -------------------------------- | ---------------------------------------------------------- |
| 200         | Successfully queried family list | Registration code response data«PageInfo«List«Create Family Return Info»»» |
| 5041        | No permission                    |                                                            |
| 5635        | Home mode not enabled            |                                                            |


**Response Parameters**:


| Parameter Name                            | Parameter Description                             | Type                                 | Schema                               |
| ----------------------------------------- | ------------------------------------------------- | ------------------------------------ | ------------------------------------ |
| code                                      | Response status code                              | integer(int32)                       | integer(int32)                       |
| data                                      | Response data                                     | PageInfo«List«Create Family Return Info»» | PageInfo«List«Create Family Return Info»» |
| &emsp;&emsp;endRow                        |                                                   | integer(int64)                       |                                      |
| &emsp;&emsp;hasNextPage                   |                                                   | boolean                              |                                      |
| &emsp;&emsp;hasPreviousPage               |                                                   | boolean                              |                                      |
| &emsp;&emsp;isFirstPage                   |                                                   | boolean                              |                                      |
| &emsp;&emsp;isLastPage                    |                                                   | boolean                              |                                      |
| &emsp;&emsp;list                          |                                                   | array                                | Create Family Return Info            |
| &emsp;&emsp;&emsp;&emsp;addTime           | Add time                                          | integer                              |                                      |
| &emsp;&emsp;&emsp;&emsp;addTimeTs         | Add time timestamp                                | integer                              |                                      |
| &emsp;&emsp;&emsp;&emsp;familyCoordinates | Family coordinates                                | string                               |                                      |
| &emsp;&emsp;&emsp;&emsp;familyLocation    | Family location                                   | string                               |                                      |
| &emsp;&emsp;&emsp;&emsp;familyName        | Family name                                       | string                               |                                      |
| &emsp;&emsp;&emsp;&emsp;fid               | Family ID                                         | string                               |                                      |
| &emsp;&emsp;&emsp;&emsp;memberRole        | User role 1: Creator  2: Administrator  3: Regular user | integer                        |                                      |
| &emsp;&emsp;navigateFirstPage             |                                                   | integer(int32)                       |                                      |
| &emsp;&emsp;navigateLastPage              |                                                   | integer(int32)                       |                                      |
| &emsp;&emsp;navigatePages                 |                                                   | integer(int32)                       |                                      |
| &emsp;&emsp;navigatepageNums              |                                                   | array                                | integer                              |
| &emsp;&emsp;nextPage                      |                                                   | integer(int32)                       |                                      |
| &emsp;&emsp;pageNum                       |                                                   | integer(int32)                       |                                      |
| &emsp;&emsp;pageSize                      |                                                   | integer(int32)                       |                                      |
| &emsp;&emsp;pages                         |                                                   | integer(int32)                       |                                      |
| &emsp;&emsp;prePage                       |                                                   | integer(int32)                       |                                      |
| &emsp;&emsp;size                          |                                                   | integer(int32)                       |                                      |
| &emsp;&emsp;startRow                      |                                                   | integer(int64)                       |                                      |
| &emsp;&emsp;total                         |                                                   | integer(int64)                       |                                      |
| extMsg                                    | Extended message                                  | string                               |                                      |
| msg                                       | Response message                                  | string                               |                                      |


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
				"addTimeTs": 0,
				"familyCoordinates": "",
				"familyLocation": "",
				"familyName": "",
				"fid": "",
				"memberRole": 0
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