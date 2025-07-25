# Example of TSL Data Interaction

## **Introduction**

This section explains how to send and receive TSL data in QuecOpen solution.

## **Related APIs**

|            Function             | Description                                            |
| :-----------------------------: | :----------------------------------------------------- |
|  Ql_iotCmdBusPhymodelReport()   | Sends TSL data to Developer Center.                    |
| Ql_iotCmdBusPhymodelReport_ex() | Sends TSL data to Developer Center according to PkgID. |
|    Ql_iotCmdBusPhymodelAck()    | Replies to TSL data request from Developer Center.     |

<span style='color:#999AAA'>Note: See [Data Interaction API](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-03) for details.</span>

## **TTLV Data API**

|         Function          |                   Description                    |
| :-----------------------: | :----------------------------------------------: |
|   Ql_iotTtlvCountGet()    | Gets the number of nodes in the TTLV data table. |
|    Ql_iotTtlvNodeGet()    |     Extracts nodes from the TTLV data table.     |
|     Ql_iotTtlvFree()      |       Releases TTLV data table resources.        |
|  Ql_iotTtlvNodeGetType()  | Gets data type from a specified TTLV data node.  |
|  Ql_iotTtlvNodeGetBool()  |          Gets Boolean data from a node.          |
|  Ql_iotTtlvNodeGetInt()   |          Gets integer data from a node.          |
| Ql_iotTtlvNodeGetFloat()  |           Gets float data from a node.           |
| Ql_iotTtlvNodeGetString() |          Gets string data from a node.           |
|  Ql_iotTtlvNodeGetByte()  |           Gets byte data from a node.            |
| Ql_iotTtlvNodeGetStruct() |          Gets struct data from a node.           |
|   Ql_iotTtlvIdGetType()   |   Gets data type from a specified feature ID.    |
|   Ql_iotTtlvIdGetBool()   |  Gets Boolean data from a specified feature ID.  |
|   Ql_iotTtlvIdGetInt()    |  Gets integer data from a specified feature ID.  |
|  Ql_iotTtlvIdGetFloat()   |   Gets float data from a specified feature ID.   |
|  Ql_iotTtlvIdGetString()  |  Gets string data from a specified feature ID.   |
|   Ql_iotTtlvIdGetByte()   |   Gets byte data from a specified feature ID.    |
|  Ql_iotTtlvIdGetStruct()  |  Gets struct data from a specified feature ID.   |
|   Ql_iotTtlvIdAddBool()   |    Adds Boolean data node to TTLV data table.    |
|   Ql_iotTtlvIdAddInt()    |    Adds integer data node to TTLV data table.    |
|  Ql_iotTtlvIdAddFloat()   |     Adds float data node to TTLV data table.     |
|   Ql_iotTtlvIdAddByte()   |     Adds byte data node to TTLV data table.      |
|  Ql_iotTtlvIdAddStruct()  |    Adds struct data node to TTLV data table.     |

<span style='color:#999AAA'>Note: See [TTLV Data API](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-04) for details.</span>
## **Procedure**

### **Operation on Developer Center**

#### **1. Log in to Developer Center**

Log in to <a href="https://core.acceleronix.io"  target="_blank">Developer Center</a>. If you don't have an account, click <a href="https://core.acceleronix.io/registerType" target="_blank">Register Now</a> to register.

#### 2. Create a Product



For details about product creation, see [Create a Product](/deviceDevelop/DeviceAccessPlan/speediness-01).


### **Operations on Device**

#### **TSL Data Interaction**

TSL is a data model established by Developer Center for physical entity devices, which is used to describe product features to facilitate data parsing. You can configure TSL data to make the device interact with Developer Center, once the device is successfully connected to Developer Center.

#### **Example 1 (Send TSL data)**

