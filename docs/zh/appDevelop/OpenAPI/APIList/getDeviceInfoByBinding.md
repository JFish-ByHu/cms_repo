# 查询用户是否可以绑定该设备


**接口地址**:`/v2/binding/enduserapi/getDeviceInfoByBinding`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询用户是否可以绑定该设备</p>


**请求参数**:


| 参数名称          | 参数说明                          | 请求类型 | 是否必须 | 数据类型 | schema |
| ----------------- | --------------------------------- | -------- | -------- | -------- | ------ |
| pk                | Product Key                       | query    | true     | string   |        |
| checkExistInCloud | 验证设备在云端是否存在，默认 true | query    | false    | boolean  |        |
| dk                | Device Key                        | query    | false    | string   |        |
| fid               | 家庭fid                           | query    | false    | string   |        |


**响应状态**:


| 状态码 | 说明                           | schema                                |
| ------ | ------------------------------ | ------------------------------------- |
| 200    | 查询用户是否可以绑定该设备成功 | 返回注册码响应数据«BindingDeviceInfo» |
| 5032   | token 验证失败                 |                                       |
| 5049   | 设备已绑定                     |                                       |
| 5066   | 请输入Product Key              |                                       |
| 5106   | 请输入token                    |                                       |
| 5361   | dk格式不正确                   |                                       |
| 5618   | 请输入家庭ID                   |                                       |
| 5913   | 无权限不能绑定                 |                                       |
| 6040   | 已接受该设备分享               |                                       |


**响应参数**:


| 参数名称                    | 参数说明                                                    | 类型              | schema            |
| --------------------------- | ----------------------------------------------------------- | ----------------- | ----------------- |
| code                        | 响应状态码                                                  | integer(int32)    | integer(int32)    |
| data                        | 响应数据                                                    | BindingDeviceInfo | BindingDeviceInfo |
| &emsp;&emsp;activeBluetooth | 优先蓝牙激活开关配置：true-开启，false-未开启               | boolean           |                   |
| &emsp;&emsp;bindingMode     | 绑定模式：<br/>1 多用户绑定<br/>2 拥有者绑定<br/>3 轮流绑定 | integer(int32)    |                   |
| &emsp;&emsp;productLogo     | 产品logo                                                    | string            |                   |
| &emsp;&emsp;productName     | 产品名称                                                    | string            |                   |
| extMsg                      | 扩展消息                                                    | string            |                   |
| msg                         | 响应消息                                                    | string            |                   |


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"activeBluetooth": true,
		"bindingMode": 0,
		"productLogo": "",
		"productName": ""
	},
	"extMsg": "",
	"msg": ""
}
```
