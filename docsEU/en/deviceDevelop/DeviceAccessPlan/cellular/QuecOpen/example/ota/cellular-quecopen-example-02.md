# SOTA Upgrade Example

## **Introduction**

SOTA upgrade of QuecThing generally refers to the process of writing new firmware into external MCU and replacing the original firmware. In all upgrade modes, you need to upload the firmware package to Developer Center, and the device obtains the firmware package from Developer Center to realize upgrade on the air. Finally, MCU receives the upgrade package and writes it into the local flash memory to realize firmware upgrade. This sections explains how to perform a SOTA upgrade in QuecOpen solution.

## **Related APIs**

|          Function           | Description                                       |
| :-------------------------: | :------------------------------------------------ |
|    Ql_iotCmdOtaRequest()    | Requests OTA upgrade plan from Developer Center.  |
|    Ql_iotCmdOtaAction()     | Configures OTA upgrade operations.                |
| Ql_iotCmdOtaMcuFWDataRead() | Reads firmware data stored in the device.         |
| Ql_iotConfigSetMcuVersion() | Sets MCU ID and the corresponding version number. |
| Ql_iotConfigGetMcuVersion() | Gets MCU ID and the corresponding version number. |

Note: See [OTA Upgrade API](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-05) and [Product Configuration API](/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-02) for details.

## **Procedure**

### **1. Log in to Developer Center**

Log in to <a href="https://core.acceleronix.io"  target="_blank">Developer Center</a>. If you don't have an account, click <a href="https://core.acceleronix.io/registerType" target="_blank">Register Now</a> to register.

### **2. Create a Product** 

Creating a product is the first step in the product development. A product is an abstract description of a class of devices defined by Developer Center. A product is used to manage devices of the same category. For example, if you have an aromatherapy diffuser with LTE networking capability and you need to connect the aromatherapy diffuser to Developer Center to monitor it, you can define it as a product "Smart Aromatherapy Diffuser".

### **3. OTA Upgrade Operations**

#### **a. Add a Version Package**

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/SOTA/03-2-1.png">
  <img src="/en/deviceDevelop/develop/OTA/SOTA/03-2-1.png" width="500" alt="img">
</a>

- **Version Package Name**: Version package name.
- **Component Type**: Module firmware or MCU firmware.
  - Module firmware upgrade (FOTA): Write the new firmware to IoT platform and software solution module.
  - MCU firmware upgrade (SOTA): Download the new software package to the external MCU through Quectel module.
- **Version Package Type**: Full Package or Delta Package.
  - Delta Package is for upgrading the specified original version, i.e., for minor feature upgrading or bug fixing.
  - Full Package is not for a specified source version, and all devices can be upgraded.
- **Source Version**: Version of the source firmware package. This item is displayed if "Delta Package" is selected, but not the "Full Package". (Developer Center determines whether the version number in the device information reported when the device connects to Developer Center is consistent with this parameter. If it is consistent, Developer Center issues the upgrade information.)
- **Target Version**: New version number of the firmware package. (Once the device is upgraded, it needs to report the upgraded version number to Developer Center. Developer Center will check whether the version number reported by the device is consistent with this parameter. If it is consistent, the upgrade is successful.)
- **Upload File**: The file format should be .bin/.zip/.rar/.pack/.mini_1/.mini_2/.py/.tar/.tar.gz/.s19/.bin_1/.bin_2. Up to 5 files are supported and a single file size cannot exceed 100 MB.
- **Remarks**: Information describing the uploaded firmware version.

#### **b. Verify Firmware Package (Optional)**

Firmware verification is for ensuring the security and availability of the firmware to be mass upgraded to minimize the upgrade risk in case of unexpected losses. Before mass upgrading devices, you may verify a single device’s firmware and perform the OTA upgrade.

__i.__ Select the version package to be verified and click "__Firmware Verification__".

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/SOTA/03-2-2.png">![img](/en/deviceDevelop/develop/OTA/SOTA/03-2-2.png)</a>

