# Related OpenAPIs

## MQTT Devices

Manual upgrade plans for MQTT devices. The device relies on the application to complete the manual confirmation. The following is a brief description of OpenAPIs needed in the OTA upgrade process.

 

1.   The application calls **/enduserapi/v2/getDeviceUpgradePlan** to query the upgrade plan. Developer Center checks whether there is an upgrade plan for the device and then pushes the plan.

2.   The application receives the plan, analyzes it and then displays the actions (confirm/appoint/cancel) to the user.

3.   The user calls **enduserapi/v2/userBatchConfirmUpgrade** to notify Developer Center of the action.

4.   When the user confirms the upgrade, Developer Center issues the plan to the device and then the device finishes the following action with no application required. See the [**flow chart of manual upgrade**](/deviceDevelop/DeviceManage/ota/page-02) for details.

5.   When the user appoints the upgrade, an upgrade period can be appointed on the application, which must be within the upgrade plan period and with the interval of at least one hour.

6.   The application reports the appointed period and action results to the platform.

7.   When the user cancels the upgrade, this upgrade plan ends and the status will turn to "upgrade failed".

8.   You can call **enduserapi/v2/getBatchUpgradeDetails** to query the device upgrade status.

9.   If the device fails to be upgraded, the application can call **/enduserapi/v2/userBatchConfirmUpgrade** to retry upgrade. Once the API is called successfully, the platform will issue the upgrade plan to the device for upgrade retry immediately

 

## User Auto-confirmation Mode

In manual upgrade plans, you need to confirm the upgrade on the app. If there is a scenario where you do not want the upgrade is confirmed by yourself every time, you can set the user auto-confirmation mode on the app.

 

1.  Call **enduserapi/setAutoUpgradeSwitch** on the application to set the confirmation mode to the user auto-confirmation mode.

2.  After the user auto-confirmation mode is set, Developer Center will actively push all subsequent eligible plans to the device without your manual confirmation.

3.  Call **enduserapi/deleteDeviceUpgrade** to cancel the user auto-confirmation mode of this device if needed.

4.  Call **enduserapi/getAutoUpgradeSwitch** to query whether the user auto-confirmation mode is enabled.

 

## Bluetooth Device

OTA upgrade for Bluetooth devices. The device relies on the application to complete the manual upgrade. The following is a brief description of OpenAPIs needed in the OTA upgrade process.

 

1.   The application calls **enduserapi/getFetchPlan** to query the upgrade plan. Developer Center checks whether there is an upgrade plan for the device and then pushes the plan.

2.   The application receives the plan, analyzes it and then displays the plan information to the user.

3.   The user calls **enduserapi/reportUpgradeStatus** to report the confirmation of the upgrade. The application sends a request to download the firmware version package.



