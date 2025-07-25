# 效果呈现

## __一、设备上线__

将固件和配置文件烧写进模组里，模组会根据配置文件中的配置信息自动连接到开发者中心。模组连接到开发者中心后，开发者中心会自动在该产品下添加本机设备，并且 __自动认证__。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/DTU_Modbus/Example-20.png">![img](/zh/deviceDevelop/develop/DTU_Modbus/Example-20.png)</a>


## __二、查看数据日志__

在设备详情 >数据日志页可以查看到终端设备规律的每隔60秒即向从机设备获取最新数据并发送至开发者中心。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/DTU_Modbus/Example-21.png">![img](/zh/deviceDevelop/develop/DTU_Modbus/Example-21.png)</a>


根据物模型功能定义的 __设备调试__ > __通讯日志__ 可以清晰的查看上传的温度值：25.68；湿度值：65.13。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/DTU_Modbus/Example-23.png">![img](/zh/deviceDevelop/develop/DTU_Modbus/Example-23.png)</a>

<span style="color:#999AAA">提示：DTU Modbus 零代码方案暂不支持平台侧主动读取数据。</span>

## __三、下发指令__

通过平台下发指令到DTU-Modbus设备，DTU设备进入回调函数处理且通过串口转换成Modbus协议发送给温湿度传感器。此时通过温湿度传感器已通过DTU设备接收到下发的时间戳与开关指令。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/DTU_Modbus/Example-22.png">![img](/zh/deviceDevelop/develop/DTU_Modbus/Example-22.png)</a>



