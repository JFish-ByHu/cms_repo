# Write Python Script

## **Write Script**
Let's get started on writing an example script named **example.py**. 

<span style="color:#999AAA">Note: If you hope the script can run automatically after the module is powered on, name the example script __main.py__.</span>


## __1. Initialize Configuration__
Initialize the project configuration before connecting the module to Developer Center. 
<span style='color:#999AAA'>Note: See [Product Configuration API](/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-02) for details.</span>


* Power on the device, and then initialize the QuecThing component.
    ```py
	Qth.init()
    ```
    
* Register **event callback function** for determining the connection status between the device and Developer Center.
    ```py
	eventOtaCb={
            'otaPlan':App_otaPlanCb,
            'fotaResult':App_fotaResultCb
            }
    eventCb={
        'devEvent':App_devEventCb, 
        'recvTrans':App_cmdRecvTransCb, 
        'recvTsl':App_cmdRecvTslCb, 
        'readTsl':App_cmdReadTslCb, 
        'readTslServer':App_cmdRecvTslServerCb,
        'ota':eventOtaCb
        }
    Qth.setEventCb(eventCb)
    ```
    
* The device authentication method supports __unique-certificate-per-product authentication__, so you only need to pass the __PK and PS__ generated when you created the product  to configure the device information.
    
	```py
    Qth.setProductInfo("pxxxxy", "OFZCxxxxxxxxUdn")
    ```


* Sample code
    ```py
    """ Initialize QuecThing SDK. """
        Qth.init()
    """ Register event callback functions. """
        eventOtaCb={
            'otaPlan':App_otaPlanCb,
            'fotaResult':App_fotaResultCb
            }
        eventCb={
            'devEvent':App_devEventCb, 
            'recvTrans':App_cmdRecvTransCb, 
            'recvTsl':App_cmdRecvTslCb, 
            'readTsl':App_cmdReadTslCb, 
            'readTslServer':App_cmdRecvTslServerCb,
            'ota':eventOtaCb
            }
        Qth.setEventCb(eventCb)
    """ Configure product information."""
        Qth.setProductInfo("pxxxxy", "OFZCxxxxxxxxUdn")
    ```

## __2. Access Developer Center__
Connecting a device to Developer Center is made easy with the QuecPython **one-click connection** feature. Once connected, the device can safely and reliably communicate with Developer Center, allowing for efficient device management, monitoring and control.
* Sample code
    ```py
    """ Connect the device to Developer Center. """
        Qth.start()
    ```
## __3. Develop Application Logic__

__example.py__, a data template example, has implemented a general processing framework for data sending and receiving and event response.  Developers can develop business data logic according to the example and project requirements. 

<span style='color:#999AAA'>Note: See [Data Interaction API](/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-03) for details.</span>

### __Implementation of Uplink Business Logic__

The device can adopt certain strategies to detect and process data properties to accommodate specific business scenarios. For example, if the module needs to report the remaining content of essential oil to Developer Center, appropriate measures can be taken to ensure accurate reporting.
* Sample code
    ```py
    def Qth_tslSend():
    while True:
        # Check the connection status between the device and Developer Center.
        if Qth.state():
            ret = Qth.sendTsl(1, {1: 180.25})   # User task: reporting the remaining content of essential oil to Developer Center every 30 seconds.
            print('sendTsl ret:', ret)  
        utime.sleep(30)

    if __name__ == '__main__':
        Quecthing()
        _thread.start_new_thread(Qth_tslSend, ())
    ```
### __Implementation of Downlink Business Logic__
**QuecThing SDK** has simplified the development process for downlink data by parsing TTLV data based on the data template protocol. Developers only need to develop the downlink business logic according to different events. TSL is a template structure that uses the product data templates from Developer Center to define member variables. In the downlink data, the property pointed by the passed value has been parsed by __QuecThing SDK__ based on the data template protocol, so developers can directly add business logic in the downlink logic processing function.


* Sample code
    ```py
    @staticmethod
        def App_cmdRecvTslCb(value):
            print('recvTsl:', value)
            model_keys = list(value.keys())
            for cmdId in model_keys:
                value = value.get(cmdId)
                if 2 == cmdId:    #Issue the frequency of regular reporting.
                    print("Ctemporal frequency："+ str(value)) 
                elif 3 == cmdId:    #Issue on/off status.
                    if  False == value:   #Close
                        print("Turn off the aromatherapy machine") 
                    elif True == value:   #Open
                        print("Turn on the aromatherapy machine") 
                elif 5 == cmdId:    #Call a service.                     
                    if  1 == value[6]:   #Working Mode 1.
                        print("Model 1") 
                    elif 2 == value[6]:   #Working Mode 2.
                        print("Model 2") 
                    elif 3 == value[6]:   #Working Mode 3.
                        print("Model 3") 
                else :
                    pass

        def App_cmdReadTslCb(ids, pkgId):
            print('readTsl:', ids, pkgId)
            for id in ids:
                if 1 == id:
                    ret = Qth.ackTsl(1, {1: 180.25}, pkgId)
                    print('ackTsl ret:', ret)  
                elif 2 == id:
                    ret = Qth.ackTsl(1, {2: 30}, pkgId) 
                    print('ackTsl ret:', ret)   
                elif 3 == id:
                    ret = Qth.ackTsl(1, {3: True}, pkgId)
                    print('ackTsl ret:', ret)  
                else :
                    pass
    ```

