# Wi-Fi&Ble双模设备添加

## 功能概述

对于Wi-Fi&Ble双模设备, App SDK可通过蓝牙给设备配置路由器名称和密码, 使设备连上路由器, 并连上云

也可以先通过蓝牙绑定设备使用(近场控制), 并在后续给设备配置路由器信息连云并支持远程控制, 这个配置过程叫做设备激活

```kotlin
//设备配网相关服务
QuecDevicePairingService

//设备激活相关服务
QuecDeviceVerifyService

//在线设备直接添加相关服务
QuecDeviceService
```

## 设备配网

设备添加流程

1. 添加配网监听器
2. 调用开始发现设备接口, 并通过配网监听器回调获取发现的设备
3. 选择发现的设备, 调用接口开始添加
4. 通过配网监听器回调, 获取设备添加状态(成功/失败)
5. 完成设备添加后, 移除配网监听器

### 开始发现设备

**接口说明**

通过该接口可以发现蓝牙设备, 注意调用该接口前, 需先申请以下动态权限

- android.permission.BLUETOOTH
- android.permission.BLUETOOTH_SCAN
- android.permission.BLUETOOTH_CONNECT
- android.permission.BLUETOOTH_ADMIN
- android.permission.ACCESS_FINE_LOCATION

```kotlin
fun scan(name: String?, mac: String?)
```

**参数说明**

| 参数   | 是否必传 | 说明            |
|------|------|---------------|
| name | 否    | 过滤条件: 设备名称    |
| mac  | 否    | 过滤条件: 设备mac地址 |

**示例代码**

```kotlin
QuecDevicePairingService.scan(null, null)
```

### 停止发现设备

**接口说明**

停止发现设备, 在发现到设备后, 或退出添加时, 必须停止发现设备, 否则会影响设备列表中设备正常的连接

```kotlin
fun stopScan()
```

**示例代码**

```kotlin
QuecDevicePairingService.stopScan()
```

### 添加配网监听器

**接口说明**

通过该接口可以添加配网监听器, 监听配网过程, 包括扫描到设备, 更新添加进度, 配网结果等

```kotlin
fun addPairingListener(listener: QuecPairingListener?)
```

**参数说明**

| 参数       | 是否必传 | 说明    |
|----------|------|-------|
| listener | 是    | 配网监听器 |

**QuecPairingListener接口定义**

```kotlin
interface QuecPairingListener {
x
    /**
     * 扫描到设备
     * @param deviceBean 设备信息
     */
    fun onScanDevice(deviceBean: QuecPairDeviceBean)
    
    /**
     * 更新添加进度
     * @param deviceBean 设备信息
     * @param progress 进度
     */
    fun onUpdatePairingStatus(deviceBean: QuecPairDeviceBean, progress: Float)

    /**
     * 配网结果
     * @param deviceBean 设备信息
     * @param result 配网结果
     * @param errorCode 错误码
     */
    fun onUpdatePairingResult(deviceBean: QuecPairDeviceBean, result: Boolean, errorCode: QuecPairErrorCode)
}
```

**示例代码**

```kotlin
val listener = object : QuecPairingListener {
        override fun onScanDevice(deviceBean: QuecPairDeviceBean) {
            //扫描到的设备
        }

        override fun onUpdatePairingResult(
            deviceBean: QuecPairDeviceBean,
            result: Boolean,
            errorCode: QuecPairErrorCode
        ) {
            //更新添加进度
        }

        override fun onUpdatePairingStatus(deviceBean: QuecPairDeviceBean, progress: Float) {
            //更新配网结果
        }
    }
    
QuecDevicePairingService.addPairingListener(listener)
```

**QuecPairDeviceBean属性定义**

| 字段              | 类型            | 描述                             |
|-----------------|---------------|--------------------------------|
| deviceName      | String        | 设备名称                           |
| productName     | String        | 产品名称                           |
| productLogo     | String        | 产品logo                         |
| bindingMode     | Int           | 绑定模式 1: 多绑 ,2: 单绑 ,3: 轮流绑      |
| activeBluetooth | boolean       | 优先蓝牙激活开关配置：true: 开启，false: 未开启 |
| bleDevice       | QuecBleDevice | 设备信息                           |

**QuecBleDevice属性定义**

