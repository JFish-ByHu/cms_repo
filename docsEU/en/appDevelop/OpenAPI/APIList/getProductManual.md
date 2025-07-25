# Query Product Manual


**API Address**:`/v2/binding/enduserapi/getProductManual`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Query product manual`


**Request Parameters**:


| Parameter Name | Parameter Description | Request Type | Required | Data Type | Schema |
| -------------- | --------------------- | ------------ | -------- | --------- | ------ |
| pk             | Product Key           | query        | true     | string    |        |


**Response Status**:


| Status Code | Description                           | Schema                                   |
| ----------- | ------------------------------------- | ---------------------------------------- |
| 200         | Successfully queried product manual   | Registration code response data«ProductManualDto» |
| 5032        | Token verification failed             |                                          |
| 5106        | Please enter token                    |                                          |


**Response Parameters**:


| Parameter Name  | Parameter Description | Type             | Schema           |
| --------------- | --------------------- | ---------------- | ---------------- |
| code            | Response status code  | integer(int32)   | integer(int32)   |
| data            | Response data         | ProductManualDto | ProductManualDto |
| &emsp;&emsp;url | Product manual URL    | string           |                  |
| extMsg          | Extended message      | string           |                  |
| msg             | Response message      | string           |                  |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
		"url": ""
	},
	"extMsg": "",
	"msg": ""
}
```