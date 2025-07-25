# Device Upgrade SDK: QuecOTAUpgradeKit

## Feature Description

This SDK enable device upgrade via cloud or Bluetooth.

```objc
#import <QuecOTAUpgradeKit/QuecOTAUpgradeKit.h>
/// Initialize
[QuecOTAManager sharedInstance]
```
> **Attention:**
>
> To ensure the state synchronization of device upgrades over HTTP, poll and call the following API to check the device upgrade state once.

```objc
 /// deviceModelList: device list page
for (QuecDeviceModel *device in deviceModelList) {
    [QuecOTAManager.sharedInstance checkDeviceHttpOtaWithDeviceModel:device];
}
```

## Device Upgrade

The procedures for device upgrade are as follows:

1. Query the device upgrade plan.
2. Set an event listener. 
3. Start device upgrade.
4. Obtain the upgrade process and result through event callbacks.
5. Display the upgrade result and remove the event listener. 

The SDK will determine whether to use cloud OTA or Bluetooth OTA according to device online status:

1. Cloud OTA when the device is online on the platform.
2. Bluetooth OTA when the device is offline on the platform. 

### Query Upgrade Plan of Single Device

**API**

Query an upgrade plan of a single device. If the device has an upgrade plan, the upgrade plan will be returned; otherwise, null will be returned.

```objc
- (void)checkVersionWithProductKey:(NSString *)productKey
                          deviceKey:(NSString *)deviceKey
                         planBlock:(void (^)(QuecOtaPlanInfoModel * planInfo))planBlock;
```

**Parameter**

| Parameter | Required | Description  |
|----------|------|--------------|
| productKey       | Y    | ProductKey. |
| deviceKey       | Y    | DeviceKey.  |
| planBlock |	N|Interface callback.	|

**Example**

```objc
[QuecOTAManager.sharedInstance checkVersionWithProductKey:@"pk"
                                                    deviceKey:@"dk"
                                                    planBlock:^(QuecOtaPlanInfoModel * _Nonnull planInfo) {
    /// Next Action
}];
```

**QuecOtaPlanInfoModel Definition**

| Field              | Type            | Description  |
|--------------------|-----------------|--------------|
| productKey         | NSString          | ProductKey. |
| deviceKey          | NSString          | DeviceKey.  |
| productIcon        | NSString          | Product icon. |
| deviceName        | NSString          | Device name. |
| planId             | long long          | Upgrade plan ID. |
| planName           | NSString          | Upgrade plan name. |
| planStartTime         | long long | The start time of the upgrade plan. The timestamp is accurate to milliseconds. |
| planEndTime | long long          | The end time of the upgrade plan. The timestamp is accurate to milliseconds. |
| userConfirmStatus | NSInteger          | User's upgrade confirmation state.<br />0-Unconfirmed <br />1-Upgrade immediately |
| userConfirmStatusDesc | int          | Description of user's upgrade confirmation state. |
| deviceStatus         | NSInteger          | Upgrade state. <br />0-Not upgraded <br />1-Upgrading <br />2-Successful upgrade <br />3-Failed upgrade |
| deviceStatusDesc | int          | Description of user's upgrade confirmation state. |
| upgradeFinishTips | int          | Upgrade result confirmation state. <br />0-Confirmed<br />1-Not confirmed; ignore this step if no confirmation is required. |
| upgradeProgress | float          | Upgrade progress. Range: 0 and 1.<br />0-Not upgraded<br />1-Successful upgrade |
| upgradeVersionInfo | NSString          | Text of user's upgrade confirmation state. |
| versionInfo | NSString          | Text of the version package required for the upgrade of components to be upgraded (being upgraded). No update description exists in the early versions, so use this text as the upgrade text. |
| comVerList | NSArray<QuecOtaPlanComVerInfo *> *          | Upgrade component list. |

**QuecOtaPlanComVerInfo Definition**

| Field       | Type          | Description         |
|-------------|---------------|---------------------|
| sort        | int           | Component sort. |
| comNo       | NSString        | Component number. |
| comType     | int           | Component type. <br />0-Module<br />1-MCU |
| dataType     | int           | Upgrade method. <br />0-Full-FOTA<br />1-DFOTA |
| cver        | NSString        | Current version number. |
| tver        | NSString        | Target version number. |
| versionInfo | NSString        | Text of the version package required for component upgrade. |
| versionMatch | BOOL        | Whether the component is suitable for upgrade. Always true, only return the list of upgradable components.<br />True-Yes <br />False-No |
| battery | NSString        | The lowest power required for an upgrade. |
| signal | int        | The weakest signal required for an upgrade. |
| space | long long        | Disk space required for the upgrade, unit: B (the maximum file size of the firmware needed for the upgrade). |
| downloadStatus | int        | Component firmware download state.<br />0-Not downloaded<br />1-Downloading<br />2-Successful download<br />3-Failed download |
| downloadProgress | NSString        | Download progress. |
| upgradeStatus | NSString        | Component upgrade state.<br />0-Not upgraded<br />1-Upgrading<br />2-Successful upgrade<br />3-Failed upgrade |
| fileList    | NSArray<QuecOtaPlanFileInfo *> *| Firmware information required for component upgrade. |

