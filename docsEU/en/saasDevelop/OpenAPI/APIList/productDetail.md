# Query Product Details


**API Address**:`/v2/quecproductmgr/r3/openapi/product/detail`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`View product details`


**Request Parameters**:


| Parameter Name | Parameter Description | Request Type | Required | Data Type | Schema |
| -------------- | --------------------- | ------------ | -------- | --------- | ------ |
| productKey     | productKey            | query        | true     | string    |        |


**Response Status**:


| Status Code | Description                                                  | Schema                    |
| ----------- | ------------------------------------------------------------ | ------------------------- |
| 200         | OK                                                           | ActionResultOfProductDetails |
| 401         | Unauthorized                                                 |                           |
| 403         | Forbidden                                                    |                           |
| 404         | Not Found                                                    |                           |
| 50000       | Service exception                                            |                           |
| 50005       | Parameter check error                                        |                           |
| 70000       | Hub service unavailable                                      |                           |
| 70017       | Product does not exist                                       |                           |
| 70089       | You have limited permission to operate this project or product or device |                           |
| 80005       | OpenAPI does not support setting AEP products                |                           |
| 91001       | Token does not exist                                         |                           |
| 91004       | Token incorrect                                              |                           |
| 91005       | Doesn't have permission                                      |                           |
| 91006       | User not in IP white list                                    |                           |
| 91007       | Please enable API permission                                 |                           |


**Response Parameters**:


| Parameter Name                            | Parameter Description                                         | Type              | Schema          |
| ----------------------------------------- | ------------------------------------------------------------- | ----------------- | --------------- |
| code                                      | Return code                                                   | object            |                 |
| data                                      | Object                                                        | Product Details   | Product Details |
| &emsp;&emsp;accessType                    | Device type: 0-Direct device 1-Gateway device 2-Gateway sub-device | integer(int32)    |                 |
| &emsp;&emsp;connectPlatform               | Access platform: 0-Quectel Cloud Platform, 1-Telecom AEP Platform | integer(int32)    |                 |
| &emsp;&emsp;createTime                    | Creation time                                                 | string(date-time) |                 |
| &emsp;&emsp;dataFmt                       | Data format: 0-Transparent/Custom 3-Thing model               | integer(int32)    |                 |
| &emsp;&emsp;logoPath                      | Logo URL                                                      | string            |                 |
| &emsp;&emsp;netWay                        | Networking method: 1-WiFi(MQTT) 2-2G/3G/4G/5G(MQTT) 3-NB-IoT(LwM2M) 5-Bluetooth(HTTP) | string            |                 |
| &emsp;&emsp;productConfig                 | Product configuration                                         | Product Configuration | Product Configuration |
| &emsp;&emsp;&emsp;&emsp;aiCapabilityStatus | AI capability switch status, false:Off, true:On, default false | boolean           |                 |
| &emsp;&emsp;productKey                    | Product key                                                   | string            |                 |
| &emsp;&emsp;productName                   | Product name                                                  | string            |                 |
| &emsp;&emsp;updateTime                    | Update time                                                   | string(date-time) |                 |
| exp1                                      |                                                               | string            |                 |
| msg                                       | Prompt message                                                | object            |                 |
| pageNum                                   | Current page number                                           | object            |                 |
| pageSize                                  | Items per page                                                | object            |                 |
| pages                                     | Total pages                                                   | object            |                 |
| total                                     | Total count                                                   | object            |                 |


**Response Example**:
```javascript
{
    "code": 200,
    "data": {
        "accessType": 0,
            "connectPlatform": 0,
            "createTime": "1730871606221",
            "dataFmt": 3,
            "logoPath": null,
            "netWay": "1",
            "productConfig": {
            "aiCapabilityStatus": true
        },
        "productKey": "PK0001",
            "productName": "ProductName01",
            "updateTime": "1730871699999"
    },
    "msg": "",
        "pageNum": 1,
        "pageSize": 10,
        "pages": 1,
        "total": 1
}
```
