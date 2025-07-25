# 设置设备ID和语言信息


**接口地址**:`/v2/mobilepush/enduserapi/setDeviceInfo`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>设置设备ID和语言信息</p>



**请求示例**:


```javascript
{
  "deviceId": "",
  "deviceLanguage": "",
  "type": ""
}
```


**请求参数**:


| 参数名称                   | 参数说明                                                   | 请求类型 | 是否必须 | 数据类型   | schema     |
| -------------------------- | ---------------------------------------------------------- | -------- | -------- | ---------- | ---------- |
| param                      | param                                                      | body     | true     | DeviceInfo | DeviceInfo |
| &emsp;&emsp;deviceId       | 设备标识：阿里云为 deviceId，谷歌为 fcmRegistToken         |          | false    | string     |            |
| &emsp;&emsp;deviceLanguage | 手机当前语言                                               |          | true     | string     |            |
| &emsp;&emsp;type           | 推送类型：APP-app移动推送（默认），MINI-微信小程序消息推送 |          | false    | string     |            |


**响应状态**:


| 状态码 | 说明                     | schema             |
| ------ | ------------------------ | ------------------ |
| 200    | 设置设备ID和语言信息成功 | 返回注册码响应数据 |
| 5106   | 请输入token              |                    |


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
