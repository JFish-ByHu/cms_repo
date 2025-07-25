# Query Automation Configuration


**API Address**:`/v2/cep/enduserapi/automation/ability/published`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Query automation configuration`


**Request Parameters**:


| Parameter Name | Description                                      | Request Type | Required | Data Type       | Schema |
| -------------- | ------------------------------------------------ | ------------ | -------- | --------------- | ------ |
| productKey     | Product KEY                                      | query        | true     | string          |        |
| type           | Query type: 0: All, 1: Conditions, 2: Actions    | query        | true     | integer(int32)  |        |
| Authorization  |                                                  | header       | false    | string          |        |


**Response Status**:


| Status Code | Description  | Schema                          |
| ----------- | ------------ | ------------------------------- |
| 200         | OK           | ApiResult«Automation Config»    |
| 401         | Unauthorized |                                 |
| 403         | Forbidden    |                                 |
| 404         | Not Found    |                                 |


**Response Parameters**:


| Parameter Name         | Description      | Type           | Schema         |
| ---------------------- | ---------------- | -------------- | -------------- |
| code                   |                  | integer(int32) | integer(int32) |
| data                   |                  | Automation Config | Automation Config |
| &emsp;&emsp;actions    | Execution actions | array         | object         |
| &emsp;&emsp;conditions | Trigger conditions | array        | object         |
| extMsg                 |                  | string         |                |
| msg                    |                  | string         |                |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
		"actions": [],
		"conditions": []
	},
	"extMsg": "",
	"msg": ""
}
```