# SaaS Application Data Communication

## **Background**

After accessing Developer Center, your device and server communicate with each other through Developer Center.  The flow chart of message forwarding on Developer Center is shown below:


<a data-fancybox title="img" href="/en/saasDevelop/image2022-3-14_15-30-55.png">![img](/en/saasDevelop/image2022-3-14_15-30-55.png)</a>

You can control the device remotely through a SaaS application by using either our SaaS SDK or OpenAPI, both of which are available on Developer Center. For API details, see [OpenAPI Overview](OpenAPI/API_accessInstruction.md).

You can subscribe to different types of events based on your specific business scenario by using AMQP subscription function of Developer Center, such as the real-time notifications for device online and offline events, device uplink data, and device status change. For details, see [AMQP Message Subscription Overview](/saasDevelop/AMQPSubscription/subscription/AMQPinfo).
