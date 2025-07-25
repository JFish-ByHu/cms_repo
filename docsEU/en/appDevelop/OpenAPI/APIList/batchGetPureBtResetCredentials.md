# Batch Get Pure Bluetooth Device Reset Credentials


**API Address**:`/v2/binding/enduserapi/batchGetPureBtResetCredentials`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Batch get pure Bluetooth device reset credentials`



**Request Example**:


```javascript
[
  {
    "dk": "",
    "pk": ""
  }
]
```


**Request Parameters**:


| Parameter Name  | Parameter Description | Request Type | Required | Data Type | Schema  |
| --------------- | -------------------- | ------------ | -------- | --------- | ------- |
| param           | param                | body         | true     | array     | PkDkDto |
| &emsp;&emsp;dk  | Device Key           |              | true     | string    |         |
| &emsp;&emsp;pk  | Product Key          |              | true     | string    |         |


**Response Status**:


| Status Code | Description                                             | Schema                                      |
| ----------- | ------------------------------------------------------- | ------------------------------------------- |
| 200         | Successfully batch retrieved pure Bluetooth device reset credentials | Registration code response data«ResetCredentialsDto» |
| 5032        | Token verification failed                               |                                             |
| 5106        | Please enter token                                      |                                             |


**Response Parameters**:


| Parameter Name                          | Parameter Description           | Type                | Schema                     |
| --------------------------------------- | ------------------------------ | ------------------- | -------------------------- |
| code                                    | Response status code           | integer(int32)      | integer(int32)             |
| data                                    | Response data                  | ResetCredentialsDto | ResetCredentialsDto        |
| &emsp;&emsp;failedList                  | Failure list                   | array               | ResetCredentialsFailedDto  |
| &emsp;&emsp;&emsp;&emsp;dk              | dk                             | string              |                            |
| &emsp;&emsp;&emsp;&emsp;msg             |                                | string              |                            |
| &emsp;&emsp;&emsp;&emsp;pk              | pk                             | string              |                            |
| &emsp;&emsp;successList                 | Success list                   | array               | ResetCredentialsSuccessDto |
| &emsp;&emsp;&emsp;&emsp;dk              | dk                             | string              |                            |
| &emsp;&emsp;&emsp;&emsp;pk              | pk                             | string              |                            |
| &emsp;&emsp;&emsp;&emsp;resetCredentials | Pure Bluetooth device reset credentials | string    |                            |
| extMsg                                  | Extended message               | string              |                            |
| msg                                     | Response message               | string              |                            |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
		"failedList": [
			{
				"dk": "",
				"msg": "",
				"pk": ""
			}
		],
		"successList": [
			{
				"dk": "",
				"pk": "",
				"resetCredentials": ""
			}
		]
	},
	"extMsg": "",
	"msg": ""
}
```