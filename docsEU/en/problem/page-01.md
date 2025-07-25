# FAQs About Product Usage

## **Common Questions**

**1. Is Developer Center only available to enterprise users？**

Both B-end manufacturers and C-end individuals can register and log in to Developer Center.



**2. Can I add or delete devices in batches on Developer Center?**

You can add devices in batches by importing an EXCEL file or by configuring product information and server information. You cannot delete devices in batches.



**3. Can I delete an online device?**

Yes you can delete an online device. 



**4. How many devices can be created under a product?**

There is no limit on the number of devices that you can create. However, if you want to activate the device for normal use, you need to purchase the corresponding IoT platform connection license activation code.



**5. Can I restore a product or device that has been accidentally deleted from Developer Center?**

The data cannot be restored if a product or device is deleted from Developer Center.



**6. Does Developer Center provide App, WeChat Applet or other relevant services?**

At present, Developer Center only provides services related to device management and configuration, and does not offer app or software development services. You can choose to develop your own App, WeChat Applet and other services, or contact our sales team to provide customized development solutions for your company.



**7. How is users data handled by Developer Center? Is it possible to transfer the data to other platforms or user servers via API?**

The data can be transmitted transparently and pushed to user server via API. Additionally, it can also be quickly accessed and handled using the TSL model defined by Developer Center.



**8.** **When I use a feature on Developer Center, if ERROR is returned when I send an AT command, how can I determine whether the module supports the feature or not?**

1) You can execute **AT+QIOTREG=?** to test whether the firmware version of the module supports a feature. If the module supports the feature, **+QIOTREG: (0,1) OK** is returned; Otherwise, **ERROR** is returned.

2) You can execute **AT+QLBS=?** to test whether the firmware version of the module supports a positioning feature. If the module supports the feature, **OK** is returned; Otherwise **ERROR** is returned.

In addition, you can view the Release Note of each module firmware version to determine whether the firmware version supports the feature on Developer Center. If **ERROR** is returned when you use a feature on Developer Center, it is generally because the firmware version of the module does not support this feature. You can use the AT command to query the current firmware version and contact the local FAE to provide the supported firmware version.



## **Device Connection**

**1. Which southbound server address and port are accessed by the MQTT protocol device?**

For Global:

- mqtt://iot-south.acceleronix.io:1883
- mqtts://iot-south.acceleronix.io:8883

**2. How can I get QuecThing SDK?**

If you need to port the SDK (integrated with QuecThing feature), which is used to connect the device to Developer Center, contact Acceleronix FAE to obtain the SDK.



**3. What are the access solutions supported by Developer Center?**

AT command, QuecOpen API.



**4. Why is a device on Developer Center always in "inactive" state and how can I activate the device?**

The device is automatically activated when the number of the communication messages between the device and Developer Center reaches a certain activation threshold, provided that there are available licenses.


**5. Is the length of DeviceKey fixed?**

The length of a DeviceKey varies for different products. The DeviceKey for regular products is a combination of English and alphanumeric characters ranging from 4 to 32 bits, whereas the DeviceKey for Telecom IoT Bridge products is fixed at 15 digits.


## **Push Notification**

**1. Does Developer Center have a message re-push mechanism for message subscription?**

Yes.



**2. Does Developer Center have an interface to get real-time results? Or can the Developer Center message only be acquired asynchronously?**

The Developer Center message can currently only be acquired asynchronously.



**3. After the device is powered off, the SaaS application fails to send data to a device. How do I handle the data after the device is powered on again?**

You can handle the data through the buffer interface. Once the device is powered on again, the data will be resent to the device.


#


## **IoT Bridge**

**1. Can I use Developer Center with the Telecom NB-IoT SIM card I purchased?**

Yes, you can.



**2. What type of module needs to use the IoT Bridge?**

To use the IoT Bridge, you need a Quectel module that supports NB type network mode. other types of modules may use different network modes that require different communication protocols. Typically, non-NB modules can directly connect to Developer Center, and do not need to forward data through the Telecom CTWing platform.



**3. What is the communication protocol used by the device to access Developer Center through IoT Bridge function? MQTT or LwM2M?**

Due to the characteristics of the NB-IoT network mode, the communication protocol used is typically limited to LwM2M.




