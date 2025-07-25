# Configure Cloud Push Service

## **1.	Preparation**

[Register](https://account.aliyun.com/register/qr_register.htm) an Alibaba Cloud account.

## **2. Create an AccessKey Pair for a RAM User**

### **Prerequisites**

You can use one of the following accounts to create an AccessKey pair for a RAM user:

● You can use the Alibaba Cloud account (main account) to which the RAM user belongs.<br>
●	You can use a RAM user who has administrative rights. The RAM user is attached to the AliyunRAMFullAccess policy.<br>
●	You can use a RAM user that is granted the permissions to manage AccessKey pairs. For more information about how to grant a RAM user the permission to manage AccessKey pairs, see [Manage security settings of RAM users](https://help.aliyun.com/zh/ram/user-guide/manage-security-settings-of-ram-users#task-188786).


### **Limits**

●	An AccessKey Secret for a RAM user is displayed only after you click “Create AccessKey”. You cannot query the AccessKey Secret in subsequent operations. Record and keep your AccessKey Secret confidential. If an AccessKey pair is leaked or lost, you must create another AccessKey pair.<br>
●	You can create a maximum of two AccessKey pairs for a RAM user.


### **Procedure**

1.	Log in to [RAM console](https://ram.console.aliyun.com/?spm=a2c4g.11186623.0.0.68036543yhvBry).
2.	In the left-side navigation pane, choose “Identities” > “Users”.
3.	On the “Users” page, click the username of the RAM user that you want to manage.
4.	In the “User AccessKey” section, click “Create AccessKey”.
5.	Please complete the security verification as prompted.
6.	In the “Create AccessKey” dialog, view the AccessKey ID and AccessKey Secret.
7.	You can click “Download CSV File” to download the AccessKey pair. Click “Copy” to copy the AccessKey pair.
8.	Click “OK”.


## **3. Configure OEM App**

1.	Log in to <a href="https://core.acceleronix.io"  target="_blank">Developer Center</a>.
2.	In the left navigation pane, click “App Development” > “OEM App” > “Launch Configuration”.
3.	On the “Launch Configuration” page, select the OEM app you want to configure.
4.	Click the “Push Service” tab.
5.	Configure AccessKey ID and AccessKey Secret for the server.

