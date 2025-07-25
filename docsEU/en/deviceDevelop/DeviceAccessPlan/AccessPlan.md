# **Solutions Introduction**

<span style="color:#999AAA">In order to help you choose the most optimal solution, the following introduces multiple accessing solutions to Acceleronix Developer Center and analyzes their main characteristics.</span>


<a data-fancybox title="img" href="/en/deviceDevelop/Solutions/Solutions-01.png">![img](/en/deviceDevelop/Solutions/Solutions-01.png)</a>

## **MCU-Based Development (AT Command Solution)**

In this setup, the connection and communication between the **Quectel Module** and **MCU** is facilitated through the use of AT Commands. The **MCU** acts as the controller and sends AT commands to the **Quectel Module** via a serial port. Upon receiving the AT commands, the **Quectel Module** will perform corresponding operations and return a response to the **MCU**. To control the **Quectel Module** and connect it to the network, all you need to do is write applications in the **MCU**.


<a data-fancybox title="img" href="/en/deviceDevelop/Solutions/Solutions-02.png">![img](/en/deviceDevelop/Solutions/Solutions-02.png)</a>

### **Advantages**

- **User-Friendly**: AT commands are straightforward     and easy to debug, allowing you to quickly get familiar with the access     process.
- **Convenient Development**: MCU is the key component of     the solution. As long as the serial port is reserved on the device, the     module can be replaced by other devices.
- **Resource-saving**: As long as the MCU can     receive and send AT commands normally, there is no need to be concerned     with the programming language used by the MCU.
- **SOTA Upgrade Capability**: MCU can be upgraded via SOTA.
- **External MCU requirement**: Communication between the MCU     and the module serial port must be adapted, and serial port interruptions     should be handled with care.

<!-- ## MCU-based Development (Serial Communication Protocol Solution)

Serial Communication Protocol Solution provides a set of commands for the communication between a **Quectel Wi-Fi module** and an **MCU**. The **MCU** sends commands in hex format as a host controller to the **Quectel module**, and the **module** performs corresponding operations after receiving the commands. You only need to write applications in the **MCU** to control the **Quectel module**, including connecting to the network, sending and receiving data and getting the status, which is more suitable for **Wi-Fi** devices.

<a data-fancybox title="img" href="/en/deviceDevelop/Solutions/Solutions-02.png">![img](/en/deviceDevelop/Solutions/Solutions-02.png)</a>

### **Advantages**
- **User-friendly**: The serial communication protocol codes are easy to understand and write, which is friendly to novice developers who have not mastered much programming knowledge yet.
- **Convenient Development**: Quectel provides you with the MCU SDK based on C language, and you can directly call the APIs in C language to perform all operations with no need to know much about the commands.
- **Resource-saving**: Compared with text codes, serial communication protocol codes can greatly reduce the size of code files, thus saving storage space and transmission bandwidth.
- **Expansion Flexibility**: Serial communication protocol can be used in the development of various embedded systems, chips and controllers, thus having high universality and portability.
- **OTA Upgrade Capability**: The module firmware and the MCU firmware can be upgraded over the air in Developer Center.
- **High Security**: Compared with AT commands, the commands of serial communication do not display all data explicitly, thus ensuring data privacy and security. 
 -->


## **Module-Based Development (QuecOpen Solution)**

**QuecOpen** is an application development solution that utilizes the module as the main processor and leverages C language for efficient secondary development. QuecOpen SDK offers encapsulated interfaces for core functionality, such as one-click access to Developer Center, data uplink and downlink capabilities, and OTA upgrades. By calling the necessary dependent interfaces provided by the SDK, you can easily connect the module to Developer Center without extensive coding.


<a data-fancybox title="img" href="/en/deviceDevelop/Solutions/Solutions-03.png">![img](/en/deviceDevelop/Solutions/Solutions-03.png)</a>

### **Advantages**

