# Product Configuration

Developer Center provides various product-level feature configuration capabilities for upper-layer application systems, including basic configurations and App configurations.

<a data-fancybox title="img" href="/en/deviceDevelop/creatproduct/productconfig01.png">![img](/en/deviceDevelop/creatproduct/productconfig01.png)</a>

# Basic Configurations

## Dynamic Authentication Access

When dynamic authentication is enabled, you only need to pre-download ProductKey and ProductSecret on each device. After successful authentication by the Developer Center, DeviceSecret will be issued to the device. You can enable or disable dynamic authentication based on your security requirements.

When dynamic authentication is disabled, devices that have not been added or connected to Developer Center cannot be authenticated successfully.

## Auto-Renewal

**Note: To ensure the normal operation of your business, the automatic renewal feature of activation codes at the product level is enabled by default. This means that when the activation code of a device under this product expires, the device will automatically consume a new activation code under this product. If you do not wish for automatic renewal of activation codes for a specific product, please disable the feature manually.**

When the auto-renewal feature is enabled, add specified devices to the automatic renewal blacklist, which means the specified devices will not automatically consume activation codes when the activation codes in use expire. Thus, these devices will be taken offline and set to an inactive state.

<a data-fancybox title="img" href="/en/deviceDevelop/creatproduct/productconfig02.png">![img](/en/deviceDevelop/creatproduct/productconfig02.png)</a>

1. Click “**Set**” in the "**Automatic Renewal**" card. A pop-up window will display devices in the automatic renewal blacklist, where automatic renewal settings are disabled for devices in this list.

2. Click “**Add Device**" to add specified devices to the automatic renewal blacklist, so that no more activation codes will be automatically consumed by the devices after the activation codes in use expire.

3. Click “**Remove**” to remove devices from the automatic renewal blacklist. Once removed, these devices will automatically consume a new activation code when the current one expires.

# App Configurations

## Allow Binding Permission

When using the Acceleronix official App "Wonderfree", OEM App or an App developed based on the Acceleronix App SDK, you can configure the devices' binding permissions for users.

**Multi-Binding:** User B can bind the device successfully despite user A having bound to the same device before.

**Single Binding**: User B fails to bind the device if user A has bound to the same device before.

**Alternate Binding:** User B can bind the device successfully despite user A having bound to the same device before. However, user A is automatically unbound from the device and cannot continue to use it.

Note: If a device under the current product is bound by a user, the binding mode cannot be changed.

Please note that binding relationships are only effective within the same App. Bindings between users of different Apps do not affect each other.

## Language

Through the "Language" feature, you can configure the product name, TSL properties, network provisioning guide, product panel, and message push content in different languages to cater to users in the target sales regions of the product.

**Language Management**

Developer Center provides configuration options in Chinese and English by default. When you need to configure other languages, you can add them through "**Language Management**". Once the language is added, input fields for the new language will appear in the editing pop-up window.

**Product Name:**

The default product name usually is displayed in the device list after the network provisioning is completed in the App.

**TSL Model:**

You can configure texts in different languages for the released TSL models, usually displayed on the App device panel.

When App users enter the device panel, the configured text will be displayed based on the language they are using in the App. If no multi-language content is set, the text input when the TSL model was created will be used.

Note: If a TSL model has been released, but there are no configurable language labels in the "Language" feature, please release the TSL model again.

**Message Push:**

You can configure texts in different languages for the notification rules that have been set up through "**Configure Product**" -> "**Rule Engine**".

When a notification rule is triggered, the corresponding text content will be pushed to the App based on the user's current language.

**Network Provisioning Guide:**

You can configure texts in different languages for the steps in the network provisioning guide that has been set up through "**Configure Product**" -> "**Network Provisioning Guide**".

**Product Panel**

You can configure texts in different languages for the panel content associated with the current product through "**Product Interaction**" -> "**Panel Configuration**".

