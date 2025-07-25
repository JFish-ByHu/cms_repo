# Invite Family Member


**API Address**:`/v2/family/enduserapi/inviteFamilyMember`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Invite family member`


**Request Parameters**:


| Parameter Name | Parameter Description                                        | Request Type | Required | Data Type          | Schema |
| -------------- | ------------------------------------------------------------ | ------------ | -------- | ----------------- | ------ |
| fid            | Family ID                                                    | query        | true     | string            |        |
| invalidTime    | Invitation expiration time, millisecond timestamp            | query        | true     | integer(int64)    |        |
| memberName     | Member name                                                  | query        | true     | string            |        |
| memberRole     | Family member role:<br/>1-Family creator, only has this role in the family they created<br/>2-Family administrator<br/>3-Family regular member | query        | true     | integer(int32)    |        |
| acceptTime     | Invitation acceptance time                                   | query        | false    | string(date-time) |        |
| email          | Invitee's email                                              | query        | false    | string            |        |
| inviteTime     | Invitation time                                              | query        | false    | string(date-time) |        |
| phone          | Invitee's phone number                                       | query        | false    | string            |        |
| uid            | Invitee's uid                                                | query        | false    | string            |        |


**Response Status**:


| Status Code | Description                                         | Schema                     |
| ----------- | --------------------------------------------------- | -------------------------- |
| 200         | Family member invitation successful                 | Return registration code response data |
| 5019        | Phone number format incorrect                       |                            |
| 5145        | Timestamp format incorrect                          |                            |
| 5636        | Please enter Family ID                              |                            |
| 5638        | Regular member has no permission                    |                            |
| 5645        | Please enter member role                            |                            |
| 5646        | Please enter expiration time                        |                            |
| 5647        | Expiration time cannot be earlier than current time |                            |
| 5648        | Please enter member name                            |                            |
| 5649        | Member name too long, please enter a name within 256 characters |                  |
| 5650        | Member name already exists, please re-enter         |                            |
| 5651        | Please enter invitee information                    |                            |
| 5653        | User has already been invited, please do not invite again |                       |


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