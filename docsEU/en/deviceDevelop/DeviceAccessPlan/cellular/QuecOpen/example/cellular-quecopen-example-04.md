# Quick Access to Developer Center

## __Description__

The capability of the gateway is to convert the communication protocols between different devices, allowing sub-devices that do not have networking capabilities to connect to the IoT platform through the gateway. To achieve this purpose, the gateway should connect to Developer Center first, and then you need to add the sub-device to the gateway to establish the connection between the sub-device and Developer Center. This chapter tells you how to connect the sub-devices to Developer Center through the gateway with QuecOpen solution.



## __Related AT Commands__

|            Function            | Description                                                                                       |
| :----------------------------: | :------------------------------------------------------------------------------------------------ |
| Ql_iotConfigSetSubDevEventCB() | Registers the callback function for the interaction event between the sub-device and the gateway. |
|       Ql_iotSubDevConn()       | Connects sub-device to gateway or authenticates sub-device.                                       |
|     Ql_iotSubDevDisconn()      | Disconnects the sub-device from the gateway.                                                      |
|  Ql_iotSubDevPassTransSend()   | Sends transparent transmission data of the sub-device to Developer Center.                        |
| Ql_iotSubDevPassTransSend_ex() | Sends transparent tranmission data of the sub-device to Developer Center.                         |
|    Ql_iotSubDevTslReport()     | Sends TSL data of sub-device to Developer Center.                                                 |
|   Ql_iotSubDevTslReport_ex()   | Sends TSL data of sub-device to Developer Center.                                                 |
|      Ql_iotSubDevTslAck()      | Replies to TSL data requested by Developer Center to the sub-device.                              |
|      Ql_iotSubDevDeauth()      | De-registers the sub-device.                                                                      |
|       Ql_iotSubDevHTB()        | Refreshes the last interaction time between sub-device and gateway.                               |

<span style='color:#999AAA'>Note: For details see [API Overview on Gateway and Sub-device](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-11)。</span>


## __Procedures__

### __1. Log in to Developer Center__

Log in to <a href="https://core.acceleronix.io"  target="_blank">Developer Center</a>. If you don't have an account click <a href="https://core.acceleronix.io/registerType" target="_blank">Register Now</a> to register.

### __2. Create Product__

#### __1) Create a Gateway Product__

Creating a gateway product is similar to creating a cellular product. In the Device Type option, select **Gateway**.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/subDevice/Example-01.png">
  <img src="/en/deviceDevelop/develop/subDevice/Example-01.png" width="550" alt="img">
</a>

#### __2) Create a Sub-device Product__

<a data-fancybox title="img" href="/en/deviceDevelop/develop/subDevice/Example-02.png">
  <img src="/en/deviceDevelop/develop/subDevice/Example-02.png" width="550" alt="img">
</a>

* __Device Type__: A directly connected device can directly access the network. A gateway device can help sub-devices to connect to Developer Center. A sub-device is a device that relies on the gateway to connect to the network.
* __Specified Gateway__:
    * __Disable__: Sub-devices can access Developer Center through any gateway.
    * __Enable__: Sub-devices can access Developer Center only through the specified gateway.
* __Gateway Access Mode__: Developer Center authorizes the gateway device. 
  *  __Access Network Only__:The sub-device uses the gateway as a channel for Internet access and data forwarding, and it is managed as a directly connected device.
     * **Enable Dynamical Gateway Switching**: Sub-devices that have connected to Developer Center through a gateway can switch to another gateway to access Developer Center.
     * **Disable Dynamical Gateway Switching**: Sub-devices that have connected to Developer Center through a gateway cannot switch to another gateway to access Developer Center.
  *  __Product Integrated__: The sub-device is integrated into the gateway and can be queried and controlled by the gateway.


### __3. Configure Gateway Device__

__1) Initialization__

Before development, please complete the initialization of the QuecOpen solution of the project. The function below needs to be called before using the networking service. Initialization refers to completing the basic configuration of the module after the module is powered on to connected to the IoT platform.

```c
/* Initialize QuecThing SDK */
Ql_iotInit();
```

__2) Register Callback Function of Gateway Event__

The event callback function is simply to add a monitoring task to the event source (component). When the gateway device triggers an event, the listener will process the event. The developer only needs to deal with the event notified by the event callback function. 

```c
/* Register QuecThing event callback function */
Ql_iotConfigSetEventCB(Ql_iotEventCB);
```

__3) Configure Product Info (Required at the first connection)__

QuecThing SDK provides interfaces and reference implementations for reading and writing device information, which can be adapted according to specific project requirements. When the gateway device sends a bootstrap/authentication, Developer Center authenticates ProductKey and ProductSecret that the bootstrap/ authentication carries. If the bootstrap/authentication is passed, a connection is established and the information required for the device access is delivered.

 ```c
/* Configure product info*/
Ql_iotConfigSetProductinfo("pxxxxS", "VnhyxxxxxxxxSTFh");
 ```


__4) Connect to Developer Center__

