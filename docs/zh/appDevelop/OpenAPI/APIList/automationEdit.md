# 编辑自动化


**接口地址**:`/v2/cep/enduserapi/automation/edit`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>编辑自动化</p>



**请求示例**:


```javascript
{
  "actions": [
    {
      "delayTime": 0,
      "deviceKey": "",
      "icon": "",
      "id": 0,
      "name": "",
      "productKey": "",
      "property": {
        "code": "",
        "compare": "",
        "dataType": "",
        "id": 0,
        "name": "",
        "subName": "",
        "subType": "",
        "type": "",
        "unit": "",
        "value": {}
      },
      "sceneId": "",
      "sort": 0,
      "type": 0
    }
  ],
  "automationId": 0,
  "conditionType": 0,
  "conditions": [
    {
      "deviceKey": "",
      "icon": "",
      "name": "",
      "productKey": "",
      "property": {
        "code": "",
        "compare": "",
        "dataType": "",
        "id": 0,
        "name": "",
        "subName": "",
        "subType": "",
        "type": "",
        "unit": "",
        "value": {}
      },
      "sort": 0,
      "timer": {
        "dayOfWeek": "",
        "time": "",
        "timeZone": "",
        "type": 0
      },
      "type": 0
    }
  ],
  "fid": "",
  "name": "",
  "nameType": 0,
  "precondition": {
    "effectDate": "",
    "effectDateType": 0,
    "effectTimeType": 0,
    "endTime": "",
    "location": "",
    "regionName": "",
    "startTime": "",
    "timeZone": ""
  }
}
```

**请求参数**:


| 参数名称                                      | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型           | schema             |
| --------------------------------------------- | ------------------------------------------------------------ | -------- | -------- | ------------------ | ------------------ |
| cmd                                           | cmd                                                          | body     | true     | 自动化信息请求     | 自动化信息请求     |
| &emsp;&emsp;actions                           | 执行动作                                                     |          | true     | array              | 自动化执行动作     |
| &emsp;&emsp;&emsp;&emsp;delayTime             | 延迟时间，单位秒                                             |          | false    | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;deviceKey             | 设备DK/群组ID                                                |          | false    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;icon                  | 设备/群组/场景图标                                           |          | false    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;id                    |                                                              |          | false    | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;name                  | 设备/群组/场景名称                                           |          | false    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;productKey            | 产品PK/群组PK                                                |          | false    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;property              | 设备属性                                                     |          | false    | 物模型属性         | 物模型属性         |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code      | 物模型标识符                                                 |          | true     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;compare   | 比较符。>                                                    | >=       | <        | <=                 | ==                 |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataType  | 数据类型。支持：BOOL、ENUM、INT、FLOAT、DOUBLE,可用值:BOOL,DOUBLE,ENUM,FLOAT,INT |          | true     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id        | 物模型功能ID                                                 |          | true     | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name      | 物模型名称                                                   |          | true     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subName   |                                                              |          | false    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subType   |                                                              |          | false    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type      | 物模型类型                                                   |          | false    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unit      | 物模型单位                                                   |          | false    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value     | 物模型属性比较值                                             |          | false    | object             |                    |
| &emsp;&emsp;&emsp;&emsp;sceneId               | 场景ID                                                       |          | false    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;sort                  | 执行动作顺序，从1开始递增                                    |          | true     | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;type                  | 执行动作类型。1：延时，2：设备，3：群组，4：场景             |          | true     | integer            |                    |
| &emsp;&emsp;automationId                      | 自动化ID                                                     |          | false    | integer(int64)     |                    |
| &emsp;&emsp;conditionType                     | 触发类型。1: 满足任意，2: 满足所有                           |          | true     | integer(int32)     |                    |
| &emsp;&emsp;conditions                        | 触发条件                                                     |          | true     | array              | 自动化触发条件     |
| &emsp;&emsp;&emsp;&emsp;deviceKey             | 设备DK                                                       |          | false    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;icon                  | 设备/群组/场景图标                                           |          | false    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;name                  | 设备/群组/场景名称                                           |          | false    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;productKey            | 产品PK                                                       |          | false    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;property              | 设备属性                                                     |          | false    | 物模型属性         | 物模型属性         |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code      | 物模型标识符                                                 |          | true     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;compare   | 比较符。>                                                    | >=       | <        | <=                 | ==                 |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataType  | 数据类型。支持：BOOL、ENUM、INT、FLOAT、DOUBLE,可用值:BOOL,DOUBLE,ENUM,FLOAT,INT |          | true     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id        | 物模型功能ID                                                 |          | true     | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name      | 物模型名称                                                   |          | true     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subName   |                                                              |          | false    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subType   |                                                              |          | false    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type      | 物模型类型                                                   |          | false    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unit      | 物模型单位                                                   |          | false    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value     | 物模型属性比较值                                             |          | false    | object             |                    |
| &emsp;&emsp;&emsp;&emsp;sort                  | 条件顺序，从1开始递增                                        |          | true     | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;timer                 | 条件时间                                                     |          | false    | 自动化触发条件时间 | 自动化触发条件时间 |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dayOfWeek | 重复周期。定时类型为自定义时必填，1,2,3...7表示周一到周日    |          | false    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;time      | 定时执行时间点。符合HH:mm格式                                |          | true     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;timeZone  | 时区，格式：+-HH:mm                                          |          | true     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type      | 定时类型。0：仅一次，1：每天，2：自定义                      |          | true     | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;type                  | 触发条件类型。0：设备，1：定时                               |          | true     | integer            |                    |
| &emsp;&emsp;fid                               | 家庭ID，开启家居模式必填，否则不填                           |          | false    | string             |                    |
| &emsp;&emsp;name                              | 自动化名称                                                   |          | true     | string             |                    |
| &emsp;&emsp;nameType                          | 自动化名称生成方式，1：系统生成，2：用户填写                 |          | true     | integer(int32)     |                    |
| &emsp;&emsp;precondition                      | 生效时间                                                     |          | false    | 自动化生效时间     | 自动化生效时间     |
| &emsp;&emsp;&emsp;&emsp;effectDate            | 生效日期。生效日期类型为每天时不填。每周：1,2,3,...7表示周一到周日，周月：1-31号，指定日期：符合MM-dd/MM-dd格式，例：12-19/12-21 |          | false    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;effectDateType        | 生效日期类型。0：每天，1：每周，2：每月，3：指定日期         |          | true     | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;effectTimeType        | 生效时间类型。0：白天，1：夜晚，2：全天，3：指定时间段       |          | true     | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;endTime               | 结束时间。生效时间类型为全天和指定时间段时必填，符合HH:mm格式 |          | false    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;location              | 经纬度。经度在前纬度在后，生效时间类型为白天或夜晚时必填     |          | false    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;regionName            | 地区名称                                                     |          | false    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;startTime             | 开始时间。生效时间类型为全天和指定时间段时必填，符合HH:mm格式 |          | false    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;timeZone              | 时区，格式：+-HH:mm                                          |          | false    | string             |                    |
| Authorization                                 |                                                              | header   | false    | string             |                    |


**响应状态**:


| 状态码 | 说明         | schema          |
| ------ | ------------ | --------------- |
| 200    | OK           | ApiResult«Void» |
| 201    | Created      |                 |
| 401    | Unauthorized |                 |
| 403    | Forbidden    |                 |
| 404    | Not Found    |                 |


**响应参数**:


| 参数名称 | 参数说明 | 类型           | schema         |
| -------- | -------- | -------------- | -------------- |
| code     |          | integer(int32) | integer(int32) |
| extMsg   |          | string         |                |
| msg      |          | string         |                |


**响应示例**:
```javascript
{
	"code": 0,
	"extMsg": "",
	"msg": ""
}
```
