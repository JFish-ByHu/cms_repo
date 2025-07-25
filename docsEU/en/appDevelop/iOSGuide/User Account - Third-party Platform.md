# Third-party Platform

This section introduces how to use a third party to log in an account.

## Feature Description

```objc
#import <QuecUserKit/QuecUserKit.h>
///Initialization.
[QuecUserService sharedInstance]
```

### One-Tap Login

**API**

Configure QuecOneKeyLoginModel to start one-tap login. All the fields are required.

```objc
- (void)oneKeyLoginWithModel:(QuecOneKeyLoginModel *)model
                   success:(QuecVoidBlock)success
                   failure:(QuecErrorBlock)failure;
```

**QuecOneKeyLoginModel Definition**

| Field       | Type     | Description                                                  |
| --- | --- | --- |
| appid | NSString |Apply appid on China Mobile Internet Capability Open Platform.|
| msgid | NSString   |UUID.|
| strictcheck | NSString   |0: Do not perform strict check on the server IP whitelist.<br />1: Perform strict check on the server IP whitelist.|
| systemtime | NSString   |System time with format of yyyyMMddHHmmssSSS.|
| appSecret | NSString       |Apply appSecret on China Mobile Internet Capability Open Platform.|
| loginToken | NSString      |After obtaining the permission, the SDK of China Mobile returns a token.|
| version | NSString   |Version.|

**Example**

```objc
QuecOneKeyLoginModel *loginModel = QuecOneKeyLoginModel.new;
loginModel.appid = appid;
loginModel.msgid = uuid;
loginModel.strictcheck = @"0";;
loginModel.systemtime = systemtime;
loginModel.appSecret = appSecret;
loginModel.loginToken = loginToken;
loginModel.version = @"2.0";
[QuecUserService.sharedInstance oneKeyLoginWithModel:loginModel success:^{
    ///Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Log in with Third Party

**API**

Log in with the third party.

```objc
- (void)loginByAuthCode:(NSString *)authCode success:(QuecVoidBlock)success failure:(QuecErrorBlock)failure;
```

**Parameter**

| Parameter | Required | Description                              |
| --- | --- | --- |
| authCode | Y       | Authorization code. |
| success  | N       | Callback function of successful request. |
| failure  | N       | Callback function of failed request. |

**Example**

```objc
[QuecUserService.sharedInstance loginByAuthCode:@"AuthCode" success:^{
    ///Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```
