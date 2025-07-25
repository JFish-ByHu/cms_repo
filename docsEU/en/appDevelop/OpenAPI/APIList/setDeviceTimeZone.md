# Set Device Time Zone


**Interface Address**:`/v2/binding/enduserapi/v2/setDeviceTimeZone`


**Request Method**:`PUT`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**Interface Description**:`Set Device Time Zone (V2)`



**Request Example**:


```javascript
{
  "dk": "",
  "pk": "",
  "timeZone": "",
  "timeZoneId": ""
}
```


**Request Parameters**:


| Parameter Name            | Parameter Description                         | Request Type | Required | Data Type               | schema                 |
| ------------------------- | --------------------------------------------- | ------------ | -------- | ----------------------- | ---------------------- |
| param                     | param                                         | body         | true     | Set Device Time Zone Param | Set Device Time Zone Param |
| &emsp;&emsp;dk            | Device Key                                    |              | true     | string                  |                        |
| &emsp;&emsp;pk            | Product Key                                   |              | true     | string                  |                        |
| &emsp;&emsp;timeZone      | Time zone. Must follow +-HH:mm or +-HH format |              | true     | string                  |                        |
| &emsp;&emsp;timeZoneId    | Time zone ID                                  |              | false    | string                  |                        |


**Response Status**:


| Status Code | Description                   | schema                     |
| ----------- | ----------------------------- | -------------------------- |
| 200         | Device time zone set successfully | Registration code response data |
| 5041        | No permission                 |                            |
| 5066        | Please enter Product Key      |                            |
| 5067        | Please enter Device Key       |                            |


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