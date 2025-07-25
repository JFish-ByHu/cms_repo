# OpenAPI接入说明

SaaS应用相关OpenAPI主要用于SaaS系统对接集成，实现通过SaaS应用进行产品设备管理与远程控制设备。

## 操作步骤

### 前置步骤

1、在使用OpenAPI服务前，需先在SaaS开发->SaaS管理菜单下创建SaaS应用。

2、在SaaS详情->服务页面中开通并授权需要使用的API服务包。授权后才能调用该服务包下的API接口。

3、在SaaS详情->产品页面中授权该SaaS应用可访问的产品数据。授权后才能通过API查询已授权产品下的数据。

4、获取AccessKey与AccessSecret，后续需要使用该参数换取访问Token。

### 系统集成

1、使用登录鉴权API获取访问Token。

接口地址：

| API Address    | https://iot-api.quectelcn.com/v2/quecauth/accessKeyAuthrize/accessKeyLogin |
| -------------- | ------------------------------------------------------------ |
| Request Method | GET                                                          |
| Request Header | content-type: application/json                               |

请求参数:

| **参数**   | **参数类型** | **是否必填** | **参数位置** | **参数描述**                                                 |
| ---------- | ------------ | ------------ | ------------ | ------------------------------------------------------------ |
| grant_type | String       | 是    | Query        | 授权类型，固定值：password                                   |
| username   | String       | 是           | Query        | **username生成规则：**<br>用户名的字段使用key=value的方式组成，各字段使用"&"字符进行拼接，各字段之间没有顺序要求. 在传输时请对用户名字段使用uriencode进行编码<br/>**username格式（AccessKey需替换为您的SaaS应用参数、timestamp替换为当前毫秒级时间戳）：**<br/>ver=1&auth_mode=accessKey&sign_method=sha256&access_key=\${AccessKey}&timestamp=\${timestamp}<br/>**示例：**<br/>ver=1&auth_mode=accessKey&sign_method=sha256&access_key=24b9zicjuns41H6MDg71AMnP&timestamp=1743059249391<br/>**经过uriencode编码后为：**<br/>ver%3D1%26auth_mode%3DaccessKey%26sign_method%3Dsha256%26access_key%3D24b9zicjuns41H6MDg71AMnP%26timestamp%3D1743059249391 |
| password   | String       | 是           | Query        | **password生成规则：**<br/>sha256("\${username}${AccessSecret}")<br/>**示例：**<br/>sha256("ver=1&auth_mode=accessKey&sign_method=sha256&access_key=24b9zicjuns41H6MDg71AMnP&timestamp=17430592493916AE3p2SnA9ShP7ofigrccoeeks8DDoteJ1jUUTEz")<br/>**sha256后为：**<br/>34fe86986230670cba424cadd01ded50f04929de3bfb0b0aef033ccee314fed1 |

响应参数：

| **参数**     | **参数说明**                         | **类型** | schema |
| ------------ | ------------------------------------ | -------- | ------ |
| code         | 响应码 <br>200代表成功，其他为错误码 | object   |        |
| access_token | 成功返回token值                      | string   |        |
| msg          | 提示信息                             | string   |        |
| token_type   | 固定为“jwt”                          | string   |        |
| expire_in    | 过期时间                             | string   |        |

响应状态码:

| **状态码** | **说明**                |
| ---------- | ----------------------- |
| 200        | OK                      |
| 401        | Unauthorized            |
| 403        | Forbidden               |
| 404        | Not Found               |
| 50000      | service exception       |
| 50005      | param check error       |
| 70000      | Hub 服务不可用          |
| 90047      | AccessKey didn't exists |

请求示例：

```Plain
https://iot-api.quectelcn.com/v2/quecauth/accessKeyAuthrize/accessKeyLogin?username=ver%3D1%26auth_mode%3DaccessKey%26sign_method%3Dsha256%26access_key%3D24b9zicjuns41H6MDg71AMnP%26timestamp%3D1743059249391&password=34fe86986230670cba424cadd01ded50f04929de3bfb0b0aef033ccee314fed1&grant_type=password
```

