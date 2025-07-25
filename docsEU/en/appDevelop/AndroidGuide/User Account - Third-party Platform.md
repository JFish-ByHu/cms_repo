# Third-party Platform

This section introduces how to use a third party to log in an account.

## Feature Description

```kotlin
QuecUserService
```

### **One-Tap Login**

**API**

Configure QuecOneKeyLoginModel to start one-tap login. All the fields are required.

```kotlin
fun oneKeyLogin(model: QuecOneKeyLoginModel, callback: QuecCallback<Unit>)
```

**QuecOneKeyLoginModel Definition**

| Field       | Type   | Description                                                  |
| ----------- | ------ | ------------------------------------------------------------ |
| appid       | String | Apply appid on China Mobile Internet Capability Open Platform. |
| msgid       | String | UUID.                                                        |
| strictcheck | String | 0: Do not perform strict check on the server IP whitelist.<br />1: Perform strict check on the server IP whitelist. |
| systemtime  | String | System time with format of yyyyMMddHHmmssSSS.                |
| appSecret   | String | Apply appSecret on China Mobile Internet Capability Open Platform. |
| loginToken  | String | After obtaining the permission, the SDK of China Mobile returns a token. |
| version     | String | Version.                                                     |

**Example**

```kotlin
QuecUserService.oneKeyLogin(
    QuecOneKeyLoginModel(
        "xxx",
        "xxx",
        "xxx",
        "xxx",
        "0",
        "20250421154210030",
        "2.0"
    )
) {
    if (it.isSuccess) {
        //Configure QuecOneKeyLoginModel to start one-tap login successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Log in with Third Party

**API**

Log in with the third party.

```kotlin
fun loginByAuthCode(authCode: String, callback: QuecCallback<Unit>)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| authCode  | Y        | Authorization code.               |
| callback  | Y        | Callback function of the request. |

**Example**

```kotlin
QuecUserService.loginByAuthCode("authCode") {
    if (it.isSuccess) {
        //Log in with the third party successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```
