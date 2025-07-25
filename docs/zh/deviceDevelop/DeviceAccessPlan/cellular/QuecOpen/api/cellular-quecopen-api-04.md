# TTLV数据处理 相关接口


## **API 列表**

|                         函数                          |               说明               |
| :---------------------------------------------------: | :------------------------------: |
|      [Ql_iotTtlvCountGet()](#Ql_iotTtlvCountGet)      |       获取数据表的节点数量       |
|       [Ql_iotTtlvNodeGet()](#Ql_iotTtlvNodeGet)       |      从数据表中提取数据节点      |
|          [Ql_iotTtlvFree()](#Ql_iotTtlvFree)          |          释放数据表资源          |
|   [Ql_iotTtlvNodeGetType()](#Ql_iotTtlvNodeGetType)   |        获取节点数据的类型        |
|   [Ql_iotTtlvNodeGetBool()](#Ql_iotTtlvNodeGetBool)   |      获取节点数据-Bool 类型      |
|    [Ql_iotTtlvNodeGetInt()](#Ql_iotTtlvNodeGetInt)    |      获取节点数据-Int 类型       |
|  [Ql_iotTtlvNodeGetFloat()](#Ql_iotTtlvNodeGetFloat)  |      获取节点数据-浮点 类型      |
| [Ql_iotTtlvNodeGetString()](#Ql_iotTtlvNodeGetString) |     获取节点数据-String 类型     |
|   [Ql_iotTtlvNodeGetByte()](#Ql_iotTtlvNodeGetByte)   |      获取节点数据-Byte类型       |
| [Ql_iotTtlvNodeGetStruct()](#Ql_iotTtlvNodeGetStruct) |     获取节点数据-Struct 类型     |
|     [Ql_iotTtlvIdGetType()](#Ql_iotTtlvIdGetType)     |     获取指定ID节点数据的类型     |
|     [Ql_iotTtlvIdGetBool()](#Ql_iotTtlvIdGetBool)     |  获取指定 ID 节点数据-Bool 类型  |
|      [Ql_iotTtlvIdGetInt()](#Ql_iotTtlvIdGetInt)      |  获取指定 ID 节点数据-Int 类型   |
|    [Ql_iotTtlvIdGetFloat()](#Ql_iotTtlvIdGetFloat)    |  获取指定 ID 节点数据-浮点 类型  |
|   [Ql_iotTtlvIdGetString()](#Ql_iotTtlvIdGetString)   | 获取指定 ID 节点数据-String 类型 |
|     [Ql_iotTtlvIdGetByte()](#Ql_iotTtlvIdGetByte)     |  获取指定 ID 节点数据-Byte 类型  |
|   [Ql_iotTtlvIdGetStruct()](#Ql_iotTtlvIdGetStruct)   | 获取指定 ID 节点数据-Struct 类型 |
|     [Ql_iotTtlvIdAddBool()](#Ql_iotTtlvIdAddBool)     |      添加节点数据-Bool 类型      |
|      [Ql_iotTtlvIdAddInt()](#Ql_iotTtlvIdAddInt)      |      添加节点数据-Int 类型       |
|    [Ql_iotTtlvIdAddFloat()](#Ql_iotTtlvIdAddFloat)    |      添加节点数据-浮点 类型      |
|   [Ql_iotTtlvIdAddString()](#Ql_iotTtlvIdAddString)   |     添加节点数据-字符串 类型     |
|     [Ql_iotTtlvIdAddByte()](#Ql_iotTtlvIdAddByte)     |      添加节点数据-Byte 类型      |
|   [Ql_iotTtlvIdAddStruct()](#Ql_iotTtlvIdAddStruct)   |     添加节点数据-Struct 类型     |

## **API 详情**

<span id="Ql_iotTtlvCountGet">  </span>
## <span style="color:#A52A2A">__Ql_iotTtlvCountGet__</span>

该函数用于获取数据表的节点数量。

__函数原型__

```c
quint32_t Ql_iotTtlvCountGet(const void *ttlvHead)
```
__参数说明__
* __输入参数__
	* __const void *__  __`ttlvHead`__： 数据表。


__返回值__

数据表的节点数量。

__备注__ 
* __2.3.3及以上版本支持__

---

__调用示例__

```c
quint32_t count = Ql_iotTtlvCountGet(ttlvHead);
```
---
<span id="Ql_iotTtlvNodeGet">  </span>
## <span style="color:#A52A2A">__Ql_iotTtlvNodeGet__</span>

该函数用于从数据表中提取数据节点。

__函数原型__

```c
void *Ql_iotTtlvNodeGet(const void *ttlvHead, quint16_t index, quint16_t *id, QIot_dpDataType_e 
*type)
```
__参数说明__
* __输入参数__
	* __const void *__  __`ttlvHead`__： 数据表。
	* __quint16_t__  __`index`__： 数据节点索引。

* __输出参数__
	* __quint16_t *__  __`id`__： 数据节点 ID。
	* __QIot_dpDataType_e *__  __`type`__： 数据节点类型。详情请参考[数据节点类型](#QIot_dpDataType_e)。

__返回值__

数据节点指针；若为NULL则表示获取失败。

__备注__ 
* __2.3.3及以上版本支持__

---

__调用示例__

```c
quint32_t count = Ql_iotTtlvCountGet(ttlvHead);
quint32_t i;
for(i=0;i<count;i++)
{
    uint16_t id;
    QIot_dpDataType_e type;
    void *node = Ql_iotTtlvNodeGet(ttlvHead, i, &id, &type);
    if(node)
    {
        switch (id)
        {               
            case 1:
            {             
                /*Code*/
                break;
            }
                case 2:
            {             
                /*Code*/
                break;
            }
            default:break;
        }
    }
}
```
---

<span id="Ql_iotTtlvFree">  </span>
## <span style="color:#A52A2A">__Ql_iotTtlvFree__</span>

该函数用于释放数据表资源。创建 TTLV 数据表或添加 TTLV 节点并处理完成后，需调用该函数释放数据表资源。

__函数原型__

```c
void Ql_iotTtlvFree(void **ttlvHead)
```
__参数说明__
* __输入参数__
	* __void **__  __`ttlvHead`__： 数据表。

__返回值__

无。

__备注__ 
* __2.3.3及以上版本支持__

---

__调用示例__

```c
void *ttlvHead = NULL;     
Ql_iotTtlvIdAddInt(&ttlvHead, 1, 100);
Ql_iotCmdBusPhymodelReport(1, ttlvHead);
Ql_iotTtlvFree(&ttlvHead); //释放指针
```
---

<span id="Ql_iotTtlvNodeGetType">  </span>
## <span style="color:#A52A2A">__Ql_iotTtlvNodeGetType__</span>

该函数用于获取节点数据的类型。

__函数原型__

```c
qbool Ql_iotTtlvNodeGetType(const void *ttlvNode, QIot_dpDataType_e *type)
```
__参数说明__

* __输入参数__
	* __const void *__      __`ttlvNode`__： 数据节点。

* __输出参数__
	* __QIot_dpDataType_e *__  __`type`__：数据节点的类型。详情请参考[数据节点类型](#QIot_dpDataType_e)。

__返回值__
* __`True`__：函数执行成功。
* __`False`__： 函数执行失败。

__备注__ 
* __2.3.3及以上版本支持__

---

__调用示例__

```c
void *ttlvNode = NULL; 
QIot_dpDataType_e type;
qbool ret = Ql_iotTtlvNodeGetType(&ttlvNode,&type);
```
---

<span id="Ql_iotTtlvNodeGetBool">  </span>
## <span style="color:#A52A2A">__Ql_iotTtlvNodeGetBool__</span>

该函数用于获取节点数据-Bool 类型。

__函数原型__

```c
qbool Ql_iotTtlvNodeGetBool(const void *ttlvNode, qbool *value)
```
__参数说明__

* __输入参数__
	* __const void *__  __`ttlvNode`__：数据节点。

* __输出参数__
	* __qbool *__     __`value`__：节点数据。

__返回值__
* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__ 
* __2.3.3及以上版本支持__

---

__调用示例__

详情示例请参考 [获取节点数据示例](#TTLV_Node_Get)。

---
<span id="Ql_iotTtlvNodeGetInt">  </span>
## <span style="color:#A52A2A">__Ql_iotTtlvNodeGetInt__</span>

该函数用于获取节点数据-Int 类型。

__函数原型__

```c
qbool Ql_iotTtlvNodeGetInt(const void *ttlvNode, int *value)
```

__参数说明__

* __输入参数__
	* __const void *__  __`ttlvNode`__：数据节点。

* __输出参数__
	* __int *__        __`value`__：数据节点内容。


__返回值__
* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__ 
* __2.3.3及以上版本支持__

---

__调用示例__

详情示例请参考 [获取节点数据示例](#TTLV_Node_Get)。

---

<span id="Ql_iotTtlvNodeGetFloat">  </span>
## <span style="color:#A52A2A">__Ql_iotTtlvNodeGetFloat__</span>

该函数用于获取节点数据-浮点 类型。

__函数原型__

```c
qbool Ql_iotTtlvNodeGetFloat(const void *ttlvNode, double *value)
```

__参数说明__
* __输入参数__
	* __const void *__  __`ttlvNode`__：数据节点。

* __输出参数__
	* __double *__     __`value`__：数据节点内容。

__返回值__
* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__ 
* __2.6.1及以上版本支持__

---

__调用示例__

详情示例请参考 [获取节点数据示例](#TTLV_Node_Get)。

---

<span id="Ql_iotTtlvNodeGetString">  </span>
## <span style="color:#A52A2A">__Ql_iotTtlvNodeGetString__</span>

该函数用于获取节点数据-String 类型。

__函数原型__

```c
char *Ql_iotTtlvNodeGetString(const void *ttlvNode)
```

__参数说明__
* __输入参数__
	* __const void *__  __`ttlvNode`__： 数据节点。

__返回值__
* __`NULL`__： &nbsp; 获取失败。 
* __`其他`__：  数据节点内容。

__备注__ 
* __2.3.3及以上版本支持__

---

__调用示例__

详情示例请参考 [获取节点数据示例](#TTLV_Node_Get)。

---
<span id="Ql_iotTtlvNodeGetByte">  </span>
## <span style="color:#A52A2A">__Ql_iotTtlvNodeGetByte__</span>

该函数用于获取节点数据-Byte 类型。

__函数原型__

```c
quint32_t Ql_iotTtlvNodeGetByte(const void *ttlvNode, quint8_t **value)
```

__参数说明__
* __输入参数__
	* __const void *__  __`ttlvNode`__：数据节点。

* __输出参数__
	* __quint8_t **__    __`value`__：数据节点内容。


__返回值__
* __`0`__：  数据读取失败。 
* __`>0`__： 实际读取到的固件数据长度。

__备注__ 
* __2.3.3及以上版本支持__

---

__调用示例__

详情示例请参考 [获取节点数据示例](#TTLV_Node_Get)。

---

<span id="Ql_iotTtlvNodeGetStruct">  </span>
## <span style="color:#A52A2A">__Ql_iotTtlvNodeGetStruct__</span>

该函数用于获取节点数据-Struct 类型。

__函数原型__

```c
void *Ql_iotTtlvNodeGetStruct(const void *ttlvNode)
```

__参数说明__

* __输入参数__
	* __const void *__  __`ttlvNode`__：数据节点。

__返回值__

数据表指针。

__备注__ 
* __2.3.3及以上版本支持__

---

__调用示例__

详情示例请参考 [获取节点数据示例](#TTLV_Node_Get)。

---
<span id="Ql_iotTtlvIdGetType">  </span>
## <span style="color:#A52A2A">__Ql_iotTtlvIdGetType__</span>

该函数用于获取指定 ID 节点数据的类型。

__函数原型__

```c
qbool Ql_iotTtlvIdGetType(const void *ttlvHead, quint16_t id, QIot_dpDataType_e *type)
```

__参数说明__
* __输入参数__
	* __const void *__     __`ttlvHead`__：数据表。
	* __quint16_t__       __`id`__：数据节点 ID。

* __输出参数__
	* __QIot_dpDataType_e *__   __`type`__：数据节点内容。详情请参考[数据节点类型](#QIot_dpDataType_e)。

__返回值__
* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__ 
* __2.3.3及以上版本支持__

---

__调用示例__

```c
void *ttlvHead = Ql_iotTtlvUnformat(payload, payloadLen);
if (NULL == ttlvHead)
{
    return;
}
QIot_dpDataType_e type;
qbool ret = Ql_iotTtlvIdGetType(ttlvHead, 1, &type);
Ql_iotTtlvFree(&ttlvHead);
```
---
<span id="Ql_iotTtlvIdGetBool">  </span>
## <span style="color:#A52A2A">__Ql_iotTtlvIdGetBool__</span>

该函数用于获取指定 ID 节点数据-Bool 类型。

__函数原型__

```c
qbool Ql_iotTtlvIdGetBool(const void *ttlvHead, quint16_t id, qbool *value)
```

__参数说明__

* __输入参数__
	* __const void *__  __`ttlvHead`__： 数据表。
	* __quint16_t__    __`id`__：数据节点 ID。

* __输出参数__
	* __qbool *__      __`value`__：数据节点内容。

__返回值__
* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__ 
* __2.3.3及以上版本支持__

---

__调用示例__

```c
void *ttlvHead = Ql_iotTtlvUnformat(payload, payloadLen);
if (NULL == ttlvHead)
{
    return;
}
qbool reauth_flag = FALSE;
qbool ret = Ql_iotTtlvIdGetBool(ttlvHead, 1, &reauth_flag);
Ql_iotTtlvFree(&ttlvHead);
```

---

<span id="Ql_iotTtlvIdGetInt">  </span>
## <span style="color:#A52A2A">__Ql_iotTtlvIdGetInt__</span>

该函数用于获取指定 ID 节点数据的-Int 类型。

__函数原型__

```c
qbool Ql_iotTtlvIdGetInt(const void *ttlvHead, quint16_t id, int *value)
```

__参数说明__
* __输入参数__
	* __const void *__  __`ttlvHead`__： 数据表。
	* __quint16_t__    __`id`__： 数据节点 ID。

* __输出参数__
	* __int *__        __`value`__：数据节点内容。


__返回值__
* __`True`__：函数执行成功。
* __`False`__： 函数执行失败。

__备注__ 
* __2.3.3及以上版本支持__

---

__调用示例__


```c
void *ttlvHead = Ql_iotTtlvUnformat(payload, payloadLen);
if (NULL == ttlvHead)
{
    return;
}
double increment;
Ql_iotTtlvIdGetFloat(modelInfoHead, 1,&increment);
Ql_iotTtlvFree(&ttlvHead);
```

---
<span id="Ql_iotTtlvIdGetFloat">  </span>
## <span style="color:#A52A2A">__Ql_iotTtlvIdGetFloat__</span>

该函数用于获取指定 ID 节点数据-浮点 类型

__函数原型__

```c
Qbool Ql_iotTtlvIdGetFloat(const void *ttlvHead, quint16_t id, double *value)
```

__参数说明__

* __输入参数__
	* __const void *__  __`ttlvHead`__：数据表。
	* __quint16_t__    __`id`__：数据节点 ID。

* __输出参数__
	* __double *__     __`value`__：数据节点内容。

__返回值__
* __`True`__：函数执行成功。
* __`False`__： 函数执行失败。

__备注__ 
* __2.6.1及以上版本支持__

---

__调用示例__

```c
void *ttlvHead = Ql_iotTtlvUnformat(payload, payloadLen);
if (NULL == ttlvHead)
{
    return;
}
qint64_t componentType;
char *cfgData = Ql_iotTtlvIdGetString(ttlvHead, 1);
Ql_iotTtlvFree(&ttlvHead);
```

---
<span id="Ql_iotTtlvIdGetString">  </span>
## <span style="color:#A52A2A">__Ql_iotTtlvIdGetString__</span>

该函数用于获取指定 ID 节点数据-String 类型。

__函数原型__

```c
char *Ql_iotTtlvIdGetString(const void *ttlvHead, quint16_t id)
```

__参数说明__

* __输入参数__
	* __const void *__  __`ttlvHead`__：数据表。
	* __quint16_t__    __`id`__：数据节点 ID。


__返回值__
* __`NULL`__：&nbsp;获取失败。 
* __`其他`__：数据节点内容。

__备注__ 
* __2.3.3及以上版本支持__

---

__调用示例__

```c
void *ttlvHead = Ql_iotTtlvUnformat(payload, payloadLen);
if (NULL == ttlvHead)
{
    return;
}
quint8_t *encryData = NULL;
quint32_t encryLen = Ql_iotTtlvIdGetByte(ttlvHead, 1,&encryData); 
Ql_iotTtlvFree(&ttlvHead);
```

---

<span id="Ql_iotTtlvIdGetByte">  </span>
## <span style="color:#A52A2A">__Ql_iotTtlvIdGetByte__</span>

该函数用于获取指定 ID 节点数据-Byte 类型。

__函数原型__

```c
quint32_t Ql_iotTtlvIdGetByte(const void *ttlvHead, quint16_t id, quint8_t **value)
```

__参数说明__
* __输入参数__
	* __const void *__  __`ttlvHead`__：数据表。
	* __quint16_t__    __`id`__：数据节点 ID。
	
* __输出参数__
	* __quint8_t **__    __`value`__：数据节点内容。

__返回值__
* __`0`__： 数据读取失败。 
* __`>0`__： 实际读取到的固件数据长度。


__备注__ 
* __2.3.3及以上版本支持__

---

__调用示例__

```c
void *ttlvHead = Ql_iotTtlvUnformat(payload, payloadLen);
if (NULL == ttlvHead)
{
    return;
}
qint64_t componentType;
void *dnsInfo = Ql_iotTtlvIdGetStruct(ttlvHead, 1);
Ql_iotTtlvFree(&ttlvHead);
```

---

<span id="Ql_iotTtlvIdGetStruct">  </span>
## <span style="color:#A52A2A">__Ql_iotTtlvIdGetStruct__</span>

该函数用于获取指定 ID 节点数据-Struct 类型。

__函数原型__

```c
void *Ql_iotTtlvIdGetStruct(const void *ttlvHead, quint16_t id)
```

__参数说明__
* __输入参数__
	* __const void *__  __`ttlvHead`__：数据表。
	* __quint16_t__    __`id`__：数据节点 ID。

__返回值__

数据表指针。

__备注__ 
* __2.3.3及以上版本支持__

---

__调用示例__

```c
void *ttlvHead = Ql_iotTtlvUnformat(payload, payloadLen);
if (NULL == ttlvHead)
{
    return;
}
qint64_t componentType;
void *dnsInfo = Ql_iotTtlvIdGetStruct(ttlvHead, 1);
Ql_iotTtlvFree(&ttlvHead);
```


---
<span id="Ql_iotTtlvIdAddBool">  </span>
## <span style="color:#A52A2A">__Ql_iotTtlvIdAddBool__</span>

该函数用于添加节点数据-Bool 类型。

__函数原型__

```c
qbool Ql_iotTtlvIdAddBool(void **ttlvHead, quint16_t id, qbool value)
```

__参数说明__
* __输入参数__
	* __void **__     __`ttlvHead`__： 数据表。
	* __quint16_t__   __`id`__：数据节点 ID。
	* __qbool__     __`value`__：数据节点内容。

__返回值__
* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__调用示例__

详情示例请参考 [添加节点数据示例](#TTLV_ID_SET)。

---

<span id="Ql_iotTtlvIdAddInt">  </span>
## <span style="color:#A52A2A">__Ql_iotTtlvIdAddInt__</span>

该函数用于添加节点数据-int 类型。

__函数原型__

```c
qbool Ql_iotTtlvIdAddInt(void **ttlvHead, quint16_t id, qint64_t num)
```

__参数说明__
* __输入参数__
	* __void **__     __`ttlvHead`__： 数据表。
	
	* __quint16_t__   __`id`__：数据节点 ID。
	
	* __qint64_t__   __`num`__：数据节点内容。


__返回值__
* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__ 
* __2.6.1及以上版本支持__

---


__调用示例__

详情示例请参考 [添加节点数据示例](#TTLV_ID_SET)。

---
<span id="Ql_iotTtlvIdAddFloat">  </span>
## <span style="color:#A52A2A">__Ql_iotTtlvIdAddFloat__</span>

该函数用于添加节点数据-float 类型。

__函数原型__

```c
qbool Ql_iotTtlvIdAddFloat(void **ttlvHead, quint16_t id, double num)
```

__参数说明__
* __输入参数__
	* __void **__     __`ttlvHead`__： 数据表。
	* __quint16_t__   __`id`__：数据节点 ID。
	* __double__     __`num`__：数据节点内容。


__返回值__
* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__ 
* __2.6.1及以上版本支持__

---

__调用示例__

详情示例请参考 [添加节点数据示例](#TTLV_ID_SET)。

---
<span id="Ql_iotTtlvIdAddString">  </span>
## <span style="color:#A52A2A">__Ql_iotTtlvIdAddString__</span>

该函数用于添加节点数据-字符串 类型。

__函数原型__

```c
qbool Ql_iotTtlvIdAddString(void **ttlvHead, quint16_t id, const char *data)
```

__参数说明__

* __输入参数__
	* __void **__     __`ttlvHead`__： 数据表。
	* __quint16_t__   __`id`__：数据节点 ID。
	* __quint8_t *__   __`data`__：数据节点内容。

__返回值__
* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__ 
* __2.3.3及以上版本支持__

---

__调用示例__

详情示例请参考 [添加节点数据示例](#TTLV_ID_SET)。


---

<span id="Ql_iotTtlvIdAddByte">  </span>
## <span style="color:#A52A2A">__Ql_iotTtlvIdAddByte__</span>

该函数用于添加节点数据-Byte 类型。

__函数原型__

```c
qbool Ql_iotTtlvIdAddByte(void **ttlvHead, quint16_t id, quint8_t *data, quint32_t len)
```

__参数说明__
* __输入参数__
	* __void **__     __`ttlvHead`__： 数据表。
	* __quint16_t__   __`id`__：数据节点 ID。
	* __quint8_t *__   __`data`__：数据节点内容。
	* __quint32_t__    __`len`__：数据节点内容长度。

__返回值__
* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__ 
* __2.3.3及以上版本支持__

---

__调用示例__

详情示例请参考 [添加节点数据示例](#TTLV_ID_SET)。

---
<span id="Ql_iotTtlvIdAddStruct">  </span>
## <span style="color:#A52A2A">__Ql_iotTtlvIdAddStruct__</span>

该函数用于添加节点数据-Struct 类型。

__函数原型__

```c
qbool Ql_iotTtlvIdAddStruct(void **ttlvHead, quint16_t id, void *vStruct)
```

__参数说明__
* __输入参数__
	* __void **__     __`ttlvHead`__： 数据表。
	* __quint16_t__   __`id`__：数据节点 ID。
	* __void *__    __`vStruct`__：数据节点内容。

__返回值__
* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__ 
* __2.3.3及以上版本支持__

---

__调用示例__

详情示例请参考 [添加节点数据示例](#TTLV_ID_SET)。

---


<span id="QIot_dpDataType_e">  </span>
* __数据节点类型__ 

	__枚举定义__

    ```c
    typedef enum { 
        QIOT_DPDATA_TYPE_BOOL = 0, 
        QIOT_DPDATA_TYPE_NUM, 
        QIOT_DPDATA_TYPE_BYTE, 
        QIOT_DPDATA_TYPE_STRUCT, 
    } QIot_dpDataType_e;
    ```
		
	__参数说明__
	 
    | 参数                    |    描述    |
    | :---------------------- | :--------: |
    | QIOT_DPDATA_TYPE_BOOL   |  布尔类型  |
    | QIOT_DPDATA_TYPE_NUM    |  数值类型  |
    | QIOT_DPDATA_TYPE_BYTE   | 字节流类型 |
    | QIOT_DPDATA_TYPE_STRUCT | 结构体类型 |
   

<span id="TTLV_Node_Get">  </span>

## **获取节点数据示例**

```c
void Ql_iotTtlvHandle(const void *ttlvHead)
{
    quint32_t count = Ql_iotTtlvCountGet(ttlvHead);
    quint32_t i;
    for(i=0;i<count;i++)
    {
        uint16_t id;
        QIot_dpDataType_e type;
        void *node = Ql_iotTtlvNodeGet(ttlvHead, i, &id, &type);
        if(node)
        {
            switch (type)
            {
            case QIOT_DPDATA_TYPE_BOOL:
            {
                qbool value;
                Ql_iotTtlvNodeGetBool(node, &value);
                printf("model id:%d data:%s\r\n",id,value?"TRUE":"FALSE");
                break;
            }
            case QIOT_DPDATA_TYPE_INT:
            {
                qint64_t num;
                Ql_iotTtlvNodeGetInt(node, &num);
                printf("model id:%d data:"PRINTF_S64"\r\n",id,num);
                break;
            }  
            case QIOT_DPDATA_TYPE_FLOAT:
            {
                double num;
                Ql_iotTtlvNodeGetFloat(node, &num);
                printf("model id:%d data:%lg\r\n",id,num);
                break;
            }               
            case QIOT_DPDATA_TYPE_BYTE:
            {
                quint8_t *value;
                quint32_t len = Ql_iotTtlvNodeGetByte(node, &value);
                printf("model id:%d data:%.*s\r\n",id,len,value);
                break;
            }
            case QIOT_DPDATA_TYPE_STRUCT:
                Ql_iotTtlvHandle(Ql_iotTtlvNodeGetStruct(node));
                break;
            default:
                break;
            }
        }
    }
}
```

<span id="TTLV_ID_SET">  </span>

## **添加节点数据示例**

```c
/**************************************************************************
** 功能   @brief : 事件处理回调
** 输入   @param : 
** 输出   @retval: 
***************************************************************************/
void Ql_iotSubEventCB(quint32_t event, qint32_t errcode, const char *subPk, const char *subDk, const void *value, quint32_t valLen)
{
    printf("subPk[%s] subDk[%s] valLen[%d]\r\n", subPk, subDk, valLen);
    switch (event)
    {
    /* 接收数据操作 */
    case QIOT_ATEVENT_TYPE_RECV:
        printf("data recv event,code:%d\r\n",errcode);
        /* 收到物模型请求数据 */
        if(QIOT_RECV_SUCC_PHYMODEL_REQ == errcode && value)
        {
            quint16_t PkgID = *(quint16_t *)value;
            quint16_t *ids = (quint16_t *)((quint8_t*)value+sizeof(quint16_t));
            void *ttlvHead = NULL;
            printf("model read event,PkgID:%d\r\n",PkgID);
            quint32_t i;
            for(i=0;i<valLen;i++)
            {
                quint16_t modelId = ids[i];
                printf("modelId:%d\r\n",modelId);
                /* id1:bool id2:int id3:string id4:int array id5:string array*/
                switch (modelId)
                {
                case 1:
                    Ql_iotTtlvIdAddBool(&ttlvHead, modelId, TRUE);
                    break;
                case 2:
                    Ql_iotTtlvIdAddInt(&ttlvHead, modelId, 1);
                    break;
                case 3:
                    Ql_iotTtlvIdAddString(&ttlvHead, modelId, "hello world");
                    break;
                case 4:
                    {
                        void *ttlvArrayHead = NULL;
                        Ql_iotTtlvIdAddInt(&ttlvArrayHead, 1, 1);
                        Ql_iotTtlvIdAddInt(&ttlvArrayHead, 2, 2);
                        Ql_iotTtlvIdAddInt(&ttlvArrayHead, 3, 3);
                        Ql_iotTtlvIdAddStruct(&ttlvHead, modelId, ttlvArrayHead);
                    }
                    break;
                case 5:
                    {
                        void *ttlvArrayHead = NULL;
                        Ql_iotTtlvIdAddString(&ttlvArrayHead, 1, "hello a");
                        Ql_iotTtlvIdAddString(&ttlvArrayHead, 2, "hello b");
                        Ql_iotTtlvIdAddString(&ttlvArrayHead, 3, "hello c");
                        Ql_iotTtlvIdAddStruct(&ttlvHead, modelId, ttlvArrayHead);
                    }
                    break;
                default:
                    break;
                }
            }
            Ql_iotSubDevTslAck(subPk, subDk, PkgID, ttlvHead);
            Ql_iotTtlvFree(&ttlvHead);
        }
        break;
    default:
        break;
    }
}
```
