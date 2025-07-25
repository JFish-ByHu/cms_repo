# OpenAPI列表

**BaseURL:**

中国数据中心：iot-api.quectelcn.com

欧洲数据中心：iot-api.acceleronix.io

API使用方法可见[OpenAPI接入说明](API_accessInstruction.md)

## 用户管理API

| **接口地址**                                                 | **描述**           |
| ------------------------------------------------------------ | ------------------ |
| [/v2/enduser/enduserapi/v2/phonePwdRegister](/appDevelop/OpenAPI/APIList/phonePwdRegister) | 手机号密码注册     |
| [/v2/enduser/enduserapi/phonePwdLogin](/appDevelop/OpenAPI/APIList/phonePwdLogin) | 手机号密码登录     |
| [/v2/enduser/enduserapi/relationPhone](/appDevelop/OpenAPI/APIList/relationPhone) | 关联手机号码       |
| [/v2/enduser/enduserapi/deletePhoneRelation](/appDevelop/OpenAPI/APIList/deletePhoneRelation) | 删除手机号码关联   |
| [/v2/enduser/enduserapi/phoneAuthLogin](/appDevelop/OpenAPI/APIList/phoneAuthLogin) | 本机号码一键登录   |
| [/v2/enduser/enduserapi/v2/emailPwdRegister](/appDevelop/OpenAPI/APIList/emailPwdRegister) | 邮箱密码注册       |
| [/v2/enduser/enduserapi/emailPwdLogin](/appDevelop/OpenAPI/APIList/emailPwdLogin) | 邮箱密码登录       |
| [/v2/enduser/enduserapi/relationEmail](/appDevelop/OpenAPI/APIList/relationEmail) | 关联邮箱           |
| [/v2/enduser/enduserapi/deleteEmailRelation](/appDevelop/OpenAPI/APIList/deleteEmailRelation) | 删除邮箱关联       |
| [/v2/enduser/enduserapi/alipayAuthLogin](/appDevelop/OpenAPI/APIList/alipayAuthLogin) | 支付宝授权登录     |
| [/v2/enduser/enduserapi/qqAuthLogin](/appDevelop/OpenAPI/APIList/qqAuthLogin) | QQ授权登录         |
| [/v2/enduser/enduserapi/wechatMiniprogramAuthLogin](/appDevelop/OpenAPI/APIList/wechatMiniprogramAuthLogin) | 微信小程序授权登录 |
| [/v2/enduser/enduserapi/wechatOffiaccountAuthLogin](/appDevelop/OpenAPI/APIList/wechatOffiaccountAuthLogin) | 微信公众号授权登录 |
| [/v2/enduser/enduserapi/appleAuthLogin](/appDevelop/OpenAPI/APIList/appleAuthLogin) | Apple授权登录      |
| [/v2/enduser/enduserapi/facebookAuthLogin](/appDevelop/OpenAPI/APIList/facebookAuthLogin) | Facebook授权登录   |
| [/v2/enduser/enduserapi/twitterAuthLogin](/appDevelop/OpenAPI/APIList/twitterAuthLogin) | Twitter授权登录    |
| [/v2/enduser/enduserapi/refreshToken](/appDevelop/OpenAPI/APIList/refreshToken) | 刷新token          |
| [/v2/enduser/enduserapi/setPhone](/appDevelop/OpenAPI/APIList/setPhone) | 修改用户手机号     |
| [/v2/enduser/enduserapi/setUserPwd](/appDevelop/OpenAPI/APIList/setUserPwd) | 用户密码修改       |
| [/v2/enduser/enduserapi/userDelete](/appDevelop/OpenAPI/APIList/userDelete) | 删除用户           |
| [/v2/enduser/enduserapi/userInfo](/appDevelop/OpenAPI/APIList/userInfo) | 查询用户信息       |
| [/v2/enduser/enduserapi/setUserInfo](/appDevelop/OpenAPI/APIList/setUserInfo) | 修改用户信息       |
| [/v2/enduser/enduserapi/userLogout](/appDevelop/OpenAPI/APIList/userLogout) | 用户退出登录       |
| [/v2/enduser/enduserapi/userPwdReset](/appDevelop/OpenAPI/APIList/userPwdReset) | 用户密码重置       |

## 验证码管理API

