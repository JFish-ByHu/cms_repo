# Set Device Information


**API Address**:`/v2/family/enduserapi/setDeviceInfo`


**Request Method**:`PUT`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Set device information`



**Request Example**:


```javascript
[
  {
    "deviceName": "",
    "dk": "",
    "fid": "",
    "isCommonUsed": true,
    "newFrid": "",
    "oldFrid": "",
    "pk": "",
    "shareCode": ""
  }
]
```


**Request Parameters**:


| Parameter Name           | Parameter Description                                                                                      | Request Type | Required | Data Type | Schema                  |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- | ------------ | -------- | --------- | ----------------------- |
| params                   | params                                                                                                     | body         | true     | array     | Edit Device Info Params |
| &emsp;&emsp;deviceName   | Device name                                                                                                |              | false    | string    |                         |
| &emsp;&emsp;dk           | Device Key                                                                                                 |              | true     | string    |                         |
| &emsp;&emsp;fid          | Family ID, required when setting common device (can be filled or not when modifying family device name, recommended to fill to speed up interface access) |     | false    | string    |              |
| &emsp;&emsp;isCommonUsed | Whether it's commonly used: true-commonly used, false-not commonly used                                    |              | false    | boolean   |                         |
| &emsp;&emsp;newFrid      | Room ID to move into                                                                                       |              | false    | string    |                         |
| &emsp;&emsp;oldFrid      | Room ID to move out of                                                                                     |              | false    | string    |                         |
| &emsp;&emsp;pk           | Product Key                                                                                                |              | true     | string    |                         |
| &emsp;&emsp;shareCode    | Share code, required when modifying the name of an accepted shared device                                  |              | false    | string    |                         |


**Response Status**:


| Status Code | Description                        | Schema                                  |
| ----------- | ---------------------------------- | --------------------------------------- |
| 200         | Successfully set device information | Registration code response data«SetDeviceInfoVO» |
| 5041        | No permission                      |                                         |
| 5635        | Home mode not enabled              |                                         |


**Response Parameters**:


| Parameter Name         | Parameter Description | Type            | Schema          |
| ---------------------- | --------------------- | --------------- | --------------- |
| code                   | Response status code  | integer(int32)  | integer(int32)  |
| data                   | Response data         | SetDeviceInfoVO | SetDeviceInfoVO |
| &emsp;&emsp;failureList | Failure list         | array           | object          |
| &emsp;&emsp;successList | Success list         | array           | object          |
| extMsg                 | Extended message      | string          |                 |
| msg                    | Response message      | string          |                 |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
		"failureList": [],
		"successList": []
	},
	"extMsg": "",
	"msg": ""
}
```