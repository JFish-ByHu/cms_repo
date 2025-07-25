# 用户说明

## **程序介绍**
### **引言**
MCU仿真工具是一款模拟主控MCU与移远模组间通讯的仿真助手，拥有连接开发者中心平台、AT指令交互、物模型数据交互、透传数据交互、OTA交互以及网关子设备数据交互等强大功能。调试日志功能和日志分析功能能有效地提高用户对模组或APP的功能认知，方便了用户对模组或APP能力的验证与调试从而提高了对整体方案的开发验收效率。
### **整体框架简介**
当前工具名称为移远MCU仿真工具，版本号为3.0.1。
* **工具菜单栏 ：** 菜单栏目前包含了工具、升级、语言、帮助、日志五大功能，提供协议解析转换、便捷操作与工具的日志导出功能。
* **功能菜单栏 ：** 功能栏目前提供调试、OTA、模组信息、定位信息、局域网、网关子设备六项功能。
* **日志窗口 ：**  
日志输出界面为工具连接上SDK或模组后，输出的日志并显示在界面上，以便用户查看相关的信息。   
日志分析界面是对日志输出界面中的AT指令进行解析，以帮助用户快速理解指令的格式与意义。  
日志输出设置目前存在16进制显示、时间戳、关闭窗口显示和清空窗口四个功能。16进制显示主要作用为输出日志中16进制格式的数据；
* **设备调试窗口 ：** 设备调试窗口主要为数据业务交互指令与设备配置指令功能，在设备调试过程中提供便捷的AT指令。
* **功能窗口 ：** 功能窗口主要展示功能菜单栏的各项功能，实现一个可视化的界面操作。
* **状态栏 ：** 状态栏可显示用户部分操作及操作结果的信息显示，主要为不影响程序整体运行的操作信息，若为重要信息，则会通过弹窗提示。

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-001.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-001.png"></a>


## **工具菜单栏介绍**
* **工具 ：**
工具菜单栏包含TTLV与JSON转换工具和多字符串工具，TTLV与JSON转换工具可以让使用者快速解析或生成ttlv数据；多字符串工具可以储存一些AT指令，并在下一次调试中可快速输入。
* **升级 ：**
主要用于工具升级的获取和工具信息的获取，可以通过 __"更新版本"__ 获取最新版本的MCU仿真工具。
* **语言 ：**
主要用于工具语言的切换，目前工具仅支持中文和英文显示。
* **帮助 ：**
点击 __"帮助文档"__ 后会自动跳转到MCU仿真工具说明书。
* **日志 ：**
分为使用日志和异常日志导出，若工具发现使用异常，可导出对应的日志提供给开发者排查，提高问题定位效率。

<!-- <a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-02.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-02.png"></a> -->

## **日志窗口**
在使用过程中如需查看更多，可在方框底部往下拉控件则可拉伸显示。
* **16进制显示 ：**
打开后若接收到16进制数据可同步打印到日志输出窗口。
* **时间戳 ：**
打开显示后，串口收发日志中会添加时间戳显示。
* **关闭窗口显示 ：**
打开后若接收到调试数据，将不会打印到日志输出窗口
* **清空窗口 ：**
点击按钮后将清空当前日志显示窗口的日志。

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-003.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-003.png"></a>


### **日志输出窗口**

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-004.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-004.png"></a>

* **\[TX] ：** 
串口工具发送的数据。  
* **\[RX] ：** 
串口工具接收到的数据。  
* **时间戳显示 ：** 
可通过 __"设备调试"__ 界面中的 __"时间戳显示"__ 进行打开或者关闭。
* **Hex ：** 
可将接收消息的16进制部分显示出来。  
* **关闭窗口显示 ：** 
可关闭窗口显示，如SOTA操作等无需关注时，可使用此功能使得之前的命令不被覆盖，目前窗口只显示最近1000行的记录。

### **日志解析窗口**
通过在日志显示窗口点击对应的日志，会解析该日志AT指令的数据，目前仅支持连接开发者中心平台相关的AT指令进行解析，其他AT指令不作处理。

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-005.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-005.png"></a>


