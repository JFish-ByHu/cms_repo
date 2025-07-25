# FAQ


## <span style="color:#A52A2A">__FAQs About Quick Access to Developer Center__</span>
> __1. How can I ensure that the device network meets the requirements for accessing Developer Center?__ <br>
> Send __AT+CGATT?__ to the module to query the network status. If the return value is **1**, it indicates that the module has the network condition to connect to Developer Center.If the return value is not **1**, you can get the current signal quality by __AT+CSQ?__ If the current signal quality is less than 5, the network signal in the current environment may be poor or the device is not connected to the antenna so that the device cannot connect to the network; If the current signal quality is 99, check whether the current device is connected to the antenna or the SIM card fails to be inserted.
> 

> __2. How do I configure the device before the device connects to Developer Center for the first time?__ <br>
> Before connecting the device to Developer Center for the first time, you need to configure ProductKey (PK) and ProductSecret (PS).

> __3. What are ProductKey and ProductSecret? How can I get them?__ <br>
> ProductKey (PK) and ProductSecret (PS) are unique codes that identify a product and are used by all devices under the product. 
> PK and PS are automatically sent to your email address which is used to register an account in Developer Center after the product is successfully created on Developer Center.

> __4. How can a device access Developer Center?__ <br>
> a. Send __AT+QIOTCFG="productinfo"[,\<pk\>,\<ps\>]__ to the module to configure PK and PS. <br>
> b. Send __AT+QIOTREG=1__ to the module to access Developer Center.<br>


> __5. What is a callback event?__ <br>
> A callback event is an event-processing mechanism based on listening. For example, when Developer Center issues TSL data, the module will automatically send the log to MCU through URC event after receiving the data. You can process the data according to the callback event.

> __6. How to determine the device has connected to Developer Center?__ <br>
> Send __AT+QIOTSTATE?__ to the module to query the connection status between the device and Developer Center. If the return value is **8,** it indicates that the module has connected to Developer Center and data interaction can be performed.

> __7. How to authenticate a device on Developer Center? And how to activate the device?__ <br>
> The device will automatically be authenticated when accessing Developer Center for the first time. The device is activated after a piece of data is uplinked by the device or is downlinked by the platform.<br>

> __8. Why does the device fail to access the platform and print the event code "1,10422"?__ <br>
> The DeviceSecret authentication error is caused when product category of the device changes, or the configuration file is overwritten during firmware burning, resulting in the clearing of DS saved by the module. To resolve this issue, reset DeviceSecret on the platform and send **AT+QIOTREG=1** to reconnect.<br>

> __9. Why does the MCU configure a product and an ERROR is returned?__ <br>
> a. Perhaps the QuecThing version does not support the configuration command. You can send __AT+QIOTCFG=?__ to check whether the configuration is supported.<br> b.Some AT commands cannot be set after QuecThing is connected to Developer Center. Therefore, disconnect the device from Developer Center before configuration.<br>

> __10. Why is there no response or ERROR after issuing some AT command?__ <br>
> The current device may not support this AT command. You can execute __AT+QIOTINFO?__ to view the version number of QuecThing SDK. Then you can read the corresponding AT command manual according to the version number and use the AT command.<br>


> __11. What's the difference between manual registration and automatic registration when a device accesses Developer Center?__ <br>
> a. In case of manual registration, the device must configure the connection mode by sending **AT+QIOTREG=1** to Developer Center every time when it accesses Developer Center. 
> b. If a device adopts automatic registration,  every time the device is powered on, it accesses Developer Center automatically with no needs to send any commands. <br>

> __12. Do I need to configure server information before the device accesses Developer Center?__ <br>
> The module is pre-configured with default server information. Additional configuration of the server information is not required, if there are no special requirements.<br>

> __13. What is a device's lifetime? Do I need to set it before the device accesses Developer Center?__ <br>
> Device > lifetime refers to the heartbeat time within a protocol. The lifetime will be set to the default value (120 s) if there are no special requirements. <br>

> __14. What is the buffer mode of downlink data? Do I need to set it before the device accesses Developer Center?__ <br>
> The buffer mode caches the downlink data into the module for the MCU to read by AT commands.<br> If the buffer mode is enabled, the downlink data from Developer Center is buffered in the module, and the MCU needs to send the read command to read the buffered data.<br> You can decide whether to enable the buffer mode of downlink data based on actual requirements. If you do not set it, the default mode is unbuffered mode.<br>

