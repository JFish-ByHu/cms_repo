# 查询队列详情


**接口地址**:`/v2/quecrule/{version}/openapi/queue/detail`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`

**接口描述**:<p>队列详情</p>

**请求参数**:


| 参数名称 | 参数说明           | 请求类型 | 是否必须 | 数据类型       | schema |
| -------- | ------------------ | -------- | -------- | -------------- | ------ |
| queueId  | 队列ID             | query    | true     | integer(int64) |        |
| version  | 当前版本,可用值:r1 | path     | true     | string         |        |


**响应状态**:


| 状态码 | 说明                          | schema                       |
| ------ | ----------------------------- | ---------------------------- |
| 200    | OK                            | ActionResultOfQueueDetailDTO |
| 401    | Unauthorized                  |                              |
| 403    | Forbidden                     |                              |
| 404    | Not Found                     |                              |
| 16002  | The queue name does not exist |                              |
| 50000  | service exception             |                              |
| 50005  | param check error             |                              |
| 91004  | token incorrect               |                              |
| 91005  | doesn't have permission       |                              |


**响应参数**:


| 参数名称                | 参数说明     | 类型              | schema         |
| ----------------------- | ------------ | ----------------- | -------------- |
| code                    | 返回码       | integer(int32)    | integer(int32) |
| data                    | 对象         | QueueDetailDTO    | QueueDetailDTO |
| &emsp;&emsp;connectUrl  | 连接地址     | string            |                |
| &emsp;&emsp;consumeRate | 消费速率     | string            |                |
| &emsp;&emsp;createTime  | 创建时间     | string(date-time) |                |
| &emsp;&emsp;msgNum      | 消息数量     | integer(int64)    |                |
| &emsp;&emsp;msgSize     | 消息堆积大小 | string            |                |
| &emsp;&emsp;queueDesc   | 队列描述     | string            |                |
| &emsp;&emsp;queueId     | 队列ID       | integer(int64)    |                |
| &emsp;&emsp;queueName   | 队列名       | string            |                |
| &emsp;&emsp;status      | 队列状态     | integer(int32)    |                |
| &emsp;&emsp;updateTime  | 更新时间     | string(date-time) |                |
| msg                     | 提示信息     | string            |                |
| pageNum                 | 当前页数     | integer(int32)    | integer(int32) |
| pageSize                | 每页数量     | integer(int32)    | integer(int32) |
| pages                   | 总页数       | integer(int32)    | integer(int32) |
| total                   | 总数         | integer(int32)    | integer(int32) |


**响应示例**:
```javascript
{
    "code":200,
        "msg":"",
        "data":{
            "consumeRate":"0",
            "msgNum":0,
            "queueId":6611,
            "queueName":"a.1358403955870720.testQueue",
            "queueDesc":"desc",
            "createTime":1730871805000,
            "updateTime":null,
            "status":0,
            "connectUrl":"amqp://127.0.0.1:5672/quec-open"
        }
}
```