## **设备调试窗口**
### **数据业务交互指令**
数据业务交互指令主要用于设备与平台的交互，上报数据到平台或接收平台下发指令的数据，进行数据的修改与展示。

#### **物模型**
**物模型列表 ：** 
物模型列表包含属性、服务、事件3个大类，根据用户选中的产品信息生成对应的物模型列表，若选中的数据格式为透传或导入的JSON文件异常，物模型列表显示为空。
* **单选 ：** 直接通过光标选中单个物模型ID；
* **多选 ：** 按住键盘 __"CRTL"__ + 需要发送的多个物模型ID；
* **全选 ：** 按住键盘 __"CRTL"__ + __"A"__。

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-013.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-013.png"></a>


**定时上报 ：** 开启该选项后，工具将按照设定的上报频率，和上方物模型ID列表中选中的ID进行定时上报。

* **定时上报频率 ：** 单位：毫秒；最小上报间隔：1毫秒；最大上报间隔：600秒。

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-014.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-014.png"></a>

**发送数据 ：** 物模型列表中数据，点击 __"发送数据"__ 按钮进行物模型数据发送，支持单选/多选/全选。
* **模式0 ：** 发送一次；
* **模式1 ：** 发送多次，保证服务器至少收到一次。

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-015.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-015.png"></a>

**发送应答 ：** 通过选择上方物模型列表中数据进行应答数据发送，支持单选/多选/全选。
* **PkgID ：** 开发者中心平台读取物模型ID的最新PkgID，也可以手动修改输入；
* **自动应答 ：** 打开该选项后，开发者中心平台读取物模型ID后，会自动应答对应的物模型ID到开发者中心平台。

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-016.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-016.png"></a>

**读取数据 ：** 仅当产品配置信息中缓存模式选择为 __"开启缓存模式"__ 时有效，选择为 __"关闭缓存模式"__ 时，接收到开发者中心平台数据会自动更新到右侧物模型列表。
* **读取数据 ：** 根据设置的读取字节数进行物模型数据读取，并把读取到的数据更新到上方的物模型列表。
* **读取最大数据 ：** 读取最大字节数（10240）的物模型数据，并把读取到的数据更新到上方的物模型列表。
* **剩余字节数 ：** 当前数据组剩下的字节数。
* **剩余数据组数 ：** 剩下的缓存数据组数。

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-017.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-017.png"></a>

#### **透传**
**发送数据 ：** 鼠标移动到输入框，提示 __"输入长度不能超过4096"__。

* **HEX发送 ：** 该选项可以选择是上报字符串还是16进制字节流；
* **模式（Qos）：** 默认为0，更多可选择1、2、100、101、102；
* **发送方式 ：** 支持透传发送和直接发送，若选中HEX发送，仅支持透传发送。

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-018.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-018.png"></a>

**读取数据 ：** 仅当产品配置信息中缓存模式选择为 __"开启缓存模式"__ 时有效，选择为 __"关闭缓存模式"__ 时，接收到开发者中心平台数据会自动更新到透传数据显示窗口。
* **读取字节数 ：** 根据设置的读取字节数进行透传数据读取，并把读取到的数据更新到上方的透传数据显示窗口，最大支持读取10240个字节；
* **剩余字节数 ：** 当前数据组剩下的字节数；
* **剩余数据组数 ：** 剩下的缓存数据组数；
* **发送方式 ：** 支持读取数据与获取读取数据的最大值。

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-019.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-019.png"></a>

### **设备配置指令**
设备配置指令提供了常用的AT指令模板，通过输入或选择对应的配置信息，可快速生成并发送设备AT指令。

**服务器 ：** 连接服务器支持两种协议：MQTT协议和LwM2M协议。选中MQTT协议后，环境仅支持生产环境(mqtt)、生产环境(http)和自定义 ；选中LwM2M协议后，环境仅支持生产环境(coap)和自定义。

**缓存模式 ：** 默认关闭缓存模式，平台端下行透传数据模组会将数据主动打印到串口；若开启缓存模式，平台端下行透传数据模组不会将数据主动打印到串口，需要MCU自行发送AT命令进行打印。

