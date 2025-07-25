# Verify Device Binding Code Validity

## Verify bindingCode


**API Address**:`/v2/binding/enterpriseapi/verifyBindingCode`


**Request Method**:`POST`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**API Description**:`Verify bindingCode`

**Request Parameters**:


| Parameter Name | Parameter Description                                        | Request Type | Required | Data Type       | Schema |
| -------------- | ------------------------------------------------------------ | ------------ | -------- | -------------- | ------ |
| bindingCode    | bindingCode                                                  | query        | true     | string         |        |
| dk             | dk                                                           | query        | true     | string         |        |
| pk             | pk                                                           | query        | true     | string         |        |
| isBinding      | Whether device is currently being bound: 0-No (default), device will not receive bindingCode binding status return; 1-Yes, device will receive bindingCode binding status return | query        | false    | integer(int32) |        |


**Response Status**:


| Status Code | Description                | Schema                     |
| ----------- | -------------------------- | -------------------------- |
| 200         | Success                    | Return registration code response data«int» |
| 5066        | Please enter Product Key   |                            |
| 5067        | Please enter Device Key    |                            |
| 5144        | Authentication failed      |                            |
| 5179        | Please enter bindingCode   |                            |
| 5213        | Incorrect bindingCode format |                          |
| 5460        | bindingCode not reported   |                            |
| 5462        | bindingCode verification failed |                        |


**Response Parameters**:


| Parameter Name | Parameter Description | Type           | Schema         |
| -------------- | --------------------- | -------------- | -------------- |
| code           | Response status code  | integer(int32) | integer(int32) |
| data           | Response data         | integer(int32) | integer(int32) |
| extMsg         | Extended message      | string         |                |
| msg            | Response message      | string         |                |


**Response Example**:
```javascript
{
	"code": 0,
	"data": 0,
	"extMsg": "",
	"msg": ""
}
```