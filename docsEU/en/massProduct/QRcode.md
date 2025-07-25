# Device QR Code

## **Background** 

> After a device is developed on the Developer Center, it is about to enter the mass production phase. If the device is a cellular product and there is a matching App for end users, the QR code of the device must be generated for device binding purposes. For device manufacturers, whether using the Acceleronix Wonderfree standard App or a custom App, they can add devices by scanning the QR code, which enhances the user experience. Developer Center provides a convenient management process for mass production and management of device QR codes on the product line.

## **Acceleronix QR Code**

Please use Acceleronix QR codes if you use an Acceleronix App. The format is: "pk=xxxxxx\&sn=xxxxxxxxxxxxxxx\&v=1"

### **I. Generate a QR Code**

1. You can click "**Generate SN**" on “**Device Management**"->"**Device Maintenance**"->“**Pre-import Management**” page to obtain the SNs and QR codes issued by Developer Center in batches.

<a data-fancybox title="img" href="/en/massProduct/image2022-3-14_15-17-35.jpg?version=1&modificationDate=1647241633000&api=v2">![img](/en/massProduct/image2022-3-14_15-17-35.jpg?version=1&modificationDate=1647241633000&api=v2)</a>

2. Click "**Generate SN**" to bring up the following window, where you can fill in the number of SNs as required and select the associated product. The generated QR codes can be directly attached to the finished products, as shown in the image below:

<a data-fancybox title="img" href="/en/massProduct/image2022-3-14_15-17-59.png">![img](/en/massProduct/image2022-3-14_15-17-59.png)</a>

3. Once the SNs and the device QR codes have been generated, the SN list and the device QR code images are provided to production line in the form of a compressed package that can be downloaded from Developer Center. 

<a data-fancybox title="img" href="/en/massProduct/image2022-3-15_15-41-20.png">![img](/en/massProduct/image2022-3-15_15-41-20.png)</a>


### **II. Bind QR Code to Device**

There are several methods to bind the device (DK) with the QR code (PK+SN). You can choose the most suitable method for production line. The QR code is attached to the device shell, and a barcode scanner records the binding relationship between the QR code and the module.

Method 1 (Barcode Scanner): During production, the SN\&IMEI binding tool can be used to bind the IMEI (DK) of the module scanned by a QR code scanner to the QR code (PK+SN) of the device, record the relationship between the module IMEI (DK) and the QR code (SN) of the device, as well as to generate and export the relationship file. The detailed steps are as follows: 
<a data-fancybox title="img" href="/en/massProduct/image2022-3-14_15-16-58.png?version=1&modificationDate=1647241596000&api=v2">![img](/en/massProduct/image2022-3-14_15-16-58.png?version=1&modificationDate=1647241596000&api=v2)</a>


1. [Download Binding Tool] In<a href="https://iot.quectelcn.com/download?menuCode=TEST_UTIL&resourceType=C" target="_blank"> Download Center-Production Testing Tool</a>, download QthTools-SN2IMEI_Binding.

2. [Obtain DK] For cellular devices, the IMEI number is typically used as the DK. Using the barcode scanner to scan the QR code on the module. If the scan is successful, the IMEI number of the module will be displayed in the binding tool.

3. [Obtain SN Code] Use the barcode scanner to scan the SN QR code exported by Developer Center. If the scan is successful, the PK and device SN will be displayed in the binding tool. <a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/platform/platform-16.png">![img](/en/deviceDevelop/develop/speediness/resource/platform/platform-16.png)</a>

4. [Export Binding File] Click "**File**" in the top left of QthTools-SN2IMEI_Binding, then click "**Export**", enter a file name for the exported binding file, and click “**Save**”.

**Method 2 (Manual Input)**:  
If there is no barcode scanner on the production line, you can directly use command-based reading or other methods, such as obtaining the device's IMEI through the human-machine interaction on the screen and then manually entering the IMEI into the form. The detailed steps are as follows:

1. [Obtain Device Import Template] In the Developer Center, click on the left menu "**Device Management**" → "**Device Maintenance**" → "**Pre-import Management**" → "**Add a Device**". Click "**Add Devices in Batches**" and click "**Template**" to download the association template to your computer.

2. [Obtain DK and SN Code] Enter the obtained device IMEI, PK, and device SN into the template in the respective columns: "DeviceKey", "ProductKey” and "Device SN". Then save the file to your computer. <a data-fancybox title="img" href="/en/massProduct/platform-01.png">![img](/en/massProduct/platform-01.png)</a>

<span style="color:#999AAA">Note: The production line should establish standardized operating procedures and include data validation steps during the association process to ensure the correctness of the module IMEI and device QR code and ensure that the IMEI and QR code are correctly matched.</span>

### **III. Import Binding Information**

Click "**Add a Device**" -> “**Add Devices in Batches**" to upload the module DK and device QR code relationship file to the Developer Center which will record the association. Once the device QR code is bound to the module DK, App users will be able to bind and control the device using the device QR code, as shown in the image below:

<a data-fancybox title="img" href="/en/massProduct/image2022-3-14_15-19-40.png?version=1&modificationDate=1647241758000&api=v2">![img](/en/massProduct/image2022-3-14_15-19-40.png?version=1&modificationDate=1647241758000&api=v2)</a>

After the relationship file is imported, App users can bind their Apps to the device by scanning the QR code of the device.

<span style="color:#999AAA">Note: In critical steps of the device assembly process, it is required for workers to scan the QR code on the device and verify it against the corresponding record pre-imported in the system. It is recommended that the next step should only be proceeded if the QR code matches the system record.</span>

## **Custom QR Code**

When you develop an App, you can customize the SN code and device QR code data format, but you also need to upload the relationship file of the module DK and the device QR code (SN) to Developer Center.

### **I. Bind Device with QR Code**

During the production, the binding relationship between the module IMEI (DK) and the device QR code (SN) must be recorded, and the relationship file should be organized according to the device import template. The detailed steps are as follows: 

<a data-fancybox title="img" href="/en/massProduct/image2022-3-14_15-19-56.png?version=1&modificationDate=1647241774000&api=v2">
  <img src="/en/massProduct/image2022-3-14_15-19-56.png?version=1&modificationDate=1647241774000&api=v2" width="500" alt="img">
</a>

1. [Obtain Device Import Template] In the Developer Center, click on the left menu "**Device Management**" → "**Device Maintenance**" → "**Pre-import Management**" → "**Add Device**".  Click "**Add Devices in Batches**" and click "**Template**" to download the association template to your computer.

2. [Production Line Operation] Enter the obtained device IMEI, PK, and device SN into the template in the respective columns: "DeviceKey", "ProductKey” and "Device SN". Then save the file to your computer. 

<span style="color:#999AAA">Note: You can directly use command-based reading or other methods, such as obtaining the device's IMEI through the human-machine interaction on the screen and then manually entering the IMEI into the form.</span>

3. [Upload Binding Relationship File] Switch back to the Developer Center and click "**Upload File**" to upload the binding relationship file.

### **II. Generate QR Code**

Device manufacturers can generate device QR codes according to the requirements of actual application scenarios, and the QR codes should contain PK and SN information for binding the App to device. The format can be customized, such as "ABCPK=xxxxx+SN=xxxxxxxxxxxABC".