**心跳时长 ：** 设备生命周期，单位：秒；范围：1~86400。

**contextId ：** 范围：1~99。

**物模型数据格式 ：** TTLV：一种按照协议规定处理后的16进制数据格式；JSON：基于 Javascript 的一个子集，是一种开放的，轻量级数据格式。

**加密模式 ：** 是否在MQTT或HTTP基础上增加TLS加密服务。

**设备DK&DS ：** 设备IMEI和设备密钥。 

**PSK ：** 预共享密钥，相当于密码，必须唯一；若不填写，则会根据DeviceKey自动生成。

**TxidMode ：** 设置开启后，当设备发送上行物模型数据给平台时，会收到平台返回的上行消息；默认为关闭，即不返回上行消息。

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-020.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-020.png"></a>


## **功能菜单栏**
### **调试功能界面简介**
点击左侧功能菜单栏的 __"调试"__ 按钮，切换到调试界面。

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-002.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-002.png"></a>

#### **串口配置**
选择对应的串口端口、波特率、数据位、停止位等参数。

**打开串口 ：** 串口被打开后，将无法修改串口配置，需要修改请先关闭串口。 

**关闭串口 ：** 若当前处于连接开发者中心的状态时，将会断开连接。

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-006.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-006.png"></a>

#### **TCP配置**
选择对应的远程IP和端口号以及本地的IP和端口号，工具限制远程IP的输入，仅可输入数字和 __"__.__"__，同时需要符合IP格式，可点击右侧的 __"x"__ 删除IP。

**打开TCP ：** TCP被打开后，将无法修改TCP连接配置，若TCP连接不成功，则会重新尝试连接3次。

**关闭TCP ：** 若当前处于连接开发者中心的状态时，将会断开连接。

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-007.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-007.png"></a>

#### **产品配置**
用于产品的配置与添加，通过点击 __"设置"__ 配置设备的产品信息；点击 __"获取"__ 可以查询到设备当前配置的产品信息；点击 __"管理"__ 可进入产品切换、添加与删除。

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-010.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-010.png"></a>

* **产品列表 ：** 添加后的产品信息会以表格形式展示，通过选中产品所在行，若选中的产品数据格式为物模型，可在调试界面左侧的数据业务交互指令中的物模型列表查看物模型数据。

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-011.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-011.png"></a>

* **添加产品**
通过点击 __"__+__"__ 按钮进入产品配置页面，输入符合格式的PK、PS，选择对应的数据格式，若选择物模型则需导入物模型文件，可通过手动导入或自动获取导入物模型文件，配置后点击 __"OK"__ 按钮即可完成产品配置，产品信息会在产品列表中展示。

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-012.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-012.png"></a>

* **删除产品 ：** 选中产品列表中的一行或多行产品，点击 __"__-__"__ 按钮，此时会弹出二次确认删除提示框，点击确认即可删除该产品信息。

* **搜索产品 ：** 在搜索输入框输入想要搜索的产品信息，点击 __"搜索"__ 按钮可快速搜索当前产品列表对应的产品。支持模糊搜索，若搜索不到对应产品即返回列表的第一行。

* **产品备注 ：** 双击需要添加备注的产品所在行的备注单元格后会弹出备注输入框，输入自定义备注信息后点击 __"确定"__ 即可。

#### **连接模式**
选择模组连接开发者中心平台功能的模式。
* **手动注册 ：** 手动发起连接IOT。
* **自动注册 ：** 联网后主动连接IOT。

#### **当前状态**
开发者中心当前的连接状态：
* 未初始化
* 已初始化
* 正在认证
* 认证成功
* 认证失败
* 正在注册
* 注册成功
* 等待订阅
* 注册失败
* 已订阅
* 数据可发送
* 订阅失败
* 正在注销
* 注销成功
* 注销失败

**启动连接 ：** 使用选中的产品配置信息配置进模组中并连接至开发者中心。 

**停止连接 ：** 断开设备与开发者中心的连接。

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-008.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-008.png"></a>

