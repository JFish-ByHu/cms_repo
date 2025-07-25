# Create Product/Device Subscription


**API Address**:`/v2/quecrule/{version}/openapi/subscribe/create`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Create subscription`



**Request Example**:


```javascript
{
  "dataLevel": 1,
  "deviceKey": "DK00001",
  "msgTypes": [
    1
  ],
  "productKey": "PK0001",
  "queueName": "queueName",
  "subscribeName": "test"
}
```


**Request Parameters**:


| Parameter Name           | Parameter Description                                         | Request Type | Required | Data Type            | Schema              |
| ------------------------ | ------------------------------------------------------------- | ------------ | -------- | ------------------- | ------------------- |
| subscribeDTO             | Subscription information                                      | body         | true     | OpenApiSubscribeDTO | OpenApiSubscribeDTO |
| &emsp;&emsp;dataLevel    | Data level, 1-Product 2-Device                                |              | true     | integer(int32)      |                     |
| &emsp;&emsp;deviceKey    | Device DK                                                     |              | false    | string              |                     |
| &emsp;&emsp;msgTypes     | Message types:\nTransparent transmission products support the following types:\n1-Device online/offline events\n2-Device and module status\n3-Device uplink data\n4-Device downlink data\n5-Device command response\n12-Device location original information\n13-Device location information\n14-Device binding change information\n15-Device information change\nThing model products support the following types:\n1-Device online/offline events\n2-Device and module status\n3-Device uplink transparent transmission data\n4-Device downlink transparent transmission data\n5-Device command response\n6-Thing model property information\n7-Thing model event report-information\n8-Thing model event report-alert\n9-Thing model event report-fault\n10-Thing model service call log\n12-Device location original information\n13-Device location information\n14-Device binding change information\n15-Device information change |              | true     | array               | integer             |
| &emsp;&emsp;productKey   | Product PK                                                    |              | true     | string              |                     |
| &emsp;&emsp;queueName    | Queue name                                                    |              | true     | string              |                     |
| &emsp;&emsp;subscribeName | Subscription name, maximum length 128 characters, supports Chinese, uppercase and lowercase English characters (case-sensitive), numbers, underscores (_), hyphens (-), does not support slashes (/), spaces, or other characters |              | true     | string              |                     |
| version                  | Current version, valid value:r1                               | path         | true     | string              |                     |


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
