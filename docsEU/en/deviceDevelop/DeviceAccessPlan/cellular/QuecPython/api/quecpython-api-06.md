# OTA Upgrade API


## **API Overview**

|              Function               |         Description         |
| :---------------------------------: | :-------------------------: |
| [Qth.otaRequest()](#Qth.otaRequest) | Requests OTA upgrade plans. |
|  [Qth.otaAction()](#Qth.otaAction)  | Confirms OTA upgrade plans. |

## **API Description**

<span id="Qth.otaRequest"></span>
## <span style="color:#A52A2A">__Qth.otaRequest__</span>

This function requests OTA upgrade plans for the device from Developer Center.

__Prototype__

```python
Qth.otaRequest()
```

__Parameter__

* __Input Parameter__
  * None

* __Output Parameter__
  * None

* __Return Value__
  * `True`: Successful execution
  * `False`: Failed execution

__Example__

```python
Qth.otaRequest()
```
---

<span id="Qth.otaAction"></span>
## <span style="color:#A52A2A">__Qth.otaAction__</span>

This function confirms OTA upgrade plans, including accepting or rejecting the OTA plan, when Developer Center issues an OTA upgrade plan. 

__Prototype__

```python
Qth.otaAction(otaAction)
```

__Parameter__

* __Input Parameter__
  * __`otaAction`__: Operation on the OTA upgrade plan.

    | Value | Description         |
    | ----- | ------------------- |
    | 0     | Reject the upgrade. |
    | 1     | Accept the upgrade. |

* __Output Parameter__
  
* None
  
* __Return Value__
  * `True`: Successful execution
  * `False`: Failed execution

__Example__

```python
def App_otaPlanCb(plans):
    print('otaPlan:', plans)
    Qth.otaAction(1)
```
---