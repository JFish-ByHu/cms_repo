# OpenAPI接入说明

App应用相关OpenAPI主要用于App集成平台功能，实现通过App应用进行设备数据查看与远程控制。

## 操作步骤

### 前置步骤

1、在使用OpenAPI服务前，需先在App开发->App SDK菜单下创建App应用。

2、在App应用列表->关联产品页面中授权该App应用可访问的产品数据。授权后才能发现和绑定已授权的产品设备。

3、在App详情页面中获取用户域与用户域密码，后续需要使用该参数换取访问Token。

### App集成

1、获取短信验证码，用于注册App用户。

接口地址：

| API Address    | https://iot-api.quectelcn.com/v2/sms/enduserapi/v2/sendPhoneSmsCode |
| -------------- | ------------------------------------------------------------ |
| Request Method | POST                                                         |

请求参数:

| **参数**          | **参数类型** | **是否必填** | **参数位置** | **参数描述**                                                 |
| ----------------- | ------------ | ------------ | ------------ | ------------------------------------------------------------ |
| code_type         | int32        | 是           | Query        | 短信类型，可传入以下场景1-密码重置2-登录3-注册4-注销5-添加推送人 |
| internationalCode | String       | 是           | Query        | 国际代码，例如中国大陆填入86                                 |
| phone             | String       | 是           | Query        | 手机号码                                                     |
| random            | String       | 是           | Query        | 随机数，长度固定为16的随机字符串                             |
| ts                | int64        | 是           | Query        | 当前毫秒级时间戳，与服务器时间不能超过 10 分钟               |
| userDomain        | String       | 是           | Query        | 用户域                                                       |
| signature         | String       | 是           | Query        | **签名生成规则：**<br />SHA256(phone + codeType + random + ts + userDomainSecret)<br/>经过SHA256编码后的数据使用HEX_ENCODE格式。<br />**示例**<br />phone：13800138000<br />codeType：3<br/>random：76a6L647F02CAoN9<br/>ts：1744773894369<br/>userDomainSecret：57Fk69oYgbs2aWWN362NtZwYB2RqKNqQ7yZESnF5VM33<br/>**签名格式：**<br/>SHA256(13800138000376a6L647F02CAoN9174477389436957Fk69oYgbs2aWWN362NtZwYB2RqKNqQ7yZESnF5VM33)<br/>**计算后得出签名：**<br/>e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855 |

响应参数：

| **参数** | **参数说明**                     | **类型** | schema |
| -------- | -------------------------------- | -------- | ------ |
| code     | 错误码 200代表成功，其他为错误码 | object   |        |
| data     | 成功返回token值                  | string   |        |
| extMsg   | 扩展信息                         | string   |        |
| msg      | 响应信息                         | string   |        |

响应状态码:

| **状态码** | **说明** |
| ---------- | -------- |
| 200        | OK       |

请求示例：

```Plain
curl -X 'POST' \
  'https://iot-api.quectelcn.com/v2/sms/enduserapi/v2/sendPhoneSmsCode?codeType=3&internationalCode=86&phone=17132136550&random=76a6L647F02CAoN9&signature=2deb6518ca0ee701e28a6359a91270c59dbe69456a3336dc5f625bfa32e64df6&ts=1744773894369&userDomain=C.DM.10271.5' \
  -H 'accept: */*' \
  -d ''
```

示例中使用的 userDomainSecret 为 57Fk69oYgbs2aWWN362NtZwYB2RqKNqQ7yZESnF5VM22

响应示例：

```Plain
成功：
{
  "code": 200,
  "msg": "",
  "data": null,
  "extMsg": null
}
失败：
{
    "code": 5420,
    "msg": "签名验证失败",
    "data": null,
    "extMsg": null
}
```

2、通过手机号注册用户

接口地址：

| API Address    | https://iot-api.quectelcn.com/v2/enduser/enduserapi/v2/phonePwdRegister |
| -------------- | ------------------------------------------------------------ |
| Request Method | POST                                                         |

请求参数:

