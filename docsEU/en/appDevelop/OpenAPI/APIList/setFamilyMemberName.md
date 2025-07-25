# Modify Family Member Name


**Interface Address**:`/v2/family/enduserapi/setFamilyMemberName`


**Request Method**:`PUT`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**Interface Description**:`Modify Family Member Name`


**Request Parameters**:


| Parameter Name | Parameter Description      | Request Type | Required | Data Type | schema |
| -------------- | -------------------------- | ------------ | -------- | --------- | ------ |
| fid            | Family ID                  | query        | true     | string    |        |
| memberName     | Member name                | query        | true     | string    |        |
| memberUid      | Family member user ID      | query        | true     | string    |        |


**Response Status**:


| Status Code | Description                                              | schema                     |
| ----------- | -------------------------------------------------------- | -------------------------- |
| 200         | Family member name modified successfully                 | Registration code response data |
| 5628        | User information not found                               |                            |
| 5636        | Please enter Family ID                                   |                            |
| 5638        | Regular member does not have permission                  |                            |
| 5648        | Please enter member name                                 |                            |
| 5656        | Please enter family member ID                            |                            |
| 6049        | Insufficient permissions, current user is a regular member |                          |
| 6053        | Insufficient permissions, user being modified is not in this family |                |


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