# Set Bluetooth Last Use Time


**Interface Address**:`/v2/binding/enduserapi/setBtLastUseTime`


**Request Method**:`PUT`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**Interface Description**:`Set Bluetooth Last Use Time`


**Request Parameters**:


| Parameter Name | Parameter Description                       | Request Type | Required | Data Type      | schema |
| -------------- | ------------------------------------------- | ------------ | -------- | -------------- | ------ |
| btLastUseTime  | Bluetooth last use time (millisecond timestamp) | query     | true     | integer(int64) |        |
| dk             | Device Key                                  | query        | true     | string         |        |
| pk             | Product Key                                 | query        | true     | string         |        |


**Response Status**:


| Status Code | Description                            | schema                     |
| ----------- | -------------------------------------- | -------------------------- |
| 200         | Bluetooth last use time set successfully | Registration code response data |
| 5032        | Token verification failed              |                            |
| 5106        | Please enter token                     |                            |


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