响应示例：

```Plain
成功：
{  
    "msg": "OK",
    "access_token": "QJWT eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyOTQ5NCIsImlhdCI6MTYxODQ3Mjk2MiwianRpIjoiYjVhMmRhNjgtMzI0Ni00ZWRjLWEwZTktOTEyZjdjMDFkMmMzIiwidXR5IjoicGVyIiwiZXhwIjoxNjE4NTU5MzYyLCJhbSI6IkFjY2Vzc0tleSIsInNwIjoiIn0.JUQjUKlaDepazh7JssvRZKDiA1UL83VK8WECj86TI_I", 
    "code": 200, 
    "scope": "", 
    "token_type": "jwt", 
    "expires_in": 86400 
}
失败：
{
    "msg": "AccessKey didn't exists",
    "code": 90047,
    "error": "AccessKey didn't exists"
}
```

备注：Token有效期为2小时，建议SaaS系统每1小时通过刷新token接口换取新的token，从而保证长期有效。

2、请求OpenAPI，以下以获取产品已发布物模型数据接口举例

接口地址：

| API Address    | https://iot-api.quectelcn.com/v2/quectsl/openapi/product/export/tslFile |
| -------------- | ------------------------------------------------------------ |
| Request Method | GET                                                          |
| Request Header | content-type: application/json<br>Authorization: <获取的token> |

请求参数:

| **参数**   | **参数类型** | **是否必填** | **参数位置** | **参数描述**        |
| ---------- | ------------ | ------------ | ------------ | ------------------- |
| productKey | String       | 是           | Query        | 产品key             |
| language   | String       | 否           | Query        | 语言:CN/EN(默认:CN) |

响应参数：

| **参数** | **参数说明** | **类型**   | **schema**    |
| -------- | ------------ | ---------- | ------------- |
| code     | 返回码       | object     |               |
| data     | 对象         | jsonObject | 物模型tsl定义 |
| msg      | 提示信息     | string     |               |
| pageNum  | 当前页数     | object     |               |
| pageSize | 每页数量     | object     |               |
| pages    | 总页数       | object     |               |
| total    | 总数         | object     |               |

响应状态码:

| **状态码** | **说明**                                                     |
| ---------- | ------------------------------------------------------------ |
| 200        | OK                                                           |
| 401        | Unauthorized                                                 |
| 403        | Forbidden                                                    |
| 404        | Not Found                                                    |
| 50000      | service exception                                            |
| 50005      | param check error.                                           |
| 50006      | The productID or productKey is empty.                        |
| 50007      | The deviceID, productKey or deviceKey is empty.              |
| 70000      | Hub 服务不可用                                               |
| 70017      | Product does not exist.                                      |
| 70063      | The device with transparent transmission mode does not support sending TSL model data. |
| 70089      | You have limited permission to operate this project or product or device. |

请求示例：

```Plain
https://iot-api.quectelcn.com/v2/quectsl/openapi/product/export/tslFile?productKey=p11v14
```

响应示例：

```json
{
        "code": 200,
        "msg": "OK",
        "data": {
                "profile": {
                        "tslVersion": "1.2.0",
                        "productKey": "p11v14",
                        "version": "20250324120550539"
                },
                "properties": [{
                        "specs": [{
                                        "dataType": "BOOL",
                                        "name": "开启",
                                        "value": "true"
                                },
                                {
                                        "dataType": "BOOL",
                                        "name": "关闭",
                                        "value": "false"
                                }
                        ],
                        "code": "switch",
                        "dataType": "BOOL",
                        "name": "开关",
                        "subType": "RW",
                        "id": 1,
                        "sort": 1,
                        "type": "PROPERTY",
                        "desc": ""
                }]
        }
}
```

至此已完成在SaaS应用中调用OpenAPI接口流程，更多的OpenAPI请查看[API列表](APIList.md)。

