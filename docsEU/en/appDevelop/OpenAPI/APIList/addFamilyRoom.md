# Create Room


**API Address**:`/v2/family/enduserapi/addFamilyRoom`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Create room`


**Request Parameters**:


| Parameter Name | Description | Request Type | Required | Data Type | Schema |
| -------------- | ----------- | ------------ | -------- | --------- | ------ |
| fid            | Home ID     | query        | true     | string    |        |
| roomName       | Room name   | query        | true     | string    |        |


**Response Status**:


| Status Code | Description                                   | Schema                             |
| ----------- | --------------------------------------------- | ---------------------------------- |
| 200         | Room created successfully                     | Return registration code response«AddRoomVO» |
| 5041        | No permission                                 |                                    |
| 5618        | Please enter home ID                          |                                    |
| 5620        | Failed to create room                         |                                    |
| 5635        | Home mode not enabled                         |                                    |
| 5640        | Please enter room name                        |                                    |
| 5641        | Room name too long, please enter within 30 characters |                            |
| 5642        | Room name already exists, please re-enter     |                                    |
| 6049        | Insufficient permissions, current user is a regular member |                        |


**Response Parameters**:


| Parameter Name        | Description      | Type           | Schema         |
| --------------------- | ---------------- | -------------- | -------------- |
| code                  | Response code    | integer(int32) | integer(int32) |
| data                  | Response data    | AddRoomVO      | AddRoomVO      |
| &emsp;&emsp;frid      | Room ID          | string         |                |
| &emsp;&emsp;roomName  | Room name        | string         |                |
| extMsg                | Extended message | string         |                |
| msg                   | Response message | string         |                |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
		"frid": "",
		"roomName": ""
	},
	"extMsg": "",
	"msg": ""
}
```