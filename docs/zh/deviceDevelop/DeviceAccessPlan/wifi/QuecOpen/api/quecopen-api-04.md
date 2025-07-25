# 网络配置 相关接口

## **API 列表**

|                      函数                       |        说明        |
| :---------------------------------------------: | :----------------: |
|   [Qth_wifiOpenNetcfg()](#Qth_wifiOpenNetcfg)   |   开启 WiFi 配网   |
|  [Qth_wifiCloseNetcfg()](#Qth_wifiCloseNetcfg)  |   关闭 WiFi 配网   |
| [Qth_wifiGetCfgStatus()](#Qth_wifiGetCfgStatus) | 获取 WiFi 配置状态 |

<span style='color:#999AAA'>提示：配置 wifi 信息请参考[产品配置 相关接口](/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-02)。</span>

## **API 详情**

<span id="Qth_wifiOpenNetcfg"></span>

## <span style="color:#A52A2A">**Qth_wifiOpenNetcfg**</span>

开启 WiFi 配网。

**函数原型**

```c
oprt_ret Qth_wifiOpenNetcfg(Qth_wifiConfigMode_e mode);
```

**参数说明**

- **输入参数**

  - **Qth_wifiConfigMode** **`mode`**：配网模式，具体取值如下。
    | 取值                       | 描述                                                       |
    | -------------------------- | ---------------------------------------------------------- |
    | QTH_WIFI_CFGMODE_SLIENT    | 静默模式(配网失败后进入静默)                               |
    | QTH_WIFI_CFGMODE_BACKROUTE | 回连模式(配网失败后重新连接之前的路由器，若没有则进入静默) |

- **输出参数**

  - 无。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
oprt_ret ret = OPRT_OK;
ret = Qth_wifiOpenNetcfg(QTH_WIFI_CFGMODE_SLIENT);
if (OPRT_OK != ret)
{
    Quos_logPrintf(APPS_OPEN, LL_ERR, "open wifi netcfg error");
}
```

---

<span id="Qth_wifiCloseNetcfg"></span>

## <span style="color:#A52A2A">**Qth_wifiCloseNetcfg**</span>

关闭 WiFi 配网。

**函数原型**

```c
oprt_ret Qth_wifiCloseNetcfg(void);
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
Qth_wifiOpenNetcfg();
Qhal_system_sleepMs(10000);
ret = Qth_wifiCloseNetcfg();
if (OPRT_OK != ret)
{
    Quos_logPrintf(APPS_OPEN, LL_ERR, "close wifi netcfg error");
}
```

---

<span id="Qth_wifiGetCfgStatus"></span>

## <span style="color:#A52A2A">**Qth_wifiGetCfgStatus**</span>

获取 WiFi 配置状态。

**函数原型**

```c
Qth_wifiConfigStatus_e Qth_wifiGetCfgStatus(void);
```

**参数说明**

- **输入参数**

  - 无。

- **输出参数**

  - 无。

- **返回值**
  | 取值                           | 描述        |
  | ------------------------------ | ----------- |
  | QTH_WIFI_CFGSTA_NOT_CONFIG     | WiFi 未配置 |
  | QTH_WIFI_CFGSTA_CONFIGING      | WiFi 配置中 |
  | QTH_WIFI_CFGSTA_ALREADY_CONFIG | WiFi 已配置 |

**调用示例**

```c
Qth_wifiConfigStatus_e status;
status = Qth_wifiGetCfgStatus();
Quos_logPrintf(APPS_OPEN, LL_DBG, "status:%d", status);
```

---

<span id="ERROR_CODE"> </span>

## **错误码列表**

| 枚举值                            | 十六进制 | 十进制 | 描述               |
| --------------------------------- | -------- | ------ | ------------------ |
| OPRT_OK                           | -0x0000  | -0     | 执行成功           |
| OPRT_COM_ERROR                    | -0x0001  | -1     | 通用错误           |
| OPRT_INVALID_PARM                 | -0x0002  | -2     | 无效的入参         |
| OPRT_MALLOC_FAILED                | -0x0003  | -3     | 内存分配失败       |
| OPRT_NOT_SUPPORTED                | -0x0004  | -4     | 不支持             |
| OPRT_NOT_FOUND                    | -0x0005  | -5     | 没有找到对象       |
| OPRT_INDEX_OUT_OF_BOUND           | -0x0006  | -6     | 索引越界           |
| OPRT_EXCEED_UPPER_LIMIT           | -0x0007  | -7     | 超过上限           |
| OPRT_NOT_EXIST                    | -0x0008  | -8     | 不存在             |
| OPRT_QTH_WIFI_OPEN_NETCFG_FAILED  | -0x1c00  | -7168  | 打开 wifi 配网失败 |
| OPRT_QTH_WIFI_CONN_ROUTER_FAILED  | -0x1c01  | -7169  | 连接路由器失败     |
| OPRT_QTH_WIFI_ROUTER_DISCONNECTED | -0x1c02  | -7170  | 路由器断连         |
