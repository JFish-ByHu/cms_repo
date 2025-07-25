<template>
  <table>
    <thead>
      <tr class="header">
        <td class="op_type">类型</td>
        <td class="op_place">接口地址</td>
        <td class="op_des">功能描述</td>
        <td class="op_vers">版本</td>
        <td class="op_rem">备注</td>
      </tr>
    </thead>
    <tbody>
      <!-- 用户管理 -->
      <tr>
        <td valign="top" :rowspan="list.length + 1">用户管理</td>
        <td>
          <a
            href="https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/"
            target="_blank"
            >v2/enduser/enduserapi/alipayAuthLogin</a
          >
        </td>
        <td>支付宝授权登录</td>
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
        <td valign="top" :rowspan="bindList.length + 1">绑定管理</td>
        <td>
          <a
            href="https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/%E7%BB%91%E5%AE%9A%20EndUserAPI/batchControlDeviceUsingPOST_1"
            target="_blank"
            >v2/binding/enduserapi/batchControlDevice</a
          >
        </td>
        <td>批量控制设备</td>
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
        <td valign="top" :rowspan="noteList.length + 1">短信管理</td>
        <td>
          <a
            href="https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enduser%20API)#/"
            target="_blank"
            >v2/sms/enduserapi/sendPhoneSmsCode</a
          >
        </td>
        <td>发送手机短信验证码</td>
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
        <td valign="top" :rowspan="deviceList.length + 1">设备组管理</td>
        <td>
          <a
            href="https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/acceptDeviceGroupShareUsingPOST_1"
            target="_blank"
            >v2/devicegroup/enduserapi/acceptDeviceGroupShare</a
          >
        </td>
        <td>被分享人接受设备组分享</td>
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
  deviceList.value = [
    {
      type: "",
      place: "v2/devicegroup/enduserapi/addDeviceGroup",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/addDeviceGroupUsingPOST_2",
      info: "添加设备组",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/devicegroup/enduserapi/addDeviceToGroup",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/addDeviceToGroupUsingPOST_2",
      info: "添加设备到设备组中",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/devicegroup/enduserapi/deleteDeviceGroup",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/deleteDeviceGroupUsingDELETE_2",
      info: "删除设备组",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/devicegroup/enduserapi/deleteDeviceToGroup",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/deleteDeviceToGroupUsingDELETE_3",
      info: "移除设备组中的设备",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/devicegroup/enduserapi/deviceGroupInfo",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/deviceGroupInfoUsingGET_2",
      info: "查询设备组详情",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/devicegroup/enduserapi/deviceGroupList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/deviceGroupListUsingGET_2",
      info: "查询设备组列表",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/devicegroup/enduserapi/deviceGroupShareUserList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/deviceGroupShareUserListUsingGET_1",
      info: "分享人查询设备组的被分享人列表",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/devicegroup/enduserapi/getDeviceGroupList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/getDeviceGroupListUsingGET_2",
      info: "根据设备查询设备组列表",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/devicegroup/enduserapi/getGroupDeviceList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/getGroupDeviceListUsingGET_2",
      info: "查询设备组中的设备列表",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/devicegroup/enduserapi/owerUserUnshare",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/owerUserUnshareUsingDELETE_1",
      info: "分享人取消设备组分享",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/devicegroup/enduserapi/setDeviceGroup",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/setDeviceGroupUsingPUT_2",
      info: "修改设备组",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/devicegroup/enduserapi/shareInfo",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/shareInfoUsingPOST_1",
      info: "分享人设置设备组分享信息",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/devicegroup/enduserapi/shareUserGetAcceptingDeviceGroupInfo",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/shareUserGetAcceptingDeviceGroupInfoUsingGET_1",
      info: "被分享人查询接收的设备组详情",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/devicegroup/enduserapi/shareUserSetDeviceGroupName",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/shareUserSetDeviceGroupNameUsingPOST_1",
      info: "被分享人修改分享的设备组名称",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/devicegroup/enduserapi/shareUserSetDeviceName",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "被分享人修改分享的设备组中的设备名称",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/devicegroup/enduserapi/shareUserUnshare",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E8%AE%BE%E5%A4%87%E7%BB%84%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E8%AE%BE%E5%A4%87%E7%BB%84%20EndUserAPI/shareUserUnshareUsingDELETE_1",
      info: "被分享人取消设备组分享",
      ver: "",
      rem: "",
    },
  ];
  noteList.value = [
    {
      type: "",
      place: "v2/sms/enduserapi/validateInternationalPhone",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EndUserAPI/validateInternationalPhoneUsingPOST_1",
      info: "验证国际手机号格式",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/sms/enduserapi/validateSmsCode",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%9F%AD%E4%BF%A1%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%9F%AD%E4%BF%A1%20EndUserAPI/validateSmsCodeUsingPOST_2",
      info: "验证短信验证码",
      ver: "",
      rem: "",
    },
  ];
  bindList.value = [
    {
      type: "",
      place: "v2/binding/enduserapi/bindDeviceBindingCode",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/bindDeviceBindingCodeUsingPOST_1",
      info: "使用 bindingCode 绑定设备",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/bindDeviceBt",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/bindDeviceBtUsingPOST_1",
      info: "蓝牙设备绑定",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/bindDeviceSn",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/bindDeviceSnUsingPOST_1",
      info: "使用 SN 绑定设备",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/bindDeviceSnImei",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/bindDeviceSnImeiUsingPOST_1",
      info: "使用 SN、IMEI 绑定设备",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/bindDeviceWifi",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/bindDeviceWifiUsingPOST_1",
      info: "wifi设备绑定",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/changeShareDeviceName",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/changeShareDeviceNameUsingPUT_1",
      info: "被分享人修改分享的设备名称",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/controlDevice",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/controlDeviceUsingPOST_1",
      info: "设备控制",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/deviceBusinessAttributes",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/deviceBusinessAttributesUsingGET_1",
      info: "查询设备业务属性",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/deviceInfo",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/deviceInfoUsingGET_3",
      info: "查询设备信息",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/deviceShareUserList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/deviceShareUserListUsingGET_1",
      info: "分享人查询设备的被分享人列表",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/getFetchPlan",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/getFetchPlanUsingPOST_1",
      info: "查询升级计划",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/getGatewayDeviceChildList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/getGatewayDeviceChildListUsingGET_1",
      info: "查询网关设备下子设备列表",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/ownerUserUnshareDevice",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/ownerUserUnshareDeviceUsingDELETE_1",
      info: "分享人取消设备分享",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/productTSL",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/productTSLUsingGET_1",
      info: "查询物模型 TSL ",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/reportUpgradeStatus",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/reportUpgradeStatusUsingPOST_1",
      info: "上报固件升级状态",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/setDeviceInfo",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/setDeviceInfoUsingPUT_1",
      info: "修改设备信息",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/shareDevice",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/shareDeviceUsingPOST_1",
      info: "被分享人接受分享",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/shareInfo",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/shareInfoUsingPOST_1",
      info: "分享人设置设备分享信息",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/shareUserUnshareDevice",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/shareUserUnshareDeviceUsingDELETE_1",
      info: "被分享人取消设备分享",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/unbundlingDeviceDk",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/unbundlingDeviceDkUsingDELETE_1",
      info: "使用 pk、dk 解绑设备",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/binding/enduserapi/userDeviceList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%91%E5%AE%9A%E7%AE%A1%E7%90%86%20(Enduser%20API)#/operations/%E7%BB%91%E5%AE%9A%20EndUserAPI/userDeviceListUsingGET_5",
      info: "查询用户的设备列表",
      ver: "",
      rem: "",
    },
  ];
  userLink.value =
    "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/";
  list.value = [
    {
      type: "",
      place: "v2/enduser//enduserapi/deleteEmailRelation",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "删除邮箱关联",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/deletePhoneRelation",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "删除手机号码关联",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/deleteRelationAlipayAuthLogin",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "删除关联的支付宝授权登录",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/deleteRelationFacebookAuthLogin",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "删除关联的 Facebook 授权登录",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/deleteRelationQQAuthLogin",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "删除关联的QQ授权登录",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/deleteRelationWechatMiniprogramAuthLogin",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "删除关联的微信小程序授权登录",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/deleteRelationWechatOffiaccountAuthLogin",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "删除关联的微信公众号授权登录",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/emailPwdLogin",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "邮箱密码登录",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/emailPwdRegister",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "邮箱密码注册",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/facebookAuthLogin",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "Facebook 授权登录",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/getEntInfo",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "查询企业信息",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/getLanguageList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "查询语言列表",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/getNationalityList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "查询国家列表",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/getTimezoneList",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "查询时区列表",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/phoneAuthLogin",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "本机号码一键登录",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/phoneIsRegister",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "手机号是否已注册",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/phonePwdLogin",
      link: "https://iot-api.quectelcn.com/swagger-ui.html?urls.primaryName=%E7%BB%88%E7%AB%AF%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86%20(Enduser%20API)#/",
      info: "手机号密码登录",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/phonePwdRegister",
      link: "",
      info: "手机号密码注册",
      ver: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/phoneSmsCodeLogin",
      info: "手机号验证码登录",
      ver: "",
      link: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/qqAuthLogin",
      info: "QQ授权登录",
      ver: "",
      link: "",
      rem: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/refreshToken",
      info: "刷新token",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/relationAlipayAuthLogin",
      info: "关联支付宝授权登录",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/relationEmail",
      info: "关联邮箱",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/relationFacebookAuthLogin",
      info: "关联 Facebook 授权登录",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/relationPhone",
      info: "关联手机号码",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/relationQQAuthLogin",
      info: "关联QQ授权登录",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/relationWechatMiniprogramAuthLogin",
      info: "关联微信小程序授权登录",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/relationWechatOffiaccountAuthLogin",
      info: "关联微信公众号授权登录",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/sendEmail",
      info: "发送邮件",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/sendEmailDeleteRelationEmailCode",
      info: "发送邮件删除邮箱关联验证码",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/sendEmailRegisterCode",
      info: "发送邮件注册验证码",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/sendEmailRelationEmailCode",
      info: "发送邮件关联邮箱验证码",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/sendEmailRepwdCode",
      info: "发送邮件密码重置验证码",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/setPhone",
      info: "修改用户手机号",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/setUserInfo",
      info: "用户信息修改",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/setUserPwd",
      info: "用户密码修改",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/userDelete",
      info: "删除用户",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/userInfo",
      info: "查询用户信息",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/userLogout",
      info: "用户退出登录",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/userPwdReset",
      info: "用户密码重置",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/wechatMiniprogramAuthLogin",
      info: "微信小程序授权登录",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/wechatMiniprogramRelateLogin",
      info: "微信小程序关联登录",
      ver: "",
      rem: "",
      link: "",
    },
    {
      type: "",
      place: "v2/enduser/enduserapi/wechatOffiaccountAuthLogin",
      info: "微信公众号授权登录",
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
