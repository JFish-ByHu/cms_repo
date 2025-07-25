# 开发环境配置

## **概念说明**

__QuecPython SDK__ 是基于 __Micro Python__ 语言扩展实现，专门用于 __开发者中心__ 的嵌入式开发，适用于开发者自主开发设备业务逻辑接入 __开发者中心__。__QuecPython SDK__ 提供 __设备激活__、__业务数据上下行__ 和 __OTA__ 等基础业务接口封装，__SDK__ 不依赖具体设备平台及操作系统环境，仅需要支持 __MQTT__ 协议栈及提供 SDK 必要的系统依赖接口即可完成接入。


<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-01.png">![img](/zh/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-01.png)</a>

## **开发环境配置**
### __一、驱动安装__

__1、__ 进入<a href="https://iot.quectelcn.com/download?menuCode=MODULE_DEVL&resourceType=M" target="_blank">下载中心-驱动</a>页面下载与模组匹配的驱动。

__2、验证是否安装成功__

进入 __我的电脑__ >__管理__ >__设备管理器__ ，查看 __端口(COM 和 LPT)__ 项，查看是否存在 __AT Port__  、__DIAG Port__ 端口。

### __二、QPYcom图形化工具下载__

移远提供一个基于Windows界面工具 __QPYcom 图形化工具__ ，给予开发者更高效的 __开发且调试__ 。进入 __<a href="https://iot.quectelcn.com/download?menuCode=DEBUG_UTIL&resourceType=C" target="_blank">下载中心-调试工具</a>__ 点击 __调试工具__ 详情页可下载 __QPYcom图形化工具__ 。



### __三、烧写QthSDK脚本__

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-16.png">![img](/zh/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-16.png)</a>



__①、__ 在下载页面左侧导航栏创建项目。<br>
__②、__ 在 __usr__ 文件夹上右键点击 __新建文件夹__ ，新建 __Qth__ 文件夹。<br>
__③、__ 在 __Qth__ 文件夹上右键点击 __添加文件__ ，把QthSDK的所有脚本导入到 __Qth__ 文件夹。<br>
__④、__ 左键点击页面右下角 __倒三角形__，在弹出的菜单中选择 __下载脚本__ 菜单。<br>
__⑤、__ 点击 __下载脚本__ 按钮即可工具自动开始脚本烧写。

 __验证QthSDK脚本下载成功__

在工具中切换到文件浏览界面，如下图中能看到前面下载的QthSDK脚本在/usr/Qth目录下，即脚本下载成功。
<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-17.png">![img](/zh/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-17.png)</a>

