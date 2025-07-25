# 网关子设备快速连接 IOT 平台示例

## __场景描述__

网关的能力是转换不同设备间的通讯协议，可以让不具有联网能力的子设备通过网关连接上IOT平台。
如果我们想要达到该目的，需要将子设备添加到网关下，建立子设备与网关的联系。本章节指导用户通过AT指令使得子设备通过网关连接上开发者中心。



## __涉及指令__

|     指令名称      |           功能描述           |
| :---------------: | :--------------------------: |
|  AT+QIOTSUBCONN   |       连接子设备至网关       |
| AT+QIOTSUBDISCONN | 断开/注销子设备与网关的连接  |
|  AT+QIOTSUBSEND   |   发送子设备透传数据至平台   |
|   AT+QIOTSUBRD    | 子设备读取平台下发的透传数据 |
|  AT+QIOTSUBTSLTD  |  发送子设备物模型数据至平台  |
|  AT+QIOTSUBTSLRD  |   读取平台下发的物模型数据   |
|   AT+QIOTSUBHTB   |          发送心跳包          |

<span style='color:#999AAA'>提示：详情请参考[网关子设备AT指令](/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-10)。</span>

	
## __操作步骤__
### __一、登录开发者中心__
登录<a href="https://iot.quectelcn.com" target="_blank">开发者中心</a>，未注册可单击<a href="https://iot.quectelcn.com/registerType" target="_blank">立即注册</a>完成注册。

### __二、创建产品__
#### __1、创建网关产品__
创建网关产品与创建蜂窝产品类似，在设备类型选项选择 __网关设备__ 与相匹配的选项即可。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/subDevice/Example-01.png"><img src="/zh/deviceDevelop/develop/subDevice/Example-01.png"></a>


#### __2、创建网关子设备产品__

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/subDevice/Example-02.png"><img src="/zh/deviceDevelop/develop/subDevice/Example-02.png"></a>


* __设备类型__：单品设备指的是可以直接接入网络；网关设备是可帮助子设备连接平台的设备；网关子设备是依赖网关连接上网络的设备。
* __限制网关产品__：
    * __不启用__：表示子设备可通过任意网关设备连接开发者中心。
    * __启用__：表示子设备仅能通过指定的网关设备连接开发者中心。
* __接入网关方式__：平台对网关设备授权。 
	*  __仅代理上网__：移动端用户需绑定子设备后方拥有控制权限，适用于把网关当成上网与数据转发通道。
      	* __允许动态切换网关__：表示子设备通过网关连接到开发者中心后，还允许切换到其它网关连接开发者中心。
      	* __不允许动态切换网关__：表示子设备通过网关连接到开发者中心后，无法切换到其它网关连接开发者中心。
	*  __产品整合__：移动端用户绑定网关即拥有子设备控制权限，适用于子设备整合到网关设备。

### __三、网关设备配置__
#### __1、配置产品信息（初次连接需配置）__

若首次连接开发者中心需先通过 __AT+QIOTCFG="productinfo"[,\<pk\>,\<ps\>]__ 指令配置产品信息。将产品密钥烧录进设备，通过设备引导/认证，通过引导/认证的设备会自动添加至平台所在的产品中。 

 ```c
[TX]AT+QIOTCFG="productinfo","pxxxxt","cDVTxxxxxxxxWGVB"

[RX]AT+QIOTCFG="productinfo","pxxxxt","cDVTxxxxxxxxWGVB"

[RX]OK
```


#### __2、连接开发者中心__
MCU可通过 __AT+QIOTREG=\<reg_mode\>__ 指令配置平台连接模式，发送指令后，当模组响应如以下返回值，则代表设备已成功与开发者中心连接。 

  ```c
[TX]AT+QIOTREG=1

[RX]AT+QIOTREG=1

[RX]OK

[RX]+QIOTEVT: 2,10200

[RX]+QIOTEVT: 3,10200
```


### __四、子设备连接网关__
网关的能力是转换不同设备间的通讯协议，可以让不具有联网能力的子设备通过网关连接上平台。
如果我们想要达到该目的，需要将子设备添加到网关下，建立子设备与网关的联系。网关子设备可通过 __AT+QIOTSUBCONN__ 指令连接网关设备。

```c
[TX]AT+QIOTSUBCONN=0,60,"pxxxxm","RGtwxxxxxxxxxxSUls","123123123"

[RX]OK
```
__连接成功事件回调反馈__

