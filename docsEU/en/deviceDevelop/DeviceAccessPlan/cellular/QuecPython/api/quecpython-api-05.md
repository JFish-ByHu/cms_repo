# Data Interaction API

## **API Overview**

|                Function                 |                       Description                        |
| :-------------------------------------: | :------------------------------------------------------: |
|    [Qth.sendTrans()](#Qth.sendTrans)    | Sends transparent transmission data to Developer Center. |
|      [Qth.sendTsl()](#Qth.sendTsl)      |           Sends TSL data to Developer Center.            |
|       [Qth.ackTsl()](#Qth.ackTsl)       |    Replies to TSL data request from Developer Center.    |
| [Qth.ackTslServer()](#Qth.ackTslServer) |  Replies to TSL service request from Developer Center.   |

## **API Description**

<span id="Qth.sendTrans"></span>

## <span style="color:#A52A2A">__Qth.sendTrans__</span>

This function sends transparent transmission data to Developer Center.

__Prototype__

```python
Qth.sendTrans(mode, value)
```

__Parameter__

* __Input Parameter__
  
  * __`mode`__: Data sending mode.
    
    | Value | Description                                                                                                                               |
    | ----- | ----------------------------------------------------------------------------------------------------------------------------------------- |
    | 0     | Each message is only sent once with no confirmation or resending required. Data loss or repetition may occur.                             |
    | 1     | Each message is sent at least once until the device receives the reception confirmation from Developer Center. Data repetition may occur. |

  
  * __`value`__: Transparent transmission data.

* __Output Parameter__
  
  * None

* __Return Value__
  
  * `True`: Successful execution
  * `False`: Failed execution

__Example__

```python
Qth.sendTrans(1, "hello world")
```

---

<span id="Qth.sendTsl"></span>

## <span style="color:#A52A2A">__Qth.sendTsl__</span>

This function sends TSL data to Developer Center.

__Prototype__

```python
Qth.sendTsl(mode, value)
```

__Parameter__

* __Input Parameter__
  
  * __`mode`__: Data sending mode.
    
    | Value | Description                                                                                                                               |
    | ----- | ----------------------------------------------------------------------------------------------------------------------------------------- |
    | 0     | Each message is only sent once with no confirmation or resending required. Data loss or repetition may occur.                             |
    | 1     | Each message is sent at least once until the device receives the reception confirmation from Developer Center. Data repetition may occur. |

  
  * __`value`__: Dictionary type. TSL data.

* __Output Parameter__
  
  * None

* __Return Value__
  
  * `True`: Successful execution
  * `False`: Failed execution

__Example__

```python
Qth.sendTsl(1, {1:10,2:'hello'})
```

---

<span id="Qth.ackTsl"></span>

## <span style="color:#A52A2A">__Qth.ackTsl__</span>

This function replies to the TSL data request from Developer Center.

__Prototype__

```python
Qth.ackTsl(mode, value, pkgId)
```

__Parameter__

* __Input Parameter__
  
  * __`mode`__: Data sending mode.
    
    | Value | Description                                                                                                                               |
    | ----- | ----------------------------------------------------------------------------------------------------------------------------------------- |
    | 0     | Each message is only sent once with no confirmation or resending required. Data loss or repetition may occur.                             |
    | 1     | Each message is sent at least once until the device receives the reception confirmation from Developer Center. Data repetition may occur. |

  
  * __`value`__: Dictionary type. TSL data.
  
  * __`pkgId`__: Integer type. Data packet ID.

* __Output Parameter__
  
  * None

* __Return Value__
  
  * `True`: Successful execution
  * `False`: Failed execution

__Example__

```python
def App_cmdReadTslCb(ids, pkgId):
    print('readTsl:', ids, pkgId)
    value = {1:10,2:'hello'}
    Qth.ackTsl(0, value, pkgId)
```

---

<span id="Qth.ackTslServer"></span>

## <span style="color:#A52A2A">__Qth.ackTslServer__</span>

This function replies to TSL service request from Developer Center.

__Prototype__

```python
Qth.ackTslServer(mode, serverId, value, pkgId)
```

__Parameter__

* __Input Parameter__
  
  * __`mode`__: Data sending mode.
    
    | Value | Description                                                                                                                               |
    | ----- | ----------------------------------------------------------------------------------------------------------------------------------------- |
    | 0     | Each message is only sent once with no confirmation or resending required. Data loss or repetition may occur.                             |
    | 1     | Each message is sent at least once until the device receives the reception confirmation from Developer Center. Data repetition may occur. |

  
  * __`serverId`__: Integer type. TSL service ID.
  * __`value`__: Dictionary type. TSL data.
  * __`pkgId`__: Integer type. Data packet ID.
  
* __Output Parameter__
  
  * None

* __Return Value__
  
  * `True`: Successful execution
  * `False`: Failed execution

__Example__

```python
def App_cmdRecvTslServerCb(serverId, value, pkgId):
    print('recvTslServer:', serverId, value, pkgId)
    Qth.ackTslServer(1, serverId, value, pkgId)
```