# 透传格式数据业务交互示例
 ## __场景描述__
根据实际业务场景来使用。如果不需要平台解析数据，仅透传数据的话，可以在设备成功接入移远通信物联网开发者中心后，通过 __Qth_cmdSendTrans()__ 指令来实现与开发者中心的数据交互，任何类型的数据均可采用透传模式。



## __涉及指令__

### __数据交互相关 API__
|        函数        |        说明        |
| :----------------: | :----------------: |
| Qth_cmdSendTrans() | 发送透传数据至平台 |

<span style='color:#999AAA'>提示：详情请参考[数据业务交互 相关接口](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-06)。</span>


## __操作步骤__
### __平台侧__
#### __一、登录开发者中心__

登录<a href="https://iot.quectelcn.com" target="_blank">开发者中心</a>，未注册可单击<a href="https://iot.quectelcn.com/registerType" target="_blank">立即注册</a>完成注册。


#### __二、创建产品__ 

<!-- 透传数据业务的交互需要在创建产品时选择 __透传/自定义__ 协议。 

<a data-fancybox title="img" href="/zh/docs/QuecOpen/resource/data/SeriaNet/Example-01.png">![img](/zh/docs/QuecOpen/resource/data/SeriaNet/Example-01.png)</a> -->

创建产品详情请参考 [创建产品](/deviceDevelop/DeviceAccessPlan/speediness-01)。


### __透传数据交互__
若模块发送透传数据时注册了pkgId和sendCb函数，则会调用发送回调函数通知设备端发送透传数据结果，可根据sendCb中的pkgId判断是对应的是哪一包数据。
#### __示例一(发送透传数据，不注册发送回调)__
设备可调用 __Qth_cmdSendTrans()__ 函数主动向平台发送透传数据。发送数据为长度12个字节的字符串"ABCabc123456"，QoS级别为1。

示例代码如下所示：

```c
Qth_cmdSendTrans(1,(unsigned char *)"ABCabc123456",12,NULL,NULL);
```
#### __示例二(发送透传数据，注册发送回调)__
设备可调用 __Qth_cmdSendTrans()__ 函数主动向平台发送透传数据。发送数据为长度12个字节的字符串"ABCabc123456"，QoS级别为1，注册发送回调函数获取发送结果。

示例代码如下所示：

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

#### __示例三(读取平台下发的透传数据)__

__1、开发者中心下发透传数据__

在 __产品详情__ 详情页，单击 __设备调试__ 页签可进行透传数据业务的交互。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/data/SeriaNet/Example-02.png">![img](/zh/deviceDevelop/develop/data/SeriaNet/Example-02.png)</a>

__2、设备接收到透传数据__

设备接收到透传数据后会进入 __transRecvCb__ 函数中透传事件回调，您可进入该事件回调进行下行透传数据处理。

```c
void transRecvCb(quint8_t *value, quint32_t valLen)
{
    Quos_logHexDump(APPS_OPEN, LL_DBG, "recv trans data", value, valLen);
}
```


 


