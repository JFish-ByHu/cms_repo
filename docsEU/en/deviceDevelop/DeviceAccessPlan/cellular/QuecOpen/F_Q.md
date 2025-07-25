# FAQ

## <span style="color:#A52A2A">__**FAQs About Quick Access to Developer Center**__</span>

> __1. **What do I need to do to initialize the device?**__ <br>
> To initialize QuecThing perform the following steps.
>
> ```c
> /* Initialize QuecThing SDK */
> Ql_iotInit();
> /* Register event callback function */
> Ql_iotConfigSetEventCB(Ql_iotEventCB);
> /* Configure product information*/
> Ql_iotConfigSetProductinfo("pxxxxt", "VzZUxxxxxxxxxx9E");
> ```

> __2. What are ProductKey and ProductSecret? How can I get them?__ <br>
> ProductKey (PK) and ProductSecret (PS) are unique codes that identify a product and are used by all devices under the product. 
> PK and PS are automatically sent to your email address which is used to register an account in Developer Center after the product is successfully created on Developer Center.

> __3. **What is an event callback function?**__ <br>
> An callback function refers to adding a listening task **Ql_iotEventCB()** to an event source (component). When the device triggers an event, the developer only needs to process the corresponding event under **Ql_iotEventCB(),** and the listening task will handle the event.

> __4. **How can a device access Developer Center?**__ <br>
>  After initialization, the device can access Developer Center by calling **Ql_iotConfigSetConnmode(1)**.

> __5. **How can I ensure that the device has been connected to Developer Center?**__ <br>The module calls **Ql_iotGetWorkState()** to query the connection status between the device and Developer Center. If the return value is **8**, it indicates that the module has connected to Developer Center and data interaction can be performed.

> __6. How to authenticate a device on Developer Center? And how to activate the device?__ <br>
> The device is automatically authenticated when accessing Developer Center for the first time. The device is activated after a piece of data is uplinked by the device or downlinked by the platform.<br>

> __7. Why does the device fail to access the platform and print the event code "1,10422"?__  <br>
> The DeviceSecret authentication error is caused when product category of the device changes, or the configuration file is overwritten during firmware burning, resulting in the clearing of DS saved by the module. To resolve this issue, reset DeviceSecret on the platform and reconnect the device to Developer Center.
> <br>

> __8. Do I need to configure server information before the device accesses Developer Center?__ <br>
> The module is pre-configured with default server information. Additional configuration of the server information is not required, if there are no special requirements.<br>

> __9. What is a device's lifetime? Do I need to set it before the device accesses Developer Center?__ <br>
> Device lifetime refers to the heartbeat time within a protocol. The lifetime will be set to the default value (86400 s) if there are no special requirements.<br>

> __10. What is the MCU number and MCU version number of a device? Do I need to set it before the device accesses Developer Center?__ <br>
> MCU number and and MCU version number are only required when you need to perform a SOTA upgrade to the MCU on the device through the module. When the device does not have an MCU, or does not need to upgrade the MCU, no setting is required.

> __11. What is PDP contextID? Do I need to set it before the device accesses Developer Center?__ <br>
> PDP contextID is a unique identifier used to distinguish between different transmission services utilized by the module, in addition to accessing Developer Center. If there are no special requirements, PDP contextID does not need to be configured and it is disabled by default.<br>

> __12. What is the encryption mode of the connection between the device and the platform? Do I need to set it before the device accesses Developer Center?__ <br>
> It is an encryption mode of the data link. It is optional and disabled by default.<br>

> __13. Do I need to configure DeviceKey and DeviceSecret before the device accesses Developer Center?__ <br>
> **DeviceKey** does not need to be configured. The module uses either IMEI (cellular module) or MAC address (Wi-Fi module) as the **DeviceKey** by default. **DeviceSecret** does not need to be configured either. When the module accesses the platform for the first time, the platform generates a **DeviceSecret** and sends it to the module (This step is invisible to the user).


## <span style="color:#A52A2A">__**FAQs About Data Interaction**__</span>
> __1. **How many data formats are there**?__ <br>
> Developer Center supports two data formats: TSL data and transparent transmission data.

> __2. **What is TSL model?**__ <br>
> TSL model is the digital representation of the device in Developer Center and the entity data model constructed in the IoT platform and software solution, which is divided into three dimensions: property, service and event.

