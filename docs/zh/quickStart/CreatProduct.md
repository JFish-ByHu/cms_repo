# 创建并定义产品

本文将以RGB灯产品举例，快速体验产品创建流程。

## 创建产品

登录账号后在产品开发->产品管理页面点击创建产品按钮。

第一步：选择品类。通过品类搜索RGB灯快速选中，或在标准品类列表中找到电工照明一级品类下的RGB灯。

第二步：选择方案。您可选择系统中已预设的推荐方案完成快速创建，也可以通过自定义方案根据实际需要进行配置，此处我们以自定义方案进行配置。

<a data-fancybox title="img" href="/zh/quickStart/creatproduct01.png" >![img](/zh/quickStart/creatproduct01.png)</a>

第三步：选择产品的联网类型与通讯方式。此处我们选择单品设备类型、2G/3G/4G/5G联网方式、数据格式使用物模型类型。

<a data-fancybox title="img" href="/zh/quickStart/creatproduct02.png" >![img](/zh/quickStart/creatproduct02.png)</a>

<a data-fancybox title="img" href="/zh/quickStart/creatproduct03.png" >![img](/zh/quickStart/creatproduct03.png)</a>

<a data-fancybox title="img" href="/zh/quickStart/creatproduct04.png" >![img](/zh/quickStart/creatproduct04.png)</a>

第四步：最后上传产品图片、输入产品名称，提交并完成产品创建。

<a data-fancybox title="img" href="/zh/quickStart/creatproduct05.png" >![img](/zh/quickStart/creatproduct05.png)</a>

创建成功后平台将为该产品分配ProductKey与ProductSecret，用于后续设备需连接平台时的鉴权。

<a data-fancybox title="img" href="/zh/quickStart/creatproduct06.png" >![img](/zh/quickStart/creatproduct06.png)</a>

## 功能定义

产品创建后可进入产品详情的功能定义页面进行物模型功能定义。

以RGB灯的功能举例，点击物模型编辑并添加以下功能点：

| **功能ID** | **功能类型** | **功能名称** | **标识符** | **数据类型** | **数据定义**           | **读写类型** | **备注**                     |
| ---------- | ------------ | ------------ | ---------- | ------------ | ---------------------- | ------------ | ---------------------------- |
| 1          | 属性         | 开关         | Switch     | Bool         | False：关灯True：开灯  | 读写         |                              |
| 2          | 属性         | 颜色R        | Red        | INT          | 最小值：0最大值：255   | 读写         | 红色灯色值，用于组成彩灯颜色 |
| 3          | 属性         | 颜色G        | Green      | INT          | 最小值：0最大值：255   | 读写         | 绿色灯色值，用于组成彩灯颜色 |
| 4          | 属性         | 颜色B        | Blue       | INT          | 最小值：0最大值：255   | 读写         | 蓝色灯色值，用于组成彩灯颜色 |
| 5          | 属性         | 亮度         | Brightness | INT          | 最小值：0最大值：100   | 读写         | 用于控制灯光亮度大小         |
| 6          | 属性         | 延时关灯时间 | Delay      | INT          | 最小值：0最大值：86400 | 读写         | 用于设置倒计时关灯时间       |

创建完成后点击发布应用生效物模型，发布成功后，平台将为每个属性分配功能ID。后续设备与平台将通过该ID进行

数据交互。