- **Low Hardware Cost**: Since no external processors, memories and peripherals are required, hardware cost is reduced.
- **C Language**: QuecOpen uses C language for programming, which is known for its concise software codes, powerful features, and fast execution  speed.
- **High Integrity**: Its smaller size makes QuecOpen more suitable for some hand-held devices.
- **Low Power Consumption**: The absence of an external MCU results in lower power consumption and resource occupation, and improved interaction efficiency.
- **Upgrade Simplicity**: OTA upgrade is simplified, allowing for easy upgrades to Quectel module only.
- **High Security**: The absence of a serial port for transferring important business data reduces the risk of near-end attacks and data theft.

## **Module-Based Development (QuecPython Solution)**

**QuecPython** is a secondary development solution which uses Python on the module, with simple debugging capabilities and no need for compilation. QuecPython SDK provides encapsulated interfaces for core functionality, such as one-click access to Developer Center, data uplink and downlink capabilities, and OTA upgrades. By calling the necessary dependent interfaces provided by the SDK, you can easily connect the module to Developer Center without extensive coding.

<a data-fancybox title="img" href="/en/deviceDevelop/Solutions/Solutions-03.png">![img](/en/deviceDevelop/Solutions/Solutions-03.png)</a>

### **Advantages**

- **Upgrade Simplicity**: OTA upgrade is simplified, allowing for easy upgrades     to Quectel module only.
- **MicroPython Compatibility**: The QuecPython interface is consistent with     MicroPython in both directory structure and interfaces, making it easy to update.
- **Data Security**: Source codes and data transmission are encrypted for     maximum data security and privacy.
- **Python**: QuecPython uses Python programming language, which is     popular, stable, reliable and easy to learn.
- **Demo**: QuecPython is suitable for generating demos as it     allows for fast and easy module access to Developer Center. However, it     occupies more module memory compared to other solutions.


## **DTU-Based Development (DTU-Modbus Solution)**

**Modbus Solution** is a development solution that enables access to Developer Center through the use of a ModBus device as a data transmission terminal. Modbus devices can self-parse protocols and interact with Developer Center through QthTools-DTU_Modbus without coding.

<a data-fancybox title="img" href="/en/deviceDevelop/Solutions/Solutions-04.png">![img](/en/deviceDevelop/Solutions/Solutions-04.png)</a>

### **Advantages**
- **Zero-code Development**: Modbus device does not     require a custom code to access Developer Center through QthTools-DTU     Modbus.
- **Modbus Communication Protocol**: Modbus solution supports peripherals     and sensors over Modbus communication protocol, enabling data acquisition     and reverse control through RS-485 interface.
- **Directly Connected Devices/Gateway Sub-device Shift**: Quectel DTU supports directly     connected device mode and gateway sub-device mode, with the option to select     different modes according to usage scenarios.
- **C Language**: DTU supports programming in C language, which is     known for its concise software codes, powerful features, and fast     execution speed.




## **How to Choose the Optimal Solution?**

- **AT Command Solution:** Quectel module is controlled through AT commands, which facilitates getting started. This     solution is recommended for those who only require the Quectel module to access Acceleronix Developer Center and transmit data transparently. It is best suited     for devices with an MCU in the hardware motherboard and already have their     own application program running on the MCU.

<!-- * __Serial Communication Protocol Solution__: For Quectel Wi-Fi module users, Quectel provides you with the MCU SDK in C language and a complete detailed user guide. You only need to add a few files to the existing project to adapt the solution and use the C interface to complete the business logic. This solution is recommended if you connect your module to the Developer Center over Wi-Fi. -->


- **QuecOpen Solution:** C language is used for module     development, allowing for further customization through the QuecOpen SDK. This     solution is recommended if you have a good understanding of C language, a real-time     operating system, and want to save on external MCU costs.

- **QuecPython Solution:** adopts Python to develop the module. You only need to write a Python script and download it into the module or debug the module on the "Interact" page of QPYcom to connect the module to Developer Center. It is recommended for you to choose the QuecPython solution if you have a certain understanding of Python and want to generate a Demo as quickly as possible.

- **DTU Modbus Solution:** Device development is not     required. You only need to configure the Modbus through QthTools-DTU_Modbus.     This solution is recommended if you want to connect the module to     Developer Center without  coding and     the sub-device supports the Modbus protocol.






