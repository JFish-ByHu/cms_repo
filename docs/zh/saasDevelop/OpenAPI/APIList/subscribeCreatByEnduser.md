# 创建终端用户订阅


**接口地址**:`/v2/quecrule/{version}/openapi/subscribe/enduser`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>创建终端用户订阅</p>



**请求示例**:


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


**请求参数**:


| 参数名称                  | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型                   | schema                     |
| ------------------------- | ------------------------------------------------------------ | -------- | -------- | -------------------------- | -------------------------- |
| subscribeDTO              | 订阅信息                                                     | body     | true     | OpenApiSubscribeEndUserDTO | OpenApiSubscribeEndUserDTO |
| &emsp;&emsp;endUserDomain | 用户域                                                       |          | true     | string                     |                            |
| &emsp;&emsp;msgTypes      | 消息类型, 201-终端用户新增/删除/修改                         |          | true     | array                      | integer                    |
| &emsp;&emsp;queueName     | 队列名称                                                     |          | true     | string                     |                            |
| &emsp;&emsp;subscribeName | 订阅名，最大长度128字符, 支持中文、大小写英文字符串(区分大小写)、数字、下划线(_)、中划线(-)、不支持斜杠(/)、空格等其他字符 |          | true     | string                     |                            |
| version                   | 当前版本,可用值:r1                                           | path     | true     | string                     |                            |


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
