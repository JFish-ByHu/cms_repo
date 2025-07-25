<!--
 * @Author: mack.zhang@quectel.com mack.zhang@quectel.com
 * @Date: 2024-11-11 11:33:42
 * @LastEditors: mack.zhang@quectel.com mack.zhang@quectel.com
 * @LastEditTime: 2024-11-12 11:51:59
 * @FilePath: \quec-doc-web\docs\zh\deviceDevelop\cellular\QuecPython\example\quecpython-example-02.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# GNSS&LBS&Wi-Fi定位示例
## __场景描述__
目前开发者中心位置服务支持 __GNSS设备定位__ 与 __LBS定位__ 与 __WIFI定位__，从而确定设备所在具体位置。本文将为您介绍如何获取与上报定位数据到开发者中心。
* __全球导航卫星系统（GNSS）__ 
  连接外置GNSS模组实现卫星定位。
* __LBS定位__ 
  基于通信运营商的基站定位系统。
* __WIFI定位__ 
  基于无线路由器信号的定位系统。
## __涉及指令__

|                函数                 |  说明   |
| :---------------------------------: | :-----: |
| Qth.sendOutsideLocation()| 发送外部定位NEMA数据 |

<span style='color:#999AAA'>提示：详情请参考[设备定位 相关接口](/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-07)。</span>




### __示例一(上报设备LBS定位功能的定位数据)__
__1、读取模组LBS数据并上报到开发者中心__
```py
def send_lbs():
    cell_info = -1
    cell_info = net.getCellInfo()
    if cell_info != -1 and cell_info[2]:
        first_tuple = cell_info[2]
        logApp.info('cell_info[2]{} '.format(cell_info[2]))  
        logApp.info('first_tuple{} '.format(first_tuple))  
        lbs_data = "$LBS,{},{},{},{},{},0*69;".format(first_tuple[0][2],first_tuple[0][3],first_tuple[0][5],first_tuple[0][1],first_tuple[0][7])
        Qth.sendOutsideLocation(lbs_data)
        logApp.info('send_lbs{} '.format(lbs_data))
        return 1
    else:
        logApp.error('数据不足以解码')
        return 0  # 放在函数结尾，表示数据不足
```

__2、开发者中心查看设备定位__

在 __设备详情__ 详情页，单击 __设备定位__ 页签可查看定位数据及地图位置。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/LBS&GNSS/Example-01.png">![img](/zh/deviceDevelop/develop/LBS&GNSS/Example-01.png)</a>

### __示例二(上报设备GNSS定位功能的定位数据)__
__1、读取模组GNSS数据并上报到开发者中心__

```py
def send_gnss():
    nmea_data = quecgnss.read(1024)
    if len(nmea_data) > 1:
        nmea_str = nmea_data[1].decode()
        logApp.info('nmea_data[1].decode(): {}'.format(nmea_data[1].decode()))
        nmea_lines = nmea_str.split("\n")
        logApp.info('nmea_lines: {}'.format(nmea_lines))    
        gngga_data = None  # 初始化为 None
        
        for line in nmea_lines:
            if line.startswith("$GNGGA"):
                gngga_data = line
                logApp.info('gngga_data: {}'.format(gngga_data))
                break  # 找到数据后立即退出循环
        
        if gngga_data:
            logApp.info('GNGGA数据: {}'.format(gngga_data))
            if is_valid_gga_sentence(gngga_data) == True:
                Qth.sendOutsideLocation(gngga_data)  # 传递多个参数
                return True
            else:
                logApp.info("未找到$GNGGA数据")
                return False
    else:
        logApp.error('数据不足以解码')
        return False  # 放在函数结尾，表示数据不足
```
__2、开发者中心查看设备定位__

在 __设备详情__ 详情页，单击 __设备定位__ 页签可查看定位数据及地图位置。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/LBS&GNSS/Example-02.png">![img](/zh/deviceDevelop/develop/LBS&GNSS/Example-02.png)</a>