#### **AT指令发送**
用于发送AT指令，AT输入框存在历史记录，可通过输入部分通过提示框补全。

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-009.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-009.png"></a>


### **OTA功能界面介绍**
#### **MQTT**

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-021.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-021.png"></a>

**OTA交互 ：** 在接收到开发者中心平台下发的升级任务时用于MQTT-OTA确认。
* **OTA请求 ：** 点击OTA请求，可获取当前平台匹配的计划。
* **额外信息请求 ：** 开启后可在OTA请求时附带sha256的固件校验信息。
* **拒绝升级 ：** 拒绝当前下发的升级任务。
* **确认升级 ：** 接收当前下发的升级任务。
* **下载下一块数据 ：** 在MQTT-SOTA时，MQTT-SOTA固件过大被分包下载时，当前分包接收完成后命令模组开始下载下一包数据。
* **上报更新中状态 ：** 在MQTT-SOTA时，固件下载完成并校验成功，进行固件更新状态时上报开发者中心平台更新状态。

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-022.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-022.png"></a>

**SOTA分片数据读取：** 读取保存在模块中的固件数据，用于SOTA升级方式。
* **起始地址 ：** 读取的文件偏移地址。
* **读取长度 ：** 读取的文件长度。
* **存放路径 ：** 用于选择SOTA固件读取数据中的存放路径。
* **自动 ：** 该选项被打开后，只需要点击一次 __"读取数据"__ ，后续将自动完成下载流程并校验。

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-023.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-023.png"></a>

**OTA状态：** 当前MQTT-OTA任务状态与下载进度。

* **状态 ：** 当前MQTT-OTA状态。
* **当前块地址 ：** 模组当前下载的固件块起始地址。
* **当前块大小 ：** 模组当前下载的固件块大小。
* **文件大小 ：** 模组当前下载的文件大小。
* **MD5 ：** 模组当前下载的文件MD5。

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-024.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-024.png"></a>

#### **HTTP-OTA** 
OTA请求需要配置PK、PS、URL、电量和升级模式，点击OTA请求即可进行HTTP-OTA升级，目前升级模式。

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-025.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-025.png"></a>

#### **配置MCU版本号**
配置MCU版本号主要用于SOTA升级方式。

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-026.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-026.png"></a>

* **获取列表 ：** 获取模组当前保存的所有MCU编号及版本号，并更新到下方列表中。
* **获取版本号 ：** 需要通过光标选中下方的MCU编号，再点击 __"获取版本号"__，会获取到的版本号更新到下方的列表中。
* **设置版本号 ：** 需要通过光标选中下方的MCU编号，并修改列表中对应的MCU版本号，在点击 __"设置版本号"__，会把选中的MCU编号和版本号更新到模组中。
* **增加MCU ：** 点击按钮 __"__+__"__，可以在列表中新增一个MCU编号和MCU版本号，并编辑。
* **删除MCU ：** 在列表中选中一个MCU，并点击按钮 __"__-__"__，可以把选中的MCU从列表中删除，同时也删除了模组内部对应的MCU。


### **模组信息功能界面介绍**
通过AT指令获取设备的模组信息，将获取到的信息以表格的形式展示出来，通过点击 __"上报平台"__ 将模组信息上报到开发者中心平台。

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-027.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-027.png"></a>

* **获取信息 ：** 点击后利用AT指令获取模组当前信息，并将获取到的模组信息内容显示在模组信息表格中。
* **上报平台 ：** 通过AT指令使模组把当前模组信息上报到开发者中心平台，上报后可在开发者中心平台查看到该模组信息。

### **定位信息功能界面介绍**

#### **内置定位信息**

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-028.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-028.png"></a>

* **测试定位指令 ：** 点击后可通过日志打印窗口查看到当前模组的内置定位指令。
* **查询定位类型 ：** 点击后可获取到当前模组支持的定位类型，并将支持的类型展示到上方的表格中。
* **获取定位数据 ：** 首先先选中上方需要查询的定位类型，支持单选或多选，点击后可获取到选中的类型的定数信息数据，将在上方表格展示出来；
* **上报定位数据 ：** 选择上方表格的一行或多行数据后点击 __"上报定位数据"__ 按钮将定位数据上报到平台。

