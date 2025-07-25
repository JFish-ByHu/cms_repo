# SOTA升级示例
## __场景描述__
QuecThing的SOTA升级，一般来说指的是把新的固件写入外挂MCU中，代替原有的固件的过程。升级方式均为将固件包上传到开发者中心，设备从开发者中心获取固件包实现远程升级，最后 MCU 接收升级包并写入本地闪存，实现固件的升级。本章节指导用户通过QuecOpen方案进行SOTA固件升级。


## __涉及指令__

|         函数          | 说明                          |
| :-------------------: | :---------------------------- |
|   Qth_otaRequest()    | 向平台请求OTA升级计划         |
| Qth_configSetMcuVer() | 配置 MCU 编号及其对应的版本号 |
| Qth_configGetMcuVer() | 获取 MCU 编号及其对应的版本号 |

<span style='color:#999AAA'>提示：__OTA 升级__ 相关接口详情请参考[这里](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-07)，__配置MCU版本__ 相关接口详情请参考[这里](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-02)。</span>


## __操作步骤__
### __一、登录开发者中心__
登录<a href="https://iot.quectelcn.com" target="_blank">开发者中心</a>，未注册可单击<a href="https://iot.quectelcn.com/registerType" target="_blank">立即注册</a>完成注册。

### __二、创建产品__
创建产品是产品开发流程的第一步，产品是开发者中心定义一类设备的抽象描述，用于对同类设备进行管理。例如您有一台具备WiFi联网能力的香薰机，需要接入开发者中心完成设备监控，则您可以定义它为一个产品：“智能香薰机”产品。

### __三、OTA升级操作流程__
#### **1、添加版本包**

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/OTA/SOTA/03-1-1.png">![img](/zh/deviceDevelop/develop/OTA/SOTA/03-1-1.png)</a>

* __版本包名称__ ：为此升级包输入一个名称。
* __组件类型__：支持模组固件升级与MCU固件升级。
	* 模组固件（FOTA），一般来说指的是把新的固件写入移远模组芯片中 。
	* MCU固件（SOTA），一般来说指的是把新的软件包通过移远模组烧入进外挂MCU内。
* __版本包类型__：支持整包升级、差分包升级两种固件升级方式。
	* 差分包针对指定源版本的升级，一般为进行小规模功能或修复BUG升级。
	* 整包不指定源版本，所有设备均可升级。
* __源版本__：源固件包的版本，若选择差分包类型则会显示此项，整包则无。（开发者中心根据设备连接平台时上报的设备信息中的版本号判断是否与此参数一致，若一致则下发升级信息）。
* __目标版本__：固件包的新版本号。（设备升级完成后需要上报升级后的版本号，开发者中心检查设备上报的版本号是否与此参数一致，若一致则判断为升级成功）。
* __上传版本包__：上传的固件文件支持格式：
.bin,.zip,.rar,.pack,.mini_1,.mini_2,.py,.tar,.tar.gz,.s19,.bin_1,.bin_2等类型的文件，文件大小不能超过100MB，最多支持5个文件。
* __备注__：对本次上传的固件版本进行描述和记录。


#### **2、版本包固件验证（可选）**

固件验证是为了确保将要大规模升级的固件是安全可用的，最大限度降低升级风险，防止意外损失的出现。在大批量升级设备之前，您可以选择单台设备进行固件验证并执行OTA升级流程。

i.选择需要验证的版本包，点击 __固件验证__。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/OTA/SOTA/03-1-2.png">![img](/zh/deviceDevelop/develop/OTA/SOTA/03-1-2.png)</a>

ii.选择用来验证的设备，输入需要验证的组件标识，提交验证。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/OTA/SOTA/03-1-3.png">![img](/zh/deviceDevelop/develop/OTA/SOTA/03-1-3.png)</a>

iii.点击固件包 __详情__，查看固件验证详情。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/OTA/SOTA/03-1-4.png">![img](/zh/deviceDevelop/develop/OTA/SOTA/03-1-4.png)</a>

#### **3、创建升级计划**

在升级设备前，需创建或选择一个已有的升级计划；计划包含了需要升级的设备、升级时间、升级的组件配置等信息。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/OTA/SOTA/03-1-5.png">![img](/zh/deviceDevelop/develop/OTA/SOTA/03-1-5.png)</a>

__i. 基本信息填写__

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/OTA/SOTA/03-1-6.png">![img](/zh/deviceDevelop/develop/OTA/SOTA/03-1-6.png)</a>

