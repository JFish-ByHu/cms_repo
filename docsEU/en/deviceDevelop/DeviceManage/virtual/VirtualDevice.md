# Virtual Device

With the virtual device, you can simulate real communication data of your application before the hardware is developed. This enables you to debug data interactions and preview application outputs. To bind the virtual device, simply scan the QR code using our mobile App.

## **Virtual Device Goes Online/Offline** 

One virtual device can be enabled for each product under each account.

You need to provide the DeviceKey and SN to create a virtual device, but you can also use the default values, if needed.

Once you have created a virtual device, you can click "**Go Online**" or "**Go Offline**" to change its online status.

The virtual device can remain online for up to 24 hours, after which it will automatically go offline.

Virtual sub-devices must be bound to a virtual gateway to go online.

## **Simulate Data Reporting** 

You can simulate real device reporting of TSL data through the Property, Event, and Service Call pages on the left-hand side of the screen. To do so, follow these steps:

1. Select the TSL model you want to report.
2. Set the specific value that you expect to be reported.
3. Click "**Push**".

Once the TSL data has been pushed successfully, the application (App or AMQP consumer client) can receive the uplink data of the device. (Uplink messages can only be pushed when the virtual device is online.)

You can set the Delayed Response Time to simulate non-real-time response situations such as querying device status and service callback response on the application.


## **Communication Logs** 

When a virtual device goes online/offline, receives downlink TSL data, or simulates reporting TSL data, the communication details will be displayed on the "Communication Log" page.

NOTE: The virtual device feature is currently unavailable for the products with China Telecom NB-IoT or Bluetooth as radio access technology, or Transparent Transmission/Custom as data format.
