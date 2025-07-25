# OpenAPI Integration Guide

App OpenAPIs are used for app integration with the Developer Center, enabling device data monitoring and remote control through mobile applications.

## Operation Step

### Prerequisites

1. Before using OpenAPI services, you need to click "**Create an App**" under "**App Development**" > "**AppSDK Development**" menu.
2. On the "**Application List**" -> "**Associate Product**" page, authorize the accessible product data of App application. Only authorized product devices can be discovered and bound.
3. On the "**Details**" page, obtain the user domain and user domain password, which will be required later to exchange for access Tokens.

### App Integration

1. Obtain the SMS verification code for App user registration.

API Address:

| API Address    | https://iot-api.acceleronix.io/v2/sms/enduserapi/v2/sendPhoneSmsCode |
| -------------- | ------------------------------------------------------------ |
| Request Method | POST                                                         |

Request Parameter:

| **Parameter**     | **Type** | **Required** | **Location** | **Description**                                              |
| ----------------- | -------- | ------------ | ------------ | ------------------------------------------------------------ |
| code_type         | int32    | Y            | Query        | SMS type. Available scenarios:<br/>1-Password reset<br/>2-Login<br/>3-Registration<br/>4-Deregistration<br/>5-Add push contact |
| internationalCode | String   | Y            | Query        | International code, e.g. 86 for Mainland China               |
| phone             | String   | Y            | Query        | Mobile phone number                                          |
| random            | String   | Y            | Query        | Random string with a fixed length of 16 characters           |
| ts                | int64    | Y            | Query        | Current timestamp in milliseconds. The timestamp must not deviate from server time by more than 10 minutes. |
| userDomain        | String   | Y            | Query        | User domain                                                  |
| signature         | String   | Y            | Query        | ***signature* Generation Rule:**<br />SHA256(phone + codeType + random + ts + userDomainSecret)<br/>The data after SHA-256 encoding should be formatted using HEX_ENCODE (hexadecimal encoding).<br />**Example**<br />phone: 13800138000<br />codeType: 3<br/>random: 76a6L647F02CAoN9<br/>ts: 1744773894369<br/>userDomainSecret: 57Fk69oYgbs2aWWN362NtZwYB2RqKNqQ7yZESnF5VM33<br/>**Signature Format:**<br/>SHA256(13800138000376a6L647F02CAoN9174477389436957Fk69oYgbs2aWWN362NtZwYB2RqKNqQ7yZESnF5VM33)<br/>**Calculated Signature:**<br/>e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855 |

Response Parameter:

| **Parameter** | **Description**                                              | **Type** | schema |
| ------------- | ------------------------------------------------------------ | -------- | ------ |
| code          | Error code. 200 indicates success and others indicate error codes. | object   |        |
| data          | Token returned after the successful execution                | string   |        |
| extMsg        | Extended information                                         | string   |        |
| msg           | Response message                                             | string   |        |

Response Status Code:

| **Status Code** | **Description** |
| --------------- | --------------- |
| 200             | OK              |

Request Example:

```Plain
curl -X 'POST' \
  'https://iot-api.acceleronix.io/v2/sms/enduserapi/v2/sendPhoneSmsCode?codeType=3&internationalCode=86&phone=17132136550&random=76a6L647F02CAoN9&signature=2deb6518ca0ee701e28a6359a91270c59dbe69456a3336dc5f625bfa32e64df6&ts=1744773894369&userDomain=C.DM.10271.5' \
  -H 'accept: */*' \
  -d ''
```

The userDomainSecret used in the example is 57Fk69oYgbs2aWWN362NtZwYB2RqKNqQ7yZESnF5VM22.

Response Example:

```Plain
Success:
{
  "code": 200,
  "msg": "",
  "data": null,
  "extMsg": null
}
Failure:
{
    "code": 5420,
    "msg": "Signature verification failed",
    "data": null,
    "extMsg": null
}
```

2. Register User Account via Mobile Phone Number

API Address:

| API Address    | https://iot-api.acceleronix.io/v2/enduser/enduserapi/v2/phonePwdRegister |
| -------------- | ------------------------------------------------------------ |
| Request Method | POST                                                         |

Request Parameter:

