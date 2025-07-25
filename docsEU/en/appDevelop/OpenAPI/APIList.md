# OpenAPI List

**BaseURL:**

China Data Center: iot-api.quectelcn.com

European Data Center: iot-api.acceleronix.io

API usage methods can be found in [OpenAPI Access Instructions](API_accessInstruction.md)

## User Management API

| **Interface Address**                                         | **Description**                               |
| ------------------------------------------------------------ | --------------------------------------------- |
| [/v2/enduser/enduserapi/v2/phonePwdRegister](/appDevelop/OpenAPI/APIList/phonePwdRegister) | Phone Number Password Registration            |
| [/v2/enduser/enduserapi/phonePwdLogin](/appDevelop/OpenAPI/APIList/phonePwdLogin) | Phone Number Password Login                   |
| [/v2/enduser/enduserapi/relationPhone](/appDevelop/OpenAPI/APIList/relationPhone) | Associate Phone Number                        |
| [/v2/enduser/enduserapi/deletePhoneRelation](/appDevelop/OpenAPI/APIList/deletePhoneRelation) | Delete Phone Number Association               |
| [/v2/enduser/enduserapi/phoneAuthLogin](/appDevelop/OpenAPI/APIList/phoneAuthLogin) | One-click Login with Device Phone Number      |
| [/v2/enduser/enduserapi/v2/emailPwdRegister](/appDevelop/OpenAPI/APIList/emailPwdRegister) | Email Password Registration                   |
| [/v2/enduser/enduserapi/emailPwdLogin](/appDevelop/OpenAPI/APIList/emailPwdLogin) | Email Password Login                          |
| [/v2/enduser/enduserapi/relationEmail](/appDevelop/OpenAPI/APIList/relationEmail) | Associate Email                               |
| [/v2/enduser/enduserapi/deleteEmailRelation](/appDevelop/OpenAPI/APIList/deleteEmailRelation) | Delete Email Association                      |
| [/v2/enduser/enduserapi/alipayAuthLogin](/appDevelop/OpenAPI/APIList/alipayAuthLogin) | Alipay Authorization Login                    |
| [/v2/enduser/enduserapi/qqAuthLogin](/appDevelop/OpenAPI/APIList/qqAuthLogin) | QQ Authorization Login                        |
| [/v2/enduser/enduserapi/wechatMiniprogramAuthLogin](/appDevelop/OpenAPI/APIList/wechatMiniprogramAuthLogin) | WeChat Mini Program Authorization Login       |
| [/v2/enduser/enduserapi/wechatOffiaccountAuthLogin](/appDevelop/OpenAPI/APIList/wechatOffiaccountAuthLogin) | WeChat Official Account Authorization Login   |
| [/v2/enduser/enduserapi/appleAuthLogin](/appDevelop/OpenAPI/APIList/appleAuthLogin) | Apple Authorization Login                     |
| [/v2/enduser/enduserapi/facebookAuthLogin](/appDevelop/OpenAPI/APIList/facebookAuthLogin) | Facebook Authorization Login                  |
| [/v2/enduser/enduserapi/twitterAuthLogin](/appDevelop/OpenAPI/APIList/twitterAuthLogin) | Twitter Authorization Login                   |
| [/v2/enduser/enduserapi/refreshToken](/appDevelop/OpenAPI/APIList/refreshToken) | Refresh Token                                 |
| [/v2/enduser/enduserapi/setPhone](/appDevelop/OpenAPI/APIList/setPhone) | Modify User Phone Number                      |
| [/v2/enduser/enduserapi/setUserPwd](/appDevelop/OpenAPI/APIList/setUserPwd) | Modify User Password                          |
| [/v2/enduser/enduserapi/userDelete](/appDevelop/OpenAPI/APIList/userDelete) | Delete User                                   |
| [/v2/enduser/enduserapi/userInfo](/appDevelop/OpenAPI/APIList/userInfo) | Query User Information                        |
| [/v2/enduser/enduserapi/setUserInfo](/appDevelop/OpenAPI/APIList/setUserInfo) | Modify User Information                       |
| [/v2/enduser/enduserapi/userLogout](/appDevelop/OpenAPI/APIList/userLogout) | User Logout                                   |
| [/v2/enduser/enduserapi/userPwdReset](/appDevelop/OpenAPI/APIList/userPwdReset) | User Password Reset                           |

