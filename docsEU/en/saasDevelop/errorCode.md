# Error Code Summary

The error codes returned by Developer Center during the OpenAPI and AMQP message subscription development process for reference in SaaS application development are summarized below.


## **Message Subscription Management API Error Codes**

| Error Code | Description                                                                                                                   |
| :--------- | :---------------------------------------------------------------------------------------------------------------------------- |
| 16001      | Failed to create a message queue. Queue name already exists.                                                                  |
| 16002      | Nonexistent message queue.                                                                                                    |
| 16003      | Exception occurred when querying queue.                                                                                       |
| 16004      | Exception occurred when creating queue.                                                                                       |
| 16005      | Exception occurred when deleting queue.                                                                                       |
| 16006      | Exception occurred when clearing queue data.                                                                                  |
| 16007      | Failed to create a message queue. The number of queues exceeds limit.                                                         |
| 16008      | Failed to delete a message queue. Related subscription should be canceled.                                                    |
| 16011      | Nonexistent subscription rule.                                                                                                |
| 16012      | Exception occurred when querying subscription rule.                                                                           |
| 16013      | Exception occurred when creating subscription rule.                                                                           |
| 16014      | Exception occurred when modifying subscription rule.                                                                          |
| 16015      | Exception occurred when deleting subscription rule.                                                                           |
| 16016      | Exception occurred when starting subscription rule.                                                                           |
| 16017      | Exception occurred when stopping subscription rule.                                                                           |
| 16018      | Failed to create a subscription. The number of subscription rules exceeds limit.                                              |
| 16019      | Failed operation. Related subscription should be stopped.                                                                     |
| 16020      | Error. Message subscription rule has already started.                                                                         |
| 16021      | Error. Message subscription rule has not started.                                                                             |
| 16022      | Error. Running subscription rule cannot be modified.                                                                          |
| 16023      | Nonexistent queue configurations.                                                                                             |
| 16024      | Message subscription service is not activated. You can request the message subscription service on Message Subscription page. |

## **Product and Device Management API Error Codes**


| Error Code | Description                                                                       |
| :--------- | :-------------------------------------------------------------------------------- |
| 200        | OK                                                                                |
| 5154       | Please input the generated SN.                                                    |
| 5155       | The number of generated SNs cannot exceed 10000.                                  |
| 5156       | Please input the coverage mode.                                                   |
| 5157       | Incorrect coverage mode value.                                                    |
| 5158       | Please input the device SN list.                                                  |
| 5159       | Total number of device SNs exceeds the allowable range for the   list.            |
| 5160       | Please input the query list.                                                      |
| 5161       | Total number of queries in the list is outside of allowable   range.              |
| 50000      | Service exception.                                                                |
| 50005      | Parameter error.                                                                  |
| 50006      | ProductID or ProductKey is empty.                                                 |
| 50007      | DeviceID, ProductKey or DeviceKey is empty.                                       |
| 61001      | Protocol is not supported.                                                        |
| 61002      | Device is offline.                                                                |
| 61005      | Unauthenticated device.                                                           |
| 61006      | Number of transmitted device messages reached the upper limit.                    |
| 61007      | Frequency of transmitted device messages reached the upper limit.                 |
| 61016      | Insufficient activation code.                                                     |
| 70000      | Unavailable service.                                                              |
| 70016      | Product name already exists.                                                      |
| 70017      | Nonexistent product.                                                              |
| 70020      | Not a gateway product.                                                            |
| 70026      | Sub-device is not connected to the gateway device.                                |
| 70027      | Sub-device   access gateway method is not a product a product   integration type. |
| 70028      | No associated gateway device.                                                     |
| 70029      | Not a sub-gateway product.                                                        |
| 70041      | You cannot modify the published product.                                          |
| 70051      | Failed to send data.                                                              |
| 70053      | Abnormal product.                                                                 |
| 70054      | This product has already been published.                                          |
| 70056      | No available device under the product.                                            |
| 70062      | This DeviceKey is already in use or has been duplicated.                          |
| 70063      | Device configured in transparent transmission mode cannot send   TSL data.        |
| 70064      | Product name hasn't been changed.                                                 |
| 70065      | Device is offline.                                                                |
| 70071      | Secondary authentication is not permitted for virtual devices.                    |
| 70074      | Duplicate locateType.                                                             |
| 70083      | Product category and parameter type do not match.                                 |
| 70090      | The number exceeds the limit or step size range.                                  |
| 70091      | This value is not a member of the enumeration.                                    |
| 70092      | Text length exceeds limit.                                                        |
| 70093      | Incorrect timestamp string.                                                       |
| 70094      | TSL model has failed to analyze and identify data.                                |
| 70095      | Failed to send data to IoT Bridge docking service.                                |
| 70096      | Failed to send command to Telecom platform from Developer   Center.               |
| 70097      | The selected TSL model is empty.                                                  |
| 70130      | Nonexistent device.                                                               |
| 70177      | Unpublished product.                                                              |
| 70178      | The product without activated device cannot be published.                         |
| 70215      | Positioning method is not supported.                                              |
| 70216      | This device does not support positioning feature.                                 |
| 71006      | TSL data of the current version is not found.                                     |
| 71008      | TSL message format verification error.                                            |
| 71009      | Target product belongs to a category that is different from   original product.   |
| 71010      | Original product TSL data to be copied does not exist.                            |
| 71027      | TSL model downlink data format is not JSON.                                       |
| 71028      | Verification of data issued by the TSL model has failed.                          |
| 71029      | Data issued by the TSL model is illegal.                                          |
| 71035      | Parameter verification error.                                                     |
| 71036      | TSL parameter verification error.                                                 |
| 71038      | Read-only data cannot be sent out.                                                |
| 71039      | Length of the message array exceeds the defined size.                             |
| 71047      | Downlink TSL data verification error.                                             |
| 71048      | Get command cannot contain only write-only data.                                  |
| 91001      | Nonexistent token.                                                                |
| 91004      | Wrong token.                                                                      |
| 91005      | Limited permission.                                                               |
| 91006      | Account is not on IP Whitelist.                                                   |
| 91007      | API permission needs to be activated.                                             |
  

