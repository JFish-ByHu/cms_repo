<template>
  <table>
    <tr>
      <th>Type</th>
      <th>API</th>
      <th>Description</th>
      <th>Version</th>
      <th>Remarks</th>
    </tr>
    <!--    产品设备管理API-->
    <tr>
      <td valign="top" :rowspan="productList.length + 1">
        Product and Device Management
      </td>
      <td>
        <a
          target="_blank"
          href="https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=设备管理%20(Enterprise%20API)#/SN绑定管理/addSnListUsingPOST"
          >/r1/openapi/enterpriseapi/addSnList</a
        >
      </td>
      <td>
        Adds or covers the topology relationship between SNs and devices in
        batches.
      </td>
      <td valign="top" :rowspan="productList.length + 1">2.0.0</td>
      <td></td>
    </tr>
    <tr v-for="item in productList" :key="item.place">
      <td>
        <a target="_blank" :href="item.link">{{ item.place }}</a>
      </td>
      <td>{{ item.rem }}</td>
      <td>{{ item.commit ? item.commit : "" }}</td>
    </tr>
    <!--    消息订阅管理API-->
    <tr>
      <td valign="top" :rowspan="messageList.length + 1">
        Message Subscription Management
      </td>
      <td>
        <a
          target="_blank"
          href="https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/clearQueueUsingPOST"
          >/{version}/openapi/queue/clear</a
        >
      </td>
      <td>Clears the message queue.</td>
      <td valign="top" :rowspan="messageList.length + 1">1.0.0</td>
      <td></td>
    </tr>
    <tr v-for="item in messageList" :key="item.place">
      <td>
        <a target="_blank" :href="item.link">{{ item.place }}</a>
      </td>
      <td>{{ item.rem }}</td>
      <td v-if="item.ver">{{ item.ver }}</td>
      <td>{{ item.commit ? item.commit : "" }}</td>
    </tr>
    <!--    短信管理API-->
    <tr>
      <td valign="top" :rowspan="noteList.length + 1">
        SMS Message Management
      </td>
      <td>
        <a
          target="_blank"
          href="https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/addEntSmsAccountUsingPOST_3"
          >/enterpriseapi/addEntSmsAccount</a
        >
      </td>
      <td>Adds an SMS message account of an enterprise.</td>
      <td valign="top" :rowspan="noteList.length + 1">2.6.0</td>
      <td></td>
    </tr>
    <tr v-for="item in noteList" :key="item.place">
      <td>
        <a target="_blank" :href="item.link">{{ item.place }}</a>
      </td>
      <td>{{ item.rem }}</td>
      <td v-if="item.ver">{{ item.ver }}</td>
      <td>{{ item.commit ? item.commit : "" }}</td>
    </tr>
    <!--    终端用户管理API-->
    <tr>
      <td valign="top" :rowspan="userAdminList.length + 1">
        End User Management
      </td>
      <td>
        <a
          target="_blank"
          href="https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/addEmailAccountUsingPOST_3"
          >/enterpriseapi/addEmailAccount</a
        >
      </td>
      <td>Adds an email account.</td>
      <td valign="top" :rowspan="userAdminList.length + 1">2.6.0</td>
      <td></td>
    </tr>
    <tr v-for="item in userAdminList" :key="item.place">
      <td>
        <a target="_blank" :href="item.link">{{ item.place }}</a>
      </td>
      <td>{{ item.rem }}</td>
      <td v-if="item.ver">{{ item.ver }}</td>
      <td>{{ item.commit ? item.commit : "" }}</td>
    </tr>
    <!--    绑定管理API-->
    <tr>
      <td valign="top" :rowspan="bindList.length + 1">Binding Management</td>
      <td>
        <a
          target="_blank"
          href="https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%91%E5%AE%9A%20EnterpriseAPI/bindDeviceByPkDkUsingPOST_1"
          >/enterpriseapi/bindDeviceByPkDk</a
        >
      </td>
      <td>Binds device with PK and DK</td>
      <td valign="top" :rowspan="bindList.length + 1">2.6.0</td>
      <td></td>
    </tr>
    <tr v-for="item in bindList" :key="item.place">
      <td>
        <a target="_blank" :href="item.link">{{ item.place }}</a>
      </td>
      <td>{{ item.rem }}</td>
      <td v-if="item.ver">{{ item.ver }}</td>
      <td>{{ item.commit ? item.commit : "" }}</td>
    </tr>
    <!--    设备组管理API-->
    <tr>
      <td valign="top" :rowspan="equiList.length + 1">
        Device Group Management
      </td>
      <td>
        <a
          target="_blank"
          href="https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/addDeviceGroupUsingPOST_3"
          >/enterpriseapi/addDeviceGroup</a
        >
      </td>
      <td>Adds a device group</td>
      <td valign="top" :rowspan="equiList.length + 1">2.6.0</td>
      <td></td>
    </tr>
    <tr v-for="item in equiList" :key="item.place">
      <td>
        <a target="_blank" :href="item.link">{{ item.place }}</a>
      </td>
      <td>{{ item.rem }}</td>
      <td v-if="item.ver">{{ item.ver }}</td>
      <td>{{ item.commit ? item.commit : "" }}</td>
    </tr>
  </table>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

