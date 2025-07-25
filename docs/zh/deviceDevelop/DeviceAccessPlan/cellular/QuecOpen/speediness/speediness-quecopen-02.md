# SDK说明

## __一、概念说明__

__QuecOpen__ 主要是一种以模块作为 __主处理器__ 的应用方式，亦可以作为 __从模块__ 。采用 __QuecOpen__ 解决方案，可以 __简化开发者对物联网应用的开发流程__，__精简硬件结构设计__，从而 __降低产品成本__。__QuecOpen__ 接入方案的 __SDK__ 采用 模块化设计 ，分离核心协议服务 与 硬件抽象层，并提供灵活的配置选项和多种编译方式，适用于不同设备的开发平台和使用环境。


<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-01.png">![img](/zh/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-01.png)</a>


## __二、QuecThing SDK简介__
移远通信QuecThing SDK对模块适配层提供统一API接口定义，在芯片基础 SDK 上进行了二次抽象，屏蔽了复杂的模组技术细节，方便您快速入门。开发者只需根据模块能力实现具体业务功能。完成编译烧录后，即可在模块上运行QuecThing SDK并实现开发者中心接入，完成设备智能化。同时为加快开发效率，QuecThing SDK内置并提供了统一的通信协议和API接口供模块APP层调用，开发者无需过多关注模块型号即可直接使用并开发具体业务功能。


## __三、功能逻辑结构图__

<a data-fancybox title="img" href="/zh/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-04.png">![img](/zh/deviceDevelop/develop/speediness/resource/QuecOpen/Speediness-QuecOpen-04.png)</a>
