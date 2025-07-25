# Set User Push Notification Message Types


**Interface Address**:`/v2/mobilepush/enduserapi/setMsgPushSetting`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**Interface Description**:`Set User Push Notification Message Types`


**Request Parameters**:


| Parameter Name | Parameter Description                                                                                                    | Request Type | Required | Data Type | schema |
| -------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------ | -------- | --------- | ------ |
| msgPushSetting | {<br/>"deviceNotify":true,<br/>"smartNotify":true,<br/>"systemNotify":true,<br/>"device": {<br/>"app": true,<br/> "sms": true,<br/> "voice": true<br/> },<br/> "smart": {<br/> "app": true,<br/> "sms": true,<br/>"voice": true<br/> },<br/> "system": {<br/> "app": true,<br/> "sms": true,<br/> "voice": true<br/> }<br/>} | body     | true     | string    |        |


**Response Status**:


| Status Code | Description               | schema                     |
| ----------- | ------------------------- | -------------------------- |
| 200         | Message types set successfully | Registration code response data |
| 5032        | Token verification failed |                            |
| 5106        | Please enter token        |                            |
| 5515        | Please enter message ID   |                            |


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