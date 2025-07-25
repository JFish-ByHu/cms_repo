# Query Queue List


**API Address**:`/v2/quecrule/{version}/openapi/queue/list`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Queue list`



**Request Example**:


```javascript
{
  "pageNum": 1,
  "pageSize": 10,
  "queueName": "testQueue",
  "status": 1
}
```


**Request Parameters**:


| Parameter Name        | Parameter Description                                      | Request Type | Required | Data Type             | Schema               |
| --------------------- | ---------------------------------------------------------- | ------------ | -------- | -------------------- | -------------------- |
| queueQueryDTO         | Query parameters                                           | body         | true     | OpenApiQueryQueueDTO | OpenApiQueryQueueDTO |
| &emsp;&emsp;pageNum   | Page number, starting from 1                               |              | false    | integer(int32)       |                      |
| &emsp;&emsp;pageSize  | Number of items per page, range 1~100                      |              | false    | integer(int32)       |                      |
| &emsp;&emsp;queueName | Queue name                                                 |              | false    | string               |                      |
| &emsp;&emsp;status    | Queue status, 0-Not enabled 1-Enabled 2-Disabled, blank for all |          | false    | integer(int32)       |                      |
| version               | Current version, valid value:r1                            | path         | true     | string               |                      |


**Response Status**:


| Status Code | Description            | Schema                      |
| ----------- | ---------------------- | --------------------------- |
| 200         | OK                     | ActionResultOfListOfQbQueue |
| 201         | Created                |                             |
| 401         | Unauthorized           |                             |
| 403         | Forbidden              |                             |
| 404         | Not Found              |                             |
| 50000       | Service exception      |                             |
| 50005       | Parameter check error  |                             |
| 91004       | Token incorrect        |                             |
| 91005       | Doesn't have permission |                            |


**Response Parameters**:


| Parameter Name         | Parameter Description              | Type              | Schema         |
| ---------------------- | ---------------------------------- | ----------------- | -------------- |
| code                   | Return code                        | integer(int32)    | integer(int32) |
| data                   | Object                             | array             | QbQueue        |
| &emsp;&emsp;createTime | Creation time                      | string(date-time) |                |
| &emsp;&emsp;entUserId  | Enterprise user ID                 | integer(int64)    |                |
| &emsp;&emsp;id         | ID                                 | integer(int64)    |                |
| &emsp;&emsp;isFree     | Is free queue: 0:No, 1:Yes         | integer(int32)    |                |
| &emsp;&emsp;metadata   | Queue metadata                     | string            |                |
| &emsp;&emsp;queueDesc  | Queue description                  | string            |                |
| &emsp;&emsp;queueName  | Queue name                         | string            |                |
| &emsp;&emsp;status     | Queue status                       | integer(int32)    |                |
| &emsp;&emsp;updateTime | Update time                        | string(date-time) |                |
| &emsp;&emsp;userId     | User ID                            | integer(int64)    |                |
| msg                    | Prompt message                     | string            |                |
| pageNum                | Current page number                | integer(int32)    | integer(int32) |
| pageSize               | Items per page                     | integer(int32)    | integer(int32) |
| pages                  | Total pages                        | integer(int32)    | integer(int32) |
| total                  | Total count                        | integer(int32)    | integer(int32) |


**Response Example**:
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
