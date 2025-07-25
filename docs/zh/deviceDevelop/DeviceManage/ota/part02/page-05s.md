# 重试升级

静默升级计划有效期内，针对升级失败的设备，可以尝试重试升级。

本文主要介绍重试升级。

## 前提条件

存在升级中的静默升级计划，且计划内有升级失败的设备。

## 操作步骤

1、	登录开发者中心，在左侧导航栏，选择 **设备管理** ，点击**OTA升级**。

<a data-fancybox title="img" href="/zh/guide/ota/otaup01.png">![img](/zh/guide/ota/otaup01.png)</a>

2、 在 **升级计划** 面板页，点击要查看升级计划的 **升级监控**，进入升级监控页面。

3、 查看此计划下升级失败的设备。

<a data-fancybox title="img" href="/zh/guide/ota/ota24.png">![img](/zh/guide/ota/ota24.png)</a>

4、 设备重试升级必须满足：当前版本信息与需要重试升级的计划匹配。

5、 点击重试升级

1） 如果设备在线，平台将升级计划直接下发给设备，开始升级。

2） 如果设备不在线，设备再次上线时才会下发重试的升级计划。

注：此处的重试升级仅针对静默升级计划，用户确认升级计划下升级失败的设备需在App侧调用重试升级接口，详见此处 。

<a data-fancybox title="img" href="/zh/guide/ota/otaup02.png">![img](/zh/guide/ota/otaup02.png)</a>