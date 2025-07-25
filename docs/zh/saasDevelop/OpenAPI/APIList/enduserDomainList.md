# 查询用户域列表


**接口地址**:`/v2/enduser/enterpriseapi/entUserDomainList`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询企业用户域列表</p>


**请求参数**:


| 参数名称 | 参数说明              | 请求类型 | 是否必须 | 数据类型       | schema |
| -------- | --------------------- | -------- | -------- | -------------- | ------ |
| page     | 当前页，默认为第 1 页 | query    | false    | integer(int32) |        |
| pageSize | 页大小，默认为 10 条  | query    | false    | integer(int32) |        |


**响应状态**:


| 状态码 | 说明                   | schema                               |
| ------ | ---------------------- | ------------------------------------ |
| 200    | 查询企业用户域列表成功 | 返回注册码响应数据«PageInfo«用户域»» |
| 5032   | token 验证失败         |                                      |
| 5106   | 请输入token            |                                      |
| 5112   | 请输入企业ID           |                                      |


**响应参数**:


| 参数名称                                 | 参数说明   | 类型             | schema           |
| ---------------------------------------- | ---------- | ---------------- | ---------------- |
| code                                     | 响应状态码 | integer(int32)   | integer(int32)   |
| data                                     | 响应数据   | PageInfo«用户域» | PageInfo«用户域» |
| &emsp;&emsp;endRow                       |            | integer(int64)   |                  |
| &emsp;&emsp;hasNextPage                  |            | boolean          |                  |
| &emsp;&emsp;hasPreviousPage              |            | boolean          |                  |
| &emsp;&emsp;isFirstPage                  |            | boolean          |                  |
| &emsp;&emsp;isLastPage                   |            | boolean          |                  |
| &emsp;&emsp;list                         |            | array            | 用户域           |
| &emsp;&emsp;&emsp;&emsp;addTime          | 添加时间   | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;addTimeTs        |            | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;enable           |            | boolean          |                  |
| &emsp;&emsp;&emsp;&emsp;entId            | 企业ID     | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;isEnable         | 是否启用   | boolean          |                  |
| &emsp;&emsp;&emsp;&emsp;remark           | 备注       | string           |                  |
| &emsp;&emsp;&emsp;&emsp;updateTime       | 修改时间   | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;updateTimeTs     |            | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;userDomain       | 用户域     | string           |                  |
| &emsp;&emsp;&emsp;&emsp;userDomainId     |            | integer          |                  |
| &emsp;&emsp;&emsp;&emsp;userDomainSecret | 用户域秘钥 | string           |                  |
| &emsp;&emsp;&emsp;&emsp;userDomainType   | 用户域类型 | string           |                  |
| &emsp;&emsp;navigateFirstPage            |            | integer(int32)   |                  |
| &emsp;&emsp;navigateLastPage             |            | integer(int32)   |                  |
| &emsp;&emsp;navigatePages                |            | integer(int32)   |                  |
| &emsp;&emsp;navigatepageNums             |            | array            | integer          |
| &emsp;&emsp;nextPage                     |            | integer(int32)   |                  |
| &emsp;&emsp;pageNum                      |            | integer(int32)   |                  |
| &emsp;&emsp;pageSize                     |            | integer(int32)   |                  |
| &emsp;&emsp;pages                        |            | integer(int32)   |                  |
| &emsp;&emsp;prePage                      |            | integer(int32)   |                  |
| &emsp;&emsp;size                         |            | integer(int32)   |                  |
| &emsp;&emsp;startRow                     |            | integer(int64)   |                  |
| &emsp;&emsp;total                        |            | integer(int64)   |                  |
| extMsg                                   | 扩展消息   | string           |                  |
| msg                                      | 响应消息   | string           |                  |


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
				"addTime": 0,
				"addTimeTs": 0,
				"enable": true,
				"entId": 0,
				"isEnable": true,
				"remark": "",
				"updateTime": 0,
				"updateTimeTs": 0,
				"userDomain": "",
				"userDomainId": 0,
				"userDomainSecret": "",
				"userDomainType": ""
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
