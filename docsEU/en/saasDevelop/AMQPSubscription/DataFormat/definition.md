# Data Format Definition

This section presents data format of each message type defined in Data Format Overview.<br />Current Version: v1.0.0.

## **Online And Offline Event**

<table>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Note</th>
      <th>Required</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>ONLINE</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>Timestamp indicating the exact time the message was generated. Type: integer. Unit: ms.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>Message ID</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>Gateway details.</td>
      <td>N</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>productKey</td>
            <td>String</td>
            <td>productKey of gateway product.</td>
          </tr>
          <tr>
            <td>deviceKey</td>
            <td>String</td>
            <td>deviceKey of gateway device.</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object</td>
      <td></td>
      <td>N</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>value</td>
            <td>Integer</td>
            <td>
              0 - Offline<br />
              1 - Online<br />
              2 - Reconnected
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>




Example:

```json
{
    "productKey": "p12345",
    "deviceKey": "1234567890",
    "type": "ONLINE",
    "createdAt": 1609316592000,
    "ticket": "5f9924d171977c33bc5ad1b1",
    "gateway": {
        "productKey": "p12344",
        "deviceKey": "1234567891"
    },
    "data": {
        "value": 1
    }
}
```



## **Device And Module Status**

<table>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Note</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>STATUS</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>Timestamp indicating the exact time the message was generated. Type: integer. Unit: ms.</td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>Message ID.</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>Gateway details.</td>
    </tr>
    <tr>
      <td colspan="3">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>productKey</td>
            <td>String</td>
            <td>productKey of gateway product.</td>
          </tr>
          <tr>
            <td>deviceKey</td>
            <td>String</td>
            <td>deviceKey of gateway device.</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="3">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>packetId</td>
            <td>Integer</td>
            <td>Uplink and downlink data package ID.</td>
          </tr>
          <tr>
            <td>kv</td>
            <td>JSON Object</td>
            <td>
            The changed status property.<br />
            (battery, voltage, signal_strength, memory_free, rsrp, rsrq, snr, type, version, mcu_version, cell_id, icc_id, mcc, mnc, lac, phone_num, sim_num)<br />
            See fields of device status and module status. The number of reported fields is not fixed.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>





Example:

```json
{
    "productKey": "p12345",
    "deviceKey": "1234567890",
    "type": "STATUS",
    "createdAt": 1609316592000,
    "ticket": "5f9924d171977c33bc5ad1b1",
    "data": {
        "packetId": 3,
        "kv": {"battery": "20", "voltage": "4"}
    }
}
```

List of Status Fields

<table>
    <tr>
      <th>Type</th>
      <th>Name</th>
      <th>Key</th>
    </tr>
    <tr>
      <td rowspan="7">Device Status</td>
      <td>Battery</td>
      <td>battery</td>
    </tr>
    <tr>
      <td>Voltage</td>
      <td>voltage</td>
    </tr>
    <tr>
      <td>Signal Strength</td>
      <td>signal_strength</td>
    </tr>
    <tr>
      <td>Free Memory Left</td>
      <td>memory_free</td>
    </tr>
    <tr>
      <td>Reference Signal Receiving Power</td>
      <td>rsrp</td>
    </tr>
    <tr>
      <td>Reference Signal Receiving Power Under LTE</td>
      <td>rsrq</td>
    </tr>
    <tr>
      <td>Signal to Interference plus Noise Ratio</td>
      <td>snr</td>
    </tr>
    <tr>
      <td rowspan="12">Module Status</td>
      <td>Module Model</td>
      <td>type</td>
    </tr>
    <tr>
      <td>Firmware Version</td>
      <td>version</td>
    </tr>
    <tr>
      <td>MCU Version</td>
      <td>mcu_version</td>
    </tr>
    <tr>
      <td>Basestation ID</td>
      <td>cell_id</td>
    </tr>
    <tr>
      <td>ICCID</td>
      <td>icc_id</td>
    </tr>
    <tr>
      <td>Mobile Country Code</td>
      <td>mcc</td>
    </tr>
    <tr>
      <td>Mobile Network Code</td>
      <td>mnc</td>
    </tr>
    <tr>
      <td>Location Area Code</td>
      <td>lac</td>
    </tr>
    <tr>
      <td>Phone Number</td>
      <td>phone_num</td>
    </tr>
    <tr>
      <td>SIM Card Number</td>
      <td>sim_num</td>
    </tr>
    <tr>
      <td>SDK Version</td>
      <td>sdk_ver</td>
    </tr>
    <tr>
      <td>Positioning Support</td>
      <td>locator</td>
    </tr>
  </table>




## **Device Response**

<table>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Note</th>
      <th>Required</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>REQACK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>Timestamp indicating the exact time the message was generated. Type: integer. Unit: ms.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>Message ID generated by Snowflake algorithm.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>Gateway details.</td>
      <td>N</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>productKey</td>
            <td>String</td>
            <td>productKey of gateway product.</td>
          </tr>
          <tr>
            <td>deviceKey</td>
            <td>String</td>
            <td>deviceKey of gateway device.</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object</td>
      <td></td>
      <td>Y</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>sentAt</td>
            <td>Long</td>
            <td>
              Timestamp sent to the device. Integer type. Unit: ms.
            </td>
          </tr>
          <tr>
            <td>status</td>
            <td>Enum</td>
            <td>
              succ - Success<br />
              fail - Failure<br />
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>




Example:

```json
{
  "productKey": "p12345",
  "deviceKey": "1234567890",
  "type": "REQACK",
  "createdAt": 1609316592000,
  "ticket": "23924d171977c121325ad1bf",
  "gateway": {
    "productKey": "p12344",
    "deviceKey": "1234567891"
  },
  "data": {
    "sentAt": 1609316592000,
    "status": "succ"
  }
}
```



## **Device Information Change**

<table>
    <tr>
      <th>Field</th>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Note</th>
    </tr>
    <tr>
      <td>type</td>
      <td>Event type</td>
      <td>String</td>
      <td>Y</td>
      <td>Fixed to META_EVENT.</td>
    </tr>
     <tr>
      <td>ticket</td>
      <td>Message ID</td>
      <td>String</td>
      <td>N</td>
     <td>This field is required if the operation type is activation, authentication or de-registration. Otherwise, it is optional.</td>
     </tr>
    <tr>
      <td>subtype</td>
      <td>Type of operation subject</td>
      <td>String</td>
      <td>Y</td>
      <td>Fixed to DEVICE indicating that the operation applies to device.</td>
    </tr>
    <tr>
      <td>operation</td>
      <td>Specific operation</td>
      <td>String</td>
      <td>Y</td>
      <td>
      ADD - Add a device<br />
      UPDATE - Update device information<br />
      DELETE - Delete a device<br />
      RESET - Reset a device<br />  
      AUTH - Authenticate a device<br />
      ACTIVE - Activate a device<br /> 
      LOGOFF - De-register a device<br /> 
      </td>
    </tr>
    <tr>
      <td>productKey</td>
      <td>PK of the product</td>
      <td>String</td>
      <td>Y</td>
      <td></td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>Unique device code</td>
      <td>String</td>
      <td>Y</td>
      <td></td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Timestamp of the operation</td>
      <td>Long</td>
      <td>Y</td>
      <td>Timestamp indicating the exact time the message was generated. Type: integer. Unit: ms.</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>Gateway information</td>
      <td>JSON Object</td>
      <td>N</td>
      <td>Gateway information will be displayed during operations such as resetting/authenticating/logging off gateway devices.</td>
    </tr>
    <tr>
      <td colspan="5">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>productKey</td>
            <td>String</td>
            <td>productKey of gateway product</td>
          </tr>
          <tr>
            <td>deviceKey</td>
            <td>String</td>
            <td>deviceKey of gateway device</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>data</td>
      <td></td>
      <td>JSON Object</td>
      <td>N</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="5">
        Adding/Deleting/Activating/Authenticating/Deregistering a Device
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>deviceName</td>
            <td>String</td>
            <td>Device name</td>
          </tr>
          <tr>
            <td>sn</td>
            <td>String</td>
            <td>SN</td>
          </tr>
        </table>
           Modify a Device
        <table>
            <tr>
                <th>Field</th>
                <th>Type</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>deviceName</td>
                <td>JSON Object</td>
                <td>Device name-related modification</td>
            </tr>
            <tr>
                <td colspan="3">
                    <table>
                        <tr>
                            <th>Field</th>
                            <th>Type</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>old</td>
                            <td>String</td>
                            <td>Previous device name</td>
                        </tr>
                        <tr>
                            <td>new</td>
                            <td>String</td>
                            <td>New device name</td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>sn</td>
                <td>JSON Object</td>
                <td>Device SN-related modification</td>
            </tr>
            <tr>
              <td colspan="3">
                <table>
                  <tr>
                    <th>Field</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td>new</td>
                    <td>String</td>
                    <td>New device SN</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
                <td>timeOffset</td>
                <td>JSON Object</td>
                <td>Time offset-related modification</td>
            </tr>
            <tr>
                <td colspan="3">
                    <table>
                        <tr>
                            <th>Field</th>
                            <th>Type</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>old</td>
                            <td>String</td>
                            <td>Previous time offset</td>
                        </tr>
                        <tr>
                            <td>new</td>
                            <td>String</td>
                            <td>time offset</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
      </td>
    </tr>
  </table>



