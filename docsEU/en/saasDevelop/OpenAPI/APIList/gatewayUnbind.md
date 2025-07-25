# Unbind Sub-Device from Gateway Using PK, DK


**API Address**:`/v2/devicemgr/r1/openapi/product/gateway/unbind`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`

**API Description**:`Unbind the association between sub-device and gateway using sub-device PK and DK`


**Request Parameters**:


| Parameter Name | Parameter Description | Request Type | Required | Data Type | Schema |
| -------------- | --------------------- | ------------ | -------- | --------- | ------ |
| deviceKey      | Device deviceKey      | query        | true     | string    |        |
| productKey     | Product productKey    | query        | true     | string    |        |


**Response Status**:


| Status Code | Description                                                  | Schema               |
| ----------- | ------------------------------------------------------------ | -------------------- |
| 200         | OK                                                           | ActionResultOfobject |
| 201         | Created                                                      |                      |
| 401         | Unauthorized                                                 |                      |
| 403         | Forbidden                                                    |                      |
| 404         | Not Found                                                    |                      |
| 50000       | Service exception                                            |                      |
| 50005       | Parameter check error                                        |                      |
| 50007       | The deviceID, productKey or deviceKey is empty               |                      |
| 70000       | Hub service unavailable                                      |                      |
| 70026       | The sub-device is not connected to the gateway device        |                      |
| 70089       | You have limited permission to operate this project or product or device |                      |
| 91001       | Token does not exist                                         |                      |
| 91004       | Token incorrect                                              |                      |
| 91005       | Doesn't have permission                                      |                      |


**Response Parameters**:


| Parameter Name | Parameter Description | Type   | Schema |
| -------------- | --------------------- | ------ | ------ |
| code           | Return code           | object |        |
| data           | Object                | object |        |
| exp1           |                       | string |        |
| msg            | Prompt message        | object |        |
| pageNum        | Current page number   | object |        |
| pageSize       | Items per page        | object |        |
| pages          | Total pages           | object |        |
| total          | Total count           | object |        |


**Response Example**:
```javascript
{
	"code": 200,
	"msg": ""
}
```
