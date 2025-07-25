# Create a Product

## __Scenario Description__

Aromatherapy has become increasingly popular in recent years. Elegant and fashionable aromatherapy diffuser not only enhances the use of essential oils, but also serves as a nice decoration. Many high-end establishments such as hotels, chain restaurants, even high-end clothing brand stores and hair salons have begun to use fragrance for marketing. We have built a smart **aromatherapy diffuser** solution, based on **Quectel modules with QuecThing feature** and **Developer Center, which allows for** quick access to the IoT platform. Wherever you are, you can query the remaining essential oil capacity of your aromatherapy diffuser and switch its operating mode in batch and in real time from anywhere through **Developer Center**. The guide below will help you to create a product on **Developer Center**.


## __Overview__

The Developer Center is the one-stop IoT development platform provided by Acceleronix. This guide will take you through the process of accessing Developer Center and creating your own product, step by step.

## __1. Log in to Developer Center__

Log in to <a href="https://core.acceleronix.io"  target="_blank">Developer Center</a>. If you don't have an account click <a href="https://core.acceleronix.io/registerType" target="_blank">Register Now</a> to register.

## __2. Create a Product__

Creating a product is the first step in the product development process. A product is an abstract description of a class of devices defined by Developer Center, which is used to manage devices of the same type. When creating a product, you must select a data protocol, which includes two data format options: **TSL** and **Custom**. The following two data format products are created as examples. You can choose the most suitable option for your specific needs.

* __TSL Model  Overview__

**TSL** stands for the "Thing Specification Language" and is the standard data format of communication between Developer Center and the device. It refers to the digital representation of the device in Developer Center and the entity data model constructed in the IoT platform. A TSL model is divided into three dimensions: **Property**, **Service**, and **Event**. Once the TSL model is saved, i.e., the TSL product is defined, Developer Center starts to parse, verify and process the data.

* __Custom Format Overview__ 

**Custom format** option allows for unaltered transmission of raw data between the device and Developer Center without any changes to the data content, and Developer Center will not parse the data content. The term transparent transmission data is used to refer to data transmission in this format. This option is ideal for hardware devices with a **low hardware configuration** or **those unable to build a TSL model** to communicate with Developer Center. By selecting **Custom format,** raw data can be transmitted directly and transparently to Developer Center.



<span style="color:#999AAA">Note: ProductKey ("PK") and ProductSecret ("PS") should be in safekeeping, because they will be used for device authentication and product deletion.</span>

### __Create a TSL-Model Product__

Click **Create a Product** to create a TSL product and name it **“Smart Aromatherapy Diffuser”**. 

<span style="color:#999AAA"> Note: If a standard TSL model was established for the selected category before product creation, please add necessary features accordingly.</span>

<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/platform/platform-02.png">![img](/en/deviceDevelop/develop/speediness/resource/platform/platform-02.png)</a>


* __Product Name__: Unique name of the product.
* __Product Category__: Developer Center offers predefined standard TSL model features for different industrial categories. The features are available if a standard category is selected. You can check the standard TSL features for the product by clicking "**View**" to pop up the feature table. <span style="color:#999AAA">Note: You can modify the TSL feature definition in draft mode.</span>
* __Device Type__: 
  * **Directly Connected Device** can be directly connected to Developer Center. . 
  * **Gateway Device** and **Gateway Sub-device** can be connected to Developer Center through the Wi-Fi network. (The LTE module used in the example in this section is a directly connected device.) 
* __Network Connection Method__: The network connection method of devices.
* __Data Format__: Developer Center supports two data formats: TSL and Transparent Transmission/Custom.  You can choose one of them according to the actual business scenario.

<br>

## __3. Configure the product__

After creating a product, you need to configure this product. The configuration information includes:
* __Authorisation Configuration__. Authorisation of the Wonderfree App.
* __Panel configuration__. The current panel is public. Please contact Acceleronix sales team if you need a custom panel.

The "__Product Interaction__" page is as follows:
<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/platform/platform-03.png">![img](/en/deviceDevelop/develop/speediness/resource/platform/platform-03.png)</a>


