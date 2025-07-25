# 物模型格式数据业务交互示例


## __场景描述__
本章节指导用户通过 QuecOpen 接入方案连接上开发者中心并进行物模型数据格式的业务交互。

## __涉及指令__


|       函数       | 说明                 |
| :--------------: | :------------------- |
| Qth_cmdSendTsl() | 发送物模型数据至平台 |

<span style='color:#999AAA'>提示：详情请参考[数据业务 相关接口](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-06)。</span>


## __TTLV 相关 API__

|           函数           |               说明               |
| :----------------------: | :------------------------------: |
|   Quos_ttlvGetCount()    |       获取数据表的节点数量       |
|    Quos_ttlvGetNode()    |      从数据表中提取数据节点      |
|     Quos_ttlvFree()      |          释放数据表资源          |
|  Quos_ttlvGetNodeType()  |        获取节点数据的类型        |
|  Quos_ttlvGetNodeBool()  |      获取节点数据-Bool 类型      |
|  Quos_ttlvGetNodeInt()   |      获取节点数据-Int 类型       |
| Quos_ttlvGetNodeFloat()  |      获取节点数据-浮点 类型      |
|  Quos_ttlvGetNodeText()  |      获取节点数据-Text 类型      |
|  Quos_ttlvGetNodeRaw()   |      获取节点数据-Raw 类型       |
| Quos_ttlvGetNodeStruct() |     获取节点数据-Struct 类型     |
|   Quos_ttlvGetIdType()   |     获取指定ID节点数据的类型     |
|   Quos_ttlvGetIdBool()   |  获取指定 ID 节点数据-Bool 类型  |
|   Quos_ttlvGetIdInt()    |  获取指定 ID 节点数据-Int 类型   |
|  Quos_ttlvGetIdFloat()   |  获取指定 ID 节点数据-浮点 类型  |
|   Quos_ttlvGetIdText()   |  获取指定 ID 节点数据-Text 类型  |
|   Quos_ttlvGetIdRaw()    |  获取指定 ID 节点数据-Raw 类型   |
|  Quos_ttlvGetIdStruct()  | 获取指定 ID 节点数据-Struct 类型 |
|   Quos_ttlvAddIdBool()   |      添加节点数据-Bool 类型      |
|   Quos_ttlvAddIdInt()    |      添加节点数据-Int 类型       |
|  Quos_ttlvAddIdFloat()   |      添加节点数据-浮点 类型      |
|   Quos_ttlvAddIdText()   |      添加节点数据-Text 类型      |
|   Quos_ttlvAddIdRaw()    |      添加节点数据-Raw 类型       |
|  Quos_ttlvAddIdStruct()  |     添加节点数据-Struct 类型     |

<span style='color:#999AAA'>提示：详情TTLV数据相关API接口请参考[TTLV数据相关API](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-05)</span>。>
	
## __操作步骤__
### __平台侧__
#### __一、登录开发者中心__
登录<a href="https://iot.quectelcn.com" target="_blank">开发者中心</a>，未注册可单击<a href="https://iot.quectelcn.com/registerType" target="_blank">立即注册</a>完成注册。

#### __二、创建产品__


创建产品详情请参考 [创建产品](/deviceDevelop/DeviceAccessPlan/speediness-01)。


## __设备侧__
### __物模型数据交互__

物模型是开发者中心针对物理实体设备在平台端建立的数据模型，主要用于描述产品的功能，从而方便数据的解析。设备成功接入平台后，通过构建物模型数据来实现与开发者中心的数据交互。


#### __示例一(主动发送物模型数据)__

