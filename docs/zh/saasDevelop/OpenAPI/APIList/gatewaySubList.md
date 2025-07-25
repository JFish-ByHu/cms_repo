# 查询网关下子设备


**接口地址**:`/v2/devicemgr/r1/openapi/product/gateway/subList`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`

**接口描述**:<p>查询网关设备关联的子设备</p>


**请求参数**:


| 参数名称   | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型       | schema |
| ---------- | ------------------------------------------------------------ | -------- | -------- | -------------- | ------ |
| deviceId   | 设备id,和productKey与deviceKey组合一一对应。如果传入deviceId,则无需传入productKey与deviceKey组合。如果您同时传入deviceId和productKey与deviceKey组合，则与deviceId为准 | query    | false    | integer(int64) |        |
| deviceKey  | 设备Key,如果传入deviceKey,则必须传入productKey。productKey与deviceKey组合和deviceId一一对应。如果传入productKey与deviceKey组合,则无需传入deviceId。如果您同时传入deviceId和productKey与deviceKey组合，则以deviceId为准 | query    | false    | string         |        |
| language   | 语言:CN/EN(默认:CN)                                          | query    | false    | string         |        |
| pageNum    | 分页码(默认:1)                                               | query    | false    | integer(int32) |        |
| pageSize   | 分页，每页大小(默认:10)                                      | query    | false    | integer(int32) |        |
| productKey | 产品productKey,如果传入productKey,则必须传入deviceKey。productKey与deviceKey组合和deviceId一一对应。如果传入productKey与deviceKey组合,则无需传入deviceId。如果您同时传入deviceId和productKey与deviceKey组合，则以deviceId为准 | query    | false    | string         |        |


**响应状态**:


| 状态码 | 说明                                                         | schema                              |
| ------ | ------------------------------------------------------------ | ----------------------------------- |
| 200    | OK                                                           | ActionResultOfListOfOpenApiDeviceDO |
| 401    | Unauthorized                                                 |                                     |
| 403    | Forbidden                                                    |                                     |
| 404    | Not Found                                                    |                                     |
| 50000  | service exception                                            |                                     |
| 50005  | param check error                                            |                                     |
| 50007  | The deviceID, productKey or deviceKey is empty.              |                                     |
| 70000  | Hub 服务不可用                                               |                                     |
| 70020  | Not a gateway product.                                       |                                     |
| 70089  | You have limited permission to operate this project or product or device. |                                     |
| 91001  | token not exists                                             |                                     |
| 91004  | token incorrect                                              |                                     |
| 91005  | doesn't have permission                                      |                                     |
| 91006  | user not exist ip white list reference.                      |                                     |
| 91007  | please open API permission.                                  |                                     |


**响应参数**:


| 参数名称                    | 参数说明                                                    | 类型              | schema          |
| --------------------------- | ----------------------------------------------------------- | ----------------- | --------------- |
| code                        | 返回码                                                      | object            |                 |
| data                        | 对象                                                        | array             | OpenApiDeviceDO |
| &emsp;&emsp;activedTime     | 激活时间                                                    | integer(int64)    |                 |
| &emsp;&emsp;authMode        | 认证方式，0-动态认证 1-静态认证，2-X509认证，默认0          | integer(int32)    |                 |
| &emsp;&emsp;createTime      | 创建时间                                                    | integer(int64)    |                 |
| &emsp;&emsp;deviceKey       | 设备key                                                     | string            |                 |
| &emsp;&emsp;deviceName      | 设备名称                                                    | string            |                 |
| &emsp;&emsp;deviceStatus    | 设备状态                                                    | integer(int32)    |                 |
| &emsp;&emsp;enabled         | 是否启用0启用，1禁用，默认启用                              | integer(int32)    |                 |
| &emsp;&emsp;fingerPrint     | 设备证书指纹                                                | string            |                 |
| &emsp;&emsp;firstConnTime   | 第一次连接时间                                              | string(date-time) |                 |
| &emsp;&emsp;gatewayType     | 授权网关权限 默认0 直连/网关不存在，1-仅代理上网 2-产品整合 | integer(int32)    |                 |
| &emsp;&emsp;id              | 设备id                                                      | integer(int64)    |                 |
| &emsp;&emsp;isActived       | 是否激活0-未激活 1-激活                                     | integer(int32)    |                 |
| &emsp;&emsp;isLiveness      | 是否活跃 0-不活跃 1-活跃                                    | integer(int32)    |                 |
| &emsp;&emsp;isVerified      | 是否允许二次认证 0-否 1-是                                  | integer(int32)    |                 |
| &emsp;&emsp;isVirtual       | 是否虚拟设备 0-真实 1虚拟                                   | integer(int32)    |                 |
| &emsp;&emsp;lastConnTime    | 最近在线时间                                                | string(date-time) |                 |
| &emsp;&emsp;lastOfflineTime | 最后一次下线时间                                            | string(date-time) |                 |
| &emsp;&emsp;locateType      | 设备定位类型                                                | string            |                 |
| &emsp;&emsp;moduleType      | 设备型号                                                    | string            |                 |
| &emsp;&emsp;moduleVersion   | 设备版本                                                    | string            |                 |
| &emsp;&emsp;oldDeviceName   |                                                             | string            |                 |
| &emsp;&emsp;productId       | 产品id                                                      | integer(int64)    |                 |
| &emsp;&emsp;productKey      | 产品key                                                     | string            |                 |
| &emsp;&emsp;productName     |                                                             | string            |                 |
| &emsp;&emsp;projectId       |                                                             | integer(int64)    |                 |
| &emsp;&emsp;protocol        | 默认值0,接入协议1:mqtt,2:lwm2m/coap,3:http                  | integer(int32)    |                 |
| &emsp;&emsp;updateTime      | 修改时间                                                    | integer(int64)    |                 |
| exp1                        |                                                             | string            |                 |
| msg                         | 提示信息                                                    | object            |                 |
| pageNum                     | 当前页数                                                    | object            |                 |
| pageSize                    | 每页数量                                                    | object            |                 |
| pages                       | 总页数                                                      | object            |                 |
| total                       | 总数                                                        | object            |                 |


**响应示例**:
```javascript
{
    "code":200,
        "msg":"",
        "total":1,
        "pageNum":1,
        "pageSize":10,
        "pages":1,
        "data":[
        {
            "id":266075,
            "deviceKey":"DK00001",
            "deviceName":"DeviceName01",
            "deviceStatus":1,
            "isActived":1,
            "isLiveness":null,
            "isVerified":1,
            "moduleVersion":null,
            "moduleType":null,
            "firstConnTime":1730871606221,
            "lastConnTime":1730871606221,
            "enabled":null,
            "productId":1192949132388584,
            "isVirtual":0,
            "protocol":null,
            "createTime":1730871606050,
            "updateTime":1730871606345,
            "productKey":"PK0001",
            "locateType":null,
            "sn":"SN00001",
            "activedTime":1730871606127,
            "lastOfflineTime":null,
            "isCurrent":1,
            "authMode":0,
            "fingerPrint":null,
            "oldDeviceName":null,
            "productName":"ProductName01",
            "projectId":222,
            "gatewayType":2
        }
    ]
}
```