## Verification Code Management API

| **Interface Address**                                         | **Description**                |
| ------------------------------------------------------------ | ------------------------------ |
| [/v2/sms/enduserapi/v2/sendPhoneSmsCode](/appDevelop/OpenAPI/APIList/sendPhoneSmsCode) | Send SMS Verification Code     |
| [/v2/mail/enduserapi/v2/sendEmail](/appDevelop/OpenAPI/APIList/sendEmail) | Send Email Verification Code   |

## Message Management API

| **Interface Address**                                         | **Description**                               |
| ------------------------------------------------------------ | --------------------------------------------- |
| [/v2/mobilepush/enduserapi/userMsgList](/appDevelop/OpenAPI/APIList/userMsgList) | Query User Message List                       |
| [/v2/mobilepush/enduserapi/v2/getMsgStats](/appDevelop/OpenAPI/APIList/getMsgStats) | Count User Message Types                      |
| [/v2/mobilepush/enduserapi/readMsg](/appDevelop/OpenAPI/APIList/readMsg) | Read Message                                  |
| [/v2/mobilepush/enduserapi/deleteMsg](/appDevelop/OpenAPI/APIList/deleteMsg) | Delete Message                                |
| [/v2/mobilepush/enduserapi/batchDeleteMsg](/appDevelop/OpenAPI/APIList/batchDeleteMsg) | Batch Delete Messages                         |
| [/v2/mobilepush/enduserapi/getMsgPushSetting](/appDevelop/OpenAPI/APIList/getMsgPushSetting) | Query User Push Message Types                 |
| [/v2/mobilepush/enduserapi/setMsgPushSetting](/appDevelop/OpenAPI/APIList/setMsgPushSetting) | Set User Push Message Types                   |
| [/v2/mobilepush/enduserapi/setDeviceInfo](/appDevelop/OpenAPI/APIList/setDeviceInfo) | Set Device Push ID and Language Information   |
| [/v2/mobilepush/enduserapi/deleteDeviceInfo](/appDevelop/OpenAPI/APIList/deleteDeviceInfo) | Delete Device Push ID                         |

## Device Management API

| **Interface Address**                                         | **Description**                               |
| ------------------------------------------------------------ | --------------------------------------------- |
| [/v2/binding/enduserapi/deviceBindingByPureBt](/appDevelop/OpenAPI/APIList/deviceBindingByPureBt) | Pure Bluetooth Device Binding                 |
| [/v2/binding/enduserapi/bindDeviceDk](/appDevelop/OpenAPI/APIList/bindDeviceDk) | Bind Device Using DK                          |
| [/v2/binding/enduserapi/bindDeviceSn](/appDevelop/OpenAPI/APIList/bindDeviceSn) | Bind Device Using SN                          |
| [/v2/binding/enduserapi/v2/deviceBindingByWifi](/appDevelop/OpenAPI/APIList/deviceBindingByWifi) | WiFi Device Binding                           |
| [/v2/binding/enduserapi/getDeviceInfoByBinding](/appDevelop/OpenAPI/APIList/getDeviceInfoByBinding) | Query If User Can Bind Device                 |
| [/v2/binding/enduserapi/deviceInfo](/appDevelop/OpenAPI/APIList/deviceInfo) | Query Device Information                      |
| [/v2/binding/enduserapi/getDeviceTimeZone](/appDevelop/OpenAPI/APIList/getDeviceTimeZone) | Query Device Time Zone                        |
| [/v2/binding/enduserapi/v2/setDeviceTimeZone](/appDevelop/OpenAPI/APIList/setDeviceTimeZone) | Set Device Time Zone                          |
| [/v2/binding/enduserapi/getProductManual](/appDevelop/OpenAPI/APIList/getProductManual) | Query Product Manual                          |
| [/v2/binding/enduserapi/setDeviceInfo](/appDevelop/OpenAPI/APIList/dmSetDeviceInfo) | Modify Device Information                     |
| [/v2/binding/enduserapi/userDeviceList](/appDevelop/OpenAPI/APIList/userDeviceList) | Query User's Device List                      |
| [/v2/binding/enduserapi/unbundlingDeviceDk](/appDevelop/OpenAPI/APIList/unbundlingDeviceDk) | Unbind Device Using PK, DK                    |
| [/v2/binding/enduserapi/shareInfo](/appDevelop/OpenAPI/APIList/shareInfo) | Sharer Sets Device Sharing Information        |
| [/v2/binding/enduserapi/setShareTime](/appDevelop/OpenAPI/APIList/setShareTime) | Sharer Sets Sharing Usage Time                |
| [/v2/binding/enduserapi/shareByUid](/appDevelop/OpenAPI/APIList/shareByUid) | Share Device by Inviting User                 |
| [/v2/binding/enduserapi/ownerUserUnshareDevice](/appDevelop/OpenAPI/APIList/ownerUserUnshareDevice) | Sharer Cancels Device Sharing                 |
| [/v2/binding/enduserapi/deviceShareUserList](/appDevelop/OpenAPI/APIList/deviceShareUserList) | Sharer Queries Device Sharees List            |
| [/v2/binding/enduserapi/shareDevice](/appDevelop/OpenAPI/APIList/shareDevice) | Sharer Accepts Sharing                        |
| [/v2/binding/enduserapi/shareUserUnshareDevice](/appDevelop/OpenAPI/APIList/shareUserUnshareDevice) | Sharee Cancels Device Sharing                 |
| [/v2/binding/enduserapi/changeShareDeviceName](/appDevelop/OpenAPI/APIList/changeShareDeviceName) | Sharee Modifies Shared Device Name            |
| [/v2/binding/enduserapi/batchGetPureBtResetCredentials](/appDevelop/OpenAPI/APIList/batchGetPureBtResetCredentials) | Batch Get Pure Bluetooth Device Reset Credentials |
| [/v2/binding/enduserapi/setBtLastUseTime](/appDevelop/OpenAPI/APIList/setBtLastUseTime) | Set Bluetooth Last Use Time                   |
| [/v2/binding/enduserapi/getGatewayDeviceChildList](/appDevelop/OpenAPI/APIList/getGatewayDeviceChildList) | Query Gateway Device's Child Device List      |

