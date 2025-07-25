# Account Details

This section introduces how to manage user's profile.

## Feature Description

In this module, you can call *QuecUserService* to obtain all information of the current user and related login and registration methods. QuecUserModel is shown in the following table:

| Field         | Type   | Description        |
| ------------- | ------ | ------------------ |
| nikeName      | String | Nickname.          |
| phone         | String | Phone number.      |
| registerTime  | String | Registration time. |
| sex           | String | Gender.            |
| timezone      | String | Time zone.         |
| uid           | String | User ID.               |
| wchartId      | String | Wechat ID.         |
| wchartName    | String | Wechat name.       |
| address       | String | Address.           |
| email         | String | Email address.     |
| headimg       | String | Profile photo.     |
| lang          | String | Language.          |
| lastLoginTime | String | Last login time.   |
| nationality   | String | Nationality.       |

```kotlin
QuecUserService
```

### Trigger Callback of Invalid Login Status

**API**

Trigger the callback when the login status is invalid.

```kotlin
fun setTokenInvalidCallBack(callBack: QuecCallback<Unit>)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| callback  | Y        | Callback function of the setting. |

**Example**

```kotlin
QuecUserService.setTokenInvalidCallBack {
    //Process when the login status is invalid.
}
```

### Change Login Phone Number

**API**

Change user's login phone number.

```kotlin
fun updatePhone(
    newPhone: String,
    newInternationalCode: String,
    newPhoneCode: String,
    oldPhone: String,
    oldInternationalCode: String,
    oldPhoneCode: String,
    callback: QuecCallback<Unit>
)
```

**Parameter**

| Parameter            | Required | Description                                           |
| -------------------- | -------- | ----------------------------------------------------- |
| newPhone             | Y        | New phone number.                                     |
| newInternationalCode | Y        | Country code of the new phone number.                 |
| newPhoneCode         | Y        | Verification code that the new phone number received. |
| oldPhone             | Y        | Old phone number.                                     |
| oldInternationalCode | Y        | Country code of the old phone number.                 |
| oldPhoneCode         | Y        | Verification code that the old phone number received. |
| callback             | Y        | Callback function of the request.                     |

**Example**

```kotlin
QuecUserService.updatePhone("13000000001", "+86", "code1", "13000000000", "+86", "code2") {
    if (it.isSuccess) {
        //Change user's login phone number successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Change Profile Photo

**API**

Change the profile photo by inputting the image path.

```kotlin
fun updateUserIcon(imagePath: String, callback: QuecCallback<Unit>)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| imagePath | Y        | Image path.                       |
| callback  | Y        | Callback function of the request. |

**Example**

```kotlin
QuecUserService.updateUserIcon("https://xxx.com/xxx.jpg") {
    if (it.isSuccess) {
        //Change the profile photo successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Change Nickname

**API**

Change the nickname.

```kotlin
fun updateUserNickName(nikeName: String, callback: QuecCallback<Unit>)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| nikeName  | Y        | Nickname.                         |
| callback  | Y        | Callback function of the request. |

**Example**

```kotlin
QuecUserService.updateUserNickName("nickName") {
    if (it.isSuccess) {
        //Change the nickname successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Change User's Gender

**API**

Modify the user's gender.

```kotlin
fun updateUserSex(sex: Int, callback: QuecCallback<Unit>)
```

**Parameter**

| Parameter | Required | Description                                              |
| --------- | -------- | -------------------------------------------------------- |
| sex       | Y        | Gender.<br />0: Male<br />1: Female<br />2: Confidential |
| callback  | Y        | Callback function of the request.                        |

**Example**

```kotlin
QuecUserService.updateUserSex(1) {
    if (it.isSuccess) {
        //Modify the user's gender successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Change Password

**API**

Change the password.

```kotlin
fun updatePassword(newPassword: String, oldPassword: String, callback: QuecCallback<Unit>)
```

**Parameter**

| Parameter   | Required | Description                       |
| ----------- | -------- | --------------------------------- |
| newPassword | Y        | New password.                     |
| oldPassword | Y        | Old Password.                     |
| callback    | Y        | Callback function of the request. |

**Example**

```kotlin
QuecUserService.updatePassword("newPwd", "oldPwd") {
    if (it.isSuccess) {
        //Change the password successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Delete Current User

**API**

Delete the current user.

```kotlin
fun deleteUser(type: Int?, callback: QuecCallback<Unit>)
```

**Parameter**

| Parameter | Required | Description                                                  |
| --------- | -------- | ------------------------------------------------------------ |
| type      | N        | Deletion type. Default value: 2.<br />1- Delete immediately<br />2- Delete after 7 days |
| callback  | Y        | Callback function of the request.                            |

**Example**

```kotlin
QuecUserService.deleteUser(1) {
    if (it.isSuccess) {
        //Delete the current user successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Obtain User Information

**API**

Obtain user information.

```kotlin
fun getUserInfo(callback: QuecCallback<QuecUserModel>)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| callback  | Y        | Callback function of the request. |

**Example**

```kotlin
QuecUserService.getUserInfo {
    if (it.isSuccess) {
        val value = it.data //Obtain user information successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Log Out

**API**

Log out.

```kotlin
fun logout(callback: QuecCallback<Unit>)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| callback  | Y        | Callback function of the request. |

**Example**

```kotlin
QuecUserService.logout {
    if (it.isSuccess) {
        //Log out successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Check Login Status

**API**

Check the login status.

```kotlin
fun checkUserLoginState(callback: QuecCallback<Boolean>)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| callback  | Y        | Callback function of the request. |

**Example**

```kotlin
QuecUserService.checkUserLoginState {
    if (it.isSuccess) {
        val value = it.data //Check the login status successfully. True: logged in; false: not Logged in.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```
