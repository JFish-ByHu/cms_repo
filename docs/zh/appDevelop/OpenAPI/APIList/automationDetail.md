# 查询自动化详情


**接口地址**:`/v2/cep/enduserapi/automation/detail`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询自动化详情</p>

**请求参数**:


| 参数名称      | 参数说明                           | 请求类型 | 是否必须 | 数据类型       | schema |
| ------------- | ---------------------------------- | -------- | -------- | -------------- | ------ |
| automationId  | 自动化ID                           | query    | true     | integer(int64) |        |
| Authorization |                                    | header   | false    | string         |        |
| fid           | 家庭ID，开启家居模式必填，否则不填 | query    | false    | string         |        |


**响应状态**:


| 状态码 | 说明         | schema                |
| ------ | ------------ | --------------------- |
| 200    | OK           | ApiResult«自动化详情» |
| 401    | Unauthorized |                       |
| 403    | Forbidden    |                       |
| 404    | Not Found    |                       |


**响应参数**:


| 参数名称                                      | 参数说明                                                     | 类型               | schema             |
| --------------------------------------------- | ------------------------------------------------------------ | ------------------ | ------------------ |
| code                                          |                                                              | integer(int32)     | integer(int32)     |
| data                                          |                                                              | 自动化详情         | 自动化详情         |
| &emsp;&emsp;actions                           | 触发动作                                                     | array              | 自动化执行动作     |
| &emsp;&emsp;&emsp;&emsp;delayTime             | 延迟时间，单位秒                                             | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;deviceKey             | 设备DK/群组ID                                                | string             |                    |
| &emsp;&emsp;&emsp;&emsp;icon                  | 设备/群组/场景图标                                           | string             |                    |
| &emsp;&emsp;&emsp;&emsp;id                    |                                                              | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;name                  | 设备/群组/场景名称                                           | string             |                    |
| &emsp;&emsp;&emsp;&emsp;productKey            | 产品PK/群组PK                                                | string             |                    |
| &emsp;&emsp;&emsp;&emsp;property              | 设备属性                                                     | 物模型属性         | 物模型属性         |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code      | 物模型标识符                                                 | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;compare   | 比较符。>                                                    | >=                 | <                  |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataType  | 数据类型。支持：BOOL、ENUM、INT、FLOAT、DOUBLE,可用值:BOOL,DOUBLE,ENUM,FLOAT,INT | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id        | 物模型功能ID                                                 | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name      | 物模型名称                                                   | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subName   |                                                              | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subType   |                                                              | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type      | 物模型类型                                                   | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unit      | 物模型单位                                                   | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value     | 物模型属性比较值                                             | object             |                    |
| &emsp;&emsp;&emsp;&emsp;sceneId               | 场景ID                                                       | string             |                    |
| &emsp;&emsp;&emsp;&emsp;sort                  | 执行动作顺序，从1开始递增                                    | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;type                  | 执行动作类型。1：延时，2：设备，3：群组，4：场景             | integer            |                    |
| &emsp;&emsp;automationId                      | 自动化ID                                                     | integer(int64)     |                    |
| &emsp;&emsp;conditionType                     | 触发类型。1: 满足任意，2: 满足所有                           | integer(int32)     |                    |
| &emsp;&emsp;conditions                        | 触发条件                                                     | array              | 自动化触发条件     |
| &emsp;&emsp;&emsp;&emsp;deviceKey             | 设备DK                                                       | string             |                    |
| &emsp;&emsp;&emsp;&emsp;icon                  | 设备/群组/场景图标                                           | string             |                    |
| &emsp;&emsp;&emsp;&emsp;name                  | 设备/群组/场景名称                                           | string             |                    |
| &emsp;&emsp;&emsp;&emsp;productKey            | 产品PK                                                       | string             |                    |
| &emsp;&emsp;&emsp;&emsp;property              | 设备属性                                                     | 物模型属性         | 物模型属性         |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code      | 物模型标识符                                                 | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;compare   | 比较符。>                                                    | >=                 | <                  |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataType  | 数据类型。支持：BOOL、ENUM、INT、FLOAT、DOUBLE,可用值:BOOL,DOUBLE,ENUM,FLOAT,INT | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id        | 物模型功能ID                                                 | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name      | 物模型名称                                                   | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subName   |                                                              | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subType   |                                                              | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type      | 物模型类型                                                   | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unit      | 物模型单位                                                   | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value     | 物模型属性比较值                                             | object             |                    |
| &emsp;&emsp;&emsp;&emsp;sort                  | 条件顺序，从1开始递增                                        | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;timer                 | 条件时间                                                     | 自动化触发条件时间 | 自动化触发条件时间 |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dayOfWeek | 重复周期。定时类型为自定义时必填，1,2,3...7表示周一到周日    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;time      | 定时执行时间点。符合HH:mm格式                                | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;timeZone  | 时区，格式：+-HH:mm                                          | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type      | 定时类型。0：仅一次，1：每天，2：自定义                      | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;type                  | 触发条件类型。0：设备，1：定时                               | integer            |                    |
| &emsp;&emsp;icon                              | 自动化图标                                                   | string             |                    |
| &emsp;&emsp;name                              | 自动化名称                                                   | string             |                    |
| &emsp;&emsp;nameType                          | 自动化名称生成方式。1：系统生成，2：用户填写                 | integer(int32)     |                    |
| &emsp;&emsp;precondition                      | 生效时间                                                     | 自动化生效时间     | 自动化生效时间     |
| &emsp;&emsp;&emsp;&emsp;effectDate            | 生效日期。生效日期类型为每天时不填。每周：1,2,3,...7表示周一到周日，周月：1-31号，指定日期：符合MM-dd/MM-dd格式，例：12-19/12-21 | string             |                    |
| &emsp;&emsp;&emsp;&emsp;effectDateType        | 生效日期类型。0：每天，1：每周，2：每月，3：指定日期         | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;effectTimeType        | 生效时间类型。0：白天，1：夜晚，2：全天，3：指定时间段       | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;endTime               | 结束时间。生效时间类型为全天和指定时间段时必填，符合HH:mm格式 | string             |                    |
| &emsp;&emsp;&emsp;&emsp;location              | 经纬度。经度在前纬度在后，生效时间类型为白天或夜晚时必填     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;regionName            | 地区名称                                                     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;startTime             | 开始时间。生效时间类型为全天和指定时间段时必填，符合HH:mm格式 | string             |                    |
| &emsp;&emsp;&emsp;&emsp;timeZone              | 时区，格式：+-HH:mm                                          | string             |                    |
| extMsg                                        |                                                              | string             |                    |
| msg                                           |                                                              | string             |                    |


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"actions": [
			{
				"delayTime": 0,
				"deviceKey": "",
				"icon": "",
				"id": 0,
				"name": "",
				"productKey": "",
				"property": {
					"code": "",
					"compare": "",
					"dataType": "",
					"id": 0,
					"name": "",
					"subName": "",
					"subType": "",
					"type": "",
					"unit": "",
					"value": {}
				},
				"sceneId": "",
				"sort": 0,
				"type": 0
			}
		],
		"automationId": 0,
		"conditionType": 0,
		"conditions": [
			{
				"deviceKey": "",
				"icon": "",
				"name": "",
				"productKey": "",
				"property": {
					"code": "",
					"compare": "",
					"dataType": "",
					"id": 0,
					"name": "",
					"subName": "",
					"subType": "",
					"type": "",
					"unit": "",
					"value": {}
				},
				"sort": 0,
				"timer": {
					"dayOfWeek": "",
					"time": "",
					"timeZone": "",
					"type": 0
				},
				"type": 0
			}
		],
		"icon": "",
		"name": "",
		"nameType": 0,
		"precondition": {
			"effectDate": "",
			"effectDateType": 0,
			"effectTimeType": 0,
			"endTime": "",
			"location": "",
			"regionName": "",
			"startTime": "",
			"timeZone": ""
		}
	},
	"extMsg": "",
	"msg": ""
}
```