## Device Uplink and Downlink Message API

| **Interface Address**                                         | **Description**                 |
| ------------------------------------------------------------ | ------------------------------- |
| [/v2/binding/enduserapi/productTSL](/appDevelop/OpenAPI/APIList/productTSL) | Query Product TSL Model         |
| [/v2/binding/enduserapi/batchControlDevice](/appDevelop/OpenAPI/APIList/batchControlDevice) | Batch Control Devices           |
| [/v2/binding/enduserapi/getDeviceBusinessAttributes](/appDevelop/OpenAPI/APIList/getDeviceBusinessAttributes) | Query Device Business Attributes |
| [/v2/quecdatastorage/enduserapi/getPropertyChartList](/appDevelop/OpenAPI/APIList/getPropertyChartList) | Get Device Property Chart List  |
| [/v2/quecdatastorage/enduserapi/getPropertyDataList](/appDevelop/OpenAPI/APIList/getPropertyDataList) | Get Device Property Data List   |
| [/v2/quecdatastorage/enduserapi/getPropertyStatistics](/appDevelop/OpenAPI/APIList/getPropertyStatistics) | Get Device Property Statistics  |
| [/v2/quecdatastorage/enduserapi/v2/deviceEventList](/appDevelop/OpenAPI/APIList/deviceEventList) | Get Device Event List           |
| [/v2/quecdatastorage/enduserapi/getLocationHistory](/appDevelop/OpenAPI/APIList/getLocationHistory) | Get Device Location History     |

## Family Management API