Example of adding/deleting a device:

```json
{
    "productKey": "p11376",
    "deviceKey": "132456",    
    "type": "META_EVENT",
    "subtype": "DEVICE",
    "ticket": "1032330579905388544",
    "operation": "ADD/DELETE",
    "createdAt": 1616375484482,
    "data": {
        "deviceName": "123789",
        "sn": null
    }
}
```

Example of activating/authenticating/de-registering  a device:

```json
{
  "productKey": "p11376",
  "deviceKey": "132456",
  "type": "META_EVENT",
  "subtype": "DEVICE",
  "ticket": "1032330579905388544",
  "operation": "AUTH/ACTIVEL/LOGOFF",
  "createdAt": 1616375484482,
  "gateway": {
    "productKey": "p11371",
    "deviceKey": "112456"
  },
  "data": null
}
```

Example of modifying a device:

```json
{
    "productKey": "p11376",
    "deviceKey": "132456",
    "type": "META_EVENT",
    "subtype": "DEVICE",
    "operation": "UPDATE",
    "createdAt": 1616375484482,
    "ticket": "1032330579905388544",
    "data": {
        "deviceName": {
            "old": "original device name",
            "new": "new device name"
        },
        "sn": {
            "new": "new SN"
        },
        "timeOffset": {
            "old": "+06:00",
            "new": "+08:00"
        }
    }
}
```

Example of reseting a device:

```json
{
    "productKey": "p11376",
    "deviceKey": "132456",
    "type": "META_EVENT",
    "subtype": "DEVICE",
    "operation": "RESET",
    "createdAt": 1616375484482,
    "data": null,
    "ticket": "1032330579905388544",
    "gateway": {
        "productKey": "p11371",
        "deviceKey": "112456"
    }
}

```



## **Device Binding Information Change**

<table>
    <tr>
      <th>Field</th>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Note</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>PK</td>
      <td>String</td>
      <td>Y</td>
      <td></td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>DK</td>
      <td>String</td>
      <td>Y</td>
      <td></td>
    </tr>
    <tr>
      <td>deviceName</td>
      <td>Device name</td>
      <td>String</td>
      <td>N</td>
      <td></td>
    </tr>
    <tr>
      <td>type</td>
      <td>Type</td>
      <td>String</td>
      <td>Y</td>
      <td>Fixed to ENDUSER</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Sub-type</td>
      <td>String</td>
      <td>Y</td>
      <td>Fixed to USER-BIND</td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>Message ID</td>
      <td>String</td>
      <td>Y</td>
      <td></td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Creation time</td>
      <td>Long</td>
      <td>Y</td>
      <td>Operation timestamp. Unit: ms</td>
    </tr>
    <tr>
      <td>data </td>
      <td></td>
      <td>JSON Object</td>
      <td>Y</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="5">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>endUserId</td>
            <td>String</td>
            <td>Terminal user ID</td>
          </tr>
          <tr>
            <td>endUserDomain</td>
            <td>String</td>
            <td>Terminal user domain</td>
          </tr>
          <tr>
            <td>value</td>
            <td>Integer</td>
            <td>
              0 - Delete a device (Unbind device, cancel user account, delete device by sharer, delete device by sharee, delete device from device group)<br />
              1 - Add a device (Bind device, share a device, add a device to device group)<br />
              2 - Invalidate a device (Reset device)
            </td>
          </tr>
          <tr>
            <td>authStatus</td>
            <td>Integer</td>
            <td>Authentication status.<br />
                1 - True binding <br />
                2 - Fake binding</td>
          </tr>
          <tr>
            <td>authLevel</td>
            <td>Integer</td>
            <td>Authentication level.<br />
                1 - Owner<br />
                2 - Sharer</td>
          </tr>
          <tr>
            <td>invalidCause</td>
            <td>Integer</td>
            <td>
              Deletion/invalid reason<br />
              1 - Device is unbound<br />
              2 - Device is reset<br />
              3 - Sharing has expired<br />
              4 - Sharing is canceled<br />
              5 - Sharing is overwritten<br />
              6 - Device is added to the device group<br />  
              7 - Device is removed from the device group<br />
              8 - Authentication status of the device has changed to fake binding<br />
              9 - Authentication status of the device has changed to true binding<br />
              10 - Sub-device has disconnected from the gateway<br />
              11 - Sub-device has connected to the gateway<br />
              12 - User is removed from the family
            </td>
          </tr>
          <tr>
            <td>openId</td>
            <td>String</td>
            <td>Unique ID of the user from a third-party user platform</td>
          </tr>
        </table>
      </td>
    </tr>
  </table>





Example:

```json
{
    "type": "ENDUSER",
    "subtype": "USER-BIND",
    "deviceKey": "132456",
    "productKey": "p11376",
    "createdAt": 1616375484482,
    "deviceName": "device",
    "ticket": "23924d171977c121325ad1bf",
    "data": {
        "endUserId": "11376",
        "endUserDomain": "C.DM.5715.1",
        "value":1
    }
}
```



## **Transparent Transmission-Device Uplink Data**

<table>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Note</th>
      <th>Required</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>RAW</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Enum</td>
      <td>UPLINK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>Timestamp indicating the exact time the message was generated. Type: integer. Unit: ms.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>Gateway details.</td>
      <td>N</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>productKey</td>
            <td>String</td>
            <td>productKey of gateway product</td>
          </tr>
          <tr>
            <td>deviceKey</td>
            <td>String</td>
            <td>deviceKey of gateway device</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>Message ID</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object</td>
      <td></td>
      <td>Y</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>packetId</td>
            <td>Integer</td>
            <td>
              Uplink and downlink data package ID
            </td>
          </tr>
          <tr>
            <td>raw</td>
            <td>String</td>
            <td>
              base64 encoded string
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>




Example:

