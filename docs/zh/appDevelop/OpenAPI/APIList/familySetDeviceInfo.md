# 设置设备信息


**接口地址**:`/v2/family/enduserapi/setDeviceInfo`


**请求方式**:`PUT`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>设置设备信息</p>



**请求示例**:


```javascript
[
  {
    "deviceName": "",
    "dk": "",
    "fid": "",
    "isCommonUsed": true,
    "newFrid": "",
    "oldFrid": "",
    "pk": "",
    "shareCode": ""
  }
]
```


**请求参数**:


| 参数名称                 | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型 | schema           |
| ------------------------ | ------------------------------------------------------------ | -------- | -------- | -------- | ---------------- |
| params                   | params                                                       | body     | true     | array    | 编辑设备信息参数 |
| &emsp;&emsp;deviceName   | 设备名称                                                     |          | false    | string   |                  |
| &emsp;&emsp;dk           | Device Key                                                   |          | true     | string   |                  |
| &emsp;&emsp;fid          | 家庭ID，设置常用设备时必填（修改家庭设备名称时可填可不填，建议填写，可以加快接口访问速度） |          | false    | string   |                  |
| &emsp;&emsp;isCommonUsed | 是否常用：true-常用，false-不是常用                          |          | false    | boolean  |                  |
| &emsp;&emsp;newFrid      | 移入房间ID                                                   |          | false    | string   |                  |
| &emsp;&emsp;oldFrid      | 移出房间ID                                                   |          | false    | string   |                  |
| &emsp;&emsp;pk           | Product Key                                                  |          | true     | string   |                  |
| &emsp;&emsp;shareCode    | 分享码，如果是修改接受分享设备的名称，分享码必填             |          | false    | string   |                  |


**响应状态**:


| 状态码 | 说明             | schema                              |
| ------ | ---------------- | ----------------------------------- |
| 200    | 设置设备信息成功 | 返回注册码响应数据«SetDeviceInfoVO» |
| 5041   | 没有权限         |                                     |
| 5635   | 未开启家居模式   |                                     |


**响应参数**:


| 参数名称                | 参数说明   | 类型            | schema          |
| ----------------------- | ---------- | --------------- | --------------- |
| code                    | 响应状态码 | integer(int32)  | integer(int32)  |
| data                    | 响应数据   | SetDeviceInfoVO | SetDeviceInfoVO |
| &emsp;&emsp;failureList | 失败列表   | array           | object          |
| &emsp;&emsp;successList | 成功列表   | array           | object          |
| extMsg                  | 扩展消息   | string          |                 |
| msg                     | 响应消息   | string          |                 |


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
