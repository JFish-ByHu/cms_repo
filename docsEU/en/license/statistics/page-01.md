# Usage Monitoring – Device Message

This section introduces the calculation rule and data viewing operations of device messages on Developer Center.

**Note: A new billing mechanism will be operated on Developer Center from July 2025.**

## Device Message Description

Device messages refer to the uplink and downlink messages between the device and Developer Center, with the quantity calculated per device per day.

**Device message include the following types:**

1. Uplink/downlink messages defined by the device's TSL model

2. Uplink/downlink transparent transmission messages

3. Uplink/downlink messages initiated by developer programs (e.g., module info, device timezone queries)

4. Uplink/downlink messages for obtaining the device's location

5. Device-initiated OTA request uplink messages

**Non-billable Message Types**

1. Device exception notifications

2. Device management commands

3. Platform responses to OTA upgrade requests

4. Device online/offline messages

5. Device heartbeat

**Device Message Calculation Methods:**

1. Each 512 bytes is counted as 1 message. The size of a single message is divided by 512 bytes, and if the result is not an integer, round up to the nearest integer.

2. Only the messages sent successfully will be counted.

## Device Daily Message Mechanism

1. The device's daily message allowance is valid only for the day.

2. The count starts at 0 at midnight and accumulates until the upper limit for the device's allowance is reached.

3. Once the device reaches the upper limit of the allowance, it will not be able to send or receive messages until the next day at midnight. When the allowance is reset and normal message sending/receiving is restored.

4. If the account has remaining messages in top-up packages, the excess usage beyond the daily allowance will be deducted from the top-up package.

Example:

For device D123456, the daily message allowance is 1500. From 0:00 on May 1, 2025, the device starts to consume the message allowance, and the number of consumed device messages accumulates to 1500 until 3:00 PM (15:00:00) on May 1, 2025. 

Therefore, all uplink messages and downlink commands for device D123456 will fail to be delivered from 15:00:00 to 24:00:00 on May 1, 2025. 

From 0:00 on May 2, 2025, the device can send and receive messages, with the message calculated from 0.

Additionally, if the device D123456 has reached the upper limit of the allowance and there are remaining messages in top-up packages under the account, the device can continue consuming the package’s messages until the balance reaches 0.

<a data-fancybox title="img" href="/en/guide/license-statistics-01.jpg">![img](/en/guide/license-statistics-01.jpg)</a>

## Remaining Messages in Top-up Packages

This section displays the remaining quantity of device messages in top-up packages purchased under the account.

Note: When purchasing an activation code package, you have selected the device message allowance tier, for example, 4000 messages/day/device, the maximum number of each device's daily uplink and downlink messages is 4000. The daily allowance is only valid for the current day. If the number of consumed messages exceeds the upper limit, you need to purchase top-up packages for supplementary.

1. Resource top-up packages under the account can be used by all devices within the account.

2. When the account has remaining messages in top-up packages, the number of consumed messages can exceed daily message allowance, and the excess usage will be directly deducted from the top-up package.

3. When the top-up package balance reaches 0, the number of consumed messages cannot exceed daily message allowance.

**Therefore, if your device has scenarios where the message usage exceeds the package allowance, please make sure to purchase a top-up package in advance to ensure sufficient resources for normal operation.**

**Message Top-up Package Details**

This section displays the quantity change records of message top-up packages purchased under the account. The change types include sending, purchases, deductions for excess usage, bill deductions, and expiration.

<a data-fancybox title="img" href="/en/guide/license-statistics-02.jpg">![img](/en/guide/license-statistics-02.jpg)</a>

<a data-fancybox title="img" href="/en/guide/license-statistics-03.jpg">![img](/en/guide/license-statistics-03.jpg)</a>

**Request Debug Resources**

Developer Center provides debugging resource packages for developer to debug. Each account is allowed to apply only once.

It is recommended to apply for these debugging resources when developing a new device or optimizing device message reporting frequency.

Click "**Request Debug Resources**" and follow the prompts to complete the process.

**Purchase Message Top-up Package**

Click "**Purchase Message Top-up Package**" to enter the store and quickly purchase top-up package resources.

<a data-fancybox title="img" href="/en/guide/license-statistics-04.jpg">![img](/en/guide/license-statistics-04.jpg)</a>

**Devices with Message Overage**

This section displays the number of devices with consumed messages under the account exceeding the daily message allowance.

Click the excess number to enter the "**Details of Devices with Message Overage**" list to view the message usage for devices that exceed the allowance that day. You can select a product or specify a device, as well as a specific date, to view the data according to your needs.

<a data-fancybox title="img" href="/en/guide/license-statistics-05.jpg">![img](/en/guide/license-statistics-05.jpg)</a>


**Device Message Overage Statistics**

As shown in the figure, this section displays a statistical chart of the daily excess messages for devices under each product within the account, helping you to understand the excess usage of device messages.

You can select the product, statistical period and the categorized device message according to your needs to view the data.

<a data-fancybox title="img" href="/en/guide/license-statistics-06.jpg">![img](/en/guide/license-statistics-06.jpg)</a>