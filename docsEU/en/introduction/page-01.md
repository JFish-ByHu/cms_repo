# What is Developer Center

Developer Center is an IoT platform that facilitates the integration of massive devices with the enterprise system through fast connections and secure data communication. It provides the end-to-end solution of "end + connectivity + platform + application" to facilitate device management, and supports feature definition, message subscription, OTA upgrade and remote debugging, monitoring, operation and maintenance and other services, to help enterprises reduce costs, increase efficiency, improve quality, quickly build upper-layer applications, and easily manage devices.

<a data-fancybox title="img" href="/en/productIntroduce/image10001.png">![img](/en/productIntroduce/image10001.png)</a>

## **Feature ==Description **

### Product Management

A product is a collection of devices with the same feature definition (TSL model). Developer Center assigns a unique ProductKey to each product. All devices under a product will be burned with the same ProductKey for authentication and connection to Developer Center.

### TSL Model

In Developer Center, you can define features for a product, including device properties, events, and services. Defining these functionalities simplifies the development of upper-layer applications.

### **Device Access**

Developer Center supports various connection solutions, such as cellular (2G/3G/4G/5G), NB-IoT, Wi-Fi and Bluetooth, to provide convenient connection and management of different network devices. It also enables multi-protocol access, such as MQTT and LwM2M, to ensure fast and easy integration of numerous devices with the Developer Center.

### **Device Management**

Developer Center provides abundant lifecycle management features, such as device registration, activation, authentication and deletion. ==It also provides data storage capabilities to support queries for historical properties, services, events, and other data reported by devices,== thereby streamlining device management and improving efficiency.

### Communication Security

At the communication link level, Developer Center and devices support encrypted communication via MQTTS and CoAPs to ensure data security. At the business link level, Developer Center and devices support authentication methods such as unique-ProductSecret-per-product authentication, unique-DeviceSecret-per-device authentication and unique-certificate-per-device authentication.

### **OTA Upgrade**

Developer Center offers management for firmware packages and upgrade plans. It also provides both FullFOTA and DFOTA upgrades and supports the setting of upgrade time periods to enable remote upgrades of the module programs and MCU programs of the hardware.

### **Data Buffering**

Developer Center supports offline message buffering, and integrates the capabilities of storing offline device messages (reported and issued), with the option to adjust cache storage duration as needed.

### **Message Subscription**

Developer Center offers a high-performance, highly available message queue data flow service. It supports enterprise clients in receiving business data reported by devices via the AMQP method. Clients can customize the types of data they subscribe to and forward data to enterprise clients as needed.

### **OpenAPI**

Developer Center provides OpenAPIs for products, devices and services, which are compliant with REST interface standard and designed to facilitate application development and meet business requirements in different scenarios.



