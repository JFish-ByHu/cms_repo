# Phone Number

This section introduces how to use the phone number to register and log in an account.

## Feature Description

```kotlin
QuecUserService
```

### Query Whether Phone Number is Registered

**API**

Query whether the phone number is registered.

```kotlin
fun queryPhoneIsRegister(
    phone: String, internationalCode: String?, callback: QuecCallback<Boolean>
)
```

**Description**

| Parameter         | Required | Description                       |
| ----------------- | -------- | --------------------------------- |
| phone             | Y        | Phone number.                     |
| internationalCode | N        | Country code, such as +86.        |
| callback          | Y        | Callback function of the request. |

**Example**

```kotlin
QuecUserService.queryPhoneIsRegister("13000000000", "+86") {
    if (it.isSuccess) {
        val value = it.data //True means registered, and false means not registered.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Log in with Phone Number and Password

**API**

Log in with phone number and password.

```kotlin
fun loginByPhone(
    phone: String, password: String, internationalCode: String?, callback: QuecCallback<Unit>
)
```

**Description**

| Parameter         | Required | Description                       |
| ----------------- | -------- | --------------------------------- |
| phone             | Y        | Phone number.                     |
| password          | Y        | Password.                         |
| internationalCode | N        | Country code. Default: +86.       |
| callback          | Y        | Callback function of the request. |

**Example**

```kotlin
QuecUserService.loginByPhone("13000000000", "password", "+86") {
    if (it.isSuccess) {
        //Log in with phone number and password successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Log in with Phone Number and SMS Verification Code

**API**

Log in with phone number and SMS verification code. The SMS verification code should be obtained before login.

```kotlin
fun loginWithMobile(
    mobile: String, code: String, internationalCode: String?, callback: QuecCallback<Unit>
)
```

**Description**

| Parameter         | Required | Description                       |
| ----------------- | -------- | --------------------------------- |
| mobile            | Y        | Phone number.                     |
| code              | Y        | Verification code.                |
| internationalCode | N        | Country code. Default: +86.       |
| callback          | Y        | Callback function of the request. |

**Example**

```kotlin
QuecUserService.loginWithMobile("13000000000", "code", "+86") {
    if (it.isSuccess) {
        //Log in with phone number and SMS verification code successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Register with Phone Password

**API**

Register with phone password. The SMS verification code should be obtained before registration.

```kotlin
fun registerByPhone(
    phone: String,
    code: String,
    password: String,
    internationalCode: String,
    callback: QuecCallback<Unit>
)
```

**Description**

| Parameter         | Required | Description                       |
| ----------------- | -------- | --------------------------------- |
| phone             | Y        | Phone number.                     |
| code              | Y        | Verification code.                |
| password          | Y        | Password.                         |
| internationalCode | N        | Country code. Default: +86.       |
| callback          | Y        | Callback function of the request. |

**Example**

```kotlin
QuecUserService.registerByPhone("13000000000", "code", "password", "+86") {
    if (it.isSuccess) {
        //Register with phone password successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Send SMS Verification Code

**API**

Send the SMS verification code for password reset, login, registration, deregistration or value-added service recipients.

```kotlin
fun sendVerifyCodeByPhone(
    phone: String, internationalCode: String?, type: Int, callback: QuecCallback<Unit>
)
```

**Description**

| Parameter         | Required | Description                                                  |
| ----------------- | -------- | ------------------------------------------------------------ |
| phone             | Y        | Phone number.                                                |
| internationalCode | Y        | Country code.                                                |
| type              | Y        | Verification code type.<br />1-Registration<br />2-Password reset<br />3-Login<br />4-Deregistration<br />5-Value-added service recipient |
| callback          | Y        | Callback function of the request.                            |

**Example**

```kotlin
QuecUserService.sendVerifyCodeByPhone("13000000000", "+86", 1) {
    if (it.isSuccess) {
        //Send SMS verification code successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Verify International Phone Number Format

**API**

Verify the international phone number format.

```kotlin
fun validateInternationalPhone(
    phone: String, internationalCode: String, callback: QuecCallback<Unit>
)
```

**Description**

| Parameter         | Required | Description                       |
| ----------------- | -------- | --------------------------------- |
| phone             | Y        | Phone number.                     |
| internationalCode | Y        | Country code.                     |
| callback          | Y        | Callback function of the request. |

**Example**

```kotlin
QuecUserService.validateInternationalPhone("13000000000", "+86") {
    if (it.isSuccess) {
        //Verify international phone number format successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Verify SMS Verification Code

**API**

Verify the SMS verification code. The SMS verification code should be obtained before login.

```kotlin
fun validateSmsCode(
    phone: String,
    smsCode: String,
    internationalCode: String?,
    type: Int?,
    callback: QuecCallback<Unit>
)
```

**Description**

| Parameter         | Required | Description                                                  |
| ----------------- | -------- | ------------------------------------------------------------ |
| phone             | Y        | Phone number.                                                |
| smsCode           | Y        | Verification code.                                           |
| internationalCode | N        | Country code.                                                |
| type              | N        | Whether the verification code is invalid after verification. Defalut： 1.<br />1- Invalid<br />2-Valid |
| callback          | Y        | Callback function of the request.                            |

**Example**

```kotlin
QuecUserService.validateSmsCode("13000000000", "code", "+86", 1) {
    if (it.isSuccess) {
        //Verify the SMS verification code successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Reset Password with Phone Number and Verification Code

**API**

Reset the password with phone number and verification code.

```kotlin
fun resetPasswordByPhone(
    phone: String,
    code: String,
    internationalCode: String?,
    password: String?,
    callback: QuecCallback<Unit>
)
```

**Description**

| Parameter         | Required | Description                                                  |
| ----------------- | -------- | ------------------------------------------------------------ |
| phone             | N        | Phone number.                                                |
| code              | Y        | Verification code.                                           |
| internationalCode | N        | Country code to be used in conjunction with the phone number. Default: +86. |
| password          | N        | The reset password. If not entered, the default value is 12345678. |
| callback          | Y        | Callback function of the request.                            |

**Example**

```kotlin
QuecUserService.resetPasswordByPhone("13000000000", "code", "+86", "newPwd") {
    if (it.isSuccess) {
        //Reset the password with phone number and verification code successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```
