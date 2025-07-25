# 查询定时任务详情


**接口地址**:`/v2/cep/enduserapi/v2/getCronJobInfo`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询定时任务详情</p>


**请求参数**:


| 参数名称      | 参数说明       | 请求类型 | 是否必须 | 数据类型 | schema |
| ------------- | -------------- | -------- | -------- | -------- | ------ |
| ruleId        | 定时任务规则ID | query    | true     | string   |        |
| Authorization |                | header   | false    | string   |        |


**响应状态**:


| 状态码 | 说明             | schema                  |
| ------ | ---------------- | ----------------------- |
| 200    | OK               | ApiResult«定时任务详情» |
| 401    | Unauthorized     |                         |
| 403    | Forbidden        |                         |
| 404    | Not Found        |                         |
| 5041   | 没有权限         |                         |
| 5593   | 请输入定时任务ID |                         |
| 5594   | 查询定时任务失败 |                         |


**响应参数**:


| 参数名称                          | 参数说明                                                     | 类型           | schema         |
| --------------------------------- | ------------------------------------------------------------ | -------------- | -------------- |
| code                              |                                                              | integer(int32) | integer(int32) |
| data                              |                                                              | 定时任务详情   | 定时任务详情   |
| &emsp;&emsp;cacheTime             | 下行缓存时间，单位秒，值范围：0-7776000                      | integer(int64) |                |
| &emsp;&emsp;createTime            | 创建时间                                                     | integer(int64) |                |
| &emsp;&emsp;dayOfWeek             | 重复周期，1：周一，2：周二，3：周三，4：周四，5：周五，6：周六，7：周日，多个使用英文逗号分隔，当 type = custom-repeat |                | multi-section  |
| &emsp;&emsp;deviceKey             | 设备KEY                                                      | string         |                |
| &emsp;&emsp;enabled               | 定时任务状态，true：启动，false：停止                        | boolean        |                |
| &emsp;&emsp;productKey            | 产品KEY                                                      | string         |                |
| &emsp;&emsp;ruleId                | 定时任务规则ID                                               | string         |                |
| &emsp;&emsp;timeZone              | 时区，格式：+-HH:mm                                          | string         |                |
| &emsp;&emsp;timers                | 定时任务列表，当 type = multi-section 时，定时任务数量限制为 2-5 个 | array          | 定时任务Res    |
| &emsp;&emsp;&emsp;&emsp;action    | 定时任务执行的命令，格式：物模型JSON字符串                   | string         |                |
| &emsp;&emsp;&emsp;&emsp;cacheTime | 下行缓存时间，单位秒，值范围：0-7776000                      | integer        |                |
| &emsp;&emsp;&emsp;&emsp;delay     | 延迟执行时间，单位秒，当 type = delay 时必填                 | integer        |                |
| &emsp;&emsp;&emsp;&emsp;taskLogo  | 任务图标                                                     | string         |                |
| &emsp;&emsp;&emsp;&emsp;taskName  | 任务名称                                                     | string         |                |
| &emsp;&emsp;&emsp;&emsp;time      | 执行时间，格式：HH:mm:ss，当 type = once                     |                | day-repeat     |
| &emsp;&emsp;&emsp;&emsp;timerId   | 定时任务ID                                                   | string         |                |
| &emsp;&emsp;type                  | 定时任务类型，once：执行一次，day-repeat：每天重复，custom-repeat：每周重复，multi-section：多段执行，delay：倒计时 | string         |                |
| extMsg                            |                                                              | string         |                |
| msg                               |                                                              | string         |                |


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
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
	},
	"extMsg": "",
	"msg": ""
}
```
