# 查询用户的设备列表


**接口地址**:`/v2/binding/enduserapi/userDeviceList`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`

**接口描述**:<p>查询用户的设备列表（含被分享设备）</p>


**请求参数**:


| 参数名称          | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型       | schema |
| ----------------- | ------------------------------------------------------------ | -------- | -------- | -------------- | ------ |
| deviceName        | 设备名称                                                     | query    | false    | string         |        |
| dk                | Device Key                                                   | query    | false    | string         |        |
| isAssociation     | 可被关联的列表：false-不过滤从设备（默认）  true-过滤已添加的从设备 | query    | false    | boolean        |        |
| isGroupDeviceShow | 是否展示群组：false-不展示群组（默认）   true-展示群组       | query    | false    | boolean        |        |
| page              | 当前页，默认为第 1 页                                        | query    | false    | integer(int32) |        |
| pageSize          | 页大小，默认为 10 条                                         | query    | false    | integer(int32) |        |
| pkList            | Product Key 列表，多个使用英文逗号分隔                       | query    | false    | string         |        |
| secondItemCode    | 二级品类Code                                                 | query    | false    | string         |        |


**响应状态**:


| 状态码 | 说明                                   | schema                                 |
| ------ | -------------------------------------- | -------------------------------------- |
| 200    | 查询用户的设备列表（含被分享设备）成功 | 返回注册码响应数据«PageInfo«设备详情»» |
| 5032   | token 验证失败                         |                                        |
| 5047   | 用户鉴权不匹配                         |                                        |
| 5106   | 请输入token                            |                                        |
| 5333   | 设备名称超出长度限制                   |                                        |


**响应参数**:


| 参数名称                                                  | 参数说明                                           | 类型                | schema              |
| --------------------------------------------------------- | -------------------------------------------------- | ------------------- | ------------------- |
| code                                                      | 响应状态码                                         | integer(int32)      | integer(int32)      |
| data                                                      | 响应数据                                           | PageInfo«设备详情»  | PageInfo«设备详情»  |
| &emsp;&emsp;endRow                                        |                                                    | integer(int64)      |                     |
| &emsp;&emsp;hasNextPage                                   |                                                    | boolean             |                     |
| &emsp;&emsp;hasPreviousPage                               |                                                    | boolean             |                     |
| &emsp;&emsp;isFirstPage                                   |                                                    | boolean             |                     |
| &emsp;&emsp;isLastPage                                    |                                                    | boolean             |                     |
| &emsp;&emsp;list                                          |                                                    | array               | 设备详情            |
| &emsp;&emsp;&emsp;&emsp;accessType                        | 访问类型：0-直连设备 1-网关设备 2-网关子设备       | string              |                     |
| &emsp;&emsp;&emsp;&emsp;activeTime                        | 激活时间                                           | string              |                     |
| &emsp;&emsp;&emsp;&emsp;activeTimeTs                      |                                                    | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;aiCapabilityStatus                | AI能力开关状态                                     | boolean             |                     |
| &emsp;&emsp;&emsp;&emsp;authCode                          | authCode                                           | string              |                     |
| &emsp;&emsp;&emsp;&emsp;authKey                           | authKey                                            | string              |                     |
| &emsp;&emsp;&emsp;&emsp;bindMode                          | 绑定模式：1-多绑模式 2-唯一模式 3-轮流模式         | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;bindStatus                        | 绑定状态：1-正常 2-失效                            | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;bindingCode                       | bindingCode                                        | string              |                     |
| &emsp;&emsp;&emsp;&emsp;bindingType                       | 绑定类型:1 SN绑定 2 wifi绑定 3 PKDK绑定 4 蓝牙绑定 | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;btLastUseTime                     | 蓝牙最近时间时间（毫秒时间戳）                     | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;btPwd                             | btPwd                                              | string              |                     |
| &emsp;&emsp;&emsp;&emsp;capabilitiesBitmask               | 设备联网能力                                       | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;deviceBindTime                    | 设备绑定时间                                       | string              |                     |
| &emsp;&emsp;&emsp;&emsp;deviceBindTimeTs                  |                                                    | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;deviceCreateTime                  | 设备创建时间                                       | string              |                     |
| &emsp;&emsp;&emsp;&emsp;deviceCreateTimeTs                |                                                    | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;deviceKey                         | Device Key                                         | string              |                     |
| &emsp;&emsp;&emsp;&emsp;deviceName                        | 设备名称                                           | string              |                     |
| &emsp;&emsp;&emsp;&emsp;deviceStatus                      | 设备状态                                           | string              |                     |
| &emsp;&emsp;&emsp;&emsp;deviceTag                         | 设备标签                                           | string              |                     |
| &emsp;&emsp;&emsp;&emsp;deviceType                        | 设备类型：1-自有设备 2-分享来的设备                | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;fid                               | 家庭ID                                             | string              |                     |
| &emsp;&emsp;&emsp;&emsp;firstItemCode                     | 一级品类code                                       | string              |                     |
| &emsp;&emsp;&emsp;&emsp;firstItemName                     | 一级品类名称                                       | string              |                     |
| &emsp;&emsp;&emsp;&emsp;frid                              | 房间ID                                             | string              |                     |
| &emsp;&emsp;&emsp;&emsp;gdid                              | 群组id                                             | string              |                     |
| &emsp;&emsp;&emsp;&emsp;groupDeviceDeviceNum              | 群组设备数                                         | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;groupState                        | 群组权限                                           | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;invaildTime                       | 失效时间                                           | string              |                     |
| &emsp;&emsp;&emsp;&emsp;invaildTimeTs                     |                                                    | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;isMatter                          | 是否是matter设备                                   | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;isNative                          | 是否是移远设备                                     | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;lastConnTime                      | 最后上线时间                                       | string              |                     |
| &emsp;&emsp;&emsp;&emsp;lastConnTimeTs                    |                                                    | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;lastOfflineTime                   | 离线时间                                           | string              |                     |
| &emsp;&emsp;&emsp;&emsp;lastOfflineTimeTs                 |                                                    | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;locateType                        | 支持的定位内容                                     | string              |                     |
| &emsp;&emsp;&emsp;&emsp;logoImage                         | 产品logo                                           | string              |                     |
| &emsp;&emsp;&emsp;&emsp;lowPowerAlive                     | 低功耗心跳周期(分)                                 | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;lowPowerCache                     | 低功耗缓存时长，单位为秒                           | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;lowPowerProduct                   | 是否为低功耗产品 是: true, 否: false               | boolean             |                     |
| &emsp;&emsp;&emsp;&emsp;lowPowerStatus                    | 低功耗状态开关                                     | boolean             |                     |
| &emsp;&emsp;&emsp;&emsp;matterInfo                        |                                                    | BindNativeMatterDto | BindNativeMatterDto |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;catList               |                                                    | array               | CatInfoDto          |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cat       |                                                    | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;privilege |                                                    | string              |                     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;discriminator         |                                                    | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;extra                 |                                                    | string              |                     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;fabricId              |                                                    | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;matterProductId       |                                                    | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;matterVendorId        |                                                    | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;matterVersion         |                                                    | string              |                     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;nodeId                |                                                    | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;networkType                       | 网络类型：1-wifi 2-蜂窝 3-NB 5-蓝牙                | string              |                     |
| &emsp;&emsp;&emsp;&emsp;onlineStatus                      | 设备在线状态：0-离线 1-在线                        | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;ownerUid                          | 分享人用户ID，来自谁的分享                         | string              |                     |
| &emsp;&emsp;&emsp;&emsp;phone                             | 已绑定用户手机号                                   | string              |                     |
| &emsp;&emsp;&emsp;&emsp;planId                            | 升级计划ID                                         | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;productKey                        | Product Key                                        | string              |                     |
| &emsp;&emsp;&emsp;&emsp;productName                       | 产品名称                                           | string              |                     |
| &emsp;&emsp;&emsp;&emsp;protocol                          | 接入协议                                           | string              |                     |
| &emsp;&emsp;&emsp;&emsp;secondItemCode                    | 二级品类code                                       | string              |                     |
| &emsp;&emsp;&emsp;&emsp;secondItemName                    | 二级品类名称                                       | string              |                     |
| &emsp;&emsp;&emsp;&emsp;shareCode                         | 分享码                                             | string              |                     |
| &emsp;&emsp;&emsp;&emsp;sharingExpireAt                   | 设备使用到期时间                                   | string              |                     |
| &emsp;&emsp;&emsp;&emsp;sharingExpireTimeTs               |                                                    | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;signalStrength                    | 信号强度                                           | string              |                     |
| &emsp;&emsp;&emsp;&emsp;sn                                |                                                    | string              |                     |
| &emsp;&emsp;&emsp;&emsp;status                            | 绑定状态：1-正常 2-失效                            | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;uid                               | 已绑定用户ID                                       | string              |                     |
| &emsp;&emsp;&emsp;&emsp;upgradeStatus                     | 设备升级状态                                       | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;userConfirmStatus                 | 用户确认状态                                       | integer             |                     |
| &emsp;&emsp;&emsp;&emsp;userName                          | 已绑定用户昵称                                     | string              |                     |
| &emsp;&emsp;&emsp;&emsp;verified                          | 设备绑定是否认证：0-未认证 1-已认证                | string              |                     |
| &emsp;&emsp;navigateFirstPage                             |                                                    | integer(int32)      |                     |
| &emsp;&emsp;navigateLastPage                              |                                                    | integer(int32)      |                     |
| &emsp;&emsp;navigatePages                                 |                                                    | integer(int32)      |                     |
| &emsp;&emsp;navigatepageNums                              |                                                    | array               | integer             |
| &emsp;&emsp;nextPage                                      |                                                    | integer(int32)      |                     |
| &emsp;&emsp;pageNum                                       |                                                    | integer(int32)      |                     |
| &emsp;&emsp;pageSize                                      |                                                    | integer(int32)      |                     |
| &emsp;&emsp;pages                                         |                                                    | integer(int32)      |                     |
| &emsp;&emsp;prePage                                       |                                                    | integer(int32)      |                     |
| &emsp;&emsp;size                                          |                                                    | integer(int32)      |                     |
| &emsp;&emsp;startRow                                      |                                                    | integer(int64)      |                     |
| &emsp;&emsp;total                                         |                                                    | integer(int64)      |                     |
| extMsg                                                    | 扩展消息                                           | string              |                     |
| msg                                                       | 响应消息                                           | string              |                     |


**响应示例**:
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
