# 用量监控（设备 OTA）

本文介绍平台中设备 OTA 次数的计算规则与数据查看操作。

**特别说明：自 2025 年 7 月起，本平台按新的收费机制运行。**

## 设备 OTA 次数说明

每设备每月套餐额度有 1 次 OTA 升级，每次升级时的下载固件升级版本包最大限制 5MB。

设备 OTA 次数计算规则：

单次升级的固件升级版本包大小 / 5MB，当无法整除时，数值向上取整。

举例：

设备 A 升级时固件升级版本包为 6MB，则设备 A 升级需要消耗的次数为 6/5=1.2 ，无法整除，1.2 向上取整为 2。

最终该设备消耗了本月的套餐内额度 1 次，同时也从 OTA 补充包中扣减一次。

特别说明：若账号下设备 OTA 补充包余量为 0，则该设备无法升级，因为 OTA 次数不足

## 设备 OTA 次数机制

1、 每个设备每月的 OTA 额度，仅限当月使用。

2、 设备当月用完 OTA 套餐额度后，当月不可再进行 OTA，直至次月 1 日 0 点恢复额度。

3、 若账户下有 OTA 补充包余量，则设备 OTA 达到其套餐消息数额度后的使用次数，从补充包中扣减。

4、 设备 OTA 开始之前必须保证 OTA 次数充足，否则设备无法升级。

举例：

某设备 D123456 在 2025 年 5 月 1 日，成功 OTA，OTA 的固件升级版本包大小 2MB(计数 1 次)。至 2025 年 5 月 31 日 24:00:00，设备 D123456 不可再 OTA。

2025 年 6 月 21 日 0 点起，该设备恢复 1 次 OTA 额度，在 6 月内可使用。

另外，若设备 D123456 在 5 月成功 OTA 后，账号下 OTA 补充包余量>0，则该设备可以继续使用补充包中的 OTA 次数，直至余量为 0 止。

<a data-fancybox title="img" href="/zh/guide/license-statistics-07.jpg">![img](/zh/guide/license-statistics-07.jpg)</a>

<br>

## 设备 OTA 补充包余量

展示账号下所购买的设备 OTA 补充包剩余数量。

注：

1、当设备月度内 OTA 单次不超出套餐固件升级版本包限额 5MB，但总次数超出限制时，需要购买设备 OTA 补充包。

2、当设备单次升级固件升级版本包超出套餐限额 5MB，需要购买设备 OTA 补充包。

1. 账号下的资源补充包，账号下的所有设备都可以使用。

2. 当账号下的 OTA 补充包有余量时，则允许设备每月 OTA 超出 1 次，超出的使用量将直接从补充包中扣减。

3. 当补充包余量为 0 时，设备的 OTA 次数不允许超出 1 次。

**因此，若您的设备有超出套餐额度使用 OTA 次数的场景，请务必提前购买补充包，留足够的余量以支持设备 OTA 成功。**

**OTA 补充包明细**

展示账号下 OTA 补充包的数量变更明细记录，其变更类型包括赠送、购买、抵扣设备超额用量、抵扣账单、过期。

<a data-fancybox title="img" href="/zh/guide/license-statistics-08.jpg">![img](/zh/guide/license-statistics-08.jpg)</a>

<a data-fancybox title="img" href="/zh/guide/license-statistics-09.jpg">![img](/zh/guide/license-statistics-09.jpg)</a>

<br>

**申请调试资源**

平台提供调试资源包，用于开发者调试使用。每个账号只允许申请一次。

建议您在开发新设备需要频繁 OTA 时申请使用。

点击“申请调试资源”即可按提示操作。

**购买 OTA 补充包**

点击“购买 OTA 补充包”按钮，可进入商城，快速购买补充包资源。

<a data-fancybox title="img" href="/zh/guide/license-statistics-10.jpg">![img](/zh/guide/license-statistics-10.jpg)</a>

<br>

**OTA 超套餐额度的设备**

展示账号下当月设备 OTA 已超出 1 次的设备数量。

点击超额数字可进入【OTA 超套餐额度设备明细】列表，查看当月超额 OTA 的设备的 OTA 使用情况。用户可自行根据需要选择产品或指定设备，以及具体日期来查阅数据。

<a data-fancybox title="img" href="/zh/guide/license-statistics-11.jpg">![img](/zh/guide/license-statistics-11.jpg)</a>

<br>

**设备 OTA 超套餐情况统计**

如图所示，此处展示账号下各产品下的设备，每月合计设备 OTA 超出 1 次的数量统计图表，以便于用户了解其设备 OTA 的超额使用情况。

用户可以自行根据需要的统计维度选择产品和统计周期查看数据。

<a data-fancybox title="img" href="/zh/guide/license-statistics-12.jpg">![img](/zh/guide/license-statistics-12.jpg)</a>

<br>

**设备 OTA 每日用量明细**

展示账户下所有产品的设备，每日 OTA 的总次数。

用户可以自行根据需要的统计维度选择产品和统计周期查看数据。

<a data-fancybox title="img" href="/zh/guide/OTA图表2.jpg">![img](/zh/guide/OTA图表2.jpg)</a>