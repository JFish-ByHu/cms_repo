# Query Gateway Device Child List


**API Address**:`/v2/binding/enduserapi/getGatewayDeviceChildList`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Query child device list under gateway device`


**Request Parameters**:


| Parameter Name | Parameter Description                                                                                           | Request Type | Required | Data Type       | Schema |
| -------------- | -------------------------------------------------------------------------------------------------------------- | ------------ | -------- | -------------- | ------ |
| dk             | Gateway device dk                                                                                               | query        | true     | string         |        |
| pk             | Gateway device pk                                                                                               | query        | true     | string         |        |
| gatewayType    | Child device gateway type: 1-Network proxy only  2-Product integration (default)  3-Product integration + Network proxy | query    | false    | integer(int32) |        |
| page           | Current page, default is page 1                                                                                 | query        | false    | integer(int32) |        |
| pageSize       | Page size, default is 10 items                                                                                  | query        | false    | integer(int32) |        |


**Response Status**:


| Status Code | Description                                     | Schema                                     |
| ----------- | ----------------------------------------------- | ------------------------------------------ |
| 200         | Successfully queried gateway device child list  | Registration code response data«PageInfo«QbDevice»» |
| 5009        | Device verification failed                      |                                            |
| 5032        | Token verification failed                       |                                            |
| 5041        | No permission                                   |                                            |
| 5066        | Please enter Product Key                        |                                            |
| 5067        | Please enter Device Key                         |                                            |
| 5106        | Please enter token                              |                                            |


**Response Parameters**:


| Parameter Name                             | Parameter Description                                             | Type               | Schema             |
| ------------------------------------------ | ----------------------------------------------------------------- | ------------------ | ------------------ |
| code                                       | Response status code                                              | integer(int32)     | integer(int32)     |
| data                                       | Response data                                                     | PageInfo«QbDevice» | PageInfo«QbDevice» |
| &emsp;&emsp;endRow                         |                                                                   | integer(int64)     |                    |
| &emsp;&emsp;hasNextPage                    |                                                                   | boolean            |                    |
| &emsp;&emsp;hasPreviousPage                |                                                                   | boolean            |                    |
| &emsp;&emsp;isFirstPage                    |                                                                   | boolean            |                    |
| &emsp;&emsp;isLastPage                     |                                                                   | boolean            |                    |
| &emsp;&emsp;list                           |                                                                   | array              | QbDevice           |
| &emsp;&emsp;&emsp;&emsp;accessType         | Access type: 0-Direct device 1-Gateway device 2-Gateway sub-device | string             |                    |
| &emsp;&emsp;&emsp;&emsp;activedTime        | Activation time                                                   | string             |                    |
| &emsp;&emsp;&emsp;&emsp;activedTimeTs      |                                                                   | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;aiCapabilityStatus | AI capability switch status                                      | boolean            |                    |
| &emsp;&emsp;&emsp;&emsp;createTime         | Creation time                                                     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;createTimeTs       |                                                                   | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;deviceKey          | Device key                                                        | string             |                    |
| &emsp;&emsp;&emsp;&emsp;deviceName         | Device name                                                       | string             |                    |
| &emsp;&emsp;&emsp;&emsp;deviceStatus       | Device status 0-Offline 1-Online                                  | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;deviceType         | Device type: 1-Own device 2-Shared device                         | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;enabled            | Whether enabled 0-Enabled, 1-Disabled, default is enabled         | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;firstConnTime      | First connection time                                             | string             |                    |
| &emsp;&emsp;&emsp;&emsp;firstConnTimeTs    |                                                                   | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;gatewayType        | Child device access gateway type 1: Network proxy only 2: Product integration | integer    |                    |
| &emsp;&emsp;&emsp;&emsp;id                 | Device id                                                         | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;isActived          | Whether activated 0-Not activated 1-Activated                      | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;isCurrent          | Whether it is the current connected gateway                        | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;isLiveness         | Whether active 0-Not active 1-Active                              | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;isVerified         | Whether secondary authentication is allowed 0-No 1-Yes             | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;isVirtual          | Whether it is a virtual device 0-Real 1-Virtual                    | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;lastConnTime       | Most recent online time                                            | string             |                    |
| &emsp;&emsp;&emsp;&emsp;lastConnTimeTs     |                                                                   | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;lastOfflineTime    | Last offline time                                                  | string             |                    |
| &emsp;&emsp;&emsp;&emsp;lastOfflineTimeTs  |                                                                   | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;locateType         | Device location type                                               | string             |                    |
| &emsp;&emsp;&emsp;&emsp;lowPowerAlive      | Low power heartbeat period (minutes)                               | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;lowPowerCache      | Low power cache duration, in seconds                               | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;lowPowerProduct    | Whether it is a low power product. Yes: true, No: false            | boolean            |                    |
| &emsp;&emsp;&emsp;&emsp;lowPowerStatus     | Low power status switch                                            | boolean            |                    |
| &emsp;&emsp;&emsp;&emsp;moduleType         | Device model                                                       | string             |                    |
| &emsp;&emsp;&emsp;&emsp;moduleVersion      | Device version                                                     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;onlineStatus       | Device online status: 0-Offline 1-Online                           | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;planId             | Upgrade plan ID                                                    | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;productIcon        | Product icon                                                       | string             |                    |
| &emsp;&emsp;&emsp;&emsp;productId          | Product id                                                         | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;productKey         | Product key                                                        | string             |                    |
| &emsp;&emsp;&emsp;&emsp;productName        | Product name                                                       | string             |                    |
| &emsp;&emsp;&emsp;&emsp;protocol           | Default value 0, access protocol 1:mqtt, 2:lwm2m/coap, 3:http      | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;status             | Binding status: 1-Normal 2-Invalid                                 | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;updateTime         | Modification time                                                  | string             |                    |
| &emsp;&emsp;&emsp;&emsp;updateTimeTs       |                                                                   | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;upgradeStatus      | Device upgrade status                                              | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;userConfirmStatus  | User confirmation status                                           | integer            |                    |
| &emsp;&emsp;navigateFirstPage              |                                                                   | integer(int32)     |                    |
| &emsp;&emsp;navigateLastPage               |                                                                   | integer(int32)     |                    |
| &emsp;&emsp;navigatePages                  |                                                                   | integer(int32)     |                    |
| &emsp;&emsp;navigatepageNums               |                                                                   | array              | integer            |
| &emsp;&emsp;nextPage                       |                                                                   | integer(int32)     |                    |
| &emsp;&emsp;pageNum                        |                                                                   | integer(int32)     |                    |
| &emsp;&emsp;pageSize                       |                                                                   | integer(int32)     |                    |
| &emsp;&emsp;pages                          |                                                                   | integer(int32)     |                    |
| &emsp;&emsp;prePage                        |                                                                   | integer(int32)     |                    |
| &emsp;&emsp;size                           |                                                                   | integer(int32)     |                    |
| &emsp;&emsp;startRow                       |                                                                   | integer(int64)     |                    |
| &emsp;&emsp;total                          |                                                                   | integer(int64)     |                    |
| extMsg                                     | Extended message                                                   | string             |                    |
| msg                                        | Response message                                                   | string             |                    |


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
				"activedTime": "",
				"activedTimeTs": 0,
				"aiCapabilityStatus": true,
				"createTime": "",
				"createTimeTs": 0,
				"deviceKey": "",
				"deviceName": "",
				"deviceStatus": 0,
				"deviceType": 0,
				"enabled": 0,
				"firstConnTime": "",
				"firstConnTimeTs": 0,
				"gatewayType": 0,
				"id": 0,
				"isActived": 0,
				"isCurrent": 0,
				"isLiveness": 0,
				"isVerified": 0,
				"isVirtual": 0,
				"lastConnTime": "",
				"lastConnTimeTs": 0,
				"lastOfflineTime": "",
				"lastOfflineTimeTs": 0,
				"locateType": "",
				"lowPowerAlive": 0,
				"lowPowerCache": 0,
				"lowPowerProduct": true,
				"lowPowerStatus": true,
				"moduleType": "",
				"moduleVersion": "",
				"onlineStatus": 0,
				"planId": 0,
				"productIcon": "",
				"productId": 0,
				"productKey": "",
				"productName": "",
				"protocol": 0,
				"status": 0,
				"updateTime": "",
				"updateTimeTs": 0,
				"upgradeStatus": 0,
				"userConfirmStatus": 0
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