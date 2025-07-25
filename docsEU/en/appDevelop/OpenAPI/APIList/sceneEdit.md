# Edit Scene


**Interface Address**:`/v2/cep/enduserapi/sceneEdit`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**Interface Description**:`Edit Scene`



**Request Example**:


```javascript
{
  "fid": "",
  "isCommon": true,
  "sceneInfo": {
    "icon": "",
    "id": 0,
    "metaDataList": [
      {
        "actionList": [
          {
            "actionId": 0,
            "code": "",
            "dataType": "",
            "id": 0,
            "name": "",
            "subName": "",
            "subType": "",
            "type": "",
            "unit": "",
            "value": {}
          }
        ],
        "deviceKey": "",
        "deviceName": "",
        "deviceType": 0,
        "logoImage": "",
        "productKey": ""
      }
    ],
    "name": "",
    "sceneId": "",
    "uid": ""
  }
}
```


**Request Parameters**:


| Parameter Name                                           | Parameter Description                                   | Request Type | Required | Data Type      | schema        |
| -------------------------------------------------------- | ------------------------------------------------------- | ------------ | -------- | -------------- | ------------- |
| cmd                                                      | cmd                                                     | body         | true     | Scene Param Req | Scene Param Req |
| &emsp;&emsp;fid                                          | Family ID, required when home mode is enabled, otherwise not | | false    | string         |               |
| &emsp;&emsp;isCommon                                     | Whether to add to common scenes                         |              | false    | boolean        |               |
| &emsp;&emsp;sceneInfo                                    | Scene information                                       |              | true     | Scene Info     | Scene Info    |
| &emsp;&emsp;&emsp;&emsp;icon                             | Scene icon                                              |              | false    | string         |               |
| &emsp;&emsp;&emsp;&emsp;id                               | Scene primary key ID                                    |              | false    | integer        |               |
| &emsp;&emsp;&emsp;&emsp;metaDataList                     | Linkage data                                            |              | true     | array          | Linkage Data  |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;actionList           | Execute actions                                         |              | true     | array          | Execute Action |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;actionId | Execute action ID                                       |              | false    | integer        |               |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code     | Thing model identifier                                  |              | true     | string         |               |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataType | Thing model data type                                   |              | true     | string         |               |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id       | Thing model function ID                                 |              | true     | integer        |               |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name     | Thing model function name                               |              | true     | string         |               |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subName  |                                                         |              | false    | string         |               |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subType  | Read/write type                                         |              | false    | string         |               |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type     | Thing model function type                               |              | true     | string         |               |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unit     | Thing model unit                                        |              | false    | string         |               |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value    | Thing model value                                       |              | true     | object         |               |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deviceKey            | Device/Group ID                                         |              | true     | string         |               |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deviceName           | Device name/Group name                                  |              | false    | string         |               |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deviceType           | Device type, 1: Normal device, 2: Group                 |              | true     | integer        |               |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;logoImage            | Scene LOGO                                              |              | false    | string         |               |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productKey           | Product KEY                                             |              | true     | string         |               |
| &emsp;&emsp;&emsp;&emsp;name                             | Scene name                                              |              | false    | string         |               |
| &emsp;&emsp;&emsp;&emsp;sceneId                          | Scene ID                                                |              | false    | string         |               |
| &emsp;&emsp;&emsp;&emsp;uid                              | End-user ID                                             |              | false    | string         |               |
| Authorization                                            |                                                         | header       | false    | string         |               |


**Response Status**:


| Status Code | Description  | schema          |
| ----------- | ------------ | --------------- |
| 200         | OK           | ApiResult«Void» |
| 201         | Created      |                 |
| 401         | Unauthorized |                 |
| 403         | Forbidden    |                 |
| 404         | Not Found    |                 |


**Response Parameters**:


| Parameter Name | Parameter Description | Type           | schema         |
| -------------- | --------------------- | -------------- | -------------- |
| code           |                      | integer(int32) | integer(int32) |
| extMsg         |                      | string         |                |
| msg            |                      | string         |                |


**Response Example**:
```javascript
{
	"code": 0,
	"extMsg": "",
	"msg": ""
}
```