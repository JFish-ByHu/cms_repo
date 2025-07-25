# 查询订阅详情


**接口地址**:`/v2/quecrule/{version}/openapi/subscribe/detail`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`

**接口描述**:<p>查看订阅详情</p>


**请求参数**:


| 参数名称    | 参数说明           | 请求类型 | 是否必须 | 数据类型       | schema |
| ----------- | ------------------ | -------- | -------- | -------------- | ------ |
| subscribeId | 订阅ID             | query    | true     | integer(int64) |        |
| version     | 当前版本,可用值:r1 | path     | true     | string         |        |


**响应状态**:


| 状态码 | 说明                                 | schema                                  |
| ------ | ------------------------------------ | --------------------------------------- |
| 200    | OK                                   | ActionResultOfOpenApiSubscribeDetailDTO |
| 401    | Unauthorized                         |                                         |
| 403    | Forbidden                            |                                         |
| 404    | Not Found                            |                                         |
| 16011  | The subscription rule does not exist |                                         |
| 50000  | service exception                    |                                         |
| 50005  | param check error                    |                                         |
| 70060  | Permission Denied                    |                                         |
| 91004  | token incorrect                      |                                         |
| 91005  | doesn't have permission              |                                         |


**响应参数**:


| 参数名称                  | 参数说明                                        | 类型                      | schema                    |
| ------------------------- | ----------------------------------------------- | ------------------------- | ------------------------- |
| code                      | 返回码                                          | integer(int32)            | integer(int32)            |
| data                      | 对象                                            | OpenApiSubscribeDetailDTO | OpenApiSubscribeDetailDTO |
| &emsp;&emsp;createTime    | 创建时间                                        | string(date-time)         |                           |
| &emsp;&emsp;dataLevel     | 数据级别, 1-产品 2-设备 4-企业用户 5-终端用户域 | integer(int32)            |                           |
| &emsp;&emsp;deviceKey     | 设备DK                                          | string                    |                           |
| &emsp;&emsp;deviceName    | 设备名                                          | string                    |                           |
| &emsp;&emsp;endUserDomain | 终端用户域                                      | string                    |                           |
| &emsp;&emsp;msgType       | 消息类型                                        | string                    |                           |
| &emsp;&emsp;productKey    | 产品PK                                          | string                    |                           |
| &emsp;&emsp;productName   | 产品名                                          | string                    |                           |
| &emsp;&emsp;queueId       | 队列ID                                          | integer(int64)            |                           |
| &emsp;&emsp;queueName     | 队列名称                                        | string                    |                           |
| &emsp;&emsp;status        | 订阅状态                                        | integer(int32)            |                           |
| &emsp;&emsp;subscribeId   | 订阅ID                                          | integer(int64)            |                           |
| &emsp;&emsp;subscribeName | 订阅名称                                        | string                    |                           |
| &emsp;&emsp;updateTime    | 修改时间                                        | string(date-time)         |                           |
| &emsp;&emsp;userId        | 用户ID                                          | integer(int64)            |                           |
| msg                       | 提示信息                                        | string                    |                           |
| pageNum                   | 当前页数                                        | integer(int32)            | integer(int32)            |
| pageSize                  | 每页数量                                        | integer(int32)            | integer(int32)            |
| pages                     | 总页数                                          | integer(int32)            | integer(int32)            |
| total                     | 总数                                            | integer(int32)            | integer(int32)            |


**响应示例**:
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
