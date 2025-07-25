# Program Code

## __1. Initialize QuecThing__

QuecOpen SDK provides APIs for reading and writing device information and corresponding reference implementation, which can be customized as needed. When the device sends bootstrap authentication operations, Developer Center will authenticate the ProductKey and ProductSecret. If the authentication succeeds, Developer Center will issue the required information for your device to connect to Developer Center.

```c
/* Initialize QuecThing SDK. */
Qth_devInit();
/* Set module's version number. */
Qth_configSetModuleVer("v1.0.0");
/* Register callback functions. */
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
/* Initiate the connection to Developer Center. */
Qth_devStart();
```
## __2. Event Callback Function__
In short, an event callback function is adding a listening task ***Qth_devEventCb_f()*** to an event source (component). This task captures events and enables you to perform different operations according to the specific triggered event. ***Ql_iotMain.c*** provides a data template sample that implements a generic framework for processing data events, allowing you to develop your own business logic based on this sample.

The event callback function identifies the event code and then directs the flow of execution to the corresponding logic processing program. All you need to do is providing specific processing instructions in ***Qth_devEventCb_f()***. The event callback function can handle 6 main events: network provisioning, router connection, platform connection, device reset, device deletion and idle mode events. Specific descriptions are as follows:

* Network provisioning event
	
>This event returns the network provisioning result and error codes of network provisioning failures, which is convenient for developers to handle the error according to the error code.
	
* Router connection event
	
>This event returns the router connection result. When the device tries to connect to the router, errors like incorrect Wi-Fi password or router not found may occur. Developers can handle these errors according to the error codes.
	
* Platform connection event
	
>This event returns the platform connection result. When the device tries to connect to Developer Center, errors like incorrect DeviceSecret or network exception may occur. Developers can handle these errors according to the error codes.
	
* Device reset event
	
>This event returns the device reset result.
	
* Device deletion event
	
>This event returns the device deletion result. When you delete an online device from the device list, this event will be returned.
	
* Idle mode event
	
	>This event indicates that the device has been in idle mode, that is, the device has disconnected from the router and Developer Center.

When the device status changes, developer can handle the event in the callback function as shown below.

```c
void devEventCb(Qth_devEvent_e event, oprt_ret result)
{
    Quos_logPrintf(APPS_OPEN, LL_DBG, "recv dev event, event:%u, result:%d", event, result);
    switch(event)
    {
        case QTH_DEV_EVENT_WIFI_CONFIG:
        if(OPRT_OK == result)
        {
            /* Wi-Fi network is provisioned successfully. */
        }
        else
        {
            /* Wi-Fi network provisioning failed. */
        }
        break;
        case QTH_DEV_EVENT_DMP_CONNECT:
        if(OPRT_OK == result)
        {
            /* The device has connected to Developer Center. */
        }
        else
        {
            /* The device failed to connect to Developer Center. */
        }
        break;
        /* ... */
        default:
        break;
    }
}
```
<span style='color:#999AAA'>Note: See [Error Code List](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/InteractionEvent) for details.</span>


## __3. Develop Application Logic__

### __1) Enable Network Provisioning__

Enable network provisioning according to your project requirement, such as press the pairing switch button.

* Sample code

    ```c
	Qth_wifiOpenNetcfg();	/* Enable network provisioning. */
    ```

	Or reset the device to unbind the device from the app.

	```c
	Qth_devReset();    /* Reset the device, which enables the device to enter the network provisioning mode by default. */
	```

<span style="color:#999AAA">Note: The station mode is enabled by default.</span>

### __2) Define Variable (Optional)__

A structure is a special compound **data type** defined by users. Developers can define it according to the **TSL template** on Developer Center, which will make the program structure clearer in the code project. In addition, you can add the structure type variable to the function in this way as needed.

* Sample code

    ```c
    typedef struct 
    {
        float         OilsCurrentCapacity;  /* The remaining content of essential oil. Unit: ML. */
        quint32_t     ReportFrequency;		/* Frequency of regular reporting. Unit: s. */
        qbool         PowerSwitch;			/* On/Off status. 0: Off; 1: On. */
        qbool         OilsLackWarning;		/* Alert to lack of essential oil. Report the event to Developer Center when the essential oil is insufficient. */
        quint32_t     WorkPattern;			/* Set working mode. */
    }AromaDiffuser_type;  

	AromaDiffuser_type g_AromaDiffuser_st;
    ```
    
### __2) Implementation of Uplink Business Logic__


The device can detect and process data property based on service scenarios. For example, the device can read the remaining content of essential oil into the structure by connecting the sensor of the smart aromatherapy diffuser through a serial port. The module needs to upload the remaining content of essential oil read at this moment to Developer Center.

