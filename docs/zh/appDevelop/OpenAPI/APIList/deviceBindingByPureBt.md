# 纯蓝牙设备绑定


**接口地址**:`/v2/binding/enduserapi/deviceBindingByPureBt`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>纯蓝牙设备绑定</p>



**请求示例**:


```javascript
{
  "bindingCode": "",
  "capabilitiesBitmask": 0,
  "deviceName": "",
  "dk": "",
  "encryptedBindingCode": "",
  "encryptedNewBindingSecret": "",
  "encryptedOldBindingSecret": "",
  "fid": "",
  "frid": "",
  "isCommonDevice": true,
  "pk": "",
  "pwd": "",
  "random": "",
  "signature": ""
}
```


**请求参数**:


| 参数名称                              | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型              | schema                |
| ------------------------------------- | ------------------------------------------------------------ | -------- | -------- | --------------------- | --------------------- |
| param                                 | param                                                        | body     | true     | BindDevicePureBtParam | BindDevicePureBtParam |
| &emsp;&emsp;bindingCode               | bindingCode，和 encryptedBindingCode 二选一                  |          | false    | string                |                       |
| &emsp;&emsp;capabilitiesBitmask       | 设备联网能力：<br/>1-WAN<br/>2-LAN(WiFi)<br/>3-LAN(WiFi)+WAN<br/>4-BLE<br/>5-WAN+BLE<br/>6-LAN(WiFi)+BLE<br/>7-WAN+LAN(WiFi)+BLE<br/>8-Matter<br/>9-WAN+Matter<br/>10-LAN(WiFi)+Matter<br/>11-LAN(WiFi)+WAN+Matter<br/>12-BLE+Matter<br/>13-WAN+BLE+Matter<br/>14-LAN(WiFi)+BLE+Matter <br/>15-WAN+LAN(WiFi)+BLE+Matter |          | false    | integer(int32)        |                       |
| &emsp;&emsp;deviceName                | 设备名称                                                     |          | false    | string                |                       |
| &emsp;&emsp;dk                        | Device Key                                                   |          | true     | string                |                       |
| &emsp;&emsp;encryptedBindingCode      | 加密的 bindingCode，和 bindingCode 二选一<br/>算法：BASE64_ENCODE(AES_128_CBC(PKCS5Padding(bindingcode), key=PS, iv=random)) |          | false    | string                |                       |
| &emsp;&emsp;encryptedNewBindingSecret | 新的加密 bindingSecret<br/>算法：BASE64_ENCODE(AES_128_CBC(PKCS5Padding(PK,DK,bindingSecret), key=PS, iv=random)) ，PKCS5Padding 的内容包括英文逗号"," |          | true     | string                |                       |
| &emsp;&emsp;encryptedOldBindingSecret | 旧的加密 bindingSecret<br/>算法：BASE64_ENCODE(AES_128_CBC(PKCS5Padding(PK,DK,bindingSecret), key=PS, iv=random))，PKCS5Padding 的内容包括英文逗号"," |          | false    | string                |                       |
| &emsp;&emsp;fid                       | 家庭fid                                                      |          | false    | string                |                       |
| &emsp;&emsp;frid                      | 房间id                                                       |          | false    | string                |                       |
| &emsp;&emsp;isCommonDevice            | 家居模式下，是否添加到常用设备列表(默认添加)                 |          | false    | boolean               |                       |
| &emsp;&emsp;pk                        | Product Key                                                  |          | true     | string                |                       |
| &emsp;&emsp;pwd                       | pwd                                                          |          | false    | string                |                       |
| &emsp;&emsp;random                    | random                                                       |          | true     | string                |                       |
| &emsp;&emsp;signature                 | 签名<br/>算法：SHA256(pk+dk+bindingCode+pwd+userDomainSecret)<br/>如果接口中传入了 encryptedBindingCode，算法中的 bindingCode 使用 encryptedBindingCode 进行计算 |          | true     | string                |                       |


**响应状态**:


| 状态码 | 说明                                 | schema                       |
| ------ | ------------------------------------ | ---------------------------- |
| 200    | 纯蓝牙设备绑定成功                   | 返回注册码响应数据«Verified» |
| 5032   | token 验证失败                       |                              |
| 5041   | 没有权限                             |                              |
| 5049   | 设备已绑定                           |                              |
| 5052   | 设备未绑定                           |                              |
| 5066   | 请输入Product Key                    |                              |
| 5067   | 请输入Device Key                     |                              |
| 5106   | 请输入token                          |                              |
| 5179   | 请输入bindingCode                    |                              |
| 5213   | bindingCode格式不正确                |                              |
| 5229   | 用户域未授权此产品                   |                              |
| 5314   | 云平台中设备查询失败                 |                              |
| 5327   | 没有此产品的权限                     |                              |
| 5333   | 设备名称超出长度限制                 |                              |
| 5357   | pwd格式不正确                        |                              |
| 5358   | 没有产品权限                         |                              |
| 5361   | dk格式不正确                         |                              |
| 5412   | 产品绑定模式为唯一模式，不能重复绑定 |                              |
| 5624   | 未启用家居模式                       |                              |
| 5636   | 请输入家庭ID                         |                              |
| 5669   | 普通用户没有权限绑定设备             |                              |
| 5893   | 添加常用设备失败                     |                              |
| 6040   | 已接受该设备分享                     |                              |
| 6083   | 绑定的设备不属于当前数据中心         |                              |


**响应参数**:


| 参数名称             | 参数说明                     | 类型           | schema         |
| -------------------- | ---------------------------- | -------------- | -------------- |
| code                 | 响应状态码                   | integer(int32) | integer(int32) |
| data                 | 响应数据                     | Verified       | Verified       |
| &emsp;&emsp;verified | 绑定认证：0-未认证  1-已认证 | string(byte)   |                |
| extMsg               | 扩展消息                     | string         |                |
| msg                  | 响应消息                     | string         |                |


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"verified": ""
	},
	"extMsg": "",
	"msg": ""
}
```
