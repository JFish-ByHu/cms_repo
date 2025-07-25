# FOTA 升级示例

## **场景描述**

QuecThing 的 FOTA 固件升级，一般来说指的是把新的固件写入移远模组芯片中，代替原有的固件的过程。升级方式均为将固件包上传到开发者中心，设备从开发者中心获取固件包实现远程升级，设备本身可以依此进行功能更新迭代。本章节指导用户通过 QuecOpen 方案进行 FOTA 固件升级。

## **涉及指令**

|           函数           | 说明                    |
| :----------------------: | :---------------------- |
|     Qth_otaRequest()     | 向平台请求 OTA 升级计划 |
| Qth_configSetModuleVer() | 配置模组版本号          |
| Qth_configGetModuleVer() | 获取模组版本号          |

<span style='color:#999AAA'>提示：__OTA 升级__ 相关接口详情请参考[这里](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-07)，__配置模组版本号__ 相关接口详情请参考[这里](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-02)。</span>

## **操作步骤**

### **一、登录开发者中心**

登录<a href="https://iot.quectelcn.com" target="_blank">开发者中心</a>，未注册可单击<a href="https://iot.quectelcn.com/registerType" target="_blank">立即注册</a>完成注册。

### **二、创建产品**

创建产品是产品开发流程的第一步，产品是开发者中心定义一类设备的抽象描述，用于对同类设备进行管理。例如您有一台具备 LTE 联网能力的香薰机，需要接入开发者中心完成设备监控，则您可以定义它为一个产品：“智能香薰机”产品。

### **三、OTA 升级操作流程**

#### **1、添加版本包**

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/OTA/wifi_FOTA/03-1-1.png">![img](/zh/deviceDevelop/develop/OTA/wifi_FOTA/03-1-1.png)</a>


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

__i.__ 选择需要验证的版本包，点击 __固件验证__。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/OTA/wifi_FOTA/03-1-2.png">![img](/zh/deviceDevelop/develop/OTA/wifi_FOTA/03-1-2.png)</a>

__ii.__ 选择用来验证的设备，输入需要验证的组件标识，提交验证。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/OTA/wifi_FOTA/03-1-3.png">![img](/zh/deviceDevelop/develop/OTA/wifi_FOTA/03-1-3.png)</a>

__iii.__ 点击固件包 __详情__，查看固件验证详情。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/OTA/wifi_FOTA/03-1-4.png">![img](/zh/deviceDevelop/develop/OTA/wifi_FOTA/03-1-4.png)</a>

#### **3、创建升级计划**

在升级设备前，需创建或选择一个已有的升级计划；计划包含了需要升级的设备、升级时间、升级的组件配置等信息。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/OTA/wifi_FOTA/03-1-5.png">![img](/zh/deviceDevelop/develop/OTA/wifi_FOTA/03-1-5.png)</a>

__i. 基本信息填写__

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/OTA/wifi_FOTA/03-1-6.png">![img](/zh/deviceDevelop/develop/OTA/wifi_FOTA/03-1-6.png)</a>

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

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/OTA/wifi_FOTA/03-1-7.png">![img](/zh/deviceDevelop/develop/OTA/wifi_FOTA/03-1-7.png)</a>


__iii. 新增升级组件__

升级组件是用户自主创建，由一个或多个组件构成的集合体。用于创建升级计划时对需要升级的产品组件进行选择和规划，组件标识需唯一。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/OTA/wifi_FOTA/03-1-8.png">![img](/zh/deviceDevelop/develop/OTA/wifi_FOTA/03-1-8.png)</a>

__iv. 配置升级文案__

用户确认升级计划需要录入升级文案，静默升级计划无需录入。其中中文和英文的文案必须输入，其他语言根据实际需求录入。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/OTA/SOTA/03-1-12.png">![img](/zh/deviceDevelop/develop/OTA/SOTA/03-1-12.png)</a>

**v. 激活升级任务**

