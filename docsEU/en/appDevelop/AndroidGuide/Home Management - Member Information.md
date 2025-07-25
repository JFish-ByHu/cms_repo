# Member Information

## Feature Description

This section introduces how to manage members in homes, including adding a member, editing member information, removing a member, leaving the home, and querying the member list.

### Invite Home Member

**API**

Invite a new home member.

```kotlin
fun inviteFamilyMember(
    inviteModel: QuecInviteFamilyMemberParamModel, callback: QuecCallback<Unit>
)
```

**Parameter**

| Parameter   | Required | Description                         |
| ----------- | -------- | ----------------------------------- |
| inviteModel | Y        | Template of the invitation message. |
| callback    | Y        | Callback function of the request.   |

**QuecInviteFamilyMemberParamModel Definition**

| Field       | Type   | Description                                                                               |
|-------------|--------|-------------------------------------------------------------------------------------------|
| fid         | String | Home ID. Required when inviting a member.                                                 |
| memberRole  | String | Member role. Required when inviting a member.<br />2-Administrator<br />3-Ordinary Member |
| memberName  | String | Member name. Not required when inviting a member.                                         |
| invalidTime | Long   | Invitation expiration time. Timestamp in milliseconds. Required when inviting a member.   |
| phone       | String | Phone number. Not required when inviting a member.                                        |
| email       | String | Email address. Not required when inviting a member.                                       |
| uid         | String | User ID. Not required when inviting a member.                                             |

**Example**

