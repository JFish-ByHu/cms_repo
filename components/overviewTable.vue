<template>
  <table>
    <tr>
      <th>类型</th>
      <th>接口地址</th>
      <th>功能描述</th>
      <th>版本</th>
      <th>备注</th>
    </tr>
    <!--    产品设备管理API-->
    <tr>
      <td valign="top" :rowspan="productList.length + 1">产品设备管理API</td>
      <td>
        <a
          target="_blank"
          href="https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=设备管理%20(Enterprise%20API)#/SN绑定管理/addSnListUsingPOST"
          >/r1/openapi/enterpriseapi/addSnList</a
        >
      </td>

      <td>批量添加或覆盖SN与设备的拓扑关系</td>
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
      <td valign="top" :rowspan="messageList.length + 1">消息订阅管理API</td>
      <td>
        <a
          target="_blank"
          href="https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/clearQueueUsingPOST"
          >/{version}/openapi/queue/clear</a
        >
      </td>
      <td>清理队列</td>
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
      <td valign="top" :rowspan="noteList.length + 1">短信管理API</td>
      <td>
        <a
          target="_blank"
          href="https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/addEntSmsAccountUsingPOST_3"
          >/enterpriseapi/addEntSmsAccount</a
        >
      </td>
      <td>添加企业短信账号</td>
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
      <td valign="top" :rowspan="userAdminList.length + 1">终端用户管理API</td>
      <td>
        <a
          target="_blank"
          href="https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/addEmailAccountUsingPOST_3"
          >/enterpriseapi/addEmailAccount</a
        >
      </td>
      <td>添加邮件账号</td>
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
      <td valign="top" :rowspan="bindList.length + 1">绑定管理API</td>
      <td>
        <a
          target="_blank"
          href="https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%91%E5%AE%9A%20EnterpriseAPI/bindDeviceByPkDkUsingPOST_1"
          >/enterpriseapi/bindDeviceByPkDk</a
        >
      </td>
      <td>通过PK，DK绑定设备</td>
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
      <td valign="top" :rowspan="equiList.length + 1">设备组管理API</td>
      <td>
        <a
          target="_blank"
          href="https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/addDeviceGroupUsingPOST_3"
          >/enterpriseapi/addDeviceGroup</a
        >
      </td>
      <td>添加设备组</td>
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
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/addDeviceToGroupUsingPOST_3",
      rem: "添加设备到设备组中",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/controlDevicesByDeviceGroup",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/controlDevicesByDeviceGroupUsingPOST_1",
      rem: "通过设备组控制设备",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/deleteDeviceGroup",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/deleteDeviceGroupUsingDELETE_3",
      rem: "删除设备组",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/deleteDeviceToGroup",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/deleteDeviceToGroupUsingDELETE_4",
      rem: "移除设备组中的设备",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/deviceGroupInfo",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/deviceGroupInfoUsingGET_3",
      rem: "查询设备组详情",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/deviceGroupList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/deviceGroupListUsingGET_3",
      rem: "查询设备组列表",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/getControlDeviceGroupTaskDetail",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/getControlDeviceGroupTaskDetailUsingGET_1",
      rem: "查询通过设备组控制设备的任务详情",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/getControlDeviceGroupTaskList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/getControlDeviceGroupTaskListUsingGET_1",
      rem: "查询通过设备组控制设备的任务列表",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/getDeviceGroupList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/getDeviceGroupListUsingGET_3",
      rem: "根据设备查询设备组列表",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/getGroupDeviceList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/getGroupDeviceListUsingGET_3",
      rem: "查询设备组中的设备列表",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/setDeviceGroup",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EnterpriseAPI/setDeviceGroupUsingPUT_3",
      rem: "修改设备组",
      // 版本号
      ver: "",
      commit: "",
    },
  ];
  bindList.value = [
    {
      place: "/enterpriseapi/deviceUserList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%91%E5%AE%9A%20EnterpriseAPI/deviceUserListUsingGET_3",
      rem: "查询绑定设备的用户列表",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/unbundlingUserDevice",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%91%E5%AE%9A%20EnterpriseAPI/unbundlingUserDeviceUsingDELETE_1",
      rem: "企业解绑用户绑定的设备",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/userDeviceList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%91%E5%AE%9A%20EnterpriseAPI/userDeviceListUsingGET_6",
      rem: "查询用户绑定和接受分享的设备列表",
      // 版本号
      ver: "",
      commit: "",
    },
  ];
  userAdminList.value = [
    {
      place: "/enterpriseapi/addEmailTemplate",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/addEmailTemplateUsingPOST_3",
      rem: "添加邮件模板",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/addEnterpriseThirdpartyConfig",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/addEnterpriseThirdpartyConfigUsingPOST_1",
      rem: "添加企业第三方配置",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/addUserDomainProductAuth",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/addUserDomainProductAuthUsingPOST_3",
      rem: "添加用户域产品授权",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/deleteEmailAccount",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/deleteEmailAccountUsingDELETE_3",
      rem: "删除邮件账号",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/deleteEmailTemplate",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/deleteEmailTemplateUsingDELETE_3",
      rem: "删除邮件模板",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/deleteEnterpriseThirdpartyConfig",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/deleteEnterpriseThirdpartyConfigUsingDELETE_1",
      rem: "删除企业第三方配置",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/deleteUserDomainProductAuth",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/deleteUserDomainProductAuthUsingDELETE_3",
      rem: "删除用户域产品授权",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/emailAccountUserDomainAuth",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/emailAccountUserDomainAuthUsingPOST_3",
      rem: "邮件账号的用户域授权",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/emailTemplateUserDomainAuth",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/emailTemplateUserDomainAuthUsingPOST_3",
      rem: "邮件模板的用户域授权",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/enabledEmailAccount",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/enabledEmailAccountUsingPUT_3",
      rem: "启用停用邮件账号",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/enabledEmailTemplate",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/enabledEmailTemplateUsingPUT_3",
      rem: "启用停用邮件模板",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/entUserDomainList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/entUserDomainListUsingGET_4",
      rem: "查询企业用户域列表",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/getEmailAccountInfo",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/getEmailAccountInfoUsingGET_3",
      rem: "查询邮件账号详情",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/getEmailAccountList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/getEmailAccountListUsingGET_3",
      rem: "查询邮件账号列表",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/getEmailTemplateContent",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/%E9%82%AE%E4%BB%B6/getEmailTemplateContentUsingGET_3",
      rem: "查询邮件模板内容",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/getEmailTemplateList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/getEmailTemplateListUsingGET_3",
      rem: "查询邮件模板列表",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/getEnterpriseThirdpartyConfig",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/getEnterpriseThirdpartyConfigUsingGET_1",
      rem: "查询企业第三方配置列表",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/productAuthUserDomainList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/productAuthUserDomainListUsingGET_3",
      rem: "获取产品授权的用户域列表",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/setEmailAccount",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/setEmailAccountUsingPUT_3",
      rem: "修改邮件账号",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/setEmailTemplate",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/setEmailTemplateUsingPUT_3",
      rem: "修改邮件模板",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/userDomainProductAuthList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/userDomainProductAuthListUsingGET_3",
      rem: "获取用户域授权的产品列表",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/userDomainUserList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/userDomainUserListUsingGET_1",
      rem: "查询用户域中注册的用户列表",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/userInfo",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%20EnterpriseAPI/userInfoUsingGET_5",
      rem: "查询用户信息",
      // 版本号
      ver: "",
      commit: "",
    },
  ];
  noteList.value = [
    {
      place: "/enterpriseapi/addEntSmsSign",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/addEntSmsSignUsingPOST_3",
      rem: "添加企业短信签名",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/addEntSmsTemplate",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/addEntSmsTemplateUsingPOST_3",
      rem: "添加企业短信模板",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/deleteEntSmsAccount",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/deleteEntSmsAccountUsingDELETE_3",
      rem: "删除企业短信账号",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/deleteEntSmsSign",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/deleteEntSmsSignUsingDELETE_3",
      rem: "删除企业短信签名",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/deleteEntSmsTemplate",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/deleteEntSmsTemplateUsingDELETE_3",
      rem: "删除企业短信模板",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/enabledEntSmsAccount",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/enabledEntSmsAccountUsingPUT_3",
      rem: "启用停用企业短信账号",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/enabledEntSmsSign",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/enabledEntSmsSignUsingPUT_3",
      rem: "启用停用企业短信签名",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/enabledEntSmsTemplate",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/enabledEntSmsTemplateUsingPUT_3",
      rem: "启用停用企业短信模板",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/entSmsAccountList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/entSmsAccountListUsingGET_3",
      rem: "企业短信账号列表",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/entSmsSignList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/entSmsSignListUsingGET_3",
      rem: "企业短信签名列表",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/entSmsSignUserDomainAuth",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/entSmsSignUserDomainAuthUsingPOST_3",
      rem: "企业短信签名的用户域授权",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/entSmsTemplateList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/entSmsTemplateListUsingGET_3",
      rem: "企业短信模板列表",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "enterpriseapi/entSmsTemplateUserDomainAuth",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/entSmsTemplateUserDomainAuthUsingPOST_3",
      rem: "企业短信模板的用户域授权",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/enterpriseapi/setEntSmsAccount",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EnterpriseAPI/setEntSmsAccountUsingPUT_3",
      rem: "修改企业短信账号",
      // 版本号
      ver: "",
      commit: "",
    },
  ];
  messageList.value = [
    {
      place: "/{version}/openapi/queue/create",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/createQueueUsingPOST",
      rem: "创建队列",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/{version}/openapi/queue/delete",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/deleteQueueUsingDELETE",
      rem: "删除队列",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/{version}/openapi/queue/detail",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/queueDetailUsingGET",
      rem: "队列详情查询",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/{version}/openapi/queue/list",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/listQueuesUsingPOST",
      rem: "队列列表",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/{version}/openapi/subscribe/create",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/createSubscribeUsingPOST",
      rem: "创建产品级/设备级订阅",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/{version}/openapi/subscribe/delete",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/deleteSubscribeUsingDELETE",
      rem: "删除订阅",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/{version}/openapi/subscribe/detail",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/subscribeDetailUsingGET",
      rem: "查看订阅详情",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/{version}/openapi/subscribe/enduser",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/createEndUserSubscribeUsingPOST",
      rem: "创建终端用户订阅",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/{version}/openapi/subscribe/enterprise",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/createEndUserSubscribeUsingPOST",
      rem: "创建企业用户订阅",
      // 版本号
      ver: "",
      commit: "子账号不支持",
    },
    {
      place: "/{version}/openapi/subscribe/saas",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/createSaasSubscribeUsingPOST",
      rem: "创建SaaS用户订阅",
      // 版本号
      ver: "",
      commit: "仅支持SaaS子账户",
    },
    {
      place: "/{version}/openapi/subscribe/list",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/listSubscriptionsUsingPOST",
      rem: "订阅列表查询",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/{version}/openapi/subscribe/start",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/startSubscribeUsingPOST",
      rem: "启动订阅",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/{version}/openapi/subscribe/stop",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/stopSubscribeUsingPOST",
      rem: "停止订阅",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/{version}/openapi/subscribe/update",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85%E7%AE%A1%E7%90%86%20(Enterprise%20API)#/operations/%E6%B6%88%E6%81%AF%E8%AE%A2%E9%98%85/updateSubscribeUsingPOST",
      rem: "修改订阅",
      // 版本号
      ver: "",
      commit: "",
    },
  ];
  productList.value = [
    {
      place: "/r1/openapi/enterpriseapi/deleteSnList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=设备管理%20(Enterprise%20API)#/SN绑定管理/deleteSnListUsingDELETE",
      rem: "批量删除SN与设备的拓扑关系",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r1/openapi/enterpriseapi/findDkList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=设备管理%20(Enterprise%20API)#/SN绑定管理/findDkListUsingPOST",
      // 版本号
      ver: "",
      rem: "根据 PK与SN列表查询对应的设备列表",
      commit: "",
    },
    {
      place: "/r1/openapi/enterpriseapi/findSnList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=设备管理%20(Enterprise%20API)#/SN绑定管理/findSnListUsingPOST",
      rem: "根据设备列表查询对应的 sn 列表",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r1/openapi/enterpriseapi/generateSnList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=设备管理%20(Enterprise%20API)#/SN绑定管理/generateSnListUsingPOST",
      rem: "生成SN数据",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r1/openapi/product/detail",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=产品管理%20(Enterprise%20API)#/产品管理/productDetailUsingGET",
      rem: "查询产品详情",
      // 版本号
      ver: "",
      commit: "废弃,后续版本会删除",
    },
    {
      place: "/r2/openapi/product/detail",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=产品设备管理%20(Enterprise%20API)#/产品管理/productDetailUsingGET_1",
      rem: "查询产品详情",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r2/openapi/product/items",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=品类管理%20(Enterprise%20API)#/品类管理/productItemsUsingGET_1",
      rem: "产品品类字典表查询",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r1/openapi/project/{projectId}/product/overview",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=产品管理%20(Enterprise%20API)#/产品管理/overviewProductsUsingGET",
      rem: "查询产品列表",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r1/openapi/product/export/tslFile",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=物模型服务%20(Enterprise%20API)#/物模型/getProductTslFileUsingGET",
      rem: "物模型文件导出",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r1/openapi/product/gateway/getGatewayInfoByChild",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=设备管理%20(Enterprise%20API)#/网关子设备绑定关系管理/getGatewayProductByChildUsingGET",
      rem: "根据子设备查询所属网关的信息",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r1/openapi/product/gateway/subList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=设备管理%20(Enterprise%20API)#/网关子设备绑定关系管理/subListUsingGET",
      rem: "查询网关设备关联的子设备",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r1/openapi/device/data/history",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=设备影子%20(Enterprise%20API)#/device%20related%20operation/deviceDataHistoryUsingGET",
      rem: "设备上下行历史数据查询",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r1/openapi/device/detail",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=设备管理%20(Enterprise%20API)#/设备管理/deviceDetailUsingGET",
      rem: "设备详情查询",
      // 版本号
      ver: "",
      commit: "废弃,后续版本会删除",
    },
    {
      place: "/r2/openapi/device/detail",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=设备管理%20(Enterprise%20API)#/设备管理/deviceDetailUsingGET_1",
      rem: "设备详情查询",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r1/openapi/device/eventdata/history",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=设备影子%20(Enterprise%20API)#/device%20related%20operation/deviceEventDataHistoryUsingGET",
      rem: "设备事件日志查询",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r1/openapi/device/getlocation",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=设备影子%20(Enterprise%20API)#/device%20related%20operation/getLocationUsingGET",
      rem: "设备最新定位数据查询",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r2/openapi/device/resource",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=设备影子%20(Enterprise%20API)#/device%20related%20operation/deviceResourceUsingGET",
      rem: "设备资源信息查询",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r1/openapi/device/verify",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=设备管理%20(Enterprise%20API)#/设备管理/verifiedUsingPOST",
      rem: "设备二次认证",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r1/openapi/product/device/overview",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=设备管理%20(Enterprise%20API)#/设备管理/deviceListUsingGET",
      rem: "查询产品下设备列表",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r2/openapi/device/batchSendData",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=设备影子%20(Enterprise%20API)#/device%20related%20operation/batchSendDataUsingPOST",
      rem: "批量发送设备下行数据",
      // 版本号
      ver: "",
      commit: "废弃",
    },
    {
      place: "/r2/openapi/device/sendData",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=设备影子%20(Enterprise%20API)#/device%20related%20operation/sendData2UsingPOST",
      rem: "设备发送下行数据",
      // 版本号
      ver: "",
      commit: "废弃",
    },
    {
      place: "/r3/openapi/dm/readData",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=设备影子%20(Enterprise%20API)#/device%20related%20operation/readDataUsingPOST",
      rem: "设备读取物模型属性数据",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r3/openapi/dm/writeData",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=设备影子%20(Enterprise%20API)#/device%20related%20operation/writeDataUsingPOST",
      rem: "设备发送下行物模型数据",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r3/openapi/dm/sendServiceData",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=设备影子%20(Enterprise%20API)#/device%20related%20operation/sendServiceDataUsingPOST",
      rem: "设备发送下行物模型服务数据",
      // 版本号
      ver: "",
      commit: "",
    },
    {
      place: "/r3/openapi/raw/sendData",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=设备影子%20(Enterprise%20API)#/device%20related%20operation/sendDataUsingPOST_1",
      rem: "设备发送下行透传数据",
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
