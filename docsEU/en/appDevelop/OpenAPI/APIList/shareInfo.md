# Sharer Sets Device Share Information


**Interface Address**:`/v2/binding/enduserapi/shareInfo`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**Interface Description**:`Sharer Sets Device Share Information`


**Request Parameters**:


| Parameter Name    | Parameter Description                                                                                                                  | Request Type | Required | Data Type      | schema |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------ | -------- | -------------- | ------ |
| acceptingExpireAt | Share QR code seed expiration timestamp (milliseconds), indicating that the share will expire if not used within this timestamp        | query        | true     | integer(int64) |        |
| dk                | Device Key                                                                                                                             | query        | true     | string         |        |
| pk                | Product Key                                                                                                                            | query        | true     | string         |        |
| authKey           | AuthKey                                                                                                                                | query        | false    | string         |        |
| coverMark         | Override flag<br/>1 Directly override previous valid share (default) (override existing share code)<br/>2 Directly add, allow multiple coexisting shares<br/>3 Only allow override if share time has been extended | query | false | integer(int32) |        |
| sharingExpireAt   | Device usage expiration timestamp (milliseconds), representing how long the shared device can be used by the recipient<br/>If not provided, it is valid for life, only revoked when the authorizer actively unbinds | query | false | integer(int64) |        |


**Response Status**:


| Status Code | Description                                            | schema                     |
| ----------- | ------------------------------------------------------ | -------------------------- |
| 200         | Sharer successfully set device share information       | Registration code response data«string» |
| 5032        | Token verification failed                              |                            |
| 5066        | Please enter Product Key                               |                            |
| 5067        | Please enter Device Key                                |                            |
| 5106        | Please enter token                                     |                            |
| 5132        | Please enter share QR code seed expiration time        |                            |
| 5133        | Override flag parameter value out of range             |                            |
| 5134        | Failed to add device share information                 |                            |
| 5135        | No permission to share this device                     |                            |
| 5145        | Timestamp format incorrect                             |                            |
| 5153        | Device usage expiration time must be greater than share QR code seed expiration time |              |
| 5360        | Cannot share unverified bound device                   |                            |


**Response Parameters**:


| Parameter Name | Parameter Description | Type           | schema         |
| -------------- | --------------------- | -------------- | -------------- |
| code           | Response status code  | integer(int32) | integer(int32) |
| data           | Response data         | string         |                |
| extMsg         | Extended message      | string         |                |
| msg            | Response message      | string         |                |


**Response Example**:
```javascript
{
	"code": 0,
	"data": "",
	"extMsg": "",
	"msg": ""
}
```