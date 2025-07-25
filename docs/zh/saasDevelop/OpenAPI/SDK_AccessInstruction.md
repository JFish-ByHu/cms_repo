# OpenAPI SDK使用指导

OpenAPI SDK主要用于SaaS系统对接集成，实现通过SaaS应用进行产品设备管理与远程控制设备。

## 操作步骤

### 前置步骤

1、在使用OpenAPI服务前，需先在SaaS开发->SaaS管理菜单下创建SaaS应用。

2、在SaaS详情->服务页面中开通并授权需要使用的API服务包。授权后才能调用该服务包下的API接口。

3、在SaaS详情->产品页面中授权该SaaS应用可访问的产品数据。授权后才能通过API查询已授权产品下的数据。

4、获取AccessKey与AccessSecret，后续需要使用该参数换取访问Token。

### 开发环境准备

示例使用的开发环境如下：

- 操作系统：Windows10
- JDK版本：[JDK8](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)
- 集成开发环境：[IntelliJ IDEA社区版](https://www.jetbrains.com/idea/)

### SDK功能列表

#### quecloud-sdk-dev-mgr:

| 方法名称                      | 功能描述                          |
| ----------------------------- | --------------------------------- |
| getProductItems               | 获取产品品类                      |
| getProductDetail              | 获取产品详情                      |
| getProductList                | 获取产品列表                      |
| getDeviceList                 | 获取设备列表                      |
| getDeviceDetail               | 获取设备详情                      |
| deviceResource                | 获取设备资源                      |
| getDeviceDataHistory          | 获取设备历史上下行数据            |
| getDeviceEventData            | 获取设备事件日志数据              |
| getDeviceLocationLatest       | 获取设备定位信息数据              |
| getTslJson                    | 获取物模型数据                    |
| generateSn                    | 获取SN                            |
| createSnBindDevice            | 创建SN与设备绑定关系              |
| findDkList                    | 根据 PK与SN列表查询对应的设备列表 |
| findSnList                    | 根据设备列表查询对应的 sn 列表    |
| delSnBindDevice               | 删除SN与设备绑定关系              |
| createQuece                   | 创建队列                          |
| deleteQuece                   | 删除队列                          |
| getQueceDetail                | 获取队列详情                      |
| createSubscribe               | 创建普通订阅                      |
| createEnterpriseUserSubscribe | 创建企业用户订阅                  |
| createSaasUserSubscribe       | 创建SaaS用户订阅                  |
| createEndUserSubscribe        | 创建终端用户订阅                  |
| getSubscribeDetail            | 获取订阅详情                      |
| startSubscribe                | 启动订阅                          |
| stopSubscribe                 | 停止订阅                          |
| deleteSubscribe               | 删除订阅                          |

#### quecloud-sdk-dev-msg:

| 方法名称                | 功能描述                   |
| ----------------------- | -------------------------- |
| sendDeviceData          | 设备发送下行数据           |
| batchSendDeviceData     | 批量设备发送下行数据       |
| deviceDmReadData        | 设备读取物模型属性数据     |
| deviceDmWriteData       | 设备发送下行物模型数据     |
| deviceRawSendData       | 设备发送下行透传数据       |
| deviceDmsendServiceData | 设备发送下行物模型服务数据 |

### SDK示例

1.中央仓库引用jar包

```Plain
a)产品设备管理
<dependency>
  <groupId>com.quectel.aiot</groupId>
  <artifactId>quecloud-sdk-standard-mgr</artifactId>
  <version>2.1.0.RELEASE</version>
</dependency>

b)设备数据上下行管理
<dependency>
    <groupId>com.quectel.aiot</groupId>
    <artifactId>quecloud-sdk-dev-msg</artifactId>
    <version>1.9.0.RELEASE</version>
</dependency>
```

2.初始化SDK

a）创建InitClientProfile对象，存放accessKey、accessSecret、endpoint(中国区数据中心填写 iot-api.quectelcn.com)等信息

b）创建Client对象。产品设备管理是初始化MgrClient对象，设备上下行是初始化对象MsgClient对象

3.调用步骤:

SaaS SDK为每个API封装两个类，分别是请求参数类 (*Request)和请求响应类(*Response)。

a）完成SDK初始化。获取MgrClient Client/MsgClient Client对象

b）创建对应API请求方法的参数对象

c）对参数对象，使用set方法，设置API所需的请求参数值。

&emsp;&emsp;i）通过获取的Client对象，直接调用对象中的方法获取响应对象。每个响应对象包含 success(是否成功标识)，msg(返回信息)，errorMsg(错误信息，当success为false时，返回具体的错误信息)，body(body是一个object对象，它承载了每个API返回具体信息值)

&emsp;&emsp;ii）使用catch()方法处理异常报错。

API列表及对应的Request和Response对象说明请详见[API列表](APIList.md)

d）以下发数据API功能为例，编写代码

```bash
public static void main(String[] args) {
        try{
            // accessKey和accessSecre是开发者中心用户创建accessKey和accessSecret
            InitClientProfile initClientProfile = new InitClientProfile(
                    "${accessKey}",
                    "${accessSecret}",
                    "${endpoint}");
            // 获取MgrClient对象。建议可以使用单例模式。此对象中包含设备数据下发相关的sdk
            MsgClient msgClient = new MsgClient(initClientProfile);
 
            // PASSTHROUGH:透传 PROPERTY:属性 SERVICE:服务
            String type="PASSTHROUGH|PROPERTY|SERVICE";
            // GET:上报 DOWN:下发
            String operate="GET|DOWN";
 
            // 单设备下发物模型属性数据
            /**
             * 设备发送下行数据.data为发送下行数据的具体内容.operate=GET,数据格式为"[“key1","key2",…]"(key为物模型标识符)。operate=DOWN,数据格式为”[{key1:value1},{key2:value2}]"(key为物模型标识符).
             * 示例:
             * 属性bool/int/float/double/enum/date/text
             * "[{\"key\":\"value\"}]"
             * 属性array
             * "[{\"key\":[{\"id\":\"value1\"},{\"id\":\"value2\"}]}]"（id为0）
             * 属性struct
             * "[{\"key\":[{\"key1\":\"value1\"},{\"key2\":\"value2\"}]}]"
             * 属性array含有struct
             * "[{\"key\":[{\"id\":[{\"key1\":\"value1\"}]},{\"id\":[{\"key2\":\"value2\"}]}]}]"（id为0）
             * 服务调用bool/int/float/double/enum/date/text
             * "[{\"key\":[{\"key1\":\"value1\"},{\"key2\":\"value2\"},{\"key3\":\"value3\"}]}]"
             * 服务调用array
             * "[{\"key\":[{\"key1\":[{\"id\":\"value1\"},{\"id\":\"value1\"}]}]}]"（id为0）
             * 服务调用struct
             * "[{\"key\":[{\"key1\":[{\"key2\":\"value2\"},{\"key3\":\"value3\"}]}]}]"
             * 服务调用array，且array含有struct
             * "[{\"key\":[{\"key1\":[{\"id\":[{\"key2\":\"value2\"}]},{\"id\":[{\"key3\":\"value3\"}]}]}]}]"(id固定为0)
             */
 
            type = "PROPERTY";
            operate = "DOWN";
            DeviceSendDataRequest deviceSendTslDataRequest = new DeviceSendDataRequest("${productKey}","${deviceKey}","${data}",type,operate);
            DeviceSendDataResponse tslResult = msgClient.sendDeviceData(deviceSendTslDataRequest);
            log.info("单设备下发物模型数据返回结果:{}", JSONObject.toJSONString(tslResult));
        }catch(Exception e){
            log.info("单设备下发物模型属性数据出错",e);
        }
    }
```

具体Demo code详见github地址： 产品设备管理(quecloud-sdk-dev-mgr)

https://github.com/thridparty-cloud2/quecloud-sdk-dev-mgr-demonstration.git

设备数据上下行(quecloud-sdk-dev-msg)

https://github.com/thridparty-cloud2/quecloud-sdk-dev-msg-demonstration.git
