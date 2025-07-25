# 程序编码

## __一、QuecThing初始化__

QuecThing SDK 提供读写设备信息的接口及参考实现，可根据具体的实际情况进行适配。设备发送引导认证操作时，开发者中心对其携带的PK、PS进行认证，认证通过，下发该设备接入所需信息。设备再携带这些信息与开发者中心建立连接。
```c
/* 初始化QuecThing SDK */
Qth_devInit();
/* 设置模组版本号 */
Qth_configSetModuleVer("v1.0.0");
/* 注册事件回调函数 */
Qth_eventCb_t event_cb = {0};
Qth_otaEventCb_t otaCb = {0};
otaCb.planCb = otaPlanCb;
otaCb.downloadCb = otaDownloadCb;
otaCb.resultCb = otaResultCb;
otaCb.sotaInfoCb = sotaInfoCb;
otaCb.sotaFileCb = sotaFileCb;
event_cb.devEventCb = devEventCb;
event_cb.ttlvRecvCb = ttlvRecvCb;
event_cb.ttlvReqCb = ttlvReqCb;
event_cb.transRecvCb = transRecvCb;
event_cb.otaEventCb = otaCb;
Qth_configSetEventCb(event_cb);
/* 启动平台连接 */
Qth_devStart();
```
## __二、事件回调处理接口__
__概述__
事件回调处理接口简单的说就是为事件源(组件)添加一个监听任务 __devEventCb()__ ，当用户触发了某件事件时，交给监听器去处理，开发者既可根据不同的事件来执行不同的操作。数据模板示例 __Ql_iotMain.c__ 已实现数据事件的通用处理框架，可以基于此示例开发业务逻辑。

事件回调函数则会判断事件Code进入相对应的逻辑处理程序，开发者只需要在 __devEventCb()__ 相应事件下作具体处理即可。事件回调函数主要分6个主事件：配网事件、路由器事件、IoT平台事件、重置设备事件、移除设备事件、进入静默事件。具体解析如下：

* 配网事件
	>配网相关事件回调，可查看设备配网成功与否及配网失败的错误代码，方便开发者根据相对应错误代码进行处理。

* 路由器事件
	>该事件回调连接路由器成功与否，在连接路由器时往往会有WIFI密钥不正确或找不到路由器等错误，开发者可根据相关错误代码进行处理。

* IoT平台事件
	>该事件回调连接IoT平台成功与否，在连接IoT平台时往往会有设备密钥不正确或网络异常等错误，开发者可根据相关错误代码进行处理。

* 重置设备事件
	>该事件回调设备重置成功与否。

* 移除设备事件
	>该事件回调设备移除成功与否，当设备在线时被用户从绑定列表中移除时，可以接收到该事件通知。

* 进入静默事件
	>该事件代表设备进入了静默状态，此时设备不再连接路由器和IoT平台。

例如当终端设备状态发生变化时，开发者可以在此事件回调进行事件处理。如图下：

```c
void devEventCb(Qth_devEvent_e event, oprt_ret result)
{
    Quos_logPrintf(APPS_OPEN, LL_DBG, "recv dev event, event:%u, result:%d", event, result);
    switch(event)
    {
        case QTH_DEV_EVENT_WIFI_CONFIG:
        if(OPRT_OK == result)
        {
            /* 配网成功 */
        }
        else
        {
            /* 配网失败 */
        }
        break;
        case QTH_DEV_EVENT_DMP_CONNECT:
        if(OPRT_OK == result)
        {
            /* 连接IoT平台成功 */
        }
        else
        {
            /* 连接IoT平台失败 */
        }
        break;
        /* ... */
        default:
        break;
    }
}
```
<span style='color:#999AAA'>提示：事件详情请参考[设备与平台交互 相关事件](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/InteractionEvent)。</span>


## __三、应用逻辑开发__

### __1、开启蓝牙配网功能__

可根据实际的项目需求拟定开启蓝牙配网功能，例如按下按键开启蓝牙配网功能。

* 示例代码如下所示：

    ```c
	Qth_wifiOpenNetcfg();	/* 开启蓝牙配网功能 */
    ```

	或者重置设备，解除设备与APP的绑定关系

	```c
	Qth_devReset();    /* 重置设备默认进入配网功能 */
	```