// 产品设备list
const productList = ref([
  {
    place: "",
    link: "",
    rem: "",
    ver: "",
    commit: "",
  },
]);
// 消息管理List
const messageList = ref([
  {
    place: "",
    link: "",
    rem: "",
    ver: "",
    commit: "",
  },
]);

//   短信管理列表
const noteList = ref([
  {
    place: "",
    link: "",
    rem: "",
    ver: "",
    commit: "",
  },
]);
//   绑定管理列表
const bindList = ref([
  {
    place: "",
    link: "",
    rem: "",
    ver: "",
    commit: "",
  },
]);
//   绑定管理列表
const userAdminList = ref([
  {
    place: "",
    link: "",
    rem: "",
    ver: "",
    commit: "",
  },
]);

// 设备管理列表
const equiList = ref([
  {
    place: "",
    link: "",
    rem: "",
    ver: "",
    commit: "",
  },
]);

const datashow = () => {
  equiList.value = [
    {
      place: "/enterpriseapi/addDeviceToGroup",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/addDeviceToGroupUsingPOST_3",
      rem: "Adds a device to the device group.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/controlDevicesByDeviceGroup",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/controlDevicesByDeviceGroupUsingPOST_1",
      rem: "Controls devices through the device group.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/deleteDeviceGroup",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/deleteDeviceGroupUsingDELETE_3",
      rem: "Deletes the device group.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/deleteDeviceToGroup",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/deleteDeviceToGroupUsingDELETE_4",
      rem: "Removes a device from the device group.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/deviceGroupInfo",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/deviceGroupInfoUsingGET_3",
      rem: "Queries device group details.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/deviceGroupList",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/deviceGroupListUsingGET_3",
      rem: "Queries the list of device groups.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/getControlDeviceGroupTaskDetail",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/getControlDeviceGroupTaskDetailUsingGET_1",
      rem: "Queries the task details of controlling devices through device groups.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/getControlDeviceGroupTaskList",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/getControlDeviceGroupTaskListUsingGET_1",
      rem: "Queries the task list for the devices controlled by the device group.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/getDeviceGroupList",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/getDeviceGroupListUsingGET_3",
      rem: "Queries the device group list associated with the device.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/getGroupDeviceList",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/getGroupDeviceListUsingGET_3",
      rem: "Queries the device list in the device group.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/setDeviceGroup",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/setDeviceGroupUsingPUT_3",
      rem: "Edits the device group.",
      // 版本号
      ver: "",
      commit: "",
    },
  ];
  bindList.value = [
    {
      place: "/enterpriseapi/deviceUserList",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%91%E5%AE%9A%20EnterpriseAPI/deviceUserListUsingGET_3",
      rem: "Queries the list of users bound to the device.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/unbundlingUserDevice",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%91%E5%AE%9A%20EnterpriseAPI/unbundlingUserDeviceUsingDELETE_1",
      rem: "The enterprise unbinds the device bound by the user.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/userDeviceList",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%91%E5%AE%9A%20EnterpriseAPI/userDeviceListUsingGET_6",
      rem: "Queries the list of devices that are bound by the user and that have enabled the sharing.",
      // 版本号
      ver: "",
      commit: "",
    },
  ];
  userAdminList.value = [
    {
      place: "/enterpriseapi/addEmailTemplate",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/addEmailTemplateUsingPOST_3",
      rem: "Adds email template.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/addEnterpriseThirdpartyConfig",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/addEnterpriseThirdpartyConfigUsingPOST_1",
      rem: "Adds enterprise third-party configuration.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/addUserDomainProductAuth",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/addUserDomainProductAuthUsingPOST_3",
      rem: "Adds product authorization of the user domain.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/deleteEmailAccount",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/deleteEmailAccountUsingDELETE_3",
      rem: "Deletes the email account.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/deleteEmailTemplate",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/deleteEmailTemplateUsingDELETE_3",
      rem: "Deletes the email template.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/deleteEnterpriseThirdpartyConfig",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/deleteEnterpriseThirdpartyConfigUsingDELETE_1",
      rem: "Deletes enterprise third-party configuration.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/deleteUserDomainProductAuth",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/deleteUserDomainProductAuthUsingDELETE_3",
      rem: "Deletes user domain product authentication.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/emailAccountUserDomainAuth",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/emailAccountUserDomainAuthUsingPOST_3",
      rem: "Authorizes the user domain of the email account.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/emailTemplateUserDomainAuth",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/emailTemplateUserDomainAuthUsingPOST_3",
      rem: "Authorizes the user domains to the email template.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/enabledEmailAccount",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/enabledEmailAccountUsingPUT_3",
      rem: "Enables/disables the email account.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/enabledEmailTemplate",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/enabledEmailTemplateUsingPUT_3",
      rem: "Enables/disables the email template.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/entUserDomainList",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/entUserDomainListUsingGET_4",
      rem: "Queries the list of enterprise user domains.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/getEmailAccountInfo",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/getEmailAccountInfoUsingGET_3",
      rem: "Checks email account details.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/getEmailAccountList",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/getEmailAccountListUsingGET_3",
      rem: "Queries the list of mail accounts.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/getEmailTemplateContent",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/%E9%82%AE%E4%BB%B6/getEmailTemplateContentUsingGET_3",
      rem: "Queries email template content.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/getEmailTemplateList",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/getEmailTemplateListUsingGET_3",
      rem: "Queries the list of email templates.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/getEnterpriseThirdpartyConfig",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/getEnterpriseThirdpartyConfigUsingGET_1",
      rem: "Queries the third-party configuration list of the enterprise.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/productAuthUserDomainList",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/productAuthUserDomainListUsingGET_3",
      rem: "Gets the list of user domains authorized by the product.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/setEmailAccount",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/setEmailAccountUsingPUT_3",
      rem: "Edits the email account.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/setEmailTemplate",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/setEmailTemplateUsingPUT_3",
      rem: "Edits the email template.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/userDomainProductAuthList",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/userDomainProductAuthListUsingGET_3",
      rem: "Gets the list of products authorized by the user domain.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/userDomainUserList",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/userDomainUserListUsingGET_1",
      rem: "Queries the list of users registered in the user domain.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/userInfo",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/userInfoUsingGET_5",
      rem: "Queries user information.",
      // 版本号
      ver: "",
      commit: "",
    },
  ];
  noteList.value = [
    {
      place: "/enterpriseapi/addEntSmsSign",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/addEntSmsSignUsingPOST_3",
      rem: "Adds an enterprise SMS message signature.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/addEntSmsTemplate",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/addEntSmsTemplateUsingPOST_3",
      rem: "Adds an SMS message template of an enterprise.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/deleteEntSmsAccount",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/deleteEntSmsAccountUsingDELETE_3",
      rem: "Deletes an enterprise SMS message account.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/deleteEntSmsSign",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/deleteEntSmsSignUsingDELETE_3",
      rem: "Deletes the enterprise SMS message signature.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/deleteEntSmsTemplate",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/deleteEntSmsTemplateUsingDELETE_3",
      rem: "Deletes the enterprise SMS message template.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/enabledEntSmsAccount",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/enabledEntSmsAccountUsingPUT_3",
      rem: "Enables/disables enterprise SMS message account.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/enabledEntSmsSign",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/enabledEntSmsSignUsingPUT_3",
      rem: "Enables/disables the enterprise SMS message signature.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/enabledEntSmsTemplate",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/enabledEntSmsTemplateUsingPUT_3",
      rem: "Enables/disables the enterprise SMS message template.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/entSmsAccountList",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/entSmsAccountListUsingGET_3",
      rem: "Queries the list of enterprise SMS accounts.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/entSmsSignList",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/entSmsSignListUsingGET_3",
      rem: "Queries the list of enterprise SMS message signatures",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/entSmsSignUserDomainAuth",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/entSmsSignUserDomainAuthUsingPOST_3",
      rem: "Queries user domain authorization for enterprise SMS message signature.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/entSmsTemplateList",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/entSmsTemplateListUsingGET_3",
      rem: "Queries the list of enterprise SMS message templates.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "enterpriseapi/entSmsTemplateUserDomainAuth",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/entSmsTemplateUserDomainAuthUsingPOST_3",
      rem: "Queries user domain authorization for enterprise SMS message template.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/setEntSmsAccount",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/setEntSmsAccountUsingPUT_3",
      rem: "Changes enterprise SMS message account.",
      // 版本号
      ver: "",
      commit: "",
    },
  ];
  messageList.value = [
    {
      place: "/{version}/openapi/queue/create",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/createQueueUsingPOST",
      rem: "Creates a message queue.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/{version}/openapi/queue/delete",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/deleteQueueUsingDELETE",
      rem: "Deletes a message queue.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/{version}/openapi/queue/detail",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/queueDetailUsingGET",
      rem: "Queries message queue details.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/{version}/openapi/queue/list",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/listQueuesUsingPOST",
      rem: "Queries the message queue list.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/{version}/openapi/subscribe/create",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/createSubscribeUsingPOST",
      rem: "Creates product/device subscriptions.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/{version}/openapi/subscribe/delete",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/deleteSubscribeUsingDELETE",
      rem: "Deletes the subscription.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/{version}/openapi/subscribe/detail",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/subscribeDetailUsingGET",
      rem: "Queries the subscription details.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/{version}/openapi/subscribe/enduser",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/createEndUserSubscribeUsingPOST",
      rem: "Creates an end user subscription.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/{version}/openapi/subscribe/enterprise",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/createEndUserSubscribeUsingPOST",
      rem: "Creates an enterprise subscription.",
      // 版本号
      ver: "",
      commit: "Sub-account not supported.",
    },
    {
      place: "/{version}/openapi/subscribe/saas",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/createEndUserSubscribeUsingPOST",
      rem: "Creates SaaS Application Subscription.",
      // 版本号
      ver: "",
      commit: "Only the SaaS sub-accounts are supported.",
    },
    {
      place: "/{version}/openapi/subscribe/list",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/listSubscriptionsUsingPOST",
      rem: "Queries the subscription list.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/{version}/openapi/subscribe/start",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/startSubscribeUsingPOST",
      rem: "Starts subscribing.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/{version}/openapi/subscribe/stop",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/stopSubscribeUsingPOST",
      rem: "Stops subscribing.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/{version}/openapi/subscribe/update",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/updateSubscribeUsingPOST",
      rem: "Updates the subscription.",
      // 版本号
      ver: "",
      commit: "",
    },
  ];
  productList.value = [
    {
      place: "/r1/openapi/enterpriseapi/deleteSnList",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=设备管理%20(Enterprise%20API)#/SN绑定管理/deleteSnListUsingDELETE",
      rem: "Deletes the topology relationship between SNs and devices in batches.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r1/openapi/enterpriseapi/findDkList",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=设备管理%20(Enterprise%20API)#/SN绑定管理/findDkListUsingPOST",
      // 版本号
      ver: "",
      commit: "",
      rem: "Queries the corresponding device list according to the PK and SN list.",
    },
    {
      place: "/r1/openapi/enterpriseapi/findSnList",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=设备管理%20(Enterprise%20API)#/SN绑定管理/findSnListUsingPOST",
      rem: "Queries the corresponding SN list according to the device list.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r1/openapi/enterpriseapi/generateSnList",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=设备管理%20(Enterprise%20API)#/SN绑定管理/generateSnListUsingPOST",
      rem: "Generates the SN data.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r1/openapi/product/detail",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=产品管理%20(Enterprise%20API)#/产品管理/productDetailUsingGET",
      rem: "Queries the product details.",
      // 版本号
      ver: "",
      commit: "Discarded. To be removed in later versions.",
    },
    {
      place: "/r2/openapi/product/detail",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=产品设备管理%20(Enterprise%20API)#/产品管理/productDetailUsingGET_1",
      rem: "Queries the product details.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r2/openapi/product/items",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=品类管理%20(Enterprise%20API)#/品类管理/productItemsUsingGET_1",
      rem: "Queries product category dictionary table.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r1/openapi/project/{projectId}/product/overview",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=产品管理%20(Enterprise%20API)#/产品管理/overviewProductsUsingGET",
      rem: "Queries the product list.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r1/openapi/product/export/tslFile",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=物模型服务%20(Enterprise%20API)#/物模型/getProductTslFileUsingGET",
      rem: "Exports the TSL file.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r1/openapi/product/gateway/getGatewayInfoByChild",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=设备管理%20(Enterprise%20API)#/网关子设备绑定关系管理/getGatewayProductByChildUsingGET",
      rem: "Queries the information of the gateway that the sub-device is associated with",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r1/openapi/product/gateway/subList",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=设备管理%20(Enterprise%20API)#/网关子设备绑定关系管理/subListUsingGET",
      rem: "Queries the sub-devices associated with the gateway device.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r1/openapi/device/data/history",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=设备影子%20(Enterprise%20API)#/device%20related%20operation/deviceDataHistoryUsingGET",
      rem: "Queries the historical uplink and downlink data of the device.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r1/openapi/device/detail",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=设备管理%20(Enterprise%20API)#/设备管理/deviceDetailUsingGET",
      rem: "Queries device details.",
      // 版本号
      ver: "",
      commit: "Discarded. To be removed in later versions.",
    },
    {
      place: "/r2/openapi/device/detail",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=设备管理%20(Enterprise%20API)#/设备管理/deviceDetailUsingGET_1",
      rem: "Queries device details.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r1/openapi/device/eventdata/history",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=设备影子%20(Enterprise%20API)#/device%20related%20operation/deviceEventDataHistoryUsingGET",
      rem: "Queries device event logs.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r1/openapi/device/getlocation",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=设备影子%20(Enterprise%20API)#/device%20related%20operation/getLocationUsingGET",
      rem: "Queries the latest positioning data of the device.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r2/openapi/device/resource",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=设备影子%20(Enterprise%20API)#/device%20related%20operation/deviceResourceUsingGET",
      rem: "Queries device resource information.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r1/openapi/device/verify",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=设备管理%20(Enterprise%20API)#/设备管理/verifiedUsingPOST",
      rem: "Performs secondary verification of the device.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r1/openapi/product/device/overview",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=设备管理%20(Enterprise%20API)#/设备管理/deviceListUsingGET",
      rem: "Queries the device list under the product.",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r2/openapi/device/batchSendData",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=设备影子%20(Enterprise%20API)#/device%20related%20operation/batchSendDataUsingPOST",
      rem: "Sends device downlink data in batches.",
      // 版本号
      ver: "",
      commit: "Discarded",
    },
    {
      place: "/r2/openapi/device/sendData",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=设备影子%20(Enterprise%20API)#/device%20related%20operation/sendData2UsingPOST",
      rem: "The device sends downlink data.",
      // 版本号
      ver: "",
      commit: "Discarded",
    },
    {
      place: "/r3/openapi/dm/readData",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=设备影子%20(Enterprise%20API)#/device%20related%20operation/readDataUsingPOST",
      rem: "The device queries TSL property data",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r3/openapi/dm/writeData",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=设备影子%20(Enterprise%20API)#/device%20related%20operation/writeDataUsingPOST",
      rem: "The device sends downlink TSL data",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r3/openapi/dm/sendServiceData",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=设备影子%20(Enterprise%20API)#/device%20related%20operation/sendServiceDataUsingPOST",
      rem: "The device sends downlink TSL service data",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r3/openapi/raw/sendData",
      link: "https://iot-api.acceleronix.io/swagger-ui.html?urls.primaryName=设备影子%20(Enterprise%20API)#/device%20related%20operation/sendDataUsingPOST_1",
      rem: "The device sends downlink transparent transmission data",
      // 版本号
      ver: "",
      commit: "",
    },
  ];
};

// 页面加载时
onMounted(() => {
  datashow();
});
</script>