* Sample

	```c
	while (1)
    {
        /*Report the remaining content of essential oil every 30 seconds.*/ 
        void *ttlvHead = NULL;   
        /*The remaining content of essential oil.*/  
        Quos_ttlvAddIdFloat(&ttlvHead, 1, 50.6);
        /*The first argument is QoS, and when it is equal to or greater than 1, an event will be returned.*/
        Qth_cmdSendTsl(QTH_SEND_EXACTLY_ONCE,ttlvHead,NULL,NULL);
        Quos_ttlvFree(&ttlvHead);
        Qhal_system_sleepMs(30000);
    }
	```
<span style='color:#999AAA'>Note: After adding or calling TSL nodes, call *Quos_ttlvFree()* to release a memory block pointed to by the pointer, thus avoiding problems such as memory leakage.</span>

### __3) Implementation of Downlink Business Logic__

**QuecThing SDK** has simplified the development process for downlink data by parsing TTLV data based on the data template protocol. Developers only need to develop the downlink business logic according to different events. TSL is a template structure that uses the product data templates from Developer Center to define member variables. In the downlink data, the property pointed by the passed value has been parsed by __QuecThing SDK__ based on the data template protocol, so developers can directly add business logic in the downlink logic processing function.


* Sample code

	```c
	/* Callback function of receiving TSL data issued by Developer Center. */
    void ttlvRecvCb(void *ttlvHead)
    {
        Quos_logPrintf(APPS_OPEN, LL_DBG, "recv ttlv write");
        /* Print the TSL data. */
        Quos_ttlvHeadPrintf(ttlvHead);
        /* Test: Send the received TSL data to Developer Center. */
        Qth_cmdSendTsl(QTH_SEND_EXACTLY_ONCE,ttlvHead,NULL,NULL);
    }
    /* Callback function of receiving TSL data request issued by Developer Center. */
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
                Quos_ttlvAddIdFloat(&ttlvResp, modelId, 23.6);/* The remaining content of essential oil. Unit: ML. */
                break;
                case 2:
                Quos_ttlvAddIdInt(&ttlvResp, modelId, 30);/* Frequency of regular reporting. Unit: s. */
                break;
                case 3:
                Quos_ttlvAddIdBool(&ttlvResp, modelId, TRUE);/* On/Off status. */
                break;
                default:
                break;
            }
        }
        /* Reply to the TSL data request issued by Developer Center. */
        return ttlvResp;
    }
	```
	


## __4. Compile__

<span style='color:#999AAA'>__Note: There are differences in the development environment configuration and compilation of different module models. Contact Acceleronix Technical Support <support@acceleronix.io> for the details of specific modules.__</span>




## __5. Download__

<span style='color:#999AAA'>__Note: There are differences in the firmware download method and tool of different module models. Contact Acceleronix Technical Support <support@acceleronix.io> for the details of specific modules.__</span>




## <span id = "WiFi_demo">__6. Device Routine Demo__ </span>
### __Main Function Routine__