__ii.__ Select the device to be verified, enter the component identifier to be verified and then submit the verification.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/SOTA/03-2-3.png">
  <img src="/en/deviceDevelop/develop/OTA/SOTA/03-2-3.png" width="500" alt="img">
</a>

__iii.__ Click "__Details__" of the version package to view the "Verification Details".

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/SOTA/03-2-4.png">![img](/en/deviceDevelop/develop/OTA/SOTA/03-2-4.png)</a>

#### **c. Create an Upgrade Plan**

An upgrade plan should be created or selected from existing plans before a device upgrade. The plan contains device(s) to be upgraded, upgrade time, components configurations and etc.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/SOTA/03-2-5.png">![img](/en/deviceDevelop/develop/OTA/SOTA/03-2-5.png)</a>


**i. Fill in Basic Information** 

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/SOTA/03-2-6.png">
  <img src="/en/deviceDevelop/develop/OTA/SOTA/03-2-6.png" width="600" alt="img">
</a>

- **Plan Name**: Plan name.
- **Product to Be Upgraded**: The product which needs upgrading.

- **Set Blacklist and Whitelist**: All devices under the product will be upgraded if no whitelist or blacklist is set. The blacklist has a higher priority than the whitelist if both whitelist and blacklist are set.
  - **Whitelist**: Only the device(s) on the whitelist can be upgraded.
  - **Blacklist**: The device(s) in the blacklist cannot be upgraded.

- __Time Zone__ ：A required parameter. Developer Center will only push the upgrade plan during the push period in this time zone.

- __Push Period__ ：An optional parameter. Configure the period of Developer Center automatically pushing the upgrade plan.
- __Upgrade Mode__ ：

  * __Silent Upgrade__: Upgrade is automatically completed by the application, without requiring any user confirmation. The device will be upgraded and restarted in the new version once it is opened again.

  * __Manual Upgrade__: You need to enter the "Device Control" page, check and confirm the firmware upgrade on the "Device Details" page. 

**ii. Formulate Upgrade Strategy**

During the firmware upgrade, it is inevitable that the upgrade fails due to a poor upgrade environment. To avoid this situation, you need to formulate an upgrade strategy to reduce the probability of upgrade failure. Click **Custom** next to the "Upgrade Strategy" to configure the upgrade strategy in the pop-up window. 

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/SOTA/03-2-7.png">
  <img src="/en/deviceDevelop/develop/OTA/SOTA/03-2-7.png" width="450" alt="img">
</a>

**iii. Add Upgrade Component**

The upgrade component is a collection of one or more components created by the user. It is used to select and plan the product components that need to be upgraded when you create the upgrade plan, Component identifier must be unique.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/SOTA/03-2-8.png">
  <img src="/en/deviceDevelop/develop/OTA/SOTA/03-2-8.png" width="450" alt="img">
</a>

**iv.Configure Upgrade Text**

Upgrade text configuration is required in manual upgrades but can be omitted in silent upgrades. You must configure Chinese and English upgrade texts, and the texts in other languages are optional.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/SOTA/03-2-12.png">
  <img src="/en/deviceDevelop/develop/OTA/SOTA/03-2-12.png" width="700" alt="img">
</a>


**v. Activate Upgrade Plan**


After completing the above steps of **Add a Version Package** and **Create an Upgrade Plan**, you can click "**Activate Plan**" in the lower left corner to activate the configured plan. Then Developer Center will execute the upgrade task and distribute the selected target version firmware to the target devices.

<span style="color:#999AAA">Note: The activated upgrade tasks cannot be deleted</span>

#### **d. Initialize the Device and Connect It to Developer Center**

To establish device management and OTA upgrade, initialize the device and connect it to Developer Center. This connection needs to be safe and stable to ensure communication between the device and Developer Center.

