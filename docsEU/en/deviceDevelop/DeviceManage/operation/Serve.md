# Service Calls

Service calls section displays the data defined as services in TSL model for the product.

## **Prerequisites**

● A product has been created in TSL data format and a feature has been defined as a service in the TSL model.<br />
● A device has been developed and the service call data has been sent.

## **Steps**

Log in to Developer Center, click "Device Management"→ "Device Maintenance” in the left-hand navigation bar to display the list of devices. Find the desired device from the list and click "View" in the Action column to enter "Device Information" page, and then click "Service Calls" tab.

<a data-fancybox title="img" href="/en/guide/image2022-3-10_11-45-7.png?version=1&modificationDate=1646883318000&api=v2">![img](/en/guide/image2022-3-10_11-45-7.png?version=1&modificationDate=1646883318000&api=v2)</a>

Parameters

| **Parameter**    | **Description**                                                                                                  |
| :--------------- | :--------------------------------------------------------------------------------------------------------------- |
| Feature ID       | Unique   identifier of a product feature                                                                         |
| Service Name     | Name of the service defined in the TSL model                                                                     |
| Identifier       | Identifier of the service defined in TSL model, corresponding to the service name                                |
| Sending Time     | The time when   a service was called, that is, input parameter creation time                                     |
| Response Time    | The response time of the device after the service was called, that is, the creation time of the output parameter |
| Input Parameter  | Input the parameter when calling a service                                                                       |
| Output Parameter | The output parameter   in the device response                                                                    |
