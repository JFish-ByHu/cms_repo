# Manage the Upgrade Plan

This section introduces how to manage upgrade plans.

## Prerequisite

An upgraded plan has been created. See [**Create an upgrade plan**](/deviceDevelop/DeviceManage/ota/part02/page-03)for details.

## Steps

1、  Log in to Developer Center, click "**Device Management**" → "**OTA Upgrade**" in the left-hand navigation bar.

2、  View the number of successful upgrades, the number of failed upgrades and the successful upgrade rate on the "**Upgrade Plan**" tab.

**Note:** Successful upgrade rate: Upgrades not started or in progress are excluded.

 

 <a data-fancybox title="img" href="/en/guide/ota/ota27.png">![img](/en/guide/ota/ota27.png)</a>
 

**Action Description:**

| **Action**                    | **Description**                                                                                                                                                                                                                                                              |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activate Plan                 | Click "**Activate Plan**" and then the plan is in the activated status.  Now the plan cannot be edited. Once a device in the plan goes online, it  starts to be upgraded.                                                                                                    |
| Delete                        | Only inactivated  plan can be deleted.                                                                                                                                                                                                                                       |
| Edit                          | Only inactivated  plan can be edited.  **Note:** The product to  be upgraded cannot be edited.  The blacklist and  whitelist need to be edited in the plan details.                                                                                                          |
| Terminated  Forcibly          | Terminate the plan forcibly. The devices to be upgraded  but not upgraded in the plan cannot continue to be upgraded after the plan is  terminated forcibly, except the devices already in the upgrade progress.                                                             |
| Suspend Plan /Resume  Upgrade | Suspend plan: The  upgrade plan for the devices to be upgraded but not upgraded is suspended.  While the devices already in the upgrade progress can continue to be  upgraded.  Resume upgrade: The  devices not upgraded yet in the plan can continue the upgrade progress. |

 



