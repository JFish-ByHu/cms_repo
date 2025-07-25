# TTLV Data API


## **API Overview**

|                      Function                       |                        Description                        |
| :-------------------------------------------------: | :-------------------------------------------------------: |
|     [Quos_ttlvAddIdBool()](#Quos_ttlvAddIdBool)     |     Adds a boolean data node to the TTLV data table.      |
|      [Quos_ttlvAddIdInt()](#Quos_ttlvAddIdInt)      |     Adds an integer data node to the TTLV data table.     |
|    [Quos_ttlvAddIdFloat()](#Quos_ttlvAddIdFloat)    |      Adds a float data node to the TTLV data table.       |
|  [Quos_ttlvAddIdFloatEx()](#Quos_ttlvAddIdFloatEx)  |  Adds a float-extended data node to the TTLV data table.  |
|      [Quos_ttlvAddIdRaw()](#Quos_ttlvAddIdRaw)      |       Adds a raw data node to the TTLV data table.        |
|     [Quos_ttlvAddIdText()](#Quos_ttlvAddIdText)     |       Adds a text data node to the TTLV data table.       |
|   [Quos_ttlvAddIdStruct()](#Quos_ttlvAddIdStruct)   |    Adds a structure data node to the TTLV data table.     |
|   [Quos_ttlvGetNodeType()](#Quos_ttlvGetNodeType)   |               Gets the data type of a node.               |
|   [Quos_ttlvGetNodeBool()](#Quos_ttlvGetNodeBool)   |              Gets boolean data from a node.               |
|    [Quos_ttlvGetNodeInt()](#Quos_ttlvGetNodeInt)    |              Gets integer data from a node.               |
|  [Quos_ttlvGetNodeFloat()](#Quos_ttlvGetNodeFloat)  |               Gets float data from a node.                |
|   [Quos_ttlvGetNodeText()](#Quos_ttlvGetNodeText)   |                Gets text data from a node.                |
| [Quos_ttlvGetNodeStruct()](#Quos_ttlvGetNodeStruct) |             Gets structure data from a node.              |
|    [Quos_ttlvGetNodeRaw()](#Quos_ttlvGetNodeRaw)    |                Gets raw data from a node.                 |
|     [Quos_ttlvGetIdType()](#Quos_ttlvGetIdType)     |               Gets the data type of a node.               |
|     [Quos_ttlvGetIdBool()](#Quos_ttlvGetIdBool)     |              Gets boolean data from a node.               |
|      [Quos_ttlvGetIdInt()](#Quos_ttlvGetIdInt)      |              Gets integer data from a node.               |
|    [Quos_ttlvGetIdFloat()](#Quos_ttlvGetIdFloat)    |               Gets float data from a node.                |
|     [Quos_ttlvGetIdText()](#Quos_ttlvGetIdText)     |                Gets text data from a node.                |
|   [Quos_ttlvGetIdStruct()](#Quos_ttlvGetIdStruct)   |             Gets structure data from a node.              |
|      [Quos_ttlvGetIdRaw()](#Quos_ttlvGetIdRaw)      |                Gets raw data from a node.                 |
|      [Quos_ttlvGetCount()](#Quos_ttlvGetCount)      |                 Gets the number of nodes.                 |
|       [Quos_ttlvGetNode()](#Quos_ttlvGetNode)       |                Gets the pointer to a node.                |
|        [Quos_ttlvRemove()](#Quos_ttlvRemove)        |                       Deletes node.                       |
|          [Quos_ttlvFree()](#Quos_ttlvFree)          |            Releases TTLV data table resources.            |
|      [Quos_ttlvUnformat()](#Quos_ttlvUnformat)      |         Converts byte stream to TTLV data table.          |
|        [Quos_ttlvFormat()](#Quos_ttlvFormat)        |          Converts TTLV data to byte stream data.          |
|     [Quos_ttlvFormatLen()](#Quos_ttlvFormatLen)     | Gets the length of byte stream converted from TTLV object |
|    [Quos_ttlvHeadPrintf()](#Quos_ttlvHeadPrintf)    |                Prints the TTLV data table.                |
|         [Quos_json2Ttlv()](#Quos_json2Ttlv)         |             Converts JSON data to TTLV data.              |
|         [Quos_ttlv2Json()](#Quos_ttlv2Json)         |             Converts TTLV data to JSON data.              |

## **API Description**

<span id="Quos_ttlvAddIdBool"></span>

## <span style="color:#A52A2A">__Quos_ttlvAddIdBool__</span>

This function adds a boolean data node to the TTLV data table.

__Prototype__

```c
qbool Quos_ttlvAddIdBool(void **ttlvHead, quint16_t id, qbool value);
```

__Parameter__

* __Input Parameter__
  * __void **__ __`ttlvHead`__: TTLV data table.
  * __quint16_t__ __`id`__: Node ID.
  * __qbool__ __`value`__: Node data.

* __Output Parameter__
  * None

* __Return Value__
  * TRUE: Successful execution
  * FALSE: Failed execution

__Example__

```c
void *ttlvHead = NULL;
Quos_ttlvAddIdBool(&ttlvHead, 1, TRUE);
```
---

<span id="Quos_ttlvAddIdInt"></span>

## <span style="color:#A52A2A">__Quos_ttlvAddIdInt__</span>

This function adds an integer data node to the TTLV data table.

__Prototype__

```c
qbool Quos_ttlvAddIdInt(void **ttlvHead, quint16_t id, qint64_t num);
```

__Parameter__

* __Input Parameter__
  * __void **__ __`ttlvHead`__: TTLV data table.
  * __quint16_t__ __`id`__: Node ID.
  * __qint64_t__ __`num`__: Node data.

* __Output Parameter__
  * None

* __Return Value__
  * TRUE: Successful execution
  * FALSE: Failed execution

__Example__

```c
void *ttlvHead = NULL;
Quos_ttlvAddIdInt(&ttlvHead, 2, 23);
```
---

<span id="Quos_ttlvAddIdFloat"></span>
## <span style="color:#A52A2A">__Quos_ttlvAddIdFloat__</span>

This function adds a float data node to the TTLV data table.

__Prototype__

```c
qbool Quos_ttlvAddIdFloat(void **ttlvHead, quint16_t id, double num);
```

__Parameter__

* __Input Parameter__
  * __void **__ __`ttlvHead`__: TTLV data table.
  * __quint16_t__ __`id`__: Node ID.
  * __double__ __`num`__: Node data.

* __Output Parameter__
  * None

* __Return Value__
  * TRUE: Successful execution
  * FALSE: Failed execution

__Example__

```c
void *ttlvHead = NULL;
Quos_ttlvAddIdFloat(&ttlvHead, 4, 18.5);
```
---

<span id="Quos_ttlvAddIdFloatEx"></span>

## <span style="color:#A52A2A">__Quos_ttlvAddIdFloatEx__</span>

This function adds a float-extended data node to the TTLV data table.

__Prototype__

```c
qbool Quos_ttlvAddIdFloatEx(void **ttlvHead, quint16_t id, double value, quint8_t precision);
```

__Parameter__

* __Input Parameter__
  * __void **__ __`ttlvHead`__: TTLV data table.
  * __quint16_t__ __`id`__: Node ID.
  * __double__ __`value`__: Node data.
  * __quint8_t__ __`precision`__: Precision of the float value, i.e., number of decimal places.

* __Output Parameter__
  * None

* __Return Value__
  * TRUE: Successful execution
  * FALSE: Failed execution

__Example__

```c
void *ttlvHead = NULL;
Quos_ttlvAddIdFloatEx(&ttlvHead, 4, 18.5, 1);
```
---

<span id="Quos_ttlvAddIdRaw"></span>
## <span style="color:#A52A2A">__Quos_ttlvAddIdRaw__</span>

This function adds a raw data node to the TTLV data table.

__Prototype__

```c
qbool Quos_ttlvAddIdRaw(void **ttlvHead, quint16_t id, const quint8_t *data, quint32_t len);
```

__Parameter__

* __Input Parameter__
  * __void **__ __`ttlvHead`__: TTLV data table.
  * __quint16_t__ __`id`__: Node ID.
  * __quint8_t *__ __`data`__: Node data.
  * __quint32_t *__ __`len`__:Length of the node data.

* __Output Parameter__
  * None

* __Return Value__
  * TRUE: Successful execution
  * FALSE: Failed execution

__Example__

```c
void *ttlvHead = NULL;
quint8_t buf[5] = {'a', 'b', 'c', 'd', 'e'};
Quos_ttlvAddIdRaw(&ttlvHead, 5, buf, sizeof(buf));
```
---

<span id="Quos_ttlvAddIdText"></span>
## <span style="color:#A52A2A">__Quos_ttlvAddIdText__</span>

This function adds a text data node to the TTLV data table.

__Prototype__

```c
qbool Quos_ttlvAddIdText(void **ttlvHead, quint16_t id, const char *data);
```

__Parameter__

* __Input Parameter__
  * __void **__ __`ttlvHead`__: TTLV data table.
  * __quint16_t__ __`id`__: Node ID.
  * __char *__ __`data`__: Node data.

* __Output Parameter__
  * None

* __Return Value__
  * TRUE: Successful execution
  * FALSE: Failed execution

__Example__

```c
void *ttlvHead = NULL;
Quos_ttlvAddIdText(&ttlvHead, 3, "hello world");
```
---

<span id="Quos_ttlvAddIdStruct"></span>
## <span style="color:#A52A2A">__Quos_ttlvAddIdStruct__</span>

This function adds a structure data node to the TTLV data table.

__Prototype__

```c
qbool Quos_ttlvAddIdStruct(void **ttlvHead, quint16_t id, void *vStruct);
```

__Parameter__

* __Input Parameter__
  * __void **__ __`ttlvHead`__: TTLV data table.
  * __quint16_t__ __`id`__: Node ID.
  * __void *__ __`vStruct`__: Node data.

* __Output Parameter__
  * None

* __Return Value__
  * TRUE: Successful execution
  * FALSE: Failed execution

__Example__

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
## <span style="color:#A52A2A">__Quos_ttlvGetNodeType__</span>

This function gets the data type of a node.

__Prototype__

```c
qbool Quos_ttlvGetNodeType(const void *ttlvNode, Quos_dpDataType_e *type);
```

__Parameter__

* __Input Parameter__
  
* __void **__ __`ttlvNode`__: TTLV data table.
  
* __Output Parameter__
  * __Quos_dpDataType_e__ __`type`__: Node data type.
  
  | Value                   | Description |
  | ----------------------- | ----------- |
  | QUOS_DPDATA_TYPE_BOOL   | Boolean     |
  | QUOS_DPDATA_TYPE_INT    | Integer     |
  | QUOS_DPDATA_TYPE_FLOAT  | Float       |
  | QUOS_DPDATA_TYPE_TEXTT  | Text        |
  | QUOS_DPDATA_TYPE_STRUCT | Structure   |
  | QUOS_DPDATA_TYPE_RAW    | Raw         |
  
* __Return Value__
  
  * TRUE: Successful execution
  * FALSE: Failed execution

__Example__

```c
void *ttlvHead = NULL;
Quos_dpDataType_e type = 0;
Quos_ttlvAddIdText(&ttlvHead, 3, "hello world");
Quos_ttlvGetNodeType(ttlvHead, &type);
```
---

<span id="Quos_ttlvGetNodeBool"></span>
## <span style="color:#A52A2A">__Quos_ttlvGetNodeBool__</span>

This function gets boolean data from a node.

__Prototype__

```c
qbool Quos_ttlvGetNodeBool(const void *ttlvNode, qbool *value);
```

__Parameter__

* __Input Parameter__
  * __void **__ __`ttlvNode`__: TTLV node.

* __Output Parameter__
  * __qbool__ __`value`__: Node data.

* __Return Value__
  * TRUE: Successful execution
  * FALSE: Failed execution

__Example__

```c
void *ttlvHead = NULL;
qbool val = 0;
Quos_ttlvAddIdBool(&ttlvHead, 1, TRUE);
Quos_ttlvGetNodeBool(ttlvHead, &val);
```
---

<span id="Quos_ttlvGetNodeInt"></span>
## <span style="color:#A52A2A">__Quos_ttlvGetNodeInt__</span>

This function gets integer data from a node.

__Prototype__

```c
qbool Quos_ttlvGetNodeInt(const void *ttlvNode, qint64_t *value);
```

__Parameter__

* __Input Parameter__
  * __void **__ __`ttlvNode`__: TTLV node.

* __Output Parameter__
  * __qint64_t__ __`value`__: Node data.

* __Return Value__
  * TRUE: Successful execution
  * FALSE: Failed execution

__Example__

```c
void *ttlvHead = NULL;
qint64_t val = 0;
Quos_ttlvAddIdInt(&ttlvHead, 2, 23);
Quos_ttlvGetNodeInt(ttlvHead, &val);
```
---

<span id="Quos_ttlvGetNodeFloat"></span>
## <span style="color:#A52A2A">__Quos_ttlvGetNodeFloat__</span>

This function gets float data from a node.

__Prototype__

```c
qbool Quos_ttlvGetNodeFloat(const void *ttlvNode, double *value);
```

__Parameter__

* __Input Parameter__
  * __void **__ __`ttlvNode`__: TTLV node.

* __Output Parameter__
  * __double__ __`value`__: Node data.

* __Return Value__
  * TRUE: Successful execution
  * FALSE: Failed execution

__Example__

```c
void *ttlvHead = NULL;
double val = 0.0;
Quos_ttlvAddIdFloat(&ttlvHead, 4, 18.5);
Quos_ttlvGetNodeFloat(ttlvHead, &val);
```
---

<span id="Quos_ttlvGetNodeText"></span>
## <span style="color:#A52A2A">__Quos_ttlvGetNodeText__</span>

This function gets text data from a node.

__Prototype__

```c
quint32_t Quos_ttlvGetNodeText(const void *ttlvNode, char **value)
```

__Parameter__

* __Input Parameter__
  * __void **__ __`ttlvNode`__: TTLV node.

* __Output Parameter__
  * __quint8_t **__ __`value`__: Node data.

* __Return Value__
  * Length of the node data.

__Example__

```c
void *ttlvHead = NULL;
Quos_ttlvAddIdText(&ttlvHead, 3, "hello world");
char *ch = NULL;
Quos_ttlvGetNodeText(ttlvHead, &ch);
```
---

<span id="Quos_ttlvGetNodeStruct"></span>
## <span style="color:#A52A2A">__Quos_ttlvGetNodeStruct__</span>

This function gets structure data from a node.

__Prototype__

```c
void *Quos_ttlvGetNodeStruct(const void *ttlvNode);
```

__Parameter__

* __Input Parameter__
  * __void **__ __`ttlvNode`__: TTLV node.

* __Output Parameter__
  * None

* __Return Value__
  * Node data.

__Example__

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
## <span style="color:#A52A2A">__Quos_ttlvGetNodeRaw__</span>

This function gets raw data from a node.

__Prototype__

```c
quint32_t Quos_ttlvGetNodeRaw(const void *ttlvNode, quint8_t **value);
```

__Parameter__

* __Input Parameter__
  * __void **__ __`ttlvNode`__: TTLV node.

* __Output Parameter__
  * __quint8_t **__ __`value`__: Node data.

* __Return Value__
  * Length of the node data.

__Example__

```c
void *ttlvHead = NULL;
quint8_t *value = NULL;
Quos_ttlvAddIdRaw(&ttlvHead, 5, buf, sizeof(buf));
quint32_t len = Quos_ttlvGetNodeRaw(ttlvHead, &value);
```
---

<span id="Quos_ttlvGetIdType"></span>
## <span style="color:#A52A2A">__Quos_ttlvGetIdType__</span>

This function gets the data type of a node.

__Prototype__

```c
qbool Quos_ttlvGetIdType(const void *ttlvHead, quint16_t id, Quos_dpDataType_e *type);
```

__Parameter__

* __Input Parameter__
  * __void **__ __`ttlvNode`__: TTLV node.
  * __quint16_t__ __`id`__: Node ID.

* __Output Parameter__
  * __Quos_dpDataType_e *__ __`type`__: Node data type.

* __Return Value__
  * TRUE: Successful execution
  * FALSE: Failed execution

__Example__

```c
void *ttlvHead = NULL;
Quos_dpDataType_e type = 0;
Quos_ttlvAddIdText(&ttlvHead, 3, "hello world");
Quos_ttlvGetIdType(ttlvHead, 3, &type);
```
---

<span id="Quos_ttlvGetIdBool"></span>
## <span style="color:#A52A2A">__Quos_ttlvGetIdBool__</span>

This function gets boolean data from a node.

__Prototype__

```c
qbool Quos_ttlvGetIdBool(const void *ttlvHead, quint16_t id, qbool *value);
```

__Parameter__

* __Input Parameter__
  * __void **__ __`ttlvNode`__: TTLV node.
  * __quint16_t__ __`id`__: Node ID.

* __Output Parameter__
  * __qbool *__ __`value`__: Node data.

* __Return Value__
  * TRUE: Successful execution
  * FALSE: Failed execution

__Example__

```c
void *ttlvHead = NULL;
qbool value = 0;
Quos_ttlvAddIdBool(&ttlvHead, 1, TRUE);
Quos_ttlvGetIdBool(ttlvHead, 1, &value);
```
---

<span id="Quos_ttlvGetIdInt"></span>
## <span style="color:#A52A2A">__Quos_ttlvGetIdInt__</span>

This function gets integer data from a node.

__Prototype__

```c
qbool Quos_ttlvGetIdInt(const void *ttlvHead, quint16_t id, qint64_t *value);
```

__Parameter__

* __Input Parameter__
  * __void **__ __`ttlvNode`__: TTLV node.
  * __quint16_t__ __`id`__: Node ID.

* __Output Parameter__
  * __qint64_t *__ __`value`__: Node data.

* __Return Value__
  * TRUE: Successful execution
  * FALSE: Failed execution

__Example__

```c
void *ttlvHead = NULL;
qint64_t value = 0;
Quos_ttlvAddIdInt(&ttlvHead, 2, 23);
Quos_ttlvGetIdInt(ttlvHead, 2, &value);
```
---

<span id="Quos_ttlvGetIdFloat"></span>
## <span style="color:#A52A2A">__Quos_ttlvGetIdFloat__</span>

This function gets float data from a node.

__Prototype__

```c
qbool Quos_ttlvGetIdFloat(const void *ttlvHead, quint16_t id, double *value);
```

__Parameter__

* __Input Parameter__
  * __void **__ __`ttlvNode`__: TTLV node.
  * __quint16_t__ __`id`__: Node ID.

* __Output Parameter__
  * __double *__ __`value`__: Node data.

* __Return Value__
  * TRUE: Successful execution
  * FALSE: Failed execution

__Example__

```c
void *ttlvHead = NULL;
double value = 0.0;
Quos_ttlvAddIdFloat(&ttlvHead, 4, 18.5);
Quos_ttlvGetIdFloat(ttlvHead, 4, &value);
```
---

<span id="Quos_ttlvGetIdText"></span>
## <span style="color:#A52A2A">__Quos_ttlvGetIdText__</span>

This function gets text data from a node.

__Prototype__

```c
quint32_t Quos_ttlvGetIdText(const void *ttlvHead, quint16_t id, char **value);
```

__Parameter__

* __Input Parameter__
  * __void **__ __`ttlvNode`__: TTLV node.
  * __quint16_t__ __`id`__: Node ID.

* __Output Parameter__
  * __quint8_t **__ __`value`__: Node data.

* __Return Value__
  * Length of the node data.

__Example__

```c
void *ttlvHead = NULL;
Quos_ttlvAddIdText(&ttlvHead, 3, "hello world");
char *ch = NULL;
Quos_ttlvGetIdText(ttlvHead, 3, &ch);
```
---

<span id="Quos_ttlvGetIdStruct"></span>
## <span style="color:#A52A2A">__Quos_ttlvGetIdStruct__</span>

This function gets structure data from a node.

__Prototype__

```c
void *Quos_ttlvGetIdStruct(const void *ttlvHead, quint16_t id);
```

__Parameter__

* __Input Parameter__
  * __void **__ __`ttlvNode`__: TTLV node.
  * __quint16_t__ __`id`__: Node ID.

* __Output Parameter__
  * None

* __Return Value__
  * Node data.

__Example__

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
## <span style="color:#A52A2A">__Quos_ttlvGetIdRaw__</span>

This function gets raw data from a node.

__Prototype__

```c
quint32_t Quos_ttlvGetIdRaw(const void *ttlvHead, quint16_t id, quint8_t **value);
```

__Parameter__

* __Input Parameter__
  * __void **__ __`ttlvNode`__: TTLV node.
  * __quint16_t__ __`id`__: Node ID.

* __Output Parameter__
  * __quint8_t **__ __`value`__: Node data.

* __Return Value__
  * Length of the node data.

__Example__

```c
void *ttlvHead = NULL;
quint8_t *value = NULL;
quint8_t buf[5] = {'a', 'b', 'c', 'd', 'e'};
Quos_ttlvAddIdRaw(&ttlvHead, 5, buf, sizeof(buf));
quint32_t len = Quos_ttlvGetIdRaw(ttlvHead, 5, &value);
```
---

<span id="Quos_ttlvGetCount"></span>
## <span style="color:#A52A2A">__Quos_ttlvGetCount__</span>

This function gets the number of nodes.

__Prototype__

```c
quint32_t Quos_ttlvGetCount(const void *ttlvHead);
```

__Parameter__

* __Input Parameter__
  * __void **__ __`ttlvHead`__: TTLV data table.

* __Output Parameter__
  * None

* __Return Value__
  * The number of nodes.

__Example__

```c
void *ttlvHead = NULL;
Quos_ttlvAddIdBool(&ttlvHead, 1, TRUE);
Quos_ttlvAddIdInt(&ttlvHead, 2, 23);
Quos_ttlvAddIdText(&ttlvHead, 3, "hello world");
quint32_t len = Quos_ttlvGetCount(ttlvHead);
```
---

<span id="Quos_ttlvGetNode"></span>
## <span style="color:#A52A2A">__Quos_ttlvGetNode__</span>

This function gets the pointer to a node.

__Prototype__

```c
void *Quos_ttlvGetNode(const void *ttlvHead, quint16_t index, quint16_t *id, Quos_dpDataType_e *type);
```

__Parameter__

* __Input Parameter__
  * __void **__ __`ttlvHead`__: TTLV data table.
  * __quint16_t__ __`index`__: Node index.

* __Output Parameter__
  * __quint16_t *__ __`id`__: Node ID.
  * __Quos_dpDataType_e *__ __`type`__: Node type.

* __Return Value__
  *  Pointer to a node.

__Example__

```c
void *ttlvHead = NULL;
quint16_t id = 0;
Quos_dpDataType_e type = 0;
Quos_ttlvAddIdBool(&ttlvHead, 1, TRUE);
void *ptr = Quos_ttlvGetNode(ttlvHead, 0, &id, &type);
```
---

<span id="Quos_ttlvRemove"></span>
## <span style="color:#A52A2A">__Quos_ttlvRemove__</span>

This function deletes node.

__Prototype__

```c
void Quos_ttlvRemove(void **ttlvHead, quint16_t id);
```

__Parameter__

* __Input Parameter__
  * __void **__ __`ttlvHead`__: TTLV data table.
  * __quint16_t__ __`id`__: Node ID.

* __Output Parameter__
  * None

* __Return Value__
  * None

__Example__

```c
void *ttlvHead = NULL;
Quos_ttlvAddIdBool(&ttlvHead, 1, TRUE);
Quos_ttlvRemove(&ttlvHead, 1);
```
---

<span id="Quos_ttlvFree"></span>
## <span style="color:#A52A2A">__Quos_ttlvFree__</span>

This function releases TTLV data table resources.

__Prototype__

```c
void Quos_ttlvFree(void **ttlvHead);
```

__Parameter__

* __Input Parameter__
  * __void **__ __`ttlvHead`__: TTLV data table.

* __Output Parameter__
  * None

* __Return Value__
  * None

__Example__

```c
void *ttlvHead = NULL;
Quos_ttlvAddIdBool(&ttlvHead, 1, TRUE);
Quos_ttlvFree(&ttlvHead);
```
---

<span id="Quos_ttlvUnformat"></span>
## <span style="color:#A52A2A">__Quos_ttlvUnformat__</span>

This function converts byte stream to TTLV data table.

__Prototype__

```c
void *Quos_ttlvUnformat(const quint8_t *buffer, quint32_t len);
```

__Parameter__

* __Input Parameter__
  * __quint8_t *__ __`buffer`__: Byte stream data.
  * __quint32_t__ __`len`__: Length of the byte stream data.

* __Output Parameter__
  * None

* __Return Value__
  * TTLV data table.

__Example__

```c
void *ttlvHead = Quos_ttlvUnformat(payload, payloadLen);
```
---

<span id="Quos_ttlvFormat"></span>
## <span style="color:#A52A2A">__Quos_ttlvFormat__</span>

This function converts TTLV data to byte stream data.

__Prototype__

```c
quint32_t Quos_ttlvFormat(const void *ttlvHead, quint8_t *retBuf);
```

__Parameter__

* __Input Parameter__
  * __void *__ __`ttlvHead`__: TTLV data table.

* __Output Parameter__
  * __quint8_t__ __`retBuf`__: Byte stream data.

* __Return Value__
  * Length of the byte stream data.

__Example__

```c
void *ttlvHead = NULL;
quint8_t buf[128] = {0};
Quos_ttlvAddIdBool(&ttlvHead, 1, TRUE);
quint32_t len = Quos_ttlvFormat(ttlvHead, buf);
```
---

<span id="Quos_ttlvFormatLen"></span>
## <span style="color:#A52A2A">__Quos_ttlvFormatLen__</span>

This function gets the length of byte stream data converted from TTLV data.

__Prototype__

```c
quint32_t Quos_ttlvFormatLen(const void *ttlvHead);
```

__Parameter__

* __Input Parameter__
  * __void *__ __`ttlvHead`__: TTLV data table.

* __Output Parameter__
  * None

* __Return Value__
  * Length of the byte stream data.

__Example__

```c
void *ttlvHead = NULL;
Quos_ttlvAddIdBool(&ttlvHead, 1, TRUE);
quint32_t len = Quos_ttlvFormatLen(ttlvHead);
```
---

<span id="Quos_ttlvHeadPrintf"></span>
## <span style="color:#A52A2A">__Quos_ttlvHeadPrintf__</span>

This function prints the TTLV data table.

__Prototype__

```c
void Quos_ttlvHeadPrintf(const void *ttlvHead);
```

__Parameter__

* __Input Parameter__
  * __void *__ __`ttlvHead`__: TTLV data table.

* __Output Parameter__
  * None

* __Return Value__
  * None

__Example__

```c
void *ttlvHead = NULL;
Quos_ttlvAddIdBool(&ttlvHead, 1, TRUE);
Quos_ttlvHeadPrintf(ttlvHead);
```
---

<span id="Quos_json2Ttlv"></span>
## <span style="color:#A52A2A">__Quos_json2Ttlv__</span>

This function converts JSON data to TTLV data.

__Prototype__

```c
void *Quos_json2Ttlv(const Quos_cjson_t *json);
```

__Parameter__

* __Input Parameter__
  * __Quos_cjson_t *__ __`json`__: JSON data.

* __Output Parameter__
  * None

* __Return Value__
  * TTLV data.

__Example__

```c
Quos_cjson_t * js = NULL;
void *ttlvHead = NULL;
js = Quos_cjsonCreateNumber(120);
ttlvHead = Quos_json2Ttlv(js);
```
---

<span id="Quos_ttlv2Json"></span>
## <span style="color:#A52A2A">__Quos_ttlv2Json__</span>

This function converts TTLV data to JSON data.

__Prototype__

```c
Quos_cjson_t *Quos_ttlv2Json(const void *ttlvHead);
```

__Parameter__

* __Input Parameter__
  * __void *__ __`ttlvHead`__: TTLV data.

* __Output Parameter__
  * None

* __Return Value__
  * JSON data.

__Example__

```c
Quos_cjson_t * js = NULL;
void *ttlvHead = NULL;
Quos_ttlvAddIdBool(&ttlvHead, 1, TRUE);
js = Quos_ttlv2Json(ttlvHead);
```
---

<span id="ERROR_CODE">  </span>
## **Error Code List**
| Enumeration Value | Hexadecimal | Decimal | Description           |
| ----------------- | ----------- | ------- | --------------------- |
| OPRT_OK           | -0x0000     | -0      | Successful execution. |
