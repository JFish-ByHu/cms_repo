# 程序编码

## __一、QuecThing初始化__

QuecThing SDK 提供读写设备信息的接口及参考实现，可根据具体的实际情况进行适配。设备发送引导认证操作时，开发者中心对其携带的PK、PS进行认证，认证通过，下发该设备接入所需信息。设备再携带这些信息与开发者中心建立连接。
```c
/* 初始化QuecThing SDK */
Ql_iotInit();
/* 注册事件回调函数 */
Ql_iotConfigSetEventCB(Ql_iotEventCB);
/* 配置产品信息*/
Ql_iotConfigSetProductinfo("p1xxxS", "VnhyxxxxxxxxSTFh");
/* 启动平台连接 */
Ql_iotConfigSetConnmode(1);
```
## __二、事件回调处理接口__


事件回调处理接口简单的说就是为事件源(组件)添加一个监听任务 __Ql_iotEventCB()__ ，当用户触发了某件事件时，交给监听器去处理，开发者既可根据不同的事件来执行不同的操作。数据模板示例 __Ql_iotMain.c__ 已实现数据事件的通用处理框架，可以基于此示例开发业务逻辑。

事件回调函数则会判断事件Code进入相对应的逻辑处理程序，开发者只需要在 __Ql_iotEventCB()__ 相应事件下作具体处理即可。事件回调函数主要分8个主事件：引导认证操作、接入操作、订阅操作、发送数据操作、接收数据操作、注销操作、OTA操作、平台事件。具体解析如下：

* 引导认证操作
	>该事件设备引导认证回调，可查看设备认证成功与否及一些连接失败的错误代码，方便开发者根据相对应错误代码进行处理。

* 接入操作
	>该事件回调接入开发者中心成功与否，在连接开发者中心时往往会有设备密钥不正确或网络异常等错误，开发者可根据相关错误代码进行处理。

* 订阅操作
	>该事件回调订阅MQTT主题是否成功。

* 发送数据操作
	>该事件主要是数据格式发送的成功与失败回调，例如物模型数据发送、透传数据发送及定位数据发送。

* 接收数据操作
	>该事件是接收到透传数据、物模型下发数据（服务调用以及下发可写属性）、物模型查询命令（设备调试中读取操作），开发者可根据该事件进行跟开发者中心的数据交互。

* 注销操作
	>该事件代表着注销成功（断开连接成功），当终端设备与平台断开时会进入该事件。

* OTA操作
	>该事件主要回调OTA升级操作，例如有着新的升级任务，开发者可根据其事件传参中的配置信息来判断是否开启升级，亦可以判断OTA升级的进展，例如：收到升级计划、开始下载、包下载中、包下载完成、包更新中、更新固件成功、更新固件失败。

* 平台事件
	>该事件是指设备端收发信息时导致开发者中心限流，例如超过单设备激活数量或者每日请求数导致限流等。

例如当终端设备向开发者中心发送物模型数据时，回调函数通知该事件{event:4,errcode:10210}时，表示设备已将物模型数据发送成功，开发者可以在此事件回调进行事件处理。如图下：

```c
/**************************************************************************
** 功能	@brief : 事件处理回调
** 输入	@param : event:主事件 
** 输入	@param : errcode：事件code（子集）
** 输入	@param : value：属性数据
** 输入	@param : valLen：属性数据长度
** 输出	@retval: NULL
***************************************************************************/
void Ql_iotEventCB(quint32_t event, qint32_t errcode, const void *value, quint32_t valLen)
{
	/* 回调事件判断 */
	switch (event)
	{
		/* 发送数据操作 */
		case 4:
		  if(10210 == errcode)
	      {
	      	/* code */
	      	printf("Sending object model succeeded\r\n");
	      }
	 		break;
	  	default:
	        break;
	}
}
```
<span style='color:#999AAA'>提示：事件详情请参考[设备与平台交互 相关事件](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/InteractionEvent)。</span>



## __三、应用逻辑开发__

### __1、变量定义（可选）__

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
    
### __2、上行业务逻辑实现__


设备端可根据业务场景需求，对设备端数据属性采取一定的策略进行检测处理，例如设备端通过串口连接香薰机传感器将精油剩余容量值读取到结构体内，模组则需要将此时此刻读取到的精油剩余容量值上传到开发者中心。

* 示例代码如下所示：

	```c
	while (1)
	{
	    /*每隔30秒上报一次精油当前容量*/ 
	    void *ttlvHead = NULL;   
	    /*精油当前容量值*/  
	    Ql_iotTtlvIdAddFloat(&ttlvHead, 1, g_AromaDiffuser_st.OilsCurrentCapacity);
	    /*第一个传参是QOS值，当值是1及以上时则会有事件回调响应*/
	    Ql_iotCmdBusPhymodelReport(1, ttlvHead);
	    Ql_iotTtlvFree(&ttlvHead);
	    sleep(30); 
	}
	```
