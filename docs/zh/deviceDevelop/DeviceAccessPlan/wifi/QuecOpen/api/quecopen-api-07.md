# OTA 相关接口

## **API 列表**

|                    函数                     |   说明   |
| :-----------------------------------------: | :------: |
|     [Qth_otaRequest()](#Qth_otaRequest)     | OTA 请求 |
| [Qth_otaPlanConfirm()](#Qth_otaPlanConfirm) | OTA 确认 |

## **API 详情**

<span id="Qth_otaRequest"></span>

## <span style="color:#A52A2A">**Qth_otaRequest**</span>

从 IoT平台获取设备的 OTA 升级计划。设备上线时会主动请求 OTA，若需要在其他时机主动检查是否存在 OTA 任务，可以使用该 API 进行 OTA 请求。

**函数原型**

```c
oprt_ret Qth_otaRequest(void);
```

**参数说明**

- **输入参数**：无

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
oprt_ret ret = Qth_otaRequest();
if (OPRT_OK != ret)
{
    Quos_logPrintf(APPS_OPEN, LL_ERR, "ota request fail ret:%d", ret);
    return ret;
}
```

---

<span id="Qth_otaPlanConfirm"></span>

## <span style="color:#A52A2A">**Qth_otaPlanConfirm**</span>

对 OTA 计划进行确认操作，接受或者拒绝 OTA 计划(如果注册的是 planCb 则不需要该 API)。

**函数原型**

```c
oprt_ret Qth_otaPlanConfirm(quint8_t action);
```

**参数说明**

- **输入参数**

  - **quint8_t** **`action`**：OTA 升级选项。
    | 取值 | 描述     |
    | ---- | -------- |
    | 0    | 接受升级 |
    | 1    | 拒绝升级 |

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
void otaPlanExCb(Qth_otaPlan_t *planList, quint16_t count)
{
    if(QTH_OTA_TYPE_FOTA == (qint32_t)planList[0].type)
    {
        Qth_otaPlanConfirm(1);
    }
}
```

---

<span id="ERROR_CODE"> </span>

## **错误码列表**

| 枚举值                      | 十六进制 | 十进制 | 描述                            |
| --------------------------- | -------- | ------ | ------------------------------- |
| OPRT_OK                     | -0x0000  | -0     | 执行成功                        |
| OPRT_COM_ERROR              | -0x0001  | -1     | 通用错误                        |
| OPRT_INVALID_PARM           | -0x0002  | -2     | 无效的入参                      |
| OPRT_MALLOC_FAILED          | -0x0003  | -3     | 内存分配失败                    |
| OPRT_NOT_SUPPORTED          | -0x0004  | -4     | 不支持                          |
| OPRT_NOT_FOUND              | -0x0005  | -5     | 没有找到对象                    |
| OPRT_INDEX_OUT_OF_BOUND     | -0x0006  | -6     | 索引越界                        |
| OPRT_EXCEED_UPPER_LIMIT     | -0x0007  | -7     | 超过上限                        |
| OPRT_NOT_EXIST              | -0x0008  | -8     | 不存在                          |
| OPRT_QTH_OTA_REQUEST_FAILED | -0x1a00  | -6656  | 发起 OTA 请求失败               |
| OPRT_QTH_OTA_ID_NOT_TASK    | -0x1a01  | -6657  | 该组件标识没有在进行的 OTA 任务 |
