# 获取设备历史轨迹


**接口地址**:`/v2/quecdatastorage/enduserapi/getLocationHistory`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>获取设备历史轨迹</p>


**请求参数**:


| 参数名称       | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型       | schema |
| -------------- | ------------------------------------------------------------ | -------- | -------- | -------------- | ------ |
| dk             | Device Key                                                   | query    | true     | string         |        |
| endTimestamp   | 结束时间（毫秒时间戳）                                       | query    | true     | integer(int64) |        |
| pk             | Product Key                                                  | query    | true     | string         |        |
| startTimestamp | 开始时间（毫秒时间戳）                                       | query    | true     | integer(int64) |        |
| gatewayDk      | 网关设备的 Device Key                                        | query    | false    | string         |        |
| gatewayPk      | 网关设备的 Product Key                                       | query    | false    | string         |        |
| locateTypes    | 定位类型（默认查询所有类型的定位）：GP/GL/GA/GN/BD/PQ/LBS，查询多种定位时使用英文逗号分隔 | query    | false    | string         |        |
| timeStr        | 查询日期                                                     | query    | false    | string         |        |


**响应状态**:


| 状态码 | 说明                 | schema                             |
| ------ | -------------------- | ---------------------------------- |
| 200    | 获取设备历史轨迹成功 | 返回注册码响应数据OfListOf设备轨迹 |
| 401    | Unauthorized         |                                    |
| 403    | Forbidden            |                                    |
| 404    | Not Found            |                                    |
| 5032   | token 验证失败       |                                    |
| 5106   | 请输入token          |                                    |


**响应参数**:


| 参数名称                 | 参数说明                        | 类型              | schema         |
| ------------------------ | ------------------------------- | ----------------- | -------------- |
| code                     | 响应状态码                      | integer(int32)    | integer(int32) |
| data                     | 响应数据                        | array             | 设备轨迹       |
| &emsp;&emsp;accuracy     | 精度                            | string            |                |
| &emsp;&emsp;bdLat        | 设备纬度。BD09                  | number            |                |
| &emsp;&emsp;bdLng        | 设备经度。BD09                  | number            |                |
| &emsp;&emsp;deviceKey    | dk                              | string            |                |
| &emsp;&emsp;gcjLat       | 设备纬度。GCJ02                 | number            |                |
| &emsp;&emsp;gcjLng       | 设备经度。GCJ02                 | number            |                |
| &emsp;&emsp;hdop         | 水平精度因子。0.5-99.99         | number(float)     |                |
| &emsp;&emsp;id           | 轨迹ID                          | string            |                |
| &emsp;&emsp;locateTime   |                                 | string(date-time) |                |
| &emsp;&emsp;locateTimeTs |                                 | integer(int64)    |                |
| &emsp;&emsp;locationType | 定位类型，GP/GL/GA/GN/BD/PQ/LBS | string            |                |
| &emsp;&emsp;productKey   | pk                              | string            |                |
| &emsp;&emsp;satellites   | 当前卫星数                      | integer(int32)    |                |
| &emsp;&emsp;tsLocateTime |                                 | integer(int64)    |                |
| &emsp;&emsp;wgsLat       | 设备纬度。WGS84                 | number            |                |
| &emsp;&emsp;wgsLng       | 设备经度。WGS84                 | number            |                |
| extMsg                   | 扩展消息                        | string            |                |
| msg                      | 响应消息                        | string            |                |


**响应示例**:
```javascript
{
	"code": 0,
	"data": [
		{
			"accuracy": "",
			"bdLat": 0,
			"bdLng": 0,
			"deviceKey": "",
			"gcjLat": 0,
			"gcjLng": 0,
			"hdop": 0,
			"id": "",
			"locateTime": "",
			"locateTimeTs": 0,
			"locationType": "",
			"productKey": "",
			"satellites": 0,
			"tsLocateTime": 0,
			"wgsLat": 0,
			"wgsLng": 0
		}
	],
	"extMsg": "",
	"msg": ""
}
```
