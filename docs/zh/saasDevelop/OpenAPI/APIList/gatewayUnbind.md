# 根据子设备PK、DK解除和网关关系


**接口地址**:`/v2/devicemgr/r1/openapi/product/gateway/unbind`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`

**接口描述**:<p>根据子设备pk dk解绑和网关的关联关系</p>


**请求参数**:


| 参数名称   | 参数说明       | 请求类型 | 是否必须 | 数据类型 | schema |
| ---------- | -------------- | -------- | -------- | -------- | ------ |
| deviceKey  | 设备deviceKey  | query    | true     | string   |        |
| productKey | 产品productKey | query    | true     | string   |        |


**响应状态**:


| 状态码 | 说明                                                         | schema               |
| ------ | ------------------------------------------------------------ | -------------------- |
| 200    | OK                                                           | ActionResultOfobject |
| 201    | Created                                                      |                      |
| 401    | Unauthorized                                                 |                      |
| 403    | Forbidden                                                    |                      |
| 404    | Not Found                                                    |                      |
| 50000  | service exception                                            |                      |
| 50005  | param check error                                            |                      |
| 50007  | The deviceID, productKey or deviceKey is empty.              |                      |
| 70000  | Hub 服务不可用                                               |                      |
| 70026  | The sub-device is not connected to the gateway device.       |                      |
| 70089  | You have limited permission to operate this project or product or device. |                      |
| 91001  | token not exists                                             |                      |
| 91004  | token incorrect                                              |                      |
| 91005  | doesn't have permission                                      |                      |


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
