# 产品配置 相关接口

## **API 列表**

|                          函数                           |           说明           |
| :-----------------------------------------------------: | :----------------------: |
| [Qth_configSetProductInfo()](#Qth_configSetProductInfo) |       配置产品信息       |
| [Qth_configGetProductInfo()](#Qth_configGetProductInfo) |       获取产品信息       |
|  [Qth_configSetDeviceInfo()](#Qth_configSetDeviceInfo)  |       设置设备信息       |
|  [Qth_configGetDeviceInfo()](#Qth_configGetDeviceInfo)  |       获取设备信息       |
|    [Qth_configGetAuthType()](#Qth_configGetAuthType)    |     获取设备认证类型     |
|    [Qth_configSetODOSInfo()](#Qth_configSetODOSInfo)    |     设置一机一密信息     |
|      [Qth_configSetServer()](#Qth_configSetServer)      | 设置服务器域名和默认 IP  |
|      [Qth_configGetServer()](#Qth_configGetServer)      | 获取服务器域名和默认 IP  |
|    [Qth_configSetLifetime()](#Qth_configSetLifetime)    | 设置 MQTT 连接的生命周期 |
|    [Qth_configGetLifetime()](#Qth_configGetLifetime)    | 获取 MQTT 连接的生命周期 |
|     [Qth_configSetEventCb()](#Qth_configSetEventCb)     |     设置用户事件回调     |
|     [Qth_configGetEventCb()](#Qth_configGetEventCb)     |     获取用户事件回调     |
|   [Qth_configSetModuleVer()](#Qth_configSetModuleVer)   |      设置模组版本号      |
|   [Qth_configGetModuleVer()](#Qth_configGetModuleVer)   |      获取模组版本号      |
|      [Qth_configSetMcuVer()](#Qth_configSetMcuVer)      |     设置 MCU 版本号      |
|      [Qth_configGetMcuVer()](#Qth_configGetMcuVer)      |     获取 MCU 版本号      |
|    [Qth_configSetWifiInfo()](#Qth_configSetWifiInfo)    |      设置 WiFi 信息      |
|    [Qth_configGetWifiInfo()](#Qth_configGetWifiInfo)    |      获取 WiFi 信息      |
|  [Qth_configClearWifiInfo()](#Qth_configClearWifiInfo)  |      清除 WiFi 信息      |
|  [Qth_configSetNetcfgMode()](#Qth_configSetNetcfgMode)  |    设置 WiFi 配置模式    |
|  [Qth_configGetNetcfgMode()](#Qth_configGetNetcfgMode)  |    获取 WiFi 配置模式    |

## **API 详情**

<span id="Qth_configSetProductInfo"></span>

## <span style="color:#A52A2A">**Qth_configSetProductInfo**</span>

该函数用于配置产品信息。产品信息包括 ProductKey 和 ProductSecret，均为在平台创建产品时生成。

**函数原型**

```c
oprt_ret Qth_configSetProductInfo(const char *pk, const char *ps);
```

**参数说明**

- **输入参数**

  - **const char \*** **`pk`**：在平台创建产品时生成的 ProductKey。
  - **const char \*** **`ps`**：在平台创建产品时生成的 ProductSecret。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
Qth_configSetProductInfo("xxxxxx", "xxxxxxxxxxxxxxxx");
```

---

<span id="Qth_configGetProductInfo"></span>

## <span style="color:#A52A2A">**Qth_configGetProductInfo**</span>

该函数用于查询产品信息。

**函数原型**

```c
oprt_ret Qth_configGetProductInfo(char *pk, char *ps);
```

**参数说明**

- **输入参数**
  - 无
- **输出参数**

  - **char \*** **`pk`**：在平台创建产品时生成的 ProductKey。
  - **char \*** **`ps`**：在平台创建产品时生成的 ProductSecret。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
char pk[QTH_PK_MAXSIZE + 1] = {0};
char ps[QTH_PS_MAXSIZE + 1] = {0};

Qth_configGetProductInfo(pk, ps);
```

---

<span id="Qth_configSetDeviceInfo"></span>

## <span style="color:#A52A2A">**Qth_configSetDeviceInfo**</span>

该函数用于设置自定义设备标识和设备密钥。

**函数原型**

```c
oprt_ret Qth_configSetDeviceInfo(const char *dk, const char *ds);
```

**参数说明**

- **输入参数**
  - **const char \*** **`dk`**：用户自定义的设备的唯一标识。Wi-Fi 等无线模块默认值为 MAC 地址。最大字节长度为 16 字节。若设置为空，删除自定义的 dk 与 ds，并使用默认配置，此时需重新在平台进行认证。
  - **const char \*** **`ds`**：设备认证后获取的密钥。固定长度为 32 字节。仅当设置 dk 为非空且非默认值时，允许设置设备 密钥。可以为 NULL，则不设置默认密钥。
- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
Qth_configSetDeviceInfo("202305091054", NULL);
```

---

<span id="Qth_configGetDeviceInfo"></span>

## <span style="color:#A52A2A">**Qth_configGetDeviceInfo**</span>

该函数用于获取自定义的设备标识和设备密钥。

**函数原型**

```c
oprt_ret Qth_configGetDeviceInfo(char *dk, char *ds);
```

**参数说明**

- **输入参数**
  - 无
- **输出参数**

  - **char \*** **`dk`**：设备的唯一标识。
  - **char \*** **`ds`**：设备认证后获取的密钥。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
char dk[QTH_DK_MAXSIZE + 1] = {0};
char ds[QTH_DS_MAXSIZE + 1] = {0};

Qth_configGetDeviceInfo(dk, ds);
```

---

<span id="Qth_configSetODOSInfo"></span>

## <span style="color:#A52A2A">**Qth_configSetODOSInfo**</span>

该函数用于设置一机一密信息。

**函数原型**

```c
oprt_ret Qth_configSetODOSInfo(const char *pk, const char *ps, const char *dk, const char *ds);
```

**参数说明**

- **输入参数**

  - **const char \*** **`pk`**：在平台创建产品时生成的 ProductKey。
  - **const char \*** **`ps`**：在平台创建产品时生成的 ProductSecret。
  - **const char \*** **`dk`**：用户自定义的设备的唯一标识，字符串类型，范围是 4-32 字节。
  - **const char \*** **`ds`**：设备的密钥，字符串类型，固定长度为 32 字节。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
Qth_configSetODOSInfo("p11rbd", "VDcydF****52VFVq", "12345678abcd", "ca13ecbfaf92********12d372b38711");
```

---

<span id="Qth_configGetAuthType"></span>

## <span style="color:#A52A2A">**Qth_configGetAuthType**</span>

该函数用于获取设备认证类型。

**函数原型**

```c
oprt_ret Qth_configGetAuthType(Qth_authType_e *type);
```

**参数说明**

- **输入参数**
  - 无
- **输出参数**

  - **Qth_authType_e \*** **`type`**：设备认证类型。
    - 具体取值见下表：
      | 取值              | 描述     |
      | ----------------- | -------- |
      | QTH_AUTHTYPE_OTOS | 一型一密 |
      | QTH_AUTHTYPE_ODOS | 一机一密 |

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
Qth_authType_e type = 0;

Qth_configGetAuthType(&type);
```

---

<span id="Qth_configSetServer"></span>

## <span style="color:#A52A2A">**Qth_configSetServer**</span>

该函数用于设置服务器域名和默认 IP。

**函数原型**

```c
oprt_ret Qth_configSetServer(const char *url, const char *ip);
```

**参数说明**

- **输入参数**

  - **const char \*** **`url`**：服务器域名。可选，不配置时使用默认值，默认为:`mqtts://iot-south.quectelcn.com:8883`。
    | 地区           | 服务器域名                            |
    | -------------- | ------------------------------------- |
    | 中国地区非加密 | mqtt://iot-south.quectelcn.com:1883   |
    | 中国地区加密   | mqtts://iot-south.quectelcn.com:8883  |
    | 欧洲地区非加密 | mqtt://iot-south.acceleronix.io:1883  |
    | 欧洲地区加密   | mqtts://iot-south.acceleronix.io:8883 |
  - **const char \*** **`ip`**：服务器默认 IP，若设置默认 IP，则优先使用该 IP 登陆服务器，失败后再使用 DNS 获取 IP 地址。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
Qth_configSetServer("mqtts://iot-south.quectelcn.com:8883", NULL);
```

---

<span id="Qth_configGetServer"></span>

## <span style="color:#A52A2A">**Qth_configGetServer**</span>

该函数用于获取服务器 URL 和 IP。

**函数原型**

```c
oprt_ret Qth_configGetServer(char *url, char *ip);
```

**参数说明**

- **输入参数**
  - 无
- **输出参数**

  - **char \*** **`url`**：服务器域名。
  - **char \*** **`ip`**：服务器默认 IP。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
char url[QTH_DNS_HOSTNANE_MAX_LENGHT + 1] = {0};
char ip[QTH_IP_ADDR_MAX_LEN + 1] = {0};

Qth_configGetServer(url, ip);
```

---

<span id="Qth_configSetLifetime"></span>

## <span style="color:#A52A2A">**Qth_configSetLifetime**</span>

该函数用于设置 MQTT 连接的生命周期。

**函数原型**

```c
oprt_ret Qth_configSetLifetime(quint32_t lifetime);
```

**参数说明**

- **输入参数**

  - **quint32_t** **`lifetime`**：MQTT 连接的生命周期，范围是 1-600，默认值是 120，单位为秒。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
Qth_configSetLifetime(120);
```

---

<span id="Qth_configGetLifetime"></span>

## <span style="color:#A52A2A">**Qth_configGetLifetime**</span>

该函数用于获取 MQTT 连接的生命周期。

**函数原型**

```c
oprt_ret Qth_configGetLifetime(quint32_t *lifetime);
```

**参数说明**

- **输入参数**
  - 无
- **输出参数**

  - **quint32_t \*** **`lifetime`**：MQTT 连接的生命周期，单位为秒。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
quint32_t lifetime = 0;

Qth_configGetLifetime(&lifetime);
```

---

<span id="Qth_configSetEventCb"></span>

## <span style="color:#A52A2A">**Qth_configSetEventCb**</span>

该函数用于设置用户事件回调。

**函数原型**

```c
oprt_ret Qth_configSetEventCb(Qth_eventCb_t eventlist);
```

**参数说明**

- **输入参数**

  - **Qth_eventCb_t** **`eventlist`**：用户事件回调函数。
    - **Qth_devEventCb_f** **`devEventCb`**：设备事件回调函数。
      - **函数原型**
        ```c
        void (*Qth_devEventCb_f)(Qth_devEvent_e event, oprt_ret result);
        ```
      - **输入参数**
        - **Qth_devEvent_e** **`event`**：事件类型
          | 取值                       | 描述               |
          | -------------------------- | ------------------ |
          | QTH_DEV_EVENT_WIFI_CONFIG  | 设备网络配置事件   |
          | QTH_DEV_EVENT_WIFI_CONNECT | 设备连接路由器事件 |
          | QTH_DEV_EVENT_DMP_CONNECT  | 设备连 IoT平台事件 |
          | QTH_DEV_EVENT_RESET        | 设备重置事件       |
          | QTH_DEV_EVENT_REMOVE       | 设备移除事件       |
          | QTH_DEV_EVENT_SLIENT       | 设备静默事件       |
        - **oprt_ret** **`result`**：事件码，请参考 [错误码列表](#ERROR_CODE)。
    - **Qth_ttlvRecvCb_f** **`ttlvRecvCb`**：ttlv 数据接收回调函数。
      - **函数原型**
        ```c
        void (*Qth_ttlvRecvCb_f)(void *ttlvHead);
        ```
      - **输入参数**
        - **void \*** **`ttlvHead`**：物模型数据，TTLV 格式。
    - **Qth_ttlvReqCb_f** **`ttlvReqCb`**：ttlv 数据请求回调函数。
      - **函数原型**
        ```c
        void *(*Qth_ttlvReqCb_f)(quint16_t id[], quint32_t idNum);
        ```
      - **输入参数**
        - **quint16_t** **`id`**：读取的物模型 ID 数组。
        - **quint32_t** **`idNum`**：读取的物模型 ID 数目。
    - **Qth_transRecvCb_f** **`transRecvCb`**：透传数据接收回调函数。
      - **函数原型**
        ```c
        void (*Qth_transRecvCb_f)(quint8_t *value, quint32_t valLen);
        ```
      - **输入参数**
        - **quint8_t \*** **`value`**：IoT平台下发的透传数据内容。
        - **quint32_t** **`valLen`**：IoT平台下发的透传数据长度。
    - **Qth_otaEventCb_t** **`otaEventCb`**：OTA 相关事件回调函数。
      - **Qth_otaPlanCb_f** **`planCb`**：OTA 计划下发回调函数(旧)，使用返回值进行 OTA 计划确认。
        - **函数原型**
          ```c
          qbool (*Qth_otaPlanCb_f)(Qth_otaPlan_t *planList, quint16_t count);
          ```
        - **输入参数**
          - **Qth_otaPlan_t \*** **`planList`**：IoT平台下发的 OTA 组件升级计划。
          - **quint16_t** **`count`**：IoT平台下发的 OTA 组件数目。
        - **返回值**
          - 接受：返回 `TRUE`。
          - 拒绝：返回 `FALSE`。
      - **Qth_otaPlanExCb_f** **`planExCb`**：OTA 计划下发回调函数(新)，需要使用 Qth_otaPlanConfirm 进行 OTA 计划确认。
        - **函数原型**
          ```c
          void (*Qth_otaPlanExCb_f)(Qth_otaPlan_t *planList, quint16_t count);
          ```
        - **输入参数**
          - **Qth_otaPlan_t \*** **`planList`**：IoT平台下发的 OTA 组件升级计划。
          - **quint16_t** **`count`**：IoT平台下发的 OTA 组件数目。
      - **Qth_otaDownloadCb_f** **`downloadCb`**：OTA 下载进度回调函数。
        - **函数原型**
          ```c
          void (*Qth_otaDownloadCb_f)(char *identity, quint8_t percent);
          ```
        - **输入参数**
          - **char \*** **`identity`**：OTA 组件标识。
          - **quint8_t** **`percent`**：OTA 固件下载进度，范围：0-100。
      - **Qth_otaResultCb_f** **`resultCb`**：OTA 升级结果回调函数。
        - **函数原型**
          ```c
          void (*Qth_otaResultCb_f)(char *identity, qbool result);
          ```
        - **输入参数**
          - **char \*** **`identity`**：OTA 组件标识。
          - **qbool** **`result`**：OTA 更新结果。
      - **Qth_sotaInfoCb_f** **`sotaInfoCb`**：SOTA 固件信息回调函数。
        - **函数原型**
          ```c
          qbool (*Qth_sotaInfoCb_f)(char *identity, Qth_otaInfo_t *info, Qth_otaDownType_e *type);
          ```
        - **输入参数**
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
      - **Qth_sotaFileCb_f** **`sotaFileCb`**：SOTA 文件下发回调函数。
        - **函数原型**
          ```c
          qbool (*Qth_sotaFileCb_f)(char *identity, quint32_t offset, quint8_t *data, quint32_t dataLen);
          ```
        - **输入参数**
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
void devEventCb(Qth_devEvent_e event, oprt_ret result)
{
    /* do something */
}
void ttlvRecvCb(void *ttlvHead)
{
    /* do something */
}
void *ttlvReqCb(quint16_t id[], quint32_t idNum)
{
    /* do something */
}
void transRecvCb(quint8_t *value, quint32_t valLen)
{
    /* do something */
}
qbool otaPlanCb(Qth_otaPlan_t *planList, quint16_t count)
{
    /* do something */
}
void otaDownloadCb(char *identity, quint8_t percent)
{
    /* do something */
}
void otaResultCb(char *identity, qbool result)
{
    /* do something */
}
qbool sotaInfoCb(char *identity, Qth_otaInfo_t *info, Qth_otaDownType_e *type)
{
    /* do something */
}
qbool sotaFileCb(char *identity, quint32_t offset, quint8_t *data, quint32_t dataLen)
{
    /* do something */
}
otaCb.planCb = otaPlanCb;
otaCb.downloadCb = otaDownloadCb;
otaCb.resultCb = otaResultCb;
otaCb.sotaInfoCb = sotaInfoCb;
otaCb.sotaFileCb = sotaFileCb;
event_cb.devEventCb = devEventCb;
event_cb.ttlvRecvCb = ttlvRecvCb;
event_cb.ttlvReqCb = ttlvReqCb;
event_cb.transRecvCb = transRecvCb;
event_cb.otaEventCb = otaCb;
Qth_configSetEventCb(event_cb);
```

---

<span id="Qth_configGetEventCb"></span>

## <span style="color:#A52A2A">**Qth_configGetEventCb**</span>

该函数用于获取用户事件回调。

**函数原型**

```c
oprt_ret Qth_configGetEventCb(Qth_eventCb_t *cb);
```

**参数说明**

- **输入参数**
  - 无
- **输出参数**

  - **Qth_eventCb_t \*** **`cb`**：用户事件回调函数。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
Qth_eventCb_t userEventCb = {0};
Qth_configGetEventCb(&userEventCb);
```

---

<span id="Qth_configSetModuleVer"></span>

## <span style="color:#A52A2A">**Qth_configSetModuleVer**</span>

该函数用于设置模组版本。

**函数原型**

```c
oprt_ret Qth_configSetModuleVer(char *version);
```

**参数说明**

- **输入参数**

  - **char \*** **`version`**：版本号，用于 FOTA 升级。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
Qth_configSetModuleVer("0.0.1");
```

---

<span id="Qth_configGetModuleVer"></span>

## <span style="color:#A52A2A">**Qth_configGetModuleVer**</span>

该函数用于获取模组版本。

**函数原型**

```c
oprt_ret Qth_configGetModuleVer(char **version);
```

**参数说明**

- **输出参数**

  - **char \*** **`version`**：版本。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
char *moduleVer = NULL;

Qth_configGetModuleVer(&moduleVer);
```

---

<span id="Qth_configSetMcuVer"></span>

## <span style="color:#A52A2A">**Qth_configSetMcuVer**</span>

该函数用于设置 MCU 版本。

**函数原型**

```c
oprt_ret Qth_configSetMcuVer(Qth_mcuInfo_t *mcuList, quint16_t count);
```

**参数说明**

- **输入参数**

  - **Qth_mcuInfo_t \*** **`mcuList`**：MCU 列表。
    - **char \*** **`identity`**：MCU 组件标识。
    - **char \*** **`version`**：MCU 组件版本。
  - **quint16_t** **`count`**：MCU 数量。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
Qth_mcuInfo_t mcuList[2] = {0};
Quos_strcpy(mcuList[0].identity, "MCU1");
Quos_strcpy(mcuList[0].version, "0.0.5");
Quos_strcpy(mcuList[1].identity, "MCU2");
Quos_strcpy(mcuList[1].version, "0.0.6");
Qth_configSetMcuVer(mcuList, sizeof(mcuList) / sizeof(Qth_mcuInfo_t));
```

---

<span id="Qth_configGetMcuVer"></span>

## <span style="color:#A52A2A">**Qth_configGetMcuVer**</span>

该函数用于获取 MCU 版本。

**函数原型**

```c
oprt_ret Qth_configGetMcuVer(Qth_mcuInfo_t **mcuList, quint16_t *count, char **mcuVer);
```

**参数说明**

- **输出参数**

  - **Qth_mcuInfo_t \*** **`mcuList`**：MCU 列表。
    - **char \*** **`identity`**：MCU 组件标识。
    - **char \*** **`version`**：MCU 组件版本。
  - **quint16_t \*** **`count`**：MCU 数量。
  - **char \*** **`mcuVer`**：MCU 版本，字符串形式。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
Qth_mcuInfo_t *mcuList = NULL;
quint16_t mcuCount = 0;
char *mcuVer = NULL;

Qth_configGetMcuVer(&mcuList, &mcuCount, &mcuVer);
```

---

<span id="Qth_configSetWifiInfo"></span>

## <span style="color:#A52A2A">**Qth_configSetWifiInfo**</span>

该函数用于设置 WiFi 信息。

**函数原型**

```c
oprt_ret Qth_configSetWifiInfo(const char *ssid, const char *pwd);
```

**参数说明**

- **输入参数**

  - **const char \*** **`ssid`**：WiFi SSID。
  - **const char \*** **`pwd`**：WiFi 密码，若密码为空，则使用""空字符串。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
Qth_configSetWifiInfo("xxxxxxxx", "xxxxxxxxxxxx");
```

---

<span id="Qth_configGetWifiInfo"></span>

## <span style="color:#A52A2A">**Qth_configGetWifiInfo**</span>

该函数用于获取 WiFi 信息。

**函数原型**

```c
oprt_ret Qth_configGetWifiInfo(char *ssid, char *pwd);
```

**参数说明**

- **输出参数**

  - **char \*** **`ssid`**：WiFi SSID。
  - **char \*** **`pwd`**：WiFi 密码。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
char ssid[QTH_WIFI_SSID_MAXSIZE + 1] = {0};
char pwd[QTH_WIFI_PWD_MAXSIZE + 1] = {0};

Qth_configGetWifiInfo(ssid, pwd);
```

---

<span id="Qth_configClearWifiInfo"></span>

## <span style="color:#A52A2A">**Qth_configClearWifiInfo**</span>

该函数用于清除 WiFi 信息。

**函数原型**

```c
oprt_ret Qth_configClearWifiInfo();
```

**参数说明**

- **输入参数**

  - 无。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
Qth_configClearWifiInfo();
```

---

<span id="Qth_configSetNetcfgMode"></span>

## <span style="color:#A52A2A">**Qth_configSetNetcfgMode**</span>

该函数用于设置 WiFi 配置模式信息。

**函数原型**

```c
oprt_ret Qth_configSetNetcfgMode(qbool enable, quint16_t timeout);
```

**参数说明**

- **输入参数**

  - **qbool** **`enable`**：如果没有保存 WiFi 信息，则启动网络配置。
  - **quint16_t** **`timeout`**：网络配置超时时间，范围为 180-600 或 0xffff（永久），默认值为 300，单位：秒。当超时值设置为 0xffff（65535）时，设备将一直保持可配置模式，直到网络配置成功。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
Qth_configSetNetcfgMode(TRUE, 300);
```

---

<span id="Qth_configGetNetcfgMode"></span>

## <span style="color:#A52A2A">**Qth_configGetNetcfgMode**</span>

该函数用于获取 WiFi 配置模式信息。

**函数原型**

```c
oprt_ret Qth_configGetNetcfgMode(qbool *enable, quint16_t *timeout);
```

**参数说明**

- **输出参数**

  - **qbool \*** **`enable`**：如果没有保存 WiFi 信息，则启动网络配置。
  - **quint16_t \*** **`timeout`**：网络配置超时时间，范围为 180-600，单位：秒。

- **返回值**
  - 成功：返回 `OPRT_OK`。
  - 失败：返回其它值，请参考 [错误码列表](#ERROR_CODE)。

**调用示例**

```c
qbool enable = FALSE;
quint16_t timeout = 0;

Qth_configGetNetcfgMode(&enable, &timeout);
```

---

<span id="ERROR_CODE"> </span>

## **错误码列表**

| 枚举值                                | 十六进制 | 十进制 | 描述                  |
| ------------------------------------- | -------- | ------ | --------------------- |
| OPRT_OK                               | -0x0000  | -0     | 执行成功              |
| OPRT_COM_ERROR                        | -0x0001  | -1     | 通用错误              |
| OPRT_INVALID_PARM                     | -0x0002  | -2     | 无效的入参            |
| OPRT_MALLOC_FAILED                    | -0x0003  | -3     | 内存分配失败          |
| OPRT_NOT_SUPPORTED                    | -0x0004  | -4     | 不支持                |
| OPRT_NOT_FOUND                        | -0x0005  | -5     | 没有找到对象          |
| OPRT_INDEX_OUT_OF_BOUND               | -0x0006  | -6     | 索引越界              |
| OPRT_EXCEED_UPPER_LIMIT               | -0x0007  | -7     | 超过上限              |
| OPRT_NOT_EXIST                        | -0x0008  | -8     | 不存在                |
| OPRT_QTH_CONFIG_READ_FAILED           | -0x1000  | -4096  | 读配置失败            |
| OPRT_QTH_CONFIG_WRITE_FAILED          | -0x1001  | -4097  | 写配置失败            |
| OPRT_QTH_CONFIG_SET_DEVINFO_FAILED    | -0x1002  | -4098  | 设置设备信息失败      |
| OPRT_QTH_CONFIG_APPVER_STRDUMP_FAILED | -0x1003  | -4099  | 设置 APP Version 失败 |
| OPRT_QTH_CONFIG_DK_FORMT_FAILED       | -0x1004  | -4100  | 设置 DK 数据格式失败  |
| OPRT_QTH_CONFIG_MAC_GET_FAILED        | -0x1005  | -4101  | 设备 MAC 获取失败     |
