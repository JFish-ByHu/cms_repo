# Delete Message


**API Address**:`/v2/mobilepush/enduserapi/deleteMsg`


**Request Method**:`DELETE`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Delete message`


**Request Parameters**:


| Parameter Name | Parameter Description | Request Type | Required | Data Type | Schema |
| -------------- | --------------------- | ------------ | -------- | --------- | ------ |
| msgId          | Message ID            | query        | true     | string    |        |


**Response Status**:


| Status Code | Description                | Schema                         |
| ----------- | -------------------------- | ------------------------------ |
| 200         | Message deleted successfully | Registration code response data«string» |
| 5032        | Token verification failed  |                                |
| 5041        | No permission              |                                |
| 5106        | Please enter token         |                                |
| 5515        | Please enter message ID    |                                |
| 5538        | Message does not exist     |                                |


**Response Parameters**:


| Parameter Name | Parameter Description | Type           | Schema         |
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