# 用量监控（设备消息数）

本文介绍平台中设备消息数的计算规则与数据查看操作。

**特别说明：自 2025 年 7 月起，本平台按新的收费机制运行。**

## 设备消息数说明

设备消息指设备和平台交互上下行的消息，其数量按每台设备每天的维度计算。

**设备消息包括以下消息类型：**

1、设备的物模型上下行消息

2、设备的数据透传上下行消息

3、设备中由开发者程序主动发起信息获取的上下行消息，例如模组信息、设备时区查询等

4、设备获取定位的上下行消息

5、设备发起 OTA 请求的上行消息

**以下消息类型不计入设备消息数：**

1、设备异常通知

2、设备管理命令

3、OTA 升级过程平台响应 OTA 请求的消息

4、设备上下线消息

5、设备心跳

**设备消息条数的计算方式：**

1、每 512 bytes 计 1 条，单条消息大小 / 512byte，当无法整除时，数值向上取整。

2、发送成功的消息才会计入。

## 设备的每日消息数机制

1、 每个设备每天的设备消息数额度，仅限单日使用。

2、 每日 0 点开始计数，从 0 条开始累加，直至达到其套餐的消息数额度为止。

3、 达到其套餐消息数额度后，该设备当日不可再上下行消息，直至次日 0 点恢复额度，次日可正常上下行消息。

4、 若账户下有消息数补充包余量，则每日计数达到其套餐消息数额度后的使用数量，从补充包中扣减。

举例：

某设备 D123456 所归属套餐中消息数额度每日 1500 条，2025 年 5 月 1 日 0 点起，开始从 0 累加该设备的当日消息数，至 2025 年 5 月 1 日 15:00:00，该设备使用消息数达到 1500 条。

则 2025 年 5 月 1 日 15:00:00 至 24:00:00，设备 D123456 上行消息或下发指令都无法送达。

2025 年 5 月 2 日 0 点起，该设备可正常上下行消息，消息数从 0 开始计算。

另外，若在设备 D123456 消息数使用量达到额度时，账号下消息数补充包余量>0，则该设备可以继续使用补充包中的消息数，直至余量为 0 止。

<a data-fancybox title="img" href="/zh/guide/license-statistics-01.jpg">![img](/zh/guide/license-statistics-01.jpg)</a>

## 消息数补充包余量

展示账号下所购买的设备消息数补充包剩余数量。

注：购买激活码套餐时选择了设备消息数额度档位，例如 4000 条/每日/每设备。则每个设备每日上下行消息数上限为 4000 条。每日额度仅限当日使用，使用数超额时，需购买消息数补充包以抵扣。

1、 账号下的资源补充包，账号下的所有设备都可以使用。

2、 当账号下的消息数补充包有余量时，则允许设备每日消息数超出套餐额度，超出套餐额度的使用量将直接从补充包中扣减。

3、 当补充包余量为 0 时，设备的单日消息数不允许超出套餐额度。

**因此，若您的设备有超出套餐额度使用消息数的场景，请务必提前购买补充包，留足够的余量以支持业务正常运行。**

**消息数补充包明细**

展示账号下消息数补充包的数量变更明细记录，其变更类型包括赠送、购买、抵扣设备超额用量、抵扣账单、过期。

<a data-fancybox title="img" href="/zh/guide/license-statistics-02.jpg">![img](/zh/guide/license-statistics-02.jpg)</a>

<a data-fancybox title="img" href="/zh/guide/license-statistics-03.jpg">![img](/zh/guide/license-statistics-03.jpg)</a>

<br >

**申请调试资源**

平台提供调试资源包，用于开发者调试使用。每个账号只允许申请一次。

建议您在开发新设备或设备消息上报频率需要优化时申请使用。

点击“申请调试资源”即可按提示操作。

**购买消息补充包**

点击“购买消息补充包”按钮，可进入商城，快速购买补充包资源。

<a data-fancybox title="img" href="/zh/guide/license-statistics-04.jpg">![img](/zh/guide/license-statistics-04.jpg)</a>

<br >

**消息超套餐额度的设备**

展示账号下当日设备消息数已超出其套餐中设备消息数额度的设备数量。

点击超额数字可进入【消息数超套餐额度设备明细】列表，查看当日超套餐设备的消息数使用情况。用户可自行根据需要选择产品或指定设备，以及具体日期来查阅数据。

<a data-fancybox title="img" href="/zh/guide/license-statistics-05.jpg">![img](/zh/guide/license-statistics-05.jpg)</a>

<br >

**设备消息超套餐情况统计**

如图所示，此处展示账号下各产品下的设备，每日合计设备消息数超出套餐额度的数量统计图表，以便于用户了解其设备消息数的超额使用情况。

用户可以自行根据需要的统计维度选择产品和统计周期，以及分类的设备消息数统计数据查看。

<a data-fancybox title="img" href="/zh/guide/license-statistics-06.jpg">![img](/zh/guide/license-statistics-06.jpg)</a>
