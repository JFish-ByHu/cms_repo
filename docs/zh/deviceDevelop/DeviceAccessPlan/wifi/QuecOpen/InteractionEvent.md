# **错误码列表**

| 枚举值                                | 十六进制 | 十进制 | 描述                                         |
| ------------------------------------- | -------- | ------ | -------------------------------------------- |
| OPRT_OK                               | -0x0000  | -0     | 执行成功                                     |
| OPRT_COM_ERROR                        | -0x0001  | -1     | 通用错误                                     |
| OPRT_INVALID_PARM                     | -0x0002  | -2     | 无效的入参                                   |
| OPRT_MALLOC_FAILED                    | -0x0003  | -3     | 内存分配失败                                 |
| OPRT_NOT_SUPPORTED                    | -0x0004  | -4     | 不支持                                       |
| OPRT_NOT_FOUND                        | -0x0005  | -5     | 没有找到对象                                 |
| OPRT_INDEX_OUT_OF_BOUND               | -0x0006  | -6     | 索引越界                                     |
| OPRT_EXCEED_UPPER_LIMIT               | -0x0007  | -7     | 超过上限                                     |
| OPRT_NOT_EXIST                        | -0x0008  | -8     | 不存在                                       |
| OPRT_QTH_CONFIG_READ_FAILED           | -0x1000  | -4096  | 读配置失败                                   |
| OPRT_QTH_CONFIG_WRITE_FAILED          | -0x1001  | -4097  | 写配置失败                                   |
| OPRT_QTH_CONFIG_SET_DEVINFO_FAILED    | -0x1002  | -4098  | 设置设备信息失败                             |
| OPRT_QTH_CONFIG_APPVER_STRDUMP_FAILED | -0x1003  | -4099  | 设置 APP Version 失败                        |
| OPRT_QTH_CONFIG_DK_FORMT_FAILED       | -0x1004  | -4100  | 设置 DK 数据格式失败                         |
| OPRT_QTH_CONFIG_MAC_GET_FAILED        | -0x1005  | -4101  | 设备 MAC 获取失败                            |
| OPRT_QTH_DEV_GET_CONFIG_FAILED        | -0x1100  | -4352  | 获取配置失败                                 |
| OPRT_QTH_DEV_NOT_AUTH                 | -0x1101  | -4353  | 设备未认证                                   |
| OPRT_QTH_DEV_CONN_FAILED              | -0x1102  | -4354  | 设备连接失败                                 |
| OPRT_QTH_DEV_RESET_FAILED             | -0x1103  | -4355  | 设备重置失败                                 |
| OPRT_QTH_DEV_REMOVE_FAILED            | -0x1104  | -4356  | 设备移除失败                                 |
| OPRT_QTH_DEV_ALREADY_CONNECTED        | -0x1105  | -4357  | 设备已连接                                   |
| OPRT_QTH_DEV_RESET_ABNORMAL           | -0x1106  | -4358  | 设备重置异常(一机一密设备收到了新的设备密钥) |
| OPRT_QTH_CMD_PKG_FORMAT_INVALID       | -0x1200  | -4608  | 数据包格式错误                               |
| OPRT_QTH_CMD_PKG_GENERATE_FAILED      | -0x1201  | -4609  | 数据包生成失败                               |
| OPRT_QTH_CMD_UNSUPPORTED              | -0x1202  | -4610  | 数据命令不支持                               |
| OPRT_QTH_CMD_PKG_SEND_FAILED          | -0x1203  | -4611  | 数据包发送失败                               |
| OPRT_QTH_WAN_PKG_FORMAT_INVALID       | -0x1300  | -4864  | 广域网数据包格式错误                         |
| OPRT_QTH_WAN_PKG_REPEATED             | -0x1301  | -4865  | 广域网数据包重复                             |
| OPRT_QTH_WAN_GET_TOPIC_FAILED         | -0x1302  | -4866  | 广域网获取 topic 失败                        |
| OPRT_QTH_WAN_UNKNOWN_FAILED           | -0x1303  | -4867  | 广域网未知连接错误                           |
| OPRT_QTH_LOC_OUTSIDE_IS_NULL          | -0x1500  | -5376  | 外置定位数据为空                             |
| OPRT_QTH_DMP_SERVER_ERROR             | -0x1700  | -5888  | 调用其他微服务接口网络错误                   |
| OPRT_QTH_DMP_SEND_NOT_ALLOW           | -0x1701  | -5889  | 设备消息被限制                               |
| OPRT_QTH_DMP_AUTH_NOT_ALLOW           | -0x1702  | -5890  | 设备不能激活                                 |
| OPRT_QTH_DMP_AUTH_ALREADY             | -0x1703  | -5891  | 设备已认证                                   |
| OPRT_QTH_DMP_PK_NOT_FOUND             | -0x1704  | -5892  | 通过 PK 没有查到产品信息                     |
| OPRT_QTH_DMP_PAYLOAD_INVALID          | -0x1705  | -5893  | 密码解析错误                                 |
| OPRT_QTH_DMP_SIGN_ERROR               | -0x1706  | -5894  | Sign 错误                                    |
| OPRT_QTH_DMP_RAND_ILLEGAL             | -0x1707  | -5895  | Rand 不符合规则                              |
| OPRT_QTH_DMP_MISMATCH                 | -0x1708  | -5896  | 参数传入的 DK,PK 与数据库存储的 DK,PK 不一致 |
| OPRT_QTH_DMP_DK_ILLEGAL               | -0x1709  | -5897  | DK 不符合规则                                |
| OPRT_QTH_DMP_FLAG_ILLEGAL             | -0x170a  | -5898  | Flag 不符合规则                              |
| OPRT_QTH_DMP_CLIENTID_ERROR           | -0x170b  | -5899  | ClientId 规则和 Password 不匹配              |
| OPRT_QTH_DMP_DS_ERROR                 | -0x170c  | -5900  | 设备的 DS 错误                               |
| OPRT_QTH_DMP_DK_NOT_FOUND             | -0x170d  | -5901  | 没查到设备信息                               |
| OPRT_QTH_DMP_SUB_RELATED              | -0x170e  | -5902  | 网关与子设备没有关联关系                     |
| OPRT_QTH_DMP_SUB_CONNECT_ALREADY      | -0x170f  | -5903  | 子设备重复登录                               |
| OPRT_QTH_DMP_DEV_OFFLINE              | -0x1710  | -5904  | 设备不在线                                   |
| OPRT_QTH_DMP_UNKNOWN_ERROR            | -0x1711  | -5905  | 未知错误                                     |
| OPRT_QTH_OTA_REQUEST_FAILED           | -0x1a00  | -6656  | 发起 OTA 请求失败                            |
| OPRT_QTH_OTA_ID_NOT_TASK              | -0x1a01  | -6657  | 该组件标识没有在进行的 OTA 任务              |
| OPRT_QTH_WIFI_OPEN_NETCFG_FAILED      | -0x1c00  | -7168  | 打开 wifi 配网失败                           |
| OPRT_QTH_WIFI_CONN_ROUTER_FAILED      | -0x1c01  | -7169  | 连接路由器失败                               |
| OPRT_QTH_WIFI_ROUTER_DISCONNECTED     | -0x1c02  | -7170  | 路由器断连                                   |
| OPRT_QTH_SUBDEV_OFFLINE               | -0x1d00  | -7424  | 当前子设备离线                               |
| OPRT_QTH_SUBDEV_NODE_NOTFOUND         | -0x1d01  | -7425  | 未找到当前子设备                             |
| OPRT_QTH_SUBDEV_PS_NOTFOUNT           | -0x1d02  | -7426  | 未找到当前子设备产品密钥                     |
| OPRT_QTH_SUBDEV_DS_NOTFOUNT           | -0x1d03  | -7427  | 未找到当前子设备设备密钥                     |
| OPRT_QTH_SUBDEV_ALREADY_LOGIN         | -0x1d04  | -7428  | 当前子设备已登陆                             |
