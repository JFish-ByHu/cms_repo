# 清理队列


**接口地址**:`/v2/quecrule/{version}/openapi/queue/clear`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`

**接口描述**:<p>清理队列</p>


**请求参数**:


| 参数名称 | 参数说明           | 请求类型 | 是否必须 | 数据类型       | schema |
| -------- | ------------------ | -------- | -------- | -------------- | ------ |
| queueId  | 队列ID             | query    | true     | integer(int64) |        |
| version  | 当前版本,可用值:r1 | path     | true     | string         |        |


**响应状态**:


| 状态码 | 说明                          | schema               |
| ------ | ----------------------------- | -------------------- |
| 200    | OK                            | ActionResultOfobject |
| 201    | Created                       |                      |
| 401    | Unauthorized                  |                      |
| 403    | Forbidden                     |                      |
| 404    | Not Found                     |                      |
| 16002  | The queue name does not exist |                      |
| 50000  | service exception             |                      |
| 50005  | param check error             |                      |
| 91004  | token incorrect               |                      |
| 91005  | doesn't have permission       |                      |


**响应参数**:


| 参数名称 | 参数说明 | 类型           | schema         |
| -------- | -------- | -------------- | -------------- |
| code     | 返回码   | integer(int32) | integer(int32) |
| data     | 对象     | object         |                |
| msg      | 提示信息 | string         |                |
| pageNum  | 当前页数 | integer(int32) | integer(int32) |
| pageSize | 每页数量 | integer(int32) | integer(int32) |
| pages    | 总页数   | integer(int32) | integer(int32) |
| total    | 总数     | integer(int32) | integer(int32) |


**响应示例**:
```javascript
{
    "code":200, 
    "msg":""
}
```
