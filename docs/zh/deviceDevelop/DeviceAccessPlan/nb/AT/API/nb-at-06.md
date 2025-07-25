# GNSS&LBS&Wi-Fi定位 相关指令
## **相关AT指令列表**

|            指令名称             |              功能描述               |
| :-----------------------------: | :---------------------------------: |
|  [AT+QIOTLOCIN](#AT+QIOTLOCIN)  | 获取/上报设备内置定位功能的定位数据 |
| [AT+QIOTLOCEXT](#AT+QIOTLOCEXT) |   上报设备外置定位功能的定位数据    |

## **相关AT指令详情**

<span id="AT+QIOTLOCIN">  </span>

## <span style="color:#A52A2A">__AT+QIOTLOCIN (获取/上报设备内置定位功能的定位数据)__</span>

* __说明__：该命令用于上报和获取设备内置定位功能的定位数据。
* __最大响应时间__ ：300 毫秒。

### **测试命令**

* __发送：__

	```c
	AT+QIOTLOCIN=?
	```	
* __响应：__

	响应支持的操作类型以及 NMEA 数据类型

	```c
	+QIOTLOCIN: <type>,<mode1>[,<mode2>[,...]]
	
	OK
	```

### **查询命令**

* __发送：__

	```c
	AT+QIOTLOCIN?
	```	
* __响应：__

	响应当前 NMEA 数据

	```c
	+QIOTLOCIN: <mode1>[,<mode2>[,...]]
	
	OK
	```

### **设置命令**

* __发送：__

	```c
	AT+QIOTLOCIN=<type>,<mode1>[,<mode2>[,...]]
	```	
* __响应：__

	若设置成功
	* 若\<type\>=1，查询设备内置定位功能的定位数据
	
		```c
		[+QIOTLOCIN: <nmea1>]
		[+QIOTLOCIN: <nmea2>]
		[...]
		
		OK
		```	
	* 若\<type\>=0，上报设备内置定位功能的定位数据
		* 若已配置上行消息需应答PkgID
	
			```c
			+QIOTLOCIN: <txid>
			
			OK
			```
		* 否则
			```c
			OK
			```
	若出现任何错误
	```c
	ERROR
	```	

---

* __参数：__
	* __`<type>`__： 整型。操作类型。
		* __`0`__：上报设备内置定位 NMEA 数据到平台
		* __`1`__：读取设备当前定位 NMEA 数据
	* __`<modeN>`__： 字符串类型。NMEA 数据类型。
	* __`<nameN>`__： 字符串类型。NMEA 数据。
	* __`<txid>`__： 整型。上行消息 ID。范围：1~65535。

* __备注：__
	* __2.1.2及以上版本支持__

---

#### **示例**
__示例1 (查询模组内置定位数据)__  
```c
[TX]AT+QIOTLOCIN?

[RX]+QIOTLOCIN: "AUTO","LBS"

[RX]OK
```

__示例2 (获取模组内置NMEA定位数据)__  

```c
[TX]AT+QIOTLOCIN=1,"LBS"

[RX]+QIOTLOCIN: "$LBS,460,02,0,455,-113,0*71"
[RX]+QIOTLOCIN: "$LBS,460,01,0,456,-100,0*69"


[RX]OK
```

__示例3 (上报模组内置的定位数据到开发者中心)__  

```c
[TX]AT+QIOTLOCIN=0,"LBS"

[RX]OK

[RX]+QIOTEVT: 4,10220
```

***

<span id="AT+QIOTLOCEXT">  </span>

## <span style="color:#A52A2A">__AT+QIOTLOCEXT (上报设备外置定位功能的定位数据)__</span>

* __说明__：该命令用于上报外置定位功能的定位数据。
* __最大响应时间__ ：300 毫秒。

### 测试命令

* __发送：__

	```c
	AT+QIOTLOCEXT=?
	```	
* __响应：__

	响应支持的设置参数范围

	```c
	+QIOTLOCEXT: <nmea1>[,<nmea2>[,...]]

	OK
	```
### **设置命令**

* __发送：__

	```c
	AT+QIOTLOCEXT=<nmea1>[,<nmea2>[,...]]
	```	
* __响应：__

	设置成功
	* 若已配置上行消息需应答PkgID
		```c
		+QIOTLOCEXT: <txid>
		
		OK
		```
	* 否则
		```c
		OK
		```
	
	若出现任何错误
	```c
	ERROR
	```	

---

* __参数：__
	* __\<nameN\>__： 字符串类型。NMEA 数据。
	* __\<txid\>__：整型。上行消息 ID。范围：1~65535。

* __备注：__
	* __2.1.2及以上版本支持__

---

#### **示例**
__示例1 (将获取到的定位数据上报到开发者中心)__  
```c
[TX]AT+QIOTLOCEXT="$GPGGA,042523.0,3116.552,N,12138.7385,E,1,05,2.6,438.5,M,-28.0,M,,*78"

[RX]OK

[RX]+QIOTEVT: 4,10220
```
***