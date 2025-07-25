# Clear Queue


**API Address**:`/v2/quecrule/{version}/openapi/queue/clear`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`

**API Description**:`Clear queue`


**Request Parameters**:


| Parameter Name | Parameter Description         | Request Type | Required | Data Type       | Schema |
| -------------- | ----------------------------- | ------------ | -------- | -------------- | ------ |
| queueId        | Queue ID                      | query        | true     | integer(int64) |        |
| version        | Current version, valid value:r1 | path       | true     | string         |        |


**Response Status**:


| Status Code | Description                  | Schema               |
| ----------- | ---------------------------- | -------------------- |
| 200         | OK                           | ActionResultOfobject |
| 201         | Created                      |                      |
| 401         | Unauthorized                 |                      |
| 403         | Forbidden                    |                      |
| 404         | Not Found                    |                      |
| 16002       | The queue name does not exist |                     |
| 50000       | Service exception            |                      |
| 50005       | Parameter check error        |                      |
| 91004       | Token incorrect              |                      |
| 91005       | Doesn't have permission      |                      |


**Response Parameters**:


| Parameter Name | Parameter Description | Type           | Schema         |
| -------------- | --------------------- | -------------- | -------------- |
| code           | Return code           | integer(int32) | integer(int32) |
| data           | Object                | object         |                |
| msg            | Prompt message        | string         |                |
| pageNum        | Current page number   | integer(int32) | integer(int32) |
| pageSize       | Items per page        | integer(int32) | integer(int32) |
| pages          | Total pages           | integer(int32) | integer(int32) |
| total          | Total count           | integer(int32) | integer(int32) |


**Response Example**:
```javascript
{
        "code":200,
        "msg":""
}
```
