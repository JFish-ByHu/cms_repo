# Connect Devices to Developer Center

This section introduces how to connect module-equipped devices to Developer Center through AT commands by taking an RGB LED light as an example.

**1. Serial Port Connection**

 Connect the module to the host and configure the serial port with the following default settings:

⚫ Baudrate: 115200 bps 

⚫ Data bits: 8 

⚫ Parity: None

⚫ Stop bits: 1 

⚫ Flow control: None

**2. QthTools-MCU Simulator (Optional)**

QthTools-MCU Simulator is a practical PC auxiliary software that simulates a MCU and communicates with the module, significantly reducing the time for developers to familiarize with AT commands and improving development efficiency.

<a data-fancybox title="img" href="/en/quickStart/deviceconnect01.png" >![img](/en/quickStart/deviceconnect01.png)</a>

**3. AT Command Interaction Process**

**3.1. Query Communication Status via AT Command**

Check serial communication function. After connecting the module to the PC, send **AT** via the serial tool. If the module responds with **OK**, communication is normal. 

```Plain
[TX]AT 

[RX]OK
```

Note:  If there is no response from the module after sending **AT**, you need to confirm whether the hardware wiring and power supply are normal.

**3.2. Query SIM Card Status**

Check SIM card status. If the SIM card is properly inserted, **+CPIN: READY** will return after **AT+CPIN?** is executed.

```Plain
[TX]AT+CPIN? 

[RX]+CPIN: READY
[RX]OK
```

**3.3. Query Network Registration Status**

Execute **AT+CEREG?** to check the device's network registration status. This command both queries current registration status and controls unsolicited result codes reporting of registration status.  Please note that only when the second parameter in **AT+CEREG?** response returns 1 or 5 does it indicate successful network registration.

```Plain
[TX]AT+CEREG? 

[RX]+CEREG:0,1 
[RX]OK
```

**3.4. Configure Product Information**

ProductKey (Product Identifier) and ProductSecret (Product Key) are a pair of interrelated authentication credentials that are collectively used for device identity authentication and connection establishment with Developer Center. During the device authentication and communication process, the device utilizes this pair of credentials to complete the authentication procedure with Developer Center and establish a stable connection.  

```Plain
[TX]AT+QIOTCFG="productinfo","p1xxxX","blp**********GVz"

[RX]OK
```

**3.5. Configure TSL Model Data Format (Optional)**

Set data format to JSON for improving TSL model data readability.

```Plain
[TX]AT+QIOTCFG="tsl",1 

[RX]OK
```

**3.6. Connect to Developer Center** 

Execute **AT+QIOTREG=1** to enable QuecThing feature. The device will automatically authenticate and subscribe to Developer Center.

```Plain
[TX]AT+QIOTREG=1 

[RX]OK 

[RX]+QIOTEVT: 1,10200 
[RX]+QIOTEVT: 2,10200 
[RX]+QIOTEVT: 3,10200
```

Upon successful connection, the device will show as online in Developer Center, as shown below:

<a data-fancybox title="img" href="/en/quickStart/deviceconnect02.png" >![img](/en/quickStart/deviceconnect02.png)</a>