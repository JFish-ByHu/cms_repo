# Update Subscription


**API Address**:`/v2/quecrule/{version}/openapi/subscribe/update`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Update subscription`



**Request Example**:


```javascript
{
    "msgTypes": [
        1
    ],
        "queueName": "testQueue",
        "subscribeId": 6169,
        "subscribeName": "subscribeName01"
}
```


**Request Parameters**:


| Parameter Name           | Parameter Description                                         | Request Type | Required | Data Type                  | Schema                    |
| ------------------------ | ------------------------------------------------------------- | ------------ | -------- | ------------------------- | ------------------------- |
| subscribeDTO             | Subscription information                                      | body         | true     | OpenApiSubscribeUpdateDTO | OpenApiSubscribeUpdateDTO |
| &emsp;&emsp;msgTypes     | Message types\nProduct/Device level subscription:\nTransparent transmission products support the following types:\n1-Device online/offline events\n2-Device and module status\n3-Device uplink data\n4-Device downlink data\n5-Device command response\n12-Device location original information\n13-Device location information\n14-Device binding change information\n15-Device information change\nThing model products support the following types:\n1-Device online/offline events\n2-Device and module status\n5-Device command response\n6-Thing model property information\n7-Thing model event report-information\n8-Thing model event report-alert\n9-Thing model event report-fault\n10-Thing model service call log\n12-Device location original information\n13-Device location information\n14-Device binding change information\n15-Device information change\nUser level subscription:\n101-Product information change\n102-Device information change\n103-Thing model publication information change\nSaaS user level subscription:\n101-Product information change\n102-Device information change\n103-Thing model publication information change\n104-Product authorization information\nEnd user domain level subscription:\n201-End user add/delete/modify |              | false    | array                     | integer                   |
| &emsp;&emsp;queueName    | Queue name                                                    |              | false    | string                    |                           |
| &emsp;&emsp;subscribeId  | Subscription ID                                               |              | true     | integer(int64)            |                           |
| &emsp;&emsp;subscribeName | Subscription name, maximum length 128 characters, supports Chinese, uppercase and lowercase English characters (case-sensitive), numbers, underscores (_), hyphens (-), does not support slashes (/), spaces, or other characters |              | false    | string                    |                           |
| version                  | Current version, valid value:r1                               | path         | true     | string                    |                           |


**Response Status**:


| Status Code | Description                                              | Schema               |
| ----------- | -------------------------------------------------------- | -------------------- |
| 200         | OK                                                       | ActionResultOfobject |
| 201         | Created                                                  |                      |
| 401         | Unauthorized                                             |                      |
| 403         | Forbidden                                                |                      |
| 404         | Not Found                                                |                      |
| 16002       | The queue name does not exist                            |                      |
| 16022       | The running subscription rule does not allow modification |                     |
| 50000       | Service exception                                        |                      |
| 50004       | Parameter null or empty                                  |                      |
| 50005       | Parameter check error                                    |                      |
| 70060       | Permission Denied                                        |                      |
| 91004       | Token incorrect                                          |                      |
| 91005       | Doesn't have permission                                  |                      |


**Response Parameters**:


| Parameter Name | Parameter Description | Type           | Schema         |
| -------------- | --------------------- | -------------- | -------------- |
| code           | Return code           | integer(int32) | integer(int32) |
| data           | Object                | object         |                |
| msg            | Prompt message        | string         |                |
| pageNum        | Current page number   | integer(int32) | integer(int32) |
| pageSize       | Items per page        | integer(int32) | integer(int32) |
| pages          | Total pages           | integer(int32) | integer(int32) |
| total          | Total count           | integer(int32) | integer(int32) |


**Response Example**:
```javascript
{
	"code": 200,
	"msg": ""
}
```
