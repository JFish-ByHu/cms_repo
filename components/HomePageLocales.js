/*interface HomePageConfig {
    title: string
    desc: string
    bannerNavs: Array<{
        text: string
        url: string
    }>
    learnPathLabel: string
    learnPaths: Array<{
        icon: string
        title: {
            text: string
            url: string
        }
        subList?: Array<{
            text: string
            url: string
        }>
    }>
}

interface Locales {
    zh: HomePageConfig
    en: HomePageConfig
}*/

export const HomePageLocales = () => {
  return {
    zh: {
      title: "开发者中心",
      banner: "/zh/homepage/index-banner-bg.png",
      desc: "开发者中心，为客户的多种终端设备提供安全可靠的网络快速接入、数据传输、数据存储、数据管理等完整的交互服务。可通过IoT平台调用API实现海量设备和应用的数据传输，达到控制设备和采集数据的目的。",
      bannerNavs: [
        { url: "/introduction/page-01.html", text: "平台概述" },
        { url: "/introduction/page-02.html", text: "产品优势" },
        { url: "/introduction/page-03.html", text: "名词解析" },
        { url: "/introduction/page-05.html", text: "支持的地域" },
      ],
      learnPathLabel: "平台学习路径",
      learnPaths: [
        {
          icon: "/zh/homepage/快速入门.svg",
          title: { text: "快速入门", url: "/quickStart/Overview.html" },
          subList: [
            { text: "概述", url: "/quickStart/Overview.html" },
            { text: "平台注册", url: "/quickStart/register.html" },
            { text: "产品开发", url: "/quickStart/ProductDevelop.html" },
            { text: "App应用开发", url: "/quickStart/App.html" },
            { text: "SaaS应用开发", url: "/quickStart/Saas.html" },
          ],
        },
        {
          icon: "/zh/homepage/激活码管理.svg",
          title: { text: "激活码管理", url: "/quickStart/Overview.html" },
          subList: [
            { text: "激活码介绍", url: "/license/LicenseIntroduction.html" },
            { text: "激活码管理", url: "/license/licenseMngment.html" },
            { text: "超额账单", url: "/license/billCenter.html" },
            { text: "用量监控", url: "/license/statistics/page-01.html" },
          ],
        },
        {
          icon: "/zh/homepage/设备开发.svg",
          title: { text: "设备开发", url: "/deviceDevelop/DeviceAccessPlan/speediness-01.html" },
          subList: [
            { text: "产品管理", url: "/deviceDevelop/ProductDevelop/ProductManagement.html" },
            { text: "设备接入方案", url: "/deviceDevelop/DeviceAccessPlan/AccessPlan.html" },
            { text: "设备管理", url: "/deviceDevelop/DeviceManage/operation/List.html" },
            // {
            //   text: "QuecPython方案接入(2/3/4/5G)",
            //   url: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/speediness/speediness-quecpython-01.html",
            // },
            // {
            //   text: "QuecOpen方案接入(Wi-Fi)",
            //   url: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/speediness/speediness-quecopen-01.html",
            // },
            // {
            //   text: "AT指令方案接入(NB)",
            //   url: "/deviceDevelop/DeviceAccessPlan/nb/AT/speediness/speediness-at-02.html",
            // },
            // {
            //   text: "Modbus-DTU 零代码方案接入",
            //   url: "/deviceDevelop/DeviceAccessPlan/modbus_dtu/speediness/speediness-dtu-01.html",
            // },
            // {
            //   text: "基于串口协议方案接入",
            //   url: "/deviceDevelop/cellular/SerialCommProtocol/speediness-02.html",
            // },
            // {
            //   text: "基于QuecOpen方案接入",
            //   url: "/deviceDevelop/cellular/speediness/QuecOpen/speediness-quecopen-01.html",
            // },
            // {
            //   text: "基于DTU-Modbus零代码方案接入",
            //   url: "/deviceDevelop/cellular/DTU/speediness/cellular-dtu-01.html",
            // },
            // {
            //   text: "2G/3G/4G/5G",
            //   url: "/deviceDevelop/cellular/speediness/speediness-01.html",
            // },
            // {
            //   text: "WiFi",
            //   url: "/deviceDevelop/wifi/speediness/speediness-01.html",
            // },
            // {
            //   text: "NB-IoT",
            //   url: "/deviceDevelop/nb/speediness_ctwing/speediness-01.html",
            // },
            // { text: "BLE", url: "/deviceDevelop/ble/page-01.html" },
            // {
            //   text: "网关子设备",
            //   url: "/deviceDevelop/subDevice/page-01.html",
            // },
            // {
            //   text: "模组接入",
            //   url: "/deviceDevelop/ModuleAccess/page-01.html",
            // },
          ],
        },
        {
          icon: "/zh/homepage/app应用开发.svg",
          title: { text: "App应用开发", url: "/appDevelop/ready.html" },
          subList: [
            { text: "App数据通信概览", url: "/appDevelop/ready.html" },
            { text: "OEM App", url: "/appDevelop/OEMApp/introduce.html" },
            { text: "App SDK", url: "/appDevelop/AppSDK/AppManagement.html" },
            { text: "OpenAPI使用指导", url: "/appDevelop/OpenAPI.html" },
            { text: "错误码集合", url: "/appDevelop/errorCode.html" },
            // {
            //   text: "WebSocket使用指导",
            //   url: "/appDevelop/websocket/guide.html",
            // },
            // { text: "Android SDK使用指导", url: "/appDevelop/AndroidSDK.html" },
            // { text: "iOS SDK使用指南", url: "/appDevelop/iosSDK.html" },
            // {
            //   text: "设备配网流程说明",
            //   url: "/appDevelop/networkDescription.html",
            // },
          ],
        },
        {
          icon: "/zh/homepage/saas应用开发.svg",
          title: {
            text: "SaaS应用开发",
            url: "/saasDevelop/CommunicatOverview.html",
          },
          subList: [
            {
              text: "SaaS数据通信概述",
              url: "/saasDevelop/CommunicatOverview.html",
            },
            { text: "SaaS管理", url: "/saasDevelop/SaaSManagement/SaaSManage.html" },
            // {
            //   text: "快速接入指引",
            //   url: "/saasDevelop/QuickStart/SaasManage.html",
            // },
            {
              text: "OpenAPI使用指导",
              url: "/saasDevelop/OpenAPI/Overview.html",
            },
            {
              text: "消息订阅使用指导",
              url: "/saasDevelop/AMQPSubscription/subscription/AMQPinfo.html",
            },
            // { text: "数据格式", url: "/saasDevelop/AMQPSubscription/DataFormat/overview.html" },
            { text: "错误码集合", url: "/saasDevelop/errorCode.html" },
          ],
        },
        {
          icon: "/zh/homepage/行业方案.svg",
          title: { text: "行业方案", url: "/industryApplication/Overview.html" },
          subList: [
            { text: "行业解决方案概述", url: "/industryApplication/Overview.html" },
            { text: "行业解决方案", url: "/industryApplication/solution.html" },
          ],
        },
        // {
        //   icon: "/zh/homepage/用户指南.svg",
        //   title: { text: "用户指南", url: "/deviceDevelop/ProductDevelop/ProductManagement.html" },
        //   subList: [
        //     { text: "产品开发", url: "/deviceDevelop/ProductDevelop/ProductManagement.html" },
        //     { text: "App开发", url: "/guide/app/dev.html" },
        //     { text: "SaaS开发", url: "/guide/saas/SaasManage.html" },
        //     {
        //       text: "行业应用",
        //       url: "/guide/IndustryApplication/Overview.html",
        //     },
        //     {
        //       text: "设备管理",
        //       url: "/guide/deviceManage/operation/List.html",
        //     },
        //     {
        //       text: "资源管理",
        //       url: "/license/licenseMngment.html",
        //     },
        //     { text: "个人中心", url: "/guide/personalCenter/accout.html" },
        //   ],
        // },
        {
          icon: "/zh/homepage/量产说明.svg",
          title: { text: "量产说明", url: "/massProduct/process.html" },
          subList: [
            { text: "量产流程", url: "/massProduct/process.html" },
            { text: "设备二维码", url: "/massProduct/QRcode.html" },
          ],
        },
        {
          icon: "/zh/homepage/工具.svg",
          title: {
            text: "工具",
            url: "/tool/QthTools-debug/QthTools-MCU_Simulator/summary.html",
          },
          subList: [
            {
              text: "调试工具",
              url: "/tool/QthTools-debug/QthTools-MCU_Simulator/summary.html",
            },
            {
              text: "开发工具",
              url: "/tool/QthTools-develop/QthTools-DTU_Modbus/summary.html",
            },
            {
              text: "生产工具",
              url: "/tool/QthTools-factory/QthTools-SN2IMEI_Binding/summary.html",
            },
          ],
        },
        {
          icon: "/zh/homepage/常见问题.svg",
          title: { text: "常见问题", url: "/problem/page-01.html" },
          subList: [
            { text: "产品使用问题", url: "/problem/page-01.html" },
            { text: "商务咨询问题", url: "/problem/page-02.html" },
            { text: "业务问题", url: "/problem/page-03.html" },
          ],
        },
        {
          icon: "/zh/homepage/联系我们.svg",
          title: { text: "联系我们", url: "/contactUs/" },
          subList: [],
        },
      ],
    },
    en: {
      title: "Developer Center",
      banner: "/en/homepage/index-banner-bg.png",
      desc: "Developer Center offers a comprehensive communication solution that facilitates fast connection, efficient data transmission, secure data storage, and effective data management for multiple terminal devices. By calling APIs available on the Developer Center, data can be seamlessly exchanged between massive devices and applications, enabling remote controlling and data collection capabilities.",
      bannerNavs: [
        { url: "/introduction/page-01.html", text: "What is Developer Center" },
        { url: "/introduction/page-02.html", text: "Features" },
        { url: "/introduction/page-03.html", text: "Terms" },
        { url: "/introduction/page-05.html", text: "Supported Regions" },
      ],
      learnPathLabel: "Learning Path",
      learnPaths: [
        {
          icon: "/en/homepage/快速入门.svg",
          title: { text: "Quick Start", url: "/quickStart/Overview.html" },
          subList: [
            { text: "Overview", url: "/quickStart/Overview.html" },
            {
              text: "Registration Guidance",
              url: "/quickStart/register.html",
            },
            {
              text: "Product Development",
              url: "/quickStart/ProductDevelop.html",
            },
            { text: "Mobile App Development", url: "/quickStart/App.html" },
            {
              text: "SaaS Application Development",
              url: "/quickStart/Saas.html",
            },
          ],
        },
        {
          icon: "/en/homepage/激活码管理.svg",
          title: { text: "Activation Code", url: "/quickStart/Overview.html" },
          subList: [
            { text: "Product Activation Code", url: "/license/LicenseIntroduction.html" },
            { text: "License Management", url: "/license/licenseMngment.html" },
            { text: "Excess Billing", url: "/license/billCenter.html" },
            { text: "Usage Monitoring", url: "/license/statistics/page-01.html" },
          ],
        },
        {
          icon: "/en/homepage/设备开发.svg",
          title: {
            text: "Device Development",
            url: "/deviceDevelop/DeviceAccessPlan/speediness-01.html",
          },
          subList: [
            { text: "Manage Product", url: "/deviceDevelop/ProductDevelop/ProductManagement.html" },
            { text: "Device Access Solutions", url: "/deviceDevelop/DeviceAccessPlan/AccessPlan.html" },
            { text: "Device Management", url: "/deviceDevelop/DeviceManage/operation/List.html" },
            // {
            //   text: "Preparation",
            //   url: "/deviceDevelop/DeviceAccessPlan/speediness-01.html",
            // },
            // {
            //   text: "Device Access Solutions",
            //   url: "/deviceDevelop/DeviceAccessPlan/AccessPlan.html",
            // },
            // {
            //   text: "AT Command Solution",
            //   url: "/deviceDevelop/cellular/speediness/AT/speediness-at-02.html",
            // },
            // {
            //   text: "Serial Communication Protocol Solution",
            //   url: "/deviceDevelop/cellular/SerialCommProtocol/speediness-02.html",
            // },
            // {
            //   text: "QuecOpen Solution",
            //   url: "/deviceDevelop/cellular/speediness/QuecOpen/speediness-quecopen-01.html",
            // },
            // {
            //   text: "DTU-Modbus Solution",
            //   url: "/deviceDevelop/cellular/DTU/speediness/cellular-dtu-01.html",
            // },
            // {
            //   text: "2G/3G/4G/5G",
            //   url: "/deviceDevelop/cellular/speediness/speediness-01.html",
            // },
            // {
            //   text: "Wi-Fi",
            //   url: "/deviceDevelop/wifi/speediness/speediness-01.html",
            // },
            // {
            //   text: "NB-IoT",
            //   url: "/deviceDevelop/nb/speediness_ctwing/speediness-01.html",
            // },
            // { text: "BLE", url: "/deviceDevelop/ble/page-01.html" },
            // {
            //   text: "Gateway Sub-device",
            //   url: "/deviceDevelop/subDevice/page-01.html",
            // },
            // {
            //   text: "QuecThing SDK Porting",
            //   url: "/deviceDevelop/ModuleAccess/page-01.html",
            // },
          ],
        },
        {
          icon: "/en/homepage/app应用开发.svg",
          title: {
            text: "Mobile App Development",
            url: "/appDevelop/ready.html",
          },
          subList: [
            {
              text: "Overview of App Data Communication",
              url: "/appDevelop/ready.html",
            },
            { text: "OEM App", url: "/appDevelop/OEMApp/introduce.html" },
            { text: "App SDK", url: "/appDevelop/AppSDK/AppManagement.html" },
            { text: "OpenAPI User Guide", url: "/appDevelop/OpenAPI.html" },
            {
              text: "Error Code Summary",
              url: "/appDevelop/errorCode.html",
            },
            // {
            //   text: "WebSocket User Guide",
            //   url: "/appDevelop/websocket/guide.html",
            // },
            // {
            //   text: "Android SDK User Guide",
            //   url: "/appDevelop/AndroidSDK.html",
            // },
            // { text: "iOS SDK User Guide", url: "/appDevelop/iosSDK.html" },
            // {
            //   text: "Device Network Pairing Process",
            //   url: "/appDevelop/networkDescription.html",
            // },
          ],
        },
        {
          icon: "/en/homepage/saas应用开发.svg",
          title: {
            text: "SaaS Application Development",
            url: "/saasDevelop/CommunicatOverview.html",
          },
          subList: [
            {
              text: "SaaS Application Data Communication",
              url: "/saasDevelop/CommunicatOverview.html",
            },
            { text: "SaaS Management", url: "/saasDevelop/SaaSManagement/SaaSManage.html" },
            // {
            //   text: "Quick Access Guide",
            //   url: "/saasDevelop/QuickStart/SaasManage.html",
            // },
            {
              text: "OpenAPI User Guide",
              url: "/saasDevelop/OpenAPI/Overview.html",
            },
            {
              text: "Message Subscription Guide",
              url: "/saasDevelop/AMQPSubscription/subscription/AMQPinfo.html",
            },
            // {
            //   text: "Data Format",
            //   url: "/saasDevelop/AMQPSubscription/DataFormat/overview.html",
            // },
            {
              text: "Error Code Summary",
              url: "/saasDevelop/errorCode.html",
            },
          ],
        },
        {
          icon: "/en/homepage/行业方案.svg",
          title: { text: "Industry and Services", url: "/industryApplication/Overview.html" },
          subList: [
            { text: "Overview", url: "/industryApplication/Overview.html" },
            { text: "Solutions By Industry", url: "/industryApplication/solution.html" },
          ],
        },
        {
          icon: "/en/homepage/量产说明.svg",
          title: {
            text: "Mass Production",
            url: "/massProduct/process.html",
          },
          subList: [
            {
              text: "Mass Production Process",
              url: "/massProduct/process.html",
            },
            { text: "Device QR Code", url: "/massProduct/QRcode.html" },
            {
              text: "Product Activation Code",
              url: "/license/LicenseIntroduction.html",
            },
          ],
        },
        {
          icon: "/en/homepage/工具.svg",
          title: {
            text: "Tool",
            url: "/tool/QthTools-debug/QthTools-MCU_Simulator/summary.html",
          },
          subList: [
            {
              text: "Debugging Tool",
              url: "/tool/QthTools-debug/QthTools-MCU_Simulator/summary.html",
            },
            {
              text: "Development Tool",
              url: "/tool/QthTools-develop/QthTools-DTU_Modbus/summary.html",
            },
            {
              text: "Production Tool",
              url: "/tool/QthTools-factory/QthTools-SN2IMEI_Binding/summary.html",
            },
          ],
        },
        {
          icon: "/en/homepage/常见问题.svg",
          title: { text: "FAQ", url: "/problem/page-01.html" },
          subList: [
            {
              text: "FAQs About Product Usage",
              url: "/problem/page-01.html",
            },
            {
              text: "FAQs About Consultation",
              url: "/problem/page-02.html",
            },
            { text: "FAQs About Business", url: "/problem/page-03.html" },
          ],
        },
        {
          icon: "/en/homepage/联系我们.svg",
          title: { text: "Contact Us", url: "/contactUs/" },
          subList: [],
        },
      ],
    },
  };
};
