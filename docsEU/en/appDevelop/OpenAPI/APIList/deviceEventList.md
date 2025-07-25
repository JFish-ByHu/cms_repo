# Get Device Event List


**API Address**:`/v2/quecdatastorage/enduserapi/v2/deviceEventList`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Get device event list V2`



**Request Example**:


```javascript
{
  "codeList": [],
  "deviceKey": "",
  "endTime": 0,
  "page": 0,
  "pageSize": 0,
  "productKey": "",
  "startTime": 0,
  "timezone": ""
}
```


**Request Parameters**:


| Parameter Name         | Parameter Description                     | Request Type | Required | Data Type               | Schema                 |
| ---------------------- | ----------------------------------------- | ------------ | -------- | ---------------------- | ---------------------- |
| param                  | param                                     | body         | true     | Get Device Event List V2 Parameters | Get Device Event List V2 Parameters |
| &emsp;&emsp;codeList   | Thing model code list                     |              | true     | array                  | string                 |
| &emsp;&emsp;deviceKey  | Device Key                                |              | true     | string                 |                        |
| &emsp;&emsp;endTime    | End time (millisecond timestamp)          |              | true     | integer(int64)         |                        |
| &emsp;&emsp;page       | Current page, default is page 1           |              | false    | integer(int32)         |                        |
| &emsp;&emsp;pageSize   | Page size, default is 10 items            |              | false    | integer(int32)         |                        |
| &emsp;&emsp;productKey | Product Key                               |              | true     | string                 |                        |
| &emsp;&emsp;startTime  | Start time (millisecond timestamp)        |              | true     | integer(int64)         |                        |
| &emsp;&emsp;timezone   | Timezone offset [standard ±hh:mm format]  |              | false    | string                 |                        |


**Response Status**:


| Status Code | Description                     | Schema                                         |
| ----------- | ------------------------------- | ---------------------------------------------- |
| 200         | Successfully got device event list | Registration code response data OfPageInfoOfDeviceEventVO |
| 201         | Created                         |                                                |
| 401         | Unauthorized                    |                                                |
| 403         | Forbidden                       |                                                |
| 404         | Not Found                       |                                                |
| 5032        | Token verification failed       |                                                |
| 5106        | Please enter token              |                                                |


**Response Parameters**:


| Parameter Name                     | Parameter Description | Type                    | Schema                  |
| ---------------------------------- | --------------------- | ----------------------- | ----------------------- |
| code                               | Response status code  | integer(int32)          | integer(int32)          |
| data                               | Response data         | PageInfoOfDeviceEventVO | PageInfoOfDeviceEventVO |
| &emsp;&emsp;endRow                 |                       | integer(int64)          |                         |
| &emsp;&emsp;hasNextPage            |                       | boolean                 |                         |
| &emsp;&emsp;hasPreviousPage        |                       | boolean                 |                         |
| &emsp;&emsp;isFirstPage            |                       | boolean                 |                         |
| &emsp;&emsp;isLastPage             |                       | boolean                 |                         |
| &emsp;&emsp;list                   |                       | array                   | DeviceEventVO           |
| &emsp;&emsp;&emsp;&emsp;abId       | abId                  | integer                 |                         |
| &emsp;&emsp;&emsp;&emsp;createTime | Start time            | string                  |                         |
| &emsp;&emsp;&emsp;&emsp;deviceKey  | Device key            | string                  |                         |
| &emsp;&emsp;&emsp;&emsp;eventCode  | Event code            | string                  |                         |
| &emsp;&emsp;&emsp;&emsp;eventName  | Event name            | string                  |                         |
| &emsp;&emsp;&emsp;&emsp;eventType  | Event type            | string                  |                         |
| &emsp;&emsp;&emsp;&emsp;extData    | Extended information  | object                  |                         |
| &emsp;&emsp;&emsp;&emsp;id         | id                    | string                  |                         |
| &emsp;&emsp;&emsp;&emsp;outputData | Output parameters     | string                  |                         |
| &emsp;&emsp;&emsp;&emsp;packetId   | packetId              | integer                 |                         |
| &emsp;&emsp;&emsp;&emsp;productKey | Product productKey    | string                  |                         |
| &emsp;&emsp;&emsp;&emsp;ticket     | ticket                | string                  |                         |
| &emsp;&emsp;navigateFirstPage      |                       | integer(int32)          |                         |
| &emsp;&emsp;navigateLastPage       |                       | integer(int32)          |                         |
| &emsp;&emsp;navigatePages          |                       | integer(int32)          |                         |
| &emsp;&emsp;navigatepageNums       |                       | array                   | integer                 |
| &emsp;&emsp;nextPage               |                       | integer(int32)          |                         |
| &emsp;&emsp;pageNum                |                       | integer(int32)          |                         |
| &emsp;&emsp;pageSize               |                       | integer(int32)          |                         |
| &emsp;&emsp;pages                  |                       | integer(int32)          |                         |
| &emsp;&emsp;prePage                |                       | integer(int32)          |                         |
| &emsp;&emsp;size                   |                       | integer(int32)          |                         |
| &emsp;&emsp;startRow               |                       | integer(int64)          |                         |
| &emsp;&emsp;total                  |                       | integer(int64)          |                         |
| extMsg                             | Extended message      | string                  |                         |
| msg                                | Response message      | string                  |                         |


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
				"abId": 0,
				"createTime": "",
				"deviceKey": "",
				"eventCode": "",
				"eventName": "",
				"eventType": "",
				"extData": {},
				"id": "",
				"outputData": "",
				"packetId": 0,
				"productKey": "",
				"ticket": ""
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