The module enables to connect to Developer Center, establishes a safe and stable communication between Developer Center and the device, and realizes device management, monitoring, control and other operations.

```c
/* Enable to connect to Developer Center */
Ql_iotConfigSetConnmode(1);	
```

<span style="color:#999AAA">Note: Sub-device messages received by the gateway before it is connected to Developer Center are discarded. Once connected, it starts forwarding sub-device messages to Developer Center. </span>


### __4. Sub-device Operation Procedures__

The capability of the gateway is to convert the communication protocols between different devices, allowing sub-devices that do not have networking capabilities to connect to the IoT platform through the gateway.
To achieve this purpose, you need to add the sub-device to the gateway to establish the connection between the sub-device and the gateway. 


__1) Register Sub-device Event Callback__

The event callback function is simply to add a monitoring task to the event source (component). When the sub-device triggers an event, the listener will process the event. The developer only needs to deal with the event notified by the event callback function. 

```c
/* Register event callback function */
Ql_iotConfigSetSubDevEventCB(Ql_iotSubEventCB);
```


__2) Authenticate Sub-device__

Connecting to Developer Center for the first time requires sub-device authentication, which can be done through Ql_iotSubDevConn(). After the MCU receives the successful authentication event report, the sub-device will automatically connect to Developer Center. If the authenticated sub-device is not connected to Developer Center, it can be deregistered through Ql_iotSubDevDeauth().

```c
/* Authenticate the sub-device to Developer Center */
Ql_iotSubDevConn("pxxxxm", VnhyxxxxxxxxSTFh, "123xxxx89", NULL, 0, 30);
```

<span style="color:#999AAA">Note: This function connects the sub-device to the gateway or authenticates the sub-device. The connection/authentication result is notified by the interaction event between the sub-device and the gateway. If subDs is set to NULL, it means to authenticate the sub-device; If subDs is specified, it means to connect the sub-device to the gateway.</span>


### __5. Sub-device Sends Heartbeat Packets__

To maintain the connection between the sub-device and the gateway, a heartbeat message is sent between them. The sub-device sends these packets periodically based on a **sub-device keepalive time** configured during connection to the gateway. To initiate the sending of these packets, the MCU must execute **AT+QIOTSUBHTB**.

```c
/* The sub-device sends heartbeat packet through the gateway to Developer Center */
Ql_iotSubDevHTB("pxxxxm","123123123");
```

### __6. TSL Data Interaction of Sub-device__

For remote control of a smart device, a gateway must report the status of the device, receive and execute commands from the IoT platform. Therefore, data transmission is the core capability of the gateway. The smart LGB light sub-device will be used to illustrate TSL model interaction.

#### __TSL Uplink Data__

Sub-devices can adopt different strategies to detect and process data properties based on the service scenarios. For example, sub-devices can read data from smart tri-color light sensor switches through the serial port, and then upload the read data to Developer Center through the gateway.


The TSL data sent is shown in the table below.

|  ID   | Type | Value |
| :---: | :--- | :---- |
|   1   | Bool | true  |
|   2   | Int  | 30    |

Sample code:

```c
void *ttlvHead = NULL;
Ql_iotTtlvIdAddBool(&ttlvHead, 1, TRUE);
Ql_iotTtlvIdAddInt(&ttlvHead, 2, 30);
Ql_iotSubDevTslReport_ex("pxxxxm","123xxxx89",ttlvHead);
Ql_iotTtlvFree(&ttlvHead);
```

<span style="color:#999AAA">Note: After adding the TSL node and calling it, call Ql_iotTtlvFree(), which will release a memory block pointed to by the pointer to avoid problems such as memory leakage.</span>

#### __TSL Downlink Data__

__1) Developer Center Issues TSL Service__

On the **Device Debug** page of Developer Center, click "**Property Debug**", select the TSL property to be issued, and click "**Send Command**" in the lower left corner to issue the TSL property to the sub-device. 

<a data-fancybox title="img" href="/en/deviceDevelop/develop/subDevice/Example-03.png">
  <img src="/en/deviceDevelop/develop/subDevice/Example-03.png" width="600" alt="img">
</a>

__2) Sub-device Receives and Processes TSL Data__

When the module receives the TSL data, it will automatically enter the sub-device event processing callback function **Ql_iotSubEventCB**, and you can perform data response processing according to the corresponding event.

* The sample code for event callback processing:

  ```c
  void Ql_iotSubEventCB(quint32_t event, qint32_t errcode, const char *subPk, const char *subDk, const void *value, quint32_t valLen)
  {
  	switch (event)
  	{
  	/* Operation of receiving the data */
  	case QIOT_ATEVENT_TYPE_RECV:
  		printf("data recv event,code:%d\r\n",errcode);
  		/* Received TSL data issued by Developer Center */
  		if(10210 == errcode)
  		{
  			/* TSL handle */
  			Ql_iotTtlvHandle(value);
  		}
  
  	default:
  		break;
  	}
  }
  ```
