<template>
  <table>
    <thead>
      <tr class="header">
        <td class="op_type">Type</td>
        <td class="op_place">API</td>
        <td class="op_des">Description</td>
        <td class="op_vers">Version</td>
        <td class="op_rem">Remarks</td>
      </tr>
    </thead>
    <tbody>
      <!-- 用户管理 -->
      <tr>
        <td valign="top" :rowspan="list.length + 1">End User Management</td>
        <td>
          <a
            href="https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/"
            target="_blank"
            >v2/enduser/enduserapi/alipayAuthLogin</a
          >
        </td>
        <td>Logs in with authenticated Alipay account.</td>
        <td valign="top" :rowspan="list.length + 1">2.6.0</td>
        <td></td>
      </tr>
      <!-- 用户管理列表 -->
      <tr v-for="item of list" :key="item.place">
        <td>
          <a :href="userLink" target="_blank">{{ item.place }}</a>
        </td>
        <td>{{ item.info }}</td>
        <td>{{ item.rem }}</td>
      </tr>
      <!-- 绑定管理 -->
      <tr>
        <td valign="top" :rowspan="bindList.length + 1">Binding Management</td>
        <td>
          <a
            href="https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/%E7%BB%91%E5%AE%9A%20EndUserAPI/batchControlDeviceUsingPOST_1"
            target="_blank"
            >v2/binding/enduserapi/batchControlDevice</a
          >
        </td>
        <td>Controls devices in batches.</td>
        <td valign="top" :rowspan="bindList.length + 1">2.7.0</td>
        <td></td>
      </tr>
      <!-- 绑定管理列表 -->
      <tr v-for="item of bindList" :key="item.place">
        <td>
          <a :href="item.link" target="_blank">{{ item.place }}</a>
        </td>
        <td>{{ item.info }}</td>
        <td>{{ item.rem }}</td>
      </tr>
      <!-- 短信管理 -->
      <tr>
        <td valign="top" :rowspan="noteList.length + 1">SMS Management</td>
        <td>
          <a
            href="https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enduser%20API)#/"
            target="_blank"
            >v2/sms/enduserapi/sendPhoneSmsCode</a
          >
        </td>
        <td>Sends SMS message verification code.</td>
        <td valign="top" :rowspan="noteList.length + 1">2.6.0</td>
        <td></td>
      </tr>
      <!-- 短信管理列表 -->
      <tr v-for="item of noteList" :key="item.place">
        <td>
          <a :href="item.link" target="_blank">{{ item.place }}</a>
        </td>
        <td>{{ item.info }}</td>
        <td>{{ item.rem }}</td>
      </tr>
      <!-- 设备组管理 -->
      <tr>
        <td valign="top" :rowspan="deviceList.length + 1">
          Device Group Management
        </td>
        <td>
          <a
            href="https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/acceptDeviceGroupShareUsingPOST_1"
            target="_blank"
            >v2/devicegroup/enduserapi/acceptDeviceGroupShare</a
          >
        </td>
        <td>The shared party accepts sharing from the device group.</td>
        <td valign="top" :rowspan="deviceList.length + 1">2.6.0</td>
        <td></td>
      </tr>
      <!-- 设备组管理列表 -->
      <tr v-for="item of deviceList" :key="item.place">
        <td>
          <a :href="item.link" target="_blank">{{ item.place }}</a>
        </td>
        <td>{{ item.info }}</td>
        <td>{{ item.rem }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

// 用户管理列表
const list = ref([
  {
    type: "",
    place: "",
    link: "",
    info: "",
    rem: "",
    ver: "",
  },
]);
//   设备组管理列表
const deviceList = ref([
  {
    type: "",
    place: "",
    link: "",
    info: "",
    rem: "",
    ver: "",
  },
]);
//   短信管理列表
const noteList = ref([
  {
    type: "",
    place: "",
    link: "",
    info: "",
    rem: "",
    ver: "",
  },
]);
//   绑定管理列表
const bindList = ref([
  {
    type: "",
    place: "",
    link: "",
    info: "",
    rem: "",
    ver: "",
  },
]);
//   用户管理链接地址
const userLink = ref("");

const datashow = () => {
  userLink.value =
    "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/";
  deviceList.value = [
    {
      type: "",
      place: "v2/devicegroup/enduserapi/addDeviceGroup",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/addDeviceGroupUsingPOST_2",
      info: "Adds a device group.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/devicegroup/enduserapi/addDeviceToGroup",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/addDeviceToGroupUsingPOST_2",
      info: "Adds a device to the device group.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/devicegroup/enduserapi/deleteDeviceGroup",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/deleteDeviceGroupUsingDELETE_2",
      info: "Deletes a device group.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/devicegroup/enduserapi/deleteDeviceToGroup",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/deleteDeviceToGroupUsingDELETE_3",
      info: "Removes a device from the device group.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/devicegroup/enduserapi/deviceGroupInfo",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/deviceGroupInfoUsingGET_2",
      info: "Queries device group details.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/devicegroup/enduserapi/deviceGroupList",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/deviceGroupListUsingGET_2",
      info: "Queries device group list.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/devicegroup/enduserapi/deviceGroupShareUserList",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/deviceGroupShareUserListUsingGET_1",
      info: "The sharer queries the list of shared party of the device group.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/devicegroup/enduserapi/getDeviceGroupList",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/getDeviceGroupListUsingGET_2",
      info: "Queries the device group list according to the device.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/devicegroup/enduserapi/getGroupDeviceList",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/getGroupDeviceListUsingGET_2",
      info: "Queries the device list in the device group.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/devicegroup/enduserapi/owerUserUnshare",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/owerUserUnshareUsingDELETE_1",
      info: "The sharer cancels the device group sharing.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/devicegroup/enduserapi/setDeviceGroup",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/setDeviceGroupUsingPUT_2",
      info: "Changes the device group.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/devicegroup/enduserapi/shareInfo",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/shareInfoUsingPOST_1",
      info: "The sharer sets the shared information of the device group.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/devicegroup/enduserapi/shareUserGetAcceptingDeviceGroupInfo",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/shareUserGetAcceptingDeviceGroupInfoUsingGET_1",
      info: "The shared party queries the received details of the device group.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/devicegroup/enduserapi/shareUserSetDeviceGroupName",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/shareUserSetDeviceGroupNameUsingPOST_1",
      info: "The shared party modifies the name of the shared device group.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/devicegroup/enduserapi/shareUserSetDeviceName",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "The shared party modifies the names of the devices in the shared device group.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/devicegroup/enduserapi/shareUserUnshare",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/shareUserUnshareUsingDELETE_1",
      info: "The shared party cancels the device group sharing.",
      ver: "",
      rem: "",
    },
  ];
  noteList.value = [
    {
      type: "",
      place: "v2/sms/enduserapi/validateInternationalPhone",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EndUserAPI/validateInternationalPhoneUsingPOST_1",
      info: "Verifies the format of the international mobile number.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/sms/enduserapi/validateSmsCode",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EndUserAPI/validateSmsCodeUsingPOST_2",
      info: "Verifies the SMS verification code.",
      ver: "",
      rem: "",
    },
  ];
  bindList.value = [
    {
      type: "",
      place: "v2/binding/enduserapi/bindDeviceBindingCode",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/bindDeviceBindingCodeUsingPOST_1",
      info: "Binds a device with bindingCode",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/bindDeviceBt",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/bindDeviceBtUsingPOST_1",
      info: "Binds a Bluetooth device.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/bindDeviceSn",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/bindDeviceSnUsingPOST_1",
      info: "Binds a device with SN.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/bindDeviceSnImei",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/bindDeviceSnImeiUsingPOST_1",
      info: "Binds a device with SN and IMEI.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/bindDeviceWifi",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/bindDeviceWifiUsingPOST_1",
      info: "Binds a Wi-Fi device.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/changeShareDeviceName",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/changeShareDeviceNameUsingPUT_1",
      info: "Modifies the shared device name.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/controlDevice",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/controlDeviceUsingPOST_1",
      info: "Controls the device.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/deviceBusinessAttributes",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/deviceBusinessAttributesUsingGET_1",
      info: "Queries the business attribute of the device.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/deviceInfo",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/deviceInfoUsingGET_3",
      info: "Queries the device information.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/deviceShareUserList",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/deviceShareUserListUsingGET_1",
      info: "The sharer queries the shared party list of the device.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/getFetchPlan",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/getFetchPlanUsingPOST_1",
      info: "Queries the upgrade plan.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/getGatewayDeviceChildList",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/getGatewayDeviceChildListUsingGET_1",
      info: "Queries the sub-device list of the gateway device.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/ownerUserUnshareDevice",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/ownerUserUnshareDeviceUsingDELETE_1",
      info: "Cancels device sharing by the sharer.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/productTSL",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/productTSLUsingGET_1",
      info: "Queries the TSL model.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/reportUpgradeStatus",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/reportUpgradeStatusUsingPOST_1",
      info: "Reports firmware upgrade status.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/setDeviceInfo",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/setDeviceInfoUsingPUT_1",
      info: "Modifies the device information.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/shareDevice",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/shareDeviceUsingPOST_1",
      info: "The shared party accepts the sharing.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/shareInfo",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/shareInfoUsingPOST_1",
      info: "The sharer sets sharing information.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/shareUserUnshareDevice",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/shareUserUnshareDeviceUsingDELETE_1",
      info: "The shared party cancels the device sharing.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/unbundlingDeviceDk",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/unbundlingDeviceDkUsingDELETE_1",
      info: "Unbinds the device with PK and DK.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/userDeviceList",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/userDeviceListUsingGET_5",
      info: "Queries user device list.",
      ver: "",
      rem: "",
    },
  ];
  list.value = [
    {
      type: "",
      place: "v2/enduser//enduserapi/deleteEmailRelation",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "Removes the association with mailbox.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/deletePhoneRelation",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "Removes the association with mobile number.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/deleteRelationAlipayAuthLogin",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "Removes the association with Alipay authentication login.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/deleteRelationFacebookAuthLogin",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "Removes the association with Facebook authentication login.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/deleteRelationQQAuthLogin",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "Removes the association with QQ authentication login.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/deleteRelationWechatMiniprogramAuthLogin",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "Removes the association with WeChat Mini program authentication login.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/deleteRelationWechatOffiaccountAuthLogin",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "Removes the association with WeChat official account authentication login.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/emailPwdLogin",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "Logs in with email password.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/emailPwdRegister",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "Registers with email password.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/facebookAuthLogin",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "Logs in with Facebook authenticated account.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/getEntInfo",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "Gets the enterprise information.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/getLanguageList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "Gets the language list.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/getNationalityList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "Gets the nationality list.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/getTimezoneList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "Gets the timezone list.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/phoneAuthLogin",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "Logs in with local number with one-click.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/phoneIsRegister",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "The mobile number is registered or not.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/phonePwdLogin",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "Logs in with mobile phone password.",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/phonePwdRegister",
      info: "Registers with mobile phone password.",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/phoneSmsCodeLogin",
      info: "Logs in with mobile phone verification code.",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/qqAuthLogin",
      info: "Logs in with QQ verification code.",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/refreshToken",
      info: "Refreshes token.",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/relationAlipayAuthLogin",
      info: "Associates with Alipay authentication to log in.",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/relationEmail",
      info: "Associates with mailbox.",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/relationFacebookAuthLogin",
      info: "Associates with Facebook authentication to log in.",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/relationPhone",
      info: "Associates with mobile number.",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/relationQQAuthLogin",
      info: "Associates with QQ authentication to log in.",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/relationWechatMiniprogramAuthLogin",
      info: "Associates with WeChat mini-program authentication to log in.",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/relationWechatOffiaccountAuthLogin",
      info: "Associates with WeChat official account authentication to log in.",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/sendEmail",
      info: "Sends emails",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/sendEmailDeleteRelationEmailCode",
      info: "Sends an email to perform the operation of deleting the associated email verification code.",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/sendEmailRegisterCode",
      info: "Sends an email to perform the operation of getting the verification code for registration.",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/sendEmailRelationEmailCode",
      info: "Sends an email to perform the operation of getting the the associated email verification code.",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/sendEmailRepwdCode",
      info: "Sends an email to perform the operation of getting the password reset verification code.",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/setPhone",
      info: "Modifies the mobile number.",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/setUserInfo",
      info: "Modifies user information.",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/setUserPwd",
      info: "Modifies the password.",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/userDelete",
      info: "Deletes the user.",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/userInfo",
      info: "Queries the user information.",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/userLogout",
      info: "Logs out.",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/userPwdReset",
      info: "Resets the password.",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/wechatMiniprogramAuthLogin",
      info: "Logs in with the authenticated WeChat mini-program.",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/wechatMiniprogramRelateLogin",
      info: "Logs in with the associated WeChat mini-program.",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/wechatOffiaccountAuthLogin",
      info: "Logs in with the authenticated WeChat official account.",
      ver: "",
      rem: "",
      link: "",
    },
  ];
};
// 页面加载时
onMounted(() => {
  datashow();
});
</script>

<style lang="stylus" scoped>
table {
  thead {
    width: 100%;


    .header {
      width: 100%;
      background-color: #fafafc;
      font-weight: 700;
      color: blck;

      td {
        font-weight: 700;
        color: black;
        min-width: 80px;
      }
    }
  }
}
</style>
