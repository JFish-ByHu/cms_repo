# AT Command Overview

## __1. Product Configuration Commands__

|  AT Command   |          Description          |
| :-----------: | :---------------------------: |
|  AT+QIOTCFG   | Configure Optional Parameters |
|  AT+QIOTREG   |   Configure Connection Mode   |
| AT+QIOTSTATE  |    Query Connection Status    |
| AT+QIOTMCUVER | Configure MCU Version Number  |

<span style='color:#999AAA'>Note: See [Product Configuration Commands](/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-03) for details.</span>

<br>

## __2. Data Interaction Commands__

|   AT Command   |                          Description                          |
| :------------: | :-----------------------------------------------------------: |
|  AT+QIOTSEND   |    Send Transparent Transmission Data to Developer Center     |
|   AT+QIOTRD    | Read Transparent Transmission Data Issued by Developer Center |
| AT+QIOTMODELTD |               Send TSL Data to Developer Center               |
| AT+QIOTMODELRD |           Read TSL Data Issued by Developer Center            |
|  AT+QIOTINFO   |        Request QuecThing to Report Device Information         |

<span style='color:#999AAA'>Note: See [Data Interaction Commands](/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-04) for details.</span>

<br>

## __3. OTA Upgrade Commands__

|  AT Command   |           Description            |
| :-----------: | :------------------------------: |
| AT+QIOTOTAREQ |     Request OTA Upgrade Plan     |
| AT+QIOTUPDATE | Configure OTA Upgrade Operations |
| AT+QIOTOTARD  |     Read SOTA Data by Blocks     |

<span style='color:#999AAA'>Note: See [OTA Upgrade Commands](/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-05) for details.</span>

<br>

## __4. GNSS&LBS&Wi-Fi Positioning Commands__

|  AT Command   |                              Description                              |
| :-----------: | :-------------------------------------------------------------------: |
| AT+QIOTLOCIN  | Obtain/Report Location Data of Built-in Positioning Feature of Module |
| AT+QIOTLOCEXT |        Report Location Data Obtained from External GNSS Module        |

<span style='color:#999AAA'>Note: [GNSS&LBS&Wi-Fi Positioning Commands](/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-07) for details.</span>

<br>

## __5. Device Authorization Commands__

|   AT Command    |            Description            |
| :-------------: | :-------------------------------: |
| AT+QIOTBINDCODE | Report Device Binding Information |
|   AT+QIOTRST    |     Reset Device Information      |

<span style='color:#999AAA'>Note: See [Device Authorization Commands](/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-08) for details.</span>

<br>

## __6、Gateway Sub-device Commands__

|     AT Command      |                               Description                                |
| :-----------------: | :----------------------------------------------------------------------: |
|   AT+QIOTSUBCONN    |                      Connect sub-device to gateway                       |
|  AT+QIOTSUBDISCONN  |              Disconnect/De-register sub-device from gateway              |
|   AT+QIOTSUBSEND    | Send transparent transmission data of the sub-device to Developer Center |
|    AT+QIOTSUBRD     |      Read transparent transmission data issued by Developer Center       |
|   AT+QIOTSUBTSLTD   |           Send TSL data of the sub-device to Developer Center            |
|   AT+QIOTSUBTSLRD   |                 Read TSL data issued by Developer Center                 |
|    AT+QIOTSUBHTB    |                          Send heartbeat packet                           |
|  AT+QIOTSUBDEVINFO  |                      Report Sub-device Information                       |
|  AT+QIOTSUBOTAREQ   |                   Request Sub-device OTA Upgrade Plan                    |
| AT+QIOTSUBOTAUPDATE |               Configure Sub-device OTA Upgrade Operations                |
|   AT+QIOTSUBOTARD   |                    Read Sub-device OTA Firmware Data                     |
|    AT+QIOTSUBLOC    |                     Report Sub-device Location Data                      |

<span style='color:#999AAA'>Note: See [Gateway Sub-device Command](/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-10) for details.</span>

<br>

## __7、Value-Added Service Commands__

|    AT Command     |             Description             |
| :---------------: | :---------------------------------: |
|   AT+QIOTNTPREQ   |      Get time from NTP server       |
| AT+QIOTDATACOLLTX | Report data acquisition information |



<span style='color:#999AAA'>Note: See [Value-Added Service Command](/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-09) for details.</span>

<br>
