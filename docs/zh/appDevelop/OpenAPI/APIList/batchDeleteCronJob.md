# 删除定时任务


**接口地址**:`/v2/cep/enduserapi/batchDeleteCronJob`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>删除定时任务</p>



**请求示例**:


```javascript
{
  "ruleIdList": []
}
```


**请求参数**:


| 参数名称               | 参数说明       | 请求类型 | 是否必须 | 数据类型         | schema           |
| ---------------------- | -------------- | -------- | -------- | ---------------- | ---------------- |
| cmd                    | cmd            | body     | true     | 删除定时任务参数 | 删除定时任务参数 |
| &emsp;&emsp;ruleIdList | 定时任务ID列表 |          | true     | array            | string           |
| Authorization          |                | header   | false    | string           |                  |


**响应状态**:


| 状态码 | 说明                 | schema                  |
| ------ | -------------------- | ----------------------- |
| 200    | OK                   | ApiResult«删除定时任务» |
| 204    | No Content           |                         |
| 401    | Unauthorized         |                         |
| 403    | Forbidden            |                         |
| 5596   | 请输入定时任务ID列表 |                         |


**响应参数**:


| 参数名称                       | 参数说明 | 类型           | schema              |
| ------------------------------ | -------- | -------------- | ------------------- |
| code                           |          | integer(int32) | integer(int32)      |
| data                           |          | 删除定时任务   | 删除定时任务        |
| &emsp;&emsp;failureList        | 失败列表 | array          | TimerDeleteResultCO |
| &emsp;&emsp;&emsp;&emsp;code   |          | integer        |                     |
| &emsp;&emsp;&emsp;&emsp;msg    |          | string         |                     |
| &emsp;&emsp;&emsp;&emsp;ruleId |          | string         |                     |
| &emsp;&emsp;successList        | 成功列表 | array          | TimerDeleteResultCO |
| &emsp;&emsp;&emsp;&emsp;code   |          | integer        |                     |
| &emsp;&emsp;&emsp;&emsp;msg    |          | string         |                     |
| &emsp;&emsp;&emsp;&emsp;ruleId |          | string         |                     |
| extMsg                         |          | string         |                     |
| msg                            |          | string         |                     |


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"failureList": [
			{
				"code": 0,
				"msg": "",
				"ruleId": ""
			}
		],
		"successList": [
			{
				"code": 0,
				"msg": "",
				"ruleId": ""
			}
		]
	},
	"extMsg": "",
	"msg": ""
}
```
