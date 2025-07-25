# OpenAPI SDK Usage Guide

OpenAPI SDK is used for SaaS system integration, enabling product device management and remote control of devices through SaaS applications.

## Operation Step

### Prerequisites

1. Before using OpenAPI services, you need to click "**Create a SaaS Application**" in "**SaaS Development**" -> "**SaaS Management**" menu.
2. Enable and authorize the API service packages you need to use on the "**SaaS Development**"-> "**Service**" page. You can only call the APIs under the service package after authorization.
3. Authorize product data that the SaaS application can access on the "**SaaS Development**"-> "**Product**" page. You can only query data under authorized products through the API after authorization.
4. Obtain AccessKey and AccessSecret, which will be used to exchange for an access Token later.

### Development Environment Preparation

The example uses the following development environment:

- Operating System: Windows 10
- JDK Version: [JDK8](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)
- Integrated Development Environment: [IntelliJ IDEA Community Edition](https://www.jetbrains.com/idea/)

### SDK Feature List

#### quecloud-sdk-dev-mgr:

| Method Name                   | Feature Description                                   |
| ----------------------------- | ----------------------------------------------------- |
| getProductItems               | Get product category                                  |
| getProductDetail              | Get product details                                   |
| getProductList                | Get product list                                      |
| getDeviceList                 | Get device list                                       |
| getDeviceDetail               | Get device details                                    |
| deviceResource                | Get device resources                                  |
| getDeviceDataHistory          | Get device historical uplink/downlink data            |
| getDeviceEventData            | Get device event log data                             |
| getDeviceLocationLatest       | Get device positioning information data               |
| getTslJson                    | Get TSL model data                                    |
| generateSn                    | Get SN                                                |
| createSnBindDevice            | Create SN and device binding relationship             |
| findDkList                    | Query the corresponding device list by PK and SN list |
| findSnList                    | Query the corresponding SN list by device list        |
| delSnBindDevice               | Delete SN and device binding relationship             |
| createQuece                   | Create a queue                                        |
| deleteQuece                   | Delete a queue                                        |
| getQueceDetail                | Get queue details                                     |
| createSubscribe               | Create subscription                                   |
| createEnterpriseUserSubscribe | Create an enterprise user subscription                |
| createSaasUserSubscribe       | Create a SaaS user subscription                       |
| createEndUserSubscribe        | Create an end-user subscription                       |
| getSubscribeDetail            | Get subscription details                              |
| startSubscribe                | Start subscription                                    |
| stopSubscribe                 | Stop subscription                                     |
| deleteSubscribe               | Delete subscription                                   |

#### quecloud-sdk-dev-msg:

| Method Name              | Feature Description                       |
| ----------------------- | ------------------------------------------------ |
| sendDeviceData          | Send downlink data to the device          |
| batchSendDeviceData     | Send downlink data to devices in batches |
| deviceDmReadData        | Read device TSL property data |
| deviceDmWriteData       | Send downlink TSL data to the device |
| deviceRawSendData       | Send downlink transparent transmission data to the device |
| deviceDmsendServiceData | Send downlink TSL service data to the device |

### SDK Example

1. Reference jar package from the central repository  

```Plain
a) Product and device management
<dependency>
  <groupId>com.quectel.aiot</groupId>
  <artifactId>quecloud-sdk-standard-mgr</artifactId>
  <version>2.1.0.RELEASE</version>
</dependency>

b) Device uplink/downlink data management
<dependency>
    <groupId>com.quectel.aiot</groupId>
    <artifactId>quecloud-sdk-dev-msg</artifactId>
    <version>1.9.0.RELEASE</version>
</dependency>
```

2. Initialize SDK

a) Create an InitClientProfile object to store accessKey, accessSecret, endpoint (for European Data Center, enter iot-api.acceleronix.io and other information.

b) Create a Client object. For product and device management, initialize a MgrClient object. For device uplink/downlink, initialize a MsgClient object.

3. Calling Steps:

