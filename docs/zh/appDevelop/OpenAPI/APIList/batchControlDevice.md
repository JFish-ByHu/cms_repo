# 批量控制设备


**接口地址**:`/v2/binding/enduserapi/batchControlDevice`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>批量控制设备</p>



**请求示例**:


```javascript
{
  "cacheTime": 0,
  "data": "",
  "dataFormat": 0,
  "deviceList": [
    {
      "deviceKey": "",
      "gatewayDeviceKey": "",
      "gatewayProductKey": "",
      "productKey": ""
    }
  ],
  "isCache": 0,
  "isCover": 0,
  "qos": 0,
  "type": 0
}
```


**请求参数**:


| 参数名称                                  | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型       | schema       |
| ----------------------------------------- | ------------------------------------------------------------ | -------- | -------- | -------------- | ------------ |
| param                                     | param                                                        | body     | true     | 批量控制设备   | 批量控制设备 |
| &emsp;&emsp;cacheTime                     | 缓存时间，单位为秒，缓存时间范围 1-7776000 秒，启用缓存时必须设置缓存时间 |          | false    | integer(int32) |              |
| &emsp;&emsp;data                          | 控制设备的命令 当类型为透传时，命令最大长度为 4096           |          | true     | string         |              |
| &emsp;&emsp;dataFormat                    | 数据类型 1：Hex 2：Text （当 type 为透传时，需要指定 dataFormat） |          | false    | integer(int32) |              |
| &emsp;&emsp;deviceList                    | 设备列表                                                     |          | true     | array          | pkdk         |
| &emsp;&emsp;&emsp;&emsp;deviceKey         | 设备deviceKey                                                |          | true     | string         |              |
| &emsp;&emsp;&emsp;&emsp;gatewayDeviceKey  | 网关设备deviceKey                                            |          | false    | string         |              |
| &emsp;&emsp;&emsp;&emsp;gatewayProductKey | 网关产品productKey                                           |          | false    | string         |              |
| &emsp;&emsp;&emsp;&emsp;productKey        | 产品productKey                                               |          | true     | string         |              |
| &emsp;&emsp;isCache                       | 是否启用缓存 1：启用 2：不启用，默认不启用                   |          | false    | integer(int32) |              |
| &emsp;&emsp;isCover                       | 是否覆盖之前发送的相同的命令 1：覆盖 2：不覆盖，默认不覆盖，启用缓存时此参数有效 |          | false    | integer(int32) |              |
| &emsp;&emsp;qos                           | QoS等级设置，参数值范围 0、1，默认为1                        |          | false    | integer(int32) |              |
| &emsp;&emsp;type                          | 类型 1：透传 2：属性 3：服务                                 |          | true     | integer(int32) |              |


**响应状态**:


| 状态码 | 说明                                                         | schema                         |
| ------ | ------------------------------------------------------------ | ------------------------------ |
| 200    | 批量控制设备成功                                             | 返回注册码响应数据«PkdkResult» |
| 5032   | token 验证失败                                               |                                |
| 5041   | 无权限                                                       |                                |
| 5070   | 请输入类型                                                   |                                |
| 5071   | 类型错误，类型 1：透传 2：属性 3：服务                       |                                |
| 5072   | 请输入数据类型                                               |                                |
| 5073   | 数据类型错误，数据类型 1：Hex 2：Text （当 type 为透传时，需要指定 dataFormat） |                                |
| 5074   | 请输入控制设备的命令                                         |                                |
| 5075   | 控制设备的命令长度不能超过 4096                              |                                |
| 5106   | 请输入token                                                  |                                |
| 5311   | 请输入设备列表                                               |                                |
| 5312   | 设备列表总数超出范围                                         |                                |
| 5328   | 请输入缓存时间                                               |                                |
| 5329   | 缓存时间超出范围                                             |                                |
| 5330   | 是否启用缓存超出范围                                         |                                |
| 5331   | 是否覆盖之前发送的相同的命令超出范围                         |                                |
| 5340   | 批量控制设备失败                                             |                                |


**响应参数**:


| 参数名称                                              | 参数说明           | 类型           | schema         |
| ----------------------------------------------------- | ------------------ | -------------- | -------------- |
| code                                                  | 响应状态码         | integer(int32) | integer(int32) |
| data                                                  | 响应数据           | PkdkResult     | PkdkResult     |
| &emsp;&emsp;failureList                               | 失败列表           | array          | PkdkMsg        |
| &emsp;&emsp;&emsp;&emsp;data                          |                    | pkdk           | pkdk           |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deviceKey         | 设备deviceKey      | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;gatewayDeviceKey  | 网关设备deviceKey  | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;gatewayProductKey | 网关产品productKey | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productKey        | 产品productKey     | string         |                |
| &emsp;&emsp;&emsp;&emsp;msg                           |                    | string         |                |
| &emsp;&emsp;successList                               | 成功列表           | array          | PkdkSuc        |
| &emsp;&emsp;&emsp;&emsp;data                          |                    | pkdk           | pkdk           |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deviceKey         | 设备deviceKey      | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;gatewayDeviceKey  | 网关设备deviceKey  | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;gatewayProductKey | 网关产品productKey | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productKey        | 产品productKey     | string         |                |
| &emsp;&emsp;&emsp;&emsp;ticket                        |                    | string         |                |
| extMsg                                                | 扩展消息           | string         |                |
| msg                                                   | 响应消息           | string         |                |


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"failureList": [
			{
				"data": {
					"deviceKey": "",
					"gatewayDeviceKey": "",
					"gatewayProductKey": "",
					"productKey": ""
				},
				"msg": ""
			}
		],
		"successList": [
			{
				"data": {
					"deviceKey": "",
					"gatewayDeviceKey": "",
					"gatewayProductKey": "",
					"productKey": ""
				},
				"ticket": ""
			}
		]
	},
	"extMsg": "",
	"msg": ""
}
```