```json
{
  "ticket": "5f9924d171977c33bc5ad1b1",
  "productKey": "p111KY",
  "deviceKey": "1234567890123",
  "type": "RAW",
  "subtype": "UPLINK",
  "createdAt": 1609316592000,
  "gateway": {
    "productKey": "p111KY",
    "deviceKey": "2345678901234"
  },
  "data": {
    "packetId": 3,
    "raw": "YSBtZXNzYWdl"
  }
}
```


## **Transparent Transmission-Device Downlink Data**

<table>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Note</th>
      <th>Required</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>RAW</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Enum</td>
      <td>DOWNLINK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>Timestamp indicating the exact time the message was generated. Type: integer. Unit: ms.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>Message ID</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>Gateway details.</td>
      <td>N</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>productKey</td>
            <td>String</td>
            <td>productKey of gateway product</td>
          </tr>
          <tr>
            <td>deviceKey</td>
            <td>String</td>
            <td>deviceKey of gateway device</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object</td>
      <td></td>
      <td>Y</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>raw</td>
            <td>String</td>
            <td>
              base64 encoded string
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>




Example:

```json
{
  "ticket": "5f9924d171977c33bc5ad1b1",
  "productKey": "p111KY",
  "deviceKey": "1234567890123",
  "type": "RAW",
  "subtype": "DOWNLINK",
  "createdAt": 1609316592000,
  "gateway": {
    "productKey": "p111KY",
    "deviceKey": "2345678901234"
  },
  "data": {
    "raw": "YSBtZXNzYWdl"
  }
}
```



## **TSL-Property**

### **MATTR READ: TSL-Request of Read**

<table>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Note</th>
      <th>Required</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>MATTR</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Enum</td>
      <td>READ</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>Timestamp indicating the exact time the message was generated. Type: integer. Unit: ms.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>Message ID</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>Gateway details.</td>
      <td>N</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>productKey</td>
            <td>String</td>
            <td>productKey of gateway product</td>
          </tr>
          <tr>
            <td>deviceKey</td>
            <td>String</td>
            <td>deviceKey of gateway device</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object</td>
      <td></td>
      <td>Y</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>keys</td>
            <td>array</td>
            <td>
              Set of function IDs
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>




Example:

```json
{
  "ticket": "5f9924d171977c33bc5ad1b1",
  "productKey": "p111KY",
  "deviceKey": "1234567890123",
  "type": "MATTR",
  "subtype": "READ",
  "createdAt": 1609316592000,
  "gateway": {
    "productKey": "p111KY",
    "deviceKey": "2345678901234"
  },
  "data": {
    "keys": [
      "code1",
      "code2"
    ]
  }
}
```



### **MATTR READRESP: TSL-Response of Read**

<table>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Note</th>
      <th>Required</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>MATTR</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Enum</td>
      <td>READRESP</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>Timestamp indicating the exact time the message was generated. Type: integer. Unit: ms.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>Message ID</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>Gateway details.</td>
      <td>N</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>productKey</td>
            <td>String</td>
            <td>productKey of gateway product</td>
          </tr>
          <tr>
            <td>deviceKey</td>
            <td>String</td>
            <td>deviceKey of gateway device</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object</td>
      <td></td>
      <td>Y</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>packetId</td>
            <td>Integer</td>
            <td>
              Uplink and downlink data package ID
            </td>
          </tr>
          <tr>
            <td>kv</td>
            <td>JSON Object</td>
            <td>
              Property key-value pair
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>



Example:

```json
{
  "ticket": "5f9924d171977c33bc5ad1b1",
  "productKey": "p111KY",
  "deviceKey": "1234567890123",
  "type": "MATTR",
  "subtype": "READRESP",
  "createdAt": 1609316592000,
  "gateway": {
    "productKey": "p111KY",
    "deviceKey": "2345678901234"
  },
  "data": {
    "packetId": 3,
    "kv": {
      "numberKey": "0.26",
      "boolKey": false,
      "enumKey": "1"
    }
  }
}
```
> Remark:When the platform pushes messages, the numeric values (INT, FLOAT, DOUBLE, ENUM as defined in the TSL model) are all sent as strings. The recipient can convert them to numeric format as needed based on the TSL model definition.


### **MATTR WRITE: TSL-Request of Write**

<table>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Note</th>
      <th>Required</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>MATTR</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Enum</td>
      <td>WRITE</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>Timestamp indicating the exact time the message was generated. Type: integer. Unit: ms.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>Message ID</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>Gateway details.</td>
      <td>N</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>productKey</td>
            <td>String</td>
            <td>productKey of gateway product</td>
          </tr>
          <tr>
            <td>deviceKey</td>
            <td>String</td>
            <td>deviceKey of gateway device</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object</td>
      <td></td>
      <td>Y</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>kv</td>
            <td>JSON Object</td>
            <td>
              Property key-value pair
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>



Example:

```json
{
  "ticket": "5f9924d171977c33bc5ad1b1",
  "productKey": "p111KY",
  "deviceKey": "1234567890123",
  "type": "MATTR",
  "subtype": "WRITE",
  "createdAt": 1609316592000,
  "gateway": {
    "productKey": "p111KY",
    "deviceKey": "2345678901234"
  },
  "data": {
    "kv": {
      "code1": "1",
      "code2": "3"
    }
  }
}
```



### **MATTR REPORT: TSL-Report of Write**

<table>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Note</th>
      <th>Required</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>MATTR</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Enum</td>
      <td>REPORT</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>Timestamp indicating the exact time the message was generated. Type: integer. Unit: ms.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>Message ID</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>Gateway details.</td>
      <td>N</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>productKey</td>
            <td>String</td>
            <td>productKey of gateway product</td>
          </tr>
          <tr>
            <td>deviceKey</td>
            <td>String</td>
            <td>deviceKey of gateway device</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>extData</td>
      <td>JSON Object</td>
      <td>Reserved. Format: Key value pair.</td>
      <td>N</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>occurredAt</td>
            <td>String</td>
            <td>
              Reserved. This parameter records the actual time the module disconnected from network in timestamp format.
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object</td>
      <td></td>
      <td>Y</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>packetId</td>
            <td>Integer</td>
            <td>
              Uplink and downlink data package ID
            </td>
          </tr>
          <tr>
            <td>kv</td>
            <td>JSON Object</td>
            <td>
              Property key-value pair
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>



Example:

```json
{
  "productKey": "p111KY",
  "deviceKey": "1234567890123",
  "type": "MATTR",
  "subtype": "REPORT",
  "createdAt": 1609316592000,
  "ticket": "5f9924d171977c33bc5ad1b1",
  "gateway": {
    "productKey": "p111KY",
    "deviceKey": "2345678901234"
  },
  "extData": {
    "occurredAt": "1652433712899"
  },
  "data": {
    "packetId": 5,
    "kv": {
      "numberKey": "0.26",
      "boolKey": false,
      "enumKey": "1"
    }
  }
}
```
> Remark:When the platform pushes messages, the numeric values (INT, FLOAT, DOUBLE, ENUM as defined in the TSL model) are all sent as strings. The recipient can convert them to numeric format as needed based on the TSL model definition.
## **TSL-Uplink Transparent Transmission Data of Device**

<table>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Note</th>
      <th>Required</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>RAW</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Enum</td>
      <td>UPLINK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>Timestamp indicating the exact time the message was generated. Type: integer. Unit: ms.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>Gateway details. </td>
      <td>N</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>productKey</td>
            <td>String</td>
            <td>productKey of gateway product</td>
          </tr>
          <tr>
            <td>deviceKey</td>
            <td>String</td>
            <td>deviceKey of gateway device</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>Message ID</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object</td>
      <td></td>
      <td>Y</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>packetId</td>
            <td>Integer</td>
            <td>
              Uplink and downlink data package ID
            </td>
          </tr>
          <tr>
            <td>raw</td>
            <td>String</td>
            <td>
              base64 encoded string
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>