#### **外置定位信息**

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-029.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-029.png"></a>

* **__"+"__ 按钮 ：** 点击后会在上方表格生成一行单元格，可手动输入外置定位信息。
* **__"-"__ 按钮 ：** 选择上方表格的一行或多行数据，点击后可删除选中行及信息。
* **测试定位指令 ：** 点击后可通过日志打印窗口查看到当前模组的外置定位指令。
* **上报定位数据 ：** 选择上方表格的一行或多行数据后点击 __"上报定位数据"__ 按钮将定位数据上报到平台。


### **局域网功能界面介绍**

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-030.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-030.png"></a>

#### **关联AP**
用于配置模组AP名称与密钥，名称不可为空，密钥可为空，配置完后点击确认即可发送关联AP配置指令。

#### **bindcode**
bindcode是近场发现设备绑定方式所需的绑定码，需要设备上报与APP相同的bindcode到平台才能完成实际绑定动作。时长可输入范围：0~3600；

#### **模组配置**
* **清除默认配置 ：** 点击后可发送模组清除默认配置指令。
* **重置设备 ：** 点击后可发送重置设备指令，用于设备重置，恢复到初始配置状态

#### **Wi-Fi配置**
用于配置模组连接目标AP设备的名称与密钥，名称输入不可为空，密钥与MAC地址输入可为空。配置后点击 __"确定"__ 即可发送Wi-Fi配置指令。

#### **蓝牙设置**
用于蓝牙的开关操作，点击后发送对应的指令开启或关闭蓝牙，当前版本仅支持开启蓝牙功能。


### **网关子设备功能界面介绍**
网关子设备功能为网关设备下的子设备提供调试功能，调试子设备前该网关子设备必须处于在线的状态，即调试界面中的网关子设备处于连接和在线的状态，然后通过选中需要调试的子设备进行调试。
* **心跳开关 ：** 点击心跳开关控制子设备的心跳。
* **状态 ：** 反馈当前子设备的连接状态，若开关往右，且为蓝色，即当前子设备连接成功，可进行设备调试。
* **连接开关 ：** 控制子设备的连接开关，连接网关：点击后会发送连接指令进行连接，若连接成功按钮会变成 __"断开连接"__；断开连接：点击后会发送断开指令断开连接，按钮描述会变成 __"连接网关"__。
* **备注 ：** 双击后可弹出备注输入框，输入完成后点击 __"确认"__ 即可。

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-031.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-031.png"></a>

#### **搜索设备**
点击 __"搜索设备"__ 后会弹出输入框，输入想要搜索的设备信息，点击 __"确定"__ 即可进行搜索，支持模糊搜索，若无法匹配，则返回列表的第一行。

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-032.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-032.png"></a>

#### **添加设备**
点击 __"添加设备"__ 后会弹出子设备配置窗口，输入符合格式的PK、PS、DK、DS，选择对应的数据格式，若选择物模型则需导入物模型文件，可通过手动导入或自动获取导入物模型文件，配置完成后点击 __"OK"__ 按钮即可完成子设备添加，设备信息会在产品列表中展示。

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-033.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-033.png"></a>

#### **删除设备**
选中下方表格的一行或多行后，点击 __"删除设备"__ 后会弹出二次确认提示框，确认后将会删除选中的子设备信息。

#### **设备交互**
选中下方表格的一行，即需要进行调试的子设备，选中后点击 __"设备交互"__ 按钮后会根据选中的子设备数据格式展示对应的物模型或透传调试窗口，若选中的子设备数据格式为透传格式，子设备调试界面只展示透传调试界面。物模型与透传调试的步骤与网关设备调试步骤一致。

<a data-fancybox title="img" href="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-035.png"><img src="/zh/tool/QthTools-debug/QthTools-MCU_Simulator/resource/Tool-035.png"></a>

#### **清空设备密钥**
选中一行或多行数据后点击 __"清空设备密钥"__，点击后会弹出二次确认提示框，点击确认后工具将清空对应设备的保存的设备密钥。