|      **Feature  ID**       | **Type**  |               **Feature** Name                | **Data Type** |             **Value Range**             |    **Reference**    |
| :------------------------: | :-------: | :-------------------------------------------: | :-----------: | :-------------------------------------: | :-----------------: |
|             1              | Property  |                    Switch                     |     BOOL      |          TRUE: On  FALSE: Off           |                     |
|             2              | Property  |                 Battery Level                 |      INT      |                  0–100                  |                     |
|             3              | Property  |      Remaining Content of Essential Oil       |     FLOAT     |                  0–300                  |                     |
|             4              | Property  |                 Working Mode                  |     ENUM      |              1–HPC  2–CPL               |                     |
|             5              | Property  |                   Device ID                   |     TEXT      |                  0–20                   |                     |
|             6              | Property  |                     Time                      |     DATE      |                   --                    |                     |
|             7              | Property  |                   Structure                   |    STRUCT     |                   --                    |  Feature IDs: 8, 9  |
|  8 (parent feature ID: 7)  | Parameter | <span v-pre>        {$Parameter}      </span> |     BOOL      |          TRUE: On  FALSE: Off           |                     |
|  9 (parent feature ID: 7)  | Parameter | <span v-pre>        {$Parameter}      </span> |      INT      |                  0–100                  |                     |
|             10             | Property  |                 Integer Array                 |     ARRAY     | Maximum quantity: 10  Element type: INT |                     |
|             11             | Property  |                Structure Array                |     ARRAY     |                                         | Feature IDs: 12, 13 |
| 12 (parent feature ID: 11) | Parameter | <span v-pre>        {$Parameter}      </span> |     BOOL      |          TRUE: On  FALSE: Off           |                     |
| 13 (parent feature ID: 11) | Parameter | <span v-pre>        {$Parameter}      </span> |      INT      |                  0–100                  |                     |

The device can adopt certain strategies to detect and process the properties based on the requirements of business scenarios. For example, after reading the remaining content of essential oil from the sensor, the device reports the remaining content of essential oil, frequency of regular reporting and on/off status to Developer Center.

- Sample code

  ```c
  void *ttlvHead = NULL;
  /* Add Boolean data. {"1":true}*/
  Ql_iotTtlvIdAddBool(&ttlvHead, 1,  TRUE);
  /* Add integer data. {"2":100}*/
  Ql_iotTtlvIdAddInt(&ttlvHead, 2 , 100);
  /* Add float data. {"3":25.6}*/
  Ql_iotTtlvIdAddFloat(&ttlvHead, 3,  25.6);
  /* Add integer data. {"4":1}*/
  Ql_iotTtlvIdAddInt(&ttlvHead, 4 , 1);
  /* Add string data. {"5":"ZWS"}*/
  Ql_iotTtlvIdAddString(&ttlvHead, 5, "ZWS");
  /* Add string data. {"6":1659664758817}*/
  Ql_iotTtlvIdAddString(&ttlvHead, 6, "1659664758817");
  /* Add structure data. {"7":{"8":true,"9":100}}*/
  void *intStructHead = NULL;
  Ql_iotTtlvIdAddBool(&intArrayHead, 8, TRUE);
  Ql_iotTtlvIdAddInt(&intArrayHead, 9, 100);
  Ql_iotTtlvIdAddStruct(&ttlvHead, 7, intArrayHead);
  /* Add integer data. {"10":[10,20,30]}*/
  void *intArrayIntHead = NULL;
  Ql_iotTtlvIdAddInt(&intArrayIntHead , 0, 10);
  Ql_iotTtlvIdAddInt(&intArrayIntHead , 0, 20);
  Ql_iotTtlvIdAddInt(&intArrayIntHead , 0, 30);
  Ql_iotTtlvIdAddStruct(&ttlvHead, 10, intArrayIntHead);
  /* Add array data. Referenced parameters: 12 and 13. {"11":[{"12":true,"13":100},{"12":false,"13":98}]}*/
  void *intArrayHead = NULL;
  void *intArrayHead1 = NULL;
  Ql_iotTtlvIdAddBool(&intArrayHead, 12, TRUE);
  Ql_iotTtlvIdAddInt(&intArrayHead, 13, 100);
  Ql_iotTtlvIdAddStruct(&intArrayHead1, 0, intArrayHead);
  Ql_iotTtlvIdAddStruct(&ttlvHead, 11, intArrayHead1);
  /* Send TSL data to the platform. QoS = 2 */
  Ql_iotCmdBusPhymodelReport_ex(2,ttlvHead);
  /* Release the resources. */
  Ql_iotTtlvFree(&ttlvHead);
  ```

  <span style='color:#999AAA'>Note: Call **Ql_iotTtlvFree()** to release the TTLV data resources after the use of TSL model node. **Ql_iotTtlvFree()** will release a memory block pointed to by the pointer, thus avoiding problems such as memory leakage.</span>

  <span style='color:#999AAA'>Note: If QoS = 1 or 2, the module will automatically call **Ql_iotEventCB()**, the event callback function, after sending TSL data to Developer Center. You can use the returned event code to handle the response. For example, the event code (*eventCB)(4, 10210,value,valLen) indicates that the device has sent TSL data successfully.</span>

