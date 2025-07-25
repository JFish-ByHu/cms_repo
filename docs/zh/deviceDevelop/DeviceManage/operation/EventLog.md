# 事件日志

本文介绍设备运维中事件日志。所谓事件日志是设备上报各种事件的历史记录。

## **前提条件**

● 创建产品<br />
● 完成产品开发-设备调试步骤<br />
● 设备进行过事件上报

## **操作步骤**

1.登录开发者中心后，点击左侧菜单“设备管理”→ “设备运维”，出现设备列表页，点击设备操作栏中“查看”，跳转至“设备信息” tab页，点击“事件日志”tab页。

<a data-fancybox title="img" href="/zh/guide/image2022-3-9_15-12-59.png?version=1&modificationDate=1646809396000&api=v2">![img](/zh/guide/image2022-3-9_15-12-59.png?version=1&modificationDate=1646809396000&api=v2)</a>



参数说明

| 参数      | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DeviceKey | 设备标识                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 创建时间  | 事件日志入库的时间                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 事件类型  | 上线：设备注册连接接入开发者中心，每注册连接一次，会记录一次事件。下线：设备主动触发注销连接操作，或者长时间未与开发者中心进行通讯（含上线、上行与下行数据），开发者中心强制进行下线操作。重新上线：设备注册连接接入开发者中心后重新连接上线。主要出现在子设备动态切换网关设备后。设备重置：设备主动触发恢复出厂设置操作，对设备连接的秘钥重新下发，同时也会解除网关与子设备拓扑关系、终端用户与设备绑定关系。信息：仅物模型定义的事件信息，级别为信息级别的上报数据。告警：仅物模型定义的事件信息，级别为告警级别的上报数据。故障：仅物模型定义的事件信息，级别为故障级别的上报数据。 |
| 输出参数  | 仅物模型事件中会携带具体的输出参数                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 备注      | 若事件被标记为无效事件，不会推送到AMQP或WebSocket                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

