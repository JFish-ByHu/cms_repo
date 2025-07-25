# 运行状态

本文介绍设备运维中的运行状态。这里的运行状态只有在物模型数据格式的产品下才会存在。

## **前提条件**

● 已创建物模型产品<br />
● 已完成设备端开发，并发送物模型数据

## **操作步骤**

1.登录开发者中心后，点击左侧菜单“设备管理”→ “设备运维”，出现设备列表页，点击设备操作栏中“查看”，跳转至“设备信息” tab页，点击“运行状态”tab页。

<a data-fancybox title="img" href="/zh/guide/image2022-3-10_9-19-45.png?version=1&modificationDate=1646874596000&api=v2">![img](/zh/guide/image2022-3-10_9-19-45.png?version=1&modificationDate=1646874596000&api=v2)</a>

运行状态是针对物模型属性数据的展示，通过点击操作栏的“查看数据”可以对当前属性的历史数据进行查看。

<a data-fancybox title="img" href="/zh/guide/image2022-3-10_11-35-57.png?version=1&modificationDate=1646882767000&api=v2">![img](/zh/guide/image2022-3-10_11-35-57.png?version=1&modificationDate=1646882767000&api=v2)</a>

参数说明

| 参数     | 描述                                                                                  |
| :------- | :------------------------------------------------------------------------------------ |
| 功能ID   | 物模型功能id,产品下功能唯一标识                                                       |
| 属性名称 | 物模型中定义的功能名称                                                                |
| 数据类型 | 当前功能的数据类型，具体数据类型可查看[物模型概述](/deviceDevelop/ProductDevelop/definition/page-01) |
| 标识符   | 功能定义中标识符                                                                      |
| 更新时间 | 最近一次上报入库时间                                                                  |
| 当前值   | 最近一次上报的功能定义value值                                                         |

