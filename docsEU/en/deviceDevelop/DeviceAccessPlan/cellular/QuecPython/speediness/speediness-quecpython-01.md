# Development Environment Configuration

## **Introduction**

__QuecPython SDK__ is realized based on the __Micro Python__ extension, which is specially used for embedded development in __Developer Center__ and is suitable for developers to independently develop business logic to access  __Developer Center__. __QuecPython SDK__ provides encapsulation of basic businesses such as __device activation__, __business data uplink and downlink__ and __OTA upgrade__. __SDK__ does not depend on the specific device platform and operating system, but only needs Developer Center and system to support __MQTT__ protocol stack and provide necessary system-dependent interfaces for SDK to complete the connection.


<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-01.png">![img](/en/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-01.png)</a>

## **Development Environment Configuration**
### __1. Install Driver__

__1)__ Enter <a href="https://core.acceleronix.io/download?menuCode=MODULE_DEVL&resourceType=M" target="_blank">Download Center-Driver</a> to download the driver corresponding to the module model.

__2) Check__

Enter __This PC__ >__Manage__ >__Device Manager__ to view __Port (COM and LPT)__ and check whether __AT Port__ and __DIAG Port__ has already existed.

### __2. Download QPYcom__

The platform provides __QPYcom__, a graphical tool based on Windows interface for developers to help you __develop and debug__ devices more efficiently. Enter __<a href="https://core.acceleronix.io/download?menuCode=DEBUG_UTIL&resourceType=C" target="_blank">Download Center-Debugging Tool</a>__ and download __QPYcom__ on the __Debugging Tool__ page.

### __3. Download QuecThing SDK Scripts__

<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-16.png">
  <img src="/en/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-16.png" width="700" alt="img">
</a>

__①__ Click "**Create**" in the lower left corner of the "Download" page.<br>
__②__ Right-click the __*usr*__ folder and click "__Add folder__" to create a folder named "__Qth__".<br>
__③__ Right-click the __*Qth*__ folder and click "**Add file**" to import all QuecThing scripts to the __*Qth*__ folder.<br>
__④__ Click **the drop-down button** in the lower right corner and select "**Download script**" in the drop-down list.<br>
__⑤__ Click "__Download script__", and QPYcom starts downloading the scripts.

 __Check the Result of Downloading QuecThing SDK Scripts__

Switch to the "File" page and check whether the downloaded QuecThing SDK scripts are in the */usr/Qth* directory. If the downloaded QuecThing SDK scripts have been in the */usr/Qth* directory., it indicates the scripts have been downloaded successfully.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-17.png">
  <img src="/en/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-17.png" width="700" alt="img">
</a>