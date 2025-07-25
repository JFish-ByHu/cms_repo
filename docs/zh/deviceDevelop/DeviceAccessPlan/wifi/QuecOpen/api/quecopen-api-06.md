# cloud 数据发送 相关接口

## **API 列表**

|                      函数                       |          说明          |
| :---------------------------------------------: | :--------------------: |
|       [Qth_cmdSendTsl()](#Qth_cmdSendTsl)       |     发送物模型请求     |
|     [Qth_cmdSendTrans()](#Qth_cmdSendTrans)     |      发送透传数据      |
|   [Qth_wanSendDevInfo()](#Qth_wanSendDevInfo)   | 向 IoT平台上报设备信息 |
| [Qth_wanSendDevStatus()](#Qth_wanSendDevStatus) | 向 IoT平台上报设备状态 |
|   [Qth_ntpSetResultCb()](#Qth_ntpSetResultCb)   | 设置 NTP 结果回调函数  |
|    [Qth_ntpSendNtpReq()](#Qth_ntpSendNtpReq)    |     发送 NTP 请求      |

## **API 详情**

<span id="Qth_cmdSendTsl"></span>

## <span style="color:#A52A2A">**Qth_cmdSendTsl**</span>

该函数用于发送 TSL 请求。

**函数原型**

```c
oprt_ret Qth_cmdSendTsl(Qth_sendMode_e mode, void *ttlvHead, quint16_t *pkgId, Qth_sendCb_f sendCb);
```

**参数说明**

- **输入参数**

  - **Qth_sendMode_e** **`mode`**：发送模式，具体取值见下表：

    | 取值                   | 描述                                                   |
    | ---------------------- | ------------------------------------------------------ |
    | QTH_SEND_AT_MOST_ONCE  | 消息仅发送一次，不需要确认或重传。可能会丢失或重复     |
    | QTH_SEND_AT_LEAST_ONCE | 消息至少发送一次，直到收到确认。可能会重复             |
    | QTH_SEND_EXACTLY_ONCE  | 消息仅发送一次，并确保接收方只接收一次。不会丢失或重复 |

  - **void \*** **`ttlvHead`**：数据表。
  - **Qth_sendCb_f** **`sendCb`**：发送结果回调函数，若不关注发送结果，则可以填 NULL。
    - **函数原型**
      ```c
      typedef void (*Qth_sendCb_f)(quint16_t pkgId, qbool result);
      ```
    - **输入参数**
      - **quint16_t** **`pkgId`**：发送的包 ID。
      - **qbool** **`result`**：发送结果。

- **输出参数**

  - **quint16_t \*** **`pkgId`**：发送的包 ID，若不关注发送结果，则可以填 NULL。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
void *ttlvHead = NULL;

Quos_ttlvAddIdBool(&ttlvHead, 1, TRUE);
Qth_cmdSendTsl(QTH_SEND_AT_MOST_ONCE, ttlvHead, NULL, NULL);
```

---

<span id="Qth_cmdSendTrans"></span>

## <span style="color:#A52A2A">**Qth_cmdSendTrans**</span>

该函数用于发送透传请求。

**函数原型**

```c
oprt_ret Qth_cmdSendTrans(Qth_sendMode_e mode, quint8_t *value, quint32_t valLen, quint16_t *pkgId, Qth_sendCb_f sendCb);
```

**参数说明**

- **输入参数**

  - **Qth_sendMode_e** **`mode`**：发送模式，具体取值见下表：

    | 取值                   | 描述                                                   |
    | ---------------------- | ------------------------------------------------------ |
    | QTH_SEND_AT_MOST_ONCE  | 消息仅发送一次，不需要确认或重传。可能会丢失或重复     |
    | QTH_SEND_AT_LEAST_ONCE | 消息至少发送一次，直到收到确认。可能会重复             |
    | QTH_SEND_EXACTLY_ONCE  | 消息仅发送一次，并确保接收方只接收一次。不会丢失或重复 |

  - **quint8_t \*** **`value`**：透传数据。
  - **quint32_t** **`valLen`**：透传数据长度。
  - **Qth_sendCb_f** **`sendCb`**：发送结果回调函数，若不关注发送结果，则可以填 NULL。
    - **函数原型**
      ```c
      typedef void (*Qth_sendCb_f)(quint16_t pkgId, qbool result);
      ```
    - **输入参数**
      - **quint16_t** **`pkgId`**：发送的包 ID。
      - **qbool** **`result`**：发送结果。

- **输出参数**

  - **quint16_t \***`pkgId`\_\_：发送的包 ID，若不关注发送结果，则可以填 NULL。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
void sendCb(quint16_t pkgId, qbool result)
{
    Quos_logPrintf(LL_DBG, "recv send event, pkgId:%u, result:%d", pkgId, result);
}
quint16_t pkgId = 0;
Qth_cmdSendTrans(QTH_SEND_AT_LEAST_ONCE, "hello world", 11, &pkgId, sendCb);
```

---

<span id="Qth_ntpSetResultCb"></span>

## <span style="color:#A52A2A">**Qth_ntpSetResultCb**</span>

设置 NTP 结果回调函数。

**函数原型**

```c
oprt_ret Qth_ntpSetResultCb(Qth_ntpCb_f callback);
```

**参数说明**

- **输入参数**

  - **Qth_ntpCb_f** **`callback`**：NTP 结果回调函数。
    - **函数原型**
    ```c
    typedef void (*Qth_ntpCb_f)(quint16_t pkgId, Qth_ntpInfo_t *ntpInfo);
    ```

- **输出参数**

  - 无。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
oprt_ret ret = OPRT_OK;

void ntpDataCb(quint16_t pkgId, Qth_ntpInfo_t *ntpInfo)
{
    Quos_logPrintf(LL_DBG, "recv ntp info, pkgId:%u", pkgId);
    Quos_logPrintf(LL_DBG, "%04d-%02d-%02d %02d:%02d:%02d.%03d, %s, "PRINTF_FORMAT_U64,
                    ntpInfo->tm.tm_year, ntpInfo->tm.tm_mon, ntpInfo->tm.tm_mday, ntpInfo->tm.tm_hour, ntpInfo->tm.tm_min, ntpInfo->tm.tm_sec, ntpInfo->tm.tm_ms,
                    ntpInfo->timezone, PRINTF_CONV_U64(ntpInfo->timestamp));
}

ret = Qth_ntpSetResultCb(ntpDataCb);
if (OPRT_OK != ret)
{
    Quos_logPrintf(APPS_OPEN, LL_ERR, "set ntp result callback error");
}
```

---

<span id="Qth_ntpSendNtpReq"></span>

## <span style="color:#A52A2A">**Qth_ntpSendNtpReq**</span>

发送 NTP 请求。

**函数原型**

```c
oprt_ret Qth_ntpSendNtpReq(quint16_t *pkgId, Qth_sendCb_f sendCb);
```

**参数说明**

- **输入参数**

  - **Qth_sendCb_f** **`sendCb`**：上报消息结果回调函数，若不关注发送结果，则可以填 NULL。
    - **函数原型**
    ```c
    typedef void (*Qth_sendCb_f)(quint16_t pkgId, qbool result);
    ```

- **输出参数**

  - **quint16_t** **`pkgId`**：上报消息的 pkgId，若不关注发送结果，则可以填 NULL。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
oprt_ret ret = OPRT_OK;

void ntpDataCb(quint16_t pkgId, Qth_ntpInfo_t *ntpInfo)
{
    Quos_logPrintf(LL_DBG, "recv ntp info, pkgId:%u", pkgId);
    Quos_logPrintf(LL_DBG, "%04d-%02d-%02d %02d:%02d:%02d.%03d, %s, "PRINTF_FORMAT_U64,
                    ntpInfo->tm.tm_year, ntpInfo->tm.tm_mon, ntpInfo->tm.tm_mday, ntpInfo->tm.tm_hour, ntpInfo->tm.tm_min, ntpInfo->tm.tm_sec, ntpInfo->tm.tm_ms,
                    ntpInfo->timezone, PRINTF_CONV_U64(ntpInfo->timestamp));
}

Qth_ntpSetResultCb(ntpDataCb);
ret = Qth_ntpSendNtpReq(NULL, NULL);
if (OPRT_OK != ret)
{
    Quos_logPrintf(APPS_OPEN, LL_ERR, "send ntp request error");
}
```

---

<span id="Qth_wanSendDevInfo"></span>

## <span style="color:#A52A2A">**Qth_wanSendDevInfo**</span>

该函数用于向 IoT平台上报设备信息。

**函数原型**

```c
void Qth_wanSendDevInfo();
```

**参数说明**

- **输入参数**

  - 无输入参数。

- **返回值**
  - 无返回值。

**调用示例**

```c
Qth_wanSendDevInfo();
```

---

<span id="Qth_wanSendDevStatus"></span>

## <span style="color:#A52A2A">**Qth_wanSendDevStatus**</span>

该函数用于向 IoT平台上报设备状态。

**函数原型**

```c
void Qth_wanSendDevStatus();
```

**参数说明**

- **输入参数**

  - 无输入参数。

- **返回值**
  - 无返回值。

**调用示例**

```c
Qth_wanSendDevStatus();
```

---

<span id="ERROR_CODE"> </span>

## **错误码列表**

| 枚举值                           | 十六进制 | 十进制 | 描述                  |
| -------------------------------- | -------- | ------ | --------------------- |
| OPRT_OK                          | -0x0000  | -0     | 执行成功              |
| OPRT_COM_ERROR                   | -0x0001  | -1     | 通用错误              |
| OPRT_INVALID_PARM                | -0x0002  | -2     | 无效的入参            |
| OPRT_MALLOC_FAILED               | -0x0003  | -3     | 内存分配失败          |
| OPRT_NOT_SUPPORTED               | -0x0004  | -4     | 不支持                |
| OPRT_NOT_FOUND                   | -0x0005  | -5     | 没有找到对象          |
| OPRT_INDEX_OUT_OF_BOUND          | -0x0006  | -6     | 索引越界              |
| OPRT_EXCEED_UPPER_LIMIT          | -0x0007  | -7     | 超过上限              |
| OPRT_NOT_EXIST                   | -0x0008  | -8     | 不存在                |
| OPRT_QTH_CMD_PKG_FORMAT_INVALID  | -0x1200  | -4608  | 数据包格式错误        |
| OPRT_QTH_CMD_PKG_GENERATE_FAILED | -0x1201  | -4609  | 数据包生成失败        |
| OPRT_QTH_CMD_UNSUPPORTED         | -0x1202  | -4610  | 数据命令不支持        |
| OPRT_QTH_CMD_PKG_SEND_FAILED     | -0x1203  | -4611  | 数据包发送失败        |
| OPRT_QTH_WAN_PKG_FORMAT_INVALID  | -0x1300  | -4864  | 广域网数据包格式错误  |
| OPRT_QTH_WAN_PKG_REPEATED        | -0x1301  | -4865  | 广域网数据包重复      |
| OPRT_QTH_WAN_GET_TOPIC_FAILED    | -0x1302  | -4866  | 广域网获取 topic 失败 |
| OPRT_QTH_WAN_UNKNOWN_FAILED      | -0x1303  | -4867  | 广域网未知连接错误    |
