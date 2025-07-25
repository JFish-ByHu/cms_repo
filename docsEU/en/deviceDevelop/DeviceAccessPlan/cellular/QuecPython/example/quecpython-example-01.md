# Example of Product Configuration and Quick Access


## __Introduction__
This section explains how to configure a product and quickly connect a device to Developer Center in QuecPython solution.

## __Related APIs__

|       Function       | Description                              |
| :------------------: | :--------------------------------------- |
|      Qth.init()      | Initializes QuecThing.                   |
|   Qth.setEventCb()   | Sets the event callback function.        |
| Qth.setProductInfo() | Sets the product information.            |
|     Qth.start()      | Connects the device to Developer Center. |

<span style='color:#999AAA'>Note: See [Product Configuration API](/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-02)</span> and [Device Connection API](/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-04) for details." />


## __Procedure__
### __Operation on Developer Center__
#### __1. Log in to Developer Center__
Log in to <a href="https://core.acceleronix.io"  target="_blank">Developer Center</a>. If you don't have an account, click <a href="https://core.acceleronix.io/registerType" target="_blank">Register Now</a> to register.

#### __2. Create a Product__
<!-- Creating a product is the first step in product development. A product is an abstract description of a class of devices defined by Developer Center. A product is used to manage devices of the same category. For example, if you have an aromatherapy diffuser with LTE networking capability and you need to connect the aromatherapy diffuser to Developer Center to monitor it, you can define it as a product "Smart Aromatherapy Diffuser".

<a data-fancybox title="img" href="/en/docs/resource/Connect_cloud/Example-02.png">![img](/en/docs/resource/Connect_cloud/Example-02.png)</a> -->

For details about product creation, see [Create a Product](/deviceDevelop/DeviceAccessPlan/speediness-01)。

<span style="color:#999AAA">Note: PK and PS should be in safekeeping, because they will be used for device authentication and product deletion.</span>

## __Operation on Device__
### __1. Initialize Configuration__
Before development, you must initialize the project in QuecPython solution with Qth.init(). This function must be called before you use network services. Initialization means completing the basic configuration of the module after the module is powered on, enabling it to connect to the network and Developer Center and report its status.

```c
/* Initialize QuecThing SDK */
Qth.init()
```
### __2. Callback Function__
Registering a callback function means adding a listener task event_cb for the event source (component). When the device triggers an event, the listener will handle it automatically and the developer only needs to handle the event in event_cb under the corresponding event callback function.

```c
/* Register event callback function */
eventCb={
    'devEvent':App_devEventCb, 
}
Qth.setEventCb(eventCb)
```
### __3. Configure Product Information (via First Connection)__

The QuecThing SDK provides interfaces and reference implementations for reading and writing device information, which can be customized as needed. During the first connection, your device will send a bootstrap authentication request, and Developer Center will authenticate ProductKey and ProductSecret provided by the device. If the authentication succeeds, Developer Center will issue the required information for your device to connect to and access Developer Center.
```c
/* Configure product information */
Qth.setProductInfo("p1xxxS", "VnhyxxxxxxxxSTFh")
```


### __4. Connect to Developer Center__
The module connects to Developer Center and establishes safe and stable communication to enable device management, monitoring and control.

 ```c
/* Connect the device to Developer Center. */
Qth.start()
 ```

   

