# Query Current Family


**API Address**:`/v2/family/enduserapi/getCurrentFamily`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Query current family`


**Request Parameters**:


| Parameter Name     | Parameter Description      | Request Type | Required | Data Type | Schema |
| ------------------ | -------------------------- | ------------ | -------- | --------- | ------ |
| currentCoordinates | Current location coordinates | query      | false    | string    |        |
| fid                | Family ID                  | query        | false    | string    |        |


**Response Status**:


| Status Code | Description                       | Schema                                |
| ----------- | --------------------------------- | ------------------------------------- |
| 200         | Successfully queried current family | Registration code response data«Current Family» |
| 5041        | No permission                     |                                       |
| 5633        | Coordinate format error           |                                       |
| 5635        | Home mode not enabled             |                                       |


**Response Parameters**:


| Parameter Name                | Parameter Description | Type           | Schema         |
| ----------------------------- | --------------------- | -------------- | -------------- |
| code                          | Response status code  | integer(int32) | integer(int32) |
| data                          | Response data         | Current Family | Current Family |
| &emsp;&emsp;addTime           | Creation time         | integer(int64) |                |
| &emsp;&emsp;addTimeTs         | Creation timestamp    | integer(int64) |                |
| &emsp;&emsp;familyCoordinates | Family coordinates    | string         |                |
| &emsp;&emsp;familyLocation    | Family address        | string         |                |
| &emsp;&emsp;familyName        | Family name           | string         |                |
| &emsp;&emsp;fid               | Family ID             | string         |                |
| &emsp;&emsp;memberRole        | Family role           | integer(int32) |                |
| extMsg                        | Extended message      | string         |                |
| msg                           | Response message      | string         |                |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
		"addTime": 0,
		"addTimeTs": 0,
		"familyCoordinates": "",
		"familyLocation": "",
		"familyName": "",
		"fid": "",
		"memberRole": 0
	},
	"extMsg": "",
	"msg": ""
}
```