
# 设备二维码

## **背景**
> 当设备基于物联网开发平台完成开发后，设备即将进入批量量产阶段。若是蜂窝类产品，且有配套的App给终端消费者使用，需要生成设备二维码用于绑定设备。对于设备厂家而言，无论是使用移远公版APP或自定义APP，都可通过扫描二维码添加设备，从而提升用户使用体验。开发者中心为产线批量生产和管理设备设备二维码提供了便捷的管理流程。



## **使用移远格式设备二维码**

使用移远公版App时，请使用移远格式设备二维码，移远二维码格式：“pk=xxxxxx&sn=xxxxxxxxxxxxxxx&v=1”

### **一、平台生成二维码**

1、在“设备管理->设备运维->预导入管理”页面中，您可以通过“生成SN”功能。批量获取由开发者中心生成的SN与设备二维码。


<a data-fancybox title="img" href="/zh/massProduct/image2022-3-14_15-17-35.jpg?version=1&modificationDate=1647241633000&api=v2">![img](/zh/massProduct/image2022-3-14_15-17-35.jpg?version=1&modificationDate=1647241633000&api=v2)</a>

2、点击 “**生成SN**” ，页面将弹出批量生成SN弹窗，您可以按照实际需要填写SN数量，需要选择对应的产品，二维码可以直接贴到成品外，如下图所示：

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/platform/platform-15.png">![img](/zh/deviceDevelop/develop/speediness/resource/platform/platform-15.png)</a>

3、平台生成后，将把SN列表与设备二维码图片，以压缩包的方式供产线下载。

<a data-fancybox title="img" href="/zh/massProduct/image2022-3-15_15-41-20.png?version=1&modificationDate=1647329449000&api=v2">![img](/zh/massProduct/image2022-3-15_15-41-20.png?version=1&modificationDate=1647329449000&api=v2)</a>

### **二、设备(DK)与二维码(PK+SN)绑定**

设备(DK)与二维码(PK+SN)绑定有多种方式，您可以选择最适合产线的方式进行操作。二维码粘贴到设备外壳上，扫码枪记录二维码与模组绑定关系。

**方式一（扫码枪方式）**：产线生产时可通过移远SN&IMEI绑定工具搭配扫码枪，使用扫码枪分别扫描模组上的IMEI（DK）与设备二维码（PK+SN）进行绑定。记录模组IMEI（DK）与设备二维码（SN）的关联关系，并在工具中生成并导出绑定关系文件。详细步骤如下所示：
<a data-fancybox title="img" href="/zh/massProduct/image2022-3-14_15-16-58.png?version=1&modificationDate=1647241596000&api=v2">![img](/zh/massProduct/image2022-3-14_15-16-58.png?version=1&modificationDate=1647241596000&api=v2)</a>

1、【绑定工具下载】在 <a href="https://iot.quectelcn.com/download?menuCode=TEST_UTIL&resourceType=C" target="_blank"> 下载中心-产测工具</a> 下载绑SN&IMEI绑定工具。

2、【获取设备DK】通常情况下蜂窝设备为IMEI号，使用扫码枪对准模组上的二维码，若扫描成功后，绑定工具中会显示模组的IMEI号。

3、【获取SN码】使用扫码枪对准平台导出的SN二维码，若扫描成功后，绑定工具中会显示产品PK与设备SN。
<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/platform/platform-16.png">![img](/zh/deviceDevelop/develop/speediness/resource/platform/platform-16.png)</a>

4、【导出关联文件】点击绑定工具 左上角的“文件”，再点击“导出”，输入导出的文件名，再点击保存按钮。



**方式二（手动输入方式）**：产线中若没有扫码枪，可直接使用指令读取的方式或其他方式，如设备上的屏幕一些人机交互进行获取设备的IMEI，然后再将设备的IMEI手动输入进表格。详细步骤如下所示：

1、【获取导入设备模板】在开发者中心点击左侧菜单 “设备管理” → “设备运维” → “预导入管理” → “添加设备”，切换为“批量导入”页签后点击“模板下载”，将关联关系模板下载到本地电脑中。

2、【获取设备DK与SN码】将获取的设备IMEI、产品的PK、设备SN码分别输入到表格中的“*设备DeviceKey”“*产品ProductKey”“设备SN”，并将文件保存到本地电脑中。
<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/platform/platform-17.png">![img](/zh/deviceDevelop/develop/speediness/resource/platform/platform-17.png)</a>


<span style="color:#999AAA">提示：产线需要制定标准化操作程序，在关联过程中添加数据验证步骤，确保模组IMEI和设备二维码的正确性，确保它们正确匹配。</span>





### **三、绑定信息导入**

通过“添加设备->批量导入”功能把模组DK与设备二维码关系文件上传到IoT平台，IoT平台将记录该关联关系，该设备二维码与模组DK完成绑定后，App用户即可通过该设备二维码绑定控制设备，如下图所示:

<a data-fancybox title="img" href="/zh/massProduct/image2022-3-14_15-19-40.png?version=1&modificationDate=1647241758000&api=v2">![img](/zh/massProduct/image2022-3-14_15-19-40.png?version=1&modificationDate=1647241758000&api=v2)</a>

导入成功后，App用户可通过扫描设备二维码对设备进行绑定操作。



<span style="color:#999AAA">提示：在设备成品装配的关键步骤，要求工人扫描设备上的二维码，并将其与系统中预先录入的对应关系进行验证。建议只有在二维码与系统记录匹配时，才能继续下一步骤。</span>

## **使用自定义格式设备二维码**

当自主研发App时，可自定义SN码与设备二维码数据格式，但同样需要把模组DK与设备二维码（SN）关系上传到IoT平台。


### **一、设备(DK)与二维码(PK+SN)绑定**

设备在产线生产时，需记录模组IMEI（DK）与设备二维码（SN）的关联关系，并按设备导入模板整理关系文件。详细步骤如下所示：
<a data-fancybox title="img" href="/zh/massProduct/image2022-3-14_15-19-56.png?version=1&modificationDate=1647241774000&api=v2">![img](/zh/massProduct/image2022-3-14_15-19-56.png?version=1&modificationDate=1647241774000&api=v2)</a>


1、【获取导入设备模板】在开发者中心点击左侧菜单 “设备管理” → “设备运维”，切换到“预导入管理”页签后点击“添加设备”按钮，切换为“批量导入”页签后点击“模板下载”，将关联关系模板下载到本地电脑中。

2、【产线操作】将获取的设备IMEI、产品的PK、设备SN码分别输入到表格中的“*设备DeviceKey”“*产品ProductKey”“设备SN”，并将文件保存到本地电脑中。

<span style="color:#999AAA">提示：直接使用指令读取的方式或其他方式，如设备上的屏幕一些人机交互进行获取设备的IMEI，然后再将设备的IMEI输入进表格。</span>

3、【上传绑定关系文件】切换到开发者中心，点击“上传文件”按钮上传绑定关系表格。

### **二、二维码生成**

设备生产商可按实际使用场景需要制作设备二维码，但二维码中需带有PK与SN信息，用于App绑定设备使用。例如“ABCPK=xxxxx+SN=xxxxxxxxxxxABC”格式等自定义格式。


