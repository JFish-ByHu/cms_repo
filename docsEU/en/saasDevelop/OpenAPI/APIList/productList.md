# Query Product List


**API Address**:`/v2/quecproductmgr/r3/openapi/products`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**: `Query product list`


**Request Parameters**:


| Parameter Name | Parameter Description                | Request Type | Required | Data Type       | Schema |
| -------------- | ------------------------------------ | ------------ | -------- | -------------- | ------ |
| pageNum        | Page number (default: 1)             | query        | false    | integer(int32) |        |
| pageSize       | Page size, items per page (default: 10) | query     | false    | integer(int32) |        |
| productKey     | productKey                           | query        | false    | string         |        |


**Response Status**:


| Status Code | Description                                                  | Schema                        |
| ----------- | ------------------------------------------------------------ | ----------------------------- |
| 200         | OK                                                           | ActionResultOfListOfProductList |
| 401         | Unauthorized                                                 |                               |
| 403         | Forbidden                                                    |                               |
| 404         | Not Found                                                    |                               |
| 50000       | Service exception                                            |                               |
| 50005       | Parameter check error                                        |                               |
| 70000       | Hub service unavailable                                      |                               |
| 70089       | You have limited permission to operate this project or product or device |                               |
| 80005       | OpenAPI does not support setting AEP products                |                               |
| 91001       | Token does not exist                                         |                               |
| 91004       | Token incorrect                                              |                               |
| 91005       | Doesn't have permission                                      |                               |
| 91006       | User not in IP white list                                    |                               |
| 91007       | Please enable API permission                                 |                               |


**Response Parameters**:


| Parameter Name             | Parameter Description                                         | Type              | Schema        |
| -------------------------- | ------------------------------------------------------------- | ----------------- | ------------- |
| code                       | Return code                                                   | object            |               |
| data                       | Object                                                        | array             | Product List  |
| &emsp;&emsp;accessType     | Device type: 0-Direct device 1-Gateway device 2-Gateway sub-device | integer(int32)    |               |
| &emsp;&emsp;connectPlatform| Access platform: 0-Quectel Cloud Platform, 1-Telecom AEP Platform | integer(int32)    |               |
| &emsp;&emsp;createTime     | Creation time                                                 | string(date-time) |               |
| &emsp;&emsp;dataFmt        | Data format: 0-Transparent/Custom 3-Thing model               | integer(int32)    |               |
| &emsp;&emsp;logoPath       | Logo URL                                                      | string            |               |
| &emsp;&emsp;netWay         | Networking method: 1-WiFi(MQTT) 2-2G/3G/4G/5G(MQTT) 3-NB-IoT(LwM2M) 5-Bluetooth(HTTP) | string            |               |
| &emsp;&emsp;productKey     | Product key                                                   | string            |               |
| &emsp;&emsp;productName    | Product name                                                  | string            |               |
| &emsp;&emsp;updateTime     | Update time                                                   | string(date-time) |               |
| exp1                       |                                                               | string            |               |
| msg                        | Prompt message                                                | object            |               |
| pageNum                    | Current page number                                           | object            |               |
| pageSize                   | Items per page                                                | object            |               |
| pages                      | Total pages                                                   | object            |               |
| total                      | Total count                                                   | object            |               |


**Response Example**:
```javascript
{
    "code": 200,
    "data": [
        {
            "accessType": 0,
            "connectPlatform": 0,
            "createTime": "1730871606221",
            "dataFmt": 3,
            "logoPath": null,
            "netWay": "2",
            "productKey": "PK0001",
            "productName": "ProductName01",
            "updateTime": ""
        }
    ],
        "msg": "",
        "pageNum": 1,
        "pageSize": 10,
        "pages": 1,
        "total": 1
}
```