| 字段                  | 类型        | 描述                                                                                                                                    |
|---------------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------|
| id                  | String    | 设备id                                                                                                                                  |
| productKey          | String    | 设备productKey                                                                                                                          |
| deviceKey           | String    | 设备deviceKey                                                                                                                           |
| mac                 | String    | 设备mac地址                                                                                                                               |
| capabilitiesBitmask | int       | 设备能力值 <br/>bit0=1 表示设备支持 WAN 远场通讯能力 <br/>bit1=1 表示设备支持 WiFi LAN 近场通讯能力 <br/>bit2=1 表示设备支持 BLE 近场通讯能力 <br/>bit3=1 表示设备支持 Matter 近场通讯能力 |
| data                | ByteArray | 设备自定义数据                                                                                                                               |

### 移除配网监听器

**接口说明**

移除配网监听器, 在结束添加后, 必须移除监听器, 否则会导致内存泄漏

```kotlin
fun removePairingListener(listener: QuecPairingListener?)
```

**参数说明**

| 参数       | 是否必传 | 说明    |
|----------|------|-------|
| listener | 是    | 配网监听器 |

**示例代码**

```kotlin
QuecDevicePairingService.removePairingListener(listener)
```

### 开始添加设备

**接口说明**

开始添加设备, 在发现设备后, 可传入设备信息进行添加

```kotlin
fun startPairingByDevices(
    devices: MutableList<QuecPairDeviceBean>?, ssid: String?, pw: String?
)
```

**参数说明**

| 参数      | 是否必传 | 说明                    |
|---------|------|-----------------------|
| devices | 是    | 发现的设备信息, 可传多个进行添加     |
| ssid    | 否    | 路由器名称 , 纯蓝牙设备添加时传null |
| pw      | 否    | 路由器密码 ,纯蓝牙设备添加时传null  |             |

**示例代码**

```kotlin
val bean = QuecPairDeviceBean() //搜索发现的设备信息

QuecDevicePairingService.startPairingByDevices(
    mutableListOf(bean),
    "ssid",
    "pwd"
)
```

### 停止添加设备

**接口说明**

停止添加设备, 对于未添加成功的设备, 可调用此接口停止添加设备

```kotlin
fun cancelAllDevicePairing()
```

**示例代码**

```kotlin
QuecDevicePairingService.cancelAllDevicePairing()
```

### 设置配网超时时间

**接口说明**

设置配网超时时间(60~120,默认120秒)

```kotlin
fun setWiFiPairingDuration(duration: Int): Boolean
```

**参数说明**

| 参数       | 是否必传 | 说明       |
|----------|------|----------|
| duration | 是    | 超时时间,单位秒 |

**示例代码**

```kotlin
QuecDevicePairingService.setBlePairingDuration(60)
```

## 设备纯蓝牙绑定

### 设备蓝牙绑定

设备蓝牙绑定流程同设备配网流程, 差异点主要在于发现设备时, QuecPairDeviceBean.activeBluetooth的值会有区别, 当此值为true时,
在添加设备时, 会直接进行纯蓝牙绑定

QuecPairDeviceBean.activeBluetooth的值默认为false ,将其值修改为true的方式有两种:

