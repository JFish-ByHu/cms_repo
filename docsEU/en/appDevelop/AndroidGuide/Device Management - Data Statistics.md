# Device Data Statistics

## Feature Description

The device data statistics feature is mainly used to obtains device-related statistical information.

```kotlin
QuecDeviceStatisticsService
```

## Data Statistics

### Query Device's Historical Trajectory

**API**

Query a device's historical trajectory.

```kotlin
fun getLocationHistory(
    productKey: String,
    deviceKey: String,
    startTimestamp: Long,
    endTimestamp: Long,
    gatewayDk: String?,
    gatewayPk: String?,
    locateTypes: String?,
    callback: QuecCallback<List<QuecLocationHistoryModel>>
)
```

**Parameter**

| Parameter      | Required | Description                                                  |
| -------------- | -------- | ------------------------------------------------------------ |
| productKey     | Y        | ProductKey.                                                  |
| deviceKey      | Y        | DeviceKey.                                                   |
| startTimestamp | Y        | Start time (timestamp in millisecond).                       |
| endTimestamp   | Y        | End time (timestamp in millisecond).                         |
| gatewayDk      | N        | Gateway DeviceKey.                                           |
| gatewayPk      | N        | Gateway ProductKey.                                          |
| locateTypes    | N        | Positioning type (query all types of positioning by default). Separate multiple positionings by commas. <br />GNSS-Global Navigation Satellite System<br />GPS-Global Positioning System<br />GL-Global Navigation Satellite System<br />GA-Galileo Positioning System<br />BD/PQ-BeiDou Navigation Satellite System<br />LBS-Location-Based Service |
| callback       | Y        | Callback function of the request.                            |

**QuecLocationHistoryModel Definition**

| Field        | Type   | Description                                                  |
| ------------ | ------ | ------------------------------------------------------------ |
| bdLat        | Double | Device latitude (BD09).                                      |
| bdLng        | Double | Device longitude (BD09).                                     |
| deviceKey    | String | DeviceKey.                                                   |
| gcjLat       | Double | Device latitude (GCJ02).                                     |
| gcjLng       | Double | Device longitude (GCJ02).                                    |
| hdop         | Double | Horizontal dilution of precision (0.5 – 99.99).              |
| locateId     | String | Trajectory ID.                                               |
| locateType   | int    | Location method.<br />0-GNSS<br />1-LBS<br />2-Manual fixed-point |
| locationTime | String | Location time.                                               |
| productKey   | String | ProductKey.                                                  |
| satellites   | int    | Current number of satellites.                                |
| tsLocateTime | int    | The latest positioning time (timestamp).                     |
| wgsLat       | Double | Device latitude (WGS84).                                     |
| wgsLng       | Double | Device longitude (WGS84).                                    |

**Example**

