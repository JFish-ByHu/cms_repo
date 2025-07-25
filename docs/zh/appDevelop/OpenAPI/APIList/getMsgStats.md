# 统计用户消息类型


**接口地址**:`/v2/mobilepush/enduserapi/v2/getMsgStats`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>统计用户消息类型(系统,智能,设备)</p>


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明                 | schema                               |
| ------ | -------------------- | ------------------------------------ |
| 200    | 统计用户消息类型成功 | 返回注册码响应数据«UserMsgTypeV2Dto» |
| 5106   | 请输入token          |                                      |


**响应参数**:


| 参数名称                                         | 参数说明   | 类型             | schema           |
| ------------------------------------------------ | ---------- | ---------------- | ---------------- |
| code                                             | 响应状态码 | integer(int32)   | integer(int32)   |
| data                                             | 响应数据   | UserMsgTypeV2Dto | UserMsgTypeV2Dto |
| &emsp;&emsp;device                               | 设备       | DeviceMsgNumber  | DeviceMsgNumber  |
| &emsp;&emsp;&emsp;&emsp;fault                    |            | MsgIsReadDto     | MsgIsReadDto     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;read         | 已读消息数 | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unRead       | 未读消息数 | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;inform                   |            | MsgIsReadDto     | MsgIsReadDto     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;read         | 已读消息数 | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unRead       | 未读消息数 | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;read                     |            | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;unRead                   |            | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;warning                  |            | MsgIsReadDto     | MsgIsReadDto     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;read         | 已读消息数 | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unRead       | 未读消息数 | integer          |                  |
| &emsp;&emsp;smart                                | 智能       | SmartMsgNumber   | SmartMsgNumber   |
| &emsp;&emsp;&emsp;&emsp;automation               |            | MsgIsReadDto     | MsgIsReadDto     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;read         | 已读消息数 | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unRead       | 未读消息数 | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;read                     |            | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;scene                    |            | MsgIsReadDto     | MsgIsReadDto     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;read         | 已读消息数 | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unRead       | 未读消息数 | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;unRead                   |            | integer          |                  |
| &emsp;&emsp;system                               | 系统       | SystemMsgNumber  | SystemMsgNumber  |
| &emsp;&emsp;&emsp;&emsp;privacyPolicyRevision    |            | MsgIsReadDto     | MsgIsReadDto     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;read         | 已读消息数 | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unRead       | 未读消息数 | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;read                     |            | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;serviceAgreementRevision |            | MsgIsReadDto     | MsgIsReadDto     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;read         | 已读消息数 | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unRead       | 未读消息数 | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;smsWarning               |            | MsgIsReadDto     | MsgIsReadDto     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;read         | 已读消息数 | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unRead       | 未读消息数 | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;unRead                   |            | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;voiceWarning             |            | MsgIsReadDto     | MsgIsReadDto     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;read         | 已读消息数 | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unRead       | 未读消息数 | integer          |                  |
| extMsg                                           | 扩展消息   | string           |                  |
| msg                                              | 响应消息   | string           |                  |


**响应示例**:
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
