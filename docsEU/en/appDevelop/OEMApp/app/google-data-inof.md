# Fill in Data Safety Questionnaire (Google Play)


#### **1. Background**

According to Google Play policy requirements: By July 20, 2022, all developers must declare how their apps published on Google Play collect and process user data, including specific data collection types (fields), the purpose and scenario of each data type, whether it is shared with third parties, and whether users can refuse to provide such information. The filled-in content will be displayed to users on the app's download page in the app store.

#### **2. Impact**

After July 20, 2022, apps without the "Data safety" information will be rejected for launch or update.

#### **3. Suggestion**

**1) Confirm in Advance**

The information filled in by developers on Google Play will be displayed to users. Please exercise caution.

**2) Consistency**

The filled-in content should be consistent with the information disclosed in the app's privacy policy. If the actual data collection fields are more than what is disclosed in the privacy policy, please inform the legal team accordingly. The privacy policy content may need to be adjusted after evaluation by the legal team.

**3) Accuracy**

Please fill in the information based on the actual data collection and use of the app. If Google Play finds that a developer has provided false information when providing data and violated relevant policies, the developer will be required to correct it or face disciplinary measures (blocking updates or taking down the app).

#### **4. Steps and Question Analysis**

**Step 1: Overview**

<a data-fancybox title="img" href="/en/appDevelop/oemapp/googledata/googledata1.png">![image](/en/appDevelop/oemapp/googledata/googledata1.png)</a>

[Suggestion] This section is a page where Google provides developers with rules and guidance so that developers understand the content of the statement that needs filling in and exemption clauses. Please read this part.

**Step 2: Data Collection and Security**

<a data-fancybox title="img" href="/en/appDevelop/oemapp/googledata/googledata2.png">![image](/en/appDevelop/oemapp/googledata/googledata2.png)</a>

[Suggestion] Most apps have data collection activities and transmit data via HTTPS. You can select "Yes" (The selections are for reference only. Please select the option according to the actual situation of the app if there are special circumstances). MASA is a program that is enabled by Google to assess the app for security and privacy vulnerabilities based on industry standards. Confirm whether the certificate has been obtained according to actual business conditions.

**Step 3: Data Types**

<a data-fancybox title="img" href="/en/appDevelop/oemapp/googledata/googledata3.png">![image](/en/appDevelop/oemapp/googledata/googledata3.png)</a>

[Suggestion] In this section, you need to select the collected fields based on the actual data collection of the app. It is recommended to use the table below to confirm the collection status offline with each party before selecting online.

| Category                    | **Data Type**                  | **Description**                                                                                                                                                                                                                                      | **Whether to Collect (Example)** |
| :-------------------------- | :----------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------- |
| Location                    | Approximate location           | The physical location of an area greater than or equal to **3** square kilometers where the user or device is located, such as the city where the user is located or the location provided by the **Android** **ACCESS_COARSE_LOCATION** permission. | √                                |
|                             | Precise location               | The physical location of the user or device within an area less than **3** square kilometers, such as the location provided by the **Android ACCESS_FINE_LOCATION** permission.                                                                      | √                                |
| Personal info               | Name                           | How users call themselves, such as the first or last name, or nickname.                                                                                                                                                                              | √                                |
|                             | Email address                  | The user's email address.                                                                                                                                                                                                                            | √                                |
|                             | **User IDs**                   | Identifiers that relate to an identifiable user. For example, an **account ID**, account number, or account name.                                                                                                                                    | √                                |
|                             | Address                        | The user's address, such as a mailing or home address.                                                                                                                                                                                               | √                                |
|                             | Phone number                   | The user's phone number.                                                                                                                                                                                                                             | √                                |
|                             | Race and ethnicity             | Information about the user's race or ethnicity.                                                                                                                                                                                                      | ...                              |
|                             | Political or religious beliefs | Information about the user's political or religious beliefs.                                                                                                                                                                                         | ...                              |
|                             | Sexual orientation             | Information about the user's sexual orientation.                                                                                                                                                                                                     | ...                              |
|                             | Other info                     | Any other personal information such as date of birth, gender identity, veteran status, etc.                                                                                                                                                          | ...                              |
| Financial info              | User payment info              | Information about the user's financial accounts, such as credit card number.                                                                                                                                                                         | ...                              |
|                             | Purchase history               | Information about purchases or transactions the user has made.                                                                                                                                                                                       | √                                |
|                             | Credit score                   | Information about the user's credit. For example, the credit history or credit score.                                                                                                                                                                | ...                              |
|                             | Other financial info           | Any other financial information, such as the salary or debts.                                                                                                                                                                                        | ...                              |
| Health and fitness          | Health info                    | Information about the user's health, such as medical records or symptoms.                                                                                                                                                                            | ...                              |
|                             | Fitness info                   | Information about the user's fitness, such as exercise or other physical activities.                                                                                                                                                                 | √                                |
| Messages                    | Emails                         | The user's emails, including the email subject line, sender, recipients, and the content of the email.                                                                                                                                               | ...                              |
|                             | SMS or MMS                     | The user's text messages, including the sender, recipients, and the content of the message.                                                                                                                                                          | ...                              |
|                             | Other in-app messages          | Any other types of messages. For example, instant messages or chat content.                                                                                                                                                                          | ...                              |
| Photos and videos           | Photos                         | The user's photos.                                                                                                                                                                                                                                   | √                                |
|                             | Videos                         | The user's videos.                                                                                                                                                                                                                                   | √                                |
| Audio files                 | Voice or sound recordings      | The user's voice, such as a voicemail or a sound recording.                                                                                                                                                                                          | √                                |
|                             | Music files                    | The user's music files.                                                                                                                                                                                                                              | ...                              |
|                             | Other audio files              | Any other audio files the User created or provided.                                                                                                                                                                                                  | ...                              |
| Files and docs              | Files and docs                 | The user's files or documents, or information about them, such as file names.                                                                                                                                                                        | ...                              |
| Calendar                    | Calendar events                | Information from the user's calendar, such as events, event notes, and attendees.                                                                                                                                                                    | √                                |
| Contacts                    | Contacts                       | Information about the user's contacts, such as contact names, message history, and social graph information like usernames, contact recency, contact frequency, interaction duration, and call history.                                              | √                                |
| App activity                | App interactions               | Information about how the user interact with the app. For example, the visit frequency or touch targets of a page.                                                                                                                                   | √                                |
|                             | In-app search history          | Information about what the user has searched for in the app.                                                                                                                                                                                         | √                                |
|                             | Installed apps                 | Information about the apps installed on the user's device.                                                                                                                                                                                           | √                                |
|                             | Other user-generated content   | Any other user-generated content that is not listed here, or in any other section. For example, user profiles, notes, or open-ended responses.                                                                                                       | √                                |
|                             | Other actions                  | Any other activity or actions in-app not listed here, such as gameplay, likes, and dialog options.                                                                                                                                                   | √                                |
| Web browsing                | Web browsing history           | Information about the websites the user has visited.                                                                                                                                                                                                 | √                                |
| App info and performance    | Crash logs                     | Crash data from the app. For example, the number of times the app has crashed on the device or other information directly related to a crash.                                                                                                        | √                                |
|                             | Diagnostics                    | Information about the performance of the app on the device. For example, battery life, loading time, latency, framerate, or any technical diagnostics.                                                                                               | √                                |
|                             | Other app performance data     | Any other app performance data not listed here.                                                                                                                                                                                                      | √                                |
| **Device** or **other IDs** | **Device** or **other IDs**    | Identifiers that relate to an individual device, browser, or app. For example, an **IMEI** number, **MAC** address, **Widevine** Device **ID**, **Firebase** installation **ID**, or advertising identifier.                                         | √                                |

