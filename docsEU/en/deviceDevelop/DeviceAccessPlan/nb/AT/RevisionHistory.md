# Revision History

## Version 2.2.2
>* Optimized the print that may lead to the dump of coolwatcher.
>* Added the length limit of ProductKey/ProductSecret.
>* Fixed the problem of module dump in buffer mode.
>* Optimized the DNS policy in PSM mode.
>* Optimized the format and value range in the response of some test commands.

## Version 2.2.1
>* Optimized the compatibility of AT and QuecOpen solutions.
>* Optimized DNS policy.

## Version 2.2.0
>* Optimized the feature that the receiver filters duplicative packages automatically when receiving data.
>* Fixed module dump caused by OTA upgrade failure.
>* Fixed the problem of precision loss for floating-point numbers.
>* Fixed the problem that no other data can be sent when a block of data failed to be sent when data is sent by blocks.
>* Fixed the problem that the linked list is not cleared when the device disconnects from Developer Center.
>* Fixed the problem that ACK error occurs occasionally when the device sending data.
>* Changed the default connection domain name.

## Version 2.1.3
>* Modified the device information reporting policy.
>* Fixed the problem that the information of a device integrated with a Quectel module is displayed incompletely when the device is connected to China Telecom AEP platform. 


## Version 2.1.2

>* Supports device bootstrap and registration on Developer Center.
>* Supported registering devices on China Telecom AEP. 
>* Supported obtaining and reporting module basic information and status.
>* Added the business feature of downlinking and uplinking transparent transmission data.
>* Added the business feature of TSL model reporting, delivery, Developer Center reading request and device response. 
>* Supported choosing TSL model  data format from TTLV and JSON .
>* Added the business feature of reporting the location data of the built-in positioning feature and the location data obtained from external GNSS module.
>* Supported FOTA and SOTA (unavailable to devices connected to China Telecom AEP currently).
>* Supported DTLS communication and encrypting session communication data.
>* Supported configuring DK and DS.