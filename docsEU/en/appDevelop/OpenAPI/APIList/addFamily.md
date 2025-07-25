# Create Home


**API Address**:`/v2/family/enduserapi/addFamily`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Create home`



**Request Example**:


```javascript
{
  "familyCoordinates": "",
  "familyLocation": "",
  "familyName": "",
  "familyRoomList": []
}
```


**Request Parameters**:


| Parameter Name               | Description  | Request Type | Required | Data Type   | Schema     |
| ---------------------------- | ------------ | ------------ | -------- | ----------- | ---------- |
| addFamilyDto                 | addFamilyDto | body         | true     | Create home | Create home |
| &emsp;&emsp;familyCoordinates | Home coordinates | | false    | string      |           |
| &emsp;&emsp;familyLocation   | Home location |            | false    | string      |           |
| &emsp;&emsp;familyName       | Home name    |            | true     | string      |           |
| &emsp;&emsp;familyRoomList   | Room list    |            | false    | array       | string    |


**Response Status**:


| Status Code | Description                                    | Schema                              |
| ----------- | ---------------------------------------------- | ----------------------------------- |
| 200         | Home created successfully                      | Return registration code response«Create home return info» |
| 5613        | Please enter home name                         |                                     |
| 5616        | Home name already exists                       |                                     |
| 5619        | Failed to create home                          |                                     |
| 5620        | Failed to create room                          |                                     |
| 5632        | Failed to initialize frequently used device list |                                   |
| 5633        | Coordinates format error                       |                                     |
| 5635        | Home mode not enabled                          |                                     |
| 5641        | Room name too long, please enter within 30 characters |                              |
| 5659        | Home name too long, please enter within 256 characters |                             |
| 5660        | Home address too long, please enter within 256 characters |                          |
| 5673        | Duplicate room name                            |                                     |
| 5676        | Product service exception                      |                                     |


**Response Parameters**:


| Parameter Name               | Description                                | Type             | Schema           |
| ---------------------------- | ------------------------------------------ | ---------------- | ---------------- |
| code                         | Response code                              | integer(int32)   | integer(int32)   |
| data                         | Response data                              | Create home return info | Create home return info |
| &emsp;&emsp;addTime          | Add time                                   | integer(int64)   |                  |
| &emsp;&emsp;addTimeTs        | Add time timestamp                         | integer(int64)   |                  |
| &emsp;&emsp;familyCoordinates | Home coordinates                          | string           |                  |
| &emsp;&emsp;familyLocation   | Home location                              | string           |                  |
| &emsp;&emsp;familyName       | Home name                                  | string           |                  |
| &emsp;&emsp;fid              | Home ID                                    | string           |                  |
| &emsp;&emsp;memberRole       | User role 1: Creator  2: Admin  3: Regular user | integer(int32)   |                  |
| extMsg                       | Extended message                           | string           |                  |
| msg                          | Response message                           | string           |                  |


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