[**Note**] Developers do not need to disclose data accessed by an app as "collected" in the Data safety section if:

* **On-device access/processing**: The disclosure is **unnecessary** if the app-accessed user data is processed locally on the user's device only and will not be sent out off the user's device.
* **End-to-end encryption**: The disclosure is also **unnecessary** if user data is sent out off the device but is unreadable by anyone other than the sender and recipient (including you) after end-to-end encryption. (You must ensure no intermediaries, including the developer, can read the encrypted data, and only the sender and recipient have the keys required.)

**Step 4: Data Usage and Handling**

In this section, **Google** requires developers to explain the usage of each data type selected in the previous step, that is: **Each field selected above needs to be explained one by one in this section.** The explanation includes "Is this data collected, shared, or both?", "Is this data processed ephemerally?", "Is this data required for your app, or can users choose whether it's collected?" and "Why is this user data collected?"

<a data-fancybox title="img" href="/en/appDevelop/oemapp/googledata/googledata4.png">![image](/en/appDevelop/oemapp/googledata/googledata4.png)</a>

[Suggestion]

* "Is this data collected, shared, or both?": Select according to the description of data sharing in the privacy policy.
* "Is this data required for your app, or can users choose whether it's collected?": For data types collected using system permissions (such as location, calendar and contacts), if the app has met compliance requirements in China, or has been rectified according to the compliance baseline requirements, this item should be selected as "**Users can choose whether this data is collected**".
* [**Note**] The following data transfer types do not need to be disclosed as “sharing”:
* Service providers. Transferring user data to a "service provider" that processes it on behalf of the developer. ("Service provider" means an entity that processes user data on behalf of the developer and based on the developer’s instructions. )
* Legal purposes. Transferring user data for specific legal purposes, such as in response to a legal obligation or government requests.
* **User-initiated action or prominent disclosure and user consent.** Transferring user data to a third party based on a specific user-initiated action, where the user reasonably expects the data to be shared, or based on a prominent in-app disclosure and consent that meets the requirements described in [User Data policy](https://support.google.com/googleplay/android-developer/answer/10144311).
* **Anonymous data.** Transferring user data that has been fully anonymized so that it can no longer be associated with an individual user. 

**Step 5: Preview**

After answering all questions, the "Store listing preview" section previews the information that will be shown to users on Google Play based on the form answers you've provided. Review this information.

<a data-fancybox title="img" href="/en/appDevelop/oemapp/googledata/googledata5.png">![image](/en/appDevelop/oemapp/googledata/googledata5.png)</a>

You can export your form responses to a **CSV** file. Having reviewed all the information, if you're ready to submit your completed form, select **Save**. Once the form is submitted, all the **App** data safety declaration work is completed.
