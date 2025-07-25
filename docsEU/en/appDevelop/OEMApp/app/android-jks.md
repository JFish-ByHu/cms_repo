# Create Android Certificate

This section introduces how to create Android certificates to help you complete the launch configuration for an OEM App.

## Prerequisites

1. Install Java environment.
2. Install Android Studio.

## Two Methods

- Generate directly in the terminal using `keytool` (Key and Certificate Management Tool).
- Generate using Android Studio.

###### Method 1

- In the terminal, enter the command `keytool -genkey -alias test -keyalg RSA -validity 10000 -keystore test3.jks`.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/1675326904346.png">![image](/en/appDevelop/oemapp/cert/1675326904346.png)</a>

To view the jks certificate, enter the command `keytool -v -list -keystore test3.jks` in the terminal.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/1675327380242.png">![image](/en/appDevelop/oemapp/cert/1675327380242.png)</a>

###### Method 2

1. Open `Android Studio` and click "**`Build`**" -> "**`Generate Signed Bundle or APK`**".

<a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/1675326997464.png">![image](/en/appDevelop/oemapp/cert/1675326997464.png)</a>

2. In the "`Generate Signed Bundle or APK`" window, select "**`APK`**" and click "**`Next`**".

<a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/1675327025545.png">![image](/en/appDevelop/oemapp/cert/1675327025545.png)</a>

3. Click "**`Create new...`**" to enter the page for creating a jks certificate.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/1675327040505.png">![image](/en/appDevelop/oemapp/cert/1675327040505.png)</a>

4. Enter the key store path, alias, password, and other information, then click "**`OK`**". Remember the key store password, alias, and alias password.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/1675327061378.png">![image](/en/appDevelop/oemapp/cert/1675327061378.png)</a>

5. At this time, The Android jks certificate is created. Click "**`Cancel`**" to cancel the app build. You can find the *test.jks* certificate in the current directory.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/1675327076420.png">![image](/en/appDevelop/oemapp/cert/1675327076420.png)</a>

<a data-fancybox title="img" href="/en/appDevelop/oemapp/cert/1675327238798.png" style="width:500px;">![image](/en/appDevelop/oemapp/cert/1675327238798.png)</a>


<style>

  p a img {
   max-height:400px;
  }

</style>