# 产品配置及快速连接IOT平台示例
## **场景描述**
本章节指导用户通过AT指令配置产品信息及快速连接上开发者中心。

## **涉及指令**

|   指令名称   |             功能描述             |
| :----------: | :------------------------------: |
|  AT+QIOTCFG  |           配置可选参数           |
|  AT+QIOTREG  |         配置平台连接模式         |
| AT+QIOTSTATE | 查询当前设备与平台之间的连接状态 |

<span style='color:#999AAA'>提示：详情请参考[产品配置 相关命令](/deviceDevelop/DeviceAccessPlan/nb/AT/API/nb-at-03)。</span>



## **操作步骤**
### **平台侧操作**
#### **一、登录开发者中心**
登录<a href="https://iot.quectelcn.com" target="_blank">开发者中心</a>，未注册可单击<a href="https://iot.quectelcn.com/registerType" target="_blank">立即注册</a>完成注册。

#### **二、创建产品**

<!-- <a data-fancybox title="img" href="/zh/deviceDevelop/cellular/QuecOpen/resource/Connect_cloud/Example-02.png">![img](/zh/deviceDevelop/cellular/QuecOpen/resource/Connect_cloud/Example-02.png)</a> -->

创建产品详情请参考 [创建产品](/deviceDevelop/DeviceAccessPlan/speediness-01)。

<span style="color:#999AAA">提示：PK、PS码需用户保存好，设备的连接与产品删除等将会需要使用到该PK、PS。</span>

### **设备侧**

#### **一、配置产品信息（初次连接需配置）**

在开发者中心创建产品后，平台会通过邮件的方式向您发送ProductKey、ProductSecret码，同一产品下所有设备可以烧录相同的ProductKey和ProductSecret。设备发送引导认证操作时，开发者中心对其携带的ProductKey和ProductSecret进行认证，认证通过。若首次连接开发者中心需先通过 __AT+QIOTCFG="productinfo"[,\<pk\>,\<ps\>]__ 指令配置产品信息。将产品密钥烧录进设备，通过设备引导/认证，通过引导/认证的设备会自动添加至平台所在的产品中。 

 ```c
[TX]AT+QIOTCFG="productinfo","pxxxxt","cDVTxxxxxxxxWGVB"

[RX]AT+QIOTCFG="productinfo","pxxxxt","cDVTxxxxxxxxWGVB"

OK
```

#### **二、连接开发者中心**


MCU可通过 __AT+QIOTREG=\<reg_mode\>__ 指令配置平台连接模式，连接开发者中心前需配置PK/PS，若未配置则返回ERROR。

   ```c
[TX]AT+QIOTREG=1

[RX]AT+QIOTREG=1

OK
```

#### **三、查询当前连接状态**
为了进一步确认设备是否正常连接开发者中心，可通过 __AT+QIOTSTATE?__ 指令查询当前设备与平台之间的连接状态。当指令响应 __+QIOTSTATE: 8__ 时，已确定设备与平台建立链接并可进行数据交互业务。
```c
[TX]AT+QIOTSTATE?

[RX]AT+QIOTSTATE?

+QIOTSTATE: 8

OK
```
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

