# 设置房间排序


**接口地址**:`/v2/family/enduserapi/setFamilyRoomSort`


**请求方式**:`PUT`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>设置房间排序</p>



**请求示例**:


```javascript
[
  {
    "frid": "",
    "roomSort": 0
  }
]
```


**请求参数**:


| 参数名称             | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型       | schema       |
| -------------------- | ------------------------------------------------------------ | -------- | -------- | -------------- | ------------ |
| roomSortList         | roomSortList                                                 | body     | true     | array          | 设置房间排序 |
| &emsp;&emsp;frid     | 家庭房间ID                                                   |          | true     | string         |              |
| &emsp;&emsp;roomSort | 房间顺序，从 0 开始累加，数字小的排列在列表前面，可以不连续，不允许相等 |          | true     | integer(int32) |              |


**响应状态**:


| 状态码 | 说明               | schema                                  |
| ------ | ------------------ | --------------------------------------- |
| 200    | 设置房间排序成功   | 返回注册码响应数据«SetFamilyRoomSortVO» |
| 5002   | 请输入房间排序信息 |                                         |
| 5003   | 房间排序失败       |                                         |
| 5007   | 房间序号重复       |                                         |
| 5041   | 没有权限           |                                         |


**响应参数**:


| 参数名称                | 参数说明   | 类型                | schema              |
| ----------------------- | ---------- | ------------------- | ------------------- |
| code                    | 响应状态码 | integer(int32)      | integer(int32)      |
| data                    | 响应数据   | SetFamilyRoomSortVO | SetFamilyRoomSortVO |
| &emsp;&emsp;failureList | 失败列表   | array               | object              |
| &emsp;&emsp;successList | 成功列表   | array               | object              |
| extMsg                  | 扩展消息   | string              |                     |
| msg                     | 响应消息   | string              |                     |


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
