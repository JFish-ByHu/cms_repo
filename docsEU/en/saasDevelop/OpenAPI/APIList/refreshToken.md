# Refresh Token


**API Address**:`/v2/quecauth/accessKeyAuthrize/refreshToken`


**Request Method**:`GET`


**Request Data Type**:`application/json`

**Response Data Type**:`*/*`

**API Description**:

● If the token has been refreshed within the last 30 minutes or was created within the last 30 minutes, the original token is returned;<br>
● If the user or AccessKey is disabled, the refresh will fail and the original token will be disabled.

**Request Parameters**:


| Parameter Name  | Parameter Description                                         | Request Type | Required | Data Type | Schema |
| --------------- | ------------------------------------------------------------- | ------------ | -------- | --------- | ------ |
| refresh_token   | Token to be refreshed                                         | query        | true     | String    |        |
| grant_type      | Authorization type, fixed as "refresh_token"                  | query        | true     | String    |        |
| scope           | Authorization scope. When this value is empty, it means requesting all functional scopes. When there are multiple scopes, separate them with spaces, e.g.: userinfo tls ota | query | false | String    |        |


**Response Parameters**:


| Parameter Name | Parameter Description                           | Type   | Schema |
| -------------- | ----------------------------------------------- | ------ | ------ |
| code           | Error code, 200 represents success, others are error codes | int    |        |
| msg            | Result message, returns "OK" on success         | String |        |
| access_token   | Returns token value on success                  | String |        |
| token_type     | Fixed as "jwt"                                  | String |        |
| expire_in      | Expiration time                                 | String |        |

**Response Example**:

```javascript
{
  "msg": "",
  "access_token": "QJWT eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyOTQ5NCIsImlhdCI6MTYxODQ3Mjk2MiwianRpIjoiYjVhMmRhNjgtMzI0Ni00ZWRjLWEwZTktOTEyZjdjMDFkMmMzIiwidXR5IjoicGVyIiwiZXhwIjoxNjE4NTU5MzYyLCJhbSI6IkFjY2Vzc0tleSIsInNwIjoiIn0.JUQjUKlaDepazh7JssvRZKDiA1UL83VK8WECj86TI_I",
  "code": 200,
  "scope": "userinfo",
  "token_type": "jwt",
  "expires_in": 86400
}
```