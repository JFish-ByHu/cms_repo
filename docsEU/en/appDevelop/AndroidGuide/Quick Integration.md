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

### Step 1: Create an Android Project

Create a new project in Android Studio. Refer to the [official documents](https://developer.android.com/studio) for guidance.

### Step 2: Configure Dependencies

In the project's root directory, edit the *build.gradle* file.

```groovy
buildscript {
    repositories {
        //Add the following configurations.
        maven {
            url 'http://106.15.139.220:8081/repository/maven-snapshots/'
            allowInsecureProtocol = true
        }
        maven {
            url 'http://106.15.139.220:8081/repository/maven-releases/'
            allowInsecureProtocol = true
        }
    }
}
```

In the project's *app* directory, edit the *build.gradle* file.

```groovy
dependencies {
    //Add the core library dependency.
    implementation 'com.quectel.app.sdk:quec-iot-sdk:2.0.0'
}
```

### Step 3: Configure userDomain and userDomainSecret

Obtain userDomain and userDomainSecret by creating an app in the Developer Center.

<a data-fancybox title="img" href="/en/appDevelop/androidGuide/create_sdk_app_1.png">![img](/en/appDevelop/androidGuide/create_sdk_app_1.png)</a>

<a data-fancybox title="img" href="/en/appDevelop/androidGuide/create_sdk_app_2.png">![img](/en/appDevelop/androidGuide/create_sdk_app_2.png)</a>

### Step 4: Configure Obfuscation Rules

Configure obfuscation rules in the `proguard-rules.pro` file in the project's *app* directory.

```
-keep class  com.quectel.basic.common.entity.**{*;}
-keep class * implements com.quectel.basic.common.entity.QuecBaseModel{*;}
-keep class * implements com.quectel.basic.common.event.QuecBaseEvent{*;}

# RxJava
-dontwarn sun.misc.**
-keepclassmembers class rx.internal.util.unsafe.*ArrayQueue*Field* {
    long producerIndex;
    long consumerIndex;
}

# okhttp3
-keepattributes Signature
-keepattributes *Annotation*
-keep class com.squareup.okhttp.* { *; }
-keep interface com.squareup.okhttp.** { *; }
-dontwarn com.squareup.okhttp.**

# Okio
-dontwarn com.squareup.**
-dontwarn okio.**
-keep public class org.codehaus.* { *; }
-keep public class java.nio.* { *; }

# Gson specific classes
-dontwarn sun.misc.**
-keep class com.google.gson.examples.android.model.** { <fields>; }
-keep class * implements com.google.gson.TypeAdapterFactory
-keep class * implements com.google.gson.JsonSerializer
-keep class * implements com.google.gson.JsonDeserializer
-keepclassmembers,allowobfuscation class * {
    @com.google.gson.annotations.SerializedName <fields>;
}

# mmkv
-keep class com.tencent.mmkv.** {*;}

# eventbus
-keepattributes *Annotation*
-keepclassmembers class * {
    @org.greenrobot.eventbus.Subscribe <methods>;
}
-keep enum org.greenrobot.eventbus.ThreadMode { *; }
-keepclassmembers class org.greenrobot.eventbus.util.ThrowableFailureEvent {
    <init>(java.lang.Throwable);
}
-keep class org.greenrobot.eventbus.android.AndroidComponentsImpl

```

### Step 5: Initialize the SDK

**API**

Initialize the SDK with the user domain, secret, and cloud service type to connect to the public cloud's China, Europe, or North America services.

```kotlin
fun startWithConfig(
    application: Application,
    userDomain: String,
    userDomainSecret: String,
    cloudServiceType: QuecCloudServiceType
)
```

**Parameter**

| Parameter        | Required | Description                                                  |
| ---------------- | -------- | ------------------------------------------------------------ |
| application      | Y        | Application object.                                          |
| userDomain       | Y        | User domain, generated when an app is created on Developer Center. |
| userDomainSecret | Y        | User domain secret, generated when an app is created on Developer Center. |
| cloudServiceType | Y        | Cloud service type, used to specify the service region to connect to. |

**QuecCloudServiceType Enumeration Definition**

| Field                            | Description   |
| -------------------------------- | ------------- |
| QuecCloudServiceTypeChina        | China         |
| QuecCloudServiceTypeEurope       | Europe        |
| QuecCloudServiceTypeNorthAmerica | North America |

**Example**

```kotlin
class App : Application() {
    override fun onCreate() {
        super.onCreate()
        QuecIotSdk.startWithConfig(
            this,
            "X.XX.XXXX.X",
            "xxx",
            QuecCloudServiceType.QuecCloudServiceTypeChina
        )
    }
}
```

## Additional Configurations

### Initialize Private Deployment

**API**

Initialize private deployment so that users can configure information such as cloud service URLs and domain routing data for SDK access.

```kotlin
fun startWithConfig(application: Application, config: QuecPublicConfig)
```

**Parameter**

| Parameter | Required | Description                            |
| --------- | -------- | -------------------------------------- |
| config    | Y        | Initialization configuration template. |

**QuecPublicConfig Definition**

| Field            | Type     | Description                           |
| ---------------- | -------- | ------------------------------------- |
| userDomain       | String | User domain (required)                |
| userDomainSecret | String | User domain secret (required)         |
| baseUrl          | String | Request URL (required)                |
| webSocketUrl     | String | WebSocket 1.0 URL (required)          |
| webSocketV2Url   | String | WebSocket 2.0 URL (required)          |
| bootstrapUrl     | String | Domain routing service URL (required) |
| bootstrapPath    | String | Domain routing path (required)        |
| bootstrapToken   | String | Domain routing key (required)         |
| mcc              | String | MCC (optional)                        |
| tcpAddr          | String | TCP address (optional)                |
| pskAddr          | String | PSK address (optional)                |
| tlsAddr          | String | TLS address (optional)                |
| cerAddr          | String | CER address (optional)                |
| reportAddr       | String | Bluetooth data report URL (optional)  |

**Example**

```kotlin
QuecIotSdk.startWithConfig(
    application,
    QuecPublicConfig(
        userDomain = "X.XX.XXXX.X",
        userDomainSecret = "xxx",
        baseUrl = "https://xxx.com",
        webSocketUrl = "xxx://xxx.com/xx",
        webSocketV2Url = "xxx://xxx.com:xxxx/xx",
        bootstrapUrl = "https://xxx.com",
        bootstrapPath = "/xxx",
        bootstrapToken = "xxx",
    )
)
```

### Enable/Disable Debug Mode

**API**

Enable or disable debug mode. During development, you can enable debug mode to print logs for issue analysis.

```kotlin
fun setDebugMode(debugMode: Boolean)
```

**Parameter**

| Parameter | Required | Description                   |
| --------- | -------- | ----------------------------- |
| debugMode | Y        | Enable or disable debug mode. |

**Example**

```kotlin
QuecIotSdk.setDebugMode(true)
```

### Set Country Code

**API**

Configure the country code to retrieve MCC-based domain routing services.

```kotlin
fun setCountryCode(countryCode: String)
```

**Parameter**

| Parameter   | Required | Description                         |
| ----------- | -------- | ----------------------------------- |
| countryCode | Y        | Country code (e.g., "86" for China) |

**Example**

```kotlin
QuecIotSdk.setCountryCode("86")
```

### Get Country List

**API**

Get the list of public-cloud-supported countries (SDK initialization is required first).

```kotlin
fun getCountryData(): List<QuecCountryModel>
```

**Parameter**

**QuecCountryInfoModel Definition**

| Field             | Type     | Description               |
| ----------------- | -------- | ------------------------- |
| name              | String | Country name.             |
| internationalCode | String | Country code (e.g., "86") |

**Example**

```kotlin
val data = QuecIotSdk.getCountryData()
```