| **Parameter**                   | **Type** | **Required** | **Location** | **Description**                                              |
| ------------------------------- | -------- | ------------ | ------------ | ------------------------------------------------------------ |
| internationalCode               | String   | N            | Body         | International code (defaults to domestic)                    |
| phone                           | String   | Y            | Body         | Mobile phone number                                          |
| random                          | String   | N            | Body         | Random string used for password encryption/decryption.       |
| pwd                             | String   | Y            | Body         | Password<br>**Encryption/Decryption Rules**：<br>AES128(pwd,MD5(random),initialization vector).<br/>**AES Encryption Specifications:**<br/>Mode: CBC<br/>Padding: PKCS5Padding<br/>Block Size: 128-bit<br/>Content: pwd<br/>AES  key: MD5(random). It generates a 16-byte uppercase string (extract characters 8-24 from the 32-character MD5 hash)<br/>Initialization Vector(IV): Split the generated AES key (MD5(random) into two 8-byte segments, reverse their order, and combine to form a new 16-byte IV<br/>Output: BASE64<br/>Charset: utf-8<br/>**Example:**<br/>pwd: china1234<br/>random: j1acpdj2bmtqZXVb<br/>AES key: 89A049614445CCA8<br/>AES iv: 4445CCA889A04961<br/>Encrypted: lkZMvj0KDSJXlp66jBieHA==<br/>Decrypted: china1234 |
| smsCode                         | String   | Y            | Body         | SMS verification code (provided via SMS service API）        |
| userDomain                      | String   | Y            | Body         | User domain                                                  |
| agreementList                   | List     | Y            | Body         | Protocol                                                     |
| agreementList[0].protocolType   | Integer  | Y            | Body         | Protocol type (1. Privacy Policy. 2. Service Agreement)      |
| agreementList[0].privacyVersion | String   | Y            | Body         | Protocol version                                             |

Response Parameter:

| **Parameter** | **Description**                                              | **Type** | schema |
| ------------- | ------------------------------------------------------------ | -------- | ------ |
| code          | Error code. 200 indicates success and others indicate error codes. | object   |        |
| data          | Token returned after the successful execution                | Object   |        |
| data.uid      | User ID                                                      | String   |        |
| extMsg        | Extended information                                         | string   |        |
| msg           | Response message                                             | string   |        |

Response Status Code:

| **Status Code** | **Description** |
| --------------- | --------------- |
| 200             | OK              |

Request Example:

```Plain
curl -X 'POST' \
  'https://iot-api.acceleronix.io/v2/enduser/enduserapi/v2/phonePwdRegister' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{"agreementList":[{"privacyVersion":"1.0.0","protocolType":1},{"privacyVersion":"1.0.0","protocolType":2}],"internationalCode":"86","phone":"17132136550","pwd":"KbbO5AsWloh9gulLei6NhQ==","random":"abcdef","smsCode":"606754","userDomain":"C.DM.10271.5"}'
```

Response Example:

```Plain
Success:
{
    "code":200,
    "msg":"",
    "data":{
        "uid":"C1"
    },
    "extMsg":null
}
Failure:
{
  "code": 5037,
  "msg": "SMS verification failed",
  "data": null,
  "extMsg": null
}
```

3. Log in to the Account to Obtain User Token After Successful Registration

API Address:

| API Address    | https://iot-api.acceleronix.io/v2/enduser/enduserapi/phonePwdLogin |
| -------------- | ------------------------------------------------------------ |
| Request Method | POST                                                         |

Request Parameter:

| **Parameter**     | **Type** | Required | **Location** | **Description**                                              |
| ----------------- | -------- | -------- | ------------ | ------------------------------------------------------------ |
| internationalCode | String   | N        | Query        | International code (defaults to domestic)                    |
| **phone**         | String   | Y        | Query        | Mobile phone number                                          |
| random            | String   | N        | Query        | Random string used for password encryption/decryption        |
| **pwd**           | String   | Y        | Query        | Password<br/>**Encryption/Decryption Rule**: <br/>AES128(pwd,MD5(random),IV).<br/>**AES Encryption Specifications:** <br/>Mode: CBC<br/>Padding: PKCS5Padding<br/>Block size: 128-bit<br/>Content: pwd<br/>AES key: MD5(random). It generates a 16-byte uppercase string (extract characters 8-24 from the 32-character MD5 hash).<br/>Initialization Vector: Split the generated AES key (MD5(random) into two 8-byte segments, reverse their order, and combine to form a new 16-byte IV.<br/>Output: BASE64<br/>Charset: utf-8<br/>**Example:**<br/>pwd: china1234<br/>random: j1acpdj2bmtqZXVb<br/>AES key: 89A049614445CCA8<br/>AES iv: 4445CCA889A04961<br/>Encrypted: lkZMvj0KDSJXlp66jBieHA==<br/>Decrypted: china1234 |
| **userDomain**    | String   | Y        | Query        | User domain                                                  |
| **signature**     | String   | Y        | Query        | Signature Generation Rule: SHA256(internationalCode+phone+pwd+random+userDomainSecret) |

Response Parameter:

| **Parameter**                    | **Description**                                              | **Type** | schema |
| -------------------------------- | ------------------------------------------------------------ | -------- | ------ |
| code                             | Error code. 200 indicates success and others indicate error codes. | object   |        |
| data                             | Token returned after the successful execution                | Object   |        |
| data.accessToken                 | Access token                                                 | Object   |        |
| data.accessToken.expirationTime  | Expiration timestamp (in seconds). Token becomes invalid after the expiration. | Long     |        |
| data.accessToken.token           | token                                                        | String   |        |
| data.refreshToken                | Refresh token                                                | Object   |        |
| data.refreshToken.expirationTime | Expiration timestamp (in seconds). Token becomes invalid after the expiration. | Long     |        |
| data.refreshToken.token          | token                                                        | String   |        |
| extMsg                           | Extended information                                         | string   |        |
| msg                              | Response message                                             | string   |        |

Response Status Code:

| **Status Code** | **Description** |
| --------------- | --------------- |
| 200             | OK              |

Request Example:

```Plain
curl -X 'POST' \
  'https://iot-api.acceleronix.io/v2/enduser/enduserapi/phonePwdLogin?internationalCode=86&phone=17132136550&pwd=KbbO5AsWloh9gulLei6NhQ%3D%3D&random=abcdef&signature=1fd91ebf096be51dae1c6055bc930bd8e24b1f477d2a47ae87eedb0f73057bf0&userDomain=C.DM.10271.5' \
  -H 'accept: */*' \
  -d ''
```

The userDomainSecret used in the example is 57Fk69oYgbs2aWWN362NtZwYB2RqKNqQ7yZESnF5VM22.

Response Example:

```Plain
Success:
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
Failure:
{
  "code": 5420,
  "msg": "Signature verification failed",
  "data": null,
  "extMsg": null
}
```

4. Query Bound Device List Using Token

API Address:

| API Address    | https://iot-api.acceleronix.io/v2/enduser/enduserapi/phonePwdLogin |
| -------------- | ------------------------------------------------------------ |
| Request Method | POST                                                         |

Request Parameter:

| **Parameter** | **Type** | **Required** | **Location** | **Description**                                           |
| ------------- | -------- | ------------ | ------------ | --------------------------------------------------------- |
| pkList        | String   | N            | Query        | ProductKey list (multiple keys should be comma-separated) |
| dk            | String   | N            | Query        | DeviceKey                                                 |
| deviceName    | String   | N            | Query        | Device name                                               |
| page          | Integer  | N            | Query        | Current page number (default: 1)                          |
| pageSize      | Integer  | N            | Query        | Page size (default: 10)                                   |

Response Parameter:

| **Parameter** | **Description**                                              | **Type** | schema |
| ------------- | ------------------------------------------------------------ | -------- | ------ |
| code          | Error code. 200 indicates success and others indicate error codes. | object   |        |
| data          | Device list                                                  | Object   |        |
| extMsg        | Extended information                                         | string   |        |
| msg           | Response message                                             | string   |        |

Response Status Code:

| **Status Code** | **Description** |
| --------------- | --------------- |
| 200             | OK              |

Request Example:

```Plain
curl -X 'GET' \
  'https://iot-api.acceleronix.io/v2/binding/enduserapi/userDeviceList' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJlbmR1c2VyIiwiYXVkIjoiQXVkaWVuY2UiLCJleHAiOjE3NDQ3ODgxNTEsImp0aSI6ImtJQ0xZSWpBOXRsN1VpRXY4WFplN1EiLCJpYXQiOjE3NDQ3ODA5NTEsIm5iZiI6MTc0NDc4MDgzMSwic3ViIjoic3ViamVjdCIsInVpZCI6IkMxMzEzNjIiLCJ0eXBlIjoiQWNjZXNzVG9rZW4ifQ.YpYuwsehgDtJdV10iEVozlPvzWOdPKvPPRG81alCDdgsJBvOhMA4HvniOIY6R417KxspaZB7ScUdfMGv7fDrsWYFuLjV3am8gmnB1Uy328Lz7I5f3O3EShsfKdcTkAZ6OrReFgVKRzFV1zYF5HHy5Og-SfOJjSyALl-aHTnJtSJ9T8DB6hhgjYDQff7_-fsQ7Yyvu25vfeEKLYKdg-70uxmVVjEcSgWmpdHjDnLGuQliMsJz4T4I641vTc8HWZZ3lUjEAT2yyrRvbUbzOtrU8eLad3j48iTEPOlBpaD6dWO3m3BMpeCEEEN2YtnKPx84xoepMwecMJtZ9CaD9m-wvQ'
```

Response Example:

```Plain
Success:
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
        "deviceName": "RGB light-1744780780714",
        "deviceStatus": "Off",
        "protocol": "MQTT",
        "productName": "RGB light",
        "logoImage": "https://cdn-protocol.iotomp.com/paas2/cdn/29c9cbead1ab4344829205aa2b9612911732871292272.jpeg",
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
        "firstItemName": "RGB light",
        "secondItemCode": "SmartTwoWheels",
        "secondItemName": "Two-wheeled vehicles",
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
Failure:
{
  "code": 5032,
  "msg": "token verification failed"
}
```

The process for calling OpenAPIs in the App is completed. For more OpenAPIs, please refer to [OpenAPI List](APIList).

