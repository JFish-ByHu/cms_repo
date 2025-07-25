# Quecthing 更新历史

## 版本2.2.2
>* 优化可能导致日志工具Dump的打印
>* 增加ProductKey/ProductSecret配置时的长度限制
>* 修复缓存模式下模组异常dump的问题
>* 优化PSM模式下的DNS策略
>* 优化部分AT的测试命令返回值的格式和数值范围

## 版本2.2.1
>* 优化AT命令和QuecOpen方案的兼容性
>* 优化DNS策略

## 版本2.2.0
>* 优化重复包过滤功能
>* 修复OTA失败导致异常Dump的问题
>* 修复浮点数的精度丢失问题
>* 修复分块发送数据失败后阻塞下次数据发送的问题
>* 修复断开连接后没有清空设备发送链表的问题
>* 修复设备在发送数据时会偶尔出现ACK错乱的问题
>* 修改默认连接域名

## 版本2.1.3
>* 修改设备信息上报策略
>* 修复电信AEP平台上报设备信息不全的问题


## 版本2.1.2
>* 支持开发者中心设备引导和注册 
>* 支持电信AEP平台设备注册 
>* 模组基本信息和状态获取与上报 
>* 业务功能-透传上行和下行 
>* 业务功能-物模型上报、下发、平台读取与设备应答 
>* 物模型数据格式支持TTLV和JSON,二选一 
>* 业务功能-内置定位数据、外置定位数据的上报 
>* 支持FOTA与SOTA(电信AEP暂不支持) 
>* 支持DTLS通信和session对通信数据加密 
>* 支持外部设置设备的DK和DS
