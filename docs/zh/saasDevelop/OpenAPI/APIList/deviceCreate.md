# 添加设备（单个）


**接口地址**:`/v2/devicemgr/r3/openapi/device/create`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "authMode": 0,
  "deviceKey": "DK00001",
  "deviceName": "DeviceName1",
  "fingerPrint": "d30075fefc2c86d1f9ae5a2960750485076d7213",
  "productKey": "PK0001",
  "psk": "",
  "sn": "SN00001"
}
```


**请求参数**:


| 参数名称                | 参数说明                                      | 请求类型 | 是否必须 | 数据类型       | schema       |
| ----------------------- | --------------------------------------------- | -------- | -------- | -------------- | ------------ |
| deviceCreateSingleR3Dto | deviceCreateSingleR3Dto                       | body     | true     | 新增设备入参   | 新增设备入参 |
| &emsp;&emsp;authMode    | 认证方式，0-动态认证 1-静态认证 2-X509，默认0 |          | false    | integer(int32) |              |
| &emsp;&emsp;deviceKey   | 设备DK                                        |          | true     | string         |              |
| &emsp;&emsp;deviceName  | 设备名称                                      |          | false    | string         |              |
| &emsp;&emsp;fingerPrint | 设备指纹 X509设备新增时需要该字段             |          | false    | string         |              |
| &emsp;&emsp;productKey  | 产品PK                                        |          | true     | string         |              |
| &emsp;&emsp;psk         | psk 电信AEP设备新增时需要该字段               |          | false    | string         |              |
| &emsp;&emsp;sn          | 设备SN                                        |          | false    | string         |              |


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
