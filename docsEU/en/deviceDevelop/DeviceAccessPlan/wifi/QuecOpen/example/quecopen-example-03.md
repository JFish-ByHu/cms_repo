#  DTU-Modbus Example
##  __Introduction__

DTU (data transmission unit ) is a wireless terminal device specially used to transmit serial data through a wireless communication network. Broadly speaking, during communication, the module units responsible for sending data at both ends of the data transmission link are called DTUs, which perform format conversion, sorting and verification to the transmitted data. This example describes that a hygrothermograph sensor over **Modbus Protocol** accesses **Acceleronix Developer Center** through **IoT DTU module** to communicate with Developer Center.


## __Related API__

|      Function       | Description                                                                                                         |
| :-----------------: | :------------------------------------------------------------------------------------------------------------------ |
|   Ql_iotMBInit()    | Initializes Modbus components.                                                                                      |
| Ql_iotMBCloudRecv() | Converts the format of the TSL data issued by Developer Center to Modbus format and sends the data to Modbus slave. |
| Ql_iotMBLocalRecv() | Forwards Modbus data received via the serial port to Modbus components and processes the Modbus data.               |
|  Ql_iotMBDeinit()   | Deinitializes Modbus components.                                                                                    |

<span style='color:#999AAA'>See [DTU-Modbus API](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-09) for details.</span>



## __Operations on Developer Center__
### __1. Log in to Developer Center__
Log in to <a href="https://core.acceleronix.io"  target="_blank">Developer Center</a>. If you don't have an account, click <a href="https://core.acceleronix.io/registerType" target="_blank">Register Now</a> to register.

### __2. Create a Product__
Creating a product is the first step in product development. A product is an abstract description of a class of devices defined by Developer Center. A product is used to manage devices of the same category. For example, if you have a hygrothermograph sensor with Wi-Fi networking capability and you need to connect the hygrothermograph sensor to Developer Center to monitor it, you can define it as a product "Smart Hygrothermograph".	

## __Operations on QthTools-DTU_Modbus__
QthTools-DTU_Modbus helps you quickly define the features of the slave by using Modbus protocol. After configuring the product information and defining features, you only need to download the configuration file into the DTU module and import it into the Developer Center to connect the slave to Developer Center.

__Homepage of the Tool__

<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-01.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-01.png)</a>

### 1. Configure Product Information

Click "**Add Product**" on the left configuration bar.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-02.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-02.png)</a>

The pop-up window of "Add Product" is shown below.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-03.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-03.png)</a>

* **Product Name**: The product name of DTU.
* **ProductKey**: The ProductKey is generated when a product is created on Developer Center.
* **ProductSecret**: The ProductSecret is generated when a product is created on Developer Center.
* **Report Method**: "Report Changes" and "Report All"
  - **Report All**: The data polled each time will be directly reported to Developer Center.
  - **Report Changes**: The data polled each time is compared with the last data, and only changes are reported to Developer Center.
* **Device Type**: "Directly Connected Device" and "Gateway Sub-device"
  - **Directly Connected Device**: The slave and the gateway share the same product information and are displayed on the Developer Center as a whole device.
  - **Gateway Sub-device**: The slave has independent product information and device information, and is displayed independently on Developer Center.

<span style="color:#999AAA">Note: You can only add one piece of product information at a time. If you need to add a new piece, you must first modify or delete the existing one.</span>

### __2. Configure Serial Port Information__

Click "**Add Serial Port**" on the left configuration bar.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-04.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-04.png)</a>

The pop-up window of "Add Serial Port" is shown below.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-05.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-05.png)</a>


* **Port**: Port number of the DTU device to connect to the slave.
* **Baud Rate**: The number of bytes transmitted per second, commonly set to 9600 and 115200. This value needs to be matched with the baud rate of the slave.
* **Data Bit**:  A parameter that measures valid data in communication. Default value: 8. This value needs to be matched with the data bit of the slave.
* **Stop Bit**: This parameter indicates the transmission end of a character. it can be set to 1, 1.5, or 2.  This value needs to be matched with the stop bit of the slave.
* **Parity Bit**: This parameter can be set to 'None", "Even", "Odd", "Mark" and "Space". Default value: "None". This value needs to be matched with the parity bit of the slave.
* **Polling Cycle(s)**: The time required for the DTU device to send polling of Modbus protocol to the sub-device. For example, the DTU device reads the temperature and humidity values from the sub-device every 60 seconds.
* **Interval(ms)**: To avoid the issue of packet sticking, the minimum interval at which the DTU sends each Modbus protocol to the slave device.
* **Attempt Limit**: This parameter defines how many times the DTU device will attempt to resend the query data frame of Modbus protocol, if the sub-device (sensor) does not respond within the command interval. If this parameter is set to 0, the DTU device will stop sending data frames.


