# 查询队列列表


**接口地址**:`/v2/quecrule/{version}/openapi/queue/list`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>队列列表</p>



**请求示例**:


```javascript
{
  "pageNum": 1,
  "pageSize": 10,
  "queueName": "testQueue",
  "status": 1
}
```


**请求参数**:


| 参数名称              | 参数说明                                     | 请求类型 | 是否必须 | 数据类型             | schema               |
| --------------------- | -------------------------------------------- | -------- | -------- | -------------------- | -------------------- |
| queueQueryDTO         | 查询参数                                     | body     | true     | OpenApiQueryQueueDTO | OpenApiQueryQueueDTO |
| &emsp;&emsp;pageNum   | 页码数，从1开始                              |          | false    | integer(int32)       |                      |
| &emsp;&emsp;pageSize  | 每页数据数，范围1~100                        |          | false    | integer(int32)       |                      |
| &emsp;&emsp;queueName | 队列名                                       |          | false    | string               |                      |
| &emsp;&emsp;status    | 队列状态, 0-未启用 1-启用 2-停用, 不填为全部 |          | false    | integer(int32)       |                      |
| version               | 当前版本,可用值:r1                           | path     | true     | string               |                      |


**响应状态**:


| 状态码 | 说明                    | schema                      |
| ------ | ----------------------- | --------------------------- |
| 200    | OK                      | ActionResultOfListOfQbQueue |
| 201    | Created                 |                             |
| 401    | Unauthorized            |                             |
| 403    | Forbidden               |                             |
| 404    | Not Found               |                             |
| 50000  | service exception       |                             |
| 50005  | param check error       |                             |
| 91004  | token incorrect         |                             |
| 91005  | doesn't have permission |                             |


**响应参数**:


| 参数名称               | 参数说明                | 类型              | schema         |
| ---------------------- | ----------------------- | ----------------- | -------------- |
| code                   | 返回码                  | integer(int32)    | integer(int32) |
| data                   | 对象                    | array             | QbQueue        |
| &emsp;&emsp;createTime | 创建时间                | string(date-time) |                |
| &emsp;&emsp;entUserId  | 所属企业用户id          | integer(int64)    |                |
| &emsp;&emsp;id         | ID                      | integer(int64)    |                |
| &emsp;&emsp;isFree     | 是否免费队列 0:否，1:是 | integer(int32)    |                |
| &emsp;&emsp;metadata   | 队列元数据              | string            |                |
| &emsp;&emsp;queueDesc  | 队列描述                | string            |                |
| &emsp;&emsp;queueName  | 队列名                  | string            |                |
| &emsp;&emsp;status     | 队列状态                | integer(int32)    |                |
| &emsp;&emsp;updateTime | 更新时间                | string(date-time) |                |
| &emsp;&emsp;userId     | 用户ID                  | integer(int64)    |                |
| msg                    | 提示信息                | string            |                |
| pageNum                | 当前页数                | integer(int32)    | integer(int32) |
| pageSize               | 每页数量                | integer(int32)    | integer(int32) |
| pages                  | 总页数                  | integer(int32)    | integer(int32) |
| total                  | 总数                    | integer(int32)    | integer(int32) |


**响应示例**:
```javascript
{
	"code": 0,
	"data": [
		{
			"createTime": "1730871805372",
			"entUserId": 1358403955870720,
			"id": 6611,
			"isFree": 0,
			"metadata": "",
			"queueDesc": "desc",
			"queueName": "a.1358403955870720.testQueue",
			"status": 1,
			"updateTime": null,
			"userId": 1358403955870720
		}
	],
	"msg": "",
	"pageNum": 1,
	"pageSize": 10,
	"pages": 1,
	"total": 1
}
```
