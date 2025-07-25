# 连接设备到平台

本文档以RGB灯产品为例，详细阐述如何利用 AT 命令，将配备移远通信模块的设备接入移远物联网开发者中心（后简称为“平台”）。

**一、串口连接** 

将模块连接至主机并配置串口。串口默认配置如下： 

⚫ 波特率：115200 bps 

⚫ 数据位：8 

⚫ 奇偶校验：无 

⚫ 停止位：1 

⚫ 数据流控：无

**二、移远 MCU 仿真工具（可选）**

移远 MCU 仿真工具是一款实用的 PC 辅助软件，能够模拟主控 MCU 并与模块进行通信，从而极大地缩减了开发者熟悉 AT 命令的时间，显著提升开发效率。

<a data-fancybox title="img" href="/zh/quickStart/deviceconnect01.png" >![img](/zh/quickStart/deviceconnect01.png)</a>

**三、AT 命令交互流程** 

**3.1. AT 命令查询** 

检查串口通讯是否正常。连接模块与 PC 后，使用串口工具发送 **AT**，若模块会响应 **OK**，则表示通讯正常。 

```Plain
[TX]AT 

[RX]OK
```

提示：若发送 **AT** 后，模块无响应，则需要确认硬件接线与供电是否正常。 

**3.2. SIM 卡状态查询** 

查询 SIM 卡是否正常。若 SIM 卡插入且正常，执行 **AT+CPIN?** 后会返回 **+CPIN: READY**。 

```Plain
[TX]AT+CPIN? 

[RX]+CPIN: READY
[RX]OK
```

**3.3. 注网状态查询**

执行 **AT+CEREG?** 命令，可以查询设备的网络注册状态。**AT+CEREG** 命令不仅用于查询当前的网络注册情况，还能控制是否上报网络注册状态的非请求结果码。请注意，仅当 **AT+CEREG?** 响应的第二个参数返回 1 或 5 时，才表示设备已成功注册到网络。

```Plain
[TX]AT+CEREG? 

[RX]+CEREG:0,1 
[RX]OK
```

**3.4. 配置产品信息**

ProductKey（产品标识）与 ProductSecret（产品密钥）是一对相互关联的认证信息，它们共同用于设备的身份认证以及与平台的连接建立。在设备认证和通信过程中，设备会利用这一对信息来完成与平台的认证流程，并建立起稳定的连接。

```Plain
[TX]AT+QIOTCFG="productinfo","p1xxxX","blp**********GVz"

[RX]OK
```

**3.5. 配置物模型数据格式（可选）**

为了使物模型数据的可读性较高，将数据格式修改为JSON格式。

```Plain
[TX]AT+QIOTCFG="tsl",1 

[RX]OK
```

**3.6. 连接平台**

使用 **AT+QIOTREG=1** ，启用 QuecThing 功能，设备会主动进行认证并订阅平台。

```Plain
[TX]AT+QIOTREG=1 

[RX]OK 

[RX]+QIOTEVT: 1,10200 
[RX]+QIOTEVT: 2,10200 
[RX]+QIOTEVT: 3,10200
```

若成功连接平台后，可在开发者中心平台看到设备已上线，如下图所示：

<a data-fancybox title="img" href="/zh/quickStart/deviceconnect02.png" >![img](/zh/quickStart/deviceconnect02.png)</a>