<span style="color:#999AAA">提示：WiFi功能缺省已打开Station模式。</span>
### __2、变量定义（可选）__

结构体是一种由用户自定义的特殊的复合型的 __数据类型__ ，开发者可根据在开发者中心的 __物模型模板__ 进行定义，这样会在代码工程中使程序结构清晰。另外，在此方式下，也可以根据需要在函数中新增该结构体类型变量。

* 示例代码如下所示：

    ```c
    typedef struct 
    {
        float         OilsCurrentCapacity;  /* 精油当前容量值 单位：ML*/
        quint32_t     ReportFrequency;		/* 上传时间频率 单位：秒*/
        qbool         PowerSwitch;			/*电源开关 0：关;1：开*/
        qbool         OilsLackWarning;		/* 精油不足告警 精油不足时主动上告给平台*/
        quint32_t     WorkPattern;			/* 设置香薰机工作模式 */
    }AromaDiffuser_type;  

	AromaDiffuser_type g_AromaDiffuser_st;
    ```
    
### __3、上行业务逻辑实现__


设备端可根据业务场景需求，对设备端数据属性采取一定的策略进行检测处理，例如设备端通过串口连接香薰机传感器将精油剩余容量值读取到结构体内，模组则需要将此时此刻读取到的精油剩余容量值上传到开发者中心。

* 示例代码如下所示：

	```c
	while (1)
    {
        /*每隔30秒上报一次精油当前容量*/ 
        void *ttlvHead = NULL;   
        /*精油当前容量值*/  
        Quos_ttlvAddIdFloat(&ttlvHead, 1, 50.6);
        /*第一个传参是QOS值，当值是1及以上时则会有事件回调响应*/
        Qth_cmdSendTsl(QTH_SEND_EXACTLY_ONCE,ttlvHead,NULL,NULL);
        Quos_ttlvFree(&ttlvHead);
        Qhal_system_sleepMs(30000);
    }
	```
<span style="color:#999AAA">注意：在添加物模型节点且调用完后，开发者请调用         Quos_ttlvFree() 函数，该函数会释放指针指向的一个内存块，从而避免内存泄漏等问题。</span>

### __4、下行业务逻辑实现__

服务端下行的数据，__QuecThing SDK__ 已按数据模板协议完成 TTLV 数据的解析，开发者只需根据不同的事件来开发下行业务逻辑。物模型是根据在平台定义的产品数据模板生成的模板结构体，由定义的各属性构成成员变量。入参 value 所指向的属性数据，从服务端下行数据中，__QuecThing SDK__  已经按数据模板协议完成了属性数据的解析，用户在下行逻辑处理的函数里，可直接使用解析完成的数据添加业务逻辑即可。


* 示例代码如下所示：

	```c
	/* 接收到IoT平台下发物模型数据回调函数 */
    void ttlvRecvCb(void *ttlvHead)
    {
        Quos_logPrintf(APPS_OPEN, LL_DBG, "recv ttlv write");
        /* 打印物模型数据 */
        Quos_ttlvHeadPrintf(ttlvHead);
        /* 测试，把收到的物模型数据回传到平台 */
        Qth_cmdSendTsl(QTH_SEND_EXACTLY_ONCE,ttlvHead,NULL,NULL);
    }
    /* 接收到IoT平台读取物模型数据回调函数 */
    void *ttlvReqCb(quint16_t id[], quint32_t idNum)
    {
        void *ttlvResp = NULL;
        quint32_t i = 0;
        Quos_logPrintf(APPS_OPEN, LL_DBG, "recv ttlv req, idNum:%u", idNum);
        Quos_logHexDump(APPS_OPEN, LL_DBG, "id", id, idNum * sizeof(quint16_t));
        for(i=0;i<idNum;i++)
        {
            quint16_t modelId = id[i];
            printf("modelId:%d\r\n",modelId);
            /* id1:Float id2:int id3:Bool */
            switch (modelId)
            {
                case 1:
                Quos_ttlvAddIdFloat(&ttlvResp, modelId, 23.6);/* 精油当前容量值 ML*/
                break;
                case 2:
                Quos_ttlvAddIdInt(&ttlvResp, modelId, 30);/* 上传时间频率 s*/
                break;
                case 3:
                Quos_ttlvAddIdBool(&ttlvResp, modelId, TRUE);/* 开关机状态 */
                break;
                default:
                break;
            }
        }
        /* 物模型数据应答 */
        return ttlvResp;
    }
	```
	


