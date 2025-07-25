# 查询场景详情


**接口地址**:`/v2/cep/enduserapi/selectSceneDetail`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询场景详情</p>


**请求参数**:


| 参数名称      | 参数说明                           | 请求类型 | 是否必须 | 数据类型 | schema |
| ------------- | ---------------------------------- | -------- | -------- | -------- | ------ |
| sceneId       | 场景ID                             | query    | true     | string   |        |
| Authorization |                                    | header   | false    | string   |        |
| fid           | 家庭ID，开启家居模式必填，否则不填 | query    | false    | string   |        |


**响应状态**:


| 状态码 | 说明         | schema              |
| ------ | ------------ | ------------------- |
| 200    | OK           | ApiResult«场景参数» |
| 401    | Unauthorized |                     |
| 403    | Forbidden    |                     |
| 404    | Not Found    |                     |


**响应参数**:


| 参数名称                                                 | 参数说明                       | 类型           | schema         |
| -------------------------------------------------------- | ------------------------------ | -------------- | -------------- |
| code                                                     |                                | integer(int32) | integer(int32) |
| data                                                     |                                | 场景参数Res    | 场景参数Res    |
| &emsp;&emsp;fid                                          | 家庭ID                         | string         |                |
| &emsp;&emsp;isCommon                                     | 是否常用                       | boolean        |                |
| &emsp;&emsp;sceneInfo                                    | 场景信息                       | 场景信息       | 场景信息       |
| &emsp;&emsp;&emsp;&emsp;icon                             | 场景图标                       | string         |                |
| &emsp;&emsp;&emsp;&emsp;id                               | 场景主键ID                     | integer        |                |
| &emsp;&emsp;&emsp;&emsp;metaDataList                     | 联动数据                       | array          | 联动数据       |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;actionList           | 执行动作                       | array          | 执行动作       |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;actionId | 执行动作ID                     | integer        |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code     | 物模型标识符                   | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataType | 物模型数据类型                 | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id       | 物模型功能ID                   | integer        |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name     | 物模型功能名称                 | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subName  |                                | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subType  | 读写类型                       | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type     | 物模型功能类型                 | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unit     | 物模型单位                     | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value    | 物模型值                       | object         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deviceKey            | 设备/群组ID                    | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deviceName           | 设备名称/群组名称              | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deviceType           | 设备类型，1：普通设备，2：群组 | integer        |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;logoImage            | 场景LOGO                       | string         |                |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productKey           | 产品KEY                        | string         |                |
| &emsp;&emsp;&emsp;&emsp;name                             | 场景名称                       | string         |                |
| &emsp;&emsp;&emsp;&emsp;sceneId                          | 场景ID                         | string         |                |
| &emsp;&emsp;&emsp;&emsp;uid                              | 终端用户ID                     | string         |                |
| extMsg                                                   |                                | string         |                |
| msg                                                      |                                | string         |                |


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
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
	},
	"extMsg": "",
	"msg": ""
}
```
