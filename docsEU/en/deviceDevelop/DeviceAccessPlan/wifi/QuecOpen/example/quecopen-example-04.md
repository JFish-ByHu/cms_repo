
# Example of Sub-device Quick Access

## __Description__

The capability of the gateway is to convert the communication protocols between different devices, allowing sub-devices that do not have networking capabilities to connect to the IoT platform through the gateway. To achieve this purpose, the gateway should connect to Developer Center first, and then you need to add the sub-device to the gateway to establish the connection between the sub-device and Developer Center. This chapter tells you how to connect the sub-devices to Developer Center through the gateway with QuecOpen solution.

## __Related APIs__

|                    Functions                    |                                           Description                                            |
| :---------------------------------------------: | :----------------------------------------------------------------------------------------------: |
| [Qth_subDevSetEventCb()](#Qth_subDevSetEventCb) | Registers the callback function of the interaction event between the sub-device and the gateway. |
|       [Qth_subDevConn()](#Qth_subDevConn)       |                               Connects the sub-device to gateway.                                |
|    [Qth_subDevDisconn()](#Qth_subDevDisconn)    |                           Disconnects the sub-device from the gateway.                           |
|     [Qth_subDevDeauth()](#Qth_subDevDeauth)     |                                     Deletes the sub-device.                                      |
|    [Qth_subDevSendTsl()](#Qth_subDevSendTsl)    |                      Sends TSL data of the sub-device to Developer Center.                       |
|  [Qth_subDevSendTrans()](#Qth_subDevSendTrans)  |            Sends transparent transmission data of the sub-device to Developer Center.            |
|  [Qth_subDevLocReport()](#Qth_subDevLocReport)  |                    Sends location data of the sub-device to Developer Center.                    |
|  [Qth_subOtaUpdateVer()](#Qth_subOtaUpdateVer)  |                              Reports the sub-device version number.                              |
|        [Qth_subOtaReq()](#Qth_subOtaReq)        |                             Requests a sub-device OTA upgrade plan.                              |

<span style='color:#999AAA'>Note: See [Gateway Sub-device API](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-10) for details.</span>


## __Procedures__
### __1. Log in to Developer Center__
Log in to <a href="https://core.acceleronix.io"  target="_blank">Developer Center</a>. If you don't have an account click <a href="https://core.acceleronix.io/registerType" target="_blank">Register Now</a> to register.

### __2. Create Product__
#### __1) Create a Gateway Product__
Creating a gateway product is similar to creating a cellular product. In the "Device Type" option, select **Gateway**.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/subDevice/Example-01.png">![img](/en/deviceDevelop/develop/subDevice/Example-01.png)</a>


#### __2) Create a Sub-device Product__

<a data-fancybox title="img" href="/en/deviceDevelop/develop/subDevice/Example-02.png">![img](/en/deviceDevelop/develop/subDevice/Example-02.png)</a>


* __Device Type__: A directly connected device can directly access the network. A gateway device can help sub-devices to connect to Developer Center. A sub-device is a device that relies on the gateway to connect to the network.
* __Specified Gateway__:
    * __Disable__: Sub-devices can access Developer Center through any gateway.
    * __Enable__: Sub-devices can access Developer Center only through the specified gateway.
* __Gateway Access Mode__: Developer Center authorizes the gateway device. 
    *  __Access Network Only__: The sub-device uses the gateway as a channel for Internet access and data forwarding, and it is managed as a directly connected device.
       * **Enable Dynamical Gateway Switching**: Sub-devices that have connected to Developer Center through a gateway can switch to another gateway to access Developer Center.
       * **Disable Dynamical Gateway Switching**: Sub-devices that have connected to Developer Center through a gateway cannot switch to another gateway to access Developer Center.
    *  __Product Integrated__: The sub-device is integrated into the gateway and can be queried and controlled by the gateway.

### __3. Configure Gateway Device__

__1) Initialize QuecThing SDK__

Before development, please complete the initialization of the QuecOpen solution of the project. The function below needs to be called before using the networking service. Initialization refers to completing the basic configuration of the module after the module is powered on to connect to Developer Center.
```c
/* Initialize QuecThing SDK. */
oprt_ret ret = OPRT_OK;

ret = Qth_devInit();
if (OPRT_OK != ret)
{
    Quos_logPrintf(APPS_OPEN, LL_ERR, "sdk init error:%d", ret);
    return;
}

```
__2) Register Callback Function of Gateway Event__

The event callback function is simply to add a monitoring task to the event source (component). When the gateway device triggers an event, the listener will process the event. The developer only needs to deal with the event notified by the event callback function. 

```c
/* Register QuecThing event callback function. */
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
```

__3) Configure Product Info (Required at the First Connection)__

The QuecThing SDK provides interfaces and reference implementations for reading and writing device information, which can be customized as needed. During the first connection, the gateway device sends a bootstrap authentication request, and Developer Center will authenticate ProductKey and ProductSecret provided by the device. If the authentication succeeds, Developer Center will issue the required information for your device to connect to and access Developer Center.

 ```c
/* Configure product info. */
Qth_configSetProductInfo(DEMO_PK, DEMO_PS);
 ```


__4) Connect to Developer Center__

The module initiates the connection to Developer Center, establishes safe and stable communication between Developer Center and the device, and realizes device management, monitoring, control and other operations.

```c
/* Initiates the connection to Developer Center. */
Qth_devStart();
```
<span style="color:#999AAA">Note: Sub-device messages received by the gateway before it is connected to Developer Center are discarded. Once connected, the gateway device starts forwarding sub-device messages to Developer Center.</span>


### __4. Sub-device Operation Procedures__

The capability of the gateway is to convert the communication protocols between different devices, allowing sub-devices that do not have networking capabilities to connect to the IoT platform through the gateway. To achieve this purpose, you need to add the sub-device to the gateway to establish the connection between the sub-device and the gateway. 


__1) Register Sub-device Event Callback__

The event callback function simply adds a monitoring task to the event source (component). When the sub-device triggers an event, the listener will process the event. The developer only needs to deal with the event notified by the event callback function. 

```c
/* Register event callback function. */
Qth_subEventCb_t subEventCb = {0};
Qth_subOtaCb_t subOtaCb = {0};
subOtaCb.planCb = subOtaPlanCb;
subOtaCb.downloadCb = subOtaDownloadCb;
subOtaCb.resultCb = subOtaResultCb;
subOtaCb.infoCb = subOtaInfoCb;
subOtaCb.fileCb = subOtaFileCb;
subEventCb.devEventCb = subDevEventCb;
subEventCb.ttlvRecvCb = subTtlvRecvCb;
subEventCb.ttlvReqCb = subTtlvReqCb;
subEventCb.transRecvCb = subTransRecvCb;
subEventCb.otaEventCb = subOtaCb;
Qth_subDevSetEventCb(subEventCb);
```


__2) Authenticate Sub-device__

Connecting to Developer Center for the first time requires sub-device authentication, which can be done through Qth_subDevConn(). After the MCU receives the successful authentication event report, the sub-device will automatically connect to Developer Center. If the authenticated sub-device is not connected to Developer Center, it can be deregistered through Qth_subDevDeauth().

```c
/* Authenticate the sub-device to Developer Center. */
Qth_subDevConn("pxxxxm", VnhyxxxxxxxxSTFh, "123xxxx89", NULL);
```

<span style="color:#999AAA">Note: This function connects the sub-device to the gateway or authenticates the sub-device. The connection/authentication result is notified by the interaction event between the sub-device and the gateway. If DeviceSecret of the sub-device is set to NULL, it means to authenticate the sub-device; If DeviceSecret of the sub-device is specified, it means to connect the sub-device to the gateway.</span>


### __5. TSL Data Interaction of Sub-device__
For remote control of a smart device, a gateway must report the status of the device, receive and execute commands from the IoT platform. Therefore, data transmission is the core capability of the gateway. The smart LGB light sub-device will be used to illustrate TSL model interaction.

#### __TSL Uplink Data__

Sub-devices can adopt different strategies to detect and process data properties based on the service scenarios. For example, sub-devices can read data of the smart LGB light sensor switches through the serial port, and then upload the data read to Developer Center through the gateway.


The TSL data sent is shown in the table below.
|  ID   | Type | Value |
| :---: | :--- | :---- |
|   1   | Bool | true  |
|   2   | Int  | 30    |

Sample code:
```c
void *ttlvHead = NULL;
Quos_ttlvAddIdBool(&ttlvHead, 1, TRUE);
Quos_ttlvAddIdInt(&ttlvHead, 2, 30);
Qth_subDevSendTsl("pxxxxm","123xxxx89",QTH_SEND_AT_LEAST_ONCE,ttlvHead,NULL,NULL);
Quos_ttlvFree(&ttlvHead);
```
<span style="color:#999AAA">Note: After the TSL node and is added and called, call  Quos_ttlvFree(), which will release a memory block pointed to by the pointer to avoid problems such as memory leakage.</span>

#### __TSL Downlink Data__

__1) Developer Center Issues TSL Service__

On the "**Device Debug**" page of Developer Center, click "**Property Debug**", select the TSL property to be issued, and click "**Send Command**" in the lower left corner to issue the TSL property to the sub-device. 

<a data-fancybox title="img" href="/en/deviceDevelop/develop/subDevice/Example-03.png">![img](/en/deviceDevelop/develop/subDevice/Example-03.png)</a>


__2) Sub-device Receives and Processes TSL Data__

When the module receives the TSL data, it will automatically enter the sub-device event processing callback function **Qth_subDevSetEventCb()**, and you can perform data response processing according to the corresponding event.

* The sample code for event callback processing:

	```c
	void subTtlvRecvCb(const char *subPk, const char *subDk, void *ttlvHead)
    {
        Quos_logPrintf(APPS_OPEN, LL_DBG, "subPk:%s,subDk:%s", subPk, subDk);
        Quos_ttlvHeadPrintf(ttlvHead);
    }
	```

