# 邀请家庭成员


**接口地址**:`/v2/family/enduserapi/inviteFamilyMember`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>邀请家庭成员</p>


**请求参数**:


| 参数名称    | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型          | schema |
| ----------- | ------------------------------------------------------------ | -------- | -------- | ----------------- | ------ |
| fid         | 家庭id                                                       | query    | true     | string            |        |
| invalidTime | 邀请失效时间，毫秒时间戳                                     | query    | true     | integer(int64)    |        |
| memberName  | 成员名称                                                     | query    | true     | string            |        |
| memberRole  | 家庭成员角色：<br/>1-家庭创建者，只有在自己创建的家庭中会拥有此角色<br/>2-家庭管理员<br/>3-家庭普通成员 | query    | true     | integer(int32)    |        |
| acceptTime  | 接受邀请时间                                                 | query    | false    | string(date-time) |        |
| email       | 被邀请人邮箱                                                 | query    | false    | string            |        |
| inviteTime  | 邀请时间                                                     | query    | false    | string(date-time) |        |
| phone       | 被邀请人手机号                                               | query    | false    | string            |        |
| uid         | 被邀请人uid                                                  | query    | false    | string            |        |


**响应状态**:


| 状态码 | 说明                                      | schema             |
| ------ | ----------------------------------------- | ------------------ |
| 200    | 邀请家庭成员成功                          | 返回注册码响应数据 |
| 5019   | 手机号格式不正确                          |                    |
| 5145   | 时间戳格式不正确                          |                    |
| 5636   | 请输入家庭ID                              |                    |
| 5638   | 普通成员没有权限                          |                    |
| 5645   | 请输入成员角色                            |                    |
| 5646   | 请输入失效时间                            |                    |
| 5647   | 失效时间不能小于当前时间                  |                    |
| 5648   | 请输入成员名称                            |                    |
| 5649   | 成员名称超长，请输入256字符以内的成员名称 |                    |
| 5650   | 成员名称已存在，请重新输入                |                    |
| 5651   | 请输入被邀请用户信息                      |                    |
| 5653   | 用户已被邀请，请勿重复邀请                |                    |


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