| **Interface Address**                                         | **Description**                           |
| ------------------------------------------------------------ | ----------------------------------------- |
| [/v2/family/enduserapi/enabledFamilyMode](/appDevelop/OpenAPI/APIList/enabledFamilyMode) | Enable/Disable Home Mode                  |
| [/v2/family/enduserapi/getFamilyModeConfig](/appDevelop/OpenAPI/APIList/getFamilyModeConfig) | Query User Home Mode Configuration        |
| [/v2/family/enduserapi/enabledAutoSwitch](/appDevelop/OpenAPI/APIList/enabledAutoSwitch) | Enable/Disable Auto Switch Family         |
| [/v2/family/enduserapi/addFamily](/appDevelop/OpenAPI/APIList/addFamily) | Create Family                             |
| [/v2/family/enduserapi/deleteFamily](/appDevelop/OpenAPI/APIList/deleteFamily) | Delete Family                             |
| [/v2/family/enduserapi/getFamilyList](/appDevelop/OpenAPI/APIList/getFamilyList) | Query Family List                         |
| [/v2/family/enduserapi/getCurrentFamily](/appDevelop/OpenAPI/APIList/getCurrentFamily) | Query Current Family                      |
| [/v2/family/enduserapi/setFamily](/appDevelop/OpenAPI/APIList/setFamily) | Modify Family                             |
| [/v2/family/enduserapi/getFamilyDeviceList](/appDevelop/OpenAPI/APIList/getFamilyDeviceList) | Query Devices in Family                   |
| [/v2/family/enduserapi/setDeviceInfo](/appDevelop/OpenAPI/APIList/familySetDeviceInfo) | Set Device Information                    |
| [/v2/family/enduserapi/getFamilyRoomList](/appDevelop/OpenAPI/APIList/getFamilyRoomList) | Query Rooms in Family                     |
| [/v2/family/enduserapi/addFamilyRoom](/appDevelop/OpenAPI/APIList/addFamilyRoom) | Create Room                               |
| [/v2/family/enduserapi/setFamilyRoom](/appDevelop/OpenAPI/APIList/setFamilyRoom) | Modify Room                               |
| [/v2/family/enduserapi/setFamilyRoomSort](/appDevelop/OpenAPI/APIList/setFamilyRoomSort) | Set Room Sort Order                       |
| [/v2/family/enduserapi/addDeviceInFamilyRoom](/appDevelop/OpenAPI/APIList/addDeviceInFamilyRoom) | Move Device to Room                       |
| [/v2/family/enduserapi/getFamilyRoomDeviceList](/appDevelop/OpenAPI/APIList/getFamilyRoomDeviceList) | Query Devices in Room                     |
| [/v2/family/enduserapi/deleteFamilyRoom](/appDevelop/OpenAPI/APIList/deleteFamilyRoom) | Delete Room                               |
| [/v2/family/enduserapi/getCommonUsedDeviceList](/appDevelop/OpenAPI/APIList/getCommonUsedDeviceList) | Query Frequently Used Device List         |
| [/v2/family/enduserapi/addCommonUsedDevice](/appDevelop/OpenAPI/APIList/addCommonUsedDevice) | Add Frequently Used Device                |
| [/v2/family/enduserapi/deleteCommonUsedDevice](/appDevelop/OpenAPI/APIList/deleteCommonUsedDevice) | Remove Frequently Used Device             |
| [/v2/family/enduserapi/inviteFamilyMember](/appDevelop/OpenAPI/APIList/inviteFamilyMember) | Invite Family Member                      |
| [/v2/family/enduserapi/setFamilyMemberRole](/appDevelop/OpenAPI/APIList/setFamilyMemberRole) | Set Family Member Role                    |
| [/v2/family/enduserapi/setFamilyMemberName](/appDevelop/OpenAPI/APIList/setFamilyMemberName) | Modify Family Member Name                 |
| [/v2/family/enduserapi/deleteFamilyMember](/appDevelop/OpenAPI/APIList/deleteFamilyMember) | Remove Family Member                      |
| [/v2/family/enduserapi/getFamilyMemberList](/appDevelop/OpenAPI/APIList/getFamilyMemberList) | Query Family Members List                 |
| [/v2/family/enduserapi/getFamilyInviteList](/appDevelop/OpenAPI/APIList/getFamilyInviteList) | Query Invitation List                     |
| [/v2/family/enduserapi/familyMemberInviteHandle](/appDevelop/OpenAPI/APIList/familyMemberInviteHandle) | Handle Family Member Invitation           |
| [/v2/family/enduserapi/leaveFamily](/appDevelop/OpenAPI/APIList/leaveFamily) | Leave Family                              |

## Scene Management API

