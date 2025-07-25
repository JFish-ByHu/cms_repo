# 配置寄存器码
DTU-Modbus配置工具是一款能帮助您快速通过Modbus协议对从机设备进行功能定义等操作，在工具内配置产品信息以及功能定义操作后，只需将配置文件烧写进DTU模组上与导入开发者中心即可完成从机设备连接上IOT平台的操作。

__主页总览如下图所示__

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/DTU_Modbus/Example-01.png">![img](/zh/deviceDevelop/develop/DTU_Modbus/Example-01.png)</a>

### __一、配置产品信息__

点击左侧配置栏 __添加产品__ 按钮。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/DTU_Modbus/Example-02.png">![img](/zh/deviceDevelop/develop/DTU_Modbus/Example-02.png)</a>

添加产品信息弹窗如下图所示。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/DTU_Modbus/Example-03.png">![img](/zh/deviceDevelop/develop/DTU_Modbus/Example-03.png)</a>

* __产品名称__：DTU产品所具有的产品命名。
* __ProductKey__：在开发者中心创建产品生成的 ProductKey。
* __ProductSecret__：在开发者中心创建产品生成的 ProductSecret。
* __上报方式__：分别为变化上报与全部上报。
  * __全部上报__：设备每次轮询到的数据都会直接上报到开发者中心。
  * __变化上报__：设备每次轮询到的数据与上次数据进行比较，发生变化才上报到开发者中心。
* __设备类型__：分为直连版与网关版。
  * __直连版本__：从机设备和网关共用产品信息，以一个整体设备在平台展示。
  * __网关版本__：从机设备拥有独立的产品信息和设备信息，在平台单独展示。

<span style="color:#999AAA">提示：产品信息仅可添加一条，需要添加新的请通过修改或删除旧的产品信息。</span>

### __二、配置串口信息__

点击左侧配置栏 __添加串口__ 按钮。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/DTU_Modbus/Example-04.png">![img](/zh/deviceDevelop/develop/DTU_Modbus/Example-04.png)</a>

添加串口配置弹窗如下图所示。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/DTU_Modbus/Example-05.png">![img](/zh/deviceDevelop/develop/DTU_Modbus/Example-05.png)</a>


* __端口号__：实际DTU接入从机设备的端口号。
* __波特率__：表示每秒钟传送的字节的个数，常用有9600, 115200等，需与从机设备相匹配。
* __数据位__：衡量通信中有效数据的参数，默认为8个，需与从机设备相匹配。
* __停止位__：可设置为1位、1.5位或2位，标志着传输一个字符的结束，需与从机设备相匹配。
* __校验位__：分为"None"（无校验）、"Even"（偶校验）、"Odd"（奇校验）、"Mark"（Mark校验）和"Space"（Space校验），默认为"None"，需与从机设备相匹配。
* __轮询周期(s)__：DTU设备向从机设备轮询发送Modbus协议周期。例如每60秒向从机设备读取一次温湿度值。
* __命令间隔(ms)__：因可能存在黏包情况，需设置DTU向从机设备发送每条Modbus协议的最小时间间隔。
* __重发次数__：当DTU设备发送Modbus协议问询数据帧时，子设备（传感器）端未在命令间隔时间内响应，则DTU会再次重新发送，为 0 时则不重新发送。


### __三、添加设备信息__

<span style="color:#999AAA">提示：当选择设备类型为“网关版”时，需要为每一款Modbus设备填写对应的产品信息。</span>

__1__ 、点击 __添加设备(+)__ 按钮添加从机设备。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/DTU_Modbus/Example-06.png">![img](/zh/deviceDevelop/develop/DTU_Modbus/Example-06.png)</a>


__2、添加从机设备弹窗详情__

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/DTU_Modbus/Example-07.png">![img](/zh/deviceDevelop/develop/DTU_Modbus/Example-07.png)</a>

__i.__ 在弹窗页面中 __设备名称__ 填写从机设备的命名，例如填写 __温湿度传感器__ 。

__ii.__ 在对应串口端口号的列表下输入该设备的Modbus从机地址，例如温湿度传感器放置于串口1，Modbus地址为1，则输入1，若有多个设备需要设置为不同的Modbus从机地址，则添加多个从机地址即可。


### __四、添加功能寄存器__


__1、添加寄存器地址__