Example:

```json
{
  "ticket": "5f9924d171977c33bc5ad1b1",
  "productKey": "p111KY",
  "deviceKey": "1234567890123",
  "type": "RAW",
  "subtype": "UPLINK",
  "createdAt": 1609316592000,
  "gateway": {
    "productKey": "p111KY",
    "deviceKey": "2345678901234"
  },
  "data": {
    "packetId": 3,
    "raw": "YSBtZXNzYWdl"
  }
}
```
>Remark: The raw field is the base64 encoded string of the data.


## **TSL-Downlink Transparent Transmission Data of Device**

<table>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Note</th>
      <th>Required</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>RAW</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Enum</td>
      <td>DOWNLINK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>Timestamp indicating the exact time the message was generated. Type: integer. Unit: ms.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>Message ID</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>Gateway details. </td>
      <td>N</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>productKey</td>
            <td>String</td>
            <td>productKey of gateway product</td>
          </tr>
          <tr>
            <td>deviceKey</td>
            <td>String</td>
            <td>deviceKey of gateway device</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object</td>
      <td></td>
      <td>Y</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>raw</td>
            <td>String</td>
            <td>
              base64 encoded string
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>




Example:

```json
{
  "ticket": "5f9924d171977c33bc5ad1b1",
  "productKey": "p111KY",
  "deviceKey": "1234567890123",
  "type": "RAW",
  "subtype": "DOWNLINK",
  "createdAt": 1609316592000,
  "gateway": {
    "productKey": "p111KY",
    "deviceKey": "2345678901234"
  },
  "data": {
    "raw": "YSBtZXNzYWdl"
  }
}
```
>Remark: The raw field is the base64 encoded string of the data.

## **TSL-Event-Message**

<table>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Note</th>
      <th>Required</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>MEVENT</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Enum</td>
      <td>INFO</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>Timestamp indicating the exact time the message was generated. Type: integer. Unit: ms.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>Message ID</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>Gateway details.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>productKey</td>
            <td>String</td>
            <td>productKey of gateway product</td>
          </tr>
          <tr>
            <td>deviceKey</td>
            <td>String</td>
            <td>deviceKey of gateway device</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>extData</td>
      <td>JSON Object</td>
      <td>Reserved. Format: Key value pair.</td>
      <td>N</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>occurredAt</td>
            <td>String</td>
            <td>
              Reserved. This parameter records the actual time the module disconnected from network in timestamp format.
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object</td>
      <td></td>
      <td>Y</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>packetId</td>
            <td>Integer</td>
            <td>
              Uplink and downlink data package ID
            </td>
          </tr>
          <tr>
            <td>code</td>
            <td>String</td>
            <td>
              Message code
            </td>
          </tr>
          <tr>
            <td>kv</td>
            <td>JSON Object</td>
            <td>
              Key-value pair
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>



Example:

```json
{
  "ticket": "5f9924d171977c33bc5ad1b1",
  "productKey": "p111KY",
  "deviceKey": "1234567890123",
  "type": "MEVENT",
  "subtype": "INFO",
  "createdAt": 1609316592000,
  "gateway": {
    "productKey": "p111KY",
    "deviceKey": "2345678901234"
  },
  "extData": {
    "occurredAt": "1652433712899"
  },
  "data": {
    "packetId": 3,
    "code": "event_code3",
    "kv": {
      "numberKey": "0.26",
      "boolKey": false,
      "enumKey": "1"
    }
  }
}
```
> Remark:When the platform pushes messages, the numeric values (INT, FLOAT, DOUBLE, ENUM as defined in the TSL model) are all sent as strings. The recipient can convert them to numeric format as needed based on the TSL model definition.


## **TSL-Event-Alert**

<table>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Note</th>
      <th>Required</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>MEVENT</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Enum</td>
      <td>WARN</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>Timestamp indicating the exact time the message was generated. Type: integer. Unit: ms.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>Message ID</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>Gateway details.</td>
      <td>N</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>productKey</td>
            <td>String</td>
            <td>productKey of gateway product</td>
          </tr>
          <tr>
            <td>deviceKey</td>
            <td>String</td>
            <td>deviceKey of gateway device</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>extData</td>
      <td>JSON Object</td>
      <td>Reserved. Format: Key value pair.</td>
      <td>N</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>occurredAt</td>
            <td>String</td>
            <td>
              Reserved. This parameter records the actual time the module disconnected from network in timestamp format.
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object</td>
      <td></td>
      <td>Y</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>packetId</td>
            <td>Integer</td>
            <td>
              Uplink and downlink data package ID
            </td>
          </tr>
          <tr>
            <td>code</td>
            <td>String</td>
            <td>
              Message code
            </td>
          </tr>
          <tr>
            <td>kv</td>
            <td>JSON Object</td>
            <td>
              Key-value pair
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>



Example

```json
{
  "ticket": "5f9924d171977c33bc5ad1b1",
  "productKey": "p111KY",
  "deviceKey": "1234567890123",
  "type": "MEVENT",
  "subtype": "WARN",
  "createdAt": 1609316592000,
  "gateway": {
    "productKey": "p111KY",
    "deviceKey": "2345678901234"
  },
  "extData": {
    "occurredAt": "1652433712899"
  },
  "data": {
    "packetId": 3,
    "code": "event_code3",
    "kv": {
      "numberKey": "0.26",
      "boolKey": false,
      "enumKey": "1"
    }
  }
}
```
> Remark:When the platform pushes messages, the numeric values (INT, FLOAT, DOUBLE, ENUM as defined in the TSL model) are all sent as strings. The recipient can convert them to numeric format as needed based on the TSL model definition.


## **TSL-Event-Fault**

<table>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Note</th>
      <th>Required</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>MEVENT</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Enum</td>
      <td>ERROR</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>Timestamp indicating the exact time the message was generated. Type: integer. Unit: ms.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>Message ID</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>Gateway details.</td>
      <td>N</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>productKey</td>
            <td>String</td>
            <td>productKey of gateway product</td>
          </tr>
          <tr>
            <td>deviceKey</td>
            <td>String</td>
            <td>deviceKey of gateway device</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>extData</td>
      <td>JSON Object</td>
      <td>Reserved. Format: Key value pair.</td>
      <td>N</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>occurredAt</td>
            <td>String</td>
            <td>
              Reserved. This parameter records the actual time the module disconnected from network in timestamp format.
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object</td>
      <td></td>
      <td>Y</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>packetId</td>
            <td>Integer</td>
            <td>
              Uplink and downlink data package ID
            </td>
          </tr>
          <tr>
            <td>code</td>
            <td>String</td>
            <td>
              Message code
            </td>
          </tr>
          <tr>
            <td>kv</td>
            <td>JSON Object</td>
            <td>
              Key-value pair
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>



Example:

```json
{
  "ticket": "5f9924d171977c33bc5ad1b1",
  "productKey": "p111KY",
  "deviceKey": "1234567890123",
  "type": "MEVENT",
  "subtype": "ERROR",
  "createdAt": 1609316592000,
  "gateway": {
    "productKey": "p111KY",
    "deviceKey": " 2345678901234"
  },
  "extData": {
    "occurredAt": "1652433712899"
  },
  "data": {
    "packetId": 3,
    "code": "event_code3",
    "kv": {
      "numberKey": "0.26",
      "boolKey": false,
      "enumKey": "1"
    }
  }
}
```
> Remark:When the platform pushes messages, the numeric values (INT, FLOAT, DOUBLE, ENUM as defined in the TSL model) are all sent as strings. The recipient can convert them to numeric format as needed based on the TSL model definition.


