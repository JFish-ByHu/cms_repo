# 创建家庭


**接口地址**:`/v2/family/enduserapi/addFamily`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>创建家庭</p>



**请求示例**:


```javascript
{
  "familyCoordinates": "",
  "familyLocation": "",
  "familyName": "",
  "familyRoomList": []
}
```


**请求参数**:


| 参数名称                      | 参数说明     | 请求类型 | 是否必须 | 数据类型 | schema   |
| ----------------------------- | ------------ | -------- | -------- | -------- | -------- |
| addFamilyDto                  | addFamilyDto | body     | true     | 创建家庭 | 创建家庭 |
| &emsp;&emsp;familyCoordinates | 家庭经纬度   |          | false    | string   |          |
| &emsp;&emsp;familyLocation    | 家庭位置     |          | false    | string   |          |
| &emsp;&emsp;familyName        | 家庭名称     |          | true     | string   |          |
| &emsp;&emsp;familyRoomList    | 房间列表     |          | false    | array    | string   |


**响应状态**:


| 状态码 | 说明                                      | schema                               |
| ------ | ----------------------------------------- | ------------------------------------ |
| 200    | 家庭创建成功                              | 返回注册码响应数据«创建家庭返回信息» |
| 5613   | 请输入家庭名称                            |                                      |
| 5616   | 家庭名称已存在                            |                                      |
| 5619   | 家庭创建失败                              |                                      |
| 5620   | 房间创建失败                              |                                      |
| 5632   | 初始化家庭常用设备列表失败                |                                      |
| 5633   | 经纬度格式错误                            |                                      |
| 5635   | 未开启家居模式                            |                                      |
| 5641   | 房间名称超长，请输入30个字以内的房间名称  |                                      |
| 5659   | 家庭名称超长，请输入256字符以内的家庭名称 |                                      |
| 5660   | 家庭地址超长，请输入256字符以内的家庭名称 |                                      |
| 5673   | 房间名称重复                              |                                      |
| 5676   | 调用产品服务异常                          |                                      |


**响应参数**:


| 参数名称                      | 参数说明                                   | 类型             | schema           |
| ----------------------------- | ------------------------------------------ | ---------------- | ---------------- |
| code                          | 响应状态码                                 | integer(int32)   | integer(int32)   |
| data                          | 响应数据                                   | 创建家庭返回信息 | 创建家庭返回信息 |
| &emsp;&emsp;addTime           | 添加时间                                   | integer(int64)   |                  |
| &emsp;&emsp;addTimeTs         | 添加时间时间戳                             | integer(int64)   |                  |
| &emsp;&emsp;familyCoordinates | 家庭经纬度                                 | string           |                  |
| &emsp;&emsp;familyLocation    | 家庭位置                                   | string           |                  |
| &emsp;&emsp;familyName        | 家庭名称                                   | string           |                  |
| &emsp;&emsp;fid               | 家庭ID                                     | string           |                  |
| &emsp;&emsp;memberRole        | 用户角色 1：创建者  2：管理员  3：普通用户 | integer(int32)   |                  |
| extMsg                        | 扩展消息                                   | string           |                  |
| msg                           | 响应消息                                   | string           |                  |


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"addTime": 0,
		"addTimeTs": 0,
		"familyCoordinates": "",
		"familyLocation": "",
		"familyName": "",
		"fid": "",
		"memberRole": 0
	},
	"extMsg": "",
	"msg": ""
}
```
