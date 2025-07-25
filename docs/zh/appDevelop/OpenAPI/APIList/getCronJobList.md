# 查询定时任务列表


**接口地址**:`/v2/cep/enduserapi/v2/getCronJobList`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询定时任务列表</p>

**请求参数**:


| 参数名称      | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型       | schema |
| ------------- | ------------------------------------------------------------ | -------- | -------- | -------------- | ------ |
| dk            | 设备KEY                                                      | query    | true     | string         |        |
| pk            | 产品KEY                                                      | query    | true     | string         |        |
| Authorization |                                                              | header   | false    | string         |        |
| page          | 当面页码                                                     | query    | false    | integer(int32) |        |
| pageSize      | 每页条数                                                     | query    | false    | integer(int32) |        |
| type          | 定时任务类型，once：执行一次，day-repeat：每天重复，custom-repeat：每周重复，multi-section：多段执行，delay：倒计时 | query    | false    | string         |        |


**响应状态**:


| 状态码 | 说明                       | schema                            |
| ------ | -------------------------- | --------------------------------- |
| 200    | OK                         | ApiResult«PageInfo«定时任务列表»» |
| 401    | Unauthorized               |                                   |
| 403    | Forbidden                  |                                   |
| 404    | Not Found                  |                                   |
| 5041   | 没有权限                   |                                   |
| 5066   | 请输入Product Key          |                                   |
| 5067   | 请输入Device Key           |                                   |
| 5588   | 定时任务类型参数值超出范围 |                                   |
| 5594   | 查询定时任务失败           |                                   |


**响应参数**:


| 参数名称                                      | 参数说明                                                     | 类型                   | schema                 |
| --------------------------------------------- | ------------------------------------------------------------ | ---------------------- | ---------------------- |
| code                                          |                                                              | integer(int32)         | integer(int32)         |
| data                                          |                                                              | PageInfo«定时任务列表» | PageInfo«定时任务列表» |
| &emsp;&emsp;endRow                            |                                                              | integer(int64)         |                        |
| &emsp;&emsp;hasNextPage                       |                                                              | boolean                |                        |
| &emsp;&emsp;hasPreviousPage                   |                                                              | boolean                |                        |
| &emsp;&emsp;isFirstPage                       |                                                              | boolean                |                        |
| &emsp;&emsp;isLastPage                        |                                                              | boolean                |                        |
| &emsp;&emsp;list                              |                                                              | array                  | 定时任务列表           |
| &emsp;&emsp;&emsp;&emsp;cacheTime             | 下行缓存时间，单位秒，值范围：0-7776000                      | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;createTime            | 创建时间                                                     | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;dayOfWeek             | 重复周期,1：周一，2：周二，3：周三，4：周四，5：周五，6：周六，7：周日，多个使用英文逗号分隔，当 type = custom-repeat |                        | multi-section          |
| &emsp;&emsp;&emsp;&emsp;deviceKey             | 设备KEY                                                      | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;enabled               | 定时任务状态，true：启动，false：停止                        | boolean                |                        |
| &emsp;&emsp;&emsp;&emsp;productKey            | 产品KEY                                                      | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;ruleId                | 定时任务规则ID                                               | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;timeZone              | 时区，格式：+-HH:mm                                          | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;timers                | 定时任务列表，当 type = multi-section 时，定时任务数量限制为 2-5 个 | array                  | 定时任务Res            |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;action    | 定时任务执行的命令，格式：物模型JSON字符串                   | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cacheTime | 下行缓存时间，单位秒，值范围：0-7776000                      | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;delay     | 延迟执行时间，单位秒，当 type = delay 时必填                 | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;taskLogo  | 任务图标                                                     | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;taskName  | 任务名称                                                     | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;time      | 执行时间，格式：HH:mm:ss，当 type = once                     |                        | day-repeat             |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;timerId   | 定时任务ID                                                   | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;type                  | 定时任务类型，once：执行一次，day-repeat：每天重复，custom-repeat：每周重复，multi-section：多段执行，random：随机执行，delay：倒计时 | string                 |                        |
| &emsp;&emsp;navigateFirstPage                 |                                                              | integer(int32)         |                        |
| &emsp;&emsp;navigateLastPage                  |                                                              | integer(int32)         |                        |
| &emsp;&emsp;navigatePages                     |                                                              | integer(int32)         |                        |
| &emsp;&emsp;navigatepageNums                  |                                                              | array                  | integer                |
| &emsp;&emsp;nextPage                          |                                                              | integer(int32)         |                        |
| &emsp;&emsp;pageNum                           |                                                              | integer(int32)         |                        |
| &emsp;&emsp;pageSize                          |                                                              | integer(int32)         |                        |
| &emsp;&emsp;pages                             |                                                              | integer(int32)         |                        |
| &emsp;&emsp;prePage                           |                                                              | integer(int32)         |                        |
| &emsp;&emsp;size                              |                                                              | integer(int32)         |                        |
| &emsp;&emsp;startRow                          |                                                              | integer(int64)         |                        |
| &emsp;&emsp;total                             |                                                              | integer(int64)         |                        |
| extMsg                                        |                                                              | string                 |                        |
| msg                                           |                                                              | string                 |                        |


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
				"cacheTime": 0,
				"createTime": 0,
				"dayOfWeek": "",
				"deviceKey": "",
				"enabled": true,
				"productKey": "",
				"ruleId": "",
				"timeZone": "",
				"timers": [
					{
						"action": "",
						"cacheTime": 0,
						"delay": 0,
						"taskLogo": "",
						"taskName": "",
						"time": "",
						"timerId": ""
					}
				],
				"type": ""
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