## **TSL-Service-Calling Logs**

<table>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Note</th>
      <th>Required</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>MSERV</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Enum</td>
      <td>INPUT/OUTPUT</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>Timestamp indicating the exact time the message was generated. Type: integer. Unit: ms.</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>Message ID</td>
      <td>Y</td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>Gateway details.</td>
      <td>N</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>productKey</td>
            <td>String</td>
            <td>productKey of gateway product</td>
          </tr>
          <tr>
            <td>deviceKey</td>
            <td>String</td>
            <td>deviceKey of gateway device</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>extData</td>
      <td>JSON Object</td>
      <td>Reserved. Format: Key value pair.</td>
      <td>N</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>occurredAt</td>
            <td>String</td>
            <td>
              Reserved. This parameter records the actual time the module disconnected from network in timestamp format.
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object</td>
      <td></td>
      <td>Y</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>packetId</td>
            <td>Integer</td>
            <td>
              Uplink and downlink data package ID
            </td>
          </tr>
          <tr>
            <td>code</td>
            <td>String</td>
            <td>
              Service code
            </td>
          </tr>
          <tr>
            <td>kv</td>
            <td>JSON Object</td>
            <td>
              Input parameters
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>



Example:

```json
{
  "ticket": "5f9924d171977c33bc5ad1b1",
  "productKey": "p111KY",
  "deviceKey": "1234567890123",
  "type": "MSERV",
  "subtype": "INPUT",
  "createdAt": 1609316592000,
  "gateway": {
    "productKey": "p111KY",
    "deviceKey": "2345678901234"
  },
  "extData": {
    "occurredAt": "1652433712899"
  },
  "data": {
    "packetId": 3,
    "code": "serv_code",
    "kv": {
      "numberKey": "0.26",
      "boolKey": false,
      "enumKey": "1"
    }
  }
}
```

> Remark:When the platform pushes messages, the numeric values (INT, FLOAT, DOUBLE, ENUM as defined in the TSL model) are all sent as strings. The recipient can convert them to numeric format as needed based on the TSL model definition.

## **Device Positioning-Query Positioning Data**

<table>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Note</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>LOCATION</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Enum</td>
      <td>QUERY</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>Timestamp indicating the exact time the message was generated. Type: integer. Unit: ms.</td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>Message ID</td>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="3">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>packetId</td>
            <td>Integer</td>
            <td>
              Data package ID
            </td>
          </tr>
          <tr>
            <td>keys</td>
            <td>Array</td>
            <td>
              Set of modes. Can be null.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>



Example:

```json
{
    "ticket": "5f9924d171977c33bc5ad1b1",
    "productKey": "p111KY",
    "deviceKey": "1234567890123",
    "type": "LOCATION",
    "subtype": "QUERY",
    "createdAt": 1609316592000,
    "data": {
        "packetId": 1,
        "keys": []
    }
}
```



## **Device Positioning-Original Data**

<table>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Note</th>
      <th>Required</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
      <td></td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
      <td></td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>LOCATION</td>
      <td></td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Enum</td>
      <td>INFO-RAW</td>
      <td></td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>Timestamp indicating the exact time the message was generated. Type: integer. Unit: ms.</td>
      <td></td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>Message ID</td>
      <td></td>
    </tr>
    <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>Gateway details.</td>
      <td>N</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>productKey</td>
            <td>String</td>
            <td>productKey of gateway product.</td>
          </tr>
          <tr>
            <td>deviceKey</td>
            <td>String</td>
            <td>deviceKey of gateway device.</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>packetId</td>
            <td>Integer</td>
            <td>
              Data package ID
            </td>
          </tr>
          <tr>
            <td>raw</td>
            <td>String</td>
            <td>
              Original positioning data. 
              <a href="https://baike.baidu.com/item/NMEA-0183">NMEA-0183</a> protocol-based GNSS sentence format. LBS is custom:<br />
              $LBS,<1>,<2>,<3>,<4>,<5>,<6>*hh<\CR><\LF><br />
              <1> - MCC of base station<br />
              <2> - MNC of base station<br />
              <3> - LAC of base station<br />
              <4> - Cell ID of base station<br />
              <5> - RxLev of base station<br />
              <6> - Reserved
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>



Example:

```json
{
    "ticket": "5f9924d171977c33bc5ad1b1",
    "productKey": "p111KY",
    "deviceKey": "1234567890123",
    "type": "LOCATION",
    "subtype": "INFO-RAW",
    "createdAt": 1609316592000,
    "gateway": {
      "productKey": "p12344",
      "deviceKey": "1234567891"
    },
    "data": {
        "packetId": 5,
        "raw": [
            "$GNGGA,095528.000,2318.1133,N,11319.7210,E,1,06,3.7,55.1,M,-5.4,M,,0000*69",
            "$BDGGA,062938.00,3110.4700719,N,12123.2657056,E,1,25,0.6,58.9666,M,0.000,M,99,AAAA*4"
        ]
    }
}
```



## **Device Positioning Data**

Several INFO-KV messages are returned if the return value is an array.

<table>
    <tr>
      <th>Field</th>
      <th>Type</th>
      <th>Note</th>
      <th>Required</th>
    </tr>
    <tr>
      <td>productKey</td>
      <td>String</td>
      <td>PK</td>
      <td></td>
    </tr>
    <tr>
      <td>deviceKey</td>
      <td>String</td>
      <td>DK</td>
      <td></td>
    </tr>
    <tr>
      <td>type</td>
      <td>Enum</td>
      <td>LOCATION</td>
      <td></td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Enum</td>
      <td>INFO-KV reports original or parsed positioning data</td>
      <td></td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Long</td>
      <td>Timestamp indicating the exact time the message was generated. Type: integer. Unit: ms.</td>
      <td></td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>String</td>
      <td>Message ID</td>
      <td></td>
    </tr>
        <tr>
      <td>gateway</td>
      <td>JSON Object</td>
      <td>Gateway details.</td>
      <td>N</td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>productKey</td>
            <td>String</td>
            <td>productKey of gateway product.</td>
          </tr>
          <tr>
            <td>deviceKey</td>
            <td>String</td>
            <td>deviceKey of gateway device.</td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td>data</td>
      <td>JSON Object</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td colspan="4">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>packetId</td>
            <td>Integer</td>
            <td>
              Data package ID
            </td>
          </tr>
          <tr>
            <td>type</td>
            <td>String</td>
            <td>
              Positioning method: GP/GL/GA/GN/BD/LBS/WIFI
            </td>
          </tr>
          <tr>
            <td>subType</td>
            <td>String</td>
            <td>
              Positioning type: BD/GL (Russia)/GP (America)/GA (Europe)/GN (GP + BD)/LBS/WIFI
            </td>
          </tr>
          <tr>
            <td>kv</td>
            <td>JSON Object</td>
            <td>
              Parsed positioning data. Default coordinate system is wgs84.<br />
              ggaStatus:GGA-specific，0=Initialization；1=GPS SPS Mode；2=Differential GPS, SPS Mode；3=Invalid PPS；4=Fix RTK；5=Float RTK；6=Estimated (dead reckoning) Mode；7=Manual Input Mode；8=Simulator Mode；9=WAAS differential；<br />
              lat - Latitude in ddmm.mmmm format. Unit: minute.<br />
              lng - Longitude in dddmm.mmmm format. Unit: minute.<br />
              hdop - Horizontal accuracy. Range: 0.5~99.9.<br />
              latType - N (North latitude) or S (South latitude) <br />
              lngType - E(East longitude) or W (West longitude)<br />
              height - Altitude. Unit: meter.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>