> __15. What is PDP contextID? Do I need to set it before the device accesses Developer Center?__ <br>
> PDP contextID is a unique identifier used to distinguish between different transmission services utilized by the module, in addition to accessing Developer Center. If there are no special requirements, PDP contextID does not need to be configured and it is disabled by default.<br>

> __16. What is the encryption mode of the connection between the device and the platform? Do I need to set it before the device accesses Developer Center?__ <br>
> It is an encryption mode of the data link. It is optional and disabled by default.

> __17. What is TSL data format? Do I need to set it before the device accesses Developer Center?__<br> TSL data transmission between MCU and module can either be in TTLV or JSON format.<br>
> 
>* JSON format is a lightweight data exchange format that allows for easy reading and comprehension of data due to its direct viewing nature.<br>
> * TTLV format is to compress data into a smaller volume, but it needs to be interpreted by calling TTLV parsing library with scripts or codes. Compared with JSON format, the volume of the same data is smaller, the utilization rate of space is higher, and redundant fields are not allowed.<br>
> TSL data format must be set before accessing Developer Center. The default TSL data format is TTLV.<br>

> __18. Do I need to configure DeviceKey and DeviceSecret before the device accesses Developer Center?__ <br>
> **DeviceKey** does not need to be configured. The module uses either IMEI (cellular module) or MAC address (Wi-Fi module) as the **DeviceKey** by default. **DeviceSecret** does not need to be configured either. When the module accesses the platform for the first time, the platform generates a **DeviceSecret** and sends it to the module (This step is invisible to the user).

> __19. What is the\<txID\> of uplink message? Do I need to set it before the device accesses Developer Center?__ <br>
> After configuring \<txID\>, the device will receive \<txID\> of the uplink message returned by the platform (when QoS=1 or QoS=2) when the device sends uplink TSL data to the platform. Generally, If there are no special requirements, the \<txID\> does not need to be configured and it is not returned by default.


> __20. Do I need to configure ProductKey(PK) and ProductSecret(PS) every time the device is powered on?__ <br>
> After the MCU sends configuration command to the module, the module will store the configuration information internally. The configuration will remain valid when the device is turned on next time, so you do not need to configure PK and PS again.<br>

## <span style="color:#A52A2A">__FAQs About Data Interaction__</span>
> __1. How many data formats are there?__ <br>
> Developer Center supports two data formats: TSL data and transparent transmission data.

> __2. What is TSL model?__ <br>
> TSL model is the digital representation of the device in Developer Center and the entity data model constructed in the IoT platform and software solution, which is divided into three dimensions: property, service and event.

> __3. What is transparent transmission data format?__ <br>
> Transparent transmission data format refers to raw data transmitted directly and transparently from device to Developer Center, which does not parse any data.

> __4. What is QoS?__ <br>
> QoS is short for Quality of Service. Improving QoS means ensuring transmission bandwidth and reducing packet loss rate and delay jitter. You can select QoS based on the actual network status.
>
> * There are currently three levels of QoS: 0, 1, 2. <br>
> * If high-frequency and unreliable interactions are required between the device and Developer Center, set QoS to 0 for traffic saving and high efficiency.<br>
> * If high-frequency and reliable interactions are required between the device and Developer Center, set QoS to 1 for traffic saving and high efficiency.<br>
> * If high-frequency and reliable interactions are required between the device and Developer Center, and the principle of one-send-one-receive should be strictly followed, set QoS to 2.<br>

> __5. What is PkgID?__ <br>PkgID is the ID assigned to uplink and downlink packets to ensure successful data transmission. Before sending data, a PkgID is generated, and upon successful delivery or the data to Developer Center, a confirmation PkgID is received. You can judge if the data was transmitted successfully based on the consistency of the two PkgIDs.

> __6. How to send TSL data to Developer Center?__ <br>
> TSL data can be transmitted to Developer Center by sending **AT+QIOTMODELTD** from the MCU to the module. This command instructs the module to transmit the TSL data to Developer Center.

> __7. How to receive TSL data?__ <br>
> There are two modes for receiving TSL data: buffer mode and unbuffered mode. In buffer mode, when Developer Center issues a service request, MCU sends **AT+QIOTMODELRD** to the module to retrieve the data from the module's buffer. In unbuffered mode, the module immediately forwards callback events and downlink data to MCU as soon as it receives the data from Developer Center, without storing the data in a buffer.

