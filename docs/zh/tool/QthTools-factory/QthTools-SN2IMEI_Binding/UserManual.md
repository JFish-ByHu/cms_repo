# 用户说明
## **引言**

本文档主要介绍如何使用Quectel_Quecthing_SN&IMEI绑定工具，对移远模组的IMEI和IoT平台的SN进行绑定。绑定后生成相应的csv文件后，导入IoT平台进行。


## **使用流程**
### **打开程序**

用户打开程序后，程序将自动加载上一次关闭前的记录，同时弹出提示框，提示点击前三列才可出现扫码输入框。最后一列为设备名称，当前不做设置。


<a data-fancybox title="img" href="/zh/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-1.png"><img src="/zh/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-1.png"></a>
<br>
<span style="color:#999AAA">提示：当前为一页2000行的显示，限制总页数为25页。由于程序启动时，需加载历史数据，如果数据过大，程序将延长加载时长。</span>

### **扫码输入**
鼠标双击前三列弹出消息框，并提示内容。若点击第一列，则消息为”请扫描模组二维码”。若点击第二或第三列且第一列不为空时，则消息为”请扫描设备二维码”；若点击第二或第三列且第一列为空时，则提示“请先点击设备DeviceKey列进行扫描”。若当前无需输入，则可点击退出按钮，将退出改窗口。

<a data-fancybox title="img" href="/zh/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-2.png"><img src="/zh/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-2.png"></a>
<br>
<span style="color:#999AAA">提示：用户需要扫码时，请确保输入框是否已显示为可编辑状态（即有光标处于闪动状态）。</span>


若输入出错或扫码错误，则如下图所示。


<a data-fancybox title="img" href="/zh/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-3.png"><img src="/zh/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-3.png"></a>


### **文件操作-导入**
文件导入时，不对数据进行具体检测，只检测其整体格式。

**步骤一：** 
点击左上角的“文件”，再点击“导入”。


<a data-fancybox title="img" href="/zh/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-4.png"><img src="/zh/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-4.png"></a>


**步骤二：**
若当前记录为非空，则会弹窗提示是否覆盖当前记录；否则跳到步骤三。


<a data-fancybox title="img" href="/zh/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-5.png"><img src="/zh/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-5.png"></a>


**步骤三：**
弹出弹窗显示windows下的.csv文件，并选择导入。


<a data-fancybox title="img" href="/zh/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-6.png"><img src="/zh/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-6.png"></a>


**步骤四：**
当文件校验成功100%后，在写入文件的进度条达到100%即可。


<a data-fancybox title="img" href="/zh/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-8.png"><img src="/zh/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-8.png"></a>


### **文件操作-导出**
点击左上角的“文件”，再点击“导出”，输入导出的文件名，再点击保存按钮后。


<a data-fancybox title="img" href="/zh/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-9.png"><img src="/zh/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-9.png"></a>

弹出如下图所示的弹窗，则保存成功。

<a data-fancybox title="img" href="/zh/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-10.png"><img src="/zh/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-10.png"></a>


### **文件操作-清除**
点击左上角的“文件”后点击“清除”。


<a data-fancybox title="img" href="/zh/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-11.png"><img src="/zh/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-11.png"></a>

若当前所选择的数据不为空，则用户根据实际要求点击，若点击”yes”，则清除当前所有数据，点击”no”或关闭窗口，则为取消。


<a data-fancybox title="img" href="/zh/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-12.png"><img src="/zh/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-12.png"></a>


### **数据删除**
选择需要删除的表格行（可多选），右键将弹出菜单栏，再点击删除即可删除数据。


<a data-fancybox title="img" href="/zh/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-13.png"><img src="/zh/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-13.png"></a>


### **帮助文档**
点击左上角的“帮助”，如下图所示弹出当前帮助手册。


<a data-fancybox title="img" href="/zh/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-14.png"><img src="/zh/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-14.png"></a>

<a data-fancybox title="img" href="/zh/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-15.png"><img src="/zh/tool/QthTools-factory/QthTools-SN2IMEI_Binding/resource/Tool-15.png"></a>
