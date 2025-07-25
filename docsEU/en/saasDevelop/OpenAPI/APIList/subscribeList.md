# Query Subscription List


**API Address**:`/v2/quecrule/{version}/openapi/subscribe/list`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Subscription list`



**Request Example**:


```javascript
{
  "pageNum": 1,
  "pageSize": 10,
  "queueName": "testQueue",
  "status": 1,
  "subscribeName": "test"
}
```


**Request Parameters**:


| Parameter Name           | Parameter Description                  | Request Type | Required | Data Type                 | Schema                   |
| ------------------------ | -------------------------------------- | ------------ | -------- | ------------------------ | ------------------------ |
| subscribeDTO             | Query parameters                       | body         | true     | OpenApiQuerySubscribeDTO | OpenApiQuerySubscribeDTO |
| &emsp;&emsp;pageNum      | Page number, starting from 1           |              | false    | integer(int32)           |                          |
| &emsp;&emsp;pageSize     | Number of items per page, range 1~100  |              | false    | integer(int32)           |                          |
| &emsp;&emsp;queueName    | Queue name                             |              | false    | string                   |                          |
| &emsp;&emsp;status       | Status, 0-Not started 1-Running        |              | false    | integer(int32)           |                          |
| &emsp;&emsp;subscribeName | Subscription name                      |              | false    | string                   |                          |
| version                  | Current version, valid value:r1        | path         | true     | string                   |                          |


**Response Status**:


| Status Code | Description            | Schema                               |
| ----------- | ---------------------- | ------------------------------------ |
| 200         | OK                     | ActionResultOfListOfSubscribeRuleDTO |
| 201         | Created                |                                      |
| 401         | Unauthorized           |                                      |
| 403         | Forbidden              |                                      |
| 404         | Not Found              |                                      |
| 50000       | Service exception      |                                      |
| 50005       | Parameter check error  |                                      |
| 70060       | Permission Denied      |                                      |
| 91004       | Token incorrect        |                                      |
| 91005       | Doesn't have permission |                                     |


**Response Parameters**:


| Parameter Name            | Parameter Description                             | Type              | Schema           |
| ------------------------- | ------------------------------------------------- | ----------------- | ---------------- |
| code                      | Return code                                       | integer(int32)    | integer(int32)   |
| data                      | Object                                            | array             | SubscribeRuleDTO |
| &emsp;&emsp;createTime    | Creation time                                     | string(date-time) |                  |
| &emsp;&emsp;projectId     | Project ID                                        | integer(int64)    |                  |
| &emsp;&emsp;projectName   | Project name                                      | string            |                  |
| &emsp;&emsp;queueId       | Queue ID                                          | string            |                  |
| &emsp;&emsp;queueName     | Queue name                                        | string            |                  |
| &emsp;&emsp;status        | Subscription status                               | integer(int32)    |                  |
| &emsp;&emsp;subscribeId   | Subscription ID                                   | integer(int64)    |                  |
| &emsp;&emsp;subscribeLevel | Message subscription level: 1-Product level 3-Device level 6-SaaS level | integer(int32)    |                  |
| &emsp;&emsp;subscribeName | Subscription name                                 | string            |                  |
| msg                       | Prompt message                                    | string            |                  |
| pageNum                   | Current page number                               | integer(int32)    | integer(int32)   |
| pageSize                  | Items per page                                    | integer(int32)    | integer(int32)   |
| pages                     | Total pages                                       | integer(int32)    | integer(int32)   |
| total                     | Total count                                       | integer(int32)    | integer(int32)   |


**Response Example**:
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
