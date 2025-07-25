# 查询用户家居模式配置

**接口地址**:`/v2/family/enduserapi/getFamilyModeConfig`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询用户的家居模式配置</p>


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明                       | schema                               |
| ------ | -------------------------- | ------------------------------------ |
| 200    | 查询用户的家居模式配置成功 | 返回注册码响应数据«家居模式配置返回» |


**响应参数**:


| 参数名称                      | 参数说明         | 类型             | schema           |
| ----------------------------- | ---------------- | ---------------- | ---------------- |
| code                          | 响应状态码       | integer(int32)   | integer(int32)   |
| data                          | 响应数据         | 家居模式配置返回 | 家居模式配置返回 |
| &emsp;&emsp;enabledAutoSwitch | 是否启用自动切换 | boolean          |                  |
| &emsp;&emsp;enabledFamilyMode | 是否启用家居模式 | boolean          |                  |
| extMsg                        | 扩展消息         | string           |                  |
| msg                           | 响应消息         | string           |                  |


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"enabledAutoSwitch": true,
		"enabledFamilyMode": true
	},
	"extMsg": "",
	"msg": ""
}
```