> __8. What are buffer mode and unbuffered mode?__ <br>
> Buffer mode and unbuffered mode are two modes for the MCU to read data from the module:
>
> * Buffer mode: In this mode when the module receives the data issued by Developer Center, the module will report callback events to MCU and store the data in the memory. The MCU must send **AT+QIOTMODELRD** to read the downlink data.<br>
> * Unbuffered mode: In this mode the module forwards callback events and downlink data to MCU as soon as it receives data issued by Developer Center.<br>

> __9. What data formats are available for TSL data?__ <br>
> JSON and TTLV.
> * JSON format is a lightweight data exchange format that allows for easy reading and comprehension of data due to its direct viewing nature.<br>
> * TTLV format is designed to reduce data size by compressing data, but it requires interpretation through scripts or calling TTLV parsing library. Compared to JSON format, the TTLV format has a smaller volume of the same data, a higher space utilization rate, and does not allow for redundant fields.<br>

> __10. What is the difference between direct transmission and transparent transmission?__ <br>
>* Direct transmission supports string data.<br>
> * Transparent transmission supports byte stream data.<br>

> __11. When the device reports TSL data, what is the maximum length of data that can be reported at one time?__ <br>
> The data length depends on the module model.

> __12. Why does the device fail to send TSL data and is an ERROR returned?__ <br>
> There are several reasons why this may occur: 
> a. The device has not yet accessed Developer Center yet. You can use **AT+QIOTSTATE?** to query the connection status between the device and the platform.<br>
> b. The data format sent by the current device is incorrect. Make sure to check the data length and if there are any extra spaces in the data. <br>c. The length of TSL data reported by the device exceeds the maximum length of TSL data that can be sent by the module at one time.<br>

> __13. Why does the device fail to send commands to read TSL data and is an ERROR returned?__ <br>
> Buffer mode is not enabled on the device. You can send **AT+QIOTCFG="buffer",1** to enable the mode..<br>

> **14. Does the device have to carry a property parameter when it reports an event?** <br>
> No, it doesn't.  <br>

> __15. When a device reports TSL data, can it simultaneously report a property and an event?__ <br>
> Yes, the device can report multiple properties and events simultaneously when it reports TSL data.<br>

> __16. When a device enables buffer mode, how many pieces of data can be buffered?__<br>
> Currently, a maximum of **10** pieces of data can be buffered in the module in buffer mode. If the buffered data is not read promptly, it will be overwritten by newly received data. <br>

> __17. If the TSL data format is configured to JSON, is the data sent from the module to Developer Center also in JSON format?__ <br>
> After configuring the TSL data format to JSON, only the communication between MCU and module will be in JSON format. The data sent to Developer Center by the module will still be in TTLV format.


## <span style="color:#A52A2A">__FAQs About OTA Upgrade__</span>
> __1. What is the meaning of OTA?__ <br>
> OTA refers to an upgrade over the air. You can upload the target firmware package to Developer Center and create an upgrade plan. When the device environment meets the requirements of the upgrade strategy, MCU triggers the upgrade plan to initiate the upgrade.

> __2. How many OTA solutions are there?__ <br>
> Developer Center supports two OTA solutions, which are FOTA and SOTA.

> __3. How do I choose an OTA solution?__ <br>

> You can choose an OTA solution according to the project requirements. SOTA should be selected for upgrading the MCU program and FOTA for upgrading module firmware.

> * If you need to perform secondary development based on the module firmware, FOTA should be selected to upgrade the module firmware.<br>
> * If you use Quectel modules and a self-developed device for development, SOTA should be selected to upgrade the program.<br>

> __4. What are the differences between a full package and a delta package?__ <br>
> a. Making method <br>
>  Both the full package and delta package can realize firmware upgrades. The full package is the firmware generated by the user project compiling the complete code by the compiler; Delta package is to generate firmware (which can be called a patch) that can be inserted into the original firmware by comparing the code differences of the original version, and it can only be generated with specific tools.<br>
>   b. Traffic<br>
> The full package is firmware compiled by a complete project. In general, the size of a full package is much larger than that of a delta package. Therefore, a delta package has advantages for devices with high latency, low bandwidth or low power consumption.<br>
>  c. Compatibility<br>
> Delta package upgrade is based on the firmware of the last version, so delta package upgrade cannot be compatible with upgrading from the lower version to the latest version. If all devices in different versions need to be upgraded, you should create multiple components or plans. So the maintenance cost of a delta package is high for a large number of multi-version devices.  

