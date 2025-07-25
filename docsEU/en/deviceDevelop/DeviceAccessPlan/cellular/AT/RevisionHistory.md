# Revision History

## __Version 2.19.0__
>* Added the features of sub-device OTA upgrade and positioning.

## __Version 2.18.0__
>* Changed the UUID of a device from DeviceKey to module MAC address and IMEI number when device information is quired in AT command solution.
>* Got all parameter values when all parameters are null in Ql_iotSysGetDevInfo() in QuecOpen solution.
>* Added the built-in Wi-Fi positioning feature.
>* Added the feature of getting NTP time zones.
>* Supported the TSL model in RAW format.
>* Added the unique-DeviceSecret-per-device authentication feature.
>* Added TSL model service.
>* Added data acquisition feature for the devices connected to Developer Center over CoAP.
>* Added a mechanism that a sub-device resends the information after failing to send offline information.
>* Added the mechanism that a DTU can request a sub-device to resend the Modbus protocol again when reading sub-device information.
>* Added the feature of sending the URL of the firmware download to the MCU when a SOTA upgrade is performed.

## __Version 2.10.6__
>* Added the requirement that only one slave can be added to a directly connected device in DTU-Modbus solution.
>* Added the feature of event-triggered report.
>* Supported discrete magnitude in DTU-Modbus solution.


## __Version 2.10.5__
>* Added Ql_iotTtlvldAddFloat in OpenAPI, which allows you to add the precision of a specified floating-point number.
>* After the firmware has been upgraded, the device must be connected to Developer Center to verify whether the FOTA is performed successfully.


## __Version 2.10.4__
>* Updated device binding demand (BindSecret can be updated when ProductKey, ProductSecret, DeviceKey or DeviceSecret changes.)
>* DeviceSecret is not cleared any longer when the IP address of the local device server is configured.

## __Version 2.10.3__

>* Updated the device resetting feature.
>* Updated the device binding feature.
>* Fixed Developer Center OTA potential defect.
>* Fixed the bug when HTTP OTA SDK is ported to the module.
>* Fixed the memory leakage of TSL model in JSON format in AT command solution.

## __Version 2.10.0__

>* Supported ModBus communication protocol.
>* Supported the wireless gateway feature.
>* Supported resetting DS.
>* Supported returning a PkgId to identify the uplink data after the uplink data is sent out.
>* Added the ModBus sub-device-related feature related.

## __Version 2.9.2__

>* Supported reporting BindCode.
>* Supported adaptation layer in configuring the length of data read and sent by the AT command.
>* Modified HTTP OTA upgrade command.
>* Fixed the asynchronous problem of OTA upgrade thread.
>* Optimized error code processing mechanism.
>* Added the scenario distinctions of Developer Center issuing error codes.
>* Added the repeated communication package filtering mechanism.

## __Version 2.9.0__

>* Supported sub-device accessing and communicating with Developer Center.
>* Optimized the device data sending and receiving logic.
>* Added HTTP OTA support for multi-firmware plans.

## __Version 2.8.3__

>* Supported  HTTP OTA solution.
>* Added DNS optimization processing.  
>* Added OTA support for multiple components and multiple firmware.
>* Optimized resource locking of socket management in the kernel layer.

## __Version 2.8.2__

>* Added the event notification of 2,10476 when the network connection is abnormal after the device initiates access to M2M.
>* Added an interface for an application to configure DK and DS.
>* Added the penalty mechanism for M2M access exceptions.  
>* Supported JSON-format data in TSL AT command solution. 
>* Supported forcible conversion of HTTP domain names in production environments.
>* Added IP cache after DNS resolution, allowing direct IP connection in subsequent attempts unless IP fails, in which case DNS can be reused.

## __Version 2.7.2__

>* Supported LAN UDP discovering devices, only for LAN devices.
>* Supported server domain name switching and PK/PS switching by connecting to a new MQTT broker.
>* Supported optional encryption of M2M communication data.

## __Version 2.6.1__

>* Modified the location reporting command and supported reporting external GPS data.
>* Added APIs for obtaining device information and status.
>* Added encrypted storage of users' configuration data with AES128 ECB pcks#7.
>* Added the positioning feature.  
>* Added the condition that ERROR is returned when the transparent transmission data or TSL data is null.
>* Changed the limit for sending data using quos_socket from the number of nodes to the total number of bytes sent (Default: 50 K bytes. Determined by actual chip RAM.)  


## __Version 2.3.4__

>* Changed the result notification of sending a TSL model; Successful sending is now indicated by 4,10210 and sending failure is now indicated by 4,10310.
>* Supported transparent transmission of AT commands.


## __Version 2.3.3__

>* Changed the result notification of sending a TSL model; Successful sending (4,10210) and sending failure (4,10310).  
>* Restored SDK version number to 2.3.3.

