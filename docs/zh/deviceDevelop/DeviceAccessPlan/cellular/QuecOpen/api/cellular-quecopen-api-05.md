# OTA 相关接口

## **API 列表**

|                           函数                            |            说明            |
| :-------------------------------------------------------: | :------------------------: |
|       [Ql_iotCmdOtaRequest()](#Ql_iotCmdOtaRequest)       |   向平台请求OTA升级计划    |
|        [Ql_iotCmdOtaAction()](#Ql_iotCmdOtaAction)        |      配置OTA升级行为       |
| [Ql_iotCmdOtaMcuFWDataRead()](#Ql_iotCmdOtaMcuFWDataRead) | 读取保存在模块中的固件数据 |


## **API 详情**

<span id="Ql_iotCmdOtaRequest">  </span>
## <span style="color:#A52A2A">__Ql_iotCmdOtaRequest__</span>

该函数用于向平台请求 OTA 升级计划。

__函数原型__

```c
qbool Ql_iotCmdOtaRequest(quint32_t mode)
```
__参数说明__
* __输入参数__
	* __quint32_t__  __`mode`__：额外信息请求。
		* __0__： 不需要
		* __1__： 需要

__返回值__
* __`True`__：&nbsp;&nbsp; 函数执行成功。
* __`False`__： 函数执行失败。

__备注__ 
* __2.8.2及以上版本支持__

---

__调用示例__

```c
qbool ret = Ql_iotCmdOtaRequest(0);
```
---
<span id="Ql_iotCmdOtaAction">  </span>
## <span style="color:#A52A2A">__Ql_iotCmdOtaAction__</span>

该函数用于在设备接收到平台推送的升级任务时，配置 OTA 升级行为。

__函数原型__

```c
qbool Ql_iotCmdOtaAction(quint8_t action)
```
__参数说明__
* __输入参数__
	* __quint8_t__  __`action`__：OTA 确认升级行为。
		* __`0`__：拒绝升级 
		* __`1`__：确认升级 
		* __`2`__：MCU 通知下载下一块固件数据
		* __`3`__：MCU 上报更新中状态

__返回值__
* __`True`__：&nbsp;&nbsp; 函数执行成功。
* __`False`__： 函数执行失败。

__备注__ 
* __2.3.3及以上版本支持__

---

__调用示例__

```c
qbool ret = Ql_iotCmdOtaAction(1);
```
---
<span id="Ql_iotCmdOtaMcuFWDataRead">  </span>
## <span style="color:#A52A2A">__Ql_iotCmdOtaMcuFWDataRead__</span>

该函数用于读取保存模块中的固件数据。

__函数原型__

```c
quint32_t Ql_iotCmdOtaMcuFWDataRead(quint32_t startAddr, quint8_t data[], quint32_t maxLen)
```

__参数说明__
* __输入参数__
	* __quint32_t__ __`startAddr`__： 读取数据开始位置。单位：字节。
	* __quint8_t__   __`data`__：指针，指向存放待读取数据的缓存。
	* __quint32_t__   __`maxLen`__：待读取数据的长度。

__返回值__
* __`0`__：     数据读取失败。 
* __`大于0`__： 实际读取到的固件数据长度。

__备注__ 
* __2.3.3及以上版本支持__

---

__调用示例__

```c
quint8_t readBuf[1024];
quint32_t ret = Ql_iotCmdOtaMcuFWDataRead(0,readBuf,sizeof(readBuf));
```
