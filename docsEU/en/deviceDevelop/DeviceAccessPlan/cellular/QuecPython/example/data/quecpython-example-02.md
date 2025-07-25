# Example of Transparent Transmission Data Interaction
 ## __Introduction__
Transparent transmission data can be used in practical scenarios where there is no need for Developer Center to parse the data. Once the device has successfully connected to Developer center, call **Qth.sendTrans()** to enable interaction between the device and Developer Center, allowing for transparent transmission of any type of data. This section explains how to send and receive transparent transmission data in QuecPython solution.

## __Related API__

|             Function              |                       Description                        |
| :-------------------------------: | :------------------------------------------------------: |
| [Qth.sendTrans()](#Qth.sendTrans) | Sends transparent transmission data to Developer Center. |

<span style='color:#999AAA'>Note: See [Data Interaction API](/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-05) for details.</span>


## __Procedure__
### __Operation on Developer Center__
#### __1. Log in to Developer Center__

Log in to <a href="https://core.acceleronix.io"  target="_blank">Developer Center</a>. If you don't have an account, click <a href="https://core.acceleronix.io/registerType" target="_blank">Register Now</a> to register.


#### __2. Create a Product__ 

<!-- The prerequisite for transparent transmission data interaction is selecting **Transparent Transmission/Custom** as the data format when a product is created.

<a data-fancybox title="img" href="/en/docs/resource/data/SeriaNet/Example-01.png">![img](/en/docs/resource/data/SeriaNet/Example-01.png)</a> -->

For details about product creation, see [Create a Product](/deviceDevelop/DeviceAccessPlan/speediness-01).


### __Transparent Transmission Data Interaction__
#### __Example 1 (Send transparent transmission data)__
The device calls **Qth.sendTrans()** to send transparent transmission data. For example, the device can call this function to send a 12-byte string "ABCabc123456" with QoS set to 1.

Sample code:

```python
Qth.sendTrans(1,"ABCabc123456")
```

#### __Example 2 (Read transparent transmission data issued by Developer Center)__

__1) Developer Center issues transparent transmission data__

Open the "**Device Details**" page, click "**Device Debug**" to send or receive transparent transmission data.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/data/SeriaNet/Example-02.png">![img](/en/deviceDevelop/develop/data/SeriaNet/Example-02.png)</a>

__2) The device receives the transparent transmission data issued by Developer Center__

After receiving the data, the device will pass the event in the event callback function **recvTransCb()**. Then you can respond to and handle the event.

```python
def App_cmdRecvTransCb(value):
    print('recvTrans:', value)
```





