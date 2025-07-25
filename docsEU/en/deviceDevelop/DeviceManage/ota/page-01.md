# OTA Overview

OTA stands for Over-the-Air Technology. OTA is commonly used in IoT to remotely update the module firmware or MCU firmware of devices without requiring physical access, thus saving the cost and time that would be required to recall sold products and burn firmware.

This section mainly introduces features of OTA upgrade and the operation process.

Prerequisite

Before using the OTA upgrade feature, please make sure that the OTA upgrade capability has been developed on device side.

## **OTA Capability of Developer Center**

| **Feature**               | **Description**                                              |
| ------------------------- | ------------------------------------------------------------ |
| Supported Protocol        | MQTT, LwM2M, and HTTP protocols can be  used for OTA upgrade.  **Note:** The  devices with China Telecom SIM cards inserted do not support OTA upgrade  currently. |
| Component Type            | An upgrade plan  supports both the module and MCU firmware upgrade. |
| Firmware version  package | The file format  should be .bin, .rar, .pack, .mini_1, .mini_2, .py, .tar, .s19, .bin_1, .bin_2,  .zip, .tar and.gz. Up to 5 files are supported and a single file size cannot  exceed 100 MB.  **Note:** You  can [**submit a ticket**](/personalCenter/WorkOrder) to apply for a new file type if our supported file formats cannot meet your  business requirements. |
| Upgrade Scope             | Upgrade devices in batches, and exclude  special cases by adding whitelists and blacklists. Maximum 10000 devices can  be upgraded simultaneously. |
| Upgrade Plan              | l   Full-package  upgrade: This upgrade method upgrades the entire firmware using only the  target version package, without the need for a source version package.  l   Delta-package  upgrade: You need to specify the current version (source version) and the  target version. The firmware is a delta package. You need to upload the  corresponding source version and delta package of the target version. |
| Upgrade Mode              | Silent upgrade allows Developer  Center to directly push the upgrade plan to the device for OTA upgrade  without your confirmation.  Manual upgrade requires your  manual confirmation of the upgrade plan on the application before Developer  Center pushes the plan to the device for OTA upgrade. |
| Region                    | Global                                                       |

 