> __5. How to perform a FOTA upgrade?__ <br>
> To perform a FOTA upgrade, follow these steps:<br />
> a. Add a version package and create an upgrade plan on Developer Center. <br>b. MCU sends __AT+QIOTOTAREQ__ to request the OTA upgrade plan. When the device environment meets the requirements of upgrade strategy, MCU triggers the upgrade plan to initiate the upgrade. <br>
> c. MCU sends __AT+QIOTUPDATE=1__ to confirm the upgrade. <br>
> d.  The module automatically enters the upgrade status upon receiving the upgrade package. <br>

> **6. How to perform a SOTA upgrade?** <br>
> a. MCU sends __AT+QIOTMCUVER__ to the module to configure MCU version number. <br>
> b. Add a firmware version and create an upgrade plan on Developer Center.<br> 
> c. MCU sends AT+ __AT+QIOTOTAREQ__ to request the OTA upgrade plan. When the device environment meets the requirements of the upgrade strategy, MCU triggers the upgrade plan to initiate the upgrade.<br> 
> d. MCU sends __AT+QIOTUPDATE__ to the module to confirm the upgrade. <br>
> e. MCU sends __AT+QIOTOTARD__  to the module to read SOTA data by blocks. <br>
> f. MCU automatically enters the upgrade status after receiving the upgrade package. <br>
> g. Upon completing the upgrade, a new MCU version number is set and uploaded to Developer Center.<br>

> __7. Why cannot the OTA upgrade be triggered?__ <br>
> a. The device has not connected to Developer Center.<br>
> b. The device properties do not meet the upgrade plan requirements, such as insufficient storage space, weak signal strength, incompatible version.<br>c. The device is not included in the created upgrade plan.<br>

> __8. Why did an OTA upgrade fail?__ <br>
> a. Incorrect SDK version. Please ensure that the current SDK version is compatible with the related AT commands. Using AT commands from a newer version (after 2.9.2) with an older SDK version (before 2.9.2 ) may result in unexpected errors.<br>
> b. Interruptions during upgrade: If the device is powered off, disconnected from the network, or disconnected from Developer Center during the upgrade process, the device upgrade will be considered failed.<br>
> c.Network fluctuations: In case of network fluctuations during the upgrade, the upgrade is considered failed and automatically attempted again. If the upgrade fails 5 consecutive times, the device upgrade plan is considered unsuccessful.<br>
> d. If the device has successfully downloaded the firmware package but the upgrade failed, the upgrade file may be damaged during the upgrade. You can pay attention to the operations in the storage area of the upgrade file.<br>

> __9.  When an OTA upgrade plan request is initiated, what is the difference between sending AT+QIOTOTAREQ and AT+QIOTOTAREQ=1?__ <br>
> * Sending **AT+QIOTOTAREQ** requests an OTA upgrade plan from the platform without SHA256 verification.<br>
> * Sending **AT+QIOTOTAREQ=1** requests an OTA upgrade plan from the platform with SHA256 verification.<br>
>   Whether to use SHA256 verification or not depends on your requirements. <br>

> **10. Why cannot the device receive the upgrade plan after sending an OTA upgrade request during a SOTA upgrade?**  <br>
>    a. No OTA upgrade plan is created or activated on the platform.<br>
>    b. MCU version number has not been set by the module. MCU must send **AT+QIOTMCUVER** to set the MCU version number.<br>

> __11. Why cannot the module download all SOTA upgrade packages at one time during a SOTA upgrade?__ <br>
> The module does not have enough free memory to store the entire upgrade package at once, so it will be downloaded in blocks. The size of free memory in the module varies with the module model. <br>

> __12. Why can't the module automatically download the next block of firmware data during SOTA upgrade?__ <br>
> When the firmware is downloaded by block from Developer Center in the process of SOTA upgrade, after finishing downloading the first block, MCU must send __AT+QIOTUPDATE=2__ to download the next block of data. 

> __13. How does the device judge whether an OTA upgrade is successful?__ <br>
> If an OTA upgrade is successful, the device will print the event code: **7,10705**, or you can check the upgrade result in the "Upgrade Plan List" of Developer Center.<br>


## <span style="color:#A52A2A">__FAQs About Device Location__</span>
> __1. How many ways are there to position a device?__ <br>
> There are three ways: LBS positioning, GNSS positioning and Wi-Fi positioning respectively.

> __2. What are the characteristics of LBS positioning?__ <br>LBS positioning has a wide coverage and can work both indoors and outdoors without an external module. However, its accuracy is low and requires signals both indoors and outdoors.

