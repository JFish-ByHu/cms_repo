# Development Environment Configuration

## __Introduction__

__QuecOpen__ is an application mode with a module as a __main processor__ and or a __slave module__. __QuecOpen__ solution can __simplify the development process of Internet of Things applications__, __streamline hardware structure design__, and thus it __reduces product costs__. __SDK__ of __QuecOpen__ solution adopts modular design to separate core protocol service and hardware abstraction layer and provides flexible configuration options and multiple compilation modes, which is suitable for different development platforms and environments of different devices.


<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-01.png">![img](/en/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-01.png)</a>



## __1. Prepare Development Environment__

## Get SDK and Module Information


Click <a href="https://core.acceleronix.io/download?menuCode=MODULE_DEVL&resourceType=M" target="_blank">Download Center-SDK</a> to download module SDK and module documents. Contact a Acceleronix FAE to get your desired SDK if it is not included in Download Center.

## __2. Install Driver__

Take __FC41D__ module as an example to introduce how to install a USB driver in a Quectel module. You can contact Acceleronix technical support to get the USB driver or download it in <a href="https://core.acceleronix.io/download?menuCode=MODULE_DEVL&resourceType=M" target="_blank">Download Center-Driver</a>.

__1) Install__

Double-click to open the driver package and start to install the driver. Select the destination folder and click __Next>__ to finish the installation.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-02.png">![img](/en/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-02.png)</a>

__2) Check__

Connect PC with an EVB and open PC Device Manager to view the port (COM and LPT) to check whether the corresponding driver has been installed successfully. If the port is shown in the following figure, the USB driver is installed successfully. 

<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-03.png">![img](/en/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-03.png)</a>

## __3. Configure Compilation Environment__

__1) Download and install VS Code__

__2) Install and configure Ubuntu 20.04 LTS__

__<span style="color:red" >提示：蜂窝模组开发环境至此安装结束，Wi-Fi品类设备继续往下安装。</span>__

__3) Install Tools__

* Execute the following command in the Terminal window to install GCC (GNU Compiler Collection).
    > sudo apt-get install gcc

* Execute the following command in the Terminal window to install GNU Make.
    > apt-get install ubuntu-make

__4) Add Environment Variables__

① Execute vim ~/.bashrc in the Terminal window to enter .bashrc file.<br>
② Add export PATH=$PATH:/usr/bin/gcc-arm-none-eabi-5_4-2016q3/bin to the end of .bashrc file.<br>
③ Execute source ~/.bashrc to load the modified configuration in the .bashrc file for the configuration to take effect.

__5) Install Libraries__

* Execute the following command to install libraries lib32ncurses5-dev and lib32z1-dev lsb-core
    > sudo apt-get install lib32ncurses5-dev lib32z1-dev lsb-core

__6) Check Installation Result__

* Once the installation is complete, execute the following command to query the arm-none-eabi-gcc version.
    > arm-none-eabi-gcc -v

Note: This environment configuration is for reference only.

<span style="color:#999AAA">Note: This environment configuration is for reference only.</span>

  