# OTA Upgrade for Bluetooth Device

Bluetooth devices need to be connected to Developer Center on the application. The data interaction between Bluetooth devices and Developer Center during the upgrade process is completed on the application. You can query the upgrade plan for the device on the application. Developer Center sends the upgrade plan to the application. Download the firmware package on the application and share the firmware package to the device. Then an OTA upgrade is completed.

This section introduces the OTA upgrade process for Bluetooth devices. 

 

## Prerequisites

1.   A Bluetooth device has been created. See [**Create a Product**](/deviceDevelop/ProductDevelop/ProductManagement) for details.

2.   A Bluetooth device has been connected to Developer Center. See [**Device Access Solutions**](/deviceDevelop/DeviceAccessPlan/AccessPlan) for details.

3.   OTA upgrade has been supported on the Bluetooth device and the application.

4.   The firmware version package to be upgraded has been added. See [**Add a Firmware Upgrade Package**](/deviceDevelop/DeviceManage/ota/part02/page-01) for details.

5.   The firmware has been verified (optional). See [**Verify Firmware (Optional)**](/deviceDevelop/DeviceManage/ota/part02/page-02) for details.

6.   The upgraded plan has been created and activated. See [**Create an upgrade plan**](/deviceDevelop/DeviceManage/ota/part02/page-03) for details.

 

## Upgrade Process

1.   Bluetooth devices query the upgrade plan of the device by calling the OpenAPI.

2.   The application calls the OpenAPI to report the confirmation/rejection of the upgrade and sends a request for firmware version package upgrading.

3.   The firmware version package is issued to the device after the download is completed. See the flow chart below for details.

4.   See [**OTA Upgrade Process**](/deviceDevelop/DeviceManage/ota/page-02) for details.

 

 <a data-fancybox title="img" href="/en/guide/ota/ota28.png">![img](/en/guide/ota/ota28.png)</a>
 
