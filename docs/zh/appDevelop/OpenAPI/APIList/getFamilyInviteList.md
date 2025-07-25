# 查询被邀请列表


**接口地址**:`/v2/family/enduserapi/getFamilyInviteList`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询被邀请列表</p>


**请求参数**:


| 参数名称 | 参数说明              | 请求类型 | 是否必须 | 数据类型       | schema |
| -------- | --------------------- | -------- | -------- | -------------- | ------ |
| page     | 当前页，默认为第 1 页 | query    | false    | integer(int32) |        |
| pageSize | 页大小，默认为 10 条  | query    | false    | integer(int32) |        |


**响应状态**:


| 状态码 | 说明               | schema             |
| ------ | ------------------ | ------------------ |
| 200    | 查询被邀请列表成功 | 返回注册码响应数据 |


**响应参数**:


| 参数名称 | 参数说明   | 类型           | schema         |
| -------- | ---------- | -------------- | -------------- |
| code     | 响应状态码 | integer(int32) | integer(int32) |
| data     | 响应数据   | object         |                |
| extMsg   | 扩展消息   | string         |                |
| msg      | 响应消息   | string         |                |


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"extMsg": "",
	"msg": ""
}
```
