# 启停自动化


**接口地址**:`/v2/cep/enduserapi/automation/status`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>启停自动化</p>


**请求参数**:


| 参数名称      | 参数说明                           | 请求类型 | 是否必须 | 数据类型       | schema |
| ------------- | ---------------------------------- | -------- | -------- | -------------- | ------ |
| automationId  | 自动化ID                           | query    | true     | integer(int64) |        |
| status        | 启停状态，启用：true，停用：false  | query    | true     | boolean        |        |
| Authorization |                                    | header   | false    | string         |        |
| fid           | 家庭ID，开启家居模式必填，否则不填 | body     | false    | string         |        |


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
