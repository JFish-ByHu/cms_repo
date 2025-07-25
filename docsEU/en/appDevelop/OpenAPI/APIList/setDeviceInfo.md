# Set Device ID and Language Information


**Interface Address**:`/v2/mobilepush/enduserapi/setDeviceInfo`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**Interface Description**:`Set Device ID and Language Information`



**Request Example**:


```javascript
{
  "deviceId": "",
  "deviceLanguage": "",
  "type": ""
}
```


**Request Parameters**:


| Parameter Name              | Parameter Description                                                             | Request Type | Required | Data Type   | schema     |
| --------------------------- | --------------------------------------------------------------------------------- | ------------ | -------- | ---------- | ---------- |
| param                       | param                                                                             | body         | true     | DeviceInfo | DeviceInfo |
| &emsp;&emsp;deviceId        | Device identifier: Alibaba Cloud uses deviceId, Google uses fcmRegistToken        |              | false    | string     |            |
| &emsp;&emsp;deviceLanguage  | Current phone language                                                            |              | true     | string     |            |
| &emsp;&emsp;type            | Push type: APP-app mobile push (default), MINI-WeChat mini program message push   |              | false    | string     |            |


**Response Status**:


| Status Code | Description                                    | schema                     |
| ----------- | ---------------------------------------------- | -------------------------- |
| 200         | Device ID and language information set successfully | Registration code response data |
| 5106        | Please enter token                             |                            |


**Response Parameters**:


| Parameter Name | Parameter Description | Type           | schema         |
| -------------- | --------------------- | -------------- | -------------- |
| code           | Response status code  | integer(int32) | integer(int32) |
| data           | Response data         | object         |                |
| extMsg         | Extended message      | string         |                |
| msg            | Response message      | string         |                |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {},
	"extMsg": "",
	"msg": ""
}
```