#  Program Code

## __1. Initialize QuecThing__

QuecOpen SDK provides APIs for reading and writing device information and corresponding reference implementation, which can be adapted based on actual scenarios. When the device sends bootstrap authentication operations, Developer Center will authenticate the PK and PS. If the authentication succeeds, Developer Center will issue the required information to the device. Finally, the device carries this information to establish a connection with Developer Center.

```c
/* Initialize QuecThing SDK. */
Ql_iotInit();
/* Register callback function for interaction event between the device and Developer Center. */
Ql_iotConfigSetEventCB(Ql_iotEventCB);
/* Configure product information.*/
Ql_iotConfigSetProductinfo("p1xxxS", "VnhyxxxxxxxxSTFh");
/* Configure the connection mode between the device and Developer Center. */
Ql_iotConfigSetConnmode(1);
```

## __2. Event Callback Function__


In short, an event callback function is to add a listening task __Ql_iotEventCB()__ to an event source (component). When you trigger some event, the listener will take over the event and you can perform different operations according to different events. The data template sample __Ql_iotMain.c__ has implemented a generic framework for processing data events, and you can develop business logic based on this sample.

The event callback function can judge the event code and then enter the corresponding logic processing program. You only need to specifically process it in __Ql_iotEventCB()__. The event callback function can be divided into eight main events: bootstrap authentication, access, subscription, data sending, data receiving, de-registration, OTA, and Developer Center events. Specific descriptions are as follows:

* Bootstrap Authentication Event

>This event returns the result of device bootstrap authentication. You can check whether the device authentication is successful or not and view some error codes for connection failure, which facilitates developers to handle the errors according to the corresponding error codes.  

* Access Event

>This event returns whether the device accesses Developer Center successfully. When a device accesses Developer Center, there may be errors such as incorrect DeviceKey or abnormal network. Developers can handle these errors according to the error codes.

* Subscription Event

>This event returns whether subscribing to the MQTT topic is successful.

* Data Sending Event

>This event returns the result of sending data, such as sending TSL data, transparent transmission data and positioning data.

* Data Receiving Event

>This event indicates that the transparent transmission data or downlink TSL data (service call and issuing writable property) or querying TSL (reading operations in device debug) is received. Developers can interact with Developer Center according to this event.

* Deregistration Event

>This event indicates successful de-registration (disconnection), that is, the device disconnects from Developer Center.

* OTA Event

>This event returns OTA upgrade operations. For example, if there is a new OTA upgrade task, the developer can determine whether to enable the OTA upgrade according to the configuration in event arguments and check the OTA upgrade progress, including "There is an upgrade task", "Device starts to download firmware package", "The firmware package is being downloaded", "The firmware package is downloaded successfully", "The firmware package is being upgraded", "The firmware package is upgraded successfully" and "Firmware upgrade failure".

* Developer Center Event

  >This event indicates the Developer Center's current limit when the device sends or receives messages, for example,  the number of activations or requests of a device exceeds the requirement.

For example, when the device sends TSL data to Developer Center, the callback function informs {event:4,errcode:10210}, which indicates the device has successfully sent TSL data to Developer Center. Then the developer can process the event under the event callback function, as shown below:

