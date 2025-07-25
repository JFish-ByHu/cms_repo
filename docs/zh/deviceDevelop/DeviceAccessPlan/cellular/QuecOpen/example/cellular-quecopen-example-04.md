
# 网关子设备快速连接 IOT 平台示例

## __场景描述__

网关的能力是转换不同设备间的通讯协议，可以让不具有联网能力的子设备通过网关连接上平台。如果我们想要达到该目的，首先需连接网关到平台，再连接子设备至网关，由此实现子设备连接到平台。本章节指导用户通过 QuecOpen 接入方案使得子设备通过网关连接上开发者中心。



## __涉及指令__

|              函数              | 说明                                 |
| :----------------------------: | :----------------------------------- |
| Ql_iotConfigSetSubDevEventCB() | 注册子设备与网关交互事件回调处理函数 |
|       Ql_iotSubDevConn()       | 连接子设备至网关或认证子设备         |
|     Ql_iotSubDevDisconn()      | 断开子设备与网关之间的连接           |
|  Ql_iotSubDevPassTransSend()   | 发送子设备透传数据至平台             |
| Ql_iotSubDevPassTransSend_ex() | 发送子设备透传数据至平台             |
|    Ql_iotSubDevTslReport()     | 发送子设备物模型数据至平台           |
|   Ql_iotSubDevTslReport_ex()   | 发送子设备物模型数据至平台           |
|      Ql_iotSubDevTslAck()      | 回复平台向子设备请求的物模型数据     |
|      Ql_iotSubDevDeauth()      | 注销子设备                           |
|       Ql_iotSubDevHTB()        | 刷新子设备与网关最后进行交互的时间   |


<span style='color:#999AAA'>提示：详情请参考[网关子设备 API接口概览](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-11)。</span>

	
## __操作步骤__
### __一、登录开发者中心__
登录<a href="https://iot.quectelcn.com" target="_blank">开发者中心</a>，未注册可单击<a href="https://iot.quectelcn.com/registerType" target="_blank">立即注册</a>完成注册。

### __二、创建产品__
#### __1、创建网关产品__
创建网关产品与创建蜂窝产品类似，在设备类型选项选择 __网关设备__ 与相匹配的选项即可。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/subDevice/Example-01.png">![img](/zh/deviceDevelop/develop/subDevice/Example-01.png)</a>


#### __2、创建网关子设备产品__

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/subDevice/Example-02.png">![img](/zh/deviceDevelop/develop/subDevice/Example-02.png)</a>


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

__1、初始化__

开发前您还需要完成工程的QuecOpen方案的初始化，需要在使用联网服务前调用。初始化指的是在模组上电后，完成模组基本的配置，达到可以配网连接平台。
```c
/* 初始化QuecThing SDK */
Ql_iotInit();
```
__2、网关事件回调函数注册__

事件回调处理接口简单的说就是为事件源(组件)添加一个监听任务，当网关设备触发了某件事件时，交给监听器去处理，开发者只需要在事件回调函数内相应事件下作具体处理即可。

```c
/* 注册QuecThing事件回调函数 */
Ql_iotConfigSetEventCB(Ql_iotEventCB);
```

__3、配置产品信息（初次连接需配置）__

QuecThing SDK 提供读写设备信息的接口及参考实现，可根据具体的实际的项目需求进行适配。网关设备发送引导认证操作时，开发者中心对其携带的ProductKey、ProductSecret进行认证，若认证通过则建立连接并下发该设备接入所需信息。

 ```c
/* 配置产品信息*/
Ql_iotConfigSetProductinfo("pxxxxS", "VnhyxxxxxxxxSTFh");
```


__4、连接开发者中心__

模组启动连接开发者中心，在开发者中心和设备间建立安全，稳定的通信并实现设备管理，监测，控制等操作。

```c
/* 启动平台连接 */
Ql_iotConfigSetConnmode(1);	
```
<span style="color:#999AAA">提示：网关成功连接开发者中心后，开始转发子设备消息到开发者中心，在此之前所有收到子设备发往开发者中心消息皆丢弃，不做保存。</span>


### __四、子设备操作步骤__

