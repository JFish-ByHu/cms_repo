# Quick Access to Developer Center

## __Description__

The primary function of a gateway is to enable communication between different devices that use different protocols. Sub-devices that do not have networking capabilities can connect to the IoT platform through the gateway. To achieve this, sub-devices must first be added to the gateway to establish a connection between the sub-device and the gateway. This section provides instructions on how to connect sub-devices to Developer Center through the gateway with AT commands.



## __Related AT Commands__

|    AT Command     |                               Description                                |
| :---------------: | :----------------------------------------------------------------------: |
|  AT+QIOTSUBCONN   |                      Connect sub-device to gateway                       |
| AT+QIOTSUBDISCONN |                    Disconnect sub-device from gateway                    |
|  AT+QIOTSUBSEND   | Send transparent transmission data of the sub-device to Developer Center |
|   AT+QIOTSUBRD    |      Read transparent transmission data issued by Developer Center       |
|  AT+QIOTSUBTSLTD  |           Send TSL data of the sub-device to Developer Center            |
|  AT+QIOTSUBTSLRD  |                 Read TSL data issued by Developer Center                 |
|   AT+QIOTSUBHTB   |                          Send heartbeat packet                           |

<span style='color:#999AAA'>Note: For details see [AT Command Overview on Directly Connected Sub-device](/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-10).</span>


## __Procedures__

### __1. Log in to Developer Center__

Log in to <a href="https://core.acceleronix.io"  target="_blank">Developer Center</a>. If you don't have an account click <a href="https://core.acceleronix.io/registerType" target="_blank">Register Now</a> to register.

2. Create a Product.

### __2. Create Product__

#### __1) Create a Gateway Product__

Creating a gateway product is similar to creating a cellular product. In the Device Type option, select **Gateway**.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/subDevice/Example-01.png">
  <img src="/en/deviceDevelop/develop/subDevice/Example-01.png" width="500" alt="img">
</a>

#### __2) Create a Sub-device Product__

<a data-fancybox title="img" href="/en/deviceDevelop/develop/subDevice/Example-02.png">
  <img src="/en/deviceDevelop/develop/subDevice/Example-02.png" width="500" alt="img">
</a>

* __Device Type__：A directly connected device can directly access the network. A gateway device can help sub-devices to connect to Developer Center. A sub-device is a device that relies on the gateway to connect to the network.
* __Specified Gateway__:
    * __Disable__: Sub-devices can access Developer Center through any gateway.
    * __Enable__: Sub-devices can access Developer Center only through the specified gateway.
* __Gateway Access Mode__: Developer Center authorizes the gateway device. 
  *  __Access Network Only__: App users have permission to control sub-devices only after sub-devices are bound to the gateway. This mode applies to the situation where the gateway is regarded as the network access and data forwarding channel.
     * __Enable Dynamical Gateway Switching__: Sub-devices that have connected to Developer Center through a gateway can switch to another gateway to access Developer Center.
     * __Disable Dynamical Gateway Switching__: Sub-devices that have connected to Developer Center through a gateway cannot switch to another gateway to access Developer Center.
  *  __Product Integrated__: App users have permission to control sub-devices after the gateway is bound. This mode applies to the situation where sub-devices are integrated into the gateway.


### __3. Configure Gateway Device__

#### __1) Configure Product Info (Required at the first connection)__

When connecting to Developer Center for the first time, you must configure the product information through **AT+QIOTCFG="productinfo"[,\<pk\>,\<ps\>]** by downloading the product key into the device. After passing the device bootstrap/authentication, it will be automatically added to the specific product on Developer Center.

 ```c
[TX]AT+QIOTCFG="productinfo","pxxxxt","cDVTxxxxxxxxWGVB"

[RX]AT+QIOTCFG="productinfo","pxxxxt","cDVTxxxxxxxxWGVB"

[RX]OK
 ```


#### __2) Connect to Developer Center__

The MCU can configure Developer Center connection mode through __AT+QIOTREG=\<reg_mode\>__. After sending the command, when the module responds with the following return values, it means the device has successfully connected to Developer Center.

  ```c
[TX]AT+QIOTREG=1

[RX]AT+QIOTREG=1

[RX]OK

[RX]+QIOTEVT: 2,10200

[RX]+QIOTEVT: 3,10200
  ```


### __4. Sub-device Connects to Gateway__

The capability of the gateway is to convert the communication protocols between different devices, allowing sub-devices that do not have networking capabilities to connect to the IoT platform through the gateway.
To achieve this purpose, you need to add the sub-device to the gateway to establish the connection between the sub-device and the gateway. The gateway sub-device can connect to the gateway device through __AT+QIOTSUBCONN__.