| **Interface Address**                                         | **Description**             |
| ------------------------------------------------------------ | --------------------------- |
| [/v2/cep/enduserapi/sceneCreate](/appDevelop/OpenAPI/APIList/sceneCreate) | Create Scene                |
| [/v2/cep/enduserapi/sceneTest](/appDevelop/OpenAPI/APIList/sceneTest) | Test Scene                  |
| [/v2/cep/enduserapi/sceneExecute](/appDevelop/OpenAPI/APIList/sceneExecute) | Execute Scene               |
| [/v2/cep/enduserapi/selectSceneList](/appDevelop/OpenAPI/APIList/selectSceneList) | Query Scene List            |
| [/v2/cep/enduserapi/selectSceneDetail](/appDevelop/OpenAPI/APIList/selectSceneDetail) | Query Scene Details         |
| [/v2/cep/enduserapi/sceneEdit](/appDevelop/OpenAPI/APIList/sceneEdit) | Edit Scene                  |
| [/v2/cep/enduserapi/sceneDelete](/appDevelop/OpenAPI/APIList/sceneDelete) | Delete Scene                |
| [/v2/cep/enduserapi/batchAddCommonScene](/appDevelop/OpenAPI/APIList/batchAddCommonScene) | Batch Add Common Scenes     |
| [/v2/cep/enduserapi/selectCommonSceneList](/appDevelop/OpenAPI/APIList/selectCommonSceneList) | Query Common Scenes         |
| [/v2/cep/enduserapi/batchDeleteCommonScene](/appDevelop/OpenAPI/APIList/batchDeleteCommonScene) | Batch Remove Common Scenes  |
| [/v2/cep/enduserapi/selectSceneLogList](/appDevelop/OpenAPI/APIList/selectSceneLogList) | Query Scene Log List        |
| [/v2/cep/enduserapi/selectSceneLogDetail](/appDevelop/OpenAPI/APIList/selectSceneLogDetail) | Query Scene Log Details     |
| [/v2/cep/enduserapi/deleteSceneLog](/appDevelop/OpenAPI/APIList/deleteSceneLog) | Delete Log                  |

## Automation Management API

| **Interface Address**                                         | **Description**               |
| ------------------------------------------------------------ | ----------------------------- |
| [/v2/cep/enduserapi/automation/ability/published](/appDevelop/OpenAPI/APIList/automationPublished) | Query Linkage Configuration   |
| [/v2/cep/enduserapi/automation/save](/appDevelop/OpenAPI/APIList/automationSave) | Create Automation             |
| [/v2/cep/enduserapi/automation/list](/appDevelop/OpenAPI/APIList/automationList) | Query Automation List         |
| [/v2/cep/enduserapi/automation/detail](/appDevelop/OpenAPI/APIList/automationDetail) | Query Automation Details      |
| [/v2/cep/enduserapi/automation/status](/appDevelop/OpenAPI/APIList/automationStatus) | Start/Stop Automation         |
| [/v2/cep/enduserapi/automation/test](/appDevelop/OpenAPI/APIList/automationTest) | Test Automation               |
| [/v2/cep/enduserapi/automation/getTestAutomation](/appDevelop/OpenAPI/APIList/automationGetTestAutomation) | Query Automation Test Results |
| [/v2/cep/enduserapi/automation/edit](/appDevelop/OpenAPI/APIList/automationEdit) | Edit Automation               |
| [/v2/cep/enduserapi/automation/del](/appDevelop/OpenAPI/APIList/automationDelete) | Delete Automation             |
| [/v2/cep/enduserapi/automation/log/list](/appDevelop/OpenAPI/APIList/automationLogList) | Query Automation Log List     |
| [/v2/cep/enduserapi/automation/log/detail](/appDevelop/OpenAPI/APIList/automationLogDetail) | Query Automation Log Details  |
| [/v2/cep/enduserapi/automation/log/clear](/appDevelop/OpenAPI/APIList/automationLogClear) | Delete Automation             |

## Cloud Timing Management API

| **Interface Address**                                         | **Description**              |
| ------------------------------------------------------------ | ---------------------------- |
| [/v2/cep/enduserapi/v2/addCornJob](/appDevelop/OpenAPI/APIList/addCornJob) | Create Scheduled Task        |
| [/v2/cep/enduserapi/v2/getCronJobList](/appDevelop/OpenAPI/APIList/getCronJobList) | Query Scheduled Task List    |
| [/v2/cep/enduserapi/v2/getCronJobInfo](/appDevelop/OpenAPI/APIList/getCronJobInfo) | Query Scheduled Task Details |
| [/v2/cep/enduserapi/v2/setCronJob](/appDevelop/OpenAPI/APIList/setCronJob) | Modify Scheduled Task        |
| [/v2/cep/enduserapi/batchDeleteCronJob](/appDevelop/OpenAPI/APIList/batchDeleteCronJob) | Delete Scheduled Task        |