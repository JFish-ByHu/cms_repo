# FOTA Upgrade Example

## **Introduction**

OTA upgrade of QuecThing is the process of writing new firmware into the 	IoT platform and software solution module and updating the original firmware. In any upgrade mode, the new firmware package must be uploaded to Developer Center, and the device will retrieve it from Developer Center to complete the OTA upgrade. FOTA upgrade can be performed with the use of AT commands, which are covered in this section.  

## **Related AT Commands**

|  AT Command   |           Description            |
| :-----------: | :------------------------------: |
| AT+QIOTOTAREQ |     Request OTA Upgrade Plan     |
| AT+QIOTUPDATE | Configure OTA Upgrade Operations |

Note: See [OTA Upgrade Commands](/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-05) for details.



## **Procedure**

### **1. Log in to Developer Center**

Log in to <a href="https://core.acceleronix.io"  target="_blank">Developer Center</a>. If you don't have an account click <a href="https://core.acceleronix.io/registerType" target="_blank">Register Now</a> to register.

### **2. Create a Product** 

Creating a product is the first step in product development process. A product is an abstract description of a class of devices defined by Developer Center,which is used to manage devices of the same category. For example, if you have an aromatherapy diffuser with LTE networking capability and you need to connect the aromatherapy diffuser to Developer Center to monitor it, you can define it as a product "Smart Aromatherapy Diffuser".

### **3. OTA Upgrade Operations**

#### **a. Add a Version Package**

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/cellular_FOTA/03-1-1.png">![img](/en/deviceDevelop/develop/OTA/cellular_FOTA/03-1-1.png)</a>

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

__i.__ Select the version package to be verified and click "Firmware Verification".

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/cellular_FOTA/03-1-2.png">![img](/en/deviceDevelop/develop/OTA/cellular_FOTA/03-1-2.png)</a>

__ii.__ Select the device to be verified, enter the component identifier to be verified and then submit the verification.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/cellular_FOTA/03-1-3.png">![img](/en/deviceDevelop/develop/OTA/cellular_FOTA/03-1-3.png)</a>

__iii.__ Click "Details" of the version package to view the "Verification Details".

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/cellular_FOTA/03-1-4.png">![img](/en/deviceDevelop/develop/OTA/cellular_FOTA/03-1-4.png)</a>

#### **c. Create an Upgrade Plan**

An upgrade plan should be created or selected from existing plans before a device upgrade. The plan contains device(s) to be upgraded, upgrade time, component configurations and etc.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/cellular_FOTA/03-1-5.png">![img](/en/deviceDevelop/develop/OTA/cellular_FOTA/03-1-5.png)</a>

**i. Fill in Basic Information** 

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/cellular_FOTA/03-1-6.png">![img](/en/deviceDevelop/develop/OTA/cellular_FOTA/03-1-6.png)</a>

- **Plan Name**: Plan name.

- **Product to Be Upgraded**: The product that needs upgrading.

- **Set Blacklist and Whitelist**: All devices under the product will be upgraded if no whitelist or blacklist is set. The blacklist has a higher priority than the whitelist if both whitelist and blacklist are set.
  - **Whitelist**: Only the device(s) on the whitelist can be upgraded.
  - **Blacklist**: The device(s) in the blacklist cannot be upgraded.
  
- __Time Zone__ ：A required parameter. Developer Center will only push the upgrade plan during the push period in this time zone.

- __Push Period__ ：An optional parameter. Configure the period of Developer Center automatically pushing the upgrade plan.
- 
- __Upgrade Mode__ ：

  * __Silent Upgrade__: Upgrade is automatically completed by the application, without requiring any user confirmation. The device will be upgraded and restarted in the new version once it is opened again.

  * __Manual Upgrade__: You need to enter the "Device Control" page, check and confirm the firmware upgrade on the "Device Details" page.

**ii. Formulate Upgrade Strategy**

Firmware upgrade failure due to a poor upgrade environment is inevitable. To reduce the probability of upgrade failure, you must formulate an upgrade strategy. Click **Custom** next to the "Upgrade Strategy" to configure the upgrade strategy in the pop-up window.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/cellular_FOTA/03-1-7.png">![img](/en/deviceDevelop/develop/OTA/cellular_FOTA/03-1-7.png)</a>

**iii. Add Upgrade Component**

The upgrade component is a collection of one or more components created by the user. It is used to select and plan the product components that need to be upgraded when you create the upgrade plan. Component identifiers must be unique.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/cellular_FOTA/03-1-8.png">![img](/en/deviceDevelop/develop/OTA/cellular_FOTA/03-1-8.png)</a>

