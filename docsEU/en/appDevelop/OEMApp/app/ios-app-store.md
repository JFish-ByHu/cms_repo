# Publish iOS App

## Step 1: Create App on [App Store Connect](https://appstoreconnect.apple.com/) 

If you have already created an app on App Store Connect, you can skip this step.

### 1. Create an App

1) Log in to  App Store Connect and click "**My Apps**".

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store1-en.png">![image](/en/appDevelop/oemapp/appstore/store1-en.png)</a>

2) click "**+**" on the top left and select "**New App**".

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store2-en.png">![image](/en/appDevelop/oemapp/appstore/store2-en.png)</a>
Enter the app information.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store3-en.png">![image](/en/appDevelop/oemapp/appstore/store3-en.png)</a>

Platforms: Select "**iOS**".

Name: App name.

Primary Language: Select the default language of the app based on the actual situation.

Bundle ID: Select the bundle ID created when creating the certificate, generally consistent with the iOS package name (without suffix).

SKU: It can be the same as the bundle ID, and the app package name is recommended.

3) After completing the information, click "**Create**".

### 2. Complete App Information

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store4-en.png">![image](/en/appDevelop/oemapp/appstore/store4-en.png)</a>

Subtitle: Optional.

Category: The categories that best describe your app.

Content Rights: Apps that contain, show, or access third-party content must have all the necessary rights to that content or be otherwise permitted to use it under the laws of each App Store country or region in which they’re available.

Age Rating: The age rating of your app for the purpose of parental controls on the App Store. Click "**Edit**" and fill in the questionnaire. The system will determine your app rating. Usually, select "**None**" for all options and click "**Done**".

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store5-en.png">![image](/en/appDevelop/oemapp/appstore/store5-en.png)</a>

If the app needs to add other language versions, click "**English (U.S.)**" in the upper right corner and select the required languages.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store6-en.png">![image](/en/appDevelop/oemapp/appstore/store6-en.png)</a>

After adding a new language, you need to fill in the app information again in the new language.

### 3. Set Up Pricing and Availability

Price: Set the sales price based on the actual situation.

Availability: Select which countries or regions you want to make your app available in. Generally, you can select all countries and regions.

App Distribution Methods: It is recommended to select "**Public – Discoverable by anyone on the App Store (default)**" and "**Offer a reduced price on the Apple School Manager for volume purchased**".

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store7-en.png">![image](/en/appDevelop/oemapp/appstore/store7-en.png)</a>

### 4. Configure App Privacy

An app privacy policy is required. Click "**Edit**" and enter the privacy policy URL in the pop-up window.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store8-en.png">![image](/en/appDevelop/oemapp/appstore/store8-en.png)</a>

Data Collection Type

From December 8, 2020, when launching or updating an app on the App Store, you need to disclose what user data your app collects and uses during runtime.

Fill in the "Data Collection" item as follows.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store9-en.png">![image](/en/appDevelop/oemapp/appstore/store9-en.png)</a>

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store10-en.png">![image](/en/appDevelop/oemapp/appstore/store10-en.png)</a>

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store11-en.png">![image](/en/appDevelop/oemapp/appstore/store11-en.png)</a>

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store12-en.png">![image](/en/appDevelop/oemapp/appstore/store12-en.png)</a>

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store13-en.png">![image](/en/appDevelop/oemapp/appstore/store13-en.png)</a>

If your app does not contain voice features, you do not need to select "Audio Data".

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store14-en.png">![image](/en/appDevelop/oemapp/appstore/store14-en.png)</a>

Device ID refers to the unique identifier of an iOS device, not IoT device.

After clicking "**Save**", the following page will be displayed.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store15-en.png">![image](/en/appDevelop/oemapp/appstore/store15-en.png)</a>

Click "**Set Up Email Address**" and other data types.

Data Collection Purpose

Select data collection purposes.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store16-en.png">![image](/en/appDevelop/oemapp/appstore/store16-en.png)</a>

Select "**Yes, email addresses collected from this app are linked to the user's identity**".

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store17-en.png">![image](/en/appDevelop/oemapp/appstore/store17-en.png)</a>

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store18-en.png">![image](/en/appDevelop/oemapp/appstore/store18-en.png)</a>

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store19-en.png">![image](/en/appDevelop/oemapp/appstore/store19-en.png)</a>

If you select "**No, email addresses collected from this app are not linked to the user's identity**", the user's email address will not be used for tracking.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store20-en.png">![image](/en/appDevelop/oemapp/appstore/store20-en.png)</a>

Other data types are similar to the above. Complete the information according to the table below.

If your app does not contain voice features, you do not need to select "Audio Data".

| Data Type           | Usage                           | Data Linked to the User's Identity | **Data Used for Tracking** |
| ------------------- | ------------------------------- | ---------------------------------- | -------------------------- |
| Email Address       | Analytics and App Functionality | Yes                                | No                         |
| Phone Number        | Analytics and App Functionality | Yes                                | No                         |
| Precise Location    | App Functionality               | Yes                                | No                         |
| Coarse Location     | App Functionality               | Yes                                | No                         |
| Photos or Videos    | App Functionality               | Yes                                | No                         |
| Audio Data          | App Functionality               | No                                 | No                         |
| Customer Support    | App Functionality               | Yes                                | No                         |
| Other User Content  | App Functionality               | Yes                                | No                         |
| User ID             | Analytics and App Functionality | Yes                                | No                         |
| Product interaction | Analytics                       | Yes                                | No                         |
| Crash data          | App Functionality               | Yes                                | No                         |
| Performance data    | App Functionality               | No                                 | No                         |

After configuring all the data types, you will see the following page. 

