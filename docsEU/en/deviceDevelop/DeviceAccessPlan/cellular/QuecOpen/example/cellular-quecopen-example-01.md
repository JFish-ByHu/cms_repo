# Example of Product Configuration and Quick Access


## __Introduction__

This section explains how to configure a product and quickly access Developer Center in QuecOpen solution.

## __Related APIs__

|           Function           | Description                                                                 |
| :--------------------------: | :-------------------------------------------------------------------------- |
|         Ql_iotInit()         | Initializes configurations and enables QuecThing.                           |
|   Ql_iotConfigSetEventCB()   | Sets a callback function for device and Developer Center interaction event. |
| Ql_iotConfigSetProductinfo() | Sets product information.                                                   |
|  Ql_iotConfigSetConnmode()   | Configures the connection mode between the device and Developer Center.     |
|     Ql_iotGetWorkState()     | Gets the connection mode between the device and Developer Center.           |

<span style='color:#999AAA'>Note: See [Product Configuration API](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-02) for details.</span>


## __Procedure__

### **Operation on Developer Center**

#### **1. Log in to Developer Center**

Log in to <a href="https://core.acceleronix.io"  target="_blank">Developer Center</a>. If you don't have an account, click <a href="https://core.acceleronix.io/registerType" target="_blank">Register Now</a> to register.

#### 2. Create a Product

For details about product creation, see [Create a Product](/deviceDevelop/DeviceAccessPlan/speediness-01).

<span style="color:#999AAA">Note: PK and PS should be in safekeeping, because they will be used for device authentication and product deletion.</span>

## __Operation on Device__

### __1. Initialize Configuration__

Before development, you must initialize the project in QuecOpen solution with Ql_iotInit(). This function completes the basic configuration of the module after it is powered on, enabling it to connect to the network and Developer Center and report its status.


``` c
/* Initialize QuecThing SDK */
Ql_iotInit();
```

### __2. Callback Function__

Ql_iotEventCB() callback function is registered as a listener for a specific event on an event source (component). The function will be triggered automatically when the corresponding event is detected by the event source (component). This way, the developer does not need to constantly check for the occurrence of events, as the listening task will handle them automatically.

```c
/* Register event callback function */
Ql_iotConfigSetEventCB(Ql_iotEventCB);
```

### __3. Configure Product Information (via First Connection)__

The QuecThing SDK provides interfaces and reference implementations for reading and writing device information, which can be customized as needed. During the first connection, your device will send a bootstrap authentication request, and Developer Center will authenticate ProductKey and ProductSecret provided by the device. If the authentication succeeds, Developer Center will issue the required information for your device to connect to and access Developer Center.

```c
/* Configure product information*/
Ql_iotConfigSetProductinfo("p1xxxS", "VnhyxxxxxxxxSTFh");
```


### __4. Access Developer Center__

The device accesses and establishes a safe and stable communication with Developer Center to enable device management, monitoring and control.

 ```c
/* Access Developer Center */
Ql_iotConfigSetConnmode(1);
 ```

### __5. Query Connection Status__

To confirm if the device has successfully connected to Developer Center, call Ql_iotGetWorkState() to query the connection status. If the device has connected successfully, it can communicate with Developer Center.

```c
/* Get the current connection status */
QIot_state_e status = Ql_iotGetWorkState();
```

<br>

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

​      

