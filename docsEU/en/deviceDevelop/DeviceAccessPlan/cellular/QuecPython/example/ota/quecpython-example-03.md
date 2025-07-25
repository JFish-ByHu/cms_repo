# SOTA Upgrade Example

## __Introduction__
SOTA upgrade of QuecThing generally refers to the process of writing new firmware into the external MCU and replacing the original firmware. In all upgrade modes, you need to upload the firmware package to Developer Center, and the device obtains the firmware package from Developer Center to realize the upgrade on the air. Finally, MCU receives the upgrade package and writes it into the local flash memory to realize a firmware upgrade. This section explains how to perform a SOTA upgrade in QuecPython solution.


## __Related API__

|     Function     | Description                                       |
| :--------------: | :------------------------------------------------ |
| Qth.otaRequest() | Requests OTA upgrade plans from Developer Center. |
| Qth.setMcuVer()  | Sets the MUC version information.                 |

<span style='color:#999AAA'>Note: See [OTA Upgrade API](/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-06) and [Product Configuration API](/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-02) for details.</span>


## __Procedure__
### __1. Log in to Developer Center__
Log in to <a href="https://core.acceleronix.io"  target="_blank">Developer Center</a>. If you don't have an account, click <a href="https://core.acceleronix.io/registerType" target="_blank">Register Now</a> to register.

### __2. Create a Product__
Creating a product is the first step in product development. A product is an abstract description of a class of devices defined by Developer Center. A product is used to manage devices of the same category. For example, if you have an aromatherapy diffuser with LTE networking capability and you need to connect the aromatherapy diffuser to Developer Center to monitor it, you can define it as a product "Smart Aromatherapy Diffuser".

### __3. OTA Upgrade Operations__
#### **a. Add a Version Package**

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/SOTA/03-2-1.png">
  <img src="/en/deviceDevelop/develop/OTA/SOTA/03-2-1.png" width="450" alt="img">
</a>

* __Version Package Name__: Version package name.
* __Component Type__: Module firmware or MCU firmware.
  * Module firmware upgrade (FOTA): Write the new firmware to the Quectel module.
  * MCU firmware upgrade (SOTA): Download the new software package to the external MCU through the Quectel module.
* __Version Package Type__: Full Package or Delta Package.
  * Delta Package is for upgrading the specified original version, i.e., for minor feature upgrading or bug fixing.
  * Full Package is not for a specified source version, and all devices can be upgraded.
* __Source Version__: Version of the source firmware package. This item is displayed if "Delta Package" is selected, but not for the "Full Package". (Developer Center determines whether the version number in the device information reported when the device connects to Developer Center is consistent with this parameter. If it is consistent, Developer Center issues the upgrade information.)
* **Target Version**: New version number of the firmware package. (Once the device is upgraded, it needs to report the upgraded version number to Developer Center. Developer Center will check whether the version number reported by the device is consistent with this parameter. If it is consistent, the upgrade is successful.)
* **Upload File**: The file format should be .bin/.zip/.rar/.pack/.mini_1/.mini_2/.py/.tar/.tar.gz/.s19/.bin_1/.bin_2. Up to 5 files are supported and a single file size cannot exceed 100 MB.
* **Remarks**: Information describing the uploaded firmware version.


#### **b. Verify Firmware Package (Optional)**

Firmware verification is for ensuring the security and availability of the firmware to be mass upgraded to minimize the upgrade risk in case of unexpected losses. Before mass upgrading devices, you may verify a single device’s firmware and perform the OTA upgrade.

__i.__ Select the version package to be verified and click "**Verify Firmware**".

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/SOTA/03-2-2.png">![img](/en/deviceDevelop/develop/OTA/SOTA/03-2-2.png)</a>

__ii.__ Select the device to be verified, enter the component identifier to be verified and then submit the verification.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/SOTA/03-2-3.png">
  <img src="/en/deviceDevelop/develop/OTA/SOTA/03-2-3.png" width="500" alt="img">
</a>

__iii.__ Click "**Details**" of the version package to view the "Verification Details".

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/SOTA/03-2-4.png">![img](/en/deviceDevelop/develop/OTA/SOTA/03-2-4.png)</a>

#### **c. Create an Upgrade Plan**

An upgrade plan should be created or selected from existing plans before a device upgrade. The plan contains device(s) to be upgraded, upgrade time, components configurations and etc.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/SOTA/03-2-5.png">![img](/en/deviceDevelop/develop/OTA/SOTA/03-2-5.png)</a>

__i. Fill in Basic Information__

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/SOTA/03-2-6.png">
  <img src="/en/deviceDevelop/develop/OTA/SOTA/03-2-6.png" width="600" alt="img">
</a>

* **Plan Name**: Plan name.
* **Product to Be Upgraded**: The product that needs upgrading.

* **Set Blacklist and Whitelist**: All devices under the product will be upgraded if no whitelist or blacklist is set. The blacklist has a higher priority than the whitelist if both the whitelist and blacklist are set.
  - **Whitelist**: Only the device(s) in the whitelist can be upgraded.
  - **Blacklist**: The device(s) in the blacklist cannot be upgraded.

* __Time Zone__: A required parameter. Developer Center will only push the upgrade plan during the push period in this time zone.

* __Push Period__: An optional parameter. The period of Developer Center automatically pushing the upgrade plan.
* __Upgrade Mode__:

  * __Silent Upgrade__: Upgrade is automatically completed by the application, without requiring any user confirmation. The device will be upgraded and restarted in the new version once it is opened again.

  * __Manual Upgrade__: You need to enter the "Device Control" page, check and confirm the firmware upgrade on the "Device Details" page. 

