# Data Interaction

<span style='color:#999AAA'>Note: The prerequisite for TSL data interaction is selecting **TSL** as the data format when a product is created.</span>

Draw up TSL features according to the actual project requirements of the smart aromatherapy diffuser. The default TSL model is presented in the table below.

|Feature ID| Feature Type |              Feature Name              | Data Format | Read/Write Type |                                  Unit                                  |
|:----------:| :----------: | :------------------------------------: | :---------: | :-------------: | :--------------------------------------------------------------------: |
|1|   Property   | The remaining content of essential oil |    FLOAT    |    Read-Only    |                                   ML                                   |
|2|   Property   |     Frequency of regular reporting     |     INT     |   Read-Write    |                                 Second                                 |
|3|   Property   |             On/Off status              |    BOOL     |    Read-Only    |                       True: On；<br>False: Off；                       |
|4|    Event     |     Alert to lack of essential oil     |    BOOL     |       --        |               True: Alert； <br> False: Alert canceled；               |
|5|   Property   |     mode     |     ENUM     |   Read-Write    |    1: Working Mode 1;<br> 2: Working Mode 2;<br>3: Working Mode 3;                          |
|6|   Service    |            Set working mode            |         |       --        | Feature ID: 5|



## **TSL Data Interaction**

TSL is a data model established by Developer Center for physical devices, which is used to describe product features to facilitate data parsing. You can execute **AT+QIOTMODELTD** and **AT+QIOTMODELRD** to make the device interact with Developer Center, once the device successfully accesses Developer Center.

<span style='color:#999AAA'>Note: See [Data Interaction Command](/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-04) for details.</span>



## __1. Uplink TSL Data__

__1) Replies to the TSL data request from Developer Center__

* #### __Replies to the TSL data request from Developer Center__

On the "**Device Debug**" tab of **Device Details** page, click "**Read Data in Batches**" to read TSL property value in batches.

  <a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-12.png">![img](/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-12.png)</a>
  	


* #### __Device replies to Developer Center__

  <a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-13.png">![img](/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-13.png)</a>

  __①__ Select the Package ID (PkgID) to be sent.<br>
  __②__ Click "__Send Reply Data__" to reply to TSL data request from Developer Center.

<br>

* ####   __Parse event callback__

  * __+QIOTEVT: 5,10211,2,5,1,2,3__<br>
    __5__: Event type indicating that the downlink data was received.<br>
    __10211__: Event code indicating that the device received the TSL property request from Developer Center.<br>
    __2__: Package ID (PkgID), which is only valid when the module receives and sends TSL data.<br>
    __5,1,2,3__: IDs of TSL properties to be read, which is 5, 1, 2 and 3 respectively.

  <br>



__2) Send TSL property data__

The device sends the TSL properties **The remaining content of essential oil**, **Frequency of regular reporting** and **On/Off status** to Developer Center.

* __Device sends TSL property__

  <a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-14.png">![img](/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-14.png)</a>

  __①__ Select the TSL properties to be sent.<br>
  __②__ Click "__Send TSL Data__" to send the TSL properties to Developer Center.

  <br>


* __Information display on Developer Center__

If the device sent TSL data to Developer Center, you can click "**Device Debug**" tab on the **Device Details** page to view the Real-time Data and TSL data in JSON format. Developer Center will receive the information such as the remaining content of essential oil (189.5), frequency of regular reporting (30) and on/off status (true) reported by the device.

  <a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-15.png">![img](/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-15.png)</a>


__3) Send TSL alert event__

Send **Alert to lack of essential oil** to Developer Center, whose event ID is **4** and the output parameter ID is **1**.

* __Device sends TSL event__

  <a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-16.png">![img](/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-16.png)</a>

  __①__ Select the TSL event to be sent.<br>
  __②__ Click "__Send TSL Data__" to send TSL events to Developer Center.
  <br>

* __Information display on Developer Center__

  You can view the event data records in the "**Event Logs**" section of "**Device Details**" page.

  <a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-17.png">![img](/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-17.png)</a>

## __2. Downlink TSL Data__

__Developer Center issues TSL service__

Open **Device Debug** > **Service Calls** on "Device Details" page to simulate the scenario of remotely issuing control commands. From "Device Service" menu, select **Service Calls** > **Select Service** , select **Working Mode 2** in "Set Parameter", and finally click "**Send Command**"

<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-18.png">![img](/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-18.png)</a>

* __Unbuffered Mode__ 

  When a device in __Unbuffered Mode__ receives data from Developer Center, it will print the data on MCU. For example, After the service is delivered in the Developer Center, the following results will be displayed on QthTools-MCU Simulator.

  <a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-19.png">![img](/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-19.png)</a>

  __Interaction Data Description__	

  * __+QIOTEVT: 5,10210,13__: Event notification sent to MCU by the device after receiving the TSL data request from Developer Center.<br>
    __5__: Event type indicating that the downlink data was received.<br>
    __10210__: Event code indicating the issued TSL data is received.<br>
    __13__: Length of the data received.<br>

  * __{"6":{"5":2}}__: TSL service data in JSON format received from Developer Center.

  <br>

* __Buffer Mode__

  When the device receives TSL data, the device will print event notification **+QIOTEVT: 5,10200** to MCU to indicate that the device has received the transparent transmission data issued by Developer Center. If you want to view the content, MCU must send **AT+QIOTRD=<req_length>**.

  Click "__Read TSL Data__" to read the buffered TSL data.
  <a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-20.png">![img](/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-20.png)</a>

  __Interaction Data Description__

  * __+QIOTEVT: 5,10210__: Event notification sent to MCU by the device after receiving the TSL data request from Developer Center.<br>
    __5__: Event type indicating that the downlink data was received.<br>
    __10210__: Event code indicating the issued TSL data is received.<br>

  * __+QIOTMODELRD: 13,0,0__: Response to TSL data.<br>
    __13__: Length of the data received.<br>
    __0__: Remaining length of the current data packet.<br>
    __0__: Number of remaining data packets.<br>

  * __{"6":{"5":2}}__: TSL service data in JSON format received from Developer Center.


<br>
