# Python脚本编写

## **脚本编写**
接下来我们开始编写一个 __example.py__ 脚本示例。

<span style='color:#999AAA'>提示：如果您希望能上电后自动运行用户的代码，则需要将脚本示例命名为 __main.py__</span>


## __一、初始化配置设备信息__
在连接开发者中心前，您还需要完成工程的初始化配置。
<span style='color:#999AAA'>提示：详情请参考[产品配置 相关接口](/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-02)。</span>


* 设备上电后首先初始化Quecthing 组件。
    ```py
	Qth.init()
    ```
* 注册平台 __事件接收回调函数__，根据回调事件判断平台当前连接状态。
    ```py
	eventOtaCb={
            'otaPlan':App_otaPlanCb,
            'fotaResult':App_fotaResultCb
            }
    eventCb={
        'devEvent':App_devEventCb, 
        'recvTrans':App_cmdRecvTransCb, 
        'recvTsl':App_cmdRecvTslCb, 
        'readTsl':App_cmdReadTslCb, 
        'readTslServer':App_cmdRecvTslServerCb,
        'ota':eventOtaCb
        }
    Qth.setEventCb(eventCb)
    ```
* 设备认证方式支持 __一型一密__，配置设备信息时，只需将您创建产品时获取到的 __PK、PS__ 写入该函数传参中。
    ```py
	Qth.setProductInfo("pxxxxy", "OFZCxxxxxxxxUdn")
    ```


* 示例代码如下所示
    ```py
    """ 初始化QuecThing SDK """
        Qth.init()
    """ 注册事件回调函数 """
        eventOtaCb={
            'otaPlan':App_otaPlanCb,
            'fotaResult':App_fotaResultCb
            }
        eventCb={
            'devEvent':App_devEventCb, 
            'recvTrans':App_cmdRecvTransCb, 
            'recvTsl':App_cmdRecvTslCb, 
            'readTsl':App_cmdReadTslCb, 
            'readTslServer':App_cmdRecvTslServerCb,
            'ota':eventOtaCb
            }
        Qth.setEventCb(eventCb)
    """ 配置产品信息"""
        Qth.setProductInfo("pxxxxy", "OFZCxxxxxxxxUdn")
    ```

## __二、连接平台__
QuecPython提供设备 __一键连接__ 接入开发者中心，接入后即可在开发者中心建立安全，稳定的通信并实现设备管理，监测，控制等操作。
* 示例代码如下所示
    ```py
    """ 启动平台连接 """
        Qth.start()
    ```
## __三、应用逻辑开发__

数据模板示例 __example.py__ 已实现数据收发及事件响应的通用处理框架，开发者可根据该示例结合项目需求实现业务数据逻辑开发。

<span style='color:#999AAA'>提示：详情请参考[数据业务交互 相关接口](/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-03)。</span>
### __上行业务逻辑实现__

设备端可根据业务场景需求，对设备端数据属性采取一定的策略进行检测处理，模组则需要将精油剩余容量值上传到开发者中心。
* 示例代码如下所示
    ```py
    def Qth_tslSend():
    while True:
        # 先判断连接IOT平台状态
        if Qth.state():
            ret = Qth.sendTsl(1, {1: 180.25})   #用户任务，每30秒上报精油剩余容量   
            print('sendTsl ret:', ret)  
        utime.sleep(30)

    if __name__ == '__main__':
        Quecthing()
        _thread.start_new_thread(Qth_tslSend, ())
    ```
### __下行业务逻辑实现__
服务端下行的数据，__QuecThing SDK__ 已按数据模板协议完成 TTLV 数据的解析，开发者只需根据不同的事件来开发下行业务逻辑。物模型是根据在平台定义的产品数据模板生成的模板结构体，由定义的各属性构成成员变量。入参 value 所指向的属性数据，从服务端下行数据中，__QuecThing SDK__  已经按数据模板协议完成了属性数据的解析，用户在下行逻辑处理的函数里，可直接使用解析完成的数据添加业务逻辑即可。


* 示例代码如下所示
    ```py
    @staticmethod
        def App_cmdRecvTslCb(value):
            print('recvTsl:', value)
            model_keys = list(value.keys())
            for cmdId in model_keys:
                value = value.get(cmdId)
                if 2 == cmdId:    #下发频率控制
                    print("Ctemporal frequency："+ str(value)) 
                elif 3 == cmdId:    #下发开关
                    if  False == value:   #Close
                        print("Turn off the aromatherapy machine") 
                    elif True == value:   #Open
                        print("Turn on the aromatherapy machine") 
                elif 5 == cmdId:    #服务调用                     
                    if  1 == value[6]:   #模式一
                        print("Model 1") 
                    elif 2 == value[6]:   #模式二
                        print("Model 2") 
                    elif 3 == value[6]:   #模式三
                        print("Model 3") 
                else :
                    pass

        def App_cmdReadTslCb(ids, pkgId):
            print('readTsl:', ids, pkgId)
            for id in ids:
                if 1 == id:
                    ret = Qth.ackTsl(1, {1: 180.25}, pkgId)
                    print('ackTsl ret:', ret)  
                elif 2 == id:
                    ret = Qth.ackTsl(1, {2: 30}, pkgId) 
                    print('ackTsl ret:', ret)   
                elif 3 == id:
                    ret = Qth.ackTsl(1, {3: True}, pkgId)
                    print('ackTsl ret:', ret)  
                else :
                    pass
    ```



