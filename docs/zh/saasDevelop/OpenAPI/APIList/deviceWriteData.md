# 发送下行物模型属性数据


**接口地址**:`/v2/deviceshadow/r3/openapi/dm/writeData`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:
data数据格式为:
```json
"[{\"key1\":\"value\"},{\"key2\":\"value\"}]"
```
***示例:***

***属性***
- bool/int/float/double/enum/date/text
```json
"{\"key\":\"value\"}]"
```
- array (id为0)
```json
"[{\"key\":[{\"0\":\"value1\"},{\"0\":\"value2\"}]}]"
```
- struct
```json
"[{\"key\":[{\"key1\":\"value1\"},{\"key2\":\"value2\"}]}]"
```
- array 含有 struct (id为0)
```json
"[{\"key\":[{\"0\":[{\"key1\":\"value1\"}]},{\"0\":[{\"key2\":\"value2\"}]}]}]"
```
***服务调用***
- bool/int/float/double/enum/date/text
```json
"[{\"key\":[{\"key1\":\"value1\"},{\"key2\":\"value2\"},{\"key3\":\"value3\"}]}]"
```
- array (id为0)
```json
"[{\"key\":[{\"key1\":[{\"0\":\"value1\"},{\"0\":\"value1\"}]}]}]"
```
- struct
```json
"[{\"key\":[{\"key1\":[{\"key2\":\"value2\"},{\"key3\":\"value3\"}]}]}]"
```
- array，且 array 含有 struct (id为0)
```json
"[{\"key\":[{\"key1\":[{\"0\":[{\"key2\":\"value2\"}]},{\"0\":[{\"key3\":\"value3\"}]}]}]}]"
```



**请求示例**:


```javascript
{
    "isCache": true,
        "data": "[{\"arr\":[{\"0\":[{\"buer\":\"true\"}]}]}]",
        "qos": 1,
        "devices": [
        "DK00001"
    ],
        "productKey": "PK0001",
        "isCover": true,
        "cacheTime": 360
}
```


**请求参数**:


| 参数名称               | 参数说明                                           | 请求类型 | 是否必须 | 数据类型              | schema                |
| ---------------------- | -------------------------------------------------- | -------- | -------- | --------------------- | --------------------- |
| readDataDTOR3          | readDataDTOR3                                      | body     | true     | OpenApiSendTslDataDTO | OpenApiSendTslDataDTO |
| &emsp;&emsp;cacheTime  | 缓存时间,单位s。当isCache为true时生效，默认值600。 |          | false    | integer(int64)        |                       |
| &emsp;&emsp;data       | 发送下行数据的具体内容                             |          | true     | string                |                       |
| &emsp;&emsp;devices    | 设备列表                                           |          | true     | array                 | string                |
| &emsp;&emsp;extendPara |                                                    |          | false    | object                |                       |
| &emsp;&emsp;isCache    | 是否启用缓存,不传默认为false                       |          | false    | boolean               |                       |
| &emsp;&emsp;isCover    | 是否覆盖前面发送的数据,不传默认为false             |          | false    | boolean               |                       |
| &emsp;&emsp;productKey | 产品productKey                                     |          | true     | string                |                       |
| &emsp;&emsp;qos        | qos等级设置（不传默认为1）                         |          | false    | integer(int32)        |                       |
| language               | 语言:CN/EN(默认:CN)                                | query    | false    | string                |                       |


**响应状态**:


| 状态码 | 说明                                                         | schema       |
| ------ | ------------------------------------------------------------ | ------------ |
| 200    | OK                                                           | ActionResult |
| 201    | Created                                                      |              |
| 401    | Unauthorized                                                 |              |
| 403    | Forbidden                                                    |              |
| 404    | Not Found                                                    |              |
| 50000  | service exception                                            |              |
| 50005  | param check error                                            |              |
| 50007  | The deviceID, productKey or deviceKey is empty.              |              |
| 61001  | PROTOCOL_NOT_SUPPORT                                         |              |
| 61002  | device offline                                               |              |
| 61005  | Unauthorized device.                                         |              |
| 61006  | device message upper limit                                   |              |
| 61007  | device message frequency is limited                          |              |
| 70000  | Hub 服务不可用                                               |              |
| 70026  | The sub-device is not connected to the gateway device.       |              |
| 70051  | Failed data sending.                                         |              |
| 70083  | Product category and parameter type are unmatched.           |              |
| 70089  | You have limited permission to operate this project or product or device. |              |
| 70090  | The number is out of range or step size.                     |              |
| 70091  | The value is not a member of the enumeration.                |              |
| 70092  | The text is too long.                                        |              |
| 70093  | Incorrect time stamp character.                              |              |
| 70094  | The TSL model is unable to analysis and identify data.       |              |
| 70095  | Failed to call cloudBridgeService.                           |              |
| 70096  | Failed to issue command from DMP to AEP.                     |              |
| 71008  | TSL data format verification error.                          |              |
| 71027  | TSL model downlink data format is not JSON.                  |              |
| 71028  | TSL model downlink data format verification error.           |              |
| 71029  | Illegal downlink data setting for TSL model.                 |              |
| 71035  | Parameter verification error.                                |              |
| 71036  | TSL model data verification error.                           |              |
| 71038  | Failed communication. Read-only attributes can't send commands. |              |
| 71039  | The length of message array has exceeded the defined size.   |              |
| 71047  | Downstream Tsl data format check error.                      |              |
| 71048  | The fetch instruction cannot only contain write-only data.   |              |
| 80005  | OpenAPI does not support setting AEP products.               |              |
| 91001  | token not exists                                             |              |
| 91004  | token incorrect                                              |              |
| 91005  | doesn't have permission                                      |              |
| 91006  | user not exist ip white list reference.                      |              |
| 91007  | please open API permission.                                  |              |


**响应参数**:


| 参数名称 | 参数说明 | 类型   | schema |
| -------- | -------- | ------ | ------ |
| code     | 返回码   | object |        |
| data     | 对象     | object |        |
| exp1     |          | string |        |
| msg      | 提示信息 | object |        |
| pageNum  | 当前页数 | object |        |
| pageSize | 每页数量 | object |        |
| pages    | 总页数   | object |        |
| total    | 总数     | object |        |


**响应示例**:
```javascript
{
    "code":200,
        "msg":"",
        "data":[
        {
            "code":200,
            "productKey":"PK0001",
            "deviceKey":"DK00001",
            "ticket":"1335004867605954560",
            "message":null
        }
    ]
}
```
