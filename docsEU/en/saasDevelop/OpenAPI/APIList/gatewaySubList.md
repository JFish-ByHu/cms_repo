# Query Sub-Devices Under Gateway


**API Address**:`/v2/devicemgr/r1/openapi/product/gateway/subList`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`

**API Description**:`Query sub-devices associated with gateway device`


**Request Parameters**:


| Parameter Name | Parameter Description                                         | Request Type | Required | Data Type       | Schema |
| -------------- | ------------------------------------------------------------- | ------------ | -------- | -------------- | ------ |
| deviceId       | Device ID, corresponds one-to-one with the productKey and deviceKey combination. If deviceId is provided, productKey and deviceKey combination is not needed. If you provide both deviceId and the productKey/deviceKey combination, deviceId takes precedence | query        | false    | integer(int64) |        |
| deviceKey      | Device Key. If deviceKey is provided, productKey must also be provided. The combination of productKey and deviceKey corresponds one-to-one with deviceId. If productKey and deviceKey combination is provided, deviceId is not needed. If you provide both deviceId and the productKey/deviceKey combination, deviceId takes precedence | query        | false    | string         |        |
| language       | Language: CN/EN (default: CN)                                 | query        | false    | string         |        |
| pageNum        | Page number (default: 1)                                      | query        | false    | integer(int32) |        |
| pageSize       | Page size, number of items per page (default: 10)             | query        | false    | integer(int32) |        |
| productKey     | Product Key. If productKey is provided, deviceKey must also be provided. The combination of productKey and deviceKey corresponds one-to-one with deviceId. If productKey and deviceKey combination is provided, deviceId is not needed. If you provide both deviceId and the productKey/deviceKey combination, deviceId takes precedence | query        | false    | string         |        |


**Response Status**:


| Status Code | Description                                                  | Schema                              |
| ----------- | ------------------------------------------------------------ | ----------------------------------- |
| 200         | OK                                                           | ActionResultOfListOfOpenApiDeviceDO |
| 401         | Unauthorized                                                 |                                     |
| 403         | Forbidden                                                    |                                     |
| 404         | Not Found                                                    |                                     |
| 50000       | Service exception                                            |                                     |
| 50005       | Parameter check error                                        |                                     |
| 50007       | The deviceID, productKey or deviceKey is empty               |                                     |
| 70000       | Hub service unavailable                                      |                                     |
| 70020       | Not a gateway product                                        |                                     |
| 70089       | You have limited permission to operate this project or product or device |                                     |
| 91001       | Token does not exist                                         |                                     |
| 91004       | Token incorrect                                              |                                     |
| 91005       | Doesn't have permission                                      |                                     |
| 91006       | User not in IP white list                                    |                                     |
| 91007       | Please enable API permission                                 |                                     |


**Response Parameters**:


| Parameter Name                | Parameter Description                                         | Type              | Schema          |
| ----------------------------- | ------------------------------------------------------------- | ----------------- | --------------- |
| code                          | Return code                                                   | object            |                 |
| data                          | Object                                                        | array             | OpenApiDeviceDO |
| &emsp;&emsp;activedTime       | Activation time                                               | integer(int64)    |                 |
| &emsp;&emsp;authMode          | Authentication method, 0-Dynamic authentication 1-Static authentication, 2-X509 authentication, default 0 | integer(int32)    |                 |
| &emsp;&emsp;createTime        | Creation time                                                 | integer(int64)    |                 |
| &emsp;&emsp;deviceKey         | Device key                                                    | string            |                 |
| &emsp;&emsp;deviceName        | Device name                                                   | string            |                 |
| &emsp;&emsp;deviceStatus      | Device status                                                 | integer(int32)    |                 |
| &emsp;&emsp;enabled           | Whether enabled: 0-Enabled, 1-Disabled, default enabled       | integer(int32)    |                 |
| &emsp;&emsp;fingerPrint       | Device certificate fingerprint                                | string            |                 |
| &emsp;&emsp;firstConnTime     | First connection time                                         | string(date-time) |                 |
| &emsp;&emsp;gatewayType       | Gateway authorization type: Default 0-Direct connection/No gateway, 1-Only proxy internet access, 2-Product integration | integer(int32)    |                 |
| &emsp;&emsp;id                | Device ID                                                     | integer(int64)    |                 |
| &emsp;&emsp;isActived         | Whether activated: 0-Not activated, 1-Activated               | integer(int32)    |                 |
| &emsp;&emsp;isLiveness        | Whether active: 0-Not active, 1-Active                        | integer(int32)    |                 |
| &emsp;&emsp;isVerified        | Whether to allow secondary authentication: 0-No, 1-Yes        | integer(int32)    |                 |
| &emsp;&emsp;isVirtual         | Whether virtual device: 0-Real, 1-Virtual                     | integer(int32)    |                 |
| &emsp;&emsp;lastConnTime      | Last online time                                              | string(date-time) |                 |
| &emsp;&emsp;lastOfflineTime   | Last offline time                                             | string(date-time) |                 |
| &emsp;&emsp;locateType        | Device location type                                          | string            |                 |
| &emsp;&emsp;moduleType        | Device model                                                  | string            |                 |
| &emsp;&emsp;moduleVersion     | Device version                                                | string            |                 |
| &emsp;&emsp;oldDeviceName     |                                                               | string            |                 |
| &emsp;&emsp;productId         | Product ID                                                    | integer(int64)    |                 |
| &emsp;&emsp;productKey        | Product key                                                   | string            |                 |
| &emsp;&emsp;productName       |                                                               | string            |                 |
| &emsp;&emsp;projectId         |                                                               | integer(int64)    |                 |
| &emsp;&emsp;protocol          | Default value 0, access protocol: 1:mqtt, 2:lwm2m/coap, 3:http | integer(int32)    |                 |
| &emsp;&emsp;updateTime        | Update time                                                   | integer(int64)    |                 |
| exp1                          |                                                               | string            |                 |
| msg                           | Prompt message                                                | object            |                 |
| pageNum                       | Current page number                                           | object            |                 |
| pageSize                      | Items per page                                                | object            |                 |
| pages                         | Total pages                                                   | object            |                 |
| total                         | Total count                                                   | object            |                 |


**Response Example**:
```javascript
{
        "code":200,
        "msg":"",
        "total":1,
        "pageNum":1,
        "pageSize":10,
        "pages":1,
        "data":[
        {
            "id":266075,
            "deviceKey":"DK00001",
            "deviceName":"DeviceName01",
            "deviceStatus":1,
            "isActived":1,
            "isLiveness":null,
            "isVerified":1,
            "moduleVersion":null,
            "moduleType":null,
            "firstConnTime":1730871606221,
            "lastConnTime":1730871606221,
            "enabled":null,
            "productId":1192949132388584,
            "isVirtual":0,
            "protocol":null,
            "createTime":1730871606050,
            "updateTime":1730871606345,
            "productKey":"PK0001",
            "locateType":null,
            "sn":"SN00001",
            "activedTime":1730871606127,
            "lastOfflineTime":null,
            "isCurrent":1,
            "authMode":0,
            "fingerPrint":null,
            "oldDeviceName":null,
            "productName":"ProductName01",
            "projectId":222,
            "gatewayType":2
        }
    ]
}
```
