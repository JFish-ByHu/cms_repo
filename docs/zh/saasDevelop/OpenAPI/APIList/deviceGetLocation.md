# 查询设备最新定位数据


**接口地址**:`/v2/deviceshadow/r1/openapi/device/getlocation`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`

**接口描述**:<p>设备最新定位数据查询</p>


**请求参数**:


| 参数名称   | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型       | schema |
| ---------- | ------------------------------------------------------------ | -------- | -------- | -------------- | ------ |
| deviceId   | 设备id,和productKey与deviceKey组合一一对应。如果传入deviceId,则无需传入productKey与deviceKey组合。如果您同时传入deviceId和productKey与deviceKey组合，则与deviceId为准 | query    | false    | integer(int64) |        |
| deviceKey  | 设备Key,如果传入deviceKey,则必须传入productKey。productKey与deviceKey组合和deviceId一一对应。如果传入productKey与deviceKey组合,则无需传入deviceId。如果您同时传入deviceId和productKey与deviceKey组合，则以deviceId为准 | query    | false    | string         |        |
| language   | 语言:CN/EN(默认:CN)                                          | query    | false    | string         |        |
| productKey | 产品productKey,如果传入productKey,则必须传入deviceKey。productKey与deviceKey组合和deviceId一一对应。如果传入productKey与deviceKey组合,则无需传入deviceId。如果您同时传入deviceId和productKey与deviceKey组合，则以deviceId为准 | query    | false    | string         |        |


**响应状态**:


| 状态码 | 说明                                                         | schema                         |
| ------ | ------------------------------------------------------------ | ------------------------------ |
| 200    | OK                                                           | ActionResultOfQdLocationLatest |
| 401    | Unauthorized                                                 |                                |
| 403    | Forbidden                                                    |                                |
| 404    | Not Found                                                    |                                |
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


| 参数名称                 | 参数说明 | 类型              | schema           |
| ------------------------ | -------- | ----------------- | ---------------- |
| code                     | 返回码   | object            |                  |
| data                     | 对象     | QdLocationLatest  | QdLocationLatest |
| &emsp;&emsp;accuracy     |          | string            |                  |
| &emsp;&emsp;bdLat        |          | number(double)    |                  |
| &emsp;&emsp;bdLng        |          | number(double)    |                  |
| &emsp;&emsp;count        |          | integer(int32)    |                  |
| &emsp;&emsp;createTime   |          | string(date-time) |                  |
| &emsp;&emsp;deviceId     |          | integer(int64)    |                  |
| &emsp;&emsp;deviceKey    |          | string            |                  |
| &emsp;&emsp;deviceStatus |          | integer(int32)    |                  |
| &emsp;&emsp;gcjLat       |          | number(double)    |                  |
| &emsp;&emsp;gcjLng       |          | number(double)    |                  |
| &emsp;&emsp;ggaStatus    |          | string            |                  |
| &emsp;&emsp;hdop         |          | string            |                  |
| &emsp;&emsp;height       |          | string            |                  |
| &emsp;&emsp;id           |          | string            |                  |
| &emsp;&emsp;lat          |          | string            |                  |
| &emsp;&emsp;latType      |          | string            |                  |
| &emsp;&emsp;lng          |          | string            |                  |
| &emsp;&emsp;lngType      |          | string            |                  |
| &emsp;&emsp;locType      |          | string            |                  |
| &emsp;&emsp;locateRaw    |          | string            |                  |
| &emsp;&emsp;locateStatus |          | string            |                  |
| &emsp;&emsp;locateTime   |          | string(date-time) |                  |
| &emsp;&emsp;locateType   |          | string            |                  |
| &emsp;&emsp;productKey   |          | string            |                  |
| &emsp;&emsp;satellites   |          | string            |                  |
| &emsp;&emsp;speed        |          | string            |                  |
| &emsp;&emsp;ticket       |          | string            |                  |
| &emsp;&emsp;wgsLat       |          | number(double)    |                  |
| &emsp;&emsp;wgsLng       |          | number(double)    |                  |
| exp1                     |          | string            |                  |
| msg                      | 提示信息 | object            |                  |
| pageNum                  | 当前页数 | object            |                  |
| pageSize                 | 每页数量 | object            |                  |
| pages                    | 总页数   | object            |                  |
| total                    | 总数     | object            |                  |


**响应示例**:
```javascript
{
	"code": 200,
	"data": {
		"accuracy": "550",
		"bdLat": 31.826790506073646,
		"bdLng": 117.12844898451473,
		"count": 0,
		"createTime": "1749262714000",
		"deviceId": 0,
		"deviceKey": DK00001,
		"deviceStatus": 1,
		"gcjLat": 31.820436517272384,
		"gcjLng": 117.12202697843334,
		"ggaStatus": null,
		"hdop": null,
		"height": null,
		"id": "1623625145",
		"lat": "3149.3362",
		"latType": "N",
		"lng": "11706.9841",
		"lngType": "E",
		"locType": null,
		"locateRaw": "ABMBCiRMQlMsNDYwLDAwLDIxNzcxLDI1NDYyNjM4NywtODcsMCoxMTQ7JExCUyw0NjAsMDAsMjE3NzEsOTY3OTIzMjEsLTEzMSwwKjExMjskTEJTLDQ2MCwwMCwyMTc3MSw5Njc5MjMyMSwtMTMxLDAqMTEyOyRMQlMsNDYwLDAwLDIxNzcxLDk2NzkyMzIxLC0xMzEsMCoxMTI7JExCUyw0NjAsMDAsMjE3NzEsOTY3OTIzMjEsLTEzMSwwKjExMjskTEJTLDQ2MCwwMCwyMTc3MSw5Njc5MjMyMSwtMTMxLDAqMTEyOyRMQlMsNDYwLDAwLDIxNzcxLDk2NzkyMzIxLC0xMzEsMCoxMTI7",
		"locateStatus": "3",
		"locateTime": "1749262713572",
		"locateType": "LBS ",
		"productKey": "PK0001",
		"satellites": null,
		"speed": null,
		"ticket": "1380853431444766994",
		"wgsLat": 31.822269439697266,
		"wgsLng": 117.11640167236328
	},
	"msg": "",
	"pageNum": 1,
	"pageSize": 10,
	"pages": 1,
	"total": 1
}
```
