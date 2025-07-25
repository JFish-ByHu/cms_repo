# 产品配置及快速连接IOT平台示例


## __场景描述__
本章节指导用户通过QuecOpen配置产品信息及快速连接上开发者中心。

## __涉及API接口__

 |             函数             | 说明                             |
 | :--------------------------: | :------------------------------- |
 |         Ql_iotInit()         | 初始化配置并启动QuecThing功能    |
 |   Ql_iotConfigSetEventCB()   | 设置平台事件回调处理函数         |
 | Ql_iotConfigSetProductinfo() | 配置平台产品信息                 |
 |  Ql_iotConfigSetConnmode()   | 配置设备与平台之间的连接模式     |
 |     Ql_iotGetWorkState()     | 获取当前设备与平台之间的连接模式 |

<span style='color:#999AAA'>提示：详情请参考[产品配置 相关接口](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-02)。</span>


## __操作步骤__
### __平台侧__
#### __一、登录开发者中心__
登录<a href="https://iot.quectelcn.com" target="_blank">开发者中心</a>，未注册可单击<a href="https://iot.quectelcn.com/registerType" target="_blank">立即注册</a>完成注册。

#### __二、创建产品__
<!-- 创建产品是产品开发流程的第一步，产品是开发者中心定义一类设备的抽象描述，用于对同类设备进行管理。例如您有一台具备LTE联网能力的香薰机，需要接入开发者中心完成设备监控，则您可以定义它为一个产品：“智能香薰机”产品。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/Connect_cloud/Example-02.png">![img](/zh/deviceDevelop/develop/Connect_cloud/Example-02.png)</a> -->

创建产品详情请参考 [创建产品](/deviceDevelop/DeviceAccessPlan/speediness-01)。

<span style="color:#999AAA">提示：PK、PS码需用户保存好，设备的连接与产品删除等将会需要使用到该PK、PS。</span>

### __设备侧操作步骤__
#### __一、初始化配置__
开发前您还需要完成工程的QuecOpen方案的初始化，需要在使用联网服务前调用。初始化指的是在模组上电后，完成模组基本的配置，达到可以配网连接平台，以及状态上报等功能状态的过程。
```c
/* 初始化QuecThing SDK */
Ql_iotInit();
```
#### __二、事件回调__
事件回调处理接口简单的说就是为事件源(组件)添加一个监听任务 Ql_iotEventCB() ，当设备触发了某件事件时，交给监听器去处理，开发者只需要在 Ql_iotEventCB() 相应事件下作具体处理即可。

```c
/* 注册事件回调函数 */
Ql_iotConfigSetEventCB(Ql_iotEventCB);
```
#### __三、配置产品信息（初次连接需配置）__

QuecThing SDK 提供读写设备信息的接口及参考实现，可根据具体的实际情况进行适配。设备发送引导认证操作时，开发者中心对其携带的ProductKey、ProductSecret进行认证，认证通过，下发该设备接入所需信息。设备再携带这些信息与开发者中心建立连接。
```c
/* 配置产品信息*/
Ql_iotConfigSetProductinfo("p1xxxS", "VnhyxxxxxxxxSTFh");
```


#### __四、连接开发者中心__
模组启动连接开发者中心，在开发者中心和设备间建立安全，稳定的通信并实现设备管理，监测，控制等操作。
 ```c
/* 启动平台连接 */
Ql_iotConfigSetConnmode(1);
```

#### __五、查询当前连接状态__

为了进一步确认设备是否正常连接开发者中心，可通过调用 Ql_iotGetWorkState() 函数查看其返回值判断状态，若已确定设备与平台建立连接并可进行数据交互业务。

```c
/* 获取当前工作状态 */
QIot_state_e status = Ql_iotGetWorkState();
```

<br>

连接状态说明若下表所示。

| 响应数值 | 说明               |
| :------: | :----------------- |
|    0     | 未初始化           |
|    1     | 已初始化           |
|    2     | 正在认证           |
|    3     | 认证成功           |
|    4     | 认证失败           |
|    5     | 正在注册           |
|    6     | 注册成功，等待订阅 |
|    7     | 注册失败           |
|    8     | 已订阅，数据可发送 |
|    9     | 订阅失败           |
|    10    | 正在注销           |
|    11    | 注销成功           |
|    12    | 注销失败           |

   

