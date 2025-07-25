# Query Device List Under Product


**API Address**:`/v2/devicemgr/r3/openapi/product/device/overview`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**: `Device list query`


**Request Parameters**:


| Parameter Name | Parameter Description                         | Request Type | Required | Data Type       | Schema |
| -------------- | --------------------------------------------- | ------------ | -------- | -------------- | ------ |
| productKey     | productKey                                    | query        | true     | string         |        |
| activeStatus   | Activation status: 1-Activated, 0-Not activated | query      | false    | integer(int32) |        |
| deviceKey      | Device DK                                     | query        | false    | string         |        |
| deviceStatus   | Device status: 1-Online, 0-Offline            | query        | false    | integer(int32) |        |
| pageNum        | Page number (default: 1)                      | query        | false    | integer(int32) |        |
| pageSize       | Page size, number of items per page (default: 10) | query    | false    | integer(int32) |        |


**Response Status**:


| Status Code | Description                                                  | Schema                        |
| ----------- | ------------------------------------------------------------ | ----------------------------- |
| 200         | OK                                                           | ActionResultOfListOfDeviceDetails |
| 401         | Unauthorized                                                 |                               |
| 403         | Forbidden                                                    |                               |
| 404         | Not Found                                                    |                               |
| 50000       | Service exception                                            |                               |
| 50005       | Parameter check error                                        |                               |
| 70000       | Hub service unavailable                                      |                               |
| 70089       | You have limited permission to operate this project or product or device |                               |
| 70130       | Non-existent device                                          |                               |
| 91001       | Token does not exist                                         |                               |
| 91004       | Token incorrect                                              |                               |
| 91005       | Doesn't have permission                                      |                               |
| 91006       | User not in IP white list                                    |                               |
| 91007       | Please enable API permission                                 |                               |


**Response Parameters**:


| Parameter Name              | Parameter Description                                         | Type           | Schema         |
| --------------------------- | ------------------------------------------------------------- | -------------- | -------------- |
| code                        | Return code                                                   | object         |                |
| data                        | Object                                                        | array          | Device details |
| &emsp;&emsp;activedTime     | Device activation time                                        | integer(int64) |                |
| &emsp;&emsp;authMode        | Authentication method, 0-Dynamic authentication 1-Static authentication 2-X509, default 0 | integer(int32) |                |
| &emsp;&emsp;createTime      | Creation time                                                 | integer(int64) |                |
| &emsp;&emsp;dataFmt         | Data format: 0-Transparent transmission, 3-Thing model        | integer(int32) |                |
| &emsp;&emsp;deviceKey       | Device DK                                                     | string         |                |
| &emsp;&emsp;deviceName      | Device name                                                   | string         |                |
| &emsp;&emsp;deviceStatus    | Device status: 1-Online, 0-Offline                            | integer(int32) |                |
| &emsp;&emsp;firstConnTime   | First connection time                                         | integer(int64) |                |
| &emsp;&emsp;isActived       | Whether activated: 0-Not activated, 1-Activated               | integer(int32) |                |
| &emsp;&emsp;isVerified      | Secondary authentication: 0-Not authenticated, 1-Authenticated | integer(int32) |                |
| &emsp;&emsp;isVirtual       | Whether virtual device: 0-Real, 1-Virtual                     | integer(int32) |                |
| &emsp;&emsp;lastConnTime    | Last online time                                              | integer(int64) |                |
| &emsp;&emsp;lastOfflineTime | Last offline time                                             | integer(int64) |                |
| &emsp;&emsp;productKey      | Product PK                                                    | string         |                |
| &emsp;&emsp;sn              | Device SN                                                     | string         |                |
| &emsp;&emsp;updateTime      | Update time                                                   | integer(int64) |                |
| exp1                        |                                                               | string         |                |
| msg                         | Prompt message                                                | object         |                |
| pageNum                     | Current page number                                           | object         |                |
| pageSize                    | Items per page                                                | object         |                |
| pages                       | Total pages                                                   | object         |                |
| total                       | Total count                                                   | object         |                |


**Response Example**:
```javascript
{
    "code": 200,
    "data": [
        {
            "activedTime": 1748944587349,
            "authMode": 0,
            "createTime": 1744179122906,
            "dataFmt": 3,
            "deviceKey": "DK00001",
            "deviceName": "DdevicName01",
            "deviceStatus": 1,
            "firstConnTime": 1744179201775,
            "isActived": 1,
            "isVerified": 1,
            "isVirtual": 0,
            "lastConnTime": 1748922175239,
            "lastOfflineTime": 1747316156218,
            "productKey": "PK0001",
            "sn": "SN00001",
            "updateTime": 1748944587349
        },
        {
            "activedTime": 1748944587349,
            "authMode": 0,
            "createTime": 1744179122906,
            "dataFmt": 3,
            "deviceKey": "DK00002",
            "deviceName": "DdevicName02",
            "deviceStatus": 1,
            "firstConnTime": 1744179201775,
            "isActived": 1,
            "isVerified": 1,
            "isVirtual": 0,
            "lastConnTime": 1748922175239,
            "lastOfflineTime": 1747316156218,
            "productKey": "PK0002",
            "sn": "SN00002",
            "updateTime": 1748944587349
        }
    ],
        "msg": "",
        "pageNum": 1,
        "pageSize": 10,
        "pages": 1,
        "total": 2
}
```
