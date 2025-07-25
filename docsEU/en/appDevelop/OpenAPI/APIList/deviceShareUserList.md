# Sharer Query for Device Share Recipient List


**API Address**:`/v2/binding/enduserapi/deviceShareUserList`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Sharer queries the list of recipients for a shared device`


**Request Parameters**:


| Parameter Name | Parameter Description | Request Type | Required | Data Type | Schema |
| -------------- | --------------------- | ------------ | -------- | --------- | ------ |
| dk             | Device Key            | query        | true     | string    |        |
| pk             | Product Key           | query        | true     | string    |        |


**Response Status**:


| Status Code | Description                                             | Schema                                       |
| ----------- | ------------------------------------------------------- | -------------------------------------------- |
| 200         | Sharer successfully queried device share recipient list | Registration code response data«List«Device Share User»» |
| 5032        | Token verification failed                               |                                              |
| 5066        | Please enter Product Key                                |                                              |
| 5067        | Please enter Device Key                                 |                                              |
| 5106        | Please enter token                                      |                                              |
| 5141        | No permission to query this device                      |                                              |


**Response Parameters**:


| Parameter Name                                  | Parameter Description                       | Type               | Schema             |
| ----------------------------------------------- | ------------------------------------------- | ------------------ | ------------------ |
| code                                            | Response status code                        | integer(int32)     | integer(int32)     |
| data                                            | Response data                               | array              | Device Share User  |
| &emsp;&emsp;shareInfo                           | Share information                           | BidShareModelExtV1 | BidShareModelExtV1 |
| &emsp;&emsp;&emsp;&emsp;acceptTime              | Share acceptance time                       | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;acceptTimeTs            | Acceptance timestamp                        | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;acceptingExpireAt       | Share acceptance expiration time            | string             |                    |
| &emsp;&emsp;&emsp;&emsp;acceptingExpireAtTs     | Share acceptance expiration timestamp       | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;authKey                 | authKey                                     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;coverMark               | Cover flag                                  | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;deleteTime              | Share acceptance time                       | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;deleteTimeTs            | Cancellation timestamp                      | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;deviceName              | Device name                                 | string             |                    |
| &emsp;&emsp;&emsp;&emsp;dk                      | dk                                          | string             |                    |
| &emsp;&emsp;&emsp;&emsp;failureCause            | Failure reason                              | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;fid                     | Family ID                                   | string             |                    |
| &emsp;&emsp;&emsp;&emsp;ownerUid                | Sharer ID                                   | string             |                    |
| &emsp;&emsp;&emsp;&emsp;pk                      | pk                                          | string             |                    |
| &emsp;&emsp;&emsp;&emsp;shareCode               | Share code                                  | string             |                    |
| &emsp;&emsp;&emsp;&emsp;shareId                 | Share ID                                    | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;shareStatus             | Share status                                | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;shareTime               | Share time                                  | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;shareTimeTs             | Share timestamp                             | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;shareUid                | Share recipient ID                          | string             |                    |
| &emsp;&emsp;&emsp;&emsp;sharingExpireAt         | Device usage expiration time                | string             |                    |
| &emsp;&emsp;&emsp;&emsp;sharingExpireAtTs       | Device usage expiration timestamp           | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;updateTime              | Modification time                           | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;updateTimeTs            | Modification timestamp                      | integer            |                    |
| &emsp;&emsp;userInfo                            | User information                            | User Information   | User Information   |
| &emsp;&emsp;&emsp;&emsp;address                 | Address                                     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;alipayUserId            | Alipay user ID                              | string             |                    |
| &emsp;&emsp;&emsp;&emsp;city                    | City                                        | string             |                    |
| &emsp;&emsp;&emsp;&emsp;email                   | email                                       | string             |                    |
| &emsp;&emsp;&emsp;&emsp;facebookUserId          | Facebook user ID                            | string             |                    |
| &emsp;&emsp;&emsp;&emsp;headimg                 | Profile picture                             | string             |                    |
| &emsp;&emsp;&emsp;&emsp;lang                    | Language                                    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;lastLoginTime           | Last login time                             | string             |                    |
| &emsp;&emsp;&emsp;&emsp;lastLoginTimeTs         |                                             | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;nationality             | Country                                     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;nikeName                | Nickname                                    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;phone                   | Phone number                                | string             |                    |
| &emsp;&emsp;&emsp;&emsp;province                | Province                                    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;qqUserId                | QQ user ID                                  | string             |                    |
| &emsp;&emsp;&emsp;&emsp;registerTime            | Registration time                           | string             |                    |
| &emsp;&emsp;&emsp;&emsp;registerTimeTs          |                                             | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;remark                  | Remarks                                     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;sex                     | Gender                                      | string             |                    |
| &emsp;&emsp;&emsp;&emsp;signature               | Personal signature                          | string             |                    |
| &emsp;&emsp;&emsp;&emsp;status                  | Account status: 0 Disabled 1 Normal         | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;timezone                | Timezone                                    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;twitterUserId           | Twitter user ID                             | string             |                    |
| &emsp;&emsp;&emsp;&emsp;uid                     | User ID                                     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;userDomain              | User domain                                 | string             |                    |
| &emsp;&emsp;&emsp;&emsp;wechatMiniprogramUserId | WeChat Mini Program user ID                 | string             |                    |
| &emsp;&emsp;&emsp;&emsp;wechatOffiaccountUserId | WeChat Official Account user ID             | string             |                    |
| &emsp;&emsp;&emsp;&emsp;wechatUnionId           | WeChat Universal user ID                    | string             |                    |
| extMsg                                          | Extended message                            | string             |                    |
| msg                                             | Response message                            | string             |                    |


**Response Example**:
```javascript
{
	"code": 0,
	"data": [
		{
			"shareInfo": {
				"acceptTime": 0,
				"acceptTimeTs": 0,
				"acceptingExpireAt": "",
				"acceptingExpireAtTs": 0,
				"authKey": "",
				"coverMark": 0,
				"deleteTime": 0,
				"deleteTimeTs": 0,
				"deviceName": "",
				"dk": "",
				"failureCause": 0,
				"fid": "",
				"ownerUid": "",
				"pk": "",
				"shareCode": "",
				"shareId": 0,
				"shareStatus": 0,
				"shareTime": 0,
				"shareTimeTs": 0,
				"shareUid": "",
				"sharingExpireAt": "",
				"sharingExpireAtTs": 0,
				"updateTime": 0,
				"updateTimeTs": 0
			},
			"userInfo": {
				"address": "",
				"alipayUserId": "",
				"city": "",
				"email": "",
				"facebookUserId": "",
				"headimg": "",
				"lang": "",
				"lastLoginTime": "",
				"lastLoginTimeTs": 0,
				"nationality": "",
				"nikeName": "",
				"phone": "",
				"province": "",
				"qqUserId": "",
				"registerTime": "",
				"registerTimeTs": 0,
				"remark": "",
				"sex": "",
				"signature": "",
				"status": 0,
				"timezone": "",
				"twitterUserId": "",
				"uid": "",
				"userDomain": "",
				"wechatMiniprogramUserId": "",
				"wechatOffiaccountUserId": "",
				"wechatUnionId": ""
			}
		}
	],
	"extMsg": "",
	"msg": ""
}
```