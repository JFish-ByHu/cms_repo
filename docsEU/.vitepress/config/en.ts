import { defineConfig, type DefaultTheme } from "vitepress";

export const en = defineConfig({
  lang: "en-US",
  description: "Vite & Vue powered static site generator.",

  themeConfig: {
    logo: "/favicon.png",
    siteTitle: "Documentation",
    nav: nav(),
    sidebar: [
      {
        text: "Home Page",
        link: "/homepage/",
      },
      {
        text: "Platform Introduction",
        collapsed: true,
        items: [
          { text: "What is Developer Center", link: "/introduction/page-01" },
          { text: "Terms", link: "/introduction/page-03" },
          { text: "Supported Regions", link: "/introduction/page-05" },
        ],
      },
      {
        text: "Quick Start",
        collapsed: true,
        items: [
          { text: "Overview", link: "/quickStart/Overview" },
          { text: "Registration Guidance", link: "/quickStart/register" },
          {
            text: "Product Creation and Definition",
            link: "/quickStart/CreatProduct",
          },
          {
            text: "Connect Devices to Developer Center",
            link: "/quickStart/DeviceConnect",
          },
          {
            text: "Device Communication Debugging",
            link: "/quickStart/DeviceDebug",
          },
        ],
      },
      {
        text: "Personal Center",
        collapsed: true,
        items: [
          { text: "Personal Account", link: "/personalCenter/Accout" },
          { text: "Permission Management", link: "/personalCenter/Role" },
          { text: "Logs", link: "/personalCenter/Audit" },
          { text: "Message Center", link: "/personalCenter/MessageCenter" },
          { text: "My Ticket", link: "/personalCenter/WorkOrder" },
        ],
      },
      {
        text: "Activation Code",
        collapsed: true,
        items: [
          {
            text: "Product Activation Code",
            link: "/license/LicenseIntroduction",
          },
          {
            text: "Activation Code Management",
            link: "/license/licenseMngment",
          },
          {
            text: "Usage Monitoring",
            collapsed: true,
            items: [
              {
                text: "Device Message Statistics",
                link: "/license/statistics/page-01",
              },
              {
                text: "Device OTA Upgrade Statistics",
                link: "/license/statistics/page-02",
              },
              {
                text: "Service Subscription Statistics",
                link: "/license/statistics/page-03",
              },
            ],
          },
          {
            text: "Resource Package Usage Statistics",
            link: "/license/sourceStatistics",
          },
          { text: "Excess Billing", link: "/license/billCenter" },
        ],
      },
      {
        text: "Device Development",
        collapsed: true,
        items: [
          {
            text: "Manage Product",
            collapsed: true,
            items: [
              {
                text: "Create a Product",
                link: "/deviceDevelop/ProductDevelop/ProductManagement",
              },
              {
                text: "Define Feature",
                collapsed: true,
                items: [
                  {
                    text: "TSL Overview",
                    link: "/deviceDevelop/ProductDevelop/definition/page-01",
                  },
                  {
                    text: "Standard Features",
                    link: "/deviceDevelop/ProductDevelop/definition/page-02",
                  },
                  {
                    text: "Custom Feature",
                    link: "/deviceDevelop/ProductDevelop/definition/page-03",
                  },
                ],
              },
              {
                text: "Product Interaction",
                link: "/deviceDevelop/ProductDevelop/ProductInteraction",
              },
              {
                text: "Hardware Development",
                link: "/deviceDevelop/ProductDevelop/DeviceDev",
              },
              {
                text: "Product Configuration",
                link: "/deviceDevelop/ProductDevelop/ProductConfig",
              },
              {
                text: "Debugging Releases",
                link: "/deviceDevelop/ProductDevelop/ProductRelease",
              },
              {
                text: "Device CA Certificate",
                link: "/deviceDevelop/ProductDevelop/DeviceCALicense",
              },
            ],
          },
          {
            text: "Device Access Solutions",
            collapsed: true,
            items: [
              {
                text: "Solutions Introduction",
                link: "/deviceDevelop/DeviceAccessPlan/AccessPlan",
              },
              {
                text: "AT Command Solution(2/3/4/5G)",
                collapsed: true,
                items: [
                  {
                    text: "MCU Simulator Quick Access",
                    collapsed: true,
                    items: [
                      {
                        text: "Device Hardware Configuration",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/speediness/speediness-at-02",
                      },
                      {
                        text: "Quick Access to Developer Center",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/speediness/speediness-at-03",
                      },
                      {
                        text: "Data Interaction",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/speediness/speediness-at-04",
                      },
                      {
                        text: "Device Binding On Wonderfree",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/speediness/speediness-at-05",
                      },
                    ],
                  },
                  {
                    text: "Example",
                    collapsed: true,
                    items: [
                      {
                        text: "Example of Product Configuration and Quick Access",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/example/cellular-at-example-01",
                      },
                      {
                        text: "Example of TSL Data Interaction",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/example/cellular-at-example-02-1",
                      },
                      {
                        text: "Example of Transparent Transmission Data Interaction",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/example/cellular-at-example-02-2",
                      },
                      {
                        text: "FOTA Upgrade Example",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/example/cellular-at-example-03-1",
                      },
                      {
                        text: "SOTA Upgrade Example",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/example/cellular-at-example-03-2",
                      },
                      {
                        text: "GNSS&LBS&Wi-Fi Positioning Example",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/example/cellular-at-example-04",
                      },
                      {
                        text: "Example of Sub-device Quick Access",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/example/cellular-at-example-05",
                      },
                    ],
                  },
                  {
                    text: "IoT AT Command",
                    collapsed: true,
                    items: [
                      {
                        text: "AT Command Overview",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-02",
                      },
                      {
                        text: "Product Configuration Command",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-03",
                      },
                      {
                        text: "Data Interaction Command",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-04",
                      },
                      {
                        text: "OTA Upgrade Command",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-05",
                      },
                      {
                        text: "GNSS&LBS&Wi-Fi Positioning Command",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-07",
                      },
                      {
                        text: "Device Authorization Command",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-08",
                      },
                      {
                        text: "Value-Added Service Command",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-09",
                      },
                      {
                        text: "Gateway Sub-device Command",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-10",
                      },
                    ],
                  },
                  {
                    text: "Interaction Event",
                    link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/InteractionEvent",
                  },
                  {
                    text: "FAQs",
                    link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/F_Q",
                  },
                  {
                    text: "Revision History",
                    link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/RevisionHistory",
                  },
                ],
              },

              {
                text: "QuecOpen Solution(2/3/4/5G)",
                collapsed: true,
                items: [
                  {
                    text: "Quick Access",
                    collapsed: true,
                    items: [
                      //{ text: "Development Environment Configuration", link: "/deviceDevelop/cellular/speediness/QuecOpen/speediness-quecopen-01",},
                      {
                        text: "SDK Description",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/speediness/speediness-quecopen-02",
                      },
                      {
                        text: "Program Code",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/speediness/speediness-quecopen-03",
                      },
                      {
                        text: "Presentation",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/speediness/speediness-quecopen-04",
                      },
                      {
                        text: "Device Binding On Wonderfree",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/speediness/speediness-quecopen-05",
                      },
                    ],
                  },
                  {
                    text: "Example",
                    collapsed: true,
                    items: [
                      {
                        text: "Example of Product Configuration and Quick Access",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/example/cellular-quecopen-example-01",
                      },
                      {
                        text: "Example of TSL Data Interaction",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/example/data/cellular-quecopen-example-01",
                      },
                      {
                        text: "Example of Transparent Transmission Data Interaction",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/example/data/cellular-quecopen-example-02",
                      },
                      {
                        text: "FOTA Upgrade Example",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/example/ota/cellular-quecopen-example-01",
                      },
                      {
                        text: "SOTA Upgrade Example",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/example/ota/cellular-quecopen-example-02",
                      },
                      {
                        text: "GNSS&LBS&Wi-Fi Positioning Example",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/example/cellular-quecopen-example-02",
                      },
                      {
                        text: "DTU-Modbus Example",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/example/cellular-quecopen-example-03",
                      },
                      {
                        text: "Example of Sub-device Quick Access",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/example/cellular-quecopen-example-04",
                      },
                    ],
                  },
                  {
                    text: "QTHSDK API",
                    collapsed: true,
                    items: [
                      {
                        text: "API Overview",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-01",
                      },
                      {
                        text: "Product Configuration API",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-02",
                      },
                      {
                        text: "Data Interaction API",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-03",
                      },
                      {
                        text: "TTLV Data API",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-04",
                      },
                      {
                        text: "OTA Upgrade API",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-05",
                      },
                      {
                        text: "GNSS&LBS&Wi-Fi Positioning API",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-07",
                      },
                      {
                        text: "Device Authorization API",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-08",
                      },
                      {
                        text: "DTU-Modbus API",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-09",
                      },
                      {
                        text: "Value-Added Service API",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-10",
                      },
                      {
                        text: "Gateway Sub-device API",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-11",
                      },
                    ],
                  },
                  {
                    text: "Interaction Event",
                    link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/InteractionEvent",
                  },
                  {
                    text: "FAQs",
                    link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/F_Q",
                  },
                  {
                    text: "Revision History",
                    link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/RevisionHistory",
                  },
                ],
              },
              {
                text: "QuecPython Solution(2/3/4/5G)",
                collapsed: true,
                items: [
                  {
                    text: "Quick Access",
                    collapsed: true,
                    items: [
                      {
                        text: "Development Environment Configuration",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/speediness/speediness-quecpython-01",
                      },
                      {
                        text: "Write Python Script",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/speediness/speediness-quecpython-02",
                      },
                      {
                        text: "Presentation",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/speediness/speediness-quecpython-03",
                      },
                      {
                        text: "Device Binding On Wonderfree",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/speediness/speediness-quecpython-04",
                      },
                    ],
                  },
                  {
                    text: "Example",
                    collapsed: true,
                    items: [
                      {
                        text: "Example of Product Configuration and Quick Access",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/example/quecpython-example-01",
                      },
                      {
                        text: "Example of TSL Data Interaction",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/example/data/quecpython-example-01",
                      },
                      {
                        text: "Example of Transparent Transmission Data Interaction",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/example/data/quecpython-example-02",
                      },
                      {
                        text: "FOTA Upgrade Example",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/example/ota/quecpython-example-01",
                      },
                      {
                        text: "Script Upgrade Example",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/example/ota/quecpython-example-02",
                      },
                      {
                        text: "SOTA Upgrade Example",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/example/ota/quecpython-example-03",
                      },
                    ],
                  },
                  {
                    text: "QTHSDK API",
                    collapsed: true,
                    items: [
                      {
                        text: "API Overview",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-01",
                      },
                      {
                        text: "Product Configuration API",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-02",
                      },
                      {
                        text: "Network Configuration API",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-03",
                      },
                      {
                        text: "Device Connection API",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-04",
                      },
                      {
                        text: "Data Interaction API",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-05",
                      },
                      {
                        text: "OTA Upgrade API",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-06",
                      },
                    ],
                  },
                  {
                    text: "Error Code List",
                    link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/InteractionEvent",
                  },
                  {
                    text: "Revision History",
                    link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/RevisionHistory",
                  }, //待完善
                ],
              },
              {
                text: "QuecOpen Solution(Wi-Fi)",
                collapsed: true,
                items: [
                  {
                    text: "Quick Access",
                    collapsed: true,
                    items: [
                      {
                        text: "SDK Description",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/speediness/speediness-quecopen-01",
                      }, // SDK说明流程ui图需要修改与代码流程一致
                      // { text: "Development Environment Configuration", link: "/deviceDevelop/wifi/QuecOpen/speediness/speediness-quecopen-02",},
                      {
                        text: "Program Code",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/speediness/speediness-quecopen-03",
                      },
                      {
                        text: "Device Binding On Wonderfree",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/speediness/speediness-quecopen-04",
                      },
                      {
                        text: "Presentation",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/speediness/speediness-quecopen-05",
                      },
                    ],
                  },
                  {
                    text: "Example",
                    collapsed: true,
                    items: [
                      {
                        text: "Example of Product Configuration and Quick Access",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/example/quecopen-example-01",
                      },
                      {
                        text: "Example of TSL Data Interaction",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/example/data/quecopen-example-01",
                      },
                      {
                        text: "Example of Transparent Transmission Data Interaction",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/example/data/quecopen-example-02",
                      },
                      {
                        text: "FOTA Upgrade Example",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/example/ota/quecopen-example-01",
                      },
                      {
                        text: "SOTA Upgrade Example",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/example/ota/quecopen-example-02",
                      },
                      {
                        text: "GNSS&LBS&Wi-Fi Positioning Example",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/example/quecopen-example-02",
                      },
                      {
                        text: "Modbus-DTU Example",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/example/quecopen-example-03",
                      },
                      {
                        text: "Example of Sub-device Quick Access",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/example/quecopen-example-04",
                      },
                    ],
                  },
                  {
                    text: "QTHSDK API",
                    collapsed: true,
                    items: [
                      {
                        text: "API Overview",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-01",
                      },
                      {
                        text: "Product Configuration API",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-02",
                      },
                      {
                        text: "Device Connection API",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-03",
                      },
                      {
                        text: "Network Provisioning API",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-04",
                      },
                      {
                        text: "Data Interaction API",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-05",
                      },
                      {
                        text: "TTLV Data API",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-06",
                      },
                      {
                        text: "OTA Upgrade API",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-07",
                      },
                      {
                        text: "GNSS&LBS&Wi-Fi Positioning API",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-08",
                      },
                      {
                        text: "Modbus-DTU API",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-09",
                      },
                      {
                        text: "Gateway Sub-device API",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-10",
                      },
                    ],
                  },
                  {
                    text: "Error Code List",
                    link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/InteractionEvent",
                  },
                  {
                    text: "Revision History",
                    link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/RevisionHistory",
                  }, //待完善
                ],
              },
              {
                text: "AT Command Solution(NB)",
                collapsed: true,
                items: [
                  {
                    text: "MCU Simulator Quick Access",
                    collapsed: true,
                    items: [
                      {
                        text: "Device Hardware Configuration",
                        link: "/deviceDevelop/DeviceAccessPlan/nb/AT/speediness/speediness-at-02",
                      },
                      {
                        text: "Quick Access to Developer Center",
                        link: "/deviceDevelop/DeviceAccessPlan/nb/AT/speediness/speediness-at-03",
                      },
                      {
                        text: "Data Interaction",
                        link: "/deviceDevelop/DeviceAccessPlan/nb/AT/speediness/speediness-at-04",
                      },
                      {
                        text: "Device Binding On Wonderfree",
                        link: "/deviceDevelop/DeviceAccessPlan/nb/AT/speediness/speediness-at-05",
                      },
                    ],
                  },
                  {
                    text: "Example",
                    collapsed: true,
                    items: [
                      {
                        text: "Example of Product Configuration and Quick Access",
                        link: "/deviceDevelop/DeviceAccessPlan/nb/AT/example/nb-at-example-01",
                      },
                      {
                        text: "Example of TSL Data Interaction",
                        link: "/deviceDevelop/DeviceAccessPlan/nb/AT/example/nb-at-example-02-1",
                      },
                      {
                        text: "Example of Transparent Transmission Data Interaction",
                        link: "/deviceDevelop/DeviceAccessPlan/nb/AT/example/nb-at-example-02-2",
                      },
                      {
                        text: "GNSS&LBS&Wi-Fi Positioning Example",
                        link: "/deviceDevelop/DeviceAccessPlan/nb/AT/example/nb-at-example-04",
                      },
                    ],
                  },
                  {
                    text: "IoT AT Command",
                    collapsed: true,
                    items: [
                      {
                        text: "AT Command Overview",
                        link: "/deviceDevelop/DeviceAccessPlan/nb/AT/API/nb-at-02",
                      },
                      {
                        text: "Product Configuration Command",
                        link: "/deviceDevelop/DeviceAccessPlan/nb/AT/API/nb-at-03",
                      },
                      {
                        text: "Data Interaction Command",
                        link: "/deviceDevelop/DeviceAccessPlan/nb/AT/API/nb-at-04",
                      },
                      {
                        text: "OTA Upgrade Command",
                        link: "/deviceDevelop/DeviceAccessPlan/nb/AT/API/nb-at-05",
                      },
                      {
                        text: "GNSS&LBS&Wi-Fi Positioning Command",
                        link: "/deviceDevelop/DeviceAccessPlan/nb/AT/API/nb-at-06",
                      },
                    ],
                  },
                  {
                    text: "Interaction Event",
                    link: "/deviceDevelop/DeviceAccessPlan/nb/AT/InteractionEvent",
                  },
                  {
                    text: "FAQs",
                    link: "/deviceDevelop/DeviceAccessPlan/nb/AT/F_Q",
                  },
                  {
                    text: "Revision History",
                    link: "/deviceDevelop/DeviceAccessPlan/nb/AT/RevisionHistory",
                  },
                ],
              },
              {
                text: "DTU-Modbus Solution",
                collapsed: true,
                items: [
                  {
                    text: "Operations on Developer Center",
                    link: "/deviceDevelop/DeviceAccessPlan/modbus_dtu/speediness/speediness-dtu-01",
                  },
                  {
                    text: "Operations on QthTools-DTU Modbus",
                    link: "/deviceDevelop/DeviceAccessPlan/modbus_dtu/speediness/speediness-dtu-02",
                  },
                  {
                    text: "Operations on Device",
                    link: "/deviceDevelop/DeviceAccessPlan/modbus_dtu/speediness/speediness-dtu-03",
                  },
                  {
                    text: "Presentation",
                    link: "/deviceDevelop/DeviceAccessPlan/modbus_dtu/speediness/speediness-dtu-04",
                  },
                  {
                    text: "Device Binding On Wonderfree",
                    link: "/deviceDevelop/DeviceAccessPlan/modbus_dtu/speediness/speediness-dtu-05",
                  },
                ],
              },
              {
                text: "Knowledge Base",
                collapsed: true,
                items: [
                  {
                    text: "AT Command Introduction",
                    link: "/deviceDevelop/DeviceAccessPlan/KnowledgeBase/page-01",
                  },
                  {
                    text: "The Differences Between TTLV Data and  N Data",
                    link: "/deviceDevelop/DeviceAccessPlan/KnowledgeBase/page-02",
                  },
                  {
                    text: "Steps to Capture Logs with CATStudio",
                    link: "/deviceDevelop/DeviceAccessPlan/KnowledgeBase/page-03",
                  },
                  {
                    text: "Steps to Capture Logs with Coolwatcher",
                    link: "/deviceDevelop/DeviceAccessPlan/KnowledgeBase/page-04",
                  },
                  {
                    text: "Wi-Fi Device Firmware Download",
                    link: "/deviceDevelop/DeviceAccessPlan/KnowledgeBase/page-06",
                  },
                  {
                    text: "Wi-Fi Device OTA Upgrade Package Making",
                    link: "/deviceDevelop/DeviceAccessPlan/KnowledgeBase/page-07",
                  },
                ],
              },
            ],
          },
          {
            text: "Device Management",
            collapsed: true,
            items: [
              {
                text: "Device Maintenance",
                collapsed: true,
                items: [
                  {
                    text: "Device List",
                    link: "/deviceDevelop/DeviceManage/operation/List",
                  },
                  {
                    text: "Pre-import Management",
                    link: "/deviceDevelop/DeviceManage/operation/preDevice",
                  },
                  {
                    text: "Device Information",
                    link: "/deviceDevelop/DeviceManage/operation/Info",
                  },
                  {
                    text: "Data Logs",
                    link: "/deviceDevelop/DeviceManage/operation/DataLog",
                  },
                  {
                    text: "Error Logs",
                    link: "/deviceDevelop/DeviceManage/operation/ErrorLog",
                  },
                  {
                    text: "Event Logs",
                    link: "/deviceDevelop/DeviceManage/operation/EventLog",
                  },
                  {
                    text: "Running State",
                    link: "/deviceDevelop/DeviceManage/operation/Run",
                  },
                  {
                    text: "Service Calls",
                    link: "/deviceDevelop/DeviceManage/operation/Serve",
                  },
                  {
                    text: "Device Debugging",
                    link: "/deviceDevelop/DeviceManage/operation/Debugger",
                  },
                  {
                    text: "Device Positioning",
                    link: "/deviceDevelop/DeviceManage/operation/Location",
                  },
                  {
                    text: "Resource performance",
                    link: "/deviceDevelop/DeviceManage/operation/ResourceUsg",
                  },
                ],
              },
              {
                text: "OTA Upgrade",
                collapsed: true,
                items: [
                  {
                    text: "OTA Overview",
                    collapsed: true,
                    items: [
                      {
                        text: "OTA Capability of Developer Center",
                        link: "/deviceDevelop/DeviceManage/ota/page-01",
                      },
                      {
                        text: "Upgrade Process Overview",
                        link: "/deviceDevelop/DeviceManage/ota/page-02",
                      },
                      {
                        text: "OTA Upgrade Process",
                        collapsed: true,
                        items: [
                          {
                            text: "Add a Firmware Upgrade Package",
                            link: "/deviceDevelop/DeviceManage/ota/part02/page-01",
                          },
                          {
                            text: "Verify Firmware (Optional)",
                            link: "/deviceDevelop/DeviceManage/ota/part02/page-02",
                          },
                          {
                            text: "Create an Upgrade Plan",
                            link: "/deviceDevelop/DeviceManage/ota/part02/page-03",
                          },
                          {
                            text: "Configure the Upgrade Text",
                            link: "/deviceDevelop/DeviceManage/ota/part02/page-04",
                          },
                          {
                            text: "View the Upgrade Status",
                            link: "/deviceDevelop/DeviceManage/ota/part02/page-05",
                          },
                          {
                            text: "Retry the Upgrade Plan",
                            link: "/deviceDevelop/DeviceManage/ota/part02/page-05s",
                          },
                          {
                            text: "Manage the Upgrade Plan",
                            link: "/deviceDevelop/DeviceManage/ota/part02/page-06",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    text: "OTA Upgrade for Bluetooth Device",
                    link: "/deviceDevelop/DeviceManage/ota/page-03",
                  },
                  {
                    text: "OTA Upgrade for Sub-devices",
                    link: "/deviceDevelop/DeviceManage/ota/page-04",
                  },
                  {
                    text: "Related OpenAPIs",
                    link: "/deviceDevelop/DeviceManage/ota/page-05",
                  },
                ],
              },
              {
                text: "Virtual Device",
                link: "/deviceDevelop/DeviceManage/virtual/VirtualDevice",
              },
            ],
          },
        ],
      },
      {
        text: "Mobile App Development",
        collapsed: true,
        items: [
          {
            text: "Overview of App Data Communication",
            link: "/appDevelop/ready",
          },
          {
            text: "OEM App",
            collapsed: true,
            items: [
              { text: "Introduction", link: "/appDevelop/OEMApp/introduce" },
              {
                text: "App",
                collapsed: true,
                items: [
                  {
                    text: "Create iOS Certificate",
                    link: "/appDevelop/OEMApp/app/ios-cert",
                  },
                  {
                    text: "Create Android Certificate",
                    link: "/appDevelop/OEMApp/app/android-jks",
                  },
                  {
                    text: "Test iOS App on TestFlight",
                    link: "/appDevelop/OEMApp/app/testflight",
                  },
                  {
                    text: "Publish iOS App",
                    link: "/appDevelop/OEMApp/app/ios-app-store",
                  },
                  {
                    text: "Fill in Data Safety Questionnaire (Google Play)",
                    link: "/appDevelop/OEMApp/app/google-data-inof",
                  },
                  {
                    text: "Publish Android App (International Version)",
                    link: "/appDevelop/OEMApp/app/google-playstore",
                  },
                  {
                    text: "Obtain iOS App Download Link in App Store ",
                    link: "/appDevelop/OEMApp/app/appstore-link",
                  },
                ],
              },
              {
                text: "Push",
                collapsed: true,
                items: [
                  {
                    text: "Configure Google Push Service",
                    link: "/appDevelop/OEMApp/push/google-push",
                  },
                  {
                    text: "Configure Cloud Push Service",
                    link: "/appDevelop/OEMApp/push/cloud-push",
                  },
                ],
              },
              {
                text: "Map",
                collapsed: true,
                items: [
                  {
                    text: "Configure Google Maps",
                    link: "/appDevelop/OEMApp/map/googleMap",
                  },
                ],
              },
            ],
          },
          {
            text: "App SDK",
            collapsed: true,
            items: [
              {
                text: "iOS SDK User Guide",
                collapsed: true,
                items: [
                  {
                    text: "Quick Integration",
                    link: "/appDevelop/iOSGuide/Quick Integration",
                  },
                  {
                    text: "User Account",
                    link: "/appDevelop/iOSGuide/User Account",
                    collapsed: true,
                    items: [
                      {
                        text: "Phone Number",
                        link: "/appDevelop/iOSGuide/User Account - Phone Number",
                      },
                      {
                        text: "Email Address",
                        link: "/appDevelop/iOSGuide/User Account - Email Address",
                      },
                      {
                        text: "Third-party Platform",
                        link: "/appDevelop/iOSGuide/User Account - Third-party Platform",
                      },
                      {
                        text: "Account Details",
                        link: "/appDevelop/iOSGuide/User Account - Account Details",
                      },
                    ],
                  },
                  {
                    text: "Device Addition",
                    link: "/appDevelop/iOSGuide/Device Addition",
                    collapsed: true,
                    items: [
                      {
                        text: "Bluetooth-only Devices",
                        link: "/appDevelop/iOSGuide/Device Addition - Bluetooth-only Devices",
                      },
                      {
                        text: "Cellular Devices",
                        link: "/appDevelop/iOSGuide/Device Addition - Cellular Devices",
                      },
                      {
                        text: "Wi-Fi&BLE Dual-mode Devices",
                        link: "/appDevelop/iOSGuide/Device Addition - Wi-Fi&BLE Dual-mode Devices",
                      },
                    ],
                  },
                  {
                    text: "Device Control",
                    link: "/appDevelop/iOSGuide/Device Control",
                  },
                  {
                    text: "Device Management",
                    link: "/appDevelop/iOSGuide/Device Management",
                    collapsed: true,
                    items: [
                      {
                        text: "Device Group",
                        link: "/appDevelop/iOSGuide/Device Management - Device Group",
                      },
                      {
                        text: "Device Association",
                        link: "/appDevelop/iOSGuide/Device Management - Device Association",
                      },
                      {
                        text: "Device Sharing",
                        link: "/appDevelop/iOSGuide/Device Management - Device Sharing",
                      },
                      {
                        text: "Data Statistics",
                        link: "/appDevelop/iOSGuide/Device Management - Data Statistics",
                      },
                      {
                        text: "Device Upgrade",
                        link: "/appDevelop/iOSGuide/Device Management - Device Upgrade",
                      },
                      {
                        text: "Timed Task",
                        link: "/appDevelop/iOSGuide/Device Management - Timed Task",
                      },
                    ],
                  },
                  {
                    text: "Home Management",
                    link: "/appDevelop/iOSGuide/Home Management",
                    collapsed: true,
                    items: [
                      {
                        text: "Home Information",
                        link: "/appDevelop/iOSGuide/Home Management - Home Information",
                      },
                      {
                        text: "Room Information",
                        link: "/appDevelop/iOSGuide/Home Management - Room Information",
                      },
                      {
                        text: "Member Information",
                        link: "/appDevelop/iOSGuide/Home Management - Member Information",
                      },
                    ],
                  },
                  {
                    text: "Group",
                    link: "/appDevelop/iOSGuide/Group",
                  },
                  {
                    text: "Scene",
                    link: "/appDevelop/iOSGuide/Scene",
                  },
                  {
                    text: "Automation",
                    link: "/appDevelop/iOSGuide/Automation",
                  },
                  {
                    text: "Message Management",
                    link: "/appDevelop/iOSGuide/Message Management",
                  },
                ],
              },
              {
                text: "Android SDK User Guide",
                collapsed: true,
                items: [
                  {
                    text: "Quick Integration",
                    link: "/appDevelop/AndroidGuide/Quick Integration",
                  },
                  {
                    text: "User Account",
                    link: "/appDevelop/AndroidGuide/User Account",
                    collapsed: true,
                    items: [
                      {
                        text: "Phone Number",
                        link: "/appDevelop/AndroidGuide/User Account - Phone Number",
                      },
                      {
                        text: "Email Address",
                        link: "/appDevelop/AndroidGuide/User Account - Email Address",
                      },
                      {
                        text: "Third-party Platform",
                        link: "/appDevelop/AndroidGuide/User Account - Third-party Platform",
                      },
                      {
                        text: "Account Details",
                        link: "/appDevelop/AndroidGuide/User Account - Account Details",
                      },
                    ],
                  },
                  {
                    text: "Device Addition",
                    link: "/appDevelop/AndroidGuide/Device Addition",
                    collapsed: true,
                    items: [
                      {
                        text: "Bluetooth-only Devices",
                        link: "/appDevelop/AndroidGuide/Device Addition - Bluetooth-only Devices",
                      },
                      {
                        text: "Cellular Devices",
                        link: "/appDevelop/AndroidGuide/Device Addition - Cellular Devices",
                      },
                      {
                        text: "Wi-Fi&BLE Dual-mode Devices",
                        link: "/appDevelop/AndroidGuide/Device Addition - Wi-Fi&BLE Dual-mode Devices",
                      },
                    ],
                  },
                  {
                    text: "Device Control",
                    link: "/appDevelop/AndroidGuide/Device Control",
                  },
                  {
                    text: "Device Management",
                    link: "/appDevelop/AndroidGuide/Device Management",
                    collapsed: true,
                    items: [
                      {
                        text: "Device Group",
                        link: "/appDevelop/AndroidGuide/Device Management - Device Group",
                      },
                      {
                        text: "Device Association",
                        link: "/appDevelop/AndroidGuide/Device Management - Device Association",
                      },
                      {
                        text: "Device Sharing",
                        link: "/appDevelop/AndroidGuide/Device Management - Device Sharing",
                      },
                      {
                        text: "Data Statistics",
                        link: "/appDevelop/AndroidGuide/Device Management - Data Statistics",
                      },
                      {
                        text: "Device Upgrade",
                        link: "/appDevelop/AndroidGuide/Device Management - Device Upgrade",
                      },
                      {
                        text: "Timed Task",
                        link: "/appDevelop/AndroidGuide/Device Management - Timed Task",
                      },
                    ],
                  },
                  {
                    text: "Home Management",
                    link: "/appDevelop/AndroidGuide/Home Management",
                    collapsed: true,
                    items: [
                      {
                        text: "Home Information",
                        link: "/appDevelop/AndroidGuide/Home Management - Home Information",
                      },
                      {
                        text: "Room Information",
                        link: "/appDevelop/AndroidGuide/Home Management - Room Information",
                      },
                      {
                        text: "Member Information",
                        link: "/appDevelop/AndroidGuide/Home Management - Member Information",
                      },
                    ],
                  },
                  {
                    text: "Group",
                    link: "/appDevelop/AndroidGuide/Group",
                  },
                  {
                    text: "Scene",
                    link: "/appDevelop/AndroidGuide/Scene",
                  },
                  {
                    text: "Automation",
                    link: "/appDevelop/AndroidGuide/Automation",
                  },
                  {
                    text: "Message Management",
                    link: "/appDevelop/AndroidGuide/Message Management",
                  },
                ],
              },
            ],
          },
          {
            text: "OpenAPI User Guide",
            collapsed: true,
            items: [
              {
                text: "OpenAPI Integration Guide",
                link: "/appDevelop/OpenAPI/API_accessInstruction",
              },
              {
                text: "OpenAPI List",
                link: "/appDevelop/OpenAPI/APIList",
                collapsed: true,
                items: [
                  {
                    text: "Phone Number Password Registration",
                    link: "/appDevelop/OpenAPI/APIList/phonePwdRegister",
                  },
                  {
                    text: "Phone Number Password Login",
                    link: "/appDevelop/OpenAPI/APIList/phonePwdLogin",
                  },
                  {
                    text: "Associate Phone Number",
                    link: "/appDevelop/OpenAPI/APIList/relationPhone",
                  },
                  {
                    text: "Delete Phone Number Association",
                    link: "/appDevelop/OpenAPI/APIList/deletePhoneRelation",
                  },
                  {
                    text: "One-click Login with Local Phone Number",
                    link: "/appDevelop/OpenAPI/APIList/phoneAuthLogin",
                  },
                  {
                    text: "Email Password Registration",
                    link: "/appDevelop/OpenAPI/APIList/emailPwdRegister",
                  },
                  {
                    text: "Email Password Login",
                    link: "/appDevelop/OpenAPI/APIList/emailPwdLogin",
                  },
                  {
                    text: "Associate Email",
                    link: "/appDevelop/OpenAPI/APIList/relationEmail",
                  },
                  {
                    text: "Delete Email Association",
                    link: "/appDevelop/OpenAPI/APIList/deleteEmailRelation",
                  },
                  {
                    text: "Alipay Authorization Login",
                    link: "/appDevelop/OpenAPI/APIList/alipayAuthLogin",
                  },
                  {
                    text: "QQ Authorization Login",
                    link: "/appDevelop/OpenAPI/APIList/qqAuthLogin",
                  },
                  {
                    text: "WeChat Mini Program Authorization Login",
                    link: "/appDevelop/OpenAPI/APIList/wechatMiniprogramAuthLogin",
                  },
                  {
                    text: "WeChat Official Account Authorization Login",
                    link: "/appDevelop/OpenAPI/APIList/wechatOffiaccountAuthLogin",
                  },
                  {
                    text: "Apple Authorization Login",
                    link: "/appDevelop/OpenAPI/APIList/appleAuthLogin",
                  },
                  {
                    text: "Facebook Authorization Login",
                    link: "/appDevelop/OpenAPI/APIList/facebookAuthLogin",
                  },
                  {
                    text: "Twitter Authorization Login",
                    link: "/appDevelop/OpenAPI/APIList/twitterAuthLogin",
                  },
                  {
                    text: "Refresh Token",
                    link: "/appDevelop/OpenAPI/APIList/refreshToken",
                  },
                  {
                    text: "Modify User Phone Number",
                    link: "/appDevelop/OpenAPI/APIList/setPhone",
                  },
                  {
                    text: "Change User Password",
                    link: "/appDevelop/OpenAPI/APIList/setUserPwd",
                  },
                  {
                    text: "Delete User",
                    link: "/appDevelop/OpenAPI/APIList/userDelete",
                  },
                  {
                    text: "Query User Information",
                    link: "/appDevelop/OpenAPI/APIList/userInfo",
                  },
                  {
                    text: "Modify User Information",
                    link: "/appDevelop/OpenAPI/APIList/setUserInfo",
                  },
                  {
                    text: "User Logout",
                    link: "/appDevelop/OpenAPI/APIList/userLogout",
                  },
                  {
                    text: "Reset User Password",
                    link: "/appDevelop/OpenAPI/APIList/userPwdReset",
                  },
                  {
                    text: "Send SMS Verification Code",
                    link: "/appDevelop/OpenAPI/APIList/sendPhoneSmsCode",
                  },
                  {
                    text: "Send Email Verification Code",
                    link: "/appDevelop/OpenAPI/APIList/sendEmail",
                  },
                  {
                    text: "Query User Message List",
                    link: "/appDevelop/OpenAPI/APIList/userMsgList",
                  },
                  {
                    text: "Count User Message Types",
                    link: "/appDevelop/OpenAPI/APIList/getMsgStats",
                  },
                  {
                    text: "Read Message",
                    link: "/appDevelop/OpenAPI/APIList/readMsg",
                  },
                  {
                    text: "Delete Message",
                    link: "/appDevelop/OpenAPI/APIList/deleteMsg",
                  },
                  {
                    text: "Batch Delete Messages",
                    link: "/appDevelop/OpenAPI/APIList/batchDeleteMsg",
                  },
                  {
                    text: "Query User Push Message Types",
                    link: "/appDevelop/OpenAPI/APIList/getMsgPushSetting",
                  },
                  {
                    text: "Set User Push Message Types",
                    link: "/appDevelop/OpenAPI/APIList/setMsgPushSetting",
                  },
                  {
                    text: "Set Device Push ID and Language Information",
                    link: "/appDevelop/OpenAPI/APIList/setDeviceInfo",
                  },
                  {
                    text: "Delete Device Push ID",
                    link: "/appDevelop/OpenAPI/APIList/deleteDeviceInfo",
                  },
                  {
                    text: "Pure Bluetooth Device Binding",
                    link: "/appDevelop/OpenAPI/APIList/deviceBindingByPureBt",
                  },
                  {
                    text: "Bind Device Using DK",
                    link: "/appDevelop/OpenAPI/APIList/bindDeviceDk",
                  },
                  {
                    text: "Bind Device Using SN",
                    link: "/appDevelop/OpenAPI/APIList/bindDeviceSn",
                  },
                  {
                    text: "WiFi Device Binding",
                    link: "/appDevelop/OpenAPI/APIList/deviceBindingByWifi",
                  },
                  {
                    text: "Check If User Can Bind Device",
                    link: "/appDevelop/OpenAPI/APIList/getDeviceInfoByBinding",
                  },
                  {
                    text: "Query Device Information",
                    link: "/appDevelop/OpenAPI/APIList/deviceInfo",
                  },
                  {
                    text: "Query Device Time Zone",
                    link: "/appDevelop/OpenAPI/APIList/getDeviceTimeZone",
                  },
                  {
                    text: "Set Device Time Zone",
                    link: "/appDevelop/OpenAPI/APIList/setDeviceTimeZone",
                  },
                  {
                    text: "Query Product Manual",
                    link: "/appDevelop/OpenAPI/APIList/getProductManual",
                  },
                  {
                    text: "Modify Device Information",
                    link: "/appDevelop/OpenAPI/APIList/dmSetDeviceInfo",
                  },
                  {
                    text: "Query User's Device List",
                    link: "/appDevelop/OpenAPI/APIList/userDeviceList",
                  },
                  {
                    text: "Unbind Device Using PK, DK",
                    link: "/appDevelop/OpenAPI/APIList/unbundlingDeviceDk",
                  },
                  {
                    text: "Set Device Sharing Information by Sharer",
                    link: "/appDevelop/OpenAPI/APIList/shareInfo",
                  },
                  {
                    text: "Set Sharing Usage Time by Sharer",
                    link: "/appDevelop/OpenAPI/APIList/setShareTime",
                  },
                  {
                    text: "Share Device by Inviting User",
                    link: "/appDevelop/OpenAPI/APIList/shareByUid",
                  },
                  {
                    text: "Cancel Device Sharing by Owner",
                    link: "/appDevelop/OpenAPI/APIList/ownerUserUnshareDevice",
                  },
                  {
                    text: "Query Share Recipients List by Owner",
                    link: "/appDevelop/OpenAPI/APIList/deviceShareUserList",
                  },
                  {
                    text: "Accept Sharing by Recipient",
                    link: "/appDevelop/OpenAPI/APIList/shareDevice",
                  },
                  {
                    text: "Cancel Device Sharing by Recipient",
                    link: "/appDevelop/OpenAPI/APIList/shareUserUnshareDevice",
                  },
                  {
                    text: "Modify Shared Device Name by Recipient",
                    link: "/appDevelop/OpenAPI/APIList/changeShareDeviceName",
                  },
                  {
                    text: "Batch Get Pure Bluetooth Device Reset Credentials",
                    link: "/appDevelop/OpenAPI/APIList/batchGetPureBtResetCredentials",
                  },
                  {
                    text: "Set Bluetooth Last Use Time",
                    link: "/appDevelop/OpenAPI/APIList/setBtLastUseTime",
                  },
                  {
                    text: "Query Gateway Sub-device List",
                    link: "/appDevelop/OpenAPI/APIList/getGatewayDeviceChildList",
                  },
                  {
                    text: "Query Thing Model TSL",
                    link: "/appDevelop/OpenAPI/APIList/productTSL",
                  },
                  {
                    text: "Batch Control Devices",
                    link: "/appDevelop/OpenAPI/APIList/batchControlDevice",
                  },
                  {
                    text: "Query Device Business Attributes",
                    link: "/appDevelop/OpenAPI/APIList/getDeviceBusinessAttributes",
                  },
                  {
                    text: "Get Device Property Icon List",
                    link: "/appDevelop/OpenAPI/APIList/getPropertyChartList",
                  },
                  {
                    text: "Get Device Property Data List",
                    link: "/appDevelop/OpenAPI/APIList/getPropertyDataList",
                  },
                  {
                    text: "Get Device Property Statistics",
                    link: "/appDevelop/OpenAPI/APIList/getPropertyStatistics",
                  },
                  {
                    text: "Get Device Event List",
                    link: "/appDevelop/OpenAPI/APIList/deviceEventList",
                  },
                  {
                    text: "Get Device Location History",
                    link: "/appDevelop/OpenAPI/APIList/getLocationHistory",
                  },
                  {
                    text: "Enable/Disable Home Mode",
                    link: "/appDevelop/OpenAPI/APIList/enabledFamilyMode",
                  },
                  {
                    text: "Query User Home Mode Configuration",
                    link: "/appDevelop/OpenAPI/APIList/getFamilyModeConfig",
                  },
                  {
                    text: "Enable/Disable Auto Home Switching",
                    link: "/appDevelop/OpenAPI/APIList/enabledAutoSwitch",
                  },
                  {
                    text: "Create Home",
                    link: "/appDevelop/OpenAPI/APIList/addFamily",
                  },
                  {
                    text: "Delete Home",
                    link: "/appDevelop/OpenAPI/APIList/deleteFamily",
                  },
                  {
                    text: "Query Home List",
                    link: "/appDevelop/OpenAPI/APIList/getFamilyList",
                  },
                  {
                    text: "Query Current Home",
                    link: "/appDevelop/OpenAPI/APIList/getCurrentFamily",
                  },
                  {
                    text: "Modify Home",
                    link: "/appDevelop/OpenAPI/APIList/setFamily",
                  },
                  {
                    text: "Query Home Device List",
                    link: "/appDevelop/OpenAPI/APIList/getFamilyDeviceList",
                  },
                  {
                    text: "Set Device Information",
                    link: "/appDevelop/OpenAPI/APIList/familySetDeviceInfo",
                  },
                  {
                    text: "Query Home Room List",
                    link: "/appDevelop/OpenAPI/APIList/getFamilyRoomList",
                  },
                  {
                    text: "Create Room",
                    link: "/appDevelop/OpenAPI/APIList/addFamilyRoom",
                  },
                  {
                    text: "Modify Room",
                    link: "/appDevelop/OpenAPI/APIList/setFamilyRoom",
                  },
                  {
                    text: "Set Room Sort Order",
                    link: "/appDevelop/OpenAPI/APIList/setFamilyRoomSort",
                  },
                  {
                    text: "Add Device to Room",
                    link: "/appDevelop/OpenAPI/APIList/addDeviceInFamilyRoom",
                  },
                  {
                    text: "Query Room Device List",
                    link: "/appDevelop/OpenAPI/APIList/getFamilyRoomDeviceList",
                  },
                  {
                    text: "Delete Room",
                    link: "/appDevelop/OpenAPI/APIList/deleteFamilyRoom",
                  },
                  {
                    text: "Query Frequently Used Device List",
                    link: "/appDevelop/OpenAPI/APIList/getCommonUsedDeviceList",
                  },
                  {
                    text: "Add Frequently Used Device",
                    link: "/appDevelop/OpenAPI/APIList/addCommonUsedDevice",
                  },
                  {
                    text: "Remove Frequently Used Device",
                    link: "/appDevelop/OpenAPI/APIList/deleteCommonUsedDevice",
                  },
                  {
                    text: "Invite Home Member",
                    link: "/appDevelop/OpenAPI/APIList/inviteFamilyMember",
                  },
                  {
                    text: "Set Home Member Role",
                    link: "/appDevelop/OpenAPI/APIList/setFamilyMemberRole",
                  },
                  {
                    text: "Modify Home Member Name",
                    link: "/appDevelop/OpenAPI/APIList/setFamilyMemberName",
                  },
                  {
                    text: "Remove Home Member",
                    link: "/appDevelop/OpenAPI/APIList/deleteFamilyMember",
                  },
                  {
                    text: "Query Home Member List",
                    link: "/appDevelop/OpenAPI/APIList/getFamilyMemberList",
                  },
                  {
                    text: "Query Invitation List",
                    link: "/appDevelop/OpenAPI/APIList/getFamilyInviteList",
                  },
                  {
                    text: "Handle Home Member Invitation",
                    link: "/appDevelop/OpenAPI/APIList/familyMemberInviteHandle",
                  },
                  {
                    text: "Leave Home",
                    link: "/appDevelop/OpenAPI/APIList/leaveFamily",
                  },
                  {
                    text: "Create Scene",
                    link: "/appDevelop/OpenAPI/APIList/sceneCreate",
                  },
                  {
                    text: "Test Scene",
                    link: "/appDevelop/OpenAPI/APIList/sceneTest",
                  },
                  {
                    text: "Execute Scene",
                    link: "/appDevelop/OpenAPI/APIList/sceneExecute",
                  },
                  {
                    text: "Query Scene List",
                    link: "/appDevelop/OpenAPI/APIList/selectSceneList",
                  },
                  {
                    text: "Query Scene Details",
                    link: "/appDevelop/OpenAPI/APIList/selectSceneDetail",
                  },
                  {
                    text: "Edit Scene",
                    link: "/appDevelop/OpenAPI/APIList/sceneEdit",
                  },
                  {
                    text: "Delete Scene",
                    link: "/appDevelop/OpenAPI/APIList/sceneDelete",
                  },
                  {
                    text: "Batch Add Frequently Used Scenes",
                    link: "/appDevelop/OpenAPI/APIList/batchAddCommonScene",
                  },
                  {
                    text: "Query Frequently Used Scenes",
                    link: "/appDevelop/OpenAPI/APIList/selectCommonSceneList",
                  },
                  {
                    text: "Batch Remove Frequently Used Scenes",
                    link: "/appDevelop/OpenAPI/APIList/batchDeleteCommonScene",
                  },
                  {
                    text: "Query Scene Log List",
                    link: "/appDevelop/OpenAPI/APIList/selectSceneLogList",
                  },
                  {
                    text: "Query Scene Log Details",
                    link: "/appDevelop/OpenAPI/APIList/selectSceneLogDetail",
                  },
                  {
                    text: "Delete Log",
                    link: "/appDevelop/OpenAPI/APIList/deleteSceneLog",
                  },
                  {
                    text: "Query Automation Configuration",
                    link: "/appDevelop/OpenAPI/APIList/automationPublished",
                  },
                  {
                    text: "Create Automation",
                    link: "/appDevelop/OpenAPI/APIList/automationSave",
                  },
                  {
                    text: "Query Automation List",
                    link: "/appDevelop/OpenAPI/APIList/automationList",
                  },
                  {
                    text: "Query Automation Details",
                    link: "/appDevelop/OpenAPI/APIList/automationDetail",
                  },
                  {
                    text: "Enable/Disable Automation",
                    link: "/appDevelop/OpenAPI/APIList/automationStatus",
                  },
                  {
                    text: "Test Automation",
                    link: "/appDevelop/OpenAPI/APIList/automationTest",
                  },
                  {
                    text: "Query Automation Test Results",
                    link: "/appDevelop/OpenAPI/APIList/automationGetTestAutomation",
                  },
                  {
                    text: "Edit Automation",
                    link: "/appDevelop/OpenAPI/APIList/automationEdit",
                  },
                  {
                    text: "Delete Automation",
                    link: "/appDevelop/OpenAPI/APIList/automationDelete",
                  },
                  {
                    text: "Query Automation Log List",
                    link: "/appDevelop/OpenAPI/APIList/automationLogList",
                  },
                  {
                    text: "Query Automation Log Details",
                    link: "/appDevelop/OpenAPI/APIList/automationLogDetail",
                  },
                  {
                    text: "Delete Automation",
                    link: "/appDevelop/OpenAPI/APIList/automationLogClear",
                  },
                  {
                    text: "Create Scheduled Task",
                    link: "/appDevelop/OpenAPI/APIList/addCornJob",
                  },
                  {
                    text: "Query Scheduled Task List",
                    link: "/appDevelop/OpenAPI/APIList/getCronJobList",
                  },
                  {
                    text: "Query Scheduled Task Details",
                    link: "/appDevelop/OpenAPI/APIList/getCronJobInfo",
                  },
                  {
                    text: "Modify Scheduled Task",
                    link: "/appDevelop/OpenAPI/APIList/setCronJob",
                  },
                  {
                    text: "Delete Scheduled Task",
                    link: "/appDevelop/OpenAPI/APIList/batchDeleteCronJob",
                  },
                ],
              },
            ],
          },
          { text: "Error Code Summary", link: "/appDevelop/errorCode" },
          { text: "App Management", link: "/appDevelop/OpenAPI/AppManagement" },
          {
            text: "App Personalization",
            link: "/appDevelop/OpenAPI/AppPersonalization",
          },
        ],
      },
      {
        text: "SaaS Application Development",
        collapsed: true,
        items: [
          {
            text: "SaaS Application Data Communication",
            link: "/saasDevelop/CommunicatOverview",
          },
          {
            text: "OpenAPI User Guide",
            collapsed: true,
            items: [
              {
                text: "OpenAPI Integration Guide",
                link: "/saasDevelop/OpenAPI/API_accessInstruction",
              },
              {
                text: "OpenAPI SDK Integration Guide",
                link: "/saasDevelop/OpenAPI/SDK_AccessInstruction",
              },
              {
                text: "OpenAPI List",
                link: "/saasDevelop/OpenAPI/APIList",
                collapsed: true,
                items: [
                  //{ text: "获取token", link: "" },
                  {
                    text: "Refresh Token",
                    link: "/saasDevelop/OpenAPI/APIList/refreshToken",
                  },
                  {
                    text: "Query Product List",
                    link: "/saasDevelop/OpenAPI/APIList/productList",
                  },
                  {
                    text: "Query Product Details",
                    link: "/saasDevelop/OpenAPI/APIList/productDetail",
                  },
                  {
                    text: "Query Product Latest Thing Model",
                    link: "/saasDevelop/OpenAPI/APIList/productTSL",
                  },
                  {
                    text: "Query Device List Under Product",
                    link: "/saasDevelop/OpenAPI/APIList/deviceList",
                  },
                  {
                    text: "Query Device Details",
                    link: "/saasDevelop/OpenAPI/APIList/deviceDetail",
                  },
                  {
                    text: "Query Device Resources",
                    link: "/saasDevelop/OpenAPI/APIList/deviceResource",
                  },
                  //{ text: "Add Device (Single)", link: "/saasDevelop/OpenAPI/APIList/deviceCreate" },
                  //{ text: "Add Devices (Batch)", link: "/saasDevelop/OpenAPI/APIList/deviceCreateBatch" },
                  {
                    text: "Modify Device Information (Single)",
                    link: "/saasDevelop/OpenAPI/APIList/deviceUpdate",
                  },
                  {
                    text: "Modify Device Information (Batch)",
                    link: "/saasDevelop/OpenAPI/APIList/deviceUpdateBatch",
                  },
                  {
                    text: "Delete Device",
                    link: "/saasDevelop/OpenAPI/APIList/deviceDelete",
                  },
                  {
                    text: "Query Gateway Sub-devices",
                    link: "/saasDevelop/OpenAPI/APIList/gatewaySubList",
                  },
                  {
                    text: "Query Sub-device's Parent Gateway",
                    link: "/saasDevelop/OpenAPI/APIList/gatewayGetProductByChildDevice",
                  },
                  {
                    text: "Unbind Sub-device from Gateway",
                    link: "/saasDevelop/OpenAPI/APIList/gatewayUnbind",
                  },
                  {
                    text: "Read Device Thing Model Data",
                    link: "/saasDevelop/OpenAPI/APIList/deviceReadData",
                  },
                  {
                    text: "Send Downlink Thing Model Property Data",
                    link: "/saasDevelop/OpenAPI/APIList/deviceWriteData",
                  },
                  {
                    text: "Send Downlink Thing Model Service Data",
                    link: "/saasDevelop/OpenAPI/APIList/deviceSendServiceData",
                  },
                  {
                    text: "Send Downlink Transparent Data",
                    link: "/saasDevelop/OpenAPI/APIList/deviceSendRawData",
                  },
                  {
                    text: "Query Device Latest Location Data",
                    link: "/saasDevelop/OpenAPI/APIList/deviceGetLocation",
                  },
                  {
                    text: "Query Device Historical Uplink/Downlink Data Logs",
                    link: "/saasDevelop/OpenAPI/APIList/deviceDataHistory",
                  },
                  {
                    text: "Query Device Historical Event Logs",
                    link: "/saasDevelop/OpenAPI/APIList/deviceEventHistory",
                  },
                  {
                    text: "Create Queue",
                    link: "/saasDevelop/OpenAPI/APIList/queueCreate",
                  },
                  {
                    text: "Delete Queue",
                    link: "/saasDevelop/OpenAPI/APIList/queueDelete",
                  },
                  {
                    text: "Clear Queue",
                    link: "/saasDevelop/OpenAPI/APIList/queueClear",
                  },
                  {
                    text: "Query Queue List",
                    link: "/saasDevelop/OpenAPI/APIList/queueList",
                  },
                  {
                    text: "Query Queue Details",
                    link: "/saasDevelop/OpenAPI/APIList/queueDetail",
                  },
                  {
                    text: "Create Product/Device Subscription",
                    link: "/saasDevelop/OpenAPI/APIList/subscribeCreatByPKDK",
                  },
                  {
                    text: "Create SaaS Subscription",
                    link: "/saasDevelop/OpenAPI/APIList/subscribeCreatBySaaS",
                  },
                  {
                    text: "Create End User Subscription",
                    link: "/saasDevelop/OpenAPI/APIList/subscribeCreatByEnduser",
                  },
                  {
                    text: "Delete Subscription",
                    link: "/saasDevelop/OpenAPI/APIList/subscribeDelete",
                  },
                  {
                    text: "Modify Subscription",
                    link: "/saasDevelop/OpenAPI/APIList/subscribeUpdate",
                  },
                  {
                    text: "Query Subscription List",
                    link: "/saasDevelop/OpenAPI/APIList/subscribeList",
                  },
                  {
                    text: "Query Subscription Details",
                    link: "/saasDevelop/OpenAPI/APIList/subscribeDetail",
                  },
                  {
                    text: "Enable Subscription",
                    link: "/saasDevelop/OpenAPI/APIList/subscribeStart",
                  },
                  {
                    text: "Stop Subscription",
                    link: "/saasDevelop/OpenAPI/APIList/subscribeStop",
                  },
                  {
                    text: "Query User Domain List",
                    link: "/saasDevelop/OpenAPI/APIList/enduserDomainList",
                  },
                  {
                    text: "Query User List in User Domain",
                    link: "/saasDevelop/OpenAPI/APIList/enduserDomainUserList",
                  },
                  {
                    text: "Query User Information",
                    link: "/saasDevelop/OpenAPI/APIList/enduserUserInfo",
                  },
                  {
                    text: "Set User Status",
                    link: "/saasDevelop/OpenAPI/APIList/enduserSetUserStatus",
                  },
                  {
                    text: "Query User's Device List (Including Shared)",
                    link: "/saasDevelop/OpenAPI/APIList/enduserDeviceList",
                  },
                  {
                    text: "Query User List with Bound Device",
                    link: "/saasDevelop/OpenAPI/APIList/enduserGetUserByDevice",
                  },
                  {
                    text: "Verify Device Binding Code Validity",
                    link: "/saasDevelop/OpenAPI/APIList/enduserVerifyBindingCode",
                  },
                ],
              },
            ],
          },
          {
            text: "Message Subscription User Guide",
            collapsed: true,
            items: [
              {
                text: "AMQP Message Subscription Overview",
                link: "/saasDevelop/AMQPSubscription/subscription/AMQPinfo",
              },
              {
                text: "AMQP Client Integration Guide",
                link: "/saasDevelop/AMQPSubscription/subscription/AMQPtoC",
              },
              {
                text: "AMQP SDK Integration Example",
                link: "/saasDevelop/AMQPSubscription/subscription/AMQPSDK",
              },
              {
                text: "Data Format Definition",
                link: "/saasDevelop/AMQPSubscription/subscription/dataFormatDefinition",
              },
            ],
          },
          { text: "Error Code Summary", link: "/saasDevelop/errorCode" },
          //{ text: "SaaS Management", link: "/saasDevelop/SaaSManagement/SaaSManage" },
          {
            text: "SaaS Management",
            collapsed: true,
            items: [
              {
                text: "SaaS Management",
                link: "/saasDevelop/SaaSManagement/SaaSManage",
              },
              {
                text: "Service Market",
                link: "/saasDevelop/SaaSManagement/ServiceMarket",
              },
              {
                text: "Message Subscription",
                link: "/saasDevelop/SaaSManagement/NewsSubscription",
              },
            ],
          },
        ],
      },
      {
        text: "Industry and Services",
        collapsed: true,
        items: [
          {
            text: "Overview",
            link: "/industryApplication/Overview",
          },
          {
            text: "Solutions By Industry",
            link: "/industryApplication/solution",
          },
        ],
      },
      {
        text: "Mass Production",
        collapsed: true,
        items: [
          {
            text: "Mass Production Process",
            link: "/massProduct/process",
          },
          { text: "Device QR Code", link: "/massProduct/QRcode" },
        ],
      },
      {
        text: "Development Tools",
        collapsed: true,
        items: [
          {
            text: "Debugging Tool",
            collapsed: true,
            items: [
              {
                text: "QthTools-MCU Simulator",
                collapsed: true,
                items: [
                  {
                    text: "Overview",
                    link: "/tool/QthTools-debug/QthTools-MCU_Simulator/summary",
                  },
                  {
                    text: "User Manual",
                    link: "/tool/QthTools-debug/QthTools-MCU_Simulator/UserManual",
                  },
                ],
              },
            ],
          },
          {
            text: "Development Tool",
            collapsed: true,
            items: [
              {
                text: "QthTools-DTU Modbus",
                collapsed: true,
                items: [
                  {
                    text: "Overview",
                    link: "/tool/QthTools-develop/QthTools-DTU_Modbus/summary",
                  },
                  {
                    text: "User Manual",
                    link: "/tool/QthTools-develop/QthTools-DTU_Modbus/UserManual",
                  },
                ],
              },
            ],
          },
          {
            text: "Production Tool",
            collapsed: true,
            items: [
              {
                text: "SN&IMEI Binding Tool",
                collapsed: true,
                items: [
                  {
                    text: "Overview",
                    link: "/tool/QthTools-factory/QthTools-SN2IMEI_Binding/summary",
                  },
                  {
                    text: "User Manual",
                    link: "/tool/QthTools-factory/QthTools-SN2IMEI_Binding/UserManual",
                  },
                ],
              },
              {
                text: "QMultiDownload",
                collapsed: true,
                items: [
                  {
                    text: "Overview",
                    link: "/tool/QthTools-factory/QthTools-QMultiDownload/summary",
                  },
                ],
              },
            ],
          },
          {
            text: "SIMPLI Kit",
            collapsed: true,
            items: [
              {
                text: "Quick Start Guide",
                link: "/tool/SIMPLI-Kit/QuickStartGuide",
              },
            ],
          },
        ],
      },
      {
        text: "FAQ",
        collapsed: true,
        items: [
          {
            text: "FAQs About Product Usage",
            link: "/problem/page-01",
          },
          { text: "FAQs About Consultation", link: "/problem/page-02" },
          { text: "FAQs About Business", link: "/problem/page-03" },
        ],
      },
      {
        text: "Contact Us",
        link: "/contactUs/",
      },
      {
        text: "Terms of Service",
        link: "/agreement/",
        collapsed: true,
        items: [
          {
            text: "Service Agreement",
            link: "/agreement/service",
          },
          {
            text: "Privacy Policy",
            link: "/agreement/privacy",
          },
        ],
      },
    ],
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "Home Page",
      link: "/homepage/",
      activeMatch: "/homepage/",
    },
    {
      text: "Console",
      link: "https://core.acceleronix.io/project/list",
    },
  ];
}

// export const search: DefaultTheme.AlgoliaSearchOptions["locales"] = {
//   zh: {
//     placeholder: "搜索文档",
//     translations: {
//       button: {
//         buttonText: "搜索文档",
//         buttonAriaLabel: "搜索文档",
//       },
//       modal: {
//         searchBox: {
//           resetButtonTitle: "清除查询条件",
//           resetButtonAriaLabel: "清除查询条件",
//           cancelButtonText: "取消",
//           cancelButtonAriaLabel: "取消",
//         },
//         startScreen: {
//           recentSearchesTitle: "搜索历史",
//           noRecentSearchesText: "没有搜索历史",
//           saveRecentSearchButtonTitle: "保存至搜索历史",
//           removeRecentSearchButtonTitle: "从搜索历史中移除",
//           favoriteSearchesTitle: "收藏",
//           removeFavoriteSearchButtonTitle: "从收藏中移除",
//         },
//         errorScreen: {
//           titleText: "无法获取结果",
//           helpText: "你可能需要检查你的网络连接",
//         },
//         footer: {
//           selectText: "选择",
//           navigateText: "切换",
//           closeText: "关闭",
//           searchByText: "搜索提供者",
//         },
//         noResultsScreen: {
//           noResultsText: "无法找到相关结果",
//           suggestedQueryText: "你可以尝试查询",
//           reportMissingResultsText: "你认为该查询应该有结果？",
//           reportMissingResultsLinkText: "点击反馈",
//         },
//       },
//     },
//   },
// };
