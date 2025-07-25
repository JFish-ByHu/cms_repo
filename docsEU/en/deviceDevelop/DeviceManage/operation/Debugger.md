# Device Debugging

This section outlines the process of debugging, which involves sending commands or data that from Developer Center webpage to the device to verify the interaction logic between the device and Developer Center. Depending on the product data formats, device debugging can be divided into two types: transparent transmission data debugging and TSL data debugging.

## **Transparent Transmission Data Debugging**

Transparent transmission data debugging involves sending and receiving custom packet data between the device and application, which are interconnected through a custom protocol. In this type of debugging, Developer Center only serves as a transmitter of the data, without parsing the transparent transmission data or expanding data applications. The device and application parse the packet data by themselves

### **Prerequisites**

● A product has been created in transparent transmission data format.<br />
● A device has been developed and connected to Developer Center successfully.

### **Steps**

Log in to Developer Center, click "Device Management"→ "Device Maintenance” in the left-hand navigation bar to display the list of devices. Find the device you want to debug and click "View" in the Action column to enter the detail page of the device. Then click "Device Debugging" tab to access the debugging feature.

<a data-fancybox title="img" href="/en/guide/image2022-3-10_13-31-46.png?version=1&modificationDate=1646889716000&api=v2">![img](/en/guide/image2022-3-10_13-31-46.png?version=1&modificationDate=1646889716000&api=v2)</a>

On the left is the input area for data debugging, and on the right is the display area for real-time data logs.

| **Parameter**  | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Data Format    | Data format when sending transparent transmission data. **Hex: ** Data or byte array is converted to hexadecimal characters (for example, binary 0x1234AB (3 bytes) is converted to string "1234AB" (6 bytes); string "1234AB" (6 bytes) is converted to binary 0x1234AB (3 bytes)); **Text:** The data is sent in UTF-8 encoding format.                                                                                            |
| Content        | Maximum length of data is 4096 characters, and the size of the   data content is determined by the length of the data that the module can   receive.                                                                                                                                                                                                                                                                                 |
| Cache Duration | Cache duration of the data. If the device that is currently being debugged is offline, the content in the cache will be delivered the   next time the device goes online or sends uplink data. Unit: second.                                                                                                                                                                                                                         |
| isCover        | **Yes:** indicates that when the current device is offline, if repeated commands are sent, only the latest command will be sent the next time the device goes online or sends uplink data, and the previous command will be overwritten by the latest command. **No:** indicates that when the device is offline, if repeated commands are sent, all cached data will be delivered when the device goes online or sends uplink data. |
| Send Command   | Click "Send Command" to send data, and the data will be displayed in the real-time log.                                                                                                                                                                                                                                                                                                                                              |
| Reset          | Clear all current settings and data content, and return to the initial status of "Device Debugging" page.                                                                                                                                                                                                                                                                                                                            |

## **TSL Data Debugging**

The device interacts with Developer Center using the TSL data protocol. Developer Center can analyze and display the TSL data, as well as extend the usage of TSL data.

### **Prerequisites**

● A product has been developed in TSL data format.<br />
● A device has been developed and connected to Developer Center successfully.

### **Steps**

Log in to Developer Center, click "Device Management"→ "Device Maintenance” in the left-hand navigation bar to display the list of devices. Find the device you want to debut and click "View" in the Action column to enter the detail page of the device. Then click "Device Debugging" tab to access the debugging feature.

<a data-fancybox title="img" href="/en/guide/image2022-3-10_14-3-55.png?version=1&modificationDate=1646891645000&api=v2">![img](/en/guide/image2022-3-10_14-3-55.png?version=1&modificationDate=1646891645000&api=v2)</a>



On the left is the input area for data debugging, which is divided into property debugging and service calls. And on the right is the display area for real-time data logs.

Property Debugging: Select "Property Debugging" on the "Device Debugging" page to debug the properties defined in the TSL model of the product. You can choose between Write or Read debugging method. The input content will be displayed automatically and you can debug your device by replacing the '$' part of the content.

Service Calls: Select "Service Calls" on the "Device Debugging" page to debug the services defined in the TSL model of the product. The input parameters defined by the services will be displayed automatically. You can debug your device by replacing the '$' part of the content.
