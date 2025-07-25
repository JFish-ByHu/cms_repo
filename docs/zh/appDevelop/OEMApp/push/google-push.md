# 配置Google推送服务

#### 登录Firebase控制台[https://console.firebase.google.com/](https://console.firebase.google.com/)


<a data-fancybox title="img" href="/zh/appDevelop/oemapp/push/googlepush101.png">![image](/zh/appDevelop/oemapp/push/googlepush101.png)</a>

#### 创建 Firebase 项目

您需要先创建一个要关联到您的 App应用的 Firebase 项目，然后才能将 Firebase 添加到该应用。执行以下操作创建一个新项目：输入名称 -> 配置 Google Analytics 分析 -> 创建项目（如果您已有项目，可跳过此步骤）。

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/push/googlepush102.png">![image](/zh/appDevelop/oemapp/push/googlepush102.png)</a>

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/push/googlepush103.png">![image](/zh/appDevelop/oemapp/push/googlepush103.png)</a>

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/push/googlepush104.png">![image](/zh/appDevelop/oemapp/push/googlepush104.png)</a>

#### Android配置文件google-service.json

1. 在项目概览页面的中心位置，点击 **Android** 图标 (**plat_android**) 启动设置工作流;（如果您已向 Firebase 项目添加了应用，请点击“**添加应用**”以显示平台选项。）
2. 在 **Android 软件包名称**字段中输入应用的软件包名称(即包名);
3. （可选）输入其他应用信息：**应用别名**和**调试签名证书 SHA-1** ，详情可参考[《制作安卓证书》](/appDevelop/OEMApp/app/android-jks);
4. 点击**注册应用**；
5. 点击**下载 google-services.json** 以获取 Firebase Android 配置文件。

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/push/googlepush105.png">![image](/zh/appDevelop/oemapp/push/googlepush105.png)</a>

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/push/googlepush106.png">![image](/zh/appDevelop/oemapp/push/googlepush106.png)</a>

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/push/googlepush107.png">![image](/zh/appDevelop/oemapp/push/googlepush107.png)</a>

或者在【项目设置】查看应用是否存在，若存在，直接在项目下载google-service.json文件。

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/push/googlepush108.png">![image](/zh/appDevelop/oemapp/push/googlepush108.png)</a>

#### IOS配置文件**GoogleService-Info.plist**

1. 在项目概览页面的中心位置，点击 **iOS+** 图标，启动设置工作流；
2. 在**软件包 ID** 字段中输入应用的软件包 ID(即包名)；
3. （可选）输入其他应用信息：**应用别名**和  **App Store ID** ；
4. 点击**注册应用**；
5. 点击 **下载 GoogleService-Info.plist** ，获取 Firebase Apple 平台配置文件。

#### Firebase官方参考资料[Firebase](https://firebase.google.com/docs/ios/setup?hl=zh-cn)
