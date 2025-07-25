# Get User Push Notification Message Types


**API Address**:`/v2/mobilepush/enduserapi/getMsgPushSetting`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`

**API Description**:`Set message types that user receives as push notifications`


**Request Parameters**:


None


**Response Status**:


| Status Code | Description                            | Schema                                       |
| ----------- | -------------------------------------- | -------------------------------------------- |
| 200         | Successfully set message types         | Registration code response data«MsgUserTypeDataModel» |
| 5032        | Token verification failed              |                                              |
| 5106        | Please enter token                     |                                              |
| 5515        | Please enter message ID                |                                              |


**Response Parameters**:


| Parameter Name                | Parameter Description             | Type                 | Schema               |
| ----------------------------- | --------------------------------- | -------------------- | -------------------- |
| code                          | Response status code              | integer(int32)       | integer(int32)       |
| data                          | Response data                     | MsgUserTypeDataModel | MsgUserTypeDataModel |
| &emsp;&emsp;addTime           | Configuration time                | integer(int64)       |                      |
| &emsp;&emsp;msgPushSetting    | User message types received       | string               |                      |
| &emsp;&emsp;msgUserTypeDataId | User message configuration ID     | string               |                      |
| &emsp;&emsp;recvMsgPushType   | User message types received       | string               |                      |
| &emsp;&emsp;uid               | User UID                          | string               |                      |
| extMsg                        | Extended message                  | string               |                      |
| msg                           | Response message                  | string               |                      |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
		"addTime": 0,
		"msgPushSetting": "",
		"msgUserTypeDataId": "",
		"recvMsgPushType": "",
		"uid": ""
	},
	"extMsg": "",
	"msg": ""
}
```