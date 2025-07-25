# 查询设备资源

**接口地址**:`/v2/deviceshadow/r2/openapi/device/resource`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>设备资源</p>


**请求参数**:


| 参数名称   | 参数说明            | 请求类型 | 是否必须 | 数据类型 | schema |
| ---------- | ------------------- | -------- | -------- | -------- | ------ |
| deviceKey  | 设备key             | query    | true     | string   |        |
| productKey | 产品key             | query    | true     | string   |        |
| language   | 语言:CN/EN(默认:CN) | query    | false    | string   |        |


**响应状态**:


| 状态码 | 说明                                                         | schema                       |
| ------ | ------------------------------------------------------------ | ---------------------------- |
| 200    | OK                                                           | ActionResultOfQdDeviceStatus |
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


| 参数名称                        | 参数说明            | 类型              | schema         |
| ------------------------------- | ------------------- | ----------------- | -------------- |
| code                            | 返回码              | object            |                |
| data                            | 对象                | QdDeviceStatus    | QdDeviceStatus |
| &emsp;&emsp;battery             | 电量                | number(double)    |                |
| &emsp;&emsp;capabilitiesBitmask | 设备联网方式        | integer(int32)    |                |
| &emsp;&emsp;cellId              | 基站id              | integer(int64)    |                |
| &emsp;&emsp;comProtocolVer      | 通信协议版本        | string            |                |
| &emsp;&emsp;createTime          | 创建时间            | string(date-time) |                |
| &emsp;&emsp;dataProtocolVer     | 数据协议版本        | string            |                |
| &emsp;&emsp;deviceId            | 设备标识            | string            |                |
| &emsp;&emsp;deviceKey           | dk                  | string            |                |
| &emsp;&emsp;iccId               | ICCID号             | string            |                |
| &emsp;&emsp;id                  | id                  | integer(int64)    |                |
| &emsp;&emsp;lac                 | 位置区代码          | integer(int64)    |                |
| &emsp;&emsp;locator             | 定位功能支持        | string            |                |
| &emsp;&emsp;logEnable           | 日志上报时长开关    | integer(int32)    |                |
| &emsp;&emsp;logLevel            | 日志级别            | string            |                |
| &emsp;&emsp;mcc                 | 移动国家代码        | integer(int64)    |                |
| &emsp;&emsp;mcuVersion          | mcu版本             | string            |                |
| &emsp;&emsp;memoryFree          | 剩余空间            | integer(int64)    |                |
| &emsp;&emsp;mnc                 | 移动网络代码        | integer(int64)    |                |
| &emsp;&emsp;phoneNum            | phone号             | string            |                |
| &emsp;&emsp;productKey          | pk                  | string            |                |
| &emsp;&emsp;rsrp                | 参考信号接收功率    | integer(int64)    |                |
| &emsp;&emsp;rsrq                | LTE参考信号接收质量 | integer(int64)    |                |
| &emsp;&emsp;sdkVer              | sdk版本号           | string            |                |
| &emsp;&emsp;signalStrength      | 信号强度            | integer(int64)    |                |
| &emsp;&emsp;simNum              | SIM号               | string            |                |
| &emsp;&emsp;sn                  | 设备sn              | string            |                |
| &emsp;&emsp;snr                 | 信号与干扰加噪声比  | integer(int64)    |                |
| &emsp;&emsp;type                | 模组型号            | string            |                |
| &emsp;&emsp;updateTime          | 修改时间            | string(date-time) |                |
| &emsp;&emsp;version             | 固件版本            | string            |                |
| &emsp;&emsp;voltage             | 电压                | number(double)    |                |
| exp1                            |                     | string            |                |
| msg                             | 提示信息            | object            |                |
| pageNum                         | 当前页数            | object            |                |
| pageSize                        | 每页数量            | object            |                |
| pages                           | 总页数              | object            |                |
| total                           | 总数                | object            |                |


**响应示例**:
```javascript
{
    "code":200,
        "msg":"",
        "data":{
            "id":null,
            "deviceKey":"DK00001",
            "productKey":"PK0001",
            "battery":null,
            "voltage":null,
            "signalStrength":null,
            "memoryFree":null,
            "rsrp":null,
            "rsrq":null,
            "snr":null,
            "type":null,
            "cellId":null,
            "iccId":null,
            "mcc":null,
            "mnc":null,
            "lac":null,
            "phoneNum":null,
            "simNum":null,
            "locator":"NONE;LBS;WIFI;AUTO;GGA;RMC;GSV;GSA;VTG;GPGGA;GPRMC;GPGSV;GPGSA;GPVTG;",
            "comProtocolVer":null,
            "dataProtocolVer":"1.3.0",
            "createTime":1693927443000,
            "updateTime":1730900414000,
            "sdkVer":null,
            "version":null,
            "mcuVersion":null,
            "deviceId":null,
            "capabilitiesBitmask":1,
            "sn":null,
            "logEnable":null,
            "logLevel":null
    }
}
```
