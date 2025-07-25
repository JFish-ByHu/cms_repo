# Presentation

## __1. Device Online__

After the firmware is burnt into the DTU device, it automatically accesses Developer Center, where it is added to the corresponding product list and certified automatically.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-20.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-20.png)</a>


## __2. Check Data Logs__

On the "Device Details" > "Data Logs" page, you can view that the terminal device regularly obtains the latest data from the sub-device every 60 seconds and sends it to Developer Center.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-21.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-21.png)</a>


On the "Device Debug" > "Communication Logs" defined by the TSL function, the uploaded temperature value: 25.68, humidity value: 65.13 can be clearly viewed.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-23.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-23.png)</a>


<span style="color:#999AAA">Note: DTU Modbus zero-code scheme does not support active data reading on the platform side.</span>

## __3. Send Commands from Developer Center to Communicate with DTU-Modbus Device

a)   Commands are sent from Developer Center to the DTU-Modbus device.

b)  The DTU device enters the callback function for processing and converts it into the Modbus protocol through the serial port and sends it to the temperature and humidity sensor. 

c)   The DTU device then sends the commands, along with a timestamp, to the temperature and humidity sensor, on behalf of Developer Center. The sensor receives the commands and the timestamp through the DTU device.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/DTU_Modbus/Example-22.png">![img](/en/deviceDevelop/develop/DTU_Modbus/Example-22.png)</a>



