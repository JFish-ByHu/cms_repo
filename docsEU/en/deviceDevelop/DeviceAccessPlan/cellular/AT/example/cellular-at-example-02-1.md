# Example of TSL Data Interaction

## **Introduction**

This chapter explains how to send and receive TSL data by AT command.

## **Related AT Commands**

|   AT Command   |               Description                |
| :------------: | :--------------------------------------: |
|   AT+QIOTCFG   |      Configure Optional Parameters       |
| AT+QIOTMODELTD |    Send TSL Data to Developer Center     |
| AT+QIOTMODELRD | Read TSL Data Issued by Developer Center |

<span style='color:#999AAA'>Note: See [Data Interaction Commands](/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-04) for details.</span>


## **Procedure**

### **Operation on Developer Center**

#### **1. Log in to Developer Center**

Log in to <a href="https://core.acceleronix.io"  target="_blank">Developer Center</a>. If you don't have an account click <a href="https://core.acceleronix.io/registerType" target="_blank">Register Now</a> to register.

#### **2. Create a Product**


For details about product creation, see [Create a Product](/deviceDevelop/DeviceAccessPlan/speediness-01).

### **Operation on Device**

#### **TSL Data Interaction**

TSL is a data model established by Developer Center for physical devices, which is used to describe product features to facilitate data parsing. You can execute **AT+QIOTMODELTD** and **AT+QIOTMODELRD** to make the device interact with Developer Center after the device successfully accesses Developer Center.

|               **Feature  ID**                | **Type**  |               **Feature Name**                | **Data Type** |             **Value Range**             |    **Reference**    |                              **Example**                               |
| :------------------------------------------: | :-------: | :-------------------------------------------: | :-----------: | :-------------------------------------: | :-----------------: | :--------------------------------------------------------------------: |
|                      1                       | Property  |                    Switch                     |     BOOL      |          TRUE: On  FALSE: Off           |                     |                     <span v-pre>{"1":true}</span>                      |
|                      2                       | Property  |                 Battery Level                 |      INT      |                  0–100                  |                     |                      <span v-pre>{"2":100}</span>                      |
|                      3                       | Property  |      Remaining Content of Essential Oil       |     FLOAT     |                  0–300                  |                     |                     <span v-pre>{"3":25.6}</span>                      |
|                      4                       | Property  |                 Working Mode                  |     ENUM      |              1–HPC  2–CPL               |                     |                      <span v-pre>{"4":1} </span>                       |
|                      5                       | Property  |                   Device ID                   |     TEXT      |                  0–20                   |                     |                    <span v-pre>{"5":"ZWS"} </span>                     |
|                      6                       | Property  |                     Time                      |     DATE      |                   --                    |                     |                <span v-pre>{"6":1659664758817} </span>                 |
|                      7                       | Property  |                   Structure                   |    STRUCT     |                   --                    |  Feature IDs: 8, 9  |
| <span v-pre>{"7":{"8":true,"9":100}} </span> |
|           8 (parent feature ID: 7)           | Parameter | <span v-pre>        {$Parameter}      </span> |     BOOL      |          TRUE: On  FALSE: Off           |                     |                                                                        |
|           9 (parent feature ID: 7)           | Parameter | <span v-pre>        {$Parameter}      </span> |      INT      |                  0–100                  |                     |                                                                        |
|                      10                      | Property  |                 Integer Array                 |     ARRAY     | Maximum quantity: 10  Element type: INT |                     |                            "10":[10,20,30]                             |
|                      11                      | Property  |                Structure Array                |     ARRAY     |                                         | Feature IDs: 12, 13 | <span v-pre>{"11":[{"12":true,"13":100},{"12":false,"13":98}]} </span> |
|          12 (parent feature ID: 11)          | Parameter | <span v-pre>        {$Parameter}      </span> |     BOOL      |          TRUE: On  FALSE: Off           |                     |                                                                        |
|          13 (parent feature ID: 11)          | Parameter | <span v-pre>        {$Parameter}      </span> |      INT      |                  0–100                  |                     |                                                                        |

#### **Example 1 (Send TSL data in JSON format)**

**1) Set data format to JSON**

MCU can configure TSL data format by **AT+QIOTCFG="tsl"[,<tsl_mode>]** . If the optional parameter is not set, the data format defaults to **`0`**: TTLV.

```c
[TX]AT+QIOTCFG="tsl",1

[RX]AT+QIOTCFG="tsl",1

OK
```

**2) Send TSL data in JSON format**

Send 149-byte TSL data **{"1":true,"2":100,"3":25.6,"4":1,"5":"ZWS","6":1659664758817,"7":{"8":true,"9":100},"10":[10,20,30],"11":[{"12":true,"13":100},{"12":false,"13":98}]}**. If QoS = 1, the module executes **AT+QIOTMODELTD=1,149**. After **>** is returned, MCU sends the TSL data to the module.

```c
[TX]AT+QIOTMODELTD=1,149
[RX]>
[TX]{"1":true,"2":100,"3":25.6,"4":1,"5":"ZWS","6":1659664758817,"7":{"8":true,"9":100},"10":[10,20,30],"11":[{"12":true,"13":100},{"12":false,"13":98}]}
[RX]OK

[RX]+QIOTEVT: 4,10210
```

