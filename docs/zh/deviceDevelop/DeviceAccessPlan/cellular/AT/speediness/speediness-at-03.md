# 快速连接 IOT 平台

## __一、 测试通讯__

通过 __移远MCU仿真工具__ 发送 __“AT”__ 到模组测试AT指令功能是否正常，当串口工具打印 __“OK”__ 返回值时，表示您的设备已成功与PC端通讯成功。MCU仿真工具交互示例如下图所示。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-04.png">![img](/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-04.png)</a>

## __二、初始化配置__

如果是初次连接开发者中心，在此之前您还需要完成初始化配置。

__1.配置PK、PS__

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-06.png">![img](/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-06.png)</a>

__2.添加产品信息__

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-07.png">![img](/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-07.png)</a>

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-08.png">![img](/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-08.png)</a>

* __ProductKey__：创建产品生成的 ProductKey。
* __ProductSecret__：创建产品生成的 ProductSecret。
* __数据格式__：分别为 __物模型__ 与 __透传__ 两种数据格式，选择产品相对应的数据格式即可。
* __功能定义文件__：可选择 __自动获取__ 或者 __导入本地文件__；
    * 自动获取：可根据产品创建的 __数据服务中心__ 点击 __自动获取__ 。
    * 导入本地文件：打开 __开发者中心__ ，在 __功能定义__ 下，点击 __功能导出__ 按钮即可导出 __Json格式的物模型TSL文件__ 到本地，点击 __导入文件__ 按钮并选择导出的 __物模型TSL文件__ 。

<span style="color:#999AAA">提示：数据格式选择透传时则无此步骤。</span>

__3.发送产品配置信息指令__

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-09.png">![img](/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-09.png)</a>

<span style="color:#999AAA">如无特别要求暂且不需要修改其他配置。</span>

## __三、连接开发者中心__

__1.启动连接操作__

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-10.png">![img](/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-10.png)</a>

__2.连接成功响应__
当串口工具打印以下返回值时，表示您的设备已成功接入到平台，此时您的设备便可与平台通信了。


<span style="color:#999AAA">提示：WiFi品类设备需要借助app进行配网。</span>

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-11.png">![img](/zh/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-11.png)</a>
