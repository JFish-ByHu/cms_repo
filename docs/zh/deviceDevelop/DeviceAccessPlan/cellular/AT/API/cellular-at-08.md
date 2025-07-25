# 设备授权 相关指令
## **相关AT指令列表**

|              指令名称               |     功能描述     |
| :---------------------------------: | :--------------: |
| [AT+QIOTBINDCODE](#AT+QIOTBINDCODE) | 上报设备绑定信息 |
|      [AT+QIOTRST](#AT+QIOTRST)      |   重置设备信息   |

## **相关AT指令详情**

<span id="AT+QIOTBINDCODE">  </span>

## <span style="color:#A52A2A">__AT+QIOTBINDCODE (上报设备绑定信息)__</span>

* __说明__：该命令用于上报设备绑定信息。
* __最大响应时间__ ：300 毫秒。


### **测试命令**

* __发送：__

    ```c
    AT+QIOTBINDCODE=?
    ```    
* __响应：__

    响应支持的设置参数格式

    ```c
    +QIOTBINDCODE: <timeout>,<bindcode>
    
    OK
    ```

### **查询命令**

* __发送：__

    ```c
    AT+QIOTBINDCODE?
    ```    
* __响应：__

    响应当前bindCode允许绑定时间与内容

    ```c
    +QIOTBINDCODE: <timeout>,<bindCode>
    
    OK
    ```

### **设置命令**

* __发送：__

  ```c
  AT+QIOTBINDCODE=<timeout>[,<bindCode>]
  ```    
*    __响应：__

  若设置成功

   ```c
   OK
   ```
   
  若出现任何错误

  ```c
  ERROR
  ```    

---

* __参数：__
    * __`<timeout>`__： 整形。可绑定时间，范围：0-3600(单位：秒)，0为取消绑定。
    * __`<bindCode>`__： 字符串类型。设备绑定码；字符范围：0~9，A~F，为NULL时系统随机生成(长度固定为16节)。

* __备注：__
    * __2.10.3及以上版本支持__

---

#### **示例**
__示例1 (查询bindCode允许绑定时间以及bindCode值)__  
```c
[TX]AT+QIOTBINDCODE?

[RX]+QIOTBINDCODE: 105,"7F369C6E6CE6BC9C"

[RX]OK
```
<span style="color:#999AAA">提示：若设备处于不可绑定状态时发送查询命令则会响应ERROR。</span>

__示例2 (设置bindCode绑定允许时间)__  

```c
[TX]AT+QIOTBINDCODE=120

[RX]OK
```

__示例3 (关闭bindCode绑定允许时间以及设置bindCode值)__  

```c
[TX]AT+QIOTBINDCODE=0,"0123456789ABCDEF"

[RX]OK

```

***

<span id="AT+QIOTRST">  </span>

## <span style="color:#A52A2A">__AT+QIOTRST (重置设备信息)__</span>

* __说明__：该命令用于重置设备bindCode与设备秘钥。
* __最大响应时间__ ：300 毫秒。


### 测试命令

* __发送：__

    ```c
    AT+QIOTRST=?
    ```    
* __响应：__

    响应命令支持

    ```c

    OK
    ```
### **执行命令**

* __发送：__

    ```c
    AT+QIOTRST
    ```    
* __响应：__

    重置成功
    ```c
    OK
    ```
        
    若出现任何错误
    ```c
    ERROR
    ```

* __备注：__
    * __2.10.0及以上版本支持__

---

#### **示例**
__示例1 (重置设备bindCode与设备秘钥)__  
```c
[TX]AT+QIOTRST

[RX]OK

```
***