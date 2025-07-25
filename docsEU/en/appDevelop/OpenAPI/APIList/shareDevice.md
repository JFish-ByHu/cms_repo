# Share Recipient Accepts Share


**Interface Address**:`/v2/binding/enduserapi/shareDevice`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**Interface Description**:`Share Recipient Accepts Share`


**Request Parameters**:


| Parameter Name | Parameter Description | Request Type | Required | Data Type | schema |
| -------------- | --------------------- | ------------ | -------- | --------- | ------ |
| shareCode      | Share code            | query        | true     | string    |        |
| deviceName     | Device name           | query        | false    | string    |        |


**Response Status**:


| Status Code | Description                                                                                                                     | schema                     |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| 200         | Share recipient accepted share successfully                                                                                     | Registration code response data |
| 5032        | Token verification failed                                                                                                       |                            |
| 5049        | Device already bound                                                                                                            |                            |
| 5106        | Please enter token                                                                                                              |                            |
| 5136        | Please enter share code                                                                                                         |                            |
| 5137        | Invalid share code                                                                                                              |                            |
| 5138        | Device sharing failed                                                                                                           |                            |
| 5151        | With override flag 3, the device usage expiration time of the share code cannot be less than that of the currently used share code |                           |
| 5333        | Device name exceeds length limit                                                                                                |                            |


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