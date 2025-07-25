# Query Device Timezone


**API Address**:`/v2/binding/enduserapi/getDeviceTimeZone`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Query device timezone`


**Request Parameters**:


| Parameter Name | Parameter Description | Request Type | Required | Data Type | Schema |
| -------------- | --------------------- | ------------ | -------- | --------- | ------ |
| dk             | Device Key            | query        | true     | string    |        |
| pk             | Product Key           | query        | true     | string    |        |


**Response Status**:


| Status Code | Description                          | Schema                                 |
| ----------- | ------------------------------------ | -------------------------------------- |
| 200         | Successfully queried device timezone | Registration code response data«DeviceTimeZone» |
| 5041        | No permission                        |                                        |
| 5066        | Please enter Product Key             |                                        |
| 5067        | Please enter Device Key              |                                        |


**Response Parameters**:


| Parameter Name         | Parameter Description                           | Type           | Schema         |
| ---------------------- | ----------------------------------------------- | -------------- | -------------- |
| code                   | Response status code                            | integer(int32) | integer(int32) |
| data                   | Response data                                   | DeviceTimeZone | DeviceTimeZone |
| &emsp;&emsp;timeZone   | Timezone. Follows the +-HH:mm or +-HH format   | string         |                |
| &emsp;&emsp;timeZoneId | Timezone ID                                     | string         |                |
| extMsg                 | Extended message                                | string         |                |
| msg                    | Response message                                | string         |                |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
		"timeZone": "",
		"timeZoneId": ""
	},
	"extMsg": "",
	"msg": ""
}
```