<span style='color:#999AAA'>Note: See [Device Routine Demo](#python_demo) for details.</span>

## __4. Download QuecPython Script__

You can directly burn **example.py** file into the module with **QPYcom** since Python codes do not require compiling.


<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-07.png">![img](/en/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-07.png)</a>

__①__ Click "**File**" tag to enter the file page and select **example.py** file. <span style="color:#999AAA">Note: Local PC files are displayed on the left side, while files on the module are displayed on the right side of the screen.</span><br>
__②__  Drag **example.py** file to the root node of the ***usr*** directory on the right, and release the left mouse button to automatically download the file to the module.

<span style="color:#999AAA">Note: The file download progress is displayed in the status bar at the bottom of QPYcom window. When the download progress reaches 100%, the file is downloaded successfully</span>


## __5. Run the Script__

 Choose **example.py** in the module file on the right and click the **triangle** above the files to automatically run the codes.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-08.png">![img](/en/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-08.png)</a>

<span style="color:#999AAA">Note: Automatic or circular output scripts can not be stopped by  Ctrl+C. The only way to stop the script is to re-download the firmware package.</span>


## <span id = "WiFi_demo">__6. Device Routine Demo__ </span>

The complete sample code of *example.py* is shown below.
```py
from usr import Qth
import _thread
import utime

class Quecthing:
    def __init__(self):
        Qth.init()
        Qth.setProductInfo('p1xxrw','M0liTFxxxxx0Y0Mx')

        eventOtaCb={
                'otaPlan':self.App_otaPlanCb,
                'fotaResult':self.App_fotaResultCb
                }
        eventCb={
            'devEvent':self.App_devEventCb, 
            'recvTrans':self.App_cmdRecvTransCb, 
            'recvTsl':self.App_cmdRecvTslCb, 
            'readTsl':self.App_cmdReadTslCb, 
            'readTslServer':self.App_cmdRecvTslServerCb,
            'ota':eventOtaCb
            }
        Qth.setEventCb(eventCb)
        Qth.setAppVer('V1.0.1', self.App_sotaResultCb)
        Qth.start()

    @staticmethod
    def App_devEventCb(event, result):
        print('event:', event, result)
        if(2== event and 0 == result):
            Qth.otaRequest()

    @staticmethod
    def App_cmdRecvTransCb(value):
        print('recvTrans:', value)
        ret = Qth.sendTrans(1, value)
        print('sendTrans ret:', ret)

    @staticmethod
    def App_cmdRecvTslCb(value):
        print('recvTsl:', value)
        model_keys = list(value.keys())
        for cmdId in model_keys:
            value = value.get(cmdId)
            if 2 == cmdId:    # Issue the frequency of regular reporting.
                print("Ctemporal frequency："+ str(value)) 
            elif 3 == cmdId:    # Issue on/off status.
                if  False == value:   # Close
                    print("Turn off the aromatherapy machine") 
                elif True == value:   # Open
                    print("Turn on the aromatherapy machine") 
            elif 5 == cmdId:    # Call a service.                     
                if  1 == value[4]:   # Working Mode 1.
                    print("Model 1") 
                elif 2 == value[4]:   # Working Mode 2.
                    print("Model 2") 
                elif 3 == value[4]:   # Working Mode 3.
                    print("Model 3") 
            else :
                pass

    @staticmethod
    def App_cmdReadTslCb(ids, pkgId):
        print('readTsl:', ids, pkgId)
        for id in ids:
            if 1 == id:
                Qth.ackTsl(1, {1: 180.25}, pkgId)
            elif 2 == id:
                Qth.ackTsl(1, {2: 30}, pkgId)  
            elif 3 == id:
                Qth.ackTsl(1, {3: True}, pkgId)
            else :
                pass

    @staticmethod
    def App_cmdRecvTslServerCb(serverId, value, pkgId):
        print('recvTslServer:', serverId, value, pkgId)
        Qth.ackTslServer(1, serverId, value, pkgId)

    @staticmethod
    def App_otaPlanCb(plans):
        print('otaPlan:', plans)
        Qth.otaAction(1)

    @staticmethod
    def App_fotaResultCb(comp_no, result):
        print('fotaResult:', comp_no, result)

def Qth_tslSend():
    while True:
        # Check the connection status between the device and Developer Center.
        if Qth.state():
            Qth.sendTsl(1, {1: 180.25})   # User task: reporting the remaining content of essential oil to Developer Center every 30 seconds.  
        utime.sleep(30)
        print('Qth_tslSend')

if __name__ == '__main__':
    Quecthing()
    _thread.start_new_thread(Qth_tslSend, ())
```

