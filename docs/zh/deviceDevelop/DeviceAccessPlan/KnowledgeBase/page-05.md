# 差分包制作（ASR芯片平台模组）

本章节指导开发者通过差分包制作工具制作ASR芯片平台模组的差分包，差分包可用作于OTA差分升级。

## 一、工具下载&使用
差分包制作工具可联系移远技术支持提供。
## 二、新旧固件配置
将 __新固件__、 __旧固件__ 解压生成的 __system image__ 文件放进 __adiff_3.2.exe__ 同级目录，并分别命名为 __system_new.img__ 、__system_old.img__ 。

## 三、运行脚本命令
1.在 __adiff_3.2.exe__ 目录下运行CMD终端，然后输入运行脚本命令生成差分包： 

* 若是 8M 模组
```c
adiff_3.2.exe  system_old.img system_new.img  system_patch.mini
```
* 若是 16M 模组
```c
adiff.exe -p system_old.img  system_new.img  system_patch.bin -l fs
```

<a data-fancybox title="img" href="/zh/deviceDevelop/KnowledgeBase/step27.png">![img](/zh/deviceDevelop/KnowledgeBase/step27.png)</a>

2.执行成功后，可以在当前目录中看见生成的差分包 8M (system_patch.mini_1 system_patch.mini_2)或16M（system_patch.bin），可使用该差分包上传到开发者中心进行OTA升级。



<span style="color:#999AAA">提示：生成的差分包名字 system_patch 可以更换，但是后缀不可修改。</span>

# 差分包制作（展锐芯片平台模组）

本章节指导开发者通过差分包制作工具制作展锐芯片平台模组的差分包，差分包可用作于OTA差分升级。
## 一、工具下载&使用
差分包制作工具可联系移远技术支持提供。
## 二、新旧固件配置
将新旧固件解压生成的.pac 文件放在dtools.exe 同级目录，并且分别命名为new.pac、old.pac。

## 三、运行脚本命令
1.在 __dtools.exe__ 目录下运行CMD终端，然后输入运行脚本命令：    
```c
dtools.exe fotacreate2 --pac new.pac,old.pac,setting\fota8910.xml output.pack -d v  
```

如下图所示。

<a data-fancybox title="img" href="/zh/deviceDevelop/KnowledgeBase/step30.png">![img](/zh/deviceDevelop/KnowledgeBase/step30.png)</a>

2.若生成成功后，可以该目录下看见生成的差分包 __output.pack__，可使用该差分包上传到开发者中心进行OTA升级。



<span style='color:#999AAA'>提示：生成的差分包名字 __output__ 可以更换，但是后缀不可修改。</span>