# 修改设备信息


**接口地址**:`/v2/binding/enduserapi/setDeviceInfo`


**请求方式**:`PUT`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>修改设备信息</p>

**请求参数**:


| 参数名称   | 参数说明    | 请求类型 | 是否必须 | 数据类型 | schema |
| ---------- | ----------- | -------- | -------- | -------- | ------ |
| deviceName | 设备名称    | query    | true     | string   |        |
| dk         | Device Key  | query    | true     | string   |        |
| pk         | Product Key | query    | true     | string   |        |


**响应状态**:


| 状态码 | 说明                 | schema             |
| ------ | -------------------- | ------------------ |
| 200    | 修改设备信息成功     | 返回注册码响应数据 |
| 5032   | token 验证失败       |                    |
| 5041   | 没有权限             |                    |
| 5054   | 设备信息修改失败     |                    |
| 5066   | 请输入Product Key    |                    |
| 5067   | 请输入Device Key     |                    |
| 5068   | 请输入设备名称       |                    |
| 5106   | 请输入token          |                    |
| 5333   | 设备名称超出长度限制 |                    |


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