Example:

```json
{
    "ticket": "5f9924d171977c33bc5ad1b1",
    "productKey": "p111KY",
    "deviceKey": "1234567890123",
    "type": "LOCATION",
    "subtype": "INFO-KV",
    "createdAt": 1609316592000,
    "gateway": {
      "productKey": "p12344",
      "deviceKey": "1234567891"
    },
    "data": {
        "packetId": 5,
        "type": "GP/LBS",
        "subType": "BD(GGA)/LBS",
        "kv": {
            "satellites": "40",         //Currently used satellites.
            "ggaStatus": "4",           //The positioning quality indicator GGA data is unique.
            "lat": "3959.6107085",      //Latitude (Unit: minute)
            "lng": "11619.6423341",     //Longitude (Unit: minute)
            "wgs_84": {
                "lat": 39.99351180833333,     //Latitude (Unit: degree)
                "lng": 116.32737223500001     //Longitude (Unit: degree)
            },
            "gcj_02": {
                "lat": 39.994825423430167,     //Latitude (Unit: degree)
                "lng": 116.33351545721269      //Longitude (Unit: degree)
            },
            "bd_09": {
                "lat": 40.00050264255087,    //Latitude (Unit: degree)
                "lng": 116.340146904483      //Longitude (Unit: degree)
            },
            "latType": "N/S",            //Latitude hemisphere
            "lngType": "W/E",            //Longitude hemisphere
            "hdop": "0.99",              //Horizontal dilution of precision, which is available only for GPS.
            "accuracy": "550",           //Accuracy, which is available only for LBS.
            "locateTime": 1609316592000, //Positioning time (UTC time).
            "height": "66.7717"          //Altitude (in meters)
        }
    }
}
```



## **Product Information Change**

<table>
    <tr>
      <th>Field</th>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Note</th>
    </tr>
    <tr>
      <td>type</td>
      <td>Event type</td>
      <td>String</td>
      <td>Y</td>
      <td>Fixed to META_EVENT</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Type of operation subject</td>
      <td>String</td>
      <td>Y</td>
      <td>Fixed to PRODUCT indicating that the operation applies to product.</td>
    </tr>
    <tr>
      <td>operation</td>
      <td>Specific operation</td>
      <td>String</td>
      <td>Y</td>
      <td>
        ADD - Add a product<br />
        UPDATE - Update product information<br />
        DELETE - Delete a product
      </td>
    </tr>
    <tr>
      <td>productKey</td>
      <td>PK</td>
      <td>String</td>
      <td>Y</td>
      <td></td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Timestamp of the operation</td>
      <td>Long</td>
      <td>Y</td>
      <td>Unit: ms</td>
    </tr>
    <tr>
      <td>data</td>
      <td></td>
      <td>JSON Object</td>
      <td>Y</td>
      <td>Product details</td>
    </tr>
    <tr>
      <td colspan="5">
        Add/Delete a Product
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>productName</td>
            <td>String</td>
            <td>Product name</td>
          </tr>
          <tr>
            <td>productType</td>
            <td>Integer</td>
            <td>0 - Small batches<br />
                1 - Large batches</td>
          </tr>
          <tr>
            <td>accessType</td>
            <td>Integer</td>
            <td>Access type.<br />
                0 - Device<br />
                1 - Gateway</td>
          </tr>
          <tr>
            <td>dataFmt</td>
            <td>Integer</td>
            <td>
              0 - Custom<br />
              3 - JSON (Standard data format)
            </td>
          </tr>
          <tr>
            <td>protocol</td>
            <td>Integer</td>
            <td>
                1 - MQTT<br />
                2 -- LWM2M/CoAP
            </td>
          </tr>
          <tr>
            <td>logoPath</td>
            <td>String</td>
            <td>Download address of logo</td>
          </tr>
          <tr>
            <td>moduleType</td>
            <td>String</td>
            <td>Module type</td>
          </tr>
          <tr>
            <td>moduleName</td>
            <td>String</td>
            <td>Module name</td>
          </tr>
          <tr>
            <td>moduleId</td>
            <td>Long</td>
            <td>Module ID</td>
          </tr>
          <tr>
            <td>allowedLimit</td>
            <td>Integer</td>
            <td>Number of activation codes</td>
          </tr>
          <tr>
            <td>productStatus</td>
            <td>Integer</td>
            <td>Project status.<br />
                0 - In development<br />
                3 - Published<br />
                9 - Error</td>
          </tr>
          <tr>
            <td>projectId</td>
            <td>Long</td>
            <td>
              Project ID
            </td>
          </tr>
          <tr>
            <td>createTime</td>
            <td>Long</td>
            <td>
              Creation time. Timestamp. Unit: ms.
            </td>
          </tr>
          <tr>
            <td>updateTime</td>
            <td>Long</td>
            <td>Modification time. Timestamp. Unit: ms.</td>
          </tr>
          <tr>
            <td>itemCode</td>
            <td>String</td>
            <td>Associated product category ID obtained with the interface of product category query.</td>
          </tr>
        </table>
           Modify Product Name
        <table>
            <tr>
                <th>Field</th>
                <th>Type</th>
                <th>Note</th>
            </tr>
            <tr>
                <td>productName</td>
                <td>JSON Object</td>
                <td>Product name information</td>
            </tr>
            <tr>
                <td colspan="3">
                    <table>
                        <tr>
                            <th>Field</th>
                            <th>Type</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>old</td>
                            <td>String</td>
                            <td>Previous product name</td>
                        </tr>
                        <tr>
                            <td>new</td>
                            <td>String</td>
                            <td>New product name</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
      </td>
    </tr>
  </table>



Example: Add a product

```json
{
    "type": "META_EVENT",
    "subtype": "PRODUCT",
    "operation": "ADD",
    "createdAt": 1616375484482,
    "operator": 1,
    "operatorType": 1,
    "productKey": "p00001",
    "data": {
        "productName": "Product Sample",
        "productType": 0,
        "accessType": 1,
        "netWay": "1",
        "dataFmt": 1,
        "protocol": 1,
        "logoPath": "https://xxxx.com/abcdfg.jpeg",
        "moduleType": null,
        "moduleName": null,
        "moduleId": null,
        "allowedLimit": 3,
        "productStatus": 0,
        "projectId": 1,
        "createTime": 1615787274000,
        "updateTime": 1615789235000,
        "itemCode": "anfang"
    }
}
```

Example of modifying a product:

```json
{
    "type": "META_EVENT",
    "subtype": "PRODUCT",
    "operation": "UPDATE",
    "createdAt": 1616375484482,
    "operator": 1,
    "operatorType": 1,
    "productKey": "p00001",
    "data": {
        "productName": {
            "old": "Previous product name",
            "new": "New product name"
        }
    }
}
```



## **Product Authorization Information**