## **OTA Upgrade**

**1. What are OTA classifications?**

Quectel Module Firmware Upgrade (FOTA, Firmware Over the Air) and MCU Application Upgrade (SOTA, Software Over the Air).


**2. How do I perform OTA?**

Connect the QuecThing module to Developer Center and initiate OTA upgrade.



**3. What is the difference between FullFOTA and DFOTA upgrade?**

The main difference between FullFOTA and DFOTA upgrade is the way the upgrade package is generated. In FullFOTA, the firmware package of the original version is not required as the entire firmware is included in the upgrade full package. On the other hand, in DFOTA, only the difference between the original firmware version and the new firmware version is included in the upgrade package, making it smaller in size and more efficient for targeted upgrades. Generally, FullFOTA is used to upgrade the entire firmware while DFOTA is used for specific upgrades.



**4. How to get the upgrade package?**

Please contact Acceleronix Technical Support at <support@acceleronix.io>.



**5. What does an upgrade plan include?**

An upgrade plan contains details about the device that requires an upgraded, such as the upgrade time, component configuration for upgrade and other relevant information. To upgrade a device, you must either create a new upgrade plan or select an existing one.



**6. What is an upgrade model?**

An upgrade model is a user-created collection of one or more components, which is used to select and plan product components to be upgraded when an upgrade plan is created. Each upgrade model is unique under the current project and component names are unique under the same model.



**7. What determines whether an upgrade plan can be deleted or not?**

When creating a new upgrade plan you have the option to click "Activate Plan" or "Save" it. An activated upgrade plan cannot be deleted, while a saved but inactivated upgrade plan can be deleted.





**8. Why is it impossible to end an upgrade plan once it has started?**

Once an upgrade is confirmed for a device, whether it has a single component or multiple components, the upgrade plan cannot be ended until the upgrade is either completed or fails, regardless of whether the scheduled upgrade time has expired or the upgrade is forcibly terminated.


**9. What is the difference between using MQTT or LwM2M to connect a device to Developer Center for OTA upgrade?**

Once the upgrade is confirmed, the upgrade plan using MQTT will continue until the upgrade either fails (the number of upgrades is exhausted) or is successful. On the other hand, an upgrade plan using LwM2M will automatically end if the upgrade duration exceeds 48 hours.



## **LTE Module**

**1. How to check the network registration status of a module?**

You can execute **AT+CREG?; +CGREG?; +CEREG?; +CSQ; +QNWINFO** to check the network registration status of a module.

![img](/en/problem/image999.png)



**2. How to configure APN?**

You can execute **AT+CGDCONT=`<cid>,<PDP_type>,<APN>`** to change the APN based on the operators and SIM cards in use.



| Operator      | APN                             |
| :------------ | :------------------------------ |
| China Mobile  | cmiot、china mobile、cment      |
| China Telecom | ctnet、chn-unicom、ctnb         |
| China Unicom  | unim2m.njm2mapn                 |
| ARM           | stream.co.uk                    |
| Orange        | orange.item.spc、orange.m2m.spc |





## **NB-IoT Module**

**1. How to check the signal strength of a module?**

You can use **AT+NUESTATS** to check the signal strength of regional operators.



**2. How to check the network registration status of a module?**

You can execute **AT+CEREG?** to query the EPS network registration status. The command will return +CEREG:`<n>,<stat>` to display the result.



| stat | **EPS Registration Status**                                                                        |
| :--- | :------------------------------------------------------------------------------------------------- |
| 0    | Not registered. UE is currently not searching   for an operator to register to                     |
| 1    | Registered, home network                                                                           |
| 2    | Not registered, but UE is currently   trying to attach or searching for an operator to register to |
| 3    | Registration denied                                                                                |
| 4    | Unknown (e.g., it is not in the   E-UTRAN range)                                                   |
| 5    | Registered, roaming                                                                                |


## **LBS Positioning**

**1. What time is the positioning time?**

For LBS-reported positioning, the positioning time is the time after calling base station to parse positioning information. For GGA or RMC-reported positioning, the positioning time is the time in the positioning message pushed by AMQP. However, the time in the push notification is UTC time instead of the local time in East 8 District, so you should add 8 hours to the pushed time.



