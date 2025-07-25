# 产品配置及快速连接 IoT 平台示例

## **场景描述**

本章节指导用户通过 QuecOpen 配置产品信息及快速连接上开发者中心。

## **涉及 API 接口**

 |            函数            | 说明                          |
 | :------------------------: | :---------------------------- |
 |       Qth_devInit()        | 初始化配置并启动QuecThing功能 |
 |   Qth_configSetEventCb()   | 设置平台事件回调处理函数      |
 | Qth_configSetProductInfo() | 配置IoT平台产品信息           |
 |       Qth_devStart()       | 启动IoT平台连接               |
 |     Qth_devGetStatus()     | 获取设备连接状态              |

<span style='color:#999AAA'>提示：详情请参考[产品配置 相关接口](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-02)与[设备连接 相关接口](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-03)。</span>

## **操作步骤**

### **平台侧**

#### **一、登录开发者中心**

登录<a href="https://iot.quectelcn.com" target="_blank">开发者中心</a>，未注册可单击<a href="https://iot.quectelcn.com/registerType" target="_blank">立即注册</a>完成注册。

#### **二、创建产品**

<!-- 创建产品是产品开发流程的第一步，产品是开发者中心定义一类设备的抽象描述，用于对同类设备进行管理。例如您有一台具备WiFi联网能力的香薰机，需要接入开发者中心完成设备监控，则您可以定义它为一个产品：“智能香薰机”产品。

<a data-fancybox title="img" href="/zh/docs/QuecOpen/resource/Connect_cloud/Example-02.png">![img](/zh/docs/QuecOpen/resource/Connect_cloud/Example-02.png)</a> -->

创建产品详情请参考 [创建产品](/deviceDevelop/DeviceAccessPlan/speediness-01)。

<span style="color:#999AAA">提示：PK、PS 码需用户保存好，设备的连接与产品删除等将会需要使用到该 PK、PS。</span>

## **设备侧操作步骤**

### **一、初始化配置**

开发前您还需要完成工程的 QuecOpen 方案的初始化，需要在使用联网服务前调用。初始化指的是在模组上电后，完成模组基本的配置，达到可以配网连接平台，以及状态上报等功能状态的过程。

```c
/* 初始化QuecThing SDK */
Qth_devInit();
```

### **二、事件回调**

事件回调处理接口简单的说就是为事件源(组件)添加一个监听任务 event_cb ，当设备触发了某件事件时，交给监听器去处理，开发者只需要在 event_cb 相应事件回调函数下作具体处理即可。

```c
/* 注册事件回调函数 */
Qth_eventCb_t event_cb = {0};
event_cb.devEventCb = devEventCb;
Qth_configSetEventCb(event_cb);
```

### **三、配置产品信息（初次连接需配置）**

QuecThing SDK 提供读写设备信息的接口及参考实现，可根据具体的实际情况进行适配。设备发送引导认证操作时，开发者中心对其携带的 ProductKey、ProductSecret 进行认证，认证通过，下发该设备接入所需信息。设备再携带这些信息与开发者中心建立连接。

```c
/* 配置产品信息*/
Qth_configSetProductInfo("p1xxxS", "VnhyxxxxxxxxSTFh");
```

### **四、连接开发者中心**

模组启动连接开发者中心，在开发者中心和设备间建立安全，稳定的通信并实现设备管理，监测，控制等操作。

```c
/* 启动平台连接 */
Qth_devStart();
```

### **五、App 蓝牙配网**

1、打开移联万物 APP 并登录个人账户，在 App 首页，点击右上角“⊕”按钮。在弹出的窗口中选择“近场发现”。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/app/Example-app-1.png">
<img src="/zh/deviceDevelop/develop/app/Example-app-1.png" style="width: 30%" /></a>

2、进入“搜索设备”界面并自动搜寻附近的蓝牙设备，搜索到蓝牙设备后会显示在当前界面中。点击已搜索到的蓝牙设备后的“⊕”，进行“网络配置”。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/app/Example-app-2.png">
<img src="/zh/deviceDevelop/develop/app/Example-app-2.png" style="width: 30%" /></a>

3、在“网络配置”界面输入当前环境下的 Wi-Fi 名称和密码（模组现仅支持 Wi-Fi 2.4 GHz）。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/app/Example-app-3.png">
<img src="/zh/deviceDevelop/develop/app/Example-app-3.png" style="width: 30%" /></a>

4、配网中，请等待配网完成。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/app/Example-app-4.png">
<img src="/zh/deviceDevelop/develop/app/Example-app-4.png" style="width: 30%" /></a>

5、配网完成后，成功添加的设备显示在 App 首页“设备列表”中，如下图所示。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/app/Example-app-5.png">
<img src="/zh/deviceDevelop/develop/app/Example-app-5.png" style="width: 30%" /></a>

此时开发者中心可以看到此设备已经是在线状态。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/app/Example-app-7.png">
<img src="/zh/deviceDevelop/develop/app/Example-app-7.png" /></a>

### **六、查询当前连接状态(可选)**

设备连接IoT平台成功后会通过 Qth_configSetEventCb() 注册的事件回调函数通知到用户，也可以通过调用 Qth_devGetStatus() 函数查看其返回值判断状态，若已确定设备与平台建立连接并可进行数据交互业务。

```c
/* 获取当前工作状态 */
Qth_devStatus_e status;
Qth_devGetStatus(&status);
```

<br>

连接状态说明若下表所示。

| 响应数值 | 说明         |
| :------: | :----------- |
|    0     | 配网状态     |
|    2     | 收到配置信息 |
|    3     | 连上路由器   |
|    4     | 连上IoT平台  |
|    5     | 静默模式     |
