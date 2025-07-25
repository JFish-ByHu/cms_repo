# Unbind Device Using PK, DK


**Interface Address**:`/v2/binding/enduserapi/unbundlingDeviceDk`


**Request Method**:`DELETE`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**Interface Description**:`Unbind device using PK, DK`


**Request Parameters**:


| Parameter Name        | Parameter Description                                                                                                                                                                  | Request Type | Required | Data Type | schema |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | -------- | --------- | ------ |
| dk                    | Device Key                                                                                                                                                                             | query        | true     | string    |        |
| pk                    | Product Key                                                                                                                                                                            | query        | true     | string    |        |
| isInit                | Whether to initialize, default false                                                                                                                                                   | query        | false    | boolean   |        |
| pureBtResetCredentials | Pure Bluetooth device reset credentials<br/>Algorithm: BASE64_ENCODE(AES_128_CBC(PKCS5Padding(PK,DK,bindingSecret), key=PS, iv=random) ), PKCS5Padding content includes English comma "," | query     | false    | string    |        |
| random                | Random used to decrypt reset credentials                                                                                                                                               | query        | false    | string    |        |


**Response Status**:


| Status Code | Description                | schema                            |
| ----------- | -------------------------- | --------------------------------- |
| 200         | Device unbound successfully | Registration code response data«UnbindRespDto» |
| 5032        | Token verification failed  |                                   |
| 5050        | Device unbinding failed    |                                   |
| 5052        | Device not bound           |                                   |
| 5066        | Please enter Product Key   |                                   |
| 5067        | Please enter Device Key    |                                   |
| 5106        | Please enter token         |                                   |


**Response Parameters**:


| Parameter Name          | Parameter Description                                                             | Type           | schema         |
| ----------------------- | --------------------------------------------------------------------------------- | -------------- | -------------- |
| code                    | Response status code                                                              | integer(int32) | integer(int32) |
| data                    | Response data                                                                     | UnbindRespDto  | UnbindRespDto  |
| &emsp;&emsp;bindingSum  | Number of binding users of the device in the cloud after unbinding, including pseudo-binding | integer(int32) |                |
| extMsg                  | Extended message                                                                  | string         |                |
| msg                     | Response message                                                                  | string         |                |


**Response Example**:
```javascript
{
	"code": 0,
	"data": {
		"bindingSum": 0
	},
	"extMsg": "",
	"msg": ""
}
```