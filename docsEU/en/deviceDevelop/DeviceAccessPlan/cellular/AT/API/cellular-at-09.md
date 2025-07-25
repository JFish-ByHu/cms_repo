# Value-Added Service Commands
## **Value-Added Service Command Overview**

|               AT Command                |             Description             |
| :-------------------------------------: | :---------------------------------: |
|     [AT+QIOTNTPREQ](#AT+QIOTNTPREQ)     |      Get time from NTP server       |
| [AT+QIOTDATACOLLTX](#AT+QIOTDATACOLLTX) | Report data acquisition information |

## **AT Description**

<span id="AT+QIOTNTPREQ">  </span>

## <span style="color:#A52A2A">__AT+QIOTNTPREQ (Get time from NTP server)__</span>

* __Description__: This command gets the time from the NTP server.
* __Maximum Response__: 300 ms.

### **Test Command**

* __Issue__

    ```c
    AT+QIOTNTPREQ=?
    ```

* __Response__

    Return the supported parameter format.
    ```c

    OK
    ```

### **Execution Command**

* __Issue__

    ```c
    AT+QIOTNTPREQ
    ```

* __Response__

    If the query is successful,

    ```c
    OK

    +QIOTEVT:4,10250,<time>,<zone>,<timestamp>
    ```

    If the query failed,

    ```c
    +QIOTEVT:4,10350
    ```

    If there is any error:

    ```c
    ERROR
    ```

---

__Parameter__
* __`<time>`__: String type. The bindable time. Format: YYYY-MM-DD hh:mm:ss week.
* __`<zone>`__: String type. Time zone.
* __`<timestamp>`__: String type. Timestamp.

__NOTE__
* This command is supported in SDK version 2.11.0 and above.

---

#### **Example**

__Example 1 (Get time from the NTP server.)__

```c
[TX]AT+QIOTNTPREQ

[RX]OK

[RX]+QIOTEVT: 4,10250,"2023-02-07 10:29:54 2","+08:00","1675736994488"
```

***

<span id="AT+QIOTDATACOLLTX">  </span>

## <span style="color:#A52A2A">__AT+QIOTDATACOLLTX (Report data acquisition information)__</span>

* __Description__: This command reports data acquisition information.
* __Maximum Response Time__ : 300 ms.

### **Test Command**

* __Issue__

    ```c
    AT+QIOTDATACOLLTX=?
    ```

* __Response__

    ```c
    +QIOTDATACOLLTX: (0-1),(0-1048576),(1-1024)
     
    OK
    ```

### **Write Command**

* __Issue__

    ```c
    AT+QIOTDATACOLLTX=<endFlag>,<pkgSortId>,<pkgLen>
    ```

* __Response__
    If the command is executed successfully:

    ```c
    >
    Enter data
    OK
    +QIOTEVT: 30,0,<pkgSortId>
    ```

    If there is any error:

    ```c
    ERROR
    ```
    Or
    ```c
    OK

    +QIOTEVT: 30,<errnoType>[,<pkgSortId>]
    ```

***

__Parameter__
* __`<endFlag>`__: Integer type. Whether the package is the last one. Range: 0–1.
  * __`0`__ : The package is not the last one.
  * __`1`__ : The package is the last one.
* __`<pkgSortId>`__: Integer type. Range: 0–1048576.
* __`<pkgLen>`__: Integer type. Size of the subpackage. Range: 1–1024. Unit: byte.
* __`<errnoType>`__: Integer type. Result code indicating the data sending result. Range: 0–20.

| `<errnoType>` Result Code |                                                    Description                                                     |
| :-----------------------: | :----------------------------------------------------------------------------------------------------------------: |
|             0             |                                              Data sent successfully.                                               |
|             1             |                                                Data sending failed.                                                |
|             2             | The uplink data received per second exceeded the threshold. Developer Center stops receiving uplink data. Unit: s. |
|             3             |                                       Data sending failed. Please try again.                                       |
|            10             |                                 Failed to connect to the data acquisition server.                                  |
|            11             |                              The uplink ended abnormally due to a transmission error.                              |
|            12             |                                    The data acquisition channel is not enabled.                                    |
|            13             |                                    Server connection failed. Please try again.                                     |
|            20             |                                   The data acquisition channel has been closed.                                    |

__NOTE__
* This command is supported in SDK version 2.18.0 and above.

---

#### **Example**

__Example 1 (Report data acquisition information to Developer Center)__

```c
[TX]AT+QIOTDATACOLLTX=1,0,5

[RX]>

[TX]hello

[RX]OK

[RX]+QIOTEVT: 30,0,0

```

***