发送连接网关指令后，当模组响应如以下事件回调，则代表设备已成功与网关设备连接成功。 
* 设备认证成功事件回调

	```c
	[RX]+QIOTSUBEVT: "pxxxxm","123123123",1,10200,"2c8e8a105e5c4c0fa3787deb7e96ede7"
	```
* 子设备登录成功事件回调
	```c
	[RX]+QIOTSUBEVT: "pxxxxm","123123123",2,10200
	```
 
 
### __五、子设备发送心跳包__
为了维护子设备与网关之间的链路有效性，子设备和网关之间会维护一个心跳信息。心跳的启动会依赖MCU主动发送心跳包的指令，所以需要根据子设备连接网关时所配置的 __子设备保活时间__ 来定时发送 __AT+QIOTSUBHTB__ 心跳包保活指令。

```c
[TX]AT+QIOTSUBHTB="pxxxxm","123123123"

[RX]OK
```

### __六、子设备物模型数据交互__
需要实现一个智能设备的远程控制，最基本的能力就是设备的状态上报以及接收来自平台的命令并执行。因此数据传输部分是网关的核心能力。以下将以智能三色灯子设备作为物模型交互示例。

#### __物模型数据上行__
__发送JSON格式物模型数据__

发送物模型数据如下表所示。

|  ID   | 类型 | 值   |
| :---: | :--- | :--- |
|   1   | Bool | true |
|   2   | Int  | 30   |

则执行 __AT+QIOTSUBTSLTD="pxxxxm","123123123",17__，待响应 __>__ 后，MCU发送物模型数据。

```c
[TX]AT+QIOTSUBTSLTD="pxxxxm","123123123",17
[RX]> 
[TX]{"1":true,"2":30}
[RX]OK

[RX]+QIOTSUBEVT: "pxxxxm","123123123",4,10210
```


#### __物模型数据下行__
* ##### __非缓存模式（若不配置则出厂默认关闭缓存模式。）__
	__1、开发者中心下发物模型服务__
	
	 在开发者中心 __设备调试__ 页面，第一步点击 __属性调试__，第二步选择要下发的物模型属性，第三步点击左下角的 __发送指令__ 即可下发物模型属性到网关子设备。
	
    <a data-fancybox title="img" href="/zh/deviceDevelop/develop/subDevice/Example-03.png"><img src="/zh/deviceDevelop/develop/subDevice/Example-03.png"></a>
    
	
	__2、模组收到下发指令并向MCU打印回调事件与数据__
	
	模组收到物模型数据后，会主动向MCU打印回调事件 __+QIOTSUBEVT: "p1126m","123123123",5,10210,10__ 与下发的物模型数据 __{"1":true}__。
	
	```c
	[RX]+QIOTSUBEVT: "pxxxxm","123123123",5,10210,10
	[RX]{"1":true}
	```
* ##### __缓存模式__
	__1、打开下行数据缓存模式__
	MCU可通过 __AT+QIOTCFG="buffer"[,\<buffer_mode\>]__ 指令配置下行数据缓存模式。

	```c
	[TX]AT+QIOTCFG="buffer",1
	
	[RX]AT+QIOTCFG="buffer",1
	
	[RX]OK
	```
	
	__2、开发者中心下发物模型服务__
	
	 在开发者中心 __设备调试__ 页面，第一步点击 __属性调试__，第二步选择要下发的物模型属性，第三步点击左下角的 __发送指令__ 即可下发物模型属性到网关子设备。
	
    <a data-fancybox title="img" href="/zh/deviceDevelop/develop/subDevice/Example-03.png"><img src="/zh/deviceDevelop/develop/subDevice/Example-03.png"></a>

	
	__3、模组收到服务下发指令并向MCU打印回调事件__
	
	* 回调事件解析：__+QIOTSUBEVT: "p1126m","123123123",5,10210__
	
		__p1126m__ ：网关子设备在平台创建产品时生成的ProductKey。
		
		__123123123__ ：网关子设备DeviceKey，唯一标识。
		
		__5__ ：收到下行业务事件。
		
		__10210__ ：收到平台下发物模型属性事件Code。
		
	
	__4、MCU根据回调事件查询数据__
	
	经过 __AT+QIOTSUBTSLRD__ 指令查询的物模型数据为 __{"1":true}__ 。
	```c
	[TX]AT+QIOTSUBTSLRD="pxxxxm","123123123",512
	
	[RX]+QIOTSUBTSLRD: "pxxxxm","123123123",10,0,0
	[RX]{"1":true}
	
	
	[RX]OK
	```

