# OpenAPI列表

**BaseURL:**

中国数据中心：iot-api.quectelcn.com

欧洲数据中心：iot-api.acceleronix.io

API使用方法可见[OpenAPI接入说明](API_accessInstruction.md)

## token管理API

| **接口地址**                                                 | **描述**                            |
| ------------------------------------------------------------ | ----------------------------------- |
| [/v2/quecauth/accessKeyAuthrize/accessKeyLogin](/saasDevelop/OpenAPI/API_accessInstruction) | 使用AccessKey/AccessSecret获取token |
| [/v2/quecauth/accessKeyAuthrize/refreshToken](/saasDevelop/OpenAPI/APIList/refreshToken) | 刷新token时间                       |

## 产品管理API

| **接口地址**                                                 | **描述**     |
| ------------------------------------------------------------ | ------------ |
| [/v2/quecproductmgr/r3/openapi/products](/saasDevelop/OpenAPI/APIList/productList) | 查询产品列表 |
| [/v2/quecproductmgr/r3/openapi/product/detail](/saasDevelop/OpenAPI/APIList/productDetail) | 查询产品详情 |

## 物模型API

| **接口地址**                                                 | **描述**                       |
| ------------------------------------------------------------ | ------------------------------ |
| [/v2/quectsl/openapi/product/export/tslFile](/saasDevelop/OpenAPI/APIList/productTSL) | 查询产品最新物模型（JSON格式） |

## 设备管理API

| **接口地址**                                                 | **描述**                       |
| ------------------------------------------------------------ | ------------------------------ |
| [/v2/devicemgr/r3/openapi/product/device/overview](/saasDevelop/OpenAPI/APIList/deviceList) | 查询产品下设备列表             |
| [/v2/devicemgr/r3/openapi/device/detail](/saasDevelop/OpenAPI/APIList/deviceDetail) | 查询设备详情                   |
| [/v2/deviceshadow/r2/openapi/device/resource](/saasDevelop/OpenAPI/APIList/deviceResource) | 查询设备资源                   |
| [/v2/devicemgr/r3/openapi/device/update](/saasDevelop/OpenAPI/APIList/deviceUpdate) | 修改设备信息（单个）           |
| [/v2/devicemgr/r3/openapi/device/updateBatch](/saasDevelop/OpenAPI/APIList/deviceUpdateBatch) | 修改设备信息（批量）           |
| [/v2/devicemgr/r3/openapi/device/delete](/saasDevelop/OpenAPI/APIList/deviceDelete) | 删除设备（单个）               |
| [/v2/devicemgr/r1/openapi/product/gateway/subList](/saasDevelop/OpenAPI/APIList/gatewaySubList) | 查询网关下子设备               |
| [/v2/devicemgr/r1/openapi/product/gateway/getGatewayProductByChildDevice](/saasDevelop/OpenAPI/APIList/gatewayGetProductByChildDevice) | 根据子设备查询当前所属网关     |
| [/v2/devicemgr/r1/openapi/product/gateway/unbind](/saasDevelop/OpenAPI/APIList/gatewayUnbind) | 根据子设备PK、DK解除和网关关系 |

## 设备上下行消息API

| **接口地址**                                                 | **描述**                   |
| ------------------------------------------------------------ | -------------------------- |
| [/v2/deviceshadow/r3/openapi/dm/readData](/saasDevelop/OpenAPI/APIList/deviceReadData) | 读取设备物模型数据         |
| [/v2/deviceshadow/r3/openapi/dm/writeData](/saasDevelop/OpenAPI/APIList/deviceWriteData) | 发送下行物模型属性数据     |
| [/v2/deviceshadow/r3/openapi/dm/sendServiceData](/saasDevelop/OpenAPI/APIList/deviceSendServiceData) | 发送下行物模型服务数据     |
| [/v2/deviceshadow/r3/openapi/raw/sendData](/saasDevelop/OpenAPI/APIList/deviceSendRawData) | 发送下行透传数据           |
| [/v2/deviceshadow/r1/openapi/device/getlocation](/saasDevelop/OpenAPI/APIList/deviceGetLocation) | 查询设备最新定位数据       |
| [/v2/quecdatastorage/r1/openapi/device/data/history](/saasDevelop/OpenAPI/APIList/deviceDataHistory) | 查询设备历史上下行数据日志 |
| [/v2/quecdatastorage/r1/openapi/device/eventdata/history](/saasDevelop/OpenAPI/APIList/deviceEventHistory) | 查询设备历史事件日志       |

