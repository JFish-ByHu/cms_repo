# 查询设备业务属性


**接口地址**:`/v2/binding/enduserapi/getDeviceBusinessAttributes`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询设备的物模型的值</p>


**请求参数**:


| 参数名称  | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型 | schema |
| --------- | ------------------------------------------------------------ | -------- | -------- | -------- | ------ |
| dk        | Device Key                                                   | query    | true     | string   |        |
| pk        | Product Key                                                  | query    | true     | string   |        |
| codeList  | 要查询的属性标识符<br/>和查询类型配合使用，如果查询多个属性，使用英文逗号分隔 | query    | false    | string   |        |
| gatewayDk | 网关设备的 Device Key                                        | query    | false    | string   |        |
| gatewayPk | 网关设备的 Product Key                                       | query    | false    | string   |        |
| type      | 查询类型<br/>1 查询设备基础属性<br/>2 查询物模型属性<br/>3 查询定位信息<br/>查询类型可以单选和多选，如果需要查询多个类型的属性值，使用英文逗号分隔 | query    | false    | string   |        |


**响应状态**:


| 状态码 | 说明                               | schema                                     |
| ------ | ---------------------------------- | ------------------------------------------ |
| 200    | 查询设备业务属性成功               | 返回注册码响应数据«InnerApiDeviceDetailV2» |
| 5032   | token 验证失败                     |                                            |
| 5041   | 无权限                             |                                            |
| 5047   | 用户鉴权不匹配                     |                                            |
| 5052   | 设备未绑定                         |                                            |
| 5106   | 请输入token                        |                                            |
| 5114   | DMP业务属性查询失败                |                                            |
| 5471   | 请输入要查询的属性标识符的查询类型 |                                            |


**响应参数**:


| 参数名称                                | 参数说明                                             | 类型                   | schema                 |
| --------------------------------------- | ---------------------------------------------------- | ---------------------- | ---------------------- |
| code                                    | 响应状态码                                           | integer(int32)         | integer(int32)         |
| data                                    | 响应数据                                             | InnerApiDeviceDetailV2 | InnerApiDeviceDetailV2 |
| &emsp;&emsp;customizeTslInfo            | 自定义物模型数据上报列表                             | array                  | 自定义物模型数据       |
| &emsp;&emsp;&emsp;&emsp;abId            | 功能ID                                               | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;dataType        | 数据类型                                             | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;name            | 功能名称                                             | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;resourceCode    | 功能标识符                                           | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;resourceValce   | 功能值                                               | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;subType         | 数据操作类型                                         | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;type            | 功能类型                                             | string                 |                        |
| &emsp;&emsp;deviceData                  | 资源物模型数据列表(电量、电压等。设备上报，才有数据) | 设备资源数据           | 设备资源数据           |
| &emsp;&emsp;&emsp;&emsp;battery         | 电池电量                                             | number                 |                        |
| &emsp;&emsp;&emsp;&emsp;cellId          | 基站id                                               | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;comProtocolVer  | 通信协议版本                                         | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;dataProtocolVer | 数据协议版本                                         | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;deviceKey       | Device Key                                           | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;iccid           | ICCID号                                              | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;lac             | 位置区代码                                           | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;locator         | 定位支持功能                                         | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;mcc             | 移动国家代码                                         | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;mcuVersion      | MCU版本                                              | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;memoryFree      | 剩余空间                                             | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;mnc             | 移动网络代码                                         | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;phoneNum        | phone号                                              | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;productKey      | Product Key                                          | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;rsrp            | 参考信号接收功率                                     | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;rsrq            | LTE参考信号接收质量                                  | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;sdkVersion      | SDK版本                                              | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;signalStrength  | 信号强度                                             | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;sim             | SIM号                                                | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;snr             | 信号与干扰加噪声比                                   | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;type            | 模组型号                                             | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;version         | 模组版本                                             | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;voltage         | 电压                                                 | number                 |                        |
| &emsp;&emsp;deviceLocateInfo            | 设备定位信息数据                                     | QdLocationLatest       | QdLocationLatest       |
| &emsp;&emsp;&emsp;&emsp;createTime      | 创建时间                                             | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;createTimeTs    |                                                      | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;deviceKey       | 设备key                                              | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;hdop            | 水平精度因子                                         | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;lat             | 维度                                                 | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;latType         | 纬度半球 N/S                                         | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;lng             | 经度                                                 | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;lngType         | 经度半球 W/E                                         | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;locateRaw       | 原始数据                                             | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;locateStatus    | 差分定位/非差分定位                                  | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;locateTime      | 定位时间                                             | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;locateTimeTs    |                                                      | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;locateType      | 定位类型                                             | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;productKey      | 产品key                                              | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;satellites      | 当前卫星数                                           | string                 |                        |
| extMsg                                  | 扩展消息                                             | string                 |                        |
| msg                                     | 响应消息                                             | string                 |                        |


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"customizeTslInfo": [
			{
				"abId": 0,
				"dataType": "",
				"name": "",
				"resourceCode": "",
				"resourceValce": "",
				"subType": "",
				"type": ""
			}
		],
		"deviceData": {
			"battery": 0,
			"cellId": 0,
			"comProtocolVer": "",
			"dataProtocolVer": "",
			"deviceKey": "",
			"iccid": "",
			"lac": 0,
			"locator": "",
			"mcc": 0,
			"mcuVersion": "",
			"memoryFree": 0,
			"mnc": 0,
			"phoneNum": "",
			"productKey": "",
			"rsrp": 0,
			"rsrq": 0,
			"sdkVersion": "",
			"signalStrength": 0,
			"sim": "",
			"snr": 0,
			"type": "",
			"version": "",
			"voltage": 0
		},
		"deviceLocateInfo": {
			"createTime": "",
			"createTimeTs": 0,
			"deviceKey": "",
			"hdop": "",
			"lat": "",
			"latType": "",
			"lng": "",
			"lngType": "",
			"locateRaw": "",
			"locateStatus": "",
			"locateTime": "",
			"locateTimeTs": 0,
			"locateType": "",
			"productKey": "",
			"satellites": ""
		}
	},
	"extMsg": "",
	"msg": ""
}
```
