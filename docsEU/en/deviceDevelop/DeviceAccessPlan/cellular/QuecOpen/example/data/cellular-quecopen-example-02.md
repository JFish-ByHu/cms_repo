# Example of Transparent Transmission Data Interaction

 ## __Introduction__

Transparent transmission data can be used in practical scenarios where there is no need for Developer Center to parse the data. Once the device has successfully connected to Developer center, call **Ql_iotCmdBusPassTransSend()** and **Ql_iotCmdBusPassTransSend_ex()** to enable interaction between the device and Developer Center, allowing for transparent transmission of any type of data. This section outlines how to send and receive transparent transmission data in QuecOpen solution.



## __Related API__

|            Function            |                                              Description                                               |
| :----------------------------: | :----------------------------------------------------------------------------------------------------: |
|  Ql_iotCmdBusPassTransSend()   |                        Sends transparent transmission data to Developer Center.                        |
| Ql_iotCmdBusPassTransSend_ex() | Sends transparent transmission data to Developer Center (only valid in SDK versions 2.10.0 and above). |

<span style='color:#999AAA'>Note: See [Data Interaction API](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-03) for details.</span>


## __Procedure__

### **Operation on Developer Center**

#### **1. Log in to Developer Center**

Log in to <a href="https://core.acceleronix.io"  target="_blank">Developer Center</a>. If you don't have an account, click <a href="https://core.acceleronix.io/registerType" target="_blank">Register Now</a> to register.

#### **2. Create a Product** 

<!-- The prerequisite for transparent transmission data interaction is selecting __Custom__ as the data format when a product is created.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecOpen/resource/data/SeriaNet/Example-01.png">![img](/en/deviceDevelop/cellular/QuecOpen/resource/data/SeriaNet/Example-01.png)</a> -->

For details about product creation, see [Create a Product](/deviceDevelop/DeviceAccessPlan/speediness-01).

### **Transparent Transmission Data Interaction**

In transparent transmission mode, if QoS = 1 or 2, the device will call the event callback function **Ql_iotEventCB()** and report event **+QIOTEVT: 4,10200** upon successful data transmission; If QoS = 0, the device will not call the event callback function **Ql_iotEventCB()** or report any event after a successful data transmission.

#### __Example 1 (Send transparent transmission data)__

The device calls **Ql_iotCmdBusPassTransSend()** to send transparent transmission data. For example, the device can call this function to send a 12-byte string "ABCabc123456" with QoS set to 1.


Sample code:

```c
Ql_iotCmdBusPassTransSend(1,(unsigned char *)"ABCabc123456",12);
```

#### __Example 2 (Read transparent transmission data issued by Developer Center)__

__1. Developer Center issues transparent transmission data__

Open the "__Device Details__" page, click "__Device Debug__" to send or receive transparent transmission data.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/data/SeriaNet/Example-02.png">![img](/en/deviceDevelop/develop/data/SeriaNet/Example-02.png)</a>

__2. Device receives the transparent transmission data issued by Developer Center__

After receiving the data, the device will automatically call the event callback function **Ql_iotEventCB**. You can respond to and handle the event based on the specific conditions at hand.

```c
void FUNCTION_ATTR_ROM Ql_iotEventCB(quint32_t event, qint32_t errcode, const void *value, quint32_t valLen)
{
   switch (event)
   {  
   		/* Received downlink event  */
 	  case QIOT_ATEVENT_TYPE_RECV:
 		/* Receive the transparent transmission data issued by Developer Center */
        if(10200 == errcode)
        {
            printf("pass data:%.*s\r\n",valLen,(char *)value);
            /*Code*/
        }    
      default: break;
    }
}
```


  


