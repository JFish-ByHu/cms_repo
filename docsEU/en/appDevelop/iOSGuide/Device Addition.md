# Device Addition

The core library SDK (QuecIotSdk) provides the capability to add online devices and configure smart devices onto a router.

## Feature Description

You can add the following three types of devices:

- Bluetooth-only devices
- Wi-Fi & BLE dual-mode devices
- Cellular devices

Among these, a cellular device goes online directly after startup and can be added via its serial number. Similarly, a Wi-Fi device can also be added via its serial numbers once the network is provisioned and comes online. 

Bluetooth-only devices cannot directly connect to the platform and can only be bound to the app through searching devices nearby for nearby use
