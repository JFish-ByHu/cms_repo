# Set Family Member Role


**Interface Address**:`/v2/family/enduserapi/setFamilyMemberRole`


**Request Method**:`PUT`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**Interface Description**:`Set Family Member Role`


**Request Parameters**:


| Parameter Name | Parameter Description                                                                                              | Request Type | Required | Data Type      | schema |
| -------------- | ------------------------------------------------------------------------------------------------------------------ | ------------ | -------- | -------------- | ------ |
| fid            | Family ID                                                                                                          | query        | true     | string         |        |
| memberRole     | Family member role:<br/>1-Family creator, only has this role in self-created families<br/>2-Family administrator<br/>3-Regular family member | query    | true     | integer(int32) |        |
| memberUid      | Family member user ID                                                                                              | query        | true     | string         |        |


**Response Status**:


| Status Code | Description                                             | schema                     |
| ----------- | ------------------------------------------------------- | -------------------------- |
| 200         | Family member role modified successfully                | Registration code response data |
| 5628        | User information not found                              |                            |
| 5636        | Please enter Family ID                                  |                            |
| 5638        | Regular member does not have permission                 |                            |
| 5645        | Please enter member role                                |                            |
| 5648        | Please enter member name                                |                            |
| 5656        | Please enter family member ID                           |                            |
| 5657        | Forbidden to modify your own member permissions         |                            |
| 5658        | Member permission is invalid                            |                            |
| 6049        | Insufficient permissions, current user is a regular member |                        |


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