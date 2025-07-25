# 查询网关设备下子设备列表


**接口地址**:`/v2/binding/enduserapi/getGatewayDeviceChildList`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询网关设备下子设备列表</p>


**请求参数**:


| 参数名称    | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型       | schema |
| ----------- | ------------------------------------------------------------ | -------- | -------- | -------------- | ------ |
| dk          | 网关设备dk                                                   | query    | true     | string         |        |
| pk          | 网关设备pk                                                   | query    | true     | string         |        |
| gatewayType | 子设备网关类型：1-仅代理上网  2-产品整合（默认）  3-产品整合+仅代理上网) | query    | false    | integer(int32) |        |
| page        | 当前页，默认为第 1 页                                        | query    | false    | integer(int32) |        |
| pageSize    | 页大小，默认为 10 条                                         | query    | false    | integer(int32) |        |


**响应状态**:


| 状态码 | 说明                         | schema                                 |
| ------ | ---------------------------- | -------------------------------------- |
| 200    | 查询网关设备下子设备列表成功 | 返回注册码响应数据«PageInfo«QbDevice»» |
| 5009   | 设备验证失败                 |                                        |
| 5032   | token 验证失败               |                                        |
| 5041   | 没有权限                     |                                        |
| 5066   | 请输入Product Key            |                                        |
| 5067   | 请输入Device Key             |                                        |
| 5106   | 请输入token                  |                                        |


**响应参数**:


| 参数名称                                   | 参数说明                                     | 类型               | schema             |
| ------------------------------------------ | -------------------------------------------- | ------------------ | ------------------ |
| code                                       | 响应状态码                                   | integer(int32)     | integer(int32)     |
| data                                       | 响应数据                                     | PageInfo«QbDevice» | PageInfo«QbDevice» |
| &emsp;&emsp;endRow                         |                                              | integer(int64)     |                    |
| &emsp;&emsp;hasNextPage                    |                                              | boolean            |                    |
| &emsp;&emsp;hasPreviousPage                |                                              | boolean            |                    |
| &emsp;&emsp;isFirstPage                    |                                              | boolean            |                    |
| &emsp;&emsp;isLastPage                     |                                              | boolean            |                    |
| &emsp;&emsp;list                           |                                              | array              | QbDevice           |
| &emsp;&emsp;&emsp;&emsp;accessType         | 访问类型：0-直连设备 1-网关设备 2-网关子设备 | string             |                    |
| &emsp;&emsp;&emsp;&emsp;activedTime        | 激活时间                                     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;activedTimeTs      |                                              | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;aiCapabilityStatus | AI能力开关状态                               | boolean            |                    |
| &emsp;&emsp;&emsp;&emsp;createTime         | 创建时间                                     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;createTimeTs       |                                              | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;deviceKey          | 设备key                                      | string             |                    |
| &emsp;&emsp;&emsp;&emsp;deviceName         | 设备名称                                     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;deviceStatus       | 设备状态 0-离线 1-在线                       | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;deviceType         | 设备类型：1-自有设备 2-分享来的设备          | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;enabled            | 是否启用0启用，1禁用，默认启用               | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;firstConnTime      | 第一次连接时间                               | string             |                    |
| &emsp;&emsp;&emsp;&emsp;firstConnTimeTs    |                                              | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;gatewayType        | 子设备接入网关类型 1：仅代理上网 2：产品整合 | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;id                 | 设备id                                       | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;isActived          | 是否激活 0-未激活 1-激活                     | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;isCurrent          | 是否是当前连接网关                           | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;isLiveness         | 是否活跃 0-不活跃 1-活跃                     | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;isVerified         | 是否允许二次认证 0-否 1-是                   | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;isVirtual          | 是否虚拟设备 0-真实 1虚拟                    | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;lastConnTime       | 最近在线时间                                 | string             |                    |
| &emsp;&emsp;&emsp;&emsp;lastConnTimeTs     |                                              | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;lastOfflineTime    | 最后一次下线时间                             | string             |                    |
| &emsp;&emsp;&emsp;&emsp;lastOfflineTimeTs  |                                              | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;locateType         | 设备定位类型                                 | string             |                    |
| &emsp;&emsp;&emsp;&emsp;lowPowerAlive      | 低功耗心跳周期(分)                           | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;lowPowerCache      | 低功耗缓存时长，单位为秒                     | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;lowPowerProduct    | 是否为低功耗产品 是: true, 否: false         | boolean            |                    |
| &emsp;&emsp;&emsp;&emsp;lowPowerStatus     | 低功耗状态开关                               | boolean            |                    |
| &emsp;&emsp;&emsp;&emsp;moduleType         | 设备型号                                     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;moduleVersion      | 设备版本                                     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;onlineStatus       | 设备在线状态：0-离线 1-在线                  | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;planId             | 升级计划ID                                   | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;productIcon        | 产品图标                                     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;productId          | 产品id                                       | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;productKey         | 产品key                                      | string             |                    |
| &emsp;&emsp;&emsp;&emsp;productName        | 产品名称                                     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;protocol           | 默认值0,接入协议1:mqtt,2:lwm2m/coap,3:http   | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;status             | 绑定状态：1-正常 2-失效                      | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;updateTime         | 修改时间                                     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;updateTimeTs       |                                              | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;upgradeStatus      | 设备升级状态                                 | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;userConfirmStatus  | 用户确认状态                                 | integer            |                    |
| &emsp;&emsp;navigateFirstPage              |                                              | integer(int32)     |                    |
| &emsp;&emsp;navigateLastPage               |                                              | integer(int32)     |                    |
| &emsp;&emsp;navigatePages                  |                                              | integer(int32)     |                    |
| &emsp;&emsp;navigatepageNums               |                                              | array              | integer            |
| &emsp;&emsp;nextPage                       |                                              | integer(int32)     |                    |
| &emsp;&emsp;pageNum                        |                                              | integer(int32)     |                    |
| &emsp;&emsp;pageSize                       |                                              | integer(int32)     |                    |
| &emsp;&emsp;pages                          |                                              | integer(int32)     |                    |
| &emsp;&emsp;prePage                        |                                              | integer(int32)     |                    |
| &emsp;&emsp;size                           |                                              | integer(int32)     |                    |
| &emsp;&emsp;startRow                       |                                              | integer(int64)     |                    |
| &emsp;&emsp;total                          |                                              | integer(int64)     |                    |
| extMsg                                     | 扩展消息                                     | string             |                    |
| msg                                        | 响应消息                                     | string             |                    |


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
