# 物模型概述

## **什么是物模型**

物模型是物理空间中的实体（如灯、插座、传感器、空调等）在 IoT 平台的数字化表示。也可以理解为是设备功能定义集合。物模型通过把设备能力抽象为属性与事件解决了复杂的设备建模过程。物模型仅在当前产品下生效。

开发者中心提供物模型导出导入功能，可在本地进行快速编辑。

## **物模型功能类型**

通过属性、服务和事件三个维度，分别描述了该实体是什么、能做什么、可以对外提供哪些信息。

| 名词 | 概述                                                                                                                           |
| :--- | :----------------------------------------------------------------------------------------------------------------------------- |
| 属性 | 设备可读取和设置的能力。一般用于描述设备运行时的状态，如温度、湿度、电量、电压、坐标等。应用系统可发起对属性的读取或设置请求。 |
| 事件 | 事件分为信息、告警、故障三种类型，设备可按业务场景主动上报到开发者中心。应用系统可按功能需要订阅不同类型的事件。               |
| 服务 | 服务指设备可被外部调用的能力或方法，可设置输入参数和输出参数。通常用于设备端有执行结果返回的场景。                             |

## **物模型支持的数据类型**

您在开发者中心定义物模型功能时，可使用以下数据类型。

| 数据类型 | 描述                                                                                                                          | 示例                                                  |
| :------- | :---------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------- |
| BOOL     | 布尔类型，采用 0（false）或 1（true）来定义布尔值。                                                                           | true 代表开，false 代表关。                           |
| INT      | 32 位整型。                                                                                                                   | 10                                                    |
| FLOAT    | 单精度浮点型，最多支持 7 位小数。                                                                                             | 1.1                                                   |
| DOUBLE   | 双精度浮点型，最多支持 15 位小数。                                                                                            | 1.23                                                  |
| ENUM     | 枚举类型。定义枚举项的参数值和参数描述，参数值必须为整数。                                                                    | 整数 0 表示冷风，整数 1 表示热风，整数 2 表示自然风。 |
| TEXT     | 文本型。使用字符串格式传输，数据长度上限为 10240 字节。                                                                       | "Hello,world"                                         |
| RAW      | 透传型。把需要传输的内容进行 16 进制编码后发送，数据长度上限为 4096 字节。                                                    | A1 2C                                                 |
| DATE     | 时间戳。格式为 String 类型的 UTC 时间戳，单位：毫秒。                                                                         | "1635839462000"                                       |
| STRUCT   | 结构体类型。常用于复杂数据类型的封装。结构体内参数类型支持 BOOL,INT,FLOAT,DOUBLE,ENUM,TEXT,RAW,DATE。不支持 STRUCT 重复嵌套。 | <span v-pre> { "name":"Tom", "age":20 } </span>       |
| ARRAY    | 数组类型。需声明数组内的元素类型、数组元素个数。元素类型支持 INT,FLOAT,DOUBLE,TEXT,RAW,STRUCT。元素个数限制为 1~100 个。      | [1, 2, 3, 4, 5, 6]                                    |

## **TSL 文件说明**

以下为 json 格式的物模型 TSL 文件样例，导出编辑时请按格式要求进行编写。

