# Device Running State

This section outlines device running state, which is available only for devices under the products in TSL data format.

## **Prerequisites**

● A product has been created in TSL data format.<br />
● A device has been developed and TSL data has been sent.

## **Steps**

Log in to Developer Center, click "Device Management"→ "Device Maintenance” in the left-hand navigation bar to display the device list. Find the device you want to check, click "View" in the Action column to enter "Device Information" page, and then click "Running State" tab to view the properties in the TSL model.

<a data-fancybox title="img" href="/en/guide/image2022-3-10_9-19-45.png?version=1&modificationDate=1646874596000&api=v2">![img](/en/guide/image2022-3-10_9-19-45.png?version=1&modificationDate=1646874596000&api=v2)</a>

Find the property you want to view and click "View Data" button in the Action column to get the historical data for the property.

<a data-fancybox title="img" href="/en/guide/image2022-3-10_11-35-57.png?version=1&modificationDate=1646882767000&api=v2">![img](/en/guide/image2022-3-10_11-35-57.png?version=1&modificationDate=1646882767000&api=v2)</a>

Parameters

| **Parameter** | **Description**                                                                  |
| :------------ | :------------------------------------------------------------------------------- |
| Feature ID    | Unique identifier of a product feature                                           |
| Property Name | Name of the property defined in the TSL model                                    |
| Data Type     | Data type of the feature. See [TSL Overview](/deviceDevelop/ProductDevelop/definition/page-01). |
| Identifier    | Identifier of the feature defined in TSL model                                   |
| Update Date   | The most recent date when the data was reported and stored                       |
| Current Value | The most recently reported feature value                                         |

