# WiFi Device Binding


**API Address**:`/v2/binding/enduserapi/v2/deviceBindingByWifi`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`application/json;charset=UTF-8`


**API Description**:`WiFi device binding`



**Request Example**:


```javascript
{
  "bindingCode": "",
  "capabilitiesBitmask": 0,
  "deviceKey": "",
  "deviceName": "",
  "fid": "",
  "frid": "",
  "isCommonDevice": true,
  "isMatter": true,
  "matterInfo": {
    "catList": [
      {
        "cat": 0,
        "privilege": ""
      }
    ],
    "discriminator": 0,
    "extra": "",
    "fabricId": 0,
    "matterProductId": 0,
    "matterVendorId": 0,
    "matterVersion": "",
    "nodeId": 0
  },
  "productKey": ""
}
```


**Request Parameters**:


| Parameter Name                              | Parameter Description                                      | Request Type | Required | Data Type       | Schema       |
| ------------------------------------------- | ---------------------------------------------------------- | ------------ | -------- | -------------- | ------------ |
| param                                       | param                                                      | body         | true     | WiFi Binding v2 | WiFi Binding v2 |
| &emsp;&emsp;bindingCode                     | bindingCode                                                |              | true     | string         |              |
| &emsp;&emsp;capabilitiesBitmask             | Device network capabilities:<br/>1-WAN<br/>2-LAN(WiFi)<br/>3-LAN(WiFi)+WAN<br/>4-BLE<br/>5-WAN+BLE<br/>6-LAN(WiFi)+BLE<br/>7-WAN+LAN(WiFi)+BLE<br/>8-Matter<br/>9-WAN+Matter<br/>10-LAN(WiFi)+Matter<br/>11-LAN(WiFi)+WAN+Matter<br/>12-BLE+Matter<br/>13-WAN+BLE+Matter<br/>14-LAN(WiFi)+BLE+Matter <br/>15-WAN+LAN(WiFi)+BLE+Matter |              | false    | integer(int32) |              |
| &emsp;&emsp;deviceKey                       | Device Key                                                 |              | true     | string         |              |
| &emsp;&emsp;deviceName                      | Device name                                                |              | false    | string         |              |
| &emsp;&emsp;fid                             | Family ID                                                  |              | false    | string         |              |
| &emsp;&emsp;frid                            | Room ID                                                    |              | false    | string         |              |
| &emsp;&emsp;isCommonDevice                  | In home mode, whether to add to common device list (added by default) |              | false    | boolean        |              |
| &emsp;&emsp;isMatter                        | Whether it is a Matter device                               |              | false    | boolean        |              |
| &emsp;&emsp;matterInfo                      | Matter information                                          |              | false    | Matter V2 device | Matter V2 device |
| &emsp;&emsp;&emsp;&emsp;catList             | catList                                                    |              | false    | array          | CatInfoParam |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;cat     | Matter device cat data                                     |              | false    | integer        |              |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;privilege | View/Operate/Administer                                    |              | false    | string         |              |
| &emsp;&emsp;&emsp;&emsp;discriminator       | Device identifier                                          |              | false    | integer        |              |
| &emsp;&emsp;&emsp;&emsp;extra               | Matter extension field                                     |              | false    | string         |              |
| &emsp;&emsp;&emsp;&emsp;fabricId            | fabricID                                                   |              | false    | integer        |              |
| &emsp;&emsp;&emsp;&emsp;matterProductId     | Product ID                                                 |              | false    | integer        |              |
| &emsp;&emsp;&emsp;&emsp;matterVendorId      | Vendor ID                                                  |              | false    | integer        |              |
| &emsp;&emsp;&emsp;&emsp;matterVersion       | matterVersion                                              |              | false    | string         |              |
| &emsp;&emsp;&emsp;&emsp;nodeId              | Node ID                                                    |              | false    | integer        |              |
| &emsp;&emsp;productKey                      | Product Key                                                |              | true     | string         |              |


**Response Status**:


| Status Code | Description                                   | Schema                                      |
| ----------- | --------------------------------------------- | ------------------------------------------- |
| 200         | WiFi device binding successful                | Registration code response data«DeviceInfoByBinding» |
| 5009        | Device verification failed                    |                                             |
| 5032        | Token verification failed                     |                                             |
| 5048        | Device binding failed                         |                                             |
| 5049        | Device already bound                          |                                             |
| 5066        | Please enter Product Key                      |                                             |
| 5067        | Please enter Device Key                       |                                             |
| 5106        | Please enter token                            |                                             |
| 5179        | Please enter bindingCode                      |                                             |
| 5213        | Incorrect bindingCode format                  |                                             |
| 5229        | User domain not authorized for this product   |                                             |
| 5314        | Device query failed in cloud platform         |                                             |
| 5333        | Device name exceeds length limit              |                                             |
| 5361        | Incorrect DK format                           |                                             |
| 5412        | Product binding mode is unique, cannot bind repeatedly |                                    |
| 5460        | bindingCode not reported                      |                                             |
| 5461        | bindingCode expired                           |                                             |
| 5462        | bindingCode verification failed               |                                             |
| 5465        | bindingSecret not reported                    |                                             |
| 5879        | Please enter device identifier                |                                             |
| 5880        | Please enter Matter device product ID         |                                             |
| 5881        | Please enter Matter version number            |                                             |
| 5882        | Please enter vendor                           |                                             |
| 5883        | Please enter fabricId                         |                                             |
| 5885        | Node ID cannot be empty                       |                                             |
| 6083        | Bound device does not belong to current data center |                                       |


**Response Parameters**:


| Parameter Name          | Parameter Description                                          | Type                | Schema              |
| ----------------------- | -------------------------------------------------------------- | ------------------- | ------------------- |
| code                    | Response status code                                           | integer(int32)      | integer(int32)      |
| data                    | Response data                                                  | DeviceInfoByBinding | DeviceInfoByBinding |
| &emsp;&emsp;authKey     | AuthKey                                                        | string              |                     |
| &emsp;&emsp;bindingMode | Binding mode:<br/>1 Multi-user binding<br/>2 Owner binding<br/>3 Rotation binding | integer(int32)      |                     |
| &emsp;&emsp;productLogo | Product logo                                                   | string              |                     |
| &emsp;&emsp;productName | Product name                                                   | string              |                     |
| extMsg                  | Extended message                                               | string              |                     |
| msg                     | Response message                                               | string              |                     |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
		"authKey": "",
		"bindingMode": 0,
		"productLogo": "",
		"productName": ""
	},
	"extMsg": "",
	"msg": ""
}
```