# Example of TSL Data Interaction


## __Introduction__
This section explains how to send and receive TSL data in QuecPython solution.

## __Related APIs__


|           Function            | Description                                        |
| :---------------------------: | :------------------------------------------------- |
| [Qth.sendTsl()](#Qth.sendTsl) | Sends TSL data to Developer Center.                |
|  [Qth.ackTsl()](#Qth.ackTsl)  | Replies to TSL data request from Developer Center. |

<span style='color:#999AAA'>Note: See [Data Interaction API](/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-05) for details.</span>

## __Procedure__
### __Operation on Developer Center__
#### __1. Log in to Developer Center__
Log in to <a href="https://core.acceleronix.io"  target="_blank">Developer Center</a>. If you don't have an account, click <a href="https://core.acceleronix.io/registerType" target="_blank">Register Now</a> to register.

#### __2. Create a Product__
<!-- The prerequisite for TSL data interaction is selecting **TSL** as the data format when a product is created.

<a data-fancybox title="img" href="/en/docs/resource/data/Physical_model/Example-01.png">![img](/en/docs/resource/data/Physical_model/Example-01.png)</a> -->

For details about product creation, see [Create a Product](/deviceDevelop/DeviceAccessPlan/speediness-01).


## __Operation on Device__
### __TSL Data Interaction__

TSL is a data model established by Developer Center for physical devices, which is used to describe product features to facilitate data parsing. After the device is successfully connected to the platform, the data interaction with Developer Center is realized by constructing the TSL data.


#### __Example 1 (Send TSL data)__

|         Feature ID         | Type      | Feature Name                                  | Data Type | Value Range                            | Reference           |
| :------------------------: | :-------- | :-------------------------------------------- | :-------- | :------------------------------------- | :------------------ |
|             1              | Property  | Switch                                        | BOOL      | true - On<br>false - Off               |                     |
|             2              | Property  | Battery Level                                 | INT       | 0–100                                  |                     |
|             3              | Property  | Remaining Content of Essential Oil            | FLOAT     | 0–300                                  |                     |
|             4              | Property  | Working Mode                                  | ENUM      | 1–HPC<br>2–CPL                         |                     |
|             5              | Property  | Device ID                                     | TEXT      | 0–20                                   |                     |
|             6              | Property  | Time                                          | DATE      | --                                     |                     |
|             7              | Property  | Structure                                     | STRUCT    | --                                     | Feature IDs: 8, 9   |
|  8 (parent feature ID: 7)  | Parameter | <span v-pre>        {$Parameter}      </span> | BOOL      | true - On<br>false - Off               |                     |
|  9 (parent feature ID: 7)  | Parameter | <span v-pre>        {$Parameter}      </span> | INT       | 0–100                                  |                     |
|             10             | Property  | Integer Array                                 | ARRAY     | Maximum quantity: 10 Element type: INT |                     |
|             11             | Property  | Structure Array                               | ARRAY     |                                        | Feature IDs: 12, 13 |
| 12 (parent feature ID: 11) | Parameter | <span v-pre>        {$Parameter}      </span> | BOOL      | true - On<br>false - Off               |                     |
| 13 (parent feature ID: 11) | Parameter | <span v-pre>        {$Parameter}      </span> | INT       | 0–100                                  |                     |

The device can adopt certain strategies to detect and process the properties based on the requirements of business scenarios. For example, after reading the remaining content of essential oil from the sensor, the device reports the remaining content of essential oil to Developer Center.
* Sample code
	```python
    # Create an empty dictionary
	my_dict = {}  
	# Add boolean data. {"1":true}
    my_dict.update({"1":true})
	# Add integer data.  {"2":100}
	my_dict.update({"2":100})
	# Add float data.  {"3":25.6}
	my_dict.update({"3":25.6})
	# Add enumeration data.  {"4":1}
	my_dict.update({"4":1})
	# Add string data.  {"5":"ZWS"}
	my_dict.update({"5":"ZWS"})
	# Add string data.  {"6":1659664758817}
	my_dict.update({"6":1659664758817})
	# Add structure data.  {"7":{"8":true,"9":100}}
	my_dict.update({"7":{"8":true,"9":100}})
	# Add integer data.  {"10":[10,20,30]}
	my_dict.update({"10":[10,20,30]})
	# Add array data. Referenced parameters: 12 and 13. {"11":[{"12":true,"13":100},{"12":false,"13":98}]}
	my_dict.update({"11":[{"12":true,"13":100},{"12":false,"13":98}]})
	# Send TSL data to the platform. QoS = 1
	Qth.sendTsl(1,my_dict)
	```

#### __Example 2 (Replies to TSL data request from Developer Center)__
__1) Developer Center reads real-time TSL data in batches__

On the "**Device Debug**" tab of "**Device Details**" page, click "**Read Data in Batches**" to read TSL property value in batches.


__2) Module receives the TSL data request from Developer Center and replies to the request__

