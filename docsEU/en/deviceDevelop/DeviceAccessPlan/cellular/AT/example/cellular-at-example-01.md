# Product Configuration and Quick Access Example

## **Introduction**

This chapter explains how to configure a product and quickly access Developer Center through AT commands.

## **Related AT Commands**

|  AT Command  |          Description          |
| :----------: | :---------------------------: |
|  AT+QIOTCFG  | Configure Optional Parameters |
|  AT+QIOTREG  |   Configure Connection Mode   |
| AT+QIOTSTATE |    Query Connection Status    |

<span style='color:#999AAA'>Note: See [Product Configuration Commands](/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-03) for details.</span>



## **Procedure**

### **Operation on Developer Center**

#### **1. Log in to Developer Center**

Log in to <a href="https://core.acceleronix.io"  target="_blank">Developer Center</a>. If you don't have an account click <a href="https://core.acceleronix.io/registerType" target="_blank">Register Now</a> to register.


#### **2. Create a Product**

For details about product creation, see [Create a Product](/deviceDevelop/DeviceAccessPlan/speediness-01).

<span style="color:#999AAA">Note: PK and PS should be in safekeeping, because they will be used for device authentication and product deletion.</span>

### **Operation on Device**

#### **1. Configure Product Information (via First Connection)**

Upon product creation on Developer Center, Developer Center will send you ProductKey and ProductSecret by e-mail. All devices under the same product can download the same ProductKey and ProductSecret. During the bootstrap authentication process, the device will transmit the ProductKey and ProductSecret, and the Developer Center will verify them. If the authentication is successful, the device will be granted access. To connect the device to Developer Center for the first time, configure product information by **AT+QIOTCFG="productinfo"[,&lt;pk&gt;,&lt;ps&gt;]**. Download ProductKey and ProductSecret to the device and perform bootstrap authentication, then the authenticated device will be automatically added to the product where the Developer Center is located. 



 ```c
[TX]AT+QIOTCFG="productinfo","pxxxxt","cDVTxxxxxxxxWGVB"

[RX]AT+QIOTCFG="productinfo","pxxxxt","cDVTxxxxxxxxWGVB"

OK
 ```

#### **2. Access Developer Center**


MCU can configure connection mode by __AT+QIOTREG=\<reg_mode\>__. ProductKey and ProductSecret must be configured before a device accesses Developer Center, otherwise, ERROR will be returned.

   ```c
[TX]AT+QIOTREG=1

[RX]AT+QIOTREG=1

OK
   ```

#### **3. Query Connection Status**

To further confirm whether the device has connected to Developer Center, you can query the connection status by __AT+QIOTSTATE?__. If __+QIOTSTATE: 8__ is returned, the device has connected to Developer Center and data can be sent.

```c
[TX]AT+QIOTSTATE?

[RX]AT+QIOTSTATE?

+QIOTSTATE: 8

OK
```

Connection statuses:

| Response Value | Description                         |
| :------------: | :---------------------------------- |
|       0        | Uninitialized                       |
|       1        | Initialized                         |
|       2        | Authenticating                      |
|       3        | Authenticated                       |
|       4        | Authentication failed               |
|       5        | Registering                         |
|       6        | Registered and waiting to subscribe |
|       7        | Registration failed                 |
|       8        | Subscribed and data can be sent     |
|       9        | Subscription failed                 |
|       10       | Deregistering                       |
|       11       | Deregistered                        |
|       12       | Deregistration failed               |

