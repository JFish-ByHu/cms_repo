# OpenAPI List

**BaseURL:**

China Data Center: iot-api.quectelcn.com

European Data Center: iot-api.acceleronix.io

For API usage methods, please refer to [OpenAPI Integration Guide](API_accessInstruction.md)

## Token Management API

| **Interface Address**                                         | **Description**                            |
| ------------------------------------------------------------ | ------------------------------------------ |
| [/v2/quecauth/accessKeyAuthrize/accessKeyLogin](/saasDevelop/OpenAPI/API_accessInstruction) | Obtain token using AccessKey/AccessSecret |
| [/v2/quecauth/accessKeyAuthrize/refreshToken](/saasDevelop/OpenAPI/APIList/refreshToken) | Refresh token time                         |

## Product Management API

| **Interface Address**                                         | **Description**         |
| ------------------------------------------------------------ | ----------------------- |
| [/v2/quecproductmgr/r3/openapi/products](/saasDevelop/OpenAPI/APIList/productList) | Query product list      |
| [/v2/quecproductmgr/r3/openapi/product/detail](/saasDevelop/OpenAPI/APIList/productDetail) | Query product details   |

## Thing Model API

| **Interface Address**                                         | **Description**                             |
| ------------------------------------------------------------ | ------------------------------------------- |
| [/v2/quectsl/openapi/product/export/tslFile](/saasDevelop/OpenAPI/APIList/productTSL) | Query latest product model (JSON format)    |

## Device Management API

| **Interface Address**                                         | **Description**                                    |
| ------------------------------------------------------------ | -------------------------------------------------- |
| [/v2/devicemgr/r3/openapi/product/device/overview](/saasDevelop/OpenAPI/APIList/deviceList) | Query device list under a product                   |
| [/v2/devicemgr/r3/openapi/device/detail](/saasDevelop/OpenAPI/APIList/deviceDetail) | Query device details                                |
| [/v2/deviceshadow/r2/openapi/device/resource](/saasDevelop/OpenAPI/APIList/deviceResource) | Query device resources                              |
| [/v2/devicemgr/r3/openapi/device/create](/saasDevelop/OpenAPI/APIList/deviceCreate) | Add device (single)                                 |
| [/v2/devicemgr/r3/openapi/device/createBatch](/saasDevelop/OpenAPI/APIList/deviceCreateBatch) | Add devices (batch)                                 |
| [/v2/devicemgr/r3/openapi/device/update](/saasDevelop/OpenAPI/APIList/deviceUpdate) | Modify device information (single)                  |
| [/v2/devicemgr/r3/openapi/device/updateBatch](/saasDevelop/OpenAPI/APIList/deviceUpdateBatch) | Modify device information (batch)                   |
| [/v2/devicemgr/r3/openapi/device/delete](/saasDevelop/OpenAPI/APIList/deviceDelete) | Delete device (single)                              |
| [/v2/devicemgr/r1/openapi/product/gateway/subList](/saasDevelop/OpenAPI/APIList/gatewaySubList) | Query sub-devices under a gateway                   |
| [/v2/devicemgr/r1/openapi/product/gateway/getGatewayProductByChildDevice](/saasDevelop/OpenAPI/APIList/gatewayGetProductByChildDevice) | Query current gateway based on sub-device           |
| [/v2/devicemgr/r1/openapi/product/gateway/unbind](/saasDevelop/OpenAPI/APIList/gatewayUnbind) | Unbind gateway relationship using sub-device PK, DK |

## Device Uplink/Downlink Message API

| **Interface Address**                                         | **Description**                               |
| ------------------------------------------------------------ | --------------------------------------------- |
| [/v2/deviceshadow/r3/openapi/dm/readData](/saasDevelop/OpenAPI/APIList/deviceReadData) | Read device model data                         |
| [/v2/deviceshadow/r3/openapi/dm/writeData](/saasDevelop/OpenAPI/APIList/deviceWriteData) | Send downlink model property data              |
| [/v2/deviceshadow/r3/openapi/dm/sendServiceData](/saasDevelop/OpenAPI/APIList/deviceSendServiceData) | Send downlink model service data               |
| [/v2/deviceshadow/r3/openapi/raw/sendData](/saasDevelop/OpenAPI/APIList/deviceSendRawData) | Send downlink transparent transmission data     |
| [/v2/deviceshadow/r1/openapi/device/getlocation](/saasDevelop/OpenAPI/APIList/deviceGetLocation) | Query device's latest location data            |
| [/v2/quecdatastorage/r1/openapi/device/data/history](/saasDevelop/OpenAPI/APIList/deviceDataHistory) | Query device historical uplink/downlink logs   |
| [/v2/quecdatastorage/r1/openapi/device/eventdata/history](/saasDevelop/OpenAPI/APIList/deviceEventHistory) | Query device historical event logs              |

