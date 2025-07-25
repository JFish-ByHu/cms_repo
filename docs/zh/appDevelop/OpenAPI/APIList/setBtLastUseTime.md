# 设置蓝牙最近使用时间


**接口地址**:`/v2/binding/enduserapi/setBtLastUseTime`


**请求方式**:`PUT`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>设置蓝牙最近使用时间</p>


**请求参数**:


| 参数名称      | 参数说明                       | 请求类型 | 是否必须 | 数据类型       | schema |
| ------------- | ------------------------------ | -------- | -------- | -------------- | ------ |
| btLastUseTime | 蓝牙最近使用时间（毫秒时间戳） | query    | true     | integer(int64) |        |
| dk            | Device Key                     | query    | true     | string         |        |
| pk            | Product Key                    | query    | true     | string         |        |


**响应状态**:


| 状态码 | 说明                     | schema             |
| ------ | ------------------------ | ------------------ |
| 200    | 设置蓝牙最近使用时间成功 | 返回注册码响应数据 |
| 5032   | token 验证失败           |                    |
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
