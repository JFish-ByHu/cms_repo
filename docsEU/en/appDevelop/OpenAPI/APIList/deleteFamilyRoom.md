# Delete Room


**API Address**:`/v2/family/enduserapi/deleteFamilyRoom`


**Request Method**:`DELETE`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Delete room`



**Request Example**:


```javascript
[]
```


**Request Parameters**:


| Parameter Name | Parameter Description | Request Type | Required | Data Type | Schema |
| -------------- | --------------------- | ------------ | -------- | --------- | ------ |
| fridList       | Room ID list          | body         | true     | array     | string |


**Response Status**:


| Status Code | Description                | Schema                                     |
| ----------- | -------------------------- | ------------------------------------------ |
| 200         | Room deleted successfully  | Registration code response data«DeleteFamilyRoomVO» |
| 5637        | Please enter room ID       |                                            |


**Response Parameters**:


| Parameter Name         | Parameter Description | Type               | Schema             |
| ---------------------- | --------------------- | ------------------ | ------------------ |
| code                   | Response status code  | integer(int32)     | integer(int32)     |
| data                   | Response data         | DeleteFamilyRoomVO | DeleteFamilyRoomVO |
| &emsp;&emsp;failureList | Failure list         | array              | object             |
| &emsp;&emsp;successList | Success list         | array              | object             |
| extMsg                 | Extended message      | string             |                    |
| msg                    | Response message      | string             |                    |


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