> __3. What is transparent transmission data format?__  <br>
> Transparent transmission data format refers to raw data transmitted directly and transparently from device to Developer Center, which does not parse any data.

> __4. What is QoS?__ <br>
> QoS is short for Quality of Service. Improving QoS means ensuring transmission bandwidth and reducing packet loss rate and delay jitter. You can select QoS based on the actual network status.
>
> * There are currently three levels of QoS: 0, 1, 2.<br>
> * If high-frequency and unreliable interactions are required between the device and Developer Center, set QoS to 0 for traffic saving and high efficiency.<br>
> * If high-frequency and reliable interactions are required between the device and Developer Center, set QoS to 1 for traffic saving and high efficiency.<br>
> * If high-frequency and reliable interactions are required between the device and Developer Center, and the principle of one-send-one-receive should be strictly followed, set QoS to 2.<br>

> __5. **What is PkgID**?__ <br>PkgID is the ID assigned to uplink and downlink packets to ensure successful data transmission. Before sending data, a PkgID is generated, and upon successful delivery or the data to Developer Center, a confirmation PkgID is received. You can judge if the data was transmitted successfully based on the consistency of the two PkgIDs.

> __6. How to send TSL data to Developer Center?__ <br>
> Call **Ql_iotCmdBusPhymodelReport_ex()**.

> __7. **How to receive TSL data?**__ <br>
> When Developer Center issues TSL data, the device will automatically call event callback function and report event {5,10210}. You can call **Ql_iotTtlvCountGet()** and **Ql_iotTtlvNodeGet()** to get and parse the TTLV data. See Example of TSL Data Interaction for details.

> __8. How to respond to the TSL data request from Developer Center?__ <br>
> Call __Ql_iotCmdBusPhymodelAck()__.

> __9. Does the device have to carry a property parameter when it reports an event?__  <br>
> No, it doesn't. <br>

> __10. When a device reports TSL data, can it simultaneously report a property and an event?__ <br>
> Yes, the device can report multiple properties and events simultaneously when it reports TSL data.<br>  


## <span style="color:#A52A2A">__FAQs About OTA Upgrade__</span>
> __1. **What is the meaning of OTA**?__ <br>
> OTA refers to the upgrade over the air. You can upload the target firmware package to Developer Center and create an upgrade plan. When the device environment meets the requirements of the upgrade strategy, the module actively triggers the upgrade plan to upgrade the device.

> __2. **How many OTA solutions are there?**__ <br>
> Developer Center supports two OTA solutions, which are FOTA (Module Firmware OTA Upgrade) and SOTA (MCU Firmware OTA Upgrade).

> __3. **How do I choose an OTA solution**?__ 
> <br>You should choose an OTA solution according to your project requirements. SOTA should be selected for upgrading the MCU program and FOTA for upgrading module firmware.

>*  To perform secondary development based on the module firmware, FOTA should be selected for module firmware upgrades.<br>

>* In case of using a self-developed device with a Quectel module for development, SOTA should be selected for program upgrades.<br>


> __4. **What are the differences between a full package and a delta package?**__
> <br>a. Making method <br>
> Both the full package and delta package can realize firmware upgrade. Full package is the firmware generated by the user project compiling the complete code by the compiler; Delta package is to generate firmware (which can be called a patch) that can be inserted into the original firmware by comparing the code differences of the original version, and it can only be generated with specific tools.<br>
> b. Traffic<br>
> The full package is the firmware compiled by a complete project. In general, the size of a full package is much larger than that of a delta package. Therefore, delta package has advantages for devices with high latency, low bandwidth or low power consumption.<br>
> c. Compatibility<br>
> Delta package upgrade is based on the firmware of the last version, so delta package upgrade cannot be compatible with upgrading from the lower version to the latest version. If all devices in different versions need to be upgraded, you should create multiple components or plans. So the maintenance cost of delta package is high for a large number of multi-version devices.  

> __5. How to perform a FOTA upgrade?__  <br>
> To perform a FOTA upgrade, follow these steps:<br />
> a. Add a version package and create an upgrade plan on Developer Center. <br>
> b. Call __Ql_iotCmdOtaRequest()__ to request OTA upgrade plan. When the device environment meets the requirements of upgrade strategy, the module actively triggers the upgrade plan to upgrade the device.<br> c. Call __Ql_iotCmdOtaAction()__ to confirm the upgrade. <br>d.  The module automatically enters the upgrade status upon receiving the upgrade package. <br>

