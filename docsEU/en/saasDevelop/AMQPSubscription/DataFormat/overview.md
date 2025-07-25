# Data Format Overview

You can use AMQP subscription on Developer Center to subscribe to different types of messages. Each message type has a fixed data format. Developers can refer to this section to implement message monitoring and parsing.

List of Message Types

| Message Type                                    | Description                                                                                                                                   |
|:------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------|
| Online/Offline Event                            | Reports device status: online, offline, or reconnected.                                                                                       |
| Device and Module Status                        | Reports device status and module status:  battery level, voltage, signal strength, firmware version and ICCID.                                |
| Device Response                                 | Reports the status of a command issued to the device: successful sending, or failed sending.                                                  |
| Device Information Change                       | Operations performed on device: added modified deleted, or reset.                                                                             |
| Device Binding Information Change               | Data triggered by the changes of device binding information sent by terminal user.                                                            |
| Transparent Transmission - Device Uplink Data   | Device data reported through the transparent channel when the product data format is set to TSL model or transparent transmission.            |
| Transparent Transmission – Device Downlink Data | Downlink control command issued through the transparent channel when the product data format is set to TSL model or transparent transmission. |
| TSL - Property                                  | Data reported by the device of the product that TSL data format has been selected.                                                            |
| TSL - Event - Message                           | Event reported by the device of the product that TSL data format has been selected, with the level defined as INFO.                           |
| TSL - Event - Alert                             | Event reported by the device of the product that TSL data format has been selected, with the level defined as WARN.                           |
| TSL - Event - Fault                             | Event reported by the device of the product that TSL data format has been selected, with the level defined as ERROR.                          |
| TSL - Service - Calling Logs                    | Service data reported by the device of the product indicating that TSL data format has been selected.                                         |
| Device Positioning - Query Positioning Data     | Device positioning data sent to the device.                                                                                                   |
| Device Positioning - Original Data              | NMEA protocol-based positioning data reported by the device.                                                                                  |
| Device Positioning Data                         | NMEA protocol-based positioning data reported by the device. The data is parsed by Developer Center.                                          |
| Product Information Change                      | Changes in product information: added, modified, or deleted.                                                                                  |
| Product Authorization Information               | Changes in product authorization information: authorization granted or authorization cancelled.                                               |
| User domain(App) Authorization Information      | Changes in User domain(App) authorization information: authorization granted or authorization cancelled.                                      |
| TSL Model Release Information Change            | Newly-released TSL model.                                                                                                                     |
| Terminal User Information Change                | Changes in terminal user information: created, modified, or deleted.                                                                          |
| Rule Engine Event                               | Rule Engine Push Information.                                                                                                                 |

>Note: GPS and LBS are supported by device positioning feature. Only GPS data is pushed by default. If LBS data is required, please contact Acceleronix Technical Support <support@acceleronix.io>.


To subscribe to the changes in product information or TSL model release information, you should[create enterprise subscription](https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/createEnterpriseSubscribeUsingPOST)，终端用户信息变更需要通过OpenAPI[create terminal user subscription](https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/createEndUserSubscribeUsingPOST)
