# Modify Family


**Interface Address**:`/v2/family/enduserapi/setFamily`


**Request Method**:`PUT`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**Interface Description**:`Modify Family`

**Request Parameters**:


| Parameter Name    | Parameter Description   | Request Type | Required | Data Type | schema |
| ----------------- | ----------------------- | ------------ | -------- | --------- | ------ |
| fid               | Family ID               | query        | true     | string    |        |
| familyCoordinates | Family coordinates      | query        | false    | string    |        |
| familyLocation    | Family address          | query        | false    | string    |        |
| familyName        | Family name             | query        | false    | string    |        |


**Response Status**:


| Status Code | Description                                         | schema                     |
| ----------- | --------------------------------------------------- | -------------------------- |
| 200         | Family modified successfully                        | Registration code response data |
| 5041        | No permission                                       |                            |
| 5616        | Family name already exists                          |                            |
| 5618        | Please enter Family ID                              |                            |
| 5621        | Failed to modify family                             |                            |
| 5633        | Coordinate format error                             |                            |
| 5635        | Home mode not enabled                               |                            |
| 5659        | Family name too long, please enter a family name within 256 characters |          |
| 5660        | Family address too long, please enter a family address within 256 characters |    |
| 6049        | Insufficient permissions, current user is a regular member |                      |


**Response Parameters**:


| Parameter Name | Parameter Description | Type           | schema         |
| -------------- | --------------------- | -------------- | -------------- |
| code           | Response status code  | integer(int32) | integer(int32) |
| data           | Response data         | object         |                |
| extMsg         | Extended message      | string         |                |
| msg            | Response message      | string         |                |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {},
	"extMsg": "",
	"msg": ""
}
```