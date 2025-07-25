# Leave Family


**API Address**:`/v2/family/enduserapi/leaveFamily`


**Request Method**:`DELETE`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Leave family`


**Request Parameters**:


| Parameter Name | Parameter Description | Request Type | Required | Data Type | schema |
| -------------- | --------------------- | ------------ | -------- | --------- | ------ |
| fid            | Family ID             | query        | true     | string    |        |


**Response Status**:


| Status Code | Description                                 | Schema                     |
| ----------- | ------------------------------------------- | -------------------------- |
| 200         | Successfully left family                    | Return registration code response data |
| 5635        | Home mode not enabled                       |                            |
| 5636        | Please enter Family ID                      |                            |
| 5661        | Cannot leave a family you created           |                            |
| 5671        | User does not have permission for this family |                          |


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