#### **Example 2 (Reply to TSL data request from Developer Center)**

**1) Developer Center reads real-time TSL data in batches**

On the "**Device Debug**" tab of "**Device Details**" page, click "**Read Data in Batches**" to read TSL property value in batches.

**2) Module receives the TSL data request from Developer Center and replies to the request**

When the device receives a TSL data request from Developer Center, it will call Ql_iotEventCB(), the event callback function. You can use the returned event code to handle the request. For example, the event code of (*eventCB)(5, 10211,value,valLen) indicates that the device has received a TSL data request from Developer Center.

- Sample code of event callback function 

  ```c
  void FUNCTION_ATTR_ROM Ql_iotEventCB(quint32_t event, qint32_t errcode, const void *value, quint32_t valLen)
  {
     switch (event)
     {  
     		/* Receive TSL data */
   	  case QIOT_ATEVENT_TYPE_RECV:
   		/* TSL data request from Developer Center is received. */
  		if(10211 == errcode && value)
  		{
  		    quint16_t PkgID = *(quint16_t *)value;
  		    quint16_t *ids = (quint16_t *)((quint8_t*)value+sizeof(quint16_t));
  		    void *ttlvHead = NULL;
  		    printf("model read event,PkgID:%d\r\n",PkgID);
  		    quint32_t i;
  		    for(i=0;i<valLen;i++)
  		    {
  		        quint16_t modelId = ids[i];
  		        printf("modelId:%d\r\n",modelId);
  		        switch (modelId)
  		        {
  		        case 1:
  		            Ql_iotTtlvIdAddBool(&ttlvHead, modelId,  TRUE);
  		            break;
  		        case 2:
  		            Ql_iotTtlvIdAddInt(&ttlvHead, modelId , 100);
  		            break;
  		        case 3:
  		            Ql_iotTtlvIdAddFloat(&ttlvHead, modelId,  25.6);
  		            break;
  		        case 4:
  		            Ql_iotTtlvIdAddInt(&ttlvHead, modelId , 1);
  		            break;
  		        case 5:
  		            Ql_iotTtlvIdAddString(&ttlvHead, modelId, "ZWS");
  		            break;
  		        case 6:
  		            Ql_iotTtlvIdAddString(&ttlvHead, modelId, "1659664758817");
  		            break;
  		        case 7:
  		           	void *intStructHead = NULL;
  					Ql_iotTtlvIdAddBool(&intArrayHead, 8, TRUE);
  					Ql_iotTtlvIdAddInt(&intArrayHead, 9, 100);
  					Ql_iotTtlvIdAddStruct(&ttlvHead, modelId, intArrayHead);
  		            break;
  		        case 10:
  		           	void *intArrayIntHead = NULL;
  					Ql_iotTtlvIdAddInt(&intArrayIntHead , 0, 100);
  					Ql_iotTtlvIdAddStruct(&ttlvHead, modelId, intArrayIntHead);
  		            break;
  		        case 11:
  					void *intArrayHead = NULL;
  					void *intArrayHead1 = NULL;
  					Ql_iotTtlvIdAddBool(&intArrayHead, 12, TRUE);
  					Ql_iotTtlvIdAddInt(&intArrayHead, 13, 100);
  					Ql_iotTtlvIdAddStruct(&intArrayHead1, 0, intArrayHead);
  					Ql_iotTtlvIdAddStruct(&ttlvHead, modelId, intArrayHead1);
  		            break;
  		        default: break;
  		        }
  		    }
  		    Ql_iotCmdBusPhymodelAck(0, PkgID,ttlvHead);
  		    Ql_iotTtlvFree(&ttlvHead);	
  			break;	
  	  } 	     
        default: break;
      }
  }
  ```

  <span style='color:#999AAA'>Note: If QoS = 1 or 2, the module will automatically call **Ql_iotEventCB()**, the event callback function, after sending TSL data to Developer Center. You can use the returned event code to handle the response. For example, the event code (*eventCB)(4, 10210,value,valLen) indicates that the device has sent TSL data successfully.</span>