## __四、编译__

<span style='color:#999AAA'>__提示：不同型号模组的开发环境配置以及编译存在差异，具体模组详情咨询对应的技术支持__。</span>

<!-- 以 __FC41D__ 模组为例介绍编译步骤。

<span style="color:#999AAA">提示：编译说明基于/mnt/c/Users/mack.zhang/Desktop/下的应用环境。</span>

### __1、新建终端__ 

首先，我们要做的第一件事情就是打开或创建一个集成终端。最简单的方式就是按一下 __Ctrl + Shift+`__ 键，或者选择上页签点击 __终端__ > __新建终端__	，一个新的终端就被创建出来了。

### __2、进入bash__ 

bash 是 Unix 系统和 Linux 系统的一种 Shell（命令行环境），是目前绝大多数 Linux 发行版的默认 Shell。Bash 的基本用法就是在命令行输入各种命令，非常直观。作为练习，可以试着输入 __pwd__ 命令。按下回车键，就会显示当前所在的目录。

进入命令行环境以后，一般就已经打开 bash 了。如果你的 Shell 不是 bash，可以输入 __bash__ 命令启动 bash，如图下所示。

<a data-fancybox title="img" href="/zh/docs/QuecOpen/resource/speediness/Speediness-QuecOpen-05.png">![img](/zh/docs/QuecOpen/resource/speediness/Speediness-QuecOpen-05.png)</a>

<span style="color:#999AAA">提示：退出 bash 环境，可以使用 __exit__ 命令。</span>

### __3、make编译__ 

__make__ 是一个命令工具，是一个解释 __Makefile__ 中指令的命令工具， __make__ 命令执行时，需要一个 __Makefile__ 文件，以告诉 __make__ 命令需要怎么样的去编译和链接程序。在进入集成终端bash后，进入 __Makefile__ 当下的目录下并输入以下即可进行编译。

* 进入编译目录

<a data-fancybox title="img" href="/zh/docs/QuecOpen/resource/speediness/Speediness-QuecOpen-06.png">![img](/zh/docs/QuecOpen/resource/speediness/Speediness-QuecOpen-06.png)</a>

* 执行清空命令 
make clean 清除编译后生成的文件，如.cfg、.bin、.map、.log文件
	> make clean

* 执行编译命令
	> make all

 此时此刻，如果编译通过将会在当前路径自动形成 __output__ 的文件夹，在 __output__ 文件夹里面有个 __bk7231n_2M.1220_FC41DAAR12A10_QTH.bin的执行文件__，就代表着编译成功。 -->


## __五、烧写程序__

<span style='color:#999AAA'>__提示：不同型号模组的烧录方式以及工具存在差异，具体咨询对应的技术支持。__</span>

<!-- __1、下载烧写工具__

进入<a href="https://iot.quectelcn.com/download?menuCode=MODULE_DEVL" target="_blank">__烧录工具下载__</a>，点击进入指定模块的相关下载页面，找到烧写工具并下载。
 
__2、PC连接设备__

PC通过 __MicroUSB__ 线连接模组的 __M_UART_USB__ 串口。

__3、烧写工具使用__

我们打开 __Beken Writer烧写软件__ ，将生成的执行文件 __all_2M.1220.bin__ 烧写进模组里面，操作步骤如下图所示。

<a data-fancybox title="img" href="/zh/docs/QuecOpen/resource/speediness/Speediness-QuecOpen-07.png">![img](/zh/docs/QuecOpen/resource/speediness/Speediness-QuecOpen-07.png)</a>

__①、__ 选择连接模组的 __串口__ 与 __通讯波特率__ 。<br>
__②、__ 选择 __BK7231N__ 烧录对象。<br>
__③、__ 点击 __浏览(F5)__ 打开已生成的执行文件all_2M.1220.bin。<br>
__④、__ 点击 __烧录__ 按键及点击模组的 __复位__ 键复位模组。


<span style="color:#999AAA">注意：烧写过程中，要确保该端口不被占用。</span> -->




## <span id = "WiFi_demo">__六、Demo 设备例程__ </span>
### __主函数例程__

```c
void qth_main(void)
{
    Qth_eventCb_t event_cb = {0};
    Qth_otaEventCb_t otaCb = {0};
    Qth_mcuInfo_t mcuList[1] = {0};
    /* qthsdk 初始化 */
    Qth_devInit();
    /* 设置产品信息 */
    Qth_configSetProductInfo"p1xxxS", "VnhyxxxxxxxxSTFh");
    /* 设置MCU标识和版本号 */
    Quos_strcpy(mcuList[0].identity, "MCU1");
    Quos_strcpy(mcuList[0].version, "1.0.0");
    Qth_configSetMcuVer(mcuList, sizeof(mcuList) / sizeof(Qth_mcuInfo_t));
    /* 设置回调函数 */
    otaCb.planCb = otaPlanCb;
    otaCb.downloadCb = otaDownloadCb;
    otaCb.resultCb = otaResultCb;
    otaCb.sotaInfoCb = sotaInfoCb;
    otaCb.sotaFileCb = sotaFileCb;
    event_cb.devEventCb = devEventCb;
    event_cb.ttlvRecvCb = ttlvRecvCb;
    event_cb.ttlvReqCb = ttlvReqCb;
    event_cb.transRecvCb = transRecvCb;
    event_cb.otaEventCb = otaCb;
    Qth_configSetEventCb(event_cb);
    /* 启动平台连接 */
    Qth_devStart();

    while (1)
    {
        /* 获取当前工作状态 */
        Qth_devStatus_e status;
        Qth_devGetStatus(&status);
        if(QTH_DEV_STATUS_CONNECTED_DMP == status)
        {
            /*每隔30秒上报一次精油当前容量*/ 
            void *ttlvHead = NULL;   
			/*精油当前容量值*/  
			Quos_ttlvAddIdFloat(&ttlvHead, 1, 50.6);
			/*第一个传参是QOS值，当值是1及以上时则会有事件回调响应*/
			Qth_cmdSendTsl(QTH_SEND_EXACTLY_ONCE,ttlvHead,NULL,NULL);
			Quos_ttlvFree(&ttlvHead);
        }
        Qhal_system_sleepMs(30000);
    }
}
```
### __回调函数例程__
```c
/* NTP请求回调函数 */
void ntpDataCb(quint16_t pkgId, Qth_ntpInfo_t *ntpInfo)
{
    Quos_logPrintf(APPS_OPEN, LL_DBG, "recv ntp info, pkgId:%u", pkgId);
    Quos_logPrintf(APPS_OPEN, LL_DBG, "%04d-%02d-%02d %02d:%02d:%02d.%03d, %d, %s, "PRINTF_FORMAT_INT64,
                    ntpInfo->tm.tm_year, ntpInfo->tm.tm_mon, ntpInfo->tm.tm_mday, ntpInfo->tm.tm_hour, ntpInfo->tm.tm_min, ntpInfo->tm.tm_sec, ntpInfo->tm.tm_ms,
                    ntpInfo->tm.tm_week, ntpInfo->timezone, PRINTF_CONV_INT64(ntpInfo->timestamp));
    /* 更新本地时间戳 */
    Quos_timeSetUnix(ntpInfo->timestamp);
}
/* 设备事件回调函数 */
void devEventCb(Qth_devEvent_e event, oprt_ret result)
{
    Quos_logPrintf(APPS_OPEN, LL_DBG, "recv dev event, event:%u, result:%d", event, result);
    if(QTH_DEV_EVENT_DMP_CONNECT == event && OPRT_OK == result)
    {   
        /* 连接IoT平台成功后请求NTP时间 */
        Qth_ntpSetResultCb(ntpDataCb);
        Qth_ntpSendNtpReq(NULL, NULL);
    }
}
/* 接收到IoT平台下发物模型数据回调函数 */
void ttlvRecvCb(void *ttlvHead)
{
    Quos_logPrintf(APPS_OPEN, LL_DBG, "recv ttlv write");
    /* 打印物模型数据 */
    Quos_ttlvHeadPrintf(ttlvHead);
    /* 测试，把收到的物模型数据回传到平台 */
    Qth_cmdSendTsl(QTH_SEND_EXACTLY_ONCE,ttlvHead,NULL,NULL);
}
/* 接收到IoT平台读取物模型数据回调函数 */
void *ttlvReqCb(quint16_t id[], quint32_t idNum)
{
    void *ttlvResp = NULL;
    quint32_t i = 0;
    Quos_logPrintf(APPS_OPEN, LL_DBG, "recv ttlv req, idNum:%u", idNum);
    Quos_logHexDump(APPS_OPEN, LL_DBG, "id", id, idNum * sizeof(quint16_t));
    for(i=0;i<idNum;i++)
    {
        quint16_t modelId = id[i];
        printf("modelId:%d\r\n",modelId);
        /* id1:Float id2:int id3:Bool */
        switch (modelId)
        {
            case 1:
            Quos_ttlvAddIdFloat(&ttlvResp, modelId, 23.6);/* 精油当前容量值 ML*/
            break;
            case 2:
            Quos_ttlvAddIdInt(&ttlvResp, modelId, 30);/* 上传时间频率 s*/
            break;
            case 3:
            Quos_ttlvAddIdBool(&ttlvResp, modelId, TRUE);/* 开关机状态 */
            break;
            default:
            break;
        }
    }
    /* 物模型数据应答 */
    return ttlvResp;
}
/* 接收到IoT平台下发透传数据回调函数 */
void transRecvCb(quint8_t *value, quint32_t valLen)
{
    /* 打印透传数据 */
    Quos_logHexDump(APPS_OPEN, LL_DBG, "recv trans data", value, valLen);
    /* 测试，把收到的透传数据回传到平台 */
    Qth_cmdSendTrans(QTH_SEND_EXACTLY_ONCE,value,valLen,NULL,NULL);
}
/* 接收到IoT平台下发OTA计划回调函数 */
qbool otaPlanCb(Qth_otaPlan_t *planList, quint16_t count)
{
    quint16_t i;
    for (i = 0; i < count; i++)
    {
        Quos_logPrintf(APPS_OPEN, LL_DBG, "identity:%s,type:%d,srcVer:%s,dstVer:%s,minBattery:%d,minFlash:%d,minSignal:%d",
                        planList[i].identity, (qint32_t)planList[i].type, planList[i].srcVer, planList[i].dstVer, (qint32_t)planList[i].minBattery, (qint32_t)planList[i].minFlash, (qint32_t)planList[i].minSignal);
    }
    /* 返回TRUE确认升级 */
    return TRUE;
}
/* 接收到IoT平台下载OTA固件进度回调函数 */
void otaDownloadCb(char *identity, quint8_t percent)
{
    Quos_logPrintf(APPS_OPEN, LL_DBG, "identity:%s, percent:%d", identity, percent);
}
/* 接收到IoT平台OTA升级结果回调函数 */
void otaResultCb(char *identity, qbool result)
{
    Quos_logPrintf(APPS_OPEN, LL_DBG, "identity:%s, result:%d", identity, result);
}
/* 接收到IoT平台SOTA固件信息通知回调函数 */
qbool sotaInfoCb(char *identity, Qth_otaInfo_t *info, Qth_otaDownType_e *type)
{
    UNUSED(type);
    Quos_logPrintf(APPS_OPEN, LL_DBG, "identity:%s,version:%s,fileMd5:%s,fileCrc:%s,fileSha256:%s,fileUrl:%s,fileSize:%d",
                    identity, info->version, info->fileMd5, info->fileCrc, info->fileSha256, info->fileUrl, (qint32_t)info->fileSize);
    /* 返回TRUE确认进行SOTA升级 */
    return TRUE;
}
/* 接收到IoT平台SOTA写固件回调函数 */
qbool sotaFileCb(char *identity, quint32_t offset, quint8_t *data, quint32_t dataLen)
{
    UNUSED(data);
    Quos_logPrintf(APPS_OPEN, LL_DBG, "identity:%s,offset:%d,dataLen:%d", identity, offset, dataLen);
    /* 进行SOTA文件写入，并返回文件写入结果 */
    return TRUE;
}
```
  