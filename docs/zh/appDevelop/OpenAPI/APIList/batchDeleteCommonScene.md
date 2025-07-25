# 批量移除常用场景


**接口地址**:`/v2/cep/enduserapi/batchDeleteCommonScene`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>批量移除常用场景</p>



**请求示例**:


```javascript
{
  "fid": "",
  "sceneIdList": []
}
```

**请求参数**:


| 参数名称                | 参数说明                           | 请求类型 | 是否必须 | 数据类型 | schema   |
| ----------------------- | ---------------------------------- | -------- | -------- | -------- | -------- |
| cmd                     | cmd                                | body     | true     | 常用场景 | 常用场景 |
| &emsp;&emsp;fid         | 家庭ID，开启家居模式必填，否则不填 |          | false    | string   |          |
| &emsp;&emsp;sceneIdList | 场景ID列表                         |          | true     | array    | string   |
| Authorization           |                                    | header   | false    | string   |          |


**响应状态**:


| 状态码 | 说明         | schema                         |
| ------ | ------------ | ------------------------------ |
| 200    | OK           | ApiResult«SceneCommonDeleteCO» |
| 201    | Created      |                                |
| 401    | Unauthorized |                                |
| 403    | Forbidden    |                                |
| 404    | Not Found    |                                |


**响应参数**:


| 参数名称                | 参数说明 | 类型                | schema              |
| ----------------------- | -------- | ------------------- | ------------------- |
| code                    |          | integer(int32)      | integer(int32)      |
| data                    |          | SceneCommonDeleteCO | SceneCommonDeleteCO |
| &emsp;&emsp;failureList | 失败列表 | array               | object              |
| &emsp;&emsp;successList | 成功列表 | array               | object              |
| extMsg                  |          | string              |                     |
| msg                     |          | string              |                     |


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"failureList": [],
		"successList": []
	},
	"extMsg": "",
	"msg": ""
}
```