* __计划名称__：为此升级计划输入一个名称。
* __升级产品__ ：选择对应需要升级设备的产品。
* __设置黑白名单__：若不设置黑、白名单，则该产品下所有设备升级。若同时设置黑、白名单，则黑名单优先级大于白名单优先级
  * __若只设置白名单__：只允许在白名单中的设备被升级。
  * __若只设置黑名单__：在黑名单中的设备不允许被升级。
* __时区__：此项必须配置。配置后平台只会在此时区+推送时段推送升级计划。
* __推送时段__：配置平台主动推送升级计划的时间段，可选择性配置，只能配置整点到整点，至少间隔1个小时。
* __升级方式__ ：
  * __静默升级__： 是指无需用户确认，应用端将自动完成升级，再次开启后为升级过的版本。
  * __用户确认升级__： 是指用户需主动进入设备控制界面，在设备详情页检查并确认固件升级。

__ii. 制定升级策略__

在固件升级的过程中，难免会遇到因升级环境较差的情况导致升级失败，为了避免这种情况，从而需制定升级策略来减少升级失败概率。点击升级策略旁的 __自定义__ 按钮即可在弹窗配置升级策略。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/OTA/SOTA/03-1-7.png">![img](/zh/deviceDevelop/develop/OTA/SOTA/03-1-7.png)</a>


__iii. 新增升级组件__

升级组件是用户自主创建，由一个或多个组件构成的集合体。用于创建升级计划时对需要升级的产品组件进行选择和规划，组件名称、组件标识需唯一。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/OTA/SOTA/03-1-8.png">![img](/zh/deviceDevelop/develop/OTA/SOTA/03-1-8.png)</a>


__iv. 配置升级文案__

用户确认升级计划需要录入升级文案，静默升级计划无需录入。其中中文和英文的文案必须输入，其他语言根据实际需求录入。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/OTA/SOTA/03-1-12.png">![img](/zh/deviceDevelop/develop/OTA/SOTA/03-1-12.png)</a>



__v. 激活升级任务__

完成以上的 __添加版本包__ 与 __创建升级计划__ 操作步骤后，点击左下角的 __激活计划__ 按钮即可激活此计划。开发者中心将会执行升级任务，下发所选的目标版本固件到升级范围内的目标设备中。

<span style="color:#999AAA">提示：升级任务激活后将不允许被删除。</span>

#### __4、设备初始化并连接平台__
设备初始化并启动连接开发者中心，在开发者中心和设备间建立安全、稳定的通信并实现设备管理、OTA等操作。 

```c
/* 初始化QuecThing SDK */
Qth_devInit();
/* 配置外部MCU标识号和版本号 */
Qth_mcuInfo_t mcuList[1] = {0};
Quos_strcpy(mcuList[0].identity, "STM32");
Quos_strcpy(mcuList[0].version, "1_0_0");
Qth_configSetMcuVer(mcuList, sizeof(mcuList) / sizeof(Qth_mcuInfo_t));
/* 注册事件回调函数 */
Qth_eventCb_t event_cb = {0};
Qth_otaEventCb_t otaCb = {0};
otaCb.planCb = otaPlanCb;
otaCb.downloadCb = otaDownloadCb;
otaCb.resultCb = otaResultCb;
otaCb.sotaInfoCb = sotaInfoCb;
otaCb.sotaFileCb = sotaFileCb;
event_cb.otaEventCb = otaCb;
Qth_configSetEventCb(event_cb);
/* 启动平台连接 */
Qth_devStart();
```
<span style="color:#999AAA">提示：使用MQTT协议连接上开发者中心的设备会自动添加至平台。</span>

#### __5、OTA请求__

<span style="color:#999AAA">前提：OTA升级期间请确保设备已成功连接开发者中心。</span>

1）在开发者中心制定完成升级计划及激活后，设备需调用 __Qth_otaRequest()__ 函数请求OTA升级。<br>
2）设备可无需请求OTA，确保设备在线，等待平台每隔10分钟主动匹配下发升级计划，例如：10:00、10:10。

* 示例代码如下所示：
	```c
	/* ota 请求*/
	Qth_otaRequest(0);
	```


#### __6、设备确认升级__

发送OTA请求指令后，若该设备已包含在创建的升级计划产品内，则会自动调用 __planCb__ 回调函数并上报OTA计划信息。内容包括组件标识+源版本+目标版本+最低电池电量+最低信号强度+固件包大小。若确认设备满足升级策略要求即可返回TRUE进行确认升级,否则返回FALSE拒绝升级。

