# 蓝牙设备升级

纯蓝牙设备需要通过App与平台建立连接。升级过程中蓝牙设备与平台的数据交互需依赖App，由App查询获取蓝牙设备的升级计划，平台返回升级计划给到App，App下载固件包，将固件包传递给蓝牙设备完成升级。

本文主要介绍蓝牙设备OTA升级的流程。

 

## 前提条件

1、 在平台创建蓝牙设备。具体步骤，详见[**创建产品**](/deviceDevelop/ProductDevelop/ProductManagement)。

2、 蓝牙设备连接上平台。具体步骤，详见[**设备接入方案**](/deviceDevelop/DeviceAccessPlan/AccessPlan) 。

3、 蓝牙设备和App已支持OTA升级功能。

4、 已添加用于升级的固件升级包。具体操作步骤，详见[**添加固件升级包**](/deviceDevelop/DeviceManage/ota/part02/page-01) 。

5、 固件升级包发起验证（可选）。具体操作步骤，详见[**发起固件验证**](/deviceDevelop/DeviceManage/ota/part02/page-02)  。

6、 已创建并激活升级计划。具体步骤，详见[**创建升级计划**](/deviceDevelop/DeviceManage/ota/part02/page-03) 。

 

## 升级流程

1、 蓝牙设备通过App调用接口查询升级计划。

2、 App调用接口上报确认/拒绝升级，同时请求下载固件升级包。

3、 固件包下载完成后下发给蓝牙设备，完成升级，详见下方流程图。

4、 具体操作流程，详见 [**OTA升级流程**](/deviceDevelop/DeviceManage/ota/page-02) 。

 

<a data-fancybox title="img" href="/zh/guide/ota/ota28.png">![img](/zh/guide/ota/ota28.png)</a>