<span style="color:#999AAA">注意：在添加物模型节点且调用完后，开发者请调用 Ql_iotTtlvFree() 函数，该函数会释放指针指向的一个内存块，从而避免内存泄漏等问题。</span>

### __3、下行业务逻辑实现__

服务端下行的数据，__QuecThing SDK__ 已按数据模板协议完成 TTLV 数据的解析，开发者只需根据不同的事件来开发下行业务逻辑。物模型是根据在平台定义的产品数据模板生成的模板结构体，由定义的各属性构成成员变量。入参 value 所指向的属性数据，从服务端下行数据中，__QuecThing SDK__  已经按数据模板协议完成了属性数据的解析，用户在下行逻辑处理的函数里，可直接使用解析完成的数据添加业务逻辑即可。


* 示例代码如下所示：

	```c
	void Ql_iotEventCB(quint32_t event, qint32_t errcode, const void *value, quint32_t valLen)
	{
		/* 回调事件判断 */
		switch (event)
		{
		    /* 接收数据操作 */
		    case QIOT_ATEVENT_TYPE_RECV:
		        printf("data recv event,code:%d\r\n",errcode);
		        /* 收到透传数据 */
		        if(10200 == errcode)
		        {
		            printf("pass data:%.*s\r\n",valLen,(char *)value);
		            /* 测试，把收到的透传数据回传到平台 */
		            Ql_iotCmdBusPassTransSend(1,(unsigned char *)value,valLen);
		        }
		        /* 收到物模型下发数据（服务下发及可写属性下发） */
		        else if(10210 == errcode)
		        {
		            /* 测试，把收到的物模型数据回传到平台 */
		            Ql_iotCmdBusPhymodelReport(1,value);
		            /* 物模型数据解析 （可在该函数内处理服务下发）*/
		            Ql_iotTtlvHandle(value);
		        }
		        /* 收到物模型请求数据（平台读取操作） */
		        else if(10211 == errcode && value)
		        {
		            quint16_t PkgID = *(quint16_t *)value;
		            quint16_t *ids = (quint16_t *)(value+sizeof(quint16_t));
		            void *ttlvHead = NULL;
		            printf("model read event,PkgID:%d\r\n",PkgID);
		            quint32_t i = 0;
		            for(i=0;i<valLen;i++)
		            {
		                quint16_t modelId = ids[i];
		                printf("modelId:%d\r\n",modelId);
		                /* id1:Float id2:int id3:Bool */
		                switch (modelId)
		                {
		               	 case 1:
		                    Ql_iotTtlvIdAddFloat(&ttlvHead, modelId, g_AromaDiffuser_st.OilsCurrentCapacity);/* 精油当前容量值 ML*/
		                    break;
		              	  case 2:
		                    Ql_iotTtlvIdAddInt(&ttlvHead, modelId, g_AromaDiffuser_st.ReportFrequency);/* 上传时间频率 s*/
		                    break;
		              	  case 3:
		                   Ql_iotTtlvIdAddBool(&ttlvHead, modelId, g_AromaDiffuser_st.PowerSwitch);/* 开关机状态 */
		                    break;
		              	  default:
		                    break;
		                }
		            }
		            Ql_iotCmdBusPhymodelAck(1,PkgID,ttlvHead);/* 物模型数据应答 */
		           	Ql_iotTtlvFree(&ttlvHead);/* 释放ttlvHead指针的函数 */
		        }
		        break;
		          	default:
		        break;
		}
	}
	```




## __四、编译__

以 __EC600NCNLC__ 模组为例介绍编译步骤。


### __1、安装工具链__ 
SDK已内嵌 __armcc工具链__，只需双击运行 __build.bat__ 脚本即可完成安装。

### __2、新建终端__ 