```c
/* Initialize QuecThing SDK */
Ql_iotInit();
/* Register event callback function */
Ql_iotConfigSetEventCB(Ql_iotEventCB);
/* Access Developer Center */
Ql_iotConfigSetConnmode(1);
```

<span style="color:#999AAA">Note: The device connected to Developer Center over MQTT protocol will be automatically created to Developer Center.</span>

#### **e. Configure MCU Version Number**

```c
/* Configure the external MCU ID and version number (optional). If there is no external MCU, these parameters are not required. */
Ql_iotConfigSetMcuVersion("STM32","1_0_0");
```

#### **f. Request an OTA Upgrade**

<span style="color:#999AAA">Precondition: Before requesting an OTA upgrade, make sure that the device is connected to Developer Center. </span>

1) Once the upgrade plan is made and activated, the device can request an OTA upgrade by calling **Ql_iotCmdOtaRequest()**.<br>
2) Ec. The device does not need to send an OTA upgrade request to Developer Center and Develop Center verifies the upgrade plan and issues the plan to the device every 10 minutes, such as 10:00 or 10:10.

<span style="color:#999AAA">Note: This function is supported in QuecThing SDK version 2.9.2 and above.</span>

- Sample code

  ```c
  /* Request an OTA upgrade plan from Developer Center. */
  Ql_iotCmdOtaRequest(0);
  ```

#### **g. Check Upgrade Result**

After sending the OTA request command, if the device has been included in the product in the upgrade plan, the device will automatically call **Ql_iotEventCB** and report the event **(7,10700)**. The event include component identifier + source version + target version + minimum power + minimum signal strength + firmware package size. If the device meets the upgrade strategy requirements, it will call **Ql_iotCmdOtaAction(1)** to confirm the upgrade.

- Issue the upgrade plan. The reported content is shown as follows (including component identifier, source version, target version, minimum power required for OTA upgrade, minimum signal strength in OTA upgrade and disk space required for OTA upgrade).

  ```c
  void (*eventCB)(7,10700,"<componentNo>,<sourceVersion>,<targetVersion>,<batteryLimit>,<minSignalIntensity>,<useSpace>");
  ```

  Sample code of event callback function:

  ```c
  void Ql_iotEventCB(quint32_t event, qint32_t errcode, const void *value, quint32_t valLen)
  {
      switch (event)
      {
      	/* OTA upgrade event */
  	    case QIOT_ATEVENT_TYPE_OTA:
  	    {
  	        switch (errcode)
  	        {
  		        /* Detect an upgrade plan */
  		        case QIOT_OTA_TASK_NOTIFY:
  		        {
  		            char *words[100];
  		            /* Disassemble the strings */
  		            quint32_t count = Quos_stringSplit((char *)value,HAL_STRLEN(value), words, sizeof(words) / sizeof(words[0]),",", FALSE);
  		            printf("recv ota task\r\n");
  		            if(count < 6)
  		            {
  		                break;
  		            }
  		            /* Ensure that the device meets the requirements for upgrade strategy */
  		            printf("componentNo:%s,sourceVersion:%s,targetVersion:%s,batteryLimit:%s,minSignalIntensity:%s,minSignalIntensity:%s\r\n",
  		                words[0],words[1],words[2],words[3],words[4],words[5]);
  		            /* Device starts upgrading*/
  		            Ql_iotCmdOtaAction(1);
  		            break;
  		        }
  	        }
          }
  	}
  }
  ```

  

#### **h. Device Upgrade Process Feedback**

A successful SOTA upgrade involves 5 steps: **Download starts**, **Download in progress**, **Successful download**, **Upgrade in progress** and **Successful upgrade**. Each upgrade step calls **Ql_iotEventCB** and reports a corresponding event. The SOTA upgrade process feedbacks are as follows.



- **The device starts to download firmware package.** (The event includes component identifier, firmware package size and MD5 value of the firmware package.)

  ```c
  void (*eventCB)(7,10701,"<componentNo>,length,<MD5>);
  ```