## __四、烧录QuecPython脚本__

Python代码不需要编译，直接通过 __QPYcom工具__ 把 __example.py__ 文件烧录到模块中运行即可。


<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-07.png">![img](/zh/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-07.png)</a>


__①、__ 点击 __文件__ 标签，进入文件页，并选择对应的 __example.py__ 文件。<span style="color:#999AAA">提示：左侧为电脑本地的文件；右侧为模块端的文件</span><br>
__②、__  把 __example.py__ 文件拉拽到右侧的 __usr__ 用户目录根节点，松开鼠标左键即可自动下载文件到模块。

<span style="color:#999AAA">提示：文件下载过程中，工具页面底部状态栏有下载进度，进度到100%表示文件下载成功。</span>


## __五、运行程序__

 在右侧的模块端的文件管理选中 __example.py__ ，在点击上侧的 __三角运行控件__ 即可自动运行代码。

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-08.png">![img](/zh/deviceDevelop/develop/speediness/resource/QuecPython/Speediness-QuecPython-08.png)</a>


<span style="color:#999AAA">提示：自动运行的脚本，或者循环输出的脚本，将无法使用Ctrl+C停止运行；唯一将脚本停止的函数是重新烧录固件包。</span>


## <span id = "WiFi_demo">__六、Demo 设备例程__ </span>

example.py示例完整代码如下所示
```py
from usr import Qth
import _thread
import utime

class Quecthing:
    def __init__(self):
        Qth.init()
        Qth.setProductInfo('p1xxrw','M0liTFxxxxx0Y0Mx')

        eventOtaCb={
                'otaPlan':self.App_otaPlanCb,
                'fotaResult':self.App_fotaResultCb
                }
        eventCb={
            'devEvent':self.App_devEventCb, 
            'recvTrans':self.App_cmdRecvTransCb, 
            'recvTsl':self.App_cmdRecvTslCb, 
            'readTsl':self.App_cmdReadTslCb, 
            'readTslServer':self.App_cmdRecvTslServerCb,
            'ota':eventOtaCb
            }
        Qth.setEventCb(eventCb)
        Qth.setAppVer('V1.0.1', self.App_sotaResultCb)
        Qth.start()

    @staticmethod
    def App_devEventCb(event, result):
        print('event:', event, result)
        if(2== event and 0 == result):
            Qth.otaRequest()

    @staticmethod
    def App_cmdRecvTransCb(value):
        print('recvTrans:', value)
        ret = Qth.sendTrans(1, value)
        print('sendTrans ret:', ret)

    @staticmethod
    def App_cmdRecvTslCb(value):
        print('recvTsl:', value)
        model_keys = list(value.keys())
        for cmdId in model_keys:
            value = value.get(cmdId)
            if 2 == cmdId:    #下发频率控制
                print("Ctemporal frequency："+ str(value)) 
            elif 3 == cmdId:    #下发开关
                if  False == value:   #Close
                    print("Turn off the aromatherapy machine") 
                elif True == value:   #Open
                    print("Turn on the aromatherapy machine") 
            elif 5 == cmdId:    #服务调用                     
                if  1 == value[4]:   #模式一
                    print("Model 1") 
                elif 2 == value[4]:   #模式二
                    print("Model 2") 
                elif 3 == value[4]:   #模式三
                    print("Model 3") 
            else :
                pass

    @staticmethod
    def App_cmdReadTslCb(ids, pkgId):
        print('readTsl:', ids, pkgId)
        for id in ids:
            if 1 == id:
                Qth.ackTsl(1, {1: 180.25}, pkgId)
            elif 2 == id:
                Qth.ackTsl(1, {2: 30}, pkgId)  
            elif 3 == id:
                Qth.ackTsl(1, {3: True}, pkgId)
            else :
                pass

    @staticmethod
    def App_cmdRecvTslServerCb(serverId, value, pkgId):
        print('recvTslServer:', serverId, value, pkgId)
        Qth.ackTslServer(1, serverId, value, pkgId)

    @staticmethod
    def App_otaPlanCb(plans):
        print('otaPlan:', plans)
        Qth.otaAction(1)

    @staticmethod
    def App_fotaResultCb(comp_no, result):
        print('fotaResult:', comp_no, result)

def Qth_tslSend():
    while True:
        # 先判断连接IOT平台状态
        if Qth.state():
            Qth.sendTsl(1, {1: 180.25})   #用户任务，每30秒上报精油剩余容量     
        utime.sleep(30)
        print('Qth_tslSend')

if __name__ == '__main__':
    Quecthing()
    _thread.start_new_thread(Qth_tslSend, ())
```

