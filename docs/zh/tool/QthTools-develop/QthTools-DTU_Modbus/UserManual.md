# 用户说明
## **主界面介绍**
**工作区：** 导入、导出、清空当前工作区配置信息。  
**配置文件：** 生成IoT平台物模型定义文件以及设备烧录文件。  
**下载：** 通过串口烧录文件到设备。  
**帮助：** 查看使用文档、联系方式、软件版本号。  
**产品信息：** 在IoT平台定义的产品信息，如：ProductKey、ProductSecret等。  
**串口信息：** DTU设备的串口信息，如：串口ID、波特率等。   
**从机设备信息：** 从机设备的相关信息，如：从机设备名称、从机地址等。 

<a data-fancybox title="img" href="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-1.png"><img src="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-1.png"></a>


## **配置产品信息**
**产品名称：** 用户自定义的产品名称，建议和开发者中心中的产品名称保持一致。  
**ProductKey：** 开发者中心为产品颁发的全局唯一标识。该参数很重要，在设备认证以及通信中都会用到，因此需要您保管好。  
**ProductSecret：** 由开发者中心颁发的产品密钥，通常与ProductKey成对出现，用于一型一密的认证方案。该参数很重要，需要您保管好，不能泄露。  
**上报方式**  
	**全部上报：** 设备每次轮询到的数据都会直接上报到开发者中心。  
	**变化上报：** 设备每次轮询到的数据与上次数据进行比较，发生变化才上报到开发者中心。  
**设备类型**  
	&emsp;**直连版：** modbus从机设备和网关共用产品信息，以一个整体设备在IoT平台展示。  
	&emsp;**网关版：** modbus从机设备拥有独立的产品信息和设备信息，在IoT平台单独展示。  

<a data-fancybox title="img" href="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-2.png"><img src="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-2.png"></a>

### **添加产品信息**
 1. 点击“添加产品”按钮
 2. 在弹窗页面中分别输入“产品名称”、“ProductKey”、“ProductSecret”、“上报方式”、“设备类型”参数
 3. 点击“OK”确认添加<br>
<span style="color:#999AAA">提示：产品信息仅可添加一条，需要添加新的请通过修改或删除旧的产品信息。</span>
### **修改产品信息**
 1. 右键点击需要修改的产品信息
 2. 在右键菜单中点击“修改”按钮
 3. 在弹窗页面中分别修改“产品名称”、“ProductKey”、“ProductSecret”、“上报方式”、“设备类型”参数
 4. 点击“OK”确认修改
### **删除产品信息**
 1. 右键点击需要删除的产品信息
 2. 在右键菜单中点击“删除”按钮

## **配置串口信息**

**端口号：** 对应模组使用的串口号，范围0~99。  
**轮询间隔：** modbus轮询所有寄存器数据后，到下一次发起轮询的时间间隔，单位：秒。  
**命令间隔：** modbus命令发送之间的时间间隔，单位：毫秒。  
__重发次数__：当DTU设备发送Modbus协议问询数据帧时，子设备（传感器）端未在命令间隔时间内响应，则DTU会再次重新发送，为 0 时则不重新发送。

<a data-fancybox title="img" href="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-3.png"><img src="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-3.png"></a>


### **添加串口信息**
1. 点击“添加串口”按钮
2. 在弹窗页面中分别输入“端口号”、“波特率”、“数据位”、“停止位”、“校验位”、“轮询间隔”、“命令间隔”、”重发次数“参数
3. 点击“OK”确认添加

### **修改串口信息**
1. 右键点击需要修改的串口信息
2. 在右键菜单中点击“修改”按钮
3. 在弹窗页面中分别修改“端口号”、“波特率”、“数据位”、“停止位”、“校验位”、“轮询间隔”、“命令间隔”、”重发次数“参数
4. 点击“OK”确认修改

### **删除串口信息**
1. 右键点击需要删除的串口信息
2. 在右键菜单中点击“删除”按钮


## **配置从机设备**

<a data-fancybox title="img" href="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-8.png"><img src="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-8.png"></a>


### **添加从机设备**
1. 点击“添加设备(+)”按钮；
2. 在弹窗页面中分别输入“设备名称”。
3. 在对应串口端口号的列表下输入该设备的modbus从机地址。
4. 当选择设备类型为“网关版”时，需要为modbus从机设备填写对应的产品信息：“ProductKey”、“ProductSecret”。
5. 点击“OK”确认添加

<a data-fancybox title="img" href="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-9.png"><img src="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-9.png"></a>


### **修改从机设备**
1. 右键点击需要修改的设备信息
2. 在右键菜单中点击“修改”按钮
3. 在弹窗页面中分别修改“设备名称”、“从机地址”参数
4. 点击“OK”确认修改

## **删除从机设备**
1. 右键点击需要删除的设备信息
2. 在右键菜单中点击“删除”按钮


## **配置寄存器列表**

