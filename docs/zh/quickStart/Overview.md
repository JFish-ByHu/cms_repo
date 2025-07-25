# 概述

如何让我的设备连接上开发者中心?参考下图。

<a data-fancybox title="img" href="/zh/quickStart/image005.png">![img](/zh/quickStart/image005.png)</a>

## **设备侧开发**

<a data-fancybox title="img" href="/zh/quickStart/image2022-3-10_11-34-48.png">![img](/zh/quickStart/image2022-3-10_11-34-48.png)</a>


## **App应用开发**
<a data-fancybox title="img" href="/zh/quickStart/image2022-3-10_10-22-13.png">![img](/zh/quickStart/image2022-3-10_10-22-13.png)</a>

## **SaaS应用开发**

<a data-fancybox title="img" href="/zh/quickStart/image2022-3-10_10-22-46.png">![img](/zh/quickStart/image2022-3-10_10-22-46.png)</a>

## **数据流转示意图**

<a data-fancybox title="img" href="/zh/quickStart/image2022-3-22_10-39-54.png">![img](/zh/quickStart/image2022-3-22_10-39-54.png)</a>

## **接入流程**

<a data-fancybox title="img" href="/zh/quickStart/image10013.png">![img](/zh/quickStart/image10013.png)</a>

整体开发流程主要分为以下4个阶段：

1、创建产品

完成账户注册后，在开发者中心上创建产品，并定义物模型功能。创建完成后，您会获得[ProductKey](https://iot-cloud-docs.quectelcn.com/introduction/page-03.html)和[ProductSecret](https://iot-cloud-docs.quectelcn.com/introduction/page-03.html)。设备连接平台时使用系统分配的[ProductKey](https://iot-cloud-docs.quectelcn.com/introduction/page-03.html)和[ProductSecret](https://iot-cloud-docs.quectelcn.com/introduction/page-03.html)，设备会自动添加到产品中。

2、设备开发

您可使用已经集成QuecThing SDK功能的模组实现快速接入，当前已集成SDK的模组请参考[这里](https://iot.quectelcn.com/download?menuCode=MODULE_DEVL&resourceType=M)。需要更多的模组请点击[这里](https://yiyuanznsb.tmall.com/shop/view_shop.htm)。根据实际需要您可选择通过AT命令/QuecOpen/QuecPython三种方式中的其中一种即可接入开发者中心。

3、SaaS应用接入

设备接入开发者中心后，设备数据将上报到开发者中心。SaaS应用与开发者中心之间可通过AMQP功能实现设备数据流转。同时可通过OpenAPI实现控制指令下发，实现设备运维管理、数据分析等上层业务应用场景。

4、App应用接入

设备接入开发者中心后，手机端可通过WebSocket与设备进行实时状态获取和控制指令下发，也可通过API获取设备最后上报的数据状态，实现设备远程管理。

