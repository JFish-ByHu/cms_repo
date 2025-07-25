# Query Subscription Details


**API Address**:`/v2/quecrule/{version}/openapi/subscribe/detail`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`

**API Description**:`View subscription details`


**Request Parameters**:


| Parameter Name | Parameter Description         | Request Type | Required | Data Type       | Schema |
| -------------- | ----------------------------- | ------------ | -------- | -------------- | ------ |
| subscribeId    | Subscription ID               | query        | true     | integer(int64) |        |
| version        | Current version, valid value:r1 | path       | true     | string         |        |


**Response Status**:


| Status Code | Description                         | Schema                                  |
| ----------- | ----------------------------------- | --------------------------------------- |
| 200         | OK                                  | ActionResultOfOpenApiSubscribeDetailDTO |
| 401         | Unauthorized                        |                                         |
| 403         | Forbidden                           |                                         |
| 404         | Not Found                           |                                         |
| 16011       | The subscription rule does not exist |                                        |
| 50000       | Service exception                   |                                         |
| 50005       | Parameter check error               |                                         |
| 70060       | Permission Denied                   |                                         |
| 91004       | Token incorrect                     |                                         |
| 91005       | Doesn't have permission             |                                         |


**Response Parameters**:


| Parameter Name           | Parameter Description                                      | Type                      | Schema                    |
| ------------------------ | ---------------------------------------------------------- | ------------------------- | ------------------------- |
| code                     | Return code                                                | integer(int32)            | integer(int32)            |
| data                     | Object                                                     | OpenApiSubscribeDetailDTO | OpenApiSubscribeDetailDTO |
| &emsp;&emsp;createTime   | Creation time                                              | string(date-time)         |                           |
| &emsp;&emsp;dataLevel    | Data level, 1-Product 2-Device 4-Enterprise user 5-End user domain | integer(int32)            |                           |
| &emsp;&emsp;deviceKey    | Device DK                                                  | string                    |                           |
| &emsp;&emsp;deviceName   | Device name                                                | string                    |                           |
| &emsp;&emsp;endUserDomain | End user domain                                           | string                    |                           |
| &emsp;&emsp;msgType      | Message type                                               | string                    |                           |
| &emsp;&emsp;productKey   | Product PK                                                 | string                    |                           |
| &emsp;&emsp;productName  | Product name                                               | string                    |                           |
| &emsp;&emsp;queueId      | Queue ID                                                   | integer(int64)            |                           |
| &emsp;&emsp;queueName    | Queue name                                                 | string                    |                           |
| &emsp;&emsp;status       | Subscription status                                        | integer(int32)            |                           |
| &emsp;&emsp;subscribeId  | Subscription ID                                            | integer(int64)            |                           |
| &emsp;&emsp;subscribeName | Subscription name                                         | string                    |                           |
| &emsp;&emsp;updateTime   | Update time                                                | string(date-time)         |                           |
| &emsp;&emsp;userId       | User ID                                                    | integer(int64)            |                           |
| msg                      | Prompt message                                             | string                    |                           |
| pageNum                  | Current page number                                        | integer(int32)            | integer(int32)            |
| pageSize                 | Items per page                                             | integer(int32)            | integer(int32)            |
| pages                    | Total pages                                                | integer(int32)            | integer(int32)            |
| total                    | Total count                                                | integer(int32)            | integer(int32)            |


**Response Example**:
```javascript
{
        "code":200,
        "msg":"",
        "data":{
        "subscribeId":6169,
            "subscribeName":"subscribeName01",
            "dataLevel":1,
            "msgType":"1,2,12,13,14,15",
            "queueId":6611,
            "queueName":"a.1358403955870720.testQueue",
            "userId":1358403955870720,
            "productName":"ProductName01",
            "productKey":"PK0001",
            "status":1,
            "createTime":1730871813000,
            "updateTime":1730871813000
    }
}
```