<a data-fancybox title="img" href="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-10.png"><img src="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-10.png"></a>


### **添加寄存器列表**
1. 选择对应的线圈、离散量、保持寄存器、输入寄存器标签页；
2. 点击“添加寄存器地址”按钮；
3. 在弹窗页面中分别输入“起始地址”、“数量”参数；
4. 可以通过点击“Hex”按钮，切换“起始地址”输入框是以十进制还是十六进制显示；
5. 点击“OK”确认添加
### **修改寄存器列表**
1. 右键点击需要修改的寄存器列表表头
2. 在右键菜单中点击“修改”按钮
3. 在弹窗页面中分别修改“起始地址”、“数量”参数；
4. 点击“OK”确认修改

<a data-fancybox title="img" href="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-11.png"><img src="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-11.png"></a>


### **删除寄存器列表**
#### **删除整个寄存器列表**
1. 右键点击需要修改的寄存器列表表头
2. 在右键菜单中点击“删除”按钮
#### **删除部分寄存器列表**
1. 右键点击需要删除的寄存器地址
2. 在右键菜单中点击“删除至顶部”或者“删除至底部”按钮
3. 在提示框中点击“Yes”确认删除
## **配置寄存器功能标签**

<a data-fancybox title="img" href="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-12.png"><img src="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-12.png"></a>


## **配置功能信息**

**类型：** 功能的类型，根据实际的modbus从机设备来定义。
* **布尔值：** 仅有0和1两种状态，一般用于开关、继电器等类型；
* **数值：** 整数或者浮点数，应用广泛；
* **字节流：** 字节流或者字符串类型，可用于字符串传输；
* **枚举：** 列出所有可能的取值，并给它们取一个名字。

## **添加功能信息**
### **添加布尔值类型**

<a data-fancybox title="img" href="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-4.png"><img src="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-4.png"></a>

* __类型__：选择布尔型。
* __功能名称__：从机设备功能所具有的功能命名。
* __读写类型__：分为只读、只写、可读可写。

**配置事件（可选）** <br>

<a data-fancybox title="img" href="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-19.png"><img src="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-19.png"></a>

* __事件名称__：事件所具有的命名。
* __事件类型__：包括故障、告警、信息等三个选项。
* __触发条件__：该事件的触发条件，当查询寄存器对应数值属于命中范围时上报对应告警事件。


### **添加数值类型**

<a data-fancybox title="img" href="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-5.png"><img src="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-5.png"></a>


* __类型：__ 选择数值型。
* __功能名称：__ 从机设备功能所具有的功能命名。
* __读写类型：__ 分为只读、只写、可读可写。
* __数据类型：__ 根据Modbus协议实际的数据类型而选择。
*  **字节顺序：** 根据该功能实际使用的字节顺序选择。
#### **字节顺序**
16位有符号整型/16位无符号整型：
* 大端模式(AB)
* 小端模式(BA)
* 大端模式字节交换(BA)
* 小端模式字节交换(AB)

32位有符号整型/32位无符号整型：
* 大端模式(ABCD)
* 小端模式(DCBA)
* 大端模式字节交换(BADC)
* 小端模式字节交换(CDAB)

64位有符号整型/64位无符号整型：
* 大端模式(ABCDEFGH)
* 小端模式(HGFEDCBA)
* 大端模式字节交换(BADCFEHG)
* 小端模式字节交换(GHEFCDAB)

32位单精度浮点型：
* 大端模式(ABCD)
* 小端模式(DCBA)
* 大端模式字节交换(BADC)
* 小端模式字节交换(CDAB)

64位双精度浮点型
* 大端模式(ABCDEFGH)
* 小端模式(HGFEDCBA)
* 大端模式字节交换(BADCFEHG)
* 小端模式字节交换(GHEFCDAB)

#### **换算公式**
**数据上报：** cloudValue = localValue*multiple+increment   
**数据下发：** localValue = (cloudValue-increment)/multiple
* **cloudValue：** 开发者中心下发的数据
* **localValue：** 设备读取到的modbus从机设备的数据
* **Multiple：** 衰减倍数，即换算公式界面中寄存器值乘上的数值
* **Increment：** 增量，即换算公式界面中寄存器值加上的数值   

示例如下所示：
>一个从机设备中，寄存器读取到的值是350，根据设备手册中可知实际温度是350*0.1=35摄氏度，因此Multiple应该填0.1，Increment应该填0；   
localValue=10,multiple=0.1,increment=0.01,cloudValue=10\*0.01+0.01=0.11   
cloudValue=0.11,multiple=0.01,increment=0.01,localValue=(0.11-0.01)/0.01=10

#### **数据转换路径**
* **数据上报：** 字节交换->数值换算
* **数据下发：** 数值换算->字节交换
  

**配置事件（可选）** <br>

<a data-fancybox title="img" href="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-20.png"><img src="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-20.png"></a>

