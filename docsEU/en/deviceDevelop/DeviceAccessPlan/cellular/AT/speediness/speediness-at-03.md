<!--
 * @Author: mack.zhang@quectel.com mack.zhang@quectel.com
 * @Date: 2024-11-11 10:46:42
 * @LastEditors: mack.zhang@quectel.com mack.zhang@quectel.com
 * @LastEditTime: 2024-11-12 16:08:58
 * @FilePath: \quec-doc-web\docsEU\en\deviceDevelop\cellular\AT\speediness\speediness-at-03.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# Quick Access to Developer Center

##  __1. Test Communication__

Send "__AT__" to the module with __QthTools-MCU Simulator__ to test whether the function of AT commands is normal.  If QthTools-MCU Simulator prints __"OK"__ as the return value, it indicates that your device has communicated with the PC successfully. The interaction example of QthTools-MCU Simulator is shown in the following figure.

<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-04.png">![img](/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-04.png)</a>




## __2. Initialization__

You need to initialize some configurations the first time you access Developer Center.

__1) Configure PK and PS__

<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-06.png">![img](/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-06.png)</a>

__2) Add product information__

<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-07.png">![img](/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-07.png)</a>

<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-08.png">![img](/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-08.png)</a>

* __ProductKey__: ProductKey is generated when a product is created.
* __ProductSecret__: ProductSecret is generated when a product is created.
* __Data Format__: __TSL__ or __Transparent transmission__. Select the data format corresponding to the product.
* __Feature Definition File__: You can select __Automatically Get__ or __Import Local File__.
    * __Automatically Get：__ Depending on the __Data Service Center__ of the product you created, click __Automatically Get File__ .
    * __Import Local File：__ Enter __Developer Center__ and click "__Export__"  in the __"Define Feature"__ page to export __TSL file in JSON format__ to the local PC. Click "__Import file__" and select the __TSL file__ exported in.

    <span style="color:#999AAA">Note: This step is skipped if the data format is transparent transmission.</span>


__3) Send product configuration AT command__

<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-09.png">![img](/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-09.png)</a>


__4) Configure Json format (optional)__

<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-21.png">![img](/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-21.png)</a>
**①** Select the "Device Configuration" tab.<br>
**②** Select the “Json” format and click the Set button.

<span style="color:#999AAA">Unless otherwise specified, there is no need to modify other configurations.</span>



## __3. Access Developer Center__

__1) Initiate connection__

<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-10.png">![img](/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-10.png)</a>

__2) Response to a successful connection__

When QthTools-MCU Simulator prints the return values in the following figure, it indicates that your device has successfully accessed Developer Center and can communicate with Developer Center.

<span style="color:#999AAA">Note: The network of Wi-Fi devices needs to be provisioned through the app.</span>

<a data-fancybox title="img" href="/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-11.png">![img](/en/deviceDevelop/develop/speediness/resource/AT/Speediness-AT-11.png)</a>