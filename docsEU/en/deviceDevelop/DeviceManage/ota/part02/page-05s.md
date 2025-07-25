# Retry the Upgrade Plan

During the effective period of the upgrade plan, you can retry the upgrade plan for the device that failed to be upgraded.

This section introduces how to retry upgrade plans.

## Prerequisites

There has been a silent upgrade plan in the "upgrading" status and a device that failed to be upgraded.

## Steps

1、  Log in to Developer Center, click "**Device Management**" → "**OTA Upgrade**" in the left-hand navigation bar.

 <a data-fancybox title="img" href="/en/guide/ota/otaup01.png">![img](/en/guide/ota/otaup01.png)</a>

2、  Click the "**Upgrade Plan**" tab to enter the corresponding page. Select a plan and click "**Upgrade Monitoring**" in the line of the specified plan to enter the "Upgrade Monitoring" page.

3、  View the device whose upgrade status is "Upgrade Failed".

<a data-fancybox title="img" href="/en/guide/ota/ota24.png">![img](/en/guide/ota/ota24.png)</a>

4、  Only the device whose version information is consistent with the source version in the upgrade plan can retry the upgrade plan.

5、Click "**Retry Upgrade**"

1)  If the device is online, the platform will issue the upgrade plan to the device immediately and the device starts to be upgraded.

2)  If the device is offline, the platform will issue the retry-upgrade plan when the device goes online again.

Note: The upgrade retry steps above are only applicable to the devices in silent upgrade plans. For devices that failed to be upgraded in manual-upgrade plans, the upgrade retry API must be called, as displayed here.

<a data-fancybox title="img" href="/en/guide/ota/otaup02.png">![img](/en/guide/ota/otaup02.png)</a>