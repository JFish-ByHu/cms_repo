# OpenAPI Integration Guide

SaaS application-related OpenAPI is mainly used for SaaS system integration, enabling product device management and remote control of devices through SaaS applications.

## Operation Steps

### Prerequisites

1. Before using OpenAPI services, you need to create a SaaS application under the SaaS Development -> SaaS Management menu.

2. Enable and authorize the API service packages you need to use on the SaaS Details -> Services page. You can only call the API interfaces under that service package after authorization.

3. Authorize product data that the SaaS application can access on the SaaS Details -> Products page. You can only query data under authorized products through the API after authorization.

4. Obtain AccessKey and AccessSecret, which will be used to exchange for an access Token later.

### System Integration

1. Use the login authentication API to obtain an access Token.

Interface address:

| API Address    | https://iot-api.acceleronix.io/v2/quecauth/accessKeyAuthrize/accessKeyLogin |
| -------------- | ------------------------------------------------------------ |
| Request Method | GET                                                          |
| Request Header | content-type: application/json                               |

Request parameters:

| **Parameter** | **Parameter Type** | **Required** | **Parameter Location** | **Parameter Description**                                    |
| ---------- | ------------ | ------------ | ------------ | ------------------------------------------------------------ |
| grant_type | String       | Yes          | Query        | Authorization type, fixed value: password                    |
| username   | String       | Yes          | Query        | **username generation rule:**<br>The username field is composed of key=value pairs, with fields concatenated using the "&" character. There is no order requirement for the fields. Please use uriencode to encode the username field during transmission.<br/>**username format (Replace AccessKey with your SaaS application parameter and timestamp with the current millisecond timestamp):**<br/>ver=1&auth_mode=accessKey&sign_method=sha256&access_key=\${AccessKey}&timestamp=\${timestamp}<br/>**Example:**<br/>ver=1&auth_mode=accessKey&sign_method=sha256&access_key=24b9zicjuns41H6MDg71AMnP&timestamp=1743059249391<br/>**After uriencode encoding:**<br/>ver%3D1%26auth_mode%3DaccessKey%26sign_method%3Dsha256%26access_key%3D24b9zicjuns41H6MDg71AMnP%26timestamp%3D1743059249391 |
| password   | String       | Yes          | Query        | **password generation rule:**<br/>sha256("\${username}${AccessSecret}")<br/>**Example:**<br/>sha256("ver=1&auth_mode=accessKey&sign_method=sha256&access_key=24b9zicjuns41H6MDg71AMnP&timestamp=17430592493916AE3p2SnA9ShP7ofigrccoeeks8DDoteJ1jUUTEz")<br/>**After sha256:**<br/>34fe86986230670cba424cadd01ded50f04929de3bfb0b0aef033ccee314fed1 |

Response parameters:

| **Parameter** | **Parameter Description**                               | **Type** | schema |
| ------------ | ------------------------------------ | -------- | ------ |
| code         | Response code <br>200 represents success, others are error codes | object   |        |
| access_token | Token value returned upon success                      | string   |        |
| msg          | Prompt message                             | string   |        |
| token_type   | Fixed as "jwt"                          | string   |        |
| expire_in    | Expiration time                             | string   |        |

Response status codes:

| **Status Code** | **Description**          |
| ---------- | ----------------------- |
| 200        | OK                      |
| 401        | Unauthorized            |
| 403        | Forbidden               |
| 404        | Not Found               |
| 50000      | service exception       |
| 50005      | param check error       |
| 70000      | Hub service unavailable |
| 90047      | AccessKey didn't exists |

Request example:

```Plain
https://iot-api.acceleronix.io/v2/quecauth/accessKeyAuthrize/accessKeyLogin?username=ver%3D1%26auth_mode%3DaccessKey%26sign_method%3Dsha256%26access_key%3D24b9zicjuns41H6MDg71AMnP%26timestamp%3D1743059249391&password=34fe86986230670cba424cadd01ded50f04929de3bfb0b0aef033ccee314fed1&grant_type=password
```

