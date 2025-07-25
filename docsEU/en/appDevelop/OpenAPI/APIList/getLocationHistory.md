# Get Device Location History


**API Address**:`/v2/quecdatastorage/enduserapi/getLocationHistory`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Get device location history`


**Request Parameters**:


| Parameter Name | Parameter Description                                                                                                                   | Request Type | Required | Data Type       | Schema |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------ | -------- | -------------- | ------ |
| dk             | Device Key                                                                                                                              | query        | true     | string         |        |
| endTimestamp   | End time (millisecond timestamp)                                                                                                        | query        | true     | integer(int64) |        |
| pk             | Product Key                                                                                                                             | query        | true     | string         |        |
| startTimestamp | Start time (millisecond timestamp)                                                                                                      | query        | true     | integer(int64) |        |
| gatewayDk      | Gateway device's Device Key                                                                                                             | query        | false    | string         |        |
| gatewayPk      | Gateway device's Product Key                                                                                                            | query        | false    | string         |        |
| locateTypes    | Location types (by default queries all types of locations): GP/GL/GA/GN/BD/PQ/LBS, when querying multiple types, separate with commas   | query        | false    | string         |        |
| timeStr        | Query date                                                                                                                              | query        | false    | string         |        |


**Response Status**:


| Status Code | Description                                | Schema                                       |
| ----------- | ------------------------------------------ | -------------------------------------------- |
| 200         | Successfully got device location history   | Registration code response data OfListOf Device Track |
| 401         | Unauthorized                               |                                              |
| 403         | Forbidden                                  |                                              |
| 404         | Not Found                                  |                                              |
| 5032        | Token verification failed                  |                                              |
| 5106        | Please enter token                         |                                              |


**Response Parameters**:


| Parameter Name           | Parameter Description                  | Type              | Schema         |
| ------------------------ | ------------------------------------- | ----------------- | -------------- |
| code                     | Response status code                  | integer(int32)    | integer(int32) |
| data                     | Response data                         | array             | Device Track   |
| &emsp;&emsp;accuracy     | Accuracy                              | string            |                |
| &emsp;&emsp;bdLat        | Device latitude. BD09                 | number            |                |
| &emsp;&emsp;bdLng        | Device longitude. BD09                | number            |                |
| &emsp;&emsp;deviceKey    | dk                                    | string            |                |
| &emsp;&emsp;gcjLat       | Device latitude. GCJ02                | number            |                |
| &emsp;&emsp;gcjLng       | Device longitude. GCJ02               | number            |                |
| &emsp;&emsp;hdop         | Horizontal Dilution of Precision. 0.5-99.99 | number(float) |                |
| &emsp;&emsp;id           | Track ID                              | string            |                |
| &emsp;&emsp;locateTime   |                                       | string(date-time) |                |
| &emsp;&emsp;locateTimeTs |                                       | integer(int64)    |                |
| &emsp;&emsp;locationType | Location type, GP/GL/GA/GN/BD/PQ/LBS  | string            |                |
| &emsp;&emsp;productKey   | pk                                    | string            |                |
| &emsp;&emsp;satellites   | Current number of satellites          | integer(int32)    |                |
| &emsp;&emsp;tsLocateTime |                                       | integer(int64)    |                |
| &emsp;&emsp;wgsLat       | Device latitude. WGS84                | number            |                |
| &emsp;&emsp;wgsLng       | Device longitude. WGS84               | number            |                |
| extMsg                   | Extended message                      | string            |                |
| msg                      | Response message                      | string            |                |


**Response Example**:
```javascript
{
	"code": 0,
	"data": [
		{
			"accuracy": "",
			"bdLat": 0,
			"bdLng": 0,
			"deviceKey": "",
			"gcjLat": 0,
			"gcjLng": 0,
			"hdop": 0,
			"id": "",
			"locateTime": "",
			"locateTimeTs": 0,
			"locationType": "",
			"productKey": "",
			"satellites": 0,
			"tsLocateTime": 0,
			"wgsLat": 0,
			"wgsLng": 0
		}
	],
	"extMsg": "",
	"msg": ""
}
```