# 查询物模型TSL


**接口地址**:`/v2/binding/enduserapi/productTSL`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询物模型 TSL</p>


**请求参数**:


| 参数名称  | 参数说明             | 请求类型 | 是否必须 | 数据类型 | schema |
| --------- | -------------------- | -------- | -------- | -------- | ------ |
| pk        | Product Key          | query    | true     | string   |        |
| gatewayPk | 网关设备 Product Key | query    | false    | string   |        |


**响应状态**:


| 状态码 | 说明                | schema             |
| ------ | ------------------- | ------------------ |
| 200    | 查询物模型 TSL 成功 | 返回注册码响应数据 |
| 5032   | token 验证失败      |                    |
| 5041   | 没有权限            |                    |
| 5066   | 请输入Product Key   |                    |
| 5106   | 请输入token         |                    |
| 5193   | TSL 查询失败        |                    |


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
