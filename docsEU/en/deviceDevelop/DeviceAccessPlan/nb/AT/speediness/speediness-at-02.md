# Device Hardware Configuration

## __AT Command Solution__ 

In AT command solution, MCU can perform corresponding operations to the module by AT commands through the serial port. All external Quectel AT commands are encapsulated as Quectel AT commands. 

## __AT Command Communication Principle__

The physical layer of AT command is based on serial ports and consists of __ASCII text__. AT command is one of the mainstream solutions of __external MCU__, which is applied to the connection and communication between __the module__ and __external MCU__ application. AT command solution has lower development costs and has been converted to simple serial programming, as shown in the following figure.


<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-27.png">![img](/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-27.png)</a>

##  __1. Install Driver__

You can contact Acceleronix technical support to get the USB driver or download it from <a href="https://core.acceleronix.io/download?menuCode=MODULE_DEVL&resourceType=M" target="_blank">Download Center-Driver</a>.

* Double click to open the driver package and start to install the driver. Select the destination folder and click "__Next>__" to finish the installation.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-01.png">![img](/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-01.png)</a>

* Check whether the driver has been installed successfully.
  Connect your PC with an EVB and open PC Device Manager to view the port (COM and LPT) to check whether the corresponding driver has been installed successfully. If the port is shown in the following figure, the USB driver is installed successfully. 

<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-02.png">![img](/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-02.png)</a>


##  __2. Install QthTools-MCU Simulator__

__QthTools-MCU Simulator__ is a tool used to simulate MCU and communicate with the module so that it can greatly reduce the time for developers to get familiar with the AT commands and improve the development efficiency.

Enter <a href="https://core.acceleronix.io/download?menuCode=DEBUG_UTIL&resourceType=C" target="_blank">Download Center-Debugging Tool</a> page and download __QthTools-MCU Simulator__.  Find __Quectel USB AT Port__ in __Device Manager__ > __Port (COM  and LPT)__, select and open it in QthTools-MCU Simulator, and then send __"AT"__  to test the communication quality. Unless otherwise specified, you do not need to modify other configurations, as shown below: 

<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-03.png">![img](/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-03.png)</a>

  