1. 在调用SDK搜索到设备时, 手动将其activeBluetooth值置为true
2. 在[开发者中心](https://iot.quectelcn.com/login)的产品配置中, 打开产品配置, "优先蓝牙激活"开关

设备添加成功后, 可通过获取设备列表接口拿到设备信息, 并可正常连接和控制

## 设备激活

对于纯蓝牙绑定的设备, 可通过设备激活的方式, 获取设备信息, 并可正常连接和控制

此类型设备可以通过设备列表获取到的设备信息类QuecDeviceModel中的isBleBindState()方法区分, 当此方法返回true, 表示设备可进行激活

设备激活流程

1. 添加激活状态监听器
2. 调用接口开始激活
3. 通过激活监听器回调, 获取设备激活状态(成功/失败)
4. 完成设备激活后, 移除激活监听器

### 添加激活状态监听器

**接口说明**

添加激活状态监听器, 需在开始激活前调用

```kotlin
fun addVerifyListener(listener: QuecVerifyDelegate)
```

**参数说明**

| 参数       | 是否必传 | 说明      |
|----------|------|---------|
| listener | 是    | 激活状态监听器 |

**QuecVerifyDelegate接口定义**

```kotlin
interface QuecVerifyDelegate {
    /**
     * 绑定结果回调, 正在激活中设备
     * @param device 设备信息
     */
    fun didStartVerifyingDevice(device: QuecDeviceModel)
    
    /**
     * 绑定结果回调, 激活结果
     * @param device 设备信息
     * @param result 激活结果, true表示成功 ,false表示失败
     * @param error 错误信息
     */
    fun didUpdateVerifyResult(device: QuecDeviceModel, result: Boolean, error: ErrorCode?)
}
```

QuecDeviceModel的属性定义见 [设备管理](设备管理.md)

**ErrorCode枚举定义**

| 字段                      | 描述                 |
|-------------------------|--------------------|
| COMMON                  | 激活失败, 通用失败         |
| CONNECT_FAIL            | 激活失败, 连接设备失败       |
| DEVICE_ALREADY_VERIFIED | 设备已激活              |
| DEVICE_NOT_FOUND        | 设备激活失败，设备未找到       |
| DEVICE_NOT_VERIFY       | 设备激活失败，设备未认证(查询超时) |
| WIFI_SSID_NOT_SET       | 未设置WiFi名称          |

**示例代码**

```kotlin
val verifyListener = object : IQuecDeviceVerifyService.QuecVerifyDelegate {
    override fun didStartVerifyingDevice(device: QuecDeviceModel) {
        // 开始激活中
    }
    override fun didUpdateVerifyResult(
        device: QuecDeviceModel,
        result: Boolean,
        error: IQuecDeviceVerifyService.ErrorCode?
    ) {
        // 激活结果
    }
}

QuecDeviceVerifyService.addVerifyListener(verifyListener)
```

### 移除激活状态监听器

**接口说明**

移除激活状态监听器, 在完成激活后需要移除监听器, 否则会导致内存泄漏

```kotlin
fun removeVerifyListener(listener: QuecVerifyDelegate)
```

**参数说明**

| 参数       | 是否必传 | 说明  |
|----------|------|-----|
| listener | 是    | 监听器 |

**示例代码**

```kotlin
QuecDeviceVerifyService.removeVerifyListener(verifyListener)
```

### 开始设备激活

**接口说明**

开始设备激活, 注意进入激活状态时, 不能再控制设备做其他功能, 可批量添加设备进行激活

```kotlin
fun startVerifyByDevices(
    devices: List<QuecDeviceModel>,
    ssid: String,
    pwd: String
)
```

**参数说明**

| 参数      | 是否必传 | 说明    |
|---------|------|-------|
| devices | 是    | 设备列表  |
| ssid    | 是    | 路由器名称 |
| pwd     | 是    | 路由器密码 |

**示例代码**

```kotlin
//device为从设备列表中获取到的设备信息
QuecDeviceVerifyService.startVerifyByDevices(listOf(device), "ssid", "pwd")
```

### 停止设备激活

**接口说明**

停止设备激活, 在激活过程中, 可调用此接口停止设备激活, 只对未完成激活的设备有效

```kotlin
fun cancelAllDeviceVerify()
```

**示例代码**

```kotlin
QuecDeviceVerifyService.cancelAllDeviceVerify()
```

## 在线设备直接添加

对于已经配网在线的设备, 可以直接进行设备添加

### 通过SN绑定设备

**接口说明**

通过SN绑定设备, 可以添加已经在线的设备

```kotlin
fun bindDeviceBySerialNumber(
    serialNumber: String,
    productKey: String,
    deviceName: String?,
    callback: QuecCallback<QuecDeviceBindSNModel>
)
```

**参数说明**

| 参数           | 是否必传 | 说明           |
|--------------|------|--------------|
| serialNumber | 是    | 设备序列号        |
| productKey   | 是    | 设备productKey |
| deviceName   | 否    | 设备名称         |
| callback     | 是    | 请求回调         |

**示例代码**

```kotlin
QuecDeviceService.bindDeviceBySerialNumber(content2, content1, null) {
    if (it.isSuccess) {
        //请求成功
    } else {
        val code = it.code //请求失败, 错误码
        val msg = it.msg   //请求失败, 错误信息
    }
}
```
