# AMQP SDK Integration Example

AMQP is used for SaaS system integration, enabling SaaS applications to receive device uplink data in real-time. The SDK facilitates rapid integration.

## Prerequisites

1. Before using the AMQP service, you need to click "**Create a SaaS Application**" under the "**SaaS Development**" -> "**SaaS Management**" menu.
2. On the "**SaaS Development**" -> "**Message Subscription**" -> "**Message Queue**" page, create or use an existing queue, and obtain the queue name which is required for SDK initialization.
3. On the "**SaaS Development**" -> "**Message Subscription**" -> "**Subscription List**" page, create a product-level subscription and configure the required event types as needed. (Note: Different data levels support different subscribable event types.)
4. If you need to manage message subscription features through the SaaS application, please activate and authorize the message subscription service package on "**SaaS Development**" -> "**Service Market**" page.
5. Obtain the AccessKey and AccessSecret, which are required for SDK initialization.

## **Development Environment Preparation**

The example uses the following development environment:

● Operating System: Windows 10<br />
● JDK Version: [JDK8](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html) <br />
● Integrated Development Environment: [IntelliJ IDEA Community Edition](https://www.jetbrains.com/idea/)

## **SDK Example**

1. Download the jar package (Maven dependency used in this example):

```
<dependency>
    <groupId>com.quectel.aiot</groupId>
    <artifactId>quecloud-sdk-dev-msg</artifactId>
    <version>1.9.0.RELEASE</version>
</dependency>
```

2. Initialize the SDK

Create an AmqpClient object to store AccessKey/AccessSecret, connectionUrl and queueName.

3. Calling steps:

a) Complete the SDK initialization and get the corresponding AmqpClient object.

b) Call the start method of the AmqpClient object to connect to RabbitMQ and receive messages.

The SDK provides two ways to process received messages. 

- **Method 1:** Custom message handling via the DeliverCallback class.
- **Method 2:** Implement HandleMessage, where each method corresponds to a type of uplink data (e.g., device online/offline, ACK messages).

3. Code example

```
public void msgUpLinkDemo(){
    AmqpClient amqpClient = new AmqpClient("${accessKey}","${accessSecret}","${connectionUrl}","${queueName}");
    HandleMessage handleMessage = new HandleMessageImpl();
    amqpClient.start(handleMessage);
}

```

For detailed demo codes, see GitHub:

[https://github.com/thridparty-cloud2/quecloud-sdk-dev-msg-demonstration.git](https://github.com/thridparty-cloud2/quecloud-sdk-dev-msg-demonstration.git)

4.Uplink data types corresponding to methods in HandleMessage object

| Method Name       | Message Type                                                 |
| :---------------- | :----------------------------------------------------------- |
| upAndDownLine     | Online/Offline events                                        |
| deviceStatus      | Device status                                                |
| upLink            | Uplink, reporting transparent transmission commands          |
| downLink          | Downlink, issuing transparent transmission commands          |
| reqack            | ACK confirmation message                                     |
| mAttrRead         | Downlink, issued command of reading TSL properties           |
| mAttrReadresp     | Uplink, response to reading TSL properties                   |
| mAttrWrite        | Issued command of writing TSL properties                     |
| mAttrReport       | Uplink, corresponding to the Event message type of the TSL data packet protocol, reporting TSL properties. |
| mServInput        | Downlink, TSL service execution request, corresponding to the Write message type of the transparent data packet protocol. |
| mServOutput       | Uplink, TSL service execution response, corresponding to the Event message type of the transparent data packet protocol. |
| mEventInfo        | Uplink, corresponding to the Event message type of the TSL data packet protocol, reporting TSL events. |
| mEventWarn        | Uplink, corresponding to the Event message type of the TSL data packet protocol, reporting TSL alerts. |
| mEventError       | Uplink, corresponding to the Event message type of the TSL data packet protocol, reporting TSL faults. |
| locationMode      | Setting location information sending mode.                   |
| locationQuery     | Querying location information, If this parameter is null, the saved MODE will be returned. |
| locationInfoRaw   | Response to location information query and active reporting of location information. |
| locationInfoKV    | Response to location information query and active reporting of location information. |
| enduserUserAdd    | End user information change - add                            |
| enduserUserUpdate | End user information change - modify                         |
| enduserUserDelete | End user information change - delete                         |
| enduserUserBind   | End user device binding information                          |
| productAddAndDel  | Product addition/deletion/product authorization information  |
| productUpdate     | Product information change                                   |
| deviceModelInfo   | Product TSL model information change                         |
| deviceAddAndDel   | Device addition/deletion                                     |
| deviceUpdate      | Device information modification                              |

## **Error Codes**

For details, see [Error Codes](/saasDevelop/errorCode).