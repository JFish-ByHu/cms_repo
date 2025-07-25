# Query Current Gateway by Sub-Device


**API Address**:`/v2/devicemgr/r1/openapi/product/gateway/getGatewayProductByChildDevice`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`

**API Description**:`Query gateway information based on sub-device (only returns information of the currently connected gateway)`


**Request Parameters**:


| Parameter Name | Parameter Description                  | Request Type | Required | Data Type | Schema |
| -------------- | -------------------------------------- | ------------ | -------- | --------- | ------ |
| deviceKey      | Device deviceKey (required)            | query        | true     | string    |        |
| productKey     | Product productKey (required)          | query        | true     | string    |        |
| language       | Language: CN/EN (default: CN)          | query        | false    | string    |        |


**Response Status**:


| Status Code | Description                                                  | Schema                                  |
| ----------- | ------------------------------------------------------------ | --------------------------------------- |
| 200         | OK                                                           | ActionResultOfOpenApiGatewayProductInfo |
| 401         | Unauthorized                                                 |                                         |
| 403         | Forbidden                                                    |                                         |
| 404         | Not Found                                                    |                                         |
| 50000       | Service exception                                            |                                         |
| 50005       | Parameter check error                                        |                                         |
| 50007       | The deviceID, productKey or deviceKey is empty               |                                         |
| 70000       | Hub service unavailable                                      |                                         |
| 70026       | The sub-device is not connected to the gateway device        |                                         |
| 70027       | Not a product of product integration                         |                                         |
| 70028       | There is no associated gateway device                        |                                         |
| 70029       | Not a sub-gateway product                                    |                                         |
| 70089       | You have limited permission to operate this project or product or device |                                         |
| 91001       | Token does not exist                                         |                                         |
| 91004       | Token incorrect                                              |                                         |
| 91005       | Doesn't have permission                                      |                                         |
| 91006       | User not in IP white list                                    |                                         |
| 91007       | Please enable API permission                                 |                                         |


**Response Parameters**:


| Parameter Name         | Parameter Description           | Type                      | Schema                    |
| ---------------------- | ------------------------------- | ------------------------- | ------------------------- |
| code                   | Return code                     | object                    |                           |
| data                   | Object                          | OpenApiGatewayProductInfo | OpenApiGatewayProductInfo |
| &emsp;&emsp;deviceKey  | Associated gateway device DK    | string                    |                           |
| &emsp;&emsp;deviceName | Associated gateway device name  | string                    |                           |
| &emsp;&emsp;productKey | Associated gateway product PK   | string                    |                           |
| &emsp;&emsp;productName| Associated gateway product name | string                    |                           |
| exp1                   |                                 | string                    |                           |
| msg                    | Prompt message                  | object                    |                           |
| pageNum                | Current page number             | object                    |                           |
| pageSize               | Items per page                  | object                    |                           |
| pages                  | Total pages                     | object                    |                           |
| total                  | Total count                     | object                    |                           |


**Response Example**:
```javascript
{
        "code": 200,
        "msg": "",
        "data": {
        "productKey": "PK0001",
            "productName": "ProductName01",
            "deviceKey": "DK00001",
            "deviceName": "DeviceName01"
    }
}
```