| **参数**                        | **参数类型** | **是否必填** | **参数位置** | **参数描述**                                                 |
| ------------------------------- | ------------ | ------------ | ------------ | ------------------------------------------------------------ |
| internationalCode               | String       | 否           | Body         | 国际代码，默认为国内                                         |
| phone                           | String       | 是           | Body         | 手机号码                                                     |
| random                          | String       | 否           | Body         | 用来对密码加密和解密的随机数。                               |
| pwd                             | String       | 是           | Body         | 密码<br>**密码加密解密规则：**<br>AES128(pwd,MD5(random),初始向量)。<br/>**AES加密约定：**<br/>加密模式：CBC<br/>填充：PKCS5Padding<br/>数据块位数：128位<br/>内容：pwd<br/>AES秘钥：MD5(random) ，MD5(random) 生成 16B 大写字符串（截取 32 长度 MD5 字符串的 8-24 部分）<br/>初始向量：将生成的AES密码（MD5(random)）拆分成长度为 8B 的两组字节数据，前后对调后加在一起生成新的 16B 字节数据作为偏移量<br/>输出：BASE64<br/>字符集：utf-8<br/>**示例：**<br/>pwd：china1234<br/>random：j1acpdj2bmtqZXVb<br/>AES key：89A049614445CCA8<br/>AES iv：4445CCA889A04961<br/>加密后：lkZMvj0KDSJXlp66jBieHA==<br/>解密后：china1234 |
| smsCode                         | String       | 是           | Body         | 短信验证码（由短信服务提供发送短信验证码接口）               |
| userDomain                      | String       | 是           | Body         | 用户域                                                       |
| agreementList                   | List         | 是           | Body         | 协议                                                         |
| agreementList[0].protocolType   | Integer      | 是           | Body         | 协议类型（1隐私政策、2服务协议）                             |
| agreementList[0].privacyVersion | String       | 是           | Body         | 协议版本                                                     |

响应参数：

| **参数** | **参数说明**                     | **类型** | schema |
| -------- | -------------------------------- | -------- | ------ |
| code     | 错误码 200代表成功，其他为错误码 | object   |        |
| data     | 成功返回token值                  | Object   |        |
| data.uid | 用户ID                           | String   |        |
| extMsg   | 扩展信息                         | string   |        |
| msg      | 响应信息                         | string   |        |

响应状态码:

| **状态码** | **说明** |
| ---------- | -------- |
| 200        | OK       |

请求示例：

```Plain
curl -X 'POST' \
  'https://iot-api.quectelcn.com/v2/enduser/enduserapi/v2/phonePwdRegister' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{"agreementList":[{"privacyVersion":"1.0.0","protocolType":1},{"privacyVersion":"1.0.0","protocolType":2}],"internationalCode":"86","phone":"17132136550","pwd":"KbbO5AsWloh9gulLei6NhQ==","random":"abcdef","smsCode":"606754","userDomain":"C.DM.10271.5"}'
```

响应示例：

```Plain
成功：
{
    "code":200,
    "msg":"",
    "data":{
        "uid":"C1"
    },
    "extMsg":null
}
失败：
{
  "code": 5037,
  "msg": "短信验证码验证失败",
  "data": null,
  "extMsg": null
}
```

3、注册成功后登录账号获取用户token

接口地址：

| API Address    | https://iot-api.quectelcn.com/v2/enduser/enduserapi/phonePwdLogin |
| -------------- | ------------------------------------------------------------ |
| Request Method | POST                                                         |

请求参数:

