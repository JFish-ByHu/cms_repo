# Terms

The glossary of terms and expressions on Developer Center is provided in the table below.

<table class="relative-table wrapped confluenceTable tablesorter tablesorter-default stickyTableHeaders" style="width: 100%; padding: 0px;" role="grid" resolved="">
    <colgroup>
        <col style="width: 9.72322%;">
        <col style="width: 90.216%;">
    </colgroup>
    <thead class="tableFloatingHeaderOriginal">
        <tr role="row" class="tablesorter-headerRow">
            <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="0" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Terms: No sort applied, activate to apply an ascending sort" style="user-select: none;">
                <div class="tablesorter-header-inner">Terms</div>
            </th>
            <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="1" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Description: No sort applied, activate to apply an ascending sort" style="user-select: none;">
                <div class="tablesorter-header-inner">Description</div>
            </th>
        </tr>
    </thead>
    <thead class="tableFloatingHeader" style="display: none;">
        <tr role="row" class="tablesorter-headerRow">
            <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="0" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Noun: No sort applied, activate to apply an ascending sort" style="user-select: none;">
                <div class="tablesorter-header-inner">Noun</div>
            </th>
            <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="1" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="Description: No sort applied, activate to apply an ascending sort" style="user-select: none;">
                <div class="tablesorter-header-inner">Description</div>
            </th>
        </tr>
    </thead>
    <tbody aria-live="polite" aria-relevant="all">
        <tr role="row">
            <td colspan="1" class="confluenceTd">Developer Center</td>
            <td colspan="1" class="confluenceTd">Developer Center.</td>
        </tr>
        <tr role="row">
            <td class="confluenceTd">Product</td>
            <td class="confluenceTd">A product is a collection of devices with the same feature definition (TSL model). Developer Center assigns a unique ProductKey to each product. All devices under a product will be flashed with the same ProductKey for authentication and connection to Developer Center.</td> 
        </tr>
        <tr role="row">
            <td class="confluenceTd">Device</td>
            <td class="confluenceTd">A device is a physical entity associated with a product. Each device connects to Developer Center with a unique DeviceKey and ProductKey assigned to the product it is associated with.</td>
        </tr>
        <tr role="row">
            <td colspan="1" class="confluenceTd">Device Activation Code</td>
            <td colspan="1" class="confluenceTd">Once a device is connected to the Developer Center, a device activation code will be consumed. For Bluetooth devices, one activation code will be consumed upon the first binding of the device to Developer Center on the application.</td>
        </tr>
        <tr role="row">
            <td class="confluenceTd">ProductKey</td>
            <td class="confluenceTd">It is an unique product identifier assigned by Developer Center. ProductKeys are required to differentiate product information during device authentication.</td>
        </tr>
        <tr role="row">
            <td class="confluenceTd">ProductSecret</td>
            <td class="confluenceTd">It is a private key assigned by Developer Center for each product. A ProductSecret is used in pair with a ProductKey. It is used for authenticating device legitimacy during device authentication.</td>
        </tr>
        <tr role="row">
            <td class="confluenceTd">DeviceKey</td>
            <td class="confluenceTd">It is a device identifier generated by Device. Normally, IMEI or the MAC address of the module is the DeviceKey.It is unique within the same product.</td>
        </tr>
        <tr role="row">
            <td class="confluenceTd">DeviceSecret</td>
            <td class="confluenceTd">It is a private key issued by Developer Center once the device passes Developer Center authentication. DeviceSecret is required when a device connects to Developer Center later.</td>
        </tr>
        <tr role="row">
            <td class="confluenceTd">Dynamic Authentication</td>
            <td class="confluenceTd">Dynamic authentication is also called the "unique-ProductSecret-per-product authentication". The ProductKey and ProductSecret of a product can be flashed into all devices under the same product. When a device submits an authentication request, Developer Center authenticates the device based on its ProductKey and ProductSecret. If the authentication succeeds, Developer Center issues the DeciceSecret information to the device. Then, the device uses the issued information to connect to Developer Center.</td>
        </tr>
        <tr role="row">
            <td class="confluenceTd">Static Authentication</td>
            <td class="confluenceTd">Static authentication is also called "unique-DeviceSecret-per-device authentication". The DeviceSecret is issued by the Developer Center after the device is added to it. During manufacturing, the DeviceSecret must be flashed into the device; otherwise, the device will not be able to connect to Developer Center. If the DeviceKey and the DeviceSecret are not paired, the device authentication will fail.</td> 
        </tr>
        <tr role="row">
            <td class="confluenceTd">Access Key/Access Secret</td>
            <td class="confluenceTd">Developer Center provides OpenAPIs and AMQP message subscription capabilities for third-party developers. Access to the features is contingent on creating SaaS application on Developer Center. Developer Center assigns an AccessKey/AccessSecret, which acts as an authentication token.</td>
        </tr>
        <tr role="row">
            <td class="confluenceTd">Message Subscription</td>
            <td class="confluenceTd">Message subscription is a server-side message subscription implemented with the Advanced Message Queuing Protocol (AMQP).</td>
        </tr>
        <tr role="row">
            <td colspan="1" class="confluenceTd">OTA</td>
            <td colspan="1" class="confluenceTd">Over-the-Air. Developer Center supports upgrading device or module firmware and MCU programs over the air.</td>
        </tr>
        <tr role="row">
            <td colspan="1" class="confluenceTd">TSL Model</td>
            <td colspan="1" class="confluenceTd">The features of a device in Developer Center include device property, service and event. Developer Center describes objects through TSL (Thing Specification Language). It uses JSON format, and you can assemble, report, and issue device data according to TSL.</td>
        </tr>
        <tr role="row">
            <td colspan="1" class="confluenceTd">App</td>
            <td colspan="1" class="confluenceTd">An application usually refers to the application on a mobile phone corresponding to a product. The application provides account registration, device binding, device remote management and other features to end users.</td>
        </tr>
        <tr role="row">
            <td colspan="1" class="confluenceTd">End User</td>
            <td colspan="1" class="confluenceTd">Customers who use mobile apps.</td>
        </tr>
        <tr role="row">
            <td colspan="1" class="confluenceTd">User Domain</td>
            <td colspan="1" class="confluenceTd">
               A user domain groups end users based on the App they use. Manufacturers can limit the range of product types that can be managed by an App through user domains.
            </td>
        </tr>
    </tbody>
</table>






