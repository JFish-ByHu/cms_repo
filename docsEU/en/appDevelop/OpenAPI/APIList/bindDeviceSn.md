# Bind Device Using SN


**API Address**:`/v2/binding/enduserapi/bindDeviceSn`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`

**API Description**:`Bind device using SN`


**Request Parameters**:


| Parameter Name     | Parameter Description                                     | Request Type | Required | Data Type       | Schema |
| ------------------ | --------------------------------------------------------- | ------------ | -------- | -------------- | ------ |
| pk                 | Product Key                                               | query        | true     | string         |        |
| sn                 | Device SN                                                 | query        | true     | string         |        |
| capabilitiesBitmask | Device network capabilities:<br/>1-WAN<br/>2-LAN(WiFi)<br/>3-LAN(WiFi)+WAN<br/>4-BLE<br/>5-WAN+BLE<br/>6-LAN(WiFi)+BLE<br/>7-WAN+LAN(WiFi)+BLE<br/>8-Matter<br/>9-WAN+Matter<br/>10-LAN(WiFi)+Matter<br/>11-LAN(WiFi)+WAN+Matter<br/>12-BLE+Matter<br/>13-WAN+BLE+Matter<br/>14-LAN(WiFi)+BLE+Matter <br/>15-WAN+LAN(WiFi)+BLE+Matter | query | false | integer(int32) |        |
| deviceName         | Device name                                               | query        | false    | string         |        |
| fid                | Family ID                                                 | query        | false    | string         |        |
| frid               | Room ID                                                   | query        | false    | string         |        |
| isCommonDevice     | In home mode, whether to add to common device list (added by default) | query     | false    | boolean        |        |


**Response Status**:


| Status Code | Description                                  | Schema                             |
| ----------- | -------------------------------------------- | ---------------------------------- |
| 200         | Successfully bound device using SN           | Registration code response data«Binding» |
| 5009        | Device verification failed                   |                                    |
| 5032        | Token verification failed                    |                                    |
| 5041        | No permission                                |                                    |
| 5048        | Device binding failed                        |                                    |
| 5049        | Device already bound                         |                                    |
| 5052        | Device not bound                             |                                    |
| 5066        | Please enter Product Key                     |                                    |
| 5067        | Please enter Device Key                      |                                    |
| 5088        | Please enter device SN                       |                                    |
| 5089        | Device SN request failed                     |                                    |
| 5090        | Requested device SN invalid                  |                                    |
| 5093        | Abnormal user domain                         |                                    |
| 5106        | Please enter token                           |                                    |
| 5229        | User domain not authorized for this product  |                                    |
| 5314        | Device query failed in cloud platform        |                                    |
| 5327        | No permission for this product               |                                    |
| 5333        | Device name exceeds length limit             |                                    |
| 5361        | Incorrect DK format                          |                                    |
| 5412        | Product binding mode is unique, cannot bind repeatedly |                          |
| 5553        | Product or device does not exist             |                                    |
| 5624        | Home mode not enabled                        |                                    |
| 5636        | Please enter family ID                       |                                    |
| 5669        | Regular user has no permission to bind device |                                   |
| 5893        | Failed to add common device                  |                                    |
| 6040        | Already accepted device sharing              |                                    |
| 6083        | Bound device does not belong to current data center |                             |


**Response Parameters**:


| Parameter Name        | Parameter Description | Type           | Schema         |
| --------------------- | -------------------- | -------------- | -------------- |
| code                  | Response status code | integer(int32) | integer(int32) |
| data                  | Response data        | Binding        | Binding        |
| &emsp;&emsp;authKey   | AuthKey              | string         |                |
| &emsp;&emsp;dk        | Device Key           | string         |                |
| &emsp;&emsp;moduleType | Device model        | string         |                |
| &emsp;&emsp;pk        | Product Key          | string         |                |
| extMsg                | Extended message     | string         |                |
| msg                   | Response message     | string         |                |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
		"authKey": "",
		"dk": "",
		"moduleType": "",
		"pk": ""
	},
	"extMsg": "",
	"msg": ""
}
```