|    功能ID    | 功能类型 | 功能名称                        | 数据类型 | 数值范围                        | 引用关系       |
| :----------: | :------- | :------------------------------ | :------- | :------------------------------ | :------------- |
|      1       | 属性     | 开关                            | BOOL     | true - 开启；<br>false - 关闭； |
|      2       | 属性     | 电池电量                        | INT      | 0~100                           |
|      3       | 属性     | 精油剩余容量                    | FLOAT    | 0~300                           |
|      4       | 属性     | 工作模式                        | ENUM     | 1~HPC<br>2~CPL                  |
|      5       | 属性     | 设备编号                        | TEXT     | 0~20                            |
|      6       | 属性     | 时间                            | DATE     | --                              |
|      7       | 属性     | 结构体                          | STRUCT   | --                              | 功能ID：8，9   |
|  8(父ID：7)  | 参数     | <span v-pre> {$参数名称}</span> | BOOL     | true - 开启；<br>false - 关闭； |
|  9(父ID：7)  | 参数     | <span v-pre> {$参数名称}</span> | INT      | 0~100                           |
|      10      | 属性     | 整型数组                        | ARRAY    | 最大数量：10，元素类型：INT     |
|      11      | 属性     | 结构体数组                      | ARRAY    |                                 | 功能ID：12，13 |
| 12(父ID：11) | 参数     | <span v-pre> {$参数名称}</span> | BOOL     | true - 开启；<br>false - 关闭； |
| 13(父ID：11) | 参数     | <span v-pre> {$参数名称}</span> | INT      | 0~100                           |

设备端可根据业务场景需求，对设备端数据属性采取一定的策略进行检测处理，例如设备端读取香薰机传感器精油剩余容量值等数据后，设备则将读取到的精油剩余容量值等数据上传到开发者中心。
* 示例代码如下所示：
	```c
	void *ttlvHead = NULL;
	/* 添加布尔类型数据 {"1":true}*/
	Quos_ttlvAddIdBool(&ttlvHead, 1,  TRUE);
	/* 添加整型数据  {"2":100}*/
	Quos_ttlvAddIdInt(&ttlvHead, 2 , 100);
	/* 添加浮点型数据  {"3":25.6}*/
	Quos_ttlvAddIdFloat(&ttlvHead, 3,  25.6);
	/* 添加ENUM数据  {"4":1}*/
	Quos_ttlvAddIdInt(&ttlvHead, 4 , 1);
	/* 添加字符串类型数据  {"5":"ZWS"}*/
	Quos_ttlvAddIdText(&ttlvHead, 5, "ZWS", Quos_strlen("ZWS"));
	/* 添加字符串类型数据  {"6":1659664758817}*/
	Quos_ttlvAddIdText(&ttlvHead, 6, "1659664758817", Quos_strlen("1659664758817"));
	/* 添加结构体类型数据  {"7":{"8":true,"9":100}}*/
	void *intStructHead = NULL;
	Quos_ttlvAddIdBool(&intArrayHead, 8, TRUE);
	Quos_ttlvAddIdInt(&intArrayHead, 9, 100);
	Quos_ttlvAddIdStruct(&ttlvHead, 7, intArrayHead);
	/* 添加数组INT类型数据  {"10":[10,20,30]}*/
	void *intArrayIntHead = NULL;
	Quos_ttlvAddIdInt(&intArrayIntHead , 0, 10);
	Quos_ttlvAddIdInt(&intArrayIntHead , 0, 20);
	Quos_ttlvAddIdInt(&intArrayIntHead , 0, 30);
	Quos_ttlvAddIdStruct(&ttlvHead, 10, intArrayIntHead);
	/* 添加数组结构体类型数据，引用参数：12、13 {"11":[{"12":true,"13":100},{"12":false,"13":98}]}*/
	void *intArrayHead = NULL;
	void *intArrayHead1 = NULL;
	Quos_ttlvAddIdBool(&intArrayHead, 12, TRUE);
	Quos_ttlvAddIdInt(&intArrayHead, 13, 100);
	Quos_ttlvAddIdStruct(&intArrayHead1, 0, intArrayHead);
	Quos_ttlvAddIdStruct(&ttlvHead, 11, intArrayHead1);
	/* 发送数据，QOS模式：2 */
	Qth_cmdSendTsl(QTH_SEND_EXACTLY_ONCE,ttlvHead,NULL,NULL);
	/* 释放资源 */
	Quos_ttlvFree(&ttlvHead);
	```
<span style='color:#999AAA'>注意：在添加物模型节点且调用完后，开发者请调用 __Quos_ttlvFree()__ 函数，该函数会释放指针指向的一个内存块，从而避免内存泄漏等问题。</span>

<span style='color:#999AAA'>提示：若模块发送物模型数据时注册了pkgId和sendCb函数，则会调用发送回调函数通知设备端发送物模型数据结果，可根据sendCb中的pkgId判断是对应的是哪一包数据。</span>
* 示例代码如下所示：
  
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
#### __示例二(响应平台读取数据)__
__1、开发者中心批量读取物模型实时数据__

