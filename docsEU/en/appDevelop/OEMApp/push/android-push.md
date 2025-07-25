# Configure Alibaba Cloud Push Service

This section introduces how to configure the push service of an OEM app on Alibaba Cloud.

### Prerequisite

* You have registered an Alibaba Cloud account.

## Enable App Push Service on Alibaba Cloud

1. Log in to [Alibaba Cloud Console](https://homenew.console.aliyun.com/home/dashboard/?spm=a2c4g.11186623.0.0.bd495ab2kpRQjH).
2. Hover over ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5641254361/p339821.jpg) in the upper left corner, then open the product and service list under "**Products and Services**".
3. In the product list, select "**Multiexperience Development Platform**" in the "Enterprise Services & Cloud Communication" column.
      <a data-fancybox title="img" href="/en/appDevelop/oemapp/push/push2.png">![image](/en/appDevelop/oemapp/push/push2.png)</a>
4. On the product introduction page, check the service agreement and click "**Activate Now**".

## **Native App Development Process**

### **Create Project**

**Note** – You can skip this step if the product uses mobile testing service or is an HTTP DNS product.

The apps in the EMAS platform are mappings of your actual apps. You need to create an app in the EMAS console and associate it with the actual app where you want to load the SDK.

1. After the EMAS product is activated, enter the [EMAS Console](https://emas.console.aliyun.com/#/productList).

2. On the console homepage, click "**添加项目(Add Project)**" to open the "**创建项目(Create Project)**" sidebar.
   <a data-fancybox title="img" href="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5912902561/p209154.png">![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5912902561/p209154.png)</a>

3. In the "**创建项目(Create Project)**" sidebar, fill in the project's basic information.

   1) 项目名称(Project Name): Required. Length: 1–30 characters. Chinese characters, English uppercase and lowercase letters, numbers, and underscores are supported.

   2) 项目描述(Project Description): Optional. Introduce the purpose of the project.

4. Click a Native app to view the on/off status and associated data information for the following services in the right sidebar.

<a data-fancybox title="img" href="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0475518661/p516245.jpg">![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0475518661/p516245.jpg)</a>

### **Create Native App**

On the "**概览(Overview)** page, click "**添加应用(Add App)**" to pop up the "添加应用(Add App)" window.

1. Select "**Native**" for the "应用类型(App Type)" item and complete the other basic information.
   <a data-fancybox title="img" href="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5559737661/p511433.png">![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5559737661/p511433.png)</a>

| 2.                     | Item                                                                                                             | Description |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 应用名称(App Name)     | Length: 1–25 characters. Chinese characters, English uppercase and lowercase letters, and numbers are supported. |
| 应用类型(App Type)     | **Native** or **H5**.                                                                                            |
| 选择平台(Platform)     | Android or iOS.                                                                                                  |
| PackageName            | App package name. When "**选择平台(Platform)**" is set to "**Android**", this item will be displayed.            |
| BundleId               | Bundle ID. When "**选择平台(Platform)**" is set to "**iOS**", this item will be displayed.                       |
| 应用类型(App Category) | Category of the app, including social contact, photography & camera, and entertainment.                          |

3. After the configuration, click "**创建应用(Create App)**" to finish creating the app.

   Note: Each Alibaba Cloud account can create up to 30 apps by default. If the number of created apps reaches the limit, you can [submit a ticket](https://selfservice.console.aliyun.com/ticket/createIndex?spm=a2c4g.11186623.2.2.c53115faHTrfig) for capacity expansion.

4. After the app is successfully created, return to the "**概览(Overview)**" page to view the created app.

5. If you no longer need an app, click the <a data-fancybox title="img" href="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5912902561/p437333.png">![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5912902561/p437333.png)</a> icon on the right side of the app name, and click "**删除应用(Delete Application)**" on the "**应用设置(App Settings)**" page.

### **Download Configuration File**

1. Log in to the [EMAS Console](https://emas.console.aliyun.com/#/productList).
2. On the "**概览(Overview)**" page, click the <a data-fancybox title="img" href="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5912902561/p437333.png">![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5912902561/p437333.png)</a> icon on the right side of the app name and open the "**应用设置(App Settings)**" page.
   <a data-fancybox title="img" href="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5912902561/p209445.png">![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5912902561/p209445.png)</a>
3. On the "**应用设置(App Settings)**" page, select a Native app and set the SDK to get the AppKey and AppSecret of the app.
   <a data-fancybox title="img" href="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5559737661/p511503.png">![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5559737661/p511503.png)</a>

### Integrate Auxiliary Channels

* Please refer to [*辅助通道集成(Integrate Auxiliary Channels)*](https://help.aliyun.com/document_detail/434676.html) on Alibaba Cloud Documentation.
* After the integration, save the manufacturer's App ID and App Key.

### Complete Information on Developer Center – Android Certificate

<a data-fancybox title="img" href="/en/appDevelop/oemapp/push/push1.png">![image](/en/appDevelop/oemapp/push/push1.png)</a>
