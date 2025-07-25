# Remove Common Device


**API Address**:`/v2/family/enduserapi/deleteCommonUsedDevice`


**Request Method**:`DELETE`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Remove common device`



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


| Parameter Name            | Parameter Description | Request Type | Required | Data Type         | Schema             |
| ------------------------- | --------------------- | ------------ | -------- | ---------------- | ------------------ |
| param                     | param                 | body         | true     | Remove Common Device | Remove Common Device |
| &emsp;&emsp;deviceList    | Device list           |              | true     | array            | Device type pk, dk |
| &emsp;&emsp;&emsp;&emsp;dk | Device Key           |              | true     | string           |                    |
| &emsp;&emsp;&emsp;&emsp;pk | Product Key          |              | true     | string           |                    |
| &emsp;&emsp;fid           | Family ID             |              | true     | string           |                    |


**Response Status**:


| Status Code | Description                       | Schema                                          |
| ----------- | --------------------------------- | ----------------------------------------------- |
| 200         | Successfully removed common device | Registration code response data«DeleteCommonUsedDeviceVO» |
| 5066        | Please enter Product Key          |                                                 |
| 5067        | Please enter Device Key           |                                                 |
| 5618        | Please enter Family ID            |                                                 |


**Response Parameters**:


| Parameter Name         | Parameter Description | Type                     | Schema                   |
| ---------------------- | --------------------- | ------------------------ | ------------------------ |
| code                   | Response status code  | integer(int32)           | integer(int32)           |
| data                   | Response data         | DeleteCommonUsedDeviceVO | DeleteCommonUsedDeviceVO |
| &emsp;&emsp;failureList | Failure list         | array                    | object                   |
| &emsp;&emsp;successList | Success list         | array                    | object                   |
| extMsg                 | Extended message      | string                   |                          |
| msg                    | Response message      | string                   |                          |


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