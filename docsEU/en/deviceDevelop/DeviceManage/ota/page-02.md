# Upgrade Process Overview

1、  OTA upgrade has been developed on device side.

2、  [Add the firmware version package](/deviceDevelop/DeviceManage/ota/part02/page-01), the required full package or the delta package for an OTA upgrade.

3、  [Verify the firmware version packagefor](/deviceDevelop/DeviceManage/ota/part02/page-02) its availability (optional).

4、  [Create an upgrade plan](/deviceDevelop/DeviceManage/ota/part02/page-03) and configure the upgrade strategy. The device sends a request to Develop Center or the platform automatically issues the upgrade plan to the device.

Descriptions:

Silent upgrade: The device automatically sends an OTA request to Develop Center or the platform automatically issues the upgrade plan to the device.

Manual upgrade: The device requires an upgrade plan which requires your manual confirmation before Developer Center pushes the plan to the device for OTA upgrade.

5、  OTA upgrade on the device side: The firmware upgrade is completed after the upgrade plan and URL issued from Developer Center are received on the device side.

6、  [View the device upgrade](/deviceDevelop/DeviceManage/ota/part02/page-05) : View the upgrade progress and logs.

7、  View the upgrade plan: View the successful upgrade rate and the number of upgrade devices.

 

## Silent Upgrade

1、  The device carried with the version ID reports an OTA request. Developer Center issues the upgrade plan to the device after matching and verifying the version reported by the device. Then the OTA upgrade is completed.

2、  Or the device waits for Developer Center to push upgrade plans regularly and completes the OTA upgrade. 

3、  See the flow chart below for details.

​<a data-fancybox title="img" href="/en/guide/ota/ota01.png">![img](/en/guide/ota/ota01.png)</a>                          

## Manual Upgrade

1、  Manual upgrade requires your manual confirmation of the upgrade plan through OpenAPI before Developer Center pushes the plan to the device for OTA upgrade.

2、  See the flow chart below for details.

 
<a data-fancybox title="img" href="/en/guide/ota/ota02.png">![img](/en/guide/ota/ota02.png)</a>
