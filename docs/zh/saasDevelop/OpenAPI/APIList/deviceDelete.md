# 删除设备


**接口地址**:`/v2/devicemgr/r3/openapi/device/delete`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "deviceKey": "DK00001",
  "productKey": "PK0001"
}
```


**请求参数**:


| 参数名称               | 参数说明          | 请求类型 | 是否必须 | 数据类型     | schema       |
| ---------------------- | ----------------- | -------- | -------- | ------------ | ------------ |
| deviceDeleteR3Dto      | deviceDeleteR3Dto | body     | true     | 删除设备入参 | 删除设备入参 |
| &emsp;&emsp;deviceKey  | 设备DK            |          | true     | string       |              |
| &emsp;&emsp;productKey | 产品PK            |          | true     | string       |              |


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