网关的能力是转换不同设备间的通讯协议，可以让不具有联网能力的子设备通过网关连接上平台。如果我们想要达到该目的，需要将子设备添加到网关下，建立子设备与网关的联系。


__1、子设备事件回调注册__

事件回调处理接口简单的说就是为事件源(组件)添加一个监听任务，当子设备触发了某件事件时，交给监听器去处理，开发者只需要在事件回调函数内相应事件下作具体处理即可。

```c
/* 注册事件回调函数 */
Ql_iotConfigSetSubDevEventCB(Ql_iotSubEventCB);
```


__2、子设备认证__

首次连接平台时，须进行子设备认证。可通过 Ql_iotSubDevConn()进行设备认证。MCU 接收到认证成功事件上报后，子设备将自动连接到平台。已通过认证的子设备，在未连接至平台时，仍可通过 Ql_iotSubDevDeauth() 注销子设备。

```c
/* 子设备登录 */
Ql_iotSubDevConn("pxxxxm", VnhyxxxxxxxxSTFh, "123xxxx89", NULL, 0, 30);
```

<span style="color:#999AAA">提示：该函数用于连接子设备至网关或认证子设备。连接/认证结果通过子设备与网关设备的交互事件进行通知。设置 subDs为 NULL 时，表示认证子设备；指定 subDs 时，表示连接子设备至网关。</span>


### __五、子设备发送心跳包__
为了维护子设备与网关之间的链路有效性，子设备和网关之间会维护一个心跳信息。心跳的启动会依赖子设备主动发送心跳包的指令，所以需要根据子设备连接网关时所配置的 __子设备保活时间__ 来定时发送心跳包保活指令。

```c
/* 子设备通过网关向开发者中心发送心跳包 */
Ql_iotSubDevHTB("pxxxxm","123123123");
```

### __六、子设备物模型数据交互__
需要实现一个智能设备的远程控制，最基本的能力就是设备的状态上报以及接收来自平台的命令并执行。因此数据传输部分是网关的核心能力。以下将以智能三色灯子设备作为物模型交互示例。

#### __物模型数据上行__

子设备可根据业务场景需求，对数据属性采取一定的策略进行检测处理，例如子设备可通过串口读取智能三色灯传感器开关等数据后，子设备则将读取到的数据通过网关上传到开发者中心。


发送物模型数据如下表所示。
|  ID   | 类型 | 值   |
| :---: | :--- | :--- |
|   1   | Bool | true |
|   2   | Int  | 30   |

示例代码如下所示。
```c
void *ttlvHead = NULL;
Ql_iotTtlvIdAddBool(&ttlvHead, 1, TRUE);
Ql_iotTtlvIdAddInt(&ttlvHead, 2, 30);
Ql_iotSubDevTslReport_ex("pxxxxm","123xxxx89",ttlvHead);
Ql_iotTtlvFree(&ttlvHead);
```
<span style="color:#999AAA">注意：在添加物模型节点且调用完后，开发者请调用 Ql_iotTtlvFree() 函数，该函数会释放指针指向的一个内存块，从而避免内存泄漏等问题。</span>

#### __物模型数据下行__

__1、开发者中心下发物模型服务__

在开发者中心 __设备调试__ 页面，第一步点击 __属性调试__，第二步选择要下发的物模型属性，第三步点击左下角的 __发送指令__ 即可下发物模型属性到子设备。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/subDevice/Example-03.png">![img](/zh/deviceDevelop/develop/subDevice/Example-03.png)</a>


__2、子设备收到查询指令解析处理__

当模组接收到物模型请求数据后，则会自动进入 __Ql_iotSubEventCB__ 子设备事件处理回调函数，您可根据相对应的事件进行数据响应处理。

* 事件回调处理示例代码如下所示：

	```c
	void Ql_iotSubEventCB(quint32_t event, qint32_t errcode, const char *subPk, const char *subDk, const void *value, quint32_t valLen)
	{
		switch (event)
		{
		/* 接收数据操作 */
		case QIOT_ATEVENT_TYPE_RECV:
			printf("data recv event,code:%d\r\n",errcode);
			/* 收到物模型下发数据 */
			if(10210 == errcode)
			{
				/* 物模型处理函数 */
				Ql_iotTtlvHandle(value);
			}

		default:
			break;
		}
	}
	```

