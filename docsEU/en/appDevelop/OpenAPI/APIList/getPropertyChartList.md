# Get Device Property Chart List


**API Address**:`/v2/quecdatastorage/enduserapi/getPropertyChartList`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Get device property chart list`


**Request Parameters**:


| Parameter Name   | Parameter Description                                        | Request Type | Required | Data Type       | Schema |
| ---------------- | ------------------------------------------------------------ | ------------ | -------- | -------------- | ------ |
| attributeCode    | Thing model property identifier, use English comma to separate when querying multiple properties, maximum 10 properties | query        | true     | string         |        |
| dk               | Device Key                                                   | query        | true     | string         |        |
| endTimestamp     | End time (millisecond timestamp)                             | query        | true     | integer(int64) |        |
| pk               | Product Key                                                  | query        | true     | string         |        |
| startTimestamp   | Start time (millisecond timestamp)                           | query        | true     | integer(int64) |        |
| countType        | Aggregation type (default 3): 1-Maximum 2-Minimum 3-Average 4-Difference 5-Total | query        | false    | integer(int32) |        |
| gatewayDk        | Gateway device's Device Key                                  | query        | false    | string         |        |
| gatewayPk        | Gateway device's Product Key                                 | query        | false    | string         |        |
| timeGranularity  | Statistical time granularity (default 2): 1-Month 2-Day 3-Hour | query        | false    | integer(int32) |        |
| timeStr          | Query date                                                   | query        | false    | string         |        |


**Response Status**:


| Status Code | Description                              | Schema                                        |
| ----------- | ---------------------------------------- | --------------------------------------------- |
| 200         | Successfully retrieved device property chart list | Return registration code response data of list of property chart output parameters |
| 401         | Unauthorized                             |                                               |
| 403         | Forbidden                                |                                               |
| 404         | Not Found                                |                                               |
| 5032        | Token verification failed                |                                               |
| 5106        | Please enter token                       |                                               |


**Response Parameters**:


| Parameter Name          | Parameter Description | Type           | Schema         |
| ----------------------- | --------------------- | -------------- | -------------- |
| code                    | Response status code  | integer(int32) | integer(int32) |
| data                    | Response data         | array          | Property chart output parameter |
| &emsp;&emsp;propertyCode | Thing model code     | string         |                |
| &emsp;&emsp;xaxisData   | Record time           | array          | string         |
| &emsp;&emsp;xaxisDataTs |                      | array          | integer        |
| &emsp;&emsp;yaxisData   | Property content      | array          | object         |
| extMsg                  | Extended message      | string         |                |
| msg                     | Response message      | string         |                |


**Response Example**:
```javascript
{
	"code": 0,
	"data": [
		{
			"propertyCode": "",
			"xaxisData": [],
			"xaxisDataTs": [],
			"yaxisData": []
		}
	],
	"extMsg": "",
	"msg": ""
}
```