# Test iOS App on TestFlight

You can test your iOS apps with [TestFlight](https://developer.apple.com/testflight/). TestFlight is an official tool provided by Apple to help you test beta apps. You can invite testers to beta test your app by sending emails or sharing public links, and collect feedback from testers to improve the app quality.

## Test Steps

1. Create a new app in App Store Connect.
2. Upload IPA app package to App Store Connect.
3. Manage testers. It is recommended to configure an external testing link and the configuration process is simple.
4. Submit for review. The review process usually takes about one day. Once a version is approved, subsequent submissions do not require another review.
5. Download and install the TestFlight app.

## Create App

Refer to [iOS App Launch – Create App](ios-app-store).

## Upload IPA to App Store Connect

### Method 1: Upload via Transporter

Refer to [iOS App Launch – Upload via Transporter](ios-app-store).

### Method 2: Automatic Upload via App Store Connect API Key

Open [App Store Connect](https://appstoreconnect.apple.com/).

1. Click "**Users and Access**" on the homepage.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/testflight/tf2-en.png">![image](/en/appDevelop/oemapp/testflight/tf2-en.png)</a>

2. Click "**Keys**", select "**App Store Connect API**" and click "**+**" after "Active".

<a data-fancybox title="img" href="/en/appDevelop/oemapp/testflight/tf1-en.png">![image](/en/appDevelop/oemapp/testflight/tf1-en.png)</a>

3. Enter a key name `YOUR-KEY-NAME` (The name is for reference only and does not belong to the key itself). In the "Access" drop-down list, select the role permissions to determine where the API will be used. API keys apply to all apps and cannot be restricted to specific apps. It is recommended to select "**Admin**" and click "**Generate**".

<a data-fancybox title="img" href="/en/appDevelop/oemapp/testflight/tf3-en.png">![image](/en/appDevelop/oemapp/testflight/tf3-en.png)</a>

```
Note:
Once an API key is generated, you cannot edit its name or access permission. If you need to make changes, revoke the API key and generate a new one.
```

4. Download API Key

   The key can only be downloaded once. If you do not want to download the key at the moment, you can click "**Cancel**" and download it later. Make sure to keep a backup of the key.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/testflight/tf4-en.png">![image](/en/appDevelop/oemapp/testflight/tf4-en.png)</a>

After completing the above steps, you will have the Issuer ID, Key ID, and the downloaded key file.


## Configure External Link of TestFlight for Test

1. After uploading IPA to App Store Connect, open TestFlight and click "**Manage**" after `Missing Compliance`. Select "**`None of the algorithms mentioned above`**".

<a data-fancybox title="img" href="/en/appDevelop/oemapp/testflight/tf11-en.png">![image](/en/appDevelop/oemapp/testflight/tf11-en.png)</a>

2. The app status will change to "**`Waiting for Review`**". Click "**+**" after "`External Testing`" to create an external testing group.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/testflight/tf5-en.png">![image](/en/appDevelop/oemapp/testflight/tf5-en.png)</a>

3. Enter a group name and click "**Create**".

<a data-fancybox title="img" href="/en/appDevelop/oemapp/testflight/tf6-en.png">![image](/en/appDevelop/oemapp/testflight/tf6-en.png)</a>

4. Enter the app and complete the test information.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/testflight/tf7-en.png">![image](/en/appDevelop/oemapp/testflight/tf7-en.png)</a>

5. Add the group created and click "**Save**" to submit for review.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/testflight/tf8-en.png">![image](/en/appDevelop/oemapp/testflight/tf8-en.png)</a>

```
The review process usually takes about one day. Please wait patiently.
Once a version is approved, subsequent submissions do not require another review.
```

6. After the review is approved, enter the testing group and click "**`Enable Public Link`**"

<a data-fancybox title="img" href="/en/appDevelop/oemapp/testflight/tf9-en.png">![image](/en/appDevelop/oemapp/testflight/tf9-en.png)</a>

7. A public link will be generated. Share this link with testers.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/testflight/tf10-en.png">![image](/en/appDevelop/oemapp/testflight/tf10-en.png)</a>

```
You can set a maximum limit for the number of testers, with a maximum limit of 10,000.
```

## Download TestFlight

Click [https://apps.apple.com/us/app/testflight/id899247664](https://apps.apple.com/us/app/testflight/id899247664) to download TestFlight app.