### __3. Add Device Information__

<span style="color:#999AAA">Note: When selecting  "Gateway Sub-device" as the device type, you need to input the corresponding product information for each Modbus device.</span>

__1__) Click "**Add Device(+)**" to add a slave.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-06.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-06.png)</a>


__2)__ Pop-up window of "Add a Device Model"

<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-07.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-07.png)</a>

__i.__ Enter the device name of the slave in "**Device Name**" column, such as "hygrothermograph".

__ii.__ Input the Modbus slave address in the serial port number list. For example, if the hygrothermograph sensor is placed on serial port 1 and the Modbus slave address is 1, you can set the slave address to "1". If multiple devices need to be set to different Modbus slave addresses, add more slave addresses to the list.


### __4. Add Feature Register__


__1) Add Feature Register Address__

Select the slave tab and click "**Add Register Address** ".

<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-08.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-08.png)</a>


Enter the "**Start Address**" and "**Quantity**" in the pop-up window.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-09.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-09.png)</a>

<span style="color:#999AAA">Note: You can display the "Start Address" in either decimal or hexadecimal format by checking the "Hex" option.</span>

**2) Add Register Configuration Information**

Click "**+**" on the right to add register configuration information.


<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-10.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-10.png)</a>

### __5. Configure Feature Information__

You can use QthTools-DTU_Modbus to remotely view and configure the features of a Modbus sensor connected to Developer Center, such as a hygrothermograph. The tool allows you to add feature information to the sensor, including temperature and humidity readings, switch configuration, and real-time clock settings. To demonstrate how to add feature information on QthTools-DTU_Modbus, we will use a hygrothermograph sensor as an example.

The features to be added are listed in the table below.

| Type        | Feature Name | Read/Write   | Data Type           | Byte Order | Formula | Data Length |
| ----------- | ------------ | ------------ | ------------------- | ---------- | ------- | ----------- |
| Boolean     | Switch       | Read & Write | --                  | --         | --      | --          |
| Number      | Temperature  | Read-only    | 16-bit Signed Int   | Big Endian | x0.01+0 | --          |
| Number      | Humidity     | Read-only    | 16-bit Unsigned Int | Big Endian | x0.01+0 | --          |
| Byte Stream | Time Stamp   | Read & Write | --                  | --         | --      | 13          |
| Enumeration | Working Mode | Read & Write | 16-bit Unsigned Int | Big Endian | --      | --          |


__1) Add a Boolean Feature__

Add the hygrothermograph sensor switch to enable remote control of its status.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-11.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-11.png)</a>

* **Type**: Set this parameter to "Boolean". For example, "True" indicates the hygrothermograph is switched on.
* **Feature Name**: Name of the slave feature, such as "Switch".
* **Read/Write**: It can be set to "Read-only", "Write-only" or "Read & Write".

**Configure an event (Optional)** <br>

<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-12.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-12.png)</a>

* **Event Name**: Name of the event.
* **Event Type**: "Message", "Alert" and "Fault".
* **Triggering Condition**: Condition that triggers the event. When the Modbus slave data queried by the DTU device matches the set value, the event is triggered.



__2) Add a Numeric Feature__


Add the features of temperature and humidity to view the temperature and humidity of the sensor on Developer Center.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-13.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-13.png)</a>

* **Type**: Set this parameter to "Number". For example, “25.63” indicates the temperature of the sensor.
* **Feature Name**: Name of the slave feature, such as "Temperature".
* **Read/Write**: It can be set to "Read-only", "Write-only" or "Read & Write".
* **Data Type**: The range of values that can be stored in a variable of this type. For example, to account for negative Celsius degrees and a range from -40 to 85, it is more appropriate to set it to "16-bit Signed Int".
* **Byte Order**: The order in which data is stored in memory. For example, for a 32-bit integer, a number (ABCD) is stored in two bytes, where the high-order byte is (AB) and the low-order byte is (CD), choose from:
  - **Big Endian**: The high-order byte comes first, and the low-order byte comes last, i.e., it is stored as (ABCD).
  - **Little Endian**: The low-order byte comes first, and the high-order byte comes last, i.e., it is stored as (DCBA).
  - **Big Endian Byte Swapped**: Big-endian mode with high and low bytes swapped in pairs, i.e., it is stored as (BADC).
  - **Little Endian Byte Swapped**: Little-endian mode with high and low bytes swapped in pairs, i.e., it is stored as (CDAB).
