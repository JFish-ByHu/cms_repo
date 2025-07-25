# Example of Transparent Transmission Data Interaction

## **Introduction**

Transparent transmission data can be used according to actual scenarios. If you do not need Developer Center to parse the data but only transparently transmit data, you can execute __AT+QIOTSEND__ and __AT+QIOTRD__ to make the device interact with Developer Center after the device is successfully connected to Developer Center. Any type of data can be transparently transmitted. This chapter introduces how to send and receive transparent transmission data by AT command. 



## **Related AT Commands**

| AT Command  |                          Description                          |
| :---------: | :-----------------------------------------------------------: |
| AT+QIOTCFG  |                 Configure Optional Parameters                 |
| AT+QIOTSEND |    Send Transparent Transmission Data to Developer Center     |
|  AT+QIOTRD  | Read Transparent Transmission Data Issued by Developer Center |

<span style='color:#999AAA'>Note: See [Data Interaction Commands](/deviceDevelop/DeviceAccessPlan/nb/AT/API/nb-at-04) for details.</span>

## **Procedure**

### **Operation on Developer Center**

#### **1. Log in to Developer Center**

Log in to <a href="https://core.acceleronix.io"  target="_blank">Developer Center</a>. If you don't have an account click <a href="https://core.acceleronix.io/registerType" target="_blank">Register Now</a> to register.

#### **2. Create a Product** 

<!-- The prerequisite for transparent transmission data interaction is selecting __Custom__ as the data format when a product is created.

<a data-fancybox title="img" href="/en/deviceDevelop/cellular/QuecOpen/resource/data/SeriaNet/Example-01.png">![img](/en/deviceDevelop/cellular/QuecOpen/resource/data/SeriaNet/Example-01.png)</a> -->

For details about product creation, see [Create a Product](/deviceDevelop/DeviceAccessPlan/speediness-01).

### **Operation on Device**

### **Transparent Transmission Data Interaction**

In transparent transmission mode, if QoS = 1 or 2, the module will return __OK__ and report __+QIOTEVT: 4,10200__ after sending data successfully; If QoS = 0, the module will return __OK__ but not report any event after sending data successfully.

#### **Example 1 (Send data in string format)**

MCU can send transparent transmission data by __AT+QIOTSEND=\<mode\>,\<length\>[,\<data\>]__.

Send data as a string of 12 bytes "ABCabc123456" with QoS equal to 1.

```c
[TX]AT+QIOTSEND=1,12,"ABCabc123456"

[RX]OK

[RX]+QIOTEVT: 4,10200
```

#### **Example 2 (Send any byte stream data)**

MCU can send transparent transmission data by __AT+QIOTSEND=\<mode\>,\<length\>__.

Sends a byte stream of 10 bytes {0x00,0x01,0x02,0x03,0x04,0x05,0x06,0x07,0x08,0x09} with QoS equal to 2.

```c
[TX]AT+QIOTSEND=2,9

[RX]AT+QIOTSEND=2,9

> 
[TX]0x010203040506070809
[RX]OK

[RX]+QIOTEVT: 4,10200
```

#### **Example 3 (Read transparent transmission data issued by Developer Center in unbuffered mode)**

The mode defaults to __`0`__ (Disable buffer mode).
__a. Developer Center issues transparent transmission data__

Open the "__Device Details__" page, click "__Device Debug__" to send or receive transparent transmission data.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/data/SeriaNet/Example-02.png">![img](/en/deviceDevelop/develop/data/SeriaNet/Example-02.png)</a>


__b. Module prints downlink data to port__

After receiving the data, the module sends __+QIOTEVT: 5,10200__ and the data to MCU.

```c
[RX]+QIOTEVT: 5,10200,12
ABCabc123456
```

#### **Example 4 (Read transparent transmission data issued by Developer Center in buffer mode)**

__a. Enable buffer mode for downlink data__

MCU can configure the buffer mode for downlink data by __AT+QIOTCFG="buffer"[,<buffer_mode>]__.

```c
[TX]AT+QIOTCFG="buffer",1

[RX]AT+QIOTCFG="buffer",1

OK
```

__b. Developer Center issues transparent transmission data__

Open the "__Device Details__" page, click "__Device Debug__" to send or receive transparent transmission data.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/data/SeriaNet/Example-02.png">![img](/en/deviceDevelop/develop/data/SeriaNet/Example-02.png)</a>


__c. Query the downlink data__
The module can cache up to 10 messages after receiving messages and sends __+QIOTEVT: 5,10200__ to MCU. After MCU receives the messages, you need to manually send __AT+QIOTRD=\<req_length\>__ to query the data read actually read.

```c
[RX]+QIOTEVT: 5,10200

[TX]AT+QIOTRD=512

[RX]AT+QIOTRD=512

+QIOTRD: 12,0,0
ABCabc123456
OK
```


