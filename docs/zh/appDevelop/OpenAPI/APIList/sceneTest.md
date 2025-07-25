# 测试场景


**接口地址**:`/v2/cep/enduserapi/sceneTest`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>测试场景</p>



**请求示例**:


```javascript
{
  "fid": "",
  "isCommon": true,
  "sceneInfo": {
    "icon": "",
    "id": 0,
    "metaDataList": [
      {
        "actionList": [
          {
            "actionId": 0,
            "code": "",
            "dataType": "",
            "id": 0,
            "name": "",
            "subName": "",
            "subType": "",
            "type": "",
            "unit": "",
            "value": {}
          }
        ],
        "deviceKey": "",
        "deviceName": "",
        "deviceType": 0,
        "logoImage": "",
        "productKey": ""
      }
    ],
    "name": "",
    "sceneId": "",
    "uid": ""
  }
}
```

**请求参数**:


| 参数名称                                                 | 参数说明                           | 请求类型 | 是否必须 | 数据类型    | schema      |
| -------------------------------------------------------- | ---------------------------------- | -------- | -------- | ----------- | ----------- |
| cmd                                                      | cmd                                | body     | true     | 场景参数Req | 场景参数Req |
| &emsp;&emsp;fid                                          | 家庭ID，开启家居模式必填，否则不填 |          | false    | string      |             |
| &emsp;&emsp;isCommon                                     | 是否加入到常用场景                 |          | false    | boolean     |             |
| &emsp;&emsp;sceneInfo                                    | 场景信息                           |          | true     | 场景信息    | 场景信息    |
| &emsp;&emsp;&emsp;&emsp;icon                             | 场景图标                           |          | false    | string      |             |
| &emsp;&emsp;&emsp;&emsp;id                               | 场景主键ID                         |          | false    | integer     |             |
| &emsp;&emsp;&emsp;&emsp;metaDataList                     | 联动数据                           |          | true     | array       | 联动数据    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;actionList           | 执行动作                           |          | true     | array       | 执行动作    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;actionId | 执行动作ID                         |          | false    | integer     |             |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code     | 物模型标识符                       |          | true     | string      |             |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataType | 物模型数据类型                     |          | true     | string      |             |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id       | 物模型功能ID                       |          | true     | integer     |             |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name     | 物模型功能名称                     |          | true     | string      |             |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subName  |                                    |          | false    | string      |             |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subType  | 读写类型                           |          | false    | string      |             |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type     | 物模型功能类型                     |          | true     | string      |             |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unit     | 物模型单位                         |          | false    | string      |             |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value    | 物模型值                           |          | true     | object      |             |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deviceKey            | 设备/群组ID                        |          | true     | string      |             |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deviceName           | 设备名称/群组名称                  |          | false    | string      |             |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deviceType           | 设备类型，1：普通设备，2：群组     |          | true     | integer     |             |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;logoImage            | 场景LOGO                           |          | false    | string      |             |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productKey           | 产品KEY                            |          | true     | string      |             |
| &emsp;&emsp;&emsp;&emsp;name                             | 场景名称                           |          | false    | string      |             |
| &emsp;&emsp;&emsp;&emsp;sceneId                          | 场景ID                             |          | false    | string      |             |
| &emsp;&emsp;&emsp;&emsp;uid                              | 终端用户ID                         |          | false    | string      |             |
| Authorization                                            |                                    | header   | false    | string      |             |


**响应状态**:


| 状态码 | 说明         | schema                       |
| ------ | ------------ | ---------------------------- |
| 200    | OK           | ApiResult«ExecutionResultCO» |
| 201    | Created      |                              |
| 401    | Unauthorized |                              |
| 403    | Forbidden    |                              |
| 404    | Not Found    |                              |


**响应参数**:


| 参数名称                             | 参数说明                          | 类型              | schema            |
| ------------------------------------ | --------------------------------- | ----------------- | ----------------- |
| code                                 |                                   | integer(int32)    | integer(int32)    |
| data                                 |                                   | ExecutionResultCO | ExecutionResultCO |
| &emsp;&emsp;callType                 | 调用方式                          | string            |                   |
| &emsp;&emsp;executeResult            | 执行结果。成功：true，失败：false | boolean           |                   |
| &emsp;&emsp;executeTime              | 执行时间                          | integer(int64)    |                   |
| &emsp;&emsp;executionId              | 执行记录ID                        | integer(int64)    |                   |
| &emsp;&emsp;failActionList           | 失败原因                          | array             | ExecuteFailedCO   |
| &emsp;&emsp;&emsp;&emsp;deviceKey    |                                   | string            |                   |
| &emsp;&emsp;&emsp;&emsp;deviceName   |                                   | string            |                   |
| &emsp;&emsp;&emsp;&emsp;deviceType   |                                   | integer           |                   |
| &emsp;&emsp;&emsp;&emsp;logoImage    |                                   | string            |                   |
| &emsp;&emsp;&emsp;&emsp;productKey   |                                   | string            |                   |
| &emsp;&emsp;&emsp;&emsp;reason       |                                   | string            |                   |
| &emsp;&emsp;failCount                | 失败数量                          | AtomicInteger     | AtomicInteger     |
| &emsp;&emsp;&emsp;&emsp;andDecrement |                                   | integer           |                   |
| &emsp;&emsp;&emsp;&emsp;andIncrement |                                   | integer           |                   |
| &emsp;&emsp;successCount             | 成功数量                          | AtomicInteger     | AtomicInteger     |
| &emsp;&emsp;&emsp;&emsp;andDecrement |                                   | integer           |                   |
| &emsp;&emsp;&emsp;&emsp;andIncrement |                                   | integer           |                   |
| extMsg                               |                                   | string            |                   |
| msg                                  |                                   | string            |                   |


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"callType": "",
		"executeResult": true,
		"executeTime": 0,
		"executionId": 0,
		"failActionList": [
			{
				"deviceKey": "",
				"deviceName": "",
				"deviceType": 0,
				"logoImage": "",
				"productKey": "",
				"reason": ""
			}
		],
		"failCount": {
			"andDecrement": 0,
			"andIncrement": 0
		},
		"successCount": {
			"andDecrement": 0,
			"andIncrement": 0
		}
	},
	"extMsg": "",
	"msg": ""
}
```
