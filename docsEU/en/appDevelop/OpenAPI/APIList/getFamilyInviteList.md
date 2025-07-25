# Query Invitation List


**API Address**:`/v2/family/enduserapi/getFamilyInviteList`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Query invitation list`


**Request Parameters**:


| Parameter Name | Parameter Description              | Request Type | Required | Data Type       | Schema |
| -------------- | ---------------------------------- | ------------ | -------- | -------------- | ------ |
| page           | Current page, default is page 1    | query        | false    | integer(int32) |        |
| pageSize       | Page size, default is 10 items     | query        | false    | integer(int32) |        |


**Response Status**:


| Status Code | Description                        | Schema                        |
| ----------- | ---------------------------------- | ----------------------------- |
| 200         | Successfully queried invitation list | Registration code response data |


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