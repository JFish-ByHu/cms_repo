# Query User Home Mode Configuration

**API Address**:`/v2/family/enduserapi/getFamilyModeConfig`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Query user's home mode configuration`


**Request Parameters**:


None


**Response Status**:


| Status Code | Description                                  | Schema                                           |
| ----------- | -------------------------------------------- | ------------------------------------------------ |
| 200         | Successfully queried user's home mode configuration | Registration code response data«Home Mode Configuration Return» |


**Response Parameters**:


| Parameter Name                | Parameter Description               | Type             | Schema                       |
| ----------------------------- | ----------------------------------- | ---------------- | ---------------------------- |
| code                          | Response status code                | integer(int32)   | integer(int32)               |
| data                          | Response data                       | Home Mode Configuration Return | Home Mode Configuration Return |
| &emsp;&emsp;enabledAutoSwitch | Whether automatic switching is enabled | boolean      |                              |
| &emsp;&emsp;enabledFamilyMode | Whether home mode is enabled        | boolean          |                              |
| extMsg                        | Extended message                    | string           |                              |
| msg                           | Response message                    | string           |                              |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
		"enabledAutoSwitch": true,
		"enabledFamilyMode": true
	},
	"extMsg": "",
	"msg": ""
}
```