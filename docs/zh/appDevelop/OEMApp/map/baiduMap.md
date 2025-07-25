# 配置百度地图

#### 获取百度地图 SDK开发密钥，申请地址为：[https://lbs.baidu.com/apiconsole/key](http://lbsyun.baidu.com/apiconsole/key)

#### 若您未登录百度账号，请登录您的百度账号,如下图

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/map/baidumap1.png">![image](/zh/appDevelop/oemapp/map/baidumap1.png)</a>

（若您没有百度账号，点击右下角根据提示注册并登录）

#### 登录后将进入API控制台，如下图：

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/map/baidumap2.png">![image](/zh/appDevelop/oemapp/map/baidumap2.png)</a>

#### 点击“创建应用”开始申请开发密钥，如下图：

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/map/baidumap3.png">![image](/zh/appDevelop/oemapp/map/baidumap3.png)</a>

#### 填写应用名称，注意应用类型选择“Android SDK”、正确填写SHA1 和 程序包名，如图：

* 包名：在移远开发者中心获取
* SHA1：Android证书制作有相关说明

<a data-fancybox title="img" href="/zh/appDevelop/oemapp/map/baidumap4.png">![image](/zh/appDevelop/oemapp/map/baidumap4.png)</a>
* 填写清楚以上内容之后点击提交会为您生成该应用的AK，到这您就可以使用AK来完成您的开发工作了。 注意：同一个AK中，可以填写开发版SHA1和发布版SHA1，这样app开发、测试到发布整个过程中均不需要改动AK。此功能完全兼容以前的AK，默认将原有的SHA1放在发布版SHA1上，开发者也可自己更新，将原有的开发版本的AK和发布版本的AK对应的SHA1值合并后使用。
