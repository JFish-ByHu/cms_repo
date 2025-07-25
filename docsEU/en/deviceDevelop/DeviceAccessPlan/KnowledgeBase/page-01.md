# AT Command Introduction

## **1. AT Command Character**

AT command characters are shown as follows.


| Character |           Name            |                                                    Function                                                    |
| :-------: | :-----------------------: | :------------------------------------------------------------------------------------------------------------: |
|  \<CR\>   | Carriage return character |                End a command line and is issued together with \<LF\>. Hexadecimal format: 0x0D.                |
|  \<LF\>   |    Line feed character    |                End a command line and is issued together with \<CR\>. Hexadecimal format: 0x0A.                |
|   \<…\>   |      Angle brackets       |    Parameter name; <span style="color:#999AAA">Angle brackets <> do not appear on the command line.</span>     |
|   \[…\]   |      Square brackets      | Optional parameter; <span style="color:#999AAA"> Square brackets [ ] do not appear on the command line.</span> |
|    __     |         Underline         |                                        Default setting of a parameter.                                         |


## **2. AT Command Type**

All command lines must start with __AT__ or __at__ . AT commands are divided into four types: __Test Command__, __Read Command__, __Write Command__, __Execution Command__ , as shown in the following table.

|   Command Type    |           Syntax            | Description                                                                                                                |
| :---------------: | :-------------------------: | :------------------------------------------------------------------------------------------------------------------------- |
|   Test Command    |       AT+ < CMD > =?        | Test the existence of corresponding Write Command and return information about the type, value, or range of its parameter. |
|   Read Command    |        AT+ < CMD >?         | Check the current parameter value of a corresponding Write Command.                                                        |
|   Write Command   | AT+ < CMD >=p1[,p2[,p3[…]]] | Set user-definable parameter value.                                                                                        |
| Execution Command |         AT+ < CMD >         | Return a specific information parameter or perform a specific action.                                                      |

## **3. AT Command Syntax**

All command lines must start with __AT__ or __at__. 
All command lines must end with __\<CR\>__ .
Information responses and result codes always start and end with a carriage return character and a line feed character:  __\<CR\>\<LF\>\<response\>\<CR\>\<LF\>__ . 
In tables presenting commands and responses throughout this document, only the commands and responses are presented, and __\<CR\> and \<LF\>__ are deliberately omitted.
