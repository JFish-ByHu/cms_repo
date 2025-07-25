# Network Configuration API


## **API Overview**

|          Function           |         Description         |
| :-------------------------: | :-------------------------: |
| [Qth.setApn()](#Qth.setApn) | Configures APN information. |

## **API Description**

<span id="Qth.setApn"></span>
## <span style="color:#A52A2A">__Qth.setApn__</span>

This function configures the APN information of network data calls.

__Prototype__

```python
Qth.setApn(apn, username, password)
```

__Parameter__

* __Input Parameter__
  * __`apn`__: Access point name.
  * __`username`__: APN username, optional.
  * __`password`__: APN password, optional.

* __Output Parameter__
  * None

* __Return Value__
  * None

__Example__

```python
Qth.setApn("cmiot", "", "")
```