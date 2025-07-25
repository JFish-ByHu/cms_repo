# Query Whether User Can Bind Device


**API Address**:`/v2/binding/enduserapi/getDeviceInfoByBinding`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Query whether user can bind device`


**Request Parameters**:


| Parameter Name    | Parameter Description                               | Request Type | Required | Data Type | Schema |
| ----------------- | --------------------------------------------------- | ------------ | -------- | --------- | ------ |
| pk                | Product Key                                          | query        | true     | string    |        |
| checkExistInCloud | Verify if device exists in cloud, default is true   | query        | false    | boolean   |        |
| dk                | Device Key                                           | query        | false    | string    |        |
| fid               | Family ID                                            | query        | false    | string    |        |


**Response Status**:


| Status Code | Description                                     | Schema                                    |
| ----------- | ----------------------------------------------- | ----------------------------------------- |
| 200         | Successfully queried whether user can bind device | Registration code response data«BindingDeviceInfo» |
| 5032        | Token verification failed                       |                                           |
| 5049        | Device already bound                            |                                           |
| 5066        | Please enter Product Key                        |                                           |
| 5106        | Please enter token                              |                                           |
| 5361        | Incorrect DK format                             |                                           |
| 5618        | Please enter family ID                          |                                           |
| 5913        | No permission to bind                           |                                           |
| 6040        | Already accepted device sharing                 |                                           |


**Response Parameters**:


| Parameter Name              | Parameter Description                                            | Type              | Schema            |
| --------------------------- | ---------------------------------------------------------------- | ----------------- | ----------------- |
| code                        | Response status code                                             | integer(int32)    | integer(int32)    |
| data                        | Response data                                                    | BindingDeviceInfo | BindingDeviceInfo |
| &emsp;&emsp;activeBluetooth | Priority Bluetooth activation switch configuration: true-enabled, false-disabled | boolean        |                   |
| &emsp;&emsp;bindingMode     | Binding mode:<br/>1 Multi-user binding<br/>2 Owner binding<br/>3 Rotation binding | integer(int32) |                   |
| &emsp;&emsp;productLogo     | Product logo                                                     | string            |                   |
| &emsp;&emsp;productName     | Product name                                                     | string            |                   |
| extMsg                      | Extended message                                                 | string            |                   |
| msg                         | Response message                                                 | string            |                   |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
		"activeBluetooth": true,
		"bindingMode": 0,
		"productLogo": "",
		"productName": ""
	},
	"extMsg": "",
	"msg": ""
}
```