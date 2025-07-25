# kernel ttlv 相关接口

## **API 列表**

|                        函数                         |             说明             |
| :-------------------------------------------------: | :--------------------------: |
|     [Quos_ttlvAddIdBool()](#Quos_ttlvAddIdBool)     |      添加节点数据 bool       |
|      [Quos_ttlvAddIdInt()](#Quos_ttlvAddIdInt)      |       添加节点数据 int       |
|    [Quos_ttlvAddIdFloat()](#Quos_ttlvAddIdFloat)    |      添加节点数据 float      |
|  [Quos_ttlvAddIdFloatEx()](#Quos_ttlvAddIdFloatEx)  |   添加节点数据 float 扩展    |
|      [Quos_ttlvAddIdRaw()](#Quos_ttlvAddIdRaw)      |       添加节点数据 raw       |
|     [Quos_ttlvAddIdText()](#Quos_ttlvAddIdText)     |      添加节点数据 text       |
|   [Quos_ttlvAddIdStruct()](#Quos_ttlvAddIdStruct)   |     添加节点数据 struct      |
|   [Quos_ttlvGetNodeType()](#Quos_ttlvGetNodeType)   |       获取节点数据类型       |
|   [Quos_ttlvGetNodeBool()](#Quos_ttlvGetNodeBool)   |      获取节点数据 bool       |
|    [Quos_ttlvGetNodeInt()](#Quos_ttlvGetNodeInt)    |       获取节点数据 int       |
|  [Quos_ttlvGetNodeFloat()](#Quos_ttlvGetNodeFloat)  |      获取节点数据 float      |
|   [Quos_ttlvGetNodeText()](#Quos_ttlvGetNodeText)   |      获取节点数据 text       |
| [Quos_ttlvGetNodeStruct()](#Quos_ttlvGetNodeStruct) |     获取节点数据 struct      |
|    [Quos_ttlvGetNodeRaw()](#Quos_ttlvGetNodeRaw)    |       获取节点数据 raw       |
|     [Quos_ttlvGetIdType()](#Quos_ttlvGetIdType)     |   获取指定 ID 节点数据类型   |
|     [Quos_ttlvGetIdBool()](#Quos_ttlvGetIdBool)     |  获取指定 ID 节点数据 bool   |
|      [Quos_ttlvGetIdInt()](#Quos_ttlvGetIdInt)      |   获取指定 ID 节点数据 int   |
|    [Quos_ttlvGetIdFloat()](#Quos_ttlvGetIdFloat)    |  获取指定 ID 节点数据 float  |
|     [Quos_ttlvGetIdText()](#Quos_ttlvGetIdText)     |  获取指定 ID 节点数据 text   |
|   [Quos_ttlvGetIdStruct()](#Quos_ttlvGetIdStruct)   | 获取指定 ID 节点数据 struct  |
|      [Quos_ttlvGetIdRaw()](#Quos_ttlvGetIdRaw)      |   获取指定 ID 节点数据 raw   |
|      [Quos_ttlvGetCount()](#Quos_ttlvGetCount)      |         获取节点个数         |
|       [Quos_ttlvGetNode()](#Quos_ttlvGetNode)       |         获取节点指针         |
|        [Quos_ttlvRemove()](#Quos_ttlvRemove)        |           删除节点           |
|          [Quos_ttlvFree()](#Quos_ttlvFree)          |          释放 ttlv           |
|      [Quos_ttlvUnformat()](#Quos_ttlvUnformat)      |    将字节流转成 ttlv 节点    |
|        [Quos_ttlvFormat()](#Quos_ttlvFormat)        |    将 ttlv 节点转成字节流    |
|     [Quos_ttlvFormatLen()](#Quos_ttlvFormatLen)     | 将 ttlv 节点转成字节流的长度 |
|    [Quos_ttlvHeadPrintf()](#Quos_ttlvHeadPrintf)    |        打印 ttlv 内容        |
|         [Quos_json2Ttlv()](#Quos_json2Ttlv)         |  将 json 对象转成 ttlv 节点  |
|         [Quos_ttlv2Json()](#Quos_ttlv2Json)         |  将 ttlv 节点转成 json 对象  |

## **API 详情**

<span id="Quos_ttlvAddIdBool"></span>

## <span style="color:#A52A2A">**Quos_ttlvAddIdBool**</span>

添加节点数据 bool。

**函数原型**

```c
qbool Quos_ttlvAddIdBool(void **ttlvHead, quint16_t id, qbool value);
```

**参数说明**

- **输入参数**

  - **void \*\*** **`ttlvHead`**：ttlv 节点。
  - **quint16_t** **`id`**：节点 id。
  - **qbool** **`value`**：节点 value。

- **输出参数**

  - 无。

- **返回值**
  - TRUE:执行成功，FALSE:执行失败。

**调用示例**

```c
void *ttlvHead = NULL;
Quos_ttlvAddIdBool(&ttlvHead, 1, TRUE);
```

---

<span id="Quos_ttlvAddIdInt"></span>

## <span style="color:#A52A2A">**Quos_ttlvAddIdInt**</span>

添加节点数据 int。

**函数原型**

```c
qbool Quos_ttlvAddIdInt(void **ttlvHead, quint16_t id, qint64_t num);
```

**参数说明**

- **输入参数**

  - **void \*\*** **`ttlvHead`**：ttlv 节点。
  - **quint16_t** **`id`**：节点 id。
  - **qint64_t** **`num`**：节点 value。

- **输出参数**

  - 无。

- **返回值**
  - TRUE:执行成功，FALSE:执行失败。

**调用示例**

```c
void *ttlvHead = NULL;
Quos_ttlvAddIdInt(&ttlvHead, 2, 23);
```

---

<span id="Quos_ttlvAddIdFloat"></span>

## <span style="color:#A52A2A">**Quos_ttlvAddIdFloat**</span>

添加节点数据 float。

**函数原型**

```c
qbool Quos_ttlvAddIdFloat(void **ttlvHead, quint16_t id, double num);
```

**参数说明**

- **输入参数**

  - **void \*\*** **`ttlvHead`**：ttlv 节点。
  - **quint16_t** **`id`**：节点 id。
  - **double** **`num`**：节点 value。

- **输出参数**

  - 无。

- **返回值**
  - TRUE:执行成功，FALSE:执行失败。

**调用示例**

```c
void *ttlvHead = NULL;
Quos_ttlvAddIdFloat(&ttlvHead, 4, 18.5);
```

---

<span id="Quos_ttlvAddIdFloatEx"></span>

## <span style="color:#A52A2A">**Quos_ttlvAddIdFloatEx**</span>

添加节点数据 float 扩展。

**函数原型**

```c
qbool Quos_ttlvAddIdFloatEx(void **ttlvHead, quint16_t id, double value, quint8_t precision);
```

**参数说明**

- **输入参数**

  - **void \*\*** **`ttlvHead`**：ttlv 节点。
  - **quint16_t** **`id`**：节点 id。
  - **double** **`value`**：节点 value。
  - **quint8_t** **`precision`**：float 精度，即小数点位数。

- **输出参数**

  - 无。

- **返回值**
  - TRUE:执行成功，FALSE:执行失败。

**调用示例**

```c
void *ttlvHead = NULL;
Quos_ttlvAddIdFloatEx(&ttlvHead, 4, 18.5, 1);
```

---

<span id="Quos_ttlvAddIdRaw"></span>

## <span style="color:#A52A2A">**Quos_ttlvAddIdRaw**</span>

添加节点数据 raw。

**函数原型**

```c
qbool Quos_ttlvAddIdRaw(void **ttlvHead, quint16_t id, const quint8_t *data, quint32_t len);
```

**参数说明**

- **输入参数**

  - **void \*\*** **`ttlvHead`**：ttlv 节点。
  - **quint16_t** **`id`**：节点 id。
  - **quint8_t \*** **`data`**：节点 value。
  - **quint32_t \*** **`len`**：节点 value len。

- **输出参数**

  - 无。

- **返回值**
  - TRUE:执行成功，FALSE:执行失败。

**调用示例**

```c
void *ttlvHead = NULL;
quint8_t buf[5] = {'a', 'b', 'c', 'd', 'e'};
Quos_ttlvAddIdRaw(&ttlvHead, 5, buf, sizeof(buf));
```

---

<span id="Quos_ttlvAddIdText"></span>

## <span style="color:#A52A2A">**Quos_ttlvAddIdText**</span>

添加节点数据 text。

**函数原型**

```c
qbool Quos_ttlvAddIdText(void **ttlvHead, quint16_t id, const char *data);
```

**参数说明**

- **输入参数**

  - **void \*\*** **`ttlvHead`**：ttlv 节点。
  - **quint16_t** **`id`**：节点 id。
  - **char \*** **`data`**：节点 value。

- **输出参数**

  - 无。

- **返回值**
  - TRUE:执行成功，FALSE:执行失败。

**调用示例**

```c
void *ttlvHead = NULL;
Quos_ttlvAddIdText(&ttlvHead, 3, "hello world");
```

---

<span id="Quos_ttlvAddIdStruct"></span>

## <span style="color:#A52A2A">**Quos_ttlvAddIdStruct**</span>

添加节点数据 struct。

**函数原型**

```c
qbool Quos_ttlvAddIdStruct(void **ttlvHead, quint16_t id, void *vStruct);
```

**参数说明**

- **输入参数**

  - **void \*\*** **`ttlvHead`**：ttlv 节点。
  - **quint16_t** **`id`**：节点 id。
  - **void \*** **`vStruct`**：节点 value。

- **输出参数**

  - 无。

- **返回值**
  - TRUE:执行成功，FALSE:执行失败。

**调用示例**

```c
void *ttlvHead = NULL;
void *ttlvArrayHead = NULL;
Quos_ttlvAddIdInt(&ttlvArrayHead, 1, 11);
Quos_ttlvAddIdBool(&ttlvArrayHead, 2, FALSE);
Quos_ttlvAddIdFloat(&ttlvArrayHead, 3, 5.7);
Quos_ttlvAddIdStruct(&ttlvHead, 6, ttlvArrayHead);
```

---

<span id="Quos_ttlvGetNodeType"></span>

## <span style="color:#A52A2A">**Quos_ttlvGetNodeType**</span>

获取节点数据类型。

**函数原型**

```c
qbool Quos_ttlvGetNodeType(const void *ttlvNode, Quos_dpDataType_e *type);
```

**参数说明**

- **输入参数**

  - **void \*\*** **`ttlvNode`**：ttlv 节点。

- **输出参数**

  - **Quos_dpDataType_e** **`type`**：节点数据类型。
  - 具体取值见下表：

    | 取值                    | 描述            |
    | ----------------------- | --------------- |
    | QUOS_DPDATA_TYPE_BOOL   | 数据类型 bool   |
    | QUOS_DPDATA_TYPE_INT    | 数据类型 int    |
    | QUOS_DPDATA_TYPE_FLOAT  | 数据类型 float  |
    | QUOS_DPDATA_TYPE_TEXT   | 数据类型 text   |
    | QUOS_DPDATA_TYPE_STRUCT | 数据类型 struct |
    | QUOS_DPDATA_TYPE_RAW    | 数据类型 raw    |

- **返回值**
  - TRUE:执行成功，FALSE:执行失败。

**调用示例**

```c
void *ttlvHead = NULL;
Quos_dpDataType_e type = 0;
Quos_ttlvAddIdText(&ttlvHead, 3, "hello world");
Quos_ttlvGetNodeType(ttlvHead, &type);
```

---

<span id="Quos_ttlvGetNodeBool"></span>

## <span style="color:#A52A2A">**Quos_ttlvGetNodeBool**</span>

获取节点数据 bool。

**函数原型**

```c
qbool Quos_ttlvGetNodeBool(const void *ttlvNode, qbool *value);
```

**参数说明**

- **输入参数**

  - **void \*\*** **`ttlvNode`**：ttlv 节点。

- **输出参数**

  - **qbool** **`value`**：节点数据。

- **返回值**
  - TRUE:执行成功，FALSE:执行失败。

**调用示例**

```c
void *ttlvHead = NULL;
qbool val = 0;
Quos_ttlvAddIdBool(&ttlvHead, 1, TRUE);
Quos_ttlvGetNodeBool(ttlvHead, &val);
```

---

<span id="Quos_ttlvGetNodeInt"></span>

## <span style="color:#A52A2A">**Quos_ttlvGetNodeInt**</span>

获取节点数据 int。

**函数原型**

```c
qbool Quos_ttlvGetNodeInt(const void *ttlvNode, qint64_t *value);
```

**参数说明**

- **输入参数**

  - **void \*\*** **`ttlvNode`**：ttlv 节点。

- **输出参数**

  - **qint64_t** **`value`**：节点数据。

- **返回值**
  - TRUE:执行成功，FALSE:执行失败。

**调用示例**

```c
void *ttlvHead = NULL;
qint64_t val = 0;
Quos_ttlvAddIdInt(&ttlvHead, 2, 23);
Quos_ttlvGetNodeInt(ttlvHead, &val);
```

---

<span id="Quos_ttlvGetNodeFloat"></span>

## <span style="color:#A52A2A">**Quos_ttlvGetNodeFloat**</span>

获取节点数据 float。

**函数原型**

```c
qbool Quos_ttlvGetNodeFloat(const void *ttlvNode, double *value);
```

**参数说明**

- **输入参数**

  - **void \*\*** **`ttlvNode`**：ttlv 节点。

- **输出参数**

  - **double** **`value`**：节点数据。

- **返回值**
  - TRUE:执行成功，FALSE:执行失败。

**调用示例**

```c
void *ttlvHead = NULL;
double val = 0.0;
Quos_ttlvAddIdFloat(&ttlvHead, 4, 18.5);
Quos_ttlvGetNodeFloat(ttlvHead, &val);
```

---

<span id="Quos_ttlvGetNodeText"></span>

## <span style="color:#A52A2A">**Quos_ttlvGetNodeText**</span>

获取节点数据 text。

**函数原型**

```c
quint32_t Quos_ttlvGetNodeText(const void *ttlvNode, char **value)
```

**参数说明**

- **输入参数**

  - **void \*\*** **`ttlvNode`**：ttlv 节点。

- **输出参数**

  - **quint8_t \*\*** **`value`**：ttlv 数据。

- **返回值**
  - 节点数据长度。

**调用示例**

```c
void *ttlvHead = NULL;
Quos_ttlvAddIdText(&ttlvHead, 3, "hello world");
char *ch = NULL;
Quos_ttlvGetNodeText(ttlvHead, &ch);
```

---

<span id="Quos_ttlvGetNodeStruct"></span>

## <span style="color:#A52A2A">**Quos_ttlvGetNodeStruct**</span>

获取节点数据 struct。

**函数原型**

```c
void *Quos_ttlvGetNodeStruct(const void *ttlvNode);
```

**参数说明**

- **输入参数**

  - **void \*\*** **`ttlvNode`**：ttlv 节点。

- **输出参数**

  - 无。

- **返回值**
  - 节点数据。

**调用示例**

```c
void *ttlvHead = NULL;
void *ttlvArrayHead = NULL;
Quos_ttlvAddIdInt(&ttlvArrayHead, 1, 11);
Quos_ttlvAddIdBool(&ttlvArrayHead, 2, FALSE);
Quos_ttlvAddIdFloat(&ttlvArrayHead, 3, 5.7);
Quos_ttlvAddIdStruct(&ttlvHead, 6, ttlvArrayHead);
void *st = Quos_ttlvGetNodeStruct(ttlvHead);
```

---

<span id="Quos_ttlvGetNodeRaw"></span>

## <span style="color:#A52A2A">**Quos_ttlvGetNodeRaw**</span>

获取节点数据 raw。

**函数原型**

```c
quint32_t Quos_ttlvGetNodeRaw(const void *ttlvNode, quint8_t **value);
```

**参数说明**

- **输入参数**

  - **void \*\*** **`ttlvNode`**：ttlv 节点。

- **输出参数**

  - **quint8_t \*\*** **`value`**：ttlv 数据。

- **返回值**
  - 节点数据长度。

**调用示例**

```c
void *ttlvHead = NULL;
quint8_t *value = NULL;
Quos_ttlvAddIdRaw(&ttlvHead, 5, buf, sizeof(buf));
quint32_t len = Quos_ttlvGetNodeRaw(ttlvHead, &value);
```

---

<span id="Quos_ttlvGetIdType"></span>

## <span style="color:#A52A2A">**Quos_ttlvGetIdType**</span>

获取指定 ID 节点数据类型。

**函数原型**

```c
qbool Quos_ttlvGetIdType(const void *ttlvHead, quint16_t id, Quos_dpDataType_e *type);
```

**参数说明**

- **输入参数**

  - **void \*\*** **`ttlvNode`**：ttlv 节点。
  - **quint16_t** **`id`**：ttlv id。

- **输出参数**

  - **Quos_dpDataType_e \*** **`type`**：ttlv 数据类型。

- **返回值**
  - TRUE:执行成功，FALSE:执行失败。

**调用示例**

```c
void *ttlvHead = NULL;
Quos_dpDataType_e type = 0;
Quos_ttlvAddIdText(&ttlvHead, 3, "hello world");
Quos_ttlvGetIdType(ttlvHead, 3, &type);
```

---

<span id="Quos_ttlvGetIdBool"></span>

## <span style="color:#A52A2A">**Quos_ttlvGetIdBool**</span>

获取指定 ID 节点数据 bool。

**函数原型**

```c
qbool Quos_ttlvGetIdBool(const void *ttlvHead, quint16_t id, qbool *value);
```

**参数说明**

- **输入参数**

  - **void \*\*** **`ttlvNode`**：ttlv 节点。
  - **quint16_t** **`id`**：ttlv id。

- **输出参数**

  - **qbool \*** **`value`**：ttlv 数据。

- **返回值**
  - TRUE:执行成功，FALSE:执行失败。

**调用示例**

```c
void *ttlvHead = NULL;
qbool value = 0;
Quos_ttlvAddIdBool(&ttlvHead, 1, TRUE);
Quos_ttlvGetIdBool(ttlvHead, 1, &value);
```

---

<span id="Quos_ttlvGetIdInt"></span>

## <span style="color:#A52A2A">**Quos_ttlvGetIdInt**</span>

获取指定 ID 节点数据 int。

**函数原型**

```c
qbool Quos_ttlvGetIdInt(const void *ttlvHead, quint16_t id, qint64_t *value);
```

**参数说明**

- **输入参数**

  - **void \*\*** **`ttlvNode`**：ttlv 节点。
  - **quint16_t** **`id`**：ttlv id。

- **输出参数**

  - **qint64_t \*** **`value`**：ttlv 数据。

- **返回值**
  - TRUE:执行成功，FALSE:执行失败。

**调用示例**

```c
void *ttlvHead = NULL;
qint64_t value = 0;
Quos_ttlvAddIdInt(&ttlvHead, 2, 23);
Quos_ttlvGetIdInt(ttlvHead, 2, &value);
```

---

<span id="Quos_ttlvGetIdFloat"></span>

## <span style="color:#A52A2A">**Quos_ttlvGetIdFloat**</span>

获取指定 ID 节点数据 float。

**函数原型**

```c
qbool Quos_ttlvGetIdFloat(const void *ttlvHead, quint16_t id, double *value);
```

**参数说明**

- **输入参数**

  - **void \*\*** **`ttlvNode`**：ttlv 节点。
  - **quint16_t** **`id`**：ttlv id。

- **输出参数**

  - **double \*** **`value`**：ttlv 数据。

- **返回值**
  - TRUE:执行成功，FALSE:执行失败。

**调用示例**

```c
void *ttlvHead = NULL;
double value = 0.0;
Quos_ttlvAddIdFloat(&ttlvHead, 4, 18.5);
Quos_ttlvGetIdFloat(ttlvHead, 4, &value);
```

---

<span id="Quos_ttlvGetIdText"></span>

## <span style="color:#A52A2A">**Quos_ttlvGetIdText**</span>

获取指定 ID 节点数据 text。

**函数原型**

```c
quint32_t Quos_ttlvGetIdText(const void *ttlvHead, quint16_t id, char **value);
```

**参数说明**

- **输入参数**

  - **void \*\*** **`ttlvNode`**：ttlv 节点。
  - **quint16_t** **`id`**：ttlv id。

- **输出参数**

  - **quint8_t \*\*** **`value`**：ttlv 数据。

- **返回值**
  - 数据长度。

**调用示例**

```c
void *ttlvHead = NULL;
Quos_ttlvAddIdText(&ttlvHead, 3, "hello world");
char *ch = NULL;
Quos_ttlvGetIdText(ttlvHead, 3, &ch);
```

---

<span id="Quos_ttlvGetIdStruct"></span>

## <span style="color:#A52A2A">**Quos_ttlvGetIdStruct**</span>

获取指定 ID 节点数据 struct。

**函数原型**

```c
void *Quos_ttlvGetIdStruct(const void *ttlvHead, quint16_t id);
```

**参数说明**

- **输入参数**

  - **void \*\*** **`ttlvNode`**：ttlv 节点。
  - **quint16_t** **`id`**：ttlv id。

- **输出参数**

  - 无。

- **返回值**
  - ttlv 数据。

**调用示例**

```c
void *ttlvHead = NULL;
void *ttlvArrayHead = NULL;
Quos_ttlvAddIdInt(&ttlvArrayHead, 1, 11);
Quos_ttlvAddIdBool(&ttlvArrayHead, 2, FALSE);
Quos_ttlvAddIdFloat(&ttlvArrayHead, 3, 5.7);
Quos_ttlvAddIdStruct(&ttlvHead, 6, ttlvArrayHead);
void *st = Quos_ttlvGetIdStruct(ttlvHead, 6);
```

---

<span id="Quos_ttlvGetIdRaw"></span>

## <span style="color:#A52A2A">**Quos_ttlvGetIdRaw**</span>

获取指定 ID 节点数据 raw。

**函数原型**

```c
quint32_t Quos_ttlvGetIdRaw(const void *ttlvHead, quint16_t id, quint8_t **value);
```

**参数说明**

- **输入参数**

  - **void \*\*** **`ttlvNode`**：ttlv 节点。
  - **quint16_t** **`id`**：ttlv id。

- **输出参数**

  - **quint8_t \*\*** **`value`**：ttlv 数据。

- **返回值**
  - 数据长度。

**调用示例**

```c
void *ttlvHead = NULL;
quint8_t *value = NULL;
quint8_t buf[5] = {'a', 'b', 'c', 'd', 'e'};
Quos_ttlvAddIdRaw(&ttlvHead, 5, buf, sizeof(buf));
quint32_t len = Quos_ttlvGetIdRaw(ttlvHead, 5, &value);
```

---

<span id="Quos_ttlvGetCount"></span>

## <span style="color:#A52A2A">**Quos_ttlvGetCount**</span>

获取节点个数。

**函数原型**

```c
quint32_t Quos_ttlvGetCount(const void *ttlvHead);
```

**参数说明**

- **输入参数**

  - **void \*\*** **`ttlvHead`**：ttlv 节点。

- **输出参数**

  - 无。

- **返回值**
  - 节点个数。

**调用示例**

```c
void *ttlvHead = NULL;
Quos_ttlvAddIdBool(&ttlvHead, 1, TRUE);
Quos_ttlvAddIdInt(&ttlvHead, 2, 23);
Quos_ttlvAddIdText(&ttlvHead, 3, "hello world");
quint32_t len = Quos_ttlvGetCount(ttlvHead);
```

---

<span id="Quos_ttlvGetNode"></span>

## <span style="color:#A52A2A">**Quos_ttlvGetNode**</span>

获取节点指针。

**函数原型**

```c
void *Quos_ttlvGetNode(const void *ttlvHead, quint16_t index, quint16_t *id, Quos_dpDataType_e *type);
```

**参数说明**

- **输入参数**

  - **void \*\*** **`ttlvHead`**：ttlv 节点。
  - **quint16_t** **`index`**：节点索引。

- **输出参数**

  - **quint16_t \*** **`id`**：节点 id。
  - **Quos_dpDataType_e \*** **`type`**：节点类型。

- **返回值**
  - 节点指针。

**调用示例**

```c
void *ttlvHead = NULL;
quint16_t id = 0;
Quos_dpDataType_e type = 0;
Quos_ttlvAddIdBool(&ttlvHead, 1, TRUE);
void *ptr = Quos_ttlvGetNode(ttlvHead, 0, &id, &type);
```

---

<span id="Quos_ttlvRemove"></span>

## <span style="color:#A52A2A">**Quos_ttlvRemove**</span>

删除节点。

**函数原型**

```c
void Quos_ttlvRemove(void **ttlvHead, quint16_t id);
```

**参数说明**

- **输入参数**

  - **void \*\*** **`ttlvHead`**：ttlv 节点。
  - **quint16_t** **`id`**：节点 id。

- **输出参数**

  - 无。

- **返回值**
  - 无。

**调用示例**

```c
void *ttlvHead = NULL;
Quos_ttlvAddIdBool(&ttlvHead, 1, TRUE);
Quos_ttlvRemove(&ttlvHead, 1);
```

---

<span id="Quos_ttlvFree"></span>

## <span style="color:#A52A2A">**Quos_ttlvFree**</span>

释放节点。

**函数原型**

```c
void Quos_ttlvFree(void **ttlvHead);
```

**参数说明**

- **输入参数**

  - **void \*\*** **`ttlvHead`**：ttlv 节点。

- **输出参数**

  - 无。

- **返回值**
  - 无。

**调用示例**

```c
void *ttlvHead = NULL;
Quos_ttlvAddIdBool(&ttlvHead, 1, TRUE);
Quos_ttlvFree(&ttlvHead);
```

---

<span id="Quos_ttlvUnformat"></span>

## <span style="color:#A52A2A">**Quos_ttlvUnformat**</span>

将字节流转成 ttlv 节点。

**函数原型**

```c
void *Quos_ttlvUnformat(const quint8_t *buffer, quint32_t len);
```

**参数说明**

- **输入参数**

  - **quint8_t \*** **`buffer`**：字节数据。
  - **quint32_t** **`len`**：字节数据长度。

- **输出参数**

  - 无。

- **返回值**
  - ttlv 节点。

**调用示例**

```c
void *ttlvHead = Quos_ttlvUnformat(payload, payloadLen);
```

---

<span id="Quos_ttlvFormat"></span>

## <span style="color:#A52A2A">**Quos_ttlvFormat**</span>

将 ttlv 节点转成字节流。

**函数原型**

```c
quint32_t Quos_ttlvFormat(const void *ttlvHead, quint8_t *retBuf);
```

**参数说明**

- **输入参数**

  - **void \*** **`ttlvHead`**：ttlv 节点。

- **输出参数**

  - **quint8_t** **`retBuf`**：字节数据。

- **返回值**
  - 字节数据长度。

**调用示例**

```c
void *ttlvHead = NULL;
quint8_t buf[128] = {0};
Quos_ttlvAddIdBool(&ttlvHead, 1, TRUE);
quint32_t len = Quos_ttlvFormat(ttlvHead, buf);
```

---

<span id="Quos_ttlvFormatLen"></span>

## <span style="color:#A52A2A">**Quos_ttlvFormatLen**</span>

将 ttlv 节点转成字节流长度。

**函数原型**

```c
quint32_t Quos_ttlvFormatLen(const void *ttlvHead);
```

**参数说明**

- **输入参数**

  - **void \*** **`ttlvHead`**：ttlv 节点。

- **输出参数**

  - 无。

- **返回值**
  - 字节数据长度。

**调用示例**

```c
void *ttlvHead = NULL;
Quos_ttlvAddIdBool(&ttlvHead, 1, TRUE);
quint32_t len = Quos_ttlvFormatLen(ttlvHead);
```

---

<span id="Quos_ttlvHeadPrintf"></span>

## <span style="color:#A52A2A">**Quos_ttlvHeadPrintf**</span>

打印 ttlv 内容。

**函数原型**

```c
void Quos_ttlvHeadPrintf(const void *ttlvHead);
```

**参数说明**

- **输入参数**

  - **void \*** **`ttlvHead`**：ttlv 节点。

- **输出参数**

  - 无。

- **返回值**
  - 无。

**调用示例**

```c
void *ttlvHead = NULL;
Quos_ttlvAddIdBool(&ttlvHead, 1, TRUE);
Quos_ttlvHeadPrintf(ttlvHead);
```

---

<span id="Quos_json2Ttlv"></span>

## <span style="color:#A52A2A">**Quos_json2Ttlv**</span>

json 转 ttlv。

**函数原型**

```c
void *Quos_json2Ttlv(const Quos_cjson_t *json);
```

**参数说明**

- **输入参数**

  - **Quos_cjson_t \*** **`json`**：json 对象。

- **输出参数**

  - 无。

- **返回值**
  - ttlv 节点。

**调用示例**

```c
Quos_cjson_t * js = NULL;
void *ttlvHead = NULL;
js = Quos_cjsonCreateNumber(120);
ttlvHead = Quos_json2Ttlv(js);
```

---

<span id="Quos_ttlv2Json"></span>

## <span style="color:#A52A2A">**Quos_ttlv2Json**</span>

ttlv 转 json。

**函数原型**

```c
Quos_cjson_t *Quos_ttlv2Json(const void *ttlvHead);
```

**参数说明**

- **输入参数**

  - **void \*** **`ttlvHead`**：ttlv 节点。

- **输出参数**

  - 无。

- **返回值**
  - json 对象。

**调用示例**

```c
Quos_cjson_t * js = NULL;
void *ttlvHead = NULL;
Quos_ttlvAddIdBool(&ttlvHead, 1, TRUE);
js = Quos_ttlv2Json(ttlvHead);
```

---

<span id="ERROR_CODE"> </span>

## **错误码列表**

| 枚举值  | 十六进制 | 十进制 | 描述     |
| ------- | -------- | ------ | -------- |
| OPRT_OK | -0x0000  | -0     | 执行成功 |