#### **Example 3 (Report TSL alert event)**

|     Feature ID     |   Type    |            Feature Name            | Data Type | Value Range |         Reference          |
| :----------------: | :-------: | :--------------------------------: | :-------: | :---------: | :------------------------: |
|         14         |   Event   |   Alert to lack of essential oil   |   BOOL    |             | Output feature IDs: 15, 16 |
| 15 (parent ID: 14) | Parameter |           Battery Level            |    INT    |    0–100    |                            |
| 16 (parent ID: 14) | Parameter | Remaining Content of Essential Oil |   FLOAT   |    0–300    |                            |

This example demonstrates how the device reports an alert event to Developer Center when it detects a shortage of essential oils. The alert event comprises two output parameters: **battery level and the remaining content of essential oil**. The output parameter **IDs 15 and 16** are included in the alert event to form a structured message that is sent to Developer Center.



- Sample code

  ```c
  void *ttlvHead = NULL;
  void *ttlvArrayHead = NULL;
  /*Add structure data. Referenced parameters: 15 and 16. */
  Ql_iotTtlvIdAddBool(&ttlvArrayHead, 15, TRUE);
  Ql_iotTtlvIdAddFloat(&ttlvArrayHead, 16, 20.5);
  Ql_iotTtlvIdAddStruct(&ttlvHead, 14, ttlvArrayHead);
  /* Send TSL data to Developer Center.*/
  Ql_iotCmdBusPhymodelReport_ex(2, ttlvHead);    
  Ql_iotTtlvFree(&ttlvHead);
  ```

#### **Example 4 (Read TSL data issued by Developer Center)**

|     Feature ID     |      Type       | Feature Name | Data Type | Value Range | Reference             |
| :----------------: | :-------------: | :----------: | :-------- | :---------- | :-------------------- |
|         17         |     Service     |   Service    | BOOL      |             | Output feature ID: 18 |
| 18 (parent ID: 17) | Input Parameter |     Mode     | ENUM      | 0–2         |                       |

**1) Developer Center issues TSL data**

On the "**Device Debug**" page, click "**Service Calls**", then select the service to be issued, and click **Send Command** in the lower left corner. 

 **2) Device receives data**

When the device receives request for TSL model from Developer Center, it will call **Ql_iotEventCB()**, the event callback function. You use the returned event code to handle the response. For example, the event code (*eventCB)(5, 10211,value,valLen) indicates that the device has received the TSL data request from Developer Center.

- Sample code of event callback function 

  ```c
  void FUNCTION_ATTR_ROM Ql_iotEventCB(quint32_t event, qint32_t errcode, const void *value, quint32_t valLen)
  {
     switch (event)
     {  
     		/* Received downlink event  */
   	  case QIOT_ATEVENT_TYPE_RECV:
   		/* The data issued by Developer Center is received. */
          if(10210 == errcode)
          {
              /* Parse the issued TSL data */
              Ql_iotTtlvHandle(value);
          }	     
        default: break;
      }
  }
  ```

- Sample code for calling ***Ql_iotTtlvHandle()*** function for parsing TSL data

  ```c
  void Ql_iotTtlvHandle(const void *ttlvHead)
  {
  	quint32_t count = Ql_iotTtlvCountGet(ttlvHead); /* Get the number of nodes in the data table.*/ 
  	quint32_t i;
  	for(i=0;i<count;i++)
  	{
  		uint16_t id;
  		QIot_dpDataType_e type;
  		void *node = Ql_iotTtlvNodeGet(ttlvHead, i, &id, &type); /* Get data nodes from the data table.*/ 
  		if(node)
  		{
  			switch (id)
  			{               
  				case 17:
  				{             
  					/* Traverse the process again if the data type is struct. */ 
  					Ql_iotTtlvHandle(Ql_iotTtlvNodeGetStruct(node));
  					break;
  				}
  				case 18:
  				{ 
  					qint64_t num;
  					Ql_iotTtlvNodeGetInt(node, &num); 
  					printf("Feature ID 18 value：%d",num);  /* Get and print the input parameter of TSL service. */ 
  					break;
  				}
  			default:break;
  			}
  		}
  	}
  }
  ```