Response example:

```Plain
Success:
{  
    "msg": "OK",
    "access_token": "QJWT eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyOTQ5NCIsImlhdCI6MTYxODQ3Mjk2MiwianRpIjoiYjVhMmRhNjgtMzI0Ni00ZWRjLWEwZTktOTEyZjdjMDFkMmMzIiwidXR5IjoicGVyIiwiZXhwIjoxNjE4NTU5MzYyLCJhbSI6IkFjY2Vzc0tleSIsInNwIjoiIn0.JUQjUKlaDepazh7JssvRZKDiA1UL83VK8WECj86TI_I", 
    "code": 200, 
    "scope": "", 
    "token_type": "jwt", 
    "expires_in": 86400 
}
Failure:
{
    "msg": "AccessKey didn't exists",
    "code": 90047,
    "error": "AccessKey didn't exists"
}
```

Note: The Token is valid for 2 hours. It is recommended that the SaaS system exchanges for a new token every 1 hour through the refresh token interface to ensure long-term effectiveness.

2. Request OpenAPI. The following uses the interface for obtaining product published model data as an example.

Interface address:

| API Address    | https://iot-api.acceleronix.io/v2/quectsl/openapi/product/export/tslFile |
| -------------- | ------------------------------------------------------------ |
| Request Method | GET                                                          |
| Request Header | content-type: application/json<br>Authorization: [obtained token] |

Request parameters:

| **Parameter** | **Parameter Type** | **Required** | **Parameter Location** | **Parameter Description**        |
| ---------- | ------------ | ------------ | ------------ | ------------------- |
| productKey | String       | Yes          | Query        | Product key             |
| language   | String       | No           | Query        | Language: CN/EN (Default: CN) |

Response parameters:

| **Parameter** | **Parameter Description** | **Type**   | **schema**    |
| -------- | ------------ | ---------- | ------------- |
| code     | Return code       | object     |               |
| data     | Object         | jsonObject | Thing model tsl definition |
| msg      | Prompt message     | string     |               |
| pageNum  | Current page number     | object     |               |
| pageSize | Items per page     | object     |               |
| pages    | Total pages       | object     |               |
| total    | Total count         | object     |               |

Response status codes:

| **Status Code** | **Description**                                                     |
| ---------- | ------------------------------------------------------------ |
| 200        | OK                                                           |
| 401        | Unauthorized                                                 |
| 403        | Forbidden                                                    |
| 404        | Not Found                                                    |
| 50000      | service exception                                            |
| 50005      | param check error.                                           |
| 50006      | The productID or productKey is empty.                        |
| 50007      | The deviceID, productKey or deviceKey is empty.              |
| 70000      | Hub service unavailable                                      |
| 70017      | Product does not exist.                                      |
| 70063      | The device with transparent transmission mode does not support sending TSL model data. |
| 70089      | You have limited permission to operate this project or product or device. |

Request example:

```Plain
https://iot-api.acceleronix.io/v2/quectsl/openapi/product/export/tslFile?productKey=p11v14
```

Response example:

```json
{
        "code": 200,
        "msg": "OK",
        "data": {
                "profile": {
                        "tslVersion": "1.2.0",
                        "productKey": "p11v14",
                        "version": "20250324120550539"
                },
                "properties": [{
                        "specs": [{
                                        "dataType": "BOOL",
                                        "name": "On",
                                        "value": "true"
                                },
                                {
                                        "dataType": "BOOL",
                                        "name": "Off",
                                        "value": "false"
                                }
                        ],
                        "code": "switch",
                        "dataType": "BOOL",
                        "name": "Switch",
                        "subType": "RW",
                        "id": 1,
                        "sort": 1,
                        "type": "PROPERTY",
                        "desc": ""
                }]
        }
}
```

At this point, the process of calling OpenAPI interfaces in the SaaS application is complete. For more OpenAPIs, please check the [API List](APIList.md).