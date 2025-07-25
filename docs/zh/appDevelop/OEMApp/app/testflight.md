# 使用TestFlight测试iOS App

您可以通过[TestFlight](https://developer.apple.com/cn/testflight)测试APP，这是苹果官方提供的帮助开发者测试Beta版App的应用。开发者可以通过发送邮件或公开链接邀请你想要一起参与测试的人来一起测试应用,并可以统一收集反馈信息,来更好的改善应用质量。

## TestFlight 测试APP步骤
1. 创建一个新应用，在App Store Connect中创建一个新应用；
2. 上传自己的包到App Store Connect；
3. 管理测试人员，建议配置外部测试链接，流程比较简便；
4. 提交应用审核，一般需要一天的审核时间，但是一个版本审核通过，后面可以继续提交，不需要再审核了；
5. 下载TestFlight APP, 安装测试。

## 创建一个新应用

可以参考 [iOS应用发布 – 创建APP](ios-app-store)

## 上传ipa到App Store Connect

### 方法1：通过Transporter上传

可以参考 [iOS 应用发布 – 通过Transporter上传](ios-app-store)

### 方法2：通过App Store Connect密钥自动上传

打开[App Store Connect](https://appstoreconnect.apple.com/)

1. 在首页上，点按“用户和访问”;

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/testflight/tf2.png">![image](/zh/appDevelop/oemapp/testflight/tf2.png)</a>

2. 点按“密钥”并选择 App Store Connect API, 然后点按“添加”按钮（+）

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/testflight/tf1.png">![image](/zh/appDevelop/oemapp/testflight/tf1.png)</a>

3. 请输入该密钥的名称`YOUR-KEY-NAME`，该名称仅供您参考，不属于密钥本身；在“访问”一栏中，选择职能权限来决定该 API 用于何处。API 密钥适用于所有 App——无法限制 API 密钥对 App 的访问权限。这里推荐选择“管理”, 然后请点按“生成”。

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/testflight/tf3.png">![image](/zh/appDevelop/oemapp/testflight/tf3.png)</a>

```
注意:
API 密钥一旦生成，您将无法编辑其名称或访问权限级别。如需进行更改，请撤销该 API 密钥并生成新的 API 密钥。
```

4. 下载密钥

   密钥只能下载一次。如果你目前尚未准备好下载密钥，可以点按“取消”，稍后再下载。请确保妥善保存密钥备份。

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/testflight/tf4.png">![image](/zh/appDevelop/oemapp/testflight/tf4.png)</a>

以上步骤完成后，您可以得到Issuer ID, 密钥ID, 下载好的密钥文件


## 配置TestFlight外部链接进行测试

1. 上传完APP包可以打开TestFlight, 选择`缺少出口合规证`管理，然后选择`不属于上述的任意一种算法`

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/testflight/tf11.png">![image](/zh/appDevelop/oemapp/testflight/tf11.png)</a>

2. APP的状态会变成`正在等待审核`, 然后选择`外部测试`, 创建外部测试组

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/testflight/tf5.png">![image](/zh/appDevelop/oemapp/testflight/tf5.png)</a>

3. 输入外部测试组名称, 点击创建

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/testflight/tf6.png">![image](/zh/appDevelop/oemapp/testflight/tf6.png)</a>

4. 进入APP，输入测试内容

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/testflight/tf7.png">![image](/zh/appDevelop/oemapp/testflight/tf7.png)</a>

5. 添加刚刚创建的分组, 然后点击存储，提交审核

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/testflight/tf8.png">![image](/zh/appDevelop/oemapp/testflight/tf8.png)</a>

```
审核时间大概一天左右，请耐心等待
一个版本审核通过，后面可以继续提交，不需要再审核了
```
6. 审核通过以后，进入测试组，`启动公开链接`

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/testflight/tf9.png">![image](/zh/appDevelop/oemapp/testflight/tf9.png)</a>

7. 会生成公开链接，把链接分享给测试人员即可

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/testflight/tf10.png">![image](/zh/appDevelop/oemapp/testflight/tf10.png)</a>

```
可以设置测试人员的上限，上限最高是10000
```

## 下载TestFlight

手机上下载TestFlight app: [https://apps.apple.com/us/app/testflight/id899247664](https://apps.apple.com/us/app/testflight/id899247664)。点击外部链接，就可以下载安装测试APP了

