# 使用PK、DK解绑设备


**接口地址**:`/v2/binding/enduserapi/unbundlingDeviceDk`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>使用 pk、dk 解绑设备</p>


**请求参数**:


| 参数名称               | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型 | schema |
| ---------------------- | ------------------------------------------------------------ | -------- | -------- | -------- | ------ |
| dk                     | Device Key                                                   | query    | true     | string   |        |
| pk                     | Product Key                                                  | query    | true     | string   |        |
| isInit                 | 是否初始化，默认 false                                       | query    | false    | boolean  |        |
| pureBtResetCredentials | 纯蓝牙设备重置凭证<br/>算法：BASE64_ENCODE(AES_128_CBC(PKCS5Padding(PK,DK,bindingSecret), key=PS, iv=random) )，PKCS5Padding 的内容包括英文逗号"," | query    | false    | string   |        |
| random                 | 用来解密重置凭证的 random                                    | query    | false    | string   |        |


**响应状态**:


| 状态码 | 说明              | schema                            |
| ------ | ----------------- | --------------------------------- |
| 200    | 设备解绑成功      | 返回注册码响应数据«UnbindRespDto» |
| 5032   | token 验证失败    |                                   |
| 5050   | 设备解绑失败      |                                   |
| 5052   | 设备未绑定        |                                   |
| 5066   | 请输入Product Key |                                   |
| 5067   | 请输入Device Key  |                                   |
| 5106   | 请输入token       |                                   |


**响应参数**:


| 参数名称               | 参数说明                                     | 类型           | schema         |
| ---------------------- | -------------------------------------------- | -------------- | -------------- |
| code                   | 响应状态码                                   | integer(int32) | integer(int32) |
| data                   | 响应数据                                     | UnbindRespDto  | UnbindRespDto  |
| &emsp;&emsp;bindingSum | 解绑操作后设备在云端的绑定用户数，包括伪绑定 | integer(int32) |                |
| extMsg                 | 扩展消息                                     | string         |                |
| msg                    | 响应消息                                     | string         |                |


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"bindingSum": 0
	},
	"extMsg": "",
	"msg": ""
}
```
