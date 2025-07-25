# Query Device Historical Event Logs


**API Address**:`/v2/quecdatastorage/r1/openapi/device/eventdata/history`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`

**API Description**: `Event log information query`


**Request Parameters**:


| Parameter Name  | Parameter Description                                         | Request Type | Required | Data Type       | Schema |
| --------------- | ------------------------------------------------------------- | ------------ | -------- | -------------- | ------ |
| deviceKey       | Device Key. If deviceKey is provided, productKey must also be provided. The combination of productKey and deviceKey corresponds one-to-one with deviceId. If productKey and deviceKey combination is provided, deviceId is not needed. If you provide both deviceId and the productKey/deviceKey combination, deviceId takes precedence | query        | true     | string         |        |
| productKey      | Product Key. If productKey is provided, deviceKey must also be provided. The combination of productKey and deviceKey corresponds one-to-one with deviceId. If productKey and deviceKey combination is provided, deviceId is not needed. If you provide both deviceId and the productKey/deviceKey combination, deviceId takes precedence | query        | true     | string         |        |
| beginDateTimp   | Start time (timestamp, in milliseconds)                       | query        | false    | integer(int64) |        |
| deviceId        | Device ID, corresponds one-to-one with the productKey and deviceKey combination. If deviceId is provided, productKey and deviceKey combination is not needed. If you provide both deviceId and the productKey/deviceKey combination, deviceId takes precedence | query        | false    | integer(int64) |        |
| endDateTimp     | End time (timestamp, in milliseconds)                         | query        | false    | integer(int64) |        |
| eventType       | Event type (Offline:0, Online:1, Reconnect:2, Information:3, Alert:4, Fault:5, Reset:6) | query        | false    | string         |        |
| language        | Language: CN/EN (default: CN)                                 | query        | false    | string         |        |
| pageNum         | Page number (default: 1)                                      | query        | false    | integer(int32) |        |
| pageSize        | Page size, number of items per page (default: 10)             | query        | false    | integer(int32) |        |


**Response Status**:


| Status Code | Description                                                  | Schema                            |
| ----------- | ------------------------------------------------------------ | --------------------------------- |
| 200         | OK                                                           | ActionResult«List«DeviceEventVO»» |
| 50000       | Service exception                                            |                                   |
| 50005       | Parameter check error                                        |                                   |
| 50007       | The deviceID, productKey or deviceKey is empty               |                                   |
| 70000       | Hub service unavailable                                      |                                   |
| 70089       | You have limited permission to operate this project or product or device |                                   |
| 70130       | Non-existent device                                          |                                   |
| 91001       | Token does not exist                                         |                                   |
| 91004       | Token incorrect                                              |                                   |
| 91005       | Doesn't have permission                                      |                                   |
| 91006       | User not in IP white list                                    |                                   |
| 91007       | Please enable API permission                                 |                                   |


**Response Parameters**:


| Parameter Name         | Parameter Description | Type           | Schema        |
| ---------------------- | --------------------- | -------------- | ------------- |
| code                   | Return code           | object         |               |
| data                   | Object                | array          | DeviceEventVO |
| &emsp;&emsp;abId       | abId                  | integer(int64) |               |
| &emsp;&emsp;createTime | Start time            | string         |               |
| &emsp;&emsp;deviceKey  | Device key            | string         |               |
| &emsp;&emsp;eventCode  | Event code            | string         |               |
| &emsp;&emsp;eventName  | Event name            | string         |               |
| &emsp;&emsp;eventType  | Event type            | string         |               |
| &emsp;&emsp;extData    | Extended information  | object         |               |
| &emsp;&emsp;id         | id                    | string         |               |
| &emsp;&emsp;outputData | Output parameters     | string         |               |
| &emsp;&emsp;packetId   | packetId              | integer(int32) |               |
| &emsp;&emsp;productKey | Product key           | string         |               |
| &emsp;&emsp;ticket     | ticket                | string         |               |
| exp1                   |                       | string         |               |
| msg                    | Prompt message        | object         |               |
| pageNum                | Current page number   | object         |               |
| pageSize               | Items per page        | object         |               |
| pages                  | Total pages           | object         |               |
| total                  | Total count           | object         |               |


**Response Example**:
```javascript
{
    "code": 200,
    "data": [
        {
            "abId": null,
            "createTime": "1748922175289",
            "deviceKey": "DK00001",
            "eventCode": "online",
            "eventName": null,
            "eventType": "1",
            "extData": {},
            "id": "1379425110005711323",
            "outputData": null,
            "packetId": null,
            "productKey": "PK0001",
            "ticket": "1379425110005711323"
        },
        {
            "abId": 73,
            "createTime": "1749173645408",
            "deviceKey": "DK00001",
            "eventCode": "PowerOffWarning",
            "eventName": "PowerOffWarning",
            "eventType": "4",
            "extData": {},
            "id": "1380479850894393869",
            "outputData": "{\"arr_test\":[{\"bbb001\":true,\"int000001\":\"0\"}]}",
            "packetId": null,
            "productKey": "PK0001",
            "ticket": "1380479850894393869"
        }
    ],
        "msg": "",
        "pageNum": 1,
        "pageSize": 10,
        "pages": 1,
        "total": 1
}
```
