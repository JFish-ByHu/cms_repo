# Verify Firmware (Optional)



Firmware verification is for ensuring the availability of the firmware to be upgraded to minimize the upgrade risk. Before upgrading devices in large quantities, it is recommended to select a single device for upgrading and verify its stability.

This section introduces the steps of firmware verification.

## Prerequisites

The firmware version package to be verified has been added. See [**Add a Firmware Upgrade Package**](/deviceDevelop/DeviceManage/ota/part02/page-01) for details.

## Steps

1.  Select a firmware package version and click “**Verify Firmware**” in the version package list. Click “Submit Verification” after configuring parameters to verify the upgrade on the selected device.


2.  If the device is online and the firmware package versions are consistent, the platform will issue the upgrade plan to the device immediately.

**Note:**

1)  The duration of the firmware verification is up to 60 minutes. Timeout means verification failure.

2)  Please ensure that the device can be used for upgrade and is online.

**Parameter:**

| **Parameter**           | **Description**                                                                                                                                                                                                                                                                                                                                                  |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Product to Be  Upgraded | Select the product to which the device whose firmware  needs verifying belongs.                                                                                                                                                                                                                                                                                  |
| Verify Device           | Select the device  whose firmware needs verifying.                                                                                                                                                                                                                                                                                                               |
| Component Identifier    | Enter the component identifier of the module firmware  or MCU firmware to be verified.  **Note:** Please ensure the correctness of the component  identifier. See [**AT command solution**](/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-03) for details.  See [**QuecOpen solution**](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-02) for details. |

 

<a data-fancybox title="img" href="/en/guide/ota/ota07.png">![img](/en/guide/ota/ota07.png)</a>
 

<a data-fancybox title="img" href="/en/guide/ota/ota08.png">![img](/en/guide/ota/ota08.png)</a>

 