完成以上的 **添加版本包** 与 **创建升级计划** 操作步骤后，点击左下角的 **激活计划** 按钮即可激活此计划。开发者中心将会执行升级任务，下发所选的目标版本固件到升级范围内的目标设备中。

<span style="color:#999AAA">提示：升级任务激活后将不允许被删除。</span>

#### **4、设备初始化并连接平台**

设备初始化并启动连接开发者中心，在开发者中心和设备间建立安全、稳定的通信并实现设备管理，OTA 等操作。

```c
/* 初始化QuecThing SDK */
Qth_devInit();
/* 设置模组版本号 */
Qth_configSetModuleVer("v1.0.0");
/* 注册事件回调函数 */
Qth_eventCb_t event_cb = {0};
Qth_otaEventCb_t otaCb = {0};
otaCb.planCb = otaPlanCb;
otaCb.downloadCb = otaDownloadCb;
otaCb.resultCb = otaResultCb;
event_cb.otaEventCb = otaCb;
Qth_configSetEventCb(event_cb);
/* 启动平台连接 */
Qth_devStart();
```

<span style="color:#999AAA">提示：使用 MQTT 协议连接上开发者中心的设备会自动添加至平台。</span>

#### **5、OTA 请求**

<span style="color:#999AAA">前提：OTA 升级期间请确保设备已成功连接开发者中心。</span>

1）在开发者中心制定完成升级计划及激活后，设备需调用 **Qth_otaRequest()** 函数请求 OTA 升级。<br>
2）设备可无需请求 OTA，确保设备在线，等待平台每隔 10 分钟主动匹配下发升级计划，例如：10:00、10:10。

- 示例代码如下所示：
  ```c
  /* ota 请求*/
  Qth_otaRequest();
  ```

#### **6、确认升级**

发送 OTA 请求指令后，若该设备已包含在创建的升级计划产品内，则会自动调用 **planCb** 回调函数并上报 OTA 计划信息。内容包括组件标识+源版本+目标版本+最低电池电量+最低信号强度+固件包大小。若确认设备满足升级策略要求即可返回 TRUE 进行确认升级,否则返回 FALSE 拒绝升级。

- 下发升级计划，上报的事件内容如下所示。（该事件包含：组件标识、源版本、目标版本、OTA 升级最小电量、OTA 升级最小信号强度、OTA 升级需要磁盘空间）

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

#### **7、设备升级流程反馈**

固件升级成功的流程分为 **接收计划**、**下载中**、**更新完成** 3 个步骤。每更新一个步骤都会自动调用对应的事件回调函数。FOTA 升级事件反馈如下所示。

- 固件包下载中(每下载 10%会回调通知一次)

  ```c
    void otaDownloadCb(char *identity, quint8_t percent)
    {
        Quos_logPrintf(APPS_OPEN, LL_DBG, "identity:%s, percent:%d", identity, percent);
    }
  ```

- 固件更新结果

  ```c
  void otaResultCb(char *identity, qbool result)
    {
        Quos_logPrintf(APPS_OPEN, LL_DBG, "identity:%s, result:%d", identity, result);
    }
  ```

设备升级完成后，因设备需重启，所以连接上开发者中心时升级结果会随着连接上开发者中心自动上报。

### **四、升级监控**

在计划列表中点击  **升级监控**，在设备升级列表，可查看该计划下所有设备的升级状态。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/OTA/wifi_FOTA/03-1-9.png">![img](/zh/deviceDevelop/develop/OTA/wifi_FOTA/03-1-9.png)</a>

点击 **组件详情** 可查看具体设备的升级日志，如下图所示。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/OTA/wifi_FOTA/03-1-10.png">![img](/zh/deviceDevelop/develop/OTA/wifi_FOTA/03-1-10.png)</a>

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/OTA/wifi_FOTA/03-1-11.png">![img](/zh/deviceDevelop/develop/OTA/wifi_FOTA/03-1-11.png)</a>
