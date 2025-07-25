# 制作iOS证书

本文介绍如何制作 iOS 证书，帮助您完成 OEM App 的上架配置。

## 准备工作

1. 您需要 [注册并加入 Apple Developer Program](https://developer.apple.com/cn/support/enrollment/)，才能在 App Store 上架应用。
2. 请准备一台 macOS 系统的电脑，用于证书制作。

## 创建 App ID

1. 登录 [Apple Developer](https://developer.apple.com/account/)，选择 Certificates, Identifiers & Profiles 选项。<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/cert1.png">![image](/zh/appDevelop/oemapp/cert/cert1.png)</a>
2. 选择 Identifiers，点击 +<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/cert2.png">![image](/zh/appDevelop/oemapp/cert/cert2.png)</a>
3. 选择 App IDs，点击 Continue。<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/cert3.png">![image](/zh/appDevelop/oemapp/cert/cert3.png)</a>
4. 在 Description 栏填写描述，例如您的应用英文名称。在 Bundle ID 栏选择 Explicit ，并填写您的应用包名。<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/cert4.png">![image](/zh/appDevelop/oemapp/cert/cert4.png)</a>

在 Capabilities 列表中勾选以下内容：



```
Access WiFi Information
Associated Domains
Push Notifications
Sign In with Apple、Enable as a primary App ID（可选）
```

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/cert5.png">![image](/zh/appDevelop/oemapp/cert/cert5.png)</a>

```
注意：
如果您的应用包含增值服务，则需要额外开启其他的权限。
```

5. 点击 Continue，确认信息无误后点击 Register。 如果系统提示“An App ID with Identifier ‘com.xxx.xxx’ is not available. Please enter a different string.”，说明包名已被占用。请点击 Back，返回上一步，更换包名。

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/cert6.png">![image](/zh/appDevelop/oemapp/cert/cert6.png)</a>

6. 如果没有错误提示，App ID 显示在列表中，那么 App ID 创建完成。

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/cert7.png">![image](/zh/appDevelop/oemapp/cert/cert7.png)</a>

## 创建 CSR 文件（.certSigningRequest 格式）

1. 打开 macOS 系统的 钥匙串访问 应用，然后点击菜单栏 钥匙串访问 > 证书管理 > 从证书颁发机构请求证书。<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/cert9.png">![image](/zh/appDevelop/oemapp/cert/cert9.png)</a>
2. 用户电子邮件地址 填写您的常用邮箱，常用名称 填写您的名称，选择 存储到磁盘，然后点击 继续。<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/cert10.png">![image](/zh/appDevelop/oemapp/cert/cert10.png)</a>
3. 保存 CertificateSigningRequest.certSigningRequest 文件至本地，完成 CSR 文件创建。

## 创建应用发布证书（.p12 格式）



```
注意:
如果您的账号下有多个应用，可以使用同一个应用发布证书，不需要多次创建。多次创建会带来不必要的麻烦。
```

1. 打开 Certificates, Identifiers & Profile 页面，选择 Certificates ，点击 +。<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/cert11.png">![image](/zh/appDevelop/oemapp/cert/cert11.png)</a>
2. 选择 iOS Distribution (App Store and Ad Hoc) ，点击 Continue。



```
注意：
如果无法选择，提示证书数量超过限制，请返回上一页，删除多余的证书。删除证书不会影响已上架应用的正常使用。证书只在应用构建和上传阶段会使用。
```

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/cert12.png">![image](/zh/appDevelop/oemapp/cert/cert12.png)</a>

3. 点击 Choose File，选择刚才生成的 CSR 文件，点击 Continue。<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/cert13.png">![image](/zh/appDevelop/oemapp/cert/cert13.png)</a>
4. 点击 Download，下载 ios_distribution.cer 文件到本地，双击文件，导入到钥匙串。



```
注意:
.cer 文件需要导入到钥匙串之后，才能导出为 .p12 文件，请继续完成下一步。
```

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/cert14.png">![image](/zh/appDevelop/oemapp/cert/cert14.png)</a>

5. 打开 钥匙串访问 应用，在 种类 栏目选择 我的证书，找到导入的证书，右键选择 导出证书。

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/cert15.png">![image](/zh/appDevelop/oemapp/cert/cert15.png)</a>

6. 存储为 应用发布证书.p12，文件格式选择 个人信息交换(.p12)，点击 存储。

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/cert16.png">![image](/zh/appDevelop/oemapp/cert/cert16.png)</a>

7. 为应用发布证书创建一个密码，并记录下来。点击 好，保存应用发布证书。

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/cert17.png">![image](/zh/appDevelop/oemapp/cert/cert17.png)</a>

## 创建应用推送证书（.p12 格式）

与应用发布证书不同，如果您的账号下存在多个应用，那么每个应用都需要创建应用推送证书。

1. 打开 Certificates, Identifiers & Profile 页面，选择 Certificates，点击 +。

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/cert18.png">![image](/zh/appDevelop/oemapp/cert/cert18.png)</a>

2. 选择 Apple Push Notification service SSL (Sandbox & Production)，点击 Continue。

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/cert19.png">![image](/zh/appDevelop/oemapp/cert/cert19.png)</a>

3. 在 App ID 栏选择应用的包名，点击 Continue。

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/cert20.png">![image](/zh/appDevelop/oemapp/cert/cert20.png)</a>

4. 点击 Choose File，选择刚才生成的 CSR 文件，点击 Continue。

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/cert21.png">![image](/zh/appDevelop/oemapp/cert/cert21.png)</a>

5. 点击 Download，下载 aps.cer 文件到本地，双击文件，导入到钥匙串。



```
注意：
.cer 文件需要导入到钥匙串之后，才能导出为 .p12 文件，请继续完成下一步。
```

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/cert22.png">![image](/zh/appDevelop/oemapp/cert/cert22.png)</a>

6. 打开 钥匙串访问 应用，在 种类 栏目选择 我的证书，找到导入的证书，右键选择 导出证书。

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/cert23.png">![image](/zh/appDevelop/oemapp/cert/cert23.png)</a>

7. 存储为 应用推送证书.p12，文件格式选择 个人信息交换(.p12)，点击 存储。

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/cert24.png">![image](/zh/appDevelop/oemapp/cert/cert24.png)</a>

8. 为应用推送证书创建一个密码，并记录下来。点击 好，保存应用推送证书。

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/cert25.png">![image](/zh/appDevelop/oemapp/cert/cert25.png)</a>

## 创建应用配置文件（.mobileprovison 格式）

1. 打开 Certificates, Identifiers & Profile 页面，选择 Profiles ，点击 +。

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/cert26.png">![image](/zh/appDevelop/oemapp/cert/cert26.png)</a>

2. 选择 App Store ，点击 Continue。

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/cert27.png">![image](/zh/appDevelop/oemapp/cert/cert27.png)</a>

3. 选择应用包名，点击 Continue。

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/cert28.png">![image](/zh/appDevelop/oemapp/cert/cert28.png)</a>

4. 选择之前创建的应用发布证书，点击 Continue。



```
注意:
如果页面中出现多个证书，可以通过证书过期时间来区分。证书有效期为 1 年。如果无法区分，建议返回至证书列表页，删除多余的证书，重新开始此步骤。如果此步骤选择错误，将会导致应用无法构建。
```

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/cert29.png">![image](/zh/appDevelop/oemapp/cert/cert29.png)</a>

5. Provisioning Profile Name 填写您的App名称，点击 Generate。

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/cert30.png">![image](/zh/appDevelop/oemapp/cert/cert30.png)</a>

6. 点击 Download，下载配置文件，完成文件创建。

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/cert/cert31.png">![image](/zh/appDevelop/oemapp/cert/cert31.png)</a>

## 注意事项

1. 应用证书在上传完成之后，需要重新构建 App 才会生效。
2. 推送证书有效期为 1 年，过期后 App 推送会无法使用。重新制作并上传证书即可，不需要重新构建 App。


<style>

  p a img {
   max-height:400px;
  }

</style>