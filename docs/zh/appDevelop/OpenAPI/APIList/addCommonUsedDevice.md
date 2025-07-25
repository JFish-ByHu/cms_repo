# 添加常用设备


**接口地址**:`/v2/family/enduserapi/addCommonUsedDevice`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>添加常用设备</p>



**请求示例**:


```javascript
{
  "deviceList": [
    {
      "dk": "",
      "pk": ""
    }
  ],
  "fid": ""
}
```


**请求参数**:


| 参数名称                   | 参数说明    | 请求类型 | 是否必须 | 数据类型     | schema         |
| -------------------------- | ----------- | -------- | -------- | ------------ | -------------- |
| param                      | param       | body     | true     | 添加常用设备 | 添加常用设备   |
| &emsp;&emsp;deviceList     | 设备列表    |          | true     | array        | 设备类型pk、dk |
| &emsp;&emsp;&emsp;&emsp;dk | Device Key  |          | true     | string       |                |
| &emsp;&emsp;&emsp;&emsp;pk | Product Key |          | true     | string       |                |
| &emsp;&emsp;fid            | 家庭ID      |          | true     | string       |                |


**响应状态**:


| 状态码 | 说明              | schema                                    |
| ------ | ----------------- | ----------------------------------------- |
| 200    | 添加常用设备成功  | 返回注册码响应数据«AddCommonUsedDeviceVO» |
| 5066   | 请输入Product Key |                                           |
| 5067   | 请输入Device Key  |                                           |
| 5618   | 请输入家庭ID      |                                           |
| 5676   | 调用产品服务异常  |                                           |


**响应参数**:


| 参数名称                | 参数说明   | 类型                  | schema                |
| ----------------------- | ---------- | --------------------- | --------------------- |
| code                    | 响应状态码 | integer(int32)        | integer(int32)        |
| data                    | 响应数据   | AddCommonUsedDeviceVO | AddCommonUsedDeviceVO |
| &emsp;&emsp;failureList | 失败列表   | array                 | object                |
| &emsp;&emsp;successList | 成功列表   | array                 | object                |
| extMsg                  | 扩展消息   | string                |                       |
| msg                     | 响应消息   | string                |                       |


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
