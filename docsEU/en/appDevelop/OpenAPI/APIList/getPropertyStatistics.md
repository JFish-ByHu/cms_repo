# Get Device Property Statistics


**API Address**:`/v2/quecdatastorage/enduserapi/getPropertyStatistics`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Get device property statistics data`


**Request Parameters**:


| Parameter Name    | Parameter Description                                        | Request Type | Required | Data Type       | Schema |
| ----------------- | ------------------------------------------------------------ | ------------ | -------- | -------------- | ------ |
| attributeCode     | Thing model property identifier                              | query        | true     | string         |        |
| dk                | Device Key                                                   | query        | true     | string         |        |
| pk                | Product Key                                                  | query        | true     | string         |        |
| countType         | Aggregation type (default 3): 1-Maximum 2-Minimum 3-Average 4-Difference 5-Total | query        | false    | integer(int32) |        |
| currentTimestamp  | Current time (millisecond timestamp)                         | query        | false    | integer(int64) |        |
| gatewayDk         | Gateway device's Device Key                                  | query        | false    | string         |        |
| gatewayPk         | Gateway device's Product Key                                 | query        | false    | string         |        |
| timeGranularities | Statistical time granularity, use English comma to separate when querying multiple granularities (default 1): 1-Day 2-Week 3-Month 4-Year | query        | false    | string         |        |
| timeStr           | Query date                                                   | query        | false    | string         |        |


**Response Status**:


| Status Code | Description                              | Schema                                        |
| ----------- | ---------------------------------------- | --------------------------------------------- |
| 200         | Successfully retrieved device property data list | Return registration code response data of list of device property comparison values |
| 401         | Unauthorized                             |                                               |
| 403         | Forbidden                                |                                               |
| 404         | Not Found                                |                                               |
| 5032        | Token verification failed                |                                               |
| 5106        | Please enter token                       |                                               |


**Response Parameters**:


| Parameter Name             | Parameter Description                      | Type           | Schema                 |
| -------------------------- | ------------------------------------------ | -------------- | ---------------------- |
| code                       | Response status code                       | integer(int32) | integer(int32)         |
| data                       | Response data                              | array          | Device property comparison value |
| &emsp;&emsp;statValue      | Current period comparison value            | object         |                        |
| &emsp;&emsp;timeGranularity | Time unit [1-Day, 2-Week, 3-Month, 4-Year] | integer(int32) |                        |
| extMsg                     | Extended message                           | string         |                        |
| msg                        | Response message                           | string         |                        |


**Response Example**:
```javascript
{
	"code": 0,
	"data": [
		{
			"statValue": {},
			"timeGranularity": 0
		}
	],
	"extMsg": "",
	"msg": ""
}
```