> **6. How to perform a SOTA upgrade?** <br>
> a. Call **Ql_iotConfigSetMcuVersion()** to configure MCU version number. <br>
> b. Add a firmware version and create an upgrade plan on Developer Center.  <br>
> c. Call __Ql_iotCmdOtaRequest()__ to request OTA upgrade plan. When the device environment meets the requirements of the upgrade strategy, the module actively triggers the upgrade plan to upgrade the device. <br>
> d. Call __Ql_iotCmdOtaAction()__ to confirm the upgrade. <br>
> e. Call __Ql_iotCmdOtaMcuFWDataRead()__ to read SOTA data by blocks. <br>
> f. MCU automatically enters the upgrade status after receiving the upgrade package. <br>
> g. Upon completing the upgrade, a new MCU version number is set and uploaded to Developer Center. <br>

> __7. Why cannot the OTA upgrade be triggered?__<br>
> a. The device has not connected to Developer Center.<br>
> b. The device properties do not meet the upgrade plan requirements, such as insufficient storage space, weak signal strength, incompatible version.<br>
> c. The device is not included in the created upgrade plan.<br>

> __8. Why did an OTA upgrade fail?__ 
> <br>a. Incorrect SDK version. Please ensure that the current SDK version is compatible with the related AT commands. Using AT commands from a newer version (after 2.9.2) with an older SDK version (before 2.9.2 ) may result in unexpected errors.<br>
> b. Interruptions during upgrade: If the device is powered off, disconnected from the network, or disconnected from Developer Center during the upgrade process, the device upgrade will be considered failed.<br>
> c.Network fluctuations: In case of network fluctuations during the upgrade, the upgrade is considered failed and automatically attempted again. If the upgrade fails 5 consecutive times, the device upgrade plan is considered unsuccessful.<br>
> d. Damaged upgrade file: If the device successfully downloads the firmware package but the upgrade fails, the upgrade file may have been damaged during the upgrade process. It is important to pay attention to the storage area of the upgrade file to prevent this issue<br>

> __9. What is the difference between setting the request parameter *mode* to 0 and 1 when the device requests an OTA upgrade by calling *Ql_iotCmdOtaRequest(quint32_t mode)*?__ <br>
> * When *mode* is set to 0, the platform issues the upgrade plan without the SHA256 verification.
> * When *mode* is set to 1, the platform issues the upgrade plan with the SHA256 verification.<br>
> Whether to use SHA256 verification or not depends on your requirements. <br>

> __10. Why can't the device receive the upgrade plan after sending OTA upgrade request during SOTA upgrade?__ <br>
>    a. No OTA upgrade plan is created or activated on the platform.<br>
>    b. MCU version number is not set by the module. The module needs to call __Ql_iotConfigSetMcuVersion()__ to set the MCU version number. <br>

> __11. Why can't the module download all SOTA upgrade packages at one time during SOTA upgrade?__ <br>
> The module does not have enough free memory to store the entire upgrade package at once, so it will be downloaded in blocks. The size of free memory in the module varies with the module model.<br>

> __12. Why can't the module automatically download the next block of firmware data during SOTA upgrade?__ <br>
> When the firmware is downloaded by blocks from Developer Center in the process of SOTA upgrade, after finishing downloading the first block, the module needs to call __Ql_iotCmdOtaAction(2)__ to download the next block of data.

> __13. How does the device judge whether an OTA upgrade is successful?__ <br>
> If an OTA upgrade is successful, the device will print the event code: **7,10705**, or you can check the upgrade result in the "Upgrade Plan List" of Developer Center.<br>

## <span style="color:#A52A2A">__FAQs About Device Location__</span>
> __1. How many ways are there to position a device?__ <br>
> There are three ways: LBS positioning, GNSS positioning and Wi-Fi positioning respectively.

> __2. What are the characteristics of LBS positioning?__ <br>LBS positioning has a wide coverage and can work both indoors and outdoors without an external module. However, its accuracy is low and requires signals both indoors and outdoors.

> __3. What are the characteristics of GNSS positioning?__
> GNSS positioning is fast, it works all-day, does not require considering visual conditions, and can measure a large distance range. However, it is less accurate indoors and in tunnel environments due to the limitations in zenith direction coverage.

