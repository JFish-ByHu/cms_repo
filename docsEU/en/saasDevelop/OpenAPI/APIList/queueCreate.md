# Create Queue


**API Address**:`/v2/quecrule/{version}/openapi/queue/create`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Create queue`



**Request Example**:


```javascript
{
  "queueDesc": "desc",
  "queueName": "testQueue"
}
```


**Request Parameters**:


| Parameter Name        | Parameter Description                                         | Request Type | Required | Data Type        | Schema          |
| --------------------- | ------------------------------------------------------------- | ------------ | -------- | --------------- | --------------- |
| openApiQueueDto       | Queue information                                             | body         | true     | OpenApiQueueDto | OpenApiQueueDto |
| &emsp;&emsp;queueDesc | Queue description, maximum length 200                         |              | false    | string          |                 |
| &emsp;&emsp;queueName | Queue name, must be unique within the account, maximum length 64 characters, supports uppercase and lowercase English characters (case-sensitive), numbers, underscores (_), hyphens (-), does not support slashes (/), spaces, or other characters |          | true     | string          |                 |
| version               | Current version, valid value:r1                               | path         | true     | string          |                 |


**Response Status**:


| Status Code | Description                                                  | Schema                            |
| ----------- | ------------------------------------------------------------ | --------------------------------- |
| 200         | OK                                                           | ActionResultOfCreateQueueResponse |
| 201         | Created                                                      |                                   |
| 401         | Unauthorized                                                 |                                   |
| 403         | Forbidden                                                    |                                   |
| 404         | Not Found                                                    |                                   |
| 16001       | The queue name already exists                                |                                   |
| 16004       | Failed to create queue                                       |                                   |
| 16007       | The number of queues is out of limit                         |                                   |
| 16024       | The message subscription is not enabled, please go to the SaaS development Guide to apply for enabling |                                   |
| 50000       | Service exception                                            |                                   |
| 50005       | Parameter check error                                        |                                   |
| 91004       | Token incorrect                                              |                                   |
| 91005       | Doesn't have permission                                      |                                   |


**Response Parameters**:


| Parameter Name         | Parameter Description              | Type                | Schema              |
| ---------------------- | ---------------------------------- | ------------------- | ------------------- |
| code                   | Return code                        | integer(int32)      | integer(int32)      |
| data                   | Object                             | CreateQueueResponse | CreateQueueResponse |
| &emsp;&emsp;createTime | Creation time                      | string(date-time)   |                     |
| &emsp;&emsp;entUserId  | Enterprise user ID                 | integer(int64)      |                     |
| &emsp;&emsp;id         | ID                                 | integer(int64)      |                     |
| &emsp;&emsp;isFree     | Is free queue: 0:No, 1:Yes         | integer(int32)      |                     |
| &emsp;&emsp;queueDesc  | Queue description                  | string              |                     |
| &emsp;&emsp;queueName  | Queue name                         | string              |                     |
| &emsp;&emsp;status     | Queue status                       | integer(int32)      |                     |
| &emsp;&emsp;updateTime | Update time                        | string(date-time)   |                     |
| &emsp;&emsp;userId     | User ID                            | integer(int64)      |                     |
| msg                    | Prompt message                     | string              |                     |
| pageNum                | Current page number                | integer(int32)      | integer(int32)      |
| pageSize               | Items per page                     | integer(int32)      | integer(int32)      |
| pages                  | Total pages                        | integer(int32)      | integer(int32)      |
| total                  | Total count                        | integer(int32)      | integer(int32)      |


**Response Example**:
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
