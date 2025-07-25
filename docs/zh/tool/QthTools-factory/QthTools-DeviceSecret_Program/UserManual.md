# 用户说明

## **引言**
本文档主要介绍如何使用移远设备密钥烧录工具，对工具在线模式与离线模式进行使用介绍。
## **界面介绍**
基础信息：第一栏显示产品名称、PK；第二栏为烧录配置信息，包括端口、波特率、停止位和校验位设置。
设备信息：显示设备烧录的进度。

### **离线模式**
<span style="color:#999AAA">提示：左上角文字为当前导入的密钥文件名称，红色字体为当前未导入密钥文件，绿色字体表示导入的密钥文件名称。</span>

<a data-fancybox title="img" href="/zh/tool/QthTools-factory/QthTools-DeviceSecret_Program/Tool-1.png"><img src="/zh/tool/QthTools-factory/QthTools-DeviceSecret_Program/Tool-1.png"></a>

### **在线模式**
<span style="color:#999AAA">提示：左上角信号图标表示网络状态，蓝色表示当前网络可用，灰色表示当前网络不可用。</span>

<a data-fancybox title="img" href="/zh/tool/QthTools-factory/QthTools-DeviceSecret_Program/Tool-2.png"><img src="/zh/tool/QthTools-factory/QthTools-DeviceSecret_Program/Tool-2.png"></a>


## 使用介绍
### **打开软件**
* 首次打开默认进入离线模式，后续打开程序会进入上一次关闭时所在的工作模式。
* 软件会保存离线模式导入密钥文件和在线模式输入烧录码，后续打开软件会自动恢复数据，无需再次操作。

<a data-fancybox title="img" href="/zh/tool/QthTools-factory/QthTools-DeviceSecret_Program/Tool-3.png"><img src="/zh/tool/QthTools-factory/QthTools-DeviceSecret_Program/Tool-3.png"></a>


### **离线模式使用介绍**
#### **使用流程**
1. 导入密钥文件
2. 配置串口信息
3. 开始烧录
4. 结束烧录

#### **导入密钥文件**
1. 点击“导入密钥文件”按钮
2. 选择密钥文件后点击“打开”按钮

<span style="color:#999AAA">提示：密钥文件以.csv为后缀的格式文件，密钥文件可通过平台获取，请勿随意更改平台导出的密钥文件，否则可能出现导入密钥文件失败。导入密钥文件后，若文件格式正确，该文件名会显示在窗体左上角，产品信息会显示在“基础信息”第一栏，只显示ProductKey信息。</span>


<a data-fancybox title="img" href="/zh/tool/QthTools-factory/QthTools-DeviceSecret_Program/Tool-4.png"><img src="/zh/tool/QthTools-factory/QthTools-DeviceSecret_Program/Tool-4.png"></a>


#### **配置串口信息**
1. 选择端口
2. 选择波特率
3. 选择停止位（可免配置）
4. 选择检验位（可免配置）

<span style="color:#999AAA">提示：停止位与检验位配置信息默认隐藏，隐藏时无需配置停止位与校验位信息。可通过点击波特率配置信息右侧的“下拉箭头”展开停止位与校验位配置信息。</span>

<a data-fancybox title="img" href="/zh/tool/QthTools-factory/QthTools-DeviceSecret_Program/Tool-5.png"><img src="/zh/tool/QthTools-factory/QthTools-DeviceSecret_Program/Tool-5.png"></a>


#### **设备烧录**
1. 接入设备
2. 点击“开始烧录”
3. 等待烧录完成后断开设备
4. 接入下一台设备
5. 点击“停止烧录”按钮

<span style="color:#999AAA">提示：设备信息窗口会显示烧录流程，进度中的步骤为灰色表示该步骤未开始，紫色表示该步骤正在进行中，绿色表示该步骤已完成，红色表示该步骤失败。烧录过程中若出现失败或点击“停止烧录”按钮，工具软件会自动停止烧录轮询，退出烧录模式。</span>

<a data-fancybox title="img" href="/zh/tool/QthTools-factory/QthTools-DeviceSecret_Program/Tool-6.png"><img src="/zh/tool/QthTools-factory/QthTools-DeviceSecret_Program/Tool-6.png"></a>


### **在线模式使用介绍**
#### **使用流程**
1. 输入烧录码
2. 配置串口信息
3. 开始烧录
4. 结束烧录

#### **输入烧录码**
1. 点击“输入烧录码”按钮
2. 输入烧录码后点击“确认”按钮

<span style="color:#999AAA">提示：烧录码可通过平台获取，格式为字母与数字。若输入正确的的烧录码，工具软件会获取到产品信息，产品信息会显示在“基础信息”第一栏，显示产品名称与ProductKey的信息。</span>

<a data-fancybox title="img" href="/zh/tool/QthTools-factory/QthTools-DeviceSecret_Program/Tool-7.png"><img src="/zh/tool/QthTools-factory/QthTools-DeviceSecret_Program/Tool-7.png"></a>


#### **配置串口信息**
1. 选择端口
2. 选择波特率
3. 选择停止位（可免配置）
4. 选择检验位（可免配置）

<span style="color:#999AAA">提示：停止位与检验位配置信息默认隐藏，隐藏时无需配置停止位与校验位信息。可通过点击波特率配置信息右侧的“下拉箭头”展开停止位与校验位配置信息。</span>

<a data-fancybox title="img" href="/zh/tool/QthTools-factory/QthTools-DeviceSecret_Program/Tool-8.png"><img src="/zh/tool/QthTools-factory/QthTools-DeviceSecret_Program/Tool-8.png"></a>


#### **设备烧录**
1. 接入设备
2. 点击“开始烧录”
3. 等待烧录完成后断开设备
4. 接入下一台设备
5. 点击“停止烧录”按钮

<span style="color:#999AAA">提示：设备信息窗口会显示烧录流程，进度中的步骤为灰色表示该步骤未开始，紫色表示该步骤正在进行中，绿色表示该步骤已完成，红色表示该步骤失败。烧录过程中若出现失败或点击“停止烧录”按钮，工具软件会自动停止烧录轮询，退出烧录模式。</span>

<a data-fancybox title="img" href="/zh/tool/QthTools-factory/QthTools-DeviceSecret_Program/Tool-9.png"><img src="/zh/tool/QthTools-factory/QthTools-DeviceSecret_Program/Tool-9.png"></a>

