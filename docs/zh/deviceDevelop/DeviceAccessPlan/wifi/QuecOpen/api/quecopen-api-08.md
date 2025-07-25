# GNSS&LBS&Wi-Fi 定位 相关接口

## **API 列表**

|                            函数                             |          说明          |
| :---------------------------------------------------------: | :--------------------: |
|      [Qth_locGetSupportType()](#Qth_locGetSupportType)      |   获取支持的定位类型   |
|   [Qth_locGetInsideLocation()](#Qth_locGetInsideLocation)   | 获取内置 wifi 定位数据 |
|  [Qth_locSendInsideLocation()](#Qth_locSendInsideLocation)  | 上报内置 wifi 定位数据 |
| [Qth_locSendOutsideLocation()](#Qth_locSendOutsideLocation) |    上报外置定位数据    |

## **API 详情**

<span id="Qth_locGetSupportType"></span>

## <span style="color:#A52A2A">**Qth_locGetSupportType**</span>

获取支持的定位类型。

**函数原型**

```c
char *Qth_locGetSupportType();
```

**参数说明**

- **输入参数**

  - 无。

- **输出参数**

  - 无。

- **返回值**
  - 成功：返回支持的定位类型数据。
  - 失败：返回 NULL。

**调用示例**

```c
char *locType = NULL;

locType = Qth_locGetSupportType();
Qhal_mem_free(locType);
```

---

<span id="Qth_locGetInsideLocation"></span>

## <span style="color:#A52A2A">**Qth_locGetInsideLocation**</span>

获取内置 wifi 定位数据。

**函数原型**

```c
void *Qth_locGetInsideLocation(void);
```

**参数说明**

- **输入参数**

  - 无。

- **输出参数**

  - 无。

- **返回值**
  - 成功：返回内置 wifi 定位数据，ttlv 格式。
  - 失败：返回 NULL。

**调用示例**

```c
void *nmeaTtlv = NULL;

nmeaTtlv = Qth_locGetInsideLocation();
Quos_ttlvFree(&nmeaTtlv);
```

---

<span id="Qth_locSendInsideLocation"></span>

## <span style="color:#A52A2A">**Qth_locSendInsideLocation**</span>

上报内置 wifi 定位数据。

**函数原型**

```c
oprt_ret Qth_locSendInsideLocation(quint16_t *pkgId, Qth_sendCb_f sendCb);
```

**参数说明**

- **输入参数**

  - **Qth_sendCb_f** **`sendCb`**：上报消息结果回调函数。
    - **函数原型**
      ```c
      typedef void (*Qth_sendCb_f)(quint16_t pkgId, qbool result);
      ```

- **输出参数**

  - **quint16_t** **`pkgId`**：上报消息的 pkgId。

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
oprt_ret ret = OPRT_OK;
ret = Qth_locSendInsideLocation(&pkgId, sendCb);
if (OPRT_OK != ret)
{
    Quos_logPrintf(APPS_OPEN, LL_ERR, "send inside location error");
}
```

---

<span id="Qth_locSendOutsideLocation"></span>

## <span style="color:#A52A2A">**Qth_locSendOutsideLocation**</span>

上报外置定位数据。

**函数原型**

```c
oprt_ret Qth_locSendOutsideLocation(char *location, quint16_t *pkgId, Qth_sendCb_f sendCb)
```

**参数说明**

- **输入参数**

  - **char \*** **`location`**：外置定位数据。

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
void sendCb(quint16_t pkgId, qbool result)
{
    Quos_logPrintf(LL_DBG, "recv send event, pkgId:%u, result:%d", pkgId, result);
}

quint16_t pkgId = 0;
oprt_ret ret = OPRT_OK;
ret = Qth_locSendOutsideLocation("$GPGGA,095029.82,3012.5500,N,12012.7273,E,1,8,1.098,42.110,M,,M,,*70", &pkgId, sendCb);
if (OPRT_OK != ret)
{
    Quos_logPrintf(APPS_OPEN, LL_ERR, "send outside location error");
}
```

---

<span id="ERROR_CODE"> </span>

## **错误码列表**

| 枚举值                       | 十六进制 | 十进制 | 描述             |
| ---------------------------- | -------- | ------ | ---------------- |
| OPRT_OK                      | -0x0000  | -0     | 执行成功         |
| OPRT_COM_ERROR               | -0x0001  | -1     | 通用错误         |
| OPRT_INVALID_PARM            | -0x0002  | -2     | 无效的入参       |
| OPRT_MALLOC_FAILED           | -0x0003  | -3     | 内存分配失败     |
| OPRT_NOT_SUPPORTED           | -0x0004  | -4     | 不支持           |
| OPRT_NOT_FOUND               | -0x0005  | -5     | 没有找到对象     |
| OPRT_INDEX_OUT_OF_BOUND      | -0x0006  | -6     | 索引越界         |
| OPRT_EXCEED_UPPER_LIMIT      | -0x0007  | -7     | 超过上限         |
| OPRT_NOT_EXIST               | -0x0008  | -8     | 不存在           |
| OPRT_QTH_LOC_OUTSIDE_IS_NULL | -0x1500  | -5376  | 外置定位数据为空 |