```c
[TX]AT+QIOTSUBCONN=0,60,"pxxxxm","RGtwxxxxxxxxxxSUls","123123123"

[RX]OK
```

__Callback feedback of a successful connection event__

After executing the gateway connection command, the device will be successfully connected to the gateway device upon the following response.

* Callback of a successful device authentication event 

  ```c
  [RX]+QIOTSUBEVT: "pxxxxm","123123123",1,10200,"2c8e8a105e5c4c0fa3787deb7e96ede7"
  ```

* Callback of a successful sub-device login event

  ```c
  [RX]+QIOTSUBEVT: "pxxxxm","123123123",2,10200
  ```

### __5. Sub-device Sends Heartbeat Packets__

To maintain the connection between the sub-device and the gateway, a heartbeat message is sent between them. The sub-device sends these packets periodically based on a **sub-device keepalive time** configured during connection to the gateway. To initiate the sending of these packets, the MCU must execute **AT+QIOTSUBHTB**.

```c
[TX]AT+QIOTSUBHTB="pxxxxm","123123123"

[RX]OK
```

### __6. Sub-device TSL Data Interaction__

For remote control of a smart device, a gateway must report the status of the device, receive and execute commands from the IoT platform. Therefore, data transmission is the core capability of the gateway. The smart LGB light sub-device will be used to illustrate TSL model interaction.

#### __TSL Uplink Data__

__Send TSL data in JSON format__

The table of sending TSL data is shown below.

|  ID   | Type | Value |
| :---: | :--- | :---- |
|   1   | Bool | true  |
|   2   | Int  | 30    |

Execute __AT+QIOTSUBTSLTD="p1126m","123123123",17__, After __>__  is returned, MCU sends TSL data.

```c
[TX]AT+QIOTSUBTSLTD="pxxxxm","123123123",17
[RX]> 
[TX]{"1":true,"2":30}
[RX]OK

[RX]+QIOTSUBEVT: "pxxxxm","123123123",4,10210
```


#### __TSL Downlink Data__

* ##### __Unbuffered Mode(Buffer mode is disabled by default unless otherwise configured.)__

  __1) Developer Center Issues TSL Service__

   On the "__Device Debug__" page of Developer Center, first click __Property Debug__, and then select the TSL property to be issued, and last click __Send Command__ in the lower left corner to issue the TSL property to the gateway sub-device.

   <a data-fancybox title="img" href="/en/deviceDevelop/develop/subDevice/Example-03.png">
  <img src="/en/deviceDevelop/develop/subDevice/Example-03.png" width="500" alt="img">
   </a>

  __2) The Module Receives TSL Data and Prints Callback Event and Data to MCU__

  After the module receives the TSL data, it will actively print the callback event __+QIOTSUBEVT: "p1126m","123123123",5,10210,10__ and the received TSL data __{"1":true}__ to the MCU.

  ```c
  [RX]+QIOTSUBEVT: "pxxxxm","123123123",5,10210,10
  [RX]{"1":true}
  ```

* ##### __Buffer Mode__

  __1) Enable Downlink Data Buffer Mode__
  The MCU can configure downlink data buffer mode through __AT+QIOTCFG="buffer"[,\<buffer_mode\>]__.

  ```c
  [TX]AT+QIOTCFG="buffer",1
  
  [RX]AT+QIOTCFG="buffer",1
  
  [RX]OK
  ```

  __2) Developer Center Issues TSL Service__

  On the **Device Debug** page of Developer Center, click "**Property Debug**" first, and then select the TSL property to be issued, and click "**Send Command**" in the lower left corner to issue the TSL property to the sub-device.

    <a data-fancybox title="img" href="/en/deviceDevelop/develop/subDevice/Example-03.png">
    <img src="/en/deviceDevelop/develop/subDevice/Example-03.png" width="500" alt="img">
    </a>

  __3) Module Receives the Command and Prints Callback Event to MCU__

  * Callback event: __+QIOTSUBEVT: "p1126m","123123123",5,10210__

    __p1126m__: ProductKey generated by the gateway sub-device when Developer Center creates a product.

    __123123123__: DeviceKey of the gateway sub-device. It is a unique identifier.

    __5__: Event type indicating that the downlink service event was received.

    __10210__: Event code indicating that the TSL property event was received from Developer Center.

  __4) MCU Queries Data According to Callback Events__

  The TSL data queried with __AT+QIOTSUBTSLRD__ is __{"1":true}__.

  ```c
  [TX]AT+QIOTSUBTSLRD="pxxxxm","123123123",512
  
  [RX]+QIOTSUBTSLRD: "pxxxxm","123123123",10,0,0
  [RX]{"1":true}
  
  
  [RX]OK
  ```


