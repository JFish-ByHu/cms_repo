# Batch Remove Common Scenes


**API Address**:`/v2/cep/enduserapi/batchDeleteCommonScene`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Batch remove common scenes`



**Request Example**:


```javascript
{
  "fid": "",
  "sceneIdList": []
}
```

**Request Parameters**:


| Parameter Name          | Parameter Description                                    | Request Type | Required | Data Type | Schema       |
| ----------------------- | -------------------------------------------------------- | ------------ | -------- | --------- | ------------ |
| cmd                     | cmd                                                      | body         | true     | Common Scene | Common Scene |
| &emsp;&emsp;fid         | Family ID, required when home mode is enabled, otherwise not needed |          | false    | string    |              |
| &emsp;&emsp;sceneIdList | Scene ID list                                            |          | true     | array     | string        |
| Authorization           |                                                          | header       | false    | string    |              |


**Response Status**:


| Status Code | Description  | Schema                         |
| ----------- | ------------ | ------------------------------ |
| 200         | OK           | ApiResult«SceneCommonDeleteCO» |
| 201         | Created      |                                |
| 401         | Unauthorized |                                |
| 403         | Forbidden    |                                |
| 404         | Not Found    |                                |


**Response Parameters**:


| Parameter Name          | Parameter Description | Type                | Schema              |
| ----------------------- | --------------------- | ------------------- | ------------------- |
| code                    |                       | integer(int32)      | integer(int32)      |
| data                    |                       | SceneCommonDeleteCO | SceneCommonDeleteCO |
| &emsp;&emsp;failureList | Failure list          | array               | object              |
| &emsp;&emsp;successList | Success list          | array               | object              |
| extMsg                  |                       | string              |                     |
| msg                     |                       | string              |                     |


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