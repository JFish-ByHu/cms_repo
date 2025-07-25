# Add a Firmware Upgrade Package



First, you need to add a firmware upgrade package on the platform for an OTA upgrade. 

This section introduces the steps of adding a firmware upgrade package.

## Prerequisites

1、  A product has been created. See [**Create a Product**](/deviceDevelop/ProductDevelop/ProductManagement) for details.

2、  The device has been connected to Developer Center. See [**Device Access Solutions**](/deviceDevelop/DeviceAccessPlan/AccessPlan) for details. 

3、  OTA upgrade has been supported on the device side.

 

## Steps

1、  Log in to Developer Center, click "**Device Management**" → "**OTA Upgrade**" in the left-hand navigation bar.

​<a data-fancybox title="img" href="/en/guide/ota/ota04.png">![img](/en/guide/ota/ota04.png)</a>                            

 

2、  Click "**Add a Version Package**" on the "**Version Package Management**" tab to configure parameters. And then click "**Confirm**" to complete the version package adding.


​<a data-fancybox title="img" href="/en/guide/ota/ota05.png">![img](/en/guide/ota/ota05.png)</a>    


**Parameters:**

| **Parameter**          | **Description**                                              |
| ---------------------- | ------------------------------------------------------------ |
| Version Package Name   | The version package name must be unique under a Developer  Center account and cannot be edited after creation. The length cannot exceed  100 characters.  **Note:** For an enterprise user, the version package name must be  unique under the enterprise account and its sub-accounts. |
| Component Type         | Select module  firmware for a module upgrade or MCU firmware for an MCU firmware upgrade. |
| Version Package Type   | Full package: The entire upgrade package will be sent to  the device for upgrade. <br>  Delta package: Only the difference between the new and the  original version packages will be sent to the device, resulting in smaller  file sizes and faster upgrades. |
| Target Version         | Set the version number of the  upgrade package. You can enter English, number, underline "_", hyphen "-" and English full stop ".”. |
| Source Version         | This parameter is only required for delta upgrades and  specifies the firmware version from which the device will be upgraded to the  target version. |
| Upload Upgrade Package | The file format should  be .bin, .rar, .pack, .mini_1, .mini_2, .py, .tar, .s19, .bin_1, .bin_2, .zip,  .tar and .gz. Up to 5 files are supported and a single file size cannot  exceed 100 MB.  **Note:** You can [**submit a ticket**](/personalCenter/WorkOrder) to apply for a new  file type if our supported file formats cannot meet your business  requirements. |
| Remarks                | A brief description of the upgrade package, including  details of fixed bugs and optimized features, which cannot exceed 200  characters. |

 

3、  The firmware version package successfully added can be directly used for the upgrade plan.

4、  View the added firmware version package in the version package list, as shown below.

 ​​<a data-fancybox title="img" href="/en/guide/ota/ota06.png">![img](/en/guide/ota/ota06.png)</a>    