选择页签中从机设备并点击 __添加寄存器地址__ 按钮。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/DTU_Modbus/Example-08.png">![img](/zh/deviceDevelop/develop/DTU_Modbus/Example-08.png)</a>


在弹窗页面中分别输入 __起始地址__、__数量__ 参数。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/DTU_Modbus/Example-09.png">![img](/zh/deviceDevelop/develop/DTU_Modbus/Example-09.png)</a>

<span style='color:#999AAA'>提示：可以通过勾选 __Hex__ 勾选框，切换 __起始地址__ 输入框是以十进制还是十六进制显示。</span>


__2、添加寄存器配置信息__


点击右侧的功能标签址中 __+__ 控件添加寄存器配置信息。


<a data-fancybox title="img" href="/zh/deviceDevelop/develop/DTU_Modbus/Example-10.png">![img](/zh/deviceDevelop/develop/DTU_Modbus/Example-10.png)</a>

### __五、配置功能信息__

假设一款 Modbus协议 温湿度传感器 接入到开发者中心，通过开发者中心可以远程查看传感器的温度、湿度，并可远程配置传感器开关与设置实时时间。以下以温湿度传感器为例演示如何在配置工具桌面添加功能信息。

需添加的功能如下表所示。

| 类型   | 功能名称   | 读写权限 | 数据类型         | 字节顺序 | 换算公式 | 字节长度 |
| ------ | ---------- | -------- | ---------------- | -------- | -------- | -------- |
| 布尔型 | 温湿度开关 | 可读可写 | --               | --       | --       | --       |
| 数值型 | 温度       | 只读     | 十六位有符号整型 | 大端模式 | x0.01+0  | --       |
| 数值型 | 湿度       | 只读     | 十六位无符号整型 | 大端模式 | x0.01+0  | --       |
| 字节流 | 时间戳     | 可读可写 | --               | --       | --       | 13       |
| 枚举   | 工作模式   | 可读可写 | 十六位无符号整型 | 大端模式 | --       | --       |


__1、添加布尔型__

添加温湿度开关，可远程控制温湿度开关状态。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/DTU_Modbus/Example-11.png">![img](/zh/deviceDevelop/develop/DTU_Modbus/Example-11.png)</a>

* __类型__：选择布尔型，例如温湿度开启：True
* __功能名称__：从机设备功能所具有的功能命名，例如开关。
* __读写类型__：分为只读、只写、可读可写。

**配置事件（可选）** <br>

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/DTU_Modbus/Example-12.png">![img](/zh/deviceDevelop/develop/DTU_Modbus/Example-12.png)</a>

* __事件名称__：事件所具有的命名。
* __事件类型__：包括故障、告警、信息等三个选项。
* __触发条件__：该事件的触发条件，当DTU设备查询到的Modbus从机设备数据与设定值一致时，触发相应事件。



__2、添加数值型__


添加温湿度功能，可在平台查看当前传感器温湿度值。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/DTU_Modbus/Example-13.png">![img](/zh/deviceDevelop/develop/DTU_Modbus/Example-13.png)</a>

* __类型__：选择数值型，例如温度值为：“25.63”度。
* __功能名称__：从机设备功能所具有的功能命名，例如温度。
* __读写类型__：分为只读、只写、可读可写。
* __数据类型__：该类型的变量所能存储的最大值和最小值，例如因温度值可能为负摄氏度且范围为-40~85，所以定义为16位有符号整型较为合适。
* __字节顺序__：数据在内存中的存放顺序。用32位整型举例：数值(ABCD)使用两个字节储存：高位字节是(AB)，低位字节是(CD)。

  * __大端模式__：高位字节在前，低位字节在后，即以(ABCD)形式储存。
  * __小端模式__：低位字节在前，高位字节在后，即以(DCBA)形式储存。
  * __大端模式字节交换__ ：大端模式并高低位字节间两两交换，即以(BADC)形式储存。

  * __小端模式字节交换__ ：小端模式并高低位字节间两两交换，即以(CDAB)形式储存。
* __换算公式__：对该数值进行换算，例如从传感器读取到的数值为：0x0A 0x03 (十进制为2563)，2563 *0.01+0=25.63，则25.63则为实际的温度值。

