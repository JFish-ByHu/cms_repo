# 移入设备到房间


**接口地址**:`/v2/family/enduserapi/addDeviceInFamilyRoom`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>移入设备到房间</p>



**请求示例**:


```javascript
[
  {
    "dk": "",
    "newFrid": "",
    "oldFrid": "",
    "pk": ""
  }
]
```


**请求参数**:


| 参数名称            | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型 | schema         |
| ------------------- | ------------------------------------------------------------ | -------- | -------- | -------- | -------------- |
| param               | param                                                        | body     | true     | array    | 移入设备到房间 |
| &emsp;&emsp;dk      | Device Key                                                   |          | true     | string   |                |
| &emsp;&emsp;newFrid | 设备要移入的新家庭房间ID                                     |          | true     | string   |                |
| &emsp;&emsp;oldFrid | 设备之前所在的家庭房间ID，如果是从家庭的常用设备列表中将设备移入房间，此参数可以为空 |          | false    | string   |                |
| &emsp;&emsp;pk      | Product Key                                                  |          | true     | string   |                |


**响应状态**:


| 状态码 | 说明                         | schema                                |
| ------ | ---------------------------- | ------------------------------------- |
| 200    | 删除房间成功                 | 返回注册码响应数据«AddDeviceInRoomVO» |
| 5637   | 请输入房间ID                 |                                       |
| 5663   | 设备的移出房间不能是移入房间 |                                       |


**响应参数**:


| 参数名称                | 参数说明   | 类型              | schema            |
| ----------------------- | ---------- | ----------------- | ----------------- |
| code                    | 响应状态码 | integer(int32)    | integer(int32)    |
| data                    | 响应数据   | AddDeviceInRoomVO | AddDeviceInRoomVO |
| &emsp;&emsp;failureList | 失败列表   | array             | object            |
| &emsp;&emsp;successList | 成功列表   | array             | object            |
| extMsg                  | 扩展消息   | string            |                   |
| msg                     | 响应消息   | string            |                   |


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"failureList": [],
		"successList": []
	},
	"extMsg": "",
	"msg": ""
}
```
