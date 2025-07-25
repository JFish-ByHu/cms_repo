# Member Information

## Feature Description

This section introduces how to manage members in homes, including adding a member, editing member information, removing a member, leaving the home, and querying the member list.

## Member Management

### Invite Home Member

**API**

Invite a new home member.

```objc
- (void)inviteFamilyMemberWithModel:(QuecInviteFamilyMemberParamModel *)inviteModel
                            success:(QuecVoidBlock)success
                            failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| inviteModel |	Y|Template of the invitation message.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecInviteFamilyMemberParamModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| fid       | NSString             | Home ID. Required when inviting a member. |
| memberRole       | NSString             | Member role. Required when inviting a member.<br />2-Administrator<br />3-Ordinary Member |
| memberName       | NSString             | Member name. Not required when inviting a member. |
| invalidTime       | NSInteger             | Invitation expiration time. Timestamp in milliseconds. Required when inviting a member. |
| phone       | NSString             | Phone number. Not required when inviting a member. |
| email       | NSString             | Email address. Not required when inviting a member. |
| uid       | NSString             | User ID. Not required when inviting a member. |

**Example**

```objc
QuecInviteFamilyMemberParamModel *inviteModel = QuecInviteFamilyMemberParamModel.new;
inviteModel.fid = @"your fid";
inviteModel.memberRole = @"3";
inviteModel.memberName= @"member name";
inviteModel.invalidTime = 1745234233467;
[QuecSmartHomeService.sharedInstance inviteFamilyMemberWithModel:inviteModel success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Handle Invitation for Becoming Home Member

**API**

When a user invites another user to join his/her home, the invited user calls this API to handle the invitation.

```objc
- (void)familyMemberInviteHandleWithFid:(NSString *)fid
                                 decide:(NSInteger)decide
                                success:(QuecVoidBlock)success
                                failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| fid |	Y|Home ID.|
| decide |	Y|Whether to accept the invitation.<br />0-Refuse<br />1-Accept|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecSmartHomeService.sharedInstance familyMemberInviteHandleWithFid:@"your fid" decide:1 success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Edit Home Member Name

**API**

Edit the name of a home member.

```objc
- (void)setFamilyMemberNameWithFid:(NSString *)fid
                         memberUid:(NSString *)memberUid
                        memberName:(NSString *)memberName
                           success:(QuecVoidBlock)success
                           failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| fid |	Y|Home ID.|
| memberUid |	Y|User ID of a home member.|
| memberName |	Y|Member name.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecSmartHomeService.sharedInstance setFamilyMemberNameWithFid:@"your fid"
                                                        memberUid:@"member uid"
                                                        memberName:@"member name"
                                                        success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Edit Home Member Role

**API**

Edit the role of a home member.

```objc
- (void)setFamilyMemberRoleWithFid:(NSString *)fid
                         memberUid:(NSString *)memberUid
                        memberRole:(NSString *)memberRole
                           success:(QuecVoidBlock)success
                           failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| fid |	Y|Home ID.|
| memberUid |	Y|User ID of a home member.|
| memberRole |	Y|Member role. <br />2-Administrator<br />3-Ordinary Member|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecSmartHomeService.sharedInstance setFamilyMemberRoleWithFid:@"your fid"
                                                          memberUid:@"member uid"
                                                         memberRole:@"member name"
                                                            success:^{
        /// Next Action
    } failure:^(NSError *error) {
        NSLog(@"check error: %@", error);
    }];
```

### Remove Home Member

**API**

Remove a home member.

```objc
- (void)deleteFamilyMemberWithFid:(NSString *)fid
                        memberUid:(NSString *)memberUid
                          success:(QuecVoidBlock)success
                          failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| fid |	Y|Home ID.|
| memberUid |	Y|User ID of a home member.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecSmartHomeService.sharedInstance deleteFamilyMemberWithFid:@"your fid"
                                                          memberUid:@"member uid"
                                                            success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Leave Home

**API**

Leave the current home.

```objc
- (void)leaveFamilyWithFid:(NSString *)fid
                   success:(QuecVoidBlock)success
                   failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| fid |	Y| Home ID. |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**Example**

```objc
[QuecSmartHomeService.sharedInstance leaveFamilyWithFid:@"your fid"
                                                    success:^{
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Query Home Member List

**API**

Query the list of members in the home.

```objc
- (void)getFamilyMemberListWithFid:(NSString *)fid
                        pageNumber:(NSInteger)pageNumber
                          pageSize:(NSInteger)pageSize
                           success:(void(^)(NSArray<QuecFamilyMemberItemModel *> *list, NSInteger total))success
                           failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| fid |	Y|Home ID.|
| pageNumber |	N|Page number. Default value: 1.|
| pageSize |	N| Page size. Default value: 10.            |
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

**QuecFamilyMemberItemModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| uid       | NSString             | User ID. |
| phone       | NSString             | Phone number. |
| nikeName       | NSString             | Nickname. |
| sex       | NSString             | Gender. |
| address       | NSString             | Address. |
| email       | NSString             | Email address. |
| headimg       | NSString             | Profile. |
| wechatMiniprogramUserId       | NSString             | Weixin Mini-program User ID. |
| wechatUnionId       | NSString             | WeChat User ID. |
| appleUserId       | NSString             | Apple User ID. |
| twitterUserId       | NSString             | Twitter User ID. |
| facebookUserId       | NSString             | Facebook User ID. |
| alipayUserId       | NSString             | Alipay User ID. |
| qqUserId       | NSString             | QQ User ID. |
| wechatOffiaccountUserId       | NSString             | Wechat Official Account User ID. |
| registerTime       | NSString             | Registration time. |
| registerTimeTs       | NSInteger             | Registration timestamp. |
| lastLoginTime       | NSString             | Last login time. |
| lastLoginTime       | NSString             | Last login timestamp. |
| timezone       | NSString             | Time zone. |
| nationality       | NSString             | Country/Region. |
| province       | NSString             | Province/State. |
| city       | NSString             | City. |
| lang       | NSString             | Language. |
| status       | NSInteger             | Status. |
| signature       | NSString             | Signature. |
| remark       | NSString             | Remarks. |
| memberRole       | NSInteger             | Member role. |
| memberName       | NSString             | Member name. |

**Example**

```objc
[QuecSmartHomeService.sharedInstance getFamilyMemberListWithFid:@"your fid"
                                                         pageNumber:1
                                                           pageSize:10
                                                            success:^(NSArray<QuecFamilyMemberItemModel *> *list, NSInteger total) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```

### Query List of Invited Member

**API**

Query the list of invited members.

```objc
- (void)getFamilyInviteListWithPageNumber:(NSInteger)pageNumber
                                 pageSize:(NSInteger)pageSize
                                  success:(void(^)(NSArray <QuecInviteItemModel *> *list, NSInteger total))success
                                  failure:(QuecErrorBlock)failure;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| pageNumber |	N|Page number. Default value: 1.|
| pageSize |	N|Page size. Default value: 10.|
| success |	N|Callback function of successful request.	|
| failure |	N|Callback function of failed request.	|

>See QuecInviteItemModel Definition above.

**Example**

```objc
[QuecSmartHomeService.sharedInstance getFamilyInviteListWithPageNumber:1
                                                                  pageSize:10
                                                                   success:^(NSArray<QuecInviteItemModel *> *list, NSInteger total) {
    /// Next Action
} failure:^(NSError *error) {
    NSLog(@"check error: %@", error);
}];
```
