# Define Feature

The first step in a TSL product development is to establish a TSL model. Features can be divided into two types: **Standard** and **Custom**.


- Standard Features are those that have already been defined     by Developer Center for a specific product category.
- Custom Features allow customization to meet     unique requirements of the specific usage scenario of the current product,     independent of the product category.



<span style="color:#999AAA">Note: Feature definition is only possible when creating a product in TSL model. There is no need to define features of Custom-format data.</span>


## __1. Add Self-Defined Features__

**Product Development** > **“Smart Aromatherapy Diffuser”** and click **Define Feature** to the corresponding interface, and then click **Draft Mode** > **Add Self-Defined Features**.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/platform/platform-04.png">![img](/en/deviceDevelop/develop/speediness/resource/platform/platform-04.png)</a>

Draw up TSL features according to the actual project requirements of the smart aromatherapy diffuser. The default TSL model is presented in the table below.

| Feature Type |              Feature Name              | Data Format | Read/Write Type |                                  Unit                                  |
| :----------: | :------------------------------------: | :---------: | :-------------: | :--------------------------------------------------------------------: |
|   Property   | The remaining content of essential oil |    FLOAT    |    Read-Only    |                                   ML                                   |
|   Property   |     Frequency of regular reporting     |     INT     |   Read-Write    |                                 Second                                 |
|   Property   |             On/Off status              |    BOOL     |    Read-Only    |                       True: On；<br>False: Off；                       |
|    Event     |     Alert to lack of essential oil     |    BOOL     |       --        |               True: Alert； <br> False: Alert canceled；               |
|   Service    |            Set working mode            |    ENUM     |       --        | 1: Working Mode 1;<br> 2: Working Mode 2;<br>3: Working Mode 3;<br>... |

<br/>

## __2. Add Property__ 

**1) Add the properties of "Remaining content of essential oil", "Frequency of regular reporting" and "On/Off status"**



<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/platform/platform-05.png">![img](/en/deviceDevelop/develop/speediness/resource/platform/platform-05.png)</a>


|      Name       |                                                                                                                    Description                                                                                                                    |
| :-------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  Feature Type   |                                                               Select "Property", which is generally the running status of a device, such as the remaining content of essential oil.                                                               |
|  Feature Name   |                                                                                                                 Name of feature.                                                                                                                  |
|   Identifier    |                                                                                                            Unique ID of your feature.                                                                                                             |
|    Data Type    |                                Select the corresponding type based on the characteristics of different properties.<br /> There are 9 types of data: BOOL, INT, FLOAT, DOUBLE, ENUM, TEXT, DATE, STRUCT and ARRAY.                                 |
|      Range      |                                                                                      The range of an unconfirmed value is from its maximum to maximum value.                                                                                      |
|    Step Size    |                                                                                                    Increment value determined by the property.                                                                                                    |
|      Unit       |                                                                                               The name of a standard quantity for measuring things.                                                                                               |
| Read/Write Type | There are three types: Read and Write, Read-only and Write-only. Select one of them based on different properties.<br /> For example, the remaining content of essential oil is read by a sensor and cannot be written, so Read-only is selected. |
|   Description   |                                                                       Describe the feature (equivalent to a note) to help yourself or others understand the feature better.                                                                       |





**2) Define a property on Developer Center** 


<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/platform/platform-06.png">![img](/en/deviceDevelop/develop/speediness/resource/platform/platform-06.png)</a>



## __3. Add Event__ 

__1) Add the event of "Alert to lack of essential oil"__

<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/platform/platform-07.png">![img](/en/deviceDevelop/develop/speediness/resource/platform/platform-07.png)</a>



|       Name       |                                                                                         Description                                                                                          |
| :--------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   Feature Type   |                                                      Select "Event", which is reported to Developer Center when the device is running.                                                       |
|   Feature Name   |                                                                                       Name of feature.                                                                                       |
|    Identifier    |                                                                                  Unique ID of your feature.                                                                                  |
|    Data Type     |                                                    Message, Alert and Fault. Data type can be flexibly defined based on actual scenarios.                                                    |
| Output Parameter | The parameter is reported to Developer Center with the event, which is equivalent to the Return Value. <br />Click __+ Add a Parameter__ on the right to add an output parameter. (Optional) |
	

__2) Add an event intput parameter (optional)__

<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/platform/platform-08.png">![img](/en/deviceDevelop/develop/speediness/resource/platform/platform-08.png)</a>

__a.__ When adding a TSL event, click __+ Add a Parameter__ on the right of Intput Parameter to add an intput parameter. <br>
__b.__ Click __Create a Property or Parameter__ to add a new property or parameter to the current event, for example, report the event "Alert to lack of essential oil" with the remaining content of essential oil to Developer Center, so that Developer Center can get the details of the alert event.<br>

**3) Define an event on Developer Center** 


<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/platform/platform-09.png">![img](/en/deviceDevelop/develop/speediness/resource/platform/platform-09.png)</a>


## __4. Add Service__ 

__1) Add the service of "Set working mode"__
	
<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/platform/platform-10.png">![img](/en/deviceDevelop/develop/speediness/resource/platform/platform-10.png)</a>


|       Name       |                                                                                                           Description                                                                                                           |
| :--------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   Feature Type   |                                                                Select "Service", which refers to a capability or method that a device can be called externally.                                                                 |
|   Feature Name   |                                                                                                        Name of feature.                                                                                                         |
|    Identifier    |                                                                                                   Unique ID of your feature.                                                                                                    |
|  Calling Method  | Currently, only asynchronous calling is supported, and Developer Center does not need to wait for the terminal to return the result. When the service is called more than once, a first-in, first-out response rule is applied. |
| Input Parameter  |                       The parameter is issued to the terminal with the service, which is equivalent to an argument.<br /> Click __+ Add a Parameter__ on the right to add an input parameter. (Optional)                        |
| Output Parameter |                   The parameter is sent to Developer Center with the service, which is equivalent to the return value. <br /> Click __+ Add a Parameter__ on the right to add an output parameter. (Optional)                   |
	

		


__2) Add a service output parameter (optional)__

<span style="color:#999AAA">Note: Property indicates that the created output parameter is the feature type property that can be referenced by other events or services; Parameter indicates that the created output parameter is a parameter type property that cannot be referenced by other events or services。</span>

<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/platform/platform-11.png">![img](/en/deviceDevelop/develop/speediness/resource/platform/platform-11.png)</a>


__Steps to create a property or parameter__

__a.__ Click "__+ Add a Parameter__" to add an output parameter of the event.<br>
__b.__ Click "__Create a Property or Parameter__" to add a new property or parameter to the current service, for example, the inputted argument will be issued to the device with the service.
<br/>

**3) Define a service on Developer Center** 



<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/platform/platform-12.png">![img](/en/deviceDevelop/develop/speediness/resource/platform/platform-12.png)</a>

## __5. Save Changes__ 

Having added a TSL feature, click "__Save Changes__" in the lower right corner to apply the added TSL model to product development.
<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/platform/platform-13.png">![img](/en/deviceDevelop/develop/speediness/resource/platform/platform-13.png)</a>


## __6. Develop Product__

Having defined the feature, click __"Next: Develop Product"__ or click __Develop Product__ on the progress bar to enter the "Develop Product" page. Select an access solution from __Product Development Mode__ column and __Module__ to get the corresponding documents and resources.
<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/platform/platform-14.png">![img](/en/deviceDevelop/develop/speediness/resource/platform/platform-14.png)</a>
