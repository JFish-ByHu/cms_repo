# 移联万物APP绑定

配套的App给终端消费者使用，需要生成设备二维码用于绑定设备。

## **二维码生成**

在“设备管理->设备运维->预导入管理”页面中，您可以通过“生成SN”功能。批量获取由开发者中心生成的SN与设备二维码。

<a data-fancybox title="img" href="/zh/massProduct/image2022-3-14_15-17-35.jpg?version=1&modificationDate=1647241633000&api=v2">![img](/zh/massProduct/image2022-3-14_15-17-35.jpg?version=1&modificationDate=1647241633000&api=v2)</a>

点击 “**生成SN**” ，页面将弹出批量生成SN弹窗，您可以按照实际需要填写SN数量，如下图所示：

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/platform/platform-15.png">![img](/zh/deviceDevelop/develop/speediness/resource/platform/platform-15.png)</a>

平台生成后，将把SN列表与设备二维码图片，以压缩包的方式供用户下载，该设备二维码与模组IMEI完成绑定后，App用户即可通过该设备二维码绑定控制设备。

<a data-fancybox title="img" href="/zh/massProduct/image2022-3-15_15-41-20.png?version=1&modificationDate=1647329449000&api=v2">![img](/zh/massProduct/image2022-3-15_15-41-20.png?version=1&modificationDate=1647329449000&api=v2)</a>

## **绑定信息导入**

设备在产线生产时，需记录模组IMEI（DK）与设备二维码（SN）的关联关系，并按设备导入模板整理关系文件

设备导入模板可在“添加设备→模板下载”中获取，如下图所示：

<a data-fancybox title="img" href="/zh/massProduct/image2022-3-14_15-19-56.png?version=1&modificationDate=1647241774000&api=v2">![img](/zh/massProduct/image2022-3-14_15-19-56.png?version=1&modificationDate=1647241774000&api=v2)</a>

通过“添加设备->批量导入”功能把模组IMEI与设备二维码关系文件上传到平台，平台将记录该关联关系，如下图所示:

<a data-fancybox title="img" href="/zh/massProduct/image2022-3-14_15-19-40.png?version=1&modificationDate=1647241758000&api=v2">![img](/zh/massProduct/image2022-3-14_15-19-40.png?version=1&modificationDate=1647241758000&api=v2)</a>

导入绑定信息成功后，App用户可通过扫描设备二维码对设备进行绑定操作。

## **移联万物app绑定**

### **前提条件：**
下载移联万物App并注册个人账号。

### **操作步骤：**
1、打开移联万物 APP 并登录个人账户，在 App 首页，点击右上角“⊕”按钮。在弹出的窗口中选择“扫描添加”。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/app/Example-app-1.png">
<img src="/zh/deviceDevelop/develop/app/Example-app-1.png" style="width: 30%" /></a>

2、使用移联万物App扫描上述生成的二维码，此时移联万物App界面会出现对应的设备SN码及待填写的设备名称，填写“设备名称“，点击“确定”，即可在移联万物App主界面看到本次绑定的设备。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/app/Example-app-6.png">
<img src="/zh/deviceDevelop/develop/app/Example-app-6.png" style="width: 30%" /></a>