```kotlin
QuecDeviceStatisticsService.getLocationHistory(
    "pk",
    "dk",
    System.currentTimeMillis() - 90000,
    System.currentTimeMillis(),
    null,
    null,
    "GNSS"
) {
    if (it.isSuccess) {
        val data = it.data //Query a device historical trajectory successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Query List of Device Property Chart

**API**

Query a list of device property charts.

```kotlin
fun getPropertyChartList(
    productKey: String,
    deviceKey: String,
    startTimestamp: Long,
    endTimestamp: Long,
    attributeCode: String,
    gatewayDk: String?,
    gatewayPk: String?,
    countType: Int,
    timeGranularity: Int,
    callback: QuecCallback<List<QuecPropertyChartListModel>>
)
```

**Parameter**

| Parameter       | Required | Description                                                  |
| --------------- | -------- | ------------------------------------------------------------ |
| productKey      | Y        | ProductKey.                                                  |
| deviceKey       | Y        | DeviceKey.                                                   |
| startTimestamp  | Y        | Start time (timestamp in millisecond).                       |
| endTimestamp    | Y        | End time (timestamp in millisecond).                         |
| attributeCode   | N        | TSL model property identifier. Separate multiple properties by commas. |
| gatewayDk       | N        | Gateway DeviceKey.                                           |
| gatewayPk       | N        | Gateway ProductKey.                                          |
| countType       | N        | Aggregation type (Default value: 3). <br />1-Maximum<br />2-Minimum<br />3-Average<br />4-Difference. |
| timeGranularity | N        | Statistical time granularity (Default value: 3).<br />1-Month<br />2-Day<br />3-Hour<br />4-Minute<br />5-Second |
| callback        | Y        | Callback function of the request.                            |

**QuecPropertyChartListModel Definition**

| Field        | Type            | Description       |
| ------------ | --------------- | ----------------- |
| propertyCode | String          | TSL code.   |
| xaxisData    | List&lt;String> | Recording time.   |
| xaxisDataTs  | List&lt;Double> | Timestamp.        |
| yaxisData    | List&lt;Any>    | Property content. |

**Example**

```kotlin
QuecDeviceStatisticsService.getPropertyChartList(
    "pk",
    "dk",
    System.currentTimeMillis() - 90000,
    System.currentTimeMillis(),
    "temperature",
    null,
    null,
    3,
    1
) {
    if (it.isSuccess) {
        val data = it.data //Query a list of device property charts successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Query Device Property MoM Statistical Data

**API**

Query device property MoM statistical data.

```kotlin
fun getPropertyStatisticsPath(
    productKey: String,
    deviceKey: String,
    currentTimestamp: Long,
    attributeCode: String,
    gatewayDk: String?,
    gatewayPk: String?,
    countType: Int,
    timeGranularities: String?,
    callback: QuecCallback<List<QuecPropertyStatisticsModel>>
)
```

**Parameter**

| Parameter         | Required | Description                                                  |
| ----------------- | -------- | ------------------------------------------------------------ |
| productKey        | Y        | ProductKey.                                                  |
| deviceKey         | Y        | DeviceKey.                                                   |
| currentTimestamp  | Y        | Current time (timestamp in millisecond).                     |
| attributeCode     | N        | TSL model property identifier. Separate multiple properties by commas. |
| gatewayDk         | N        | Gateway DeviceKey.                                           |
| gatewayPk         | N        | Gateway ProductKey.                                          |
| countType         | N        | Aggregation type (Default value: 3). <br />1-Maximum<br />2-Minimum<br />3-Average<br />4-Difference. |
| timeGranularities | N        | Statistical time granularity (Default value: 1). Separate multiple granularities by commas. <br />1-Day <br />2-Week <br />3-Month <br />4-Year |
| callback          | Y        | Callback function of the request.                            |

**QuecPropertyStatisticsModel Definition**

| Field           | Type             | Description                                                  |
| --------------- | ---------------- | ------------------------------------------------------------ |
| statValue       | ListList&lt;Any> | Current MoM value.                                           |
| timeGranularity | int              | Time units. <br />1-Day<br />2-Week<br />3-Month<br />4-Year |

**Example**

```kotlin
QuecDeviceStatisticsService.getPropertyStatisticsPath(
    "pk",
    "dk",
    System.currentTimeMillis(),
    "temperature",
    null,
    null,
    3,
    "1,2,3"
) {
    if (it.isSuccess) {
        val data = it.data //Query device property MoM statistical data successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```

### Query Property Data List

**API**

Query a property data list.

```kotlin
fun getPropertyDataList(
    productKey: String,
    deviceKey: String,
    startTimestamp: Long,
    endTimestamp: Long,
    attributeCode: String,
    gatewayDk: String?,
    gatewayPk: String?,
    pageNumber: Int,
    pageSize: Int,
    callback: QuecCallback<QuecPageResponse<QuecPropertyDataListModel>>
)
```

**Parameter**

| Parameter      | Required | Description                                                  |
| -------------- | -------- | ------------------------------------------------------------ |
| productKey     | Y        | ProductKey.                                                  |
| deviceKey      | Y        | DeviceKey.                                                   |
| startTimestamp | Y        | Start time (timestamp in millisecond).                       |
| endTimestamp   | Y        | End time (timestamp in millisecond).                         |
| attributeCode  | N        | TSL property identifier. Separate multiple properties by commas. |
| gatewayDk      | N        | Gateway DeviceKey.                                           |
| gatewayPk      | N        | Gateway ProductKey.                                          |
| pageNumber     | N        | Current Page. Default value: 1.                              |
| pageSize       | N        | Page size: Default value: 10.                                |
| callback       | Y        | Callback function of the request.                            |

**Example**

```kotlin
QuecDeviceStatisticsService.getPropertyDataList(
    "pk",
    "dk",
    System.currentTimeMillis() - 90000,
    System.currentTimeMillis(),
    "temperature",
    null,
    null,
    1,
    10
) {
    if (it.isSuccess) {
        val data = it.data //Query a property data list successfully.
    } else {
        val code = it.code //Failed. Error code.
        val msg = it.msg //Failed. Error message.
    }
}
```
