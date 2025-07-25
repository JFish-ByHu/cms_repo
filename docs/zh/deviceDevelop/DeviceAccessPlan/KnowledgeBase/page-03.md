# CATStudio抓包步骤

本章节指导开发者使用此抓包工具对移远模组进行抓包处理，可通过该日志包分析出问题原因。

## 1. 安装驱动
双击运行 __setup.exe__，然后一直点击下一步，直到安装成功即可。

<a data-fancybox title="img" href="/zh/deviceDevelop/KnowledgeBase/step1.png">![img](/zh/deviceDevelop/KnowledgeBase/step1.png)</a>

安装完毕后检查一下电脑设备管理器里面端口一栏中，是否有 __DIAG Port__ 端口。

<a data-fancybox title="img" href="/zh/deviceDevelop/KnowledgeBase/step2.png">![img](/zh/deviceDevelop/KnowledgeBase/step2.png)</a>



### 2. 打开软件，选择online（在线抓取日志）
双击运行 __CATStudio.exe__，在打开的窗口选择 __Generic Target Online__ 模式。

<a data-fancybox title="img" href="/zh/deviceDevelop/KnowledgeBase/step3.png">![img](/zh/deviceDevelop/KnowledgeBase/step3.png)</a>
 
### 3. 配置日志抓取端口
点击 __Device Communication__。

<a data-fancybox title="img" href="/zh/deviceDevelop/KnowledgeBase/step4.png">![img](/zh/deviceDevelop/KnowledgeBase/step4.png)</a>

勾选 __Device1（Quectel USB DIAG Port）__，然后点击旁边的 __Setting__。

<a data-fancybox title="img" href="/zh/deviceDevelop/KnowledgeBase/step5.png">![img](/zh/deviceDevelop/KnowledgeBase/step5.png)</a>

将端口设置为 __DIAG Port__，然后点击OK

<a data-fancybox title="img" href="/zh/deviceDevelop/KnowledgeBase/step6.png">![img](/zh/deviceDevelop/KnowledgeBase/step6.png)</a>

再点击 __Logger__。

<a data-fancybox title="img" href="/zh/deviceDevelop/KnowledgeBase/step7.png">![img](/zh/deviceDevelop/KnowledgeBase/step7.png)</a>

点击 __Update__。

<a data-fancybox title="img" href="/zh/deviceDevelop/KnowledgeBase/step8.png">![img](/zh/deviceDevelop/KnowledgeBase/step8.png)</a>

在弹出的窗口中，先勾选 __MDB__，然后依次配置好 __DIAG.mdb__、__NVM.mdb__、 __TxDB.txt__ 三个文件，三个文件位于固件包下的 __DBG__ 目录下。导入后点击 __Import__，等待文件配置成功，点击 __UpdateAll__，然后 __Close__。

<a data-fancybox title="img" href="/zh/deviceDevelop/KnowledgeBase/step9.png">![img](/zh/deviceDevelop/KnowledgeBase/step9.png)</a>

<a data-fancybox title="img" href="/zh/deviceDevelop/KnowledgeBase/step10.png">![img](/zh/deviceDevelop/KnowledgeBase/step10.png)</a>

<a data-fancybox title="img" href="/zh/deviceDevelop/KnowledgeBase/step11.png">![img](/zh/deviceDevelop/KnowledgeBase/step11.png)</a>

<a data-fancybox title="img" href="/zh/deviceDevelop/KnowledgeBase/step12.png">![img](/zh/deviceDevelop/KnowledgeBase/step12.png)</a>

### 4. 保存日志文件
点击工具栏 __Log__，然后选择 __Export Log-File__。

<a data-fancybox title="img" href="/zh/deviceDevelop/KnowledgeBase/step13.png">![img](/zh/deviceDevelop/KnowledgeBase/step13.png)</a>

在弹出的窗口选择好存放路径，点击 __Output__即可。

<a data-fancybox title="img" href="/zh/deviceDevelop/KnowledgeBase/step14.png">![img](/zh/deviceDevelop/KnowledgeBase/step14.png)</a>

然后在路径下可以看到我们抓取到的日志文件。

<a data-fancybox title="img" href="/zh/deviceDevelop/KnowledgeBase/step15.png">![img](/zh/deviceDevelop/KnowledgeBase/step15.png)</a>

