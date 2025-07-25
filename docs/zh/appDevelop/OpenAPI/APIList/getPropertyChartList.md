# 获取设备属性图表列表


**接口地址**:`/v2/quecdatastorage/enduserapi/getPropertyChartList`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>获取设备属性图表列表</p>


**请求参数**:


| 参数名称        | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型       | schema |
| --------------- | ------------------------------------------------------------ | -------- | -------- | -------------- | ------ |
| attributeCode   | 物模型属性标识符，查询多个属性时使用英文逗号分隔，最多查询 10 个 | query    | true     | string         |        |
| dk              | Device Key                                                   | query    | true     | string         |        |
| endTimestamp    | 结束时间（毫秒时间戳）                                       | query    | true     | integer(int64) |        |
| pk              | Product Key                                                  | query    | true     | string         |        |
| startTimestamp  | 开始时间（毫秒时间戳）                                       | query    | true     | integer(int64) |        |
| countType       | 聚合类型（默认3）：1-最大值 2-最小值 3-平均值 4-差值 5-总值  | query    | false    | integer(int32) |        |
| gatewayDk       | 网关设备的 Device Key                                        | query    | false    | string         |        |
| gatewayPk       | 网关设备的 Product Key                                       | query    | false    | string         |        |
| timeGranularity | 统计时间粒度（默认2）：1-月 2-日 3-小时                      | query    | false    | integer(int32) |        |
| timeStr         | 查询日期                                                     | query    | false    | string         |        |


**响应状态**:


| 状态码 | 说明                     | schema                                 |
| ------ | ------------------------ | -------------------------------------- |
| 200    | 获取设备属性图表列表成功 | 返回注册码响应数据OfListOf属性图表出参 |
| 401    | Unauthorized             |                                        |
| 403    | Forbidden                |                                        |
| 404    | Not Found                |                                        |
| 5032   | token 验证失败           |                                        |
| 5106   | 请输入token              |                                        |


**响应参数**:


| 参数名称                 | 参数说明   | 类型           | schema         |
| ------------------------ | ---------- | -------------- | -------------- |
| code                     | 响应状态码 | integer(int32) | integer(int32) |
| data                     | 响应数据   | array          | 属性图表出参   |
| &emsp;&emsp;propertyCode | 物模型code | string         |                |
| &emsp;&emsp;xaxisData    | 记录时间   | array          | string         |
| &emsp;&emsp;xaxisDataTs  |            | array          | integer        |
| &emsp;&emsp;yaxisData    | 属性内容   | array          | object         |
| extMsg                   | 扩展消息   | string         |                |
| msg                      | 响应消息   | string         |                |


**响应示例**:
```javascript
{
	"code": 0,
	"data": [
		{
			"propertyCode": "",
			"xaxisData": [],
			"xaxisDataTs": [],
			"yaxisData": []
		}
	],
	"extMsg": "",
	"msg": ""
}
```
