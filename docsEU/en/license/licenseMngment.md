# Activation Code Management

This section introduces the function and related operations of activation code management.

## What Is an Activation Code?

Please refer to [**【Mass Production】-【Product Activation Code】**](/license/LicenseIntroduction).<br/>

**Fields**<br/> Note: The "**License** **Management**" page only displays the activation codes of the data center to which the account belongs. If a device under a product is associated with another data center, the consumed activation codes are also counted in the data center to which the product belongs.<br/> <br/>

<a data-fancybox title="img" href="/en/guide/激活码管理.jpg">![img](/en/guide/激活码管理.jpg)</a>

●&nbsp;Total: The total number of activation codes under the account, including all consumed and unconsumed activation codes. <br/>●&nbsp;Used: The number of activation codes consumed by devices connected to Developer Center under the account. <br/>●&nbsp;Remaining: The remaining number of activation codes available for use under the account, i.e., unconsumed activation codes. <br/>●&nbsp;Unassigned Activation Codes: The quantity of the activation codes that were not assigned to a specific product when purchased will be added to the unassigned activation codes. An activation code must be assigned to a specified product for use.<br/> Click "**View**" to check the package allowance.<br/>

<a data-fancybox title="img" href="/en/guide/未分配激活码列表.jpg">![img](/en/guide/未分配激活码列表.jpg)</a>

●&nbsp;Devices with Near-expiry Activation Codes: Devices with activation codes that will expire in less than 30 days.<br/> Click "**View**" to view the details of devices with near-expiry activation codes. You can search for a device with near-expiry activation codes by product name, PK, DK, activation date, and expiration date.<br/> <br/>

<a data-fancybox title="img" href="/en/guide/临期设备.jpg">![img](/en/guide/临期设备.jpg)</a>

## Assign Activation Code

Note:<br/> 1\. When there are unassigned activation codes under your account, you need to assign them to specified products. If an activation code has been assigned to a product (i.e., specified PK) at the time of purchase, assignment is not required.<br/> 2\. Each product can only have one activation code package allowance. Different packages with different allowances cannot be assigned to the same product. [**What Is Activation Code Package Allowance?** ](/license/LicenseIntroduction)<br/>3. The assignment of activation codes cannot be revoked. Please proceed with caution.<br/> Steps:<br/> 1\. Click "**Assign Activation Code**" and select a product in the pop-up window. After you select a product, the pop-up window will display the maximum assignable quantity of the activation code with a consistent package allowance for that product.<br/> 2. Enter the assignment quantity and click "**Confirm**" to complete the assignment.<br/> You can also add activation codes to the product on the “Activation Code Details” page. The assignment steps are the same as above.<br/>

<a data-fancybox title="img" href="/en/guide/6.png">![img](/en/guide/6.png)</a>

**View Activation Code Assignment History** The "**Activation Code Assignment History**" tab displays the assignment records of unassigned activation codes to products under the account.<br/> You can search for an assignment record by product name or ProductKey.<br/>

<a data-fancybox title="img" href="/en/guide/分配记录.jpg">![img](/en/guide/分配记录.jpg)</a>

## View Product Activation Code

1\. "**Product Activation Code List**" displays the activation code information for all products under the account, including the total number of activation codes under the product, the number of consumed activation codes, the number of remaining activation codes available, and the activation code allowance for that product.<br/> 2. Click "**Details**" under any product to enter the product's “Activation Code Details” page and view the details of activation codes consumed by devices under the product.<br/> You can search for a consumed activation code by DeviceKey, activation date, and expiration date.<br/> 3. You can click "**Activation History**" to query the activation code usage records of the device.<br/>

<a data-fancybox title="img" href="/en/guide/点击激活码明细.jpg">![img](/en/guide/点击激活码明细.jpg)</a> <a data-fancybox title="img" href="/en/guide/3.jpg">![img](/en/guide/3.jpg)</a>

**Description of Activation Code Consumption**

Each device needs an activation code to connect to Developer Center. An activation code is consumed when the device first connects to Developer Center. When the activation code for the device expires, a new activation code is automatically consumed. (provided there are available activation codes under the product to which the device belongs)<br/> Therefore, each device consumes at least one activation code.<br/>

Note:<br/> 1\. When a device is deleted, the consumed activation codes will not be returned; if a deleted device reconnects to Developer Center within the validity period of its activation code, the connection will not consume an activation code again.<br/> 2\. When a product is deleted, the consumed and unassigned activation codes will not be returned. Please proceed with caution.<br/> <br/>

## Devices with Near-expiry Activation Codes

The “**Devices with Near-expiry Activation Codes**” lists devices with activation codes that will expire in less than 30 days.<br/> You can search for a device with a near-expiry activation code by product, activation date, and expiration date.<br/>

Automatic Renewal Settings for Near-expiry Devices

1. When the automatic renewal function for activation codes is enabled at the product level to which a device belongs, individual device auto-renewal settings can be configured in the near-expiry devices list.

2. Conversely, if the automatic renewal function for activation codes is disabled at the product level to which a device belongs, individual device renewal settings cannot be modified in this list.

<a data-fancybox title="img" href="/en/guide/临期设备自动续费.png">![img](/en/guide/临期设备自动续费.png)</a>

**Note: When the device activation code is about to expire, please ensure that there are sufficient available activation codes under the product to which the device belongs, to avoid the device being unable to connect to Developer Center due to the lack of activation codes.<br/>** To ensure the normal operation of your business, the automatic renewal function for the product is enabled by default. If you have a specified device that does not require automatic renewal after the activation code expires, you can click the product that the device belongs to and enter "[**Configure Product” > “Automatic Renewal”**](/deviceDevelop/ProductDevelop/ProductConfig.md#设备激活码自动续费) to add the specified device to the automatic renewal blacklist. **To disable the activation code automatic renewal for a product, you can turn off the feature on the “Automatic Renewal” card.**

<a data-fancybox title="img" href="/en/guide/自动续费开关.jpg">![img](/en/guide/自动续费开关.jpg)</a>

## Contact Person Setting

To prevent service suspension due to overdue payment for excess resource usage, you can set the alert notification recipient to promptly monitor and address resource usage issues.

Developer Center pushes resource alert notifications to your account by default. If you need to add more notification recipients, please configure the alert recipient information. For convenience, your sub-accounts are granted permission to maintain this list of notification recipients. You can jointly maintain the resource alert recipient list. When adding recipients, please ensure their email addresses are correctly entered to receive resource alert notifications.

<a data-fancybox title="img" href="/en/guide/接警人设置1.jpg">![img](/en/guide/接警人设置1.jpg)</a>

<a data-fancybox title="img" href="/en/guide/接警人设置2.jpg">![img](/en/guide/接警人设置2.jpg)</a>