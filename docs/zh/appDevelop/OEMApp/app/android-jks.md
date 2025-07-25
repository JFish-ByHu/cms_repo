# 制作Android证书

本文介绍如何制作Android证书，帮助您完成 OEM App 的上架配置。

## 准备工作

1. 安装Java环境；
2. 安装Android Studio；

## 两种方式

- 通过 `keytool`(Key and Certificate Management Tool)在终端直接生成；
- 通过Android Studio生成；

###### 方式一

- 在终端输入 `keytool -genkey -alias test -keyalg RSA -validity 10000 -keystore test3.jks`；

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/1675326904346.png">![image](/zh/appDevelop/oemapp/cert/1675326904346.png)</a>

查看jks证书信息，在终端输入 `keytool -v -list -keystore test3.jks`。

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/1675327380242.png">![image](/zh/appDevelop/oemapp/cert/1675327380242.png)</a>

###### 方式二

1. 打开 `AndroidStudio`,点击 `Build` -> `Generate Singed Bundle or APK`；

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/1675326997464.png">![image](/zh/appDevelop/oemapp/cert/1675326997464.png)</a>

2. 在 `Generate Singed Bundle or APK` 选中 `APK`,点击 `Next`；

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/1675327025545.png">![image](/zh/appDevelop/oemapp/cert/1675327025545.png)</a>

3. 点击 `Create new...`进入创建jks证书页面；

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/1675327040505.png">![image](/zh/appDevelop/oemapp/cert/1675327040505.png)</a>

4. 填写证书名称、别名、密码等信息，然后点击 `OK`按键，要记住密码、别名和别名密码等信息；

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/1675327061378.png">![image](/zh/appDevelop/oemapp/cert/1675327061378.png)</a>

5. Android jks证书已经创建完成，点击 `Cancel`取消App构建，在当前目录下就可以看到test.jks证书。

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/1675327076420.png">![image](/zh/appDevelop/oemapp/cert/1675327076420.png)</a>

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/1675327238798.png" style="width:500px;">![image](/zh/appDevelop/oemapp/cert/1675327238798.png)</a>


<style>

  p a img {
   max-height:400px;
  }

</style>