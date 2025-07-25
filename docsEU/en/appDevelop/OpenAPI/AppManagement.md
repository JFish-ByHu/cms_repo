# App Management

App, short for application, typically refers to mobile application software or mobile client.

When you need to control or display devices on the App, develop the App based on OpenAPI or SDK.

## Create an App

Click "**Create an App**" in "**App Development**"->"**App SDK**", enter the App name and description to create an App.

After the App is successfully created, a user domain will be assigned. The user domain is used to group end users, where users from different Apps belong to different user domains.

On the "**App Details**" page, you can obtain the user domain and user domain password, which are required to get the user Token when using registration/login APIs. 

## Associate Products

You can authorize your enterprise products to the App through "**Associate Product**" feature. Only associated products can be discovered, bound and controlled by the App.

## Custom Account System

If you already have your own end user system, Developer Center supports integration through OAuth 2.0 authentication.

You can add relevant configurations on the "**App Details**" page and fill in the AppKey, AppSecret, and URL of your existing end user system.

During use, you need to obtain an AuthCode from your authentication server on the App login page and submit it to Developer Center. Developer Center will then send an HTTP POST request to your end-user system using the provided AppKey to obtain an AccessToken. If verification succeeds, the App user can access the Developer Center's features.

## Delete an App

If the App is no longer needed, you can delete it by clicking **"Delete"** in the operation column.

Deleted data cannot be recovered, so please proceed with caution.