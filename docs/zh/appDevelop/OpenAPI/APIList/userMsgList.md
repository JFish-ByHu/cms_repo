# 查询用户消息列表


**接口地址**:`/v2/mobilepush/enduserapi/userMsgList`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询消息列表</p>


**请求参数**:


| 参数名称           | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型       | schema |
| ------------------ | ------------------------------------------------------------ | -------- | -------- | -------------- | ------ |
| dk                 | Device Key                                                   | query    | false    | string         |        |
| firstLabelList     | 一级标签：1-系统  2-智能  3-设备                             | query    | false    | string         |        |
| isRead             | 是否已读：ture-已读  false-未读                              | query    | false    | boolean        |        |
| msgType            | 消息类型：1-设备通知  2-设备告警  3-设备故障  4-系统消息     | query    | false    | integer(int32) |        |
| page               | 当前页，默认为第 1 页                                        | query    | false    | integer(int32) |        |
| pageSize           | 页大小，默认为 10 条                                         | query    | false    | integer(int32) |        |
| pk                 | Product Key                                                  | query    | false    | string         |        |
| secondaryLabelList | 二级标签：1-隐私  2-服务  3-自动化  4-场景  5-设备通知  6-设备告警  7-设备故障  8-OTA | query    | false    | string         |        |


**响应状态**:


| 状态码 | 说明         | schema                                     |
| ------ | ------------ | ------------------------------------------ |
| 200    | 查询消息成功 | 返回注册码响应数据«PageInfo«查询消息列表»» |
| 5036   | 秘钥验证失败 |                                            |
| 5055   | 请输入秘钥   |                                            |


**响应参数**:


| 参数名称                                 | 参数说明   | 类型                   | schema                 |
| ---------------------------------------- | ---------- | ---------------------- | ---------------------- |
| code                                     | 响应状态码 | integer(int32)         | integer(int32)         |
| data                                     | 响应数据   | PageInfo«查询消息列表» | PageInfo«查询消息列表» |
| &emsp;&emsp;endRow                       |            | integer(int64)         |                        |
| &emsp;&emsp;hasNextPage                  |            | boolean                |                        |
| &emsp;&emsp;hasPreviousPage              |            | boolean                |                        |
| &emsp;&emsp;isFirstPage                  |            | boolean                |                        |
| &emsp;&emsp;isLastPage                   |            | boolean                |                        |
| &emsp;&emsp;list                         |            | array                  | 查询消息列表           |
| &emsp;&emsp;&emsp;&emsp;addTime          |            | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;automationId     |            | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;conditionKey     |            | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;content          |            | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;contentLangs     |            | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;deviceName       |            | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;dk               |            | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;executeId        |            | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;firstLabel       |            | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;i18nData         |            | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;icon             |            | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;id               |            | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;isRead           |            | boolean                |                        |
| &emsp;&emsp;&emsp;&emsp;logId            |            | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;msgType          |            | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;pk               |            | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;productName      |            | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;readTime         |            | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;replaceData      |            | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;sceneExecuteTime |            | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;sceneIcon        |            | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;sceneName        |            | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;secondaryLabel   |            | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;shareCode        |            | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;target           |            | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;targetValue      |            | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;title            |            | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;titleLangs       |            | string                 |                        |
| &emsp;&emsp;navigateFirstPage            |            | integer(int32)         |                        |
| &emsp;&emsp;navigateLastPage             |            | integer(int32)         |                        |
| &emsp;&emsp;navigatePages                |            | integer(int32)         |                        |
| &emsp;&emsp;navigatepageNums             |            | array                  | integer                |
| &emsp;&emsp;nextPage                     |            | integer(int32)         |                        |
| &emsp;&emsp;pageNum                      |            | integer(int32)         |                        |
| &emsp;&emsp;pageSize                     |            | integer(int32)         |                        |
| &emsp;&emsp;pages                        |            | integer(int32)         |                        |
| &emsp;&emsp;prePage                      |            | integer(int32)         |                        |
| &emsp;&emsp;size                         |            | integer(int32)         |                        |
| &emsp;&emsp;startRow                     |            | integer(int64)         |                        |
| &emsp;&emsp;total                        |            | integer(int64)         |                        |
| extMsg                                   | 扩展消息   | string                 |                        |
| msg                                      | 响应消息   | string                 |                        |


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
				"addTime": 0,
				"automationId": "",
				"conditionKey": "",
				"content": "",
				"contentLangs": "",
				"deviceName": "",
				"dk": "",
				"executeId": 0,
				"firstLabel": 0,
				"i18nData": "",
				"icon": "",
				"id": "",
				"isRead": true,
				"logId": "",
				"msgType": 0,
				"pk": "",
				"productName": "",
				"readTime": 0,
				"replaceData": "",
				"sceneExecuteTime": 0,
				"sceneIcon": "",
				"sceneName": "",
				"secondaryLabel": 0,
				"shareCode": "",
				"target": "",
				"targetValue": "",
				"title": "",
				"titleLangs": ""
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