* __事件名称__：事件所具有的命名。
* __事件类型__：包括故障、告警、信息等三个选项。
* __触发条件__：该事件的触发条件，后一个输入框的值需要大于前一个输入框的，当查询寄存器对应数值属于命中范围时上报对应告警事件。

### **添加字节流类型**

<a data-fancybox title="img" href="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-6.png"><img src="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-6.png"></a>

* __类型__：选择字节流型。
* __功能名称__：从机设备功能所具有的功能命名。
* __读写类型__：分为只读、只写、可读可写。
* __字节长度__：根据字节流数据的最大字节长度设定。


**配置事件（可选）** <br>

<a data-fancybox title="img" href="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-21.png"><img src="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-21.png"></a>

* __事件名称__：事件所具有的命名。
* __事件类型__：包括故障、告警、信息等三个选项。
* __触发条件__：该事件的触发条件，触发的条件为该输入内容。

### **添加枚举类型**

<a data-fancybox title="img" href="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-7.png"><img src="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-7.png"></a>

* __类型__：选择枚举类型。
* __功能名称__：从机设备功能所具有的功能命名。
* __读写类型__：分为只读、只写、可读可写。
* __数据类型__：选择与寄存器相符合的数据类型。
* __字节顺序__：数据在内存中的存放顺序。用32位整型举例：数值(ABCD)使用两个字节储存：高位字节是(AB)，低位字节是(CD)。
  * __大端模式__：高位字节在前，低位字节在后，即以(ABCD)形式储存。
  * __小端模式__：低位字节在前，高位字节在后，即以(DCBA)形式储存。
  * __大端模式字节交换__ ：大端模式并高低位字节间两两交换，即以(BADC)形式储存。
  * __小端模式字节交换__ ：小端模式并高低位字节间两两交换，即以(CDAB)形式储存。

**配置事件（可选）** <br>

<a data-fancybox title="img" href="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-22.png"><img src="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-22.png"></a>

* __事件名称__：事件所具有的命名。
* __事件类型__：包括故障、告警、信息等三个选项。
* __触发条件__：该事件的触发条件，触发的条件为该选择的枚举值（可多选）。


### **修改寄存器的功能标签**
1. 右键点击需要修改的功能标签
2. 在右键菜单中点击“修改”按钮
3. 在弹窗页面中分别修改“功能名称”、“读写类型”等参数
4. 点击“OK”确认修改
### **删除寄存器的功能标签**
1. 右键点击需要修改的功能标签
2. 在右键菜单中点击“删除”按钮
## **工作区信息**
### **导入工作区信息**
1. 在工作栏中点击“工作区”->“打开”按钮
2. 在弹窗页面中选择需要打开的工作区文件
3. 点击“打开”确认
### **导出工作区信息**
1. 在工作栏中点击“工作区”->“保存”按钮
2. 在弹窗页面中选择需要保存的文件路径
3. 点击“保存”确认
### **清空工作区信息**
在工作栏中点击“工作区”->“清空”按钮<br>
<span style="color:#999AAA">提示：请谨慎操作，会清空整个工作区内容，无法恢复。</span>

## **配置文件**
### **生成配置文件**
1. 在工作栏中点击“配置文件”->“生成配置文件”按钮。
2. 在弹窗页面中选择需要保存的文件路径。
3. 点击“保存”确认。


<span style="color:#999AAA">提示：xxxxxx_xxxxxxxxxx_cloud.json：物模型定义文件，用于在开发者中心导入;   
	xxxxxx_xxxxxxxxxx_local.bin：modbus定义文件，用于在设备烧写;</span>


### **导入配置文件到开发者中心**

<a data-fancybox title="img" href="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-17.png"><img src="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-17.png"></a>


1. 登录开发者中心，打开对应的产品页面，并切换到“功能定义”页面
2. 点击“草稿模式”进入编辑模式
3. 点击“快速导入”->“导入物模型”->“点击上传”
4. 在弹窗页面中选择生成的xxxxxx_xxxxxxxxxx_cloud.json文件
5. 点击“确认”导入
6. 点击“发布应用”退出编辑模式
### **烧写配置文件到设备**

<a data-fancybox title="img" href="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-18.png"><img src="/zh/tool/QthTools-develop/QthTools-DTU_Modbus/resource/Tool-18.png"></a>

1. 在工作栏中点击“下载”->“串口下载”按钮
2. 点击“导入文件”
3. 在弹窗页面中选择生成的xxxxxx_xxxxxxxxxx_local.bin文件
4. 选择对应的端口号
5. 点击“打开串口”
6. 点击“开始下载”
7. 重启设备
8. 文本框中会显示文件下载进度，下载成功会弹出提示“下载成功”

## **附录 术语缩写**
表1：术语缩写
| 缩写   | 英文全称             | 中文全称     |
| ------ | -------------------- | ------------ |
| Modbus |                      | 串行通信协议 |
| USB    | Universal Serial Bus | 通用串行总线 |
