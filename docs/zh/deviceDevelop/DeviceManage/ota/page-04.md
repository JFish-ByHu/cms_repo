# 子设备升级

子设备无独立上网能力，通过网关与平台建立连接。升级过程中子设备与平台的数据交互需依赖网关设备，由网关设备代其上报OTA请求、下载固件包、上报升级状态和版本号等。

本文主要介绍子设备OTA升级的流程。

## 前提条件

1、 在平台创建网关设备和子设备。具体步骤，详见[**创建产品**](/deviceDevelop/ProductDevelop/ProductManagement)。

2、 网关设备连接平台和代理子设备连接平台。具体步骤，详见[**设备接入方案**](/deviceDevelop/DeviceAccessPlan/AccessPlan)。

3、 网关设备和子设备已支持OTA升级功能。

4、 已添加用于升级的固件升级包。具体操作步骤，详见[**添加固件升级包**](/deviceDevelop/DeviceManage/ota/part02/page-01) 。

5、 固件升级包发起验证（可选）。具体操作步骤，详见[**发起固件验证**](/deviceDevelop/DeviceManage/ota/part02/page-02) 。

6、 已创建并激活升级计划。具体步骤，详见[**创建升级计划**](/deviceDevelop/DeviceManage/ota/part02/page-03)。

 

## 升级流程

### 静默升级

1、 网关设备代子设备发起OTA请求获取升级计划或者等待平台定时主动推送升级计划。

2、 网关代子设备上报确认/拒绝升级、下载固件升级包、上报升级状态等，详见下方流程图。

3、 具体操作流程，详见[**OTA升级流程**](/deviceDevelop/DeviceManage/ota/page-02)  。

 
<a data-fancybox title="img" href="/zh/guide/ota/ota29.png">![img](/zh/guide/ota/ota29.png)</a>

 

 

### 用户确认升级

1、 子设备通过App调用接口查询升级计划。

2、 用户通过App调用接口上报确认/拒绝升级，平台下发升级计划给网关设备。

3、 网关代子设备上报确认/拒绝升级、下载固件升级包、上报升级状态等，详见下方流程图。

4、 具体操作流程，详见[**OTA升级流程**](/deviceDevelop/DeviceManage/ota/page-02)  。

 

<a data-fancybox title="img" href="/zh/guide/ota/ota30.png">![img](/zh/guide/ota/ota30.png)</a>
