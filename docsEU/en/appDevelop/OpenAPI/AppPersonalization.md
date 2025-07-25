# **Personalized Configuration**

Developer Center supports brand customization of content delivered to app users via SMS, voice calls, and emails.

Configuration path: **"Personal Center"** -> **"Third-party Configuration"**

## **SMS Configuration**

SMS configuration is used to configure verification code SMS signatures and templates for app user operations such as mobile number registration, verification code login, and password recovery.

### **Operation Steps**

1. Click "**Add**" in "**SMS Configuration**", enter Alibaba Cloud's AccessKey and AccessSecret, and provide an account name to complete the account addition.

2. Click "**Validate**" to validate the desired SMS account. Only one account can be set as validated at a time.

3. After configuration, you can set up SMS signatures and templates for various usage scenarios in the "**SMS Template Configuration**" section below.

4. In addition to the default signature and template, you can also configure personalized signatures and templates for each App.

5. Before configuring SMS signatures and SMS templates, please ensure that the content has been approved on Alibaba Cloud's SMS platform. Otherwise, the configuration cannot be added or used.

## **Voice Call Configuration**

Phone call configuration is used to configure the voice call template for app users receiving phone call alerts.

### **Operation Steps**

1. Click "**Add**" in "**Voice Call Configuration**", enter Alibaba Cloud's AccessKey and AccessSecret, and provide an account name to complete the account addition.
2. Click "**Validate**" to validate the desired voice call account. Only one account can be set as validated at a time.
3. After configuration, you can set up voice templates for various usage scenarios in the "**Voice Template Configuration**" section below.
4. Before configuring voice templates, please ensure that the content has been approved on Alibaba Cloud's phone call platform. Otherwise, the configuration cannot be added or used.

## **Email Configuration**

Email configuration is used to configure verification code email templates for app user operations such as email account registration, verification code login, and password recovery.

### **Operation Steps**

1. Click "**Add**" in "**Email Configuration**", enter your email account name, SMTP server address/port, SMTP account/password, and whether to enable encryption.
2. Click "**Validate**" to validate the desired email account. Only one account can be set as validated at a time.
3. After configuration, you can set up email templates for various usage scenarios in the email template configuration section below.
4. In addition to the default template, you can also configure personalized templates for each App.
5. Template content must be edited in HTML format.  You can refer to examples for template guidelines. Verification code templates must include the variable ${code}.

## **Official Account Configuration**

Official account configuration is used to configure push accounts for mini-program users who need to receive device alerts via official accounts.

### **Operation Steps**

1. Click "**Add**", enter the official account AppID and AppSecret. The account can only be added if the ID and secret are verified.
2. After successful addition, when adding official account push rules, you can select the approved message templates under this account and configure values for the template variables.
3. Once an official account is added, the account information cannot be modified. If an official account is deleted, all configured push rules under it will become invalid.