打开或创建一个集成终端。最简单的方式就是使用快捷键 __Ctrl + Shift+`__ ，或者选择上页签点击 __终端__ > __新建终端__ 。

### __3、编译__ 
<span style="color:#999AAA">提示：编译基于EC600N\LTE01R03A23_C_SDK_A_SDK\ql-sdk的路径。</span>

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-14.png">![img](/zh/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-14.png)</a>

__(1) 编译APP文件程序__
> ./build.bat app

__(2) 生成固件__
> ./build.bat firmware


若编译通过将会在当前路径自动生成 __target__ 文件夹，文件夹包含 __LTEXXX_C_SDK_A.ZIP__ 压缩包。


## __五、烧写程序__

以 __EC600N-CNLC__ 模组为例，介绍如何使用烧写工具为其烧写程序的步骤。

__1、下载烧写工具__

进入 <a href="https://iot.quectelcn.com/download?menuCode=MODULE_DEVL" target="_blank"> **烧录工具下载** </a>，点击进入指定模块的相关下载页面，找到烧写工具并下载。

 <span style="color:#999AAA">提示：在Win10系统下，QFlash下载完成后，请右键单击QFlash.exe选择 “以管理员身份运行” 运行 QFlash。</span>

__2、PC连接设备__

PC通过 __MicroUSB__ 线连接模组的 __Quectel Download Port__ 串口。

__3、烧写工具使用__

我们打开 __QFlash软件__ ，将生成的执行文件 __LTEXXX_C_SDK_A.ZIP__ 压缩包 烧写进模组里面，主界面如下图所示。
 <span style="color:#999AAA">提示：工具和固件包的存储路径不应包含任何空格及中文，固件包的存储/载入路径需是本地路径，不能使用 U 盘或网盘路径。</span>

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-15.png">![img](/zh/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-15.png)</a>


__①、__ 选择连接模组的 __串口__ 与 __通讯波特率__ 。<br>
__②、__ 单击 __Load FW Files__ 打开已生成的压缩包。<br>
__③、__ 单击 __Start__ 按键开始烧录。



### __主函数例程__

```c
int FUNCTION_ATTR_ROM quecthing_test(void)
{
    /* 初始化QuecThing SDK */
    Ql_iotInit();
    /* 注册事件回调函数 */
    Ql_iotConfigSetEventCB(Ql_iotEventCB);
    /* 配置产品信息*/
    Ql_iotConfigSetProductinfo("p1xxxS", "VnhyxxxxxxxxSTFh");
    /* 启动平台连接 */
    Ql_iotConfigSetConnmode(1);
    while (1)
    {
		/* 获取当前工作状态 */
		QIot_state_e status = Ql_iotGetWorkState();
		if (8 == status)
		{
			/*每隔30秒上报一次精油当前容量*/ 
			void *ttlvHead = NULL;   
			/*精油当前容量值*/  
			Ql_iotTtlvIdAddFloat(&ttlvHead, 1, 50.6);
			/*第一个传参是QOS值，当值是1及以上时则会有事件回调响应*/
			Ql_iotCmdBusPhymodelReport(1, ttlvHead);
			Ql_iotTtlvFree(&ttlvHead);
		}
	    sleep(30);
    }
}
```
### __回调函数例程__
```c
void Ql_iotEventCB(quint32_t event, qint32_t errcode, const void *value, quint32_t valLen)
{
    printf("event[%d] errcode[%d] valLen[%d]\r\n", event, errcode, valLen);
    switch (event)
    {
    /* 引导认证操作 */
    case 1:
        printf("auth event,code:%d\r\n",errcode);
        break;
    /* 接入操作 */
    case 2:
        printf("connect event,code:%d\r\n",errcode);
        break;
    /* 订阅操作 */
    case 3:
    {
        printf("subcribe event,code:%d\r\n",errcode);
        /* 上报设备状态和模组信息 */
        quint16_t statusIds[] = {QIOT_DPID_STATUS_BATTERY,
                                    QIOT_DPID_STATUS_VOLTAGE,
                                    QIOT_DPID_STATUS_SIGNAL,
                                    QIOT_DPID_STATUS_FLASHFREE,
                                    QIOT_DPID_STATUS_RSRP,
                                    QIOT_DPID_STATUS_RSRQ,
                                    QIOT_DPID_STATUS_SNR};
        quint16_t infoIds[] = {QIOT_DPID_INFO_MODEL_TYPE,
                                QIOT_DPID_INFO_MODEL_VER,
                                QIOT_DPID_INFO_MCU_VER,
                                QIOT_DPID_INFO_CELLID,
                                QIOT_DPID_INFO_ICCID,
                                QIOT_DPID_INFO_MCC,
                                QIOT_DPID_INFO_MNC,
                                QIOT_DPID_INFO_LAC,
                                QIOT_DPID_INFO_PHONE_NUM,
                                QIOT_DPID_INFO_SIM_NUM,
                                QIOT_DPID_INFO_SDK_VER,
                                QIOT_DPID_INFO_LOC_SUPLIST,
                                QIOT_DPIO_INFO_DP_VER,
                                QIOT_DPIO_INFO_CP_VER};
        Ql_iotCmdSysStatusReport(statusIds, sizeof(statusIds) / sizeof(statusIds[0]));
        Ql_iotCmdSysDevInfoReport(infoIds, sizeof(infoIds) / sizeof(infoIds[0]));

        /* 发送内部定位数据 */
        void *titleTtlv = NULL;
        Ql_iotTtlvIdAddString(&titleTtlv, 0, "LBS");
        Ql_iotCmdBusLocReportInside(titleTtlv);
        Ql_iotTtlvFree(&titleTtlv);

        /* ota 请求*/
        Ql_iotCmdOtaRequest(0);
        break;
    }
    /* 发送数据操作 */
    case 4:
        printf("data send event,code:%d\r\n",errcode);
        break;
    /* 接收数据操作 */
    case 5:
        printf("data recv event,code:%d\r\n",errcode);
        /* 收到透传数据 */
        if(10200 == errcode)
        {
            printf("pass data:%.*s\r\n",valLen,(char *)value);
            /* 把收到的透传数据回传到平台 */
            Ql_iotCmdBusPassTransSend(0,(unsigned char *)value,valLen);
        }
        /* 收到物模型下发数据 */
        else if(10210 == errcode)
        {
            /* 测试，把收到的物模型数据回传到平台 */
            Ql_iotCmdBusPhymodelReport(0,value);
            /* 物模型数据解析 */
            Ql_iotTtlvHandle(value);
        }
        /* 收到物模型请求数据 */
        else if(10211 == errcode && value)
        {
            quint16_t PkgID = *(quint16_t *)value;
            quint16_t *ids = (quint16_t *)(value+sizeof(quint16_t));
            void *ttlvHead = NULL;
            printf("model read event,PkgID:%d\r\n",PkgID);
            quint32_t i = 0;
            for(i=0;i<valLen;i++)
            {
                quint16_t modelId = ids[i];
                printf("modelId:%d\r\n",modelId);
                /* id1:Float id2:int id3:Bool */
                switch (modelId)
                {
                    case 1:
                    Ql_iotTtlvIdAddFloat(&ttlvHead, modelId, 23.6);/* 精油当前容量值 ML*/
                    break;
                    case 2:
                    Ql_iotTtlvIdAddInt(&ttlvHead, modelId, 30);/* 上传时间频率 s*/
                    break;
                    case 3:
                    Ql_iotTtlvIdAddBool(&ttlvHead, modelId, TRUE);/* 开关机状态 */
                    break;
                    default:
                    break;
                }
            }
            Ql_iotCmdBusPhymodelAck(1,PkgID,ttlvHead);/* 物模型数据应答 */
            Ql_iotTtlvFree(&ttlvHead);/* 释放ttlvHead指针的函数 */
        }
        break;
    /* 注销操作 */
    case 6:
        printf("logout event,code:%d\r\n",errcode);
        break;
    /* FOTA操作 */
    case 7:
    {
        switch (errcode)
        {
        /* 下发升级任务 */
        case 10700:
        {
            char *words[100];
            quint32_t count = Quos_stringSplit1((char *)value,HAL_STRLEN(value), words, sizeof(words) / sizeof(words[0]),",", FALSE);
            printf("recv ota task\r\n");
            if(count < 6)
            {
                break;
            }
            printf("componentNo:%s,sourceVersion:%s,targetVersion:%s,batteryLimit:%s,minSignalIntensity:%s,minSignalIntensity:%s\r\n",
                words[0],words[1],words[2],words[3],words[4],words[5]);
            Ql_iotCmdOtaAction(1);
            break;
        }
        /* 开始下载 */
        case 10701:
            printf("ota download start\r\n");
            break;
        /* 下载中 */
        case 10702:
            printf("ota downloading\r\n");
            break;
        /* 下载完成 */
        case 10703:
        {
            char *words[100];
            quint32_t count = Quos_stringSplit1((char *)value,HAL_STRLEN(value), words, sizeof(words) / sizeof(words[0]),",", FALSE);
            printf("ota download complete\r\n");
            if(count < 4)
            {
                break;
            }
            printf("componentNo:%s,length:%s,startaddr:%s,piece_length:%s\r\n",words[0],words[1],words[2],words[3]);
            /* 如果是SOTA下载完成，则通过API读取文件 */
            if(strcmp(QIOT_MCU_COMPONENT_NO,Quos_stringRemoveMarks1(words[0])) == 0)
            {
                quint8_t readBuf[1024];
                quint32_t ret = Ql_iotCmdOtaMcuFWDataRead(0,readBuf,sizeof(readBuf));
                printf("sota read file...ret:%d\r\n",ret);
                /* SOTA完成后通知平台MCU进入更新状态 */
                Ql_iotCmdOtaAction(3);
            }
            break;
        }
        /* 更新中 */
        case 10704:
            printf("ota updating\r\n");
            break;
        /* 更新完成 */
        case 10705:
            printf("ota update success\r\n");
            break;
        /* 更新失败 */
        case 10706:
            printf("ota update fail\r\n");
            break;
        case 10707:
            if(((quint32_t *)value)[0] == 0)
            {
                printf("mutil devices confirm update\r\n");
            }
            else
                printf("mutil devices refuse update\r\n");
            break;	 
        default:
            break;
        }
        break;	
    }  
    /* 平台事件 */
    case 8:
        printf("server event,code:%d\r\n",errcode);
        break; 
    default:
        break;
    }
}
```
  