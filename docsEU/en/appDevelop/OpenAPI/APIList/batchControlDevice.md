# Batch Control Devices


**API Address**:`/v2/binding/enduserapi/batchControlDevice`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Batch control devices`



**Request Example**:


```javascript
{
  "cacheTime": 0,
  "data": "",
  "dataFormat": 0,
  "deviceList": [
    {
      "deviceKey": "",
      "gatewayDeviceKey": "",
      "gatewayProductKey": "",
      "productKey": ""
    }
  ],
  "isCache": 0,
  "isCover": 0,
  "qos": 0,
  "type": 0
}
```


**Request Parameters**:


| Parameter Name                           | Parameter Description                                                                                  | Request Type | Required | Data Type       | Schema           |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------ | -------- | -------------- | ---------------- |
| param                                    | param                                                                                                  | body         | true     | Batch Control Device | Batch Control Device |
| &emsp;&emsp;cacheTime                    | Cache time in seconds, range 1-7776000 seconds, must be set when cache is enabled                      |              | false    | integer(int32) |                  |
| &emsp;&emsp;data                         | Device control command. When type is passthrough, maximum command length is 4096                       |              | true     | string         |                  |
| &emsp;&emsp;dataFormat                   | Data type 1: Hex 2: Text (when type is passthrough, dataFormat must be specified)                      |              | false    | integer(int32) |                  |
| &emsp;&emsp;deviceList                   | Device list                                                                                           |              | true     | array          | pkdk             |
| &emsp;&emsp;&emsp;&emsp;deviceKey        | Device deviceKey                                                                                      |              | true     | string         |                  |
| &emsp;&emsp;&emsp;&emsp;gatewayDeviceKey | Gateway device deviceKey                                                                              |              | false    | string         |                  |
| &emsp;&emsp;&emsp;&emsp;gatewayProductKey| Gateway product productKey                                                                            |              | false    | string         |                  |
| &emsp;&emsp;&emsp;&emsp;productKey       | Product productKey                                                                                    |              | true     | string         |                  |
| &emsp;&emsp;isCache                      | Whether to enable cache 1: Enable 2: Disable, default is disabled                                      |              | false    | integer(int32) |                  |
| &emsp;&emsp;isCover                      | Whether to overwrite previously sent identical commands 1: Overwrite 2: Don't overwrite, default is don't overwrite, this parameter is valid when cache is enabled |              | false    | integer(int32) |                  |
| &emsp;&emsp;qos                          | QoS level setting, parameter value range 0, 1, default is 1                                            |              | false    | integer(int32) |                  |
| &emsp;&emsp;type                         | Type 1: Passthrough 2: Property 3: Service                                                             |              | true     | integer(int32) |                  |


**Response Status**:


| Status Code | Description                                                                                            | Schema                              |
| ----------- | ------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| 200         | Batch control devices successful                                                                       | Registration code response data«PkdkResult» |
| 5032        | Token verification failed                                                                              |                                     |
| 5041        | No permission                                                                                          |                                     |
| 5070        | Please enter type                                                                                      |                                     |
| 5071        | Type error, types are 1: Passthrough 2: Property 3: Service                                            |                                     |
| 5072        | Please enter data type                                                                                 |                                     |
| 5073        | Data type error, data types are 1: Hex 2: Text (when type is passthrough, dataFormat must be specified)|                                     |
| 5074        | Please enter device control command                                                                    |                                     |
| 5075        | Device control command length cannot exceed 4096                                                       |                                     |
| 5106        | Please enter token                                                                                     |                                     |
| 5311        | Please enter device list                                                                               |                                     |
| 5312        | Total number of devices in list exceeds range                                                          |                                     |
| 5328        | Please enter cache time                                                                                |                                     |
| 5329        | Cache time out of range                                                                                |                                     |
| 5330        | Whether to enable cache is out of range                                                                |                                     |
| 5331        | Whether to overwrite previously sent identical commands is out of range                                |                                     |
| 5340        | Batch control devices failed                                                                           |                                     |


**Response Parameters**:


| Parameter Name                                        | Parameter Description  | Type           | Schema         |
| ----------------------------------------------------- | ---------------------- | -------------- | -------------- |
| code                                                  | Response status code   | integer(int32) | integer(int32) |
| data                                                  | Response data          | PkdkResult     | PkdkResult     |
| &emsp;&emsp;failureList                               | Failure list           | array          | PkdkMsg        |
| &emsp;&emsp;&emsp;&emsp;data                          |                        | pkdk           | pkdk           |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deviceKey         | Device deviceKey       | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;gatewayDeviceKey  | Gateway device deviceKey | string       |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;gatewayProductKey | Gateway product productKey | string     |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productKey        | Product productKey     | string         |                |
| &emsp;&emsp;&emsp;&emsp;msg                           |                        | string         |                |
| &emsp;&emsp;successList                               | Success list           | array          | PkdkSuc        |
| &emsp;&emsp;&emsp;&emsp;data                          |                        | pkdk           | pkdk           |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deviceKey         | Device deviceKey       | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;gatewayDeviceKey  | Gateway device deviceKey | string       |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;gatewayProductKey | Gateway product productKey | string     |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productKey        | Product productKey     | string         |                |
| &emsp;&emsp;&emsp;&emsp;ticket                        |                        | string         |                |
| extMsg                                                | Extended message       | string         |                |
| msg                                                   | Response message       | string         |                |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
		"failureList": [
			{
				"data": {
					"deviceKey": "",
					"gatewayDeviceKey": "",
					"gatewayProductKey": "",
					"productKey": ""
				},
				"msg": ""
			}
		],
		"successList": [
			{
				"data": {
					"deviceKey": "",
					"gatewayDeviceKey": "",
					"gatewayProductKey": "",
					"productKey": ""
				},
				"ticket": ""
			}
		]
	},
	"extMsg": "",
	"msg": ""
}
```