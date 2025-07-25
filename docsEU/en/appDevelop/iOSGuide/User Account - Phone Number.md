# Phone Number

This section introduces how to use the phone number to register and log in an account.

## Feature Description

```objc
#import <QuecUserKit/QuecUserKit.h>
///Initialization.
[QuecUserService sharedInstance]
```

### Query Whether Phone Number is Registered

**API**

Query whether the phone number is registered.

```objective-c
- (void)queryPhoneIsRegister:(NSString *)phone 
           internationalCode:(NSString *)internationalCode
                     success:(void(^)(BOOL isRegister))success
                     failure:(void(^)(NSError *error))failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| phone |	Y|Phone number.|
| internationalCode |	N|Country code.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request, and error is is the failure reason.	|

**Example**

```objc
[[QuecUserService sharedInstance] queryPhoneIsRegister:@"account" internationalCode:@"code" success:^(BOOL isRegister) {
    if (isRegister) {
    } else {
    }
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Log in with Phone Number and Password

**API**

Log in with phone number and password.

```objc
- (void)loginByPhone:(NSString *)phone 
            password:(NSString *)password
   internationalCode:(NSString *)internationalCode
             success:(QuecVoidBlock)success
             failure:(QuecErrorBlock)failure;
```

**Parameter**

| Parameter         | Required | Description                              |
| --- | --- | --- |
| phone |	Y|Phone number.|
| password          | Y       | Password.         |
| internationalCode | N       | Country code. Default: +86. |
| success           | N       | Callback function of successful request. |
| failure | N |Callback function of failed request.	|

**Example**

```objc
[[QuecUserService sharedInstance] loginByPhone:@"phone" password:@"password" internationalCode:@"+86" success:^{
    ///Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Log in with Phone Number and SMS Verification Code

**API**

Log in with phone number and SMS verification code. The SMS verification code should be obtained before login.

```objc
- (void)loginWithMobile:(NSString *)mobile 
                    code:(NSString *)code
      internationalCode:(NSString *)internationalCode
                 success:(QuecVoidBlock)success
                 failure:(QuecErrorBlock)failure;
```

**Parameter**

| Parameter         | Required | Description                              |
| --- | --- | --- |
| mobile |	Y|Phone number.	|
| code |	Y|Phone number verification code.	|
| internationalCode |	N|Country code. Default: +86.	|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[[QuecUserService sharedInstance] loginWithMobile:@"account" code:@"code" internationalCode:@"+86" success:^{
    ///Next Action            
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Register with Phone Password

**API**

Register with phone password. The SMS verification code should be obtained before registration.

```objc
- (void)registerByPhone:(NSString *)phone 
                    code:(NSString *) code
               password:(NSString *)password
      internationalCode:(NSString *)internationalCode
                success:(QuecVoidBlock)success
                failure:(QuecErrorBlock)failure;
```

**Parameter**

| Parameter         | Required | Description                              |
| --- | --- | --- |
| phone |	Y|Phone number.|
| code |	Y|Verification code.|
| password |	Y|Password.|
| internationalCode |	N|Country code. Default: +86.|
| success           | N       | Callback function of successful request. |
| failure           | N       | Callback function of failed request. |


**Example**

```objc
[QuecUserService.sharedInstance registerByPhone:@"account"
                                            code:@"code"
                                         password:@"password"
                                 internationalCode:0
                                            success:^{
    ///Next Action   
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Send SMS Verification Code

**API**

Send the SMS verification code for password reset, login, registration, deregistration or value-added service recipients.

```objc
- (void)sendVerifyCodeByPhone:(NSString *)phone
            internationalCode:(NSString *)internationalCode
                         type:(QuecVerifyCodeType)type
                      success:(QuecVoidBlock)success
                      failure:(QuecErrorBlock)failure;
```

**Parameter**

| Parameter         | Required | Description                              |
| --- | --- | --- |
| phone |	Y|Phone number.|
| internationalCode |Y|Country code.|
| type |Y|QuecVerifyCodeType|
| success           | N       | Callback function of successful request.     |
| failure           | N       | Callback function of failed request.         |

```objc
typedef NS_ENUM(NSUInteger, QuecVerifyCodeType)
{
    QuecVerifyCodeTypeReset = 1 ,  //Verification code for password reset.
    QuecVerifyCodeTypeLogin,       //Verification code for login.
    QuecVerifyCodeTypeRegister,    //Verification code for registration.
    QuecVerifyCodeTypeLogout,      //Verification code for deregistration.
    QuecVerifyCodeTypeAddValue,    //Verification code for value-added service recipient.
};
```

**Example**

```objc
[QuecUserService.sharedInstance sendVerifyCodeByPhone:@"account" 
                                    internationalCode:@"code"
                                    type:QuecVerifyCodeTypeLogin success:^{
    ///Next Action   
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Verify International Phone Number Format

**API**

Verify the international phone number format.

```objc
- (void)validateInternationalPhone:(NSString *)phone 
                 internationalCode:(NSString *)internationalCode
                            success:(QuecVoidBlock)success
                            failure:(QuecErrorBlock)failure;
```

**Parameter**

| Parameter         | Required | Description                              |
| --- | --- | --- |
| phone |	Y|Phone number.|
| internationalCode |Y|Country code.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecUserService.sharedInstance validateInternationalPhone:@"account" internationalCode:@"+86" success:^{
    /// Next Action  
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Verify SMS Verification Code

**API**

Verify the SMS verification code. The SMS verification code should be obtained before login.

```objc
- (void)validateSmsCode:(NSString *)phone 
                smsCode:(NSString *)smsCode
      internationalCode:(NSString *)internationalCode
                   type:(NSInteger)type
                success:(QuecVoidBlock)success
                failure:(QuecErrorBlock)failure;
```

**Parameter**

| Parameter         | Required | Description                                     |
| --- | --- | --- |
| phone |	Y|Phone number.|
| smsCode |	Y|SMS verification code.|
| internationalCode |	N|Country code.|
| type |N|Whether the verification code is invalid after verification. Default： 1.<br />1- Invalid<br />2-Valid|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[[QuecUserService sharedInstance] validateSmsCode:@"account" smsCode:@"code" internationalCode:@"internationalCode" type:1 success:^{
    /// Next Action 
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Reset Password with Phone Number and Verification Code

**API**

Reset the password with phone number and verification code.

```objc
- (void)resetPasswordByPhone:(NSString *)phone 
                        code:(NSString *)code
           internationalCode:(NSString *)internationalCode
                    password:(NSString *)password
                     success:(QuecVoidBlock)success
                     failure:(QuecErrorBlock)failure;
```

**Parameter**

| Parameter         | Required | Description                                                  |
| --- | --- | --- |
| code |	Y|Verification code.	|
| phone |	N|Phone number.	|
| internationalCode |	N|Country code to be used in conjunction with the phone number. Default: +86.	|
| password |	N|The reset password. If not entered, the default value is 12345678.	|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[[QuecUserService sharedInstance] resetPasswordByPhone:@"phone" code:@"code" internationalCode:@"countryCode" password:@"password" success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```