* 下发升级计划，上报的事件内容如下所示。（该事件包含：组件标识、源版本、目标版本、OTA 升级最小电量、OTA 升级最小信号强度、OTA 升级需要磁盘空间）

	回调函数处理示例代码如下所示：
	```c
	qbool otaPlanCb(Qth_otaPlan_t *planList, quint16_t count)
    {
        quint16_t i;
        for (i = 0; i < count; i++)
        {
            Quos_logPrintf(APPS_OPEN, LL_DBG, "identity:%s,type:%d,srcVer:%s,dstVer:%s,minBattery:%d,minFlash:%d,minSignal:%d",
                            planList[i].identity, (qint32_t)planList[i].type, planList[i].srcVer, planList[i].dstVer, (qint32_t)planList[i].minBattery, (qint32_t)planList[i].minFlash, (qint32_t)planList[i].minSignal);
        }
        return TRUE;
    }
	```

#### __7、MCU确认升级方式__

设备确认升级后，平台会下发固件的文件信息和下载链接，这时候MCU可以选择是否由模组进行下载，还是由MCU自行下载。

* 下发固件信息，上报的事件内容如下所示。（该事件包含：组件标识、固件版本、固件MD5、固件CRC32、固件sha256、固件下载链接、固件大小），默认是使用模组进行下载，如果需要由MCU自行下载，需要把type的值设置为MCU下载类型(*type == QTH_SOTA_DOWN_TYPE_MCU)。

	回调函数处理示例代码如下所示：
	```c
	qbool sotaInfoCb(char *identity, Qth_otaInfo_t *info, Qth_otaDownType_e *type)
    {
        UNUSED(type);
        Quos_logPrintf(APPS_OPEN, LL_DBG, "identity:%s,version:%s,fileMd5:%s,fileCrc:%s,fileSha256:%s,fileUrl:%s,fileSize:%d",
                        identity, info->version, info->fileMd5, info->fileCrc, info->fileSha256, info->fileUrl, (qint32_t)info->fileSize);
        return TRUE;
    }
	```

#### __8、设备升级流程反馈__

SOTA升级成功的流程分为 __接收计划__、__下载中__、__固件传输__、__更新完成__ 4个步骤。每个步骤都会调用对应的事件回调函数并上报相应的事件信息。SOTA升级事件反馈如下所示。


* 固件包下载中(每下载10%会回调通知一次)
	```c	
    void otaDownloadCb(char *identity, quint8_t percent)
    {
        Quos_logPrintf(APPS_OPEN, LL_DBG, "identity:%s, percent:%d", identity, percent);
    }
	```
* MCU固件更新中

	当模块接收完升级固件后，会通过sotaFileCb发送固件包数据，用户可以进行对应的处理再通过串口或者其他连接方式传输到MCU中。

	```c
	qbool sotaFileCb(char *identity, quint32_t offset, quint8_t *data, quint32_t dataLen)
    {
        Quos_logPrintf(APPS_OPEN, LL_DBG, "identity:%s,offset:%d,dataLen:%d", identity, offset, dataLen);
        /* 这里可以把data写入对应的MCU中 */
        /* to do something */
        /* 当dataLen == 0时，表示MCU固件传输完成 */
        if(0 == dataLen)
        {
            /* to do something */
        }
        return TRUE;
    }
	```

* 更新MCU版本号(当MCU升级完成后，需要更新MCU版本号通知到SDK)
	```c
    Qth_mcuInfo_t mcuList[1] = {0};
    Quos_strcpy(mcuList[0].identity, "STM32");
    Quos_strcpy(mcuList[0].version, "2_0_0");
    Qth_configSetMcuVer(mcuList, sizeof(mcuList) / sizeof(Qth_mcuInfo_t));
	```

* 固件更新结果

  	```c
  	void otaResultCb(char *identity, qbool result)
      {
          Quos_logPrintf(APPS_OPEN, LL_DBG, "identity:%s, result:%d", identity, result);
      }
  	```

### __四、升级监控__

在计划列表中点击 __升级监控__，在设备升级列表，可查看该计划下所有设备的升级状态。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/OTA/SOTA/03-1-9.png">![img](/zh/deviceDevelop/develop/OTA/SOTA/03-1-9.png)</a>

点击 __组件详情__ 可查看具体设备的升级日志，如下图所示。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/OTA/SOTA/03-1-10.png">![img](/zh/deviceDevelop/develop/OTA/SOTA/03-1-10.png)</a>


<a data-fancybox title="img" href="/zh/deviceDevelop/develop/OTA/SOTA/03-1-11.png">![img](/zh/deviceDevelop/develop/OTA/SOTA/03-1-11.png)</a>
 


