# Example of Transparent Transmission Data Interaction
 ## __Introduction__
Transparent transmission data can be used in practical scenarios where there is no need for Developer Center to parse the data. Once the device has successfully connected to Developer center, call __Qth_cmdSendTrans()__ to enable interaction between the device and Developer Center, allowing for transparent transmission of any type of data. This section outlines how to send and receive transparent transmission data in QuecOpen solution.



## __Related API__

|      Function      |                       Description                        |
| :----------------: | :------------------------------------------------------: |
| Qth_cmdSendTrans() | Sends transparent transmission data to Developer Center. |

<span style='color:#999AAA'>Note: See[Device Connection API](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-03) for details.</span>


## __Procedure__
### __Operations on Developer Center__
#### __1. Log in to Developer Center__

Log in to <a href="https://core.acceleronix.io"  target="_blank">Developer Center</a>. If you don't have an account, click <a href="https://core.acceleronix.io/registerType" target="_blank">Register Now</a> to register.


#### __2. Create a Product__ 

<!-- The prerequisite for transparent transmission data interaction is selecting **Transparent Transmission/Custom** as the data format when a product is created. 

<a data-fancybox title="img" href="/en/docs/QuecOpen/resource/data/SeriaNet/Example-01.png">![img](/en/docs/QuecOpen/resource/data/SeriaNet/Example-01.png)</a> -->

For details about product creation, see [Create a Product](/deviceDevelop/DeviceAccessPlan/speediness-01).


### __Transparent Transmission Data Interaction__
If the module has registered *Qth_sendCb_f()* when it sends transparent transmission data, the callback function of data sending result will be called to notify the device of the transparent transmission data sending result. The device can determine which data is sent according to the PkgID in *Qth_sendCb_f()*.

#### __Example 1 (Send transparent transmission data without callback function registered)__
The device calls __Qth_cmdSendTrans()__ to send transparent transmission data. For example, the device can call this function to send a 12-byte string "ABCabc123456" with QoS set to 1.

Sample code:

```c
Qth_cmdSendTrans(1,(unsigned char *)"ABCabc123456",12,NULL,NULL);
```
#### __Example 2 (Send transparent transmission data with callback function registered)__
The device calls __Qth_cmdSendTrans()__ to send transparent transmission data. For example, the device can call this function to send a 12-byte string "ABCabc123456" with QoS set to 1 and register the callback function of receiving data sending result.

Sample code:

```c
void sendCb(quint16_t pkgId, qbool result)
{
    Quos_logPrintf(APPS_OPEN, LL_DBG, "recv send event, pkgId:%u, result:%d\r\n", pkgId, result);
}
    
...
quint16_t pkgId = 0;
Qth_cmdSendTrans(1,(unsigned char *)"ABCabc123456",12,&pkgId, sendCb);
Quos_logPrintf(APPS_OPEN, LL_DBG, "pkgId:%u\r\n", pkgId);
```

#### __Example 3 (Read transparent transmission data issued by Developer Center)__

__1. Developer Center issues transparent transmission data__

Open the "__Device Details__" page, click "__Device Debug__" to send or receive transparent transmission data.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/data/SeriaNet/Example-02.png">
  <img src="/en/deviceDevelop/develop/data/SeriaNet/Example-02.png" width="500" alt="img">
</a>

__2. Device receives the transparent transmission data issued by Developer Center__

After receiving the data, the device will pass the event in the event callback function ***Qth_transRecvCb_f()***. Then you can respond to and handle the event.

```c
void transRecvCb(quint8_t *value, quint32_t valLen)
{
    Quos_logHexDump(APPS_OPEN, LL_DBG, "recv trans data", value, valLen);
}
```





