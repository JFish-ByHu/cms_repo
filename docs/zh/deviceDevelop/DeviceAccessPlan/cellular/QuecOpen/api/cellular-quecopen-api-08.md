# 设备授权 相关接口


## **API 列表**

|                    函数                     |      说明      |
| :-----------------------------------------: | :------------: |
| [Ql_iotDBindcodeSet()](#Ql_iotDBindcodeSet) |  上报绑定信息  |
| [Ql_iotDBindcodeGet()](#Ql_iotDBindcodeGet) | 获取设备绑定码 |
|          [Ql_iotRst()](#Ql_iotRst)          |    重置设备    |


## **API 详情**

<span id="Ql_iotDBindcodeSet">  </span>

## <span style="color:#A52A2A">__Ql_iotDBindcodeSet__</span>

该函数用于触发设备可被绑定。在 App 通过短距网络（包括 TCP/IP 局域网、BLE 等）绑定设备时有效，需要设备上报与 App 相同的 bindcode 到平台才能完成实际绑定动作。

__函数原型__

```c
qbool Ql_iotDBindcodeSet(const char *bindcode, quint32_t timeout)
```

__参数说明__
* __输入参数__
	* __quint8_t *__  __`bindcode`__：设备绑定码；字符范围：0~9，A~F，为NULL时系统随机生成(长度固定为16节)。
	* __quint32_t__ __`timeout`__: 可绑定时间，范围：0-3600(单位：秒)，0为取消绑定。


__返回值__
* __`True`__：&nbsp;&nbsp;函数执行成功。
* __`False`__：函数执行失败。

__备注__
* __2.10.3及以上版本支持__

---


__调用示例__

```c
qbool ret = Ql_iotDBindcodeSet("1234567891234567", 120);
```
---
<span id="Ql_iotDBindcodeGet">  </span>
## <span style="color:#A52A2A">__Ql_iotDBindcodeGet__</span>

该函数用于获取设备绑定码。

__函数原型__

```c
quint32_t Ql_iotDBindcodeGet(char **bindcode)
```

__参数说明__

* __输入参数__
	* __quint8_t **__  __`bindcode`__：设备绑定码。

__返回值__

设备绑定剩余超时时长。

__备注__
* __2.10.3及以上版本支持__

---

__调用示例__

```c
quint8_t *bindcode = NULL;
quint32_t timeout = Ql_iotDBindcodeGet(&bindcode);
```
---
<span id="Ql_iotRst">  </span>
## <span style="color:#A52A2A">__Ql_iotRst__</span>

该函数用于重置设备bindCode与设备秘钥。

__函数原型__

```c
void Ql_iotRst(void)
```

__参数说明__

无。

__返回值__

* __`True`__：函数执行成功。
* __`False`__： 函数执行失败。

__备注__
* __2.10.0及以上版本支持__

---

__调用示例__

```c
qbool ret = Ql_iotRst();
```
---





