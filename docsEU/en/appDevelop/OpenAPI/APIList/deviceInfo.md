# Query Device Information


**API Address**:`/v2/binding/enduserapi/deviceInfo`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Query device information`


**Request Parameters**:


| Parameter Name | Parameter Description                                                                        | Request Type | Required | Data Type | Schema |
| -------------- | -------------------------------------------------------------------------------------------- | ------------ | -------- | --------- | ------ |
| dk             | Device Key, used together with pk, choose either this or share code                          | query        | false    | string    |        |
| pk             | Product Key, used together with dk, choose either this or share code                         | query        | false    | string    |        |
| shareCode      | Share code, choose either this or pk and dk, used by share recipient to query device information | query    | false    | string    |        |


**Response Status**:


| Status Code | Description                                          | Schema                                |
| ----------- | ---------------------------------------------------- | ------------------------------------- |
| 200         | Device information query successful                  | Registration code response data«Device Details» |
| 5032        | Token verification failed                            |                                       |
| 5041        | No permission                                        |                                       |
| 5047        | User authentication mismatch                         |                                       |
| 5052        | Device not bound                                     |                                       |
| 5106        | Please enter token                                   |                                       |
| 5140        | Please enter pk, dk or share code                    |                                       |
| 5141        | No permission to query this device                   |                                       |


**Response Parameters**:


| Parameter Name                              | Parameter Description                                           | Type                | Schema              |
| ------------------------------------------- | --------------------------------------------------------------- | ------------------- | ------------------- |
| code                                        | Response status code                                            | integer(int32)      | integer(int32)      |
| data                                        | Response data                                                   | Device Details      | Device Details      |
| &emsp;&emsp;accessType                      | Access type: 0-Direct device 1-Gateway device 2-Gateway sub-device | string            |                     |
| &emsp;&emsp;activeTime                      | Activation time                                                 | string(date-time)   |                     |
| &emsp;&emsp;activeTimeTs                    |                                                                 | integer(int64)      |                     |
| &emsp;&emsp;aiCapabilityStatus              | AI capability switch status                                     | boolean             |                     |
| &emsp;&emsp;authCode                        | authCode                                                        | string              |                     |
| &emsp;&emsp;authKey                         | authKey                                                         | string              |                     |
| &emsp;&emsp;bindMode                        | Binding mode: 1-Multi-binding mode 2-Unique mode 3-Rotation mode | integer(int32)     |                     |
| &emsp;&emsp;bindStatus                      | Binding status: 1-Normal 2-Invalid                              | integer(int32)      |                     |
| &emsp;&emsp;bindingCode                     | bindingCode                                                     | string              |                     |
| &emsp;&emsp;bindingType                     | Binding type: 1 SN binding 2 WiFi binding 3 PKDK binding 4 Bluetooth binding | integer(int32) |            |
| &emsp;&emsp;btLastUseTime                   | Bluetooth most recent use time (millisecond timestamp)          | integer(int64)      |                     |
| &emsp;&emsp;btPwd                           | btPwd                                                           | string              |                     |
| &emsp;&emsp;capabilitiesBitmask             | Device network capabilities                                     | integer(int32)      |                     |
| &emsp;&emsp;deviceBindTime                  | Device binding time                                             | string(date-time)   |                     |
| &emsp;&emsp;deviceBindTimeTs                |                                                                 | integer(int64)      |                     |
| &emsp;&emsp;deviceCreateTime                | Device creation time                                            | string(date-time)   |                     |
| &emsp;&emsp;deviceCreateTimeTs              |                                                                 | integer(int64)      |                     |
| &emsp;&emsp;deviceKey                       | Device Key                                                      | string              |                     |
| &emsp;&emsp;deviceName                      | Device name                                                     | string              |                     |
| &emsp;&emsp;deviceStatus                    | Device status                                                   | string              |                     |
| &emsp;&emsp;deviceTag                       | Device tag                                                      | string              |                     |
| &emsp;&emsp;deviceType                      | Device type: 1-Own device 2-Shared device                       | integer(int32)      |                     |
| &emsp;&emsp;fid                             | Family ID                                                       | string              |                     |
| &emsp;&emsp;firstItemCode                   | Primary category code                                           | string              |                     |
| &emsp;&emsp;firstItemName                   | Primary category name                                           | string              |                     |
| &emsp;&emsp;frid                            | Room ID                                                         | string              |                     |
| &emsp;&emsp;gdid                            | Group ID                                                        | string              |                     |
| &emsp;&emsp;groupDeviceDeviceNum            | Number of group devices                                         | integer(int32)      |                     |
| &emsp;&emsp;groupState                      | Group permissions                                               | integer(int32)      |                     |
| &emsp;&emsp;invaildTime                     | Invalidation time                                               | string(date-time)   |                     |
| &emsp;&emsp;invaildTimeTs                   |                                                                 | integer(int64)      |                     |
| &emsp;&emsp;isMatter                        | Whether it is a Matter device                                   | integer(int32)      |                     |
| &emsp;&emsp;isNative                        | Whether it is a Quectel device                                  | integer(int32)      |                     |
| &emsp;&emsp;lastConnTime                    | Last online time                                                | string(date-time)   |                     |
| &emsp;&emsp;lastConnTimeTs                  |                                                                 | integer(int64)      |                     |
| &emsp;&emsp;lastOfflineTime                 | Offline time                                                    | string(date-time)   |                     |
| &emsp;&emsp;lastOfflineTimeTs               |                                                                 | integer(int64)      |                     |
| &emsp;&emsp;locateType                      | Supported location content                                      | string              |                     |
| &emsp;&emsp;logoImage                       | Product logo                                                    | string              |                     |
| &emsp;&emsp;lowPowerAlive                   | Low power heartbeat period (minutes)                            | integer(int32)      |                     |
| &emsp;&emsp;lowPowerCache                   | Low power cache duration, in seconds                            | integer(int32)      |                     |
| &emsp;&emsp;lowPowerProduct                 | Whether it is a low power product. Yes: true, No: false         | boolean             |                     |
| &emsp;&emsp;lowPowerStatus                  | Low power status switch                                         | boolean             |                     |
| &emsp;&emsp;matterInfo                      |                                                                 | BindNativeMatterDto | BindNativeMatterDto |
| &emsp;&emsp;&emsp;&emsp;catList             |                                                                 | array               | CatInfoDto          |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cat     |                                                                 | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;privilege |                                                               | string              |                     |
| &emsp;&emsp;&emsp;&emsp;discriminator       |                                                                 | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;extra               |                                                                 | string              |                     |
| &emsp;&emsp;&emsp;&emsp;fabricId            |                                                                 | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;matterProductId     |                                                                 | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;matterVendorId      |                                                                 | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;matterVersion       |                                                                 | string              |                     |
| &emsp;&emsp;&emsp;&emsp;nodeId              |                                                                 | integer             |                     |
| &emsp;&emsp;networkType                     | Network type: 1-WiFi 2-Cellular 3-NB 5-Bluetooth               | string              |                     |
| &emsp;&emsp;onlineStatus                    | Device online status: 0-Offline 1-Online                        | integer(int32)      |                     |
| &emsp;&emsp;ownerUid                        | Sharer user ID, shared from whom                                | string              |                     |
| &emsp;&emsp;phone                           | Bound user's phone number                                       | string              |                     |
| &emsp;&emsp;planId                          | Upgrade plan ID                                                 | integer(int64)      |                     |
| &emsp;&emsp;productKey                      | Product Key                                                     | string              |                     |
| &emsp;&emsp;productName                     | Product name                                                    | string              |                     |
| &emsp;&emsp;protocol                        | Access protocol                                                 | string              |                     |
| &emsp;&emsp;secondItemCode                  | Secondary category code                                         | string              |                     |
| &emsp;&emsp;secondItemName                  | Secondary category name                                         | string              |                     |
| &emsp;&emsp;shareCode                       | Share code                                                      | string              |                     |
| &emsp;&emsp;sharingExpireAt                 | Device usage expiration time                                    | string(date-time)   |                     |
| &emsp;&emsp;sharingExpireTimeTs             |                                                                 | integer(int64)      |                     |
| &emsp;&emsp;signalStrength                  | Signal strength                                                 | string              |                     |
| &emsp;&emsp;sn                              |                                                                 | string              |                     |
| &emsp;&emsp;status                          | Binding status: 1-Normal 2-Invalid                              | integer(int32)      |                     |
| &emsp;&emsp;uid                             | Bound user ID                                                   | string              |                     |
| &emsp;&emsp;upgradeStatus                   | Device upgrade status                                           | integer(int32)      |                     |
| &emsp;&emsp;userConfirmStatus               | User confirmation status                                        | integer(int32)      |                     |
| &emsp;&emsp;userName                        | Bound user's nickname                                           | string              |                     |
| &emsp;&emsp;verified                        | Device binding authentication: 0-Not authenticated 1-Authenticated | string(byte)    |                     |
| extMsg                                      | Extended message                                                | string              |                     |
| msg                                         | Response message                                                | string              |                     |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
		"accessType": "",
		"activeTime": "",
		"activeTimeTs": 0,
		"aiCapabilityStatus": true,
		"authCode": "",
		"authKey": "",
		"bindMode": 0,
		"bindStatus": 0,
		"bindingCode": "",
		"bindingType": 0,
		"btLastUseTime": 0,
		"btPwd": "",
		"capabilitiesBitmask": 0,
		"deviceBindTime": "",
		"deviceBindTimeTs": 0,
		"deviceCreateTime": "",
		"deviceCreateTimeTs": 0,
		"deviceKey": "",
		"deviceName": "",
		"deviceStatus": "",
		"deviceTag": "",
		"deviceType": 0,
		"fid": "",
		"firstItemCode": "",
		"firstItemName": "",
		"frid": "",
		"gdid": "",
		"groupDeviceDeviceNum": 0,
		"groupState": 0,
		"invaildTime": "",
		"invaildTimeTs": 0,
		"isMatter": 0,
		"isNative": 0,
		"lastConnTime": "",
		"lastConnTimeTs": 0,
		"lastOfflineTime": "",
		"lastOfflineTimeTs": 0,
		"locateType": "",
		"logoImage": "",
		"lowPowerAlive": 0,
		"lowPowerCache": 0,
		"lowPowerProduct": true,
		"lowPowerStatus": true,
		"matterInfo": {
			"catList": [
				{
					"cat": 0,
					"privilege": ""
				}
			],
			"discriminator": 0,
			"extra": "",
			"fabricId": 0,
			"matterProductId": 0,
			"matterVendorId": 0,
			"matterVersion": "",
			"nodeId": 0
		},
		"networkType": "",
		"onlineStatus": 0,
		"ownerUid": "",
		"phone": "",
		"planId": 0,
		"productKey": "",
		"productName": "",
		"protocol": "",
		"secondItemCode": "",
		"secondItemName": "",
		"shareCode": "",
		"sharingExpireAt": "",
		"sharingExpireTimeTs": 0,
		"signalStrength": "",
		"sn": "",
		"status": 0,
		"uid": "",
		"upgradeStatus": 0,
		"userConfirmStatus": 0,
		"userName": "",
		"verified": ""
	},
	"extMsg": "",
	"msg": ""
}
```