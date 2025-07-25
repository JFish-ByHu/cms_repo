# 网关子设备 相关命令
## __相关AT指令表__

|                  指令名称                   |           功能描述           |
| :-----------------------------------------: | :--------------------------: |
|      [AT+QIOTSUBCONN](#AT+QIOTSUBCONN)      |       连接子设备至网关       |
|   [AT+QIOTSUBDISCONN](#AT+QIOTSUBDISCONN)   | 断开/注销子设备与网关的连接  |
|      [AT+QIOTSUBSEND](#AT+QIOTSUBSEND)      |   发送子设备透传数据至平台   |
|        [AT+QIOTSUBRD](#AT+QIOTSUBRD)        | 子设备读取平台下发的透传数据 |
|     [AT+QIOTSUBTSLTD](#AT+QIOTSUBTSLTD)     |  发送子设备物模型数据至平台  |
|     [AT+QIOTSUBTSLRD](#AT+QIOTSUBTSLRD)     |   读取平台下发的物模型数据   |
|       [AT+QIOTSUBHTB](#AT+QIOTSUBHTB)       |          发送心跳包          |
|   [AT+QIOTSUBDEVINFO](#AT+QIOTSUBDEVINFO)   |        子设备信息上报        |
|    [AT+QIOTSUBOTAREQ](#AT+QIOTSUBOTAREQ)    |       子设备 OTA 请求        |
| [AT+QIOTSUBOTAUPDATE](#AT+QIOTSUBOTAUPDATE) |     子设备 OTA 升级配置      |
|     [AT+QIOTSUBOTARD](#AT+QIOTSUBOTARD)     |     子设备 OTA 固件读取      |
|       [AT+QIOTSUBLOC](#AT+QIOTSUBLOC)       |      子设备定位信息上报      |

## **相关AT指令详情**

<span id="AT+QIOTSUBCONN">  </span>

## <span style="color:#A52A2A">__AT+QIOTSUBCONN (连接子设备至网关)__</span>

* __说明__：该命令用于将子设备连接到网关。
* __最大响应时间__ ：300 毫秒。

### 测试命令

* __发送：__

  ```c
  AT+QIOTSUBCONN=?
  ```

* __响应：__

  响应支持的可设置参数范围

  ```c
  +QIOTSUBCONN: <sessionType>,<lifetime>,<subPK>,<sub PS>,<subDK>[,<subDS>]

  OK
  ```

### 设置命令

* __发送：__

  ```c
  AT+QIOTSUBCONN=<sessionType>,<lifetime>,<subPK>,<subPS>,<subDK>[,<subDS>]
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
  * __`<sessionType>`__：整型。子设备交互数据加密方式。
  * __`<lifetime>`__： 整型。子设备保活时间。范围：60~65534；单位：秒。
  * __`<subPK>`__ ：字符串类型。在开发者中心创建产品时生成的 ProductKey。
  * __`<subPS>`__：字符串类型。在开发者中心创建产品时生成的 ProductSecret。
  * __`<subDK>`__ ：字符串类型。子设备唯一标识。
  * __`<subDS>`__：字符串类型。认证到平台时，平台下发的设备秘钥。

* __备注：__
    * __2.9.0及以上版本支持__

---

#### 示例

__示例一(子设备连接网关)__

```c
[TX]AT+QIOTSUBCONN=0,60,"p1126m","RGtwxxxxxxxxSUls","123456"

[RX]OK
```

---

<span id="AT+QIOTSUBDISCONN">  </span>

## <span style="color:#A52A2A">__AT+QIOTSUBDISCONN (断开/注销子设备与网关的连接)__</span>

* __说明__：该命令用于断开/注销子设备与网关之间的连接。
* __最大响应时间__ ：300 毫秒。

### 测试命令

* __发送：__

  ```c
  AT+QIOTSUBDISCONN=?
  ```

* __响应：__

  响应支持的可设置参数范围

  ```c
  +QIOTSUBDISCONN: <subPK>,<subDK>[,<subPS>,<subDS>]

  OK
  ```

### 设置命令

* __发送：__

  ```c
  AT+QIOTSUBDISCONN=<subPK>,<subDK>[,<subPS>,<subDS>]
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
  * __`<subDK>`__ ：字符串类型，子设备唯一标识。
  * __`<subPK>`__ ：字符串类型，在平台创建产品时生成的 ProductKey。
  * __`<subDS>`__：字符串类型，认证到平台时，平台下发的设备秘钥。
  * __`<subPS>`__：字符串类型，在平台创建产品时生成的 ProductSecret。

* __备注：__
    * __2.9.2及以上版本支持__

---


#### 示例

__示例一(子设备断开网关)__

```c
[TX]AT+QIOTSUBDISCONN="p1126m","123456"

[RX]OK
```

__示例二(子设备注销网关)__

```c
[TX]AT+QIOTSUBDISCONN="p1126m","RGtwxxxxxxxxSUls","123456","1213xxxxxxxx345"

[RX]OK
```

<span style="color:#999AAA">提示：子设备注销网关后，旧subDS不可再用，需要重新认证返回新subDS。</span>

---

<span id="AT+QIOTSUBSEND">   </span>

## <span style="color:#A52A2A">__AT+QIOTSUBSEND (发送子设备透传数据至平台)__</span>

* __说明__：该命令用于将子设备的透传数据发送至平台。
* __最大响应时间__ ：300 毫秒。
* __特性说明__： 该命令立即生效。

### 测试命令

* __发送：__

  ```c
  AT+QIOTSUBSEND=?
  ```

* __响应：__

  响应支持的可设置参数范围

  ```c
  +QIOTSUBSEND: <subPK>,<subDK>,(支持的<length>范围),<data>
  OK
  ```

### 设置命令

* __发送：__

  ```c
  AT+QIOTSUBSEND=<subPK>,<subDK>,<length>[,<data>]
  ```

* __响应：__

  若省略可选参数且子设备连接已经建立

  ```c
  >
  ```

  响应>后，输入长度等于\<length>的数据。

  * 若已配置需回复上行消息 __PkgID__
    ```c
    +QIOTSUBSEND:<subPK>,<subDK>,<txid>

    OK
    ```
  * 否则
    ```c
    OK
    ```
  若指定可选参数且子设备连接已经建立

  * 若已配置需回复上行消息 __PkgID__
    ```c
    +QIOTSUBSEND:<subPK>,<subDK>,<txid>

    OK
    ```
  * 否则返回内容为
    ```c
    OK
    ```
  若出现任何错误

  ```c
  ERROR
  ```

---

* __参数：__
  * __`<subPK>`__ ：字符串类型。在平台创建产品时生成的 ProductKey。
  * __`<subDK>`__ ：字符串。子设备唯一标识。
  * __`<length>`__ ：整型。待发送数据长度。单位：字节。
    * 若设置命令中指定\<data\>，长度范围以测试命令实际返回值为准。
    * 若设置命令中不指定\<data\>，长度范围以模块性能为准。
  * __`<data>`__ ：发送数据。
    * 若设置命令中指定\<data\>，待发送数据仅可为字符串类型。
    * 若设置命令中不指定\<data\>，待发送数据为任意字节流类型，以模块性能为准。
  * __`<txid>`__ ：整型。范围：1~65535。

* __备注：__
    * __2.9.0及以上版本支持__

---


#### __示例__

__示例一(子设备发送透传数据)__
子设备发送"123456ABC"的透传数据到平台

```c
[TX]AT+QIOTSUBSEND="p1126m","123456",9,"123456ABC"

[RX]OK

[RX]+QIOTSUBEVT: "p1126m","123456",4,10200
```

---

<span id="AT+QIOTSUBRD">   </span>

## <span style="color:#A52A2A">__AT+QIOTSUBRD (读取平台下发的透传数据)__</span>

* __说明__：该命令用于读取平台下发至子设备的透传数据。
* __最大响应时间__ ：300 毫秒。
* __特性说明__： 该命令立即生效；参数配置自动保存。

### 测试命令

* __发送：__

  ```c
  AT+QIOTSUBRD=?
  ```

* __响应：__

  响应支持的可设置参数范围

  ```c
  +QIOTSUBRD: <subPK>,<subDK>,(支持的<req_length>范围)

  OK
  ```

### 查询命令

* __发送：__

  ```c
  AT+QIOTSUBRD?
  ```

* __响应：__

  响应支持的可设置参数范围

  ```c
  +QIOTSUBRD: <subPK>,<subDK>,<remain_pieces> 
  +QIOTSUBRD: <subPK>,<subDK>,<remain_pieces> 
  ...

  OK
  ```

### 设置命令

* __发送：__

  ```c
  AT+QIOTSUBRD=<subPK>,<subDK> [,<req_length>]
  ```

* __响应：__

  若省略参数 req_length，则表示查询当前子设备缓存透传长度

  ```c
  +QIOTSUBRD: <subPK>,<subDK>,<remain_pieces>

  OK
  ```
  若携带参数 req_length，则表示读取当前子设备缓存数据

  ```c
  +QIOTSUBRD: <subPK>,<subDK>,<cur_len>,<remain_len>,< remain_pieces><CR><LF>
  <data>

  OK
  ```
  若出现任何错误

  ```c
  ERROR
  ```

---

* __参数：__
  * __`<subDK>`__ ：字符串类型。子设备唯一标识。
  * __`<subPK>`__ ：字符串类型。在开发者中心创建产品时生成的 ProductKey。
  * __`<req_length>`__ ：整型。读取的数据长度。长度范围以测试命令实际返回值为准。
  * __`<cur_len>`__ ：整型。实际读取的数据长度。
  * __`<data>`__ ：字节流类型。读取的数据。
  * __`<remain_len>`__ ：整型。当前数据包剩余未读的数据长度。单位：字节。
  * __`<remain_pieces>`__ ：整型。剩余数据包个数。

* __备注：__
    * __2.9.0及以上版本支持__

---


#### 示例

__示例一(缓存模式下子设备读取透传数据)__

i.开发者中心下发透传数据

ii.子设备接收到透传数据向串口打印回调事件

```c
[RX]+QIOTSUBEVT: "p1126C","123456",5,10200
```

iii.MCU主动发送查询指令 __AT+QIOTSUBRD="p1126C","12345678",512__ 后，查询到透传数据为"123456ABC"

```c
[TX]AT+QIOTSUBRD="p1126C","123456",512

[RX]+QIOTSUBRD: "p1126C","123456",9,0,2
[RX]123456ABC

OK
```

__示例二(非缓存模式下子设备读取透传数据)__

i.开发者中心下发透传数据

ii.子设备接收到透传数据向串口打印回调事件及透传数据

```c
[RX]+QIOTSUBEVT: "p1126C","123456",5,10200,9
123456ABC
```

---

<span id="AT+QIOTSUBTSLTD">  </span>

## <span style="color:#A52A2A">__AT+QIOTSUBTSLTD (发送子设备物模型数据至平台)__</span>

* __说明__：该命令用于发送子设备物模型数据至平台。设置命令中若指定\<PkgID\>，则发送数据为应答平台数据请求；若省略\<PkgID\>，则发送数据至平台，发送成功时，MCU接收事件+QIOTSUBEVT: \<subPK\>,\<subDK\>,4,10210，表示物模型数据发送成功。
* __最大响应时间__ ：300 毫秒。
* __特性说明__： 该命令立即生效；

### 测试命令

* __发送：__

  ```c
  AT+QIOTSUBTSLTD=?
  ```

* __响应：__

  响应支持的可设置参数范围

  ```c
  +QIOTSUBTSLTD:<subPK>,<subDK>,<length>,(支持的 <PkgID> 范围)

  OK
  ```

### 设置命令

* __发送：__

  ```c
  AT+QIOTSUBTSLTD=<subPK>,<subDK>,<length>[,<PkgID>]
  ```

* __响应：__

  ```c
  >

  响应>后，输入长度等于\<length\>的字节流数据。
  ```

  若指定可选参数\<PkgID>，则为应答平台查询的消息

    ```c
    OK
    ```

  若省略可选参数\<PkgID>，则为主动发送上行消息

    * 若已配置需回复上行消息 __PkgID__

      ```c
      +QIOTSUBTSLTD:<subPK>,<subDK>,<txid>

      OK
      ```
    * 否则返回内容为

      ```c
      OK
      ```
  若出现任何错误

    ```c
    ERROR
    ```

---

* __参数：__
  * __`<subPK>`__ ：字符串类型。在平台创建产品时生成的 ProductKey。
  * __`<subDK>`__ ：字符串类型。子设备唯一标识。
  * __`<length>`__ ：整型。待发送数据长度。长度范围以具体模块性能为准。
  * __`<PkgID>`__ ：整型。请求包 ID。范围：1~65534。仅当设备需响应平台数据请求时需指定该参数。
  * __`<txid>`__ ：整型。上行消息 ID。范围：1~65535。

* __备注：__
    * __2.9.0及以上版本支持__

---


#### 示例

__示例一(发送物模型数据)__

需发送的物模型数据如下所示。
ID ：1；数据类型：Bool；数值：    true。ID：2；数据类型：int    ；数值：30。

```c
[TX]AT+QIOTSUBTSLTD="p1126m","123456",17
[RX]> 
[TX]{"1":true,"2":30}
[RX]OK

[RX]+QIOTSUBEVT: "p1126m","123456",4,10210
```

---

<span id="AT+QIOTSUBTSLRD">  </span>

## <span style="color:#A52A2A">__AT+QIOTSUBTSLRD (读取平台下发的物模型数据)__</span>

* __说明__：该命令用于读取子设备接收的由开发者中心下发的物模型数据。
* __最大响应时间__ ：300 毫秒。
* __特性说明__： 该命令立即生效。

### 测试命令

* __发送：__

  ```c
  AT+QIOTSUBTSLRD=?
  ```

* __响应：__

  响应支持的可设置参数范围

  ```c
  +QIOTSUBTSLRD:<subPK>,<subDK>,(支持的 <req_length> 范围)

  OK
  ```

### 查询命令

* __发送：__

  ```c
  AT+QIOTSUBTSLRD?
  ```

* __响应：__

  响应支持的可设置参数范围

  ```c
  +QIOTSUBTSLRD:<subPK>,<subDK>,<remain_pieces> 
  +QIOTSUBTSLRD:<subPK>,<subDK>,<remain_pieces>
  ...

  OK
  ```

### 设置命令

* __发送：__

```c
AT+QIOTSUBTSLRD=<subPK>,<subD K>[,<req_length>]
```

* __响应：__

  若省略可选参数，则查询当前子设备缓存的物模型数据长度

  ```c
  +QIOTSUBTSLRD: <subPK>,<subDK>,<remain_pieces>

  OK
  ```
  若指定可选参数，则读取当前子设备缓存的物模型数据

  ```c
  +QIOTSUBTSLRD: <subPK>,<subDK>,<cur_len>,<remain_l en>,<remain_pieces><CR><LF>
  <data>

  OK
  ```
  若出现任何错误

  ```c
  ERROR
  ```

---

* __参数：__
  * __`<subDK>`__ ：字符串类型。子设备唯一标识。
  * __`<subPK>`__ ：字符串类型。在平台创建产品时生成的 ProductKey。
  * __`<req_length>`__ ：整型。读取的数据长度。长度范围以测试命令实际返回值为准。
  * __`<cur_len>`__ ：整型。实际读取的数据长度。
  * __`<data>`__ ：字节流类型。读取的物模型数据。
  * __`<remain_len>`__ ：整型。当前数据包剩余未读的数据长度。单位：字节。
  * __`<remain_pieces>`__ ：整型。剩余数据包个数。

* __备注：__
    * __2.9.0及以上版本支持__

---


#### 示例

__示例一(缓存模式下子设备读取物模型)__

i.开发者中心下发物模型数据

ii.模组收到下发指令并向MCU打印回调事件与数据

```c
[RX]+QIOTSUBEVT: "p1126C","123456",5,10200
```

iii.模组收到物模型数据后，会主动向MCU打印回调事件 +QIOTSUBEVT: “p1126m”,“123123123”,5,10210,10 与下发的物模型数据 {“1”:true}。

```c
[TX]AT+QIOTSUBTSLRD="p1126m","123456",512

[RX]+QIOTSUBEVT: "p1126m","123456",5,10210,10
{"1":true}

[RX]OK
```

__示例二(非缓存模式下子设备主动打印物模型数据)__

i.开发者中心下发物模型数据

ii.子设备接收到物模型数据后会主动向串口打印回调事件及数据

```c
[RX]+QIOTSUBEVT: "p1126m","123456",5,10210,10
[RX]{"1":true}
```

---

<span id="AT+QIOTSUBHTB">  </span>

## <span style="color:#A52A2A">__AT+QIOTSUBHTB (子设备心跳包)__</span>

* __说明__：该命令用于发送心跳包以刷新子设备与网关最后交互的时间。
* __最大响应时间__ ：300 毫秒。
* __特性说明__： 该命令立即生效。

### 测试命令

* __发送：__

  ```c
  AT+QIOTSUBHTB=?
  ```

* __响应：__

  响应支持的可设置参数范围

  ```c
  +QIOTSUBHTB:<subPK>,<subDK>

  OK
  ```

### __设置命令__

* __发送：__

  ```c
  AT+QIOTSUBHTB=<subPK>,<subDK>
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
  * __`<subPK>`__ ：字符串类型。在平台创建产品时生成的 ProductKey。
  * __`<subDK>`__ ：字符串类型。子设备唯一标识。

* __备注：__
    * __2.9.0及以上版本支持__

---


#### __示例__

__示例一(子设备发送心跳包)__

```c
[TX]AT+QIOTSUBHTB="p1126m","12345678"

[RX]OK
```


---

<span id="AT+QIOTSUBDEVINFO">  </span>

## <span style="color:#A52A2A">__AT+QIOTSUBDEVINFO (子设备信息上报)__</span>

* __说明__：该命令用于上报子设备信息。
* __最大响应时间__ ：300 毫秒。

### 测试命令

* __发送：__

  ```c
  AT+QIOTSUBDEVINFO=?
  ```

* __响应：__

  响应支持的可设置参数范围

  ```c
  +QIOTSUBDEVINFO: <subPK>,<subDK>,<subVer>

  OK
  ```

### 设置命令

* __发送：__

  ```c
  AT+QIOTSUBDEVINFO=<subPK>,<subDK>,<subVer>
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
  * __`<subDK>`__ ：字符串类型。子设备唯一标识。
  * __`<subPK>`__ ：字符串类型。在平台创建产品时生成的 ProductKey。
  * __`<subVer>`__ ：字符串类型。子设备版本。

* __备注：__
    * __2.19.0及以上版本支持__

---


#### 示例

__示例一(子设备上报版本号)__

```c
[TX]AT+QIOTSUBDEVINFO="p1126m","12345678","1_0_0"

[RX]OK
```

---


<span id="AT+QIOTSUBOTAREQ">  </span>

## <span style="color:#A52A2A">__AT+QIOTSUBOTAREQ (子设备 OTA 请求)__</span>

* __说明__：该命令用于子设备向平台请求 OTA。
* __最大响应时间__ ：300 毫秒。
* __特性说明__： 该命令立即生效。

### 测试命令

* __发送：__

  ```c
  AT+QIOTSUBOTAREQ=?
  ```

* __响应：__

  响应支持的可设置参数范围

  ```c
  +QIOTSUBOTAREQ: <subPK>,<subDK>,<subVer>,<info>

  OK
  ```

### __设置命令__

* __发送：__

  ```c
  AT+QIOTSUBOTAREQ=<subPK>,<subDK>,<subVer>,<info>
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
  * __`<subPK>`__ ：字符串类型。在平台创建产品时生成的 ProductKey。
  * __`<subDK>`__ ：字符串类型。子设备唯一标识。
  * __`<subVer>`__ ：字符串类型。子设备版本。
  * __`<info>`__ ：整型。子设备通信模式。范围：0~3。
    * __`0`__：不需要sha256信息，也不需要URL外发
    * __`1`__：携带sha256信息，但不需要URL外发
    * __`2`__：不需要sha256信息，但需要URL外发
    * __`3`__：携带sha256信息，且需要URL外发

* __备注：__
    * __2.19.0及以上版本支持__

---


#### __示例__

__示例一(子设备 OTA 请求)__

```c
[TX]AT+QIOTSUBOTAREQ="p1126m","12345678","1_0_0",0

[RX]OK
```


---


<span id="AT+QIOTSUBOTAUPDATE">  </span>

## <span style="color:#A52A2A">__AT+QIOTSUBOTAUPDATE (子设备 OTA 升级配置)__</span>

* __说明__：该命令用于子设备 OTA 升级时配置参数。
* __最大响应时间__ ：300 毫秒。
* __特性说明__： 该命令立即生效。

### 测试命令

* __发送：__

  ```c
  AT+QIOTSUBOTAUPDATE=?
  ```

* __响应：__

  响应支持的可设置参数范围

  ```c
  +QIOTSUBOTAUPDATE: <subPK>,<subDK>,<subVer>,<action>

  OK
  ```

### __设置命令__

* __发送：__

  ```c
  AT+QIOTSUBOTAUPDATE=<subPK>,<subDK>,<subVer>,<action>
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
  * __`<subPK>`__ ：字符串类型。在平台创建产品时生成的 ProductKey。
  * __`<subDK>`__ ：字符串类型。子设备唯一标识。
  * __`<subVer>`__ ：字符串类型。子设备版本。
  * __`<action>`__ ：整型。子设备 OTA 行为配置。
    * __`0`__- 拒绝升级；
    * __`1`__- 确认升级；
    * __`3`__- 上报更新状态为“升级中”
    * __`4`__- 上报更新状态为“升级成功”
    * __`5`__- 上报更新状态为“升级失败”

* __备注：__
    * __2.19.0及以上版本支持__

---

#### __示例__

__示例一(子设备 OTA 确认升级)__

```c
[TX]AT+QIOTSUBOTAUPDATE="p1126m","12345678","1_0_0",1

[RX]OK
```


---


<span id="AT+QIOTSUBOTARD">  </span>

## <span style="color:#A52A2A">__AT+QIOTSUBOTARD (子设备 OTA 固件读取)__</span>

* __说明__：该命令用于子设备根据平台下发的 url 链接下载相应固件数据并传输至用户。
* __最大响应时间__ ：300 毫秒。
* __特性说明__： 该命令立即生效。

### 测试命令

* __发送：__

  ```c
  AT+QIOTSUBOTARD=?
  ```

* __响应：__

  响应支持的可设置参数范围

  ```c
  +QIOTSUBOTARD: <subPK>,<subDK>,<startAddr>,<dataLen>

  OK
  ```

### __设置命令__

* __发送：__

  ```c
  AT+QIOTSUBOTARD=<subPK>,<subDK>,<startAddr>,<dataLen>
  ```

* __响应：__

  设置成功

  ```c
  +QIOTSUBOTARD: <subPK>,<subDK>,<startAddr>,<dataLen>,<data>

  OK
  ```
  若出现任何错误

  ```c
  ERROR
  ```

---

* __参数：__
  * __`<subPK>`__ ：字符串类型。在平台创建产品时生成的 ProductKey。
  * __`<subDK>`__ ：字符串类型。子设备唯一标识。
  * __`<startAddr>`__ ：整型。固件下载起始地址。
  * __`<dataLen>`__ ：整型。固件单次下载的长度。范围：1~\<max_datalen>。单位：字节。
    * __`<max_datalen>`__ ：整型。模块内可供固件下载的内存大小。单位：字节。
  * __`<data>`__ ：字节流类型。固件数据。

* __备注：__
    * __2.19.0及以上版本支持__

---

#### __示例__

__示例一(子设备 OTA 读取固件内容)__

```c
[TX]AT+QIOTSUBOTARD="p1126m","12345678",0,5

[RX]+QIOTSUBOTARD: "p1126m","12345678",0,5,HELLO

[RX]OK
```


---


<span id="AT+QIOTSUBLOC">  </span>

## <span style="color:#A52A2A">__AT+QIOTSUBLOC (子设备定位信息上报)__</span>

* __说明__：该命令用于上报子设备定位信息。
* __最大响应时间__ ：300 毫秒。
* __特性说明__： 该命令立即生效。

### 测试命令

* __发送：__

  ```c
  AT+QIOTSUBLOC=?
  ```

* __响应：__

  响应支持的可设置参数范围

  ```c
  +QIOTSUBLOC: <subPK>,<subDK>,<NMEA>[,<NMEA>,...]

  OK
  ```

### __设置命令__

* __发送：__

  ```c
  AT+QIOTSUBLOC=<subPK>,<subDK>,<NMEA>
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
  * __`<subPK>`__ ：字符串类型。在平台创建产品时生成的 ProductKey。
  * __`<subDK>`__ ：字符串类型。子设备唯一标识。
  * __`<NMEA>`__ ：字符串类型。定位数据。

* __备注：__
    * __2.19.0及以上版本支持__

---

#### __示例__

__示例一(子设备上报 GGA 定位信息)__

```c
[TX]AT+QIOTSUBLOC="p1126m","12345678","$GPGGA,042523.0,3413.610533,N,10854.063257,E,1,05,2.6,438.5,M,-28.0,M,,*78"

[RX]+QIOTSUBEVT: 4,10220

[RX]OK
```


