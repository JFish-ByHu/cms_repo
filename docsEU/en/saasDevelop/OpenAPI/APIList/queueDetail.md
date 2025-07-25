# Query Queue Details


**API Address**:`/v2/quecrule/{version}/openapi/queue/detail`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`

**API Description**:`Queue details`

**Request Parameters**:


| Parameter Name | Parameter Description         | Request Type | Required | Data Type       | Schema |
| -------------- | ----------------------------- | ------------ | -------- | -------------- | ------ |
| queueId        | Queue ID                      | query        | true     | integer(int64) |        |
| version        | Current version, valid value:r1 | path       | true     | string         |        |


**Response Status**:


| Status Code | Description                  | Schema                       |
| ----------- | ---------------------------- | ---------------------------- |
| 200         | OK                           | ActionResultOfQueueDetailDTO |
| 401         | Unauthorized                 |                              |
| 403         | Forbidden                    |                              |
| 404         | Not Found                    |                              |
| 16002       | The queue name does not exist |                             |
| 50000       | Service exception            |                              |
| 50005       | Parameter check error        |                              |
| 91004       | Token incorrect              |                              |
| 91005       | Doesn't have permission      |                              |


**Response Parameters**:


| Parameter Name          | Parameter Description  | Type              | Schema         |
| ----------------------- | ---------------------- | ----------------- | -------------- |
| code                    | Return code            | integer(int32)    | integer(int32) |
| data                    | Object                 | QueueDetailDTO    | QueueDetailDTO |
| &emsp;&emsp;connectUrl  | Connection URL         | string            |                |
| &emsp;&emsp;consumeRate | Consumption rate       | string            |                |
| &emsp;&emsp;createTime  | Creation time          | string(date-time) |                |
| &emsp;&emsp;msgNum      | Message count          | integer(int64)    |                |
| &emsp;&emsp;msgSize     | Message backlog size   | string            |                |
| &emsp;&emsp;queueDesc   | Queue description      | string            |                |
| &emsp;&emsp;queueId     | Queue ID               | integer(int64)    |                |
| &emsp;&emsp;queueName   | Queue name             | string            |                |
| &emsp;&emsp;status      | Queue status           | integer(int32)    |                |
| &emsp;&emsp;updateTime  | Update time            | string(date-time) |                |
| msg                     | Prompt message         | string            |                |
| pageNum                 | Current page number    | integer(int32)    | integer(int32) |
| pageSize                | Items per page         | integer(int32)    | integer(int32) |
| pages                   | Total pages            | integer(int32)    | integer(int32) |
| total                   | Total count            | integer(int32)    | integer(int32) |


**Response Example**:
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