```json
{
  "profile": {
    "tslVersion": "1.2.0",
    "productKey": "p11v14",
    "version": "20250324120550539"
  },
  //服务
  "services": [
    {
      //服务输出参数
      "outputData": [
        {
          "$ref": "#/properties/id/4"
        }
      ],
      //服务输入参数
      "inputData": [
        {
          "$ref": "#/properties/id/2"
        },
        {
          "$ref": "#/properties/id/3"
        }
      ],
      //标识符
      "code": "speedMode",
      //功能名称
      "name": "极速模式",
      //服务调用方法
      "subType": "ASYNC",
      //功能id
      "id": 7,
      //排序号
      "sort": 7,
      //功能定义的类型
      "type": "SERVICE",
      //描述
      "desc": ""
    }
  ],
  //属性
  "properties": [
    {
      "specs": [
        {
          "dataType": "BOOL",
          //布尔值 TRUE名称
          "name": "开启",
          "value": "true"
        },
        {
          "dataType": "BOOL",
          //布尔值 FALSE名称
          "name": "关闭",
          "value": "false"
        }
      ],
      //标识符
      "code": "switch",
      //数据类型
      "dataType": "BOOL",
      //功能名称
      "name": "开关",
      //读写类型
      "subType": "RW",
      //功能id
      "id": 1,
      //排序号
      "sort": 1,
      //功能定义的类型
      "type": "PROPERTY",
      //描述
      "desc": ""
    },
    {
      "specs": {
        //单位
        "unit": "",
        //最小值
        "min": "18",
        //最大值
        "max": "32",
        //步长
        "step": "1"
      },
      //标识符
      "code": "setTemperature",
      //数据类型
      "dataType": "INT",
      //功能名称
      "name": "目标温度",
      //读写类型
      "subType": "RW",
      //功能id
      "id": 2,
      //排序号
      "sort": 2,
      //功能定义的类型
      "type": "PROPERTY",
      //描述
      "desc": ""
    },
    {
      "specs": [
        {
          "dataType": "ENUM",
          //枚举值 第0项名称
          "name": "制冷",
          "value": "0"
        },
        {
          "dataType": "ENUM",
          //枚举值 第1项名称
          "name": "制热",
          "value": "1"
        },
        {
          "dataType": "ENUM",
          //枚举值 第2项名称
          "name": "送风",
          "value": "2"
        },
        {
          "dataType": "ENUM",
          //枚举值 第3项名称
          "name": "除湿",
          "value": "3"
        }
      ],
      "code": "mode",
      "dataType": "ENUM",
      "name": "运行模式",
      "subType": "RW",
      "id": 3,
      "sort": 3,
      "type": "PROPERTY",
      "desc": ""
    },
    {
      "specs": [
        //结构体第一个参数
        {
          "specs": {
            "unit": "",
            "min": "-50",
            "max": "100",
            "step": "0.1"
          },
          "code": "temperature",
          "dataType": "FLOAT",
          "name": "温度",
          "id": 1
        },
        //结构体第二个参数
        {
          "specs": {
            "unit": "",
            "min": "0",
            "max": "100",
            "step": "1"
          },
          "code": "humidity",
          "dataType": "INT",
          "name": "湿度",
          "id": 2
        }
      ],
      "code": "sensor",
      "dataType": "STRUCT",
      "name": "传感器",
      "subType": "R",
      "id": 4,
      "sort": 4,
      "type": "PROPERTY",
      "desc": ""
    },
    {
      "specs": {
        //数组下的参数结构
        "specs": [
          {
            "specs": {
              "length": "13"
            },
            "code": "startTime",
            "dataType": "DATE",
            "name": "开启时间",
            "id": 1
          },
          {
            "specs": {
              "unit": "",
              "min": "18",
              "max": "32",
              "step": "1"
            },
            "code": "setTemperature",
            "dataType": "INT",
            "name": "目标温度",
            "id": 2
          },
          {
            "specs": {
              "length": "13"
            },
            "code": "endTime",
            "dataType": "DATE",
            "name": "关闭时间",
            "id": 3
          }
        ],
        //数组最大数量
        "size": "3",
        "dataType": "STRUCT"
      },
      "code": "Timer",
      "dataType": "ARRAY",
      "name": "定时任务",
      "subType": "RW",
      "id": 5,
      "sort": 5,
      "type": "PROPERTY",
      "desc": ""
    }
  ],
  //事件
  "events": [
    {
      //事件输出参数
      "outputData": [
        {
          //引用的属性ID
          "$ref": "#/properties/id/4"
        }
      ],
      //标识符
      "code": "temperatureAlarm",
      //功能名称
      "name": "过温告警",
      //事件类型
      "subType": "WARN",
      //功能id
      "id": 6,
      //排序号
      "sort": 6,
      //功能定义的类型
      "type": "EVENT",
      //描述
      "desc": ""
    }
  ]
}
```

## **TSL 定义说明**

| 参数       | 描述                                                                                                                                                                                                                                                                                                                                                                                                           |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id         | 功能定义 Id，每个产品下属性、事件、服务唯一。                                                                                                                                                                                                                                                                                                                                                                  |
| code       | 功能定义标识符，与 id 一一对应，用于应用侧与设备交互关键字段。每个产品下属性、事件、服务唯一。                                                                                                                                                                                                                                                                                                                 |
| name       | 功能定义名称，与标识符一一对应，用于描述该功能点的用途。                                                                                                                                                                                                                                                                                                                                                       |
| type       | 功能定义的类型，仅可输入以下选项。<br /> ● 属性：PROPERTY<br /> ● 事件：EVENT<br /> ● 服务：SERVICE                                                                                                                                                                                                                                                                                                            |
| subType    | 功能定义类型的子类型，仅可输入以下选项。<br /><br /> 当 type=PROPERTY 时，subType 为读写类型。<br /> ● R:只读<br /> ● W:可写<br /> ● RW:可读可写<br /><br />当 type=EVENT 时，subType 为事件类型。<br /> ● INFO:信息<br /> ● WARN:告警<br /> ● ERROR:故障<br /><br /> 当 type=SERVICE 时，subType 为调用方式。<br /> ● ASYNC:异步调用<br />                                                                    |
| sort       | 排序号，用于管理页面上各物模型功能的展示排序。                                                                                                                                                                                                                                                                                                                                                                 |
| desc       | 功能定义描述，便于更清晰的理解此功能定义的意义及作用。                                                                                                                                                                                                                                                                                                                                                         |
| dataType   | 数据类型。<br />BOOL,INT,FLOAT,DOUBLE,ENUM,TEXT,DATE,RAW,STRUCT,ARRAY.                                                                                                                                                                                                                                                                                                                                         |
| specs      | 当 type=PROPERTY 时，specs 用于表示对当前 type 的结构约束。<br>● dataType=BOOL：specs 包含以下字段：name:true 或 false 对应的名称、value:固定为 true 或 false。<br>● dataType=INT/FLOAT/DOUBLE：specs 包含以下字段：step:步长、min:最小值、max:最大值、unit:单位。<br>● dataType=ENUM 时：specs 包含以下字段：name:枚举值对应的名称、value:枚举值<br>● dataType=TEXT/DATE/RAW：specs 包含以下字段：length:长度 |
| inputData  | 输入参数。当 type=SERVICE 时才有该字段，inputData 可以包含引用的属性或者新建的参数。                                                                                                                                                                                                                                                                                                                           |
| outputData | 输出参数。当 type=SERVICE 或 EVENT 时，outputData 可以包含引用的属性或者新建的参数。                                                                                                                                                                                                                                                                                                                           |
