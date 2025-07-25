# Configure Google Push Service

#### Log in to the Firebase console [https://console.firebase.google.com/](https://console.firebase.google.com/).

<a data-fancybox title="img" href="/en/appDevelop/oemapp/push/googlepush101.png">![image](/en/appDevelop/oemapp/push/googlepush101.png)</a>

#### Create Firebase Project

You need to create a Firebase project that will be associated with your app before adding Firebase to the app. Create a project by the steps: Enter a project name -> Configure Google Analytics -> Create a project (Skip the steps if you already have a project).

<a data-fancybox title="img" href="/en/appDevelop/oemapp/push/googlepush102.png">![image](/en/appDevelop/oemapp/push/googlepush102.png)</a>

<a data-fancybox title="img" href="/en/appDevelop/oemapp/push/googlepush103.png">![image](/en/appDevelop/oemapp/push/googlepush103.png)</a>

<a data-fancybox title="img" href="/en/appDevelop/oemapp/push/googlepush104.png">![image](/en/appDevelop/oemapp/push/googlepush104.png)</a>

#### Get Android Configuration File google-service.json

1. In the center of the "Project Overview" page, click the "**Android**" icon (**plat_android**) to start the setup process. (If you've already added an app to your Firebase project, click "**Add app**" to display the platform options.)
2. Enter the software package name of your app in the "**Android package name**" field.
3. (Optional) Enter additional app information, "**App nickname**" and "**Debug signing certificate SHA-1**". See [*Create Android Certificate*](/appDevelop/OEMApp/app/android-jks) for details.
4. Click "**Register app**".
5. Click "**Download google-services.json**" to get the Firebase Android configuration file.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/push/googlepush105.png">![image](/en/appDevelop/oemapp/push/googlepush105.png)</a>

<a data-fancybox title="img" href="/en/appDevelop/oemapp/push/googlepush106.png">![image](/en/appDevelop/oemapp/push/googlepush106.png)</a>

<a data-fancybox title="img" href="/en/appDevelop/oemapp/push/googlepush107.png">![image](/en/appDevelop/oemapp/push/googlepush107.png)</a>

Check if the app exists on the "**Project settings**" page. If it exists, directly download the google-service.json file from the project.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/push/googlepush108.png">![image](/en/appDevelop/oemapp/push/googlepush108.png)</a>

#### Get iOS Configuration File GoogleService-Info.plist

1. In the center of the "Project Overview" page, click the "**iOS+**" icon to start the setup process.
2. Enter the bundle ID of your app in the "**Bundle ID**" field.
3. (Optional) Enter additional app information, "**App nickname**" and "**App Store ID**".
4. Click "**Register app**".
5. Click **Download GoogleService-Info.plist** to get the Firebase Apple platforms configuration file.

#### Refer to [Firebase](https://firebase.google.com/docs/ios/setup?hl=en) for the official Firebase documentation.