- **Firmware package is being downloaded.**

  ```c
  void (*eventCB)(7,10702,NULL,0);
  ```

- **The firmware package is downloaded successfully.** (The event includes component identifier, firmware package size, start address of the current downloaded block and size of the current file block.）

  ```c
  void (*eventCB)(7,10703,"<componentNo>","<length>,<startaddr>,<piece_length>");
  ```

- **MCU firmware is being upgraded in progress.**

    After receiving the upgrade package, the MCU should run a pre-written MCU program to write the firmware package into its memory, to complete the firmware upgrade.

  **i. MCU reads firmware package**

  When the module receives the upgrade firmware, it needs to call **Ql_iotCmdOtaMcuFWDataRead()** to read the firmware package, and then transfer the package to the MCU through a serial port or other connection methods.

  ```c
  /* The MCU reads the firmware package by the API. */
  void Ql_iotEventCB(quint32_t event, qint32_t errcode, const void *value, quint32_t valLen)
  {
      switch (event)
      {
      	/* OTA upgrade event */
  	    case QIOT_ATEVENT_TYPE_OTA:
  	    {
  	        switch (errcode)
  	        {
  		        /* Successful download */
  		        case QIOT_OTA_DOWNLOADED:
  		        {
  		            char *words[100];
  		            quint32_t count = Quos_stringSplit((char *)value,HAL_STRLEN(value), words, sizeof(words) / sizeof(words[0]),",", FALSE);
  		            printf("ota download complete\r\n");
  		            if(count < 4)
  		            {
  		                break;
  		            }			
  		            printf("componentNo:%s,length:%s,startaddr:%s,piece_length:%s\r\n",words[0],words[1],words[2],words[3]);            
  		            /* If the SOTA upgrade is successful, the MCU reads the firmware package by the API. */
  		            if(strcmp(QIOT_MCU_COMPONENT_NO,Quos_stringRemoveMarks(words[0])) == 0)
  		            {
  		                quint8_t readBuf[1024]={0};
  		                for(int i=0;(i*1024)<words[3];i++)
  		                {
  			               	 if(Ql_iotCmdOtaMcuFWDataRead(i*1024,readBuf,sizeof(readBuf))>0)
  			               	 {
  			               		 printf("sota read file...ret:%d\r\n",ret);
  			               	 }
  			               	 else
  			               	 {
  			               	   printf("sota read file error");
  			               	   break;
  							 }
  		               	}			               
  		            }
  		            break;
  		        }
  	        }
          }
  	}
  }
  ```

  **ii. Inform Developer Center that the MCU is in upgrade status**

  Before the MCU firmware is upgraded, the module should actively call **Ql_iotCmdOtaAction(3)** to inform Developer Center that the MCU is in upgrade status.

  ```c
    /* Inform Developer Center that the MCU is in upgrade status. */
    Ql_iotCmdOtaAction(3);
  ```

  **iii. Configure new MCU version**

  After the MCU upgrade is completed, the module should set the new MCU version number and report it to Developer Center.

  ```c
  Ql_iotConfigSetMcuVersion("STM32","2_0_0");
  ```

- **The MCU firmware is upgraded successfully.** (After reporting new MCU version number to Developer Center, the event that the firmware is upgraded successfully will be returned.

  ```c
  void (*eventCB)(7,10705,NULL,0);
  ```

### **4. Monitor Upgrade**

Click "__Upgrade Monitoring__" in the upgrade plan list. In the device upgrade list, you can view the upgrade status of all devices in this plan;

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/SOTA/03-2-9.png">![img](/en/deviceDevelop/develop/OTA/SOTA/03-2-9.png)</a>


Click "__Component Details__" to view the upgrade logs as shown in the following figure;

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/SOTA/03-2-10.png">![img](/en/deviceDevelop/develop/OTA/SOTA/03-2-10.png)</a>

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/SOTA/03-2-11.png">![img](/en/deviceDevelop/develop/OTA/SOTA/03-2-11.png)</a>

