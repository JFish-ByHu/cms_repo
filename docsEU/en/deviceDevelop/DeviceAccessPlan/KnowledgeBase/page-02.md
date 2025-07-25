# The Differences Between TTLV Data and JSON Data



<span style="color:#999AAA">Note: This chapter describes the differences between TTLV data and JSON data when the device-side selects the data format. </span>

# **TTLV**

TTLV, (i.e. Tag, Type, Length, Value), is a kind of hexadecimal data processed according to the protocol. TTLV format compresses the data into a smaller volume, which has a high utilization of space and does not allow the generation of redundant fields.

## TTLV Features
* Compact data: With compact data and concise format, the data volume is small and the transmission between modules and MCUs is more efficient.
* High security: Data cannot be read  without the document stipulated in the protocol.
* Not intuitive data: Data is not intuitive. TTLV format data can only be read after the document is parsed according to the protocol.

## TTLV Format
| Field  | Length                                      | Description                                                                                                                                        |
| ------ | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| ID     | 13 Bit                                      | Range 1–8191. Unique within different commands (cmd) (such as TSL model, device status, module information, etc.)                                  |
| Type   | 3 Bit                                       | Currently defined types (binary):<br>Boolean false: 000<br>Boolean true: 001<br>Enumerations and values: 010<br>Binary data: 011<br>Structure: 100 |
| Length | Different types have different length bits. | Different types have different length bits. See the table below for details.                                                                       |
| Value  |                                             | See the table below for details.                                                                                                                   |



## Detailed Parsing of Data Length and Data Value
| Type                    | Length                                                                                                                                                     | Value                                                                                      |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Boolean false           | Null                                                                                                                                                       | Null                                                                                       |
| Boolean true            | Null                                                                                                                                                       | Null                                                                                       |
| Enumerations and Values | 1 Byte (identifier bit, 0 means positive, 1 means negative)<br>3 Bit (Attenuation 10 to the N-th power)<br>4 Bit (Number of data Bit, Bit of data field-1) | Content                                                                                    |
| Binary data             | 2 Byte  (Number of data Bit)                                                                                                                               | Content                                                                                    |
| Structure               | 2 Byte  (Number of members)                                                                                                                                | Content (If it is an array type, there is no feature ID and 0 is used for identification.) |

Example:
| Feature ID | Type        | Value                                                                                                                                                                                                                                                                                                                                                            | Binary data                                                                                                                                                                                              | Hexadecimal data                                                                                    |
| ---------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 1      | BOOL       | false   | 0000 0000 0000 1000   | 0x00 0x08         |
| 2      | BOOL       | true  | 0000 0000 0001 0001   | 0x00 0x11     |
| 3      | Value       | 4  | 0000 0000 0001 1010 0000 0000 0000 0100        | 0x00 0x1A 0x00 0x04        |
| 4      | Value       | 5     | 0000 0000 0010 0010 0000 0000 0000 0101    | 0x00 0x22 0x00 0x05      |
| 5      | Value       | 258   | 0000 0000 0010 1010 0000 0001 0000 0001 0000 0010  |  0x00 0x2A  0x01 0x01 0x02   |
| 6      | Value       | 0.18   |0000 0000 0011 0010 0001 0000 0001 0010 | 0x00  0x32  0x10 0x12   |
| 7      | Value       | -0.32 |0000 0000 0011 1010 1001 0000 0010 0000  | 0x00 0x3A 0x90 0x20    |
| 8      | Binary data	  | 0xAB  |0000 0000 0100 0011 0000 0000 0000 0010 0100 0001 0100 0010          |  0x00 0x43 0x00 0x02 0x41   0x42   |
| 9      | Structure     | Parameter ,Type： Bool ：false <br> ID：2 ,Type： Value ：10 |0000 0000 0100 1100 0000 0000 0000 0001 0000 0000 0000 1000 | 0x00 0x4C 0x00 0x01 0x00 0x08 |


**Image parsing**：

<a data-fancybox title="img" href="/en/deviceDevelop/KnowledgeBase/pict-1.png">![img](/en/deviceDevelop/KnowledgeBase/pict-1.png)</a>

<a data-fancybox title="img" href="/en/deviceDevelop/KnowledgeBase/pict-2.png">![img](/en/deviceDevelop/KnowledgeBase/pict-2.png)</a>

# **JSON**
Based on JavaScript (Standard ECMA-262 3rd Edition - December 1999), JSON is a subset and an open and lightweight data exchange format that uses text formats independent of programming languages to store and represent data. JSON object is an unordered collection of "name/value" key value pairs: start with "{" and end with "}". JSON components are as follows:

```c
{
    "key":vlaue
}
```

## **JSON Features**
* Self-description: JSON data is intuitive and easy for developers to read and write.
* Simple format: JSON data is relatively simple and can be easily packaged and parsed in MCU programming.


Example:

| Feature ID | Type   | Value                                    | JSON Data                                      |
| ---------- | ------ | ---------------------------------------- | ---------------------------------------------- |
| 1          | BOOL   | false                                    | <span v-pre>{"1":false}</span>                 |
| 2          | BOOL   | true                                     | <span v-pre>{"2":true} </span>                 |
| 3          | INT    | 100                                      | <span v-pre>{"3":100}                  </span> |
| 4          | DOUBLE | 12.3                                     | <span v-pre>{"4":12.3}                 </span> |
| 5          | FLOAT  | 25.6                                     | <span v-pre>{"5":25.6}                 </span> |
| 6          | ENUM   | 1                                        | <span v-pre>{"6":1}                    </span> |
| 7          | TEXT   | ABC123                                   | <span v-pre>{"7":"ABC123"}             </span> |
| 8          | DATE   | 1659664758817                            | <span v-pre>{"8":1659664758817}        </span> |
| 9          | STRUCT | <span v-pre> {"10":true,"11":100}</span> | <span v-pre>{"9":{"10":true,"11":100}} </span> |
| 12         | ARRAY  | [10,20,30]                               | <span v-pre>{"12":[10,20,30]}          </span> |






# How to Select a Data Format? 
* Without the need to migrate specified library files to generate and analyze data, JSON data is easy to be combine and read, but the number of data bytes it sends is more than that of TTLV. So it is suggested to use JSON format when sending less TSL model data.
* With compact data, TTLV format is more concise than JSON, but it needs to migrate TTLV library to MCU. So it is suggested to use TTLV format when MCU resources are sufficient and you need to send a large amount of TSL model data.

