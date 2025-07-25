# Example of TSL Data Interaction


## __Introduction__
This section explains how to send and receive TSL data in QuecOpen solution.

## __Related API__


|     Function     | Description                         |
| :--------------: | :---------------------------------- |
| Qth_cmdSendTsl() | Sends TSL data to Developer Center. |

<span style='color:#999AAA'>Note: See[Device Connection API](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-03) for details.</span>


## __TTLV Data API__

|         Function         |                    Description                     |
| :----------------------: | :------------------------------------------------: |
|   Quos_ttlvGetCount()    |             Gets the number of nodes.              |
|    Quos_ttlvGetNode()    |            Gets the pointer to a node.             |
|     Quos_ttlvFree()      |        Releases TTLV data table resources.         |
|  Quos_ttlvGetNodeType()  |           Gets the data type of a node.            |
|  Quos_ttlvGetNodeBool()  |           Gets boolean data from a node.           |
|  Quos_ttlvGetNodeInt()   |           Gets integer data from a node.           |
| Quos_ttlvGetNodeFloat()  |            Gets float data from a node.            |
|  Quos_ttlvGetNodeText()  |            Gets text data from a node.             |
|  Quos_ttlvGetNodeRaw()   |             Gets raw data from a node.             |
| Quos_ttlvGetNodeStruct() |          Gets structure data from a node.          |
|   Quos_ttlvGetIdType()   |       Gets the data type of a specific node.       |
|   Quos_ttlvGetIdBool()   |      Gets boolean data from a specific node.       |
|   Quos_ttlvGetIdInt()    |      Gets integer data from a specific node.       |
|  Quos_ttlvGetIdFloat()   |       Gets float data from a specific node.        |
|   Quos_ttlvGetIdText()   |        Gets text data from a specific node.        |
|   Quos_ttlvGetIdRaw()    |        Gets raw data from a specific node.         |
|  Quos_ttlvGetIdStruct()  |     Gets structure data from a specific node.      |
|   Quos_ttlvAddIdBool()   |  Adds a boolean data node to the TTLV data table.  |
|   Quos_ttlvAddIdInt()    | Adds an integer data node to the TTLV data table.  |
|  Quos_ttlvAddIdFloat()   |   Adds a float data node to the TTLV data table.   |
|   Quos_ttlvAddIdText()   |   Adds a text data node to the TTLV data table.    |
|   Quos_ttlvAddIdRaw()    |    Adds a raw data node to the TTLV data table.    |
|  Quos_ttlvAddIdStruct()  | Adds a structure data node to the TTLV data table. |

<span style='color:#999AAA'>Note: See [TTLV data API](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-05) for details.</span>
	

## __Procedure__
### __Operations on Developer Center__
#### __1. Log in to Developer Center__
Log in to <a href="https://core.acceleronix.io"  target="_blank">Developer Center</a>. If you don't have an account, click <a href="https://core.acceleronix.io/registerType" target="_blank">Register Now</a> to register.

#### __2. Create a Product__
<!-- The prerequisite for TSL data interaction is selecting **TSL Model** as the data format when a product is created.

<a data-fancybox title="img" href="/en/docs/QuecOpen/resource/data/Physical_model/Example-01.png">![img](/en/docs/QuecOpen/resource/data/Physical_model/Example-01.png)</a> -->

For details about product creation, see [Create a Product](/deviceDevelop/DeviceAccessPlan/speediness-01)。


## __Operations on Device__
### __TSL Data Interaction__

TSL is a data model established by Developer Center for physical entity devices, which is used to describe product features to facilitate data parsing. You can configure TSL data to make the device interact with Developer Center, once the device is successfully connected to Developer Center.


#### __Example 1 (Send TSL data)__

