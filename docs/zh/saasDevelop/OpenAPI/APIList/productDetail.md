# 查询产品详情


**接口地址**:`/v2/quecproductmgr/r3/openapi/product/detail`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查看产品详情</p>


**请求参数**:


| 参数名称   | 参数说明   | 请求类型 | 是否必须 | 数据类型 | schema |
| ---------- | ---------- | -------- | -------- | -------- | ------ |
| productKey | productKey | query    | true     | string   |        |


**响应状态**:


| 状态码 | 说明                                                         | schema                 |
| ------ | ------------------------------------------------------------ | ---------------------- |
| 200    | OK                                                           | ActionResultOf产品详情 |
| 401    | Unauthorized                                                 |                        |
| 403    | Forbidden                                                    |                        |
| 404    | Not Found                                                    |                        |
| 50000  | service exception                                            |                        |
| 50005  | param check error                                            |                        |
| 70000  | Hub 服务不可用                                               |                        |
| 70017  | Product does not exist.                                      |                        |
| 70089  | You have limited permission to operate this project or product or device. |                        |
| 80005  | OpenAPI does not support setting AEP products.               |                        |
| 91001  | token not exists                                             |                        |
| 91004  | token incorrect                                              |                        |
| 91005  | doesn't have permission                                      |                        |
| 91006  | user not exist ip white list reference.                      |                        |
| 91007  | please open API permission.                                  |                        |


**响应参数**:


| 参数名称                                   | 参数说明                                                     | 类型              | schema   |
| ------------------------------------------ | ------------------------------------------------------------ | ----------------- | -------- |
| code                                       | 返回码                                                       | object            |          |
| data                                       | 对象                                                         | 产品详情          | 产品详情 |
| &emsp;&emsp;accessType                     | 设备类型 0-直连设备 1-网关设备 2-网关子设备                  | integer(int32)    |          |
| &emsp;&emsp;connectPlatform                | 接入平台 0-移远云平台，1-电信AEP平台                         | integer(int32)    |          |
| &emsp;&emsp;createTime                     | 创建时间                                                     | string(date-time) |          |
| &emsp;&emsp;dataFmt                        | 数据格式 0-透传/自定义 3-物模型                              | integer(int32)    |          |
| &emsp;&emsp;logoPath                       | logo地址                                                     | string            |          |
| &emsp;&emsp;netWay                         | 联网方式 1-WiFi(MQTT) 2-2G/3G/4G/5G(MQTT) 3-NB-IoT(LwM2M) 5-蓝牙(HTTP) | string            |          |
| &emsp;&emsp;productConfig                  | 产品配置                                                     | 产品配置          | 产品配置 |
| &emsp;&emsp;&emsp;&emsp;aiCapabilityStatus | AI能力开关状态,false:关闭,true:开启,默认false                | boolean           |          |
| &emsp;&emsp;productKey                     | 产品key                                                      | string            |          |
| &emsp;&emsp;productName                    | 产品名称                                                     | string            |          |
| &emsp;&emsp;updateTime                     | 更新时间                                                     | string(date-time) |          |
| exp1                                       |                                                              | string            |          |
| msg                                        | 提示信息                                                     | object            |          |
| pageNum                                    | 当前页数                                                     | object            |          |
| pageSize                                   | 每页数量                                                     | object            |          |
| pages                                      | 总页数                                                       | object            |          |
| total                                      | 总数                                                         | object            |          |


**响应示例**:
```javascript
{
	"code": 200,
	"data": {
		"accessType": 0,
		"connectPlatform": 0,
		"createTime": "1730871606221",
		"dataFmt": 3,
		"logoPath": null,
		"netWay": "1",
		"productConfig": {
			"aiCapabilityStatus": true
		},
		"productKey": "PK0001",
		"productName": "ProductName01",
		"updateTime": "1730871699999"
	},
	"msg": "",
	"pageNum": 1,
	"pageSize": 10,
	"pages": 1,
	"total": 1
}
```
