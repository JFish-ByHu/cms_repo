# 创建队列


**接口地址**:`/v2/quecrule/{version}/openapi/queue/create`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>创建队列</p>



**请求示例**:


```javascript
{
  "queueDesc": "desc",
  "queueName": "testQueue"
}
```


**请求参数**:


| 参数名称              | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型        | schema          |
| --------------------- | ------------------------------------------------------------ | -------- | -------- | --------------- | --------------- |
| openApiQueueDto       | 队列信息                                                     | body     | true     | OpenApiQueueDto | OpenApiQueueDto |
| &emsp;&emsp;queueDesc | 队列描述，最大长度200                                        |          | false    | string          |                 |
| &emsp;&emsp;queueName | 队列名，需要账号内唯一，最大长度64个字符，支持大小写英文字符串(区分大小写)、数字、下划线(_)、中划线(-)、不支持斜杠(/)、空格等其他字符 |          | true     | string          |                 |
| version               | 当前版本,可用值:r1                                           | path     | true     | string          |                 |


**响应状态**:


| 状态码 | 说明                                                         | schema                            |
| ------ | ------------------------------------------------------------ | --------------------------------- |
| 200    | OK                                                           | ActionResultOfCreateQueueResponse |
| 201    | Created                                                      |                                   |
| 401    | Unauthorized                                                 |                                   |
| 403    | Forbidden                                                    |                                   |
| 404    | Not Found                                                    |                                   |
| 16001  | The queue name already exists                                |                                   |
| 16004  | Failed to create queue                                       |                                   |
| 16007  | The number of queues is out of limit                         |                                   |
| 16024  | The message subscription is not enabled, please go to the SaaS development Guide to apply for enabling |                                   |
| 50000  | service exception                                            |                                   |
| 50005  | param check error                                            |                                   |
| 91004  | token incorrect                                              |                                   |
| 91005  | doesn't have permission                                      |                                   |


**响应参数**:


| 参数名称               | 参数说明                | 类型                | schema              |
| ---------------------- | ----------------------- | ------------------- | ------------------- |
| code                   | 返回码                  | integer(int32)      | integer(int32)      |
| data                   | 对象                    | CreateQueueResponse | CreateQueueResponse |
| &emsp;&emsp;createTime | 创建时间                | string(date-time)   |                     |
| &emsp;&emsp;entUserId  | 所属企业用户id          | integer(int64)      |                     |
| &emsp;&emsp;id         | ID                      | integer(int64)      |                     |
| &emsp;&emsp;isFree     | 是否免费队列 0:否，1:是 | integer(int32)      |                     |
| &emsp;&emsp;queueDesc  | 队列描述                | string              |                     |
| &emsp;&emsp;queueName  | 队列名                  | string              |                     |
| &emsp;&emsp;status     | 队列状态                | integer(int32)      |                     |
| &emsp;&emsp;updateTime | 更新时间                | string(date-time)   |                     |
| &emsp;&emsp;userId     | 用户ID                  | integer(int64)      |                     |
| msg                    | 提示信息                | string              |                     |
| pageNum                | 当前页数                | integer(int32)      | integer(int32)      |
| pageSize               | 每页数量                | integer(int32)      | integer(int32)      |
| pages                  | 总页数                  | integer(int32)      | integer(int32)      |
| total                  | 总数                    | integer(int32)      | integer(int32)      |


**响应示例**:
```javascript
{
	"code": 200,
	"data": {
		"createTime": "1730871805372",
		"entUserId": 1358403955870720,
		"id": 6611,
		"isFree": 0,
		"queueDesc": "desc",
		"queueName": "a.1358403955870720.testQueue",
		"status": 0,
		"updateTime": "",
		"userId": 1358403955870720
	},
	"msg": ""
}
```
