# 查询家庭中房间列表


**接口地址**:`/v2/family/enduserapi/getFamilyRoomList`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>查询家庭中的房间列表</p>


**请求参数**:


| 参数名称 | 参数说明              | 请求类型 | 是否必须 | 数据类型       | schema |
| -------- | --------------------- | -------- | -------- | -------------- | ------ |
| fid      | 家庭ID                | query    | true     | string         |        |
| page     | 当前页，默认为第 1 页 | query    | false    | integer(int32) |        |
| pageSize | 页大小，默认为 10 条  | query    | false    | integer(int32) |        |


**响应状态**:


| 状态码 | 说明                     | schema                                         |
| ------ | ------------------------ | ---------------------------------------------- |
| 200    | 查询家庭中的房间列表成功 | 返回注册码响应数据«PageInfo«List«RoomListVO»»» |
| 5041   | 没有权限                 |                                                |
| 5618   | 请输入家庭ID             |                                                |


**响应参数**:


| 参数名称                         | 参数说明   | 类型                       | schema                     |
| -------------------------------- | ---------- | -------------------------- | -------------------------- |
| code                             | 响应状态码 | integer(int32)             | integer(int32)             |
| data                             | 响应数据   | PageInfo«List«RoomListVO»» | PageInfo«List«RoomListVO»» |
| &emsp;&emsp;endRow               |            | integer(int64)             |                            |
| &emsp;&emsp;hasNextPage          |            | boolean                    |                            |
| &emsp;&emsp;hasPreviousPage      |            | boolean                    |                            |
| &emsp;&emsp;isFirstPage          |            | boolean                    |                            |
| &emsp;&emsp;isLastPage           |            | boolean                    |                            |
| &emsp;&emsp;list                 |            | array                      | RoomListVO                 |
| &emsp;&emsp;&emsp;&emsp;addTime  | 添加时间   | integer                    |                            |
| &emsp;&emsp;&emsp;&emsp;frid     | 房间ID     | string                     |                            |
| &emsp;&emsp;&emsp;&emsp;roomName | 房间名称   | string                     |                            |
| &emsp;&emsp;&emsp;&emsp;roomSort | 房间顺序   | integer                    |                            |
| &emsp;&emsp;navigateFirstPage    |            | integer(int32)             |                            |
| &emsp;&emsp;navigateLastPage     |            | integer(int32)             |                            |
| &emsp;&emsp;navigatePages        |            | integer(int32)             |                            |
| &emsp;&emsp;navigatepageNums     |            | array                      | integer                    |
| &emsp;&emsp;nextPage             |            | integer(int32)             |                            |
| &emsp;&emsp;pageNum              |            | integer(int32)             |                            |
| &emsp;&emsp;pageSize             |            | integer(int32)             |                            |
| &emsp;&emsp;pages                |            | integer(int32)             |                            |
| &emsp;&emsp;prePage              |            | integer(int32)             |                            |
| &emsp;&emsp;size                 |            | integer(int32)             |                            |
| &emsp;&emsp;startRow             |            | integer(int64)             |                            |
| &emsp;&emsp;total                |            | integer(int64)             |                            |
| extMsg                           | 扩展消息   | string                     |                            |
| msg                              | 响应消息   | string                     |                            |


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
				"frid": "",
				"roomName": "",
				"roomSort": 0
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
