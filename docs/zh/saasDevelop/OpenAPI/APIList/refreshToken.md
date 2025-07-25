# 刷新token


**接口地址**:`/v2/quecauth/accessKeyAuthrize/refreshToken`


**请求方式**:`GET`


**请求数据类型**:`application/json`

**响应数据类型**:`*/*`

**接口描述**:

● 如果 token 在 30 分钟之内刚刷新过或创建时间在 30 分钟以内，返回原 token；<br>
● 如果用户、AccessKey 被禁用则刷新失败，并禁用原 token。

**请求参数**:


| 参数名称                         | 参数说明                                      | 请求类型 | 是否必须 | 数据类型         | schema           |
| -------------------------------- | --------------------------------------------- | -------- | -------- | ---------------- | ---------------- |
| refresh_token                    | 需要刷新的 token               | query | true     | String |  |
| grant_type           | 授权类型，固定为 refresh_token        | query | true     | String      |          |
| scope | 授权范围，此值为空时代表申请所有的功能范围，多个 scope 时使用空格分离，例如：userinfo tls ota | query | false    | String    |                  |


**响应参数**:


| 参数名称     | 参数说明                          | 类型   | schema |
| ------------ | --------------------------------- | ------ | ------ |
| code         | 错误码 200 代表成功，其他为错误码 | int    |        |
| msg          | 结果信息，成功返回“OK”            | String |        |
| access_token | 成功返回 token 值                 | String |        |
| token_type   | 固定为“jwt”                       | String |        |
| expire_in    | 过期时间                          | String |        |

**响应示例**:

```javascript
{
  "msg": "",
  "access_token": "QJWT eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyOTQ5NCIsImlhdCI6MTYxODQ3Mjk2MiwianRpIjoiYjVhMmRhNjgtMzI0Ni00ZWRjLWEwZTktOTEyZjdjMDFkMmMzIiwidXR5IjoicGVyIiwiZXhwIjoxNjE4NTU5MzYyLCJhbSI6IkFjY2Vzc0tleSIsInNwIjoiIn0.JUQjUKlaDepazh7JssvRZKDiA1UL83VK8WECj86TI_I",
  "code": 200,
  "scope": "userinfo",
  "token_type": "jwt",
  "expires_in": 86400
}
```
