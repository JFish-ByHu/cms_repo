# User Logout


**Interface Address**:`/v2/enduser/enduserapi/userLogout`


**Request Method**:`DELETE`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**Interface Description**:`User Logout`


**Request Parameters**:


| Parameter Name | Parameter Description                                                                      | Request Type | Required | Data Type | schema |
| -------------- | ------------------------------------------------------------------------------------------ | ------------ | -------- | --------- | ------ |
| deviceId       | Push device ID: Alibaba Cloud push platform uses pushToken, Google push platform uses fcmToken | query     | false    | string    |        |


**Response Status**:


| Status Code | Description            | schema                     |
| ----------- | ---------------------- | -------------------------- |
| 200         | User logout successful | Registration code response data |
| 5032        | Token verification failed |                         |
| 5045        | User logout failed     |                            |


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