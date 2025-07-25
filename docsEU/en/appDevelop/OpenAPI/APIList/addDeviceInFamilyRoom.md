# Add Device to Room


**API Address**:`/v2/family/enduserapi/addDeviceInFamilyRoom`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Add device to room`



**Request Example**:


```javascript
[
  {
    "dk": "",
    "newFrid": "",
    "oldFrid": "",
    "pk": ""
  }
]
```


**Request Parameters**:


| Parameter Name      | Description                                                  | Request Type | Required | Data Type | Schema          |
| ------------------- | ------------------------------------------------------------ | ------------ | -------- | --------- | ---------------- |
| param               | param                                                        | body         | true     | array     | Add device to room |
| &emsp;&emsp;dk      | Device Key                                                   |              | true     | string    |                  |
| &emsp;&emsp;newFrid | New room ID where the device will be moved to                |              | true     | string    |                  |
| &emsp;&emsp;oldFrid | Previous room ID where the device was located, if moving from the frequently used device list in a home, this parameter can be empty |              | false    | string    |                  |
| &emsp;&emsp;pk      | Product Key                                                  |              | true     | string    |                  |


**Response Status**:


| Status Code | Description                             | Schema                               |
| ----------- | --------------------------------------- | ------------------------------------ |
| 200         | Successfully deleted room               | Return registration code response«AddDeviceInRoomVO» |
| 5637        | Please enter room ID                    |                                      |
| 5663        | Source room cannot be the same as target room |                                |


**Response Parameters**:


| Parameter Name          | Description       | Type              | Schema            |
| ----------------------- | ----------------- | ----------------- | ----------------- |
| code                    | Response code     | integer(int32)    | integer(int32)    |
| data                    | Response data     | AddDeviceInRoomVO | AddDeviceInRoomVO |
| &emsp;&emsp;failureList | Failure list      | array             | object            |
| &emsp;&emsp;successList | Success list      | array             | object            |
| extMsg                  | Extended message  | string            |                   |
| msg                     | Response message  | string            |                   |


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