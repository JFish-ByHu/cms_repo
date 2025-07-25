# TSL Overview

## What is a TSL Model?

A Thing Specification Language (TSL) model digitally represents physical entities (such as lights, sockets, sensors and air conditioners) as sets of device feature definitions in the IoT platform. By abstracting device capabilities into properties and events, TSL model solves complex device modeling processes. TSL models only take effect within the current product.

Developer Center provides the import and export features for TSL models, enabling quick editing on local computer or server.

## Feature Types

You can define the TSL features of a product through properties, services and events, which respectively describe the nature of the product, its capabilities, and the information it can provide.

| **Feature Type** | **Description**                                              |
| :--------------- | :----------------------------------------------------------- |
| Property         | Properties are device capabilities that can be read and set. They are used to describe the running status of a device, such as the temperature, humidity, power, voltage and coordinate.  Applications can send requests to retrieve or set properties. |
| Event            | Events are classified into messages, alerts and faults. Devices can proactively report these events to Developer Center based on business scenarios. Applications can subscribe to different types of events as needed. |
| Service          | Service refers to externally invokable device capabilities or methods that support configurable input and output parameters, typically used in scenarios requiring execution result feedback from the device side. |

## Supported Data Types

You can use these data types to define product TSL features on Developer Center.

| **Data Type** | **Description**                                              | **Example**                                                  |
| :------------ | :----------------------------------------------------------- | :----------------------------------------------------------- |
| BOOL          | Boolean. Boolean values include 0 (false) or 1 (true).       | True: On; False: Off                                         |
| INT           | 32-bit integer.                                              | 10                                                           |
| FLOAT         | Single-precision floating-point with a maximum of 7 decimal places. | 1.1                                                          |
| DOUBLE        | Double-precision floating point with a maximum of 15 decimal places. | 1.23                                                         |
| ENUM          | ENUM is an enumeration data type that defines a set of named values, each represented by an integer. | 0 indicates cold wind, 1 indicates hot air, 2 indicates natural wind. |
| TEXT          | Text. It is transmitted in string format. The data cannot exceed 10,240 bytes in length. | "Hello,world"                                                |
| RAW           | Transparent transmission data type. The content to be sent is encoded in hexadecimal. The data cannot exceed 4096 bytes in length. | A1 2C                                                        |
| DATE          | Timestamp. A UTC timestamp in string format. Unit: milliseconds. | "1635839462000"                                              |
| STRUCT        | Structure. It is used for encapsulating complex data types. Parameters in the structure support BOOL, INT, FLOAT, DOUBLE, ENUM, TEXT, RAW and DATE data types. Structure nesting is not supported. | <span v-pre> { "name":"Tom", "age":20 } </span>              |
| ARRAY         | Array. You must specify the element type and number of elements in an array. Array elements support INT, FLOAT, DOUBLE, TEXT, RAW and STRUCT. The number of elements must be 1 to 100. | [1, 2, 3, 4, 5, 6]                                           |

## TSL File

Here is a sample TSL file in JSON format. Please follow the required format when exporting for editing:

```json
{
  "profile": {
    "tslVersion": "1.2.0",
    "productKey": "p11v14",
    "version": "20250324120550539"
  },
  //Service
  "services": [
    {
      //The output parameter of the service
      "outputData": [
        {
          "$ref": "#/properties/id/4"
        }
      ],
      //The input parameter of the service
      "inputData": [
        {
          "$ref": "#/properties/id/2"
        },
        {
          "$ref": "#/properties/id/3"
        }
      ],
      //Identifier
      "code": "speedMode",
      //The name of the feature
      "name": "Turbo Mode",
      //Service call type
      "subType": "ASYNC",
      //Feature ID
      "id": 7,
      //Number
      "sort": 7,
      //The type of feature definition
      "type": "SERVICE",
      //Description
      "desc": ""
    }
  ],
  //Property
  "properties": [
    {
      "specs": [
        {
          "dataType": "BOOL",
          //BOOL TRUE
          "name": "on",
          "value": "true"
        },
        {
          "dataType": "BOOL",
          //BOOL FALSE
          "name": "off",
          "value": "false"
        }
      ],
      //Identifier
      "code": "switch",
      //data type
      "dataType": "BOOL",
      //The name of the feature
      "name": "Switch",
      //Read/Write type
      "subType": "RW",
      //Feature ID
      "id": 1,
      //Number
      "sort": 1,
      //The type of feature
      "type": "PROPERTY",
      //Description
      "desc": ""
    },
    {
      "specs": {
        //unit
        "unit": "",
        //Minimum value
        "min": "18",
        //Maximum value
        "max": "32",
        //Step length
        "step": "1"
      },
      //Identifier
      "code": "setTemperature",
      //Data type
      "dataType": "INT",
      //The name of the feature
      "name": "Target temperature",
      //Read/Write type
      "subType": "RW",
      //Feature ID
      "id": 2,
      //Number
      "sort": 2,
      //The type of feature definition
      "type": "PROPERTY",
      //Description
      "desc": ""
    },
    {
      "specs": [
        {
          "dataType": "ENUM",
          //Enum value name of item 0
          "name": "Cooling",
          "value": "0"
        },
        {
          "dataType": "ENUM",
          //Enum value name of item 1
          "name": "Heating",
          "value": "1"
        },
        {
          "dataType": "ENUM",
          //Enum value name of item 2
          "name": "Fan",
          "value": "2"
        },
        {
          "dataType": "ENUM",
          //Enum value name of item 3
          "name": "Dehumidification",
          "value": "3"
        }
      ],
      "code": "mode",
      "dataType": "ENUM",
      "name": "Operation mode",
      "subType": "RW",
      "id": 3,
      "sort": 3,
      "type": "PROPERTY",
      "desc": ""
    },
    {
      "specs": [
        //The first parameter of struct
        {
          "specs": {
            "unit": "",
            "min": "-50",
            "max": "100",
            "step": "0.1"
          },
          "code": "temperature",
          "dataType": "FLOAT",
          "name": "Temperature",
          "id": 1
        },
        //The second parameter of struct 
        {
          "specs": {
            "unit": "",
            "min": "0",
            "max": "100",
            "step": "1"
          },
          "code": "humidity",
          "dataType": "INT",
          "name": "Humidity",
          "id": 2
        }
      ],
      "code": "sensor",
      "dataType": "STRUCT",
      "name": "Sensor",
      "subType": "R",
      "id": 4,
      "sort": 4,
      "type": "PROPERTY",
      "desc": ""
    },
    {
      "specs": {
        //Parameter structure in array
        "specs": [
          {
            "specs": {
              "length": "13"
            },
            "code": "startTime",
            "dataType": "DATE",
            "name": "Start time",
            "id": 1
          },
          {
            "specs": {
              "unit": "",
              "min": "18",
              "max": "32",
              "step": "1"
            },
            "code": "setTemperature",
            "dataType": "INT",
            "name": "Target temperature",
            "id": 2
          },
          {
            "specs": {
              "length": "13"
            },
            "code": "endTime",
            "dataType": "DATE",
            "name": "End time",
            "id": 3
          }
        ],
        //Maximum array size
        "size": "3",
        "dataType": "STRUCT"
      },
      "code": "Timer",
      "dataType": "ARRAY",
      "name": "Scheduled task",
      "subType": "RW",
      "id": 5,
      "sort": 5,
      "type": "PROPERTY",
      "desc": ""
    }
  ],
  //Events
  "events": [
    {
      //The output parameter of the event 
      "outputData": [
        {
          //Referenced property ID
          "$ref": "#/properties/id/4"
        }
      ],
      //Identifier
      "code": "temperatureAlarm",
      //The name of the feature
      "name": "Over-temperature alert",
      //Event type
      "subType": "WARN",
      //Feature ID
      "id": 6,
      //Number
      "sort": 6,
      //The type of feature
      "type": "EVENT",
      //Description
      "desc": ""
    }
  ]
}
```

## TSL Definition

| **Parameter** | **Description**                                              |
| :------------ | :----------------------------------------------------------- |
| id            | Feature ID. *id* of properties, events, and services in each product are unique. |
| code          | The identifier of the feature, which corresponds to the feature ID. Applications use it to exchange the key fields with the device. *code* of properties, events, and services in each product are unique. |
| name          | The name of the feature, which corresponds to the identifier. It is used to describe the purpose of the feature. |
| type          | Fixed value feature type. Only the following options can be input.<br/>● PROPERTY<br/>● EVENT<br/>● SERVICE |
| subType       | Subtype of feature type. Only the following options can be input.<br /><br /> When feature type=PROPERTY，*subType* is Read/Write:<br />● R: read only<br/>● W: write only<br/>● RW: read and write<br /><br />When feature type=EVENT, *subType* is event:<br/>● INFO: message<br/>● WARN: alert<br/>● ERROR: fault<br /><br />When feature type=SERVICE, *subType* is call:<br/>● ASYNC: asynchronous call |
| sort          | The number of a feature. It is used to manage display order of TSL model features in the UI. |
| desc          | Feature description, which helps users to clearly understand the meaning and function of a feature. |
| dataType      | Data type.<br/>BOOL, INT, FLOAT, DOUBLE, ENUM, TEXT, DATE, RAW, STRUCT, ARRAY. |
| specs         | When feature type=PROPERTY, *specs* is used to limit the structure of a data type.                                                                                                                                           ● When dataType=BOOL, *specs* contains the following fields: name (corresponding to true or false). value (fixed as true or false).<br/>● When dataType=INT/FLOAT/DOUBLE, *specs* contains the following fields: step (step length), min (minimum value), max (maximum value) and unit.                                             ● When dataType=ENUM, *specs* contains the following fields: name (corresponding to the enum value) and value (enum value).                                                                                     ● When dataType=TEXT/DATE/RAW, *specs* contains the following fields: length of TSL data. |
| inputData     | Input parameter. This field is available only when feature type=SERVICE. *inputData* can contain references to properties or newly created parameters. |
| outputData    | Output parameter. When feature type=SERVICE or EVENT, *outputData* can contain references to properties or newly created parameters. |