## Message Subscription Management API

| **Interface Address**                                         | **Description**               |
| ------------------------------------------------------------ | ----------------------------- |
| [/v2/quecrule/r1/openapi/queue/create](/saasDevelop/OpenAPI/APIList/queueCreate) | Create queue                   |
| [/v2/quecrule/r1/openapi/queue/delete](/saasDevelop/OpenAPI/APIList/queueDelete) | Delete queue                   |
| [/v2/quecrule/r1/openapi/queue/clear](/saasDevelop/OpenAPI/APIList/queueClear) | Clear queue                    |
| [/v2/quecrule/r1/openapi/queue/list](/saasDevelop/OpenAPI/APIList/queueList) | Query queue list               |
| [/v2/quecrule/r1/openapi/queue/detail](/saasDevelop/OpenAPI/APIList/queueDetail) | Query queue details            |
| [/v2/quecrule/r1/openapi/subscribe/create](/saasDevelop/OpenAPI/APIList/subscribeCreatByPKDK) | Create product/device subscription |
| [/v2/quecrule/r1/openapi/subscribe/saas](/saasDevelop/OpenAPI/APIList/subscribeCreatBySaaS) | Create SaaS subscription       |
| [/v2/quecrule/r1/openapi/subscribe/enduser](/saasDevelop/OpenAPI/APIList/subscribeCreatByEnduser) | Create end-user subscription   |
| [/v2/quecrule/r1/openapi/subscribe/delete](/saasDevelop/OpenAPI/APIList/subscribeDelete) | Delete subscription            |
| [/v2/quecrule/r1/openapi/subscribe/update](/saasDevelop/OpenAPI/APIList/subscribeUpdate) | Modify subscription            |
| [/v2/quecrule/r1/openapi/subscribe/list](/saasDevelop/OpenAPI/APIList/subscribeList) | Query subscription list        |
| [/v2/quecrule/r1/openapi/subscribe/detail](/saasDevelop/OpenAPI/APIList/subscribeDetail) | Query subscription details     |
| [/v2/quecrule/r1/openapi/subscribe/start](/saasDevelop/OpenAPI/APIList/subscribeStart) | Enable subscription            |
| [/v2/quecrule/r1/openapi/subscribe/stop](/saasDevelop/OpenAPI/APIList/subscribeStop) | Stop subscription              |

## End-User API

| **Interface Address**                                         | **Description**                                 |
| ------------------------------------------------------------ | ----------------------------------------------- |
| [/v2/enduser/enterpriseapi/entUserDomainList](/saasDevelop/OpenAPI/APIList/enduserDomainList) | Query user domain list                           |
| [/v2/enduser/enterpriseapi/userDomainUserList](/saasDevelop/OpenAPI/APIList/enduserDomainUserList) | Query registered users in the user domain        |
| [/v2/enduser/enterpriseapi/userInfo](/saasDevelop/OpenAPI/APIList/enduserUserInfo) | Query user information                           |
| [/v2/enduser/enterpriseapi/setUserStatus](/saasDevelop/OpenAPI/APIList/enduserSetUserStatus) | Set user status                                  |
| [/v2/binding/enterpriseapi/userDeviceList](/saasDevelop/OpenAPI/APIList/enduserDeviceList) | Query device list under user (including shared)  |
| [/v2/binding/enterpriseapi/getUserListByBind](/saasDevelop/OpenAPI/APIList/enduserGetUserByDevice) | Query user list with bound devices               |
| [/v2/binding/enterpriseapi/verifyBindingCode](/saasDevelop/OpenAPI/APIList/enduserVerifyBindingCode) | Verify device binding code validity              |