SaaS SDK encapsulates two classes for each API: the request parameter class (Request) and the request response class (Response).

a) Complete the SDK initialization and get a MgrClient Client/MsgClient Client object.

b) Create a parameter object for the corresponding API request method.

c) Use set methods to configure the request parameter values required by API on the parameter object.

&emsp;&emsp;i) Use the obtained Client object to directly call methods in the object to get a response object. Each response object includes success (success indicator), msg (return information), errorMsg (error information. Specific error message is returned when *success* is false), body (body is an object that carries the specific information value returned by each API).

&emsp;&emsp;ii) Use the *catch()* method to handle exception errors.

For API list and corresponding Request and Response object descriptions, please see [OpenAPI List](APIList.md).

d) Take the downlink data API feature as an example and write the code as follows:  

```bash
public static void main(String[] args) {
        try{
            // accessKey and accessSecret are created by users in Developer Center
            InitClientProfile initClientProfile = new InitClientProfile(
                    "${accessKey}",
                    "${accessSecret}",
                    "${endpoint}");
            // Get the MsgClient object. The singleton pattern is recommended. This object contains the SDK for device data downlink.
            MsgClient msgClient = new MsgClient(initClientProfile);
 
            // PASSTHROUGH: transparent transmission PROPERTY: property SERVICE: service
            String type="PASSTHROUGH|PROPERTY|SERVICE";
            // GET: Report DOWN: downlink
            String operate="GET|DOWN";
 
            // Send TSL property data to a single device
            /**
             * Send downlink data to device. data is the specific content of the downlink data. When operate=GET, the data format is "["key1","key2",…]" (key is the TSL model identifier). When operate=DOWN, the data format is "[{key1:value1},{key2:value2}]" (key is the TSL model identifier).
             * Examples:
             * Property bool/int/float/double/enum/date/text
             * "[{\"key\":\"value\"}]"
             * Property array
             * "[{\"key\":[{\"id\":\"value1\"},{\"id\":\"value2\"}]}]" (id is 0)
             * Property struct
             * "[{\"key\":[{\"key1\":\"value1\"},{\"key2\":\"value2\"}]}]"
             * Property array containing struct
             * "[{\"key\":[{\"id\":[{\"key1\":\"value1\"}]},{\"id\":[{\"key2\":\"value2\"}]}]}]" (id is 0)
             * Service call bool/int/float/double/enum/date/text
             * "[{\"key\":[{\"key1\":\"value1\"},{\"key2\":\"value2\"},{\"key3\":\"value3\"}]}]"
             * Service call array
             * "[{\"key\":[{\"key1\":[{\"id\":\"value1\"},{\"id\":\"value1\"}]}]}]" (id is 0)
             * Service call struct
             * "[{\"key\":[{\"key1\":[{\"key2\":\"value2\"},{\"key3\":\"value3\"}]}]}]"
             * Service call array, and array contains struct
             * "[{\"key\":[{\"key1\":[{\"id\":[{\"key2\":\"value2\"}]},{\"id\":[{\"key3\":\"value3\"}]}]}]}]" (id is fixed as 0)
             */
 
            type = "PROPERTY";
            operate = "DOWN";
            DeviceSendDataRequest deviceSendTslDataRequest = new DeviceSendDataRequest("${productKey}","${deviceKey}","${data}",type,operate);
            DeviceSendDataResponse tslResult = msgClient.sendDeviceData(deviceSendTslDataRequest);
            log.info("Result of delivering TSL data to a single device:{}", JSONObject.toJSONString(tslResult));
        }catch(Exception e){
            log.info("Error occurred while delivering TSL property data to a single device",e);
        }
    }
```

For detailed Demo codes, see GitHub repository: Product device management (quecloud-sdk-dev-mgr)

https://github.com/thridparty-cloud2/quecloud-sdk-dev-mgr-demonstration.git

Device data uplink/downlink (quecloud-sdk-dev-msg)

https://github.com/thridparty-cloud2/quecloud-sdk-dev-msg-demonstration.git