# 用量监控（服务订阅数）

本文介绍平台中服务订阅数的计算规则与数据查看操作

**特别说明：自 2025 年 7 月起，本平台按新的收费机制运行。**

## 服务订阅数说明

服务订阅数仅计算 SaaS 应用从收费队列中订阅 AMQP 的消息数。

每个 SaaS 应用仅支持创建一条免费的消息队列。

若开发者有额外需求，可创建收费队列。

创建入口:【SaaS 开发】-选择 SaaS 应用-【消息订阅】-【消息队列】

**注：使用收费队列前购买服务订阅数资源补充包。当服务订阅数补充包余量为 0 时，收费队列将无法接收推送消息。**

<a data-fancybox title="img" href="/zh/guide/license-statistics-13.jpg">![img](/zh/guide/license-statistics-13.jpg)</a>

<br />

**服务订阅数补充包余量**

展示账号下所购买的服务订阅数补充包剩余数量。

<br />

1. 账号下的资源补充包，账号下的所有应用都可以使用。

2. 当账号下的服务订阅数补充包有余量时，则允许账号下创建的收费队列正常订阅 AMQP 消息，使用量将直接从补充包中扣减。

3. 当补充包余量为 0 时，收费队列将无法接收推送消息。

<br />

**因此，若您因需创建了收费队列，请务必提前购买补充包，留足够的余量以支持业务正常运行。**

<br />

**服务订阅数补充包明细**

展示账号下服务订阅数补充包的数量变更明细记录，其变更类型包括购买、抵扣单日用量、抵扣账单、过期。

<a data-fancybox title="img" href="/zh/guide/license-statistics-14.jpg">![img](/zh/guide/license-statistics-14.jpg)</a>

<br />

**购买服务订阅补充包**

点击“购买服务订阅补充包”按钮，可进入商城，快速购买补充包资源。

<a data-fancybox title="img" href="/zh/guide/license-statistics-15.jpg">![img](/zh/guide/license-statistics-15.jpg)</a>

<br />

**服务订阅数用量**

如图所示，此处展示当月的服务订阅数使用总量，仅针对收费队列计算。

<a data-fancybox title="img" href="/zh/guide/license-statistics-16.jpg">![img](/zh/guide/license-statistics-16.jpg)</a>

<br />

**收费队列服务订阅数统计**

如图所示，此处展示账号下全部收费队列的服务订阅数用量，按月度合计，以便于用户了解其收费队列的服务订阅数使用情况。

用户可以自行根据需要的统计维度选择应用、队列和统计周期查看数据。

<a data-fancybox title="img" href="/zh/guide/license-statistics-17.jpg">![img](/zh/guide/license-statistics-17.jpg)</a>
