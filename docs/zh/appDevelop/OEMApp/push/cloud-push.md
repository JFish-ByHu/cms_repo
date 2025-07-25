# 云服务推送配置

## **一、准备工作**

[注册](https://account.aliyun.com/register/qr_register.htm)阿里云账号。

## **二、创建RAM用户的AccessKey**

### **前提条件**

您可以使用以下账号创建RAM用户的AccessKey：

●	阿里云账号（主账号）。<br>
●	具有RAM管理权限（AliyunRAMFullAccess）的RAM用户。<br>
●	允许自主管理AccessKey的RAM用户。关于如何设置自主管理AccessKey的详情，请参见[管理RAM用户安全设置](https://help.aliyun.com/zh/ram/user-guide/manage-security-settings-of-ram-users#task-188786)。

### **使用限制**

●	RAM用户的AccessKey Secret只在创建时显示，不支持查看，请妥善保管。如果AccessKey泄露或丢失，请删除并创建新的AccessKey。<br>
●	每个RAM用户最多允许创建2个AccessKey。

### **操作步骤**


1. 登录[RAM控制台](https://ram.console.aliyun.com/?spm=a2c4g.11186623.0.0.68036543yhvBry)。
2. 在左侧导航栏，选择身份管理 > 用户。
3. 在用户页面，单击目标RAM用户名称。
4. 在用户AccessKey区域，单击创建AccessKey。
5. 根据界面提示完成安全验证。
6. 在创建AccessKey对话框，查看AccessKey ID和AccessKey Secret。
7. 您可以单击下载CSV文件，下载AccessKey信息。单击复制，复制AccessKey信息。
8. 单击确定。


## **三、配置 OEM APP**


1.	登录<a href="https://iot.quectelcn.com" target="_blank">开发者中心</a>。
2.	在左侧导航栏，选择OEM APP > 上架配置。
3.	在上架配置页面，选择需要配置的OEM APP。
4.	切换到推送服务Tab页。
5.	配置服务端 AccessKey ID和AccessKey Secret。
