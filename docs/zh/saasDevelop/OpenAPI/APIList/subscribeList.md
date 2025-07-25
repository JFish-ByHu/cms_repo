# 查询订阅列表


**接口地址**:`/v2/quecrule/{version}/openapi/subscribe/list`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>订阅列表</p>



**请求示例**:


```javascript
{
  "pageNum": 1,
  "pageSize": 10,
  "queueName": "testQueue",
  "status": 1,
  "subscribeName": "subscribeName01"
}
```


**请求参数**:


| 参数名称                  | 参数说明                | 请求类型 | 是否必须 | 数据类型                 | schema                   |
| ------------------------- | ----------------------- | -------- | -------- | ------------------------ | ------------------------ |
| subscribeDTO              | 查询参数                | body     | true     | OpenApiQuerySubscribeDTO | OpenApiQuerySubscribeDTO |
| &emsp;&emsp;pageNum       | 页码数，从1开始         |          | false    | integer(int32)           |                          |
| &emsp;&emsp;pageSize      | 每页数据数，范围1~100   |          | false    | integer(int32)           |                          |
| &emsp;&emsp;queueName     | 队列名                  |          | false    | string                   |                          |
| &emsp;&emsp;status        | 状态，0-未启动 1-运行中 |          | false    | integer(int32)           |                          |
| &emsp;&emsp;subscribeName | 订阅名                  |          | false    | string                   |                          |
| version                   | 当前版本,可用值:r1      | path     | true     | string                   |                          |


**响应状态**:


| 状态码 | 说明                    | schema                               |
| ------ | ----------------------- | ------------------------------------ |
| 200    | OK                      | ActionResultOfListOfSubscribeRuleDTO |
| 201    | Created                 |                                      |
| 401    | Unauthorized            |                                      |
| 403    | Forbidden               |                                      |
| 404    | Not Found               |                                      |
| 50000  | service exception       |                                      |
| 50005  | param check error       |                                      |
| 70060  | Permission Denied       |                                      |
| 91004  | token incorrect         |                                      |
| 91005  | doesn't have permission |                                      |


**响应参数**:


| 参数名称                   | 参数说明                               | 类型              | schema           |
| -------------------------- | -------------------------------------- | ----------------- | ---------------- |
| code                       | 返回码                                 | integer(int32)    | integer(int32)   |
| data                       | 对象                                   | array             | SubscribeRuleDTO |
| &emsp;&emsp;createTime     | 创建时间                               | string(date-time) |                  |
| &emsp;&emsp;projectId      | 项目ID                                 | integer(int64)    |                  |
| &emsp;&emsp;projectName    | 项目名称                               | string            |                  |
| &emsp;&emsp;queueId        | 队列ID                                 | string            |                  |
| &emsp;&emsp;queueName      | 队列名称                               | string            |                  |
| &emsp;&emsp;status         | 订阅状态                               | integer(int32)    |                  |
| &emsp;&emsp;subscribeId    | 订阅ID                                 | integer(int64)    |                  |
| &emsp;&emsp;subscribeLevel | 消息订阅级别 1产品级  3设备级  6SaaS级 | integer(int32)    |                  |
| &emsp;&emsp;subscribeName  | 订阅名称                               | string            |                  |
| msg                        | 提示信息                               | string            |                  |
| pageNum                    | 当前页数                               | integer(int32)    | integer(int32)   |
| pageSize                   | 每页数量                               | integer(int32)    | integer(int32)   |
| pages                      | 总页数                                 | integer(int32)    | integer(int32)   |
| total                      | 总数                                   | integer(int32)    | integer(int32)   |


**响应示例**:
```javascript
{
	"code": 200,
	"data": [
        {
            "subscribeId":6169,
            "subscribeName":"subscribeName01",
            "queueId":"6611",
            "queueName":"a.1358403955870720.testQueue",
            "createTime":1730871813000,
            "status":0,
            "projectId":222,
            "projectName":"1360096218198650"
        },
	],
	"msg": "",
	"pageNum": 1,
	"pageSize": 10,
	"pages": 1,
	"total": 1
}
```
