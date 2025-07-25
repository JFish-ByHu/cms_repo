# 效果呈现

## **一、设备上线**

此时烧写好程序的模组已经开始运行起来，可以通过QPYcom工具的 __交互__ 查看。用于在电脑端与设备端通信，下发命令让设备按照开发者的想法去工作，同时设备可以返回信息给电脑，用户在交互界面可以看到设备内部的运作情况。当交互界面反馈 __event: 2 0__ 事件代表着模组已经成功连接上平台。QPYcom交互界面如图下所示。


<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-09.png">![img](/zh/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-09.png)</a>


此时在开发者中心可查看设备状态已上线。平台显示效果如下图所示。


<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-15.png">![img](/zh/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-15.png)</a>

## __二、在线设备调试__

 <span style="color:#999AAA">提示：设备在线调试主要用于辅助开发者完成设备功能调试，包含属性调试以及一些服务调试，调试期间请保证设备正常在线。</span>
 
根据智能香薰机实际项目需求拟定物模型功能，预添加物模型如下表所示。

|功能ID| 功能类型 |   功能名称   | 数据格式 | 读写类型 |                             单位                              |
|:------:| :------: | :----------: | :------: | :------: | :-----------------------------------------------------------: |
|1|   属性   | 精油当前容量 |  FLOAT   |   只读   |                              ML                               |
|2|   属性   | 定时上报频率 |   INT    | 可读可写 |                              秒                               |
|3|   属性   |   开关状态   |   BOOL   |   只读   |                 true：开启；<br>false：关闭；                 |
|4|   事件   | 精油不足告警 |   BOOL   |    --    |              true：告警； <br> false：告警恢复；              |
|5|   属性   | 香薰机运行模式 |   ENUM   |    读写   |            1：工作模式一；<br> 2：工作模式二；<br>3：工作模式三；    |
|6|   服务   | 设置工作模式 |   ENUM   |    --    | 输出参数：ID 5 |

__1、查看数据日志__

查看通信日志，可以看到终端设备每隔30秒上传一次精油剩余容量到开发者中心。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-10.png">![img](/zh/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-10.png)</a>

__2、读取当前属性值__

单击某个属性 __读取__ ，平台将向设备端下发读取指令。您也可以实时查看通信日志，确认下发数据情况及设备端上报数据情况。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-11.png">![img](/zh/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-11.png)</a>

__3、服务调用__

根据物模型功能定义的 __设备调试__ > __服务调用__，模拟远程下发控制命令场景，在设备调试中，选择服务：__设置工作模式__ ，命令参数设置为：__模式二__ ，单击 __发送指令__ ，我们可以看到终端设备已接收开发者中心下发的服务。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-12.png">![img](/zh/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-12.png)</a>


此时设备端已接收回调事件与服务数据。QPYcom交互界面如图下所示。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-13.png">![img](/zh/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-13.png)</a>


__4、告警事件日志__

 查看 __事件日志__，可查看到终端设备产生告警后会主动上报告警事件到平台。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-14.png">![img](/zh/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-14.png)</a>