<span style="color:#999AAA">Note: If QoS = 1 or 2, the module will return OK and report +QIOTEVT: 4,10210 after sending data successfully. If QoS = 0, the module will return OK but not report any event after sending data successfully.</span>

#### **Example 2 (MCU replies to the request for TSL data from Developer Center according to PkgID)**

**1) Developer Center reads real-time TSL data in batches**

On the "**Device Debug**" tab of the "**Device Details**" page, click "**Read Data in Batches**" to read TSL property value in batches.

**2) The module receives the Read Command and prints the event code to MCU**

- Parse the event code: __+QIOTEVT: 5,10211,1,1,2,3,4,5,6,7,10,11__

  **5**: Event type indicating that the downlink data was received.

  **10211**: Event code indicating that the MCU received the TSL read command issued by Developer Center.

  **1**: Package ID, which is only valid when the module replies to Developer Center with TSL data after receiving the reading request.

  __1,2,3,4,5,6,7,10,11__: Feature IDs of TSL properties to be read, i.e. 1, 2, 3, 4, 5, 6, 7, 10, 11.

**3) MCU determines the returned pkgID and the real-time data of TSL ID according to the event code**

```c
[TX]AT+QIOTMODELTD=1,149,7
[RX]>
[TX]{"1":true,"2":100,"3":25.6,"4":1,"5":"ZWS","6":1659664758817,"7":{"8":true,"9":100},"10":[10,20,30],"11":[{"12":true,"13":100},{"12":false,"13":98}]}
[RX]OK

[RX]+QIOTEVT: 4,10210
```

<span style="color:#999AAA">Note: If QoS = 1 or 2, the module will return OK and report +QIOTEVT: 4,10210 after sending data successfully. If QoS = 0, the module will return OK but not report any event after sending data successfully.</span>

#### **Example 3 (Report TSL alert event)**

|     Feature ID     |   Type    |            Feature Name            | Data Type | Value Range |         Reference          |
| :----------------: | :-------: | :--------------------------------: | :-------: | :---------: | :------------------------: |
|         14         |   Event   |   Alert to lack of essential oil   |   BOOL    |             | Output feature IDs: 15, 16 |
| 15 (parent ID: 14) | Parameter |           Battery Level            |    INT    |    0–100    |                            |
| 16 (parent ID: 14) | Parameter | Remaining Content of Essential Oil |   FLOAT   |    0–300    |                            |

MCU executes **AT+QIOTMODELTD** to report TSL data to Developer Center. After ">" is sent from the module, MCU will send the organized  TSL data.

```c
[TX]AT+QIOTMODELTD=2,28
[RX]>
[TX]{"14":{"15":100,"16":32.89}}
[RX]OK

+QIOTEVT: 4,10210
```

<span style="color:#999AAA">Note: If QoS = 1 or 2, the module will return OK and report +QIOTEVT: 4,10210 after sending data successfully. If QoS = 0, the module will return OK but not report any event after sending data successfully.</span>

#### **Example 4 (Read TSL data issued by Developer Center in unbuffered mode)**

|     Feature ID     |      Type       | Feature Name | Data Type | Value Range | Reference              |
| :----------------: | :-------------: | :----------: | :-------- | :---------- | :--------------------- |
|         17         |     Service     |   Service    | BOOL      |             | Output feature IDs: 18 |
| 18 (parent ID: 17) | Input Parameter |     Mode     | ENUM      | 0–2         |                        |

The mode defaults to **`0`** (Disable buffer mode). 

**1) Developer Center issues TSL service**

On the "**Device Debug**" page, click "**Service Calls**", then select the service to be issued, and click **Send Command** in the lower left corner. 

**2) The module receives the issued command and prints the event code and data to MCU**

When the module receives the TSL service command, it will print event code __+QIOTEVT: 5,10210,15__ and the issued TSL service data __{"17":{"18":1}}__ to MCU.

```c
[RX]+QIOTEVT: 5,10210,15
{"17":{"18":1}}
```

#### **Example 5 (Read TSL data issued by Developer Center in buffer mode)**

**1) Enable buffer mode for downlink data**

MCU can configure the buffer mode for downlink data by **AT+QIOTCFG="buffer"[,<buffer_mode>]**.

```c
[TX]AT+QIOTCFG="buffer",1

[RX]AT+QIOTCFG="buffer",1

OK
```

**2) Developer Center issues TSL service**

On the "**Device Debug**" page, click "**Service Calls**", then select the service to be issued, and finally click **Send Command** in the lower left corner.

**3) The module receives the issued command and prints the event to MCU**

- Parse the event code: **+QIOTEVT: 5,10210**

  **5**: Event type indicating that the downlink data was received.

  **10210**: Event code indicating that the TSL data issued by Developer Center was received.

**4) MCU queries the service according to the event code**

```c
[TX]AT+QIOTMODELRD=512

[RX]AT+QIOTMODELRD=512

+QIOTMODELRD: 15,0,0
{"17":{"18":1}}
OK
```
