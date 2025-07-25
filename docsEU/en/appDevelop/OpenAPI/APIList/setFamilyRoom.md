# Modify Room


**Interface Address**:`/v2/family/enduserapi/setFamilyRoom`


**Request Method**:`PUT`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**Interface Description**:`Create Room`


**Request Parameters**:


| Parameter Name | Parameter Description | Request Type | Required | Data Type | schema |
| -------------- | --------------------- | ------------ | -------- | --------- | ------ |
| frid           | Room ID               | query        | true     | string    |        |
| roomName       | Room name             | query        | true     | string    |        |


**Response Status**:


| Status Code | Description                                          | schema                     |
| ----------- | ---------------------------------------------------- | -------------------------- |
| 200         | Room modified successfully                           | Registration code response data«object» |
| 5041        | No permission                                        |                            |
| 5620        | Failed to modify room                                |                            |
| 5637        | Please enter Room ID                                 |                            |
| 5640        | Please enter room name                               |                            |
| 5641        | Room name too long, please enter a room name within 30 characters |                |
| 5642        | Room name already exists, please enter again         |                            |
| 6049        | Insufficient permissions, current user is a regular member |                      |


**Response Parameters**:


| Parameter Name | Parameter Description | Type           | schema         |
| -------------- | --------------------- | -------------- | -------------- |
| code           | Response status code  | integer(int32) | integer(int32) |
| data           | Response data         | object         |                |
| extMsg         | Extended message      | string         |                |
| msg            | Response message      | string         |                |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {},
	"extMsg": "",
	"msg": ""
}
```