* **Reduction Formula**: Convert a value to another format. For example, if the sensor reads the value 0x0A 0x03 (2563 in decimal) and the reduction formula is 2563 *0.01+0=25.63, then 25.63 is the actual temperature.

**Configure an event (Optional)** <br>

<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-14.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-14.png)</a>

* **Event Name**: Name of the event.
* **Event Type**: "Message", "Alert" and "Fault".
* **Triggering Condition**: Condition that triggers an event. The value entered in the later box must be greater than the one in the prior box. When the Modbus slave data queried by the DTU device falls within the set range, the event will be triggered.

__3) Add a Feature in Byte Stream__

Add the time stamp feature to read or set the time stamp of the sensor on Developer Center.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-15.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-15.png)</a>


* **Type**: Set this parameter to "Byte Stream", such as "ABCabc123#&*".
* **Feature Name**: Name of the slave feature, such as "timestamp".
* **Read/Write**: It can be set to "Read-only", "Write-only" or "Read & Write".
* **Byte Size**: Set this parameter according to the maximum byte length of byte stream data.

**Configure an event (Optional)**

<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-24.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-24.png)</a>

* **Event Name**: Name of the event.
* **Event Type**: "Message", "Alert" and "Fault".
* **Triggering Condition**: Condition that triggers an event. If the byte stream or string you entered in the box is read on Developer Center, the event will be triggered.

__4) Add a Feature in Enumeration__

Add the mode setting feature to get or set the current mode of the sensor on Developer Center.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-25.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-25.png)</a>


* **Type**: Set this parameter to "Enumeration". 
* **Feature Name**: Name of the slave feature, such as "Working Mode".
* **Read/Write**: It can be set to "Read-only", "Write-only" or "Read & Write".
* **Data Type**: Select a data type consistent with the register data type.
* **Byte Order**: The order in which data is stored in memory. For example, for a 32-bit integer, a number (ABCD) is stored in two bytes, where the high-order byte is (AB) and the low-order byte is (CD), choose from:
  - **Big Endian**: The high-order byte comes first, and the low-order byte comes last, i.e., it is stored as (ABCD).
  - **Little Endian**: The low-order byte comes first, and the high-order byte comes last, i.e., it is stored as (DCBA).
  - **Big Endian Byte Swapped**: Big-endian mode with high and low bytes swapped in pairs, i.e., it is stored as (BADC).
  - **Little Endian Byte Swapped**: Little-endian mode with high and low bytes swapped in pairs, i.e., it is stored as (CDAB).

**Configure an event (Optional)** <br>

<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-26.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-26.png)</a>

* **Event Name**: Name of the event.
* **Event Type**: "Message", "Alert" and "Fault".
* **Triggering Condition**: Condition that triggers an event. If any property value you set is read on Developer Center, the event will be triggered.。




### __6. Generate Configuration File__

Click "**Configuration File**" >"Generate" in the tool bar, then select the file path in the pop-up window.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-19.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-19.png)</a>

* If the configuration file is successfully generated, the files in the following two formats will be generated in the selected file path.

  - *xxxxxx_xxxxxxxxxx_xxxxx.json*: TSL model definition file, which is used to import the configuration to Developer Center.
  - *xxxxxx_xxxxxxxxxx_local.bin*: Modbus definition file, which is used to download the configuration to the device.


### __7. Import Configuration File to Developer Center__

1) Log in to Developer Center, select the corresponding product on the "Product Management" page, enter the "**Define Feature**" tab and click  "**Draft Mode**" to edit.

2) Click "**Import**" - "**Import TSL Model**" - "**Upload**“.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-16.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-16.png)</a>


3) Select the generated *xxxxxx_xxxxxxxxxx_xxxxx.json* file in the pop-up window, and click "**Confirm**" to import the configuration file.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-17.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-17.png)</a>

4) Click "**Save Changes**", check the box in the pop-up window and click "**Submit**" to exit draft mode.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-18.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-18.png)</a>

## __Operations on Device__

### __1. Program Code__

__1) Initialize QuecThing__

