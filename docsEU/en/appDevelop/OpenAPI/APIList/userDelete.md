# Delete User


**Interface Address**:`/v2/enduser/enduserapi/userDelete`


**Request Method**:`DELETE`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**Interface Description**:`Delete User`


**Request Parameters**:


| Parameter Name | Parameter Description                                                   | Request Type | Required | Data Type      | schema |
| -------------- | ----------------------------------------------------------------------- | ------------ | -------- | -------------- | ------ |
| type           | Delete type: 1- Immediate deletion 2- Delete after 7 days, default is delete after 7 days | query | false  | integer(int32) |        |


**Response Status**:


| Status Code | Description                                          | schema                     |
| ----------- | ---------------------------------------------------- | -------------------------- |
| 200         | User logged out successfully                         | Registration code response data |
| 5032        | Token verification failed                            |                            |
| 5129        | User deletion failed                                 |                            |
| 5152        | Delete type parameter value invalid, value range: 1, 2 |                          |


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