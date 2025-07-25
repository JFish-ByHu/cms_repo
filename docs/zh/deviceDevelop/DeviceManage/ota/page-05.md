# 相关接口

## MQTT设备

MQTT设备的用户确认升级计划，设备需依赖App完成用户确认行为，简单描述下流程中需要使用哪些接口。 

1、     APP通过调用**enduserapi/v2/getDeviceUpgradePlan**接口查询设备升级计划，平台匹配查询到设备可升级计划并返回。

2、     APP接收到升级计划，解析并展示操作选项（确认升级/预约升级/取消升级）给用户。

3、     用户调用接口**enduserapi/v2/userBatchConfirmUpgrade**将用户的操作结果告知平台。

4、     用户操作 **确认升级**，平台下发升级计划给到设备，由设备完成后续的动作，无需APP参与，详见[**升级流程图**](/deviceDevelop/DeviceManage/ota/page-02) 。

5、     用户操作 **预约升级**，在APP设置预约时间段，此时间段必须在升级计划周期内，且至少间隔1个小时。

6、     将预约时间段和操作结果上报平台。

7、     用户操作 **取消升级**，此升级计划结束，状态为升级失败。

8、     设备升级过程中，可调用**enduserapi/v2/getBatchUpgradeDetails** 接口查询设备升级状态。

9、     设备升级失败，可在App侧调用**enduserapi/v2/userBatchConfirmUpgrade**接口重试升级，调用成功后，平台直接将升级计划下发给设备重试。

 

## 用户自动确认

设备使用用户确认计划完成升级，需通过App确认升级，如有升级场景，不想每次升级都用户确认，可在App上设置用户自动确认。

1、 在App调用接口**enduserapi/setAutoUpgradeSwitch** 设置设备为用户自动确认。

2、 设置完成后，此设备后续所有符合升级的计划，平台会主动推送至设备，无需经过App的用户确认。

3、 如需取消设备的用户自动确认，调用**enduserapi/deleteDeviceUpgrade** 接口取消此设备的用户自动确认即可。

4、 调用**enduserapi/getAutoUpgradeSwitch** 接口可查询设备的用户自动确认开关情况。

 

## 蓝牙设备

蓝牙设备升级，设备需依赖App完成确认升级，简单描述下流程中需要使用哪些接口。

1、     APP通过调用**enduserapi/getFetchPlan**接口查询设备升级计划，平台匹配查询到设备可升级计划并返回。

2、     APP接收到升级计划，解析并展示计划信息给用户。

3、     用户调用接口**enduserapi/reportUpgradeStatus** 上报确认升级，同时App请求下载固件升级包。

 
