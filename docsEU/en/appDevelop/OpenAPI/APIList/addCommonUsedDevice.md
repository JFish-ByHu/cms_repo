# Add Frequently Used Device


**API Address**:`/v2/family/enduserapi/addCommonUsedDevice`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Add frequently used device`



**Request Example**:


```javascript
{
  "deviceList": [
    {
      "dk": "",
      "pk": ""
    }
  ],
  "fid": ""
}
```


**Request Parameters**:


| Parameter Name            | Description   | Request Type | Required | Data Type               | Schema                  |
| ------------------------- | ------------- | ------------ | -------- | ----------------------- | ----------------------- |
| param                     | param         | body         | true     | Add frequently used device | Add frequently used device |
| &emsp;&emsp;deviceList    | Device List   |              | true     | array                   | Device type pk, dk      |
| &emsp;&emsp;&emsp;&emsp;dk| Device Key    |              | true     | string                  |                         |
| &emsp;&emsp;&emsp;&emsp;pk| Product Key   |              | true     | string                  |                         |
| &emsp;&emsp;fid           | Home ID       |              | true     | string                  |                         |


**Response Status**:


| Status Code | Description                | Schema                                           |
| ----------- | -------------------------- | ------------------------------------------------ |
| 200         | Successfully added device  | Return registration code response«AddCommonUsedDeviceVO» |
| 5066        | Please enter Product Key   |                                                  |
| 5067        | Please enter Device Key    |                                                  |
| 5618        | Please enter Home ID       |                                                  |
| 5676        | Product service error      |                                                  |


**Response Parameters**:


| Parameter Name          | Description       | Type                  | Schema                |
| ----------------------- | ----------------- | --------------------- | --------------------- |
| code                    | Response code     | integer(int32)        | integer(int32)        |
| data                    | Response data     | AddCommonUsedDeviceVO | AddCommonUsedDeviceVO |
| &emsp;&emsp;failureList | Failure list      | array                 | object                |
| &emsp;&emsp;successList | Success list      | array                 | object                |
| extMsg                  | Extended message  | string                |                       |
| msg                     | Response message  | string                |                       |


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