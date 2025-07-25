# Owner Cancels Device Sharing


**API Address**:`/v2/binding/enduserapi/ownerUserUnshareDevice`


**Request Method**:`DELETE`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Owner cancels device sharing`

**Request Parameters**:


| Parameter Name | Parameter Description | Request Type | Required | Data Type | schema |
| -------------- | --------------------- | ------------ | -------- | --------- | ------ |
| shareCode      | Share code            | query        | true     | string    |        |


**Response Status**:


| Status Code | Description                   | Schema                     |
| ----------- | ----------------------------- | -------------------------- |
| 200         | Device sharing canceled successfully | Return registration code response data |
| 5032        | Token verification failed     |                            |
| 5041        | No permission                 |                            |
| 5106        | Please enter token            |                            |
| 5136        | Please enter share code       |                            |
| 5142        | This share has expired        |                            |


**Response Parameters**:


| Parameter Name | Parameter Description | Type           | Schema         |
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