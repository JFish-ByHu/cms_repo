# 查询设备历史上下行数据日志


**接口地址**:`/v2/quecdatastorage/r1/openapi/device/data/history`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`

**接口描述**:<p>设备历史上下行信息查询</p>


**请求参数**:


| 参数名称      | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型       | schema |
| ------------- | ------------------------------------------------------------ | -------- | -------- | -------------- | ------ |
| deviceKey     | 设备Key,如果传入deviceKey,则必须传入productKey。productKey与deviceKey组合和deviceId一一对应。如果传入productKey与deviceKey组合,则无需传入deviceId。如果您同时传入deviceId和productKey与deviceKey组合，则以deviceId为准 | query    | true     | string         |        |
| productKey    | 产品productKey,如果传入productKey,则必须传入deviceKey。productKey与deviceKey组合和deviceId一一对应。如果传入productKey与deviceKey组合,则无需传入deviceId。如果您同时传入deviceId和productKey与deviceKey组合，则以deviceId为准 | query    | true     | string         |        |
| beginDateTimp | 开始时间(时间戳,单位毫秒)                                    | query    | false    | integer(int64) |        |
| deviceId      | 设备id,和productKey与deviceKey组合一一对应。如果传入deviceId,则无需传入productKey与deviceKey组合。如果您同时传入deviceId和productKey与deviceKey组合，则与deviceId为准 | query    | false    | integer(int64) |        |
| direction     | 数据类型 1 UP上行 2 DOWN下行                                 | query    | false    | integer(int32) |        |
| endDateTimp   | 结束时间(时间戳,单位毫秒)                                    | query    | false    | integer(int64) |        |
| language      | 语言:CN/EN(默认:CN)                                          | query    | false    | string         |        |
| pageNum       | 分页码(默认:1)                                               | query    | false    | integer(int32) |        |
| pageSize      | 分页，每页大小(默认:10)                                      | query    | false    | integer(int32) |        |
| sendStatus    | 发送状态 0:未发送;1:已发送;-1:发送失败                       | query    | false    | integer(int32) |        |


**响应状态**:


| 状态码 | 说明                                                         | schema                         |
| ------ | ------------------------------------------------------------ | ------------------------------ |
| 200    | OK                                                           | ActionResult«List«DeviceData»» |
| 50000  | service exception                                            |                                |
| 50005  | param check error                                            |                                |
| 50007  | The deviceID, productKey or deviceKey is empty.              |                                |
| 70000  | Hub 服务不可用                                               |                                |
| 70089  | You have limited permission to operate this project or product or device. |                                |
| 70130  | Non existent device.                                         |                                |
| 91001  | token not exists                                             |                                |
| 91004  | token incorrect                                              |                                |
| 91005  | doesn't have permission                                      |                                |
| 91006  | user not exist ip white list reference.                      |                                |
| 91007  | please open API permission.                                  |                                |


**响应参数**:


| 参数名称               | 参数说明                                | 类型              | schema     |
| ---------------------- | --------------------------------------- | ----------------- | ---------- |
| code                   | 返回码                                  | object            |            |
| data                   | 对象                                    | array             | DeviceData |
| &emsp;&emsp;createTime | 创建时间                                | string(date-time) |            |
| &emsp;&emsp;data       | Base64数据                              | string            |            |
| &emsp;&emsp;dataType   | 数据类型                                | string            |            |
| &emsp;&emsp;deviceId   | 设备id                                  | integer(int64)    |            |
| &emsp;&emsp;deviceKey  | 设备key                                 | string            |            |
| &emsp;&emsp;direction  | 数据类型 1 UP上行 2 DOWN下行            | integer(int32)    |            |
| &emsp;&emsp;dmData     | 保存物模型数据json                      | string            |            |
| &emsp;&emsp;extData    | 拓展信息                                | object            |            |
| &emsp;&emsp;id         | id                                      | string            |            |
| &emsp;&emsp;msgType    | 消息类型                                | string            |            |
| &emsp;&emsp;productId  | 产品id                                  | integer(int64)    |            |
| &emsp;&emsp;productKey | 产品key                                 | string            |            |
| &emsp;&emsp;sendStatus | 发送状态 0:未发送;1:已发送;-1:发送失败; | integer(int32)    |            |
| &emsp;&emsp;sendTime   | 发送时间                                | string(date-time) |            |
| &emsp;&emsp;sourceType | 类型                                    | string            |            |
| &emsp;&emsp;ticket     | 数据唯一值                              | string            |            |
| &emsp;&emsp;updateTime | 修改时间                                | string(date-time) |            |
| exp1                   |                                         | string            |            |
| msg                    | 提示信息                                | object            |            |
| pageNum                | 当前页数                                | object            |            |
| pageSize               | 每页数量                                | object            |            |
| pages                  | 总页数                                  | object            |            |
| total                  | 总数                                    | object            |            |


**响应示例**:
```javascript
{
	"code": 200,
	"data": [
        {
            "id": null,
            "deviceKey": "DK00001",
            "deviceId": null,
            "productId": null,
            "direction": 1,
            "data": "AFQAAwAKAAAAEgAAABoAAABkAAQACgAAABIAAAAaAAAAIgAAAAkAaQA5AEoAAABCAAAAWgADABwAAQAEAAMACgAAABIAAAAaAAEANAABAAQABAAKAAAAEgAAABoAAAAiAAAAFAABAAQAAgAKAAAAEQAsAAEABAAHAAoAAAASAAAAGgAAACIAAAAqAAAAMgAAADkAJAABAAQABQAKAAAAEgAAABoAAAAhACk=",
            "dataType": "BASE64",
            "sendStatus": 1,
            "sendTime": "1748944587418",
            "ticket": "1379519113954918775",
            "createTime": "1748944587418",
            "updateTime": "1748944587418",
            "productKey": "PK0001",
            "cmd": "0012",
            "sourceType": "MODE",
            "msgType": "up",
            "dmData": "[{\"id\":10,\"value\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"}]},{\"id\":12,\"value\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"}]},{\"id\":1,\"value\":true},{\"id\":13,\"value\":true},{\"id\":7,\"value\":true},{\"id\":9,\"value\":\"0\"},{\"id\":8,\"value\":\"0\"},{\"id\":11,\"value\":\"3\"},{\"id\":3,\"value\":[{\"id\":0,\"value\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"1\"}]}]},{\"id\":6,\"value\":[{\"id\":0,\"value\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"}]}]},{\"id\":2,\"value\":[{\"id\":0,\"value\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":true}]}]},{\"id\":5,\"value\":[{\"id\":0,\"value\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"},{\"id\":7,\"value\":true}]}]},{\"id\":4,\"value\":[{\"id\":0,\"value\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":true},{\"id\":5,\"value\":true}]}]}]",
            "extData": null
        },
        {
            "id": null,
            "deviceKey": "DK00001",
            "deviceId": null,
            "productId": null,
            "direction": 2,
            "data": "AAoADAABAA0ABwAJAAgACwADAAYAAgAFAAQ=",
            "dataType": "BASE64",
            "sendStatus": 1,
            "sendTime": "1748944587349",
            "ticket": "1379519113954918775",
            "createTime": "1748944587349",
            "updateTime": "1748944587349",
            "productKey": "PK0001",
            "cmd": "0011",
            "sourceType": "MODE",
            "msgType": "down",
            "dmData": "[\"10\",\"12\",\"1\",\"13\",\"7\",\"9\",\"8\",\"11\",\"3\",\"6\",\"2\",\"5\",\"4\"]",
            "extData": null
        }
	],
	"msg": "",
	"pageNum": 1,
	"pageSize": 10,
	"pages": 1,
	"total": 2
}
```
