# Wi-Fi 品类设备OTA包制作

## __1.OTA打包工具下载__

进入<a href="https://iot.quectelcn.com/download?menuCode=MODULE_DEVL" target="_blank">**OTA打包工具下载**</a>，点击进入指定模块的相关下载页面，找到OTA打包工具并下载。

注意：打包工具的存储路径不可包含任何空格及中文。<br>
## __2.OTA升级包制作__

我们打开 rt_ota_packaging_tool OTA打包工具 ，操作步骤如下图所示。
<a data-fancybox title="img" href="/zh/deviceDevelop/KnowledgeBase/step32.png">![img](/zh/deviceDevelop/KnowledgeBase/step32.png)</a>

①、 选择固件 __output/beken7231_bsp.bin__。<br>
②、 设置 __固件名称__ ，改成本次需要OTA的目标版本。<br>
③、 点击 __开始打包__，生成的OTA包在选择固件的路径下，后缀为rbl格式。<br>

<span style="color:#ff0000" >注意：除以上三点其余均为默认，否则制作的OTA升级包设备下载完无法进入OTA。</span>