| **接口地址**                                                 | **描述**           |
| ------------------------------------------------------------ | ------------------ |
| [/v2/sms/enduserapi/v2/sendPhoneSmsCode](/appDevelop/OpenAPI/APIList/sendPhoneSmsCode) | 发送手机短信验证码 |
| [/v2/mail/enduserapi/v2/sendEmail](/appDevelop/OpenAPI/APIList/sendEmail) | 发送邮件验证码     |

## 消息管理API

| **接口地址**                                                 | **描述**                   |
| ------------------------------------------------------------ | -------------------------- |
| [/v2/mobilepush/enduserapi/userMsgList](/appDevelop/OpenAPI/APIList/userMsgList) | 查询用户消息列表           |
| [/v2/mobilepush/enduserapi/v2/getMsgStats](/appDevelop/OpenAPI/APIList/getMsgStats) | 统计用户消息类型           |
| [/v2/mobilepush/enduserapi/readMsg](/appDevelop/OpenAPI/APIList/readMsg) | 阅读消息                   |
| [/v2/mobilepush/enduserapi/deleteMsg](/appDevelop/OpenAPI/APIList/deleteMsg) | 删除消息                   |
| [/v2/mobilepush/enduserapi/batchDeleteMsg](/appDevelop/OpenAPI/APIList/batchDeleteMsg) | 批量删除消息               |
| [/v2/mobilepush/enduserapi/getMsgPushSetting](/appDevelop/OpenAPI/APIList/getMsgPushSetting) | 查询用户接收推送的消息类型 |
| [/v2/mobilepush/enduserapi/setMsgPushSetting](/appDevelop/OpenAPI/APIList/setMsgPushSetting) | 设置用户接收推送的消息类型 |
| [/v2/mobilepush/enduserapi/setDeviceInfo](/appDevelop/OpenAPI/APIList/setDeviceInfo) | 设置设备推送ID和语言信息   |
| [/v2/mobilepush/enduserapi/deleteDeviceInfo](/appDevelop/OpenAPI/APIList/deleteDeviceInfo) | 删除设备推送ID             |

## 设备管理API

| **接口地址**                                                 | **描述**                     |
| ------------------------------------------------------------ | ---------------------------- |
| [/v2/binding/enduserapi/deviceBindingByPureBt](/appDevelop/OpenAPI/APIList/deviceBindingByPureBt) | 纯蓝牙设备绑定               |
| [/v2/binding/enduserapi/bindDeviceDk](/appDevelop/OpenAPI/APIList/bindDeviceDk) | 使用DK绑定设备               |
| [/v2/binding/enduserapi/bindDeviceSn](/appDevelop/OpenAPI/APIList/bindDeviceSn) | 使用SN绑定设备               |
| [/v2/binding/enduserapi/v2/deviceBindingByWifi](/appDevelop/OpenAPI/APIList/deviceBindingByWifi) | Wifi设备绑定                 |
| [/v2/binding/enduserapi/getDeviceInfoByBinding](/appDevelop/OpenAPI/APIList/getDeviceInfoByBinding) | 查询用户是否可以绑定该设备   |
| [/v2/binding/enduserapi/deviceInfo](/appDevelop/OpenAPI/APIList/deviceInfo) | 查询设备信息                 |
| [/v2/binding/enduserapi/getDeviceTimeZone](/appDevelop/OpenAPI/APIList/getDeviceTimeZone) | 查询设备时区                 |
| [/v2/binding/enduserapi/v2/setDeviceTimeZone](/appDevelop/OpenAPI/APIList/setDeviceTimeZone) | 设置设备时区                 |
| [/v2/binding/enduserapi/getProductManual](/appDevelop/OpenAPI/APIList/getProductManual) | 查询产品说明书               |
| [/v2/binding/enduserapi/setDeviceInfo](/appDevelop/OpenAPI/APIList/dmSetDeviceInfo) | 修改设备信息                 |
| [/v2/binding/enduserapi/userDeviceList](/appDevelop/OpenAPI/APIList/userDeviceList) | 查询用户的设备列表           |
| [/v2/binding/enduserapi/unbundlingDeviceDk](/appDevelop/OpenAPI/APIList/unbundlingDeviceDk) | 使用PK、DK解绑设备           |
| [/v2/binding/enduserapi/shareInfo](/appDevelop/OpenAPI/APIList/shareInfo) | 分享人设置设备分享信息       |
| [/v2/binding/enduserapi/setShareTime](/appDevelop/OpenAPI/APIList/setShareTime) | 分享人设置分享可使用时间     |
| [/v2/binding/enduserapi/shareByUid](/appDevelop/OpenAPI/APIList/shareByUid) | 通过邀请用户进行设备分享     |
| [/v2/binding/enduserapi/ownerUserUnshareDevice](/appDevelop/OpenAPI/APIList/ownerUserUnshareDevice) | 分享人取消设备分享           |
| [/v2/binding/enduserapi/deviceShareUserList](/appDevelop/OpenAPI/APIList/deviceShareUserList) | 分享人查询设备的被分享人列表 |
| [/v2/binding/enduserapi/shareDevice](/appDevelop/OpenAPI/APIList/shareDevice) | 被分享人接受分享             |
| [/v2/binding/enduserapi/shareUserUnshareDevice](/appDevelop/OpenAPI/APIList/shareUserUnshareDevice) | 被分享人取消设备分享         |
| [/v2/binding/enduserapi/changeShareDeviceName](/appDevelop/OpenAPI/APIList/changeShareDeviceName) | 被分享人修改分享的设备名称   |
| [/v2/binding/enduserapi/batchGetPureBtResetCredentials](/appDevelop/OpenAPI/APIList/batchGetPureBtResetCredentials) | 批量获取纯蓝牙设备重置凭证   |
| [/v2/binding/enduserapi/setBtLastUseTime](/appDevelop/OpenAPI/APIList/setBtLastUseTime) | 设置蓝牙最近使用时间         |
| [/v2/binding/enduserapi/getGatewayDeviceChildList](/appDevelop/OpenAPI/APIList/getGatewayDeviceChildList) | 查询网关设备下子设备列表     |

