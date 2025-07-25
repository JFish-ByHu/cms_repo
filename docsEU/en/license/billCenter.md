# Excess Billing

This section explains the data displayed on the "**Excess Billing**" page.

## Prerequisites

When an excess resource bill is generated under the account, it will be displayed on this page. When there is no excess bill for a month, the information for that month will not be displayed in the list.

<a data-fancybox title="img" href="/en/guide/billcenter.png">![img](/en/guide/billcenter.png)</a>

**Statistical Card Description**

Pending settlement resources refer to the total number of resources pending settlement under the account as of the current query time. When your account has corresponding resource top-up packages, any resources exceeding the allowance will first be deducted from the top-up packages. If the top-up packages are insufficient for deduction, the excess will be counted into the pending settlement number.

1. Device Messages: The total number of device messages pending settlement.

2. OTA Upgrades: The total number of device OTA upgrades pending settlement.

3. Service Subscriptions: The total number of service subscriptions pending settlement.

## List Description

1\. You can view an excess bill for a maximum of the last 12 months of data (including the current month).

2\. You can select any month within the last 12 months to query the details of the excess bill for that month.

3\. Bill data can be exported, and the exported data will be consistent with the real-time data queried on the current page.

### List Data Fields

| **Field Name**| **Description**|
|----------|----------|
| Period| The month for the excess bill (natural month).|
| Excess Device Messages| Total excess device messages for the month.|
| Excess OTA Upgrades| Total excess devices OTA upgrades for the month.|
| Excess Service Subscriptions| Total excess service subscriptions for the month.|
| Billing Status| The excess resource bill for the current month will be billed on the 1st of the following month, with billing status classified as billed and unbilled.|
| Settlement Status| The settlement status of the excess bill. Unpaid bills are considered unsettled, while paid bills are settled.|

Fields in the details of each excess bill is described below.

| **Field Name**| **Description**|
|----------|----------|
| Excess Quantity| Total excess quantity for the corresponding resource type in the current month.|
| Settled| Excess quantity deducted from the resource top-up package for the corresponding resource type in the current month.|
| Unsettled| Excess quantity that remains unpaid for the corresponding resource type in the current month.|

**Operation Instructions in the List**

1\. Device Messages and Device OTA Upgrades

Click "**View Details**" to navigate to the details page of the devices with the corresponding excess resources under the "**Usage Monitoring**" menu, where you can view the excess details for resources of devices.

2\. Service Subscription

Click "**View Details**" to navigate to "**Usage Monitoring**" - "**Service Subscription Statistics**", where you can view the daily details of excess service subscriptions for the current month.

<a data-fancybox title="img" href="/en/guide/license-statistics-20.jpg">![img](/en/guide/license-statistics-20.jpg)</a>

**Resource Usage Excess Alert Settings**

To monitor resource overages, you can click "**Resource Usage Excess Alert Settings**" to enable the alert switch for the corresponding resource and set the threshold for resource overage.

After saving the settings, when the resource usage under your account exceeds the set threshold, an alert will be sent.

Both your Developer Center account and contact person added under "**License** **Management**" - "**Contact Person Setting**" will receive the billing threshold notification.

For convenience, your sub-accounts are granted permission by default. You can jointly maintain the setting.

<a data-fancybox title="img" href="/en/guide/license-statistics-21.jpg">![img](/en/guide/license-statistics-21.jpg)</a>

<a data-fancybox title="img" href="/en/guide/license-statistics-22.jpg">![img](/en/guide/license-statistics-22.jpg)</a>