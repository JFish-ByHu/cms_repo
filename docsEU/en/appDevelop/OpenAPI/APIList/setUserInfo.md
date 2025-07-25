# Modify User Information


**Interface Address**:`/v2/enduser/enduserapi/setUserInfo`


**Request Method**:`PUT`


**Request Data Type**:`application/json`


**Response Data Type**:`*/*`


**Interface Description**:`Modify User Information`


**Request Parameters**:


| Parameter Name | Parameter Description                           | Request Type | Required | Data Type      | schema |
| -------------- | ----------------------------------------------- | ------------ | -------- | -------------- | ------ |
| address        | Address                                         | query        | false    | string         |        |
| city           | City                                            | query        | false    | string         |        |
| headImage      | Profile picture                                 | query        | false    | string         |        |
| lang           | Language                                        | query        | false    | integer(int32) |        |
| nationality    | Country                                         | query        | false    | integer(int32) |        |
| nikeName       | Nickname                                        | query        | false    | string         |        |
| province       | Province                                        | query        | false    | string         |        |
| remark         | Remarks                                         | query        | false    | string         |        |
| sex            | Gender 0: Male 1: Female 2: Private             | query        | false    | integer(int32) |        |
| signature      | Personal signature                              | query        | false    | string         |        |
| timezone       | Time zone                                       | query        | false    | integer(int32) |        |


**Response Status**:


| Status Code | Description                                            | schema                     |
| ----------- | ------------------------------------------------------ | -------------------------- |
| 200         | User information modified successfully                 | Registration code response data |
| 5032        | Token verification failed                              |                            |
| 5034        | User information format validation failed              |                            |
| 5042        | User information modification failed                   |                            |
| 5060        | Nickname length cannot exceed 50 characters            |                            |
| 5061        | Invalid gender, Gender 0: Male 1: Female 2: Private    |                            |
| 5076        | Address length cannot exceed 254 characters            |                            |
| 5473        | Province parameter value exceeds length limit          |                            |
| 5474        | City parameter value exceeds length limit              |                            |
| 5475        | Personal signature parameter value exceeds length limit |                           |
| 5476        | Remarks parameter value exceeds length limit           |                            |


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