## 设备上下行消息API

| **接口地址**                                                 | **描述**             |
| ------------------------------------------------------------ | -------------------- |
| [/v2/binding/enduserapi/productTSL](/appDevelop/OpenAPI/APIList/productTSL) | 查询物模型TSL        |
| [/v2/binding/enduserapi/batchControlDevice](/appDevelop/OpenAPI/APIList/batchControlDevice) | 批量控制设备         |
| [/v2/binding/enduserapi/getDeviceBusinessAttributes](/appDevelop/OpenAPI/APIList/getDeviceBusinessAttributes) | 查询设备业务属性     |
| [/v2/quecdatastorage/enduserapi/getPropertyChartList](/appDevelop/OpenAPI/APIList/getPropertyChartList) | 获取设备属性图标列表 |
| [/v2/quecdatastorage/enduserapi/getPropertyDataList](/appDevelop/OpenAPI/APIList/getPropertyDataList) | 获取设备属性数据列表 |
| [/v2/quecdatastorage/enduserapi/getPropertyStatistics](/appDevelop/OpenAPI/APIList/getPropertyStatistics) | 获取设备属性统计数据 |
| [/v2/quecdatastorage/enduserapi/v2/deviceEventList](/appDevelop/OpenAPI/APIList/deviceEventList) | 获取设备事件列表     |
| [/v2/quecdatastorage/enduserapi/getLocationHistory](/appDevelop/OpenAPI/APIList/getLocationHistory) | 获取设备历史轨迹     |

## 家庭管理API