**iv.Configure Upgrade Text**

Upgrade text configuration is required in manual upgrades but can be omitted in silent upgrades. You must configure Chinese and English upgrade texts, and the texts in other languages are optional.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/cellular_FOTA/03-1-12.png">![img](/en/deviceDevelop/develop/OTA/cellular_FOTA/03-1-12.png)</a>


**v. Activate Upgrade Plan**

After completing the above steps of **Add a Version Package** and **Create an Upgrade Plan**, you can click **Activate Plan** button in the lower left corner to activate the configured plan. Then Developer Center will execute the upgrade task and distribute the selected target firmware version to target devices.

<span style="color:#999AAA">Note: The activated upgrade tasks cannot be deleted.</span>

#### **d. Connect Device to Developer Center**

MCU can configure connection mode with **AT+QIOTREG=<reg_mode>**. PK and PS must be configured before the device accesses Developer Center, otherwise an **ERROR** will be returned. After the command is sent, when the module responds with the following return value, it indicates that the device has successfully connected to Developer Center.



```c
[TX]AT+QIOTREG=1

[RX]AT+QIOTREG=1

[RX]OK 

[RX]+QIOTEVT: 2,10200 
[RX]+QIOTEVT: 3,10200
```

#### e. Request an OTA Upgrade

1) Once the upgrade plan is made and activated, the device must send **AT+QIOTOTAREQ** to request an OTA upgrade. After sending the OTA request command, if the device is included in the upgrade plan product, it will print the event, including component identifier + source version + target version + minimum power + minimum signal strength + firmware package size. If the device meets the upgrade strategy requirements, it will proceed to the next step.<br>

2) Ec. The device does not need to send an OTA upgrade request to Developer Center and Develop Center verifies the upgrade plan and issues the plan to the device every 10 minutes, such as 10:00 or 10:10.

```c
[TX]AT+QIOTOTAREQ=1

[RX]AT+QIOTOTAREQ=1

[RX]OK

[RX]
+QIOTEVT: 7,10700,"app","FC41DAAR12A01_QTH","FC41DAAR12A03_QTH",30,-113,698000
```



#### **f. Check Upgrade Result**

Send **AT+QIOTUPDATE** to check the upgrade result.

```c
[TX]AT+QIOTUPDATE=1

[RX]AT+QIOTUPDATE=1

[RX]OK
```

<span style='color:#999AAA'>Note: After confirming the device has been upgraded, you can view the execution results of batch tasks in the software upgrade task list. Click **View** for the corresponding task to view the upgrade results of each device on the **Execution Details** page.</span>

#### **g. Device Upgrade Process Feedback**

A successful FOTA upgrade involves 5 steps: **Download starts**, **Download in progress**, **Successful download**, **Upgrade in progress** and **Successful upgrade**. If the upgrade status is "Upgrade in progress", the status details display the progress as a percentage. The FOTA upgrade process feedbacks are as follows.



- Device starts to download the firmware package.

  ```c
  [RX]+QIOTEVT: 7,10701
  ```

- Firmware package is being downloaded.

  ```c
  [RX]+QIOTEVT: 7,10702
  ```

- Firmware package is downloaded successfully.

  ```c
  [RX]+QIOTEVT: 7,10703
  ```

- Firmware update in progress.

  ```c
  [RX]+QIOTEVT: 7,10704
  ```

- Firmware upgrade successful. (After the firmware is upgraded, the module will automatically reboot. If the automatic connection is not configured, you need to manually connect the device to Developer Center.)

  ```c
  [RX]+QIOTEVT: 7,10705
  ```

  After the device upgrade is completed, the device needs to restart, so the upgrade result will be automatically reported when the device accesses Developer Center again.

### **4. Monitor Upgrade**

Click "__Upgrade Monitoring__" in the upgrade plan list. In the device upgrade list, you can view the upgrade status of all devices in this plan.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/cellular_FOTA/03-1-9.png">![img](/en/deviceDevelop/develop/OTA/cellular_FOTA/03-1-9.png)</a>

Click "__Component Details__" to view the upgrade logs as shown in the following figure;

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/cellular_FOTA/03-1-10.png">![img](/en/deviceDevelop/develop/OTA/cellular_FOTA/03-1-10.png)</a>

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/cellular_FOTA/03-1-11.png">![img](/en/deviceDevelop/develop/OTA/cellular_FOTA/03-1-11.png)</a>
