# 修改设备信息（单个）


**接口地址**:`/v2/devicemgr/r3/openapi/device/update`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "deviceKey": "DK00001",
  "deviceName": "DeviceName01",
  "productKey": "PK0001",
  "sn": "SN00001"
}
```


**请求参数**:


| 参数名称                | 参数说明                | 请求类型 | 是否必须 | 数据类型       | schema         |
| ----------------------- | ----------------------- | -------- | -------- | -------------- | -------------- |
| deviceUpdateSingleR3Dto | deviceUpdateSingleR3Dto | body     | true     | R3修改设备入参 | R3修改设备入参 |
| &emsp;&emsp;deviceKey   | 设备DK                  |          | true     | string         |                |
| &emsp;&emsp;deviceName  | 设备名称                |          | false    | string         |                |
| &emsp;&emsp;productKey  | 产品PK                  |          | true     | string         |                |
| &emsp;&emsp;sn          | 设备SN                  |          | false    | string         |                |


**响应状态**:


| 状态码 | 说明         | schema               |
| ------ | ------------ | -------------------- |
| 200    | OK           | ActionResultOfobject |
| 201    | Created      |                      |
| 401    | Unauthorized |                      |
| 403    | Forbidden    |                      |
| 404    | Not Found    |                      |


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
	"code": 200,
	"msg": ""
}
```
