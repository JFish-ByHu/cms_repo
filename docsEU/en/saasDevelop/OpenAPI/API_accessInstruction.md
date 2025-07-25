# OpenAPI Integration Guide

SaaS OpenAPIs are used for system integration, enabling product device management and remote control of devices through SaaS applications.

## Operation Step 

### Prerequisites

1. Before using OpenAPI services, you need to click "**Create a SaaS Application**" in "**SaaS Development**" -> "**SaaS Management**" menu.
2. Enable and authorize the API service packages you need to use on the "**SaaS Development**"-> "**Service**" page. You can only call the APIs under the service package after authorization.
3. Authorize product data that the SaaS application can access on the "**SaaS Development**"-> "**Product**" page. You can only query data under authorized products through the API after authorization.
4. Obtain AccessKey and AccessSecret, which will be used to exchange for an access Token later.

### **System Integration**

1. Get Access Token by Login Authentication API 

API Address:

| API Address    | https://iot-api.acceleronix.io/v2/quecauth/accessKeyAuthrize/accessKeyLogin |
| -------------- | ------------------------------------------------------------ |
| Request Method | GET                                                          |
| Request Header | content-type: application/json                               |

Request Parameter:

| **Parameter** | Type | Required | Location | Description                                      |
| ---------- | ------------ | ------------ | ------------ | ------------------------------------------------------------ |
| grant_type | String       | Y | Query        | Authorization type. Fixed value: password |
| username   | String       | Y        | Query        | ***username* Generation Rule：**<br>The username fields are formed in key=value format, with fields joined using "&" character. There is no specific order requirement for the fields. When transmitting, encode the username field with uriencode.**<br/>*username* format (Replace AccessKey with your SaaS application parameters and timestamp with current millisecond timestamp):**<br/>ver=1&auth_mode=accessKey&sign_method=sha256&access_key=\${AccessKey}&timestamp=\${timestamp}<br/>**Example:**<br/>ver=1&auth_mode=accessKey&sign_method=sha256&access_key=24b9zicjuns41H6MDg71AMnP&timestamp=1743059249391<br/>**After uriencode:**<br/>ver%3D1%26auth_mode%3DaccessKey%26sign_method%3Dsha256%26access_key%3D24b9zicjuns41H6MDg71AMnP%26timestamp%3D1743059249391 |
| password   | String       | Y        | Query        | ***password* Generation Rule:**<br/>sha256("\${username}${AccessSecret}")<br/>**Example:**<br/>sha256("ver=1&auth_mode=accessKey&sign_method=sha256&access_key=24b9zicjuns41H6MDg71AMnP&timestamp=17430592493916AE3p2SnA9ShP7ofigrccoeeks8DDoteJ1jUUTEz")<br/>**After sha256:**<br/>34fe86986230670cba424cadd01ded50f04929de3bfb0b0aef033ccee314fed1 |

Response Parameter:

| **Parameter** | **Description**                                              | **Type** | schema |
| ------------- | ------------------------------------------------------------ | -------- | ------ |
| code          | Response code <br>200 indicates success; others indicate error codes | object   |        |
| access_token  | Token returned after the successful execution                | string   |        |
| msg           | Prompt message                                               | string   |        |
| token_type    | Fixed as “jwt”                                               | string   |        |
| expire_in     | Expiration time                                              | string   |        |

Response Status Code:

| **Status Code** | **Description**         |
| --------------- | ----------------------- |
| 200             | OK                      |
| 401             | Unauthorized            |
| 403             | Forbidden               |
| 404             | Not Found               |
| 50000           | service exception       |
| 50005           | param check error       |
| 70000           | Hub service unavailable |
| 90047           | AccessKey didn't exist  |

Request Example:

```Plain
https://iot-api.acceleronix.io/v2/quecauth/accessKeyAuthrize/accessKeyLogin?username=ver%3D1%26auth_mode%3DaccessKey%26sign_method%3Dsha256%26access_key%3D24b9zicjuns41H6MDg71AMnP%26timestamp%3D1743059249391&password=a1b3c8d0f2e45a6b7890c1d23e4f5678901a2b3c4d5e6f7a8b9c0d1e2f3a4b5&grant_type=password
```

Response Example:

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

**Note:** The token is valid for 2 hours. It is recommended that the SaaS system obtains a new token every hour through refreshing token interfaces to ensure continuous validity.

2. Request OpenAPI, Using the Example of Getting Released TSL Model Data for a Product

API Address:

| API Address    | https://iot-api.acceleronix.io/v2/quectsl/openapi/product/export/tslFile |
| -------------- | ------------------------------------------------------------ |
| Request Method | GET                                                          |
| Request Header | content-type: application/json<br>Authorization: \<Obtained token> |

Request Parameter:

| Parameter  | Type   | Required | Location | Description                   |
| ---------- | ------ | -------- | -------- | ----------------------------- |
| productKey | String | Y        | Query    | Product key                   |
| language   | String | N        | Query    | Language (CN/EN, default: CN) |

Response Parameter:

| **Parameter** | **Description**     | **Type**   | **schema**     |
| ------------- | ------------------- | ---------- | -------------- |
| code          | Return code         | object     |                |
| data          | Object              | jsonObject | TSL definition |
| msg           | Promopt Message     | string     |                |
| pageNum       | Current page number | object     |                |
| pageSize      | Page size           | object     |                |
| pages         | Total pages         | object     |                |
| total         | Total               | object     |                |

Response Status Code:

| **Status Code** | **Description**                                              |
| --------------- | ------------------------------------------------------------ |
| 200             | OK                                                           |
| 401             | Unauthorized                                                 |
| 403             | Forbidden                                                    |
| 404             | Not Found                                                    |
| 50000           | service exception                                            |
| 50005           | param check error                                            |
| 50006           | The productID or ProductKey is empty.                        |
| 50007           | The deviceID, ProductKey or DeviceKey is empty.              |
| 70000           | Hub service unavailable                                      |
| 70017           | Product does not exist.                                      |
| 70063           | The device with transparent transmission mode does not support sending TSL model data. |
| 70089           | You have limited permission to operate this project or product or device. |

Request Example:

```Plain
https://iot-api.acceleronix.io/v2/quectsl/openapi/product/export/tslFile?productKey=p11v14
```

Response Example:

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

The process of calling OpenAPIs in the SaaS application is completed. For more OpenAPIs, please refer to the [OpenAPI List](APIList.md).

