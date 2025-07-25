# 查询常用场景


**接口地址**:`/v2/cep/enduserapi/selectCommonSceneList`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询常用场景</p>


**请求参数**:


| 参数名称      | 参数说明                           | 请求类型 | 是否必须 | 数据类型       | schema |
| ------------- | ---------------------------------- | -------- | -------- | -------------- | ------ |
| Authorization |                                    | header   | false    | string         |        |
| fid           | 家庭ID，开启家居模式必填，否则不填 | query    | false    | string         |        |
| page          | 当面页码                           | query    | false    | integer(int32) |        |
| pageSize      | 每页条数                           | query    | false    | integer(int32) |        |


**响应状态**:


| 状态码 | 说明         | schema                        |
| ------ | ------------ | ----------------------------- |
| 200    | OK           | ApiResult«PageInfo«场景参数»» |
| 401    | Unauthorized |                               |
| 403    | Forbidden    |                               |
| 404    | Not Found    |                               |


**响应参数**:


| 参数名称                                                     | 参数说明                       | 类型               | schema             |
| ------------------------------------------------------------ | ------------------------------ | ------------------ | ------------------ |
| code                                                         |                                | integer(int32)     | integer(int32)     |
| data                                                         |                                | PageInfo«场景参数» | PageInfo«场景参数» |
| &emsp;&emsp;endRow                                           |                                | integer(int64)     |                    |
| &emsp;&emsp;hasNextPage                                      |                                | boolean            |                    |
| &emsp;&emsp;hasPreviousPage                                  |                                | boolean            |                    |
| &emsp;&emsp;isFirstPage                                      |                                | boolean            |                    |
| &emsp;&emsp;isLastPage                                       |                                | boolean            |                    |
| &emsp;&emsp;list                                             |                                | array              | 场景参数Res        |
| &emsp;&emsp;&emsp;&emsp;fid                                  | 家庭ID                         | string             |                    |
| &emsp;&emsp;&emsp;&emsp;isCommon                             | 是否常用                       | boolean            |                    |
| &emsp;&emsp;&emsp;&emsp;sceneInfo                            | 场景信息                       | 场景信息           | 场景信息           |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;icon                     | 场景图标                       | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id                       | 场景主键ID                     | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;metaDataList             | 联动数据                       | array              | 联动数据           |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;actionList   | 执行动作                       | array              | 执行动作           |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;actionId | 执行动作ID                     | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;code | 物模型标识符                   | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;dataType | 物模型数据类型                 | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id | 物模型功能ID                   | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name | 物模型功能名称                 | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subName |                                | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;subType | 读写类型                       | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;type | 物模型功能类型                 | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;unit | 物模型单位                     | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;value | 物模型值                       | object             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deviceKey    | 设备/群组ID                    | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deviceName   | 设备名称/群组名称              | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;deviceType   | 设备类型，1：普通设备，2：群组 | integer            |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;logoImage    | 场景LOGO                       | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;productKey   | 产品KEY                        | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name                     | 场景名称                       | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sceneId                  | 场景ID                         | string             |                    |
| &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;uid                      | 终端用户ID                     | string             |                    |
| &emsp;&emsp;navigateFirstPage                                |                                | integer(int32)     |                    |
| &emsp;&emsp;navigateLastPage                                 |                                | integer(int32)     |                    |
| &emsp;&emsp;navigatePages                                    |                                | integer(int32)     |                    |
| &emsp;&emsp;navigatepageNums                                 |                                | array              | integer            |
| &emsp;&emsp;nextPage                                         |                                | integer(int32)     |                    |
| &emsp;&emsp;pageNum                                          |                                | integer(int32)     |                    |
| &emsp;&emsp;pageSize                                         |                                | integer(int32)     |                    |
| &emsp;&emsp;pages                                            |                                | integer(int32)     |                    |
| &emsp;&emsp;prePage                                          |                                | integer(int32)     |                    |
| &emsp;&emsp;size                                             |                                | integer(int32)     |                    |
| &emsp;&emsp;startRow                                         |                                | integer(int64)     |                    |
| &emsp;&emsp;total                                            |                                | integer(int64)     |                    |
| extMsg                                                       |                                | string             |                    |
| msg                                                          |                                | string             |                    |


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"endRow": 0,
		"hasNextPage": true,
		"hasPreviousPage": true,
		"isFirstPage": true,
		"isLastPage": true,
		"list": [
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
		],
		"navigateFirstPage": 0,
		"navigateLastPage": 0,
		"navigatePages": 0,
		"navigatepageNums": [],
		"nextPage": 0,
		"pageNum": 0,
		"pageSize": 0,
		"pages": 0,
		"prePage": 0,
		"size": 0,
		"startRow": 0,
		"total": 0
	},
	"extMsg": "",
	"msg": ""
}
```
