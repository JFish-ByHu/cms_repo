# **Error Code List**

| Enumeration Value                     | Hexadecimal | Decimal | Description                                                                                                                |
| ------------------------------------- | ----------- | ------- | -------------------------------------------------------------------------------------------------------------------------- |
| OPRT_OK                               | -0x0000     | -0      | Successful execution.                                                                                                      |
| OPRT_COM_ERROR                        | -0x0001     | -1      | General error.                                                                                                             |
| OPRT_INVALID_PARM                     | -0x0002     | -2      | Invalid parameter.                                                                                                         |
| OPRT_MALLOC_FAILED                    | -0x0003     | -3      | Memory allocation failed.                                                                                                  |
| OPRT_NOT_SUPPORTED                    | -0x0004     | -4      | Not supported.                                                                                                             |
| OPRT_NOT_FOUND                        | -0x0005     | -5      | Object not found.                                                                                                          |
| OPRT_INDEX_OUT_OF_BOUND               | -0x0006     | -6      | Index out of bounds.                                                                                                       |
| OPRT_EXCEED_UPPER_LIMIT               | -0x0007     | -7      | Exceed upper limit.                                                                                                        |
| OPRT_NOT_EXIST                        | -0x0008     | -8      | Not exist.                                                                                                                 |
| OPRT_QTH_CONFIG_READ_FAILED           | -0x1000     | -4096   | Reading failed.                                                                                                            |
| OPRT_QTH_CONFIG_WRITE_FAILED          | -0x1001     | -4097   | Writing failed.                                                                                                            |
| OPRT_QTH_CONFIG_SET_DEVINFO_FAILED    | -0x1002     | -4098   | Failed to set device information.                                                                                          |
| OPRT_QTH_CONFIG_APPVER_STRDUMP_FAILED | -0x1003     | -4099   | Failed to set App version.                                                                                                 |
| OPRT_QTH_CONFIG_DK_FORMT_FAILED       | -0x1004     | -4100   | Failed to set DeviceKey format.                                                                                            |
| OPRT_QTH_CONFIG_MAC_GET_FAILED        | -0x1005     | -4101   | Failed to get device MAC address.                                                                                          |
| OPRT_QTH_DEV_GET_CONFIG_FAILED        | -0x1100     | -4352   | Failed to get the configuration.                                                                                           |
| OPRT_QTH_DEV_NOT_AUTH                 | -0x1101     | -4353   | Device not authenticated.                                                                                                  |
| OPRT_QTH_DEV_CONN_FAILED              | -0x1102     | -4354   | Device connection failed.                                                                                                  |
| OPRT_QTH_DEV_RESET_FAILED             | -0x1103     | -4355   | Device reset failed.                                                                                                       |
| OPRT_QTH_DEV_REMOVE_FAILED            | -0x1104     | -4356   | Failed to delete the device.                                                                                               |
| OPRT_QTH_DEV_ALREADY_CONNECTED        | -0x1105     | -4357   | Device connected.                                                                                                          |
| OPRT_QTH_DEV_RESET_ABNORMAL           | -0x1106     | -4358   | Device reset error (New DeviceSecret has been received for the device with unique-DeviceSecret-per-device authentication). |
| OPRT_QTH_CMD_PKG_FORMAT_INVALID       | -0x1200     | -4608   | Data packet format error.                                                                                                  |
| OPRT_QTH_CMD_PKG_GENERATE_FAILED      | -0x1201     | -4609   | Failed to generate the data packet.                                                                                        |
| OPRT_QTH_CMD_UNSUPPORTED              | -0x1202     | -4610   | Unsupported data command.                                                                                                  |
| OPRT_QTH_CMD_PKG_SEND_FAILED          | -0x1203     | -4611   | Failed to send the data packet.                                                                                            |
| OPRT_QTH_WAN_PKG_FORMAT_INVALID       | -0x1300     | -4864   | WAN data packet format error.                                                                                              |
| OPRT_QTH_WAN_PKG_REPEATED             | -0x1301     | -4865   | Duplicate WAN data packet.                                                                                                 |
| OPRT_QTH_WAN_GET_TOPIC_FAILED         | -0x1302     | -4866   | Failed to get the topic over WAN.                                                                                          |
| OPRT_QTH_WAN_UNKNOWN_FAILED           | -0x1303     | -4867   | WAN connection unknown error.                                                                                              |
| OPRT_QTH_LOC_OUTSIDE_IS_NULL          | -0x1500     | -5376   | The location data obtained from the external GNSS module is null.                                                          |
| OPRT_QTH_DMP_SERVER_ERROR             | -0x1700     | -5888   | Exceptions occurred for some server APIs.                                                                                  |
| OPRT_QTH_DMP_SEND_NOT_ALLOW           | -0x1701     | -5889   | Device messages are limited.                                                                                               |
| OPRT_QTH_DMP_AUTH_NOT_ALLOW           | -0x1702     | -5890   | The device cannot be activated.                                                                                            |
| OPRT_QTH_DMP_AUTH_ALREADY             | -0x1703     | -5891   | The device has been authenticated.                                                                                         |
| OPRT_QTH_DMP_PK_NOT_FOUND             | -0x1704     | -5892   | No product information is found via the ProductKey.                                                                        |
| OPRT_QTH_DMP_PAYLOAD_INVALID          | -0x1705     | -5893   | Password parsing error.                                                                                                    |
| OPRT_QTH_DMP_SIGN_ERROR               | -0x1706     | -5894   | Sign error.                                                                                                                |
| OPRT_QTH_DMP_RAND_ILLEGAL             | -0x1707     | -5895   | Rand is illegal.                                                                                                           |
| OPRT_QTH_DMP_MISMATCH                 | -0x1708     | -5896   | The passed DeviceKey and ProductKey are inconsistent with those stored in the database.                                    |
| OPRT_QTH_DMP_DK_ILLEGAL               | -0x1709     | -5897   | DeviceKey is illegal.                                                                                                      |
| OPRT_QTH_DMP_FLAG_ILLEGAL             | -0x170a     | -5898   | Flag is illegal.                                                                                                           |
| OPRT_QTH_DMP_CLIENTID_ERROR           | -0x170b     | -5899   | ClientID is not matched with the password.                                                                                 |
| OPRT_QTH_DMP_DS_ERROR                 | -0x170c     | -5900   | DeviceSecret is incorrect.                                                                                                 |
| OPRT_QTH_DMP_DK_NOT_FOUND             | -0x170d     | -5901   | Device information not found.                                                                                              |
| OPRT_QTH_DMP_SUB_RELATED              | -0x170e     | -5902   | The gateway is not associated with the sub-device.                                                                         |
| OPRT_QTH_DMP_SUB_CONNECT_ALREADY      | -0x170f     | -5903   | The sub-device is already online.                                                                                          |
| OPRT_QTH_DMP_DEV_OFFLINE              | -0x1710     | -5904   | Device offline.                                                                                                            |
| OPRT_QTH_DMP_UNKNOWN_ERROR            | -0x1711     | -5905   | Unknown error.                                                                                                             |
| OPRT_QTH_OTA_REQUEST_FAILED           | -0x1a00     | -6656   | Failed to request an OTA upgrade.                                                                                          |
| OPRT_QTH_OTA_ID_NOT_TASK              | -0x1a01     | -6657   | No OTA upgrade task is in progress for the component.                                                                      |
| OPRT_QTH_WIFI_OPEN_NETCFG_FAILED      | -0x1c00     | -7168   | Failed to enable Wi-Fi network provisioning.                                                                               |
| OPRT_QTH_WIFI_CONN_ROUTER_FAILED      | -0x1c01     | -7169   | Failed to connect to the router.                                                                                           |
| OPRT_QTH_WIFI_ROUTER_DISCONNECTED     | -0x1c02     | -7170   | Router disconnected.                                                                                                       |
| OPRT_QTH_SUBDEV_OFFLINE               | -0x1d00     | -7424   | Sub-device offline.                                                                                                        |
| OPRT_QTH_SUBDEV_NODE_NOTFOUND         | -0x1d01     | -7425   | Sub-device not found.                                                                                                      |
| OPRT_QTH_SUBDEV_PS_NOTFOUNT           | -0x1d02     | -7426   | ProductSecret of the sub-device not found.                                                                                 |
| OPRT_QTH_SUBDEV_DS_NOTFOUNT           | -0x1d03     | -7427   | DeviceSecret of the sub-device not found.                                                                                  |
| OPRT_QTH_SUBDEV_ALREADY_LOGIN         | -0x1d04     | -7428   | Sub-device already logged in.                                                                                              |
