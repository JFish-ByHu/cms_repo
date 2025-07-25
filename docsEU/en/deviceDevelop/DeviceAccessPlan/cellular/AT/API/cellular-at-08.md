# Device Authorization Commands

## **Device Authorization Command Overview**

|             AT Command              |            Description            |
| :---------------------------------: | :-------------------------------: |
| [AT+QIOTBINDCODE](#AT+QIOTBINDCODE) | Report Device Binding Information |
|      [AT+QIOTRST](#AT+QIOTRST)      |     Reset Device Information      |

## **AT Command Description**

<span id="AT+QIOTBINDCODE"></span>

## <span style="color:#A52A2A">__AT+QIOTBINDCODE (Report Device Binding Information)__</span>

* __Description__: This command reports device binding information.
* __Maximum Response Time__: 300 ms.


### **Test Command**

* __Issue__

  ```c
  AT+QIOTBINDCODE=?
  ```

* __Response__

  Return the supported parameter range.

  ```c
  +QIOTBINDCODE: <timeout>,<bindcode>
  
  OK
  ```

### **Read Command**

* __Issue__

  ```c
  AT+QIOTBINDCODE?
  ```

* __Response__

  Return the current setting

  ```c
  +QIOTBINDCODE: <timeout>,<bindCode>
  
  OK
  ```

### **Write Command**

* __Issue__

  ```c
  AT+QIOTBINDCODE=<timeout>[,<bindCode>]
  ```

* __Response__

  If the command is executed successfully:

  ```c
  OK
  ```

  If there is any error:

  ```c
  ERROR
  ```

***

__Parameter__
* __`<timeout>`__ Integer type. Allowable binding time. Range: 0-3600. Unit: second. When this parameter is 0, it indicates the binding is canceled.
* __`<bindCode>`__ String type. String type. Bind code of the device. The length is fixed to 16 bytes. Range: 0–9, A–F.When it is NULL, the bind code will be generated randomly.

__NOTE__
* This command is supported in SDK version 2.10.3 and above.

---

#### **Example**

__Example 1 (Query the allowed binding time and bind code)__  

```c
[TX]AT+QIOTBINDCODE?

[RX]+QIOTBINDCODE:  105,"7F369C6E6CE6BC9C"

[RX]OK
```
<span style="color:#999AAA">Note: If you send the Read Command when the device is in the unbound state, an ERROR will be returned.</span>

__Example 2 (Set the allowable binding time)__  

```c
[TX]AT+QIOTBINDCODE=120

[RX]OK
```

__Example 3 (Disable the allowable binding time and set the bind code value)__  

```c
[TX]AT+QIOTBINDCODE=0,"0123456789ABCDEF"

[RX]OK

```


***

<span id="AT+QIOTRST">  </span>

## <span style="color:#A52A2A">__AT+QIOTRST (Reset Device Information)__</span>

* __Description__: This command resets device information, including DeviceSecret and device bind code.
* __Maximum Response Time__: 300 ms.


### Test Command

* __Issue__

  ```c
  AT+QIOTRST=?
  ```

* __Response__

  Return whether the command is valid.

  ```c
  OK
  ```

### **Execution Command**

* __Issue__

  ```c
  AT+QIOTRST
  ```

* __Response__

  If the command is executed successfully:

  ```c
  OK
  ```

  If there is any error:

  ```c
  ERROR
  ```

***

__NOTE__
* This command is supported in SDK version 2.10.0 and above.

---

#### **Example**

__Example 1 (Reset DeviceSecret and device bind code)__  

```c
[TX]AT+QIOTRST

[RX]OK

```

***