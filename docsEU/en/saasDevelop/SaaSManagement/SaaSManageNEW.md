# Quick Integration Guide
To integrate a SaaS system with the Developer Center, you need to create a SaaS application object and obtain the AccessKey and AccessSecret required to access system data. For SaaS applications, data access can be restricted through API authorization, App authorization, and product authorization.

## Create a SaaS Application

After logging in to Developer Center, click "**Create a SaaS Application**" on the "**SaaS Development**" page.

Step 1: Enter the SaaS application name and description, then click "**Confirm**" to complete the SaaS application creation.

Step 2: Click the SaaS application card to enter the application details page, where you can obtain the AccessKey and AccessSecret in the right-hand information panel.

## Authorize an API Service

Step 3: On the API "**Service**" page, click "**Authorize a Service**" to associate service packages (Initial use requires activation).

SaaS applications can only call APIs included in authorized service packages.

For API categories and details, see the "**OpenAPI List**".

## Authorize Product Data Permissions

Step 4: On the "**Product**" page, click "**Authorize a Product**" to associate products.

A SaaS application can only access configuration and device data for authorized products.

A product can only be authorized to one SaaS application at a time.

## Authorize App Data Permissions

Step 5: On the "**App**" page, click "**Authorize an App**" to associate Apps.

A SaaS application can only access user data for authorized Apps.

## Create Message Subscriptions

### Queue Management

- For each SaaS application, you can create one free queue. Messages pushed through the free queue will not be billed.
- If multiple clients need to receive duplicate data, you can create paid queues for pushing replicated data. Messages pushed through paid queues will be counted into billing. Purchase a message subscription package before use.
- When an associated subscription is enabled, the queue will also be enabled synchronously.
- Each user can create a maximum of 50 queues. Message queues that have not been used for 30 days will be disabled to reclaim resources.
- In the queue details, you can view the consumption rate and backlog status.

**Note:**

- Queue name rule: Unique name with an account, with a maximum length of 64 characters.  Only uppercase and lowercase characters (case-sensitive), numbers, underscores (_), and hyphens (-) are supported, while slashes (/), spaces, or other characters are not supported.
- Queue name format: a.{identifier id}.{queue name}

| Queue Status | Description |
| -------- | ------------------------------------------------------------ |
| Not Started | The queue has no enabled subscriptions. |
| Enabled | The queue has relevant subscriptions and the subscriptions are enabled. When all related subscriptions are deleted, the queue status changes to "**Not Started**". |
| Disabled | The queue has no consumption for a long time and was suspended. When related subscriptions are re-enabled, the queue status changes to "**Enabled**". |

## Subscription Management

- Subscription management determines which message types a SaaS application receives. Developer Center supports creating three data-level subscriptions:
- SaaS-level subscription: Receive all product, device, and TSL model change events/data authorized for the SaaS application.
- Product-level subscription: Receive data only from devices under authorized products with enabled subscriptions.
- Device-level subscription: Receive data only from specific authorized devices with enabled subscriptions.

| Parameter | Description |
| --------------------------- | ------------------------------------------------------------ |
| Subscription Name | Enter the subscription name with a maximum length of 128 characters.  Only Chinese, uppercase and lowercase characters (case-sensitive), numbers, underscores (_), and hyphens (-) are supported, while slashes (/), spaces, or other characters are not supported. |
| Selected Product | Subscriptions are product-specific. |
| Data Level | Product-level: Subscribe to all device data under the selected product. Device-level: Subscribe to specific device data under the selected product. When device-level is selected, the page allows fuzzy search and query of specific devices. |
| Message Type (TSL Model) | Types of messages that can be subscribed to, including device online/offline events, device and module status, device command response data, TSL property information, TSL event reporting-information, TSL event reporting-alert, TSL event reporting-fault, TSL service calling logs, device positioning downlink information, device positioning raw information, device positioning information and device information changes. Multiple selections are supported, and you can refer to [SaaS Application Development](/saasDevelop/AMQPSubscription/subscription/dataFormatDefinition.md) for the specific message type data formats. |
| Message Type (Transparent transmission/Custom) | Types of messages that can be subscribed to, including device online/offline events, device and module status, device uplink data, device downlink data, device command response data, device positioning downlink information, device positioning raw information, device positioning information and device information changes. Multiple selections are supported, and you can refer to [SaaS Application Development](/saasDevelop/AMQPSubscription/subscription/dataFormatDefinition.md) for the specific message type data formats. |
| Message Queue | Select or create a message queue to bind to this subscription |

After the subscription is created, it will be in a "**Not Started**" state. You need to click "**Start**" to make the subscription rule take effect.

**Note:** Enabled subscription rules cannot be modified or deleted. If you want to modify a subscription rule, click "**Suspend**" first, then operate.