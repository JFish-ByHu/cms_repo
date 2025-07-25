# Device Binding On Wonderfree

If the device is a cellular product and there is a matching App for end users, the QR code of the device must be generated for device binding purposes.

## **Generate a QR Code**

You can click "Generate SN" on “Device Management"->"Device Maintenance"->“Pre-import Management” page to obtain the SNs and QR codes issued by Developer Center in batches.

<a data-fancybox title="img" href="/en/massProduct/image2022-3-14_15-17-35.jpg?version=1&modificationDate=1647241633000&api=v2">![img](/en/massProduct/image2022-3-14_15-17-35.jpg?version=1&modificationDate=1647241633000&api=v2)</a>

Click "**Generate SN**" to bring up the following window, where you can fill in the number of SNs as required.

<a data-fancybox title="img" href="/en/massProduct/image2022-3-14_15-17-59.png?version=1&modificationDate=1647241656000&api=v2">![img](/en/massProduct/image2022-3-14_15-17-59.png?version=1&modificationDate=1647241656000&api=v2)</a>

Once the SNs and the device QR codes have been generated, the SN list and the device QR code images are provided to users in the form of a compressed package that can be downloaded from Developer Center. Once a device QR code is bound to the module IMEI, the App user can bind the App to the device and control the device through the device QR code.

<a data-fancybox title="img" href="/en/massProduct/image2022-3-15_15-41-20.png?version=1&modificationDate=1647329449000&api=v2">![img](/en/massProduct/image2022-3-15_15-41-20.png?version=1&modificationDate=1647329449000&api=v2)</a>

### **Import Binding Information**

When a device is produced, you need to record the relationship between the module IMEI (DK) and the device QR code (SN), and organize the relationship file according to the device import template.

To obtain the device import template, click "Add Device > Template" to download it.

<a data-fancybox title="img" href="/en/massProduct/image2022-3-14_15-19-56.png?version=1&modificationDate=1647241774000&api=v2">
  <img src="/en/massProduct/image2022-3-14_15-19-56.png?version=1&modificationDate=1647241774000&api=v2" width="500" alt="img">
</a>

To import biding information, go to "Debug Device" and click "Add a Device". In the pop-up window, check "Add Devices in Batches", select the product which the device belongs to and the relationship file of module IMEI and device QR code. Click "Confirm" to upload the file to Developer Center. Developer Center will record the relationship between module IMEI and device QR code.

<a data-fancybox title="img" href="/en/massProduct/image2022-3-14_15-19-40.png?version=1&modificationDate=1647241758000&api=v2">
  <img src="/en/massProduct/image2022-3-14_15-19-40.png?version=1&modificationDate=1647241758000&api=v2" width="500" alt="img">
</a>

After the relationship file is imported, App users can bind their Apps to the device by scanning the QR code of the device.


## __Device Binding On Wonderfree__

### Precondition：
Download Wonderfree and register an account.
### Procedure:
1. Log in to Wonderfree with your account. On the home page, click "**⊕**" in the upper right corner and select "Scan QR Code" in the pop-up.
   
<br>
<a data-fancybox title="img" href="/en/deviceDevelop/develop/app/Example-app-1.png">
<img src="/en/deviceDevelop/develop/app/Example-app-1.png" style="width: 30%" /></a>

2. Scan the QR code generated on Developer Center, then the device SN and a device name box will be displayed on Wonderfree. Enter the __device name__ and click "__Confirm__", and you can see the bound device on the "Home" page.

<br>
<a data-fancybox title="img" href="/en/deviceDevelop/develop/app/Example-app-2.png">
<img src="/en/deviceDevelop/develop/app/Example-app-2.png" style="width: 30%" /></a>

