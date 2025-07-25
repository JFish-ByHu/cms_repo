# Query Latest Product Thing Model (JSON Format)


**API Address**:`/v2/quectsl/openapi/product/export/tslFile`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Get thing model data (JSON format)`


**Request Parameters**:


| Parameter Name | Parameter Description                                         | Request Type | Required | Data Type       | Schema |
| -------------- | ------------------------------------------------------------- | ------------ | -------- | -------------- | ------ |
| language       | Language: CN/EN (default: CN)                                 | query        | false    |                |        |
| productId      | Product ID, corresponds one-to-one with productKey, serves as unique primary key. If this parameter is provided, productKey is not needed. If both productId and productKey are provided, productId takes precedence | query        | false    | integer(int64) |        |
| productKey     | Product Key, corresponds one-to-one with productId, serves as unique primary key. If this parameter is provided, productId is not needed. If both productId and productKey are provided, productId takes precedence | query        | false    | string         |        |


**Response Status**:


| Status Code | Description                                                  | Schema       |
| ----------- | ------------------------------------------------------------ | ------------ |
| 200         | OK                                                           | ActionResult |
| 401         | Unauthorized                                                 |              |
| 403         | Forbidden                                                    |              |
| 404         | Not Found                                                    |              |
| 50000       | Service exception                                            |              |
| 50005       | Parameter check error                                        |              |
| 50006       | The productID or productKey is empty                         |              |
| 50007       | The deviceID, productKey or deviceKey is empty               |              |
| 70000       | Hub service unavailable                                      |              |
| 70017       | Product does not exist                                       |              |
| 70063       | The device with transparent transmission mode does not support sending TSL model data |              |
| 70089       | You have limited permission to operate this project or product or device |              |
| 70097       | The TSL model of the selected product is empty               |              |
| 71006       | TSL model data of current version is not found               |              |
| 71009       | The target product belongs to a hardware solution that is different from original product |              |
| 71010       | The original product TSL data to be copied does not exist    |              |
| 80005       | OpenAPI does not support setting AEP products                |              |
| 91001       | Token does not exist                                         |              |
| 91004       | Token incorrect                                              |              |
| 91005       | Doesn't have permission                                      |              |
| 91006       | User not in IP white list                                    |              |
| 91007       | Please enable API permission                                 |              |


**Response Parameters**:


| Parameter Name | Parameter Description | Type   | Schema |
| -------------- | --------------------- | ------ | ------ |
| code           | Return code           | object |        |
| data           | Object                | object |        |
| exp1           |                       | string |        |
| msg            | Prompt message        | object |        |
| pageNum        | Current page number   | object |        |
| pageSize       | Items per page        | object |        |
| pages          | Total pages           | object |        |
| total          | Total count           | object |        |


**Response Example**:
```javascript
{
    "code": 200,
        "msg": "OK",
        "data": {
        "profile": {
            "tslVersion": "1.2.0",
                "productKey": "PK0001",
                "version": "20250531064139554"
        },
        "services": [
            {
                "outputData": [
                    {
                        "$ref": "#/properties/id/10"
                    }
                ],
                "inputData": [
                    {
                        "specs": {
                            "length": "4096"
                        },
                        "code": "raw1",
                        "dataType": "RAW",
                        "name": "raw parameter",
                        "id": 7
                    }
                ],
                "code": "fuwu",
                "name": "Service",
                "subType": "ASYNC",
                "id": 22,
                "sort": 14,
                "type": "SERVICE",
                "desc": ""
            },
            {
                "outputData": [
                    {
                        "$ref": "#/properties/id/1"
                    }
                ],
                "code": "fw",
                "name": "Service without input",
                "subType": "ASYNC",
                "id": 23,
                "sort": 19,
                "type": "SERVICE",
                "desc": ""
            },
            {
                "inputData": [
                    {
                        "specs": {
                            "length": "100"
                        },
                        "code": "fwu_text_cans",
                        "dataType": "TEXT",
                        "name": "fwu_text_cans",
                        "id": 42,
                        "desc": ""
                    }
                ],
                "code": "fwu_text",
                "name": "Service-text",
                "subType": "ASYNC",
                "id": 41,
                "sort": 26,
                "type": "SERVICE",
                "desc": ""
            }
        ],
            "properties": [
            {
                "specs": {
                    "unit": "",
                    "min": "1",
                    "max": "10000",
                    "multiple": "",
                    "step": "1"
                },
                "code": "int01",
                "dataType": "INT",
                "name": "int read-write",
                "subType": "RW",
                "id": 1,
                "sort": 1,
                "type": "PROPERTY",
                "desc": ""
            },
            {
                "specs": {
                    "unit": "",
                    "min": "-4294967295",
                    "max": "4294967295",
                    "multiple": "",
                    "step": "0.1"
                },
                "code": "float",
                "dataType": "FLOAT",
                "name": "float",
                "subType": "R",
                "id": 3,
                "sort": 2,
                "type": "PROPERTY",
                "desc": ""
            },
            {
                "specs": {
                    "unit": "",
                    "min": "-4294967295",
                    "max": "4294967295",
                    "multiple": "",
                    "step": "0.1"
                },
                "code": "double01",
                "dataType": "DOUBLE",
                "name": "double read-write",
                "subType": "RW",
                "id": 6,
                "sort": 3,
                "type": "PROPERTY",
                "desc": ""
            },
            {
                "specs": [
                    {
                        "dataType": "BOOL",
                        "name": "1",
                        "value": "true"
                    },
                    {
                        "dataType": "BOOL",
                        "name": "2",
                        "value": "false"
                    }
                ],
                "code": "bool",
                "dataType": "BOOL",
                "name": "bool",
                "subType": "RW",
                "id": 10,
                "sort": 4,
                "type": "PROPERTY",
                "desc": ""
            },
            {
                "specs": [
                    {
                        "dataType": "ENUM",
                        "name": "Property description 1",
                        "value": "1"
                    },
                    {
                        "dataType": "ENUM",
                        "name": "Property description 2",
                        "value": "2"
                    },
                    {
                        "dataType": "ENUM",
                        "name": "Property description 3",
                        "value": "3"
                    },
                    {
                        "dataType": "ENUM",
                        "name": "Property description 4",
                        "value": "4"
                    }
                ],
                "code": "enum",
                "dataType": "ENUM",
                "name": "Enum type",
                "subType": "RW",
                "id": 11,
                "sort": 5,
                "type": "PROPERTY",
                "desc": ""
            },
            {
                "specs": {
                    "length": "123"
                },
                "code": "text",
                "dataType": "TEXT",
                "name": "Text type",
                "subType": "RW",
                "id": 14,
                "sort": 6,
                "type": "PROPERTY",
                "desc": ""
            },
            {
                "specs": {
                    "length": "4096"
                },
                "code": "raw",
                "dataType": "RAW",
                "name": "raw",
                "subType": "RW",
                "id": 15,
                "sort": 7,
                "type": "PROPERTY",
                "desc": ""
            },
            {
                "specs": {
                    "length": "13"
                },
                "code": "date",
                "dataType": "DATE",
                "name": "date",
                "subType": "RW",
                "id": 16,
                "sort": 8,
                "type": "PROPERTY",
                "desc": ""
            },
            {
                "specs": [
                    {
                        "specs": {
                            "unit": "",
                            "min": "1",
                            "max": "10",
                            "multiple": "",
                            "step": "1"
                        },
                        "code": "struct_int",
                        "dataType": "INT",
                        "name": "struct_int",
                        "id": 1
                    },
                    {
                        "specs": {
                            "unit": "",
                            "min": "1",
                            "max": "10",
                            "multiple": "",
                            "step": "1"
                        },
                        "code": "double11",
                        "dataType": "DOUBLE",
                        "name": "double parameter",
                        "id": 2
                    },
                    {
                        "specs": {
                            "length": "100"
                        },
                        "code": "struct_text",
                        "dataType": "TEXT",
                        "name": "struct_text",
                        "id": 3
                    }
                ],
                "code": "struct",
                "dataType": "STRUCT",
                "name": "struct",
                "subType": "RW",
                "id": 17,
                "sort": 9,
                "type": "PROPERTY",
                "desc": ""
            },
            {
                "specs": {
                    "numberSpecs": {
                        "min": "-2147483648",
                        "max": "2147483647",
                        "step": "1"
                    },
                    "size": "10",
                    "dataType": "INT"
                },
                "code": "array_int",
                "dataType": "ARRAY",
                "name": "array_int",
                "subType": "RW",
                "id": 18,
                "sort": 10,
                "type": "PROPERTY",
                "desc": ""
            },
            {
                "specs": {
                    "unit": "",
                    "min": "-4294967295",
                    "max": "4294967295",
                    "multiple": "",
                    "step": "0.1"
                },
                "code": "double02",
                "dataType": "DOUBLE",
                "name": "double write-only",
                "subType": "W",
                "id": 19,
                "sort": 11,
                "type": "PROPERTY",
                "desc": ""
            },
            {
                "specs": {
                    "unit": "",
                    "min": "-2147483648",
                    "max": "2147483647",
                    "multiple": "",
                    "step": "1"
                },
                "code": "int02",
                "dataType": "INT",
                "name": "int read-only",
                "subType": "R",
                "id": 20,
                "sort": 12,
                "type": "PROPERTY",
                "desc": ""
            },
            {
                "specs": {
                    "specs": [
                        {
                            "specs": [
                                {
                                    "dataType": "BOOL",
                                    "name": "true",
                                    "value": "true"
                                },
                                {
                                    "dataType": "BOOL",
                                    "name": "false",
                                    "value": "false"
                                }
                            ],
                            "code": "buer",
                            "dataType": "BOOL",
                            "name": "Boolean parameter",
                            "id": 1
                        }
                    ],
                    "size": "10",
                    "dataType": "STRUCT"
                },
                "code": "arr",
                "dataType": "ARRAY",
                "name": "Array with struct",
                "subType": "RW",
                "id": 8,
                "sort": 15,
                "type": "PROPERTY",
                "desc": ""
            },
            {
                "specs": {
                    "unit": "",
                    "min": "1",
                    "max": "1000",
                    "multiple": "",
                    "step": "1"
                },
                "code": "dx_float",
                "dataType": "FLOAT",
                "name": "read-write float",
                "subType": "RW",
                "id": 9,
                "sort": 16,
                "type": "PROPERTY",
                "desc": ""
            },
            {
                "specs": [
                    {
                        "specs": {
                            "unit": "",
                            "min": "1",
                            "max": "100",
                            "multiple": "10",
                            "step": "1"
                        },
                        "code": "sfloat",
                        "dataType": "FLOAT",
                        "name": "sfloat",
                        "id": 1
                    }
                ],
                "code": "struct_float",
                "dataType": "STRUCT",
                "name": "Struct_float_multiple of 10",
                "subType": "RW",
                "id": 12,
                "sort": 17,
                "type": "PROPERTY",
                "desc": ""
            },
            {
                "specs": {
                    "size": "1",
                    "dataType": "RAW"
                },
                "code": "array_raw",
                "dataType": "ARRAY",
                "name": "array_raw",
                "subType": "RW",
                "id": 13,
                "sort": 18,
                "type": "PROPERTY",
                "desc": ""
            },
            {
                "specs": {
                    "size": "10",
                    "dataType": "TEXT"
                },
                "code": "array_text",
                "dataType": "ARRAY",
                "name": "array_text",
                "subType": "RW",
                "id": 39,
                "sort": 24,
                "type": "PROPERTY",
                "desc": ""
            },
            {
                "specs": {
                    "specs": [
                        {
                            "specs": {
                                "length": "100"
                            },
                            "code": "array_struct_text",
                            "dataType": "TEXT",
                            "name": "array_struct_text",
                            "id": 1
                        }
                    ],
                    "size": "10",
                    "dataType": "STRUCT"
                },
                "code": "array_struct_text",
                "dataType": "ARRAY",
                "name": "array_struct_text",
                "subType": "RW",
                "id": 40,
                "sort": 25,
                "type": "PROPERTY",
                "desc": ""
            }
        ],
            "events": [
            {
                "code": "shijian",
                "name": "Event",
                "subType": "INFO",
                "id": 21,
                "sort": 13,
                "type": "EVENT",
                "desc": ""
            },
            {
                "outputData": [
                    {
                        "specs": [
                            {
                                "specs": [
                                    {
                                        "dataType": "BOOL",
                                        "name": "true",
                                        "value": "true"
                                    },
                                    {
                                        "dataType": "BOOL",
                                        "name": "false",
                                        "value": "false"
                                    }
                                ],
                                "code": "c_bool",
                                "dataType": "BOOL",
                                "name": "c_bool",
                                "id": 1
                            }
                        ],
                        "code": "info_struct",
                        "dataType": "STRUCT",
                        "name": "info_struct",
                        "id": 25
                    }
                ],
                "code": "info",
                "name": "Information event",
                "subType": "INFO",
                "id": 24,
                "sort": 20,
                "type": "EVENT",
                "desc": ""
            },
            {
                "outputData": [
                    {
                        "specs": {
                            "numberSpecs": {
                                "min": "1",
                                "max": "1000",
                                "step": "1"
                            },
                            "size": "10",
                            "dataType": "INT"
                        },
                        "code": "canshu_array_int",
                        "dataType": "ARRAY",
                        "name": "parameter_array_int",
                        "id": 27
                    }
                ],
                "code": "gaojin",
                "name": "Alarm event",
                "subType": "WARN",
                "id": 26,
                "sort": 21,
                "type": "EVENT",
                "desc": ""
            },
            {
                "outputData": [
                    {
                        "specs": {
                            "specs": [
                                {
                                    "specs": [
                                        {
                                            "dataType": "ENUM",
                                            "name": "Description 1",
                                            "value": "1"
                                        },
                                        {
                                            "dataType": "ENUM",
                                            "name": "Description 2",
                                            "value": "2"
                                        }
                                    ],
                                    "code": "c_enum",
                                    "dataType": "ENUM",
                                    "name": "c_enum",
                                    "id": 1
                                }
                            ],
                            "size": "10",
                            "dataType": "STRUCT"
                        },
                        "code": "canshu_array_struct",
                        "dataType": "ARRAY",
                        "name": "parameter_array_struct",
                        "id": 29
                    }
                ],
                "code": "error",
                "name": "Fault event",
                "subType": "ERROR",
                "id": 28,
                "sort": 22,
                "type": "EVENT",
                "desc": ""
            },
            {
                "outputData": [
                    {
                        "specs": [
                            {
                                "dataType": "BOOL",
                                "name": "true",
                                "value": "true"
                            },
                            {
                                "dataType": "BOOL",
                                "name": "false",
                                "value": "false"
                            }
                        ],
                        "code": "sj_bool",
                        "dataType": "BOOL",
                        "name": "event_bool",
                        "id": 31,
                        "desc": ""
                    },
                    {
                        "specs": {
                            "unit": "",
                            "min": "1",
                            "max": "1000",
                            "step": "1"
                        },
                        "code": "sj_int",
                        "dataType": "INT",
                        "name": "event_int",
                        "id": 32,
                        "desc": ""
                    },
                    {
                        "specs": {
                            "unit": "",
                            "min": "1",
                            "max": "10000",
                            "step": "1"
                        },
                        "code": "sj_float",
                        "dataType": "FLOAT",
                        "name": "event_float",
                        "id": 33,
                        "desc": ""
                    },
                    {
                        "specs": {
                            "unit": "",
                            "min": "1",
                            "max": "100",
                            "step": "1"
                        },
                        "code": "sj_double",
                        "dataType": "DOUBLE",
                        "name": "event_double",
                        "id": 34,
                        "desc": ""
                    },
                    {
                        "specs": [
                            {
                                "dataType": "ENUM",
                                "name": "Description 1",
                                "value": "1"
                            },
                            {
                                "dataType": "ENUM",
                                "name": "Description 2",
                                "value": "2"
                            },
                            {
                                "dataType": "ENUM",
                                "name": "Description 3",
                                "value": "3"
                            }
                        ],
                        "code": "sj_enum",
                        "dataType": "ENUM",
                        "name": "event_enum",
                        "id": 35,
                        "desc": ""
                    },
                    {
                        "specs": {
                            "length": "1024"
                        },
                        "code": "sj_text",
                        "dataType": "TEXT",
                        "name": "event_text",
                        "id": 36,
                        "desc": ""
                    },
                    {
                        "specs": {
                            "length": "4096"
                        },
                        "code": "sj_raw",
                        "dataType": "RAW",
                        "name": "event_raw",
                        "id": 37,
                        "desc": ""
                    },
                    {
                        "specs": {
                            "length": "13"
                        },
                        "code": "sj_date",
                        "dataType": "DATE",
                        "name": "event_date",
                        "id": 38,
                        "desc": ""
                    }
                ],
                "code": "shijian_jd",
                "name": "Event with simple types",
                "subType": "WARN",
                "id": 30,
                "sort": 23,
                "type": "EVENT",
                "desc": ""
            }
        ]
    }
}
```
