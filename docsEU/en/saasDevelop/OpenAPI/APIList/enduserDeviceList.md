# Query Device List Under User


**API Address**:`/v2/binding/enterpriseapi/userDeviceList`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`

**API Description**: `Query list of devices bound to and shared with a user`


**Request Parameters**:


| Parameter Name | Parameter Description               | Request Type | Required | Data Type       | Schema |
| -------------- | ----------------------------------- | ------------ | -------- | -------------- | ------ |
| uid            | User ID                             | query        | true     | string         |        |
| page           | Current page, default is page 1     | query        | false    | integer(int32) |        |
| pageSize       | Page size, default is 10 items      | query        | false    | integer(int32) |        |


**Response Status**:


| Status Code | Description                                      | Schema                                      |
| ----------- | ------------------------------------------------ | ------------------------------------------- |
| 200         | Query list of devices bound to and shared with user | Return registration code response data«PageInfo«Device details»» |
| 5032        | Token verification failed                        |                                             |
| 5033        | User does not exist                              |                                             |
| 5041        | No permission                                    |                                             |
| 5065        | Please enter user ID                             |                                             |
| 5106        | Please enter token                               |                                             |


**Response Parameters**:


| Parameter Name                                            | Parameter Description                                                | Type                | Schema              |
| --------------------------------------------------------- | -------------------------------------------------------------------- | ------------------- | ------------------- |
| code                                                      | Response status code                                                  | integer(int32)      | integer(int32)      |
| data                                                      | Response data                                                         | PageInfo«Device details»  | PageInfo«Device details»  |
| &emsp;&emsp;endRow                                        |                                                                      | integer(int64)      |                     |
| &emsp;&emsp;hasNextPage                                   |                                                                      | boolean             |                     |
| &emsp;&emsp;hasPreviousPage                               |                                                                      | boolean             |                     |
| &emsp;&emsp;isFirstPage                                   |                                                                      | boolean             |                     |
| &emsp;&emsp;isLastPage                                    |                                                                      | boolean             |                     |
| &emsp;&emsp;list                                          |                                                                      | array               | Device details      |
| &emsp;&emsp;&emsp;&emsp;accessType                        | Access type: 0-Direct device 1-Gateway device 2-Gateway sub-device   | string              |                     |
| &emsp;&emsp;&emsp;&emsp;activeTime                        | Activation time                                                       | string              |                     |
| &emsp;&emsp;&emsp;&emsp;activeTimeTs                      |                                                                      | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;authCode                          | authCode                                                              | string              |                     |
| &emsp;&emsp;&emsp;&emsp;authKey                           | authKey                                                               | string              |                     |
| &emsp;&emsp;&emsp;&emsp;bindMode                          | Binding mode: 1-Multiple binding 2-Unique mode 3-Turn-based mode     | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;bindStatus                        | Binding status: 1-Normal 2-Invalid                                   | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;bindingCode                       | bindingCode                                                           | string              |                     |
| &emsp;&emsp;&emsp;&emsp;bindingType                       | Binding type: 1-SN binding 2-WiFi binding 3-PKDK binding 4-Bluetooth binding | integer        |                     |
| &emsp;&emsp;&emsp;&emsp;btLastUseTime                     | Bluetooth last use time (millisecond timestamp)                      | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;btPwd                             | btPwd                                                                 | string              |                     |
| &emsp;&emsp;&emsp;&emsp;capabilitiesBitmask               | Device networking capability                                          | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;deviceBindTime                    | Device binding time                                                   | string              |                     |
| &emsp;&emsp;&emsp;&emsp;deviceBindTimeTs                  |                                                                      | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;deviceCreateTime                  | Device creation time                                                  | string              |                     |
| &emsp;&emsp;&emsp;&emsp;deviceCreateTimeTs                |                                                                      | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;deviceKey                         | Device Key                                                            | string              |                     |
| &emsp;&emsp;&emsp;&emsp;deviceName                        | Device name                                                           | string              |                     |
| &emsp;&emsp;&emsp;&emsp;deviceStatus                      | Device status                                                         | string              |                     |
| &emsp;&emsp;&emsp;&emsp;deviceTag                         | Device tag                                                            | string              |                     |
| &emsp;&emsp;&emsp;&emsp;deviceType                        | Device type: 1-Own device 2-Shared device                            | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;fid                               | Family ID                                                             | string              |                     |
| &emsp;&emsp;&emsp;&emsp;firstItemCode                     | First-level category code                                             | string              |                     |
| &emsp;&emsp;&emsp;&emsp;firstItemName                     | First-level category name                                             | string              |                     |
| &emsp;&emsp;&emsp;&emsp;frid                              | Room ID                                                               | string              |                     |
| &emsp;&emsp;&emsp;&emsp;gdid                              | Group ID                                                              | string              |                     |
| &emsp;&emsp;&emsp;&emsp;groupDeviceDeviceNum              | Number of group devices                                               | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;groupState                        | Group permission                                                      | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;invaildTime                       | Invalidation time                                                     | string              |                     |
| &emsp;&emsp;&emsp;&emsp;invaildTimeTs                     |                                                                      | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;isMatter                          | Whether it is a Matter device                                         | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;isNative                          | Whether it is a Quectel device                                        | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;lastConnTime                      | Last online time                                                      | string              |                     |
| &emsp;&emsp;&emsp;&emsp;lastConnTimeTs                    |                                                                      | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;lastOfflineTime                   | Offline time                                                          | string              |                     |
| &emsp;&emsp;&emsp;&emsp;lastOfflineTimeTs                 |                                                                      | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;locateType                        | Supported location content                                            | string              |                     |
| &emsp;&emsp;&emsp;&emsp;logoImage                         | Product logo                                                          | string              |                     |
| &emsp;&emsp;&emsp;&emsp;lowPowerAlive                     | Low power heartbeat period (minutes)                                  | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;lowPowerCache                     | Low power cache duration, in seconds                                  | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;lowPowerProduct                   | Whether it is a low power product. Yes: true, No: false               | boolean             |                     |
| &emsp;&emsp;&emsp;&emsp;lowPowerStatus                    | Low power status switch                                               | boolean             |                     |
| &emsp;&emsp;&emsp;&emsp;matterInfo                        |                                                                      | BindNativeMatterDto | BindNativeMatterDto |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;catList               |                                                                      | array               | CatInfoDto          |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cat       |                                                                      | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;privilege |                                                                      | string              |                     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;discriminator         |                                                                      | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extra                 |                                                                      | string              |                     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fabricId              |                                                                      | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;matterProductId       |                                                                      | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;matterVendorId        |                                                                      | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;matterVersion         |                                                                      | string              |                     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;nodeId                |                                                                      | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;networkType                       | Network type: 1-WiFi 2-Cellular 3-NB 5-Bluetooth                     | string              |                     |
| &emsp;&emsp;&emsp;&emsp;onlineStatus                      | Device online status: 0-Offline 1-Online                             | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;ownerUid                          | Sharer's user ID, shared from whom                                   | string              |                     |
| &emsp;&emsp;&emsp;&emsp;phone                             | Bound user's phone number                                            | string              |                     |
| &emsp;&emsp;&emsp;&emsp;planId                            | Upgrade plan ID                                                      | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;productKey                        | Product Key                                                          | string              |                     |
| &emsp;&emsp;&emsp;&emsp;productName                       | Product name                                                         | string              |                     |
| &emsp;&emsp;&emsp;&emsp;protocol                          | Access protocol                                                      | string              |                     |
| &emsp;&emsp;&emsp;&emsp;secondItemCode                    | Second-level category code                                           | string              |                     |
| &emsp;&emsp;&emsp;&emsp;secondItemName                    | Second-level category name                                           | string              |                     |
| &emsp;&emsp;&emsp;&emsp;shareCode                         | Share code                                                           | string              |                     |
| &emsp;&emsp;&emsp;&emsp;sharingExpireAt                   | Device usage expiration time                                         | string              |                     |
| &emsp;&emsp;&emsp;&emsp;sharingExpireTimeTs               |                                                                      | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;signalStrength                    | Signal strength                                                      | string              |                     |
| &emsp;&emsp;&emsp;&emsp;sn                                |                                                                      | string              |                     |
| &emsp;&emsp;&emsp;&emsp;status                            | Binding status: 1-Normal 2-Invalid                                   | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;uid                               | Bound user ID                                                        | string              |                     |
| &emsp;&emsp;&emsp;&emsp;upgradeStatus                     | Device upgrade status                                                | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;userConfirmStatus                 | User confirmation status                                             | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;userName                          | Bound user nickname                                                  | string              |                     |
| &emsp;&emsp;&emsp;&emsp;verified                          | Device binding authentication: 0-Not authenticated 1-Authenticated   | string              |                     |
| &emsp;&emsp;navigateFirstPage                             |                                                                      | integer(int32)      |                     |
| &emsp;&emsp;navigateLastPage                              |                                                                      | integer(int32)      |                     |
| &emsp;&emsp;navigatePages                                 |                                                                      | integer(int32)      |                     |
| &emsp;&emsp;navigatepageNums                              |                                                                      | array               | integer             |
| &emsp;&emsp;nextPage                                      |                                                                      | integer(int32)      |                     |
| &emsp;&emsp;pageNum                                       |                                                                      | integer(int32)      |                     |
| &emsp;&emsp;pageSize                                      |                                                                      | integer(int32)      |                     |
| &emsp;&emsp;pages                                         |                                                                      | integer(int32)      |                     |
| &emsp;&emsp;prePage                                       |                                                                      | integer(int32)      |                     |
| &emsp;&emsp;size                                          |                                                                      | integer(int32)      |                     |
| &emsp;&emsp;startRow                                      |                                                                      | integer(int64)      |                     |
| &emsp;&emsp;total                                         |                                                                      | integer(int64)      |                     |
| extMsg                                                    | Extended message                                                      | string              |                     |
| msg                                                       | Response message                                                      | string              |                     |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
		"endRow": 0,
		"hasNextPage": true,
		"hasPreviousPage": true,
		"isFirstPage": true,
		"isLastPage": true,
		"list": [
			{
				"accessType": "",
				"activeTime": "",
				"activeTimeTs": 0,
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
			}
		],
		"navigateFirstPage": 0,
		"navigateLastPage": 0,
		"navigatePages": 0,
		"navigatepageNums": [],
		"nextPage": 0,
		"pageNum": 0,
		"pageSize": 0,
		"pages": 0,
		"prePage": 0,
		"size": 0,
		"startRow": 0,
		"total": 0
	},
	"extMsg": "",
	"msg": ""
}
```