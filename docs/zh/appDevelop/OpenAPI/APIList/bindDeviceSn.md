# 使用SN绑定设备


**接口地址**:`/v2/binding/enduserapi/bindDeviceSn`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`

**接口描述**:<p>使用 SN 绑定设备</p>


**请求参数**:


| 参数名称            | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型       | schema |
| ------------------- | ------------------------------------------------------------ | -------- | -------- | -------------- | ------ |
| pk                  | Product Key                                                  | query    | true     | string         |        |
| sn                  | 设备SN                                                       | query    | true     | string         |        |
| capabilitiesBitmask | 设备联网能力：<br/>1-WAN<br/>2-LAN(WiFi)<br/>3-LAN(WiFi)+WAN<br/>4-BLE<br/>5-WAN+BLE<br/>6-LAN(WiFi)+BLE<br/>7-WAN+LAN(WiFi)+BLE<br/>8-Matter<br/>9-WAN+Matter<br/>10-LAN(WiFi)+Matter<br/>11-LAN(WiFi)+WAN+Matter<br/>12-BLE+Matter<br/>13-WAN+BLE+Matter<br/>14-LAN(WiFi)+BLE+Matter <br/>15-WAN+LAN(WiFi)+BLE+Matter | query    | false    | integer(int32) |        |
| deviceName          | 设备名称                                                     | query    | false    | string         |        |
| fid                 | 家庭fid                                                      | query    | false    | string         |        |
| frid                | 房间id                                                       | query    | false    | string         |        |
| isCommonDevice      | 家居模式下，是否添加到常用设备列表(默认添加)                 | query    | false    | boolean        |        |


**响应状态**:


| 状态码 | 说明                                 | schema                   |
| ------ | ------------------------------------ | ------------------------ |
| 200    | 使用 SN 绑定设备成功                 | 返回注册码响应数据«绑定» |
| 5009   | 设备验证失败                         |                          |
| 5032   | token 验证失败                       |                          |
| 5041   | 没有权限                             |                          |
| 5048   | 设备绑定失败                         |                          |
| 5049   | 设备已绑定                           |                          |
| 5052   | 设备未绑定                           |                          |
| 5066   | 请输入Product Key                    |                          |
| 5067   | 请输入Device Key                     |                          |
| 5088   | 请输入设备SN                         |                          |
| 5089   | 设备SN请求失败                       |                          |
| 5090   | 请求的设备SN无效                     |                          |
| 5093   | 非正常用户域                         |                          |
| 5106   | 请输入token                          |                          |
| 5229   | 用户域未授权此产品                   |                          |
| 5314   | 云平台中设备查询失败                 |                          |
| 5327   | 没有此产品的权限                     |                          |
| 5333   | 设备名称超出长度限制                 |                          |
| 5361   | dk格式不正确                         |                          |
| 5412   | 产品绑定模式为唯一模式，不能重复绑定 |                          |
| 5553   | 产品或设备不存在                     |                          |
| 5624   | 未启用家居模式                       |                          |
| 5636   | 请输入家庭ID                         |                          |
| 5669   | 普通用户没有权限绑定设备             |                          |
| 5893   | 添加常用设备失败                     |                          |
| 6040   | 已接受该设备分享                     |                          |
| 6083   | 绑定的设备不属于当前数据中心         |                          |


**响应参数**:


| 参数名称               | 参数说明    | 类型           | schema         |
| ---------------------- | ----------- | -------------- | -------------- |
| code                   | 响应状态码  | integer(int32) | integer(int32) |
| data                   | 响应数据    | 绑定           | 绑定           |
| &emsp;&emsp;authKey    | AuthKey     | string         |                |
| &emsp;&emsp;dk         | Device Key  | string         |                |
| &emsp;&emsp;moduleType | 设备型号    | string         |                |
| &emsp;&emsp;pk         | Product Key | string         |                |
| extMsg                 | 扩展消息    | string         |                |
| msg                    | 响应消息    | string         |                |


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"authKey": "",
		"dk": "",
		"moduleType": "",
		"pk": ""
	},
	"extMsg": "",
	"msg": ""
}
```
