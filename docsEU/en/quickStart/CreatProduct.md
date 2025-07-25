# Product Creation and Definition

This section introduces the product creation process by taking an RGB LED light as an example.

## Create a Product

After logging in to Developer Center through your registered account, click "**Create a Product**" on "**Product Development**" -> "**Product Management**" page.

Step 1: Select a product category. You can quickly locate RGB lights by searching product category, or locate RGB lights under the "Electric Lighting" primary category in the Standard Category list. 

<a data-fancybox title="img" href="/en/quickStart/creatproduct00.png" >![img](/en/quickStart/creatproduct00.png)</a>

Step 2: Select a solution. You can either select a pre-configured recommended solution from Developer Center for quick creation, or customize the solution according to your needs. Here, we configure the custom solution.

<a data-fancybox title="img" href="/en/quickStart/creatproduct01.png" >![img](/en/quickStart/creatproduct01.png)</a>

Step 3: Select the network connection type and communication method for the product. Here we select the directly connected device type, 2G/3G/4G/5G network connection method, and the TSL model type for the data format.

<a data-fancybox title="img" href="/en/quickStart/creatproduct02.png" >![img](/en/quickStart/creatproduct02.png)</a>

<a data-fancybox title="img" href="/en/quickStart/creatproduct03.png" >![img](/en/quickStart/creatproduct03.png)</a>

<a data-fancybox title="img" href="/en/quickStart/creatproduct04.png" >![img](/en/quickStart/creatproduct04.png)</a>

Step 4: Finally, upload the product image, enter the product name, and submit to complete the product creation.

<a data-fancybox title="img" href="/en/quickStart/creatproduct05.png" >![img](/en/quickStart/creatproduct05.png)</a>

Upon successful creation, Developer Center will assign a ProductKey and ProductSecret to the product, which will be used for authentication when the device connects to Developer Center later.

<a data-fancybox title="img" href="/en/quickStart/creatproduct06.png" >![img](/en/quickStart/creatproduct06.png)</a>

## **Define Feature**

After the product creation, navigate to the **"Define Feature"** page in product details to define the TSL model features.

Click "**Edit TSL Model**" and add the following features by taking the RGB light features as an example:

| Feature **ID** | Feature Type | **Feature Name**    | **Identifier** | **Data Type** | **Data Definition** | Read/Write Type | **Note**                                           |
| -------------- | ------------ | ------------------- | -------------- | ------------- | ------------------- | --------------- | -------------------------------------------------- |
| 1              | Property     | Switch              | Switch         | Bool          | False: Off True: On | Read/Write      |                                                    |
| 2              | Property     | Color R             | Red            | INT           | Min: 0 Max: 255     | Read/Write      | Red color value for RGB light                      |
| 3              | Property     | Color G             | Green          | INT           | Min: 0 Max: 255     | Read/Write      | Green color value for RGB light                    |
| 4              | Property     | Color B             | Blue           | INT           | Min: 0 Max: 255     | Read/Write      | Blue color value for RGB light                     |
| 5              | Property     | Luminance           | Brightness     | INT           | Min: 0 Max: 100     | Read/Write      | Control the brightness level.                      |
| 6              | Property     | Delay Shutdown Time | Delay          | INT           | Min: 0 Max: 86400   | Read/Write      | Set the countdown timer for turning off the light. |

After the creation, click "**Save Changes**" to activate the TSL model. Upon successful publication, Developer Center will automatically assign a feature ID to each property. Subsequently, devices and Developer Center will perform data interactions with these IDs.

