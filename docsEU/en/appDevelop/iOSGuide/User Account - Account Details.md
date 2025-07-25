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

```objc
#import <QuecUserKit/QuecUserKit.h>
///Initialize user management related service.
[QuecUserService sharedInstance]
///Initialize message management related service.
[QuecUserMessageService sharedInstance]
```

### Trigger Callback of Invalid Login Status

**API**

Trigger the callback when the login status is invalid.

```objc
- (void)setTokenInvalidCallBack:(QuecVoidBlock)callBack;
```

**Parameter**

| Parameter | Required | Description                       |
|----------------|-----|--------|
| callBack            | Y    | Callback function of the setting. |

**Example**

```objc
[[QuecUserService sharedInstance] setTokenInvalidCallBack:^{
    ///Process when the login status is invalid.
}];
```

### Change Login Phone Number

**API**

 Change user's login phone number.

```objc
- (void)updatePhone:(NSString *)newPhone
newInternationalCode:(NSString *)newInternationalCode
       newPhoneCode:(NSString *)newPhoneCode
           oldPhone:(NSString *)oldPhone
oldInternationalCode:(NSString *)oldInternationalCode
       oldPhoneCode:(NSString *)oldPhoneCode
            success:(QuecVoidBlock)success
            failure:(QuecErrorBlock)failure;
```

**Parameter**

| Parameter            | Required | Description                                           |
| --- | --- | --- |
| newPhone |	Y|New phone number.|
| newInternationalCode |	Y|Country code of the new phone number.|
| newPhoneCode |	Y|Verification code that the new phone number received.|
| oldPhone |	Y|Old phone number.|
| oldInternationalCode |	Y|Country code of the old phone number.|
| oldPhoneCode |	Y|Verification code that the old phone number received.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecUserService.sharedInstance updatePhone:@"newPhone"
                        newInternationalCode:@"newInternationalCode"
                                newPhoneCode:@"newPhoneCode"
                                    oldPhone:@"oldPhone"
                        oldInternationalCode:@"oldInternationalCode"
                                oldPhoneCode:@"oldPhoneCode"
                                    success:^{
    ///Next Action 
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Change Profile Photo

**API**

Change the profile photo by inputting the image path.

```objc
- (void)updateUserIconWithImagePath:(NSString *)imagePath success:(QuecVoidBlock)success failure:(QuecErrorBlock)failure;
```

**Parameter**

| Parameter | Required | Description                              |
| --- | --- | --- |
| imagePath |	Y| Image path.                              |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[[QuecUserService sharedInstance] updateUserIconWithImagePath:@"avatarUrl" success:^{
    ///Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```
### Change Nickname

**API**

Change the nickname.

```objc
- (void)updateUserNickName:(NSString *)nikeName success:(QuecVoidBlock)success failure:(QuecErrorBlock)failure;
```

**Parameter**

| Parameter | Required | Description                              |
| --- | --- | --- |
| nikeName |	Y|Nickname.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|


**Example**

```objc
[[QuecUserService sharedInstance] updateUserNickName:@"nickname" success:^{
    ///Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Modify User's Gender

**API**

Modify the user's gender.

```objc
- (void)updateUserSex:(NSInteger)sex success:(QuecVoidBlock)success failure:(QuecErrorBlock)failure;
```

**Parameter**

| Parameter | Required | Description                                              |
| --- | --- | --- |
| sex |	Y|Gender.<br />0: Male<br />1: Female<br />2: Confidential|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecUserService.sharedInstance updateUserSex:2 success:^{
    ///Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Change Password

**API**

Change the password.

```objc
- (void)updatePassword:(NSString *)newPassword 
           oldPassword:(NSString *)oldPassword
               success:(QuecVoidBlock)success
               failure:(QuecErrorBlock)failure;
```

**Parameter**

| Parameter   | Required | Description                              |
| --- | --- | --- |
| newPassword |	Y| New password. |
| oldPassword |	Y|Old Password.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[[QuecUserService sharedInstance] updatePassword:@"new pwd" oldPassword:@"old pwd" success:^{
    ///Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Delete Current User

**API**

Delete the current user.

```objc
- (void)deleteUser:(NSInteger)type success:(QuecVoidBlock)success failure:(QuecErrorBlock)failure;
```

**Parameter**

| Parameter | Required | Description                                                  |
| --- | --- | --- |
| type |	N| Deletion type. Default value: 2.<br />1- Delete immediately<br />2- Delete after 7 days |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[[QuecUserService sharedInstance] deleteUser:_type success:^{
    ///Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Obtain User Information

**API**

Obtain user information.

```objc
- (void)getUserInfoWithSuccess:(void(^)(QuecUserModel *userModel))success failure:(QuecErrorBlock)failure;
```

**Parameter**

| Parameter | Required | Description                              |
| --- | --- | --- |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecUserService.sharedInstance getUserInfoWithSuccess:^(QuecUserModel *userModel) {
    /// Next Action
}  failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Log Out

**API**

Log out.

```objc
- (void)logoutWithSuccess:(QuecVoidBlock)success failure:(QuecErrorBlock)failure;
```

**Parameter**

| Parameter | Required | Description                              |
| --- | --- | --- |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[[QuecUserService sharedInstance] logoutWithSuccess:^{
    ///Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Check Login Status

**API**

Check the login status.

```objc
- (void)checkUserLoginState:(void(^)(BOOL isLogin))completion;
```

**Parameter**

| Parameter  | Required | Description        |
| --- | --- | --- |
| completion | Y       | Callback function. |

**Example**

```objc
[QuecUserService.sharedInstance checkUserLoginState:^(BOOL isLogin) {
    if (isLogin) {
        
    } else{
        
    }
    }];
```
