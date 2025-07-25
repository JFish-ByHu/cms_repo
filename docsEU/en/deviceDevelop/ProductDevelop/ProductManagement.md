# Create a Product
A product is a collection of devices, typically grouping devices with the same function definitions (TSL model) under one product. Developer Center assigns a globally unique ProductKey and ProductSecret to each product. All devices under this product will be provisioned with the same ProductKey and ProductSecret for authentication.

When creating a product, you can configure the following items according to the guided steps. You may select based on the hardware product's target architecture.

<a data-fancybox title="img" href="/en/deviceDevelop/creatproduct/creatproduct01.png">![img](/en/deviceDevelop/creatproduct/creatproduct01.png)</a>

The descriptions of configuration items are in the table below:

| **Parameter**             | **Description**                                              |
| ------------------------- | ------------------------------------------------------------ |
| Product Category          | Category identifies product types and is divided into standard category and solutions by industry. <br>● Standard Category: You can select the target category from predefined categories provided by Developer Center. Some categories provide recommended solutions for quick creation and property definition. <br/>● Solutions By Industry: Developer Center offers different vertical industry solutions. Please choose this category for product creation when using an official industry solution. |
| Recommended    Solution   | Predefined solutions included definitions for device type, network connection method, and data format. You can select based on product matching degree. If no template is available, you can configure via custom solutions. |
| Device Type               | Device type.<br/>● Directly connected device: A hardware device that integrates a communication module and can be directly connected to Developer Center.<br/>● Gateway: A device that integrates a communication module, mounts sub-devices through different protocols such as 485, Zigbee and RS232, and provides Internet access through a proxy server for sub-devices, enabling them to connect to Developer Center. A gateway can manage sub-devices and maintain a topological relationship with them.<br/>● Gateway sub-device: A sub-device that does not directly connect to Developer Center, but instead connects through gateway proxy. |
| Specified Gateway         | When selecting the sub-device as device type, you can determine whether to specify the corresponding gateway. <br/>● Disable: Sub-devices can access Developer Center through any gateway. <br/>● Enable: Sub-devices can access Developer Center only through the specified gateway. |
| Gateway Access Mode       | When selecting the sub-device as device type, you need select a gateway access mode.<br/>● Internet Access Only Through Proxy Server: Sub-devices use the gateway as a network access and data forwarding channel, and the sub-devices are managed independently and can be queried and controlled through the gateway.<br/> ● Product Integration: Gateways and sub-devices are managed uniformly, allowing for sub-device querying and control through the gateway. |
| Network Connection Method | Network connection method for directly connected device and gateway.<br/>● Supported by directly connected devices: 2G/3G/4G/5G, Wi-Fi, NB-IoT and Bluetooth<br/>● Supported by gateways: 2G/3G/4G/5G, Wi-Fi |
| Data Format               | The data format for device uplink and downlink.<br/>● TSL Model (Recommended): A data interaction protocol between devices and the Developer Center, using JSON format at the application layer.<br/>● Transparent/Custom: If you wish to use custom data formats, you can select Transparent/Custom. |
| Product Information       | Setting product image and product name in the last step. <br/>● Product Image: It will be displayed to mobile users in apps/mini-programs. <br/>● Product Name: It will be displayed to mobile users in apps/mini-programs. <br/>● Wonderfree App Authorization: It enables mobile users to control this product through the Wonderfree App. |

After creation is completed, Developer Center will assign ProductKey and ProductSecret for the product. The ProductSecret will be sent to email bound to the current account. Please keep it securely.

<a data-fancybox title="img" href="/en/deviceDevelop/creatproduct/creatproduct02.png">![img](/en/deviceDevelop/creatproduct/creatproduct02.png)</a>
