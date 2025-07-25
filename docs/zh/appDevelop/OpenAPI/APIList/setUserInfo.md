# 修改用户信息


**接口地址**:`/v2/enduser/enduserapi/setUserInfo`


**请求方式**:`PUT`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>用户信息修改</p>


**请求参数**:


| 参数名称    | 参数说明                 | 请求类型 | 是否必须 | 数据类型       | schema |
| ----------- | ------------------------ | -------- | -------- | -------------- | ------ |
| address     | 地址                     | query    | false    | string         |        |
| city        | 城市                     | query    | false    | string         |        |
| headImage   | 头像                     | query    | false    | string         |        |
| lang        | 语言                     | query    | false    | integer(int32) |        |
| nationality | 国家                     | query    | false    | integer(int32) |        |
| nikeName    | 昵称                     | query    | false    | string         |        |
| province    | 省份                     | query    | false    | string         |        |
| remark      | 备注                     | query    | false    | string         |        |
| sex         | 性别 0：男 1：女 2：保密 | query    | false    | integer(int32) |        |
| signature   | 个性签名                 | query    | false    | string         |        |
| timezone    | 时区                     | query    | false    | integer(int32) |        |


**响应状态**:


| 状态码 | 说明                                 | schema             |
| ------ | ------------------------------------ | ------------------ |
| 200    | 用户信息修改成功                     | 返回注册码响应数据 |
| 5032   | token 验证失败                       |                    |
| 5034   | 用户信息格式验证失败                 |                    |
| 5042   | 用户信息修改失败                     |                    |
| 5060   | 用户昵称长度不能超过 50 个字符       |                    |
| 5061   | 性别不合法，性别 0：男 1：女 2：保密 |                    |
| 5076   | 地址长度不能超过 254 个字符          |                    |
| 5473   | 省份参数值超出长度限制               |                    |
| 5474   | 城市参数值超出长度限制               |                    |
| 5475   | 个性签名参数值超出长度限制           |                    |
| 5476   | 备注参数值超出长度限制               |                    |


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
