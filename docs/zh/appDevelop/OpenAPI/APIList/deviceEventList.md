# 获取设备事件列表


**接口地址**:`/v2/quecdatastorage/enduserapi/v2/deviceEventList`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>获取设备事件列表V2</p>



**请求示例**:


```javascript
{
  "codeList": [],
  "deviceKey": "",
  "endTime": 0,
  "page": 0,
  "pageSize": 0,
  "productKey": "",
  "startTime": 0,
  "timezone": ""
}
```


**请求参数**:


| 参数名称               | 参数说明                   | 请求类型 | 是否必须 | 数据类型               | schema                 |
| ---------------------- | -------------------------- | -------- | -------- | ---------------------- | ---------------------- |
| param                  | param                      | body     | true     | 获取设备事件列表V2参数 | 获取设备事件列表V2参数 |
| &emsp;&emsp;codeList   | 物模型Code列表             |          | true     | array                  | string                 |
| &emsp;&emsp;deviceKey  | Device Key                 |          | true     | string                 |                        |
| &emsp;&emsp;endTime    | 结束时间（毫秒时间戳）     |          | true     | integer(int64)         |                        |
| &emsp;&emsp;page       | 当前页，默认为第 1 页      |          | false    | integer(int32)         |                        |
| &emsp;&emsp;pageSize   | 页大小，默认为 10 条       |          | false    | integer(int32)         |                        |
| &emsp;&emsp;productKey | Product Key                |          | true     | string                 |                        |
| &emsp;&emsp;startTime  | 开始时间（毫秒时间戳）     |          | true     | integer(int64)         |                        |
| &emsp;&emsp;timezone   | 时区偏差【标准±hh:mm格式】 |          | false    | string                 |                        |


**响应状态**:


| 状态码 | 说明                 | schema                                      |
| ------ | -------------------- | ------------------------------------------- |
| 200    | 获取设备事件列表成功 | 返回注册码响应数据OfPageInfoOfDeviceEventVO |
| 201    | Created              |                                             |
| 401    | Unauthorized         |                                             |
| 403    | Forbidden            |                                             |
| 404    | Not Found            |                                             |
| 5032   | token 验证失败       |                                             |
| 5106   | 请输入token          |                                             |


**响应参数**:


| 参数名称                           | 参数说明       | 类型                    | schema                  |
| ---------------------------------- | -------------- | ----------------------- | ----------------------- |
| code                               | 响应状态码     | integer(int32)          | integer(int32)          |
| data                               | 响应数据       | PageInfoOfDeviceEventVO | PageInfoOfDeviceEventVO |
| &emsp;&emsp;endRow                 |                | integer(int64)          |                         |
| &emsp;&emsp;hasNextPage            |                | boolean                 |                         |
| &emsp;&emsp;hasPreviousPage        |                | boolean                 |                         |
| &emsp;&emsp;isFirstPage            |                | boolean                 |                         |
| &emsp;&emsp;isLastPage             |                | boolean                 |                         |
| &emsp;&emsp;list                   |                | array                   | DeviceEventVO           |
| &emsp;&emsp;&emsp;&emsp;abId       | abId           | integer                 |                         |
| &emsp;&emsp;&emsp;&emsp;createTime | 开始时间       | string                  |                         |
| &emsp;&emsp;&emsp;&emsp;deviceKey  | 设备key        | string                  |                         |
| &emsp;&emsp;&emsp;&emsp;eventCode  | 事件码         | string                  |                         |
| &emsp;&emsp;&emsp;&emsp;eventName  | 事件名称       | string                  |                         |
| &emsp;&emsp;&emsp;&emsp;eventType  | 事件类型       | string                  |                         |
| &emsp;&emsp;&emsp;&emsp;extData    | 扩展信息       | object                  |                         |
| &emsp;&emsp;&emsp;&emsp;id         | id             | string                  |                         |
| &emsp;&emsp;&emsp;&emsp;outputData | 输出参数       | string                  |                         |
| &emsp;&emsp;&emsp;&emsp;packetId   | packetId       | integer                 |                         |
| &emsp;&emsp;&emsp;&emsp;productKey | 产品productKey | string                  |                         |
| &emsp;&emsp;&emsp;&emsp;ticket     | ticket         | string                  |                         |
| &emsp;&emsp;navigateFirstPage      |                | integer(int32)          |                         |
| &emsp;&emsp;navigateLastPage       |                | integer(int32)          |                         |
| &emsp;&emsp;navigatePages          |                | integer(int32)          |                         |
| &emsp;&emsp;navigatepageNums       |                | array                   | integer                 |
| &emsp;&emsp;nextPage               |                | integer(int32)          |                         |
| &emsp;&emsp;pageNum                |                | integer(int32)          |                         |
| &emsp;&emsp;pageSize               |                | integer(int32)          |                         |
| &emsp;&emsp;pages                  |                | integer(int32)          |                         |
| &emsp;&emsp;prePage                |                | integer(int32)          |                         |
| &emsp;&emsp;size                   |                | integer(int32)          |                         |
| &emsp;&emsp;startRow               |                | integer(int64)          |                         |
| &emsp;&emsp;total                  |                | integer(int64)          |                         |
| extMsg                             | 扩展消息       | string                  |                         |
| msg                                | 响应消息       | string                  |                         |


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
				"abId": 0,
				"createTime": "",
				"deviceKey": "",
				"eventCode": "",
				"eventName": "",
				"eventType": "",
				"extData": {},
				"id": "",
				"outputData": "",
				"packetId": 0,
				"productKey": "",
				"ticket": ""
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