> __4. What are the characteristics of Wi-Fi positioning?__ <br>
> Wi-Fi positioning is fast and highly accurate in crowded areas. However, it requires a Wi-Fi connection and it cannot work without an available Wi-Fi.<br>
>
> __5. How can I use LBS positioning?__ <br>
> QuecThing has equipped with LBS positioning component, so the module only needs to call __Ql_iotLocGetData()__ to obtain the location data of the built-in positioning feature of the module and call __Ql_iotCmdBusLocReportInside_ex()__ to report the obtained data.

> __6. How can I use GNSS positioning?__ <br>
> GNSS positioning needs an external GNSS module. The module needs to obtain the coordinate system read by the GNSS module and then call __Ql_iotCmdBusLocReportOutside_ex()__ to report the location data obtained from the external GNSS module.

> __7. How can I use Wi-Fi positioning?__ <br>
> QuecThing has equipped with Wi-Fi positioning, the module can call __Ql_iotLocGetData()__ to obtain the location data of the Wi-Fi positioning feature of the module and call __Ql_iotCmdBusLocReportInside_ex()__ to report the location data of the Wi-Fi positioning feature of the module.
>
> __8. How to choose the positioning ways?__ 
> <br>If you don't request a high positioning accuracy of the device, LBS positioning is recommended.<br>
> If you request a high positioning accuracy of the device, GNSS positioning is recommended.<br>
> If you don't request a high positioning accuracy of the device and the module supports Wi-Fi positioning,  Wi-Fi positioning is recommended.

> __9.  How does the device determine if device location data was reported successfully?__ <br>
> When the device reports the location data successfully, the module calls **(*eventCB)(4, 10200)**. <br>

> __10. Why does the device fail to send location data and is an ERROR returned?__ <br>
> The device is not connected to the platform. Please make sure the device is connected to the platform before attempting to report location data. <br>

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

 ## <span style="color:#A52A2A">__FAQs on DTU-Modbus Solutions__</span>
> __1. What kind of device can use ModBus DTU to access Developer Center?__<br>
> Any device that conforms to the Modbus standard communication protocol can access Developer Center through ModBus DTU.

> __2. What function codes does ModBus DTU support?__ <br>
> Currently ModBus DTU supports 0X01\0X03\0X04\0X05\0X06\0X10 function codes, which can read and write the coils, holding registers and input registers of ModBus sub-devices.

> __3. How many slaves can the ModBus DTU connect to?__ <br>
> According to ModBus protocol, each serial port supports maximum 247 slaves. The number of DTU-supported slaves varies depending on the number of serial ports on a module.

> __4. What are the differences between "Report All" and "Report Changes" in "Report Method"?__ <br>
> When "Report All" is selected, all slave data read by DTU is reported directly to the Developer Center. When "Report Changes" is selected, DTU first compares the current slave data with the data reported during the last reporting interval. Then it only reports the changes since the last report to Developer Center, rather than reporting all data again, thus saving communication traffic.

> __5. What are the differences between "Directly Connected Device" and "Gateway Sub-device" in "Device type"?__ <br>
> When "Directly Connected Device" is selected, all sub-device feature information and data are aggregated into a single device. As a result, only one gateway device will be displayed on Developer Center, and the sub-devices will be displayed in a tree structure. When "Gateway Sub-device" is selected, you must create corresponding product information for each sub-device on Developer Center. Once the gateway device is successfully connected to the network, each sub-device will be registered and go online on the Iot platform. As a result, you can view the uplink and downlink data of sub-devices on the corresponding sub-device interface.  

> __6. How to burn the configuration file to the communication module?__ <br>
> The configuration files can be burned to the corresponding file systems through the module burning tool or configured download serial ports.

 ## <span style="color:#A52A2A">__Other FAQs__</span>
> __1. Why does the firmware download fail when QFlash is used?__ <br>
> a. The module driver is not installed correctly.<br>
> b. There is a Chinese or space in the storage path of the firmware.<br>

> __2. Why does the device report an alert event, but there is no pop-up notification on the Wonderfree?__ <br>
> Because no message notification rule is configured on Developer Center. You can add a rule by clicking "Edit" on the "Message Notification" column at the bottom right of a product configuration page through "Product Development > Project > Product". 

> __3. Why does QthTools-MCU simulator fail to match data when Developer Center sends downlink data?__ <br>
> This may occur because no TSL model has been imported to QthTools-MCU simulator, preventing the tool from parsing the TSL model issued by the platform. To resolve this, you need to import the TSL model file into the tool. <br> 





