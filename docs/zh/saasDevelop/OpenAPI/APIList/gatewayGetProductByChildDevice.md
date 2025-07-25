# 根据子设备查询当前所属网关


**接口地址**:`/v2/devicemgr/r1/openapi/product/gateway/getGatewayProductByChildDevice`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`

**接口描述**:<p>根据子设备查询所属网关的信息（只返回当前连接的网关信息）</p>


**请求参数**:


| 参数名称   | 参数说明               | 请求类型 | 是否必须 | 数据类型 | schema |
| ---------- | ---------------------- | -------- | -------- | -------- | ------ |
| deviceKey  | 设备deviceKey（必传）  | query    | true     | string   |        |
| productKey | 产品productKey（必传） | query    | true     | string   |        |
| language   | 语言:CN/EN(默认:CN)    | query    | false    | string   |        |


**响应状态**:


| 状态码 | 说明                                                         | schema                                  |
| ------ | ------------------------------------------------------------ | --------------------------------------- |
| 200    | OK                                                           | ActionResultOfOpenApiGatewayProductInfo |
| 401    | Unauthorized                                                 |                                         |
| 403    | Forbidden                                                    |                                         |
| 404    | Not Found                                                    |                                         |
| 50000  | service exception                                            |                                         |
| 50005  | param check error                                            |                                         |
| 50007  | The deviceID, productKey or deviceKey is empty.              |                                         |
| 70000  | Hub 服务不可用                                               |                                         |
| 70026  | The sub-device is not connected to the gateway device.       |                                         |
| 70027  | Not a product of product integration.                        |                                         |
| 70028  | There is no associated gateway device.                       |                                         |
| 70029  | Not a sub-gateway product.                                   |                                         |
| 70089  | You have limited permission to operate this project or product or device. |                                         |
| 91001  | token not exists                                             |                                         |
| 91004  | token incorrect                                              |                                         |
| 91005  | doesn't have permission                                      |                                         |
| 91006  | user not exist ip white list reference.                      |                                         |
| 91007  | please open API permission.                                  |                                         |


**响应参数**:


| 参数名称                | 参数说明         | 类型                      | schema                    |
| ----------------------- | ---------------- | ------------------------- | ------------------------- |
| code                    | 返回码           | object                    |                           |
| data                    | 对象             | OpenApiGatewayProductInfo | OpenApiGatewayProductInfo |
| &emsp;&emsp;deviceKey   | 关联网关设备dk   | string                    |                           |
| &emsp;&emsp;deviceName  | 关联网关设备名称 | string                    |                           |
| &emsp;&emsp;productKey  | 关联网关产品pk   | string                    |                           |
| &emsp;&emsp;productName | 关联网关设备名称 | string                    |                           |
| exp1                    |                  | string                    |                           |
| msg                     | 提示信息         | object                    |                           |
| pageNum                 | 当前页数         | object                    |                           |
| pageSize                | 每页数量         | object                    |                           |
| pages                   | 总页数           | object                    |                           |
| total                   | 总数             | object                    |                           |


**响应示例**:
```javascript
{
        "code": 200,
        "msg": "",
        "data": {
            "productKey": "PK0001",
            "productName": "ProductName01",
            "deviceKey": "DK00001",
            "deviceName": "DeviceName01"
        }
}
```