**QuecOtaPlanFileInfo Definition**

| Field      | Type   | Description |
|------------|--------|-------------|
| updIndex   | int    | Upgrade file index. |
| fileName   | NSString | Upgrade file name. |
| filePath   | NSString | File download address. |
| fileSize   | long long   | Upgrade file size. |
| fileSha256 | NSString | SHA-256 value of the update file. |
| fileMd5 | NSString | MD5 checksum. |
| fileCrc | NSString | CRC checksum. |

### Batch Query Device Upgrade Plan 

**API**

```objc
- (void)checkListVersionWithDeviceList:(NSArray *)deviceList
                         planListBlock:(void (^)(NSArray<QuecOtaPlanInfoModel *> * planInfos))planListBlock;
```

**Parameter**

| Parameter | Required | Description |
|----------|------|------|
| deviceList     | Y    | Device list. |
| planListBlock | Y    | Callback function of the request. |

**Example**

```objc
[QuecOTAManager.sharedInstance checkListVersionWithDeviceList:@[@{@"pk" : @"your pk", @"dk" : @"your dk"}] planListBlock:^(NSArray<QuecOtaPlanInfoModel *> * _Nonnull planInfos) {
    /// Next Action
}];
```

### Query Upgrade Plan for All Device Under Account

**API**

```objc
- (void)checkAllVersionWithPage:(NSInteger)page
                        pageSize:(NSInteger)pageSize
                  planListBlock:(void (^)(NSArray<QuecOtaPlanInfoModel *> * planInfos))planListBlock;
```

**Parameter**

| Parameter | Required | Description |
|----------|------|------|
| page     | Y    | Page number. |
| pageSize     | Y    | Page size. |
| planListBlock | Y    | Callback function of the request. |

**Example**

```objc
[QuecOTAManager.sharedInstance checkAllVersionWithPage:1
                                                  pageSize:10
                                             planListBlock:^(NSArray<QuecOtaPlanInfoModel *> * _Nonnull planInfos) {
    /// Next Action
}];
```

### Query Device Version Information

**API**

```objc
- (void)queryCurrentVersionWithProductKey:(NSString *)productKey
                                deviceKey:(NSString *)deviceKey
                                   result:(void (^)(NSArray<QuecBleVersionInfo *> * versionInfos))result;
```

**Parameter**

| Parameter | Required | Description  |
|----------|------|--------------|
| productKey       | Y    | ProductKey. |
| deviceKey       | Y    | DeviceKey.  |
| result | Y    | Callback function of the request. |

**Example**

```objc
[QuecOTAManager.sharedInstance queryCurrentVersionWithProductKey:@"your pk"
                                                           deviceKey:@"your dk"
                                                              result:^(NSArray<QuecBleVersionInfo *> * _Nonnull versionInfos) {
    /// Next Action
}];
```

**QuecBleVersionInfo Definition**

| Field      | Type   | Description |
|------------|--------|-------------|
| componentName   | NSString    | Component name. |
| version   | NSString | Component version. |
| componentType   | int |  Component type. <br />0-Module <br />1-MCU  |

### Start Device Upgrade

**API**

A specified device starts OTA upgrade. Upgrade method will be automatically determined when the method is called. 

```objc
- (void)startOtaWithPlanInfoModel:(QuecOtaPlanInfoModel *)planInfoModel;
```

**Parameter**

| Parameter | Required | Description |
|------|------|------|
| planInfoModel | Y    | Upgrade information. |

**Example**

```objc
//Information obtained from upgrade plan query.
QuecOtaPlanInfoModel *planInfo = QuecOtaPlanInfoModel.new;
[QuecOTAManager.sharedInstance startOtaWithPlanInfoModel:planInfo];
```

### Stop Device Upgrade

**API**

> Note
>
> Device upgrade can only be stopped when upgrading through Bluetooth. If upgrading through cloud, the upgrading will not be stopped and will continue until finished.

Specify a device to stop an OTA upgrade.

```objc
- (void)stopOtaWithPlanInfoModel:(QuecOtaPlanInfoModel *)planInfoModel;
```

**Parameter**