<table>
    <tr>
      <th>Field</th>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Note</th>
    </tr>
    <tr>
      <td>type</td>
      <td>Event type</td>
      <td>String</td>
      <td>Y</td>
      <td>Fixed to META_EVENT</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Type of operation subject</td>
      <td>String</td>
      <td>Y</td>
      <td>Fixed to GRANT_AUTHORIZED, indicating product authorization operations.</td>
    </tr>
    <tr>
      <td>operation</td>
      <td>Specific operation</td>
      <td>String</td>
      <td>Y</td>
      <td>
        AUTH - Authorize a product<br />
        CANCEL_AUTH - Deauthorize a product
      </td>
    </tr>
    <tr>
      <td>ProductKey</td>
      <td>PK</td>
      <td>String</td>
      <td>Y</td>
      <td></td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Timestamp of the operation</td>
      <td>Long</td>
      <td>Y</td>
      <td>Unit: ms</td>
    </tr>
    <tr>
      <td>data</td>
      <td></td>
      <td>JSON Object</td>
      <td>Y</td>
      <td>Product authorization details</td>
    </tr>
    <tr>
      <td colspan="5">
        Product Authorization/Authorization Cancellation
        <table>
              <tr>
                <th>Field</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>productName</td>
                <td>String</td>
                <td>Product name</td>
              </tr>
              <tr>
                <td>productType</td>
                <td>Integer</td>
                <td>0 - Small batches<br />
                    1 - Large batches</td>
              </tr>
              <tr>
                <td>accessType</td>
                <td>Integer</td>
                <td>Access type.<br />
                    0 - Device<br />
                    1 - Gateway</td>
              </tr>
              <tr>
                <td>dataFmt</td>
                <td>Integer</td>
                <td>
                  0 - Custom<br />
                  3 - JSON (Standard data format)
                </td>
              </tr>
              <tr>
                <td>protocol</td>
                <td>Integer</td>
                <td>
                  1 - MQTT<br />
                  2 -- LWM2M/CoAP
                </td>
              </tr>
              <tr>
                <td>logoPath</td>
                <td>String</td>
                <td>Download address of logo</td>
              </tr>
              <tr>
                <td>moduleType</td>
                <td>String</td>
                <td>Module type</td>
              </tr>
              <tr>
                <td>moduleName</td>
                <td>String</td>
                <td>Module name</td>
              </tr>
              <tr>
                <td>moduleId</td>
                <td>Long</td>
                <td>Module ID</td>
              </tr>
              <tr>
                <td>allowedLimit</td>
                <td>Integer</td>
                <td>Number of activation codes</td>
              </tr>
              <tr>
                <td>productStatus</td>
                <td>Integer</td>
                <td>Project status.<br />
                    0 - In development<br />
                    3 - Published<br />
                    9 - Error</td>
              </tr>
              <tr>
                <td>projectId</td>
                <td>Long</td>
                <td>
                  Project ID
                </td>
              </tr>
              <tr>
                <td>createTime</td>
                <td>Long</td>
                <td>
                  Creation time. Timestamp. Unit: ms.
                </td>
              </tr>
              <tr>
                <td>updateTime</td>
                <td>Long</td>
                <td>Modification time. Timestamp. Unit: ms.</td>
              </tr>
              <tr>
                <td>itemCode</td>
                <td>String</td>
                <td>Associated product category ID obtained with the interface of product category query.</td>
              </tr>
              <tr>
                <td>netWay</td>
                <td>String</td>
                <td>Network connection method: 1-Wi-Fi, 2-Cellular network, 3-NB-IoT, 4-BT/BLE </td>
              </tr>
        </table>
      </td>
    </tr>
</table>



Example：

 ```json
{
	"createdAt": 1665280943221,
	"data": {
		"moduleType": null,
		"dataFmt": 3,
		"itemCode": "socket",
		"logoPath": null,
		"moduleName": null,
		"netWay": "2",
		"productStatus": 0,
		"allowedLimit": 100,
		"updateTime": 1665286595000,
		"productName": "socket",
		"accessType": 0,
		"protocol": null,
		"createTime": 1665285584000,
		"moduleId": null,
		"projectId": 11338,
		"productType": 0
	},
	"operation": "AUTH",
	"productKey": "p119Cx",
	"subtype": "GRANT_AUTHORIZED",
	"type": "META_EVENT"
}
 ```

## **User domain(App) Authorization Information**
<table>
    <tr>
      <th>Field</th>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Note</th>
    </tr>
    <tr>
      <td>type</td>
      <td>Event type</td>
      <td>String</td>
      <td>Y</td>
      <td>Fixed to META_EVENT</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Type of operation subject</td>
      <td>String</td>
      <td>Y</td>
      <td>Fixed to GRANT_USER_DOMAIN</td>
    </tr>
    <tr>
      <td>operation</td>
      <td>Specific operation</td>
      <td>String</td>
      <td>Y</td>
      <td>
          AUTH - Authorize a User domain(App)<br />
        CANCEL_AUTH - Deauthorize a User domain(App)
      </td>
    </tr>
    <tr>
      <td>userDomain</td>
      <td>User domain(App)</td>
      <td>String</td>
      <td>Y</td>
      <td></td>
    </tr>
    <tr>
      <td>userDomainId</td>
      <td>User domain ID</td>
      <td>Long</td>
      <td>Y</td>
      <td></td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Timestamp of the operation</td>
      <td>Long</td>
      <td>Y</td>
      <td>Unit: ms</td>
    </tr>
    <tr>
      <td>data</td>
      <td></td>
      <td>JSON Object</td>
      <td>Y</td>
      <td>App authorization details</td>
    </tr>
    <tr>
      <td colspan="5">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>appName</td>
            <td>String</td>
            <td>App name</td>
          </tr>
        </table>
      </td>
    </tr>
</table>

 ```json
{
  "type": "META_EVENT",
  "subtype": "GRANT_USER_DOMAIN",
  "operation": "AUTH",
  "userDomain": "C.DM.5503.34",

  "userDomainId": 12345645656456,
  "createdAt": 1665280943221,
  "data": {
    "appName": "test"
  }
}
 ```


## **TSL Model Release Information Change**

<table>
    <tr>
      <th>Field</th>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Note</th>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Type of operation subject</td>
      <td>String</td>
      <td>Y</td>
      <td>Fixed to THING_MODEL indicating that the operation subject applies to a TSL model.</td>
    </tr>
    <tr>
      <td>operation</td>
      <td>Specific operation</td>
      <td>String</td>
      <td>Y</td>
      <td>RELEASE- Release the TSL model</td>
    </tr>
    <tr>
      <td>ProductKey</td>
      <td>PK</td>
      <td>String</td>
      <td>Y</td>
      <td></td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Timestamp of the operation</td>
      <td>Long</td>
      <td>Y</td>
      <td>Unit: ms</td>
    </tr>
    <tr>
      <td>data </td>
      <td></td>
      <td>String</td>
      <td>Y</td>
      <td></td>
    </tr>
    <tr>
      <td>type</td>
      <td>Event type</td>
      <td>JSON Object</td>
      <td>Y</td>
      <td>Fixed to META_EVENT</td>
    </tr>
    <tr>
      <td colspan="5">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>tslJson</td>
            <td>JSON Object</td>
            <td>JSON data after the TSL model is released</td>
          </tr>
        </table>
      </td>
    </tr>
</table>



Example:

