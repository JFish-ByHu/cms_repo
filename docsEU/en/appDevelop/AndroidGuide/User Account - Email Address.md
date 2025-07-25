# Email Address

This section introduces how to use an email address to register and log in an account.

## Feature Description

```kotlin
QuecUserService
```

### Log in with Email Address and Password

**API**

Log in with email address and password.

```kotlin
fun loginByEmail(email: String, password: String, callback: QuecCallback<Unit>)
```

**Description**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| email     | Y        | Email address.                    |
| password  | Y        | Password.                         |
| callback  | Y        | Callback function of the request. |

**Example**

```kotlin
QuecUserService.loginByEmail("email", "password") {
    if (it.isSuccess) {
        //Log in with email address and password successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Register with Email Address and Password

**API**

Register with email address and password. The verification code should be obtained before registration.

```kotlin
fun registerByEmail(
    email: String,
    code: String,
    password: String,
    nationality: Int,
    lang: Int,
    timezone: Int,
    callback: QuecCallback<Unit>
)
```

**Description**

| Parameter   | Required | Description                       |
| ----------- | -------- | --------------------------------- |
| email       | Y        | Email address.                    |
| code        | Y        | Verification code.                |
| password    | Y        | Password.                         |
| nationality | N        | Nationality.                      |
| lang        | N        | Language.                         |
| timezone    | N        | Time zone.                        |
| callback    | Y        | Callback function of the request. |

**Example**

```kotlin
QuecUserService.registerByEmail("email", "code", "password", 0,0,0) {
    if (it.isSuccess) {
        //Register with email address and password successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Send Email to Obtain Verification Code

**API**

Send an email to obtain verification code for account registration, password reset or deregistration.

```kotlin
fun sendEmail(type: Int, email: String, callback: QuecCallback<Unit>)
```

**Description**

| Parameter | Required | Description                                                  |
| --------- | -------- | ------------------------------------------------------------ |
| type      | Y        | Verification code type.<br />1-Registration<br />2-Password reset<br />3-Email linking<br />4-Email unlinking<br />5-Deregistration |
| email     | Y        | Recipient's email address.                                   |
| callback  | Y        | Callback function of the request.                            |

**Example**

```kotlin
QuecUserService.sendEmail(1, "xxx@gmail.com") {
    if (it.isSuccess) {
        //Send the email successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Verify Email Verification Code Sent by the User

**API**

Verify the email verification code sent by the user. The verification code should be obtained before verification.

```kotlin
fun validateEmailCodeByUserEmail(
    email: String, code: String, isDisabled: Int?, callback: QuecCallback<Unit>
)
```

**Description**

| Parameter  | Required | Description                                                  |
| ---------- | -------- | ------------------------------------------------------------ |
| email      | Y        | Recipient's email address.                                   |
| code       | Y        | Verification code.                                           |
| isDisabled | N        | Whether the verification code is invalid after verification. Default： 1.<br />1- Invalid<br />2-Valid |
| callback   | Y        | Callback function of the request.                            |

**Example**

```kotlin
QuecUserService.validateEmailCodeByUserEmail("xxx@gmail.com", "code", 1) {
    if (it.isSuccess) {
        //Verify the email verification code sent by the user successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Reset Password with Email Address and Password 

**API**

Reset the password with email address and password. The verification code should be obtained before verification.

```kotlin
fun resetPasswordByEmail(
    code: String,
    email: String,
    internationalCode: String?,
    password: String?,
    callback: QuecCallback<Unit>
)
```

**Description**

| Parameter         | Required | Description                                                  |
| ----------------- | -------- | ------------------------------------------------------------ |
| code              | Y        | Verification code.                                           |
| email             | Y        | Email address.                                               |
| internationalCode | N        | Country code to be used in conjunction with the phone number. Default: +86. |
| password          | N        | The reset password. If not entered, the default value is 12345678. |
| callback          | Y        | Callback function of the request.                            |

**Example**

```kotlin
QuecUserService.resetPasswordByEmail("code", "xxx@gmail.com", "86", "newPwd") {
    if (it.isSuccess) {
        //Reset the password with email address and password successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Query Whether Email Address is Registerd

**API**

Query whether the email address is registered.

```kotlin
fun checkEmailRegister(email: String, callback: QuecCallback<Boolean>)
```

**Description**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| email     | Y        | Email address.                    |
| callback  | Y        | Callback function of the request. |

**Example**

```kotlin
QuecUserService.checkEmailRegister("xxx@gmail.com") {
    if (it.isSuccess) {
        val value = it.data //Query whether the email address is registered successfully. True means registered, and false means not registered.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```