```kotlin
QuecSmartHomeService.inviteFamilyMember(
    QuecInviteFamilyMemberParamModel(
        "fid",
        "3",
        "memberName",
        System.currentTimeMillis() + 90000,
        null,
        null,
        null
    )
) {
    if (it.isSuccess) {
        //Invite a new member successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Handle Invitation for Becoming Home Member

**API**

When a user invites another user to join his/her home, the invited user calls this API to handle the invitation.

```kotlin
fun familyMemberInviteHandle(fid: String, decide: Int, callback: QuecCallback<Unit>)
```

**Parameter**

| Parameter | Required | Description                                                  |
| --------- | -------- | ------------------------------------------------------------ |
| fid       | Y        | Home ID.                                                     |
| decide    | Y        | Whether to accept the invitation.<br />0-Refuse<br />1-Accept |
| callback  | Y        | Callback function of the request.                            |

**Example**

```kotlin
QuecSmartHomeService.familyMemberInviteHandle("fid", 1) {
    if (it.isSuccess) {
        //Handle the invitation for becoming a home member successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Edit Home Member Name

**API**

Edit the name of a home member.

```kotlin
fun setFamilyMemberName(
    fid: String, memberUid: String, memberName: String, callback: QuecCallback<Unit>
)
```

**Parameter**

| Parameter  | Required | Description                       |
| ---------- | -------- | --------------------------------- |
| fid        | Y        | Home ID.                          |
| memberUid  | Y        | User ID of a home member.         |
| memberName | Y        | Member name.                      |
| callback   | Y        | Callback function of the request. |

**Example**

```kotlin
QuecSmartHomeService.setFamilyMemberName("fid", "memberUid", "newName") {
    if (it.isSuccess) {
        //Edit the name of a home member successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Edit Home Member Role

**API**

Edit the role of a home member.

```kotlin
fun setFamilyMemberRole(
    fid: String, memberUid: String, memberRole: String, callback: QuecCallback<Unit>
)
```

**Parameter**

| Parameter  | Required | Description                                               |
| ---------- | -------- | --------------------------------------------------------- |
| fid        | Y        | Home ID.                                                  |
| memberUid  | Y        | User ID of a home member.                                 |
| memberRole | Y        | Member role. <br />2-Administrator<br />3-Ordinary Member |
| callback   | Y        | Callback function of the request.                         |

**Example**

```kotlin
QuecSmartHomeService.setFamilyMemberRole("fid", "memberUid", "2") {
    if (it.isSuccess) {
        //Edit the role of a home member successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Remove Home Member

**API**

Remove a home member.

```kotlin
fun deleteFamilyMember(
    fid: String, memberUid: String, callback: QuecCallback<Unit>
)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| fid       | Y        | Home ID.                          |
| memberUid | Y        | User ID of a home member.         |
| callback  | Y        | Callback function of the request. |

**Example**

```kotlin
QuecSmartHomeService.deleteFamilyMember("fid", "memberUid") {
    if (it.isSuccess) {
        //Remove a home member successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Leave Home

**API**

Leave the current home.

```kotlin
fun leaveFamily(fid: String, callback: QuecCallback<Unit>)
```

**Parameter**

| Parameter | Required | Description                       |
| --------- | -------- | --------------------------------- |
| fid       | Y        | Home ID.                          |
| callback  | Y        | Callback function of the request. |

**Example**

```kotlin
QuecSmartHomeService.leaveFamily("fid") {
    if (it.isSuccess) {
        //Leave the current home successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Query Home Member List

**API**

Query the list of members in the home.

```kotlin
fun getFamilyMemberList(
    fid: String,
    pageNumber: Int,
    pageSize: Int,
    callback: QuecCallback<QuecPageResponse<QuecFamilyMemberItemModel>>
)
```

**Parameter**

| Parameter  | Required | Description                       |
| ---------- | -------- | --------------------------------- |
| fid        | Y        | Home ID.                          |
| pageNumber | N        | Page number. Default value: 1.    |
| pageSize   | N        | Page size. Default value: 10.     |
| callback   | Y        | Callback function of the request. |

**QuecFamilyMemberItemModel Definition**

| Field                   | Type   | Description                      |
|-------------------------|--------|----------------------------------|
| uid                     | String | User ID.                         |
| phone                   | String | Phone number.                    |
| nikeName                | String | Nickname.                        |
| sex                     | String | Gender.                          |
| address                 | String | Address.                         |
| email                   | String | Email address.                   |
| headimg                 | String | Profile.                         |
| wechatMiniprogramUserId | String | WeChat Mini-program User ID.     |
| wechatUnionId           | String | WeChat User ID.                  |
| appleUserId             | String | Apple User ID.                   |
| twitterUserId           | String | Twitter User ID.                 |
| facebookUserId          | String | Facebook User ID.                |
| alipayUserId            | String | Alipay User ID.                  |
| qqUserId                | String | QQ User ID.                      |
| wechatOffiaccountUserId | String | Wechat Official Account User ID. |
| registerTime            | String | Registration time.               |
| registerTimeTs          | Long   | Registration timestamp.          |
| lastLoginTime           | String | Last login time.                 |
| lastLoginTime           | String | Last login timestamp.            |
| timezone                | String | Time zone.                       |
| nationality             | String | Country/Region.                  |
| province                | String | Province/State.                  |
| city                    | String | City.                            |
| lang                    | String | Language.                        |
| status                  | Int    | Status.                          |
| signature               | String | Signature.                       |
| remark                  | String | Remarks.                         |
| memberRole              | Int    | Member role.                     |
| memberName              | String | Member name.                     |

**Example**

```kotlin
QuecSmartHomeService.getFamilyMemberList("fid", 1, 10) {
    if (it.isSuccess) {
        val data = it.data //Query the list of members in the home successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Query List of Invited Member

**API**

Query the list of invited members.

```kotlin
fun getFamilyInviteList(
    pageNumber: Int,
    pageSize: Int,
    callback: QuecCallback<QuecPageResponse<QuecInviteItemModel>>
)
```

**Parameter**

| Parameter  | Required | Description                       |
| ---------- | -------- | --------------------------------- |
| pageNumber | N        | Page number. Default value: 1.    |
| pageSize   | N        | Page size. Default value: 10.     |
| callback   | Y        | Callback function of the request. |

> See QuecInviteItemModel Definition above.

**Example**

```kotlin
QuecSmartHomeService.getFamilyInviteList(1, 10) {
    if (it.isSuccess) {
        val data = it.data //Query the list of invited members successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```
