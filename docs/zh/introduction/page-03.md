# 名词解释

本章介绍开发者中心中相关的名词解释

<table class="relative-table wrapped confluenceTable tablesorter tablesorter-default stickyTableHeaders" style="width: 100%; padding: 0px;" role="grid" resolved="">
    <colgroup>
        <col style="width: 9.72322%;">
        <col style="width: 90.216%;">
    </colgroup>
    <thead class="tableFloatingHeaderOriginal">
        <tr role="row" class="tablesorter-headerRow">
            <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="0" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="名词: No sort applied, activate to apply an ascending sort" style="user-select: none;">
                <div class="tablesorter-header-inner">名词</div>
            </th>
            <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="1" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="描述: No sort applied, activate to apply an ascending sort" style="user-select: none;">
                <div class="tablesorter-header-inner">描述</div>
            </th>
        </tr>
    </thead>
    <thead class="tableFloatingHeader" style="display: none;">
        <tr role="row" class="tablesorter-headerRow">
            <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="0" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="名词: No sort applied, activate to apply an ascending sort" style="user-select: none;">
                <div class="tablesorter-header-inner">名词</div>
            </th>
            <th class="confluenceTh tablesorter-header sortableHeader tablesorter-headerUnSorted" data-column="1" tabindex="0" scope="col" role="columnheader" aria-disabled="false" unselectable="on" aria-sort="none" aria-label="描述: No sort applied, activate to apply an ascending sort" style="user-select: none;">
                <div class="tablesorter-header-inner">描述</div>
            </th>
        </tr>
    </thead>
    <tbody aria-live="polite" aria-relevant="all">
        <tr role="row">
            <td colspan="1" class="confluenceTd">Developer Center</td>
            <td colspan="1" class="confluenceTd">Developer Center，开发者中心。</td>
        </tr>
        <tr role="row">
            <td class="confluenceTd">产品</td>
            <td class="confluenceTd">设备的集合，通常是将具有相同功能定义（物模型）的设备归属到一个产品下。开发者中心为每个产品颁发全局唯一的ProductKey。该产品下所有设备将会烧录同一个ProductKey进行设备连接IoT平台的认证与通信。</td>
        </tr>
        <tr role="row">
            <td class="confluenceTd">设备</td>
            <td class="confluenceTd">归属于某个产品下的具体设备。设备使用DeviceKey以及所属产品ProductKey连接开发者中心。</td>
        </tr>
        <tr role="row">
            <td colspan="1" class="confluenceTd">设备激活码</td>
            <td colspan="1" class="confluenceTd">设备接入开发者中心后会消耗一个设备激活码。若是蓝牙设备，在App端首次绑定后同样消耗一个激活码。</td>
        </tr>
        <tr role="row">
            <td class="confluenceTd">ProductKey</td>
            <td class="confluenceTd">开发者中心为产品颁发的全局唯一产品标识。在设备认证时用于区分产品信息。</td>
        </tr>
        <tr role="row">
            <td class="confluenceTd">ProductSecret</td>
            <td class="confluenceTd">由开发者中心颁发的产品密钥，与ProductKey成对出现。在设备认证时用于对设备合法性进行鉴权。</td>
        </tr>
        <tr role="row">
            <td class="confluenceTd">DeviceKey</td>
            <td class="confluenceTd">由设备生成的设备标识，一般使用模组IMEI或MAC地址作为DeviceKey，同一产品内具有唯一性。</td>
        </tr>
        <tr role="row">
            <td class="confluenceTd">DeviceSecret</td>
            <td class="confluenceTd">平台通过设备认证后，会为颁发设备密钥即DeviceSecret。设备后续将使用DeviceSecret登录平台。</td>
        </tr>
        <tr role="row">
            <td class="confluenceTd">动态认证</td>
            <td class="confluenceTd">动态认证也称一型一密。同一产品下所有设备烧录相同的ProductKey和ProductSecret。设备发送认证请求时，开发者中心对其携带的ProductKey和ProductSecret进行认证，认证通过后下发DeciceSecret。设备后续使用该信息与开发者中心建立连接。</td>
        </tr>
        <tr role="row">
            <td class="confluenceTd">静态认证</td>
            <td class="confluenceTd">静态认证也称一机一密。需要在平台完成设备导入操作并获取DeviceSecret，设备生产阶段进行DeviceSecret预烧录后，设备方可登录平台，同时平台将拒绝DeviceKey、DeviceSecret不匹配的设备进行认证操作。</td> 
        </tr>
        <tr role="row">
            <td class="confluenceTd">Access Key/Access Secret</td>
            <td class="confluenceTd">开发者中心对第三方开发者提供Open API以及AMQP消息订阅能力，使用该功能前需在平台创建SaaS应用，系统将分配AccessKey/AccessSecret 作为使用这些功能的鉴权令牌。</td>
        </tr>
        <tr role="row">
            <td class="confluenceTd">消息订阅</td>
            <td class="confluenceTd">消息订阅是开发者中心基于AMQP标准协议实现的数据订阅功能。</td>
        </tr>
        <tr role="row">
            <td colspan="1" class="confluenceTd">OTA</td>
            <td colspan="1" class="confluenceTd">Over-the-Air，空中升级技术，开发者中心支持对设备模组固件、MCU程序进行空中升级。</td>
        </tr>
        <tr role="row">
            <td colspan="1" class="confluenceTd">物模型</td>
            <td colspan="1" class="confluenceTd">设备在IoT平台的功能描述，包括设备的属性、服务和事件。开发者中心通过定义一种物的描述语言来描述物模型，称之为TSL（即 Thing Specification Language），采用JSON格式，您可以根据TSL组装上报、下发设备的数据。</td>
        </tr>
        <tr role="row">
            <td colspan="1" class="confluenceTd">App</td>
            <td colspan="1" class="confluenceTd">通常指手机端应用，提供给终端用户进行账号注册、设备绑定、设备远程管理等功能。</td>
        </tr>
        <tr role="row">
            <td colspan="1" class="confluenceTd">终端用户</td>
            <td colspan="1" class="confluenceTd">指使用手机App的终端消费者。</td>
        </tr>
        <tr role="row">
            <td colspan="1" class="confluenceTd">用户域</td>
            <td colspan="1" class="confluenceTd">
                用于对终端用户进行分组，不同App用户归属于不同的用户域下，厂商可通过用户域限制App可管理的产品类型范围。
            </td>
        </tr>
    </tbody>
</table>