| **参数**          | **参数类型** | **是否必填** | **参数位置** | **参数描述**                                                 |
| ----------------- | ------------ | ------------ | ------------ | ------------------------------------------------------------ |
| internationalCode | String       | 否           | Query        | 国际代码，默认为国内                                         |
| **phone**         | String       | 是           | Query        | 手机号码                                                     |
| random            | String       | 否           | Query        | 用来对密码加密和解密的随机数。                               |
| **pwd**           | String       | 是           | Query        | 密码<br/>**密码加密解密规则：**<br/>AES128(pwd,MD5(random),初始向量)。<br/>**AES加密约定：**<br/>加密模式：CBC<br/>填充：PKCS5Padding<br/>数据块位数：128位<br/>内容：pwd<br/>AES秘钥：MD5(random) ，MD5(random) 生成 16B 大写字符串（截取 32 长度 MD5 字符串的 8-24 部分）<br/>初始向量：将生成的AES密码（MD5(random)）拆分成长度为 8B 的两组字节数据，前后对调后加在一起生成新的 16B 字节数据作为偏移量<br/>输出：BASE64<br/>字符集：utf-8<br/>**示例：**<br/>pwd：china1234<br/>random：j1acpdj2bmtqZXVb<br/>AES key：89A049614445CCA8<br/>AES iv：4445CCA889A04961<br/>加密后：lkZMvj0KDSJXlp66jBieHA==<br/>解密后：china1234 |
| **userDomain**    | String       | 是           | Query        | 用户域                                                       |
| **signature**     | String       | 是           | Query        | 签名签名生成规则：SHA256(internationalCode+phone+pwd+random+userDomainSecret) |

响应参数：

| **参数**                         | **参数说明**                                             | **类型** | schema |
| -------------------------------- | -------------------------------------------------------- | -------- | ------ |
| code                             | 错误码 200代表成功，其他为错误码                         | object   |        |
| data                             | 成功返回token值                                          | Object   |        |
| data.accessToken                 | 访问token                                                | Object   |        |
| data.accessToken.expirationTime  | 到期时间的时间戳，单位为秒。超过到期时间后，token 失效。 | Long     |        |
| data.accessToken.token           | token                                                    | String   |        |
| data.refreshToken                | 刷新token                                                | Object   |        |
| data.refreshToken.expirationTime | 到期时间的时间戳，单位为秒。超过到期时间后，token 失效。 | Long     |        |
| data.refreshToken.token          | token                                                    | String   |        |
| extMsg                           | 扩展信息                                                 | string   |        |
| msg                              | 响应信息                                                 | string   |        |

响应状态码:

| **状态码** | **说明** |
| ---------- | -------- |
| 200        | OK       |

请求示例：

```Plain
curl -X 'POST' \
  'https://iot-api.quectelcn.com/v2/enduser/enduserapi/phonePwdLogin?internationalCode=86&phone=17132136550&pwd=KbbO5AsWloh9gulLei6NhQ%3D%3D&random=abcdef&signature=1fd91ebf096be51dae1c6055bc930bd8e24b1f477d2a47ae87eedb0f73057bf0&userDomain=C.DM.10271.5' \
  -H 'accept: */*' \
  -d ''
```

示例中使用的 userDomainSecret 为 57Fk69oYgbs2aWWN362NtZwYB2RqKNqQ7yZESnF5VM22

响应示例：

