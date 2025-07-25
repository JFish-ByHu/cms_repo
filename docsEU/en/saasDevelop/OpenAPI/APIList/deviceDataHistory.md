# Query Device Historical Uplink/Downlink Data Logs


**API Address**:`/v2/quecdatastorage/r1/openapi/device/data/history`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`

**API Description**: `Device historical uplink/downlink information query`


**Request Parameters**:


| Parameter Name | Parameter Description                                         | Request Type | Required | Data Type       | Schema |
| -------------- | ------------------------------------------------------------- | ------------ | -------- | -------------- | ------ |
| deviceKey      | Device Key. If deviceKey is provided, productKey must also be provided. The combination of productKey and deviceKey corresponds one-to-one with deviceId. If productKey and deviceKey combination is provided, deviceId is not needed. If you provide both deviceId and the productKey/deviceKey combination, deviceId takes precedence | query        | true     | string         |        |
| productKey     | Product Key. If productKey is provided, deviceKey must also be provided. The combination of productKey and deviceKey corresponds one-to-one with deviceId. If productKey and deviceKey combination is provided, deviceId is not needed. If you provide both deviceId and the productKey/deviceKey combination, deviceId takes precedence | query        | true     | string         |        |
| beginDateTimp  | Start time (timestamp, in milliseconds)                       | query        | false    | integer(int64) |        |
| deviceId       | Device ID, corresponds one-to-one with the productKey and deviceKey combination. If deviceId is provided, productKey and deviceKey combination is not needed. If you provide both deviceId and the productKey/deviceKey combination, deviceId takes precedence | query        | false    | integer(int64) |        |
| direction      | Data type: 1 - UP (uplink), 2 - DOWN (downlink)               | query        | false    | integer(int32) |        |
| endDateTimp    | End time (timestamp, in milliseconds)                         | query        | false    | integer(int64) |        |
| language       | Language: CN/EN (default: CN)                                 | query        | false    | string         |        |
| pageNum        | Page number (default: 1)                                      | query        | false    | integer(int32) |        |
| pageSize       | Page size, number of items per page (default: 10)             | query        | false    | integer(int32) |        |
| sendStatus     | Send status: 0 - Not sent; 1 - Sent; -1 - Send failed         | query        | false    | integer(int32) |        |


**Response Status**:


| Status Code | Description                                                  | Schema                         |
| ----------- | ------------------------------------------------------------ | ------------------------------ |
| 200         | OK                                                           | ActionResult«List«DeviceData»» |
| 50000       | Service exception                                            |                                |
| 50005       | Parameter check error                                        |                                |
| 50007       | The deviceID, productKey or deviceKey is empty               |                                |
| 70000       | Hub service unavailable                                      |                                |
| 70089       | You have limited permission to operate this project or product or device |                                |
| 70130       | Non-existent device                                          |                                |
| 91001       | Token does not exist                                         |                                |
| 91004       | Token incorrect                                              |                                |
| 91005       | Doesn't have permission                                      |                                |
| 91006       | User not in IP white list                                    |                                |
| 91007       | Please enable API permission                                 |                                |


**Response Parameters**:


| Parameter Name         | Parameter Description                            | Type              | Schema     |
| ---------------------- | ----------------------------------------------- | ----------------- | ---------- |
| code                   | Return code                                     | object            |            |
| data                   | Object                                          | array             | DeviceData |
| &emsp;&emsp;createTime | Creation time                                   | string(date-time) |            |
| &emsp;&emsp;data       | Base64 data                                     | string            |            |
| &emsp;&emsp;dataType   | Data type                                       | string            |            |
| &emsp;&emsp;deviceId   | Device ID                                       | integer(int64)    |            |
| &emsp;&emsp;deviceKey  | Device key                                      | string            |            |
| &emsp;&emsp;direction  | Data type: 1 - UP (uplink), 2 - DOWN (downlink) | integer(int32)    |            |
| &emsp;&emsp;dmData     | Saved thing model data JSON                     | string            |            |
| &emsp;&emsp;extData    | Extended information                            | object            |            |
| &emsp;&emsp;id         | ID                                              | string            |            |
| &emsp;&emsp;msgType    | Message type                                    | string            |            |
| &emsp;&emsp;productId  | Product ID                                      | integer(int64)    |            |
| &emsp;&emsp;productKey | Product key                                     | string            |            |
| &emsp;&emsp;sendStatus | Send status: 0 - Not sent; 1 - Sent; -1 - Send failed | integer(int32) |           |
| &emsp;&emsp;sendTime   | Send time                                       | string(date-time) |            |
| &emsp;&emsp;sourceType | Type                                            | string            |            |
| &emsp;&emsp;ticket     | Unique data value                               | string            |            |
| &emsp;&emsp;updateTime | Modification time                               | string(date-time) |            |
| exp1                   |                                                 | string            |            |
| msg                    | Prompt message                                  | object            |            |
| pageNum                | Current page number                             | object            |            |
| pageSize               | Items per page                                  | object            |            |
| pages                  | Total pages                                     | object            |            |
| total                  | Total count                                     | object            |            |


**Response Example**:
```javascript
{
    "code": 200,
        "data": [
        {
            "id": null,
            "deviceKey": "DK00001",
            "deviceId": null,
            "productId": null,
            "direction": 1,
            "data": "AFQAAwAKAAAAEgAAABoAAABkAAQACgAAABIAAAAaAAAAIgAAAAkAaQA5AEoAAABCAAAAWgADABwAAQAEAAMACgAAABIAAAAaAAEANAABAAQABAAKAAAAEgAAABoAAAAiAAAAFAABAAQAAgAKAAAAEQAsAAEABAAHAAoAAAASAAAAGgAAACIAAAAqAAAAMgAAADkAJAABAAQABQAKAAAAEgAAABoAAAAhACk=",
            "dataType": "BASE64",
            "sendStatus": 1,
            "sendTime": "1748944587418",
            "ticket": "1379519113954918775",
            "createTime": "1748944587418",
            "updateTime": "1748944587418",
            "productKey": "PK0001",
            "cmd": "0012",
            "sourceType": "MODE",
            "msgType": "up",
            "dmData": "[{\"id\":10,\"value\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"}]},{\"id\":12,\"value\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"}]},{\"id\":1,\"value\":true},{\"id\":13,\"value\":true},{\"id\":7,\"value\":true},{\"id\":9,\"value\":\"0\"},{\"id\":8,\"value\":\"0\"},{\"id\":11,\"value\":\"3\"},{\"id\":3,\"value\":[{\"id\":0,\"value\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"1\"}]}]},{\"id\":6,\"value\":[{\"id\":0,\"value\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"}]}]},{\"id\":2,\"value\":[{\"id\":0,\"value\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":true}]}]},{\"id\":5,\"value\":[{\"id\":0,\"value\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":\"0\"},{\"id\":5,\"value\":\"0\"},{\"id\":6,\"value\":\"0\"},{\"id\":7,\"value\":true}]}]},{\"id\":4,\"value\":[{\"id\":0,\"value\":[{\"id\":1,\"value\":\"0\"},{\"id\":2,\"value\":\"0\"},{\"id\":3,\"value\":\"0\"},{\"id\":4,\"value\":true},{\"id\":5,\"value\":true}]}]}]",
            "extData": null
        },
        {
            "id": null,
            "deviceKey": "DK00001",
            "deviceId": null,
            "productId": null,
            "direction": 2,
            "data": "AAoADAABAA0ABwAJAAgACwADAAYAAgAFAAQ=",
            "dataType": "BASE64",
            "sendStatus": 1,
            "sendTime": "1748944587349",
            "ticket": "1379519113954918775",
            "createTime": "1748944587349",
            "updateTime": "1748944587349",
            "productKey": "PK0001",
            "cmd": "0011",
            "sourceType": "MODE",
            "msgType": "down",
            "dmData": "[\"10\",\"12\",\"1\",\"13\",\"7\",\"9\",\"8\",\"11\",\"3\",\"6\",\"2\",\"5\",\"4\"]",
            "extData": null
        }
    ],
        "msg": "",
        "pageNum": 1,
        "pageSize": 10,
        "pages": 1,
        "total": 2
}
```