| **接口地址**                                                 | **描述**                 |
| ------------------------------------------------------------ | ------------------------ |
| [/v2/family/enduserapi/enabledFamilyMode](/appDevelop/OpenAPI/APIList/enabledFamilyMode) | 启用/停用家居模式        |
| [/v2/family/enduserapi/getFamilyModeConfig](/appDevelop/OpenAPI/APIList/getFamilyModeConfig) | 查询用户家居模式配置     |
| [/v2/family/enduserapi/enabledAutoSwitch](/appDevelop/OpenAPI/APIList/enabledAutoSwitch) | 启用/停用自动切换家庭    |
| [/v2/family/enduserapi/addFamily](/appDevelop/OpenAPI/APIList/addFamily) | 创建家庭                 |
| [/v2/family/enduserapi/deleteFamily](/appDevelop/OpenAPI/APIList/deleteFamily) | 删除家庭                 |
| [/v2/family/enduserapi/getFamilyList](/appDevelop/OpenAPI/APIList/getFamilyList) | 查询家庭列表             |
| [/v2/family/enduserapi/getCurrentFamily](/appDevelop/OpenAPI/APIList/getCurrentFamily) | 查询当前家庭             |
| [/v2/family/enduserapi/setFamily](/appDevelop/OpenAPI/APIList/setFamily) | 修改家庭                 |
| [/v2/family/enduserapi/getFamilyDeviceList](/appDevelop/OpenAPI/APIList/getFamilyDeviceList) | 查询家庭中设备列表       |
| [/v2/family/enduserapi/setDeviceInfo](/appDevelop/OpenAPI/APIList/familySetDeviceInfo) | 设置设备信息             |
| [/v2/family/enduserapi/getFamilyRoomList](/appDevelop/OpenAPI/APIList/getFamilyRoomList) | 查询家庭中房间列表       |
| [/v2/family/enduserapi/addFamilyRoom](/appDevelop/OpenAPI/APIList/addFamilyRoom) | 创建房间                 |
| [/v2/family/enduserapi/setFamilyRoom](/appDevelop/OpenAPI/APIList/setFamilyRoom) | 修改房间                 |
| [/v2/family/enduserapi/setFamilyRoomSort](/appDevelop/OpenAPI/APIList/setFamilyRoomSort) | 设置房间排序             |
| [/v2/family/enduserapi/addDeviceInFamilyRoom](/appDevelop/OpenAPI/APIList/addDeviceInFamilyRoom) | 移入设备到房间           |
| [/v2/family/enduserapi/getFamilyRoomDeviceList](/appDevelop/OpenAPI/APIList/getFamilyRoomDeviceList) | 查询房间中设备列表       |
| [/v2/family/enduserapi/deleteFamilyRoom](/appDevelop/OpenAPI/APIList/deleteFamilyRoom) | 删除房间                 |
| [/v2/family/enduserapi/getCommonUsedDeviceList](/appDevelop/OpenAPI/APIList/getCommonUsedDeviceList) | 查询常用设备列表         |
| [/v2/family/enduserapi/addCommonUsedDevice](/appDevelop/OpenAPI/APIList/addCommonUsedDevice) | 添加常用设备             |
| [/v2/family/enduserapi/deleteCommonUsedDevice](/appDevelop/OpenAPI/APIList/deleteCommonUsedDevice) | 移除常用设备             |
| [/v2/family/enduserapi/inviteFamilyMember](/appDevelop/OpenAPI/APIList/inviteFamilyMember) | 邀请家庭成员             |
| [/v2/family/enduserapi/setFamilyMemberRole](/appDevelop/OpenAPI/APIList/setFamilyMemberRole) | 设置家庭成员角色         |
| [/v2/family/enduserapi/setFamilyMemberName](/appDevelop/OpenAPI/APIList/setFamilyMemberName) | 修改家庭成员名称         |
| [/v2/family/enduserapi/deleteFamilyMember](/appDevelop/OpenAPI/APIList/deleteFamilyMember) | 移除家庭成员             |
| [/v2/family/enduserapi/getFamilyMemberList](/appDevelop/OpenAPI/APIList/getFamilyMemberList) | 查询家庭中的家庭成员列表 |
| [/v2/family/enduserapi/getFamilyInviteList](/appDevelop/OpenAPI/APIList/getFamilyInviteList) | 查询被邀请列表           |
| [/v2/family/enduserapi/familyMemberInviteHandle](/appDevelop/OpenAPI/APIList/familyMemberInviteHandle) | 家庭邀请成员处理         |
| [/v2/family/enduserapi/leaveFamily](/appDevelop/OpenAPI/APIList/leaveFamily) | 离开家庭                 |

## 场景管理API