**Export/Import:**

You can export the currently configurable language labels in bulk, edit them offline, and then re-import them. "Import" can only configure existing language labels for the product.

## Network Provisioning Guide

When using an OEM App, you can add the guide text and image for each step of the network provisioning process displayed in the App.

Images can be uploaded in JPG, JPEG, or PNG format, and step texts cannot exceed 100 characters.

A network provisioning guide can include at most 5 steps.

## Rule Engine

The rule engine can be used to push alert messages to App users or WeChat mini-program users or to push alert events to SaaS clients based on device reporting data or device online/offline events.

When creating a rule, you need to drag components from the left panel onto the canvas and configure the data flow by connecting the components. You can click on the components that have been dragged onto the canvas for detailed configuration.

<a data-fancybox title="img" href="/en/deviceDevelop/creatproduct/productconfig03.png">![img](/en/deviceDevelop/creatproduct/productconfig03.png)</a>

| Component Name                           | Description                                                  |
| ---------------------------------------- | ------------------------------------------------------------ |
| Input - Device Data                      | Rules can be triggered by the following device data:<br/>●Device Reporting TSL Data: Set the properties and events reported by devices under TSL products as trigger conditions.<br/>●Device Reporting Location Data: Set the location data reported by the device as trigger conditions.<br/>●Device Online: Set the device's online events as trigger conditions.<br/>●Device Offline: Set the device's offline events as trigger conditions. You can set the offline duration to trigger some rules.<br/>●Device Reset: Set the device's reset events as trigger conditions.<br/>●Device Not Reporting Data for a Long Time: Set the device not reporting data for a continuous duration as trigger conditions. |
| Processing Method - Logic Rule           | This component can only be used when "Device Reporting TSL Data" is selected as the trigger condition.<br/>**Trigger Mode:**<br/>**Continuous Trigger:** A message push is triggered every time the trigger condition is met. For example, if the trigger is set to occur when the illumination value exceeds 400 lux, a message push will be sent whenever the device reports an illumination value of 401 lux, 410 lux or higher. <br />**Edge Trigger:** The trigger condition is only triggered once when the critical value is reached, and needs to be reached again before a second trigger occurs. For example, when the illumination value is set to trigger when it is greater than 400 lux, the message push will be triggered when the illumination value first reaches over 400 lux. However, if the device continues to report 410 lux or 420 lux, the message push will not be triggered. The message push will only be triggered for a second time when the device reports an illumination value greater than 400 lux after reporting an illumination value less than 400 lux.<br/>**Comparison Parameter 1:**<br/>Configure the TSL properties that trigger the rule. Each type of property supports different judgment rules.<br />BOOL: Triggered by data reporting or True/False;<br />INT/FLOAT/DOUBLE: Triggered by data reporting or the reported value being greater than, less than, or equal to a specific value; <br />ENUM: Triggered by data reporting or a specific enumeration value; <br />TEXT: Triggered by data reporting or the reported text being equal to a specific text; <br />RAW: Triggered by data reporting; <br />DATE: Triggered by data reporting or the reported time being greater than, less than or equal to a specific time; <br />ARRAY: Triggered by data reporting;<br />STRUCT: Triggered by data reporting or a specific structure parameter, with rules consistent with ordinary properties.<br/>**Comparison Parameter 2:**<br/>●Fixed Value: When "Comparison Parameter 1" is a numeric type, a fixed value can be used for comparison.<br/>●Property: Comparison with other properties of the same type as "Comparison Parameter 1" can be configured.<br/>●Arithmetic Operation: When "Comparison Parameter 1" is a numeric type, you can choose to perform arithmetic operations on the specified numeric property and compare the result. |
| Processing Method - Geofence             | This component can only be used when device reporting location data is selected as the trigger condition.<br/>You can set a circular or polygonal geofence and specify the device's entering or exiting the geofence as the trigger condition. |
| Rule Filtering - Device Filtering        | Optional component.<br/>Device Whitelist: Only devices in the whitelist under the current product can trigger this rule. **<br/>**Device Blacklist: All devices except those in the blacklist under the current product can trigger this rule.<br/>When setting the device whitelist or blacklist, you must enter the DeviceKey of the devices, with each DeviceKey on a new line. |
| Rule Filtering - Push Interval           | Optional component.<br/>Messages are not pushed repeatedly within the push interval. The maximum interval is 24 hours. |
| Execution Action - Control Device        | This component is only available for TSL products.<br/>When a rule is triggered, pre-configured control commands will be sent to the device that triggered the rule. |
| Execution Action - AMQP Push             | When the rule is triggered, an event will be pushed to the AMQP client that has subscribed to the rule engine message type.<br/>Custom parameters can be configured to distinguish different rule events. |
| Action Execution - Message Notification  | When a rule is triggered, a message will be pushed to the App users who have bound the device. You need to set the title and content of the message. |
| Action Execution - Official Account Push | When a rule is triggered, a message will be pushed to the WeChat mini-program users who have bound the device through the official account. You need to link to the approved template and the corresponding parameters.<br/>Note: You must first add the official account configuration in **Personal Center** > **Third-Party Configuration** > **Official Account Configuration**. |

