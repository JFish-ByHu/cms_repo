# Query User Domain List


**API Address**:`/v2/enduser/enterpriseapi/entUserDomainList`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Query enterprise user domain list`


**Request Parameters**:


| Parameter Name | Parameter Description               | Request Type | Required | Data Type       | Schema |
| -------------- | ----------------------------------- | ------------ | -------- | -------------- | ------ |
| page           | Current page, default is page 1     | query        | false    | integer(int32) |        |
| pageSize       | Page size, default is 10 items      | query        | false    | integer(int32) |        |


**Response Status**:


| Status Code | Description                           | Schema                                 |
| ----------- | ------------------------------------- | -------------------------------------- |
| 200         | Successfully queried user domain list | Return registration code response data«PageInfo«User Domain»» |
| 5032        | Token verification failed             |                                        |
| 5106        | Please enter token                    |                                        |
| 5112        | Please enter enterprise ID            |                                        |


**Response Parameters**:


| Parameter Name                           | Parameter Description | Type             | Schema           |
| ---------------------------------------- | --------------------- | ---------------- | ---------------- |
| code                                     | Response status code  | integer(int32)   | integer(int32)   |
| data                                     | Response data         | PageInfo«User Domain» | PageInfo«User Domain» |
| &emsp;&emsp;endRow                       |                       | integer(int64)   |                  |
| &emsp;&emsp;hasNextPage                  |                       | boolean          |                  |
| &emsp;&emsp;hasPreviousPage              |                       | boolean          |                  |
| &emsp;&emsp;isFirstPage                  |                       | boolean          |                  |
| &emsp;&emsp;isLastPage                   |                       | boolean          |                  |
| &emsp;&emsp;list                         |                       | array            | User Domain      |
| &emsp;&emsp;&emsp;&emsp;addTime          | Add time              | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;addTimeTs        |                       | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;enable           |                       | boolean          |                  |
| &emsp;&emsp;&emsp;&emsp;entId            | Enterprise ID         | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;isEnable         | Is enabled            | boolean          |                  |
| &emsp;&emsp;&emsp;&emsp;remark           | Remark                | string           |                  |
| &emsp;&emsp;&emsp;&emsp;updateTime       | Update time           | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;updateTimeTs     |                       | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;userDomain       | User domain           | string           |                  |
| &emsp;&emsp;&emsp;&emsp;userDomainId     |                       | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;userDomainSecret | User domain secret    | string           |                  |
| &emsp;&emsp;&emsp;&emsp;userDomainType   | User domain type      | string           |                  |
| &emsp;&emsp;navigateFirstPage            |                       | integer(int32)   |                  |
| &emsp;&emsp;navigateLastPage             |                       | integer(int32)   |                  |
| &emsp;&emsp;navigatePages                |                       | integer(int32)   |                  |
| &emsp;&emsp;navigatepageNums             |                       | array            | integer          |
| &emsp;&emsp;nextPage                     |                       | integer(int32)   |                  |
| &emsp;&emsp;pageNum                      |                       | integer(int32)   |                  |
| &emsp;&emsp;pageSize                     |                       | integer(int32)   |                  |
| &emsp;&emsp;pages                        |                       | integer(int32)   |                  |
| &emsp;&emsp;prePage                      |                       | integer(int32)   |                  |
| &emsp;&emsp;size                         |                       | integer(int32)   |                  |
| &emsp;&emsp;startRow                     |                       | integer(int64)   |                  |
| &emsp;&emsp;total                        |                       | integer(int64)   |                  |
| extMsg                                   | Extended message      | string           |                  |
| msg                                      | Response message      | string           |                  |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
		"endRow": 0,
		"hasNextPage": true,
		"hasPreviousPage": true,
		"isFirstPage": true,
		"isLastPage": true,
		"list": [
			{
				"addTime": 0,
				"addTimeTs": 0,
				"enable": true,
				"entId": 0,
				"isEnable": true,
				"remark": "",
				"updateTime": 0,
				"updateTimeTs": 0,
				"userDomain": "",
				"userDomainId": 0,
				"userDomainSecret": "",
				"userDomainType": ""
			}
		],
		"navigateFirstPage": 0,
		"navigateLastPage": 0,
		"navigatePages": 0,
		"navigatepageNums": [],
		"nextPage": 0,
		"pageNum": 0,
		"pageSize": 0,
		"pages": 0,
		"prePage": 0,
		"size": 0,
		"startRow": 0,
		"total": 0
	},
	"extMsg": "",
	"msg": ""
}
```