在开发者中心 __设备信息__ 详情页的 __设备调试__ 中，点击 __批量读取__ 按钮可一键批量读取物模型属性数值。


__2、模组收到查询指令处理__

当模组接收到物模型请求数据后，则会自动调用 __ttlvReqCb()__ 事件回调函数，您可根据下发的物模型ID数组进行数据响应处理。

* 事件回调处理示例代码如下所示：
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


<span style="color:#999AAA">提示：return的ttlvHead的内存会由SDK自行释放，用户无须关心，只需要把回复的物模型数据增加到ttlvHead链表中即可。</span>

#### __示例三(主动上报物模型告警事件)__

|    功能ID    | 功能类型 | 功能名称     | 数据类型 | 数值范围 | 引用关系           |
| :----------: | :------- | :----------- | :------- | :------- | :----------------- |
|      14      | 事件     | 剩余精油不足 | BOOL     |          | 输出功能ID：15，16 |
| 15(父ID：14) | 参数     | 电池电量     | INT      | 0~100    |
| 16(父ID：14) | 参数     | 精油剩余容量 | FLOAT    | 0~300    |

模拟精油不足时主动上告给平台端，该事件包含输出参数：__精油当前容量__，将输出参数 __ID：15，16__ 包含进告警事件内组成结构体一并发送到开发者中心。

* 示例代码如下所示：
	```c
	void *ttlvHead = NULL;
	void *ttlvArrayHead = NULL;
	/*添加物模型事件类型数据，引用参数：15、16 */
	Quos_ttlvAddIdBool(&ttlvArrayHead, 15, TRUE);
	Quos_ttlvAddIdFloat(&ttlvArrayHead, 16, 20.5);
	Quos_ttlvAddIdStruct(&ttlvHead, 14, ttlvArrayHead);
	/*发送物模型数据至平台*/
	Qth_cmdSendTsl(QTH_SEND_EXACTLY_ONCE,ttlvHead,NULL,NULL);
	Quos_ttlvFree(&ttlvHead);
	```

#### __示例四(读取平台下发的物模型数据)__

|    功能ID    | 功能类型 | 功能名称 | 数据类型 | 数值范围 | 引用关系       |
| :----------: | :------- | :------- | :------- | :------- | :------------- |
|      17      | 服务     | 服务     | BOOL     |          | 输出功能ID：18 |
| 18(父ID：17) | 输入参数 | 模式     | ENUM     | 0~2      |


__1、开发者中心下发物模型服务__

 在开发者中心 __设备调试__ 页面，第一步点击 __服务调用__，第二步选择要下发的物模型服务，第三步点击左下角的 __发送指令__ 即可下发物模型服务给终端。


__2、设备接收到数据__

当模组接收到物模型数据后，则会自动调用ttlvRecvCb回调函数，您可进行对应的数据响应处理。

* 事件回调函数如下所示：
	```c
    void ttlvRecvCb(void *ttlvHead)
    {
        Ql_iotTtlvHandle(ttlvHead);
    }
	```

* 下发物模型解析函数Ql_iotTtlvHandle()示例代码如下所示：
	```c
	void Ql_iotTtlvHandle(const void *ttlvHead)
	{
		quint32_t count = Quos_ttlvGetCount(ttlvHead); /*获取数据表的节点数量*/ 
		quint32_t i;
		for(i=0;i<count;i++)
		{
			uint16_t id;
			Quos_dpDataType_e type;
			void *node = Quos_ttlvGetNode(ttlvHead, i, &id, &type); /*数据表中提取数据节点*/ 
			if(node)
			{
				switch (id)
				{               
					case 17:
					{             
						/*若是结构体在遍历一次数据*/ 
						Ql_iotTtlvHandle(Quos_ttlvGetNodeStruct(node));
						break;
					}
					case 18:
					{ 
						qint64_t num;
						Quos_ttlvGetNodeInt(node, &num); 
						Quos_logPrintf(APPS_OPEN, LL_DBG, "功能ID 18 value：%d",num);  /*获取服务类型的输入参数并打印*/ 
						break;
					}
				default:break;
				}
			}
		}
	}
	```

