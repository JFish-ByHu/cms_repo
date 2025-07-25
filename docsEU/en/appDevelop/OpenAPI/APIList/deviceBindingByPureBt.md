# Pure Bluetooth Device Binding


**API Address**:`/v2/binding/enduserapi/deviceBindingByPureBt`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Pure Bluetooth device binding`



**Request Example**:


```javascript
{
  "bindingCode": "",
  "capabilitiesBitmask": 0,
  "deviceName": "",
  "dk": "",
  "encryptedBindingCode": "",
  "encryptedNewBindingSecret": "",
  "encryptedOldBindingSecret": "",
  "fid": "",
  "frid": "",
  "isCommonDevice": true,
  "pk": "",
  "pwd": "",
  "random": "",
  "signature": ""
}
```


**Request Parameters**:


| Parameter Name                      | Parameter Description                                         | Request Type | Required | Data Type              | Schema                |
| ----------------------------------- | ------------------------------------------------------------- | ------------ | -------- | --------------------- | --------------------- |
| param                               | param                                                         | body         | true     | BindDevicePureBtParam | BindDevicePureBtParam |
| &emsp;&emsp;bindingCode             | bindingCode, choose one between this and encryptedBindingCode |              | false    | string                |                       |
| &emsp;&emsp;capabilitiesBitmask     | Device network capabilities:<br/>1-WAN<br/>2-LAN(WiFi)<br/>3-LAN(WiFi)+WAN<br/>4-BLE<br/>5-WAN+BLE<br/>6-LAN(WiFi)+BLE<br/>7-WAN+LAN(WiFi)+BLE<br/>8-Matter<br/>9-WAN+Matter<br/>10-LAN(WiFi)+Matter<br/>11-LAN(WiFi)+WAN+Matter<br/>12-BLE+Matter<br/>13-WAN+BLE+Matter<br/>14-LAN(WiFi)+BLE+Matter <br/>15-WAN+LAN(WiFi)+BLE+Matter |              | false    | integer(int32)        |                       |
| &emsp;&emsp;deviceName              | Device name                                                  |              | false    | string                |                       |
| &emsp;&emsp;dk                      | Device Key                                                   |              | true     | string                |                       |
| &emsp;&emsp;encryptedBindingCode    | Encrypted bindingCode, choose one between this and bindingCode<br/>Algorithm: BASE64_ENCODE(AES_128_CBC(PKCS5Padding(bindingcode), key=PS, iv=random)) |              | false    | string                |                       |
| &emsp;&emsp;encryptedNewBindingSecret | New encrypted bindingSecret<br/>Algorithm: BASE64_ENCODE(AES_128_CBC(PKCS5Padding(PK,DK,bindingSecret), key=PS, iv=random)), PKCS5Padding content includes English comma "," |              | true     | string                |                       |
| &emsp;&emsp;encryptedOldBindingSecret | Old encrypted bindingSecret<br/>Algorithm: BASE64_ENCODE(AES_128_CBC(PKCS5Padding(PK,DK,bindingSecret), key=PS, iv=random)), PKCS5Padding content includes English comma "," |              | false    | string                |                       |
| &emsp;&emsp;fid                     | Family ID                                                    |              | false    | string                |                       |
| &emsp;&emsp;frid                    | Room ID                                                      |              | false    | string                |                       |
| &emsp;&emsp;isCommonDevice          | In home mode, whether to add to common device list (added by default) |              | false    | boolean               |                       |
| &emsp;&emsp;pk                      | Product Key                                                  |              | true     | string                |                       |
| &emsp;&emsp;pwd                     | pwd                                                          |              | false    | string                |                       |
| &emsp;&emsp;random                  | random                                                       |              | true     | string                |                       |
| &emsp;&emsp;signature               | Signature<br/>Algorithm: SHA256(pk+dk+bindingCode+pwd+userDomainSecret)<br/>If encryptedBindingCode is passed in the interface, use encryptedBindingCode to calculate bindingCode in the algorithm |              | true     | string                |                       |


**Response Status**:


| Status Code | Description                                   | Schema                           |
| ----------- | --------------------------------------------- | -------------------------------- |
| 200         | Pure Bluetooth device binding successful      | Registration code response data«Verified» |
| 5032        | Token verification failed                     |                                  |
| 5041        | No permission                                 |                                  |
| 5049        | Device already bound                          |                                  |
| 5052        | Device not bound                              |                                  |
| 5066        | Please enter Product Key                      |                                  |
| 5067        | Please enter Device Key                       |                                  |
| 5106        | Please enter token                            |                                  |
| 5179        | Please enter bindingCode                      |                                  |
| 5213        | Incorrect bindingCode format                  |                                  |
| 5229        | User domain not authorized for this product   |                                  |
| 5314        | Device query failed in cloud platform         |                                  |
| 5327        | No permission for this product                |                                  |
| 5333        | Device name exceeds length limit              |                                  |
| 5357        | Incorrect pwd format                          |                                  |
| 5358        | No product permission                         |                                  |
| 5361        | Incorrect DK format                           |                                  |
| 5412        | Product binding mode is unique, cannot bind repeatedly |                         |
| 5624        | Home mode not enabled                         |                                  |
| 5636        | Please enter family ID                        |                                  |
| 5669        | Regular user has no permission to bind device |                                  |
| 5893        | Failed to add common device                   |                                  |
| 6040        | Already accepted device sharing               |                                  |
| 6083        | Bound device does not belong to current data center |                            |


**Response Parameters**:


| Parameter Name      | Parameter Description                       | Type           | Schema         |
| ------------------- | ------------------------------------------- | -------------- | -------------- |
| code                | Response status code                        | integer(int32) | integer(int32) |
| data                | Response data                               | Verified       | Verified       |
| &emsp;&emsp;verified | Binding authentication: 0-Not verified 1-Verified | string(byte)   |                |
| extMsg              | Extended message                            | string         |                |
| msg                 | Response message                            | string         |                |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
		"verified": ""
	},
	"extMsg": "",
	"msg": ""
}
```