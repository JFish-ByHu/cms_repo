# Overview

How to connect your device to Developer Center? Refer to the following figures.

<a data-fancybox title="img" href="/en/quickStart/image005.png">![img](/en/quickStart/image005.png)</a>

## **Develop Device**

<a data-fancybox title="img" href="/en/quickStart/image2022-3-10_11-34-48.png">![img](/en/quickStart/image2022-3-10_11-34-48.png)</a>


## ****Develop Application****
<a data-fancybox title="img" href="/en/quickStart/image2022-3-10_10-22-13.png">![img](/en/quickStart/image2022-3-10_10-22-13.png)</a>

## **Develop SaaS Application**

<a data-fancybox title="img" href="/en/quickStart/image2022-3-10_10-22-46.png">![img](/en/quickStart/image2022-3-10_10-22-46.png)</a>

## **Data Flow**

<a data-fancybox title="img" href="/en/quickStart/image2022-3-22_10-39-54.png">![img](/en/quickStart/image2022-3-22_10-39-54.png)</a>

## **Access Process**

<a data-fancybox title="img" href="/en/quickStart/image10013.png">![img](/en/quickStart/image10013.png)</a>

The development process is divided into four steps:

1. Product Creation

You can create a product and define its TSL model features on Developer Center after you register an account and log in. Upon creating a product, you will be awarded a [ProductKey](https://iot-cloud-docs.quectelcn.com/introduction/page-03.html) and [ProductSecret](https://iot-cloud-docs.quectelcn.com/introduction/page-03.html).  When a device connects to Developer Center by using the [ProductKey](https://iot-cloud-docs.quectelcn.com/introduction/page-03.html) and [ProductSecret](https://iot-cloud-docs.quectelcn.com/introduction/page-03.html assigned by the platform, the device will be automatically added to the corresponding product. 

2. Device Development

You can utilize modules integrated with QuecThing SDK feature for quick connectivity.  Click [**here**](https://core.acceleronix.io/download?menuCode=MODULE_DEVL&resourceType=M) to view all modules integrated with QuecThing SDK. For more module models, click [**here**](https://yiyuanznsb.tmall.com/shop/view_shop.htm). Based on your actual requirements, you can choose one of the following three methods to connect to Developer Center: AT commands, QuecOpen, or QuecPython.

3. Connect a SaaS Application to Developer Center

Once a device is connected to Developer Center, its data will be transferred to Developer Center. SaaS application and Developer Center can transfer device data through AMQP feature. At the same time, it enables the issuance of control commands through OpenAPIs and supports the upper-layer business scenarios such as device operation and maintenance management and data analysis.

4. Connect an App to Developer Center

Once a device is connected to Developer Center, you can obtain real-time device status and issue control commands through WebSocket on your mobile phone, and read the latest reported data status sent by the device through API to manage the device remotely.

