# 获取设备属性统计数据


**接口地址**:`/v2/quecdatastorage/enduserapi/getPropertyStatistics`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>获取设备属性统计数据数据</p>


**请求参数**:


| 参数名称          | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型       | schema |
| ----------------- | ------------------------------------------------------------ | -------- | -------- | -------------- | ------ |
| attributeCode     | 物模型属性标识符                                             | query    | true     | string         |        |
| dk                | Device Key                                                   | query    | true     | string         |        |
| pk                | Product Key                                                  | query    | true     | string         |        |
| countType         | 聚合类型（默认3）：1-最大值 2-最小值 3-平均值 4-差值 5-总值  | query    | false    | integer(int32) |        |
| currentTimestamp  | 当前时间（毫秒时间戳）                                       | query    | false    | integer(int64) |        |
| gatewayDk         | 网关设备的 Device Key                                        | query    | false    | string         |        |
| gatewayPk         | 网关设备的 Product Key                                       | query    | false    | string         |        |
| timeGranularities | 统计时间粒度，查询多个粒度时使用英文逗号分隔（默认1）：1-日 2-周 3-月 4-年 | query    | false    | string         |        |
| timeStr           | 查询日期                                                     | query    | false    | string         |        |


**响应状态**:


| 状态码 | 说明                     | schema                                   |
| ------ | ------------------------ | ---------------------------------------- |
| 200    | 获取设备属性数据列表成功 | 返回注册码响应数据OfListOf设备属性环比值 |
| 401    | Unauthorized             |                                          |
| 403    | Forbidden                |                                          |
| 404    | Not Found                |                                          |
| 5032   | token 验证失败           |                                          |
| 5106   | 请输入token              |                                          |


**响应参数**:


| 参数名称                    | 参数说明                            | 类型           | schema         |
| --------------------------- | ----------------------------------- | -------------- | -------------- |
| code                        | 响应状态码                          | integer(int32) | integer(int32) |
| data                        | 响应数据                            | array          | 设备属性环比值 |
| &emsp;&emsp;statValue       | 当期环比值                          | object         |                |
| &emsp;&emsp;timeGranularity | 时间单位 【1-日，2-周，3-月，4-年】 | integer(int32) |                |
| extMsg                      | 扩展消息                            | string         |                |
| msg                         | 响应消息                            | string         |                |


**响应示例**:
```javascript
{
	"code": 0,
	"data": [
		{
			"statValue": {},
			"timeGranularity": 0
		}
	],
	"extMsg": "",
	"msg": ""
}
```
