# Device Connection API

## **API Overview**

|         Function          |                             Description                             |
| :-----------------------: | :-----------------------------------------------------------------: |
|  [Qth.init()](#Qth.init)  |                       Initializes QuecThing.                        |
| [Qth.start()](#Qth.start) |              Connects the device to Developer Center.               |
|  [Qth.stop()](#Qth.stop)  |            Disconnects the device from Developer Center.            |
| [Qth.state()](#Qth.state) | Gets the connection status between the device and Developer Center. |
| [Qth.reset()](#Qth.reset) |                         Resets the device.                          |

## **API Description**

<span id="Qth.init"></span>

## <span style="color:#A52A2A">__Qth.init__</span>

This function automatically calls the initialization functions of all component objects to initialize QuecThing SDK. This function must be called before other functions are used.

__Prototype__

```python
Qth.init()
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
Qth.init()
```

---

<span id="Qth.start"></span>

## <span style="color:#A52A2A">__Qth.start__</span>

This function connects the device to Developer Center with an automatic data call.

__Prototype__

```python
Qth.start()
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
Qth.stop()
```

---

<span id="Qth.stop"></span>

## <span style="color:#A52A2A">__Qth.stop__</span>

This function disconnects the device from Developer Center.

__Prototype__

```python
Qth.stop()
```

__Parameter__

* __Input Parameter__
  
  * None

* __Output Parameter__
  
  * None

* __Return Value__
  
  * None

__Example__

```python
Qth.stop()
```

---

<span id="Qth.state"></span>

## <span style="color:#A52A2A">__Qth.state__</span>

This function gets the connection status between the device and Developer Center.

__Prototype__

```python
Qth.state()
```

__Parameter__

* __Input Parameter__
  
  * None

* __Output Parameter__
  
  * None

* __Return Value__
  
  * `True`: Connected
  * `False`: Disconnected

__Example__

```python
ret = Qth.state()
print("ret:", ret)
```

---

<span id="Qth.reset"></span>

## <span style="color:#A52A2A">__Qth.reset__</span>

This function resets the device. After this function is called, the DeviceKey will be reset and the relationship between the user and the device will be unbound. The reset result will be sent in the registered callback function.

__Prototype__

```python
Qth.reset()
```

__Parameter__

* __Input Parameter__
  
  * None

* __Output Parameter__
  
  * None

* __Return Value__
  
  * None

__Example__

```python
Qth.reset()
```