|        Feature  ID         | Type      | Feature Name                                  | Data Type | Value Range                             | Reference           |
| :------------------------: | :-------- | :-------------------------------------------- | :-------- | :-------------------------------------- | :------------------ |
|             1              | Property  | Switch                                        | BOOL      | true - On<br>false - Off                |                     |
|             2              | Property  | Battery Level                                 | INT       | 0–100                                   |                     |
|             3              | Property  | Remaining Content of Essential Oil            | FLOAT     | 0–300                                   |                     |
|             4              | Property  | Working Mode                                  | ENUM      | 1–HPC<br>2–CPL                          |                     |
|             5              | Property  | Device ID                                     | TEXT      | 0–20                                    |                     |
|             6              | Property  | Time                                          | DATE      | --                                      |                     |
|             7              | Property  | Structure                                     | STRUCT    | --                                      | Feature IDs: 8, 9   |
|  8 (parent feature ID: 7)  | Parameter | <span v-pre>        {$Parameter}      </span> | BOOL      | true - On<br>false - Off                |                     |
|  9 (parent feature ID: 7)  | Parameter | <span v-pre>        {$Parameter}      </span> | INT       | 0–100                                   |                     |
|             10             | Property  | Integer Array                                 | ARRAY     | Maximum quantity: 10  Element type: INT |                     |
|             11             | Property  | Structure Array                               | ARRAY     |                                         | Feature IDs: 12, 13 |
| 12 (parent feature ID: 11) | Parameter | <span v-pre>        {$Parameter}      </span> | BOOL      | true - On<br>false - Off                |                     |
| 13 (parent feature ID: 11) | Parameter | <span v-pre>        {$Parameter}      </span> | INT       | 0–100                                   |                     |

The device can adopt certain strategies to detect and process the properties based on the requirements of business scenarios. For example, after reading the remaining content of essential oil from the sensor, the device reports the remaining content of essential oil, frequency of regular reporting and on/off status to Developer Center.
* Sample code
  ```c
  void *ttlvHead = NULL;
  /* Add Boolean data. {"1":true}*/
  Quos_ttlvAddIdBool(&ttlvHead, 1,  TRUE);
  /* Add integer data.  {"2":100}*/
  Quos_ttlvAddIdInt(&ttlvHead, 2 , 100);
  /* Add float data.  {"3":25.6}*/
  Quos_ttlvAddIdFloat(&ttlvHead, 3,  25.6);
  /* Add enumeration data.  {"4":1}*/
  Quos_ttlvAddIdInt(&ttlvHead, 4 , 1);
  /* Add string data.  {"5":"ZWS"}*/
  Quos_ttlvAddIdText(&ttlvHead, 5, "ZWS", Quos_strlen("ZWS"));
  /* Add string data.  {"6":1659664758817}*/
  Quos_ttlvAddIdText(&ttlvHead, 6, "1659664758817", Quos_strlen("1659664758817"));
  /* Add structure data.  {"7":{"8":true,"9":100}}*/
  void *intStructHead = NULL;
  Quos_ttlvAddIdBool(&intArrayHead, 8, TRUE);
  Quos_ttlvAddIdInt(&intArrayHead, 9, 100);
  Quos_ttlvAddIdStruct(&ttlvHead, 7, intArrayHead);
  /* Add integer array data.  {"10":[10,20,30]}*/
  void *intArrayIntHead = NULL;
  Quos_ttlvAddIdInt(&intArrayIntHead , 0, 10);
  Quos_ttlvAddIdInt(&intArrayIntHead , 0, 20);
  Quos_ttlvAddIdInt(&intArrayIntHead , 0, 30);
  Quos_ttlvAddIdStruct(&ttlvHead, 10, intArrayIntHead);
  /* Add structure array data. Referenced parameters: 12 and 13. {"11":[{"12":true,"13":100},{"12":false,"13":98}]}*/
  void *intArrayHead = NULL;
  void *intArrayHead1 = NULL;
  Quos_ttlvAddIdBool(&intArrayHead, 12, TRUE);
  Quos_ttlvAddIdInt(&intArrayHead, 13, 100);
  Quos_ttlvAddIdStruct(&intArrayHead1, 0, intArrayHead);
  Quos_ttlvAddIdStruct(&ttlvHead, 11, intArrayHead1);
  /* Send TSL data to the platform. QoS = 2 */
  Qth_cmdSendTsl(QTH_SEND_EXACTLY_ONCE,ttlvHead,NULL,NULL);
  /* Release the resources. */
  Quos_ttlvFree(&ttlvHead);
  ```
  <span style='color:#999AAA'>Note 1: Call __*Quos_ttlvFree()*__ to release the TTLV data resources after the use of TSL model node. __*Quos_ttlvFree()*__ will release a memory block pointed to by the pointer, thus avoiding problems such as memory leakage.</span>

  <span style='color:#999AAA'>Note 2: If the module has registered *Qth_sendCb_f()* when it sends TSL data, the callback function of data sending result will be called to notify the device of the TSL data sending result. The device can determine which data is sent according to the PkgID in *Qth_sendCb_f()*</span>