```json
{
    "type": "META_EVENT",
    "subtype": "THING_MODEL",
    "operation": "RELEASE",
    "productKey": "p11374",
    "operator": 26984,
    "operatorType": 1,
    "createdAt": 1616375484482,
    "data": {
        "tslJson": {
            "profile": {
              "version": "20210406093313373",
                "productKey": "p1137H"
            },
            "properties": [
                {
                    "code": "202104011545",
                    "dataType": "BOOL",
                    "desc": "",
                    "id": 1,
                    "name": "202104011545",
                    "specs": [
                        {
                            "dataType": "BOOL",
                            "name": "TRUE",
                            "value": "true"
                        },
                        {
                            "dataType": "BOOL",
                            "name": "FALSE",
                            "value": "false"
                        }
                    ],
                    "subType": "RW",
                    "type": "PROPERTY"
                },
                {
                    "code": "202104011700",
                    "dataType": "DOUBLE",
                    "desc": "",
                    "id": 2,
                    "name": "202104011700",
                    "specs": {
                        "max": "2",
                        "min": "1",
                        "step": "1",
                        "unit": "°"
                    },
                    "subType": "RW",
                    "type": "PROPERTY"
                },
                {
                    "code": "202104011501",
                    "dataType": "TEXT",
                    "desc": "",
                    "id": 3,
                    "name": "202104011501",
                    "specs": {
                        "length": 123
                    },
                    "subType": "RW",
                    "type": "PROPERTY"
                }
            ]
        }
    }
}
```



## **Terminal User Information Change**

<table>
    <tr>
      <th>Field</th>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Note</th>
    </tr>
    <tr>
      <td>type</td>
      <td>Event type</td>
      <td>String</td>
      <td>Y</td>
      <td>Fixed to ENDUSER</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Operation type</td>
      <td>String</td>
      <td>Y</td>
      <td>
        USER-ADD - Add a terminal user<br />
        USER-UPDATE - Update terminal user information <br />
        USER-DELETE - Delete a terminal user
      </td>
    </tr>
    <tr>
      <td>ticket</td>
      <td>Message ID</td>
      <td>String</td>
      <td>Y</td>
      <td>Unique message code</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Creation time</td>
      <td>Long</td>
      <td>Y</td>
      <td>Timestamp of the operation. Unit: ms.</td>
    </tr>
    <tr>
      <td>data </td>
      <td></td>
      <td>String</td>
      <td>Y</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="5">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>endUserId</td>
            <td>String</td>
            <td>Terminal user ID</td>
          </tr>
          <tr>
            <td>endUserDomain</td>
            <td>String</td>
            <td>Terminal user domain</td>
          </tr>
          <tr>
            <td>internationalCode</td>
            <td>String</td>
            <td>International telephone code</td>
          </tr>
          <tr>
            <td>phone</td>
            <td>String</td>
            <td>Phone Number</td>
          </tr>
          <tr>
            <td>email</td>
            <td>String</td>
            <td>Email</td>
          </tr>
          <tr>
            <td>wechatId</td>
            <td>String</td>
            <td>WeChat ID</td>
          </tr>
          <tr>
            <td>openId</td>
            <td>String</td>
            <td>Unique ID of the user from a third-party user platform</td>
          </tr>
        </table>
      </td>
    </tr>
</table>



Example:

```json
{
    "ticket": "b18be821-5045-4467-801d-ca68c302dc3d",
    "type": "ENDUSER",
    "subtype": "USER-DELETE",
    "createdAt": 1642471712433,
    "data": {
        "endUserId": "C1",
        "endUserDomain": "C.DM.1.15"
    }
}
```

## **Rule Engine Event**

<table>
    <tr>
      <th>Field</th>
      <th>Name</th>
      <th>Type</th>
      <th>Required</th>
      <th>Note</th>
    </tr>
    <tr>
      <td>type</td>
      <td>Event type</td>
      <td>String</td>
      <td>Y</td>
      <td>Fixed to CEP_RULE.</td>
    </tr>
    <tr>
      <td>subtype</td>
      <td>Subtype</td>
      <td>String</td>
      <td>Y</td>
      <td>Fixed to NOTICE.</td>
    </tr>
    <tr>
      <td>traceId</td>
      <td>Action trace ID</td>
      <td>String</td>
      <td>Y</td>
      <td>Action trace ID.</td>
    </tr>
    <tr>
      <td>createdAt</td>
      <td>Creation Time</td>
      <td>Long</td>
      <td>Y</td>
      <td>Timestamp of the operation. Unit: ms.</td>
    </tr>
    <tr>
      <td>data</td>
      <td></td>
      <td>JSON Object</td>
      <td>Y</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="5">
        <table>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Note</th>
          </tr>
          <tr>
            <td>extra</td>
            <td>String</td>
            <td>Extended field.</td>
          </tr>
          <tr>
            <td>raw</td>
            <td>Object</td>
            <td>Device uplink data that triggers the rule.</td>
          </tr>
          <tr>
            <td colspan="5">
              <table>
                <tr>
                  <th>Field</th>
                  <th>Type</th>
                  <th>Note</th>
                </tr>
                <tr>
                  <td>ticket</td>
                  <td>String</td>
                  <td>Message identification code.</td>
                </tr>
                <tr>
                  <td>productKey</td>
                  <td>String</td>
                  <td>ProductKey that triggers the rule.</td>
                </tr>
                <tr>
                  <td>deviceKey</td>
                  <td>String</td>
                  <td>DeviceKey that triggers the rule.</td>
                </tr>
                <tr>
                  <td>type</td>
                  <td>String</td>
                  <td>Message type. MATTR: TSL property. MEVENT: TSL event. ONLINE: Device online and offline. LOCATION: Device location. RESET: Device reset. UNREPORTED: Device not reporting data for a long time.</td>
                </tr>
                <tr>
                  <td>createdAt</td>
                  <td>Long</td>
                  <td>Message creation time. Unit: ms</td>
                </tr>
                <tr>
                  <td>attrs</td>
                  <td>Object</td>
                  <td>TSL property data that triggers the rule, required when the type is MATTR.</td>
                </tr>
                <tr>
                  <td>events</td>
                  <td>Array</td>
                  <td>TSL event data that triggers the rule, required when the type is MEVENT.</td>
                </tr>
                <tr>
                  <td>status</td>
                  <td>Object</td>
                  <td>TSL device status data that triggers the rule, required when the type is ONLINE.</td>
                </tr>
                <tr>
                  <td>location</td>
                  <td>Object</td>
                  <td>TSL device location data that triggers the rule, required when the type is LOCATION.</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
</table>

Example：

```json
{
    "traceId": "1228299096116822016",
    "type": "CEP_RULE",
    "subtype": "NOTICE",
    "createdAt": 1713249972992,
    "data": {
        "extra": "{\"key\",\"value\"}",
        "raw": {
            "ticket": "1228217775206039552",
            "productKey": "p113C1",
            "deviceKey": "8686202300000001",
            "type": "MATTR",
            "createdAt": 1713249972997,
            "attrs": {
                "kv": {
                    "Temperature": 50,
                    "struct": {
                        "date": 1690449531456
                    },
                    "array_int": [1],
                    "array_struct": [{
                        "date": "1690449531456"
                    }]
                }
            }, 
            "events": [{
                "code": "BatteryWarning",
                "kv": {
                    "Temperature": 50,
                    "struct": {
                        "date": 1690449531456
                    },
                    "array_int": [1],
                    "array_struct": [{
                        "date": "1690449531456"
                        }] 
                } 
            }],
                 "status": {
                       "value": 1							// Required. 0: Device offline. 1: Device online
                 },
                 "location": {
                       "GCJ02": "116.4038,39.9148",          // Required. Coordinates in GCJ02 (State Bureau of Surveying and Mapping), with signs (negative values indicate south latitude or west longitude). Longitude first, latitude second, separated by a comma.
                       "BD09": "116.4038,39.9148",           // Required. Coordinates in BD09 (Baidu), with signs (negative values indicate south latitude or west longitude). Longitude first, latitude second, separated by a comma.
                       "WGS84": "116.4038,39.9148"           // Required. Coordinates in WGS84 (GPS), with signs (negative values indicate south latitude or west longitude). Longitude first, latitude second, separated by a comma.
                 }
        } 
    } 
}
```


