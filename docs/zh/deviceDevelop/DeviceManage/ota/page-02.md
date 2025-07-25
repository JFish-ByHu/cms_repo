# 升级流程概览

1、  设备端开发OTA升级功能。

2、  [添加固件升级包](/deviceDevelop/DeviceManage/ota/part02/page-01)：添加升级所需的升级整包或者差分包。

3、  [验证固件包](/deviceDevelop/DeviceManage/ota/part02/page-02)，发起固件验证，验证固件包的可用性（可选）。

4、  [创建升级计划](/deviceDevelop/DeviceManage/ota/part02/page-03)，配置升级策略，设备请求或者平台主动推送升级计划。

说明：

静默升级计划：设备主动上报OTA请求升级计划或者平台主动推送升级计划给设备

用户确认计划：设备请求获得升级计划后，上报用户确认后，平台推送升级计划给设备。

5、  设备端OTA升级：设备端收到平台下发的升级计划和升级URL，完成固件更新。

6、  [查看设备升级情况](/deviceDevelop/DeviceManage/ota/part02/page-05)：查看设备升级进度和日志等信息。

7、  查看计划升级情况：查看计划升级成功率以及升级设备数情况。

 

## 静默升级

1、 设备携带版本号上报OTA请求，平台匹配校验后下发升级计划给设备，完成升级。

2、 或等待平台定时推送升级任务给到设备完成OTA升级。

3、 详见下方流程图。

  
<a data-fancybox title="img" href="/zh/guide/ota/ota01.png">![img](/zh/guide/ota/ota01.png)</a>

​                               

 

## 用户确认升级

1、 通过接口查询设备可升级计划，拿到升级计划后，上报用户确认升级，平台推送升级计划给到设备进行OTA升级。

2、 详见下方流程图。

 
<a data-fancybox title="img" href="/zh/guide/ota/ota02.png">![img](/zh/guide/ota/ota02.png)</a>
 
