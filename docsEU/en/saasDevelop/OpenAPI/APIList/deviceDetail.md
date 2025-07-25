# Query Device Details


**API Address**:`/v2/devicemgr/r3/openapi/device/detail`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**: `Device details query`


**Request Parameters**:


| Parameter Name | Parameter Description | Request Type | Required | Data Type | Schema |
| -------------- | --------------------- | ------------ | -------- | --------- | ------ |
| deviceKey      | Device deviceKey      | query        | true     | string    |        |
| productKey     | Product productKey    | query        | true     | string    |        |


**Response Status**:


| Status Code | Description                                                  | Schema                  |
| ----------- | ------------------------------------------------------------ | ----------------------- |
| 200         | OK                                                           | ActionResultOfDeviceDetails |
| 401         | Unauthorized                                                 |                         |
| 403         | Forbidden                                                    |                         |
| 404         | Not Found                                                    |                         |
| 50000       | Service exception                                            |                         |
| 50005       | Parameter check error                                        |                         |
| 70000       | Hub service unavailable                                      |                         |
| 70089       | You have limited permission to operate this project or product or device |                         |
| 70130       | Non-existent device                                          |                         |
| 91001       | Token does not exist                                         |                         |
| 91004       | Token incorrect                                              |                         |
| 91005       | Doesn't have permission                                      |                         |
| 91006       | User not in IP white list                                    |                         |
| 91007       | Please enable API permission                                 |                         |


**Response Parameters**:


| Parameter Name              | Parameter Description                                         | Type           | Schema         |
| --------------------------- | ------------------------------------------------------------- | -------------- | -------------- |
| code                        | Return code                                                   | object         |                |
| data                        | Object                                                        | Device details | Device details |
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
    "data": {
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
    "msg": ""
}
```
