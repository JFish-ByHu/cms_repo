# 删除场景


**接口地址**:`/v2/cep/enduserapi/sceneDelete`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>删除场景</p>


**请求参数**:


| 参数名称      | 参数说明                           | 请求类型 | 是否必须 | 数据类型 | schema |
| ------------- | ---------------------------------- | -------- | -------- | -------- | ------ |
| sceneId       | 场景ID                             | body     | true     | string   |        |
| Authorization |                                    | header   | false    | string   |        |
| fid           | 家庭ID，开启家居模式必填，否则不填 | body     | false    | string   |        |


**响应状态**:


| 状态码 | 说明         | schema          |
| ------ | ------------ | --------------- |
| 200    | OK           | ApiResult«Void» |
| 204    | No Content   |                 |
| 401    | Unauthorized |                 |
| 403    | Forbidden    |                 |


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
