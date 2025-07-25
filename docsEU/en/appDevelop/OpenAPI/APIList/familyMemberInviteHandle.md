# Family Member Invitation Handling


**API Address**:`/v2/family/enduserapi/familyMemberInviteHandle`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Handling of family member invitations`


**Request Parameters**:


| Parameter Name | Parameter Description                                   | Request Type | Required | Data Type       | Schema |
| -------------- | ------------------------------------------------------- | ------------ | -------- | -------------- | ------ |
| decide         | Decision regarding invitation: 0-Reject 1-Accept        | query        | true     | integer(int32) |        |
| fid            | Family ID                                               | query        | true     | string         |        |


**Response Status**:


| Status Code | Description                                   | Schema                        |
| ----------- | --------------------------------------------- | ----------------------------- |
| 200         | Family member invitation handling successful  | Registration code response data |
| 5636        | Please enter family ID                        |                               |
| 5654        | Please enter whether to accept the invitation |                               |
| 5655        | Accept invitation information format error    |                               |


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