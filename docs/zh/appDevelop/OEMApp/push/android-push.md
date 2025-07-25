# 配置阿里云推送服务

本文介绍如何配置OEM App的推送服务。

### 准备工作

* 注册阿里云账号

## 在阿里云开通移动推送服务

1. 登录[阿里云控制台](https://homenew.console.aliyun.com/home/dashboard/?spm=a2c4g.11186623.0.0.bd495ab2kpRQjH)。
2. 鼠标悬停在左上角的 ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5641254361/p339821.jpg) 图标上，然后在**产品与服务**中，打开产品和服务列表。
3. 在产品列表中，选择**企业服务与云通信** >  **移动研发平台**，进入产品介绍页。
   <a data-fancybox title="img" href="/zh/appDevelop/oemapp/push/push2.png">![image](/zh/appDevelop/oemapp/push/push2.png)</a>
4. 在产品介绍页，勾选服务协议后，单击**立即开通**。

## **Native应用开发流程**

### **创建项目**

**说明** - 使用移动测试、HTTPDNS产品无需创建项目及应用，可跳过此步骤。

EMAS平台中的应用即您实际端应用的映射，您需要在EMAS控制台创建应用，与您要加载SDK的端应用进行关联。

1. 产品开通后即可进入EMAS移动研发平台的[管理控制台](https://emas.console.aliyun.com/#/productList)。
2. 在控制台首页，单击**添加项目**，打开**创建项目**右侧栏。
   <a data-fancybox title="img" href="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5912902561/p209154.png">![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5912902561/p209154.png)</a>
3. 在**创建项目**右侧栏，填写项目基本信息。
    1）项目名称项: 必填，用于设置项目的名称。【取值范围】1～30字符【字符类型】中文/英文大小写/数字/下划线
    2）项目描述: 选填，简要介绍项目用途。
4. 单击某个Native应用，在右侧栏可查看如下服务的启停状况和关联的数据信息。

<a data-fancybox title="img" href="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0475518661/p516245.jpg">![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0475518661/p516245.jpg)</a>

### **创建Native应用**

在**概览**页面，单击**添加应用**，打开**添加应用**面板。

1. 在**添加应用**面板，选择**应用类型**为 **Native**，填写应用的基本信息。
   <a data-fancybox title="img" href="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5559737661/p511433.png">![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5559737661/p511433.png)</a>
| 2.          | 选项                                                                           | 说明 |
| ----------- | ------------------------------------------------------------------------------ |
| 应用名称    | 用于设置应用的名称。【取值范围】1～25字符【字符类型】中文/英文大小写/数字      |
| 应用类型    | 包含 **Native** 和 **H5** 两种类型，您可根据业务需要进行选择。                 |
| 选择平台    | 包括 Android 和 iOS 两个选项，根据应用所属平台选择。                           |
| PackageName | 当**选择平台**设置为 **Android** 时，显示该选项，用于填写应用的包名。          |
| BundleId    | 当**选择平台**设置为 **iOS** 时，显示该选项，用于填写应用的BundleId。          |
| 应用类型    | 用于选择应用的所属类型，包括社交、摄影与摄像、娱乐等，您可以根据实际情况选择。 |
3. 配置完成后，单击**创建应用**，完成应用创建。

   注意: 阿里云账号默认可创建30个应用，如创建的应用数达到上限，可[提交工单](https://selfservice.console.aliyun.com/ticket/createIndex?spm=a2c4g.11186623.2.2.c53115faHTrfig)进行扩容。
4. 应用创建成功后，返回**概览**页，可查看已创建好的应用。
5. 如果不再使用某应用，可单击该应用名称右侧的<a data-fancybox title="img" href="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5912902561/p437333.png">![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5912902561/p437333.png)</a>，在**应用设置**页面，单击 **删除应用** 。

### **下载配置文件**

1. 登录EMAS移动研发平台的[管理控制台](https://emas.console.aliyun.com/#/productList)。
2. 在**概览**页面，单击应用名称右侧的<a data-fancybox title="img" href="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5912902561/p437333.png">![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5912902561/p437333.png)</a>，打开指定应用的**应用设置**页面。
   <a data-fancybox title="img" href="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5912902561/p209445.png">![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5912902561/p209445.png)</a>
3. 在**应用设置**页面，选择**Native应用**进行SDK设置,得到应用的AppKey和AppSecret信息。
   <a data-fancybox title="img" href="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5559737661/p511503.png">![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5559737661/p511503.png)</a>

### 辅助通道集成

* 参考阿里云文档《[辅助通道集成](https://help.aliyun.com/document_detail/434676.html)》
* 完成后保存厂商的AppId和AppKey

### 在移远开发者中心-Android 证书页面填写信息

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/push/push1.png">![image](/zh/appDevelop/oemapp/push/push1.png)</a>
