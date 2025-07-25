# 验证设备绑定码有效性

## 验证bindingCode


**接口地址**:`/v2/binding/enterpriseapi/verifyBindingCode`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>验证bindingCode</p>

**请求参数**:


| 参数名称    | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型       | schema |
| ----------- | ------------------------------------------------------------ | -------- | -------- | -------------- | ------ |
| bindingCode | bindingCode                                                  | query    | true     | string         |        |
| dk          | dk                                                           | query    | true     | string         |        |
| pk          | pk                                                           | query    | true     | string         |        |
| isBinding   | 是否正在绑定设备：0-否（默认），设备端不会收到 BindingCode 绑定状态的返回；1-是，设备端将收到 BindingCode 绑定状态的返回； | query    | false    | integer(int32) |        |


**响应状态**:


| 状态码 | 说明                   | schema                  |
| ------ | ---------------------- | ----------------------- |
| 200    | 成功                   | 返回注册码响应数据«int» |
| 5066   | 请输入Product Key      |                         |
| 5067   | 请输入Device Key       |                         |
| 5144   | 鉴权失败               |                         |
| 5179   | 请输入bindingCode      |                         |
| 5213   | bindingCode 格式不正确 |                         |
| 5460   | 未上报bindingCode      |                         |
| 5462   | bindingCode验证失败    |                         |


**响应参数**:


| 参数名称 | 参数说明   | 类型           | schema         |
| -------- | ---------- | -------------- | -------------- |
| code     | 响应状态码 | integer(int32) | integer(int32) |
| data     | 响应数据   | integer(int32) | integer(int32) |
| extMsg   | 扩展消息   | string         |                |
| msg      | 响应消息   | string         |                |


**响应示例**:
```javascript
{
	"code": 0,
	"data": 0,
	"extMsg": "",
	"msg": ""
}
```
