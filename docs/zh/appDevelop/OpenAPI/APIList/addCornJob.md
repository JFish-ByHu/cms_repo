# 创建定时任务


**接口地址**:`/v2/cep/enduserapi/v2/addCornJob`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>创建定时任务</p>



**请求示例**:


```javascript
{
  "cacheTime": 0,
  "dayOfWeek": "",
  "dk": "",
  "enabled": true,
  "pk": "",
  "timeZone": "",
  "timers": [
    {
      "action": "",
      "cacheTime": 0,
      "delay": 0,
      "taskLogo": "",
      "taskName": "",
      "time": ""
    }
  ],
  "type": ""
}
```


**请求参数**:


| 参数名称                          | 参数说明                                                     | 请求类型 | 是否必须      | 数据类型       | schema        |
| --------------------------------- | ------------------------------------------------------------ | -------- | ------------- | -------------- | ------------- |
| cmd                               | cmd                                                          | body     | true          | 创建定时任务   | 创建定时任务  |
| &emsp;&emsp;cacheTime             | 下行缓存时间，单位秒，值范围：0-7776000                      |          | false         | integer(int32) |               |
| &emsp;&emsp;dayOfWeek             | 重复周期：1：周一，2：周二，3：周三，4：周四，5：周五，6：周六，7：周日，多个使用英文逗号分隔，当 type = custom-repeat |          | multi-section |                | random 时必填 |
| &emsp;&emsp;dk                    | Device Key                                                   |          | true          | string         |               |
| &emsp;&emsp;enabled               | 定时任务状态，启动：true，停止：false                        |          | false         | boolean        |               |
| &emsp;&emsp;pk                    | Product Key                                                  |          | true          | string         |               |
| &emsp;&emsp;timeZone              | 时区。格式：+-HH:mm                                          |          | false         | string         |               |
| &emsp;&emsp;timers                | 定时任务列表，当 type = multi-section 时，定时任务数量限制为 2-5 个 |          | true          | array          | 定时任务Req   |
| &emsp;&emsp;&emsp;&emsp;action    | 定时任务执行的命令，格式：物模型JSON字符串                   |          | true          | string         |               |
| &emsp;&emsp;&emsp;&emsp;cacheTime | 下行缓存时间，单位秒，值范围：0-7776000                      |          | false         | integer        |               |
| &emsp;&emsp;&emsp;&emsp;delay     | 延迟执行时间，单位秒，当 type = delay 时必填                 |          | false         | integer        |               |
| &emsp;&emsp;&emsp;&emsp;taskLogo  | 任务图标                                                     |          | false         | string         |               |
| &emsp;&emsp;&emsp;&emsp;taskName  | 任务名称                                                     |          | false         | string         |               |
| &emsp;&emsp;&emsp;&emsp;time      | 执行时间，格式：HH:mm:ss，当 type = once                     |          | day-repeat    |                | custom-repeat |
| &emsp;&emsp;type                  | 定时任务类型，once：执行一次，day-repeat：每天重复，custom-repeat：每周重复，multi-section：多段执行，delay：倒计时 |          | true          | string         |               |
| Authorization                     |                                                              | header   | false         | string         |               |


**响应状态**:


| 状态码 | 说明                             | schema                  |
| ------ | -------------------------------- | ----------------------- |
| 200    | OK                               | ApiResult«添加定时任务» |
| 201    | Created                          |                         |
| 401    | Unauthorized                     |                         |
| 403    | Forbidden                        |                         |
| 404    | Not Found                        |                         |
| 5066   | 请输入Product Key                |                         |
| 5067   | 请输入Device Key                 |                         |
| 5107   | 请输入开始时间                   |                         |
| 5108   | 请输入结束时间                   |                         |
| 5109   | 开始时间格式不正确               |                         |
| 5110   | 结束时间格式不正确               |                         |
| 5587   | 请输入定时任务类型               |                         |
| 5588   | 定时任务类型参数值超出范围       |                         |
| 5589   | 请输入定时任务执行的命令         |                         |
| 5590   | 请输入周几执行                   |                         |
| 5591   | 周几执行参数值超出范围           |                         |
| 5592   | 添加定时任务失败                 |                         |
| 5598   | 请输入执行时间                   |                         |
| 5599   | 执行时间参数值超出范围           |                         |
| 5600   | 开始时间必须小于结束时间         |                         |
| 5601   | 请输入延迟执行时间               |                         |
| 5602   | 延迟执行时间参数值超出范围       |                         |
| 5604   | 该设备添加的定时任务数量已达上限 |                         |


**响应参数**:


| 参数名称           | 参数说明   | 类型           | schema         |
| ------------------ | ---------- | -------------- | -------------- |
| code               |            | integer(int32) | integer(int32) |
| data               |            | 添加定时任务   | 添加定时任务   |
| &emsp;&emsp;ruleId | 定时任务ID | string         |                |
| extMsg             |            | string         |                |
| msg                |            | string         |                |


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"ruleId": ""
	},
	"extMsg": "",
	"msg": ""
}
```
