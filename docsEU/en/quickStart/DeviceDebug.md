# Device Communication Debugging

This section introduces how to take AT commands for data interaction using a RGB LED light as an example.

## 1. Data Uplink

After the device connects to Developer Center,  MCU can send TSL model data to Developer Center through **AT+QIOTMODELTD**. After executing **AT+QIOTMODELTD** and receiving the **>** prompt from the device, send properly formatted TSL model data. The JSON format should be: **{"\<ID1>":\<value1>,"\<ID2>":\<value2>,…,"\<IDn>",\<valuen>}** where **\<ID>** is the TSL model ID and **\<value>** is the TSL model value. 

Example of sending the following TSL model data

⚫ ID: 1. Type: BOOL. Feature Name: Switch. Content: True.

⚫ ID: 2. Type: INT. Feature Name: Color R. Content: 100.

⚫ ID: 3. Type: INT. Feature Name: Color G. Content: 150.

⚫ ID: 4. Type: INT. Feature Name: Color B. Content: 200.

⚫ ID: 5. Type: INT. Feature Name: Brightness. Content: 100.

⚫ ID: 6. Type: INT. Feature Name: Delay Shutdown Time. Content: 60.

```Plain
[TX]AT+QIOTMODELTD=1,19 

[RX]> 
[TX]{"1":true,"2":100,"3":150,"4":200,"5":100,"6":60} 
[RX]OK 
[RX]+QIOTEVT: 4,10210
```

Note:

If the device fails to report the TSL model, you can troubleshoot with the following methods:

1. Execute **AT+QIOTSTATE?** to query Developer Center connection status.  If the response value equals 8, the connection is normal. 
2. For detailed event codes, refer to the link: **Developer Center > Documentation > Device Development > Callback Event Codes**.

## 2. Data Downlink

Navigate to "**Device Maintenance**" > "**Device Debugging**" to simulate the scenario of remotely issuing control commands. In "**Device Debugging**", select the TSL model data to be issued, and finally click "**Send Command**".

<a data-fancybox title="img" href="/en/quickStart/devicedebug01.png" >![img](/en/quickStart/devicedebug01.png)</a>

Example of sending the following TSL model data

⚫  ID: 1. Type: Bool. Feature Name: Switch. Content: false.

In non-cache mode, when the UE receives data from Developer Center, it directly prints data to the MCU. For example, after Developer Center sends a service command, the serial tool displays the results as shown below:

```Plain
[RX]+QIOTEVT: 5,10200,11
[RX]{"1":false}
```

Interaction Data Parsing (For event details, please refer to: [Interaction Event](https://iot-cloud-docs.quectelcn.com/deviceDevelop/DeviceAccessPlan/cellular/AT/InteractionEvent.html))

- +QIOTEVT: 5,10200,11: Event notification sent to the MCU after the UE receives TSL model data.
  - 5 : Event type. It indicates downlink data reception.
  - 10210:  Event Code. It indicates TSL model data reception. 
  - 11: Length of the received data.
- {"1":false} : JSON-formatted TSL model service data received from Developer Center.

