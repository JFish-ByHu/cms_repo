# 设备CA证书

本文介绍如何上传设备CA证书，支持设备使用X.509认证方式接入。

## 上传CA证书

### **操作步骤**

1.登录开发者中心后，点击左侧菜单“产品开发”→ “设备CA证书”，出现证书列表。

<a data-fancybox title="img" href="/zh/guide/clip_image002.png">![img](/zh/guide/clip_image002.png)</a>

2.通过右侧 **“上传CA证书”** 按钮，上传用于签发设备证书的直接上级CA。证书文件必须1M以内，并以.cer、.crt和.pem结尾。

对设备CA证书有以下要求：

* 证书格式为DER格或PEM格式；

* 证书Version为3；

* 证书是设备证书的直接上级CA；

* 证书需有Authority Key Identifier、Subject Key Identifier、Basic Constraints拓展；

* 设备证书需保证有Authority Key Identifier、Subject Key Identifier拓展。

## 验证CA证书

对于已上传的CA证书，需要证明您合法拥有此CA证书，完成验证操作后方可使用。

### **操作步骤**

1.上传成功后，在设备CA证书列表中点击“**验证证书**”。

2.在验证证书弹框中，复制随机生成的验证码。

<a data-fancybox title="img" href="/zh/guide/clip_image004.png">![img](/zh/guide/clip_image004.png)</a>

备注：验证码的有效期为7天，请及时完成验证。您可通过“**生成验证码**”按钮获取新的验证码。

3.使用OpenSSL工具为验证证书生成密钥对。

openssl genrsa -out verificationCert.key 2048

4.使用上述验证码创建CSR。

openssl req -new -key verificationCert.key -out verificationCert.csr

备注：CSR文件中，Common Name请使用上述验证码。

5.使用CA证书、CA证书私钥和上一步骤中生成的CSR文件创建验证证书。

openssl x509 -req -in verificationCert.csr -CA rootCA.cer -CAkey rootCA.key -CAcreateserial -out verificationCert.crt -days 36500 -sha256

备注：rootCA.cer与rootCA.key为您上传到平台所使用的CA证书密钥对文件。“-days”为该证书的有效天数，您可根据实际业务场景进行调整。

6.上传验证证书，完成设备CA证书验证。

<a data-fancybox title="img" href="/zh/guide/clip_image006.png">![img](/zh/guide/clip_image006.png)</a>

