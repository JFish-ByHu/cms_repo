# Activation Code Introduction

**What Is an Activation Code?**

Device activation code, also known as "license", is the only valid credential for devices to connect to Developer Center. An activation code is consumed once a device goes online on Developer Center. An activation code is purchased with an expiration date. When a device's activation code expires, it will automatically consume a new activation code. If there are insufficient activation codes available, the device will be taken offline and reset to an inactive state, unable to connect to the platform.

**How to View an Activation Code?**

1. Activation Code Overview: On the "Product Management” page, you can view an overview of activation code consumption for your account.

<a data-fancybox title="img" href="/en/massProduct/首页激活码.jpg">![img](/en/massProduct/首页激活码.jpg)</a>

Fields:

● Total: The total number of activation codes under this account, including all consumed and unconsumed activation codes. ● Remaining: The number of activation codes that are still available for consumption under this account, i.e. unconsumed activation codes. ● Used: The number of activation codes consumed by devices connected to Developer Center under this account.

1. Activation Code Consumption Details:  Click "**Resource Management**" > "**License Management**", and you can view detailed information about the consumption of activation codes under your account. (Only the activation codes of the data center to which the account belongs are displayed.)

<a data-fancybox title="img" href="/en/massProduct/激活码管理页.png">![img](/en/massProduct/激活码管理页.png)</a>

Fields:

●Total: The total number of activation codes under this account, including all consumed and unconsumed activation codes. ●Used: The number of activation codes consumed by devices connected to Developer Center under this account.  ●Remaining: The number of activation codes that are still available for consumption under this account, i.e. unconsumed activation codes.

3. Activation Code Consumption for a Specific Product: On the "Product Management" page, the product card displays the total number of activation codes and the remaining available activation codes for each product.

<a data-fancybox title="img" href="/en/massProduct/首页产品卡片上激活码.jpg">![img](/en/massProduct/首页产品卡片上激活码.jpg)</a>

**How to Purchase an Activation Code?**

When your devices enter the mass production stage or when existing activation codes expire, you need to purchase activation codes to support continuous device connection with Developer Center.

You can contact Quectel sales or business personnel to assist you with activation code purchase. When purchasing activation codes, please specify the product information (i.e., PK).

You can also contact us through email for activation code purchase at csc@quectel.com.<csc@quectel.com>

Once the purchase is completed, the activation codes will be credited to your Developer Center account.

**Activation Code Package Allowance** Each product's activation code comes with a corresponding package allowance which includes the following resource allocations: 1\. Activation code validity period: The validity period for device connectivity to Developer Center. 2. Device messages: The number of uplink and downlink messages per day through Developer Center. 3. Device OTA upgrade: The number of OTA upgrade attempts per month. The default is 1 OTA upgrade per device monthly. 4. Storage duration: The storage duration for device-reported information on Developer Center. The default storage duration is 7 days.

Example: The activation code package allowance for a product: Valid for 5 years, 1500 messages/day/device, 1 OTA upgrade/month/device, 7-day storage period. ① Once a device under this product connects to Developer Center, its activation code remains valid for 5 years. After 5 years, the device will consume a new activation code. <br/> ② Devices under this product can send and receive up to 1500 messages per day. Messages exceeding this daily limit will be prohibited from transmission until the allowance is reset the next day. ③ Devices under this product are allowed 1 OTA upgrade per month, with a maximum firmware package size of 5 MB per upgrade.<br/> If the firmware package size used for an OTA upgrade in a given month exceeds 5 MB, the excess (in MB) is divided by 5 and rounded up. This value is counted as the number of excess OTA upgrades. For any OTA upgrade that exceeds 1, a pre-purchased device OTA top-up package is required for use.<br/> For example, if a device consumes a 6 MB firmware upgrade package during an OTA upgrade, the OTA upgrade attempt is calculated as: 6/5=1.2, rounded up to 2, which corresponds to 2 OTA upgrades.<br/> You must pre-purchase the device OTA top-up package before upgrading to ensure enough OTA upgrade attempts are available for the upgrade.<br/> ④ The device information under this product is stored for a duration of 7 days, meaning the original uplink and downlink log data of the device will be stored for 7 days. After 7 days, the Developer Center will automatically clear the data.

**Note: Each product can only have one activation code package allowance. Once an activation code has been assigned to a product, the allowances of subsequent activation codes must be consistent with that of the assigned one. If you want to upgrade your activation code packages, the activation code allowance for all devices under this product will be uniformly upgraded.**

**Free Activation Codes**

Developer Center provides each account with free activation codes for product development and debugging, and the specific allocation is as follows:

| Enterprise Account| Individual Account|
|:----------:|:----------:|
| 10 Free Activation Codes| 5 Free Activation Codes|

When an individual account is verified as an enterprise account, 5 additional activation codes will be provided, bringing the total to 10 free activation codes.<br/>

For more detailed operations on activation codes, please refer to[ **【Resource Management】-【License Management】**](/license/licenseMngment) in the user guide.