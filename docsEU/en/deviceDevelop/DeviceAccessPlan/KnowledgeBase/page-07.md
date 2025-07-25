# Wi-Fi Device OTA Upgrade Package Making

## __1) Download OTA Upgrade Package-Making Tool__

Enter <a href="https://core.acceleronix.io/download?menuCode=MODULE_DEVL" target="_blank">**Download Center**</a>, select the specified module model and enter the corresponding download page, find the OTA upgrade package-making tool and download it.

Note: The directory for storing the package-making tool cannot contain any spaces or Chinese characters.<br>
## __2) Make OTA Upgrade Package__

Open __rt_ota_packaging_tool__ and follow the steps in the figure below to make an upgrade package.
<a data-fancybox title="img" href="/en/deviceDevelop/KnowledgeBase/step32.png">![img](/en/deviceDevelop/KnowledgeBase/step32.png)</a>

① Select the firmware __output/beken7231_bsp.bin__.<br>
② Set the "**固件版本[firmware name]**" to the target version number of this OTA upgrade.<br>
③ Click "__开始打包 [Start Packaging]__". The generated OTA upgrade package with rbl as the suffix is stored in the path where the selected firmware is located.<br>

<span style="color:#ff0000" >Note: Except for the items mentioned in the steps above, retain the default values for other items, otherwise, the OTA upgrade cannot be performed after the device has downloaded the upgrade package.</span>