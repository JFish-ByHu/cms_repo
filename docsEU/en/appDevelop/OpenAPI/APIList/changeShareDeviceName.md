# Shared Device Name Change by Share Recipient


**API Address**:`/v2/binding/enduserapi/changeShareDeviceName`


**Request Method**:`PUT`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Change the name of a shared device by the share recipient`


**Request Parameters**:


| Parameter Name | Parameter Description | Request Type | Required | Data Type | Schema |
| -------------- | --------------------- | ------------ | -------- | --------- | ------ |
| deviceName     | Device name           | query        | true     | string    |        |
| shareCode      | Share code            | query        | true     | string    |        |


**Response Status**:


| Status Code | Description                                           | Schema                        |
| ----------- | ----------------------------------------------------- | ----------------------------- |
| 200         | Successfully changed shared device name by recipient  | Registration code response data |
| 5032        | Token verification failed                             |                               |
| 5041        | No permission                                         |                               |
| 5068        | Please enter device name                              |                               |
| 5106        | Please enter token                                    |                               |
| 5136        | Please enter share code                               |                               |
| 5142        | This share has expired                                |                               |
| 5333        | Device name exceeds length limit                      |                               |


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