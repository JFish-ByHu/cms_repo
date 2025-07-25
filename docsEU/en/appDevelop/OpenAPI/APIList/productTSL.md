# Query Thing Model TSL


**Interface Address**:`/v2/binding/enduserapi/productTSL`


**Request Method**:`GET`


**Request Data Type**:`application/x-www-form-urlencoded`


**Response Data Type**:`*/*`


**Interface Description**:`Query Thing Model TSL`


**Request Parameters**:


| Parameter Name | Parameter Description      | Request Type | Required | Data Type | schema |
| -------------- | -------------------------- | ------------ | -------- | --------- | ------ |
| pk             | Product Key                | query        | true     | string    |        |
| gatewayPk      | Gateway Device Product Key | query        | false    | string    |        |


**Response Status**:


| Status Code | Description                   | schema                     |
| ----------- | ----------------------------- | -------------------------- |
| 200         | Query Thing Model TSL success | Registration code response data |
| 5032        | Token verification failed     |                            |
| 5041        | No permission                 |                            |
| 5066        | Please enter Product Key      |                            |
| 5106        | Please enter token            |                            |
| 5193        | TSL query failed              |                            |


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