QuecOpen SDK provides APIs for reading and writing device information and corresponding reference implementation, which can be customized as needed. The device carries the information to establish a connection with Developer Center.
```c
oprt_ret ret = OPRT_OK;
Qth_eventCb_t event_cb = {0};
Qth_otaEventCb_t otaCb = {0};

ret = Qth_devInit();
if (OPRT_OK != ret)
{
    Quos_logPrintf(APPS_OPEN, LL_ERR, "sdk init error:%d", ret);
    return;
}
otaCb.planExCb = otaPlanExCb;
otaCb.sotaInfoCb = sotaInfoCb;
otaCb.sotaFileCb = sotaFileCb;
event_cb.devEventCb = devEventCb;
event_cb.ttlvRecvCb = ttlvRecvCb;
event_cb.otaEventCb = otaCb;
Qth_configSetEventCb(event_cb);
```

__2) Initialize Modbus Components__

To initialize ModBus components, you must register the serial port list used for downloading the configuration file, as well as the functions of *modbusUartSend()* and *modbusInitCb()*. 

```c
/* Initialize Modbus. */
Ql_iotMBInit(portList,sizeof(portList)/sizeof(quint16_t),modbusUartSend,modbusInitCb);
```
__i.__ After the ModBus component is initialized, the device information from the configuration file is passed into the callback function. Send and receive data through the serial port and connect the device to Developer Center within the function.


```c
qbool modbusUartSend(quint16_t port, const quint8_t *buf, quint32_t bufLen)
{
    oprt_ret ret = Qhal_uart_write(port, (void *)buf, bufLen);
    if(ret >= 0)
    {
        return TRUE;
    }
    else
    {
        return FALSE;
    }
}
```

__ii.__ This callback function is called when the ModBus component needs to send data to the serial port. Implement the serial port data-sending capability within this function.

```c
void modbusInitCb(char *pk, char *ps, QIot_MBPortCfg_t *portInfo[], quint32_t portNum)
{
    if (NULL == pk || NULL == ps || NULL == portInfo || 0 == portNum)
    {
        Quos_logPrintf(APPS_OPEN, LL_DBG, "MODBUS init fail");
        return;
    }
    /* Configure PK/PS and connect the device to Developer Center. */
    Qth_configSetProductInfo(pk, ps);
    Qth_devStart();
}
```


__3) Process Downlink Data__

After receiving the command from Developer Center, the device converts TTLV data into Modbus data and sends it through the registered sending interface.
```c
void ttlvRecvCb(void *ttlvHead)
{
    Quos_logPrintf(APPS_OPEN, LL_DBG, "recv ttlv write");
    Ql_iotMBCloudRecv(ttlvHead);
}
```
### __2. Compile and Download Program__

<span style="color:#999AAA">Note: As the download program of each DTU-Modbus module may vary, please contact Acceleronix Technical Support <support@acceleronix.io> for details.</span>"

### __3. Download Configuration File to DTU Device__

<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-19.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-19.png)</a>

1) Click "**Download**" > "**Download Through Serial Port**" in the toolbar.

2) Click "**Import**", and select the generated *xxxxxx_xxxxxxxxxx_local.bin* file in the pop-up window.

3) After selecting the baud rate, port number, or other configurations, click "**Open Serial Port**". <span style="color:#999AAA">Note: You can find the corresponding download serial port according to the PIN on the EVB or the schematic diagram.</span>

4) Click "**Download**" and restart the hardware device. The download progress will be displayed in the text box. A "**Downloaded Successfully**" window will pop up after a successful download.

## __Presentation__

**1. Device Online**

Once the firmware is downloaded into the DTU device, the device will automatically connect to Developer Center. Subsequently, the device will be added to the corresponding product and **authenticated automatically**.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-20.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-20.png)</a>

**2. Check Data Logs**

You can view the DTU device's regular data acquisition from the slave every 60 seconds and transmission to Developer Center on the "Device Details" > "Data Logs" page.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-21.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-21.png)</a>


The uploaded temperature value of 25.68 and humidity value of 65.13 can be viewed on the "**Device Debug**" > "**Communication Logs**" defined by the TSL model.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-23.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-23.png)</a>


__3. Send Command__

Developer Center sends commands to the DTU-Modbus device, and the DTU device calls the callback function to process the command, converts the data into the Modbus data through the serial port and sends the data to the hygrothermograph sensor. The hygrothermograph sensor then receives the time stamp and switch command issued by the Developer Center through the DTU device.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-22.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-22.png)</a>



 
