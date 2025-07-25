# 批量获取纯蓝牙设备重置凭证


**接口地址**:`/v2/binding/enduserapi/batchGetPureBtResetCredentials`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>批量获取纯蓝牙设备重置凭证</p>



**请求示例**:


```javascript
[
  {
    "dk": "",
    "pk": ""
  }
]
```


**请求参数**:


| 参数名称       | 参数说明    | 请求类型 | 是否必须 | 数据类型 | schema  |
| -------------- | ----------- | -------- | -------- | -------- | ------- |
| param          | param       | body     | true     | array    | PkDkDto |
| &emsp;&emsp;dk | Device Key  |          | true     | string   |         |
| &emsp;&emsp;pk | Product Key |          | true     | string   |         |


**响应状态**:


| 状态码 | 说明                           | schema                                  |
| ------ | ------------------------------ | --------------------------------------- |
| 200    | 批量获取纯蓝牙设备重置凭证成功 | 返回注册码响应数据«ResetCredentialsDto» |
| 5032   | token 验证失败                 |                                         |
| 5106   | 请输入token                    |                                         |


**响应参数**:


| 参数名称                                 | 参数说明           | 类型                | schema                     |
| ---------------------------------------- | ------------------ | ------------------- | -------------------------- |
| code                                     | 响应状态码         | integer(int32)      | integer(int32)             |
| data                                     | 响应数据           | ResetCredentialsDto | ResetCredentialsDto        |
| &emsp;&emsp;failedList                   | 失败列表           | array               | ResetCredentialsFailedDto  |
| &emsp;&emsp;&emsp;&emsp;dk               | dk                 | string              |                            |
| &emsp;&emsp;&emsp;&emsp;msg              |                    | string              |                            |
| &emsp;&emsp;&emsp;&emsp;pk               | pk                 | string              |                            |
| &emsp;&emsp;successList                  | 成功列表           | array               | ResetCredentialsSuccessDto |
| &emsp;&emsp;&emsp;&emsp;dk               | dk                 | string              |                            |
| &emsp;&emsp;&emsp;&emsp;pk               | pk                 | string              |                            |
| &emsp;&emsp;&emsp;&emsp;resetCredentials | 纯蓝牙设备重置凭证 | string              |                            |
| extMsg                                   | 扩展消息           | string              |                            |
| msg                                      | 响应消息           | string              |                            |


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"failedList": [
			{
				"dk": "",
				"msg": "",
				"pk": ""
			}
		],
		"successList": [
			{
				"dk": "",
				"pk": "",
				"resetCredentials": ""
			}
		]
	},
	"extMsg": "",
	"msg": ""
}
```
