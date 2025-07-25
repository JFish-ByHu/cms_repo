# Sharer Sets Share Usage Time


**Interface Address**:`/v2/binding/enduserapi/setShareTime`


**Request Method**:`PUT`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**Interface Description**:`Sharer Sets Share Usage Time`


**Request Parameters**:


| Parameter Name  | Parameter Description                                                                        | Request Type | Required | Data Type      | schema |
| --------------- | -------------------------------------------------------------------------------------------- | ------------ | -------- | -------------- | ------ |
| shareCode       | Share code                                                                                   | query        | true     | string         |        |
| sharingExpireAt | Device usage expiration time in millisecond timestamp, representing the time until which the shared device can be used by the person it's shared with | query | true     | integer(int64) |        |


**Response Status**:


| Status Code | Description                            | schema                     |
| ----------- | -------------------------------------- | -------------------------- |
| 200         | Sharer successfully set share usage time | Registration code response data |
| 5032        | Token verification failed              |                            |
| 5041        | No permission                          |                            |
| 5106        | Please enter token                     |                            |
| 5136        | Please enter share code                |                            |


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