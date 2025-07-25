# SaaS数据通信概述

## **背景概述**

您的设备和服务器接入开发者中心，通过平台进行消息通信。平台进行消息流转的流程如下图


<a data-fancybox title="img" href="/zh/saasDevelop/image2022-3-14_15-30-55.png">![img](/zh/saasDevelop/image2022-3-14_15-30-55.png)</a>

在SaaS应用上，使用平台提供的SaaS SDK或调用平台OpenAPI，可以实现对设备的远程控制。具体API详见 [OpenAPI接入说明](OpenAPI/API_accessInstruction.md)。

使用平台的AMQP订阅功能，按业务场景需要订阅不同类型的消息事件。可实时接收设备上下线信息、设备上行数据信息、设备状态变更信息等。具体详见[AMQP消息订阅概述](AMQPSubscription/subscription/AMQPinfo.md)。
