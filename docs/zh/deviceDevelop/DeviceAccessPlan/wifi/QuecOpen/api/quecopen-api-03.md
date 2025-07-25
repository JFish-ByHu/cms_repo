# 设备连接 相关接口

## **API 列表**

|                  函数                   |       说明       |
| :-------------------------------------: | :--------------: |
|      [Qth_devInit()](#Qth_devInit)      |  QthSDK 初始化   |
|     [Qth_devStart()](#Qth_devStart)     | 开始连接 IoT平台 |
|     [Qth_devReset()](#Qth_devReset)     |     设备重置     |
|    [Qth_devRemove()](#Qth_devRemove)    |     设备移除     |
| [Qth_devGetStatus()](#Qth_devGetStatus) |   获取设备状态   |

## **API 详情**

<span id="Qth_devInit"></span>

## <span style="color:#A52A2A">**Qth_devInit**</span>

QthSDK 初始化，会自动调用各个业务组件初始化函数，在使用 QthSDK API 前必须先进行初始化。

**函数原型**

```c
oprt_ret Qth_devInit();
```

**参数说明**

- **输入参数**

  - 无。

- **输出参数**

  - 无。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
oprt_ret ret = OPRT_OK;

ret = Qth_devInit();
if (OPRT_OK != ret)
{
    Quos_logPrintf(APPS_OPEN, LL_ERR, "sdk init error");
}
```

---

<span id="Qth_devStart"></span>

## <span style="color:#A52A2A">**Qth_devStart**</span>

发起 IoT平台连接，应在发起连接前进行相关配置(如产品信息配置等)。发起连接后，如果有 wifi 配网信息，则自动连接路由器并连接 IoT平台；如果没有 wifi 配网信息，则进入配网状态。

**函数原型**

```c
oprt_ret Qth_devStart();
```

**参数说明**

- **输入参数**

  - 无。

- **输出参数**

  - 无。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
oprt_ret ret = OPRT_OK;

Qth_devInit();
/* 配置服务器、产品等信息... */
ret = Qth_devStart();
if (OPRT_OK != ret)
{
    Quos_logPrintf(APPS_OPEN, LL_ERR, "sdk start error");
}
```

---

<span id="Qth_devReset"></span>

## <span style="color:#A52A2A">**Qth_devReset**</span>

设备重置，调用该 API 后将清除 WIFI 信息，设备将重启，然后进入配网状态；在重新连上 IoT平台后将导致用户绑定信息和设备密钥被重置。

**函数原型**

```c
oprt_ret Qth_devReset();
```

**参数说明**

- **输入参数**

  - 无。

- **输出参数**

  - 无。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
oprt_ret ret = OPRT_OK;

ret = Qth_devReset();
if (OPRT_OK != ret)
{
    Quos_logPrintf(APPS_OPEN, LL_ERR, "dev reset error");
}
```

---

<span id="Qth_devRemove"></span>

## <span style="color:#A52A2A">**Qth_devRemove**</span>

设备移除，调用该 API 后将清除 WIFI 信息，自动进入配网状态。

**函数原型**

```c
oprt_ret Qth_devRemove();
```

**参数说明**

- **输入参数**

  - 无。

- **输出参数**

  - 无。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
oprt_ret ret = OPRT_OK;

ret = Qth_devRemove();
if (OPRT_OK != ret)
{
    Quos_logPrintf(APPS_OPEN, LL_ERR, "dev remove error");
}
```

---

<span id="Qth_devGetStatus"></span>

## <span style="color:#A52A2A">**Qth_devGetStatus**</span>

获取设备状态。

**函数原型**

```c
oprt_ret Qth_devGetStatus(Qth_devStatus_e *status);
```

**参数说明**

- **输入参数**

  - 无。

- **输出参数**

  - **Qth_devStatus_e** **`status`**：设备状态。
    - 具体取值见下表：
      | 取值                           | 描述                     |
      | ------------------------------ | ------------------------ |
      | QTH_DEV_STATUS_SLIENT          | 静默状态，不开启蓝牙广播 |
      | QTH_DEV_STATUS_NETCFG          | 配网状态，开启蓝牙广播   |
      | QTH_DEV_STATUS_NETCFGED        | 已配网状态               |
      | QTH_DEV_STATUS_CONNECTED_ROUTE | 已连上路由器状态         |
      | QTH_DEV_STATUS_CONNECTED_DMP   | 已连上 IoT平台状态       |

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
oprt_ret ret = OPRT_OK;
Qth_devStatus_e status;

ret = Qth_devGetStatus(&status);
if (OPRT_OK != ret)
{
    Quos_logPrintf(APPS_OPEN, LL_ERR, "get dev connect status error");
}
```

---

<span id="ERROR_CODE"> </span>

## **错误码列表**

| 枚举值                           | 十六进制 | 十进制 | 描述                                         |
| -------------------------------- | -------- | ------ | -------------------------------------------- |
| OPRT_OK                          | -0x0000  | -0     | 执行成功                                     |
| OPRT_COM_ERROR                   | -0x0001  | -1     | 通用错误                                     |
| OPRT_INVALID_PARM                | -0x0002  | -2     | 无效的入参                                   |
| OPRT_MALLOC_FAILED               | -0x0003  | -3     | 内存分配失败                                 |
| OPRT_NOT_SUPPORTED               | -0x0004  | -4     | 不支持                                       |
| OPRT_NOT_FOUND                   | -0x0005  | -5     | 没有找到对象                                 |
| OPRT_INDEX_OUT_OF_BOUND          | -0x0006  | -6     | 索引越界                                     |
| OPRT_EXCEED_UPPER_LIMIT          | -0x0007  | -7     | 超过上限                                     |
| OPRT_NOT_EXIST                   | -0x0008  | -8     | 不存在                                       |
| OPRT_QTH_DMP_SERVER_ERROR        | -0x1700  | -5888  | 调用其他微服务接口网络错误                   |
| OPRT_QTH_DMP_SEND_NOT_ALLOW      | -0x1701  | -5889  | 设备消息被限制                               |
| OPRT_QTH_DMP_AUTH_NOT_ALLOW      | -0x1702  | -5890  | 设备不能激活                                 |
| OPRT_QTH_DMP_AUTH_ALREADY        | -0x1703  | -5891  | 设备已认证                                   |
| OPRT_QTH_DMP_PK_NOT_FOUND        | -0x1704  | -5892  | 通过 PK 没有查到产品信息                     |
| OPRT_QTH_DMP_PAYLOAD_INVALID     | -0x1705  | -5893  | 密码解析错误                                 |
| OPRT_QTH_DMP_SIGN_ERROR          | -0x1706  | -5894  | Sign 错误                                    |
| OPRT_QTH_DMP_RAND_ILLEGAL        | -0x1707  | -5895  | Rand 不符合规则                              |
| OPRT_QTH_DMP_MISMATCH            | -0x1708  | -5896  | 参数传入的 DK,PK 与数据库存储的 DK,PK 不一致 |
| OPRT_QTH_DMP_DK_ILLEGAL          | -0x1709  | -5897  | DK 不符合规则                                |
| OPRT_QTH_DMP_FLAG_ILLEGAL        | -0x170a  | -5898  | Flag 不符合规则                              |
| OPRT_QTH_DMP_CLIENTID_ERROR      | -0x170b  | -5899  | ClientId 规则和 Password 不匹配              |
| OPRT_QTH_DMP_DS_ERROR            | -0x170c  | -5900  | 设备的 DS 错误                               |
| OPRT_QTH_DMP_DK_NOT_FOUND        | -0x170d  | -5901  | 没查到设备信息                               |
| OPRT_QTH_DMP_SUB_RELATED         | -0x170e  | -5902  | 网关与子设备没有关联关系                     |
| OPRT_QTH_DMP_SUB_CONNECT_ALREADY | -0x170f  | -5903  | 子设备重复登录                               |
| OPRT_QTH_DMP_DEV_OFFLINE         | -0x1710  | -5904  | 设备不在线                                   |
| OPRT_QTH_DMP_UNKNOWN_ERROR       | -0x1711  | -5905  | 未知错误                                     |
| OPRT_QTH_DEV_GET_CONFIG_FAILED   | -0x1100  | -4352  | 获取配置失败                                 |
| OPRT_QTH_DEV_NOT_AUTH            | -0x1101  | -4353  | 设备未认证                                   |
| OPRT_QTH_DEV_CONN_FAILED         | -0x1102  | -4354  | 设备连接失败                                 |
| OPRT_QTH_DEV_RESET_FAILED        | -0x1103  | -4355  | 设备重置失败                                 |
| OPRT_QTH_DEV_REMOVE_FAILED       | -0x1104  | -4356  | 设备移除失败                                 |
| OPRT_QTH_DEV_ALREADY_CONNECTED   | -0x1105  | -4357  | 设备已连接                                   |
| OPRT_QTH_DEV_RESET_ABNORMAL      | -0x1106  | -4358  | 设备重置异常(一机一密设备收到了新的设备密钥) |