If your app does not contain "Audio Data", "User Content" will not be displayed under "Data Not Linked to You".

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store21-en.png">![image](/en/appDevelop/oemapp/appstore/store21-en.png)</a>

Click "**Save**" to finish the app privacy policy configuration.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store22-en.png">![image](/en/appDevelop/oemapp/appstore/store22-en.png)</a>

## Step 2: Complete Version Information

### 1. Preview App Screenshots

- Upload prepared screenshots of app functionality and select one of your products for network provisioning and device binding. It is recommended not to use products such as light bulbs, light strips, or single plugs. The UI of these product panels is simple and has a higher chance of being rejected. Take screenshots of different functional pages and design them.

- Upload screenshots for iPhone 6.5-inch display and iPhone 5.5-inch display. Other sizes do not need to be uploaded for now.
- Screenshots must be taken with an iPhone.
- Do not include other app icons in the notification bar of the screenshots. It is recommended to turn on airplane mode on the phone before taking screenshots.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store23-en.png">![image](/en/appDevelop/oemapp/appstore/store23-en.png)</a>

Screenshot example:

6.5-inch (1242 x 2688 pixels)

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store24-en.png">![image](/en/appDevelop/oemapp/appstore/store24-en.png)</a>

5.5-inch (1242 x 2208 pixels)

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store25-en.png">![image](/en/appDevelop/oemapp/appstore/store25-en.png)</a>

### 2. Complete App Version and Review Information

#### 1) Version Information

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store26-en.png">![image](/en/appDevelop/oemapp/appstore/store26-en.png)</a>

Promotional Text: Introduction to new features of the app. This text will appear below your app on the App Store.

Description: Detailed description and feature introduction to the app.

Keywords:  Used for app search. Setting appropriate keywords can increase the chances of the app being searched. Separate multiple keywords with commas. 

Support URL: Fill in according to the actual situation. If there is no technical support URL, you can fill in the company's official website.

Marketing URL: Optional.

Version Number: The version number that is provided for your app appears on the App Store. try to make it consistent with the version number created in Acceleronix Developer Center.

Copyright: Company's copyright information, for example, ©2025 Acceleronix B.V."

If your app has another language version, click "**English (U.S.)**" in the upper right corner to select the target language in the drop-down list, and complete the related information for the corresponding language.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store27-en.png">![image](/en/appDevelop/oemapp/appstore/store27-en.png)</a>

If the app supports multiple languages, the promotional text and screenshots for each language version need to be configured separately.

#### 2) App Review Information

Complete the app review information according to the the actual situation.

Sign-In Information: Select "**Sign-in required**", and input the user name and password for app review.

Requirements: If you select "United States" as the registration region, the provided account must bind to a device. This device needs to be consistent with the device used for screenshots and videos. It is recommended to add a virtual device, otherwise, keep the device online during the app review.

Contact Information: Enter the contact information based on actual situation.

Notes: Paste the app demo video link.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store28-en.png">![image](/en/appDevelop/oemapp/appstore/store28-en.png)</a>

### 3. Configure App Demo Video

Requirements:

Your device must be visible next to an iPhone.

The review points for demonstrating the entire process include clicking your app from the phone desktop, performing network provisioning and using the app to turn on/off the device.

The following video is for your reference.


<video controls src="https://openmarker.oss-cn-shanghai.aliyuncs.com/Oliver/appstore.mp4"></video>


It is recommended to upload the video to YouTube and select "**Unlisted**" mode, which means the video can only be accessed through the link.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store34-en.png">![image](/en/appDevelop/oemapp/appstore/store34-en.png)</a>

After the video is successfully uploaded, the video link will be generated. However, the link may not be viewed normally and needs to be opened in a new browser for verification.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store35-en.png">![image](/en/appDevelop/oemapp/appstore/store35-en.png)</a>

If the link has been verified and the video can be watched normally, you can copy the link in the address bar and paste it to the "Notes" field mentioned above.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store36-en.png">![image](/en/appDevelop/oemapp/appstore/store36-en.png)</a>

```
Note:
Do not choose IPC devices with storage capabilities to shoot demo videos, because the app may be rejected due to in-app purchase functionality.
```

## Step 3: Upload App Installation Package

### Upload via Transporter

Do not use *Application Loader* for uploading, because it has many unknown risks that may cause upload failures and cannot be resolved. *Transporter*, Apple's newly released upload tool, is recommended.

On a Mac computer, open the *Transporter* app and log in.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store29-en.png">![image](/en/appDevelop/oemapp/appstore/store29-en.png)</a>
Click "**ADD APP**", and select the prepared production version of the app package in the .ipa format.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store30-en.png">![image](/en/appDevelop/oemapp/appstore/store30-en.png)</a>
Click "**DELIVER**". If the upload does not succeed after a long time, please retry several times.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store31-en.png">![image](/en/appDevelop/oemapp/appstore/store31-en.png)</a>
After the app package is uploaded, please wait patiently for 15 minutes to 1 hour. Go back to the App Store Connect page, click "**Add Build**", select the uploaded package, and click "**Done**".

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store32-en.png">![image](/en/appDevelop/oemapp/appstore/store32-en.png)</a>

## Step 4: Submit for Review

After completing all the information, click "**Add for Review**" in the upper right corner of the page.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/appstore/store33-en.png">![image](/en/appDevelop/oemapp/appstore/store33-en.png)</a>
An app review usually takes 1-3 working days. After approval, the app will automatically be launched on the app store, and the contact person will receive an approval notification email.

If you have any problem launching the app, feel free to contact Acceleronix Technical Support <support@acceleronix.io> for assistance.
