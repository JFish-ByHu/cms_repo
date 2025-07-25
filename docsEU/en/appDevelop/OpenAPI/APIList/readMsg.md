# Read Messages


**Interface Address**:`/v2/mobilepush/enduserapi/readMsg`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**Interface Description**:`Read Messages`


**Request Parameters**:


| Parameter Name     | Parameter Description                                                                                                | Request Type | Required | Data Type      | schema |
| ------------------ | -------------------------------------------------------------------------------------------------------------------- | ------------ | -------- | -------------- | ------ |
| firstLabelList     | Primary label list, separated by English commas<br/>Primary labels: 1-System  2-Smart  3-Device                      | query        | false    | string         |        |
| msgIdList          | Message ID list, separated by English commas. If not provided, all messages will be marked as read                   | query        | false    | string         |        |
| msgType            | Message type: 1-Device notification  2-Device alarm  3-Device fault  4-System message                                | query        | false    | integer(int32) |        |
| secondaryLabelList | Secondary label list, separated by English commas<br/>Secondary labels: 1-Privacy  2-Service  3-Automation  4-Scene  5-Device notification  6-Device alarm  7-Device fault  8-OTA | query        | false    | string         |        |


**Response Status**:


| Status Code | Description              | schema                             |
| ----------- | ------------------------ | ---------------------------------- |
| 200         | OK                       | Registration code response data«Read Messages» |
| 5032        | Token verification failed |                                    |
| 5041        | No permission            |                                    |
| 5106        | Please enter token       |                                    |


**Response Parameters**:


| Parameter Name                    | Parameter Description | Type           | schema              |
| --------------------------------- | --------------------- | -------------- | ------------------- |
| code                              | Response status code  | integer(int32) | integer(int32)      |
| data                              | Response data         | Read Messages  | Read Messages       |
| &emsp;&emsp;failureList           | Failure list          | array          | Message failure return list |
| &emsp;&emsp;&emsp;&emsp;failureMsg | Failure reason description | string       |                     |
| &emsp;&emsp;&emsp;&emsp;id        | Message ID            | string         |                     |
| &emsp;&emsp;successList           | Success list          | array          | ReadMsgSuccessDto   |
| &emsp;&emsp;&emsp;&emsp;id        | Message ID            | string         |                     |
| extMsg                            | Extended message      | string         |                     |
| msg                               | Response message      | string         |                     |


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