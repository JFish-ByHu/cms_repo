# Create iOS Certificate

This section introduces how to create iOS certificates to help you complete the launch configuration for the OEM App.

## Prerequisites

1. You need to [register and enroll in Apple Developer Program](https://developer.apple.com/support/enrollment/) to launch your App on the App Store.
2. Prepare a computer with macOS.

## Create App ID

1. Log in to [Apple Developer](https://developer.apple.com/account/) and select "**Certificates, Identifiers & Profiles**". <a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/cert1-en.png">![image](/en/appDevelop/oemapp/cert/cert1-en.png)</a>
2. Select "**Identifiers**" and click "**+**". <a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/cert2-en.png">![image](/en/appDevelop/oemapp/cert/cert2-en.png)</a>
3. Select "**App IDs**" and click "**Continue**". <a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/cert3-en.png">![image](/en/appDevelop/oemapp/cert/cert3-en.png)</a>
4. Enter a description in the "Description" field, such as the English name of your App. Select "**Explicit**" in the "Bundle ID" field and enter your bundle ID. <a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/cert4-en.png">![image](/en/appDevelop/oemapp/cert/cert4-en.png)</a>

Check the following options in the "Capabilities" list:

```
Access WiFi Information
Associated Domains
Push Notifications
Sign In with Apple、Enable as a primary App ID (optional)
```

<a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/cert5.png">![image](/en/appDevelop/oemapp/cert/cert5-en.png)</a>

```
Note:
If your app includes value-added services, you need to enable additional permissions.
```

5. Click "**Continue**" and then "**Register**" after confirming that the information is correct. If the system prompts "An App ID with Identifier 'com.xxx.xxx' is not available. Please enter a different string.", it means that the bundle ID is occupied. Click "**Back**" to return to the previous step and change the bundle ID.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/cert6-en.png">![image](/en/appDevelop/oemapp/cert/cert6-en.png)</a>

6. If there are no error messages, the App ID will be displayed in the list, indicating that the App ID has been created successfully.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/cert7-en.png">![image](/en/appDevelop/oemapp/cert/cert7-en.png)</a>

## Create CSR File (.certSigningRequest Format)

1. Open "Keychain Access" on macOS, and click "**Keychain Access**" > "**Certificate Assistant**" > "**Request a Certificate from a Certificate Authority**". <a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/cert9-en.png">![image](/en/appDevelop/oemapp/cert/cert9-en.png)</a>
2. Fill in your email address in the "User Email Address" field, your name in the "Common Name" field, select "**Save to disk**", and click "**Continue**". <a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/cert10-en.png">![image](/en/appDevelop/oemapp/cert/cert10-en.png)</a>
3. Save *CertificateSigningRequest.certSigningRequest* file to your local disk to complete the creation of the CSR file.

## Create App Distribution Certificate (.p12 Format)

```
Note:
If you have multiple apps under your account, you do not need to create multiple app distribution certificates, but use the same one. Creating multiple certificates will cause unnecessary trouble.
```

1. Open the "Certificates, Identifiers & Profiles" page, select "**Certificates**" and click "**+**". <a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/cert11-en.png">![image](/en/appDevelop/oemapp/cert/cert11-en.png)</a>
2. Select "**iOS Distribution (App Store and Ad Hoc)**" and click "**Continue**".

```
Note:
If you cannot select this option and receive a pop-up that the certificate limit has been exceeded, return to the previous page and delete redundant certificates. Deleting certificates will not affect the normal use of launched apps. Certificates are only used during the app build and upload stages.
```

<a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/cert12-en.png">![image](/en/appDevelop/oemapp/cert/cert12-en.png)</a>

3. Click "**Choose File**", select the created CSR file, and click "**Continue**". <a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/cert13-en.png">![image](/en/appDevelop/oemapp/cert/cert13-en.png)</a>
4. Click "**Download**" to download *ios_distribution.cer* file to your local disk. Double-click the file to import it into "Keychain Access".

```
Note:
The .cer file needs to be imported into "Keychain Access" before it can be exported as a .p12 file. Please proceed to the next step.
```

<a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/cert14-en.png">![image](/en/appDevelop/oemapp/cert/cert14-en.png)</a>

5. Open "Keychain Access", select "**My Certificates**" in the "Category" column, find the imported certificate, right-click and select "**Export xxx**".

<a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/cert15-en.png">![image](/en/appDevelop/oemapp/cert/cert15-en.png)</a>

6. Save it as "App Distribution Certificate.p12", select the file format as "**Personal Information Exchange (.p12)**", and click "**Save**".

<a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/cert16-en.png">![image](/en/appDevelop/oemapp/cert/cert16-en.png)</a>

7. You do not need to set a password. Just click "**OK**" to save the certificate.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/cert17-en.png">![image](/en/appDevelop/oemapp/cert/cert17-en.png)</a>

## Create App Push Certificate (.p12 Format)

Unlike an app distribution certificate, if you have multiple apps under your account, each app requires an app push certificate.

1. Open the "Certificates, Identifiers & Profiles" page, select "**Certificates**", and click "**+**".

<a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/cert18-en.png">![image](/en/appDevelop/oemapp/cert/cert18-en.png)</a>

2. Select "**Apple Push Notification service SSL (Sandbox & Production)**" and click "**Continue**".

<a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/cert19-en.png">![image](/en/appDevelop/oemapp/cert/cert19-en.png)</a>

3. Select the app's bundle ID in the "App ID" field and click "**Continue**".

<a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/cert20-en.png">![image](/en/appDevelop/oemapp/cert/cert20-en.png)</a>

4. Click "**Choose File**", select the created CSR file, and click "**Continue**".

<a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/cert21-en.png">![image](/en/appDevelop/oemapp/cert/cert21-en.png)</a>

5. Click "**Download**" to download *aps.cer* file to your local disk. Double-click the file to import it into "Keychain Access".

```
Note:
The .cer file needs to be imported into "Keychain Access" before it can be exported as a .p12 file. Please continue with the next step.
```

<a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/cert22-en.png">![image](/en/appDevelop/oemapp/cert/cert22-en.png)</a>

6. Open "Keychain Access", select "**My Certificates**" in the "Category" column, find the imported certificate, right-click and select "**Export xxx**".

<a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/cert23-en.png">![image](/en/appDevelop/oemapp/cert/cert23-en.png)</a>

7. Save it as "App Push Certificate.p12", select the file format as "**Personal Information Exchange (.p12)**", and click "**Save**".

<a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/cert24-en.png">![image](/en/appDevelop/oemapp/cert/cert24-en.png)</a>

8. Create a password for the push certificate and make sure to record it. Click "**OK**" to save the certificate.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/cert25-en.png">![image](/en/appDevelop/oemapp/cert/cert25-en.png)</a>

## Create App Provisioning Profile (.mobileprovison Format)

1. Open the "Certificates, Identifiers & Profiles" page, select "**Profiles**", and click "**+**".

<a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/cert26-en.png">![image](/en/appDevelop/oemapp/cert/cert26-en.png)</a>

2. Select "**App Store**" and click "**Continue**".

<a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/cert27-en.png">![image](/en/appDevelop/oemapp/cert/cert27-en.png)</a>

3. Select the app's bundle ID and click "**Continue**".

<a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/cert28-en.png">![image](/en/appDevelop/oemapp/cert/cert28-en.png)</a>

4. Select the created app distribution certificate and click "**Continue**".

```
Note:
If there are multiple certificates on the page, you can distinguish them by the expiration date. A certificate is valid for 1 year. If you cannot distinguish them, it is recommended to return to the certificate list page, delete the redundant certificates, and restart this step. Selecting the wrong certificate in this step will result in a build failure.
```

<a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/cert29-en.png">![image](/en/appDevelop/oemapp/cert/cert29-en.png)</a>

5. Enter your app's name in the "Provisioning Profile Name" field and click "**Generate**".

<a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/cert30-en.png">![image](/en/appDevelop/oemapp/cert/cert30-en.png)</a>

6. Click "**Download**" to download the provisioning profile and complete the file creation.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/cert31-en.png">![image](/en/appDevelop/oemapp/cert/cert31-en.png)</a>

## Notes

1. After uploading the application certificate, you need to rebuild the app for the changes to take effect.
2. The push certificate is valid for 1 year. After it expires, app pushes will fail. To resolve this, you need to create and upload a new certificate, without the need to rebuild the app.



<style>

  p a img {
   max-height:400px;
  }

</style>