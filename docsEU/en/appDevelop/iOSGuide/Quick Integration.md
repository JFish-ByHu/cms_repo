## IoT SDK Integration Guide

## Feature Description

QuecIotSdk serves as the entry SDK for IoT SDK, enabling development based on public cloud or private deployments. 

This SDK helps developers rapidly complete app development because developers only need to focus on UI/UE design, while ignoring complex protocols and error management.

Key features:

- Initialize the SDK (This step must be completed before user, device, home, and other functionalities are used).
- Enable debug mode to print logs for issue analysis.
- Set the country code to get global domain routing services data.
- Get country list data.

## SDK Integration

### Step 1: Register an Developer Center Account

Before using Developer Center, you need to access [https://aiot.quectel.com/](https://aiot.quectel.com/) to register an account

### Step 2: Integrate SDK

#### Via CocoaPods

The current SDK supports iOS 13.0 and above.

1. Update CocoaPods to the latest version. Refer to [CocoaPods official documents](https://guides.cocoapods.org/) for the CocoaPods usage. 
2. Add the following content in the Podfile file.

```objc
source 'https://github.com/thridparty-cloud2/QuecPublicSpecs.git'

platform :ios, '13.0'
target 'Your_Project_Name' do
    use_frameworks!
    pod "QuecIotSdk", '~> 2.0.0'
    
end
```

3. In the project's root directory, execute **pod update** to integrate the SDK.

#### Via Download

1. Obtain the [SDK resources](https://iot.quectelcn.com/download?menuCode=APP_SDK&resourceType=C) from the Download Center.
2. Double-click the downloaded package to unzip it. Add the static libraries and resource files from the extracted folder to your project. 
<a data-fancybox title="img" href="/en/appDevelop/iosGuide/frameworks.png">![img](/en/appDevelop/iosGuide/frameworks.png)</a>
1. Add system dependency libraries.
 - libc++.tbd
 - CoreTelephony.framework
 - libz.tbd
 - SystemConfiguration.framework
 - libresolv.9.tbd
2. Integrate third-party libraries (CocoaPods integration requires use_frameworks! configuration).
 - AFNetworking (4.0)
 - YYModel (1.0.4)
 - SocketRocket (0.6.0)
 - CocoaAsyncSocket (7.6.5)
3. Navigate to "TARGETS" – "QuecTestSDK" – "Build Settings" – "Other Linker Flags" and add "-ObjC".
4. Enable Swift-OC mixed compilation (Create a Swift file in your project. Xcode will automatically generate a *XXX-Bridge-Header.h* file).

### Step 3: Configure userDomain and userDomainSecret

Obtain userDomain and userDomainSecret by creating an app in the Developer Center.

<a data-fancybox title="img" href="/en/appDevelop/iosGuide/create_sdk_app_1.png">![img](/en/appDevelop/iosGuide/create_sdk_app_1.png)</a>

<a data-fancybox title="img" href="/en/appDevelop/iosGuide/create_sdk_app_2.png">![img](/en/appDevelop/iosGuide/create_sdk_app_2.png)</a>

### Step 4: Initialize the SDK

**API**

Initialize the SDK with the user domain, secret, and cloud service type to connect to the public cloud's China, Europe, or North America services.

```objc
- (void)startWithUserDomain:(NSString *)userDomain
           userDomainSecret:(NSString *)userDomainSecret
           cloudServiceType:(QuecCloudServiceType)cloudServiceType;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| userDomain |	Y|User domain, generated when an app is created on Developer Center.|
| userDomainSecret |	Y|User domain secret, generated when an app is created on Developer Center.|
| cloudServiceType |	Y|Cloud service type, used to specify the service region to connect to.|

**QuecCloudServiceTypeEnumeration Definition**

```objc
typedef NS_ENUM(NSUInteger, QuecCloudServiceType) { //Cloud service type.
    QuecCloudServiceTypeChina = 0, //China
    QuecCloudServiceTypeEurope,    //Europe
    QuecCloudServiceTypeNorthAmerica,    //North America
};
```

**Example**

```objc
[QuecIoTAppSDK.sharedInstance startWithUserDomain:@"your userDomain" userDomainSecret:@"your domainSecret" cloudServiceType:QuecCloudServiceTypeChina];
```

#### Initialize Private Deployment

**API**

Initialize private deployment so that users can configure information such as cloud service URLs and domain routing data for SDK access.

```objc
- (void)startWithConfig:(QuecPublicConfig *)config;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| config |	Y|Initialization configuration template.|

**QuecPublicConfig Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| userDomain       | NSString             | User domain (required) |
| userDomainSecret       | NSString             | User domain secret (required) |
| baseUrl       | NSString             | Request URL (required) |
| webSocketUrl       | NSString             | WebSocket 1.0 URL (required) |
| webSocketV2Url       | NSString             | WebSocket 2.0 URL (required) |
| bootstrapUrl       | NSString             | Domain routing service URL (required) |
| bootstrapPath       | NSString             | Domain routing path (required) |
| bootstrapToken       | NSString             | Domain routing key (required) |
| mcc       | NSString             | MCC (optional) |
| tcpAddr       | NSString             | TCP address (optional) |
| pskAddr       | NSString             | PSK address (optional) |
| tlsAddr       | NSString             | TLS address (optional) |
| cerAddr       | NSString             | CER address (optional) |
| reportAddr       | NSString             | Bluetooth data report URL (optional) |

**Example**

```objc
QuecPublicConfig *iotConfig = QuecPublicConfig.new;
iotConfig.userDomain = @"X.XX.XXXX.X";
iotConfig.userDomainSecret = @"XXXXXXXXXXXXXXXXXXXXXXXX";
iotConfig.baseUrl = @"https://xxx.com";
iotConfig.webSocketUrl = @"xxx://xxx.com/xx";
iotConfig.webSocketV2Url = @"xxx://xxx.com:xxxx/xx";
iotConfig.bootstrapUrl = @"https://xxx.com";
iotConfig.bootstrapPath = @"/xxx";
iotConfig.bootstrapToken = @"xxx";
[QuecIoTAppSDK.sharedInstance startWithConfig:iotConfig]
```

#### Enable/Disable Debug Mode

**API**

Enable or disable debug mode. During development, you can enable debug mode to print logs for issue analysis.

```objc
- (void)setDebugMode:(BOOL)debugMode;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| debugMode |	Y|Enable or disable debug mode.|

**Example**

```objc
[QuecIoTAppSDK.sharedInstance setDebugMode:YES];
```

#### Set Country Code

**API**

Configure the country code to retrieve MCC-based domain routing services.

```objc
- (void)setCountryCode:(NSString *)countryCode;
```

**Parameter**

|Parameter| Required |Description|
| --- | --- | --- |
| countryCode |	Y|Country code (e.g., "86" for China)|

**Example**

```objc
[QuecIoTAppSDK.sharedInstance setCountryCode:@"86"];
```

#### Get Country List

**API**

Get the list of public-cloud-supported countries (SDK initialization is required first).

```objc
- (NSArray<QuecCountryInfoModel *> *)getCountryData;
```

**Parameter**

**QuecCountryInfoModel Definition**

| Field     | Type               | Description |
|-----------|--------------------|---------|
| name       | NSString             | Country name. |
| internationalCode       | NSString             | Country code (e.g., "86") |

**Example**

```objc
NSArray<QuecCountryInfoModel *> *countrys = [QuecIoTAppSDK.sharedInstance getCountryData];
if (countrys.count) {
    /// Next Action
}
```
