# 查询联动配置


**接口地址**:`/v2/cep/enduserapi/automation/ability/published`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询联动配置</p>


**请求参数**:


| 参数名称      | 参数说明                            | 请求类型 | 是否必须 | 数据类型       | schema |
| ------------- | ----------------------------------- | -------- | -------- | -------------- | ------ |
| productKey    | 产品KEY                             | query    | true     | string         |        |
| type          | 查询类型：0：全部，1：条件，2：动作 | query    | true     | integer(int32) |        |
| Authorization |                                     | header   | false    | string         |        |


**响应状态**:


| 状态码 | 说明         | schema              |
| ------ | ------------ | ------------------- |
| 200    | OK           | ApiResult«联动配置» |
| 401    | Unauthorized |                     |
| 403    | Forbidden    |                     |
| 404    | Not Found    |                     |


**响应参数**:


| 参数名称               | 参数说明 | 类型           | schema         |
| ---------------------- | -------- | -------------- | -------------- |
| code                   |          | integer(int32) | integer(int32) |
| data                   |          | 联动配置       | 联动配置       |
| &emsp;&emsp;actions    | 执行动作 | array          | object         |
| &emsp;&emsp;conditions | 触发条件 | array          | object         |
| extMsg                 |          | string         |                |
| msg                    |          | string         |                |


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"actions": [],
		"conditions": []
	},
	"extMsg": "",
	"msg": ""
}
```