| Parameter | Required | Description |
|------|------|------|
| planInfoModel | Y    | Upgrade information. |

**Example**

```objc
//Information obtained from upgrade plan query.
QuecOtaPlanInfoModel *planInfo = QuecOtaPlanInfoModel.new;
[QuecOTAManager.sharedInstance stopOtaWithPlanInfoModel:planInfo];
```

### Add Update State Listener

**API**

Add an upgrade state listener. Through the callback of this listener, upgrade status and progress can be obtained. 

```objc

typedef void (^QuecOtaStateBlock)(QuecOTAStateModel *stateModel);

/// add listener
- (void)addStateListener:(id)listener state:(QuecOtaStateBlock)state;
```

**Parameter**

| Parameter | Required | Description |
|----------|------|-----|
| listener | Y    | Listener. |
| state | Y    | OTA upgrade information. |

**Example**

```objc
/// add listener
[QuecOTAManager.sharedInstance addStateListener:self state:^(QuecOTAStateModel * _Nonnull stateModel) {
    /// Next Action
}];
```

**QuecOTAStateModel Definition**

| Field       | Type   | Description                                |
|-------------|--------|--------------------------------------------|
| planId      | NSString   | Upgrade Plan ID.                     |
| state       | QuecOTAState   | Upgrade state: QuecOTAState. |
| pk          | String | ProductKey.                               |
| dk          | String | DeviceKey.                                |
| progress    | double | Upgrade progress (0.0 – 100.0). |
| channelMode | QuecOTAChannelMode   | Upgrade channel mode: QuecOTAChannelMode. |
| userConfirmStatus    | int   | User's upgrade confirmation state. <br />0-Unconfirmed <br />1-Upgrade immediately |

**QuecOTAState Enumeration Definition**

```objc
typedef NS_ENUM(int, QuecOTAState) {
    QuecOTAUpgradeEmpty = 0, // No upgrade plan.
    QuecOTAUpgrading,        // Upgrading.
    QuecOTAUpgradeSuccess,   // Upgraded successfully.
    QuecOTAUpgradeFailure,   // Upgrade fails.
    QuecOTAUpgradeExpired,   // Upgrade expires.
};
```

**QuecOTAChannelMode Enumeration Definition**

```objc
typedef NS_ENUM(int, QuecOTAChannelMode) {
    QuecOTAChannelUnknown = 0, // No available channel. 
    QuecOTAChannelCloud,        // Cloud upgrade.
    QuecOTAChannelBle,        // Bluetooth upgrade.
};
```

### Remove Upgrade State Listener

**API**

Remove an upgrade state listener. Remove the listener after completing the OTA upgrade to avoid memory leak. 

```objc
/// remove listener
- (void)removeStateListener:(id)listener;
```

**Parameter**

| Parameter | Required | Description |
| --------- | -------- | ----------- |
| listener  | Y        | Listener.   |

**Example**

```objc
/// remove listener
[QuecOTAManager.sharedInstance removeStateListener:self];
```

### Remove All Caches in Class

**API**

Remove all caches in a class and call them when OTA resources are no longer in use.

```objc
- (void)releaseAllOta;
```

**Example**

```objc
[QuecOTAManager.sharedInstance releaseAllOta];
```

### Query Specified Device OTA Upgrade Progress and State

**API**

Query a specified device OTA upgrade progress and state. An empty value indicates that the device has no state. 

```objc
- (QuecOTAStateModel *)getOtaStateWithProductKey:(NSString *)productKey deviceKey:(NSString *)deviceKey;
```

**Parameter**

| Parameter | Required | Description  |
|----|------|--------------|
| productKey | Y    | ProductKey. |
| deviceKey | Y    | DeviceKey.  |

The return value is upgrade state and progress.

**Example**

```objc
QuecOTAStateModel *stateModel = [QuecOTAManager.sharedInstance getOtaStateWithProductKey:@"your pk" deviceKey:@"your dk"];
```

### Query Device Upgrade Method

**API**

Call this function before starting the device upgrade to obtain the upgrade method that will be selected when the current upgrade begins.

```objc
- (QuecOTAChannelMode)getDeviceUpgradeChannelWithProductKey:(NSString *)productKey deviceKey:(NSString *)deviceKey;
```

**Parameter**

| Parameter | Required | Description  |
|----|------|--------------|
| productKey | Y    | ProductKey. |
| deviceKey | Y    | DeviceKey.  |

The return value is an enumeration of the upgrade method. 

**Example**

```objc
QuecOTAChannelMode mode = [QuecOTAManager.sharedInstance getDeviceUpgradeChannelWithProductKey:@"your pk" deviceKey:@"your dk"];
```
