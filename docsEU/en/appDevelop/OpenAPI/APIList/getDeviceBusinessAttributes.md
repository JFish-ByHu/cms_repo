# Query Device Business Attributes


**API Address**:`/v2/binding/enduserapi/getDeviceBusinessAttributes`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**API Description**:`Query the values of the device's thing model`


**Request Parameters**:


| Parameter Name | Parameter Description                                                                                                        | Request Type | Required | Data Type | Schema |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------ | -------- | --------- | ------ |
| dk             | Device Key                                                                                                                   | query        | true     | string    |        |
| pk             | Product Key                                                                                                                  | query        | true     | string    |        |
| codeList       | Property identifiers to query<br/>Used in conjunction with query type, if querying multiple properties, separate with commas | query        | false    | string    |        |
| gatewayDk      | Gateway device's Device Key                                                                                                  | query        | false    | string    |        |
| gatewayPk      | Gateway device's Product Key                                                                                                 | query        | false    | string    |        |
| type           | Query type<br/>1 Query device basic properties<br/>2 Query thing model properties<br/>3 Query location information<br/>Query type can be single or multiple, if you need to query multiple types of property values, separate with commas | query | false | string |    |


**Response Status**:


| Status Code | Description                                     | Schema                                         |
| ----------- | ----------------------------------------------- | ---------------------------------------------- |
| 200         | Successfully queried device business attributes | Registration code response data«InnerApiDeviceDetailV2» |
| 5032        | Token verification failed                       |                                                |
| 5041        | No permission                                   |                                                |
| 5047        | User authentication mismatch                    |                                                |
| 5052        | Device not bound                                |                                                |
| 5106        | Please enter token                              |                                                |
| 5114        | DMP business attribute query failed             |                                                |
| 5471        | Please enter query type for property identifiers |                                               |


**Response Parameters**:


| Parameter Name                          | Parameter Description                                                   | Type                   | Schema                 |
| --------------------------------------- | ----------------------------------------------------------------------- | ---------------------- | ---------------------- |
| code                                    | Response status code                                                    | integer(int32)         | integer(int32)         |
| data                                    | Response data                                                           | InnerApiDeviceDetailV2 | InnerApiDeviceDetailV2 |
| &emsp;&emsp;customizeTslInfo            | Custom thing model data reporting list                                  | array                  | Custom Thing Model Data |
| &emsp;&emsp;&emsp;&emsp;abId            | Function ID                                                            | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;dataType        | Data type                                                              | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;name            | Function name                                                          | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;resourceCode    | Function identifier                                                    | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;resourceValce   | Function value                                                         | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;subType         | Data operation type                                                    | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;type            | Function type                                                          | string                 |                        |
| &emsp;&emsp;deviceData                  | Resource thing model data list (battery, voltage, etc. Data available only when reported by device) | Device Resource Data | Device Resource Data |
| &emsp;&emsp;&emsp;&emsp;battery         | Battery level                                                          | number                 |                        |
| &emsp;&emsp;&emsp;&emsp;cellId          | Base station ID                                                        | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;comProtocolVer  | Communication protocol version                                         | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;dataProtocolVer | Data protocol version                                                  | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;deviceKey       | Device Key                                                             | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;iccid           | ICCID number                                                           | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;lac             | Location area code                                                     | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;locator         | Location support function                                              | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;mcc             | Mobile country code                                                    | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;mcuVersion      | MCU version                                                            | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;memoryFree      | Remaining space                                                        | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;mnc             | Mobile network code                                                    | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;phoneNum        | Phone number                                                           | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;productKey      | Product Key                                                            | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;rsrp            | Reference Signal Received Power                                        | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;rsrq            | LTE Reference Signal Received Quality                                  | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;sdkVersion      | SDK version                                                            | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;signalStrength  | Signal strength                                                        | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;sim             | SIM number                                                             | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;snr             | Signal to Interference plus Noise Ratio                                | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;type            | Module model                                                           | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;version         | Module version                                                         | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;voltage         | Voltage                                                                | number                 |                        |
| &emsp;&emsp;deviceLocateInfo            | Device location information data                                       | QdLocationLatest       | QdLocationLatest       |
| &emsp;&emsp;&emsp;&emsp;createTime      | Creation time                                                          | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;createTimeTs    |                                                                        | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;deviceKey       | Device key                                                             | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;hdop            | Horizontal Dilution of Precision                                       | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;lat             | Latitude                                                               | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;latType         | Latitude hemisphere N/S                                                | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;lng             | Longitude                                                              | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;lngType         | Longitude hemisphere W/E                                               | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;locateRaw       | Raw data                                                               | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;locateStatus    | Differential positioning/Non-differential positioning                  | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;locateTime      | Positioning time                                                       | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;locateTimeTs    |                                                                        | integer                |                        |
| &emsp;&emsp;&emsp;&emsp;locateType      | Positioning type                                                       | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;productKey      | Product key                                                            | string                 |                        |
| &emsp;&emsp;&emsp;&emsp;satellites      | Current number of satellites                                           | string                 |                        |
| extMsg                                  | Extended message                                                       | string                 |                        |
| msg                                     | Response message                                                       | string                 |                        |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
		"customizeTslInfo": [
			{
				"abId": 0,
				"dataType": "",
				"name": "",
				"resourceCode": "",
				"resourceValce": "",
				"subType": "",
				"type": ""
			}
		],
		"deviceData": {
			"battery": 0,
			"cellId": 0,
			"comProtocolVer": "",
			"dataProtocolVer": "",
			"deviceKey": "",
			"iccid": "",
			"lac": 0,
			"locator": "",
			"mcc": 0,
			"mcuVersion": "",
			"memoryFree": 0,
			"mnc": 0,
			"phoneNum": "",
			"productKey": "",
			"rsrp": 0,
			"rsrq": 0,
			"sdkVersion": "",
			"signalStrength": 0,
			"sim": "",
			"snr": 0,
			"type": "",
			"version": "",
			"voltage": 0
		},
		"deviceLocateInfo": {
			"createTime": "",
			"createTimeTs": 0,
			"deviceKey": "",
			"hdop": "",
			"lat": "",
			"latType": "",
			"lng": "",
			"lngType": "",
			"locateRaw": "",
			"locateStatus": "",
			"locateTime": "",
			"locateTimeTs": 0,
			"locateType": "",
			"productKey": "",
			"satellites": ""
		}
	},
	"extMsg": "",
	"msg": ""
}
```