# 网关子设备 相关接口

## **API 列表**

|                      函数                       |         说明         |
| :---------------------------------------------: | :------------------: |
| [Qth_subDevSetEventCb()](#Qth_subDevSetEventCb) |  设置子设备回调函数  |
|       [Qth_subDevConn()](#Qth_subDevConn)       |    发起子设备连接    |
|    [Qth_subDevDisconn()](#Qth_subDevDisconn)    |    断开子设备连接    |
|     [Qth_subDevDeauth()](#Qth_subDevDeauth)     |      注销子设备      |
|    [Qth_subDevSendTsl()](#Qth_subDevSendTsl)    | 子设备发送物模型数据 |
|  [Qth_subDevSendTrans()](#Qth_subDevSendTrans)  |  子设备发送透传数据  |
|  [Qth_subDevLocReport()](#Qth_subDevLocReport)  |  子设备发送定位数据  |
|  [Qth_subOtaUpdateVer()](#Qth_subOtaUpdateVer)  |   子设备上报版本号   |
|        [Qth_subOtaReq()](#Qth_subOtaReq)        | 子设备发起 OTA 请求  |

## **API 详情**

<span id="Qth_subDevSetEventCb"></span>

## <span style="color:#A52A2A">**Qth_subDevSetEventCb**</span>

该函数用于设置子设备事件回调函数。

**函数原型**

```c
oprt_ret Qth_subDevSetEventCb(Qth_subEventCb_t cb);
```

**参数说明**

- **输入参数**

  - **Qth_subEventCb_t** **`cb`**：子设备回调函数。
    - **Qth_subDevEventCb_f** **`devEventCb`**：子设备事件回调函数。
      - **函数原型**
        ```c
        void (*Qth_subDevEventCb_f)(const char *subPk, const char *subDk, const char *subDs, Qth_subDevEvent_e event, oprt_ret result);
        ```
      - **输入参数**
        - **const char \*** **`subPk`**：子设备 ProductKey。
        - **const char \*** **`subDk`**：子设备 DeviceKey。
        - **const char \*** **`subDs`**：子设备设备密钥。
        - **Qth_devEvent_e** **`event`**：事件类型
          | 取值                     | 描述           |
          | ------------------------ | -------------- |
          | QTH_SUBDEV_EVENT_AUTH    | 子设备注册事件 |
          | QTH_SUBDEV_EVENT_LOGIN   | 子设备登陆事件 |
          | QTH_SUBDEV_EVENT_LOGOUT  | 子设备登出事件 |
          | QTH_SUBDEV_EVENT_UNAUTH  | 子设备注销事件 |
          | QTH_SUBDEV_EVENT_OFFLINE | 子设备离线事件 |
          | QTH_SUBDEV_EVENT_RESET   | 子设备重置事件 |
        - **oprt_ret** **`result`**：事件码，请参考 [错误码列表](#ERROR_CODE)。
    - **Qth_subTtlvRecvCb_f** **`ttlvRecvCb`**：子设备物模型接收回调函数。
      - **函数原型**
        ```c
        void (*Qth_subTtlvRecvCb_f)(const char *subPk, const char *subDk, void *ttlvHead);
        ```
      - **输入参数**
        - **const char \*** **`subPk`**：子设备 ProductKey。
        - **const char \*** **`subDk`**：子设备 DeviceKey。
        - **void \*** **`ttlvHead`**：物模型数据，TTLV 格式。
    - **Qth_subTtlvReqCb_f** **`ttlvReqCb`**：子设备物模型读取回调函数。
      - **函数原型**
        ```c
        void *(*Qth_subTtlvReqCb_f)(const char *subPk, const char *subDk, quint16_t id[], quint32_t idNum);
        ```
      - **输入参数**
        - **const char \*** **`subPk`**：子设备 ProductKey。
        - **const char \*** **`subDk`**：子设备 DeviceKey。
        - **quint16_t** **`id`**：读取的物模型 ID 数组。
        - **quint32_t** **`idNum`**：读取的物模型 ID 数目。
    - **Qth_subTransRecvCb_f** **`transRecvCb`**：子设备透传接收回调函数。
      - **函数原型**
        ```c
        void (*Qth_subTransRecvCb_f)(const char *subPk, const char *subDk, quint8_t *value, quint32_t valLen);
        ```
      - **输入参数**
        - **const char \*** **`subPk`**：子设备 ProductKey。
        - **const char \*** **`subDk`**：子设备 DeviceKey。
        - **quint8_t \*** **`value`**：IoT平台下发的透传数据内容。
        - **quint32_t** **`valLen`**：IoT平台下发的透传数据长度。
    - **Qth_subOtaCb_t** **`otaEventCb`**：子设备 OTA 事件回调函数。
      - **Qth_subOtaPlanCb_f** **`planCb`**：子设备 OTA 计划下发回调函数(旧)，使用返回值进行 OTA 计划确认。
        - **函数原型**
          ```c
          qbool (*Qth_subOtaPlanCb_f)(const char *subPk, const char *subDk, Qth_otaPlan_t *planList, quint16_t count);
          ```
        - **输入参数**
          - **const char \*** **`subPk`**：子设备 ProductKey。
          - **const char \*** **`subDk`**：子设备 DeviceKey。
          - **Qth_otaPlan_t \*** **`planList`**：IoT平台下发的 OTA 组件升级计划。
          - **quint16_t** **`count`**：IoT平台下发的 OTA 组件数目。
        - **返回值**
          - 接受：返回 `TRUE`。
          - 拒绝：返回 `FALSE`。
      - **Qth_subOtaPlanExCb_f** **`planExCb`**：子设备 OTA 计划下发回调函数(新)，需要使用 Qth_otaPlanConfirm 进行 OTA 计划确认。
        - **函数原型**
          ```c
          void (*Qth_subOtaPlanExCb_f)(const char *subPk, const char *subDk, Qth_otaPlan_t *planList, quint16_t count);
          ```
        - **输入参数**
          - **const char \*** **`subPk`**：子设备 ProductKey。
          - **const char \*** **`subDk`**：子设备 DeviceKey。
          - **Qth_otaPlan_t \*** **`planList`**：IoT平台下发的 OTA 组件升级计划。
          - **quint16_t** **`count`**：IoT平台下发的 OTA 组件数目。
      - **Qth_subOtaDownloadCb_f** **`downloadCb`**：子设备 OTA 下载进度回调函数。
        - **函数原型**
          ```c
          void (*Qth_subOtaDownloadCb_f)(const char *subPk, const char *subDk, char *identity, quint8_t percent);
          ```
        - **输入参数**
          - **const char \*** **`subPk`**：子设备 ProductKey。
          - **const char \*** **`subDk`**：子设备 DeviceKey。
          - **char \*** **`identity`**：OTA 组件标识。
          - **quint8_t** **`percent`**：OTA 固件下载进度，范围：0-100。
      - **Qth_subOtaResultCb_f** **`resultCb`**：子设备 OTA 升级结果回调函数。
        - **函数原型**
          ```c
          void (*Qth_subOtaResultCb_f)(const char *subPk, const char *subDk, char *identity, qbool result);
          ```
        - **输入参数**
          - **const char \*** **`subPk`**：子设备 ProductKey。
          - **const char \*** **`subDk`**：子设备 DeviceKey。
          - **char \*** **`identity`**：OTA 组件标识。
          - **qbool** **`result`**：OTA 更新结果。
      - **Qth_subOtaInfoCb_f** **`infoCb`**：子设备 OTA 文件信息回调函数。
        - **函数原型**
          ```c
          qbool (*Qth_subOtaInfoCb_f)(const char *subPk, const char *subDk, char *identity, Qth_otaInfo_t *info, Qth_otaDownType_e *type);
          ```
        - **输入参数**
          - **const char \*** **`subPk`**：子设备 ProductKey。
          - **const char \*** **`subDk`**：子设备 DeviceKey。
          - **char \*** **`identity`**：OTA 组件标识。
          - **Qth_otaInfo_t \*** **`info`**：OTA 固件信息。
        - **输出参数**
          - **Qth_otaDownType_e \*** **`type`**：SOTA 下载类型。
            | 取值                      | 描述                      |
            | ------------------------- | ------------------------- |
            | QTH_SOTA_DOWN_TYPE_MODULE | 利用模组进行 MCU 固件下载 |
            | QTH_SOTA_DOWN_TYPE_MCU    | MCU 自行进行固件下载      |
        - **返回值**
          - 接受：返回 `TRUE`。
          - 拒绝：返回 `FALSE`。
      - **Qth_subOtaFileCb_f** **`fileCb`**：子设备 OTA 文件下发回调函数。
        - **函数原型**
          ```c
          qbool (*Qth_subOtaFileCb_f)(const char *subPk, const char *subDk, char *identity, quint32_t offset, quint8_t *data, quint32_t dataLen);
          ```
        - **输入参数**
          - **const char \*** **`subPk`**：子设备 ProductKey。
          - **const char \*** **`subDk`**：子设备 DeviceKey。
          - **char \*** **`identity`**：OTA 组件标识。
          - **quint32_t** **`offset`**：固件分片偏移量。
          - **quint8_t \*** **`data`**：固件分片内容。
          - **quint32_t** **`dataLen`**：固件分片大小。
        - **返回值**
          - 保存成功：返回 `TRUE`。
          - 保存失败：返回 `FALSE`。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
    Qth_subEventCb_t subEventCb = {0};
    Qth_subOtaCb_t subOtaCb = {0};
    subOtaCb.planCb = subOtaPlanCb;
    subOtaCb.downloadCb = subOtaDownloadCb;
    subOtaCb.resultCb = subOtaResultCb;
    subOtaCb.infoCb = subOtaInfoCb;
    subOtaCb.fileCb = subOtaFileCb;
    subEventCb.devEventCb = subDevEventCb;
    subEventCb.ttlvRecvCb = subTtlvRecvCb;
    subEventCb.ttlvReqCb = subTtlvReqCb;
    subEventCb.transRecvCb = subTransRecvCb;
    subEventCb.otaEventCb = subOtaCb;
    Qth_subDevSetEventCb(subEventCb);
```

---

<span id="Qth_subDevConn"></span>

## <span style="color:#A52A2A">**Qth_subDevConn**</span>

该函数用于设置子设备的注册或者登陆，子设备的首次上线时需要进行注册，这时 subDs 传 NULL，注册成功后需要保存 subDs，以便子设备的再次上线时需要进行登陆。

**函数原型**

```c
oprt_ret Qth_subDevConn(const char *subPk, const char *subPs, const char *subDk, const char *subDs);
```

**参数说明**

- **输入参数**

  - **const char \*** **`subPk`**：子设备产品ProductKey。
  - **const char \*** **`subPs`**：子设备产品ProductSecret。
  - **const char \*** **`subDk`**：子设备DeviceKey。
  - **const char \*** **`subDs`**：子设备DeviceSecret。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
void subDevEventCb(const char *subPk, const char *subDk, const char *subDs, Qth_subDevEvent_e event, oprt_ret result)
{
    switch (event)
    {
    case QTH_SUBDEV_EVENT_LOGIN:
        Quos_logPrintf(APPS_OPEN, LL_DBG, "subPk:%s,subDk:%s,subDs:%s", subPk, subDk, subDs);
    break;
    }
}
/* 子设备注册 */
Qth_subDevConn("xxxxxx", "xxxxxxxxxxxxxxxx", "1234567890", NULL);
/* 子设备登陆 */
Qth_subDevConn("xxxxxx", "xxxxxxxxxxxxxxxx", "1234567890", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
```

---

<span id="Qth_subDevDisconn"></span>

## <span style="color:#A52A2A">**Qth_subDevDisconn**</span>

该函数用于子设备上线后，主动断开子设备连接(使子设备主动离线)。

**函数原型**

```c
oprt_ret Qth_subDevDisconn(const char *subPk, const char *subDk);
```

**参数说明**

- **输入参数**

  - **const char \*** **`subPk`**：子设备 ProductKey。
  - **const char \*** **`subDk`**：子设备 DeviceKey。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
Qth_subDevDisconn("xxxxxx", "xxxxxxxxxxxxxxxx");
```

---

<span id="Qth_subDevDeauth"></span>

## <span style="color:#A52A2A">**Qth_subDevDeauth**</span>

该函数用于子设备注册成功后，主动注销子设备(删除子设备)。

**函数原型**

```c
oprt_ret Qth_subDevDeauth(const char *subPk, const char *subPs, const char *subDk, const char *subDs);
```

**参数说明**

- **输入参数**

  - **const char \*** **`subPk`**：子设备产品ProductKey。
  - **const char \*** **`subPs`**：子设备产品ProductSecret。
  - **const char \*** **`subDk`**：子设备DeviceKey。
  - **const char \*** **`subDs`**：子设备DeviceSecret。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
Qth_subDevDeauth("xxxxxx", "xxxxxxxxxxxxxxxx", "1234567890", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
```

---

<span id="Qth_subDevSendTsl"></span>

## <span style="color:#A52A2A">**Qth_subDevSendTsl**</span>

该函数用于子设备发送物模型数据到 IoT平台。

**函数原型**

```c
oprt_ret Qth_subDevSendTsl(const char *subPk, const char *subDk, Qth_sendMode_e mode, void *ttlvHead, quint16_t *pkgId, Qth_sendCb_f sendCb);
```

**参数说明**

- **输入参数**

  - **const char \*** **`subPk`**：子设备 ProductKey。
  - **const char \*** **`subDk`**：子设备 DeviceKey。
  - **Qth_sendMode_e** **`mode`**：发送模式，具体取值见下表：

    | 取值                   | 描述                                                   |
    | ---------------------- | ------------------------------------------------------ |
    | QTH_SEND_AT_MOST_ONCE  | 消息仅发送一次，不需要确认或重传。可能会丢失或重复     |
    | QTH_SEND_AT_LEAST_ONCE | 消息至少发送一次，直到收到确认。可能会重复             |
    | QTH_SEND_EXACTLY_ONCE  | 消息仅发送一次，并确保接收方只接收一次。不会丢失或重复 |

  - **void \*** **`ttlvHead`**：需要发送的物模型数据。
  - **Qth_sendCb_f** **`sendCb`**：发送结果回调函数。
    - **函数原型**
      ```c
      typedef void (*Qth_sendCb_f)(quint16_t pkgId, qbool result);
      ```
    - **输入参数**
      - **quint16_t** **`pkgId`**：发送的包 ID。
      - **qbool** **`result`**：发送结果。

- **输出参数**

  - **quint16_t \*** **`pkgId`**：发送的包 ID。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
void sendCb(quint16_t pkgId, qbool result)
{
    Quos_logPrintf(APPS_OPEN, LL_DBG, "recv send event, pkgId:%u, result:%d", pkgId, result);
}


void *ttlvHead = NULL;
quint16_t pkgId = 0;
oprt_ret ret = 0;
Quos_ttlvAddIdBool(&ttlvHead, 1, TRUE);
ret = Qth_subDevSendTsl("xxxxxx", "xxxxxxxxxxxxxxxx", QTH_SEND_AT_LEAST_ONCE, ttlvHead, &pkgId, sendCb);
Quos_logPrintf(APPS_OPEN, LL_DBG, "subdev tsl send ret:%d pkgId:%d", ret, pkgId);
```

---

<span id="Qth_subDevSendTrans"></span>

## <span style="color:#A52A2A">**Qth_subDevSendTrans**</span>

该函数用于子设备发送透传数据到 IoT平台。

**函数原型**

```c
oprt_ret Qth_subDevSendTrans(const char *subPk, const char *subDk, Qth_sendMode_e mode, quint8_t *value, quint32_t valLen, quint16_t *pkgId, Qth_sendCb_f sendCb);
```

**参数说明**

- **输入参数**

  - **const char \*** **`subPk`**：子设备 ProductKey。
  - **const char \*** **`subDk`**：子设备 DeviceKey。
  - **Qth_sendMode_e** **`mode`**：发送模式，具体取值见下表：

    | 取值                   | 描述                                                   |
    | ---------------------- | ------------------------------------------------------ |
    | QTH_SEND_AT_MOST_ONCE  | 消息仅发送一次，不需要确认或重传。可能会丢失或重复     |
    | QTH_SEND_AT_LEAST_ONCE | 消息至少发送一次，直到收到确认。可能会重复             |
    | QTH_SEND_EXACTLY_ONCE  | 消息仅发送一次，并确保接收方只接收一次。不会丢失或重复 |

  - **quint8_t \*** **`value`**：需要发送的透传数据。
  - **quint32_t** **`valLen`**：需要发送的透传数据长度。
  - **Qth_sendCb_f** **`sendCb`**：发送结果回调函数。
    - **函数原型**
      ```c
      typedef void (*Qth_sendCb_f)(quint16_t pkgId, qbool result);
      ```
    - **输入参数**
      - **quint16_t** **`pkgId`**：发送的包 ID。
      - **qbool** **`result`**：发送结果。

- **输出参数**

  - **quint16_t \*** **`pkgId`**：发送的包 ID。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
void sendCb(quint16_t pkgId, qbool result)
{
    Quos_logPrintf(APPS_OPEN, LL_DBG, "recv send event, pkgId:%u, result:%d", pkgId, result);
}


quint16_t pkgId = 0;
oprt_ret ret = 0;
ret = Qth_subDevSendTrans("xxxxxx", "xxxxxxxxxxxxxxxx", QTH_SEND_AT_LEAST_ONCE, "hello", 5, &pkgId, sendCb);
Quos_logPrintf(APPS_OPEN, LL_DBG, "subdev Trans send ret:%d pkgId:%d", ret, pkgId);
```

---

<span id="Qth_subDevLocReport"></span>

## <span style="color:#A52A2A">**Qth_subDevLocReport**</span>

该函数用于子设备发送定位数据到 IoT平台。

**函数原型**

```c
oprt_ret Qth_subDevLocReport(const char *subPk, const char *subDk, const char *location, quint16_t *pkgId, Qth_sendCb_f sendCb);
```

**参数说明**

- **输入参数**

  - **const char \*** **`subPk`**：子设备 ProductKey。
  - **const char \*** **`subDk`**：子设备 DeviceKey。
  - **quint16_t \*** **`location`**：需要发送的定位数据。
  - **Qth_sendCb_f** **`sendCb`**：发送结果回调函数。
    - **函数原型**
      ```c
      typedef void (*Qth_sendCb_f)(quint16_t pkgId, qbool result);
      ```
    - **输入参数**
      - **quint16_t** **`pkgId`**：发送的包 ID。
      - **qbool** **`result`**：发送结果。

- **输出参数**

  - **quint16_t \*** **`pkgId`**：发送的包 ID。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
void sendCb(quint16_t pkgId, qbool result)
{
    Quos_logPrintf(APPS_OPEN, LL_DBG, "recv send event, pkgId:%u, result:%d", pkgId, result);
}


quint16_t pkgId = 0;
oprt_ret ret = 0;
ret = Qth_subDevLocReport("xxxxxx", "xxxxxxxxxxxxxxxx", (char *)"$GPGGA,095029.82,3012.5500,N,12012.7273,E,1,8,1.098,42.110,M,,M,,*70", &pkgId, sendCb);
Quos_logPrintf(APPS_OPEN, LL_DBG, "subdev location send ret:%d pkgId:%d", ret, pkgId);
```

---

<span id="Qth_subOtaUpdateVer"></span>

## <span style="color:#A52A2A">**Qth_subOtaUpdateVer**</span>

该函数用于子设备上报版本号到 IoT平台。

**函数原型**

```c
oprt_ret Qth_subOtaUpdateVer(const char *subPk, const char *subDk, const char *subVer);
```

**参数说明**

- **输入参数**

  - **const char \*** **`subPk`**：子设备 ProductKey。
  - **const char \*** **`subDk`**：子设备 DeviceKey。
  - **const char \*** **`subVer`**：子设备版本号。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
Qth_subOtaUpdateVer("xxxxxx", "xxxxxxxxxxxxxxxx", "1.0.0");
```

---

<span id="Qth_subOtaReq"></span>

## <span style="color:#A52A2A">**Qth_subOtaReq**</span>

该函数用于子设备主动请求 OTA。子设备上线或上报版本号时 IoT平台会主动下发相应的 OTA 计划，在其他时候若需要进行 OTA 时则需要主动请求。

**函数原型**

```c
oprt_ret Qth_subOtaReq(const char *subPk, const char *subDk);
```

**参数说明**

- **输入参数**

  - **const char \*** **`subPk`**：子设备 ProductKey。
  - **const char \*** **`subDk`**：子设备 DeviceKey。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
Qth_subOtaReq("xxxxxx", "xxxxxxxxxxxxxxxx");
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
| OPRT_QTH_SUBDEV_OFFLINE          | -0x1d00  | -7424  | 当前子设备离线                               |
| OPRT_QTH_SUBDEV_NODE_NOTFOUND    | -0x1d01  | -7425  | 未找到当前子设备                             |
| OPRT_QTH_SUBDEV_PS_NOTFOUNT      | -0x1d02  | -7426  | 未找到当前子设备产品密钥                     |
| OPRT_QTH_SUBDEV_DS_NOTFOUNT      | -0x1d03  | -7427  | 未找到当前子设备设备密钥                     |
| OPRT_QTH_SUBDEV_ALREADY_LOGIN    | -0x1d04  | -7428  | 当前子设备已登陆                             |
