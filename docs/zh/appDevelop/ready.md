# App数据通信概览

## **背景概述**

您的设备接入开发者中心，App通过平台的Websocket功能、OpenAPI功能进行消息通信。消息流转的流程如下图


<a data-fancybox title="img" href="/zh/quickStart/image2022-3-22_10-39-54.png">![img](/zh/quickStart/image2022-3-22_10-39-54.png)</a>


App可使用平台提供的SDK，或调用平台的OpenAPI，实现对设备的远程控制。具体API详见[OpenAPI使用指导](/appDevelop/OpenAPI/API_accessInstruction)

通过WebSocket功能，与设备进行实时数据交互。可实现获取设备上报的消息、控制设备参数等功能。
