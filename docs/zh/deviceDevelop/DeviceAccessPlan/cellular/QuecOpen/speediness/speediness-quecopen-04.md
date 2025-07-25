<!--
 * @Author: mack.zhang@quectel.com mack.zhang@quectel.com
 * @Date: 2024-11-15 15:11:01
 * @LastEditors: mack.zhang@quectel.com mack.zhang@quectel.com
 * @LastEditTime: 2024-11-15 15:20:49
 * @FilePath: \quec-doc-web\docs\zh\DeviceDevelop\DeviceAccessPlan\cellular\QuecOpen\speediness\speediness-quecopen-04.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# 效果呈现

## **一、设备上线**
### **1、设备上线**

将程序烧写进模组里，模组会根据代码步骤自动连接到平台。模组连接到平台后会自动在该产品下添加本机设备，并且 __自动认证__。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-08.png">![img](/zh/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-08.png)</a>

### **2、打开设备调试**
当模组成功连接到开发者中心后，您可进入设备控制台进行设备调试。

__产品管理__ 点击待接收数据的设备对应操作栏中的 __查看__ 按钮， 进入 __产品信息__ 后再点击 __设备调试__ 可进行在线调试物模型业务数据。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-09.png">![img](/zh/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-09.png)</a>

## **二、在线设备调试**
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

### __1、查看数据日志__

查看通信日志，可以看到终端设备每隔30秒上传一次精油剩余容量到开发者中心。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-10.png">![img](/zh/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-10.png)</a>

### __2、读取当前属性值__

单击 __批量读取__ 或选择单个属性 __读取__ ，平台将向设备端下发读取指令。您也可以实时查看通信日志，确认下发数据情况及设备端上报数据情况。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-11.png">![img](/zh/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-11.png)</a>

### __3、服务调用__

根据物模型功能定义的 __设备调试__ > __服务调用__，模拟远程下发控制命令场景，在设备调试中，选择服务：__设置工作模式__ ，命令参数设置为：__模式二__ ，单击 __发送指令__ ，我们可以看到终端设备已接收开发者中心下发的服务。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-12.png">![img](/zh/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-12.png)</a>

### __4、告警事件日志__

查看 __事件日志__，可查看到终端设备产生告警后会主动上报告警事件到平台。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-13.png">![img](/zh/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-13.png)</a>

