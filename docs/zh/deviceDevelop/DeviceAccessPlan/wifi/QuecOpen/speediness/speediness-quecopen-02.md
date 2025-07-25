# 开发环境配置

## __概念说明__

__QuecOpen__ 主要是一种以模块作为 __主处理器__ 的应用方式，亦可以作为 __从模块__ 。采用 __QuecOpen__ 解决方案，可以 __简化开发者对物联网应用的开发流程__，__精简硬件结构设计__，从而 __降低产品成本__。__QuecOpen__ 接入方案的 __SDK__ 采用 模块化设计 ，分离核心协议服务 与 硬件抽象层，并提供灵活的配置选项和多种编译方式，适用于不同设备的开发平台和使用环境。


<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-01.png">![img](/zh/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-01.png)</a>


## __一、开发环境准备__
## 获取SDK及模组资料


点击<a href="https://iot.quectelcn.com/download?menuCode=MODULE_DEVL&resourceType=M" target="_blank">下载中心-SDK</a>下载模组SDK及模组资料，若无SDK则联系移远FAE获取。

## __二、安装驱动__

以 __FC41D__ 模组为例，介绍如何安装移远通信模块的USB驱动。可联系移远通信技术支持获取USB驱动或进入<a href="https://iot.quectelcn.com/download?menuCode=MODULE_DEVL&resourceType=M" target="_blank">下载中心-驱动</a>下载 USB驱动。

__1、安装驱动__
双击打开驱动包开始安装，选择安装目录，点击 __Next>__ 即可完成安装

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-02.png">![img](/zh/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-02.png)</a>


__2、验证是否安装成功__

将PC与开发板连接，打开PC设备管理器可查看对应的驱动是否安装成功，查看 端口(COM 和 LPT) 项，若如下图所示设备即表示安装成功。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-03.png">![img](/zh/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-03.png)</a>
 
## __三、编译环境配置__

__1、下载并安装VSCode__

__2、安装及配置Ubuntu 20.04 LTS__

__3、安装编译工具__
* 在终端窗口执行如下命令安装 GCC 编译器
    > sudo apt-get install gcc


* 在终端窗口执行如下命令安装 make 命令行工具
    > apt-get install make

__4、添加环境变量__

将编译链 arm-none-eabi-gcc 解压到 Ubantu 文件系统目录/usr/bin 下执行。

**①.** 在终端窗口执行 vim ~/.bashrc 命令进入.bashrc 文件。<br>
**②.**  在.bashrc 文件最后加入export PATH=$PATH:/usr/bin/gcc-arm-none-eabi-5_4-2016q3/bin。<br>
**③.** 执行 source ~/.bashrc 加载.bashrc 文件中修改过的配置，使之生效。

__5、安装相关库__

* 执行如下命令安装库 lib32ncurses5-dev 和 lib32z1-dev lsb-core
    > sudo apt-get install lib32ncurses5-dev lib32z1-dev lsb-core

__6、校验是否安装成功__

* 安装成功后，执行如下命令查询 arm-none-eabi-gcc 版本
    > arm-none-eabi-gcc -v


<span style="color:#999AAA">提示：环境配置仅供参考。</span>

  
