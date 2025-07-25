# Email Address

This section introduces how to use an email address to register and log in an account.

## Feature Description

```objc
#import <QuecUserKit/QuecUserKit.h>
///Initialization.
[QuecUserService sharedInstance]
```

### Log in with Email Address and Password

**API**

Log in with email address and password.

```objc
 */
- (void)loginByEmail:(NSString *)email 
            password:(NSString *)password
             success:(QuecVoidBlock)success
             failure:(QuecErrorBlock)failure;
```

**Description**

| Parameter | Required | Description                                                  |
| --- | --- | --- |
| email |	Y|Email address.|
| password |	Y|Password.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request, and error is is the failure reason.	|

**Example**

```objc
[[QuecUserService sharedInstance] loginByEmail:@"email" password:@"password" success:^{
    ///Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Register with Email Address and Password

**API**

Register with email address and password. The verification code should be obtained before registration.

```objc
- (void)registerByEmail:(NSString *)email 
                   code:(NSString *)code
               password:(NSString *)password
            nationality:(NSInteger)nationality
                   lang:(NSInteger)lang
               timezone:(NSInteger)timezone
                success:(QuecVoidBlock)success
                failure:(QuecErrorBlock)failure;
```

**Description**

| Parameter   | Required | Description                                                  |
| --- | --- | --- |
| email | Y |Email address.|
| code |	Y|Verification code.|
| password |	Y|Password.|
| nationality |	N|Nationality.|
| lang |	N|Language.|
| timezone |	N|Time zone.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request, and error is is the failure reason.	|

**Example**

```objc
[[QuecUserService sharedInstance] registerByEmail:@""
                                             code:@""
                                         password:@""
                                      nationality:0
                                             lang:0
                                         timezone:0
                                          success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```


### Send Email to Obtain Verification Code

**API**

Send an email to obtain verification code for account registration, password reset or deregistration.

```objc
 - (void)sendEmailWithType:(QuecEmailCodeType)type 
                     email:(NSString *)email
                   success:(QuecVoidBlock)success
                   failure:(QuecErrorBlock)failure;
```

**Description**

| Parameter | Required | Description                                                  |
| --- | --- | --- |
| type |	Y|QuecEmailCodeType.|
| email |Y|Recipient's email address.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request, and error is is the failure reason.	|

```objc
typedef NS_ENUM(NSUInteger, QuecEmailCodeType)
{
    QuecEmailCodeTypeRegister = 1 ,  //Verification code for registration.
    QuecEmailCodeTypeReset = 2,      //Verification code for password reset.
    QuecEmailCodeTypeLogout = 5      //Verification code for deregistration.
};
```

**Example**

```objc
[[QuecUserService sharedInstance] sendEmailWithType:QuecEmailCodeTypeRegister email:@"email" success:^{
    ///Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Verify Email Verification Code Sent by the User

**API**

Verify the email verification code sent by the user. The verification code should be obtained before verification.

```objc
- (void)validateEmailCodeByUserEmail:(NSString *)email 
                                  code:(NSString *)code
                            isDisabled:(NSInteger)isDisabled
                               success:(QuecVoidBlock)success
                               failure:(QuecErrorBlock)failure;
```

**Description**

| Parameter  | Required | Description                                                  |
| --- | --- | --- |
| email      | Y       | Recipient's email address.            |
| code       | Y       | Verification code.                        |
| isDisabled | Y       | Whether the verification code is invalid after verification. Default： 1.<br />1- Invalid<br />2-Valid |
| success    | N       | Callback function of successful request. |
| failure    | N       | Callback function of failed request, and error is is the failure reason. |

**Example**

```objc
[[QuecUserService sharedInstance] validateEmailCodeByUserEmail:@"email" code:@"code" isDisabled:1 success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Reset Password with Email Address and Password

**API**

Reset the password with email address and password. 

```objc
- (void)resetPasswordByEmail:(NSString *)email 
                        code:(NSString *)code
           internationalCode:(NSString *)internationalCode
                    password:(NSString *)password
                     success:(QuecVoidBlock)success
                     failure:(QuecErrorBlock)failure;
```

**Description**

| Parameter         | Required | Description                                                  |
| --- | --- | --- |
| email |	Y|Email address.	|
| code | Y |Verification code.	|
| internationalCode |	N|Country code to be used in conjunction with the phone number. Default: +86.	|
| password |	N|The reset password. If not entered, the default value is 12345678.	|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[[QuecUserService sharedInstance] resetPasswordByEmail:@"email" code:@"code" internationalCode:@"countryCode" password:@"password" success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Query Whether Email Address is Registerd

**API**

Query whether the email address is registered.

```objc
- (void)checkEmailRegister:(NSString *)email
                   success:(void(^)(BOOL isRegister))success
                   failure:(QuecErrorBlock)failure;
```

**Description**

| Parameter | Required | Description                              |
| --- | --- | --- |
| email   | Y       | Email address. |
| success | N       | Callback function of successful request. |
| failure | N       | Callback function of failed request. |


**Example**

```objc
[[QuecUserService sharedInstance] checkEmailRegister:@"account" success:^(BOOL isRegister) {
    ///Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```
