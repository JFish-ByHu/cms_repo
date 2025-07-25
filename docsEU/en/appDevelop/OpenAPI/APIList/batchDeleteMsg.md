# Batch Delete Messages


**API Address**:`/v2/mobilepush/enduserapi/batchDeleteMsg`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`

**API Description**:`Batch delete messages`


**Request Parameters**:


| Parameter Name | Parameter Description                                    | Request Type | Required | Data Type | Schema |
| -------------- | -------------------------------------------------------- | ------------ | -------- | --------- | ------ |
| msgIdList      | Message ID list, multiple message IDs separated by commas | query        | true     | string    |        |


**Response Status**:


| Status Code | Description             | Schema                               |
| ----------- | ----------------------- | ------------------------------------ |
| 200         | OK                      | Registration code response data«Read Message» |
| 5032        | Token verification failed |                                    |
| 5041        | No permission           |                                      |
| 5106        | Please enter token      |                                      |


**Response Parameters**:


| Parameter Name                    | Parameter Description | Type           | Schema               |
| --------------------------------- | --------------------- | -------------- | -------------------- |
| code                              | Response status code  | integer(int32) | integer(int32)       |
| data                              | Response data         | Read Message   | Read Message         |
| &emsp;&emsp;failureList           | Failure list          | array          | Message Failure Return List |
| &emsp;&emsp;&emsp;&emsp;failureMsg | Failure reason description | string    |                      |
| &emsp;&emsp;&emsp;&emsp;id        | Message ID            | string         |                      |
| &emsp;&emsp;successList           | Success list          | array          | ReadMsgSuccessDto    |
| &emsp;&emsp;&emsp;&emsp;id        | Message ID            | string         |                      |
| extMsg                            | Extended message      | string         |                      |
| msg                               | Response message      | string         |                      |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
		"failureList": [
			{
				"failureMsg": "",
				"id": ""
			}
		],
		"successList": [
			{
				"id": ""
			}
		]
	},
	"extMsg": "",
	"msg": ""
}
```