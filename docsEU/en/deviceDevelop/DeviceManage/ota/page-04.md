# OTA Upgrade for Sub-devices

A sub-device cannot directly connect to a network and it must connect indirectly to Developer Center through a gateway, which can be used for data interaction between the sub-device and Developer Center. A gateway device reports a request for an OTA upgrade, downloads the firmware version package, reports the upgrade status and the version number on behalf of sub-devices.

This section introduces the OTA upgrade process for sub-devices.

## Prerequisites

1、  A gateway device and a sub-device have been created. See [**Create a Product**](/deviceDevelop/ProductDevelop/ProductManagement) for details.

2、  A gateway device and a sub-device have been connected to Developer Center. See [**Device Access Solutions**](/deviceDevelop/DeviceAccessPlan/AccessPlan) for details.

3、  OTA upgrade has been supported on the gateway device and sub-device.

4、  The firmware version package to be upgraded has been added. See [**Add a Firmware Upgrade Package**](/deviceDevelop/DeviceManage/ota/part02/page-01) for details.

5、  The firmware has been verified (optional). See [**Verify Firmware (Optional)**](/deviceDevelop/DeviceManage/ota/part02/page-02) for details.

6、  The upgraded plan has been created and activated. See [**Create an upgrade plan**](/deviceDevelop/DeviceManage/ota/part02/page-03) for details.

 

## Upgrade Process

### Silent Upgrade

1.   A gateway device reports a request for an OTA upgrade or waits for Developer Center to push the upgrade plan regularly on behalf of sub-devices.

2.   A gateway device reports the confirmation/rejection of the OTA upgrade, downloads the firmware version package, reports the upgrade status on behalf of sub-devices. See the flow chart below for details.

3.   See [**OTA Upgrade Process**](/deviceDevelop/DeviceManage/ota/page-02) for details.

 

 <a data-fancybox title="img" href="/en/guide/ota/ota29.png">![img](/en/guide/ota/ota29.png)</a>
 

### Manual Upgrade

1.   A sub-device queries the upgrade plan of the device by calling the OpenAPI.

2.   You call the OpenAPI through the application to report the confirmation/rejection of the upgrade and Developer Center sends the upgrade plan to gateway devices.

3.   A gateway device reports the confirmation/rejection of the OTA upgrade, downloads the firmware version package, reports the upgrade status on behalf of sub-devices. See the flow chart below for details.

4.   See [**OTA Upgrade Process**](/deviceDevelop/DeviceManage/ota/page-02) for details.

 


 <a data-fancybox title="img" href="/en/guide/ota/ota30.png">![img](/en/guide/ota/ota30.png)</a>
