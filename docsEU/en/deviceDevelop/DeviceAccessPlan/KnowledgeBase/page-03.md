## Steps to Capture Logs with CATStudio

This chapter introduces you to capture logs of Quectel modules by using CATStudio, and you can analyze the logs to find the problem.

## 1. Install the Driver
Double click to run __setup.exe__ and then keep clicking "**Next**" until the installation is successful. 

<a data-fancybox title="img" href="/en/deviceDevelop/KnowledgeBase/step1.png">![img](/en/deviceDevelop/KnowledgeBase/step1.png)</a>

Check whether there is a __DIAG Port__ in the port column of the computer "Device Manager" after installation. 

<a data-fancybox title="img" href="/en/deviceDevelop/KnowledgeBase/step2.png">![img](/en/deviceDevelop/KnowledgeBase/step2.png)</a>

### 2. Open CATStudio and Select "Online" (Capture Logs Online)
Double click to run __CATStudio.exe__ and select "**Generic Target Online**" in the opened window.

<a data-fancybox title="img" href="/en/deviceDevelop/KnowledgeBase/step3.png">![img](/en/deviceDevelop/KnowledgeBase/step3.png)</a>

### 3. Configure the Port of Log Capture
Click "**Device Communication**".

<a data-fancybox title="img" href="/en/deviceDevelop/KnowledgeBase/step4.png">![img](/en/deviceDevelop/KnowledgeBase/step4.png)</a>

Check "__Device1（Quectel USB DIAG Port）__" and then click "**Setting**". 

<a data-fancybox title="img" href="/en/deviceDevelop/KnowledgeBase/step5.png">![img](/en/deviceDevelop/KnowledgeBase/step5.png)</a>

Set the port to "__DIAG Port__" and click "**OK**". 

<a data-fancybox title="img" href="/en/deviceDevelop/KnowledgeBase/step6.png">![img](/en/deviceDevelop/KnowledgeBase/step6.png)</a>

Then click "__Logger__".

<a data-fancybox title="img" href="/en/deviceDevelop/KnowledgeBase/step7.png">![img](/en/deviceDevelop/KnowledgeBase/step7.png)</a>

Click "**Update**".

<a data-fancybox title="img" href="/en/deviceDevelop/KnowledgeBase/step8.png">![img](/en/deviceDevelop/KnowledgeBase/step8.png)</a>

In the pop-up window, check "__MDB__" first and then configure __DIAG.mdb__, __NVM.mdb__ and __TxDB.txt__, which are located in the __DBG__ directory of firmware package. After the three files are imported, click "__Import__" and wait for the file to be configured successfully. Click "__UpdateAll__" and then __Close__ the window.

<a data-fancybox title="img" href="/en/deviceDevelop/KnowledgeBase/step9.png">![img](/en/deviceDevelop/KnowledgeBase/step9.png)</a>

<a data-fancybox title="img" href="/en/deviceDevelop/KnowledgeBase/step10.png">![img](/en/deviceDevelop/KnowledgeBase/step10.png)</a>

<a data-fancybox title="img" href="/en/deviceDevelop/KnowledgeBase/step11.png">![img](/en/deviceDevelop/KnowledgeBase/step11.png)</a>

<a data-fancybox title="img" href="/en/deviceDevelop/KnowledgeBase/step12.png">![img](/en/deviceDevelop/KnowledgeBase/step12.png)</a>

### 4. Save the Log File
Click "**Log**" on the tool bar and then select "**Export Log-File**".

<a data-fancybox title="img" href="/en/deviceDevelop/KnowledgeBase/step13.png">![img](/en/deviceDevelop/KnowledgeBase/step13.png)</a>

Select the path to save the file in the pop-up window and click "**Output**".

<a data-fancybox title="img" href="/en/deviceDevelop/KnowledgeBase/step14.png">![img](/en/deviceDevelop/KnowledgeBase/step14.png)</a>

You can see the file of logs captured under the path.

<a data-fancybox title="img" href="/en/deviceDevelop/KnowledgeBase/step15.png">![img](/en/deviceDevelop/KnowledgeBase/step15.png)</a>

