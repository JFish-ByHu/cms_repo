# AMQP Client Integration Guide

AMQP is used for SaaS system integration, enabling SaaS applications to receive device uplink data in real-time.

## **Protocol Version Description**

For detailed information about the AMQP protocol standard, please refer to the [AMQP Protocol Standard](https://www.amqp.org/?spm=a2c4g.11186623.0.0.5d12fbc7kRjGQ2).  AMQP subscription on Developer Center only supports the AMQP 1.0 protocol standard.

For creating client connections, you can refer to the documentation [Client Documentation - RabbitMQ](https://www.rabbitmq.com/clients.html).

## Prerequisites

1. Before using the AMQP service, you need to click "**Create a SaaS Application**" under the "**SaaS Development**" -> "**SaaS Management**" menu.
2. On the "**SaaS Development**" -> "**Message Subscription**" -> "**Message Queue**" page, create or use an existing queue, and obtain the queue name which is required for SDK initialization.
3. On the "**SaaS Development**" -> "**Message Subscription**" -> "**Subscription List**" page, create a product-level subscription and configure the required event types as needed. (Note: Different data levels support different subscribable event types.)
4. If you need to manage message subscription features through the SaaS application, please activate and authorize the message subscription service package on "**SaaS Development**" -> "**Service**" page.
5. Obtain the AccessKey and AccessSecret, which are required for SDK initialization.

## **Connection Authentication Process**

1.First, the AMQP client establishes a TCP connection with the Developer Center through a three-way handshake, followed by a TLS handshake verification.

To ensure security, the receiving party must use TLS encryption, and unencrypted TCP transmission is not supported.

2.The client requests to establish a connection. The connection authentication method is PLAIN-SASL, which can be understood as username and password authentication.

After the Developer Center authenticates the username and password, the connection is established.

In addition, according to the AMQP protocol, when establishing a connection, the client also needs to include the heartbeat interval in the Open frame, which is the idle-time-out parameter of the AMQP protocol. The heartbeat interval unit is milliseconds, with a value range of 30,000 to 60,000. If there is no frame communication on the Connection beyond the heartbeat interval, the Developer Center will close the connection.

3.The client initiates a request to the Developer Center to establish a Receiver Link (a one-way channel through which the Developer Center pushes data to the client).

After successfully establishing a connection, you need to complete the Receiver Link establishment within 15 seconds, otherwise, the Developer Center will close the connection.

After establishing the Receiver Link, the client successfully connects to the Developer Center.

## **Connection Configuration Guide**

The connection address and authentication parameters for AMQP client access to the Developer Center are as follows:

| Name          | Description                                                  |
| :------------ | :----------------------------------------------------------- |
| connectionUrl | Client connection address.<br>For China region, enter amqps://iot-amqp.quectelcn.com:5671/quec-open<br>For Europe region, enter amqps://iot-amqp.acceleronix.io:5671/quec-open |
| username      | Username used when creating the connection, see "**Username Generation Guide**" below for generation method. |
| password      | Password used when creating the connection, generated from username and AccessSecret, see "**Password Generation Guide**" below for generation method. |
| queueName     | Queue name for connection, which can be obtained from the "**SaaS Development**" -> "**Message Subscription**" -> "**Message Queue**" page. |

## **Username and Password Generation Methods**

**Username Generation Parameters**

| Name        | Description      | Type   | Description                                                  |
| :---------- | :--------------- | :----- | :----------------------------------------------------------- |
| ver         | Version Number   | String | Fixed to "1"                                                 |
| auth_mode   | Type             | String | Fixed to "accessKey"                                         |
| sign_method | Signature Method | String | Fixed to "sha256"                                            |
| access_key  | AccessKey        | String | The AccessKey created by the user can be obtained from the "**SaaS Details**" page. |
| timestamp   | Timestamp        | Long   | Precision in milliseconds. Please note that the time difference from standard time must be within 10 minutes. |

**Username Generation Guide**

The username fields are formed in key=value format, with fields joined using the "&" character. There is no specific order requirement for the fields.

Example:

**username**
```java
ver=1&auth_mode=accessKey&sign_method=sha256&access_key=${AccessKey}&timestamp=${timestamp}
```

**Password Generation Guide**

The password is generated by concatenating the username ${username} with the credential secret ${AccessSecret} and then applying the SHA256 hash algorithm.

Example:

**password**
```java
sha256(${username}${AccessSecret})
```

## **Java Integration Example**

**Development Environment**

This example uses JDK 1.8 as the development environment.

**Add Maven Dependencies**
```java
<dependency>
    <groupId>commons-codec</groupId>
    <artifactId>commons-codec</artifactId>
    <version>1.15</version>
</dependency>
<dependency>
    <groupId>com.rabbitmq</groupId>
    <artifactId>amqp-client</artifactId>
    <version>5.10.0</version>
</dependency>
```

**Example Code** 

```java
package amqp.rabbit.client.demo;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.DeliverCallback;
import com.rabbitmq.client.impl.CredentialsProvider;
import com.rabbitmq.client.impl.DefaultCredentialsRefreshService;
import org.apache.commons.codec.digest.DigestUtils;

import java.nio.charset.StandardCharsets;
import java.time.Duration;
import java.util.Calendar;
import java.util.concurrent.CountDownLatch;


public class RabbitmqClientDemo {

    public static void main(String[] args) {
        String accessKey = "${accessKey}";
        String accessSecret = "${accessSecret}";
        String url = "${connectionUrl}", queueName = "${queueName}";
        // Timestamp used for connection authentication, which needs to be refreshed to the current time when reconnecting.
        long timestamp = System.currentTimeMillis();
        String username = String.format("ver=1&auth_mode=accessKey&sign_method=sha256&access_key=%s&timestamp=%s", accessKey, timestamp);
        String password = DigestUtils.sha256Hex(username + accessSecret).toLowerCase();
        // AccessCredentials refresh cycle, which cannot be greater than 10 minutes.
        int RefreshTime = 4;

        try {
            CountDownLatch latch = new CountDownLatch(1);
            ConnectionFactory factory = new ConnectionFactory();
            factory.setUri(url);
            factory.setUsername(username);
            factory.setPassword(password);
            factory.useSslProtocol();
            factory.setAutomaticRecoveryEnabled(true);
            factory.setTopologyRecoveryEnabled(true);
            factory.setCredentialsProvider(new AccessCredentialsProvider(accessKey, accessSecret, Duration.ofMinutes(RefreshTime)));
            factory.setCredentialsRefreshService(new DefaultCredentialsRefreshService.DefaultCredentialsRefreshServiceBuilder().build());

            try (Connection conn = factory.newConnection(); Channel channel = conn.createChannel()) {
                channel.basicQos(1); // DeliverCallback
                DeliverCallback deliverCallback = (consumerTag, delivery) -> {
                    try {
                        String message = new String(delivery.getBody(), StandardCharsets.UTF_8); // handle
                        System.out.println("Received message: '" + message + "', timestamp: " + System.currentTimeMillis());
                    } finally {
                        channel.basicAck(delivery.getEnvelope().getDeliveryTag(), false);
                    }
                }; // acutoAck true/false

                channel.basicConsume(queueName, false, deliverCallback, consumerTag -> {
                    System.out.println("The consumer is cancelled");
                    latch.countDown();
                });
                latch.await();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

/**
 * Used to refresh AccessCredentials to prevent expiration during reconnection.
 */
class AccessCredentialsProvider implements CredentialsProvider {

    private final String accessKey;
    private final String accessSecret;
    private final Duration expireDuration;

    private String username;
    private String password;

    public AccessCredentialsProvider(String accessKey, String accessSecret, Duration expireDuration) {
        this.accessKey = accessKey;
        this.accessSecret = accessSecret;
        this.expireDuration = expireDuration;
        refresh();
    }

    @Override
    public void refresh() {
        long timestamp= Calendar.getInstance().getTimeInMillis();
        this.username = String.format("ver=1&auth_mode=accessKey&sign_method=sha256&access_key=%s&timestamp=%s", accessKey, timestamp);
        this.password = DigestUtils.sha256Hex(username + accessSecret).toLowerCase();
    }

    @Override
    public String getUsername() {
        return this.username;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public Duration getTimeBeforeExpiration() {
        return this.expireDuration;
    }
}
```