* Sample code
  
	```c
    void sendCb(quint16_t pkgId, qbool result)
    {
        Quos_logPrintf(APPS_OPEN, LL_DBG, "recv send event, pkgId:%u, result:%d\r\n", pkgId, result);
    }
        
    ...
    quint16_t pkgId = 0;
    Qth_cmdSendTsl(QTH_SEND_AT_LEAST_ONCE, ttlvHead, &pkgId, sendCb);
    Quos_logPrintf(APPS_OPEN, LL_DBG, "pkgId:%u\r\n", pkgId);
  ```
#### __Example 2 (Reply to TSL data request from Developer Center)__
__1) Developer Center reads real-time TSL data in batches__

On the "**Device Debug**" tab of "**Device Details**" page, click "**Read Data in Batches**" to read TSL property value in batches.


__2) Module receives the TSL data request from Developer Center and replies to the request__

When the module receives a TSL data request from Developer Center, it will call __*Qth_ttlvReqCb_f*__, the event callback function. You can use the issued feature ID to handle the request.

* Sample code of event callback function
	```c
	void *ttlvReqCb(quint16_t id[], quint32_t idNum)
    {
        void *ttlvHead = NULL;
        quint32_t i;
        for(i=0;i<idNum;i++)
        {
            quint16_t modelId = id[i];
            Quos_logPrintf(APPS_OPEN, LL_DBG, "modelId:%d\r\n",modelId);
            switch (modelId)
            {
            case 1:
                Quos_ttlvAddIdBool(&ttlvHead, modelId,  TRUE);
                break;
            case 2:
                Quos_ttlvAddIdInt(&ttlvHead, modelId , 100);
                break;
            case 3:
                Quos_ttlvAddIdFloat(&ttlvHead, modelId,  25.6);
                break;
            case 4:
                Quos_ttlvAddIdInt(&ttlvHead, modelId , 1);
                break;
            case 5:
                Quos_ttlvAddIdText(&ttlvHead, modelId, "ZWS", Quos_strlen("ZWS"));
                break;
            case 6:
                Quos_ttlvAddIdText(&ttlvHead, modelId, "1659664758817", Quos_strlen("1659664758817"));
                break;
            case 7:
                void *intStructHead = NULL;
                Quos_ttlvAddIdBool(&intStructHead, 8, TRUE);
                Quos_ttlvAddIdInt(&intStructHead, 9, 100);
                Quos_ttlvAddIdStruct(&ttlvHead, modelId, intStructHead);
                break;
            case 10:
                void *intArrayIntHead = NULL;
                Quos_ttlvAddIdInt(&intArrayIntHead , 0, 10);
                Quos_ttlvAddIdInt(&intArrayIntHead , 0, 20);
                Quos_ttlvAddIdInt(&intArrayIntHead , 0, 30);
                Quos_ttlvAddIdStruct(&ttlvHead, modelId, intArrayIntHead);
                break;
            case 11:
                void *intArrayHead = NULL;
                void *intArrayHead1 = NULL;
                Quos_ttlvAddIdBool(&intArrayHead, 12, TRUE);
                Quos_ttlvAddIdInt(&intArrayHead, 13, 100);
                Quos_ttlvAddIdStruct(&intArrayHead1, 0, intArrayHead);
                Quos_ttlvAddIdStruct(&ttlvHead, modelId, intArrayHead1);
                break;
            default: break;
            }
        }
        return ttlvHead;
    }
	```

