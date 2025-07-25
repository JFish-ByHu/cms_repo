# Usage Monitoring – Device OTA Upgrade

This section introduces the calculation rule and how to view the data of device OTA upgrades on Developer Center.

**Note: A new billing mechanism will be operated on Developer Center from July 2025.**

## Device OTA Upgrade Description

The package allowance of each device has an OTA upgrade per month, and the maximum limit for a firmware upgrade package to be downloaded per upgrade is 5 MB.

Device OTA Upgrade Calculation Rules:

Firmware upgrade package size during an OTA upgrade / 5 MB. If the result is not an integer, the value is rounded up.

Example:

If the firmware upgrade package during an OTA upgrade of device A is 6 MB, the OTA upgrade attempts consumed is 6/5=1.2, rounded up to 2.

Thus, the device consumes one OTA upgrade in the monthly package allowance and also deducts one OTA upgrade in the top-up package allowance.

Note: If there are no remaining OTA upgrades in top-up package under the account, the device cannot be upgraded due to insufficient OTA upgrades.

## Device OTA Upgrade Mechanism

1. Each device’s monthly OTA upgrade allowance is valid only for the current month.

2. Once the device reaches the upper limit of OTA upgrade allowance in the given month, no further OTA upgrades can be performed for that month until the allowance resets at 0:00 on the 1st of the next month.

3.If there is a remaining OTA upgrade in top-up package under the account, any OTA usage beyond the monthly allowance will be deducted from the top-up package.

4. The device must have sufficient OTA upgrade attempts before an OTA upgrade starts. Otherwise, the device cannot be upgraded.

Example:

For device D123456, on May 1, 2025, it successfully completes an OTA upgrade with a firmware package of 2 MB (counted as 1 upgrade). Until 24::00:00 on May 31, 2025, device D123456 cannot be performed any further OTA upgrades.

From June 1, 2025 00:00, the device will regain 1 OTA upgrade for use during June.

Additionally, if device D123456 had remaining OTA upgrades in top-up package under the account (>0) after its OTA upgrade in May, it could continue using the remaining upgrades in the top-up package until the balance reached 0.

<a data-fancybox title="img" href="/en/guide/license-statistics-07.jpg">![img](/en/guide/license-statistics-07.jpg)</a>

<br>
## Remaining OTA Upgrade Attempts in Top-up Packages

This section displays the remaining quantity of device OTA upgrade attempts in top-up packages purchased under the account.

Note:

1. If the firmware upgrade package size consumed during each device OTA upgrade in a month does not exceed the limit 5 MB but the total number of OTA upgrades exceeds the limit, you need to purchase an OTA top-up package.

2. If the firmware upgrade package size consumed during a device OTA upgrade exceeds the limit 5 MB, you need to purchase an OTA top-up package.

1. The resource top-up packages under the account can be used by all devices within the account.

2. When there are remaining OTA upgrades in top-up packages under the account, the device can perform more than 1 OTA upgrade per month, and the excess usage will be directly deducted from the top-up packages.

3. When the top-up package balance reaches 0, the device can perform no more than 1 OTA upgrade.

**Therefore, if your device has scenarios where the OTA upgrades exceed the package allowance, please make sure to purchase a top-up package in advance to ensure sufficient resources for successful device OTA upgrades.**

**OTA Upgrade Top-up Package Details**

This section displays the quantity change records of OTA upgrade in top-up packages purchased under the account. The change types include complimentary, purchases, deductions for excess usage, bill deductions, and expiration.

<a data-fancybox title="img" href="/en/guide/license-statistics-08.jpg">![img](/en/guide/license-statistics-08.jpg)</a>

<a data-fancybox title="img" href="/en/guide/license-statistics-09.jpg">![img](/en/guide/license-statistics-09.jpg)</a>

**Request Debug Resources**

Developer Center provides debugging resource packages for developer to debug. Each account is allowed to apply only once.

It is recommended to apply for these debugging resources when developing a new device that require frequent OTA upgrades.

Click "**Request Debug Resources**" and follow the prompts to complete the process.

**Purchase OTA Top-up Package**

Click "**Purchase OTA Top-up Package**" to enter the store and quickly purchase top-up package resources.

<a data-fancybox title="img" href="/en/guide/license-statistics-10.jpg">![img](/en/guide/license-statistics-10.jpg)</a>

**Devices with OTA Upgrade Excess Usage**

This section displays the number of devices under the account that have performed more than 1 OTA upgrade in the given month.

Click the excess number to enter the "**Detail of Devices with OTA Upgrade Excess Usage**" list to view OTA usage statistics for devices that exceed limits in the given month. You can select a product or specify a device, as well as a specific date, to view the data according to your needs.

<a data-fancybox title="img" href="/en/guide/license-statistics-11.jpg">![img](/en/guide/license-statistics-11.jpg)</a>

**Device OTA Upgrade Excess Statistics**

As shown in the figure, this section displays a statistical chart of the monthly excess OTA upgrades for devices under each product within the account, helping you to understand the excess usage of device OTA upgrades.

You can select the product and statistical period according to your needs to view the data.

<a data-fancybox title="img" href="/en/guide/license-statistics-12.jpg">![img](/en/guide/license-statistics-12.jpg)</a>

**Daily Statistics of OTA Upgrades**

This section displays the total daily OTA upgrades for all devices across products under the account.

You can select the product and statistical period according to your needs to view the data.


<a data-fancybox title="img" href="/en/guide/OTA图表2.jpg">![img](/en/guide/OTA图表2.jpg)</a>