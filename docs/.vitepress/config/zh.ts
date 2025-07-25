import { defineConfig, type DefaultTheme } from "vitepress";

export const zh = defineConfig({
  lang: "zh-CN",
  description: "开发者中心 文档中心",
  themeConfig: {
    siteTitle: "文档中心",
    nav: nav(),
    sidebar: [
      {
        text: "首页",
        link: "/homepage/",
      },
      {
        text: "平台介绍",
        collapsed: true,
        items: [
          { text: "平台概述", link: "/introduction/page-01" },
          { text: "名词解析", link: "/introduction/page-03" },
          { text: "支持的地域", link: "/introduction/page-05" },
        ],
      },
      {
        text: "快速入门",
        collapsed: true,
        items: [
          { text: "概述", link: "/quickStart/Overview" },
          { text: "平台注册", link: "/quickStart/register" },
          { text: "创建并定义产品", link: "/quickStart/CreatProduct" },
          { text: "连接设备到平台", link: "/quickStart/DeviceConnect" },
          { text: "设备通信调试", link: "/quickStart/DeviceDebug" },
        ],
      },
      {
        text: "账号管理",
        collapsed: true,
        items: [
          { text: "账号信息维护", link: "/personalCenter/Accout" },
          { text: "角色权限", link: "/personalCenter/Role" },
          { text: "审计日志", link: "/personalCenter/Audit" },
          { text: "消息中心", link: "/personalCenter/MessageCenter" },
          { text: "我的工单", link: "/personalCenter/WorkOrder" },
        ],
      },
      {
        text: "激活码",
        collapsed: true,
        items: [
          { text: "激活码介绍", link: "/license/LicenseIntroduction" },
          { text: "激活码管理", link: "/license/licenseMngment" },
          {
            text: "用量监控",
            collapsed: true,
            items: [
              {
                text: "设备消息数",
                link: "/license/statistics/page-01",
              },
              {
                text: "设备OTA",
                link: "/license/statistics/page-02",
              },
              {
                text: "服务订阅数",
                link: "/license/statistics/page-03",
              },
            ],
          },
          { text: "资源包用量统计", link: "/license/sourceStatistics" },
          { text: "超额账单", link: "/license/billCenter" },
        ],
      },
      {
        text: "设备开发",
        collapsed: true,
        items: [
          {
            text: "产品管理",
            collapsed: true,
            items: [
              {
                text: "创建产品",
                link: "/deviceDevelop/ProductDevelop/ProductManagement",
              },
              {
                text: "功能定义",
                collapsed: true,
                items: [
                  {
                    text: "物模型概述",
                    link: "/deviceDevelop/ProductDevelop/definition/page-01",
                  },
                  {
                    text: "标准功能",
                    link: "/deviceDevelop/ProductDevelop/definition/page-02",
                  },
                  {
                    text: "自定义功能",
                    link: "/deviceDevelop/ProductDevelop/definition/page-03",
                  },
                ],
              },
              {
                text: "产品交互",
                link: "/deviceDevelop/ProductDevelop/ProductInteraction",
              },
              {
                text: "硬件开发",
                link: "/deviceDevelop/ProductDevelop/DeviceDev",
              },
              {
                text: "产品配置",
                link: "/deviceDevelop/ProductDevelop/ProductConfig",
              },
              {
                text: "调试发布",
                link: "/deviceDevelop/ProductDevelop/ProductRelease",
              },
              {
                text: "设备CA证书",
                link: "/deviceDevelop/ProductDevelop/DeviceCALicense",
              },
            ],
          },
          {
            text: "设备接入方案",
            collapsed: true,
            items: [
              {
                text: "设备接入方案介绍",
                link: "/deviceDevelop/DeviceAccessPlan/AccessPlan",
              },
              {
                text: "AT指令方案接入(2/3/4/5G)",
                collapsed: true,
                items: [
                  {
                    text: "MCU仿真工具快速接入",
                    collapsed: true,
                    items: [
                      {
                        text: "设备硬件配置",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/speediness/speediness-at-02",
                      },
                      {
                        text: "工具产品配置",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/speediness/speediness-at-03",
                      },
                      {
                        text: "工具数据业务交互",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/speediness/speediness-at-04",
                      },
                      {
                        text: "移联万物APP绑定",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/speediness/speediness-at-05",
                      },
                    ],
                  },
                  {
                    text: "示例概览",
                    collapsed: true,
                    items: [
                      {
                        text: "产品配置及快速连接 IoT 平台示例",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/example/cellular-at-example-01",
                      },
                      {
                        text: "物模型格式数据业务交互示例",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/example/cellular-at-example-02-1",
                      },
                      {
                        text: "透传格式数据业务交互示例",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/example/cellular-at-example-02-2",
                      },
                      {
                        text: "FOTA示例",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/example/cellular-at-example-03-1",
                      },
                      {
                        text: "SOTA示例",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/example/cellular-at-example-03-2",
                      },
                      {
                        text: "GNSS&LBS&Wi-Fi定位示例",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/example/cellular-at-example-04",
                      },
                      {
                        text: "网关子设备快速连接 IoT 平台示例",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/example/cellular-at-example-05",
                      },
                    ],
                  },
                  {
                    text: "IoT AT指令",
                    collapsed: true,
                    items: [
                      {
                        text: "AT指令概览",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-02",
                      },
                      {
                        text: "产品配置 相关指令",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-03",
                      },
                      {
                        text: "数据业务交互 相关指令",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-04",
                      },
                      {
                        text: "OTA 相关指令",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-05",
                      },
                      {
                        text: "GNSS&LBS&Wi-Fi定位 相关指令",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-07",
                      },
                      {
                        text: "设备授权 相关指令",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-08",
                      },
                      {
                        text: "增值服务 相关指令",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-09",
                      },
                      {
                        text: "网关子设备 相关指令",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/API/cellular-at-10",
                      },
                    ],
                  },
                  {
                    text: "回调事件码",
                    link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/InteractionEvent",
                  },
                  {
                    text: "常见问题",
                    link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/F_Q",
                  },
                  {
                    text: "更新历史",
                    link: "/deviceDevelop/DeviceAccessPlan/cellular/AT/RevisionHistory",
                  },
                ],
              },
              {
                text: "QuecOpen方案接入(2/3/4/5G)",
                collapsed: true,
                items: [
                  {
                    text: "快速接入指引",
                    collapsed: true,
                    items: [
                      // { text: "开发环境配置", link: "/deviceDevelop/cellular/speediness/QuecOpen/speediness-quecopen-01",},
                      {
                        text: "SDK说明",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/speediness/speediness-quecopen-02",
                      },
                      {
                        text: "程序编码",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/speediness/speediness-quecopen-03",
                      },
                      {
                        text: "效果呈现",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/speediness/speediness-quecopen-04",
                      },
                      {
                        text: "移联万物APP绑定",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/speediness/speediness-quecopen-05",
                      },
                    ],
                  },
                  {
                    text: "示例概览",
                    collapsed: true,
                    items: [
                      {
                        text: "产品配置及快速连接 IoT 平台示例",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/example/cellular-quecopen-example-01",
                      },
                      {
                        text: "物模型格式数据业务交互示例",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/example/data/cellular-quecopen-example-01",
                      },
                      {
                        text: "透传格式数据业务交互示例",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/example/data/cellular-quecopen-example-02",
                      },
                      {
                        text: "FOTA升级示例",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/example/ota/cellular-quecopen-example-01",
                      },
                      {
                        text: "SOTA升级示例",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/example/ota/cellular-quecopen-example-02",
                      },
                      {
                        text: "GNSS&LBS&Wi-Fi定位示例",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/example/cellular-quecopen-example-02",
                      },
                      {
                        text: "DTU-Modbus示例",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/example/cellular-quecopen-example-03",
                      },
                      {
                        text: "网关子设备快速连接 IoT 平台示例",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/example/cellular-quecopen-example-04",
                      },
                    ],
                  },
                  {
                    text: "QTHSDK API",
                    collapsed: true,
                    items: [
                      {
                        text: "API概述",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-01",
                      },
                      {
                        text: "产品配置 相关接口",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-02",
                      },
                      {
                        text: "数据业务交互 相关接口",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-03",
                      },
                      {
                        text: "TTLV数据处理 相关接口",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-04",
                      },
                      {
                        text: "OTA 相关接口",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-05",
                      },
                      {
                        text: "GNSS&LBS&Wi-Fi定位 相关接口",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-07",
                      },
                      {
                        text: "设备授权 相关接口",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-08",
                      },
                      {
                        text: "DTU-Modbus 相关接口",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-09",
                      },
                      {
                        text: "网关子设备 相关接口",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-11",
                      },
                      {
                        text: "增值服务 相关接口",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/api/cellular-quecopen-api-10",
                      },
                    ],
                  },
                  {
                    text: "回调事件码",
                    link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/InteractionEvent",
                  },
                  {
                    text: "常见问题",
                    link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/F_Q",
                  },
                  {
                    text: "更新历史",
                    link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecOpen/RevisionHistory",
                  },
                ],
              },
              {
                text: "QuecPython方案接入(2/3/4/5G)",
                collapsed: true,
                items: [
                  {
                    text: "快速接入指引",
                    collapsed: true,
                    items: [
                      {
                        text: "开发环境配置",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/speediness/speediness-quecpython-01",
                      },
                      {
                        text: "Python脚本编写",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/speediness/speediness-quecpython-02",
                      },
                      {
                        text: "效果呈现",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/speediness/speediness-quecpython-03",
                      },
                      {
                        text: "移联万物APP绑定",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/speediness/speediness-quecpython-04",
                      },
                    ],
                  },
                  {
                    text: "示例概览",
                    collapsed: true,
                    items: [
                      {
                        text: "产品配置及快速连接IoT平台示例",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/example/quecpython-example-01",
                      },
                      {
                        text: "物模型格式数据业务交互示例",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/example/data/quecpython-example-01",
                      },
                      {
                        text: "透传格式数据业务交互示例",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/example/data/quecpython-example-02",
                      },
                      {
                        text: "FOTA升级示例",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/example/ota/quecpython-example-01",
                      },
                      {
                        text: "脚本升级示例",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/example/ota/quecpython-example-02",
                      },
                      {
                        text: "SOTA升级示例",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/example/ota/quecpython-example-03",
                      },
                      {
                        text: "定位 示例",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/example/quecpython-example-02",
                      },
                    ],
                  },
                  {
                    text: "QTHSDK API",
                    collapsed: true,
                    items: [
                      {
                        text: "API概述",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-01",
                      },
                      {
                        text: "产品配置 相关接口",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-02",
                      },
                      {
                        text: "网络配置 相关接口",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-03",
                      },
                      {
                        text: "设备连接 相关接口",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-04",
                      },
                      {
                        text: "数据业务交互 相关接口",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-05",
                      },
                      {
                        text: "OTA 相关接口",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-06",
                      },
                      {
                        text: "定位 相关接口",
                        link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/api/quecpython-api-07",
                      },
                    ],
                  },
                  {
                    text: "错误码列表",
                    link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/InteractionEvent",
                  },
                  {
                    text: "更新历史",
                    link: "/deviceDevelop/DeviceAccessPlan/cellular/QuecPython/RevisionHistory",
                  }, //待完善
                ],
              },
              {
                text: "QuecOpen方案接入(Wi-Fi)",
                collapsed: true,
                items: [
                  {
                    text: "快速接入指引",
                    collapsed: true,
                    items: [
                      {
                        text: "SDK说明",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/speediness/speediness-quecopen-01",
                      }, // SDK说明流程ui图需要修改与代码流程一致
                      // { text: "开发环境配置", link: "/deviceDevelop/wifi/QuecOpen/speediness/speediness-quecopen-02",},
                      {
                        text: "程序编码",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/speediness/speediness-quecopen-03",
                      },
                      {
                        text: "APP蓝牙配网",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/speediness/speediness-quecopen-04",
                      },
                      {
                        text: "效果呈现",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/speediness/speediness-quecopen-05",
                      },
                    ],
                  },
                  {
                    text: "示例概览",
                    collapsed: true,
                    items: [
                      {
                        text: "产品配置及快速连接 IoT 平台示例",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/example/quecopen-example-01",
                      },
                      {
                        text: "物模型格式数据业务交互示例",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/example/data/quecopen-example-01",
                      },
                      {
                        text: "透传格式数据业务交互示例",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/example/data/quecopen-example-02",
                      },
                      {
                        text: "FOTA升级示例",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/example/ota/quecopen-example-01",
                      },
                      {
                        text: "SOTA升级示例",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/example/ota/quecopen-example-02",
                      },
                      {
                        text: "GNSS&LBS&Wi-Fi定位示例",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/example/quecopen-example-02",
                      },
                      {
                        text: "Modbus-DTU 示例",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/example/quecopen-example-03",
                      },
                      {
                        text: "网关子设备快速连接 IoT 平台示例",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/example/quecopen-example-04",
                      },
                    ],
                  },

                  {
                    text: "QTHSDK API",
                    collapsed: true,
                    items: [
                      {
                        text: "API概述",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-01",
                      },
                      {
                        text: "产品配置 相关接口",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-02",
                      },
                      {
                        text: "设备连接 相关接口",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-03",
                      },
                      {
                        text: "网络配置 相关接口",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-04",
                      },
                      {
                        text: "TTLV数据处理 相关接口",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-05",
                      },
                      {
                        text: "数据业务交互 相关接口",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-06",
                      },
                      {
                        text: "OTA 相关接口",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-07",
                      },
                      {
                        text: "GNSS&LBS&Wi-Fi定位 相关接口",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-08",
                      },
                      {
                        text: "Modbus-DTU 相关接口",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-09",
                      },
                      {
                        text: "网关子设备 相关接口",
                        link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/api/quecopen-api-10",
                      },
                    ],
                  },

                  {
                    text: "错误码列表",
                    link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/InteractionEvent",
                  },
                  {
                    text: "更新历史",
                    link: "/deviceDevelop/DeviceAccessPlan/wifi/QuecOpen/RevisionHistory",
                  }, //待完善
                ],
              },
              {
                text: "AT指令方案接入(NB)",
                collapsed: true,
                items: [
                  {
                    text: "MCU仿真工具快速接入",
                    collapsed: true,
                    items: [
                      {
                        text: "设备硬件配置",
                        link: "/deviceDevelop/DeviceAccessPlan/nb/AT/speediness/speediness-at-02",
                      },
                      {
                        text: "工具产品配置",
                        link: "/deviceDevelop/DeviceAccessPlan/nb/AT/speediness/speediness-at-03",
                      },
                      {
                        text: "工具数据业务交互",
                        link: "/deviceDevelop/DeviceAccessPlan/nb/AT/speediness/speediness-at-04",
                      },
                      {
                        text: "移联万物APP绑定",
                        link: "/deviceDevelop/DeviceAccessPlan/nb/AT/speediness/speediness-at-05",
                      },
                    ],
                  },
                  {
                    text: "示例概览",
                    collapsed: true,
                    items: [
                      {
                        text: "产品配置及快速连接 IoT 平台示例",
                        link: "/deviceDevelop/DeviceAccessPlan/nb/AT/example/nb-at-example-01",
                      },
                      {
                        text: "物模型格式数据业务交互示例",
                        link: "/deviceDevelop/DeviceAccessPlan/nb/AT/example/nb-at-example-02-1",
                      },
                      {
                        text: "透传格式数据业务交互示例",
                        link: "/deviceDevelop/DeviceAccessPlan/nb/AT/example/nb-at-example-02-2",
                      },
                      {
                        text: "GNSS&LBS&Wi-Fi定位示例",
                        link: "/deviceDevelop/DeviceAccessPlan/nb/AT/example/nb-at-example-04",
                      },
                    ],
                  },
                  {
                    text: "IoT AT指令",
                    collapsed: true,
                    items: [
                      {
                        text: "AT指令概览",
                        link: "/deviceDevelop/DeviceAccessPlan/nb/AT/API/nb-at-02",
                      },
                      {
                        text: "产品配置 相关指令",
                        link: "/deviceDevelop/DeviceAccessPlan/nb/AT/API/nb-at-03",
                      },
                      {
                        text: "数据业务交互 相关指令",
                        link: "/deviceDevelop/DeviceAccessPlan/nb/AT/API/nb-at-04",
                      },
                      {
                        text: "OTA 相关指令",
                        link: "/deviceDevelop/DeviceAccessPlan/nb/AT/API/nb-at-05",
                      },
                      {
                        text: "GNSS&LBS&Wi-Fi定位 相关指令",
                        link: "/deviceDevelop/DeviceAccessPlan/nb/AT/API/nb-at-06",
                      },
                    ],
                  },
                  {
                    text: "回调事件码",
                    link: "/deviceDevelop/DeviceAccessPlan/nb/AT/InteractionEvent",
                  },
                  {
                    text: "常见问题",
                    link: "/deviceDevelop/DeviceAccessPlan/nb/AT/F_Q",
                  },
                  {
                    text: "更新历史",
                    link: "/deviceDevelop/DeviceAccessPlan/nb/AT/RevisionHistory",
                  },
                ],
              },
              {
                text: "Modbus-DTU零代码接入",
                collapsed: true,
                items: [
                  {
                    text: "创建产品",
                    link: "/deviceDevelop/DeviceAccessPlan/modbus_dtu/speediness/speediness-dtu-01",
                  },
                  {
                    text: "配置寄存器码",
                    link: "/deviceDevelop/DeviceAccessPlan/modbus_dtu/speediness/speediness-dtu-02",
                  },
                  {
                    text: "烧录配置文件",
                    link: "/deviceDevelop/DeviceAccessPlan/modbus_dtu/speediness/speediness-dtu-03",
                  },
                  {
                    text: "效果呈现",
                    link: "/deviceDevelop/DeviceAccessPlan/modbus_dtu/speediness/speediness-dtu-04",
                  },
                  {
                    text: "移联万物App绑定",
                    link: "/deviceDevelop/DeviceAccessPlan/modbus_dtu/speediness/speediness-dtu-05",
                  },
                ],
              },
              {
                text: "知识库",
                collapsed: true,
                items: [
                  {
                    text: "AT指令说明",
                    link: "/deviceDevelop/DeviceAccessPlan/KnowledgeBase/page-01",
                  },
                  {
                    text: "TTLV与Json格式的区别",
                    link: "/deviceDevelop/DeviceAccessPlan/KnowledgeBase/page-02",
                  },
                  {
                    text: "CATStudio抓包步骤",
                    link: "/deviceDevelop/DeviceAccessPlan/KnowledgeBase/page-03",
                  },
                  {
                    text: "coolwatcher抓包步骤",
                    link: "/deviceDevelop/DeviceAccessPlan/KnowledgeBase/page-04",
                  },
                  {
                    text: "Wi-Fi 固件烧录",
                    link: "/deviceDevelop/DeviceAccessPlan/KnowledgeBase/page-06",
                  },
                  {
                    text: "Wi-Fi OTA包制作",
                    link: "/deviceDevelop/DeviceAccessPlan/KnowledgeBase/page-07",
                  },
                ],
              },
            ],
          },
          {
            text: "设备管理",
            collapsed: true,
            items: [
              {
                text: "设备运维",
                collapsed: true,
                items: [
                  //{ text: "设备安全认证", link: "" },
                  {
                    text: "设备列表",
                    link: "/deviceDevelop/DeviceManage/operation/List",
                  },
                  {
                    text: "预导入管理",
                    link: "/deviceDevelop/DeviceManage/operation/preDevice",
                  },
                  {
                    text: "设备信息",
                    link: "/deviceDevelop/DeviceManage/operation/Info",
                  },
                  {
                    text: "数据日志",
                    link: "/deviceDevelop/DeviceManage/operation/DataLog",
                  },
                  {
                    text: "异常日志",
                    link: "/deviceDevelop/DeviceManage/operation/ErrorLog",
                  },
                  {
                    text: "事件日志",
                    link: "/deviceDevelop/DeviceManage/operation/EventLog",
                  },
                  {
                    text: "运行状态",
                    link: "/deviceDevelop/DeviceManage/operation/Run",
                  },
                  {
                    text: "服务调用",
                    link: "/deviceDevelop/DeviceManage/operation/Serve",
                  },
                  {
                    text: "设备调试",
                    link: "/deviceDevelop/DeviceManage/operation/Debugger",
                  },
                  {
                    text: "设备定位",
                    link: "/deviceDevelop/DeviceManage/operation/Location",
                  },
                  {
                    text: "资源使用情况",
                    link: "/deviceDevelop/DeviceManage/operation/ResourceUsg",
                  },
                ],
              },
              {
                text: "OTA升级",
                collapsed: true,
                items: [
                  {
                    text: "OTA概述",
                    collapsed: true,
                    items: [
                      {
                        text: "平台OTA能力说明",
                        link: "/deviceDevelop/DeviceManage/ota/page-01",
                      },
                      {
                        text: "升级流程概览",
                        link: "/deviceDevelop/DeviceManage/ota/page-02",
                      },
                      {
                        text: "OTA升级流程",
                        collapsed: true,
                        items: [
                          {
                            text: "添加固件升级包",
                            link: "/deviceDevelop/DeviceManage/ota/part02/page-01",
                          },
                          {
                            text: "发起固件验证（可选）",
                            link: "/deviceDevelop/DeviceManage/ota/part02/page-02",
                          },
                          {
                            text: "创建升级计划",
                            link: "/deviceDevelop/DeviceManage/ota/part02/page-03",
                          },
                          {
                            text: "配置升级文案",
                            link: "/deviceDevelop/DeviceManage/ota/part02/page-04",
                          },
                          {
                            text: "查看升级情况",
                            link: "/deviceDevelop/DeviceManage/ota/part02/page-05",
                          },
                          {
                            text: "重试升级",
                            link: "/deviceDevelop/DeviceManage/ota/part02/page-05s",
                          },
                          {
                            text: "管理升级计划",
                            link: "/deviceDevelop/DeviceManage/ota/part02/page-06",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    text: "蓝牙设备升级",
                    link: "/deviceDevelop/DeviceManage/ota/page-03",
                  },
                  {
                    text: "子设备升级",
                    link: "/deviceDevelop/DeviceManage/ota/page-04",
                  },
                  {
                    text: "相关接口",
                    link: "/deviceDevelop/DeviceManage/ota/page-05",
                  },
                ],
              },
              {
                text: "虚拟设备",
                link: "/deviceDevelop/DeviceManage/virtual/VirtualDevice",
              },
            ],
          },
        ],
      },
      {
        text: "App应用开发",
        collapsed: true,
        items: [
          { text: "App数据通信概览", link: "/appDevelop/ready" },
          {
            text: "OEM App",
            collapsed: true,
            items: [
              { text: "简介", link: "/appDevelop/OEMApp/introduce" },
              {
                text: "App",
                collapsed: true,
                items: [
                  {
                    text: "iOS证书和推送证书制作",
                    link: "/appDevelop/OEMApp/app/ios-cert",
                  },
                  {
                    text: "安卓证书制作",
                    link: "/appDevelop/OEMApp/app/android-jks",
                  },
                  {
                    text: "TestFlight测试",
                    link: "/appDevelop/OEMApp/app/testflight",
                  },
                  {
                    text: "iOS APP STORE发布文档",
                    link: "/appDevelop/OEMApp/app/ios-app-store",
                  },
                  {
                    text: "安卓APP发布，上架应用宝",
                    link: "/appDevelop/OEMApp/app/android-store",
                  },
                  {
                    text: "Google Play：APP数据安全信息填写合规指引",
                    link: "/appDevelop/OEMApp/app/google-data-inof",
                  },
                  {
                    text: "Google上架流程",
                    link: "/appDevelop/OEMApp/app/google-playstore",
                  },
                  {
                    text: "如何在App Store获得下载链接",
                    link: "/appDevelop/OEMApp/app/appstore-link",
                  },
                ],
              },
              {
                text: "推送",
                collapsed: true,
                items: [
                  {
                    text: "安卓推送服务配置",
                    link: "/appDevelop/OEMApp/push/android-push",
                  },
                  {
                    text: "Google推送配置文件",
                    link: "/appDevelop/OEMApp/push/google-push",
                  },
                  {
                    text: "云服务推送配置",
                    link: "/appDevelop/OEMApp/push/cloud-push",
                  },
                ],
              },
              {
                text: "用户",
                collapsed: true,
                items: [
                  {
                    text: "手机号码一键登录",
                    link: "/appDevelop/OEMApp/user/onekey",
                  },
                ],
              },
              {
                text: "地图",
                collapsed: true,
                items: [
                  { text: "百度地图", link: "/appDevelop/OEMApp/map/baiduMap" },
                  {
                    text: "Google地图",
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
                text: "iOS 开发指南",
                collapsed: true,
                items: [
                  {
                    text: "快速集成",
                    link: "/appDevelop/iOSGuide/快速集成",
                  },
                  {
                    text: "用户账号",
                    link: "/appDevelop/iOSGuide/用户账号",
                    collapsed: true,
                    items: [
                      {
                        text: "手机号码",
                        link: "/appDevelop/iOSGuide/用户账号 - 手机号码",
                      },
                      {
                        text: "邮箱账号",
                        link: "/appDevelop/iOSGuide/用户账号 - 邮箱账号",
                      },
                      {
                        text: "第三方平台",
                        link: "/appDevelop/iOSGuide/用户账号 - 第三方平台",
                      },
                      {
                        text: "账号详情",
                        link: "/appDevelop/iOSGuide/用户账号 - 账号详情",
                      },
                    ],
                  },
                  {
                    text: "设备添加",
                    link: "/appDevelop/iOSGuide/设备添加",
                    collapsed: true,
                    items: [
                      {
                        text: "纯蓝牙设备",
                        link: "/appDevelop/iOSGuide/设备添加 - 纯蓝牙设备",
                      },
                      {
                        text: "蜂窝设备",
                        link: "/appDevelop/iOSGuide/设备添加 - 蜂窝设备",
                      },
                      {
                        text: "WiFi&Ble双模设备",
                        link: "/appDevelop/iOSGuide/设备添加 - WiFi&Ble双模设备",
                      },
                    ],
                  },
                  {
                    text: "设备控制",
                    link: "/appDevelop/iOSGuide/设备控制",
                  },
                  {
                    text: "设备管理",
                    link: "/appDevelop/iOSGuide/设备管理",
                    collapsed: true,
                    items: [
                      {
                        text: "设备分组",
                        link: "/appDevelop/iOSGuide/设备管理 - 设备分组",
                      },
                      {
                        text: "设备关联",
                        link: "/appDevelop/iOSGuide/设备管理 - 设备关联",
                      },
                      {
                        text: "设备分享",
                        link: "/appDevelop/iOSGuide/设备管理 - 设备分享",
                      },
                      {
                        text: "数据统计",
                        link: "/appDevelop/iOSGuide/设备管理 - 数据统计",
                      },
                      {
                        text: "设备升级",
                        link: "/appDevelop/iOSGuide/设备管理 - 设备升级",
                      },
                      {
                        text: "定时任务",
                        link: "/appDevelop/iOSGuide/设备管理 - 定时任务",
                      },
                    ],
                  },
                  {
                    text: "家庭管理",
                    link: "/appDevelop/iOSGuide/家庭管理",
                    collapsed: true,
                    items: [
                      {
                        text: "家庭信息",
                        link: "/appDevelop/iOSGuide/家庭管理 - 家庭信息",
                      },
                      {
                        text: "房间信息",
                        link: "/appDevelop/iOSGuide/家庭管理 - 房间信息",
                      },
                      {
                        text: "成员信息",
                        link: "/appDevelop/iOSGuide/家庭管理 - 成员信息",
                      },
                    ],
                  },
                  {
                    text: "群组",
                    link: "/appDevelop/iOSGuide/群组",
                  },
                  {
                    text: "场景",
                    link: "/appDevelop/iOSGuide/场景",
                  },
                  {
                    text: "自动化",
                    link: "/appDevelop/iOSGuide/自动化",
                  },
                  {
                    text: "消息管理",
                    link: "/appDevelop/iOSGuide/消息管理",
                  },
                ],
              },
              {
                text: "安卓开发指南",
                collapsed: true,
                items: [
                  {
                    text: "快速集成",
                    link: "/appDevelop/AndroidGuide/快速集成",
                  },
                  {
                    text: "用户账号",
                    link: "/appDevelop/AndroidGuide/用户账号",
                    collapsed: true,
                    items: [
                      {
                        text: "手机号码",
                        link: "/appDevelop/AndroidGuide/用户账号 - 手机号码",
                      },
                      {
                        text: "邮箱账号",
                        link: "/appDevelop/AndroidGuide/用户账号 - 邮箱账号",
                      },
                      {
                        text: "第三方平台",
                        link: "/appDevelop/AndroidGuide/用户账号 - 第三方平台",
                      },
                      {
                        text: "账号详情",
                        link: "/appDevelop/AndroidGuide/用户账号 - 账号详情",
                      },
                    ],
                  },
                  {
                    text: "设备添加",
                    link: "/appDevelop/AndroidGuide/设备添加",
                    collapsed: true,
                    items: [
                      {
                        text: "纯蓝牙设备",
                        link: "/appDevelop/AndroidGuide/设备添加 - 纯蓝牙设备",
                      },
                      {
                        text: "蜂窝设备",
                        link: "/appDevelop/AndroidGuide/设备添加 - 蜂窝设备",
                      },
                      {
                        text: "WiFi&Ble双模设备",
                        link: "/appDevelop/AndroidGuide/设备添加 - WiFi&Ble双模设备",
                      },
                    ],
                  },
                  {
                    text: "设备控制",
                    link: "/appDevelop/AndroidGuide/设备控制",
                  },
                  {
                    text: "设备管理",
                    link: "/appDevelop/AndroidGuide/设备管理",
                    collapsed: true,
                    items: [
                      {
                        text: "设备分组",
                        link: "/appDevelop/AndroidGuide/设备管理 - 设备分组",
                      },
                      {
                        text: "设备关联",
                        link: "/appDevelop/AndroidGuide/设备管理 - 设备关联",
                      },
                      {
                        text: "设备分享",
                        link: "/appDevelop/AndroidGuide/设备管理 - 设备分享",
                      },
                      {
                        text: "数据统计",
                        link: "/appDevelop/AndroidGuide/设备管理 - 数据统计",
                      },
                      {
                        text: "设备升级",
                        link: "/appDevelop/AndroidGuide/设备管理 - 设备升级",
                      },
                      {
                        text: "定时任务",
                        link: "/appDevelop/AndroidGuide/设备管理 - 定时任务",
                      },
                    ],
                  },
                  {
                    text: "家庭管理",
                    link: "/appDevelop/AndroidGuide/家庭管理",
                    collapsed: true,
                    items: [
                      {
                        text: "家庭信息",
                        link: "/appDevelop/AndroidGuide/家庭管理 - 家庭信息",
                      },
                      {
                        text: "房间信息",
                        link: "/appDevelop/AndroidGuide/家庭管理 - 房间信息",
                      },
                      {
                        text: "成员信息",
                        link: "/appDevelop/AndroidGuide/家庭管理 - 成员信息",
                      },
                    ],
                  },
                  {
                    text: "群组",
                    link: "/appDevelop/AndroidGuide/群组",
                  },
                  {
                    text: "场景",
                    link: "/appDevelop/AndroidGuide/场景",
                  },
                  {
                    text: "自动化",
                    link: "/appDevelop/AndroidGuide/自动化",
                  },
                  {
                    text: "消息管理",
                    link: "/appDevelop/AndroidGuide/消息管理",
                  },
                ],
              }
            ]
          },
          {
            text: "OpenAPI使用指导",
            collapsed: true,
            items: [
              {
                text: "OpenAPI接入说明",
                link: "/appDevelop/OpenAPI/API_accessInstruction",
              },
              {
                text: "OpenAPI列表",
                link: "/appDevelop/OpenAPI/APIList",
                collapsed: true,
                items: [
                  {
                    text: "手机号密码注册",
                    link: "/appDevelop/OpenAPI/APIList/phonePwdRegister",
                  },
                  {
                    text: "手机号密码登录",
                    link: "/appDevelop/OpenAPI/APIList/phonePwdLogin",
                  },
                  {
                    text: "关联手机号码",
                    link: "/appDevelop/OpenAPI/APIList/relationPhone",
                  },
                  {
                    text: "删除手机号码关联",
                    link: "/appDevelop/OpenAPI/APIList/deletePhoneRelation",
                  },
                  {
                    text: "本机号码一键登录",
                    link: "/appDevelop/OpenAPI/APIList/phoneAuthLogin",
                  },
                  {
                    text: "邮箱密码注册",
                    link: "/appDevelop/OpenAPI/APIList/emailPwdRegister",
                  },
                  {
                    text: "邮箱密码登录",
                    link: "/appDevelop/OpenAPI/APIList/emailPwdLogin",
                  },
                  {
                    text: "关联邮箱",
                    link: "/appDevelop/OpenAPI/APIList/relationEmail",
                  },
                  {
                    text: "删除邮箱关联",
                    link: "/appDevelop/OpenAPI/APIList/deleteEmailRelation",
                  },
                  {
                    text: "支付宝授权登录",
                    link: "/appDevelop/OpenAPI/APIList/alipayAuthLogin",
                  },
                  {
                    text: "QQ授权登录",
                    link: "/appDevelop/OpenAPI/APIList/qqAuthLogin",
                  },
                  {
                    text: "微信小程序授权登录",
                    link: "/appDevelop/OpenAPI/APIList/wechatMiniprogramAuthLogin",
                  },
                  {
                    text: "微信公众号授权登录",
                    link: "/appDevelop/OpenAPI/APIList/wechatOffiaccountAuthLogin",
                  },
                  {
                    text: "Apple授权登录",
                    link: "/appDevelop/OpenAPI/APIList/appleAuthLogin",
                  },
                  {
                    text: "Facebook授权登录",
                    link: "/appDevelop/OpenAPI/APIList/facebookAuthLogin",
                  },
                  {
                    text: "Twitter授权登录",
                    link: "/appDevelop/OpenAPI/APIList/twitterAuthLogin",
                  },
                  {
                    text: "刷新token",
                    link: "/appDevelop/OpenAPI/APIList/refreshToken",
                  },
                  {
                    text: "修改用户手机号",
                    link: "/appDevelop/OpenAPI/APIList/setPhone",
                  },
                  {
                    text: "用户密码修改",
                    link: "/appDevelop/OpenAPI/APIList/setUserPwd",
                  },
                  {
                    text: "删除用户",
                    link: "/appDevelop/OpenAPI/APIList/userDelete",
                  },
                  {
                    text: "查询用户信息",
                    link: "/appDevelop/OpenAPI/APIList/userInfo",
                  },
                  {
                    text: "修改用户信息",
                    link: "/appDevelop/OpenAPI/APIList/setUserInfo",
                  },
                  {
                    text: "用户退出登录",
                    link: "/appDevelop/OpenAPI/APIList/userLogout",
                  },
                  {
                    text: "用户密码重置",
                    link: "/appDevelop/OpenAPI/APIList/userPwdReset",
                  },
                  {
                    text: "发送手机短信验证码",
                    link: "/appDevelop/OpenAPI/APIList/sendPhoneSmsCode",
                  },
                  {
                    text: "发送邮件验证码",
                    link: "/appDevelop/OpenAPI/APIList/sendEmail",
                  },
                  {
                    text: "查询用户消息列表",
                    link: "/appDevelop/OpenAPI/APIList/userMsgList",
                  },
                  {
                    text: "统计用户消息类型",
                    link: "/appDevelop/OpenAPI/APIList/getMsgStats",
                  },
                  {
                    text: "阅读消息",
                    link: "/appDevelop/OpenAPI/APIList/readMsg",
                  },
                  {
                    text: "删除消息",
                    link: "/appDevelop/OpenAPI/APIList/deleteMsg",
                  },
                  {
                    text: "批量删除消息",
                    link: "/appDevelop/OpenAPI/APIList/batchDeleteMsg",
                  },
                  {
                    text: "查询用户接收推送的消息类型",
                    link: "/appDevelop/OpenAPI/APIList/getMsgPushSetting",
                  },
                  {
                    text: "设置用户接收推送的消息类型",
                    link: "/appDevelop/OpenAPI/APIList/setMsgPushSetting",
                  },
                  {
                    text: "设置设备推送ID和语言信息",
                    link: "/appDevelop/OpenAPI/APIList/setDeviceInfo",
                  },
                  {
                    text: "删除设备推送ID",
                    link: "/appDevelop/OpenAPI/APIList/deleteDeviceInfo",
                  },
                  {
                    text: "纯蓝牙设备绑定",
                    link: "/appDevelop/OpenAPI/APIList/deviceBindingByPureBt",
                  },
                  {
                    text: "使用DK绑定设备",
                    link: "/appDevelop/OpenAPI/APIList/bindDeviceDk",
                  },
                  {
                    text: "使用SN绑定设备",
                    link: "/appDevelop/OpenAPI/APIList/bindDeviceSn",
                  },
                  {
                    text: "Wifi设备绑定",
                    link: "/appDevelop/OpenAPI/APIList/deviceBindingByWifi",
                  },
                  {
                    text: "查询用户是否可以绑定该设备",
                    link: "/appDevelop/OpenAPI/APIList/getDeviceInfoByBinding",
                  },
                  {
                    text: "查询设备信息",
                    link: "/appDevelop/OpenAPI/APIList/deviceInfo",
                  },
                  {
                    text: "查询设备时区",
                    link: "/appDevelop/OpenAPI/APIList/getDeviceTimeZone",
                  },
                  {
                    text: "设置设备时区",
                    link: "/appDevelop/OpenAPI/APIList/setDeviceTimeZone",
                  },
                  {
                    text: "查询产品说明书",
                    link: "/appDevelop/OpenAPI/APIList/getProductManual",
                  },
                  {
                    text: "修改设备信息",
                    link: "/appDevelop/OpenAPI/APIList/dmSetDeviceInfo",
                  },
                  {
                    text: "查询用户的设备列表",
                    link: "/appDevelop/OpenAPI/APIList/userDeviceList",
                  },
                  {
                    text: "使用PK、DK解绑设备",
                    link: "/appDevelop/OpenAPI/APIList/unbundlingDeviceDk",
                  },
                  {
                    text: "分享人设置设备分享信息",
                    link: "/appDevelop/OpenAPI/APIList/shareInfo",
                  },
                  {
                    text: "分享人设置分享可使用时间",
                    link: "/appDevelop/OpenAPI/APIList/setShareTime",
                  },
                  {
                    text: "通过邀请用户进行设备分享",
                    link: "/appDevelop/OpenAPI/APIList/shareByUid",
                  },
                  {
                    text: "分享人取消设备分享",
                    link: "/appDevelop/OpenAPI/APIList/ownerUserUnshareDevice",
                  },
                  {
                    text: "分享人查询设备的被分享人列表",
                    link: "/appDevelop/OpenAPI/APIList/deviceShareUserList",
                  },
                  {
                    text: "被分享人接受分享",
                    link: "/appDevelop/OpenAPI/APIList/shareDevice",
                  },
                  {
                    text: "被分享人取消设备分享",
                    link: "/appDevelop/OpenAPI/APIList/shareUserUnshareDevice",
                  },
                  {
                    text: "被分享人修改分享的设备名称",
                    link: "/appDevelop/OpenAPI/APIList/changeShareDeviceName",
                  },
                  {
                    text: "批量获取纯蓝牙设备重置凭证",
                    link: "/appDevelop/OpenAPI/APIList/batchGetPureBtResetCredentials",
                  },
                  {
                    text: "设置蓝牙最近使用时间",
                    link: "/appDevelop/OpenAPI/APIList/setBtLastUseTime",
                  },
                  {
                    text: "查询网关设备下子设备列表",
                    link: "/appDevelop/OpenAPI/APIList/getGatewayDeviceChildList",
                  },
                  {
                    text: "查询物模型TSL",
                    link: "/appDevelop/OpenAPI/APIList/productTSL",
                  },
                  {
                    text: "批量控制设备",
                    link: "/appDevelop/OpenAPI/APIList/batchControlDevice",
                  },
                  {
                    text: "查询设备业务属性",
                    link: "/appDevelop/OpenAPI/APIList/getDeviceBusinessAttributes",
                  },
                  {
                    text: "获取设备属性图标列表",
                    link: "/appDevelop/OpenAPI/APIList/getPropertyChartList",
                  },
                  {
                    text: "获取设备属性数据列表",
                    link: "/appDevelop/OpenAPI/APIList/getPropertyDataList",
                  },
                  {
                    text: "获取设备属性统计数据",
                    link: "/appDevelop/OpenAPI/APIList/getPropertyStatistics",
                  },
                  {
                    text: "获取设备事件列表",
                    link: "/appDevelop/OpenAPI/APIList/deviceEventList",
                  },
                  {
                    text: "获取设备历史轨迹",
                    link: "/appDevelop/OpenAPI/APIList/getLocationHistory",
                  },
                  {
                    text: "启用/停用家居模式",
                    link: "/appDevelop/OpenAPI/APIList/enabledFamilyMode",
                  },
                  {
                    text: "查询用户家居模式配置",
                    link: "/appDevelop/OpenAPI/APIList/getFamilyModeConfig",
                  },
                  {
                    text: "启用/停用自动切换家庭",
                    link: "/appDevelop/OpenAPI/APIList/enabledAutoSwitch",
                  },
                  {
                    text: "创建家庭",
                    link: "/appDevelop/OpenAPI/APIList/addFamily",
                  },
                  {
                    text: "删除家庭",
                    link: "/appDevelop/OpenAPI/APIList/deleteFamily",
                  },
                  {
                    text: "查询家庭列表",
                    link: "/appDevelop/OpenAPI/APIList/getFamilyList",
                  },
                  {
                    text: "查询当前家庭",
                    link: "/appDevelop/OpenAPI/APIList/getCurrentFamily",
                  },
                  {
                    text: "修改家庭",
                    link: "/appDevelop/OpenAPI/APIList/setFamily",
                  },
                  {
                    text: "查询家庭中设备列表",
                    link: "/appDevelop/OpenAPI/APIList/getFamilyDeviceList",
                  },
                  {
                    text: "设置设备信息",
                    link: "/appDevelop/OpenAPI/APIList/familySetDeviceInfo",
                  },
                  {
                    text: "查询家庭中房间列表",
                    link: "/appDevelop/OpenAPI/APIList/getFamilyRoomList",
                  },
                  {
                    text: "创建房间",
                    link: "/appDevelop/OpenAPI/APIList/addFamilyRoom",
                  },
                  {
                    text: "修改房间",
                    link: "/appDevelop/OpenAPI/APIList/setFamilyRoom",
                  },
                  {
                    text: "设置房间排序",
                    link: "/appDevelop/OpenAPI/APIList/setFamilyRoomSort",
                  },
                  {
                    text: "移入设备到房间",
                    link: "/appDevelop/OpenAPI/APIList/addDeviceInFamilyRoom",
                  },
                  {
                    text: "查询房间中设备列表",
                    link: "/appDevelop/OpenAPI/APIList/getFamilyRoomDeviceList",
                  },
                  {
                    text: "删除房间",
                    link: "/appDevelop/OpenAPI/APIList/deleteFamilyRoom",
                  },
                  {
                    text: "查询常用设备列表",
                    link: "/appDevelop/OpenAPI/APIList/getCommonUsedDeviceList",
                  },
                  {
                    text: "添加常用设备",
                    link: "/appDevelop/OpenAPI/APIList/addCommonUsedDevice",
                  },
                  {
                    text: "移除常用设备",
                    link: "/appDevelop/OpenAPI/APIList/deleteCommonUsedDevice",
                  },
                  {
                    text: "邀请家庭成员",
                    link: "/appDevelop/OpenAPI/APIList/inviteFamilyMember",
                  },
                  {
                    text: "设置家庭成员角色",
                    link: "/appDevelop/OpenAPI/APIList/setFamilyMemberRole",
                  },
                  {
                    text: "修改家庭成员名称",
                    link: "/appDevelop/OpenAPI/APIList/setFamilyMemberName",
                  },
                  {
                    text: "移除家庭成员",
                    link: "/appDevelop/OpenAPI/APIList/deleteFamilyMember",
                  },
                  {
                    text: "查询家庭中的家庭成员列表",
                    link: "/appDevelop/OpenAPI/APIList/getFamilyMemberList",
                  },
                  {
                    text: "查询被邀请列表",
                    link: "/appDevelop/OpenAPI/APIList/getFamilyInviteList",
                  },
                  {
                    text: "家庭邀请成员处理",
                    link: "/appDevelop/OpenAPI/APIList/familyMemberInviteHandle",
                  },
                  {
                    text: "离开家庭",
                    link: "/appDevelop/OpenAPI/APIList/leaveFamily",
                  },
                  {
                    text: "创建场景",
                    link: "/appDevelop/OpenAPI/APIList/sceneCreate",
                  },
                  {
                    text: "测试场景",
                    link: "/appDevelop/OpenAPI/APIList/sceneTest",
                  },
                  {
                    text: "执行场景",
                    link: "/appDevelop/OpenAPI/APIList/sceneExecute",
                  },
                  {
                    text: "查询场景列表",
                    link: "/appDevelop/OpenAPI/APIList/selectSceneList",
                  },
                  {
                    text: "查询场景详情",
                    link: "/appDevelop/OpenAPI/APIList/selectSceneDetail",
                  },
                  {
                    text: "编辑场景",
                    link: "/appDevelop/OpenAPI/APIList/sceneEdit",
                  },
                  {
                    text: "删除场景",
                    link: "/appDevelop/OpenAPI/APIList/sceneDelete",
                  },
                  {
                    text: "批量添加常用场景",
                    link: "/appDevelop/OpenAPI/APIList/batchAddCommonScene",
                  },
                  {
                    text: "查询常用场景",
                    link: "/appDevelop/OpenAPI/APIList/selectCommonSceneList",
                  },
                  {
                    text: "批量移除常用场景",
                    link: "/appDevelop/OpenAPI/APIList/batchDeleteCommonScene",
                  },
                  {
                    text: "查询场景日志列表",
                    link: "/appDevelop/OpenAPI/APIList/selectSceneLogList",
                  },
                  {
                    text: "查询场景日志详情",
                    link: "/appDevelop/OpenAPI/APIList/selectSceneLogDetail",
                  },
                  {
                    text: "删除日志",
                    link: "/appDevelop/OpenAPI/APIList/deleteSceneLog",
                  },
                  {
                    text: "查询联动配置",
                    link: "/appDevelop/OpenAPI/APIList/automationPublished",
                  },
                  {
                    text: "创建自动化",
                    link: "/appDevelop/OpenAPI/APIList/automationSave",
                  },
                  {
                    text: "查询自动化列表",
                    link: "/appDevelop/OpenAPI/APIList/automationList",
                  },
                  {
                    text: "查询自动化详情",
                    link: "/appDevelop/OpenAPI/APIList/automationDetail",
                  },
                  {
                    text: "启停自动化",
                    link: "/appDevelop/OpenAPI/APIList/automationStatus",
                  },
                  {
                    text: "测试自动化",
                    link: "/appDevelop/OpenAPI/APIList/automationTest",
                  },
                  {
                    text: "查询自动化测试结果",
                    link: "/appDevelop/OpenAPI/APIList/automationGetTestAutomation",
                  },
                  {
                    text: "编辑自动化",
                    link: "/appDevelop/OpenAPI/APIList/automationEdit",
                  },
                  {
                    text: "删除自动化",
                    link: "/appDevelop/OpenAPI/APIList/automationDelete",
                  },
                  {
                    text: "查询自动化日志列表",
                    link: "/appDevelop/OpenAPI/APIList/automationLogList",
                  },
                  {
                    text: "查询自动化日志详情",
                    link: "/appDevelop/OpenAPI/APIList/automationLogDetail",
                  },
                  {
                    text: "删除自动化",
                    link: "/appDevelop/OpenAPI/APIList/automationLogClear",
                  },
                  {
                    text: "创建定时任务",
                    link: "/appDevelop/OpenAPI/APIList/addCornJob",
                  },
                  {
                    text: "查询定时任务列表",
                    link: "/appDevelop/OpenAPI/APIList/getCronJobList",
                  },
                  {
                    text: "查询定时任务详情",
                    link: "/appDevelop/OpenAPI/APIList/getCronJobInfo",
                  },
                  {
                    text: "修改定时任务",
                    link: "/appDevelop/OpenAPI/APIList/setCronJob",
                  },
                  {
                    text: "删除定时任务",
                    link: "/appDevelop/OpenAPI/APIList/batchDeleteCronJob",
                  },
                ],
              },
            ],
          },
          { text: "错误码集合", link: "/appDevelop/errorCode" },
          { text: "App管理", link: "/appDevelop/OpenAPI/AppManagement" },
          {
            text: "个性化配置",
            link: "/appDevelop/OpenAPI/AppPersonalization",
          },
        ],
      },
      {
        text: "SaaS应用开发",
        collapsed: true,
        items: [
          { text: "SaaS数据通信概述", link: "/saasDevelop/CommunicatOverview" },
          {
            text: "OpenAPI使用指导",
            collapsed: true,
            items: [
              {
                text: "OpenAPI接入说明",
                link: "/saasDevelop/OpenAPI/API_accessInstruction",
              },
              {
                text: "OpenAPI SDK使用指导",
                link: "/saasDevelop/OpenAPI/SDK_AccessInstruction",
              },
              {
                text: "OpenAPI列表",
                link: "/saasDevelop/OpenAPI/APIList",
                collapsed: true,
                items: [
                  //{ text: "获取token", link: "" },
                  {
                    text: "刷新token",
                    link: "/saasDevelop/OpenAPI/APIList/refreshToken",
                  },
                  {
                    text: "查询产品列表",
                    link: "/saasDevelop/OpenAPI/APIList/productList",
                  },
                  {
                    text: "查询产品详情",
                    link: "/saasDevelop/OpenAPI/APIList/productDetail",
                  },
                  {
                    text: "查询产品最新物模型",
                    link: "/saasDevelop/OpenAPI/APIList/productTSL",
                  },
                  {
                    text: "查询产品下设备列表",
                    link: "/saasDevelop/OpenAPI/APIList/deviceList",
                  },
                  {
                    text: "查询设备详情",
                    link: "/saasDevelop/OpenAPI/APIList/deviceDetail",
                  },
                  {
                    text: "查询设备资源",
                    link: "/saasDevelop/OpenAPI/APIList/deviceResource",
                  },
                  //{ text: "添加设备（单个）", link: "/saasDevelop/OpenAPI/APIList/deviceCreate" },
                  //{ text: "添加设备（批量）", link: "/saasDevelop/OpenAPI/APIList/deviceCreateBatch" },
                  {
                    text: "修改设备信息（单个）",
                    link: "/saasDevelop/OpenAPI/APIList/deviceUpdate",
                  },
                  {
                    text: "修改设备信息（批量）",
                    link: "/saasDevelop/OpenAPI/APIList/deviceUpdateBatch",
                  },
                  {
                    text: "删除设备",
                    link: "/saasDevelop/OpenAPI/APIList/deviceDelete",
                  },
                  {
                    text: "查询网关下子设备",
                    link: "/saasDevelop/OpenAPI/APIList/gatewaySubList",
                  },
                  {
                    text: "查询子设备所属网关",
                    link: "/saasDevelop/OpenAPI/APIList/gatewayGetProductByChildDevice",
                  },
                  {
                    text: "解除子设备与网关关系",
                    link: "/saasDevelop/OpenAPI/APIList/gatewayUnbind",
                  },
                  {
                    text: "读取设备物模型数据",
                    link: "/saasDevelop/OpenAPI/APIList/deviceReadData",
                  },
                  {
                    text: "发送下行物模型属性数据",
                    link: "/saasDevelop/OpenAPI/APIList/deviceWriteData",
                  },
                  {
                    text: "发送下行物模型服务数据",
                    link: "/saasDevelop/OpenAPI/APIList/deviceSendServiceData",
                  },
                  {
                    text: "发送下行透传数据",
                    link: "/saasDevelop/OpenAPI/APIList/deviceSendRawData",
                  },
                  {
                    text: "查询设备最新定位数据",
                    link: "/saasDevelop/OpenAPI/APIList/deviceGetLocation",
                  },
                  {
                    text: "查询设备历史上下行数据日志",
                    link: "/saasDevelop/OpenAPI/APIList/deviceDataHistory",
                  },
                  {
                    text: "查询设备历史事件日志",
                    link: "/saasDevelop/OpenAPI/APIList/deviceEventHistory",
                  },
                  {
                    text: "创建队列",
                    link: "/saasDevelop/OpenAPI/APIList/queueCreate",
                  },
                  {
                    text: "删除队列",
                    link: "/saasDevelop/OpenAPI/APIList/queueDelete",
                  },
                  {
                    text: "清理队列",
                    link: "/saasDevelop/OpenAPI/APIList/queueClear",
                  },
                  {
                    text: "查询队列列表",
                    link: "/saasDevelop/OpenAPI/APIList/queueList",
                  },
                  {
                    text: "查询队列详情",
                    link: "/saasDevelop/OpenAPI/APIList/queueDetail",
                  },
                  {
                    text: "创建产品/设备订阅",
                    link: "/saasDevelop/OpenAPI/APIList/subscribeCreatByPKDK",
                  },
                  {
                    text: "创建SaaS订阅",
                    link: "/saasDevelop/OpenAPI/APIList/subscribeCreatBySaaS",
                  },
                  {
                    text: "创建终端用户订阅",
                    link: "/saasDevelop/OpenAPI/APIList/subscribeCreatByEnduser",
                  },
                  {
                    text: "删除订阅",
                    link: "/saasDevelop/OpenAPI/APIList/subscribeDelete",
                  },
                  {
                    text: "修改订阅",
                    link: "/saasDevelop/OpenAPI/APIList/subscribeUpdate",
                  },
                  {
                    text: "查询订阅列表",
                    link: "/saasDevelop/OpenAPI/APIList/subscribeList",
                  },
                  {
                    text: "查询订阅详情",
                    link: "/saasDevelop/OpenAPI/APIList/subscribeDetail",
                  },
                  {
                    text: "启用订阅",
                    link: "/saasDevelop/OpenAPI/APIList/subscribeStart",
                  },
                  {
                    text: "停止订阅",
                    link: "/saasDevelop/OpenAPI/APIList/subscribeStop",
                  },
                  {
                    text: "查询用户域列表",
                    link: "/saasDevelop/OpenAPI/APIList/enduserDomainList",
                  },
                  {
                    text: "查询用户域中注册的用户列表",
                    link: "/saasDevelop/OpenAPI/APIList/enduserDomainUserList",
                  },
                  {
                    text: "查询用户信息",
                    link: "/saasDevelop/OpenAPI/APIList/enduserUserInfo",
                  },
                  {
                    text: "设置用户状态",
                    link: "/saasDevelop/OpenAPI/APIList/enduserSetUserStatus",
                  },
                  {
                    text: "查询用户下的设备列表（含被分享）",
                    link: "/saasDevelop/OpenAPI/APIList/enduserDeviceList",
                  },
                  {
                    text: "查询已绑定设备的用户列表",
                    link: "/saasDevelop/OpenAPI/APIList/enduserGetUserByDevice",
                  },
                  {
                    text: "验证设备绑定码有效性",
                    link: "/saasDevelop/OpenAPI/APIList/enduserVerifyBindingCode",
                  },
                  {
                    text: "查询规则列表",
                    link: "/saasDevelop/OpenAPI/APIList/ruleList",
                  },
                  {
                    text: "查询规则详情",
                    link: "/saasDevelop/OpenAPI/APIList/ruleDetail",
                  },
                  {
                    text: "创建规则",
                    link: "/saasDevelop/OpenAPI/APIList/ruleCreate",
                  },
                  {
                    text: "编辑规则",
                    link: "/saasDevelop/OpenAPI/APIList/ruleUpdate",
                  },
                  {
                    text: "删除规则",
                    link: "/saasDevelop/OpenAPI/APIList/ruleDelete",
                  },
                  {
                    text: "启用/停用规则",
                    link: "/saasDevelop/OpenAPI/APIList/ruleSetState",
                  },
                  {
                    text: "查询条件运算符",
                    link: "/saasDevelop/OpenAPI/APIList/ruleOperators",
                  },
                ],
              },
            ],
          },
          {
            text: "消息订阅使用指导",
            collapsed: true,
            items: [
              {
                text: "AMQP消息订阅概述",
                link: "/saasDevelop/AMQPSubscription/subscription/AMQPinfo",
              },
              {
                text: "AMQP客户端接入说明",
                link: "/saasDevelop/AMQPSubscription/subscription/AMQPtoC",
              },
              {
                text: "AMQP SDK接入示例",
                link: "/saasDevelop/AMQPSubscription/subscription/AMQPSDK",
              },
              {
                text: "数据格式定义",
                link: "/saasDevelop/AMQPSubscription/subscription/dataFormatDefinition",
              },
            ],
          },
          { text: "错误码集合", link: "/saasDevelop/errorCode" },
          //{ text: "SaaS管理", link: "/saasDevelop/SaaSManagement/SaaSManage" },
          {
            text: "SaaS管理",
            collapsed: true,
            items: [
              {
                text: "创建应用",
                link: "/saasDevelop/SaaSManagement/SaaSManage",
              },
              {
                text: "服务市场",
                link: "/saasDevelop/SaaSManagement/ServiceMarket",
              },
              {
                text: "消息订阅",
                link: "/saasDevelop/SaaSManagement/NewsSubscription",
              },
            ],
          },
        ],
      },
      {
        text: "行业方案",
        collapsed: true,
        items: [
          { text: "行业解决方案概述", link: "industryApplication/Overview" },
          { text: "行业解决方案管理", link: "industryApplication/solution" },
        ],
      },
      {
        text: "量产说明",
        collapsed: true,
        items: [
          { text: "量产流程", link: "/massProduct/process" },
          { text: "设备二维码", link: "/massProduct/QRcode" },
        ],
      },
      {
        text: "工具",
        collapsed: true,
        items: [
          {
            text: "调试工具",
            collapsed: true,
            items: [
              {
                text: "MCU仿真工具",
                collapsed: true,
                items: [
                  {
                    text: "概述",
                    link: "/tool/QthTools-debug/QthTools-MCU_Simulator/summary",
                  },
                  {
                    text: "用户说明",
                    link: "/tool/QthTools-debug/QthTools-MCU_Simulator/UserManual",
                  },
                ],
              },
            ],
          },
          {
            text: "开发工具",
            collapsed: true,
            items: [
              {
                text: "DTU-Modbus配置工具",
                collapsed: true,
                items: [
                  {
                    text: "概述",
                    link: "/tool/QthTools-develop/QthTools-DTU_Modbus/summary",
                  },
                  {
                    text: "用户说明",
                    link: "/tool/QthTools-develop/QthTools-DTU_Modbus/UserManual",
                  },
                ],
              },
            ],
          },
          {
            text: "生产工具",
            collapsed: true,
            items: [
              {
                text: "SN&IMEI绑定工具",
                collapsed: true,
                items: [
                  {
                    text: "概述",
                    link: "/tool/QthTools-factory/QthTools-SN2IMEI_Binding/summary",
                  },
                  {
                    text: "用户说明",
                    link: "/tool/QthTools-factory/QthTools-SN2IMEI_Binding/UserManual",
                  },
                ],
              },
              {
                text: "移远设备密钥烧录工具",
                collapsed: true,
                items: [
                  {
                    text: "概述",
                    link: "/tool/QthTools-factory/QthTools-DeviceSecret_Program/summary",
                  },
                  {
                    text: "用户说明",
                    link: "/tool/QthTools-factory/QthTools-DeviceSecret_Program/UserManual",
                  },
                ],
              },
              {
                text: "QMultiDownload烧录工具",
                collapsed: true,
                items: [
                  {
                    text: "概述",
                    link: "/tool/QthTools-factory/QthTools-QMultiDownload/summary",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        text: "常见问题",
        collapsed: true,
        items: [
          { text: "产品使用问题", link: "/problem/page-01" },
          { text: "商务咨询问题", link: "/problem/page-02" },
          { text: "业务问题", link: "/problem/page-03" },
        ],
      },
      { text: "联系我们", link: "/contactUs/" },
      {
        text: "服务条款",
        collapsed: true,
        items: [
          { text: "服务协议", link: "/agreement/service" },
          { text: "隐私政策", link: "/agreement/privacy" },
          {
            text: "数据委托处理协议",
            link: "/agreement/data-processing-agreement",
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: {
          svg: `<svg id="Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 153.18 138.38"><defs><style>.cls-1{fill:#ea0029;}.cls-2{fill:#212721;}</style></defs><path class="cls-1" d="M125.41,97.65c-47.74,16.24-53-17-82.85-8.86C87.22,59.92,88.52,105.45,125.41,97.65Z"/><path class="cls-2" d="M60.27,75.16,71,53.82l.34-.68c1.83-3.7,4.13-5.65,8.43-5.65h8.1c3.58,0,4.38,2.4,2.93,5.29L79.33,75.88c5.17,1.79,9.58,4.7,13.86,7.64a12.18,12.18,0,0,0,3-3.87L106.8,58.54c4.22-8.43-.48-15.9-10.8-15.9H63A22.22,22.22,0,0,0,42.77,54.91L35.31,69.85C31.9,76.67,32.76,83,38.62,85.39l1.23-.8C47.27,79.79,54,76.67,60.27,75.16Z"/></svg>`,
        },
        link: "https://aiot.quectel.com/",
      },
    ],

    footer: {
      copyright: `版权所有 ©2023 上海移远通信技术股份有限公司 版权所有`,
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "首页",
      link: "/homepage/",
      activeMatch: "/homepage/",
    },
    {
      text: "控制台",
      link: "https://iot.quectelcn.com/project/list",
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
