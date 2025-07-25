# Test Automation


**API Address**:`/v2/cep/enduserapi/automation/test`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Test automation`



**Request Example**:


```javascript
{
  "actions": [
    {
      "delayTime": 0,
      "deviceKey": "",
      "icon": "",
      "id": 0,
      "name": "",
      "productKey": "",
      "property": {
        "code": "",
        "compare": "",
        "dataType": "",
        "id": 0,
        "name": "",
        "subName": "",
        "subType": "",
        "type": "",
        "unit": "",
        "value": {}
      },
      "sceneId": "",
      "sort": 0,
      "type": 0
    }
  ],
  "fid": "",
  "timeout": 0
}
```


**Request Parameters**:


| Parameter Name                           | Description                                               | Request Type | Required | Data Type       | Schema                |
| ---------------------------------------- | --------------------------------------------------------- | ------------ | -------- | --------------- | --------------------- |
| cmd                                      | cmd                                                       | body         | true     | Test automation | Test automation       |
| &emsp;&emsp;actions                      | Trigger actions                                           |              | true     | array           | Automation Execution Action |
| &emsp;&emsp;&emsp;&emsp;delayTime        | Delay time in seconds                                     |              | false    | integer         |                       |
| &emsp;&emsp;&emsp;&emsp;deviceKey        | Device DK/Group ID                                        |              | false    | string          |                       |
| &emsp;&emsp;&emsp;&emsp;icon             | Device/Group/Scene icon                                   |              | false    | string          |                       |
| &emsp;&emsp;&emsp;&emsp;id               |                                                           |              | false    | integer         |                       |
| &emsp;&emsp;&emsp;&emsp;name             | Device/Group/Scene name                                   |              | false    | string          |                       |
| &emsp;&emsp;&emsp;&emsp;productKey       | Product PK/Group PK                                       |              | false    | string          |                       |
| &emsp;&emsp;&emsp;&emsp;property         | Device property                                           |              | false    | Thing Model Property | Thing Model Property  |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code | Thing model identifier                                    |              | true     | string          |                       |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;compare | Comparison operator: >                                 | >=           | <        | <=              | ==                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataType | Data type. Supports: BOOL, ENUM, INT, FLOAT, DOUBLE, Available values: BOOL,DOUBLE,ENUM,FLOAT,INT |  | true | string     |                       |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id   | Thing model function ID                                   |              | true     | integer         |                       |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name | Thing model name                                          |              | true     | string          |                       |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subName |                                                        |              | false    | string          |                       |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subType |                                                        |              | false    | string          |                       |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type | Thing model type                                          |              | false    | string          |                       |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unit | Thing model unit                                          |              | false    | string          |                       |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value | Thing model property comparison value                    |              | false    | object          |                       |
| &emsp;&emsp;&emsp;&emsp;sceneId          | Scene ID                                                  |              | false    | string          |                       |
| &emsp;&emsp;&emsp;&emsp;sort             | Execution action order, starts from 1 and increments      |              | true     | integer         |                       |
| &emsp;&emsp;&emsp;&emsp;type             | Execution action type. 1: Delay, 2: Device, 3: Group, 4: Scene |           | true     | integer         |                       |
| &emsp;&emsp;fid                          |                                                           |              | false    | string          |                       |
| &emsp;&emsp;timeout                      | Test automation timeout (seconds), default 2*60 if not provided |          | false    | integer(int32)  |                       |
| Authorization                            |                                                           | header       | false    | string          |                       |


**Response Status**:


| Status Code | Description  | Schema          |
| ----------- | ------------ | --------------- |
| 200         | OK           | ApiResult«long» |
| 201         | Created      |                 |
| 401         | Unauthorized |                 |
| 403         | Forbidden    |                 |
| 404         | Not Found    |                 |


**Response Parameters**:


| Parameter Name | Description | Type           | Schema         |
| -------------- | ----------- | -------------- | -------------- |
| code           |             | integer(int32) | integer(int32) |
| data           |             | integer(int64) | integer(int64) |
| extMsg         |             | string         |                |
| msg            |             | string         |                |


**Response Example**:
```javascript
{
	"code": 0,
	"data": 0,
	"extMsg": "",
	"msg": ""
}
```