**配置事件（可选）** <br>

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/DTU_Modbus/Example-14.png">![img](/zh/deviceDevelop/develop/DTU_Modbus/Example-14.png)</a>

* __事件名称__：事件所具有的命名。
* __事件类型__：包括故障、告警、信息等三个选项。
* __触发条件__：该事件的触发条件，后一个输入框内的值需要大于前一个输入框内的值。当DTU设备查询到的Modbus子设备数据处于设定范围内时，触发相应事件。

__3、添加字节流型__

添加时间戳设置功能，可在平台读取或设置温湿度传感器时间戳。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/DTU_Modbus/Example-15.png">![img](/zh/deviceDevelop/develop/DTU_Modbus/Example-15.png)</a>


* __类型__：选择字节流型，例如字节流值为：“ABCabc123#&*”。
* __功能名称__：从机设备功能所具有的功能命名，例如时间戳。
* __读写类型__：分为只读、只写、可读可写。
* __字节长度__：根据字节流数据的最大字节长度设定。

**配置事件（可选）** <br>

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/DTU_Modbus/Example-24.png">![img](/zh/deviceDevelop/develop/DTU_Modbus/Example-24.png)</a>

* __事件名称__：事件所具有的命名。
* __事件类型__：包括故障、告警、信息等三个选项。
* __触发条件__：该事件的触发条件，触发的条件为该输入内容。

__4、添加枚举型__

添加设置模式功能，可在平台读取或设置温湿度传感器当前模式。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/DTU_Modbus/Example-25.png">![img](/zh/deviceDevelop/develop/DTU_Modbus/Example-25.png)</a>


* __类型__：选择枚举型。
* __功能名称__：从机设备功能所具有的功能命名，例如工作模式。
* __读写类型__：分为只读、只写、可读可写。
* __数据类型__：选择与寄存器相符合的数据类型。
* __字节顺序__：数据在内存中的存放顺序。用32位整型举例：数值(ABCD)使用两个字节储存：高位字节是(AB)，低位字节是(CD)。
  * __大端模式__：高位字节在前，低位字节在后，即以(ABCD)形式储存。
  * __小端模式__：低位字节在前，高位字节在后，即以(DCBA)形式储存。
  * __大端模式字节交换__ ：大端模式并高低位字节间两两交换，即以(BADC)形式储存。
  * __小端模式字节交换__ ：小端模式并高低位字节间两两交换，即以(CDAB)形式储存。


**配置事件（可选）** <br>

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/DTU_Modbus/Example-26.png">![img](/zh/deviceDevelop/develop/DTU_Modbus/Example-26.png)</a>

* __事件名称__：事件所具有的命名。
* __事件类型__：包括故障、告警、信息等三个选项。
* __触发条件__：该事件的触发条件，触发的条件为该选择的枚举值（可多选）。




### __六、生成配置文件__

在工作栏中点击 __配置文件__ >__生成配置文件__ ， 在弹窗页面中选择需要保存的文件路径。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/DTU_Modbus/Example-19.png">![img](/zh/deviceDevelop/develop/DTU_Modbus/Example-19.png)</a>

若成功生成配置文件后则会在选择的文件目录生成以下两种格式的文件。

* xxxxxx_xxxxxxxxxx_cloud.json：物模型定义文件，用于在开发者中心导入
* xxxxxx_xxxxxxxxxx_local.bin：Modbus定义文件，用于在设备烧写


### __七、导入配置文件至开发者中心__

1、登录开发者中心，打开对应的产品页面，并切换到 __功能定义__ 页面，点击 __草稿模式__ 进入编辑模式。

2、点击 __快速导入__ >__导入物模型__ >__点击上传__

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/DTU_Modbus/Example-16.png">![img](/zh/deviceDevelop/develop/DTU_Modbus/Example-16.png)</a>


3、 在弹窗页面中选择生成的xxxxxx_xxxxxxxxxx_cloud.json文件，最后点击 __确认按钮__ 即可导入功能配置文件。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/DTU_Modbus/Example-17.png">![img](/zh/deviceDevelop/develop/DTU_Modbus/Example-17.png)</a>

4、点击 __发布应用__，勾选弹窗中的提示语并点击 **确认提交**，退出编辑模式。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/DTU_Modbus/Example-18.png">![img](/zh/deviceDevelop/develop/DTU_Modbus/Example-18.png)</a>