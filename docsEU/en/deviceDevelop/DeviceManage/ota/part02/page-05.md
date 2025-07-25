# View the Upgrade Status

After the upgrade plan is activated, you can view upgrade plans, the device upgrade status and version package details, and can retry the upgrade plan for the device that failed to be upgraded.

This section introduces how to view the upgrade status.

## Prerequisites

1.    An upgraded plan has been created and activated. See [**Create an upgrade plan**](/deviceDevelop/DeviceManage/ota/part02/page-03) for details.

2.    A device has been upgraded or is being upgraded.

## Steps

1、  Log in to Developer Center, click "**Device Management**" → "**OTA Upgrade**" in the left-hand navigation bar.

 <a data-fancybox title="img" href="/en/guide/ota/ota21.png">![img](/en/guide/ota/ota21.png)</a>

2、  Select an upgrade plan, click "**Details**" and view the basic information of the plan and version package details.

 

 <a data-fancybox title="img" href="/en/guide/ota/ota22.png">![img](/en/guide/ota/ota22.png)</a>

 
 <a data-fancybox title="img" href="/en/guide/ota/ota23.png">![img](/en/guide/ota/ota23.png)</a>
 

3、  Click "**Upgrade Monitoring**" on the "**Upgrade Plan**" tab to enter the "**Upgrade Monitoring**" page.

4、  View the current upgrade status of the plan and the status of the upgrade device. 

 
 <a data-fancybox title="img" href="/en/guide/ota/ota24.png">![img](/en/guide/ota/ota24.png)</a>

**Upgrade Status:**

| Upgrade Status     | Description                                                                 |
| ------------------ | --------------------------------------------------------------------------- |
| Upgrade Failed     | The device could not  be upgraded due to failure of one or more components. |
| Upgraded           | All components in the device  have been successfully upgraded.              |
| Upgrading          | One or more components  in a device are upgrading.                          |
| Not Upgraded       | All components in the  device are not upgraded.                             |
| No Update Required | No update is required  for all components in the device.                    |

5、  During the effective period of the upgrade plan, you can retry the upgrade plan for the device that failed to be upgraded. See the "**Retry the Upgrade Plan**" section for details.

5、  Select an upgrade device, click "**Component Details**" to view the upgrade status and logs of all components in this device.

 

 <a data-fancybox title="img" href="/en/guide/ota/ota25.png">![img](/en/guide/ota/ota25.png)</a>
 
 <a data-fancybox title="img" href="/en/guide/ota/ota26.png">![img](/en/guide/ota/ota26.png)</a>

Component Upgrade Status:

| Upgrade Status              | Description                                                                                                                                                                |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Plan Not Received           | The component is in  the initial status and the upgrade does not start.                                                                                                    |
| Plan Received               | The device has  received the upgrade plan.                                                                                                                                 |
| Upgrade Confirmed           | The device has  confirmed the upgrade plan.                                                                                                                                |
| Ready to Download           | The device has  received the download address of the upgrade package.                                                                                                      |
| Downloading                 | The device has sent a  request to download the firmware from the OSS service.                                                                                              |
| Download Failed/  Succeeded | The downloaded of the  firmware version package is successful/failed.                                                                                                      |
| Upgrading                   | The device firmware is being upgraded.                                                                                                                                     |
| Upgrade Failed/  Succeeded  | The upgrade of the  component firmware is successful/failed.  **Note:** Forced  termination of a plan or expiration of a plan can also lead to component  upgrade failures |
| No Update Required          | The current version of  the component is consistent with the target version so there is no need to  update the firmware version package.                                   |

 