## **Terminal User Management API Error Codes**

| **Error Code** | **Description**                                                                                                                                                     |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5000           | Service exception.                                                                                                                                                  |
| 5001           | Illegal mobile number.                                                                                                                                              |
| 5002           | The mobile number is registered.                                                                                                                                    |
| 5003           | Incorrect SMS verification code.                                                                                                                                    |
| 5004           | The mobile number is not registered.                                                                                                                                |
| 5005           | Incorrect mobile number or password.                                                                                                                                |
| 5008           | Incorrect original password.                                                                                                                                        |
| 5009           | Device verification failed.                                                                                                                                         |
| 5011           | Device information format verification failed.                                                                                                                      |
| 5012           | Incorrect username or password.                                                                                                                                     |
| 5013           | Incorrect user domain format.                                                                                                                                       |
| 5014           | The user domain already exists.                                                                                                                                     |
| 5015           | The user domain does not exist.                                                                                                                                     |
| 5016           | Failed to add data.                                                                                                                                                 |
| 5017           | Failed to send the message.                                                                                                                                         |
| 5018           | SMS template undefined.                                                                                                                                             |
| 5019           | Incorrect mobile number format.                                                                                                                                     |
| 5020           | The SMS to be resent does not exist.                                                                                                                                |
| 5021           | Please input your mobile number.                                                                                                                                    |
| 5022           | Please input your password.                                                                                                                                         |
| 5023           | Please input your user domain.                                                                                                                                      |
| 5024           | Please input your WeChat ID.                                                                                                                                        |
| 5025           | Please input your WeChat name.                                                                                                                                      |
| 5026           | Please input your email address.                                                                                                                                    |
| 5027           | The email address already exists.                                                                                                                                   |
| 5028           | Incorrect password.                                                                                                                                                 |
| 5029           | Please input your SMS verification code.                                                                                                                            |
| 5030           | WeChat is not registered.                                                                                                                                           |
| 5031           | The email address is not registered.                                                                                                                                |
| 5032           | Token verification failed.                                                                                                                                          |
| 5033           | The user does not exist.                                                                                                                                            |
| 5034           | User information format verification failed.                                                                                                                        |
| 5035           | Please input your new password.                                                                                                                                     |
| 5036           | Key verification failed.                                                                                                                                            |
| 5037           | SMS verification failed.                                                                                                                                            |
| 5038           | WeChat is registered.                                                                                                                                               |
| 5039           | The email address is registered.                                                                                                                                    |
| 5040           | Incorrect email address.                                                                                                                                            |
| 5041           | Permission denied.                                                                                                                                                  |
| 5042           | Failed to modify user information.                                                                                                                                  |
| 5043           | Failed to change password.                                                                                                                                          |
| 5044           | Please input your mobile number or email address.                                                                                                                   |
| 5045           | User logout failed.                                                                                                                                                 |
| 5046           | Email verification failed.                                                                                                                                          |
| 5047           | User authentication mismatch.                                                                                                                                       |
| 5048           | Failed to bind device.                                                                                                                                              |
| 5049           | The device is bound.                                                                                                                                                |
| 5050           | Failed to unbind device.                                                                                                                                            |
| 5051           | Failed to query device information.                                                                                                                                 |
| 5052           | Device is not bound.                                                                                                                                                |
| 5053           | Failed to send command.                                                                                                                                             |
| 5054           | Failed to modify device information.                                                                                                                                |
| 5055           | Please input the key.                                                                                                                                               |
| 5056           | Incorrect password format. Please input 6-20 alphanumeric   characters or special characters.                                                                       |
| 5057           | Please upload a profile photo for WeChat.                                                                                                                           |
| 5058           | SMS sending is out of the limited frequency allowable range.                                                                                                        |
| 5059           | SMS sending exception.                                                                                                                                              |
| 5060           | Username length cannot exceed 50 characters.                                                                                                                        |
| 5061           | Illegal gender. 0: Male; 1: Female; 2: Confidential                                                                                                                 |
| 5062           | Please input the user information to be modified.                                                                                                                   |
| 5063           | The new password cannot be the same as the original password.                                                                                                       |
| 5064           | Please input the verification code.                                                                                                                                 |
| 5065           | Please input your user ID.                                                                                                                                          |
| 5066           | Please input the ProductKey.                                                                                                                                        |
| 5067           | Please input the DeviceKey.                                                                                                                                         |
| 5068           | Please input the device name.                                                                                                                                       |
| 5069           | Device name length cannot exceed 254.                                                                                                                               |
| 5070           | Please input the type.                                                                                                                                              |
| 5071           | Type error. Types are as follows:    1: Transparent transmission; 2: Property; 3: Service                                                                           |
| 5072           | Please input the data type.                                                                                                                                         |
| 5073           | Data type error. Data types: 1: Hex; 2: Text (if transparent   transmission, data format needs to be specified)                                                     |
| 5074           | Please input the command to control the device.                                                                                                                     |
| 5075           | The length of the command to control the device cannot exceed   4096.                                                                                               |
| 5076           | Address length cannot exceed 254 characters.                                                                                                                        |
| 5077           | Failed to add user domain SMS template.                                                                                                                             |
| 5078           | Please choose to enable or disable.                                                                                                                                 |
| 5079           | Value exception for enabled or disabled. 0: disabled; 1:   enabled.                                                                                                 |
| 5080           | Failed to enable or disable user domain SMS template.                                                                                                               |
| 5081           | Failed to delete user domain SMS template.                                                                                                                          |
| 5082           | Please input the SMS platform ID.                                                                                                                                   |
| 5083           | Please input the user domain ID.                                                                                                                                    |
| 5084           | Please input the template name.                                                                                                                                     |
| 5085           | Please input the template ID of the   third-party SMS platform.                                                                                                     |
| 5086           | Please input the template content.                                                                                                                                  |
| 5087           | User domain SMS template verification   failed.                                                                                                                     |
| 5088           | Please input the device SN.                                                                                                                                         |
| 5089           | Device SN request failed.                                                                                                                                           |
| 5090           | Requested device SN is invalid.                                                                                                                                     |
| 5091           | Device IMEI verification failed.                                                                                                                                    |
| 5092           | User domain is not set.                                                                                                                                             |
| 5093           | Abnormal user domain.                                                                                                                                               |
| 5094           | Please input the SMS template ID of the user domain.                                                                                                                |
| 5095           | SMS template ID of the user domain is invalid.                                                                                                                      |
| 5096           | Please input your username/email.                                                                                                                                   |
| 5097           | Incorrect username/email or password.                                                                                                                               |
| 5098           | Failed to activate or deactivate user domain.                                                                                                                       |
| 5099           | Failed to delete user domain.                                                                                                                                       |
| 5100           | Illegal enterprise ID.                                                                                                                                              |
| 5101           | Email/Account is not registered.                                                                                                                                    |
| 5102           | Failed to query SMS template of the third-party SMS platform.                                                                                                       |
| 5103           | Data exception.                                                                                                                                                     |
| 5104           | User domain is disabled.                                                                                                                                            |
| 5105           | SMS template of the user domain is disabled.                                                                                                                        |
| 5106           | Please input the token.                                                                                                                                             |
| 5107           | Please input the start time.                                                                                                                                        |
| 5108           | Please input the end time.                                                                                                                                          |
| 5109           | Incorrect start time format.                                                                                                                                        |
| 5110           | Incorrect end time format.                                                                                                                                          |
| 5111           | Please input the IMEI.                                                                                                                                              |
| 5112           | Please input the enterprise ID.                                                                                                                                     |
| 5113           | Please input the user ID list.                                                                                                                                      |
| 5114           | Failed to query Developer Center service property.                                                                                                                  |
| 5115           | Please input the refreshed token.                                                                                                                                   |
| 5116           | Please input the international code.                                                                                                                                |
| 5117           | Please input the enterprise SMS signature   ID.                                                                                                                     |
| 5118           | Please input the enterprise SMS template   ID.                                                                                                                      |
| 5119           | SMS signature is not configured.                                                                                                                                    |
| 5120           | SMS template is not configured.                                                                                                                                     |
| 5121           | Invalid isDisabled value. Valid range: 1, 2.                                                                                                                        |
| 5122           | The account has limited permission on using this enterprise   SMS signature ID.                                                                                     |
| 5123           | Enterprise SMS signature ID is disabled.                                                                                                                            |
| 5124           | The account has limited permission on using this enterprise   SMS template ID.                                                                                      |
| 5125           | Enterprise SMS template ID is disabled.                                                                                                                             |
| 5126           | SMS signature and SMS template are not under the same SMS   account.                                                                                                |
| 5127           | The account has limited permission on using this enterprise   SMS account.                                                                                          |
| 5128           | Enterprise SMS account is disabled                                                                                                                                  |
| 5129           | Failed to delete the user.                                                                                                                                          |
| 5130           | Failed to set UID and password.                                                                                                                                     |
| 5131           | Please input the user ID list string.                                                                                                                               |
| 5132           | Please input the expiration time of the   shared QR code seed.                                                                                                      |
| 5133           | Value of coverage flag is out of   allowable range.                                                                                                                 |
| 5134           | Failed to add device sharing information.                                                                                                                           |
| 5135           | The account has limited permission on sharing this device.                                                                                                          |
| 5136           | Please input the share code.                                                                                                                                        |
| 5137           | Invalid share code.                                                                                                                                                 |
| 5138           | Failed to share the device.                                                                                                                                         |
| 5139           | You cannot use a share code that you have   shared yourself.                                                                                                        |
| 5140           | Please input the PK, DK or share code.                                                                                                                              |
| 5141           | The account has limited permission on querying this device.                                                                                                         |
| 5142           | Expired sharing.                                                                                                                                                    |
| 5143           | Please input the authorization code.                                                                                                                                |
| 5144           | Authentication failure.                                                                                                                                             |
| 5145           | Incorrect timestamp format.                                                                                                                                         |
| 5146           | X, You have X attempts before your account is locked.                                                                                                               |
| 5147           | Your account has been temporarily locked. Please try again   after 20 minutes.                                                                                      |
| 5148           | The current IP address is blocked. Please try again in 20   minutes.                                                                                                |
| 5149           | Please input the SMS ID.                                                                                                                                            |
| 5150           | Invalid SMS ID.                                                                                                                                                     |
| 5151           | The coverage flag is 3, and the expiration time of the share   code used by the device cannot be less than the expiration time of the previously   used share code. |
| 5152           | Invalid deletion type. Valid range: 1, 2.                                                                                                                           |
| 5153           | The expiration time of the device must be greater than the   expiration time of the shared QR code seed.                                                            |
| 5154           | Please input the generated SN.                                                                                                                                      |
| 5155           | The number of generated SNs cannot exceed   10,000.                                                                                                                 |
| 5156           | Please input the coverage mode.                                                                                                                                     |
| 5157           | Incorrect coverage mode value.                                                                                                                                      |
| 5158           | Please input the device SN list.                                                                                                                                    |
| 5159           | Total number of device SNs exceeds the   allowable range for the list.                                                                                              |
| 5160           | Please input the query list.                                                                                                                                        |
| 5161           | Total number of queries in the list is   outside of allowable range.                                                                                                |
| 5162           | Please input the international code of   the original mobile number.                                                                                                |
| 5163           | Please input the original mobile number.                                                                                                                            |
| 5164           | Please input the verification code   received by the original mobile number.                                                                                        |
| 5165           | Please input the international code of   the new mobile number.                                                                                                     |
| 5166           | Please input a new mobile number.                                                                                                                                   |
| 5167           | Please input the verification code received by the new mobile   number.                                                                                             |
| 5168           | Failed to verify the original mobile number.                                                                                                                        |
| 5169           | Failed to verify the new mobile number.                                                                                                                             |
| 5170           | Failed to modify mobile number.                                                                                                                                     |
| 5171           | Time zone parameter value verification failed.                                                                                                                      |
| 5172           | Country parameter value verification failed.                                                                                                                        |
| 5173           | Language parameter value verification failed.                                                                                                                       |
| 5174           | The original mobile number is incorrect.                                                                                                                            |
| 5175           | The new mobile number is in a 7-day logout state and cannot be   used here.                                                                                         |
| 5176           | The new mobile number has been registered.                                                                                                                          |
| 5177           | The new mobile number cannot be the same as the original   mobile number.                                                                                           |
| 5178           | Incorrect SN format.                                                                                                                                                |
| 5179           | Please input the bindingCode.                                                                                                                                       |
| 5180           | Please input the SMS platform.                                                                                                                                      |
| 5181           | Value of SMS platform is incorrect.                                                                                                                                 |
| 5182           | Please input the account name.                                                                                                                                      |
| 5183           | Please input the AccessKey.                                                                                                                                         |
| 5184           | Please input the AccessSecret.                                                                                                                                      |
| 5185           | Failed to add SMS account.                                                                                                                                          |
| 5186           | SMS account AccessKey or AccessSecret verification failed.                                                                                                          |
| 5187           | Please input your enterprise SMS account.                                                                                                                           |
| 5188           | Nonexistent enterprise SMS account.                                                                                                                                 |
| 5190           | Failed to modify enterprise SMS account.                                                                                                                            |
| 5191           | Failed to enable or disable enterprise SMS account.                                                                                                                 |
| 5192           | Failed to delete enterprise SMS account.                                                                                                                            |
| 5193           | Failed to query TSL.                                                                                                                                                |
| 5194           | Please input the SMS signature.                                                                                                                                     |
| 5195           | Wrong enterprise SMS account ID.                                                                                                                                    |
| 5196           | SMS signature verification failed.                                                                                                                                  |
| 5197           | SMS signature is not approved.                                                                                                                                      |
| 5198           | SMS template ID verification failed.                                                                                                                                |
| 5199           | SMS template is not approved.                                                                                                                                       |
| 5200           | Failed to add enterprise SMS signature.                                                                                                                             |
| 5201           | Incorrect format of the enterprise SMS account name.                                                                                                                |
| 5202           | Nonexistent enterprise SMS signature.                                                                                                                               |
| 5203           | Failed to enable or disable enterprise SMS signature.                                                                                                               |
| 5204           | Failed to delete enterprise SMS signature.                                                                                                                          |
| 5205           | Please input the user domain list.                                                                                                                                  |
| 5206           | User domain list verification failed.                                                                                                                               |
| 5207           | User domain authorization of the   enterprise SMS signature failed.                                                                                                 |
| 5208           | Failed to add enterprise SMS template.                                                                                                                              |
| 5209           | Nonexistent enterprise SMS template.                                                                                                                                |
| 5210           | Failed to enable or disable enterprise SMS template.                                                                                                                |
| 5211           | Failed to delete enterprise SMS template.                                                                                                                           |
| 5212           | User domain authorization of enterprise SMS template failed.                                                                                                        |
| 5213           | Incorrect bindingCode format.                                                                                                                                       |
| 5214           | Unauthenticated device.                                                                                                                                             |
| 5215           | Please input the user domain ID list.                                                                                                                               |
| 5216           | Type of signature ID and template ID   should be the same.                                                                                                          |
| 5217           | Please input the file to be uploaded.                                                                                                                               |
| 5218           | Please input Appid.                                                                                                                                                 |
| 5219           | Please input AppSecret.                                                                                                                                             |
| 5220           | China Mobile service response is abnormal.                                                                                                                          |
| 5221           | China Mobile service request parameter verification failed.                                                                                                         |
| 5222           | Note exceeds length limit.                                                                                                                                          |
| 5223           | Start time cannot be later than end time.                                                                                                                           |
| 5224           | Please input the user domain type.                                                                                                                                  |
| 5225           | Value of user domain type is out of   allowable range.                                                                                                              |
| 5226           | This type of user domain cannot authorize   products.                                                                                                               |
| 5227           | User domain has authorized this product.                                                                                                                            |
| 5228           | Failed to add user domain product authorization.                                                                                                                    |
| 5229           | User domain does not authorize this product.                                                                                                                        |
| 5300           | Failed to add user domain.                                                                                                                                          |
| 5301           | Please input name.                                                                                                                                                  |
| 5302           | Name exceeds length limit.                                                                                                                                          |
| 5303           | Failed to add device group.                                                                                                                                         |
| 5304           | Name already exists.                                                                                                                                                |
| 5305           | Please input device group ID.                                                                                                                                       |
| 5306           | Nonexistent device group.                                                                                                                                           |
| 5307           | Failed to modify device group.                                                                                                                                      |
| 5308           | Nonexistent parent device group.                                                                                                                                    |
| 5309           | The account has limited permission on parent device group.                                                                                                          |
| 5310           | Failed to delete device group.                                                                                                                                      |
| 5311           | Please input device list.                                                                                                                                           |
| 5312           | Total number of device list is outside of allowable range.                                                                                                          |
| 5313           | Nonexistent ProductKey.                                                                                                                                             |
| 5314           | Failed to query device in Developer Center.                                                                                                                         |
| 5315           | Incorrect contact format.                                                                                                                                           |
| 5316           | Address exceeds length limit.                                                                                                                                       |
| 5317           | Description exceeds length limit.                                                                                                                                   |
| 5318           | Administrator exceeds length limit.                                                                                                                                 |
| 5319           | Administrator type exceeds length limit.                                                                                                                            |
| 5320           | Extension field exceeds length limit.                                                                                                                               |
| 5321           | Longitude and latitude exceeds the length limit.                                                                                                                    |
| 5322           | Coordinate system exceeds length limit.                                                                                                                             |
| 5323           | Parent device group cannot be set to itself.                                                                                                                        |
| 5324           | Sub-device group of the current device group is passed to the   parent device group.                                                                                |
| 5325           | Access to the page you attempted to use   has been temporarily blocked due to abnormal behavior that may pose a   security risk. Please try again in 24 hours.      |
| 5326           | Please input the terminal user token.                                                                                                                               |
| 5327           | The account has limited permission on this product.                                                                                                                 |
| 5328           | Please input cache time.                                                                                                                                            |
| 5329           | Cache time is out of allowable range.                                                                                                                               |
| 5330           | Please choose whether to enable cache.                                                                                                                              |
| 5331           | Command overwrite attempted. Please send   a different command or wait for the previous command to complete.                                                        |
| 5332           | Sub-device authentication failure.                                                                                                                                  |
| 5333           | Device name exceeds length limit.                                                                                                                                   |
| 5334           | Failed to configure device group sharing.                                                                                                                           |
| 5335           | Device group name is not inputted.                                                                                                                                  |
| 5336           | Device group name exceeds length limit.                                                                                                                             |
| 5337           | Nonexistent device in the device group.                                                                                                                             |
| 5338           | Incorrect DK list format.                                                                                                                                           |
| 5339           | Incorrect PK format.                                                                                                                                                |
| 5340           | Failed to control devices in batches.                                                                                                                               |
| 5341           | Please input the specific content of   downlink data to be sent.                                                                                                    |
| 5342           | Please input the operation.                                                                                                                                         |
| 5343           | Please input the operation type.                                                                                                                                    |
| 5344           | Value of operation is out of allowable   range.                                                                                                                     |
| 5345           | Value of data format is out of allowable   range.                                                                                                                   |
| 5346           | Value of operation type is out of   allowable range.                                                                                                                |
| 5347           | Incorrect format of time period for adding tasks.                                                                                                                   |
| 5348           | Value of status is out of allowable   range.                                                                                                                        |
| 5349           | Value of result is out of allowable   range.                                                                                                                        |
| 5350           | Please input the task ID.                                                                                                                                           |
| 5351           | No controllable device.                                                                                                                                             |
| 5352           | Value of PK list exceeds length limit.                                                                                                                              |
| 5353           | Failed to decrypt password.                                                                                                                                         |
| 5354           | Please input the authCode.                                                                                                                                          |
| 5355           | Incorrect authCode format.                                                                                                                                          |
| 5356           | Please input the authCode.                                                                                                                                          |
| 5357           | Incorrect pwd format.                                                                                                                                               |
| 5358           | No product permission.                                                                                                                                              |
| 5359           | No device required for authentication.                                                                                                                              |
| 5360           | Unauthenticated device cannot be shared or bound.                                                                                                                   |
| 5361           | Incorrect DK format.                                                                                                                                                |
| 5362           | Please input the third-party platform.                                                                                                                              |
| 5363           | Value of the third-party platform is out   of allowable range.                                                                                                      |
| 5364           | Please input the third-party configuration   of enterprise.                                                                                                         |
| 5365           | Nonexistent third-party configuration in the enterprise.                                                                                                            |
| 5366           | Please input the accessToken.                                                                                                                                       |
| 5367           | Exception occurred when requesting user OpenID.                                                                                                                     |
| 5368           | Failed to obtain user OpenID.                                                                                                                                       |
| 5369           | Failed to parse user OpenID.                                                                                                                                        |
| 5370           | Nonexistent account in the enterprise.                                                                                                                              |
| 5371           | This device is not bound.                                                                                                                                           |
| 5372           | Please input the jsCode.                                                                                                                                            |
| 5373           | Secret of the mini-program is not configured by the   enterprise.                                                                                                   |
| 5374           | Input code.                                                                                                                                                         |
| 5375           | Secret of the official account is not configured by the   enterprise.                                                                                               |
| 5376           | RSA2 public and private keys of Alipay are not configured by   the enterprise.                                                                                      |
| 5377           | Device binding is not authenticated.                                                                                                                                |
| 5378           | Secret of the application is not configured by the enterprise.                                                                                                      |
| 5379           | Authentication request error.                                                                                                                                       |
| 5380           | Sub-device does not enable the association relationship.                                                                                                            |
| 5381           | Authentication failure.                                                                                                                                             |
| 5382           | Failed to request application access token.                                                                                                                         |
| 5383           | Failed to parse accessToken.                                                                                                                                        |
| 5384           | No mobile number is bound.                                                                                                                                          |
| 5385           | No email address is bound.                                                                                                                                          |
| 5386           | QQ account is bound.                                                                                                                                                |
| 5387           | No QQ account is bound.                                                                                                                                             |
| 5388           | No WeChat account is bound.                                                                                                                                         |
| 5389           | No Alipay account is bound.                                                                                                                                         |
| 5390           | No Facebook account is bound.                                                                                                                                       |
| 5391           | WeChat account is bound.                                                                                                                                            |
| 5392           | Alipay account is bound.                                                                                                                                            |
| 5393           | Facebook account is bound.                                                                                                                                          |
| 5394           | Internal interface request failed.                                                                                                                                  |
| 5395           | Unknown relationship.                                                                                                                                               |
| 5396           | This is the only login method and cannot be deleted.                                                                                                                |
| 5397           | No Twitter account is bound.                                                                                                                                        |
| 5398           | Please input WeChat authorization code.                                                                                                                             |
| 5399           | Verification of the random number   returned by the background failed.                                                                                              |
| 5400           | Please input encrypted information of   WeChat user.                                                                                                                |
| 5401           | Please input encrypted information of the   WeChat mobile number.                                                                                                   |
| 5402           | Failed to decrypt WeChat user information.                                                                                                                          |
| 5403           | Failed to decrypt WeChat mobile number.                                                                                                                             |
| 5404           | Failed to query the enterprise login name.                                                                                                                          |
| 5405           | This App has been configured.                                                                                                                                       |
| 5406           | Choose whether to share.                                                                                                                                            |
| 5407           | One of the three modes must be true.                                                                                                                                |
| 5408           | Product's binding mode is set.                                                                                                                                      |
| 5409           | Product's binding mode is not set.                                                                                                                                  |
| 5410           | There is/are device(s) bound in this mode. The mode cannot be   modified.                                                                                           |
| 5411           | Device(s) under this product are not allowed to share.                                                                                                              |
| 5412           | Product binding mode is Single binding mode and cannot be   bound repeatedly.                                                                                       |
| 5413           | Value of the binding mode is out of allowable range.                                                                                                                |
| 5414           | The specified binding mode is not enabled for the product.                                                                                                          |
| 5415           | Single binding mode and Alternate binding mode are configured   for the device. Multi-binding mode is not configured. Please specify the   binding mode.            |
| 5416           | Abnormal data.                                                                                                                                                      |
| 5417           | Query failed.                                                                                                                                                       |
| 5418           | Failed to query product information.                                                                                                                                |
| 5419           | Please input the product list.                                                                                                                                      |
| 5420           | Signature verification failed.                                                                                                                                      |
| 5421           | Signature verification error.                                                                                                                                       |
| 5422           | Failed to deduct the License.                                                                                                                                       |
| 5423           | Please input SMTP server address.                                                                                                                                   |
| 5424           | Please input SMTP server port.                                                                                                                                      |
| 5425           | Please input SMTP account.                                                                                                                                          |
| 5426           | Please input SMTP password.                                                                                                                                         |
| 5427           | Please input a sender's email address   displayed to the recipient.                                                                                                 |
| 5428           | Please input account type.                                                                                                                                          |
| 5429           | Value of account type is out of allowable   range.                                                                                                                  |
| 5430           | Please input email account ID.                                                                                                                                      |
| 5431           | Email account ID is invalid.                                                                                                                                        |
| 5432           | Please input the list of authorized user domains.                                                                                                                   |
| 5433           | Value of template type is out of   allowable range.                                                                                                                 |
| 5434           | Please input email template ID.                                                                                                                                     |
| 5435           | Email template ID is invalid.                                                                                                                                       |
| 5436           | Please input review status.                                                                                                                                         |
| 5437           | Value of review status is out of   allowable range.                                                                                                                 |
| 5438           | Please input recipient email address.                                                                                                                               |
| 5439           | Email account is deactivated.                                                                                                                                       |
| 5440           | Email template reviewing failed.                                                                                                                                    |
| 5441           | Exception occurred when sending an email.                                                                                                                           |
| 5442           | Account name exceeds length limit.                                                                                                                                  |
| 5443           | SMTP server address exceeds length limit.                                                                                                                           |
| 5444           | SMTP server port is out of allowable port range.                                                                                                                    |
| 5445           | SMTP account exceeds length limit.                                                                                                                                  |
| 5446           | SMTP password exceeds length limit.                                                                                                                                 |
| 5447           | Sender's Email address exceeds length limit.                                                                                                                        |
| 5448           | Template name exceeds length limit.                                                                                                                                 |
| 5449           | Failed to query the enterprise ID.                                                                                                                                  |
| 5450           | Nonexistent enterprise ID.                                                                                                                                          |
| 5451           | ${code} is not included in email template.                                                                                                                          |
| 5452           | User domain is not authorized.                                                                                                                                      |
| 5453           | Email template is disabled.                                                                                                                                         |
| 5454           | The reviewing note exceeds length limit.                                                                                                                            |
| 5455           | The account has limited permission on email account.                                                                                                                |
| 5456           | The account has limited permission on email templates.                                                                                                              |
| 5457           | Please input the parameter to be   modified.                                                                                                                        |
| 5458           | Please input bindingSecret.                                                                                                                                         |
| 5459           | Incorrect bindingSecret format.                                                                                                                                     |
| 5460           | bindingCode is not reported.                                                                                                                                        |
| 5461           | Expired bindingCode.                                                                                                                                                |
| 5462           | bindingCode verification failed.                                                                                                                                    |
| 5463           | Failed to query device networking method.                                                                                                                           |
| 5464           | The device networking method is not Bluetooth or Wi-Fi. No   authentication is required.                                                                            |
| 5465           | bindingSecret is not reported.                                                                                                                                      |
| 5466           | Nonexistent file.                                                                                                                                                   |
| 5467           | Please input validity period of accessToken.                                                                                                                        |
| 5468           | Value of accessToken validity period should be greater than 0.                                                                                                      |
| 5469           | Input validity period of refreshToken.                                                                                                                              |
| 5470           | Value of refreshToken validity period should be greater than   0.                                                                                                   |
| 5471           | Please input query type for the property identifier to be   queried.                                                                                                |
| 5472           | Invalid user ID.                                                                                                                                                    |
| 5473           | Value of province exceeds length limit.                                                                                                                             |
| 5474           | Value of city exceeds length limit.                                                                                                                                 |
| 5475           | Value of personality signature exceeds length limit.                                                                                                                |
| 5476           | Value of note exceeds length limit.                                                                                                                                 |
| 5477           | The account has limited permission on this feature.                                                                                                                 |
| 5478           | Expired device.                                                                                                                                                     |
| 5479           | Failed to add user data.                                                                                                                                            |
| 5480           | File size exceeds size limit.                                                                                                                                       |
| 5481           | File name exceeds length limit.                                                                                                                                     |
| 5482           | Exception occurred when querying product information.                                                                                                               |
| 5483           | Failed to query product information.                                                                                                                                |
| 5484           | Please input file name.                                                                                                                                             |
| 5485           | Please input file ID.                                                                                                                                               |
| 5486           | Account is disabled.                                                                                                                                                |
| 5487           | Please input user status.                                                                                                                                           |
| 5488           | Value of user status exceeds limited range.                                                                                                                         |
| 5489           | Invalid refreshToken.                                                                                                                                               |
| 5490           | Wrong file type.                                                                                                                                                    |
| 5491           | Please input value.                                                                                                                                                 |
| 5492           | The product has been released.                                                                                                                                      |
| 5493           | Device does not exist.                                                                                                                                              |
| 5494           | Failed to query enterprise information.                                                                                                                             |
| 5495           | User domain ID is invalid.                                                                                                                                          |
| 5496           | Please input the parameter value.                                                                                                                                   |
| 5497           | Product already whitelisted.                                                                                                                                        |
| 5498           | Product not whitelisted.                                                                                                                                            |
| 5499           | Device binding through DeviceKey under current product is not   authorized.                                                                                         |
| 5500           | Failed to query enterprise product list.                                                                                                                            |
| 5501           | You have one remaining attempt to try this action.                                                                                                                  |
| 5502           | You have two remaining attempts to try this action.                                                                                                                 |
| 5503           | You have three remaining attempts to try this action.                                                                                                               |
| 5504           | You have four remaining attempts to try this action.                                                                                                                |
| 5505           | Please input the value of old password.                                                                                                                             |
| 5506           | Old password decryption failed.                                                                                                                                     |
| 5507           | Please input the value of new password.                                                                                                                             |
| 5508           | New password decryption failed.                                                                                                                                     |
| 5509           | Old password format is incorrect. Password must contain 6 - 20   characters and contain alphanumeric characters or special characters.                              |
| 5510           | New password format is incorrect. Password must contain 6 - 20   characters and contain alphanumeric characters or special characters.                              |
| 5511           | Time period outside of allowable range.                                                                                                                             |
| 5512           | Please input the value of deviceType.                                                                                                                               |
| 5513           | The value of deviceType is invalid.                                                                                                                                 |
| 5514           | Please input the value of filterList.                                                                                                                               |
| 5515           | Please input the message ID.                                                                                                                                        |
| 5516           | Please input the message type.                                                                                                                                      |
| 5517           | Please input the value of title.                                                                                                                                    |
| 5518           | The length of title value exceeds the limit.                                                                                                                        |
| 5519           | Please input the value of feedback.                                                                                                                                 |
| 5520           | The length of feedback value exceeds the limit.                                                                                                                     |
| 5521           | Failed to add feedback.                                                                                                                                             |
| 5522           | Please input the value of AppKey.                                                                                                                                   |
| 5523           | Please input the value of App type.                                                                                                                                 |
| 5524           | The value of App type is outside of allowable range.                                                                                                                |
| 5525           | Please input the value of App version.                                                                                                                              |
| 5526           | Failed to check App version.                                                                                                                                        |
