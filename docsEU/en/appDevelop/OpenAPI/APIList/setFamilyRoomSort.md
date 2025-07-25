# Set Room Sort Order


**Interface Address**:`/v2/family/enduserapi/setFamilyRoomSort`


**Request Method**:`PUT`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**Interface Description**:`Set Room Sort Order`



**Request Example**:


```javascript
[
  {
    "frid": "",
    "roomSort": 0
  }
]
```


**Request Parameters**:


| Parameter Name           | Parameter Description                                                                                             | Request Type | Required | Data Type      | schema       |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------- | ------------ | -------- | -------------- | ------------ |
| roomSortList             | roomSortList                                                                                                       | body         | true     | array          | Set Room Sort |
| &emsp;&emsp;frid         | Family room ID                                                                                                     |              | true     | string         |              |
| &emsp;&emsp;roomSort     | Room order, starting from 0 and incrementing. Lower numbers appear earlier in the list. Can be non-consecutive but cannot be equal | | true     | integer(int32) |              |


**Response Status**:


| Status Code | Description                     | schema                                  |
| ----------- | ------------------------------- | --------------------------------------- |
| 200         | Room sort order set successfully | Registration code response data«SetFamilyRoomSortVO» |
| 5002        | Please enter room sort information |                                     |
| 5003        | Room sorting failed             |                                         |
| 5007        | Room sequence number duplicated |                                         |
| 5041        | No permission                   |                                         |


**Response Parameters**:


| Parameter Name            | Parameter Description | Type                | schema              |
| ------------------------- | --------------------- | ------------------- | ------------------- |
| code                      | Response status code  | integer(int32)      | integer(int32)      |
| data                      | Response data         | SetFamilyRoomSortVO | SetFamilyRoomSortVO |
| &emsp;&emsp;failureList   | Failure list          | array               | object              |
| &emsp;&emsp;successList   | Success list          | array               | object              |
| extMsg                    | Extended message      | string              |                     |
| msg                       | Response message      | string              |                     |


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