**2. If the positioning information, including positioning time and method, is reported, but longitude and latitude are not displayed, will the device location be displayed on the positioning map?**

No, the device location on the positioning map is traced based on the latitude and longitude information. If the latitude and longitude information is null, the device location will not be displayed on the positioning map.



**3. Which map is used to display the device location on Developer Center?**

Amap is used on the Chinese version of Developer Center, whereas Google map is used on the English version of Developer Center.





## **TSL Model and Transparent Transmission**

**1. What is TSL model? What is the difference between the TSL model and transparent transmission?**

**TSL model** is the digital representation of the device in Developer Center and the physical entity data model constructed in the IoT Platform, which is divided into three dimensions: **Property**, **Service**, **Event**. After the TSL is saved, the TSL-format product is defined. Transparent transmission means that after the device is connected to Developer Center, all business content is transmitted as-is without being processed by Developer center. The data is pushed from Developer Center to SaaS applications, without being parsed or processed.



**2. Why is the TSL model data received by the module displayed as a hex string? How to convert it to JSON format?**

The TSL model data received by the module is displayed as a hex string to ensure data security during transmission. To convert it to JSON format, you can follow the TTLV definition of the TSL model, which is provided in a table format. The conversion process involves extracting the information from the hex string and mapping it to the corresponding fields in JSON format, as specified in the table.



| **Field**   | **Length** | **Content**                                                                                           |
| :---------- | :--------- | :---------------------------------------------------------------------------------------------------- |
| Data ID     | 13 bits    | Range: 1–8191. Unique in different commands (such as TSL model, device status and module information) |
| Data Type   | 3 bits     | Range: 0–7. See the table below for   details.                                                        |
| Data Length |            | See the table below for details.                                                                      |
| Data Value  |            | See the table below for details.                                                                      |





| **Data Type**         | Byte Encoding（Binary 3 bits） | **Data Length**                                                                                  | **Data Value** |
| :-------------------- | :----------------------------- | :----------------------------------------------------------------------------------------------- | :------------- |
| Boolean-false         | 000                            | NULL                                                                                             | NULL           |
| Boolean-true          | 001                            | NULL                                                                                             | NULL           |
| Enumeration and Value | 010                            | Bit Identifier: 1 bit (0: positive; 1:   negative); Attenuation: 10 to the N-th   power: 4 bits; |                |
| Binary Data           | 011                            | Data Bytes 2B                                                                                    | Data Content   |
| Structure             | 100                            | Number of Elements 2B                                                                            |                |
| Reserved Field        | 101-111                        |                                                                                                  |                |



**3. How does the module send TSL model data in JSON format to Developer Center?**

The conversion mode is the same as that in the second question. The completed MCU Demo, TSL model-related protocol documents and codes are available for reference.

**4. If multiple input/output parameters are defined in a TSL model service, do I have to pass all input parameters when calling the TSL model service? Does the device need to report all the defined output parameters when reporting the TSL model service data?**

No. When sending data of a TSL model service, you can send only the necessary parameters based on your actual requirements.

**5. Can a device report multiple messages simultaneously with TSL model properties? If the device reports multiple TSL properties with the same feature ID at the same time, will all data be reported successfully?**

The device can report multiple TSL model properties simultaneously. However, Developer Center has a de-duplication feature that automatically removes duplicate data. Therefore, if all simultaneously reported properties in the TSL model data have the same feature ID, for example, [{“id”:2,”type”:”int”,”value”:9},{“id”:2,”type”:”int”,”value”:11}], Developer Center will automatically remove the duplicate data, and the data log will be displayed in JSON format, and only the last property will be displayed, that is [{“id”:2,”type”:”int”,”value”:11}]. But when the data log is displayed in other formats, all the data will be displayed. Only the last property data will be displayed on the running status page.

**6. When reporting a TSL property, if the defined property feature ID is 1 and the defined data type is integer, but the reported data is float type, can the float data be reported to Developer Center successfully****？**

Yes. The data can be reported successfully. Developer Center adopts an inclusive processing method for the TSL data reported by the device. If the reported TSL model data is different from the defined content, it can still be reported successfully.




