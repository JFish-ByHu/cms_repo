# Delete Device Information


**API Address**:`/v2/mobilepush/enduserapi/deleteDeviceInfo`


**Request Method**:`DELETE`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Delete device information`


**Request Parameters**:


| Parameter Name | Parameter Description                                          | Request Type | Required | Data Type | Schema |
| -------------- | -------------------------------------------------------------- | ------------ | -------- | --------- | ------ |
| deviceId       | Device identifier: Alibaba Cloud uses deviceId, Google uses fcmRegistToken | query    | true     | string    |        |


**Response Status**:


| Status Code | Description       | Schema                        |
| ----------- | ----------------- | ----------------------------- |
| 200         | Success           | Registration code response data |
| 5106        | Please enter token |                               |


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