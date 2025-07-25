# Create End User Subscription


**API Address**:`/v2/quecrule/{version}/openapi/subscribe/enduser`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Create end user subscription`



**Request Example**:


```javascript
{
  "endUserDomain": "C.DM.26106.1",
  "msgTypes": [
    201
  ],
  "queueName": "a.000000026106.testAbc",
  "subscribeName": "test"
}
```


**Request Parameters**:


| Parameter Name           | Parameter Description                                         | Request Type | Required | Data Type                   | Schema                     |
| ------------------------ | ------------------------------------------------------------- | ------------ | -------- | -------------------------- | -------------------------- |
| subscribeDTO             | Subscription information                                      | body         | true     | OpenApiSubscribeEndUserDTO | OpenApiSubscribeEndUserDTO |
| &emsp;&emsp;endUserDomain | User domain                                                  |              | true     | string                     |                            |
| &emsp;&emsp;msgTypes     | Message types, 201-End user add/delete/modify                 |              | true     | array                      | integer                    |
| &emsp;&emsp;queueName    | Queue name                                                    |              | true     | string                     |                            |
| &emsp;&emsp;subscribeName | Subscription name, maximum length 128 characters, supports Chinese, uppercase and lowercase English characters (case-sensitive), numbers, underscores (_), hyphens (-), does not support slashes (/), spaces, or other characters |              | true     | string                     |                            |
| version                  | Current version, valid value:r1                               | path         | true     | string                     |                            |


**Response Status**:


| Status Code | Description                                                  | Schema                              |
| ----------- | ------------------------------------------------------------ | ----------------------------------- |
| 200         | OK                                                           | ActionResultOfOpenApiSubscribeIdDTO |
| 201         | Created                                                      |                                     |
| 401         | Unauthorized                                                 |                                     |
| 403         | Forbidden                                                    |                                     |
| 404         | Not Found                                                    |                                     |
| 16002       | The queue name does not exist                                |                                     |
| 16018       | The number of subscription rules is out of limit             |                                     |
| 16024       | The message subscription is not enabled, please go to the SaaS development Guide to apply for enabling |                                     |
| 50000       | Service exception                                            |                                     |
| 50004       | Parameter null or empty                                      |                                     |
| 50005       | Parameter check error                                        |                                     |
| 70017       | The product does not exist                                   |                                     |
| 70060       | Permission Denied                                            |                                     |
| 70130       | The device does not exist                                    |                                     |
| 91004       | Token incorrect                                              |                                     |
| 91005       | Doesn't have permission                                      |                                     |


**Response Parameters**:


| Parameter Name          | Parameter Description | Type                  | Schema                |
| ----------------------- | --------------------- | --------------------- | --------------------- |
| code                    | Return code           | integer(int32)        | integer(int32)        |
| data                    | Object                | OpenApiSubscribeIdDTO | OpenApiSubscribeIdDTO |
| &emsp;&emsp;subscribeId | Subscription ID       | integer(int64)        |                       |
| msg                     | Prompt message        | string                |                       |
| pageNum                 | Current page number   | integer(int32)        | integer(int32)        |
| pageSize                | Items per page        | integer(int32)        | integer(int32)        |
| pages                   | Total pages           | integer(int32)        | integer(int32)        |
| total                   | Total count           | integer(int32)        | integer(int32)        |


**Response Example**:
```javascript
{
    "code": 200,
        "data": {
        "subscribeId": 1
    },
    "msg": ""
}
```
