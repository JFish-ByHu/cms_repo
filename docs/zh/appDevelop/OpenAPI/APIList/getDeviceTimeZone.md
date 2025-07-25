# 查询设备时区


**接口地址**:`/v2/binding/enduserapi/getDeviceTimeZone`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询设备时区</p>


**请求参数**:


| 参数名称 | 参数说明    | 请求类型 | 是否必须 | 数据类型 | schema |
| -------- | ----------- | -------- | -------- | -------- | ------ |
| dk       | Device Key  | query    | true     | string   |        |
| pk       | Product Key | query    | true     | string   |        |


**响应状态**:


| 状态码 | 说明              | schema                             |
| ------ | ----------------- | ---------------------------------- |
| 200    | 查询设备时区成功  | 返回注册码响应数据«DeviceTimeZone» |
| 5041   | 没有权限          |                                    |
| 5066   | 请输入Product Key |                                    |
| 5067   | 请输入Device Key  |                                    |


**响应参数**:


| 参数名称               | 参数说明                      | 类型           | schema         |
| ---------------------- | ----------------------------- | -------------- | -------------- |
| code                   | 响应状态码                    | integer(int32) | integer(int32) |
| data                   | 响应数据                      | DeviceTimeZone | DeviceTimeZone |
| &emsp;&emsp;timeZone   | 时区。符合+-HH:mm或者+-HH格式 | string         |                |
| &emsp;&emsp;timeZoneId | 时区ID                        | string         |                |
| extMsg                 | 扩展消息                      | string         |                |
| msg                    | 响应消息                      | string         |                |


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"timeZone": "",
		"timeZoneId": ""
	},
	"extMsg": "",
	"msg": ""
}
```