When the module receives a TSL data request from Developer Center, it will call __readTslCb()__ , the event callback function. You can use the issued feature ID to handle the request.

* Sample code of event callback function
	```python
    def App_cmdReadTslCb(ids, pkgId):
        print('readTsl:', ids, pkgId)
        # Create an empty dictionary
        my_dict = {}  
        for id in ids:
            if id == 1:
                my_dict.update({"1":true})
            elif if id == 2:
                my_dict.update({"2":100})
            elif if id == 3:
                my_dict.update({"3":25.6})
            elif if id == 4:
                my_dict.update({"4":1})
            elif if id == 5:
                my_dict.update({"5":"ZWS"})
            elif if id == 6:
                my_dict.update({"6":1659664758817})
            elif if id == 7:
                my_dict.update({"7":{"8":true,"9":100}})
            elif if id == 10:
                my_dict.update({"10":[10,20,30]})
            elif if id == 11:
                my_dict.update({"11":[{"12":true,"13":100},{"12":false,"13":98}]})
        Qth.ackTsl(0, my_dict, pkgId)
	```

<span style="color:#999AAA">Note: The memory of the returned TTLVHead  will be released by the SDK itself. Developers only need to add the returned TSL data to the TTLVHead linked list.</span>

#### __Example 3 (Report TSL alert event)__

|     Feature ID     | Type      | Feature Name                       | Data Type | Value Range | Reference                  |
| :----------------: | :-------- | :--------------------------------- | :-------- | :---------- | :------------------------- |
|         14         | Event     | Event                              | BOOL      |             | Output feature IDs: 15, 16 |
| 15 (parent ID: 14) | Parameter | Battery Level                      | INT       | 0–100       |                            |
| 16 (parent ID: 14) | Parameter | Remaining Content of Essential Oil | FLOAT     | 0–300       |                            |

This example demonstrates how the device reports an alert event to Developer Center when it detects a shortage of essential oils. The alert event comprises two output parameters: **battery level** and **the remaining content of essential oil**. The output parameter **IDs 15 and 16** are included in the alert event to form a structured message that is sent to Developer Center.

* Sample code
	```python
	# Create an empty dictionary
    my_dict = {}  
	# Add structure data. Referenced parameters: 15 and 16.
    my_dict.update({"14":{"15":true,"16:20.5"}})
	# Send TSL data to Developer Center.
	Qth.sendTsl(1,my_dict)
	```

#### __Example 4 (Read TSL data issued by Developer Center)__

|     Feature ID     | Type            | Feature Name | Data Type | Value Range | Reference             |
| :----------------: | :-------------- | :----------- | :-------- | :---------- | :-------------------- |
|         17         | Service         | Service      | BOOL      |             | Output feature ID: 18 |
| 18 (parent ID: 17) | Input Parameter | Mode         | ENUM      | 0–2         |                       |


__1) Developer Center issues TSL data__

On the "**Device Debug**" page, click "**Service Calls**", then select the service to be issued, and click "**Send Command**" in the lower left corner.


__2) Device receives data__

When the device receives request for TSL model from Developer Center, it will call **recvTslCb()**, the event callback function. You use the returned event code to handle the response. 

* Sample code of event callback function
	```python
    def App_cmdRecvTslServerCb(serverId, value, pkgId):
        print('recvTslServer:', serverId, value, pkgId)
        if serverId == 17:
            num = value["18"]
            print('num:', num)
	```




