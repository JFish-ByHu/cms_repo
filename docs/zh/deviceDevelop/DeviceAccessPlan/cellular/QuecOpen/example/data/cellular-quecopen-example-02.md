# 透传格式数据业务交互示例
 ## __场景描述__
根据实际业务场景来使用。如果不需要平台解析数据，仅透传数据的话，可以在设备成功接入移远通信物联网开发者中心后，通过 __Ql_iotCmdBusPassTransSend()__ 与 __Ql_iotCmdBusPassTransSend_ex()__ 指令来实现与开发者中心的数据交互，任何类型的数据均可采用透传模式。



## __涉及指令__

### __数据交互相关 API__
|              函数              |                                                说明                                                |
| :----------------------------: | :------------------------------------------------------------------------------------------------: |
|  Ql_iotCmdBusPassTransSend()   |                                         发送透传数据至平台                                         |
| Ql_iotCmdBusPassTransSend_ex() | 调用该函数发送透传数据成功后，该函数返回上行数据 ID（仅QuecThing SDK 2.10.0 及以后版本支持该函数） |

<span style='color:#999AAA'>提示：详情请参考[数据交互相关 相关接口](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-03)。</span>


## __操作步骤__
### __平台侧__
#### __一、登录开发者中心__

登录<a href="https://iot.quectelcn.com" target="_blank">开发者中心</a>，未注册可单击<a href="https://iot.quectelcn.com/registerType" target="_blank">立即注册</a>完成注册。


#### __二、创建产品__ 


创建产品详情请参考 [创建产品（通用版）](/deviceDevelop/DeviceAccessPlan/speediness-01)。


### __透传数据交互__

<span style="color:#FF0000">开发建议：上报频率不宜过快，建议采用灵活上报的形式： <br>
若是控制类的数据（如开关、工作模式），则可采用变化上报的方式。例如平台或者APP下发控制或者通过其他方式改状态值，设备再进行上报到平台端。 <br>
若是实时变化类的数据（如电流、温度值），则可采用定时上报。例如每隔5分钟设备定时上报一次到平台端。</span>


#### __示例一(发送透传数据)__
设备可调用 __Ql_iotCmdBusPassTransSend()__ 函数主动向平台发送透传数据。发送数据为长度12个字节的字符串"ABCabc123456"，QoS级别为1。

示例代码如下所示：

```c
Ql_iotCmdBusPassTransSend(1,(unsigned char *)"ABCabc123456",12);
```

<span style='color:#999AAA'>提示：透传发送后，若QoS级别为1或以上，设备发送透传数据后将会进入 __Ql_iotEventCB()__ 函数中的 __+QIOTEVT: 4,10200__ 事件；若QoS级别为0，设备成功发送数据后将且不进入事件回调。  </span>


#### __示例二(读取平台下发的透传数据)__

__1、开发者中心下发透传数据__

在 __产品详情__ 详情页，单击 __设备调试__ 页签可进行透传数据业务的交互。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/data/SeriaNet/Example-02.png">![img](/zh/deviceDevelop/develop/data/SeriaNet/Example-02.png)</a>

__2、设备接收到透传数据__

设备接收到透传数据后会进入 __Ql_iotEventCB()__ 函数中透传事件回调，您可进入该事件回调进行下行透传数据处理。

```c
void FUNCTION_ATTR_ROM Ql_iotEventCB(quint32_t event, qint32_t errcode, const void *value, quint32_t valLen)
{
   switch (event)
   {  
   		/* 接收下行数据事件  */
 	  case QIOT_ATEVENT_TYPE_RECV:
 		/* 收到透传数据 */
        if(10200 == errcode)
        {
            printf("pass data:%.*s\r\n",valLen,(char *)value);
            /*Code*/
        }    
      default: break;
    }
}
```


 