## 消息订阅管理API

| **接口地址**                                                 | **描述**          |
| ------------------------------------------------------------ | ----------------- |
| [/v2/quecrule/r1/openapi/queue/create](/saasDevelop/OpenAPI/APIList/queueCreate) | 创建队列          |
| [/v2/quecrule/r1/openapi/queue/delete](/saasDevelop/OpenAPI/APIList/queueDelete) | 删除队列          |
| [/v2/quecrule/r1/openapi/queue/clear](/saasDevelop/OpenAPI/APIList/queueClear) | 清理队列          |
| [/v2/quecrule/r1/openapi/queue/list](/saasDevelop/OpenAPI/APIList/queueList) | 查询队列列表      |
| [/v2/quecrule/r1/openapi/queue/detail](/saasDevelop/OpenAPI/APIList/queueDetail) | 查询队列详情      |
| [/v2/quecrule/r1/openapi/subscribe/create](/saasDevelop/OpenAPI/APIList/subscribeCreatByPKDK) | 创建产品/设备订阅 |
| [/v2/quecrule/r1/openapi/subscribe/saas](/saasDevelop/OpenAPI/APIList/subscribeCreatBySaaS) | 创建SaaS订阅      |
| [/v2/quecrule/r1/openapi/subscribe/enduser](/saasDevelop/OpenAPI/APIList/subscribeCreatByEnduser) | 创建终端用户订阅  |
| [/v2/quecrule/r1/openapi/subscribe/delete](/saasDevelop/OpenAPI/APIList/subscribeDelete) | 删除订阅          |
| [/v2/quecrule/r1/openapi/subscribe/update](/saasDevelop/OpenAPI/APIList/subscribeUpdate) | 修改订阅          |
| [/v2/quecrule/r1/openapi/subscribe/list](/saasDevelop/OpenAPI/APIList/subscribeList) | 查询订阅列表      |
| [/v2/quecrule/r1/openapi/subscribe/detail](/saasDevelop/OpenAPI/APIList/subscribeDetail) | 查询订阅详情      |
| [/v2/quecrule/r1/openapi/subscribe/start](/saasDevelop/OpenAPI/APIList/subscribeStart) | 启用订阅          |
| [/v2/quecrule/r1/openapi/subscribe/stop](/saasDevelop/OpenAPI/APIList/subscribeStop) | 停止订阅          |

## 终端用户API

| **接口地址**                                                 | **描述**                         |
| ------------------------------------------------------------ | -------------------------------- |
| [/v2/enduser/enterpriseapi/entUserDomainList](/saasDevelop/OpenAPI/APIList/enduserDomainList) | 查询用户域列表                   |
| [/v2/enduser/enterpriseapi/userDomainUserList](/saasDevelop/OpenAPI/APIList/enduserDomainUserList) | 查询用户域中注册的用户列表       |
| [/v2/enduser/enterpriseapi/userInfo](/saasDevelop/OpenAPI/APIList/enduserUserInfo) | 查询用户信息                     |
| [/v2/enduser/enterpriseapi/setUserStatus](/saasDevelop/OpenAPI/APIList/enduserSetUserStatus) | 设置用户状态                     |
| [/v2/binding/enterpriseapi/userDeviceList](/saasDevelop/OpenAPI/APIList/enduserDeviceList) | 查询用户下的设备列表（含被分享） |
| [/v2/binding/enterpriseapi/getUserListByBind](/saasDevelop/OpenAPI/APIList/enduserGetUserByDevice) | 查询已绑定设备的用户列表         |
| [/v2/binding/enterpriseapi/verifyBindingCode](/saasDevelop/OpenAPI/APIList/enduserVerifyBindingCode) | 验证设备绑定码有效性             |

