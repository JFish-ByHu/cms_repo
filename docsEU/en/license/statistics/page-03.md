# Usage Monitoring – Service Subscription

This section introduces the calculation rule and how to view the data of service subscriptions on Developer Center.

**Note: A new billing mechanism will be operated on Developer Center from July 2025.**

## Service Subscription Description

The number of service subscriptions only counts the number of messages that SaaS applications subscribe to AMQP from the paid queue.

Each SaaS application can create only 1 free message queue.

If you have additional requirements, you can create paid queues.

Navigation: "**SaaS Development**" > Select a SaaS application in "**SaaS Management**" > "**Message Subscription**" > "**Message** **Queue**".

**Note: Please purchase service subscription resource packages before using paid queues. When the service subscription top-up balance reaches 0, paid queues will stop receiving push messages.**

<a data-fancybox title="img" href="/en/guide/license-statistics-13.jpg">![img](/en/guide/license-statistics-13.jpg)</a>

**Remaining Service Subscriptions in Top-up Packages**

This section displays the remaining quantity of device service subscriptions in top-up packages purchased under the account.

<br />
1. Resource top-up packages under the account can be used by all applications within the account.

2. When the account has remaining service subscriptions in top-up packages, paid queues created under the account can continue to subscribe to AMQP messages, and the usage will be directly deducted from the top-up package.

3. When the top-up package balance reaches 0, paid queues will stop receiving push messages.

**Therefore, if you have created paid queues as needed, please make sure to purchase a top-up package in advance to maintain sufficient balance for the normal operation of your business.**

**Service Subscription Top-up Package Details**

This section displays the quantity change records of service subscription top-up packages purchased under the account. The change types include purchases, deductions for daily usage, bill deductions, and expiration.

<a data-fancybox title="img" href="/en/guide/license-statistics-14.jpg">![img](/en/guide/license-statistics-14.jpg)</a>

**Purchase Service Subscriptions Top-up Packages**

Click "**Purchase Service Subscription Top-up Package**" to enter the store and quickly purchase top-up package resources.

<a data-fancybox title="img" href="/en/guide/license-statistics-15.jpg">![img](/en/guide/license-statistics-15.jpg)</a>

**Service Subscription Usage**

As shown in the figure, this section displays the total service subscription usage for the current month, which is calculated only for the paid queues.

<a data-fancybox title="img" href="/en/guide/license-statistics-16.jpg">![img](/en/guide/license-statistics-16.jpg)</a>

**Paid Queue Service Subscription Statistics**

As shown in the figure, this section displays the service subscription usage for all paid queues under the account, which is aggregated by month, helping you to understand the service subscription usage of the paid queues.

You can select the application, queue, and statistical period according to your needs to view the data.

<a data-fancybox title="img" href="/en/guide/license-statistics-17.jpg">![img](/en/guide/license-statistics-17.jpg)</a>