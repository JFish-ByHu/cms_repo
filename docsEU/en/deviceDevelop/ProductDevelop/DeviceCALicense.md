# Device CA Certificate

To ensure that an uploaded CA certificate is legally owned and can be used, it must be verified.

## Upload CA

### Procedures

1.Log in to the Developer Center, and click the "Product Development" in the top left corner. Then select "**Device CA Certificate**" from the drop-down box to view the CA certificate list.

<a data-fancybox title="img" href="/en/guide/clip_image002.png">![img](/en/guide/clip_image002.png)</a>

2.Click "**Upload CA**" to upload the superior CA certificate that issues the device certificate. The certificate file must be in CER, CET or PEM format and the file size cannot exceed 1M.

Requirements for a device CA certificate:

* It should be in DER or PEM format.

* Its version should be 3.

* It must be issued by the superior CA.

* It should have extensions of Authority Key Identifier, Subject Key Identifier, and Basic Constraints.

* It must have extensions of Authority Key Identifier and Subject Key Identifier.

## Verify CA Certificate

To ensure that an uploaded CA certificate is legally owned and can be used, it must be verified.

### Procedures

1.After uploading the CA certificate successfully, click "**Verify Certificate**" on the device CA certificate list.

2.Copy the randomly generated verification code in the pop-up "Certificate Verification" window.

<a data-fancybox title="img" href="/en/guide/clip_image004.png">![img](/en/guide/clip_image004.png)</a>

Note: The verification code is valid for seven days. Please complete the verification before the code expires. If necessary, you can generate a new verification code by clicking "**Generate Verification Code**".

3.Use OpenSSL tool and run the following command to generate a key pair for certificate verification.

openssl genrsa -out verificationCert.key 2048

4.Use the above verification code to generate a CSR file by running the following command.

openssl req -new -key verificationCert.key -out verificationCert.csr

Note: When generating the CSR file, you should use the above verification code as the Common Name.

5.Create a verification certificate by using the CA certificate, CA certificate Secret and the CSR file generated in the last step.

openssl x509 -req -in verificationCert.csr -CA rootCA.cer -CAkey rootCA.key -CAcreateserial -out verificationCert.crt -days 36500 -sha256

Note: rootCA.cer and rootCA.key are the CA certificate key pair files required when you upload the CA certificate to Developer Center. "-days" indicates the validity period of the certificate, which can be adjusted based on your specific service scenarios.

6.Upload the verification certificate to complete device CA certificate verification.

<a data-fancybox title="img" href="/en/guide/clip_image006.png">![img](/en/guide/clip_image006.png)</a>

