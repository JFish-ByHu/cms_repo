# 删除设备信息


**接口地址**:`/v2/mobilepush/enduserapi/deleteDeviceInfo`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>删除设备信息</p>


**请求参数**:


| 参数名称 | 参数说明                                           | 请求类型 | 是否必须 | 数据类型 | schema |
| -------- | -------------------------------------------------- | -------- | -------- | -------- | ------ |
| deviceId | 设备标识：阿里云为 deviceId，谷歌为 fcmRegistToken | query    | true     | string   |        |


**响应状态**:


| 状态码 | 说明        | schema             |
| ------ | ----------- | ------------------ |
| 200    | 成功        | 返回注册码响应数据 |
| 5106   | 请输入token |                    |


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
