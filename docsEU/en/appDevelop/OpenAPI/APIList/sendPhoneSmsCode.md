# Send Mobile SMS Verification Code


**Interface Address**:`/v2/sms/enduserapi/v2/sendPhoneSmsCode`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**Interface Description**:`Send mobile SMS verification code. The last unused SMS verification code sent within 5 minutes is valid`


**Request Parameters**:


| Parameter Name    | Parameter Description                                                                          | Request Type | Required | Data Type      | schema |
| ----------------- | ---------------------------------------------------------------------------------------------- | ------------ | -------- | -------------- | ------ |
| codeType          | SMS type (1-Password reset 2-Login 3-Registration 4-Account cancellation 5-Add push recipient) | query        | true     | integer(int32) |        |
| internationalCode | International code                                                                             | query        | true     | string         |        |
| phone             | Phone number                                                                                   | query        | true     | string         |        |
| random            | Random string, fixed length of 16 characters                                                   | query        | true     | string         |        |
| signature         | Signature<br/>Generation rule: SHA256(phone + codeType + random + ts + userDomainSecret)<br/>After SHA256 encoding, the data uses HEX_ENCODE format.<br/>Example:<br/>phone: 13800138000<br/>codeType: 3<br/>random: 76a6L647F02CAoN9<br/>ts: 1744773894369<br/>userDomainSecret: 57Fk69oYgbs2aWWN362NtZwYB2RqKNqQ7yZESnF5VM33<br/>Signature format:<br/>SHA256(13800138000376a6L647F02CAoN9174477389436957Fk69oYgbs2aWWN362NtZwYB2RqKNqQ7yZESnF5VM33)<br/>Calculated signature:<br/>e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855 | query        | true     | string         |        |
| ts                | Current millisecond timestamp, cannot differ from server time by more than 10 minutes          | query        | true     | integer(int64) |        |
| userDomain        | User domain                                                                                    | query        | true     | string         |        |


**Response Status**:


| Status Code | Description                                          | schema                     |
| ----------- | ---------------------------------------------------- | -------------------------- |
| 200         | Mobile SMS verification code sent successfully       | Registration code response data |
| 5019        | Phone number format incorrect                        |                            |
| 5021        | Please enter phone number                            |                            |
| 5023        | Please enter user domain                             |                            |
| 5058        | SMS sending exceeds frequency limit                  |                            |
| 5059        | SMS sending exception                                |                            |
| 5116        | Please enter international code                      |                            |
| 5117        | Please enter enterprise SMS signature ID             |                            |
| 5118        | Please enter enterprise SMS template ID              |                            |
| 5122        | No permission to use this enterprise SMS signature ID |                           |
| 5123        | Enterprise SMS signature ID has been disabled        |                            |
| 5124        | No permission to use this enterprise SMS template ID |                            |
| 5125        | Enterprise SMS template ID has been disabled         |                            |
| 5126        | SMS signature and template not under the same SMS account |                       |
| 5128        | Enterprise SMS account has been disabled             |                            |
| 5188        | Enterprise SMS account does not exist                |                            |
| 5202        | Enterprise SMS signature does not exist              |                            |
| 5209        | Enterprise SMS template does not exist               |                            |
| 5216        | Signature ID and template ID types must be consistent |                           |


**Response Parameters**:


| Parameter Name | Parameter Description | Type           | schema         |
| -------------- | --------------------- | -------------- | -------------- |
| code           | Response status code  | integer(int32) | integer(int32) |
| data           | Response data         | object         |                |
| extMsg         | Extended message      | string         |                |
| msg            | Response message      | string         |                |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {},
	"extMsg": "",
	"msg": ""
}
```