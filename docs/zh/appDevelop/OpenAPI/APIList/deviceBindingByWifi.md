# Wifi设备绑定


**接口地址**:`/v2/binding/enduserapi/v2/deviceBindingByWifi`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`application/json;charset=UTF-8`


**接口描述**:<p>wifi设备绑定</p>



**请求示例**:


```javascript
{
  "bindingCode": "",
  "capabilitiesBitmask": 0,
  "deviceKey": "",
  "deviceName": "",
  "fid": "",
  "frid": "",
  "isCommonDevice": true,
  "isMatter": true,
  "matterInfo": {
    "catList": [
      {
        "cat": 0,
        "privilege": ""
      }
    ],
    "discriminator": 0,
    "extra": "",
    "fabricId": 0,
    "matterProductId": 0,
    "matterVendorId": 0,
    "matterVersion": "",
    "nodeId": 0
  },
  "productKey": ""
}
```


**请求参数**:


| 参数名称                                      | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型       | schema       |
| --------------------------------------------- | ------------------------------------------------------------ | -------- | -------- | -------------- | ------------ |
| param                                         | param                                                        | body     | true     | wifi绑定v2     | wifi绑定v2   |
| &emsp;&emsp;bindingCode                       | bindingCode                                                  |          | true     | string         |              |
| &emsp;&emsp;capabilitiesBitmask               | 设备联网能力：<br/>1-WAN<br/>2-LAN(WiFi)<br/>3-LAN(WiFi)+WAN<br/>4-BLE<br/>5-WAN+BLE<br/>6-LAN(WiFi)+BLE<br/>7-WAN+LAN(WiFi)+BLE<br/>8-Matter<br/>9-WAN+Matter<br/>10-LAN(WiFi)+Matter<br/>11-LAN(WiFi)+WAN+Matter<br/>12-BLE+Matter<br/>13-WAN+BLE+Matter<br/>14-LAN(WiFi)+BLE+Matter <br/>15-WAN+LAN(WiFi)+BLE+Matter |          | false    | integer(int32) |              |
| &emsp;&emsp;deviceKey                         | Device Key                                                   |          | true     | string         |              |
| &emsp;&emsp;deviceName                        | 设备名称                                                     |          | false    | string         |              |
| &emsp;&emsp;fid                               | 家庭fid                                                      |          | false    | string         |              |
| &emsp;&emsp;frid                              | 房间id                                                       |          | false    | string         |              |
| &emsp;&emsp;isCommonDevice                    | 家居模式下，是否添加到常用设备列表(默认添加)                 |          | false    | boolean        |              |
| &emsp;&emsp;isMatter                          | 是否是matter设备                                             |          | false    | boolean        |              |
| &emsp;&emsp;matterInfo                        | matter信息                                                   |          | false    | matterV2设备   | matterV2设备 |
| &emsp;&emsp;&emsp;&emsp;catList               | catList                                                      |          | false    | array          | CatInfoParam |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cat       | matter 设备 cat 数据                                         |          | false    | integer        |              |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;privilege | View/Operate/Administer                                      |          | false    | string         |              |
| &emsp;&emsp;&emsp;&emsp;discriminator         | 设备标识符号                                                 |          | false    | integer        |              |
| &emsp;&emsp;&emsp;&emsp;extra                 | matter 拓展字段                                              |          | false    | string         |              |
| &emsp;&emsp;&emsp;&emsp;fabricId              | fabricID                                                     |          | false    | integer        |              |
| &emsp;&emsp;&emsp;&emsp;matterProductId       | 产品ID                                                       |          | false    | integer        |              |
| &emsp;&emsp;&emsp;&emsp;matterVendorId        | 供应商ID                                                     |          | false    | integer        |              |
| &emsp;&emsp;&emsp;&emsp;matterVersion         | matterVersion                                                |          | false    | string         |              |
| &emsp;&emsp;&emsp;&emsp;nodeId                | 节点ID                                                       |          | false    | integer        |              |
| &emsp;&emsp;productKey                        | Product Key                                                  |          | true     | string         |              |


**响应状态**:


| 状态码 | 说明                                 | schema                                  |
| ------ | ------------------------------------ | --------------------------------------- |
| 200    | wifi设备绑定成功                     | 返回注册码响应数据«DeviceInfoByBinding» |
| 5009   | 设备验证失败                         |                                         |
| 5032   | token 验证失败                       |                                         |
| 5048   | 设备绑定失败                         |                                         |
| 5049   | 设备已绑定                           |                                         |
| 5066   | 请输入Product Key                    |                                         |
| 5067   | 请输入Device Key                     |                                         |
| 5106   | 请输入token                          |                                         |
| 5179   | 请输入bindingCode                    |                                         |
| 5213   | bindingCode格式不正确                |                                         |
| 5229   | 用户域未授权此产品                   |                                         |
| 5314   | 云平台中设备查询失败                 |                                         |
| 5333   | 设备名称超出长度限制                 |                                         |
| 5361   | dk格式不正确                         |                                         |
| 5412   | 产品绑定模式为唯一模式，不能重复绑定 |                                         |
| 5460   | 未上报bindingCode                    |                                         |
| 5461   | bindingCode已过期                    |                                         |
| 5462   | bindingCode验证失败                  |                                         |
| 5465   | bindingSecret未上报                  |                                         |
| 5879   | 请输入设备标识符号                   |                                         |
| 5880   | 请输入matter设备产品ID               |                                         |
| 5881   | 请输入matter版本号                   |                                         |
| 5882   | 请输入供应商                         |                                         |
| 5883   | 请输入fabricId                       |                                         |
| 5885   | 节点ID不能为空                       |                                         |
| 6083   | 绑定的设备不属于当前数据中心         |                                         |


**响应参数**:


| 参数名称                | 参数说明                                                    | 类型                | schema              |
| ----------------------- | ----------------------------------------------------------- | ------------------- | ------------------- |
| code                    | 响应状态码                                                  | integer(int32)      | integer(int32)      |
| data                    | 响应数据                                                    | DeviceInfoByBinding | DeviceInfoByBinding |
| &emsp;&emsp;authKey     | AuthKey                                                     | string              |                     |
| &emsp;&emsp;bindingMode | 绑定模式：<br/>1 多用户绑定<br/>2 拥有者绑定<br/>3 轮流绑定 | integer(int32)      |                     |
| &emsp;&emsp;productLogo | 产品logo                                                    | string              |                     |
| &emsp;&emsp;productName | 产品名称                                                    | string              |                     |
| extMsg                  | 扩展消息                                                    | string              |                     |
| msg                     | 响应消息                                                    | string              |                     |


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"authKey": "",
		"bindingMode": 0,
		"productLogo": "",
		"productName": ""
	},
	"extMsg": "",
	"msg": ""
}
```
