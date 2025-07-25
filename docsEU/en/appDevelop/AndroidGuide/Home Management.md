# Home Management

## Feature Description

The Home SDK is a modular development tool designed for app development in whole-house smart business scenarios, providing access to various modules and interface call capabilities.  

Here, "home" is an abstract concept representing the unit of "house" or "place" in whole-house smart scenarios, used to centrally manage devices, accounts, permissions, and other related information within that scope.  

### Home Management Key Features:  
- Query the user's home list  
- Get all device and group information under a specified home  
- Add, edit, or delete a home  
- Manage home details such as name, location, room list, members, etc.  
- Add and remove a device, and modify device information within a home


## SDK Integration Method

> **Note**
>
> The Home SDK depends on the core library quec-iot-sdk to run. Please integrate the core library according to the *IoT SDK Integration Guide*.

Add dependencies

```groovy
implementation "com.quectel.app.service:quec-smart-home:2.14.0"
```
