# 删除房间


**接口地址**:`/v2/family/enduserapi/deleteFamilyRoom`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>删除房间</p>



**请求示例**:


```javascript
[]
```


**请求参数**:


| 参数名称 | 参数说明   | 请求类型 | 是否必须 | 数据类型 | schema |
| -------- | ---------- | -------- | -------- | -------- | ------ |
| fridList | 房间ID列表 | body     | true     | array    | string |


**响应状态**:


| 状态码 | 说明         | schema                                 |
| ------ | ------------ | -------------------------------------- |
| 200    | 删除房间成功 | 返回注册码响应数据«DeleteFamilyRoomVO» |
| 5637   | 请输入房间ID |                                        |


**响应参数**:


| 参数名称                | 参数说明   | 类型               | schema             |
| ----------------------- | ---------- | ------------------ | ------------------ |
| code                    | 响应状态码 | integer(int32)     | integer(int32)     |
| data                    | 响应数据   | DeleteFamilyRoomVO | DeleteFamilyRoomVO |
| &emsp;&emsp;failureList | 失败列表   | array              | object             |
| &emsp;&emsp;successList | 成功列表   | array              | object             |
| extMsg                  | 扩展消息   | string             |                    |
| msg                     | 响应消息   | string             |                    |


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
