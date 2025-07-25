 # OTA 相关指令

## **相关AT指令列表**
该AT指令主要实现OTA升级配置及读取OTA数据等功能。  

|            指令名称             |      功能描述      |
| :-----------------------------: | :----------------: |
| [AT+QIOTOTAREQ](#AT+QIOTOTAREQ) |  请求OTA升级计划   |
| [AT+QIOTUPDATE](#AT+QIOTUPDATE) | 配置 OTA 升级行为  |
|  [AT+QIOTOTARD](#AT+QIOTOTARD)  | 分片读取 SOTA 数据 |

## **相关AT指令详情**

<span id="AT+QIOTOTAREQ">  </span>

## <span style="color:#A52A2A">__AT+QIOTOTAREQ (请求 OTA 升级计划)__</span>

* __说明__：该命令用于向平台请求 OTA 升级计划。
* __最大响应时间__ ：300 毫秒。
* __特性说明__： 该命令立即生效。

### **测试命令**

* __发送：__

	```c
	AT+QIOTOTAREQ=?
	```	
* __响应：__

	响应支持的设置参数范围

	```c
	+QIOTOTAREQ: <info>
	
	OK
	```

### **设置/执行命令**

* __发送：__

	```c
	AT+QIOTOTAREQ[=<info>]
	```	
* __响应：__

	执行成功，若有升级计划时将通过事件+QIOTEVT: 7 上报

	```c
	OK
	```

	若出现任何错误
	```c
	ERROR
	```	

---

* __参数：__
	* __`<info>`__： 整型。是否需要额外文件校验 SHA256 信息。
		* __`0`__：不需要 
		* __`1`__：需要

* __备注：__
	* __2.8.2及以上版本支持__

---

#### **示例**
 <span style="color:#999AAA">前提：在开发者中心启动升级计划。</span>
 
__示例1 (主动发起OTA请求)__

__i.__ 配置开启额外 SHA256 信息。

__ii.__ 主动发起OTA请求。

```c
AT+QIOTOTAREQ=1

OK
AT+QIOTOTAREQ

OK
```
 

<span id="AT+QIOTUPDATE">  </span>

## <span style="color:#A52A2A">__AT+QIOTUPDATE (配置 OTA 升级行为)__</span>

* __说明__：该命令用于配置 OTA 升级行为。
* __最大响应时间__ 300 毫秒。
* __特性说明__：该命令立即生效。

### **测试命令**

* __发送：__

	```c
	AT+QIOTUPDATE=?
	```	
* __响应：__

	响应支持的设置参数范围

	```c
	+QIOTUPDATE: (支持的<update_action>范围)
	
	OK
	```

### **设置命令**

* __发送：__

	```c
	AT+QIOTUPDATE=<update_action>
	```	
* __响应：__

	设置成功

	```c
	OK
	```
	
	若出现任何错误
	```c
	ERROR
	```	

---

* __参数：__
	* __`<update_action>`__ 整型。配置 OTA 升级行为。
		* __`0`__ ：拒绝升级
		* __`1`__ ：确认升级 
		* __`2`__ ：MCU 请求下载下一块固件数据
		* __`3`__ ：MCU 上报更新中状态

* __备注：__
	* __2.3.3及以上版本支持__

---

#### **示例**
<span style="color:#999AAA">前提：在开发者中心激活升级计划。</span>
 
__示例1 (响应升级计划确认升级)__

```c
AT+QIOTUPDATE=1

OK
```
***

<span id="AT+QIOTOTARD">  </span>

## <span style="color:#A52A2A">__AT+QIOTOTARD (分片读取 SOTA 数据)__</span>

* __说明__：该命令用于分片读取 SOTA 数据。
* __最大响应时间__ ：300 毫秒。
* __特性说明__： 该命令立即生效。

### **测试命令**

* __发送：__
	
	```c
	AT+QIOTOTARD=?
	```	
* __响应：__

	响应支持的设置参数范围

	```c
	+QIOTOTARD: <start>,(支持的<max_length>范围)
	
	OK
	```

### **设置命令**

* __发送：__

	```c
	AT+QIOTOTARD=<start>,<length>
	```	
* __响应：__

	设置成功

	```c
	+QIOTOTARD: <start>,<length>
	<data>

	OK
	```
	
	若出现任何错误
	```c
	ERROR
	```	

---



* __参数：__
	* __`<start>`__： 整型。读取数据开始位置。单位：字节。<br>
	* <span style="color:#999AAA">前提：第一包数据从0开始读取，后续读取地址一直叠加。</span>
	* __`<max_length>`__： 整型。支持的一次读取数据的最大长度。长度范围以测试命令实际返回值为准。
	* __`<length>`__ ：整型。实际返回的数据长度。
	* __`<data>`__： 字节流类型。固件数据。

* __备注：__
	* __2.3.3及以上版本支持__

---

#### **示例**
 <span style="color:#999AAA">前提：在开发者中心启动升级计划。</span>
 
__示例1 (分片读取 SOTA 数据)__
循环读取SOTA数据，直到读取完全。

```c
AT+QIOTOTARD=1,1024
data...

OK
AT+QIOTOTARD=1024,1024
data...

OK
AT+QIOTOTARD=2048,1024
data...

OK
......
```
***