```c
void qth_main(void)
{
    Qth_eventCb_t event_cb = {0};
    Qth_otaEventCb_t otaCb = {0};
    Qth_mcuInfo_t mcuList[1] = {0};
    /* Initialize QuecThing SDK. */
    Qth_devInit();
    /* Set product information. */
    Qth_configSetProductInfo"p1xxxS", "VnhyxxxxxxxxSTFh");
    /* Set MCU ID and version number. */
    Quos_strcpy(mcuList[0].identity, "MCU1");
    Quos_strcpy(mcuList[0].version, "1.0.0");
    Qth_configSetMcuVer(mcuList, sizeof(mcuList) / sizeof(Qth_mcuInfo_t));
    /* Set callback functions. */
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
    /* Initiate the connection to Developer Center. */
    Qth_devStart();

    while (1)
    {
        /* Get the working mode. */
        Qth_devStatus_e status;
        Qth_devGetStatus(&status);
        if(QTH_DEV_STATUS_CONNECTED_DMP == status)
        {
            /*Report the remaining content of essential oil every 30 seconds.*/ 
            void *ttlvHead = NULL;   
			/*The remaining content of essential oil.*/  
			Quos_ttlvAddIdFloat(&ttlvHead, 1, 50.6);
			/*The first argument is QoS, and when it is equal to or greater than 1, an event will be returned.*/
			Qth_cmdSendTsl(QTH_SEND_EXACTLY_ONCE,ttlvHead,NULL,NULL);
			Quos_ttlvFree(&ttlvHead);
        }
        Qhal_system_sleepMs(30000);
    }
}
```
### __Callback Function Routine__
```c
/* Register the callback function of sending an NTP request. */
void ntpDataCb(quint16_t pkgId, Qth_ntpInfo_t *ntpInfo)
{
    Quos_logPrintf(APPS_OPEN, LL_DBG, "recv ntp info, pkgId:%u", pkgId);
    Quos_logPrintf(APPS_OPEN, LL_DBG, "%04d-%02d-%02d %02d:%02d:%02d.%03d, %d, %s, "PRINTF_FORMAT_INT64,
                    ntpInfo->tm.tm_year, ntpInfo->tm.tm_mon, ntpInfo->tm.tm_mday, ntpInfo->tm.tm_hour, ntpInfo->tm.tm_min, ntpInfo->tm.tm_sec, ntpInfo->tm.tm_ms,
                    ntpInfo->tm.tm_week, ntpInfo->timezone, PRINTF_CONV_INT64(ntpInfo->timestamp));
    /* Update the local timestamp. */
    Quos_timeSetUnix(ntpInfo->timestamp);
}
/* Register the callback function of receiving device events. */
void devEventCb(Qth_devEvent_e event, oprt_ret result)
{
    Quos_logPrintf(APPS_OPEN, LL_DBG, "recv dev event, event:%u, result:%d", event, result);
    if(QTH_DEV_EVENT_DMP_CONNECT == event && OPRT_OK == result)
    {   
        /* Send an NTP request after connecting to Developer Center. */
        Qth_ntpSetResultCb(ntpDataCb);
        Qth_ntpSendNtpReq(NULL, NULL);
    }
}
/* Callback function of receiving TSL data issued by Developer Center. */
void ttlvRecvCb(void *ttlvHead)
{
    Quos_logPrintf(APPS_OPEN, LL_DBG, "recv ttlv write");
    /* Print the TSL data. */
    Quos_ttlvHeadPrintf(ttlvHead);
    /* Test: Send the received TSL data to Developer Center. */
    Qth_cmdSendTsl(QTH_SEND_EXACTLY_ONCE,ttlvHead,NULL,NULL);
}
/* Callback function of receiving TSL data request issued by Developer Center. */
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
            Quos_ttlvAddIdFloat(&ttlvResp, modelId, 23.6);/* The remaining content of essential oil. Unit: ML.*/
            break;
            case 2:
            Quos_ttlvAddIdInt(&ttlvResp, modelId, 30);/* Frequency of regular reporting. Unit: s.*/
            break;
            case 3:
            Quos_ttlvAddIdBool(&ttlvResp, modelId, TRUE);/* On/Off status. */
            break;
            default:
            break;
        }
    }
    /* Reply to the TSL data request issued by Developer Center. */
    return ttlvResp;
}
/* Callback function of receiving transparent transmission data issued by Developer Center. */
void transRecvCb(quint8_t *value, quint32_t valLen)
{
    /* Print the transparent transmission data. */
    Quos_logHexDump(APPS_OPEN, LL_DBG, "recv trans data", value, valLen);
    /* Test: Send the received transparent transmission data to Developer Center. */
    Qth_cmdSendTrans(QTH_SEND_EXACTLY_ONCE,value,valLen,NULL,NULL);
}
/* Callback function of receivinng OTA upgrade plans issued by Developer Center. */
qbool otaPlanCb(Qth_otaPlan_t *planList, quint16_t count)
{
    quint16_t i;
    for (i = 0; i < count; i++)
    {
        Quos_logPrintf(APPS_OPEN, LL_DBG, "identity:%s,type:%d,srcVer:%s,dstVer:%s,minBattery:%d,minFlash:%d,minSignal:%d",
                        planList[i].identity, (qint32_t)planList[i].type, planList[i].srcVer, planList[i].dstVer, (qint32_t)planList[i].minBattery, (qint32_t)planList[i].minFlash, (qint32_t)planList[i].minSignal);
    }
    /* Return TRUE to accept the OTA upgrade. */
    return TRUE;
}
/* Callback function of receiving firmware downloading progress. */
void otaDownloadCb(char *identity, quint8_t percent)
{
    Quos_logPrintf(APPS_OPEN, LL_DBG, "identity:%s, percent:%d", identity, percent);
}
/* Callback function of receiving OTA upgrade result. */
void otaResultCb(char *identity, qbool result)
{
    Quos_logPrintf(APPS_OPEN, LL_DBG, "identity:%s, result:%d", identity, result);
}
/* Callback function of receiving SOTA firmware issued by Developer Center. */
qbool sotaInfoCb(char *identity, Qth_otaInfo_t *info, Qth_otaDownType_e *type)
{
    UNUSED(type);
    Quos_logPrintf(APPS_OPEN, LL_DBG, "identity:%s,version:%s,fileMd5:%s,fileCrc:%s,fileSha256:%s,fileUrl:%s,fileSize:%d",
                    identity, info->version, info->fileMd5, info->fileCrc, info->fileSha256, info->fileUrl, (qint32_t)info->fileSize);
    /* Return TRUE to accept the SOTA upgrade. */
    return TRUE;
}
/* Callback function of receiving the SOTA upgrade files issued by Developer Center. */
qbool sotaFileCb(char *identity, quint32_t offset, quint8_t *data, quint32_t dataLen)
{
    UNUSED(data);
    Quos_logPrintf(APPS_OPEN, LL_DBG, "identity:%s,offset:%d,dataLen:%d", identity, offset, dataLen);
    /* Download the SOTA upgrade files and return the upgrade result. */
    return TRUE;
}
```