```Plain
成功：
{
  "code": 200,
  "msg": "",
  "data": {
    "accessToken": {
      "token": "Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJlbmR1c2VyIiwiYXVkIjoiQXVkaWVuY2UiLCJleHAiOjE3NDQ3ODc3ODYsImp0aSI6ImR2SXRGcjRJdW9IaVhKSmNCdjFTNkEiLCJpYXQiOjE3NDQ3ODA1ODYsIm5iZiI6MTc0NDc4MDQ2Niwic3ViIjoic3ViamVjdCIsInVpZCI6IkMxMzEzNjIiLCJ0eXBlIjoiQWNjZXNzVG9rZW4ifQ.Zwt52dXiZZhL0jRC9LzOGUFlBAbb2tVyM9a8fTXOEmV2TREvHf7HjYxTh26JznhRtJJm1XHOlvvPbjhwI9y2jXyDkFMcWjn9X91z-36Fd2WSH4YLjDahGTq6zNBSIoLAmwJjY7AYEDhw8ytGIyUOhCnRzTNUV8lHs6g72f5hVTZXEx97GSR6VxWRLOtEtyvOD6mcD4YEWWbtFNXl8vrQQYxq58Q4sWmM4nRTECYDMeda6SCIMPjUjZpFLmGYwZk184jz5pGw6ufFkA4Cj7QYMdcVmz7MQ5PaWx49w2Ze3TwTZPbwwpPhxffQPWS0Vvm7PxSHM07nSlLO9TZlDoepvA",
      "expirationTime": 1744787786
    },
    "refreshToken": {
      "token": "Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJlbmR1c2VyIiwiYXVkIjoiQXVkaWVuY2UiLCJleHAiOjE3NDczNzI1ODYsImp0aSI6Ijc0UEJIdEt5UmRidVdwVlFsNENGVEEiLCJpYXQiOjE3NDQ3ODA1ODYsIm5iZiI6MTc0NDc4MDQ2Niwic3ViIjoic3ViamVjdCIsInVpZCI6IkMxMzEzNjIiLCJ0eXBlIjoiUmVmcmVzaFRva2VuIn0.aB3FMr4IeDInhq-fVMjy032kad2WZhoqTLwwiXycTZpv9a3aed5TRZouYUjVKmE8I2ueB3gkPWLrVVjJzq0hzitSQz3NYk0aNtYJDGzdt7MC2BxEPMz8hEOr8Qz8bxHbnl3DFR1oYuwBcc7ZxG_yvqb4iG-zqwE3VyCeZo0Q_6YvS-ZszgQe0GPU5s9R1ktMXf7Dc23EOrgVr6nyU595GNK75qXG7Gurl0gMyoLGwJ0KPppj-jfPi0G4zn49zuoBWX--6Q3D4mMWRldH5OBFw19VNvulVzdcInfDjKi0E9SkfsBBxPLmSstbgjQ2gncfw2t6MnEP57_KKS9vdZQ21w",
      "expirationTime": 1747372586
    }
  },
  "extMsg": null
}
失败：
{
  "code": 5420,
  "msg": "签名验证失败",
  "data": null,
  "extMsg": null
}
```

4、使用token调用查询当前账号下已绑定设备列表

接口地址：

| API Address    | https://iot-api.quectelcn.com/v2/enduser/enduserapi/phonePwdLogin |
| -------------- | ------------------------------------------------------------ |
| Request Method | POST                                                         |

请求参数:

| **参数**   | **参数类型** | **是否必填** | **参数位置** | **参数描述**                           |
| ---------- | ------------ | ------------ | ------------ | -------------------------------------- |
| pkList     | String       | 否           | Query        | Product Key 列表，多个使用英文逗号分隔 |
| dk         | String       | 否           | Query        | Device Key                             |
| deviceName | String       | 否           | Query        | 设备名称                               |
| page       | Integer      | 否           | Query        | 当前页，默认为第 1 页                  |
| pageSize   | Integer      | 否           | Query        | 页大小，默认为 10 条                   |

响应参数：

| **参数** | **参数说明**                     | **类型** | schema |
| -------- | -------------------------------- | -------- | ------ |
| code     | 错误码 200代表成功，其他为错误码 | object   |        |
| data     | 设备列表                         | Object   |        |
| extMsg   | 扩展信息                         | string   |        |
| msg      | 响应信息                         | string   |        |

响应状态码:

| **状态码** | **说明** |
| ---------- | -------- |
| 200        | OK       |

请求示例：

```Plain
curl -X 'GET' \
  'https://iot-api.quectelcn.com/v2/binding/enduserapi/userDeviceList' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJlbmR1c2VyIiwiYXVkIjoiQXVkaWVuY2UiLCJleHAiOjE3NDQ3ODgxNTEsImp0aSI6ImtJQ0xZSWpBOXRsN1VpRXY4WFplN1EiLCJpYXQiOjE3NDQ3ODA5NTEsIm5iZiI6MTc0NDc4MDgzMSwic3ViIjoic3ViamVjdCIsInVpZCI6IkMxMzEzNjIiLCJ0eXBlIjoiQWNjZXNzVG9rZW4ifQ.YpYuwsehgDtJdV10iEVozlPvzWOdPKvPPRG81alCDdgsJBvOhMA4HvniOIY6R417KxspaZB7ScUdfMGv7fDrsWYFuLjV3am8gmnB1Uy328Lz7I5f3O3EShsfKdcTkAZ6OrReFgVKRzFV1zYF5HHy5Og-SfOJjSyALl-aHTnJtSJ9T8DB6hhgjYDQff7_-fsQ7Yyvu25vfeEKLYKdg-70uxmVVjEcSgWmpdHjDnLGuQliMsJz4T4I641vTc8HWZZ3lUjEAT2yyrRvbUbzOtrU8eLad3j48iTEPOlBpaD6dWO3m3BMpeCEEEN2YtnKPx84xoepMwecMJtZ9CaD9m-wvQ'
```