## Linkage Configuration

When using the Acceleronix official App, OEM App or an App developed based on the Acceleronix App SDK, you can use the automation linkage feature. Before use, you need to configure the trigger conditions and actions that the current product can support for automation linkage, triggered by or executed by the device.

For trigger conditions and actions, only TSL properties in BOOL, INT, FLOAT, DOUBLE, and ENUM types can be selected. After saving the configuration, you can select the configured properties when adding automation in the App.

## Product Manual

Once you add a manual, mobile users can view the electronic manual for the product. The manual can be uploaded as a PDF file with a size of up to 20 MB. Enterprise can add product manuals in different languages based on various user groups and set a specific language version as the default manual.

## Data Aggregation

If the mobile end (App or mini-program, etc.) needs to use the TSL statistics API, you can configure the TSL properties that need to be aggregated.

By clicking "**Configure**", you can add TSL properties in INT, FLOAT and DOUBLE types. After you save the configuration, the system will aggregate the properties reported by the device and query the maximum, minimum, average values, etc.

If aggregation analysis is no longer needed, you can delete the corresponding properties.

## User Subscription Notifications

When using the Acceleronix official App, OEM App or an App developed based on the Acceleronix App SDK, you can enable the user subscription notification feature. Once the feature is enabled, if an App user subscribes to device status via WebSocket (e.g., entering the "**Device Details**" page), the device will receive a user subscription notification. You are allowed to adjust the data reporting frequency as needed, so that you can view real-time device status.

## Device QR Code

You can upload the relationship between the DK and the QR code for mobile users to scan the QR code and bind the device. 

When the device is a cellular product, the DeviceKey can be configured as the QR code for device binding.

## AI Capability

When using the Acceleronix official App, AI smart recommendation prompts will be displayed in the App after AI capabilities are enabled.

## Low-power Configuration

If the solution you selected supports low-power mode, you can view this configuration card.

When using the Acceleronix official App, OEM App or an App developed based on the Acceleronix App SDK, you can configure the low-power heartbeat interval and downlink message cache duration.

Once this feature is enabled, if a device is offline but still within the low-power heartbeat interval, its status will be displayed as low-power in the App. If the device exceeds the low-power heartbeat interval and has no data interaction with Developer Center, the status will change to Offline.

When this feature is enabled, all operations including offline message push notifications will be triggered according to the low-power heartbeat interval timeout.

## Prioritize Activating Device via Bluetooth

This feature can be enabled for Wi-Fi products. When the device cannot connect to a router, it can be activated by connecting to a mobile phone via Bluetooth, ensuring uninterrupted App user experience.