<span style="color:#999AAA">Note: The memory of the returned TTLV data table will be released by the SDK itself. Developers only need to add the returned TSL data to the TTLV data table linked list.</span>

#### __Example 3 (Report TSL alert event)__

|     Feature ID     | Type      | Feature Name                       | Data Type | Value Range | Reference                  |
| :----------------: | :-------- | :--------------------------------- | :-------- | :---------- | :------------------------- |
|         14         | Event     | Event                              | BOOL      |             | Output feature IDs: 15, 16 |
| 15 (parent ID: 14) | Parameter | Battery Level                      | INT       | 0–100       |                            |
| 16 (parent ID: 14) | Parameter | Remaining Content of Essential Oil | FLOAT     | 0–300       |                            |

This example demonstrates how the device reports an alert event to Developer Center when it detects a shortage of essential oils. The alert event comprises two output parameters: **battery level** and **the remaining content of essential oil**. The output parameter **IDs 15 and 16** are included in the alert event to form a structured message that is sent to Developer Center.

* Sample code
	```c
	void *ttlvHead = NULL;
	void *ttlvArrayHead = NULL;
	/* Add structure data. Referenced parameters: 15 and 16. */
	Quos_ttlvAddIdBool(&ttlvArrayHead, 15, TRUE);
	Quos_ttlvAddIdFloat(&ttlvArrayHead, 16, 20.5);
	Quos_ttlvAddIdStruct(&ttlvHead, 14, ttlvArrayHead);
	/* Send TSL data to Developer Center. */
	Qth_cmdSendTsl(QTH_SEND_EXACTLY_ONCE,ttlvHead,NULL,NULL);
	Quos_ttlvFree(&ttlvHead);
	```

#### __Example 4 (Read TSL data issued by Developer Center)__

|     Feature ID     | Type            | Feature Name | Data Type | Value Range | Reference             |
| :----------------: | :-------------- | :----------- | :-------- | :---------- | :-------------------- |
|         17         | Service         | Service      | BOOL      |             | Output feature ID: 18 |
| 18 (parent ID: 17) | Input Parameter | Mode         | ENUM      | 0–2         |                       |


__1) Developer Center issues TSL data__

On the "**Device Debug**" page, click "**Service Calls**", then select the service to be issued, and click "**Send Command**" in the lower left corner.


__2) Device receives data__

When the device receives request for TSL model from Developer Center, it will call *Qth_ttlvReqCb_f*, the event callback function. You use the returned event code to handle the response. 

* Sample code of event callback function
	```c
    void ttlvRecvCb(void *ttlvHead)
    {
        Ql_iotTtlvHandle(ttlvHead);
    }
	```

* Sample code for calling *Ql_iotTtlvHandle()* of parsing TSL data
	```c
	void Ql_iotTtlvHandle(const void *ttlvHead)
	{
		quint32_t count = Quos_ttlvGetCount(ttlvHead); /*Get the number of nodes in the data table.*/ 
		quint32_t i;
		for(i=0;i<count;i++)
		{
			uint16_t id;
			Quos_dpDataType_e type;
			void *node = Quos_ttlvGetNode(ttlvHead, i, &id, &type); /*Gets the pointer to a node from the data table.*/ 
			if(node)
			{
				switch (id)
				{               
					case 17:
					{             
						/*Traverse the process again if the data type is structure.*/ 
						Ql_iotTtlvHandle(Quos_ttlvGetNodeStruct(node));
						break;
					}
					case 18:
					{ 
						qint64_t num;
						Quos_ttlvGetNodeInt(node, &num); 
						Quos_logPrintf(APPS_OPEN, LL_DBG, "功能ID 18 value：%d",num);  /*Get and print the input parameter of TSL service.*/ 
						break;
					}
				default:break;
				}
			}
		}
	}
	```