__ii. Formulate Upgrade Strategy__

During the firmware upgrade, it is inevitable that the upgrade fails due to a poor upgrade environment. To avoid this situation, you need to formulate an upgrade strategy to reduce the probability of upgrade failure. Click "**Custom**" next to the  "Upgrade Strategy" to configure the upgrade strategy in the pop-up window. 

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/SOTA/03-2-7.png">
  <img src="/en/deviceDevelop/develop/OTA/SOTA/03-2-7.png" width="500" alt="img">
</a>

__iii. Add Upgrade Component__

The upgrade component is a collection of one or more components created by the user. It is used to select and plan the product components that need to be upgraded when you create the upgrade plan. A component identifier must be unique.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/SOTA/03-2-8.png">
  <img src="/en/deviceDevelop/develop/OTA/SOTA/03-2-8.png" width="500" alt="img">
</a>

__iv. Configure Upgrade Text__

Upgrade text configuration is required in manual upgrades but can be omitted in silent upgrades. You must configure Chinese and English upgrade texts, and the texts in other languages are optional.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/SOTA/03-2-12.png">
  <img src="/en/deviceDevelop/develop/OTA/SOTA/03-2-12.png" width="500" alt="img">
</a>

__v. Activate Upgrade Plan__

After completing the above steps of **Add a Version Package** and **Create an Upgrade Plan**, you can click "**Activate Plan**" in the lower left corner to activate the configured plan. Then Developer Center will execute the upgrade task and distribute the selected target version firmware to the target devices.

<span style="color:#999AAA">Note: The activated upgrade tasks cannot be deleted.</span>

#### __d. Initialize the Device and Connect It to Developer Center__
To establish device management and OTA upgrade, initialize the device and connect it to Developer Center. This connection needs to be safe and stable to ensure communication between the device and Developer Center. 

```python
    Qth.init()
    Qth.setProductInfo('p111xt','V2VUei9ZVWt2SnpL')
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
    Qth.setMcuVer('STM32', '1_0_0', App_sotaInfoCb, App_sotaResultCb)
    Qth.start()
```
<span style="color:#999AAA">Note: The device connected to Developer Center over MQTT protocol will be automatically created on Developer Center.</span>

#### __e. Request an OTA Upgrade__

<span style="color:#999AAA">Precondition: Before a device requests an OTA upgrade, make sure that the device is connected to Developer Center.</span>

1）Once the upgrade plan is made and activated, the device can request an OTA upgrade by calling __Qth.otaRequest()__.<br>
2）The device does not need to send an OTA upgrade request to Developer Center and Develop Center verifies the upgrade plan and issues the plan to the device every 10 minutes, such as 10:00 or 10:10.

* Sample code
	```python
	# Request an OTA upgrade plan from Developer Center.
	Qth.otaRequest()
	```

#### __f. Device Confirms Upgrade__

Once the device requests an OTA upgrade plan, it will automatically call the callback function **otaPlanCb()** and report the OTA upgrade plan information to Developer Center if the device is included in the upgrade plan. The OTA upgrade plan information includes component identifier + source version + target version + minimum power + minimum signal strength + firmware package size. If the device meets the upgrade strategy requirements specified in the plan, it will accept the upgrade by calling __Qth.otaAction(1)__ or reject the upgrade by calling __Qth.otaAction(0)__.

* Issue the upgrade plan. The reported content is shown as follows (including component identifier, source version, target version, minimum power, minimum signal strength, and disk space required for OTA upgrade).

	Sample code of processing the event callback function:
	```python
	def App_otaPlanCb(plans):
        print('otaPlan:', plans)
        Qth.otaAction(1)
	```

#### __g. MCU Confirms Upgrade Mode__

Once the device accepts the upgrade, Developer Center will issue the firmware information and download URL. You can choose to download the firmware and send it to the MCU for upgrade.

* Issue the firmware information. The reported content is shown as follows (including component identifier, firmware version, MD5 value of the firmware, CRC32 value of the firmware, SHA256 value of the firmware, firmware download URL and firmware size).Sample code of processing the event callback function:

	```python
	  def App_sotaInfoCb(comp_no, version, url, md5, crc):
        print('sotaInfo:', comp_no, version, url, md5, crc)
  ```

#### __h. Device Upgrade Process Feedback__

A successful SOTA upgrade involves 3 steps: __receive upgrade plan__, __download in progress__ and __successful upgrade__. Each upgrade step triggers a corresponding event reported through the callback function. The events provide feedback on the progress of the SOTA upgrade process as follows:

* Upgrade the MCU version number (When the MCU upgrade is completed, the MCU version number needs to be updated and notified to the SDK).
	```python
    Qth.setMcuVer('STM32', '1_0_1', App_sotaInfoCb, App_sotaResultCb)
	```

* Firmware upgrade result

  ```python
  def App_sotaResultCb(comp_no, result):
    print('sotaResult:',comp_no, result)
  ```

### __4. Monitor Upgrade__

Click "__Upgrade Monitoring__" in the upgrade plan list. In the device upgrade list, you can view the upgrade status of all devices in this plan.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/SOTA/03-2-9.png">![img](/en/deviceDevelop/develop/OTA/SOTA/03-2-9.png)</a>

Click "__Component Details__" to view the upgrade logs as shown in the following figure.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/SOTA/03-2-10.png">![img](/en/deviceDevelop/develop/OTA/SOTA/03-2-10.png)</a>


<a data-fancybox title="img" href="/en/deviceDevelop/develop/OTA/SOTA/03-2-11.png">![img](/en/deviceDevelop/develop/OTA/SOTA/03-2-11.png)</a>



