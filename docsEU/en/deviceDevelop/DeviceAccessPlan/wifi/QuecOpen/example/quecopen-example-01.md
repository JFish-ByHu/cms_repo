# Example of Product Configuration and Quick Access


## __Introduction__
This section explains how to configure a product and quickly connect a device to Developer Center in QuecOpen solution.

## __Related APIs__

|          Function          | Description                                   |
| :------------------------: | :-------------------------------------------- |
|       Qth_devInit()        | Initializes QuecThing SDK.                    |
|   Qth_configSetEventCb()   | Sets user event callback function.            |
| Qth_configSetProductInfo() | Sets product information.                     |
|       Qth_devStart()       | Initiates the connection to Developer Center. |
|     Qth_devGetStatus()     | Gets the device status.                       |

<span style='color:#999AAA'>Note: See [Product Configuration API](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-02) and [Device Connection API](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-03) for details.</span>


## __Procedure__
### __Operation on Developer Center__
#### __1. Log in to Developer Center__
Log in to <a href="https://core.acceleronix.io"  target="_blank">Developer Center</a>. If you don't have an account, click <a href="https://core.acceleronix.io/registerType" target="_blank">Register Now</a> to register.

#### __2. Create a Product__
For details about product creation, see [Create a Product](/deviceDevelop/DeviceAccessPlan/speediness-01).

<span style="color:#999AAA">Note: PK and PS should be in safekeeping, because they will be used for device authentication and product deletion.</span>

## __Operation on Device__
### __1. Initialize Configuration__
Before development, you must initialize the project in QuecOpen solution with Qth_decInit(). This function must be called before you use network services. Initialization means completing the basic configuration of the module after the module is powered on, enabling it to connect to the network and Developer Center and report its status.
```c
/* Initialize QuecThing SDK. */
Qth_devInit();
```
### __2. Register Callback Function__
Registering a callback function means adding a listener task event_cb for the event source (component). When the device triggers an event, the listener will handle it automatically and the developer only needs to handle the event in event_cb under the corresponding event callback function.

```c
/* Register event callback function. */
Qth_eventCb_t event_cb = {0};
event_cb.devEventCb = devEventCb;
Qth_configSetEventCb(event_cb);
```
### __3. Configure Product Information (via First Connection)__

The QuecThing SDK provides interfaces and reference implementations for reading and writing device information, which can be customized as needed. During the first connection, your device will send a bootstrap authentication request, and Developer Center will authenticate ProductKey and ProductSecret provided by the device. If the authentication succeeds, Developer Center will issue the required information for your device to connect to and access Developer Center.
```c
/* Configure product information. */
Qth_configSetProductInfo("p1xxxS", "VnhyxxxxxxxxSTFh");
```


### __4. Connect to Developer Center__
The module connects to Developer Center and establishes safe and stable communication to enable device management, monitoring and control.
 ```c
/* Connect the device to Developer Center. */
Qth_devStart();
 ```

### __5. Bluetooth Pairing and Wi-Fi Network Provisioning on WonderFree__

1) Log in to QuecOne with your account. On the home page, click "**⊕**" in the upper right corner and select "**Detect Nearby Devices**" in the pop-up.
<br>

<a data-fancybox title="img" href="/en/deviceDevelop/develop/app/Example-app-1.png">
  <img src="/en/deviceDevelop/develop/app/Example-app-1.png" width="300" alt="img">
</a>

2) After you enter the "Detect Nearby Devices" page, the app automatically searches for the Bluetooth devices nearby, and the detected Bluetooth devices are displayed on the page. Click "**⊕**" behind the device to start network provisioning.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/app/Example-app-2.png">
  <img src="/en/deviceDevelop/develop/app/Example-app-2.png" width="300" alt="img">
</a>

3) Enter the Wi-Fi name and password of the current network environment (only 2.4 GHz Wi-Fi is supported now).

<a data-fancybox title="img" href="/en/deviceDevelop/develop/app/Example-app-3.png">
  <img src="/en/deviceDevelop/develop/app/Example-app-3.png" width="300" alt="img">
</a>

4) Please wait patiently during network provisioning.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/app/Example-app-4.png">
  <img src="/en/deviceDevelop/develop/app/Example-app-4.png" width="300" alt="img">
</a>

5) After the network provisioning, the successfully added device will be displayed in the device list on the home page, as shown below.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/app/Example-app-5.png">
  <img src="/en/deviceDevelop/develop/app/Example-app-5.png" width="300" alt="img">
</a>

6) At the same time, the device status changes to "Online" on Acceleronix Developer Center.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/app/Example-app-7.png">![img](/en/deviceDevelop/develop/app/Example-app-7.png)</a>


### __6. Query Connection Status (Optional)__

When the device has connected to Developer Center, the event will be notified to you by the registered callback function *Qth_configSetEventCb()*. Or you can call Qth_devGetStatus() to query the device status. If the connection has been established, the device can communicate with Developer Center.

```c
/* Get the device status. */
Qth_devStatus_e status;
Qth_devGetStatus(&status);
```

<br>

Device statuses:

| Return Value | Description           |
| :----------: | :-------------------- |
|      0       | Network provisioning. |
|      2       | Network provisioned.  |
|      3       | Router connected.     |
|      4       | Platform connected.   |
|      5       | Idle status           |

   

