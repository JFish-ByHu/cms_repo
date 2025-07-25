# Query Latest Device Location Data


**API Address**:`/v2/deviceshadow/r1/openapi/device/getlocation`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`

**API Description**: `Query latest device location data`


**Request Parameters**:


| Parameter Name | Parameter Description                                         | Request Type | Required | Data Type       | Schema |
| -------------- | ------------------------------------------------------------- | ------------ | -------- | -------------- | ------ |
| deviceId       | Device ID, corresponds one-to-one with the productKey and deviceKey combination. If deviceId is provided, productKey and deviceKey combination is not needed. If you provide both deviceId and the productKey/deviceKey combination, deviceId takes precedence | query        | false    | integer(int64) |        |
| deviceKey      | Device Key. If deviceKey is provided, productKey must also be provided. The combination of productKey and deviceKey corresponds one-to-one with deviceId. If productKey and deviceKey combination is provided, deviceId is not needed. If you provide both deviceId and the productKey/deviceKey combination, deviceId takes precedence | query        | false    | string         |        |
| language       | Language: CN/EN (default: CN)                                 | query        | false    | string         |        |
| productKey     | Product Key. If productKey is provided, deviceKey must also be provided. The combination of productKey and deviceKey corresponds one-to-one with deviceId. If productKey and deviceKey combination is provided, deviceId is not needed. If you provide both deviceId and the productKey/deviceKey combination, deviceId takes precedence | query        | false    | string         |        |


**Response Status**:


| Status Code | Description                                                  | Schema                         |
| ----------- | ------------------------------------------------------------ | ------------------------------ |
| 200         | OK                                                           | ActionResultOfQdLocationLatest |
| 401         | Unauthorized                                                 |                                |
| 403         | Forbidden                                                    |                                |
| 404         | Not Found                                                    |                                |
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


| Parameter Name           | Parameter Description | Type              | Schema           |
| ------------------------ | --------------------- | ----------------- | ---------------- |
| code                     | Return code           | object            |                  |
| data                     | Object                | QdLocationLatest  | QdLocationLatest |
| &emsp;&emsp;accuracy     |                       | string            |                  |
| &emsp;&emsp;bdLat        |                       | number(double)    |                  |
| &emsp;&emsp;bdLng        |                       | number(double)    |                  |
| &emsp;&emsp;count        |                       | integer(int32)    |                  |
| &emsp;&emsp;createTime   |                       | string(date-time) |                  |
| &emsp;&emsp;deviceId     |                       | integer(int64)    |                  |
| &emsp;&emsp;deviceKey    |                       | string            |                  |
| &emsp;&emsp;deviceStatus |                       | integer(int32)    |                  |
| &emsp;&emsp;gcjLat       |                       | number(double)    |                  |
| &emsp;&emsp;gcjLng       |                       | number(double)    |                  |
| &emsp;&emsp;ggaStatus    |                       | string            |                  |
| &emsp;&emsp;hdop         |                       | string            |                  |
| &emsp;&emsp;height       |                       | string            |                  |
| &emsp;&emsp;id           |                       | string            |                  |
| &emsp;&emsp;lat          |                       | string            |                  |
| &emsp;&emsp;latType      |                       | string            |                  |
| &emsp;&emsp;lng          |                       | string            |                  |
| &emsp;&emsp;lngType      |                       | string            |                  |
| &emsp;&emsp;locType      |                       | string            |                  |
| &emsp;&emsp;locateRaw    |                       | string            |                  |
| &emsp;&emsp;locateStatus |                       | string            |                  |
| &emsp;&emsp;locateTime   |                       | string(date-time) |                  |
| &emsp;&emsp;locateType   |                       | string            |                  |
| &emsp;&emsp;productKey   |                       | string            |                  |
| &emsp;&emsp;satellites   |                       | string            |                  |
| &emsp;&emsp;speed        |                       | string            |                  |
| &emsp;&emsp;ticket       |                       | string            |                  |
| &emsp;&emsp;wgsLat       |                       | number(double)    |                  |
| &emsp;&emsp;wgsLng       |                       | number(double)    |                  |
| exp1                     |                       | string            |                  |
| msg                      | Prompt message        | object            |                  |
| pageNum                  | Current page number   | object            |                  |
| pageSize                 | Items per page        | object            |                  |
| pages                    | Total pages           | object            |                  |
| total                    | Total count           | object            |                  |


**Response Example**:
```javascript
{
    "code": 200,
    "data": {
        "accuracy": "550",
            "bdLat": 31.826790506073646,
            "bdLng": 117.12844898451473,
            "count": 0,
            "createTime": "1749262714000",
            "deviceId": 0,
            "deviceKey": DK00001,
            "deviceStatus": 1,
            "gcjLat": 31.820436517272384,
            "gcjLng": 117.12202697843334,
            "ggaStatus": null,
            "hdop": null,
            "height": null,
            "id": "1623625145",
            "lat": "3149.3362",
            "latType": "N",
            "lng": "11706.9841",
            "lngType": "E",
            "locType": null,
            "locateRaw": "ABMBCiRMQlMsNDYwLDAwLDIxNzcxLDI1NDYyNjM4NywtODcsMCoxMTQ7JExCUyw0NjAsMDAsMjE3NzEsOTY3OTIzMjEsLTEzMSwwKjExMjskTEJTLDQ2MCwwMCwyMTc3MSw5Njc5MjMyMSwtMTMxLDAqMTEyOyRMQlMsNDYwLDAwLDIxNzcxLDk2NzkyMzIxLC0xMzEsMCoxMTI7JExCUyw0NjAsMDAsMjE3NzEsOTY3OTIzMjEsLTEzMSwwKjExMjskTEJTLDQ2MCwwMCwyMTc3MSw5Njc5MjMyMSwtMTMxLDAqMTEyOyRMQlMsNDYwLDAwLDIxNzcxLDk2NzkyMzIxLC0xMzEsMCoxMTI7",
            "locateStatus": "3",
            "locateTime": "1749262713572",
            "locateType": "LBS ",
            "productKey": "PK0001",
            "satellites": null,
            "speed": null,
            "ticket": "1380853431444766994",
            "wgsLat": 31.822269439697266,
            "wgsLng": 117.11640167236328
    },
    "msg": "",
        "pageNum": 1,
        "pageSize": 10,
        "pages": 1,
        "total": 1
}
```
