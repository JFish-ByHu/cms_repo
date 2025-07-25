# Message Subscription

This section outlines the third step in SaaS development: message subscription.

Message subscription steps and flow are as follows:

<a data-fancybox title="img" href="/en/guide/image2022-3-21_16-14-0.png?version=1&modificationDate=1646716773000&api=v2">![img](/en/guide/image2022-3-21_16-14-0.png?version=1&modificationDate=1646716773000&api=v2)</a>

## **Prerequisites**

● At least one SaaS application has been created.

## **Steps**

### **1.Queue Management**

1.Log in to Developer Center, click "SaaS Development" → "Message Subscription" in the left-hand navigation bar to enter "Subscription List" page.

<a data-fancybox title="img" href="/en/guide/image2022-3-16_17-13-24.png?version=1&modificationDate=1646655516000&api=v2">![img](/en/guide/image2022-3-16_17-13-24.png?version=1&modificationDate=1646655516000&api=v2)</a>

2.Click "Message Queue" tab and then click "Create a Queue" to create a queue for future subscriptions.

Enter a queue name and, if necessary, a queue description to clarify the role or meaning of the queue. Then click "Confirm".

Note: The queue name under the active account must be unique and cannot exceed 64 characters. Uppercase and lowercase letters, digits, underscores (_), and hyphens (-) are supported, whereas slashes (/), spaces, and other special characters are not supported.

3.After the queue is created, it will be displayed in the queue list. You can click "View" or "Delete" in the Action column to view or delete the queue.

<span> Note: Queues must follow the naming convention of a. {Identifier ID}. {Queue Name}</span>

Each user can create up to 50 queues, and any queues that have not been used for 30 days will be deactivated for resource recycling.

4.Find the queue you want to view and click "View" in the Action column to view the consumption, basic, and connection information.

If the message accumulation is greater than 0, you can clear the messages manually.

| **Queue Status** | **Description**                                                                                                                                                                                                               |
| :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Inactive         | Indicates that there are no related subscriptions in the queue.                                                                                                                                                               |
| Started          | Indicates that there are   related subscriptions in a queue, and when the related subscriptions in the   queue are deleted, the queue status will change to Inactive.                                                         |
| Suspended        | Indicates that the queue has   been suspended due to being unavailable for a long time. Suspended queues   cannot be restored, and an additional column of deactivation times will be displayed   when viewing queue details. |

### **2.Subscription Management**

1.To set up message subscription for the queue, click "Subscription List" tab and then click "Subscribe" button to bring up the following window. Enter the required information from the window and then click "Confirm".

<a data-fancybox title="img" href="/en/guide/image2022-0706-04.png?version=1&modificationDate=1646710965000&api=v2">![img](/en/guide/image2022-0706-04.png?version=1&modificationDate=1646710965000&api=v2)</a>

Parameters 

| **Parameter**         | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Subscription Name     | Enter subscription name. The   value cannot exceed 128 characters. Chinese characters, uppercase and   lowercase letters, digits, underscores (_), and hyphens (-) are supported,   whereas special characters such as slashes (/), spaces, and others are not   supported.                                                                                                                                                                                                                        |
| Please select product | Subscribe to messages of a   specific product                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Data Level            | Product Level: Subscribe to   all device data under the selected product. Device Level: Subscribe to   specific device data under the selected product. If you select "Device   Level", you can fuzzy search and query specific devices on the page.                                                                                                                                                                                                                                               |
| Message Type (TSL)    | Select the type of message   to be subscribed to. It is possible to choose more than one of the following   message types: device online/offline events, device and module status, device   response, TSL-property, TSL-event-message, TSL-event-alert, TSL-event-fault,   TSL-service-calling logs, raw data of device location, device location   information, and device information change. For details on message types, See [SaaS Application Development](/saasDevelop/CommunicatOverview). |
| Message Type (Custom) | Select the type of message   to be subscribed to. It is possible to choose more than one of the following   message types: device online/offline events, device and module status, device   uplink/ downlink data, device response, raw data of device location, device   location information, and device information change. For details on message   types, see [SaaS Application Development](/saasDevelop/CommunicatOverview).                                                                |
| Message Queue         | Select or create a message   queue to bind this subscription                                                                                                                                                                                                                                                                                                                                                                                                                                       |

2.The subscription is not started automatically. You should find the subscription in "Subscription List" and click "Start" in the Action column for the subscription rules to take effect.

>Note: You cannot modify or delete a running subscription rule. To modify or delete the subscription rule click "Suspend" in the Action column.
