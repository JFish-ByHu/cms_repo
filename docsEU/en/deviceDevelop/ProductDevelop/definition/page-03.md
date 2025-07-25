# Custom Feature

Personalized features can be defined according to specific hardware product features or usage scenarios. Custom features only work for the current product.

## **Add a Custom Feature**

In "**Draft Mode**" on the "**Define Feature**" page, you can add custom features by clicking "**Add a Custom Feature**" under "**Custom Features**" tab.

### **Add a Custom Property**

In the pop-up window, select "**Property**" in the feature type drop-down box and enter the required parameters, then click "**Confirm**" to add a custom property.

<a data-fancybox title="img" href="/en/deviceDevelop/creatproduct/customizefunction01.png">![img](/en/deviceDevelop/creatproduct/customizefunction01.png)</a>

Parameters

| Parameters                 | **Description**                                              |
| -------------------------- | ------------------------------------------------------------ |
| Feature ID                 | Properties, events, and services of each product are unique. The system assigns an ID by default and supports custom input of positive integers within the range of 1 to 8000. |
| Feature Name               | Name of the property, such as power consumption. The value cannot exceed 128 characters. |
| Identifier                 | The identifier of the feature, which corresponds to the feature ID. Application uses it to exchange the key fields with the device. Properties, events, and services of each TSL model are unique. |
| Data Type                  | Supported Data Types: BOOL, INT, FLOAT, DOUBLE, ENUM, TEXT, DATE, RAW, STRUCT, ARRAY. See [Supported Data Types](https://iot-docs.acceleronix.io/deviceDevelop/ProductDevelop/definition/page-01.html#supported-data-types) for details. |
| Value Range                | If the data type is numeric (INT/FLOAT/DOUBLE), the minimum and maximum values  can be limited. |
| Step Length                | If the data type is numeric (INT/FLOAT/DOUBLE), you can set the minimum granularity of property variations. |
| Unit                       | If the data type is numeric (INT/FLOAT/DOUBLE), you can enter the corresponding unit according to feature types. |
| Data Length                | If the data type is TEXT, you must limit the length of the text. Maximum text length cannot exceed 10,240 bytes. |
| Maximum Number of Elements | When the data type is ARRAY, you must set the maximum length of the array. |
| Element Type               | When the data type is ARRAY, you must specify the element type in the array to make sure that every array element is of the same type. |
| Read/Write Feature Subtype | R: read only; W: write only; RW: read and write.             |
| Description                | Description or remarks on the feature. Maximum length cannot exceed 200 characters. |

### **Add a Custom Event**

In the pop-up window, select "**Event**" in the feature type drop-down box and enter the required parameters, then click "**Confirm**" to add a custom event.

<a data-fancybox title="img" href="/en/deviceDevelop/creatproduct/customizefunction02.png">![img](/en/deviceDevelop/creatproduct/customizefunction02.png)</a>

Parameters

| **Parameter**    | **Description**                                              |
| ---------------- | ------------------------------------------------------------ |
| Feature ID       | Properties, events, and services of each product are unique. The system assigns a ID by default and supports custom input of positive integers within the range of 1 to 8000. |
| Feature Name     | Name of the event, such as over-voltage alert. The value cannot exceed 128 characters. |
| Identifier       | The identifier of the feature, which corresponds to the feature ID. Application uses it to exchange the key fields with the device. Properties, events, and services of each TSL model are unique. |
| Event Type       | Message: a general notification reported by a device, such as the completion of a task.<br/>Alert: an emergency or exception that a running device actively reports to Developer Center. The alert information has a high priority and requires immediate attention.<br/>Fault: an emergency or exception that a running device actively reports to Developer Center. The fault information has a high priority and requires immediate attention. |
| Output Parameter | The output parameters of an event are used to carry a property or a custom parameter when an alert or fault event is triggered. For example, if a fault event is defined and the voltage property is selected as the output parameter, the voltage value of the device will be carried in the fault event reported by the device. This information can be used to determine the cause of the fault and take appropriate actions. |
| Description      | Description or remarks on the feature. Maximum length cannot exceed 200 characters. |

### **Add a Custom Service**

In the pop-up window, select "**Service**" in the feature type drop-down box and enter the required parameters, then click "**Confirm**" to add a custom service.

<a data-fancybox title="img" href="/en/deviceDevelop/creatproduct/customizefunction03.png">![img](/en/deviceDevelop/creatproduct/customizefunction03.png)</a>

Parameters

| **Parameter**    | **Description**                                              |
| ---------------- | ------------------------------------------------------------ |
| Feature ID       | Properties, events, and services of each product are unique. The system assigns a ID by default and supports custom input of positive integers within the range of 1 to 8000. |
| Feature Name     | Name of the service, such as open/close gate. The value cannot exceed 128 characters. |
| Identifier       | The identifier of the feature, which corresponds to the feature ID. Application uses it to exchange the key fields with the device. Properties, events, and services of each TSL model are unique. |
| Call Type        | ASYNC: The service is called asynchronously, and Developer Center returns the results directly without waiting for a response from the device. You can correlate the device's response with the message through the ticketID.<br/> |
| Input Parameter  | The input parameter of the service, which is optional. Click "**Add a Parameter**" to add the service input parameter in the pop-up window. You can use a property or customize a parameter as an input parameter. |
| Output Parameter | The output parameter of the service, which is optional. Click "Add a Parameter" to add the service output parameter in the pop-up window. You can use a property or customize a parameter as an output parameter. |
| Description      | Description or remarks on the feature. Maximum length cannot exceed 200 characters. |

## Release Application

After defining the product feature, click "**Save Changes**". Upon success, changes work for all devices under the product. These devices need to transmit data according to the latest TSL model definitions.

<a data-fancybox title="img" href="/en/deviceDevelop/creatproduct/customizefunction04.png">![img](/en/deviceDevelop/creatproduct/customizefunction04.png)</a>

