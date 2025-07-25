# 数据业务交互

<span style='color:#999AAA'>提示：物模型数据业务的交互需要在创建产品时选择 __物模型__ 协议。 </span>

根据智能香薰机实际项目需求拟定物模型功能，预添加物模型如下表所示。

|功能ID| 功能类型 |   功能名称   | 数据格式 | 读写类型 |                             单位                              |
|:------:| :------: | :----------: | :------: | :------: | :-----------------------------------------------------------: |
|1|   属性   | 精油当前容量 |  FLOAT   |   只读   |                              ML                               |
|2|   属性   | 定时上报频率 |   INT    | 可读可写 |                              秒                               |
|3|   属性   |   开关状态   |   BOOL   |   只读   |                 true：开启；<br>false：关闭；                 |
|4|   事件   | 精油不足告警 |   BOOL   |    --    |              true：告警； <br> false：告警恢复；              |
|5|   属性   | 香薰机运行模式 |   ENUM   |    读写   |            1：工作模式一；<br> 2：工作模式二；<br>3：工作模式三；    |
|6|   服务   | 设置工作模式 |   ENUM   |    --    | 输出参数：ID 5 |


## **物模型数据业务交互**

 物模型是开发者中心 针对物理实体设备在开发者中心建立的数据模型，主要用于描述产品的功能，从而方便数据的解析。可以在设备成功接入开发者中心后，通过 __AT+QIOTMODELTD__ 与 __AT+QIOTMODELRD__ 指令来实现与开发者中心的数据交互。

<span style='color:#999AAA'>提示：详情请参考[数据交互相关命令](/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-04.md)。</span>


## __一、物模型数据上行__

<span style="color:#FF0000">开发建议：上报频率不宜过快，建议采用灵活上报的形式： <br>
若是控制类的数据（如开关、工作模式），则可采用变化上报的方式。例如平台或者APP下发控制或者通过其他方式改状态值，设备再进行上报到平台端。 <br>
若是实时变化类的数据（如电流、温度值），则可采用定时上报。例如每隔5分钟设备定时上报一次到平台端。</span>

__1、响应应答数据__ 

* #### __开发者中心读取操作__

	在开发者中心 __设备信息__ 详情页的 __设备调试__ 中，点击 __批量读取__ 按钮可一键批量读取物模型属性数值。
	
	<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-12.png">![img](/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-12.png)</a>
		


* #### __设备侧响应操作__

	<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-13.png">![img](/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-13.png)</a>

	__①__ 选择需要发送的请求包 ID。<br>
	__②__ 点击 __发送应答数据__ 按钮即可向平台响应物模型数据。

<br>

* ####   __事件回调响应解析__

  * __+QIOTEVT: 5,10211,7,1,2,3,5__<br>
	__5__ ：收到下行业务事件；<br>
	__10211__ ：收到平台读取物模型属性事件Code；<br>
	__7__ ：请求包 ID，该参数仅在模块接收物模型数据响应时有效；<br>
	__1,2,3,5__ ：需要读取物模型属性的ID号，分别是1、2、3、5；

  <br>


__2、物模型属性数据主动发送__

设备端主动发送 __精油剩余容量__ 、__频率开关__ 及 __电源开关状态__ 的物模型属性数据到平台。

* __设备侧发送操作__

	<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-14.png">![img](/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-14.png)</a>
	
	__①、__ 选择需要发送的物模型。	<br>
	__②、__ 点击 __发送物模型数据__ 按钮即可向平台发送物模型数据。
	
	<br>


*  __开发者中心效果__

	终端设备发送物模型数据完成后，在开发者中心点击 __设备信息__ 详情页中的 __设备调试__ 可查看与终端设备数据的 __实时记录__ 与实时上传 __JSON__ 格式的物模型数据。此时开发者中心已经接收到终端设备上报的精油当前容量：__189.5__ 、定时上报频率：__30__、开关状态：__false__。如下图所示。
	
	<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-15.png">![img](/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-15.png)</a>


__3、物模型告警事件发送__

向平台发送 __精油不足告警事件__，事件ID为：__4__，输出参数ID为：__1__ 

* __设备侧发送操作__

	<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-16.png">![img](/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-16.png)</a>

	__①、__ 选择需要发送的物模型事件。	<br>
	__②、__ 点击 __发送物模型数据__ 按钮即可向平台发送物模型事件。
	<br>

*  __开发者中心效果__

	在开发者中心 __设备详情__ 详情页的 __事件日志__ 中可查看事件数据记录。
	
	<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-17.png">![img](/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-17.png)</a>

## __二、物模型数据下行__

__开发者中心下发服务__

打开物模型功能定义的 __设备调试__ > __服务调用__，模拟远程下发控制命令场景，在设备调试中，选择 __服务调用__ > __设置工作模式__ ，参数设置为：__模式二__ ，最后单击 __发送指令__ 。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-18.png">![img](/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-18.png)</a>

* __非缓存模式__ 

	在 __非缓存模式__ 中，当终端设备接收到平台下发的数据，直接向 __MCU__ 打印数据，例如，平台下发服务后。串口工具显示的结果如下所示。

	<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-19.png">![img](/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-19.png)</a>

	__交互数据解析__	

	* __+QIOTEVT: 5,10210,13__ ：终端设备接收到物模型数据后，向 MCU 下发的事件通知。<br>
		__5__ ：事件类型，表示着接收到下行数据；<br>
		__10210__ ：事件Code，代表收到物模型下发数据；<br>
		__13__ ：接收到下发数据的长度；<br>

	* __{"6":{"5":2}}__ ：接收到平台发送的物模型服务Json格式数据。

	<br>

* __缓存模式__

	当模组接收到物模型数据时，模组会主动向 __MCU__ 打印该事件： __+QIOTEVT: 5,10210__ ，该事件表示设备端接收到平台下发的物模型数据，如果想查看数据内容则需要 __MCU__ 主动发送 __AT+QIOTMODELRD=\<req_length\>__ 指令查看具体数据。

	点击 __读取物模型数据__ 按钮即可读取缓存的物模型数据。如下图所示。
	<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-20.png">![img](/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-20.png)</a>

	__交互数据解析__

	* __+QIOTEVT: 5,10210__  ：终端设备接收到物模型数据后，向 MCU 下发的事件通知。<br>
		__5__ ：事件类型，表示着接收到下行数据；<br>
		__10210__ ：事件Code，代表收到物模型下发数据；<br>

	* __+QIOTMODELRD: 13,0,0__ ：读取物模型数据响应。<br>
		__13__ ：返回的数据长度；<br>
		__0__ ：当前数据包剩余数据长度；<br>
		__0__ ：剩余数据包个数；<br>

	* __{"6":{"5":2}}__ ：接收到平台发送的物模型服务Json格式数据。


<br>

