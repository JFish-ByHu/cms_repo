# 设置设备时区


**接口地址**:`/v2/binding/enduserapi/v2/setDeviceTimeZone`


**请求方式**:`PUT`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>设置设备时区（V2）</p>



**请求示例**:


```javascript
{
  "dk": "",
  "pk": "",
  "timeZone": "",
  "timeZoneId": ""
}
```


**请求参数**:


| 参数名称               | 参数说明                      | 请求类型 | 是否必须 | 数据类型         | schema           |
| ---------------------- | ----------------------------- | -------- | -------- | ---------------- | ---------------- |
| param                  | param                         | body     | true     | 设置设备时区参数 | 设置设备时区参数 |
| &emsp;&emsp;dk         | Device Key                    |          | true     | string           |                  |
| &emsp;&emsp;pk         | Product Key                   |          | true     | string           |                  |
| &emsp;&emsp;timeZone   | 时区。符合+-HH:mm或者+-HH格式 |          | true     | string           |                  |
| &emsp;&emsp;timeZoneId | 时区ID                        |          | false    | string           |                  |


**响应状态**:


| 状态码 | 说明              | schema             |
| ------ | ----------------- | ------------------ |
| 200    | 设置设备时区成功  | 返回注册码响应数据 |
| 5041   | 没有权限          |                    |
| 5066   | 请输入Product Key |                    |
| 5067   | 请输入Device Key  |                    |


**响应参数**:


| 参数名称 | 参数说明   | 类型           | schema         |
| -------- | ---------- | -------------- | -------------- |
| code     | 响应状态码 | integer(int32) | integer(int32) |
| data     | 响应数据   | object         |                |
| extMsg   | 扩展消息   | string         |                |
| msg      | 响应消息   | string         |                |


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"extMsg": "",
	"msg": ""
}
```
