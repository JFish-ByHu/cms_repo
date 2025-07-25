# 创建产品/设备订阅


**接口地址**:`/v2/quecrule/{version}/openapi/subscribe/create`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>创建订阅</p>



**请求示例**:


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


**请求参数**:


| 参数名称                  | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型            | schema              |
| ------------------------- | ------------------------------------------------------------ | -------- | -------- | ------------------- | ------------------- |
| subscribeDTO              | 订阅信息                                                     | body     | true     | OpenApiSubscribeDTO | OpenApiSubscribeDTO |
| &emsp;&emsp;dataLevel     | 数据等级, 1产品2设备                                         |          | true     | integer(int32)      |                     |
| &emsp;&emsp;deviceKey     | 设备DK                                                       |          | false    | string              |                     |
| &emsp;&emsp;msgTypes      | 消息类型：\n透传产品支持以下类型：\n1-设备上下线事件\n2-设备和模组状态\n3-设备上行数据\n4-设备下行数据\n5-设备命令响应\n12-设备定位原始信息\n13-设备定位信息\n14-设备绑定变更信息\n15-设备信息变更\n物模型产品支持以下类型：\n1-设备上下线事件\n2-设备和模组状态\n3-设备上行透传数据\n4-设备下行透传数据\n5-设备命令响应\n6-物模型属性信息\n7-物模型事件上报-信息\n8-物模型事件上报-告警\n9-物模型事件上报-故障\n10-物模型服务调用日志\n12-设备定位原始信息\n13-设备定位信息\n14-设备绑定变更信息\n15-设备信息变更 |          | true     | array               | integer             |
| &emsp;&emsp;productKey    | 产品PK                                                       |          | true     | string              |                     |
| &emsp;&emsp;queueName     | 队列名称                                                     |          | true     | string              |                     |
| &emsp;&emsp;subscribeName | 订阅名，最大长度128字符, 支持中文、大小写英文字符串(区分大小写)、数字、下划线(_)、中划线(-)、不支持斜杠(/)、空格等其他字符 |          | true     | string              |                     |
| version                   | 当前版本,可用值:r1                                           | path     | true     | string              |                     |


**响应状态**:


| 状态码 | 说明                                                         | schema                              |
| ------ | ------------------------------------------------------------ | ----------------------------------- |
| 200    | OK                                                           | ActionResultOfOpenApiSubscribeIdDTO |
| 201    | Created                                                      |                                     |
| 401    | Unauthorized                                                 |                                     |
| 403    | Forbidden                                                    |                                     |
| 404    | Not Found                                                    |                                     |
| 16002  | The queue name does not exist                                |                                     |
| 16018  | The number of subscription rules is out of limit             |                                     |
| 16024  | The message subscription is not enabled, please go to the SaaS development Guide to apply for enabling |                                     |
| 50000  | service exception                                            |                                     |
| 50004  | param null or empty                                          |                                     |
| 50005  | param check error                                            |                                     |
| 70017  | The product does not exist                                   |                                     |
| 70060  | Permission Denied                                            |                                     |
| 70130  | The device does not exist                                    |                                     |
| 91004  | token incorrect                                              |                                     |
| 91005  | doesn't have permission                                      |                                     |


**响应参数**:


| 参数名称                | 参数说明 | 类型                  | schema                |
| ----------------------- | -------- | --------------------- | --------------------- |
| code                    | 返回码   | integer(int32)        | integer(int32)        |
| data                    | 对象     | OpenApiSubscribeIdDTO | OpenApiSubscribeIdDTO |
| &emsp;&emsp;subscribeId | 订阅ID   | integer(int64)        |                       |
| msg                     | 提示信息 | string                |                       |
| pageNum                 | 当前页数 | integer(int32)        | integer(int32)        |
| pageSize                | 每页数量 | integer(int32)        | integer(int32)        |
| pages                   | 总页数   | integer(int32)        | integer(int32)        |
| total                   | 总数     | integer(int32)        | integer(int32)        |


**响应示例**:
```javascript
{
	"code": 200,
	"data": {
		"subscribeId": 1
	},
	"msg": ""
}
```