响应示例：

```Plain
成功：
{
  "code": 200,
  "msg": "",
  "data": {
    "total": 1,
    "list": [
      {
        "productKey": "p11pLZ",
        "deviceKey": "D001",
        "deviceTag": "047AD71AAA1F7670F599BACE484EDE7A",
        "deviceName": "RGB灯-1744780780714",
        "deviceStatus": "离线",
        "protocol": "MQTT",
        "productName": "RGB灯",
        "logoImage": "https://aiot-cdn.quectel.com/paas2/cdn/29c9cbead1ab4344829205aa2b9612911732871292272.jpeg",
        "signalStrength": "88",
        "uid": "C131362",
        "userName": "QuE1DglfKXB",
        "phone": "17132136550",
        "locateType": null,
        "deviceType": 1,
        "ownerUid": null,
        "shareCode": null,
        "authKey": "FUjktXJpwJ8d3OLZoHTYtA==",
        "authCode": null,
        "bindingCode": null,
        "btPwd": null,
        "btLastUseTime": null,
        "verified": 1,
        "status": 1,
        "networkType": "2",
        "accessType": "0",
        "sn": "D001",
        "bindMode": 3,
        "onlineStatus": 0,
        "bindStatus": 1,
        "deviceCreateTime": "2023-04-23 17:08:00",
        "deviceCreateTimeTs": 1682240880000,
        "activeTime": "2023-05-05 10:16:05",
        "activeTimeTs": 1683252965000,
        "deviceBindTime": "2025-04-16 13:19:41",
        "deviceBindTimeTs": 1744780781133,
        "lastConnTime": "2025-02-18 11:44:18",
        "lastConnTimeTs": 1739850258248,
        "lastOfflineTime": "2025-02-18 11:49:27",
        "lastOfflineTimeTs": 1739850567256,
        "invaildTime": null,
        "invaildTimeTs": null,
        "fid": null,
        "frid": null,
        "bindingType": 1,
        "capabilitiesBitmask": 1,
        "sharingExpireAt": null,
        "sharingExpireTimeTs": null,
        "upgradeStatus": null,
        "userConfirmStatus": null,
        "isNative": 1,
        "isMatter": 0,
        "firstItemCode": "smart_city",
        "firstItemName": "RGB灯",
        "secondItemCode": "SmartTwoWheels",
        "secondItemName": "两轮车",
        "lowPowerProduct": false,
        "lowPowerCache": null,
        "lowPowerStatus": false,
        "aiCapabilityStatus": false,
        "lowPowerAlive": 0,
        "planId": null,
        "gdid": null,
        "groupState": 0,
        "groupDeviceDeviceNum": null,
        "matterInfo": null
      }
    ],
    "pageNum": 1,
    "pageSize": 10,
    "size": 1,
    "startRow": 1,
    "endRow": 1,
    "pages": 1,
    "prePage": 0,
    "nextPage": 0,
    "isFirstPage": true,
    "isLastPage": true,
    "hasPreviousPage": false,
    "hasNextPage": false,
    "navigatePages": 8,
    "navigatepageNums": [
      1
    ],
    "navigateFirstPage": 1,
    "navigateLastPage": 1
  },
  "extMsg": null
}
失败：
{
  "code": 5032,
  "msg": "token 验证失败"
}
```

至此已完成在App应用中调用OpenAPI接口流程，更多的OpenAPI请查看[API列表](APIList)。

