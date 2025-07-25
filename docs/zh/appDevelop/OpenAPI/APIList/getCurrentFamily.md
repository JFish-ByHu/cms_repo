# 查询当前家庭


**接口地址**:`/v2/family/enduserapi/getCurrentFamily`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询当前家庭</p>


**请求参数**:


| 参数名称           | 参数说明       | 请求类型 | 是否必须 | 数据类型 | schema |
| ------------------ | -------------- | -------- | -------- | -------- | ------ |
| currentCoordinates | 当前位置经纬度 | query    | false    | string   |        |
| fid                | 家庭ID         | query    | false    | string   |        |


**响应状态**:


| 状态码 | 说明             | schema                       |
| ------ | ---------------- | ---------------------------- |
| 200    | 查询当前家庭成功 | 返回注册码响应数据«当前家庭» |
| 5041   | 没有权限         |                              |
| 5633   | 经纬度格式错误   |                              |
| 5635   | 未开启家居模式   |                              |


**响应参数**:


| 参数名称                      | 参数说明   | 类型           | schema         |
| ----------------------------- | ---------- | -------------- | -------------- |
| code                          | 响应状态码 | integer(int32) | integer(int32) |
| data                          | 响应数据   | 当前家庭       | 当前家庭       |
| &emsp;&emsp;addTime           | 创建时间   | integer(int64) |                |
| &emsp;&emsp;addTimeTs         | 创建时间戳 | integer(int64) |                |
| &emsp;&emsp;familyCoordinates | 家庭坐标   | string         |                |
| &emsp;&emsp;familyLocation    | 家庭地址   | string         |                |
| &emsp;&emsp;familyName        | 家庭名称   | string         |                |
| &emsp;&emsp;fid               | 家庭ID     | string         |                |
| &emsp;&emsp;memberRole        | 家庭角色   | integer(int32) |                |
| extMsg                        | 扩展消息   | string         |                |
| msg                           | 响应消息   | string         |                |


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