```c
/**************************************************************************
** Function	@brief: Event callback
** Input   	@param : event: Main event 
** Input   	@param : errcode: Event code (subset)
** Input   	@param : value: Property data
** Input   	@param : valLen: Property data length
** Output  	@retval: NULL
***************************************************************************/
void Ql_iotEventCB(quint32_t event, qint32_t errcode, const void *value, quint32_t valLen)
{
	/* Determine the callback event. */
	switch (event)
	{
		/* Send data. */
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

<span style='color:#999AAA'>Note: See [Events Related to Interaction Between the Device and Developer Center](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/InteractionEvent) for details.</span>

## __3. Develop Application Logic__

### __1) Define Variable (Optional)__

A structure is a special compound __data type__ defined by users. Developers can define it according to the __TSL template__ on Developer Center, which will make the program structure clearer in the code project. In addition, you can add the structure type variable to the function in this way as needed.

* Sample Code

  ```c
  typedef struct 
  {
      float         OilsCurrentCapacity;  /* The remaining content of essential oil. Unit: ML.*/
      quint32_t     ReportFrequency;		/* Frequency of regular reporting. Unit: s.*/
      qbool         PowerSwitch;			/* On/Off status 0: Off; 1: On.*/
      qbool         OilsLackWarning;		/* Alert to lack of essential oil. Report the event to Developer Center when the essential oil is insufficient.*/
      quint32_t     WorkPattern;			/* Set working mode.*/
  }AromaDiffuser_type;  

  AromaDiffuser_type g_AromaDiffuser_st;
  ```

### __2) Implementation of Uplink Business Logic__


The device can detect and process data property based on service scenarios. For example, the device can read the remaining content of essential oil into the structure by connecting the sensor of the smart aromatherapy diffuser through a serial port. The module needs to upload the remaining content of essential oil read at this moment to Developer Center.

* Sample Code

  ```c
  while (1)
  {
      /*Report the remaining content of essential oil every 30 seconds.*/ 
      void *ttlvHead = NULL;   
      /*The remaining content of essential oil*/  
      Ql_iotTtlvIdAddFloat(&ttlvHead, 1, g_AromaDiffuser_st.OilsCurrentCapacity);
      /*The first argument is QoS, and when it is equal to or greater than 1, there will be an event callback response.*/
      Ql_iotCmdBusPhymodelReport(1, ttlvHead);
      Ql_iotTtlvFree(&ttlvHead);
      sleep(30); 
  }
  ```

  <span style="color:#999AAA">Note: After adding or calling TSL nodes, call Ql_iotTtlvFree() which releases a block of memory pointed to by the pointer, thus avoiding problems such as memory leakage.</span>

### __3) Implementation of Downlink Business Logic__

**QuecThing SDK** has simplified the development process for downlink data by parsing TTLV data based on the data template protocol. TSL is a template structure that uses the product data templates from Developer Center to define member variables. You can easily access property data from the parsed downlink data to add business logic in the downlink logic processing function.


* Sample Code

  ```c
  void Ql_iotEventCB(quint32_t event, qint32_t errcode, const void *value, quint32_t valLen)
  {
  	/* Determine callback event. */
  	switch (event)
  	{
  	    /* Receive data. */
  	    case QIOT_ATEVENT_TYPE_RECV:
  	        printf("data recv event,code:%d\r\n",errcode);
  	        /* Receive transparent transmission data. */
  	        if(10200 == errcode)
  	        {
  	            printf("pass data:%.*s\r\n",valLen,(char *)value);
  	            /* Test: Send the received transparent transmission data back to Developer Center. */
  	            Ql_iotCmdBusPassTransSend(1,(unsigned char *)value,valLen);
  	        }
  	        /* Receive TSL data (service or writable property) issued by Developer Center. */
  	        else if(10210 == errcode)
  	        {
  	            /* Test: Send the received TSL data back to Developer Center. */
  	            Ql_iotCmdBusPhymodelReport(1,value);
  	            /* Parse the TSL data (You can process the issued service in the function).*/
  	            Ql_iotTtlvHandle(value);
  	        }
  	        /* Receive the request for TSL data (Developer Center reads the data). */
  	        else if(10211 == errcode && value)
  	        {
  	            quint16_t pkgId = *(quint16_t *)value;
  	            quint16_t *ids = (quint16_t *)(value+sizeof(quint16_t));
  	            void *ttlvHead = NULL;
  	            printf("model read event,pkgid:%d\r\n",pkgId);
  	            quint32_t i = 0;
  	            for(i=0;i<valLen;i++)
  	            {
  	                quint16_t modelId = ids[i];
  	                printf("modelId:%d\r\n",modelId);
  	                /* id1:Float id2:int id3:Bool */
  	                switch (modelId)
  	                {
  	               	 case 1:
  	                    Ql_iotTtlvIdAddFloat(&ttlvHead, modelId, g_AromaDiffuser_st.OilsCurrentCapacity);/* The remaining content of essential oil. Unit: ML.*/
  	                    break;
  	              	  case 2:
  	                    Ql_iotTtlvIdAddInt(&ttlvHead, modelId, g_AromaDiffuser_st.ReportFrequency);/* Frequency of regular reporting. Unit: s. */
  	                    break;
  	              	  case 3:
  	                   Ql_iotTtlvIdAddBool(&ttlvHead, modelId, g_AromaDiffuser_st.PowerSwitch);/* On/Off status. */
  	                    break;
  	              	  default:
  	                    break;
  	                }
  	            }
  	            Ql_iotCmdBusPhymodelAck(1,pkgId,ttlvHead);/* Respond to the requested TSL data to Developer Center. */
  	           	Ql_iotTtlvFree(&ttlvHead);/* Releases TTLV resources. */
  	        }
  	        break;
  	          	default:
  	        break;
  	}
  }
  ```


## __4. Compile__

This part takes __EC600N-CNLC__ module as an example to introduce the compilation procedure.
### __1) Install Toolchain__ 

The SDK has embedded an __armcc toolchain__ . You only need to double-click __build. bat__ to run the script to complete the installation.
### __2) Create a Terminal__ 

What we need to do first is to open or create an integrated terminal. The simplest way is to press **Ctrl + Shift+`** or click **Terminal** > **Create Terminal** on the toolbar.
### __3) Compile__ 
<span style="color:#999AAA">Note: This compilation is based on the environment of  EC600N\LTE01R03A23_C_SDK_A_SDK\ql-sdk.</span>
<br><a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-14.png">![img](/en/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-14.png)</a>

__a. Compile Application File__
> ./build.bat app

__b. Generate Firmware__
> ./build.bat firmware
A __target__ folder, which contains  __LTEXXX_C_SDK_A.ZIP__, will be automatically generated in the current path after a successful compilation.

## __5. Download__
This part takes __EC600N-CNLC__ module as an example to introduce how to use a burning tool to download a program into the module.

__1) Download Burning Tool__
Enter the "__<a href="https://core.acceleronix.io/download?menuCode=MODULE_DEVL" target="_blank">Module Development</a>__" page, select the specified module to enter the corresponding download page, find the burning tool, QFlash, and download it.
<br><span style="color:#999AAA">Note: In Windows 10, after QFlash is downloaded successfully, right-click QFlash.exe and select "Run as Administrator" to run QFlash. </span>

__2) Connect PC to the Device__
Connect your PC to __Acceleronix Download Port__ of the module with a **MicroUSB** cable.

__3) Use the Burning Tool__
Open __QFlash__ and download the execution file __LTEXXX_C_SDK_A.ZIP__ into the module, as shown below.
<br> <span style="color:#999AAA">Note: The storage path of tools and firmware packages should not contain any spaces or Chinese characters. The storage/loading path of firmware packages should be a local path rather than a USB flash disk or network disk path.</span>

<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-15.png">![img](/en/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-15.png)</a>



__①__ Select the __COM Port__ and __Baudrate__ used to connect the module.<br>
__②__ Click __Load FW Files__ to open the generated execution file.<br>
__③__ Click __Start__ to download the program.
