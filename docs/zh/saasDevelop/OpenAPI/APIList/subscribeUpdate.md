# 修改订阅


**接口地址**:`/v2/quecrule/{version}/openapi/subscribe/update`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>修改订阅</p>



**请求示例**:


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


**请求参数**:


| 参数名称                  | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型                  | schema                    |
| ------------------------- | ------------------------------------------------------------ | -------- | -------- | ------------------------- | ------------------------- |
| subscribeDTO              | 订阅信息                                                     | body     | true     | OpenApiSubscribeUpdateDTO | OpenApiSubscribeUpdateDTO |
| &emsp;&emsp;msgTypes      | 消息类型\n产品/设备级别订阅：\n透传产品支持以下类型：\n1-设备上下线事件\n2-设备和模组状态\n3-设备上行数据\n4-设备下行数据\n5-设备命令响应\n12-设备定位原始信息\n13-设备定位信息\n14-设备绑定变更信息\n15-设备信息变更\n物模型产品支持以下类型：\n1-设备上下线事件\n2-设备和模组状态\n5-设备命令响应\n6-物模型属性信息\n7-物模型事件上报-信息\n8-物模型事件上报-告警\n9-物模型事件上报-故障\n10-物模型服务调用日志\n12-设备定位原始信息\n13-设备定位信息\n14-设备绑定变更信息\n15-设备信息变更\n用户级别订阅：\n101-产品信息变更\n102-设备信息变更\n103-物模型发布信息变更\nSaaS用户级别订阅：\n101-产品信息变更\n102-设备信息变更\n103-物模型发布信息变更\n104-产品授权信息\n终端用户域级别订阅：\n201-终端用户新增/删除/修改 |          | false    | array                     | integer                   |
| &emsp;&emsp;queueName     | 队列名称                                                     |          | false    | string                    |                           |
| &emsp;&emsp;subscribeId   | 订阅ID                                                       |          | true     | integer(int64)            |                           |
| &emsp;&emsp;subscribeName | 订阅名，最大长度128字符, 支持中文、大小写英文字符串(区分大小写)、数字、下划线(_)、中划线(-)、不支持斜杠(/)、空格等其他字符 |          | false    | string                    |                           |
| version                   | 当前版本,可用值:r1                                           | path     | true     | string                    |                           |


**响应状态**:


| 状态码 | 说明                                                      | schema               |
| ------ | --------------------------------------------------------- | -------------------- |
| 200    | OK                                                        | ActionResultOfobject |
| 201    | Created                                                   |                      |
| 401    | Unauthorized                                              |                      |
| 403    | Forbidden                                                 |                      |
| 404    | Not Found                                                 |                      |
| 16002  | The queue name does not exist                             |                      |
| 16022  | The running subscription rule does not allow modification |                      |
| 50000  | service exception                                         |                      |
| 50004  | param null or empty                                       |                      |
| 50005  | param check error                                         |                      |
| 70060  | Permission Denied                                         |                      |
| 91004  | token incorrect                                           |                      |
| 91005  | doesn't have permission                                   |                      |


**响应参数**:


| 参数名称 | 参数说明 | 类型           | schema         |
| -------- | -------- | -------------- | -------------- |
| code     | 返回码   | integer(int32) | integer(int32) |
| data     | 对象     | object         |                |
| msg      | 提示信息 | string         |                |
| pageNum  | 当前页数 | integer(int32) | integer(int32) |
| pageSize | 每页数量 | integer(int32) | integer(int32) |
| pages    | 总页数   | integer(int32) | integer(int32) |
| total    | 总数     | integer(int32) | integer(int32) |


**响应示例**:
```javascript
{
	"code": 200,
	"msg": ""
}
```