| **接口地址**                                                 | **描述**         |
| ------------------------------------------------------------ | ---------------- |
| [/v2/cep/enduserapi/sceneCreate](/appDevelop/OpenAPI/APIList/sceneCreate) | 创建场景         |
| [/v2/cep/enduserapi/sceneTest](/appDevelop/OpenAPI/APIList/sceneTest) | 测试场景         |
| [/v2/cep/enduserapi/sceneExecute](/appDevelop/OpenAPI/APIList/sceneExecute) | 执行场景         |
| [/v2/cep/enduserapi/selectSceneList](/appDevelop/OpenAPI/APIList/selectSceneList) | 查询场景列表     |
| [/v2/cep/enduserapi/selectSceneDetail](/appDevelop/OpenAPI/APIList/selectSceneDetail) | 查询场景详情     |
| [/v2/cep/enduserapi/sceneEdit](/appDevelop/OpenAPI/APIList/sceneEdit) | 编辑场景         |
| [/v2/cep/enduserapi/sceneDelete](/appDevelop/OpenAPI/APIList/sceneDelete) | 删除场景         |
| [/v2/cep/enduserapi/batchAddCommonScene](/appDevelop/OpenAPI/APIList/batchAddCommonScene) | 批量添加常用场景 |
| [/v2/cep/enduserapi/selectCommonSceneList](/appDevelop/OpenAPI/APIList/selectCommonSceneList) | 查询常用场景     |
| [/v2/cep/enduserapi/batchDeleteCommonScene](/appDevelop/OpenAPI/APIList/batchDeleteCommonScene) | 批量移除常用场景 |
| [/v2/cep/enduserapi/selectSceneLogList](/appDevelop/OpenAPI/APIList/selectSceneLogList) | 查询场景日志列表 |
| [/v2/cep/enduserapi/selectSceneLogDetail](/appDevelop/OpenAPI/APIList/selectSceneLogDetail) | 查询场景日志详情 |
| [/v2/cep/enduserapi/deleteSceneLog](/appDevelop/OpenAPI/APIList/deleteSceneLog) | 删除日志         |

## 自动化管理API

| **接口地址**                                                 | **描述**           |
| ------------------------------------------------------------ | ------------------ |
| [/v2/cep/enduserapi/automation/ability/published](/appDevelop/OpenAPI/APIList/automationPublished) | 查询联动配置       |
| [/v2/cep/enduserapi/automation/save](/appDevelop/OpenAPI/APIList/automationSave) | 创建自动化         |
| [/v2/cep/enduserapi/automation/list](/appDevelop/OpenAPI/APIList/automationList) | 查询自动化列表     |
| [/v2/cep/enduserapi/automation/detail](/appDevelop/OpenAPI/APIList/automationDetail) | 查询自动化详情     |
| [/v2/cep/enduserapi/automation/status](/appDevelop/OpenAPI/APIList/automationStatus) | 启停自动化         |
| [/v2/cep/enduserapi/automation/test](/appDevelop/OpenAPI/APIList/automationTest) | 测试自动化         |
| [/v2/cep/enduserapi/automation/getTestAutomation](/appDevelop/OpenAPI/APIList/automationGetTestAutomation) | 查询自动化测试结果 |
| [/v2/cep/enduserapi/automation/edit](/appDevelop/OpenAPI/APIList/automationEdit) | 编辑自动化         |
| [/v2/cep/enduserapi/automation/del](/appDevelop/OpenAPI/APIList/automationDelete) | 删除自动化         |
| [/v2/cep/enduserapi/automation/log/list](/appDevelop/OpenAPI/APIList/automationLogList) | 查询自动化日志列表 |
| [/v2/cep/enduserapi/automation/log/detail](/appDevelop/OpenAPI/APIList/automationLogDetail) | 查询自动化日志详情 |
| [/v2/cep/enduserapi/automation/log/clear](/appDevelop/OpenAPI/APIList/automationLogClear) | 删除自动化         |

## 云定时管理API

| **接口地址**                                                 | **描述**         |
| ------------------------------------------------------------ | ---------------- |
| [/v2/cep/enduserapi/v2/addCornJob](/appDevelop/OpenAPI/APIList/addCornJob) | 创建定时任务     |
| [/v2/cep/enduserapi/v2/getCronJobList](/appDevelop/OpenAPI/APIList/getCronJobList) | 查询定时任务列表 |
| [/v2/cep/enduserapi/v2/getCronJobInfo](/appDevelop/OpenAPI/APIList/getCronJobInfo) | 查询定时任务详情 |
| [/v2/cep/enduserapi/v2/setCronJob](/appDevelop/OpenAPI/APIList/setCronJob) | 修改定时任务     |
| [/v2/cep/enduserapi/batchDeleteCronJob](/appDevelop/OpenAPI/APIList/batchDeleteCronJob) | 删除定时任务     |
