# Delete Family


**API Address**:`/v2/family/enduserapi/deleteFamily`


**Request Method**:`DELETE`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Delete family`


**Request Parameters**:


| Parameter Name | Parameter Description | Request Type | Required | Data Type | Schema |
| -------------- | --------------------- | ------------ | -------- | --------- | ------ |
| fid            | Family ID             | query        | true     | string    |        |


**Response Status**:


| Status Code | Description                                        | Schema                        |
| ----------- | -------------------------------------------------- | ----------------------------- |
| 200         | Family modified successfully                       | Registration code response data |
| 5041        | No permission                                      |                               |
| 5618        | Please enter family ID                             |                               |
| 5622        | Family deletion failed                             |                               |
| 5629        | Cannot remove, at least one family must be retained |                               |
| 5635        | Home mode not enabled                              |                               |
| 6049        | Insufficient permission, current user is a regular member |                         |


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