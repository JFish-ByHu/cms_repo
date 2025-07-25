# Get Device Property Data List


**API Address**:`/v2/quecdatastorage/enduserapi/getPropertyDataList`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Get device property data list`


**Request Parameters**:


| Parameter Name  | Parameter Description         | Request Type | Required | Data Type       | Schema |
| --------------- | ----------------------------- | ------------ | -------- | -------------- | ------ |
| attributeCode   | Thing model property identifier | query     | true     | string         |        |
| dk              | Device Key                    | query        | true     | string         |        |
| endTimestamp    | End time (millisecond timestamp) | query    | true     | integer(int64) |        |
| pk              | Product Key                   | query        | true     | string         |        |
| startTimestamp  | Start time (millisecond timestamp) | query  | true     | integer(int64) |        |
| gatewayDk       | Gateway device's Device Key   | query        | false    | string         |        |
| gatewayPk       | Gateway device's Product Key  | query        | false    | string         |        |
| page            | Current page, default is page 1 | query     | false    | integer(int32) |        |
| pageSize        | Page size, default is 10 items | query      | false    | integer(int32) |        |
| timeStr         | Query date                    | query        | false    | string         |        |


**Response Status**:


| Status Code | Description                              | Schema                                     |
| ----------- | ---------------------------------------- | ------------------------------------------ |
| 200         | Successfully retrieved device property data list | Return registration code response data of PageInfo of property data |
| 401         | Unauthorized                             |                                            |
| 403         | Forbidden                                |                                            |
| 404         | Not Found                                |                                            |
| 5032        | Token verification failed                |                                            |
| 5106        | Please enter token                       |                                            |


**Response Parameters**:


| Parameter Name                        | Parameter Description | Type               | Schema             |
| ------------------------------------- | --------------------- | ------------------ | ------------------ |
| code                                  | Response status code  | integer(int32)     | integer(int32)     |
| data                                  | Response data         | PageInfo of property data | PageInfo of property data |
| &emsp;&emsp;endRow                    |                       | integer(int64)     |                    |
| &emsp;&emsp;hasNextPage               |                       | boolean            |                    |
| &emsp;&emsp;hasPreviousPage           |                       | boolean            |                    |
| &emsp;&emsp;isFirstPage               |                       | boolean            |                    |
| &emsp;&emsp;isLastPage                |                       | boolean            |                    |
| &emsp;&emsp;list                      |                       | array              | Property data      |
| &emsp;&emsp;&emsp;&emsp;createTime    |                       | string             |                    |
| &emsp;&emsp;&emsp;&emsp;createTimeStr |                       | string             |                    |
| &emsp;&emsp;&emsp;&emsp;createTimeTs  |                       | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;deviceKey     | dk                    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;productKey    | pk                    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;propertyCode  | Property identifier   | string             |                    |
| &emsp;&emsp;&emsp;&emsp;propertyValue | Property value        | object             |                    |
| &emsp;&emsp;&emsp;&emsp;tsCreateTime  | Record time           | integer            |                    |
| &emsp;&emsp;navigateFirstPage         |                       | integer(int32)     |                    |
| &emsp;&emsp;navigateLastPage          |                       | integer(int32)     |                    |
| &emsp;&emsp;navigatePages             |                       | integer(int32)     |                    |
| &emsp;&emsp;navigatepageNums          |                       | array              | integer            |
| &emsp;&emsp;nextPage                  |                       | integer(int32)     |                    |
| &emsp;&emsp;pageNum                   |                       | integer(int32)     |                    |
| &emsp;&emsp;pageSize                  |                       | integer(int32)     |                    |
| &emsp;&emsp;pages                     |                       | integer(int32)     |                    |
| &emsp;&emsp;prePage                   |                       | integer(int32)     |                    |
| &emsp;&emsp;size                      |                       | integer(int32)     |                    |
| &emsp;&emsp;startRow                  |                       | integer(int64)     |                    |
| &emsp;&emsp;total                     |                       | integer(int64)     |                    |
| extMsg                                | Extended message      | string             |                    |
| msg                                   | Response message      | string             |                    |


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
				"createTime": "",
				"createTimeStr": "",
				"createTimeTs": 0,
				"deviceKey": "",
				"productKey": "",
				"propertyCode": "",
				"propertyValue": {},
				"tsCreateTime": 0
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