# Modify Device Information


**API Address**:`/v2/binding/enduserapi/setDeviceInfo`


**Request Method**:`PUT`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Modify device information`

**Request Parameters**:


| Parameter Name | Parameter Description | Request Type | Required | Data Type | Schema |
| -------------- | --------------------- | ------------ | -------- | --------- | ------ |
| deviceName     | Device name           | query        | true     | string    |        |
| dk             | Device Key            | query        | true     | string    |        |
| pk             | Product Key           | query        | true     | string    |        |


**Response Status**:


| Status Code | Description                       | Schema                        |
| ----------- | --------------------------------- | ----------------------------- |
| 200         | Device information modified successfully | Registration code response data |
| 5032        | Token verification failed         |                               |
| 5041        | No permission                     |                               |
| 5054        | Device information modification failed |                          |
| 5066        | Please enter Product Key          |                               |
| 5067        | Please enter Device Key           |                               |
| 5068        | Please enter device name          |                               |
| 5106        | Please enter token                |                               |
| 5333        | Device name exceeds length limit  |                               |


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