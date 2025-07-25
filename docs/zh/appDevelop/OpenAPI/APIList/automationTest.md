# 测试自动化


**接口地址**:`/v2/cep/enduserapi/automation/test`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>测试自动化</p>



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
  "fid": "",
  "timeout": 0
}
```


**请求参数**:


| 参数名称                                     | 参数说明                                                     | 请求类型 | 是否必须 | 数据类型       | schema         |
| -------------------------------------------- | ------------------------------------------------------------ | -------- | -------- | -------------- | -------------- |
| cmd                                          | cmd                                                          | body     | true     | 测试自动化     | 测试自动化     |
| &emsp;&emsp;actions                          | 触发动作                                                     |          | true     | array          | 自动化执行动作 |
| &emsp;&emsp;&emsp;&emsp;delayTime            | 延迟时间，单位秒                                             |          | false    | integer        |                |
| &emsp;&emsp;&emsp;&emsp;deviceKey            | 设备DK/群组ID                                                |          | false    | string         |                |
| &emsp;&emsp;&emsp;&emsp;icon                 | 设备/群组/场景图标                                           |          | false    | string         |                |
| &emsp;&emsp;&emsp;&emsp;id                   |                                                              |          | false    | integer        |                |
| &emsp;&emsp;&emsp;&emsp;name                 | 设备/群组/场景名称                                           |          | false    | string         |                |
| &emsp;&emsp;&emsp;&emsp;productKey           | 产品PK/群组PK                                                |          | false    | string         |                |
| &emsp;&emsp;&emsp;&emsp;property             | 设备属性                                                     |          | false    | 物模型属性     | 物模型属性     |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code     | 物模型标识符                                                 |          | true     | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;compare  | 比较符。>                                                    | >=       | <        | <=             | ==             |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataType | 数据类型。支持：BOOL、ENUM、INT、FLOAT、DOUBLE,可用值:BOOL,DOUBLE,ENUM,FLOAT,INT |          | true     | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id       | 物模型功能ID                                                 |          | true     | integer        |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name     | 物模型名称                                                   |          | true     | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subName  |                                                              |          | false    | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subType  |                                                              |          | false    | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type     | 物模型类型                                                   |          | false    | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unit     | 物模型单位                                                   |          | false    | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value    | 物模型属性比较值                                             |          | false    | object         |                |
| &emsp;&emsp;&emsp;&emsp;sceneId              | 场景ID                                                       |          | false    | string         |                |
| &emsp;&emsp;&emsp;&emsp;sort                 | 执行动作顺序，从1开始递增                                    |          | true     | integer        |                |
| &emsp;&emsp;&emsp;&emsp;type                 | 执行动作类型。1：延时，2：设备，3：群组，4：场景             |          | true     | integer        |                |
| &emsp;&emsp;fid                              |                                                              |          | false    | string         |                |
| &emsp;&emsp;timeout                          | 测试自动化超时时间(秒),不传入默认 2*60                       |          | false    | integer(int32) |                |
| Authorization                                |                                                              | header   | false    | string         |                |


**响应状态**:


| 状态码 | 说明         | schema          |
| ------ | ------------ | --------------- |
| 200    | OK           | ApiResult«long» |
| 201    | Created      |                 |
| 401    | Unauthorized |                 |
| 403    | Forbidden    |                 |
| 404    | Not Found    |                 |


**响应参数**:


| 参数名称 | 参数说明 | 类型           | schema         |
| -------- | -------- | -------------- | -------------- |
| code     |          | integer(int32) | integer(int32) |
| data     |          | integer(int64) | integer(int64) |
| extMsg   |          | string         |                |
| msg      |          | string         |                |


**响应示例**:
```javascript
{
	"code": 0,
	"data": 0,
	"extMsg": "",
	"msg": ""
}
```