> __3. What are the characteristics of GNSS positioning?__ <br>
> GNSS positioning has fast speed, all-day operation, does not need to consider visual conditions, and can measure a large range of distance. However, due to the influence of zenith direction covering, its accuracy decreases in indoors and tunnels.

> __4. What are the characteristics of Wi-Fi positioning?__ <br>
> Wi-Fi positioning has fast speed and high accuracy in dense and crowded places. However, it relies on Wi-Fi which must be connected to the network and it cannot work without available Wi-Fi.<br>

> __5. How can I use LBS positioning?__ <br>
> QuecThing has equipped with LBS positioning component, so the MCU only needs to execute __AT+QIOTLOCIN__ to obtain or report location data of the built-in positioning feature of the module.

> __6. How can I use GNSS positioning?__ <br>
> GNSS positioning needs an external GNSS module. The device needs to send the coordinate system read by the GNSS module to the MCU and then execute __AT+QIOTLOCEXT__ to report the location data obtained from the external GNSS module.


> __7. How can I use Wi-Fi positioning?__ <br>
> If the module supports Wi-Fi positioning, MCU can execute **AT+QIOTLOCIN=1,"WIFI"** to get Wi-Fi location data and **AT+QIOTLOCIN=0,"WIFI"** to report device Wi-Fi location data.

> __8. Which positioning method should I choose?__ <br>
> If you don't request a high positioning accuracy of the device, LBS positioning is recommended.<br>
> If you request a high positioning accuracy of the device, GNSS positioning is recommended.<br>
> If you don't request a high positioning accuracy of the device and the module supports Wi-Fi positioning,  Wi-Fi positioning is recommended.

> __9. How does the device determine if device location data was reported successfully?__ <br>
> Upon successfully reporting location data, the module prints an event code: **+QIOTEVT: 410220**.<br>

> __10. Why does the device fail to send location data and an ERROR is returned?__ <br>
> a. The device is not connected to the platform. Please make sure the device is connected to the platform before attempting to report location data.<br>
> b. The firmware of the device does not support location data reporting.
> * Send __AT+QIOTLOCIN=?__ to query whether the firmware supports reporting location data of the built-in positioning feature of the module. <br>
> * Send __AT+QIOTLOCEXT=?__ to query whether the firmware supports reporting the location data obtained from external an GNSS module. <br>

## <span style="color:#A52A2A">__**FAQs on Gateway and Sub-device**__</span>
> __1. **What is a gateway**？__ <br>
> A gateway is a device that converts the communication protocols between different devices. Its main purpose is to allow sub-devices that do not have networking capabilities to connect to the platform.

> __2. What is a sub-device？__ <br>
> A sub-device is a device without networking capabilities that can communicate with the platform after connecting to a gateway.

> __3. What is a sub-device heartbeat？__ <br>
> The sub-device heartbeat is the period during which the gateway periodically checks if the sub-device is still connected.<br>
>
> * If the sub-device sends heartbeat information to the gateway within the specified period, the gateway considers it connected and refreshes the detection interval.
> * If the sub-device does not send heartbeat information to the gateway within a specified period, the gateway will consider the sub-device disconnected and disable the interface.<br>

> __4. What is the difference between directly connected devices and Gateway and sub-devices？__ <br>
> 
> * Directly connected devices are products that do not require a gateway or sub-device to function.<br>
> * Gateways and sub-devices are the products that can act as intermediaries between directly connected devices and a network.<br>

> __5. What does event callback code 1,10422 indicate after a sub-device has successfully connected to the platform for the first time?__ <br>
> DeviceSecret is not required when a sub-device connects to the platform for the first time. Callback code 1,10422 indicates that the DeviceSecret is required for subsequent connections.<br>


## <span style="color:#A52A2A">__Other FAQs__</span>
> __1. Why does the firmware download fail when QFlash is used?__ <br>
> a. The module driver is not installed correctly.<br>
> b. There is a Chinese or space in the storage path of the firmware.<br>

> __2. Why does the device report an alert event, but there is no pop-up notification on the Wonderfree?__ <br>
> This may occur because no message notification rule has been configured on Developer Center. To add a rule, go to "Product Development" > "Product" > "Message Notification".

> __3. Why does QthTools-MCU simulator fail to match data when Developer Center sends downlink data?__ <br>
> This may occur because no TSL model has been imported to QthTools-MCU simulator, preventing the tool from parsing the TSL model issued by the platform. To resolve this, you need to import the TSL model file into the tool. <br>    


