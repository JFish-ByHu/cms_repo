# 获取设备属性数据列表


**接口地址**:`/v2/quecdatastorage/enduserapi/getPropertyDataList`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>获取设备属性数据列表</p>


**请求参数**:


| 参数名称       | 参数说明               | 请求类型 | 是否必须 | 数据类型       | schema |
| -------------- | ---------------------- | -------- | -------- | -------------- | ------ |
| attributeCode  | 物模型属性标识符       | query    | true     | string         |        |
| dk             | Device Key             | query    | true     | string         |        |
| endTimestamp   | 结束时间（毫秒时间戳） | query    | true     | integer(int64) |        |
| pk             | Product Key            | query    | true     | string         |        |
| startTimestamp | 开始时间（毫秒时间戳） | query    | true     | integer(int64) |        |
| gatewayDk      | 网关设备的 Device Key  | query    | false    | string         |        |
| gatewayPk      | 网关设备的 Product Key | query    | false    | string         |        |
| page           | 当前页，默认为第 1 页  | query    | false    | integer(int32) |        |
| pageSize       | 页大小，默认为 10 条   | query    | false    | integer(int32) |        |
| timeStr        | 查询日期               | query    | false    | string         |        |


**响应状态**:


| 状态码 | 说明                     | schema                                 |
| ------ | ------------------------ | -------------------------------------- |
| 200    | 获取设备属性数据列表成功 | 返回注册码响应数据OfPageInfoOf属性数据 |
| 401    | Unauthorized             |                                        |
| 403    | Forbidden                |                                        |
| 404    | Not Found                |                                        |
| 5032   | token 验证失败           |                                        |
| 5106   | 请输入token              |                                        |


**响应参数**:


| 参数名称                              | 参数说明   | 类型               | schema             |
| ------------------------------------- | ---------- | ------------------ | ------------------ |
| code                                  | 响应状态码 | integer(int32)     | integer(int32)     |
| data                                  | 响应数据   | PageInfoOf属性数据 | PageInfoOf属性数据 |
| &emsp;&emsp;endRow                    |            | integer(int64)     |                    |
| &emsp;&emsp;hasNextPage               |            | boolean            |                    |
| &emsp;&emsp;hasPreviousPage           |            | boolean            |                    |
| &emsp;&emsp;isFirstPage               |            | boolean            |                    |
| &emsp;&emsp;isLastPage                |            | boolean            |                    |
| &emsp;&emsp;list                      |            | array              | 属性数据           |
| &emsp;&emsp;&emsp;&emsp;createTime    |            | string             |                    |
| &emsp;&emsp;&emsp;&emsp;createTimeStr |            | string             |                    |
| &emsp;&emsp;&emsp;&emsp;createTimeTs  |            | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;deviceKey     | dk         | string             |                    |
| &emsp;&emsp;&emsp;&emsp;productKey    | pk         | string             |                    |
| &emsp;&emsp;&emsp;&emsp;propertyCode  | 属性标识符 | string             |                    |
| &emsp;&emsp;&emsp;&emsp;propertyValue | 属性值     | object             |                    |
| &emsp;&emsp;&emsp;&emsp;tsCreateTime  | 记录时间   | integer            |                    |
| &emsp;&emsp;navigateFirstPage         |            | integer(int32)     |                    |
| &emsp;&emsp;navigateLastPage          |            | integer(int32)     |                    |
| &emsp;&emsp;navigatePages             |            | integer(int32)     |                    |
| &emsp;&emsp;navigatepageNums          |            | array              | integer            |
| &emsp;&emsp;nextPage                  |            | integer(int32)     |                    |
| &emsp;&emsp;pageNum                   |            | integer(int32)     |                    |
| &emsp;&emsp;pageSize                  |            | integer(int32)     |                    |
| &emsp;&emsp;pages                     |            | integer(int32)     |                    |
| &emsp;&emsp;prePage                   |            | integer(int32)     |                    |
| &emsp;&emsp;size                      |            | integer(int32)     |                    |
| &emsp;&emsp;startRow                  |            | integer(int64)     |                    |
| &emsp;&emsp;total                     |            | integer(int64)     |                    |
| extMsg                                | 扩展消息   | string             |                    |
| msg                                   | 响应消息   | string             |                    |


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
				"createTime": "",
				"createTimeStr": "",
				"createTimeTs": 0,
				"deviceKey": "",
				"productKey": "",
				"propertyCode": "",
				"propertyValue": {},
				"tsCreateTime": 0
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
