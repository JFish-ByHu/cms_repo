# 分享人设置设备分享信息


**接口地址**:`/v2/binding/enduserapi/shareInfo`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>分享人设置设备分享信息</p>


**请求参数**:


| 参数名称          | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型       | schema |
| ----------------- | ------------------------------------------------------------ | -------- | -------- | -------------- | ------ |
| acceptingExpireAt | 分享二维码种子失效时间 时间戳（毫秒），表示该分享在此时间戳时间内没有使用，会失效 | query    | true     | integer(int64) |        |
| dk                | Device Key                                                   | query    | true     | string         |        |
| pk                | Product Key                                                  | query    | true     | string         |        |
| authKey           | AuthKey                                                      | query    | false    | string         |        |
| coverMark         | 覆盖标志<br/>1 直接覆盖上条有效分享（默认）（覆盖原有的分享码）<br/>2 直接添加，允许多条并存<br/>3 只有分享时间延长了，才允许覆盖上条分享 | query    | false    | integer(int32) |        |
| sharingExpireAt   | 设备使用到期时间 时间戳（毫秒），表示该分享的设备，被分享人可以使用的时间<br/>如果不填，则为终生有效，只有授权人主动解绑 | query    | false    | integer(int64) |        |


**响应状态**:


| 状态码 | 说明                                           | schema                     |
| ------ | ---------------------------------------------- | -------------------------- |
| 200    | 分享人设置设备分享信息成功                     | 返回注册码响应数据«string» |
| 5032   | token 验证失败                                 |                            |
| 5066   | 请输入Product Key                              |                            |
| 5067   | 请输入Device Key                               |                            |
| 5106   | 请输入token                                    |                            |
| 5132   | 请输入分享二维码种子失效时间                   |                            |
| 5133   | 覆盖标志参数值超出范围                         |                            |
| 5134   | 添加设备分享信息失败                           |                            |
| 5135   | 没有权限分享此设备                             |                            |
| 5145   | 时间戳格式不正确                               |                            |
| 5153   | 设备使用到期时间必须大于分享二维码种子失效时间 |                            |
| 5360   | 不能分享绑定未认证的设备                       |                            |


**响应参数**:


| 参数名称 | 参数说明   | 类型           | schema         |
| -------- | ---------- | -------------- | -------------- |
| code     | 响应状态码 | integer(int32) | integer(int32) |
| data     | 响应数据   | string         |                |
| extMsg   | 扩展消息   | string         |                |
| msg      | 响应消息   | string         |                |


**响应示例**:
```javascript
{
	"code": 0,
	"data": "",
	"extMsg": "",
	"msg": ""
}
```
