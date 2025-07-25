# 查询设备历史事件日志


**接口地址**:`/v2/quecdatastorage/r1/openapi/device/eventdata/history`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`

**接口描述**:<p>事件日志信息查询</p>


**请求参数**:


| 参数名称      | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型       | schema |
| ------------- | ------------------------------------------------------------ | -------- | -------- | -------------- | ------ |
| deviceKey     | 设备Key,如果传入deviceKey,则必须传入productKey。productKey与deviceKey组合和deviceId一一对应。如果传入productKey与deviceKey组合,则无需传入deviceId。如果您同时传入deviceId和productKey与deviceKey组合，则以deviceId为准 | query    | true     | string         |        |
| productKey    | 产品productKey,如果传入productKey,则必须传入deviceKey。productKey与deviceKey组合和deviceId一一对应。如果传入productKey与deviceKey组合,则无需传入deviceId。如果您同时传入deviceId和productKey与deviceKey组合，则以deviceId为准 | query    | true     | string         |        |
| beginDateTimp | 开始时间(时间戳,单位毫秒)                                    | query    | false    | integer(int64) |        |
| deviceId      | 设备id,和productKey与deviceKey组合一一对应。如果传入deviceId,则无需传入productKey与deviceKey组合。如果您同时传入deviceId和productKey与deviceKey组合，则与deviceId为准 | query    | false    | integer(int64) |        |
| endDateTimp   | 结束时间(时间戳,单位毫秒)                                    | query    | false    | integer(int64) |        |
| eventType     | 事件类型(下线:0,上线:1,重新上线:2,信息:3,告警:4,故障:5,重置:6) | query    | false    | string         |        |
| language      | 语言:CN/EN(默认:CN)                                          | query    | false    | string         |        |
| pageNum       | 分页码(默认:1)                                               | query    | false    | integer(int32) |        |
| pageSize      | 分页，每页大小(默认:10)                                      | query    | false    | integer(int32) |        |


**响应状态**:


| 状态码 | 说明                                                         | schema                            |
| ------ | ------------------------------------------------------------ | --------------------------------- |
| 200    | OK                                                           | ActionResult«List«DeviceEventVO»» |
| 50000  | service exception                                            |                                   |
| 50005  | param check error                                            |                                   |
| 50007  | The deviceID, productKey or deviceKey is empty.              |                                   |
| 70000  | Hub 服务不可用                                               |                                   |
| 70089  | You have limited permission to operate this project or product or device. |                                   |
| 70130  | Non existent device.                                         |                                   |
| 91001  | token not exists                                             |                                   |
| 91004  | token incorrect                                              |                                   |
| 91005  | doesn't have permission                                      |                                   |
| 91006  | user not exist ip white list reference.                      |                                   |
| 91007  | please open API permission.                                  |                                   |


**响应参数**:


| 参数名称               | 参数说明       | 类型           | schema        |
| ---------------------- | -------------- | -------------- | ------------- |
| code                   | 返回码         | object         |               |
| data                   | 对象           | array          | DeviceEventVO |
| &emsp;&emsp;abId       | abId           | integer(int64) |               |
| &emsp;&emsp;createTime | 开始时间       | string         |               |
| &emsp;&emsp;deviceKey  | 设备key        | string         |               |
| &emsp;&emsp;eventCode  | 事件码         | string         |               |
| &emsp;&emsp;eventName  | 事件名称       | string         |               |
| &emsp;&emsp;eventType  | 事件类型       | string         |               |
| &emsp;&emsp;extData    | 扩展信息       | object         |               |
| &emsp;&emsp;id         | id             | string         |               |
| &emsp;&emsp;outputData | 输出参数       | string         |               |
| &emsp;&emsp;packetId   | packetId       | integer(int32) |               |
| &emsp;&emsp;productKey | 产品productKey | string         |               |
| &emsp;&emsp;ticket     | ticket         | string         |               |
| exp1                   |                | string         |               |
| msg                    | 提示信息       | object         |               |
| pageNum                | 当前页数       | object         |               |
| pageSize               | 每页数量       | object         |               |
| pages                  | 总页数         | object         |               |
| total                  | 总数           | object         |               |


**响应示例**:
```javascript
{
	"code": 200,
	"data": [
		{
			"abId": null,
			"createTime": "1748922175289",
			"deviceKey": "DK00001",
			"eventCode": "online",
			"eventName": null,
			"eventType": "1",
			"extData": {},
			"id": "1379425110005711323",
			"outputData": null,
			"packetId": null,
			"productKey": "PK0001",
			"ticket": "1379425110005711323"
		},
        {
            "abId": 73,
            "createTime": "1749173645408",
            "deviceKey": "DK00001",
            "eventCode": "PowerOffWarning",
            "eventName": "PowerOffWarning",
            "eventType": "4",
            "extData": {},
            "id": "1380479850894393869",
            "outputData": "{\"arr_test\":[{\"bbb001\":true,\"int000001\":\"0\"}]}",
            "packetId": null,
            "productKey": "PK0001",
            "ticket": "1380479850894393869"
        }
	],
	"msg": "",
	"pageNum": 1,
	"pageSize": 10,
	"pages": 1,
	"total": 1
}
```
