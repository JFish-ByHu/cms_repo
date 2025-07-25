# User Message Type Statistics


**API Address**:`/v2/mobilepush/enduserapi/v2/getMsgStats`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Statistics of user message types (system, smart, device)`


**Request Parameters**:


None


**Response Status**:


| Status Code | Description                              | Schema                                   |
| ----------- | ---------------------------------------- | ---------------------------------------- |
| 200         | Successfully retrieved user message type statistics | Registration code response data«UserMsgTypeV2Dto» |
| 5106        | Please enter token                       |                                          |


**Response Parameters**:


| Parameter Name                                   | Parameter Description | Type             | Schema           |
| ------------------------------------------------ | --------------------- | ---------------- | ---------------- |
| code                                             | Response status code  | integer(int32)   | integer(int32)   |
| data                                             | Response data         | UserMsgTypeV2Dto | UserMsgTypeV2Dto |
| &emsp;&emsp;device                               | Device                | DeviceMsgNumber  | DeviceMsgNumber  |
| &emsp;&emsp;&emsp;&emsp;fault                    |                       | MsgIsReadDto     | MsgIsReadDto     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;read         | Read message count    | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unRead       | Unread message count  | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;inform                   |                       | MsgIsReadDto     | MsgIsReadDto     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;read         | Read message count    | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unRead       | Unread message count  | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;read                     |                       | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;unRead                   |                       | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;warning                  |                       | MsgIsReadDto     | MsgIsReadDto     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;read         | Read message count    | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unRead       | Unread message count  | integer          |                  |
| &emsp;&emsp;smart                                | Smart                 | SmartMsgNumber   | SmartMsgNumber   |
| &emsp;&emsp;&emsp;&emsp;automation               |                       | MsgIsReadDto     | MsgIsReadDto     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;read         | Read message count    | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unRead       | Unread message count  | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;read                     |                       | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;scene                    |                       | MsgIsReadDto     | MsgIsReadDto     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;read         | Read message count    | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unRead       | Unread message count  | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;unRead                   |                       | integer          |                  |
| &emsp;&emsp;system                               | System                | SystemMsgNumber  | SystemMsgNumber  |
| &emsp;&emsp;&emsp;&emsp;privacyPolicyRevision    |                       | MsgIsReadDto     | MsgIsReadDto     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;read         | Read message count    | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unRead       | Unread message count  | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;read                     |                       | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;serviceAgreementRevision |                       | MsgIsReadDto     | MsgIsReadDto     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;read         | Read message count    | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unRead       | Unread message count  | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;smsWarning               |                       | MsgIsReadDto     | MsgIsReadDto     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;read         | Read message count    | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unRead       | Unread message count  | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;unRead                   |                       | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;voiceWarning             |                       | MsgIsReadDto     | MsgIsReadDto     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;read         | Read message count    | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unRead       | Unread message count  | integer          |                  |
| extMsg                                           | Extended message      | string           |                  |
| msg                                              | Response message      | string           |                  |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
		"device": {
			"fault": {
				"read": 0,
				"unRead": 0
			},
			"inform": {
				"read": 0,
				"unRead": 0
			},
			"read": 0,
			"unRead": 0,
			"warning": {
				"read": 0,
				"unRead": 0
			}
		},
		"smart": {
			"automation": {
				"read": 0,
				"unRead": 0
			},
			"read": 0,
			"scene": {
				"read": 0,
				"unRead": 0
			},
			"unRead": 0
		},
		"system": {
			"privacyPolicyRevision": {
				"read": 0,
				"unRead": 0
			},
			"read": 0,
			"serviceAgreementRevision": {
				"read": 0,
				"unRead": 0
			},
			"smsWarning": {
				"read": 0,
				"unRead": 0
			},
			"unRead": 0,
			"voiceWarning": {
				"read": 0,
				"unRead": 0
			}
		}
	},
	"extMsg": "",
	"msg": ""
}
```