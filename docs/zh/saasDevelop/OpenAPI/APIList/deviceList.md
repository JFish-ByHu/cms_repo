# 查询产品下设备列表


**接口地址**:`/v2/devicemgr/r3/openapi/product/device/overview`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>设备列表查询</p>


**请求参数**:


| 参数名称     | 参数说明                  | 请求类型 | 是否必须 | 数据类型       | schema |
| ------------ | ------------------------- | -------- | -------- | -------------- | ------ |
| productKey   | productKey                | query    | true     | string         |        |
| activeStatus | 激活状态 1已激活，0未激活 | query    | false    | integer(int32) |        |
| deviceKey    | 设备DK                    | query    | false    | string         |        |
| deviceStatus | 设备状态 1在线，0离线     | query    | false    | integer(int32) |        |
| pageNum      | 分页码(默认:1)            | query    | false    | integer(int32) |        |
| pageSize     | 分页，每页大小(默认:10)   | query    | false    | integer(int32) |        |


**响应状态**:


| 状态码 | 说明                                                         | schema                       |
| ------ | ------------------------------------------------------------ | ---------------------------- |
| 200    | OK                                                           | ActionResultOfListOf设备详情 |
| 401    | Unauthorized                                                 |                              |
| 403    | Forbidden                                                    |                              |
| 404    | Not Found                                                    |                              |
| 50000  | service exception                                            |                              |
| 50005  | param check error                                            |                              |
| 70000  | Hub 服务不可用                                               |                              |
| 70089  | You have limited permission to operate this project or product or device. |                              |
| 70130  | Non existent device.                                         |                              |
| 91001  | token not exists                                             |                              |
| 91004  | token incorrect                                              |                              |
| 91005  | doesn't have permission                                      |                              |
| 91006  | user not exist ip white list reference.                      |                              |
| 91007  | please open API permission.                                  |                              |


**响应参数**:


| 参数名称                    | 参数说明                                      | 类型           | schema   |
| --------------------------- | --------------------------------------------- | -------------- | -------- |
| code                        | 返回码                                        | object         |          |
| data                        | 对象                                          | array          | 设备详情 |
| &emsp;&emsp;activedTime     | 设备激活时间                                  | integer(int64) |          |
| &emsp;&emsp;authMode        | 认证方式，0-动态认证 1-静态认证 2-X509，默认0 | integer(int32) |          |
| &emsp;&emsp;createTime      | 创建时间                                      | integer(int64) |          |
| &emsp;&emsp;dataFmt         | 数据格式：0 透传 ，3物模型                    | integer(int32) |          |
| &emsp;&emsp;deviceKey       | 设备DK                                        | string         |          |
| &emsp;&emsp;deviceName      | 设备名称                                      | string         |          |
| &emsp;&emsp;deviceStatus    | 设备状态 1在线，0离线                         | integer(int32) |          |
| &emsp;&emsp;firstConnTime   | 首次连接时间                                  | integer(int64) |          |
| &emsp;&emsp;isActived       | 是否激活 0-未激活 1-激活                      | integer(int32) |          |
| &emsp;&emsp;isVerified      | 二次认证 0-未认证 1-已认证                    | integer(int32) |          |
| &emsp;&emsp;isVirtual       | 是否虚拟设备 0-真实 1虚拟                     | integer(int32) |          |
| &emsp;&emsp;lastConnTime    | 最后一次上线时间                              | integer(int64) |          |
| &emsp;&emsp;lastOfflineTime | 最后一次离线时间                              | integer(int64) |          |
| &emsp;&emsp;productKey      | 产品PK                                        | string         |          |
| &emsp;&emsp;sn              | 设备SN                                        | string         |          |
| &emsp;&emsp;updateTime      | 更新时间                                      | integer(int64) |          |
| exp1                        |                                               | string         |          |
| msg                         | 提示信息                                      | object         |          |
| pageNum                     | 当前页数                                      | object         |          |
| pageSize                    | 每页数量                                      | object         |          |
| pages                       | 总页数                                        | object         |          |
| total                       | 总数                                          | object         |          |


**响应示例**:
```javascript
{
	"code": 200,
	"data": [
		{
            "activedTime": 1748944587349,
            "authMode": 0,
            "createTime": 1744179122906,
            "dataFmt": 3,
            "deviceKey": "DK00001",
            "deviceName": "DdevicName01",
            "deviceStatus": 1,
            "firstConnTime": 1744179201775,
            "isActived": 1,
            "isVerified": 1,
            "isVirtual": 0,
            "lastConnTime": 1748922175239,
            "lastOfflineTime": 1747316156218,
            "productKey": "PK0001",
            "sn": "SN00001",
            "updateTime": 1748944587349
		},
        {
            "activedTime": 1748944587349,
            "authMode": 0,
            "createTime": 1744179122906,
            "dataFmt": 3,
            "deviceKey": "DK00002",
            "deviceName": "DdevicName02",
            "deviceStatus": 1,
            "firstConnTime": 1744179201775,
            "isActived": 1,
            "isVerified": 1,
            "isVirtual": 0,
            "lastConnTime": 1748922175239,
            "lastOfflineTime": 1747316156218,
            "productKey": "PK0002",
            "sn": "SN00002",
            "updateTime": 1748944587349
        }
	],
	"msg": "",
	"pageNum": 1,
	"pageSize": 10,
	"pages": 1,
	"total": 2
}
```
